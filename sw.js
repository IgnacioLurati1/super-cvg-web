// The service worker of Super CVG: it keeps the site's own files so it opens without internet. Never anything of the
// campus, of Google or of anyone else in its caches: a request to another origin goes on as if this weren't here. What
// the student brought from the campus is kept apart, by the page (src/lib/sinInternet.js), and Salir deletes it.
// scripts/trabajador.mjs fills in VERSION, NUCLEO, RESTO and MOTORES when building and writes it as dist/sw.js.
//   - The pages: the shell kept, at once (the one of «/» or 404.html, like GitHub Pages), with ajustes.js. A new
//     version installs in the background and opens the next time; the previous one's cache stays for a page of it.
//   - assets/: the files have their content in their name, so what was kept is used as is. NUCLEO is kept when
//     installing; every other file, the first time it is used. RESTO is downloaded in the background only when the page
//     says the connection allows it (puedeBajarTodo in src/lib/trabajador.js): mobile data is scarce.
//   - motores/ and pdfjs/: kept only when they are used (they weigh a lot), in a cache named by their content.
//   - The rest of the site (icons, the drawings of the calculators): from the network, kept for later.
//   - What another app shares (the manifest's share_target, a POST to /compartir): checked, kept apart only until the
//     page places it (src/lib/compartido.js), and the page opens to ask where it goes.
//   - «Descargas inteligentes»: with the site closed, `periodicsync` brings the material of the day's courses
//     (src/lib/descargasFondo.js), only on wifi, with the reads of src/lib/moodle.js, and keeps it where the page keeps
//     what it brought (src/lib/sinInternetDisco.js). The only requests to the campus made here.
// Written in by scripts/trabajador.mjs, from src/lib/compartidoSaneo.js, and Moodle, Disco and Fondo further down.
/* global COMPARTIDO, TIPOS_COMPARTIDOS, revisarCompartido, Moodle, Disco, Fondo */
const VERSION = "703c8c755fd6";
const NUCLEO = ["","404.html","ajustes.js","manifest.webmanifest","favicon.ico","favicon.svg","apple-touch-icon.png","icono-192.png","icono-512.png","icono-maskable-512.png","assets/Calendario-B3ACs5S_.js","assets/Carrera-CLrZVXRh.css","assets/Carrera-CphVfPlB.js","assets/CompartirMateria-hJTQNs8C.js","assets/DeLaMateria-BICIpxf9.js","assets/DeLaMateria-BbzlacEb.css","assets/DetallesAnimados-Cpkak45Y.js","assets/ElegirMateria-ClOvebaN.js","assets/Espera-Br_GmEup.js","assets/GuardarEnDrive-CbCH_za4.js","assets/LlevarALaSesion-J3TO8JmM.js","assets/Materia-BY_JXi6C.js","assets/Materias-BKqrFTuI.js","assets/Mensajes-BrPhAE2R.js","assets/Mensajes-Dzx7o0_t.css","assets/MensajesOForos-BndtlQ-e.css","assets/MensajesOForos-D7iROZM8.js","assets/PantallaCompleta-Cb3BbDzg.js","assets/PreviaHoja-DAvAVrso.js","assets/Resaltar-DWIrXqHa.js","assets/Secciones-BJx1tINh.js","assets/SumarCosas-0oJxi7Hf.js","assets/TextoConFormato-B-o78Amz.js","assets/VisorPdf-CDxyZ3S6.css","assets/VisorPdf-CnbmD62C.js","assets/VistaImagen-s6qzgH8a.js","assets/adivinar-Cj_67MJU.js","assets/adjuntar-Bkq4jYUq.js","assets/app-BSfnaj-b.css","assets/app-BT7Ioq_6.js","assets/app-pantallas-Bzw-05qE.js","assets/app-pantallas-DNewOimH.css","assets/archivos-C00vSSkA.js","assets/atajos-BhIFMkS7.js","assets/barlow-latin-400-normal-qiz4-Cze.woff2","assets/barlow-latin-600-normal-DILqtrty.woff2","assets/barlow-latin-700-normal-A9pxMQ4z.woff2","assets/carrera-BVAeKbcP.js","assets/compartido-BEE7oZ9K.css","assets/deLaCarrera-BTNEyvyq.js","assets/fragmentos-Djian-u5.js","assets/imagenQuieta-BCHmsl8X.js","assets/index-BWnx40Cy.js","assets/leerTexto-B2jGx24l.js","assets/lib-fflate-DbUBHiBy.js","assets/lib-fontsource-atkinson-hyperlegible-mono-9esaeclP.js","assets/lib-fontsource-barlow-DLFETcxJ.css","assets/lib-fontsource-fira-code-DVVk41qJ.js","assets/lib-fontsource-jetbrains-mono-DrxgqFBS.js","assets/lib-fontsource-kalam-DuFebxDA.css","assets/lib-fontsource-source-code-pro-B7Gb_04f.js","assets/lib-pdfjs-dist-CVH3rWRV.js","assets/lib-react-BjLx7v8f.js","assets/lib-react-dom-C9qzAwBI.js","assets/lib-react-router-CGWGUEom.js","assets/lib-scheduler-BzvDTThx.js","assets/llevar-D9zkkb2L.js","assets/materias-CeynsGXB.css","assets/opcionesPdf-CCiQMW4p.js","assets/pantalla-DSQqLlc0.js","assets/paquete-DgDISpNL.js","assets/pdf.worker.min-CIqJB0yW.mjs","assets/pdfPartes-De0h-8aC.js","assets/propias-X0kBwDq5.css","assets/propiasVista-Drp1D1RD.js","assets/rolldown-runtime-BCiCTKAo.js","assets/secciones-CMJyqWsc.css","assets/secciones-ChKNQrKI.js","assets/sincro-BE2NKUBU.js","assets/useCampusDePropia-8jwSSaYT.js","assets/useQuieto-D8hdPGeK.js","assets/useSecciones-BHzyCNqV.js","assets/verResumen-CcK9NmF_.js","assets/zipMateria-DIY_Pldf.js"];
const RESTO = ["assets/AbrirDeAfuera-C4qrEPqW.js","assets/AbrirPropia-DGmtTF-k.js","assets/Ancho-DX5n2T1W.js","assets/Apunte-_DE8dJCx.js","assets/Archivo-FtC7MkCG.js","assets/BarraDePrueba-DYwJgKQJ.css","assets/BarraDePrueba-Zi7dyAqF.js","assets/Buscar-B2sBFcPC.js","assets/Buscar-Dc89SwKv.css","assets/BuscarEnDrive-YJ1vHQeV.js","assets/Calculadora-BjOohrFH.js","assets/Calculadora-CVgfY6ZX.css","assets/Calculadora-DbnLas4m.js","assets/Calculadoras-C-QsE5sA.js","assets/Calculadoras-CM9AoxvP.css","assets/Charla-PoUjfsQh.js","assets/Codigo-B6WZZ74F.css","assets/Codigo-Brkx14Me.js","assets/Combo-Bkc5e8L3.js","assets/Combo-C21AL6Xu.css","assets/Compartido-BpE-jgUv.js","assets/Compartir-B6T__qLn.css","assets/Compartir-DLvpErxb.js","assets/Configuracion-DuN-Q9VO.js","assets/Configuracion-Fbnxmr3V.css","assets/Consultron-Dgjm9thD.js","assets/ConsultronFlotante-BvurtOJH.js","assets/Cuestionario-DISN7Jkc.js","assets/Der-CkCX_23r.js","assets/Der-LkhIkpr2.css","assets/Disenos-BZ_3BgKx.js","assets/Disenos-DmtjOKRg.css","assets/Documento-BZKL370H.js","assets/Documento-QWZSbu_9.css","assets/EditarPropia-o8ec6cKq.js","assets/EnVisor-Dj5HnoB2.js","assets/EnVivo-BRrpDsZA.css","assets/EnVivo-CkVlpCC3.js","assets/Entrada-BRoVLfxg.js","assets/Entrada-BuTsc2jc.css","assets/Flotante-DnfY2G-p.js","assets/Flujo-C-P3oPd4.css","assets/Flujo-CkQe9CNI.js","assets/Formula-BsbR-IGa.js","assets/Foros-DGb1V3dU.css","assets/Foros-DiUZkvTI.js","assets/GuardarEnLoMio-BFKVXsF0.js","assets/Hoja-DOwRbuOH.js","assets/Horario-jGLOQraY.js","assets/HorarioCompartido-B67r3OM9.css","assets/HorarioCompartido-CxU3yL8N.js","assets/Inscripcion-B_uEAIkQ.css","assets/Inscripcion-FAX9Zefc.js","assets/Laboratorio-BT4XwIvy.js","assets/Laboratorio-BuJ7ajI-.js","assets/Laboratorio-DoCLKIHH.css","assets/Laboratorio-Ft2HbVFc.css","assets/LectorCompartido-aqrk0WVt.js","assets/Materia-DuhLi9QW.css","assets/Materia-vIGkQ8Rs.js","assets/MenuContextual-CVDqyw9u.js","assets/Novedades-DeACCawr.js","assets/NuevaPropia-BT8G7kJr.js","assets/Opinar-Ds122M-L.js","assets/PasosDeIos-DMf3df3k.js","assets/PasosDeIos-HNLD4PBX.css","assets/Piezas-30RgY3oV.js","assets/Pizarra-BRL9WYRn.css","assets/Pizarra-CRy2Wqqp.js","assets/Pizarron-DjLnKnJC.css","assets/Pizarron-RmgE_CRV.js","assets/Preguntas-CxZ-h8xU.js","assets/Privacidad-BsOY2qI7.js","assets/Propia-BhGFNicQ.js","assets/Repaso-BOiotsLn.js","assets/Repaso-C9CnkZOb.js","assets/Repaso-CKFsyjzk.css","assets/Repaso-CgT2WLKg.css","assets/Resumen-CduaWdi3.js","assets/Resumenes-Bh6Cuj6N.js","assets/RevisionCuestionario-CqntrtN4.js","assets/Sysacad-BlR5RUtP.css","assets/Sysacad-Xy9d_2Dd.js","assets/Tarea-Jp-K1Nnz.js","assets/VisorResumen-_HYK4bCV.js","assets/VistaPlanilla-By-mBqFr.css","assets/VistaPlanilla-zCK9Cpgw.js","assets/Volver-BqV_ZFfz.js","assets/__vite-browser-external-BWJSi_EM.js","assets/_an-pizarron-EqFGKW8J.js","assets/_an-pizarron-k0fQYjjN.css","assets/_est-datos-GfrSNG8F.js","assets/_est-dibujo-Bac0bDRh.css","assets/_est-dibujo-Cr9DlgMV.js","assets/_est-planilla-B-dLnIFV.js","assets/_est-planilla-CvNJOIBA.css","assets/_est-tiza-DHwSkgDU.js","assets/_est-tiza-DYgXGx49.css","assets/_gr-escena-BB9-2j0M.js","assets/_log-dependencias-C0Sibawl.css","assets/_log-dependencias-Dh1vQSZK.js","assets/_log-trazos-CDmbQ94R.css","assets/_log-trazos-DTfKAIMU.js","assets/_so-piezas-Dkicc6Tr.js","assets/_so-piezas-TCVs9Lof.css","assets/apunte-88ZLTwPy.css","assets/apunte-DY0ab8tV.js","assets/atkinson-hyperlegible-mono-latin-400-normal-CmMGer93.woff2","assets/atkinson-hyperlegible-mono-latin-700-normal-BhOtGXDr.woff2","assets/banquero--At8Pr0h.css","assets/banquero-CKNVydyZ.js","assets/bastones-CYOW5oYU.js","assets/caja-D6A6p72Z.css","assets/caja-mCRur3LJ.js","assets/calculadora-vacia-GLGUcgQJ.js","assets/calculadoras-BcVn2Jgu.css","assets/campo-C9Foy5C3.js","assets/campo-CLjJ-Vt6.js","assets/campo-DAkoEAWM.css","assets/campo-cargas-BdsX6ARC.js","assets/campo-cargas-gwppjdmz.css","assets/cifras-MLKhAuS_.js","assets/claves-CkE-MxPf.js","assets/claves-ctFQ9qm-.css","assets/codigoDeEstilo-DLGpLYTS.js","assets/codigoSimulado-R1eKGMBl.js","assets/comun-DTsbAyTl.css","assets/comun-Dq-riGfB.js","assets/conexion-CBZJYkfo.js","assets/configuracion-B9ANE5Oa.css","assets/configuracion-fPen-Ncy.js","assets/consultron-CZm9tbrL.css","assets/cuestionario-B3fi5Y3I.css","assets/deTusMaterias-59wxlKmL.js","assets/dedos-D8mU-Dxh.js","assets/demo-nPo2N_u8.js","assets/demoRepaso-D5J41HoJ.js","assets/descargas-B_9mhTIX.js","assets/dicotomica-CMkhQnDe.css","assets/dicotomica-DNWDVnUZ.js","assets/disenos-BlMCd1NA.js","assets/dist-BtXT6Sf4.js","assets/distribuciones-CYiXXKRZ.js","assets/emscripten-module.browser-pTMOu-AM.js","assets/enVivo-BMpOHr2z.css","assets/enVivo-KsWv0oBh.js","assets/entrarConGoogle-Dd6snvRe.js","assets/escena-Bl9BRq4r.js","assets/escena-Diz2hNps.js","assets/escenas-DwXx38_x.js","assets/estadistica-C7nVNi5q.js","assets/ffi-CT4f0veV.js","assets/fira-code-latin-400-normal-DGosTW8U.woff2","assets/fira-code-latin-700-normal-aa0XcSUK.woff2","assets/foros-C3I-VI5W.js","assets/graficadora-3d-BZIW9CnE.js","assets/graficadora-Bk0-7fEb.js","assets/graficadora-DGIjofMw.js","assets/graficadora-Zs8MEAK1.css","assets/gramatica-C28x-_4R.js","assets/gramatica-CSLS_Xs0.css","assets/guardadoSesion-BTANSgrl.js","assets/horario-BPh2lDDu.js","assets/horario-Djy2vc4t.css","assets/horarios-D_9iOGKC.js","assets/indicePdf-GOuhvI82.js","assets/inventario-Cguo6N_H.js","assets/jetbrains-mono-latin-400-normal-V6pRDFza.woff2","assets/jetbrains-mono-latin-700-normal-BYuf6tUa.woff2","assets/kalam-latin-400-normal-BthBl_aR.woff2","assets/kalam-latin-700-normal-D2H-9ISU.woff2","assets/lgr-raices-D5PVXb-x.css","assets/lgr-raices-nHkefLlC.js","assets/lib-cantoo-pdf-lib-CeCjxHbo.js","assets/lib-classcat-Bvhb7S_f.js","assets/lib-codemirror-autocomplete-BPprhHNM.js","assets/lib-codemirror-commands-CpgJJDxg.js","assets/lib-codemirror-lang-javascript-PZkGsIKI.js","assets/lib-codemirror-lang-python-DUJwlYE2.js","assets/lib-codemirror-lang-sql-DLyrVBUt.js","assets/lib-codemirror-language-COF18onY.js","assets/lib-codemirror-state-DOcN17le.js","assets/lib-codemirror-streamparser-DHb9w1Xm.js","assets/lib-codemirror-view-Db4-MVGp.js","assets/lib-culori-BQUY7M-O.js","assets/lib-d3-color-C6rMUs9j.js","assets/lib-d3-dispatch-DJBxjHzG.js","assets/lib-d3-drag-DrsIdj6z.js","assets/lib-d3-ease-BeSTbVWh.js","assets/lib-d3-interpolate-BtiAcrba.js","assets/lib-d3-selection-C99T4y4O.js","assets/lib-d3-timer-B3wRnl-a.js","assets/lib-d3-transition-DXKYXRtX.js","assets/lib-d3-zoom-B77umlt0.js","assets/lib-fast-equals-D1brB7o_.js","assets/lib-html-entities-CB-KxzEi.js","assets/lib-katex-D7M0RvUC.js","assets/lib-lezer-common-Bs8eXg5L.js","assets/lib-lezer-highlight-tHkvrX3z.js","assets/lib-lezer-javascript-B3vaYo2K.js","assets/lib-lezer-lr-BvWgigKo.js","assets/lib-lezer-python-C5F9EPPa.js","assets/lib-lib0-Bb67t5JQ.js","assets/lib-linkifyjs-BmdYj28K.js","assets/lib-marijn-find-cluster-break-vOhnAucl.js","assets/lib-node-html-better-parser-CfivICHT.js","assets/lib-orderedmap-CpAYH9HW.js","assets/lib-perfect-freehand-DGPtZeT_.js","assets/lib-prosemirror-commands-WVrIbBbx.js","assets/lib-prosemirror-dropcursor-jVqWj--Q.js","assets/lib-prosemirror-gapcursor-BYnkaCgL.js","assets/lib-prosemirror-history-CXQ8dOkT.js","assets/lib-prosemirror-keymap-fplhhdl9.js","assets/lib-prosemirror-model-BQXAhVf2.js","assets/lib-prosemirror-schema-list-Bu8RhGNI.js","assets/lib-prosemirror-state-DQs-qDIC.js","assets/lib-prosemirror-transform-CfWDKjmP.js","assets/lib-prosemirror-view-DrFyzilx.js","assets/lib-regenerator-runtime-D8w9nRnt.js","assets/lib-rope-sequence-BXkR2IPA.js","assets/lib-style-mod-CZGKbZkL.js","assets/lib-supabase-phoenix-Yo_fPNMO.js","assets/lib-supabase-realtime-js-CPOZlyTF.js","assets/lib-tesseract-js-BV53O8wn.js","assets/lib-tiptap-core-HYT6FLW2.js","assets/lib-tiptap-extension-blockquote-BwUTRoZr.js","assets/lib-tiptap-extension-bold-DeNTF3f_.js","assets/lib-tiptap-extension-code-D9Z7vrMJ.js","assets/lib-tiptap-extension-code-block-BxvKDpnQ.js","assets/lib-tiptap-extension-collaboration-KuT4U1gq.js","assets/lib-tiptap-extension-document-BygzKgQi.js","assets/lib-tiptap-extension-hard-break-Bwbe2CNc.js","assets/lib-tiptap-extension-heading-Dr5H_Eyn.js","assets/lib-tiptap-extension-horizontal-rule-CzMka6Wd.js","assets/lib-tiptap-extension-italic-CdQt56uN.js","assets/lib-tiptap-extension-link-dJMz5H3C.js","assets/lib-tiptap-extension-list-y1UNbuAg.js","assets/lib-tiptap-extension-paragraph-BmLJnfza.js","assets/lib-tiptap-extension-strike-Bn9iQLnV.js","assets/lib-tiptap-extension-text-SDkvN0bq.js","assets/lib-tiptap-extension-underline-B7fWPbjx.js","assets/lib-tiptap-extensions-Co5xujgj.js","assets/lib-tiptap-react-DRi66KBN.js","assets/lib-tiptap-starter-kit-Kuur-G7e.js","assets/lib-tiptap-y-tiptap-98KOkmyY.js","assets/lib-tslib-CHdXbnTP.js","assets/lib-use-sync-external-store-BKqoSrcn.js","assets/lib-w3c-keyname-BOAvb0qz.js","assets/lib-xyflow-react-D0Fvz4dW.js","assets/lib-xyflow-react-DLioOiRN.css","assets/lib-xyflow-system-Bj9zE88D.js","assets/lib-y-codemirror-next-e3UO5LbY.js","assets/lib-y-protocols-CMjZ1q5p.js","assets/lib-yjs-CVt-6lgJ.js","assets/lib-zustand-D3HNWaIv.js","assets/lienzo-DD5gQSsP.js","assets/materiaMesa-Ci881PFe.js","assets/matrices-BBZHAQVG.js","assets/matriz-PLDDVDeO.js","assets/medidas-jNUpgPok.js","assets/memoria-DS97gtzP.js","assets/mesa-DFaDwy5W.js","assets/modelo-GjrHy0Ir.js","assets/module-asyncify-2EFITU5U-nu20Cz6j.js","assets/modulos-CbYTHM9m.js","assets/motor-V0AXJ4h2.js","assets/motor-rKIrG97c.js","assets/normalizacion-C1WQ4vID.js","assets/normalizacion-Cy9dYhLZ.css","assets/numerico-Bbt34I5t.js","assets/origenes-BvhlE8R8.js","assets/paquetePropia-D1iHlF1D.js","assets/particulas-CZS2-jjl.js","assets/pdf-CeSPQtxB.js","assets/pizarron.worker-1rgqnL6I.js","assets/planificacion-B7yOLnkK.js","assets/planificacion-BUDaiAw8.js","assets/planificacion-CfDedyZA.css","assets/probabilidades-CZcgJARG.js","assets/proximo-evento-Df7F-Zbx.js","assets/pruebaEscritorio-ewa9ddJc.js","assets/punto-fijo-BVkoEDDW.js","assets/pvi-BpoFkkgi.js","assets/raices-DXJKjmN8.js","assets/recorrido-B0UpUx30.css","assets/recorrido-D_RMZTOO.js","assets/recuperar-CVJyZ6yr.js","assets/reemplazo-Bp46u2oR.js","assets/reemplazo-paginas-csaZBYoe.js","assets/reemplazo-paginas-m_hUzNXB.css","assets/relacion-0B19fSL0.css","assets/relacion-ZkGoPqXg.js","assets/repasoDeEjemplo-DlaMgVAe.css","assets/repasoDeEjemplo-FzyhXHes.js","assets/repasoGuardado-C5XzCAd8.js","assets/resumenMesa-N53yAEcN.js","assets/resumenes-Ce67cjau.css","assets/resumenes-CgGIwSnw.js","assets/ruido-DkTOKgS1.js","assets/sesion-De4Htqfz.js","assets/sesionesEnDrive-BUh5OgtH.js","assets/source-code-pro-latin-400-normal-DEXWLoHG.woff2","assets/source-code-pro-latin-700-normal-DKwZGtZT.woff2","assets/suave-anRNZZ_C.js","assets/subred-DFpLFx24.css","assets/subred-DQfr3L3f.js","assets/sysacadEnDrive-BuMiW1Lp.js","assets/tabla-discreta-BtKgNOXz.js","assets/tabla-verdad-Cih7uVsW.js","assets/tabla-verdad-DLafWvdy.css","assets/tarea-SZZr92Ni.css","assets/thompson-CPJJepug.js","assets/thompson-CzxuI1nK.css","assets/tiro-oblicuo-BY7SNjhP.css","assets/tiro-oblicuo-BgVngF_8.js","assets/useCambios-szAdCOz1.js","assets/useSalirSinGuardar-mLr6x-jI.js","assets/useSeccionesDePropia-BXZFDkp_.js","assets/ventana-tcp-BQQGi02S.css","assets/ventana-tcp-BSlsIUvm.js","assets/vida-BZRXmFxI.js","assets/vistaGrafica-BT02q2tY.js","assets/vistos-C0Rc019y.js"];
const MOTORES = "5458d44b76fb";

