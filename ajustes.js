// Applies the visual settings before the first paint, so a dark page doesn't flash white. It's the only code that
// writes the <html> attributes and the color variables. Loaded as a plain script: `script-src 'self'` allows no inline.
// The lists and the color math are repeated in src/lib/ajustes.js, and src/lib/ajustes.test.js checks both agree.
(function () {
  'use strict';

  var CLAVE = 'cl.ajustes';
  var LISTAS = {
    estilo: ['original', 'hoja', 'profesional', 'batman', 'plano', 'pizarron'],
    tema: ['sistema', 'claro', 'oscuro', 'rosa', 'bosque', 'cafe', 'lavanda', 'infierno', 'glaciar', 'cosmico'],
    contraste: ['normal', 'alto'],
    daltonismo: ['ninguno', 'rojo-verde', 'azul-amarillo'],
    letra: ['normal', 'grande', 'mas-grande', 'enorme'],
    movimiento: ['sistema', 'reducido', 'ninguno'],
    pdf: ['claro', 'sepia', 'oscuro', 'tema'],
  };
  // Where the menu goes (src/lib/ajustes.js): written before the first paint, so the column on the left doesn't jump in.
  var POSICIONES_DEL_MENU = ['arriba', 'izquierda'];
  // Consultron's chat (src/lib/ajustes.js, APARIENCIA_CONSULTRON): each one as `data-consultron-<what>`.
  var CONSULTRON = {
    consultronLetra: ['normal', 'chica', 'grande'],
    consultronForma: ['globos', 'charla', 'documento', 'compacta'],
    consultronLado: ['derecha', 'izquierda'],
  };
  // The letter and the size of the code (src/lib/ajustes.js, LETRAS_DE_CODIGO and LAB_TAMANO): the system's, with nothing
  // written, is the one of laboratorio.css.
  var LETRA_DEL_SISTEMA = "ui-monospace, 'Cascadia Mono', 'Cascadia Code', 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace";
  var LETRAS_DE_CODIGO = {
    sistema: LETRA_DEL_SISTEMA,
    'jetbrains-mono': "'JetBrains Mono', " + LETRA_DEL_SISTEMA,
    'fira-code': "'Fira Code', " + LETRA_DEL_SISTEMA,
    'source-code-pro': "'Source Code Pro', " + LETRA_DEL_SISTEMA,
    atkinson: "'Atkinson Hyperlegible Mono', " + LETRA_DEL_SISTEMA,
  };
  var TAMANO = { min: 12, max: 22, porDefecto: 15 };
  // The kinds of code with a color of their own (src/lib/ajustes.js, COLORES_DEL_CODIGO).
  var COLORES_DEL_CODIGO = ['clave', 'variable', 'funcion', 'tipo', 'texto', 'numero', 'comentario'];
  // The light pages to go back to from the dark ones, and how white the ink of the dark ones is (see src/lib/ajustes.js).
  var PDF_CLAROS = ['claro', 'sepia'];
  var BRILLO = { min: 0.8, max: 1, porDefecto: 0.92 };
  var ES_COLOR = /^#[0-9a-f]{6}$/i;
  var BLANCO = '#ffffff';
  var OSCURO = '#0f1c28';
  var BARRA = { claro: '#17324d', oscuro: '#3578bd', rosa: '#c2306e', bosque: '#17805a', cafe: '#b8531a', lavanda: '#5b3fb0', 'lavanda-oscuro': '#7456d0', infierno: '#c4320a', glaciar: '#0e7490', cosmico: '#7c3aed' };
  // The palettes of tokens.css: each one is a theme (the one `data-tema` says) with its own colors (`data-paleta`).
  var PALETAS = { rosa: 'oscuro', bosque: 'oscuro', cafe: 'oscuro', lavanda: 'claro', infierno: 'oscuro', glaciar: 'oscuro', cosmico: 'oscuro' };
  // The header of these styles doesn't take the theme's action color: the browser's bar takes the header's own. A header
  // color the student chose paints every header (`data-cabecera`), and the bar with it.
  var BARRA_DEL_ESTILO = { hoja: { claro: '#fcfdfe', oscuro: '#171c27' }, profesional: { claro: '#ffffff', oscuro: '#111a30' }, batman: { oscuro: '#141519' }, plano: { claro: '#ebe5d1', oscuro: '#0a2647' }, pizarron: { claro: '#c9cfd5', oscuro: '#7f5f3f' } };
  // The same with a palette, where it paints the header: the page's background (Hoja), the first color of its gradient
  // (Profesional) and the title block (Plano). Batman and Pizarrón keep theirs. Lavanda in an always-dark style is its dark one.
  var BARRA_PALETA = {
    rosa: { hoja: '#1a1022', profesional: '#2d1a3a', plano: '#120a19' },
    bosque: { hoja: '#0b1510', profesional: '#16291f', plano: '#06100b' },
    cafe: { hoja: '#1e140e', profesional: '#34231a', plano: '#140c07' },
    lavanda: { hoja: '#f4f0fb', profesional: '#ffffff', plano: '#ebe5f7', pizarron: '#cfc7e2' },
    'lavanda-oscuro': { hoja: '#17121f', profesional: '#2a2040' },
    infierno: { hoja: '#170806', profesional: '#2c120b', plano: '#100403' },
    glaciar: { hoja: '#07121a', profesional: '#12232f', plano: '#040c11' },
    cosmico: { hoja: '#0b0717', profesional: '#22163f', plano: '#07040f' },
  };
  var SIEMPRE_OSCUROS = ['batman'];
  // The quality of the strong version's sky (src/lib/ajustes.js, CALIDADES_DEL_FONDO). Without one, «media».
  var CALIDADES_DEL_FONDO = ['baja', 'media', 'alta', 'ultra'];
  var calidadDelFondo = function (datos) {
    return CALIDADES_DEL_FONDO.indexOf(datos.fondoCalidad) >= 0 ? datos.fondoCalidad : 'media';
  };
  // The background's filters (src/lib/ajustes.js, FILTROS_DEL_FONDO; styles/filtros.css applies them), with or without
  // the strong version: the colors, a tone and a blur, together. The blur goes by its own variable: on a phone it's half.
  var FILTROS_DEL_FONDO = ['ninguno', 'grises', 'sepia', 'vivo', 'suave'];
  var enPasos = function (valor, max, inicial) {
    return typeof valor === 'number' && isFinite(valor) ? Math.min(max, Math.max(0, Math.round(valor / 5) * 5)) : inicial;
  };
  var r = function (x) {
    return Math.round(x * 100) / 100;
  };
  var filtroDelFondo = function (datos) {
    var filtro = entre(FILTROS_DEL_FONDO, datos.fondoFiltro);
    var n = enPasos(datos.fondoIntensidad, 100, 60) / 100;
    var tono = enPasos(datos.fondoTono, 355, 0);
    var desenfoque = enPasos(datos.fondoDesenfoque, 100, 0);
    var partes = [];
    if (filtro !== 'ninguno' && n > 0) {
      partes.push({
        grises: 'grayscale(' + n + ')',
        sepia: 'sepia(' + n + ')',
        vivo: 'saturate(' + r(1 + n) + ') contrast(' + r(1 + n * 0.15) + ')',
        suave: 'saturate(' + r(1 - n * 0.7) + ') contrast(' + r(1 - n * 0.35) + ')',
      }[filtro]);
    }
    // A gray turned is still gray, but a grayscale under 100 % keeps some color: with it, the tone doesn't count (as
    // Configuración says).
    if (tono > 0 && filtro !== 'grises') partes.push('hue-rotate(' + tono + 'deg)');
    if (desenfoque > 0) partes.push('blur(var(--fondo-desenfoque))');
    return { css: partes.length ? partes.join(' ') : null, desenfoque: desenfoque > 0 ? r(desenfoque * 0.16) + 'px' : null };
  };
  var CAMBIA_AL_PASAR = 0.18;

  var canales = function (color) {
    return [1, 3, 5].map(function (i) {
      return parseInt(color.slice(i, i + 2), 16);
    });
  };

  var luminancia = function (color) {
    var c = canales(color).map(function (v) {
      var s = v / 255;
      return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  };

  var contraste = function (a, b) {
    var x = luminancia(a);
    var y = luminancia(b);
    return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
  };

  var textoSobre = function (color) {
    return contraste(color, BLANCO) >= contraste(color, OSCURO) ? BLANCO : OSCURO;
  };

  var mezclar = function (color, otro, parte) {
    var b = canales(otro);
    return (
      '#' +
      canales(color)
        .map(function (v, i) {
          return Math.round(v + (b[i] - v) * parte)
            .toString(16)
            .padStart(2, '0');
        })
        .join('')
    );
  };

  // Moves away from the text color, so hovering never makes the label harder to read. At the extremes there's no room left.
  var alPasar = function (color) {
    var l = luminancia(color);
    var hacia = textoSobre(color) === BLANCO ? '#000000' : BLANCO;
    if (l < 0.02) hacia = BLANCO;
    if (l > 0.9) hacia = '#000000';
    return mezclar(color, hacia, CAMBIA_AL_PASAR);
  };

  // «Según la hora» (src/lib/ajustes.js, CLAVES_DEL_DISENO and esDeNoche): the design of the hour over the rest.
  var CLAVES_DEL_DISENO = ['estilo', 'tema', 'contraste', 'accion', 'resaltador', 'cabecera', 'bandeja', 'bordes', 'bordesDelEstilo', 'potente', 'fondoMueve', 'fondoCalidad', 'fondoFiltro', 'fondoIntensidad', 'fondoTono', 'fondoDesenfoque', 'fogonazo', 'temaColor'];
  var ES_HORA = /^([01]\d|2[0-3]):[0-5]\d$/;
  var enMinutos = function (hora) {
    return Number(hora.slice(0, 2)) * 60 + Number(hora.slice(3));
  };
  var esDeNoche = function (ahora, segun) {
    var m = ahora.getHours() * 60 + ahora.getMinutes();
    var d = enMinutos(ES_HORA.test(segun.desde) ? segun.desde : '20:00');
    var h = enMinutos(ES_HORA.test(segun.hasta) ? segun.hasta : '07:00');
    if (d === h) return false;
    return d < h ? m >= d && m < h : m >= d || m < h;
  };
  var conElDeLaHora = function (datos) {
    var segun = datos.segunLaHora;
    if (!segun || typeof segun !== 'object' || !segun.dia || !segun.noche) return datos;
    var diseno = esDeNoche(new Date(), segun) ? segun.noche : segun.dia;
    if (!diseno || typeof diseno !== 'object') return datos;
    CLAVES_DEL_DISENO.forEach(function (clave) {
      if (clave in diseno) datos[clave] = diseno[clave];
    });
    return datos;
  };

  var leer = function () {
    try {
      var datos = JSON.parse(localStorage.getItem(CLAVE));
      return datos && typeof datos === 'object' ? conElDeLaHora(datos) : {};
    } catch {
      return {};
    }
  };

  var entre = function (lista, valor) {
    return lista.indexOf(valor) >= 0 ? valor : lista[0];
  };

  var colorValido = function (valor) {
    return typeof valor === 'string' && ES_COLOR.test(valor) ? valor.toLowerCase() : null;
  };

  var brilloValido = function (valor) {
    if (typeof valor !== 'number' || !isFinite(valor)) return BRILLO.porDefecto;
    return Math.round(Math.min(BRILLO.max, Math.max(BRILLO.min, valor)) * 100) / 100;
  };

  var esOscuroElSistema = function () {
    return Boolean(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  };

  var ponerVariables = function (estilo, valores) {
    Object.keys(valores).forEach(function (nombre) {
      if (valores[nombre]) estilo.setProperty(nombre, valores[nombre]);
      else estilo.removeProperty(nombre);
    });
  };

  // The palette the student chose. Every style takes it: the style gives the shape, the palette the colors (tokens.css).
  var paletaDe = function (datos) {
    var elegido = entre(LISTAS.tema, datos.tema);
    return PALETAS[elegido] ? elegido : null;
  };

  var temaDe = function (datos, estilo) {
    var tema = entre(LISTAS.tema, datos.tema);
    // A palette is the light or the dark theme with other colors: everything that reads `data-tema` keeps working.
    tema = PALETAS[tema] || tema;
    if (tema === 'sistema') tema = esOscuroElSistema() ? 'oscuro' : 'claro';
    // These styles are dark whatever the theme says.
    return SIEMPRE_OSCUROS.indexOf(estilo) >= 0 ? 'oscuro' : tema;
  };

  var poner = function (datos) {
    var raiz = document.documentElement;
    var estilo = entre(LISTAS.estilo, datos.estilo);
    var tema = temaDe(datos, estilo);
    var paleta = paletaDe(datos);
    // «Sensible a la luz» (src/lib/ajustes.js): softer whites and no flashes (styles/luz.css), and everything still, as
    // «Sin animaciones», whatever Movimiento says.
    var luz = datos.luz === true;
    raiz.setAttribute('data-estilo', estilo);
    raiz.setAttribute('data-bordes', datos.bordes === true ? 'si' : 'no');
    // Batman's yellow beam on each screen (animaciones.css): on unless turned off.
    raiz.setAttribute('data-fogonazo', datos.fogonazo === false ? 'no' : 'si');
    // The theme's strong version (src/lib/ajustes.js): its own sky behind the page, in estilos.css.
    raiz.setAttribute('data-potente', datos.potente === true ? 'si' : 'no');
    // Its movement and its high quality, only with the strong version on (src/lib/fondo/fondo.js draws them).
    raiz.setAttribute('data-fondo-mueve', datos.potente === true && datos.fondoMueve === true ? 'si' : 'no');
    raiz.setAttribute('data-fondo-calidad', datos.potente === true ? calidadDelFondo(datos) : 'baja');
    var filtro = filtroDelFondo(datos);
    raiz.setAttribute('data-fondo-filtro', filtro.css ? 'si' : 'no');
    raiz.setAttribute('data-fondo-desenfoque', filtro.desenfoque ? 'si' : 'no');
    ponerVariables(raiz.style, { '--fondo-filtro': filtro.css, '--fondo-desenfoque-px': filtro.desenfoque });
    raiz.setAttribute('data-tema', tema);
    // Everything that reads `data-tema` keeps working: a palette is the light or the dark theme with other colors.
    if (paleta) raiz.setAttribute('data-paleta', paleta);
    else raiz.removeAttribute('data-paleta');
    raiz.setAttribute('data-contraste', entre(LISTAS.contraste, datos.contraste));
    raiz.setAttribute('data-daltonismo', entre(LISTAS.daltonismo, datos.daltonismo));
    raiz.setAttribute('data-letra', entre(LISTAS.letra, datos.letra));
    raiz.setAttribute('data-luz', luz ? 'si' : 'no');
    raiz.setAttribute('data-movimiento', luz ? 'ninguno' : entre(LISTAS.movimiento, datos.movimiento));
    var menu = datos.menu && typeof datos.menu === 'object' ? datos.menu : {};
    raiz.setAttribute('data-menu-lado', entre(POSICIONES_DEL_MENU, menu.posicion));
    var pdf = entre(LISTAS.pdf, datos.pdf);
    raiz.setAttribute('data-pdf', pdf);
    raiz.setAttribute('data-pdf-claro', PDF_CLAROS.indexOf(pdf) >= 0 ? pdf : entre(PDF_CLAROS, datos.pdfClaro));

    var accion = colorValido(datos.accion);
    var resaltador = colorValido(datos.resaltador);
    var cabecera = colorValido(datos.cabecera);
    var bandeja = colorValido(datos.bandeja);
    ponerVariables(raiz.style, {
      '--accion': accion,
      '--accion-hover': accion && alPasar(accion),
      // Where the gradient of the professional style ends: away from the text color, like hovering.
      '--accion-fin': accion && alPasar(accion),
      '--accion-texto': accion && textoSobre(accion),
      '--resaltador': resaltador,
      '--resaltador-texto': resaltador && textoSobre(resaltador),
      '--pdf-brillo': String(brilloValido(datos.pdfBrillo)),
    });
    // The header's own color, apart from the buttons': it paints the header of any style (estilos.css). Without it, the
    // Original's header is the main color and the other styles keep theirs.
    ponerVariables(raiz.style, {
      '--cabecera-elegida': cabecera,
      '--cabecera-elegida-hover': cabecera && alPasar(cabecera),
      '--cabecera-elegida-texto': cabecera && textoSobre(cabecera),
      // The line under the header in Pizarrón (estilos.css).
      '--bandeja-elegida': bandeja,
    });
    // The theme's own color, only with the strong version: the glow of borders and header and where titles fade to
    // (estilos.css, through --brillo as «r g b» and --titulo-fin).
    var temaColor = datos.potente === true ? colorValido(datos.temaColor) : null;
    ponerVariables(raiz.style, {
      '--brillo': temaColor && [1, 3, 5].map(function (i) { return parseInt(temaColor.slice(i, i + 2), 16); }).join(' '),
      '--titulo-fin': temaColor,
    });
    if (cabecera) raiz.setAttribute('data-cabecera', 'propia');
    else raiz.removeAttribute('data-cabecera');

    Object.keys(CONSULTRON).forEach(function (clave) {
      raiz.setAttribute('data-consultron-' + clave.slice(10).toLowerCase(), entre(CONSULTRON[clave], datos[clave]));
    });
    // Its own color, in place of the main one inside Consultron (consultron.css), with the text that reads on it.
    var colorConsultron = colorValido(datos.consultronColor);
    raiz.setAttribute('data-consultron-color', colorConsultron ? 'propio' : 'no');
    ponerVariables(raiz.style, {
      '--consultron-accion': colorConsultron,
      '--consultron-accion-hover': colorConsultron && alPasar(colorConsultron),
      '--consultron-accion-texto': colorConsultron && textoSobre(colorConsultron),
    });

    // The code: its letter (only Fira Code joins signs), its size and the row of the sheet, which grows with it.
    var letra = Object.prototype.hasOwnProperty.call(LETRAS_DE_CODIGO, datos.labLetra) && datos.labLetra !== 'sistema' ? datos.labLetra : null;
    var tamano = typeof datos.labTamano === 'number' && isFinite(datos.labTamano) ? Math.round(Math.min(TAMANO.max, Math.max(TAMANO.min, datos.labTamano))) : TAMANO.porDefecto;
    ponerVariables(raiz.style, {
      '--codigo-letra': letra && LETRAS_DE_CODIGO[letra],
      '--codigo-ligaduras': letra === 'fira-code' ? 'normal' : null,
      '--codigo-tamano': tamano !== TAMANO.porDefecto ? tamano + 'px' : null,
      '--codigo-alto': tamano > 16 ? Math.ceil((tamano * 1.5) / 2) * 2 + 'px' : null,
    });

    // The code's colors the student chose (src/lib/ajustes.js, COLORES_DEL_CODIGO), over the theme's (styles/codigo.css).
    var colores = datos.labColores && typeof datos.labColores === 'object' ? datos.labColores : {};
    var delCodigo = {};
    COLORES_DEL_CODIGO.forEach(function (clave) {
      delCodigo['--codigo-' + clave] = colorValido(colores[clave]);
    });
    ponerVariables(raiz.style, delCodigo);

    // index.html has one for the light system and one for the dark: both get the theme the student sees.
    var barras = document.querySelectorAll('meta[name="theme-color"]');
    var clave = paleta === 'lavanda' && tema === 'oscuro' ? 'lavanda-oscuro' : paleta;
    var propia = BARRA_DEL_ESTILO[estilo] ? BARRA_DEL_ESTILO[estilo][tema] : null;
    if (clave && BARRA_PALETA[clave][estilo]) propia = BARRA_PALETA[clave][estilo];
    var barra = cabecera || propia || accion || BARRA[clave || tema];
    for (var i = 0; i < barras.length; i++) barras[i].setAttribute('content', barra);
  };

  // With «Sensible a la luz», a change of light or dark (the theme, a style, the contrast, or the mode itself) fades over
  // half a second instead of switching at once: the browser crossfades the page as it was and as it is (`data-fundido`,
  // styles/luz.css). Never on the first paint, nor in a tab out of sight, nor where the browser can't.
  var cambiaLaLuz = function (datos) {
    var raiz = document.documentElement;
    if (!raiz.hasAttribute('data-tema')) return false;
    var antes = raiz.getAttribute('data-luz') === 'si';
    if (!antes && datos.luz !== true) return false;
    var estilo = entre(LISTAS.estilo, datos.estilo);
    return (
      raiz.getAttribute('data-tema') !== temaDe(datos, estilo) ||
      (raiz.getAttribute('data-paleta') || null) !== paletaDe(datos) ||
      raiz.getAttribute('data-estilo') !== estilo ||
      (raiz.getAttribute('data-potente') === 'si') !== (datos.potente === true) ||
      raiz.getAttribute('data-contraste') !== entre(LISTAS.contraste, datos.contraste) ||
      antes !== (datos.luz === true)
    );
  };

  // A screen's entrance (styles/animaciones.css) belongs to arriving at it. A new style on a screen already open would
  // play it again at every change, Batman's beam included: what the change starts inside the page ends at once.
  var sinEntradas = function (cambio) {
    var pagina = document.querySelector('main');
    if (!pagina || typeof document.getAnimations !== 'function') return cambio();
    var antes = document.getAnimations();
    cambio();
    document.getAnimations().forEach(function (a) {
      var efecto = a.effect;
      var objetivo = efecto && efecto.target;
      if (antes.indexOf(a) >= 0 || !a.animationName || !objetivo || !pagina.contains(objetivo)) return;
      if (efecto.getTiming().iterations === Infinity) return;
      try {
        a.finish();
      } catch {
        // One that can't end stays as it is.
      }
    });
  };

  // With the strong version, a new sky (another style, theme or palette, Diseños) arrives all at once with the page:
  // the browser holds the page as it was until src/lib/fondo/fondo.js has painted the new sky (window.fondoAlDia), and
  // then switches everything in one frame (`data-cambio-de-cielo`, styles/potentes.css). Before, the colors came
  // first and the sky a moment later.
  var cambiaElCielo = function (datos) {
    var raiz = document.documentElement;
    if (!raiz.hasAttribute('data-tema') || typeof window.fondoAlDia !== 'function') return false;
    var potente = datos.potente === true;
    if (!potente && raiz.getAttribute('data-potente') !== 'si') return false;
    var estilo = entre(LISTAS.estilo, datos.estilo);
    return (
      raiz.getAttribute('data-estilo') !== estilo ||
      raiz.getAttribute('data-tema') !== temaDe(datos, estilo) ||
      (raiz.getAttribute('data-paleta') || null) !== paletaDe(datos) ||
      raiz.getAttribute('data-potente') !== (potente ? 'si' : 'no') ||
      raiz.getAttribute('data-fondo-mueve') !== (potente && datos.fondoMueve === true ? 'si' : 'no') ||
      raiz.getAttribute('data-fondo-calidad') !== (potente ? calidadDelFondo(datos) : 'baja') ||
      raiz.getAttribute('data-movimiento') !== (datos.luz === true ? 'ninguno' : entre(LISTAS.movimiento, datos.movimiento))
    );
  };

  // One change on its way at a time: what arrives meanwhile joins it, with the newest settings.
  var enCamino = null;
  var marcas = {};

  // `elegido` is only for when localStorage refuses to save: the choice still applies to this tab. `luego`: what has to
  // change together with the page (src/lib/ajustes.js: the screens drawn with the new settings).
  var aplicar = function (elegido, luego) {
    var raiz = document.documentElement;
    // A design being tried in Diseños (src/lib/ajustes.js) stays over the saved settings until it ends.
    var datosDe = function (e) {
      return e || window.ajustesEnPrueba || leer();
    };
    var ponerYa = function (d) {
      sinEntradas(function () {
        poner(d);
      });
    };
    var avisar = function (lista) {
      lista.forEach(function (f) {
        try {
          f();
        } catch {
          // The page gets its settings anyway.
        }
      });
    };
    if (enCamino) {
      enCamino.elegido = elegido;
      if (luego) enCamino.luegos.push(luego);
      return;
    }
    var datos = datosDe(elegido);
    var puede = typeof document.startViewTransition === 'function' && document.visibilityState === 'visible';
    var luz = puede && cambiaLaLuz(datos);
    if (!luz && !(puede && cambiaElCielo(datos))) {
      ponerYa(datos);
      if (luego) avisar([luego]);
      return;
    }
    var marca = luz ? 'data-fundido' : 'data-cambio-de-cielo';
    marcas[marca] = (marcas[marca] || 0) + 1;
    raiz.setAttribute(marca, '');
    var listo = function () {
      marcas[marca] -= 1;
      if (!marcas[marca]) raiz.removeAttribute(marca);
    };
    enCamino = { elegido: elegido, luegos: luego ? [luego] : [] };
    var cambio = function () {
      var este = enCamino;
      enCamino = null;
      if (!este) return undefined;
      ponerYa(datosDe(este.elegido));
      avisar(este.luegos);
      // Nothing here may wait for a frame: the browser draws none until this ends.
      return typeof window.fondoAlDia === 'function' ? window.fondoAlDia() : undefined;
    };
    try {
      document.startViewTransition(cambio).finished.then(listo, listo);
    } catch {
      listo();
      cambio();
    }
  };

  window.aplicarAjustes = aplicar;
  aplicar();

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
      aplicar();
    });
  }

  window.addEventListener('storage', function (e) {
    if (e.key === CLAVE || e.key === null) aplicar();
  });
})();
