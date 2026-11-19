var e={python:{nombre:`Python`,extension:`py`,comentario:`#`,topeSegundos:30,peso:`13 MB`,lee:`input()`,ejemplo:`nombre = input("¿Cómo te llamás? ")
print(f"Hola, {nombre}")
`},sql:{nombre:`SQL`,extension:`sql`,comentario:`--`,topeSegundos:15,peso:`700 KB`,ejemplo:`select p.id, p.direccion, p.zona
  , sc.fecha_solicitud, sc.importe_mensual
from propiedad p
inner join solicitud_contrato sc
  on sc.id_propiedad=p.id
where sc.estado='en alquiler'
order by sc.importe_mensual desc;
`},c:{nombre:`C`,extension:`c`,comentario:`//`,topeSegundos:15,peso:`190 KB`,lee:`scanf()`,ejemplo:`#include <stdio.h>

int main(void) {
    char nombre[50];
    printf("¿Cómo te llamás? ");
    scanf("%49s", nombre);
    printf("Hola, %s\\n", nombre);
    return 0;
}
`},javascript:{nombre:`JavaScript`,extension:`js`,comentario:`//`,topeSegundos:15,peso:`1 MB`,lee:`prompt()`,ejemplo:`function saludar(nombre) {
  return \`Hola, \${nombre}\`;
}

const nombre = prompt("¿Cómo te llamás?");
console.log(saludar(nombre));
`}},t=Object.keys(e),n=t=>typeof t==`string`&&Object.hasOwn(e,t),r=1e5,i=2e4,a=e=>typeof e==`string`&&/^l[0-9a-z]{6,24}$/.test(e),o=e=>typeof e==`number`&&Number.isSafeInteger(e)&&e>0&&e<0xe8d4a51000||typeof e==`string`&&/^p[0-9a-z]{6,20}$/.test(e),s=e=>Number.isSafeInteger(e)&&e>0,c=e=>typeof e==`string`?e.replace(/[\p{Cc}\p{Cf}\u2028\u2029]+/gu,` `).replace(/\s+/g,` `).trim().slice(0,80).trim():``,l=e=>typeof e==`string`&&/^q[0-9a-z]{6,24}$/.test(e),u={python:[`py`,`txt`,`csv`,`dat`,`json`],c:[`c`,`h`,`txt`,`csv`,`dat`],sql:[`sql`,`csv`,`der`],javascript:[`js`,`json`,`txt`,`csv`]},d=(e,t)=>!!u[e]?.includes(t),f=4e3,p=8e3,m=15e4,h=e=>typeof e==`string`&&/^c[0-9a-z]{4,24}$/.test(e),g=(e,t)=>typeof e==`string`?e.replace(/\r\n?/g,`
`).replace(/(?![\n\t])[\p{Cc}\p{Zl}\p{Zp}]/gu,``).slice(0,t):``;function _(e){return!e||typeof e!=`object`||!h(e.id)?null:{id:e.id,nombre:c(e.nombre),entrada:g(e.entrada,f),esperada:g(e.esperada,p),...e.exacto===!0?{exacto:!0}:{}}}var v=e=>e.reduce((e,t)=>e+t.nombre.length+t.entrada.length+t.esperada.length,0);function y(e){let t=new Set;return(Array.isArray(e)?e.slice(0,60):[]).map(_).filter(e=>e&&!t.has(e.id)&&t.add(e.id)).slice(0,30)}var b=e=>{let t=y(e.casos);return t.length?{casos:t}:{}};function x(e,t){if(!e.casos)return e;let n=v(e.casos);if(t.queda>=n)return t.queda-=n,e;let{casos:r,...i}=e;return i}function S(e,t,n){let r=[...e?.laboratorio??[],...e?.proyectosLab??[]].filter(e=>e.id!==t);return n.length<=30&&r.reduce((e,t)=>e+v(t.casos??[]),0)+v(n)<=15e4}function C(t){if(!t||typeof t!=`object`||!a(t.id)||!n(t.lenguaje))return null;let r=c(t.nombre);return r?{id:t.id,nombre:r,lenguaje:t.lenguaje,codigo:typeof t.codigo==`string`?t.codigo.replace(/\r\n?/g,`
`).slice(0,i):``,materia:o(t.materia)?t.materia:null,creado:s(t.creado)?t.creado:0,cambiado:s(t.cambiado)?t.cambiado:0,...l(t.proyecto)?{proyecto:t.proyecto}:{},...d(t.lenguaje,t.ext)&&t.ext!==e[t.lenguaje].extension?{ext:t.ext}:{},...b(t)}:null}function w(e){if(!e||typeof e!=`object`||!l(e.id)||!n(e.lenguaje))return null;let t=c(e.nombre);return t?{id:e.id,nombre:t,lenguaje:e.lenguaje,materia:o(e.materia)?e.materia:null,principal:a(e.principal)?e.principal:null,creado:s(e.creado)?e.creado:0,cambiado:s(e.cambiado)?e.cambiado:0,...b(e)}:null}function T(e,t={queda:m}){let n=new Set;return(Array.isArray(e)?e.slice(0,60):[]).map(w).filter(e=>e&&!n.has(e.id)&&n.add(e.id)).sort((e,t)=>e.creado-t.creado||(e.id<t.id?-1:1)).slice(0,30).map(e=>x(e,t))}function E(e,t={queda:m}){let n=(Array.isArray(e)?e.slice(0,120):[]).map(C).filter(Boolean);n.sort((e,t)=>e.creado-t.creado||(e.id<t.id?-1:+(e.id>t.id)));let r=[],i=new Set,a=0;for(let e of n){if(r.length>=60)break;i.has(e.id)||a+e.codigo.length>4e5||(i.add(e.id),a+=e.codigo.length,r.push(x(e,t)))}return r}function D(e,t,n=null){let r=e.filter(e=>e.id!==n);return!n&&r.length>=60?!1:t<=2e4&&r.reduce((e,t)=>e+t.codigo.length,0)+t<=4e5}var O=16777216,k=150,A=e=>typeof e==`string`&&/^[0-9a-z]{24}$/.test(e);function j(e){return typeof e!=`string`||!e||e.length>k||/[\p{Cc}\p{Cf}\u2028\u2029\\]/u.test(e)||e.split(`/`).some(e=>!e||e===`.`||e===`..`)?!1:new TextEncoder().encode(e).length<=k}var M=(e,t)=>new Set([...t.map(e=>e.id),...e.filter(e=>!e.proyecto).map(e=>e.id)]);function N(e,t){let n=[];for(let r of Array.isArray(e)?e.slice(0,800):[])r&&typeof r==`object`&&t.has(r.donde)&&j(r.nombre)&&(r.borrado===!0?n.push({donde:r.donde,nombre:r.nombre,borrado:!0}):A(r.id)&&Number.isSafeInteger(r.tam)&&r.tam>=0&&r.tam<=16777216&&n.push({donde:r.donde,nombre:r.nombre,id:r.id,tam:r.tam}));n.sort((e,t)=>e.donde<t.donde?-1:e.donde>t.donde?1:e.nombre<t.nombre?-1:+(e.nombre>t.nombre));let r=[],i=new Set,a=new Set,o=new Map,s=0;for(let e of n){let t=`${e.donde}/${e.nombre}`,n=e.tam??0,c=o.get(e.donde)??{n:0,tam:0};i.has(t)||e.id&&a.has(e.id)||r.length>=400||c.n>=100||c.tam+n>16777216||s+n>67108864||(i.add(t),e.id&&a.add(e.id),o.set(e.donde,{n:c.n+1,tam:c.tam+n}),s+=n,r.push(e))}return r}export{n as C,r as S,E as _,m as a,t as b,S as c,j as d,M as f,N as g,y as h,p as i,d as l,C as m,i as n,O as o,c as p,f as r,D as s,u as t,A as u,w as v,e as x,T as y};