const SITIO = `cvg-sitio-${VERSION}`;
const CACHE_MOTORES = `cvg-motores-${MOTORES}`;
const NUESTRAS = /^cvg-(sitio|motores)-/;
const BASE = new URL('./', self.location).href;
// The files outside assets/ that the page needs before drawing anything (ajustes.js runs in the head): kept first, like
// the shells. The rest of the site's own files go to the network first.
const DE_ARRANQUE = new Set(['ajustes.js']);
// Each version's cache says when it was installed: the newest one before this stays, for a page of that version still
// open (see activate).
const INSTALADA = '__instalada';

const direccion = (ruta) => new URL(ruta, BASE).href;

// Every file is looked up by its address alone. A server that answers with `Vary: Origin` would otherwise hide a
// module kept from a plain request: a page of the previous version, taken over by a new worker as it loads, didn't
// start on his phone on 23/11.
const POR_DIRECCION = { ignoreVary: true };

// What another app shares with Super CVG («Compartir» on Android, the manifest's share_target): the rules for what is
// let in. Used by the service worker, which receives it (scripts/trabajador.mjs copies this file into sw.js without
// its `export`s, so it imports nothing), and by the page that reads it back (compartido.js).
// Only PDFs and photos, told apart by their first bytes and not by their name or the type the other app said: a file
// that only says it's a PDF stays out. The name is rebuilt with the extension of what it really is.

const COMPARTIDO = {
  // The Cache Storage where it waits, and the addresses it's kept under.
  cache: 'cvg-compartido',
  ruta: '__compartido/',
  // How long it waits to be placed.
  vida: 30 * 60_000,
  archivos: 10,
  // The cap of one file of the student's own (propiasSaneo.js, LIMITES.archivo), and of all together.
  archivo: 25 * 1024 * 1024,
  total: 80 * 1024 * 1024,
  nombre: 100,
  titulo: 200,
  texto: 2000,
  url: 2000,
  // The files left out that are named, at most.
  fuera: 20,
};

const TIPOS_COMPARTIDOS = { pdf: 'application/pdf', jpg: 'image/jpeg', png: 'image/png', webp: 'image/webp' };

const empieza = (b, firma, desde = 0) => firma.every((x, i) => b[desde + i] === x);

