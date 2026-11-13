// Applies the visual settings before the first paint, so a dark page doesn't flash white. It's the only code that
// writes the <html> attributes and the color variables. Loaded as a plain script: `script-src 'self'` allows no inline.
// The lists and the color math are repeated in src/lib/ajustes.js, and src/lib/ajustes.test.js checks both agree.
(function () {
  'use strict';

  var CLAVE = 'cl.ajustes';
  var LISTAS = {
    estilo: ['original', 'hoja', 'profesional', 'batman', 'plano', 'pizarron'],
    tema: ['sistema', 'claro', 'oscuro'],
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
  // The light pages to go back to from the dark ones, and how white the ink of the dark ones is (see src/lib/ajustes.js).
  var PDF_CLAROS = ['claro', 'sepia'];
  var BRILLO = { min: 0.8, max: 1, porDefecto: 0.92 };
  var ES_COLOR = /^#[0-9a-f]{6}$/i;
  var BLANCO = '#ffffff';
  var OSCURO = '#0f1c28';
  var BARRA = { claro: '#17324d', oscuro: '#3578bd' };
  // The header of these styles doesn't take the action color: the browser's bar takes the header's own.
  var BARRA_DEL_ESTILO = { hoja: { claro: '#fcfdfe', oscuro: '#171c27' }, profesional: { claro: '#ffffff', oscuro: '#111a30' }, batman: { oscuro: '#141519' }, plano: { oscuro: '#0a2647' }, pizarron: { oscuro: '#7f5f3f' } };
  var SIEMPRE_OSCUROS = ['batman', 'plano', 'pizarron'];
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

  var leer = function () {
    try {
      var datos = JSON.parse(localStorage.getItem(CLAVE));
      return datos && typeof datos === 'object' ? datos : {};
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

  // `elegido` is only for when localStorage refuses to save: the choice still applies to this tab.
  var aplicar = function (elegido) {
    var datos = elegido || leer();
    var raiz = document.documentElement;
    var estilo = entre(LISTAS.estilo, datos.estilo);
    var tema = entre(LISTAS.tema, datos.tema);
    if (tema === 'sistema') tema = esOscuroElSistema() ? 'oscuro' : 'claro';
    // These styles are dark whatever the theme says.
    if (SIEMPRE_OSCUROS.indexOf(estilo) >= 0) tema = 'oscuro';
    raiz.setAttribute('data-estilo', estilo);
    raiz.setAttribute('data-bordes', datos.bordes === true ? 'si' : 'no');
    raiz.setAttribute('data-tema', tema);
    raiz.setAttribute('data-contraste', entre(LISTAS.contraste, datos.contraste));
    raiz.setAttribute('data-daltonismo', entre(LISTAS.daltonismo, datos.daltonismo));
    raiz.setAttribute('data-letra', entre(LISTAS.letra, datos.letra));
    raiz.setAttribute('data-movimiento', entre(LISTAS.movimiento, datos.movimiento));
    var menu = datos.menu && typeof datos.menu === 'object' ? datos.menu : {};
    raiz.setAttribute('data-menu-lado', entre(POSICIONES_DEL_MENU, menu.posicion));
    var pdf = entre(LISTAS.pdf, datos.pdf);
    raiz.setAttribute('data-pdf', pdf);
    raiz.setAttribute('data-pdf-claro', PDF_CLAROS.indexOf(pdf) >= 0 ? pdf : entre(PDF_CLAROS, datos.pdfClaro));

    var accion = colorValido(datos.accion);
    var resaltador = colorValido(datos.resaltador);
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

    // index.html has one for the light system and one for the dark: both get the theme the student sees.
    var barras = document.querySelectorAll('meta[name="theme-color"]');
    var barra = BARRA_DEL_ESTILO[estilo] ? BARRA_DEL_ESTILO[estilo][tema] : accion || BARRA[tema];
    for (var i = 0; i < barras.length; i++) barras[i].setAttribute('content', barra);
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
