import{margenLibre as e}from"./escenas-DwXx38_x.js";var t=0,n={cosmico:{modo:2,colores:[[124,58,237],[217,70,239],[56,120,255]],banda:[0,1],alfa:.38,columna:.4},glaciar:{modo:1,colores:[[60,255,180],[80,210,255],[150,120,255]],banda:[0,.6],alfa:.6,columna:.55},lavandaNoche:{modo:t,colores:[[70,50,130],[140,110,210],[0,0,0]],banda:[.5,.95],alfa:.24,columna:.5},infierno:{modo:3,colores:[[255,96,24],[70,18,10],[255,140,40]],banda:[.35,1],alfa:.42,columna:.45},oscuro:{modo:t,colores:[[60,74,108],[150,165,205],[0,0,0]],banda:[0,.55],alfa:.3,columna:.5},claro:{modo:t,colores:[[255,255,255],[228,238,250],[0,0,0]],banda:[0,.45],alfa:.6,columna:.4},rosa:{modo:t,colores:[[255,120,170],[255,196,168],[0,0,0]],banda:[.4,.9],alfa:.26,columna:.45},bosque:{modo:t,colores:[[150,200,175],[215,240,225],[0,0,0]],banda:[.55,1],alfa:.2,columna:.5},cafe:{modo:4,colores:[[255,236,214],[255,200,150],[0,0,0]],banda:[0,1],alfa:.42,columna:.4},lavanda:{modo:t,colores:[[255,250,255],[232,222,250],[0,0,0]],banda:[.05,.6],alfa:.5,columna:.4}},r=Object.keys(n),i=`attribute vec2 p; void main() { gl_Position = vec4(p, 0.0, 1.0); }`,a=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 u_res;
uniform float u_t;
uniform int u_modo;
uniform vec3 u_c1;
uniform vec3 u_c2;
uniform vec3 u_c3;
uniform vec2 u_banda;
uniform float u_alfa;
uniform float u_columna;
uniform float u_ancho;
uniform float u_columnaMedia;
uniform vec3 u_foco;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float ruido(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float capas(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 giro = mat2(0.8, 0.6, -0.6, 0.8);
  for (int i = 0; i < 6; i++) {
    v += a * ruido(p);
    p = giro * p * 2.03 + 17.0;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float y = 1.0 - uv.y;
  float aspecto = u_res.x / u_res.y;
  vec2 p = vec2(uv.x * aspecto, y);
  float t = u_t;
  vec3 color = u_c1;
  float a = 0.0;

  if (u_modo == 0) {
    // Clouds or mist: two drifting layers, the near one faster, lit on top.
    vec2 q = vec2(p.x * 1.4 + t * 0.010, p.y * 3.2);
    float lejos = capas(q + capas(q * 0.7 - t * 0.006) * 0.8);
    float cerca = capas(vec2(p.x * 2.2 + t * 0.022, p.y * 4.5) + 4.0);
    float n = max(lejos, cerca * 0.92);
    a = smoothstep(0.48, 0.82, n);
    color = mix(u_c1, u_c2, smoothstep(0.55, 0.95, n));
  } else if (u_modo == 1) {
    // Aurora: curtains hanging from a wave, rays running along them, green below to violet above.
    float x = p.x * 1.1;
    for (int k = 0; k < 2; k++) {
      float fk = float(k);
      float borde = 0.28 - fk * 0.1 + 0.06 * sin(x * 2.6 + t * 0.12 + fk * 2.3) + (capas(vec2(x * 1.6 + t * 0.03, fk * 5.0)) - 0.5) * 0.16;
      float d = borde - y;
      float largo = 0.12 + 0.14 * capas(vec2(x * 3.0 - t * 0.02, 9.0 + fk));
      float rayos = 0.35 + 0.65 * capas(vec2(x * 34.0 + t * 0.35, t * 0.04 + fk * 3.0));
      float cortina = smoothstep(-0.012, 0.0, d) * exp(-max(d, 0.0) / largo * 2.2) * rayos;
      cortina *= 0.6 + 0.4 * sin(x * 1.7 - t * 0.2 + fk);
      vec3 c = mix(u_c1, u_c2, smoothstep(0.0, largo * 0.8, d));
      c = mix(c, u_c3, smoothstep(largo * 0.6, largo * 1.6, d));
      color = mix(color, c, cortina / max(a + cortina, 0.0001));
      a = max(a, cortina);
    }
  } else if (u_modo == 2) {
    // Nebula: noise warped by noise, flowing slowly, with bright filaments where it is dense.
    vec2 q = vec2(capas(p * 1.6 + vec2(t * 0.012, 0.0)), capas(p * 1.6 + vec2(5.2, 1.3) - t * 0.009));
    vec2 w = vec2(capas(p * 1.9 + 3.0 * q + vec2(1.7, 9.2) + t * 0.006), capas(p * 1.9 + 3.0 * q + vec2(8.3, 2.8) - t * 0.005));
    float n = capas(p * 1.4 + 2.6 * w);
    a = smoothstep(0.38, 0.95, n);
    color = mix(u_c1, u_c2, clamp(q.x * 1.3 - 0.2, 0.0, 1.0));
    color = mix(color, u_c3, clamp(w.y * 1.6 - 0.6, 0.0, 1.0));
    color += vec3(1.0, 0.85, 1.0) * pow(max(n - 0.55, 0.0) * 2.4, 3.0);
  } else if (u_modo == 3) {
    // Fire and smoke rising: heat that wavers near the ground, darker smoke higher up.
    float alto = 1.0 - y;
    vec2 q = vec2(p.x * 2.0 + (capas(vec2(p.x * 3.0, y * 2.0 - t * 0.25)) - 0.5) * 0.5, y * 1.6 + t * 0.07);
    float n = capas(q * 1.5);
    float fuego = smoothstep(0.45, 0.85, n) * smoothstep(0.55, 0.0, alto);
    float humo = smoothstep(0.5, 0.9, capas(vec2(p.x * 1.2 - t * 0.01, y * 2.0 + t * 0.03) + 7.0)) * smoothstep(0.2, 0.65, alto);
    float latido = 0.75 + 0.25 * sin(t * 0.9 + p.x * 4.0);
    color = mix(u_c2, u_c1, fuego);
    color += u_c3 * pow(fuego, 2.0) * 0.6 * latido;
    a = max(fuego * latido, humo * 0.5);
    a += smoothstep(0.08, 0.0, alto) * 0.35 * latido;
  } else {
    // Steam from the cup (u_foco: x, y and its radius in pixels), and a warm haze that drifts.
    float h = (u_foco.y - y * u_ancho / aspecto) / max(u_foco.z, 1.0);
    float dx = (uv.x * u_ancho - u_foco.x) / max(u_foco.z, 1.0);
    if (u_foco.z > 0.0 && h > 0.0) {
      float vaiven = sin(h * 2.2 - t * 1.1) * 0.25 * h + (capas(vec2(h * 0.8 - t * 0.25, t * 0.05)) - 0.5) * 0.9 * h;
      float ancho = 0.35 + h * 0.22;
      float hilo = exp(-pow((dx - vaiven) / ancho, 2.0));
      float textura = capas(vec2(dx * 2.5, h * 1.4 - t * 0.6));
      a = hilo * smoothstep(0.25, 0.75, textura) * smoothstep(0.0, 0.6, h) * (1.0 - smoothstep(2.5, 6.0, h));
    }
    float bruma = smoothstep(0.55, 0.85, capas(vec2(p.x * 1.3 + t * 0.008, p.y * 2.5))) * 0.25;
    color = mix(u_c2, u_c1, a);
    a = max(a, bruma);
  }

  // Only in its band, fainter over the text column.
  a *= smoothstep(u_banda.x - 0.08, u_banda.x + 0.08, y) * (1.0 - smoothstep(u_banda.y - 0.08, u_banda.y + 0.08, y));
  a *= mix(u_columna, 1.0, smoothstep(0.0, 0.08, abs(uv.x - 0.5) - u_columnaMedia));
  a = clamp(a * u_alfa + (hash(gl_FragCoord.xy + fract(t)) - 0.5) / 255.0, 0.0, 1.0);
  gl_FragColor = vec4(clamp(color, 0.0, 1.0) * a, a);
}
`;function o(e,t,n){let r=e.createShader(t);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw Error(e.getShaderInfoLog(r)||`shader`);return r}function s(t,r,s,c){let l=n[r];if(!l)return null;let u=s>1100?.5:.75;t.width=Math.max(1,Math.round(s*u)),t.height=Math.max(1,Math.round(c*u));let d;try{d=t.getContext(`webgl`,{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,powerPreference:`low-power`})}catch{d=null}if(!d)return null;let f;try{if(f=d.createProgram(),d.attachShader(f,o(d,d.VERTEX_SHADER,i)),d.attachShader(f,o(d,d.FRAGMENT_SHADER,a)),d.linkProgram(f),!d.getProgramParameter(f,d.LINK_STATUS))throw Error(d.getProgramInfoLog(f)||`programa`)}catch{return null}d.useProgram(f);let p=d.createBuffer();d.bindBuffer(d.ARRAY_BUFFER,p),d.bufferData(d.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),d.STATIC_DRAW);let m=d.getAttribLocation(f,`p`);d.enableVertexAttribArray(m),d.vertexAttribPointer(m,2,d.FLOAT,!1,0,0);let h=e=>d.getUniformLocation(f,e),[g,_,v]=l.colores.map(e=>e.map(e=>e/255));d.uniform2f(h(`u_res`),t.width,t.height),d.uniform1i(h(`u_modo`),l.modo),d.uniform3f(h(`u_c1`),...g),d.uniform3f(h(`u_c2`),..._),d.uniform3f(h(`u_c3`),...v),d.uniform2f(h(`u_banda`),...l.banda),d.uniform1f(h(`u_alfa`),l.alfa),d.uniform1f(h(`u_columna`),l.columna),d.uniform1f(h(`u_ancho`),s),d.uniform1f(h(`u_columnaMedia`),Math.min(.5,(s-2*e(s))/s/2));let y=e(s);d.uniform3f(h(`u_foco`),s-y/2,c*.8,y>220?Math.min(70,y*.2):0);let b=h(`u_t`);return d.viewport(0,0,t.width,t.height),d.clearColor(0,0,0,0),{pintar(e){d.isContextLost()||(d.clear(d.COLOR_BUFFER_BIT),d.uniform1f(b,e%3600),d.drawArrays(d.TRIANGLES,0,3))},soltar(){d.getExtension(`WEBGL_lose_context`)?.loseContext()}}}export{r as TEMAS_CON_VIDA,s as crearVida};