/** What a file is by its first bytes (12 are enough): 'pdf', 'jpg', 'png', 'webp' or null. */
function tipoPorBytes(bytes) {
  const b = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes ?? []);
  if (empieza(b, [0x25, 0x50, 0x44, 0x46, 0x2d])) return 'pdf';
  if (empieza(b, [0xff, 0xd8, 0xff])) return 'jpg';
  if (empieza(b, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])) return 'png';
  if (empieza(b, [0x52, 0x49, 0x46, 0x46]) && empieza(b, [0x57, 0x45, 0x42, 0x50], 8)) return 'webp';
  return null;
}

/** A plain line: without control or invisible characters, spaces joined, cut at `tope`. */
const lineaCompartida = (texto, tope) =>
  String(texto ?? '')
    .replace(/[\p{Cc}\p{Cf}]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, tope)
    .trim();

/** A name to keep a file with: no folders, no control characters, no extensions of its own (nothing that runs, nor a
 * «.pdf.exe»), and the one of what it is. */
function nombreCompartido(nombre, ext) {
  const base = lineaCompartida(String(nombre ?? '').split(/[/\\]/).pop(), 400)
    .replace(/[<>:"|?*]/g, '')
    // Extensions have a letter: «Tema 2.1» keeps its «.1».
    .replace(/(\.(?=[\p{N}]*\p{L})[\p{L}\p{N}]{1,8})+$/u, '')
    .replace(/^[.\s]+|[.\s]+$/g, '');
  const corto = base.slice(0, COMPARTIDO.nombre).trim() || (ext === 'pdf' ? 'Documento compartido' : 'Foto compartida');
  return ext ? `${corto}.${ext}` : corto;
}

/** The first http(s) address in what came: `url` first, then the text. Null if there's none, or it's too long. */
function enlaceCompartido(url, texto) {
  for (const fuente of [url, texto]) {
    const hallado = /https?:\/\/[^\s<>"']+/i.exec(String(fuente ?? ''))?.[0]?.replace(/[),.;:!?»]+$/, '');
    if (!hallado || hallado.length > COMPARTIDO.url) continue;
    try {
      const u = new URL(hallado);
      if (u.protocol === 'https:' || u.protocol === 'http:') return u.href;
    } catch {
      // Not an address: maybe the text has one.
    }
  }
  return null;
}

/** What came, checked: { titulo, texto, enlace, archivos: [{ nombre, tipo, archivo }], fuera: [{ nombre, por }] }.
 * `por`: 'tipo' (not a PDF or a photo, or empty), 'peso', 'cantidad' or 'total'. `form`: the FormData of the share. */
async function revisarCompartido(form) {
  const valor = (k) => (typeof form.get(k) === 'string' ? form.get(k) : '');
  const enlace = enlaceCompartido(valor('enlace'), valor('texto'));
  let texto = String(valor('texto')).replace(/[\p{Cc}\p{Cf}]/gu, (c) => (c === '\n' ? c : ' '));
  // The address goes apart: what's left of the text is what the other app said about it.
  if (enlace) texto = texto.replace(/https?:\/\/[^\s<>"']+/gi, ' ');
  texto = texto.replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim().slice(0, COMPARTIDO.texto).trim();
  const archivos = [];
  const fuera = [];
  let total = 0;
  for (const archivo of form.getAll('archivos')) {
    if (typeof archivo === 'string' || !archivo) continue;
    // The name as it came, only to say it stayed out: shown as text, never used for a file.
    const dicho = lineaCompartida(String(archivo.name ?? '').split(/[/\\]/).pop(), COMPARTIDO.nombre) || 'Un archivo';
    const afuera = (por) => fuera.length < COMPARTIDO.fuera && fuera.push({ nombre: dicho, por });
    if (archivos.length >= COMPARTIDO.archivos) afuera('cantidad');
    else if (archivo.size > COMPARTIDO.archivo) afuera('peso');
    else if (total + archivo.size > COMPARTIDO.total) afuera('total');
    else {
      const tipo = archivo.size ? tipoPorBytes(await archivo.slice(0, 12).arrayBuffer()) : null;
      if (!tipo) afuera('tipo');
      else {
        total += archivo.size;
        archivos.push({ nombre: nombreCompartido(archivo.name, tipo), tipo, archivo });
      }
    }
  }
  return { titulo: lineaCompartida(valor('titulo'), COMPARTIDO.titulo), texto, enlace, archivos, fuera };
}


// Each in a scope of its own, with only what it gives: the reads of the campus (LECTURA, llamar, pedirArchivo), the
// database of what is kept without internet and the night downloads.
const Moodle = (() => {
// The only module that talks to the campus. Three rules are enforced here:
//   - Read only: `llamar` throws before any request for a function outside LECTURA. Reads asked at the same moment
//     leave together in one request (JUNTAR, below), which only ever carries functions of LECTURA.
//   - The writes, apart: `inscribirse` enrols the student in a course, and `subirArchivo`, `guardarEntrega` and
//     `enviarEntrega` hand in a task. Only through ESCRITURA, one attempt each, and only after the screen asked.
//     `responderEnConversacion` and `mandarMensaje` send a private message, after asking too, and `marcarLeida` marks a
//     conversation as read when it is opened, like the campus does. `responderEnForo` answers a post of a forum, when
//     the student taps Publicar.
//   - Quizzes are read only: an attempt is started and continued on the campus, never from here.
//   - The key never travels in a URL: it always goes in the request body.
const CAMPUS = 'https://frro.cvg.utn.edu.ar';

const LECTURA = new Set([
  'core_webservice_get_site_info',
  'core_enrol_get_users_courses',
  'core_course_get_enrolled_courses_by_timeline_classification',
  'core_calendar_get_action_events_by_timesort',
  'core_calendar_get_calendar_monthly_view',
  'core_course_get_contents',
  'message_popup_get_popup_notifications',
  // How many notifications are unread, for the bell. Marking one as read is left out on purpose.
  'message_popup_get_unread_popup_notification_count',
  // Finding a course to enrol in: the categories, the search, a category's courses and how each one takes students.
  'core_course_get_categories',
  'core_course_search_courses',
  'core_course_get_courses_by_field',
  'core_enrol_get_course_enrolment_methods',
  'enrol_self_get_instance_info',
  // A task of a course: its instructions, dates and rules, and where the student's submission is.
  'mod_assign_get_assignments',
  'mod_assign_get_submission_status',
  // A quiz of a course: its rules, the student's attempts and grade, the feedback for that grade, what it lets do and
  // the review of a finished attempt. Never one that starts, continues or logs an attempt (start_attempt, view_*).
  'mod_quiz_get_quizzes_by_courses',
  'mod_quiz_get_user_attempts',
  'mod_quiz_get_user_best_grade',
  'mod_quiz_get_quiz_feedback_for_grade',
  'mod_quiz_get_quiz_access_information',
  'mod_quiz_get_combined_review_options',
  'mod_quiz_get_attempt_review',
  // Private messages: how many conversations have unread ones, the conversations, the messages of one, and finding
  // someone to write to.
  'core_message_get_unread_conversations_count',
  'core_message_get_conversations',
  'core_message_get_conversation_messages',
  'core_message_message_search_users',
  // The forums of the courses, the discussions of one and the posts of one, to read them (Foros). Never one that
  // writes or logs a view (add_discussion, add_discussion_post, view_forum*).
  'mod_forum_get_forums_by_courses',
  'mod_forum_get_forum_discussions',
  'mod_forum_get_discussion_posts',
]);

// The only function that changes something in the campus, kept out of LECTURA so `llamar` never sends it.
const INSCRIBIR = 'enrol_self_enrol_user';
// Handing in a task: the files go up to a draft area of the student (upload.php, not a function of server.php), the
// submission is saved with them, and, when the task asks for it, sent to be graded.
const SUBIR = 'webservice/upload.php';
const GUARDAR_ENTREGA = 'mod_assign_save_submission';
const ENVIAR_ENTREGA = 'mod_assign_submit_for_grading';
// Private messages: answering in a conversation and writing to someone, after the screen asked, and marking a
// conversation as read when it is opened, like the campus does.
const RESPONDER = 'core_message_send_messages_to_conversation';
const MANDAR = 'core_message_send_instant_messages';
const MARCAR_LEIDA = 'core_message_mark_all_conversation_messages_as_read';
// Forums: an answer to a post of a discussion. Never a discussion of its own, an edit or a deletion.
const RESPONDER_EN_FORO = 'mod_forum_add_discussion_post';
const ESCRITURA = new Set([INSCRIBIR, SUBIR, GUARDAR_ENTREGA, ENVIAR_ENTREGA, RESPONDER, MANDAR, MARCAR_LEIDA, RESPONDER_EN_FORO]);

class ErrorCampus extends Error {
  constructor(mensaje, codigo) {
    super(mensaje);
    this.conocido = true;
    this.codigo = codigo;
  }
}

const SESION_VENCIDA = new Set(['invalidtoken', 'accessexception', 'sitepolicynotagreed', 'usernotfullysetup']);

function errorSegun(codigo) {
  if (codigo === 'invalidlogin') return new ErrorCampus('El usuario o la contraseña no coinciden.', codigo);
  if (codigo === 'enablewsdescription' || codigo === 'servicenotavailable') {
    return new ErrorCampus('El campus no permite este acceso ahora. Entrá desde su página.', codigo);
  }
  if (SESION_VENCIDA.has(codigo)) return new ErrorCampus('Tu sesión venció. Volvé a entrar.', 'sesion');
  return new ErrorCampus('El campus no pudo responder. Probá de nuevo en un rato.', codigo);
}

// `campus` keeps the campus's own code: «accessexception» is a dead key, but also a function its app access left closed.
function errorDeAcceso(codigo) {
  const error = errorSegun(codigo);
  error.campus = codigo;
  return error;
}

async function leerJson(respuesta) {
  if (!respuesta.ok) throw new ErrorCampus('El campus no pudo responder. Probá de nuevo en un rato.', `http_${respuesta.status}`);
  try {
    return await respuesta.json();
  } catch {
    throw new ErrorCampus('El campus no pudo responder. Probá de nuevo en un rato.', 'respuesta_invalida');
  }
}

// ---------- How long the campus gets ----------

/** A read the campus doesn't answer in this time fails like a fall of the network: what was kept shows instead. With a
 * bad signal the connection neither answers nor breaks, and the browser alone would wait minutes. */
const TOPE_MS = 15_000;
const TARDO = 'El campus no contestó a tiempo. Probá de nuevo en un rato.';

// A signal that stops at the time limit, and also when `afuera` (the caller's) stops. `listo` ends the limit: for a
// file, once its headers arrived (a big one can take longer to come, and that is not a fall).
function conTope(afuera) {
  const propio = new AbortController();
  const reloj = setTimeout(() => propio.abort(new ErrorCampus(TARDO, 'tiempo')), TOPE_MS);
  let senal = propio.signal;
  if (afuera) {
    if (typeof AbortSignal.any === 'function') senal = AbortSignal.any([afuera, propio.signal]);
    else if (afuera.aborted) propio.abort(afuera.reason);
    else afuera.addEventListener('abort', () => propio.abort(afuera.reason), { once: true });
  }
  const motivo = (error) => (propio.signal.aborted && propio.signal.reason instanceof ErrorCampus && !afuera?.aborted ? propio.signal.reason : error);
  return { senal, listo: () => clearTimeout(reloj), motivo };
}

/** Exchanges the password for a key. One attempt per call: it never retries, so a typo cannot add failed logins. */
async function pedirClave(usuario, contrasena) {
  const tope = conTope();
  let datos;
  try {
    const respuesta = await fetch(`${CAMPUS}/login/token.php`, {
      method: 'POST',
      redirect: 'error',
      signal: tope.senal,
      body: new URLSearchParams({ username: usuario, password: contrasena, service: 'moodle_mobile_app' }),
    });
    datos = await leerJson(respuesta);
  } catch (error) {
    throw tope.motivo(error);
  } finally {
    tope.listo();
  }
  if (!datos.token) throw errorDeAcceso(datos.errorcode);
  return datos.token;
}

// One request to the web service, with the key in the body. Each caller says which list the function has to be in.
// Only the reads get the time limit: a write stopped here may have happened in the campus anyway, and the student
// trying again would send it twice.
async function enviar(lista, token, funcion, parametros) {
  if (!lista.has(funcion)) throw new Error(`Función fuera de la lista: ${funcion}`);
  const tope = lista === ESCRITURA ? null : conTope();
  try {
    const respuesta = await fetch(`${CAMPUS}/webservice/rest/server.php`, {
      method: 'POST',
      redirect: 'error',
      ...(tope && { signal: tope.senal }),
      body: new URLSearchParams({ ...parametros, wstoken: token, wsfunction: funcion, moodlewsrestformat: 'json' }),
    });
    return await leerJson(respuesta);
  } catch (error) {
    throw tope ? tope.motivo(error) : error;
  } finally {
    tope?.listo();
  }
}

async function llamar(token, funcion, parametros = {}) {
  if (!LECTURA.has(funcion)) throw new Error(`Función fuera de la lista de lectura: ${funcion}`);
  const datos = await leer(token, funcion, parametros);
  if (datos?.exception) throw errorDeAcceso(datos.errorcode);
  return datos;
}

// ---------- Reads that leave together ----------

// The campus speaks HTTP/1.1: each request needs a connection of its own, the browser opens six at most and each new one
// costs two round trips. The reads asked in the same moment go in one request, through the function the campus app
// itself uses for that (Moodle 3.7+). It only ever carries functions of LECTURA, and only `leer` sends it: `llamar`
// never takes it. Moodle runs them one after another and stops at the first error: what it left unanswered goes again
// on its own. Measured against the campus on 23/11, Hoy's nine first reads: 1.64 s apart and 0.93 s together with a
// bad signal, 0.39 s and 0.33 s on wifi.
const JUNTAR = 'tool_mobile_call_external_functions';
const SOLO_JUNTAR = new Set([JUNTAR]);
const POR_TANDA = 10;
// Keys whose campus did not take a batch: their reads go one by one.
const sinTandas = new Set();
/** Whether this key's reads still leave together (none of its batches was refused). */
const seJuntan = (token) => !sinTandas.has(token);
// The heavy reads (a course's whole contents) leave in a batch of their own: Moodle answers a batch when its last read
// is done, and the light ones of the same moment would wait for them.
const PESADAS = new Set(['core_course_get_contents']);
// And at most four together: a batch shares one time limit (conTope), and a slow campus would let every course go at once.
const POR_TANDA_PESADA = 4;
const enEspera = new Map();

const NOMBRE_DE_CAMPO = /^[a-z_]+(?:\[[a-z0-9_]+\])*$/i;
const PROHIBIDAS = new Set(['__proto__', 'constructor', 'prototype']);
/** Moodle's form names (`courseids[0]`) as the object its JSON arguments take ({ courseids: [..] }). */
function anidar(parametros) {
  const raiz = {};
  for (const [nombre, valor] of Object.entries(parametros)) {
    if (!NOMBRE_DE_CAMPO.test(nombre)) throw new Error(`Campo raro: ${nombre}`);
    const partes = nombre.match(/[^[\]]+/g);
    if (partes.some((parte) => PROHIBIDAS.has(parte))) throw new Error(`Campo raro: ${nombre}`);
    let nodo = raiz;
    partes.forEach((parte, i) => {
      if (i === partes.length - 1) nodo[parte] = valor;
      else {
        if (!Object.hasOwn(nodo, parte)) nodo[parte] = /^\d+$/.test(partes[i + 1]) ? [] : {};
        nodo = nodo[parte];
      }
    });
  }
  return raiz;
}

function juntable(parametros) {
  try {
    anidar(parametros);
    return true;
  } catch {
    return false;
  }
}

function leer(token, funcion, parametros) {
  if (sinTandas.has(token) || !juntable(parametros)) return enviar(LECTURA, token, funcion, parametros);
  const grupo = PESADAS.has(funcion) ? 'pesadas' : 'livianas';
  return new Promise((ok, mal) => {
    let tanda = enEspera.get(grupo);
    if (tanda?.token !== token) {
      soltar(grupo);
      tanda = { token, pedidos: [] };
      enEspera.set(grupo, tanda);
      // What else is asked in this same moment (the screens' first requests come together) joins it.
      setTimeout(() => soltar(grupo, tanda), 0);
    }
    tanda.pedidos.push({ funcion, parametros, ok, mal });
    if (tanda.pedidos.length >= (grupo === 'pesadas' ? POR_TANDA_PESADA : POR_TANDA)) soltar(grupo);
  });
}

// The group's batch waiting, or only that one (`cual`) if it is still the one waiting.
function soltar(grupo, cual) {
  const tanda = enEspera.get(grupo);
  if (!tanda || (cual && tanda !== cual)) return;
  enEspera.delete(grupo);
  if (!tanda.pedidos.length) return;
  if (tanda.pedidos.length === 1) deAUno(tanda.token, tanda.pedidos);
  else juntos(tanda.token, tanda.pedidos);
}

function deAUno(token, pedidos) {
  for (const p of pedidos) enviar(LECTURA, token, p.funcion, p.parametros).then(p.ok, p.mal);
}

// An error inside the batch, as the campus answers it to a request on its own.
function errorDeLaTanda(texto) {
  let e = null;
  try {
    e = JSON.parse(texto);
  } catch {
    // Not JSON: an unknown error.
  }
  return { exception: 'tanda', errorcode: typeof e?.errorcode === 'string' ? e.errorcode : 'desconocido' };
}

async function juntos(token, pedidos) {
  const cuerpo = {};
  pedidos.forEach(({ funcion, parametros }, i) => {
    cuerpo[`requests[${i}][function]`] = funcion;
    cuerpo[`requests[${i}][arguments]`] = JSON.stringify(anidar(parametros));
  });
  let datos;
  try {
    if (!pedidos.every((p) => LECTURA.has(p.funcion))) throw new Error('Función fuera de la lista de lectura');
    datos = await enviar(SOLO_JUNTAR, token, JUNTAR, cuerpo);
  } catch (error) {
    for (const p of pedidos) p.mal(error);
    return;
  }
  const respuestas = Array.isArray(datos?.responses) ? datos.responses : null;
  // The campus did not take it (closed for this key, or the key is dead): each read on its own says why.
  if (!respuestas) {
    sinTandas.add(token);
    // One after another: heavy reads let loose at once are what the batches keep from the campus.
    for (const p of pedidos) await enviar(LECTURA, token, p.funcion, p.parametros).then(p.ok, p.mal);
    return;
  }
  pedidos.forEach((p, i) => {
    const r = respuestas[i];
    if (!r) return deAUno(token, [p]);
    if (r.error) return p.ok(errorDeLaTanda(r.exception));
    try {
      p.ok(r.data == null ? null : JSON.parse(r.data));
    } catch {
      p.mal(new ErrorCampus('El campus no pudo responder. Probá de nuevo en un rato.', 'respuesta_invalida'));
    }
  });
}

const CLAVE_MAL = new Set(['2', '3', '4']);

/** What the campus answered to an enrolment: true, or an error that says why in words. Its own messages are not shown:
 * one of them carries the first letter of the course key. */
function leerInscripcion(datos) {
  if (datos?.status === true || datos?.status === 1) return true;
  const codigos = (datos?.warnings ?? []).map((w) => String(w?.warningcode));
  if (codigos.some((c) => CLAVE_MAL.has(c))) throw new ErrorCampus('La clave no es esa. Revisala y probá de nuevo.', 'clave_incorrecta');
  if (codigos.includes('1')) throw new ErrorCampus('La inscripción a esta materia está cerrada o llena.', 'inscripcion_cerrada');
  throw new ErrorCampus('No pudimos inscribirte. Probá de nuevo en un rato.', 'no_inscripto');
}

const numero = (n) => Number.isSafeInteger(n) && n > 0;

/** Enrols the student in a course through one of its self enrolments. The only write: it sends INSCRIBIR and nothing
 * else, with the course key in the body. One attempt per call, it never retries: a slow answer cannot enrol twice or
 * add failed key attempts. */
async function inscribirse(token, cursoId, { instancia, clave = '' } = {}) {
  if (!numero(cursoId) || !numero(instancia)) throw new ErrorCampus('No pudimos inscribirte. Probá de nuevo en un rato.', 'datos_invalidos');
  const datos = await enviar(ESCRITURA, token, INSCRIBIR, { courseid: String(cursoId), instanceid: String(instancia), password: String(clave) });
  if (datos?.exception) {
    // No self enrolment left in the course, or the course is out of sight.
    if (datos.errorcode === 'canntenrol') throw new ErrorCampus('Esta materia no deja inscribirse desde el campus. Pedíselo a quien la da.', 'sin_inscripcion');
    if (datos.errorcode === 'coursehidden') throw new ErrorCampus('Esta materia no está abierta en el campus.', 'oculta');
    throw errorDeAcceso(datos.errorcode);
  }
  return leerInscripcion(datos);
}

// Private messages. Each write sends its one function and nothing else, once: it never retries, so a slow answer
// cannot send a message twice.

/** The longest message the campus takes: core_message\api::MESSAGE_MAX_LENGTH, measured in bytes of UTF-8. */
const LARGO_MAXIMO = 4096;
const largoEnBytes = (texto) => new TextEncoder().encode(String(texto ?? '')).length;
const mensajeValido = (texto) => typeof texto === 'string' && texto.trim() !== '' && largoEnBytes(texto) <= LARGO_MAXIMO;
const NO_SALIO = 'No pudimos mandar el mensaje. Probá de nuevo.';

function errorDeMensaje(codigo) {
  if (codigo === 'errormessagetoolong') return new ErrorCampus('El mensaje es muy largo para el campus. Acortalo y probá de nuevo.', 'muy_largo');
  if (codigo === 'disabled') return new ErrorCampus('Los mensajes están apagados en el campus.', 'sin_mensajes');
  return errorDeAcceso(codigo);
}

/** What the campus answered to an answer in a conversation: the message as it keeps it, { id, useridfrom, text,
 * timecreated }, or an error in words. */
function leerRespuesta(datos) {
  if (datos?.exception) throw errorDeMensaje(datos.errorcode);
  const mensaje = Array.isArray(datos) ? datos[0] : null;
  if (!numero(mensaje?.id)) throw new ErrorCampus('El campus no confirmó el mensaje.', 'sin_confirmar');
  return mensaje;
}

/** What the campus answered to a message to someone. It says no (blocked, only takes messages from contacts) with
 * msgid -1 and its own words, which are not shown. */
function leerMandado(datos) {
  if (datos?.exception) throw errorDeMensaje(datos.errorcode);
  const r = Array.isArray(datos) ? datos[0] : null;
  if (!r || typeof r.msgid !== 'number') throw new ErrorCampus('El campus no confirmó el mensaje.', 'sin_confirmar');
  if (!numero(r.msgid)) throw new ErrorCampus('El campus no dejó mandarlo. Puede que esa persona no reciba mensajes tuyos.', 'rechazado');
  return { id: r.msgid, conversationid: r.conversationid, useridfrom: r.useridfrom, text: r.text, timecreated: r.timecreated };
}

/** Answers in a conversation of the student: sends RESPONDER, with the text as the campus page sends it. */
async function responderEnConversacion(token, conversacionId, texto) {
  if (!numero(conversacionId) || !mensajeValido(texto)) throw new ErrorCampus(NO_SALIO, 'datos_invalidos');
  return leerRespuesta(await enviar(ESCRITURA, token, RESPONDER, { conversationid: String(conversacionId), 'messages[0][text]': texto }));
}

/** Writes to someone, with or without a conversation between the two (the campus opens one): sends MANDAR. */
async function mandarMensaje(token, personaId, texto) {
  if (!numero(personaId) || !mensajeValido(texto)) throw new ErrorCampus(NO_SALIO, 'datos_invalidos');
  return leerMandado(await enviar(ESCRITURA, token, MANDAR, { 'messages[0][touserid]': String(personaId), 'messages[0][text]': texto }));
}

/** Marks every message of a conversation as read for the student, what the campus does when it is opened there:
 * sends MARCAR_LEIDA. */
async function marcarLeida(token, usuarioId, conversacionId) {
  if (!numero(usuarioId) || !numero(conversacionId)) throw new ErrorCampus('No pudimos marcarla como leída.', 'datos_invalidos');
  const datos = await enviar(ESCRITURA, token, MARCAR_LEIDA, { userid: String(usuarioId), conversationid: String(conversacionId) });
  if (datos?.exception) throw errorDeMensaje(datos.errorcode);
  return true;
}

/** Whether an address is a campus file that pedirArchivo would ask for. */
function esArchivoDelCampus(direccion) {
  try {
    const url = new URL(direccion);
    return url.origin === CAMPUS && url.pathname.startsWith('/webservice/pluginfile.php/');
  } catch {
    return false;
  }
}

/** Asks the campus for a file with the key in the body, and gives back the answer unread. `rango`: «bytes=a-b» or
 * «bytes=a-», for a part of it (the campus answers 206 with Content-Range, or 200 with the whole file; pdfPartes.js).
 * `senal` stops it. Refuses any address outside the campus. */
async function pedirArchivo(token, direccion, { rango = null, senal } = {}) {
  if (!esArchivoDelCampus(direccion)) throw new ErrorCampus('Ese archivo no está en el campus.', 'fuera_del_campus');
  const url = new URL(direccion);
  url.searchParams.delete('token');
  url.searchParams.delete('wstoken');
  const tope = conTope(senal);
  const opciones = { method: 'POST', redirect: 'error', body: new URLSearchParams({ token }), signal: tope.senal };
  if (rango) opciones.headers = { Range: rango };
  let respuesta;
  try {
    respuesta = await fetch(url, opciones);
  } catch (error) {
    throw tope.motivo(error);
  } finally {
    tope.listo();
  }
  if (!respuesta.ok) throw new ErrorCampus('No se pudo bajar el archivo. Probá de nuevo.', `http_${respuesta.status}`);
  if ((respuesta.headers.get('content-type') ?? '').includes('application/json')) {
    throw new ErrorCampus('No se pudo bajar el archivo. Probá de nuevo.', 'archivo_rechazado');
  }
  return respuesta;
}

/** Downloads a whole campus file with the key in the body. Refuses any address outside the campus. */
async function bajarArchivo(token, direccion) {
  return (await pedirArchivo(token, direccion)).blob();
}

// ---------- Handing in a task ----------

const MUY_GRANDE = 'El archivo pesa más de lo que acepta el campus.';
const GRANDE = new Set(['fileoversized', 'upload_error_ini_size', 'upload_error_form_size', 'userquotalimit', 'http_413']);

// What the campus says to a write about a task, in words. Its own messages are not shown: some are technical.
function errorDeEntrega(codigo) {
  if (GRANDE.has(codigo)) return new ErrorCampus(MUY_GRANDE, 'archivo_grande');
  if (codigo === 'filenameexist') return new ErrorCampus('Ya hay otro archivo con ese nombre.', 'archivo_repetido');
  if (codigo === 'virusfounduser' || codigo === 'virusfound') return new ErrorCampus('El campus rechazó el archivo.', 'archivo_rechazado');
  if (codigo === 'submissionslocked') return new ErrorCampus('Las entregas de esta tarea están bloqueadas en el campus.', 'bloqueada');
  if (codigo === 'nopermission' || codigo === 'nopermissions' || codigo === 'notingroup') return new ErrorCampus('El campus no te deja entregar esta tarea.', 'sin_permiso');
  return errorDeAcceso(codigo);
}

const sinEtiquetas = (texto) => String(texto ?? '').replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 200);

/** Uploads one file to the student's draft area and returns its number (`itemid`). `borrador` 0 starts a new one; the
 * rest of the files go to the same. Only to the campus, with the key in the body and no redirects. One attempt per
 * call, it never retries. */
async function subirArchivo(token, archivo, { nombre, borrador = 0 } = {}) {
  if (!ESCRITURA.has(SUBIR)) throw new Error(`Función fuera de la lista: ${SUBIR}`);
  if (!(archivo instanceof Blob) || !String(nombre ?? '').trim() || !Number.isSafeInteger(borrador) || borrador < 0) {
    throw new ErrorCampus('No pudimos subir el archivo. Probá de nuevo.', 'datos_invalidos');
  }
  const cuerpo = new FormData();
  cuerpo.append('token', token);
  cuerpo.append('filearea', 'draft');
  cuerpo.append('itemid', String(borrador));
  cuerpo.append('filepath', '/');
  cuerpo.append('file_1', archivo, String(nombre));
  const respuesta = await fetch(`${CAMPUS}/${SUBIR}`, { method: 'POST', redirect: 'error', body: cuerpo });
  if (respuesta.status === 413) throw errorDeEntrega('http_413');
  // A refusal of upload.php comes as JSON, sometimes with an error status: its code says why.
  const datos = await respuesta.json().catch(() => undefined);
  if (datos?.exception || datos?.errorcode) throw errorDeEntrega(datos.errorcode);
  if (!respuesta.ok) throw new ErrorCampus('El campus no pudo responder. Probá de nuevo en un rato.', `http_${respuesta.status}`);
  const subido = Array.isArray(datos) ? datos[0] : null;
  if (subido?.error || subido?.errortype) throw errorDeEntrega(subido.errortype);
  const itemid = Number(subido?.itemid);
  if (!Number.isSafeInteger(itemid) || itemid <= 0) throw new ErrorCampus('El campus no pudo responder. Probá de nuevo en un rato.', 'respuesta_invalida');
  return itemid;
}

const tarea = (n) => Number.isSafeInteger(n) && n > 0;

/** Saves the submission of a task with what goes in it: `texto`, the HTML of the online text, and `borrador`, the draft
 * area with every file (subirArchivo). Each one only when the task takes it: a part left out stays as it was on the
 * campus. With drafts on it stays as a draft; without them, it is handed in. One attempt, it never retries. */
async function guardarEntrega(token, tareaId, { texto, borrador } = {}) {
  const conTexto = typeof texto === 'string';
  const conArchivos = Number.isSafeInteger(borrador) && borrador > 0;
  if (!tarea(tareaId) || (!conTexto && !conArchivos)) throw new ErrorCampus('No pudimos guardar la entrega. Probá de nuevo.', 'datos_invalidos');
  const parametros = { assignmentid: String(tareaId) };
  if (conTexto) {
    // No pictures inside the text: its draft area is none (0), as in the Moodle app.
    parametros['plugindata[onlinetext_editor][text]'] = texto;
    parametros['plugindata[onlinetext_editor][format]'] = '1';
    parametros['plugindata[onlinetext_editor][itemid]'] = '0';
  }
  if (conArchivos) parametros['plugindata[files_filemanager]'] = String(borrador);
  const datos = await enviar(ESCRITURA, token, GUARDAR_ENTREGA, parametros);
  if (datos?.exception) throw errorDeEntrega(datos.errorcode);
  const avisos = Array.isArray(datos) ? datos : (datos?.warnings ?? []);
  if (avisos.length) {
    // These notices are the campus's words for the student (the date passed, the word limit): they go as a detail.
    const error = new ErrorCampus('El campus no guardó la entrega.', 'no_guardada');
    error.detalle = avisos.map((a) => sinEtiquetas(a?.message)).filter(Boolean).join(' ');
    throw error;
  }
  return true;
}

/** Sends a saved submission to be graded, accepting the statement when the task asks for one. One attempt. */
async function enviarEntrega(token, tareaId, { aceptar = false } = {}) {
  if (!tarea(tareaId)) throw new ErrorCampus('No pudimos enviarla. Probá de nuevo.', 'datos_invalidos');
  const datos = await enviar(ESCRITURA, token, ENVIAR_ENTREGA, { assignmentid: String(tareaId), acceptsubmissionstatement: aceptar === true ? '1' : '0' });
  if (datos?.exception) throw errorDeEntrega(datos.errorcode);
  const avisos = Array.isArray(datos) ? datos : (datos?.warnings ?? []);
  // Its notice carries internal numbers: never shown.
  if (avisos.length) throw new ErrorCampus('El campus no la envió para calificar. Quedó guardada como borrador.', 'no_enviada');
  return true;
}

// Forum answers. Sent once, never retried, like a message.

/** The longest answer taken here: the campus has no limit of its own for a post, this one keeps it a post. */
const LARGO_FORO = 20_000;
const LARGO_ASUNTO = 255;
const escaparHtml = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

/** What the student wrote, as the HTML of a post: everything escaped, a blank line starts a paragraph and a line break
 * stays one. Nothing of what was written becomes a tag. */
function textoAHtml(texto) {
  return String(texto ?? '').replace(/\r\n?/g, '\n').trim().split(/\n\s*\n/)
    .map((parrafo) => parrafo.trim()).filter(Boolean)
    .map((parrafo) => `<p>${parrafo.split('\n').map(escaparHtml).join('<br>')}</p>`).join('');
}

function errorDeForo(codigo) {
  if (codigo === 'nopostforum' || codigo === 'cannotreply') return new ErrorCampus('El campus no te deja responder en esta discusión.', 'no_responde');
  if (codigo === 'discussionlocked') return new ErrorCampus('Esta discusión está cerrada.', 'cerrada');
  return errorDeAcceso(codigo);
}

/** What the campus answered to an answer in a forum: { id } of the new post, or an error in words. */
function leerPublicado(datos) {
  if (datos?.exception) throw errorDeForo(datos.errorcode);
  if (!numero(datos?.postid)) throw new ErrorCampus('El campus no confirmó la respuesta.', 'sin_confirmar');
  return { id: datos.postid };
}

/** Answers a post of a discussion: sends RESPONDER_EN_FORO with the text as HTML and the subject the campus puts. */
async function responderEnForo(token, postId, asunto, texto) {
  const valido = typeof texto === 'string' && texto.trim() !== '' && texto.length <= LARGO_FORO;
  if (!numero(postId) || !valido || typeof asunto !== 'string' || !asunto.trim()) throw new ErrorCampus('No pudimos publicarla. Probá de nuevo.', 'datos_invalidos');
  return leerPublicado(await enviar(ESCRITURA, token, RESPONDER_EN_FORO, {
    postid: String(postId),
    subject: asunto.trim().slice(0, LARGO_ASUNTO),
    message: textoAHtml(texto),
    messageformat: '1',
  }));
}

return { LECTURA, llamar, pedirArchivo };
})();
const Disco = (() => {
// What the campus answered, kept in this browser's database so Super CVG opens without internet or with the campus down
// (the service worker, scripts/trabajador.mjs, keeps the site itself). Only with «Seguir conectado»: a student who did
// not choose to stay in this device leaves nothing on its disk. One student at a time: the database says whose it is
// (`dueno`: the campus number and a fingerprint of the key), and a different student, or a key that isn't that one,
// never reads it. Salir deletes it all (sesion.js).
// Two kinds of things: the answers of conCache (sesion.js), by name, and the files of the courses (archivos.js), by
// address and with the version of the file in the campus, bounded by TOPE_ARCHIVOS. A big PDF read by parts
// (pdfPartes.js) is kept as the parts already brought, under the same address, until it is all here. What Classroom and
// El Santo Resumen bring goes apart (respaldo.js), with its own names and whom it is for over there. Nothing here throws: without the
// database (private mode, no room, an old browser) everything stays only in the memory of the tab, as before.
// The night downloads (descargasFondo.js) write here too, from the service worker: no imports, so scripts/trabajador.mjs
// puts this file whole in sw.js. What they bring is marked (`noche` in its FICHAS): they make room only among their own
// files, and never touch one the student kept (sinInternet.js is the page's side, with the rest).

/** The files kept, in bytes. Past this, what was used longest ago goes first. */
const TOPE_ARCHIVOS = 400 * 1024 * 1024;
/** A file heavier than this is never kept (a long video, a big compressed folder). */
const ARCHIVO_MAXIMO = 60 * 1024 * 1024;

const BASE = 'super-cvg-sin-internet';
const RESPUESTAS = 'respuestas';
const ARCHIVOS = 'archivos';
// The size of each file and when it was last used, apart from its bytes: making room reads only these.
const FICHAS = 'fichas';
const META = 'meta';
const ALMACENES = [RESPUESTAS, ARCHIVOS, FICHAS, META];

// The answers worth having without internet. Out: the search of courses to enrol in and of people to write to (they
// need the campus anyway), the pictures (blob addresses that die with the tab) and the titles of videos. `sysacad`: the
// copy of Sysacad that came from the student's Drive (sysacadEnDrive.js), as the text of its file.
// `noche.contenido.<id>`: a course as the night download brought it, { secciones }. A service worker has no DOMParser,
// so the page turns it into `contenido.<id>` when it reads it (sinInternet.js).
const GUARDABLES = /^(perfil|sysacad|materias|pendientes|notificaciones|avisos|foros|contenido\.\d+|noche\.contenido\.\d+|mes\.\d+-\d+|tareas\.\d+|tarea\.\d+|cuestionarios\.\d+|cuestionario\.\d+|cuestionario\.revision\.\d+|foros\.discusiones\.\d+|foros\.hilo\.\d+|mensajes\.lista\.\d+|mensajes\.charla\.\d+\.\d+)$/;
const esGuardable = (nombre) => GUARDABLES.test(String(nombre));

// ---------- The database ----------

let abierta = null;
// Bumped by Salir: a write that started before it does not bring anything back.
let generacion = 0;

function abrir() {
  if (!abierta) {
    const esta = new Promise((ok, mal) => {
      if (typeof indexedDB === 'undefined') return mal(new Error('sin base'));
      const pedido = indexedDB.open(BASE, 1);
      pedido.onupgradeneeded = () => {
        const db = pedido.result;
        for (const a of ALMACENES) if (!db.objectStoreNames.contains(a)) db.createObjectStore(a);
      };
      pedido.onsuccess = () => {
        const db = pedido.result;
        // Salir in another tab deletes the database: this one lets go of it, and the next use opens it again.
        const soltar = () => {
          db.close();
          if (abierta === esta) abierta = null;
        };
        db.onversionchange = soltar;
        db.onclose = soltar;
        ok(db);
      };
      pedido.onerror = () => mal(pedido.error);
      pedido.onblocked = () => mal(new Error('bloqueada'));
    });
    abierta = esta;
    esta.catch(() => {
      if (abierta === esta) abierta = null;
    });
  }
  return abierta;
}

// Runs `fn` with every store in one transaction. Gives back what `fn` left in `hecho.valor`, or `siFalla`.
async function enUna(modo, fn, siFalla) {
  try {
    const db = await abrir();
    return await new Promise((ok) => {
      const hecho = { valor: siFalla };
      let tx;
      try {
        tx = db.transaction(ALMACENES, modo);
        fn((a) => tx.objectStore(a), hecho);
      } catch {
        // A database the browser closed under our feet: the next try opens it again.
        abierta = null;
        ok(siFalla);
        return;
      }
      tx.oncomplete = () => ok(hecho.valor);
      tx.onerror = () => ok(siFalla);
      tx.onabort = () => ok(siFalla);
    });
  } catch {
    return siFalla;
  }
}

/** A fingerprint of the key, so the database knows whose it is without keeping the key a second time. The tabs of one
 * session use it too, to tell their messages apart from another student's (pestanas.js). */
async function huellaDe(token) {
  if (!token || typeof crypto === 'undefined' || !crypto.subtle) return null;
  try {
    const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`super-cvg:${token}`));
    return [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, '0')).join('');
  } catch {
    return null;
  }
}

const esAlumno = (a) => Number.isSafeInteger(a) && a > 0;

// The writes go one after the other: two answers arriving together must not both find no owner and wipe each other.
let fila = Promise.resolve();
const enFila = (fn) => {
  const esta = fila.then(fn, fn);
  fila = esta.catch(() => {});
  return esta;
};

// Writes with the owner checked in the same transaction: another student, or no owner yet, empties everything first.
function escribir({ token, alumno }, fn) {
  if (!token || !esAlumno(alumno)) return Promise.resolve();
  const nacida = generacion;
  return enFila(async () => {
    const huella = await huellaDe(token);
    if (!huella || nacida !== generacion) return undefined;
    return enUna('readwrite', (almacen, hecho) => {
      const meta = almacen(META);
      const pedido = meta.get('dueno');
      pedido.onsuccess = () => {
        // After Salir: nothing of the session that left.
        if (nacida !== generacion) return;
        const dueno = pedido.result;
        if (!dueno || dueno.alumno !== alumno) {
          for (const a of [RESPUESTAS, ARCHIVOS, FICHAS]) almacen(a).clear();
        }
        if (!dueno || dueno.alumno !== alumno || dueno.huella !== huella) meta.put({ alumno, huella }, 'dueno');
        fn(almacen, hecho);
      };
    });
  });
}

// Reads only when the key of this tab is the owner's.
async function leer(token, fn, siFalla = null) {
  const huella = await huellaDe(token);
  if (!huella) return siFalla;
  return enUna('readwrite', (almacen, hecho) => {
    const pedido = almacen(META).get('dueno');
    pedido.onsuccess = () => {
      if (pedido.result?.huella === huella) fn(almacen, hecho);
    };
  }, siFalla);
}

// ---------- The answers of the campus ----------

/** Keeps an answer of conCache, with when it came. Only the names of GUARDABLES; one that can't be kept is skipped. */
function recordar(nombre, datos, { token, alumno, cuando = Date.now() }) {
  if (!esGuardable(nombre)) return Promise.resolve();
  return escribir({ token, alumno }, (almacen) => {
    try {
      almacen(RESPUESTAS).put({ cuando, datos }, nombre);
      // A course the page brought takes the place of the night's.
      if (/^contenido\.\d+$/.test(nombre)) almacen(RESPUESTAS).delete(`noche.${nombre}`);
    } catch {
      // Something that can't be copied to the database (a function): it stays in memory only.
    }
  });
}

/** The answer kept under that name, { cuando, datos }, or null when there is none for this key. */
function recuperar(nombre, token) {
  if (!esGuardable(nombre)) return Promise.resolve(null);
  return leer(token, (almacen, hecho) => {
    const pedido = almacen(RESPUESTAS).get(nombre);
    pedido.onsuccess = () => {
      const r = pedido.result;
      if (r && Number.isFinite(r.cuando) && r.datos !== undefined) hecho.valor = r;
    };
  });
}

/** Every answer kept for this key, as [name, { cuando, datos }]: to show them at once, before the campus answers
 * (sesion.js). Empty when there is none or the key isn't the owner's. */
function recuperarTodas(token) {
  return leer(token, (almacen, hecho) => {
    const todas = [];
    const cursor = almacen(RESPUESTAS).openCursor();
    cursor.onsuccess = () => {
      const c = cursor.result;
      if (!c) {
        hecho.valor = todas;
        return;
      }
      const r = c.value;
      if (esGuardable(c.key) && r && Number.isFinite(r.cuando) && r.datos !== undefined) todas.push([c.key, { cuando: r.cuando, datos: r.datos }]);
      c.continue();
    };
  }, []);
}

// ---------- What came from elsewhere: Classroom and El Santo Resumen ----------

// Under names of their own, apart from conCache's (recuperarTodas never brings them), with `de`: whose they are over
// there (the number of the Google account, a fingerprint of the key of El Santo Resumen), so another one never reads them.
const APARTE = /^(classroom|santo)\.[\w:.-]{1,200}$/;
const esAparte = (nombre) => APARTE.test(String(nombre));

/** Keeps what Classroom or El Santo Resumen brought (respaldo.js), with when it came and for whom over there. */
function recordarAparte(nombre, datos, { token, alumno, de = '', cuando = Date.now() }) {
  if (!esAparte(nombre) || typeof de !== 'string') return Promise.resolve();
  return escribir({ token, alumno }, (almacen) => {
    try {
      almacen(RESPUESTAS).put({ cuando, datos, de }, nombre);
    } catch {
      // Something that can't be copied to the database: it stays in memory only.
    }
  });
}

/** What was kept under that name for that one over there, { cuando, datos }, or null. */
function recuperarAparte(nombre, token, de = '') {
  if (!esAparte(nombre)) return Promise.resolve(null);
  return leer(token, (almacen, hecho) => {
    const pedido = almacen(RESPUESTAS).get(nombre);
    pedido.onsuccess = () => {
      const r = pedido.result;
      if (r && r.de === de && Number.isFinite(r.cuando) && r.datos !== undefined) hecho.valor = r;
    };
  });
}

/** Deletes what was kept under names that start with `prefijo` («classroom.»), and the files under it: Desconectar,
 * Desvincular. Whoever owns the database: deleting never needs the key. Never fails. */
function borrarAparte(prefijo) {
  if (!/^(classroom|santo)[.:]/.test(prefijo) || typeof indexedDB === 'undefined') return Promise.resolve();
  return enFila(() => enUna('readwrite', (almacen) => {
    for (const a of [RESPUESTAS, ARCHIVOS, FICHAS]) {
      const cursor = almacen(a).openCursor();
      cursor.onsuccess = () => {
        const c = cursor.result;
        if (!c) return;
        if (String(c.key).startsWith(prefijo)) almacen(a).delete(c.key);
        c.continue();
      };
    }
  }));
}

// ---------- The files of the courses ----------

const direccionValida = (d) => typeof d === 'string' && d.length > 0 && d.length < 2000;

/** A file kept: { blob, sello } (the version it had in the campus when it came), or null. */
function archivoGuardado(direccion, token) {
  if (!direccionValida(direccion)) return Promise.resolve(null);
  return leer(token, (almacen, hecho) => {
    const pedido = almacen(ARCHIVOS).get(direccion);
    pedido.onsuccess = () => {
      const r = pedido.result;
      if (!r || !(r.blob instanceof Blob)) return;
      hecho.valor = { blob: r.blob, sello: typeof r.sello === 'string' ? r.sello : null };
      almacen(FICHAS).put({ peso: r.blob.size, usado: Date.now() }, direccion);
    };
  });
}

/** A PDF kept by parts: { sello, largo, tramos: [{ desde, blob }] }, or null. A whole file kept gives null. */
function partesGuardadas(direccion, token) {
  if (!direccionValida(direccion)) return Promise.resolve(null);
  return leer(token, (almacen, hecho) => {
    const pedido = almacen(ARCHIVOS).get(direccion);
    pedido.onsuccess = () => {
      const r = pedido.result;
      if (!r || r.blob || typeof r.sello !== 'string' || !Number.isSafeInteger(r.largo) || !Array.isArray(r.tramos)) return;
      hecho.valor = { sello: r.sello, largo: r.largo, tramos: r.tramos };
      almacen(FICHAS).put({ peso: pesoDeTramos(r.tramos), usado: Date.now() }, direccion);
    };
  });
}

const pesoDeTramos = (tramos) => tramos.reduce((n, t) => n + (t?.blob instanceof Blob ? t.blob.size : 0), 0);

/** Keeps a file with its version, in place of what there was (also its parts). Makes room by the oldest used. */
function guardarArchivoSinInternet(direccion, sello, blob, { token, alumno }, tope = TOPE_ARCHIVOS) {
  if (!direccionValida(direccion) || typeof sello !== 'string' || !(blob instanceof Blob)) return Promise.resolve();
  if (blob.size > Math.min(ARCHIVO_MAXIMO, tope)) return Promise.resolve();
  return escribir({ token, alumno }, (almacen) => poner(almacen, direccion, { sello, blob }, blob.size, tope));
}

/** Keeps the parts of a PDF brought so far, `largo` its whole size, in place of what there was: never over the whole
 * file of that same version. Counts towards the same tope and per-file limit as whole files. */
function guardarPartesSinInternet(direccion, sello, { largo, tramos }, { token, alumno }, tope = TOPE_ARCHIVOS) {
  if (!direccionValida(direccion) || typeof sello !== 'string' || !Number.isSafeInteger(largo) || !Array.isArray(tramos)) return Promise.resolve();
  const limpios = tramos.filter((t) => Number.isSafeInteger(t?.desde) && t.blob instanceof Blob).map((t) => ({ desde: t.desde, blob: t.blob }));
  if (!limpios.length || largo > Math.min(ARCHIVO_MAXIMO, tope)) return Promise.resolve();
  return escribir({ token, alumno }, (almacen) => {
    const antes = almacen(ARCHIVOS).get(direccion);
    antes.onsuccess = () => {
      if (antes.result?.blob instanceof Blob && antes.result.sello === sello) return;
      poner(almacen, direccion, { sello, largo, tramos: limpios }, pesoDeTramos(limpios), tope);
    };
  });
}

// Puts one thing in ARCHIVOS with its weight, then takes away what was used longest ago until everything fits.
function poner(almacen, direccion, valor, peso, tope) {
  const archivos = almacen(ARCHIVOS);
  const fichas = almacen(FICHAS);
  archivos.put(valor, direccion);
  fichas.put({ peso, usado: Date.now() }, direccion);
  const todas = [];
  const cursor = fichas.openCursor();
  cursor.onsuccess = () => {
    const c = cursor.result;
    if (c) {
      const { peso: p, usado: u } = c.value ?? {};
      todas.push({ k: c.key, peso: Number.isFinite(p) ? p : 0, usado: Number.isFinite(u) ? u : 0 });
      c.continue();
      return;
    }
    let total = todas.reduce((n, f) => n + f.peso, 0);
    for (const f of todas.sort((a, b) => a.usado - b.usado)) {
      if (total <= tope) break;
      if (f.k === direccion) continue;
      archivos.delete(f.k);
      fichas.delete(f.k);
      total -= f.peso;
    }
  };
}

// ---------- What the night download brings (descargasFondo.js) ----------

/** What is kept at an address, without counting as a use: { sello, entero, noche } (`noche`: the night download brought
 * it and the student hasn't opened it since), or null. */
function fichaGuardada(direccion, token) {
  if (!direccionValida(direccion)) return Promise.resolve(null);
  return leer(token, (almacen, hecho) => {
    const pedido = almacen(ARCHIVOS).get(direccion);
    pedido.onsuccess = () => {
      const r = pedido.result;
      if (!r) return;
      const ficha = almacen(FICHAS).get(direccion);
      ficha.onsuccess = () => {
        hecho.valor = { sello: typeof r.sello === 'string' ? r.sello : null, entero: r.blob instanceof Blob, noche: ficha.result?.noche === true };
      };
    };
  });
}

/** Keeps a file the night download brought, marked as such. Makes room only among the night's own files, the oldest
 * first, and only when that is enough. Gives back 'guardado'; 'suyo' when the student keeps something there (it stays
 * as is, also an older version or its parts); 'igual' when that version is here; 'lleno' when there is no room without
 * touching the student's; 'grande' when it is over ARCHIVO_MAXIMO; undefined when it couldn't be written. */
function guardarDeNoche(direccion, sello, blob, { token, alumno }, tope = TOPE_ARCHIVOS) {
  if (!direccionValida(direccion) || typeof sello !== 'string' || !(blob instanceof Blob)) return Promise.resolve(undefined);
  if (blob.size > Math.min(ARCHIVO_MAXIMO, tope)) return Promise.resolve('grande');
  return escribir({ token, alumno }, (almacen, hecho) => {
    const archivos = almacen(ARCHIVOS);
    const fichas = almacen(FICHAS);
    const antes = archivos.get(direccion);
    antes.onsuccess = () => {
      const previa = fichas.get(direccion);
      previa.onsuccess = () => {
        if (antes.result && previa.result?.noche !== true) {
          hecho.valor = 'suyo';
          return;
        }
        if (antes.result?.blob instanceof Blob && antes.result.sello === sello) {
          hecho.valor = 'igual';
          return;
        }
        const todas = [];
        const cursor = fichas.openCursor();
        cursor.onsuccess = () => {
          const c = cursor.result;
          if (c) {
            const { peso: p, usado: u, noche } = c.value ?? {};
            if (c.key !== direccion) todas.push({ k: c.key, peso: Number.isFinite(p) ? p : 0, usado: Number.isFinite(u) ? u : 0, noche: noche === true });
            c.continue();
            return;
          }
          let total = todas.reduce((n, f) => n + f.peso, 0) + blob.size;
          const afuera = [];
          for (const f of todas.filter((x) => x.noche).sort((a, b) => a.usado - b.usado)) {
            if (total <= tope) break;
            afuera.push(f.k);
            total -= f.peso;
          }
          // Not even without every earlier night file: nothing goes, and the night stops.
          if (total > tope) {
            hecho.valor = 'lleno';
            return;
          }
          for (const k of afuera) {
            archivos.delete(k);
            fichas.delete(k);
          }
          archivos.put({ sello, blob }, direccion);
          fichas.put({ peso: blob.size, usado: Date.now(), noche: true }, direccion);
          hecho.valor = 'guardado';
        };
      };
    };
  });
}

/** Salir: everything kept goes away from this browser (sesion.js). Never fails. */
async function borrarSinInternet() {
  generacion += 1;
  const antes = abierta;
  abierta = null;
  try {
    (await antes)?.close();
  } catch {
    // It never opened: nothing to let go of.
  }
  if (typeof indexedDB === 'undefined') return;
  await new Promise((ok) => {
    try {
      const pedido = indexedDB.deleteDatabase(BASE);
      pedido.onsuccess = () => ok();
      pedido.onerror = () => ok();
      pedido.onblocked = () => ok();
    } catch {
      ok();
    }
  });
}

return { ARCHIVO_MAXIMO, recordar, fichaGuardada, guardarDeNoche };
})();
const Fondo = (() => {
// «Descargas inteligentes» (Configuración): with Super CVG closed, the service worker brings the material of the courses
// the student has that day, so a classroom without signal still has it. It runs when Chrome fires `periodicsync` (TAG),
// about once a day, only for an app installed on Android. No imports: scripts/trabajador.mjs puts this file whole in
// sw.js, next to moodle.js (the reads, LECTURA) and sinInternetDisco.js (where it keeps). The page's side, deciding
// whether it is on and what each day has, is descargas.js.
// Its own database, apart from what is kept for without internet:
//   - `llave`: the campus key, encrypted with a key of the browser that can't be taken out of it (only this origin can
//     use it), with the student's number. Only while the setting is on and the student chose «Seguir conectado». Salir,
//     turning it off and a new key delete it. Never in a URL, a log, a cache name or a file.
//   - `plan`: what the page left for it, only numbers: the courses of each day, the sections the student skips and
//     «Ahorro de datos».
//   - `registro`: how much came today (TOPE_DIARIO) and the last download, for Configuración.
// Only on wifi or a cable, as the browser says (`navigator.connection.type`): a connection it doesn't name is not one.
// Only the functions of DE_FONDO, which are reads of LECTURA too: never a write.

/** The name of the periodic sync, and how often it asks for it (Chrome decides when). */
const TAG = 'cvg-descargas';
const CADA_MS = 24 * 60 * 60 * 1000;
/** What a day may bring at most, in bytes: the course answers and the files. */
const TOPE_DIARIO = 200 * 1024 * 1024;
/** From this hour on, the classes are the next day's. */
const DESDE_LA_NOCHE = 18;
/** The only functions of the campus the night asks for. Each one is in LECTURA of moodle.js (tested). */
const DE_FONDO = new Set(['core_course_get_contents']);

const BASE = 'super-cvg-descargas';
const ALMACEN = 'datos';
const LENTAS = ['slow-2g', '2g', '3g'];

// ---------- When ----------

/** Wifi or a cable, as the browser says. Unknown is not. */
const conWifi = (conexion) => Boolean(conexion) && (conexion.type === 'wifi' || conexion.type === 'ethernet');

/** Whether the night may download now: on wifi always, and «Ahorro de datos» as in puedeBajarTodo of trabajador.js
 * («Siempre» never; «Automático» not with the browser's saver or a slow connection; «Nunca» doesn't stop it). */
function puedeBajarDeNoche(conexion, modo) {
  if (modo === 'siempre' || !conWifi(conexion)) return false;
  if (modo === 'nunca') return true;
  return conexion.saveData !== true && !LENTAS.includes(conexion.effectiveType);
}

const dos = (n) => String(n).padStart(2, '0');
/** A day as the calendar keys it (datos.js, claveDeFecha), with the clock of the device. */
const claveDelDia = (fecha) => `${fecha.getFullYear()}-${dos(fecha.getMonth() + 1)}-${dos(fecha.getDate())}`;

/** The day whose classes are coming: today, or tomorrow from DESDE_LA_NOCHE on. */
function diaQueToca(fecha = new Date()) {
  const d = new Date(fecha.getTime());
  if (d.getHours() >= DESDE_LA_NOCHE) d.setDate(d.getDate() + 1);
  return claveDelDia(d);
}

const esNumero = (n) => Number.isSafeInteger(n) && n > 0;

/** The courses of the day that is coming, by number, as the page planned them. */
function materiasQueTocan(plan, fecha = new Date()) {
  const ids = plan?.dias?.[diaQueToca(fecha)];
  return Array.isArray(ids) ? [...new Set(ids.filter(esNumero))] : [];
}

// ---------- What ----------

/** The version of a campus file, the same selloDe of textosPdf.js gives the item aplanarContenido makes of it. */
function selloDeArchivo(c) {
  const modificado = c?.timemodified || c?.timecreated || 0;
  if (!esNumero(modificado)) return null;
  return `${modificado}:${Number.isSafeInteger(c.filesize) ? c.filesize : 0}`;
}

/** The files of a course as the campus answers core_course_get_contents: the ones the page shows (aplanarContenido of
 * datos.js), out of the sections in `saltear`. Each { direccion, sello, peso }. */
function archivosDelCurso(secciones, saltear = []) {
  const fuera = new Set(Array.isArray(saltear) ? saltear : []);
  const vistos = new Set();
  const archivos = [];
  for (const seccion of Array.isArray(secciones) ? secciones : []) {
    if (seccion?.uservisible === false || fuera.has(seccion?.id)) continue;
    for (const modulo of seccion.modules ?? []) {
      if (modulo?.uservisible === false || (modulo.modname !== 'resource' && modulo.modname !== 'folder')) continue;
      for (const c of modulo.contents ?? []) {
        if (c?.type !== 'file' || typeof c.fileurl !== 'string' || vistos.has(c.fileurl)) continue;
        const sello = selloDeArchivo(c);
        if (!sello) continue;
        vistos.add(c.fileurl);
        archivos.push({ direccion: c.fileurl, sello, peso: Number.isSafeInteger(c.filesize) && c.filesize > 0 ? c.filesize : 0 });
      }
    }
  }
  return archivos;
}

/** A read of the night: only DE_FONDO, through `llamar` of moodle.js, which only sends LECTURA. */
function pedirAlCampus(llamar, token, funcion, parametros) {
  if (!DE_FONDO.has(funcion)) return Promise.reject(new Error(`Función fuera de la lista de la noche: ${funcion}`));
  return llamar(token, funcion, parametros);
}

// ---------- Its database ----------

function abrirBase() {
  return new Promise((ok, mal) => {
    if (typeof indexedDB === 'undefined') return mal(new Error('sin base'));
    const pedido = indexedDB.open(BASE, 1);
    pedido.onupgradeneeded = () => {
      if (!pedido.result.objectStoreNames.contains(ALMACEN)) pedido.result.createObjectStore(ALMACEN);
    };
    pedido.onsuccess = () => ok(pedido.result);
    pedido.onerror = () => mal(pedido.error);
    pedido.onblocked = () => mal(new Error('bloqueada'));
  });
}

// One request in its own transaction, the database closed right after: Salir in a tab can delete it at any moment.
async function enLaBase(modo, fn, siFalla) {
  let db;
  try {
    db = await abrirBase();
  } catch {
    return siFalla;
  }
  try {
    return await new Promise((ok) => {
      const tx = db.transaction([ALMACEN], modo);
      const pedido = fn(tx.objectStore(ALMACEN));
      tx.oncomplete = () => ok(modo === 'readonly' ? pedido.result : true);
      tx.onerror = () => ok(siFalla);
      tx.onabort = () => ok(siFalla);
    });
  } catch {
    return siFalla;
  } finally {
    db.close();
  }
}

const leerDato = (clave) => enLaBase('readonly', (a) => a.get(clave), undefined);
const ponerDato = (clave, valor) => enLaBase('readwrite', (a) => a.put(valor, clave), false);

/** Everything of the night downloads goes: the key, the plan and the record. Never fails. */
function borrarDescargas() {
  if (typeof indexedDB === 'undefined') return Promise.resolve();
  return new Promise((ok) => {
    try {
      const pedido = indexedDB.deleteDatabase(BASE);
      pedido.onsuccess = () => ok();
      pedido.onerror = () => ok();
      pedido.onblocked = () => ok();
    } catch {
      ok();
    }
  });
}

/** Stops asking Chrome for the periodic sync: from the page, or from the worker itself. Never fails. */
async function soltarPeriodico() {
  try {
    const registro = typeof self !== 'undefined' && self.registration ? self.registration : await navigator.serviceWorker?.getRegistration?.();
    await registro?.periodicSync?.unregister(TAG);
  } catch {
    // Without periodic sync there is nothing to stop.
  }
}

// ---------- The key ----------

/** Keeps the campus key for the night, encrypted with a new key that never leaves the browser. */
async function guardarLlave(token, alumno) {
  if (typeof token !== 'string' || !token || !esNumero(alumno) || !globalThis.crypto?.subtle) return false;
  try {
    const llave = await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const cifrada = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, llave, new TextEncoder().encode(token));
    return await ponerDato('llave', { alumno, llave, iv, cifrada });
  } catch {
    return false;
  }
}

/** { token, alumno } kept for the night, or null. */
async function leerLlave() {
  const r = await leerDato('llave');
  if (!r || !esNumero(r.alumno) || !r.llave || !r.iv || !r.cifrada || !globalThis.crypto?.subtle) return null;
  try {
    const claro = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: r.iv }, r.llave, r.cifrada);
    return { token: new TextDecoder().decode(claro), alumno: r.alumno };
  } catch {
    return null;
  }
}

// ---------- A night ----------

const pesoDe = (datos) => {
  try {
    return new TextEncoder().encode(JSON.stringify(datos) ?? '').length;
  } catch {
    return 0;
  }
};

/** One download of the night. Everything it needs comes in, so it can be tested alone; in sw.js, the real ones:
 *   `conexion()`: navigator.connection now, asked again before each request.
 *   `llamar`, `pedirArchivo`: the ones of moodle.js.
 *   `disco`: sinInternetDisco.js (recordar, fichaGuardada, guardarDeNoche, ARCHIVO_MAXIMO).
 *   `soltar`: stops the periodic sync, when the campus says the key is dead.
 * Gives back { estado, bytes, archivos }: 'listo', 'sin-llave', 'sin-plan', 'sin-wifi', 'sin-clases', 'tope' (the
 * day's 200 MB), 'lleno' (no room without touching the student's files), 'sesion' (dead key) or 'cortado'. */
async function correr({ ahora = () => new Date(), conexion, llamar, pedirArchivo, disco, soltar = soltarPeriodico }) {
  const llave = await leerLlave();
  if (!llave) return { estado: 'sin-llave', bytes: 0, archivos: 0 };
  const plan = await leerDato('plan');
  if (!plan || plan.alumno !== llave.alumno) return { estado: 'sin-plan', bytes: 0, archivos: 0 };
  const libre = () => puedeBajarDeNoche(conexion(), plan.ahorro);
  if (!libre()) return { estado: 'sin-wifi', bytes: 0, archivos: 0 };
  const ids = materiasQueTocan(plan, ahora());
  if (!ids.length) return { estado: 'sin-clases', bytes: 0, archivos: 0 };

  const { token, alumno } = llave;
  const quien = { token, alumno };
  const hoy = claveDelDia(ahora());
  const antes = await leerDato('registro');
  let delDia = antes?.dia === hoy && Number.isFinite(antes.bytes) ? antes.bytes : 0;
  const esta = { cuando: ahora().getTime(), bytes: 0, archivos: 0 };
  const sumar = (n) => {
    delDia += n;
    esta.bytes += n;
  };
  // Salir or turning it off while this runs takes the key: from then on nothing is written.
  const sigue = async () => (await leerLlave())?.token === token;
  const anotar = async () => {
    if (await sigue()) await ponerDato('registro', { dia: hoy, bytes: delDia, ultima: { ...esta } });
  };
  let estado = 'listo';
  try {
    afuera: for (const id of ids) {
      if (delDia >= TOPE_DIARIO) {
        estado = 'tope';
        break;
      }
      if (!libre()) {
        estado = 'sin-wifi';
        break;
      }
      const secciones = await pedirAlCampus(llamar, token, 'core_course_get_contents', { courseid: id });
      sumar(pesoDe(secciones));
      if (!(await sigue())) {
        estado = 'sin-llave';
        break;
      }
      await disco.recordar(`noche.contenido.${id}`, { secciones }, { ...quien, cuando: Date.now() });
      for (const a of archivosDelCurso(secciones, plan.saltear?.[id])) {
        if (a.peso > disco.ARCHIVO_MAXIMO) continue;
        // What the student keeps stays as it is, also an older version; what an earlier night brought, if it's the same.
        const ficha = await disco.fichaGuardada(a.direccion, token);
        if (ficha && (!ficha.noche || ficha.sello === a.sello)) continue;
        if (delDia >= TOPE_DIARIO || delDia + a.peso > TOPE_DIARIO) {
          estado = 'tope';
          break afuera;
        }
        if (!libre()) {
          estado = 'sin-wifi';
          break afuera;
        }
        const blob = await (await pedirArchivo(token, a.direccion)).blob();
        sumar(blob.size);
        if (!(await sigue())) {
          estado = 'sin-llave';
          break afuera;
        }
        const guardado = await disco.guardarDeNoche(a.direccion, a.sello, blob, quien);
        if (guardado === 'lleno') {
          estado = 'lleno';
          break afuera;
        }
        if (guardado === 'guardado') esta.archivos += 1;
        await anotar();
      }
      await anotar();
    }
  } catch (error) {
    if (error?.codigo === 'sesion') {
      // A key the campus no longer takes: nothing of it stays, and Chrome stops waking the worker for it.
      await borrarDescargas();
      await soltar();
      return { estado: 'sesion', bytes: esta.bytes, archivos: esta.archivos };
    }
    estado = 'cortado';
  }
  await anotar();
  return { estado, bytes: esta.bytes, archivos: esta.archivos };
}

return { TAG, correr };
})();

// A file of assets/ that an earlier version already kept is the same file: it is not downloaded again. Of RESTO, only
// that: what the student opened before, or what came on a free connection, stays without internet after an update.
async function precargar() {
  const cache = await caches.open(SITIO);
  await cache.put(direccion(INSTALADA), new Response(String(Date.now())));
  for (const ruta of RESTO) {
    const previo = await caches.match(direccion(ruta), POR_DIRECCION);
    if (previo && guardable(previo, direccion(ruta))) await cache.put(direccion(ruta), previo);
  }
  const pendientes = [...NUCLEO];
  const trabajar = async () => {
    while (pendientes.length) {
      const ruta = pendientes.shift();
      const url = direccion(ruta);
      const previo = ruta.startsWith('assets/') ? await caches.match(url, POR_DIRECCION) : undefined;
      if (previo && guardable(previo, url)) {
        await cache.put(url, previo);
        continue;
      }
      // The pages, checked with the server; the files of assets/ may come from the browser's own cache (the ones the
      // student already downloaded opening the site): on a phone, those megabytes are not paid twice.
      const respuesta = await fetch(url, { cache: ruta.startsWith('assets/') ? 'default' : 'no-cache', credentials: 'omit' });
      // A file missing means a publication half done: this version doesn't install, the previous one stays.
      if (!guardable(respuesta, url)) throw new Error(`${ruta}: ${respuesta.status}`);
      await cache.put(url, respuesta);
    }
  };
  await Promise.all([trabajar(), trabajar(), trabajar(), trabajar()]);
}

self.addEventListener('install', (evento) => {
  evento.waitUntil(precargar().then(() => self.skipWaiting()));
});

self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    (async () => {
      // The previous version stays: a page opened from it (the shell opens from what was kept, before this worker
      // arrived) may still ask for a screen of its own. Only the newest one before this; older ones go.
      const otras = (await caches.keys()).filter((n) => NUESTRAS.test(n) && n !== SITIO && n !== CACHE_MOTORES);
      const cuando = async (nombre) => Number(await (await (await caches.open(nombre)).match(direccion(INSTALADA)))?.text()) || 0;
      const fechas = await Promise.all(otras.map(cuando));
      const anterior = otras.filter((n) => n.startsWith('cvg-sitio-')).sort((a, b) => fechas[otras.indexOf(b)] - fechas[otras.indexOf(a)])[0];
      for (const nombre of otras) if (nombre !== anterior) await caches.delete(nombre);
      await self.clients.claim();
    })(),
  );
});

// A page never stands in for code: a server that answers a missing file with the site's HTML (and a 200) would leave
// the app unable to start for as long as that copy is kept. Seen with the preview server on 23/11.
const CODIGO = /\.(?:m?js|css|wasm)$/;
const guardable = (respuesta, url) =>
  respuesta.ok && respuesta.type === 'basic' && !(CODIGO.test(new URL(url).pathname) && /html/i.test(respuesta.headers.get('content-type') ?? ''));

// RESTO in the background, one file at a time so it doesn't compete with what the student is opening. The page asks
// for it and stops it when the connection changes (`seguir`); without network it stops, and the next visit goes on.
let seguir = false;
let bajando = null;
async function bajarResto() {
  const cache = await caches.open(SITIO);
  for (const ruta of RESTO) {
    if (!seguir) return;
    const url = direccion(ruta);
    if (await cache.match(url, POR_DIRECCION)) continue;
    let respuesta;
    try {
      respuesta = await fetch(url, { credentials: 'omit' });
    } catch {
      return;
    }
    if (guardable(respuesta, url)) await cache.put(url, respuesta);
  }
}

// What the page loaded before this worker was there (the first visit): kept from the browser's own cache, so it isn't
// downloaded again. Only files of assets/.
const ARCHIVO = /^assets\/[\w.-]+$/;
async function guardarCargadas(rutas) {
  const cache = await caches.open(SITIO);
  for (const ruta of rutas.slice(0, 500)) {
    if (typeof ruta !== 'string' || !ARCHIVO.test(ruta)) continue;
    const url = direccion(ruta);
    if (await cache.match(url, POR_DIRECCION)) continue;
    const respuesta = await fetch(url, { cache: 'force-cache', credentials: 'omit' }).catch(() => null);
    if (respuesta && guardable(respuesta, url)) await cache.put(url, respuesta);
  }
}

self.addEventListener('message', (evento) => {
  if (evento.origin !== self.location.origin) return;
  const { tipo, rutas } = evento.data ?? {};
  if (tipo === 'bajar-todo') {
    seguir = true;
    bajando ??= bajarResto().finally(() => {
      bajando = null;
    });
    evento.waitUntil(bajando);
  } else if (tipo === 'frenar') seguir = false;
  else if (tipo === 'guardar' && Array.isArray(rutas)) evento.waitUntil(guardarCargadas(rutas));
});

async function primeroGuardado(pedido, nombre) {
  const cache = await caches.open(nombre);
  // In this version, or else in the previous one that stays (a page of that version still open).
  const guardada = (await cache.match(pedido, POR_DIRECCION)) ?? (await caches.match(pedido, POR_DIRECCION));
  if (guardada && guardable(guardada, pedido.url)) return guardada;
  const respuesta = await fetch(pedido);
  if (guardable(respuesta, pedido.url)) await cache.put(pedido, respuesta.clone());
  return respuesta;
}

async function primeroRed(pedido, nombre) {
  try {
    const respuesta = await fetch(pedido);
    if (guardable(respuesta, pedido.url)) {
      const copia = respuesta.clone();
      caches.open(nombre).then((c) => c.put(pedido, copia)).catch(() => {});
    }
    return respuesta;
  } catch (error) {
    const guardada = await caches.match(pedido, { ...POR_DIRECCION, ignoreSearch: true });
    if (guardada) return guardada;
    throw error;
  }
}

// The shell for a page: «/» has its own (with the content of the home page), every other address opens 404.html, which
// is the same app, empty, as GitHub Pages does.
const cascaronDe = (url) => caches.open(SITIO).then((c) => c.match(url.href === BASE ? BASE : direccion('404.html'), POR_DIRECCION));

// The kept shell, at once: waiting for GitHub before drawing anything cost 0.7 s on a phone with 4G (measured on 23/11)
// and up to the whole wait with one bar. Its files are this version's, kept with it. A new version comes with a new
// worker: the browser looks for it on each visit, it installs in the background and opens from the next time.
async function pagina(pedido) {
  const guardado = await cascaronDe(new URL(pedido.url));
  return guardado ?? fetch(pedido);
}

// What came waits in its own cache, the last share only: a new one takes the place of the one before. If it can't be
// kept (no room), nothing stays and the page says so.
const COMPARTIR = direccion('compartir');
async function recibirCompartido(pedido) {
  let destino = COMPARTIR;
  try {
    const { archivos, ...resto } = await revisarCompartido(await pedido.formData());
    await caches.delete(COMPARTIDO.cache);
    const cache = await caches.open(COMPARTIDO.cache);
    const lugar = (i) => direccion(`${COMPARTIDO.ruta}${i}`);
    for (const [i, a] of archivos.entries()) {
      await cache.put(lugar(i), new Response(a.archivo, { headers: { 'content-type': TIPOS_COMPARTIDOS[a.tipo] } }));
    }
    const datos = { ...resto, cuando: Date.now(), archivos: archivos.map((a) => ({ nombre: a.nombre, tipo: a.tipo, peso: a.archivo.size })) };
    await cache.put(lugar('datos'), new Response(JSON.stringify(datos), { headers: { 'content-type': 'application/json' } }));
  } catch {
    await caches.delete(COMPARTIDO.cache).catch(() => {});
    destino = `${COMPARTIR}?no-entro`;
  }
  return Response.redirect(destino, 303);
}

self.addEventListener('fetch', (evento) => {
  const pedido = evento.request;
  if (pedido.method === 'POST' && pedido.url.split(/[?#]/)[0] === COMPARTIR) {
    evento.respondWith(recibirCompartido(pedido));
    return;
  }
  if (pedido.method !== 'GET' || pedido.headers.has('range')) return;
  const url = new URL(pedido.url);
  if (url.origin !== self.location.origin || !url.href.startsWith(BASE)) return;
  const ruta = url.href.slice(BASE.length);
  if (pedido.mode === 'navigate') evento.respondWith(pagina(pedido));
  else if (ruta.startsWith('assets/')) evento.respondWith(primeroGuardado(pedido, SITIO));
  else if (ruta.startsWith('motores/') || ruta.startsWith('pdfjs/')) evento.respondWith(primeroGuardado(pedido, CACHE_MOTORES));
  else if (DE_ARRANQUE.has(ruta)) evento.respondWith(primeroGuardado(pedido, SITIO));
  else evento.respondWith(primeroRed(pedido, SITIO));
});

// «Descargas inteligentes»: Chrome wakes the worker about once a day, with the site closed. Everything is decided in
// Fondo.correr: whether it is on (its key), wifi, the day's courses and the 200 MB.
self.addEventListener('periodicsync', (evento) => {
  if (evento.tag !== Fondo.TAG) return;
  evento.waitUntil(
    Fondo.correr({ conexion: () => self.navigator.connection, llamar: Moodle.llamar, pedirArchivo: Moodle.pedirArchivo, disco: Disco }).catch(() => {}),
  );
});
