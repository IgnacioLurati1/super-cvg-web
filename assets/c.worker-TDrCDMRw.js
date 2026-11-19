var e=Uint8Array,t=Uint16Array,n=Int32Array,r=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(e,r){for(var i=new t(31),a=0;a<31;++a)i[a]=r+=1<<e[a-1];for(var o=new n(i[30]),a=1;a<30;++a)for(var s=i[a];s<i[a+1];++s)o[s]=s-i[a]<<5|a;return{b:i,r:o}},s=o(r,2),c=s.b,l=s.r;c[28]=258,l[258]=28;var u=o(i,0),d=u.b;u.r;for(var f=new t(32768),p=0;p<32768;++p){var m=(p&43690)>>1|(p&21845)<<1;m=(m&52428)>>2|(m&13107)<<2,m=(m&61680)>>4|(m&3855)<<4,f[p]=((m&65280)>>8|(m&255)<<8)>>1}for(var h=(function(e,n,r){for(var i=e.length,a=0,o=new t(n);a<i;++a)e[a]&&++o[e[a]-1];var s=new t(n);for(a=1;a<n;++a)s[a]=s[a-1]+o[a-1]<<1;var c;if(r){c=new t(1<<n);var l=15-n;for(a=0;a<i;++a)if(e[a])for(var u=a<<4|e[a],d=n-e[a],p=s[e[a]-1]++<<d,m=p|(1<<d)-1;p<=m;++p)c[f[p]>>l]=u}else for(c=new t(i),a=0;a<i;++a)e[a]&&(c[a]=f[s[e[a]-1]++]>>15-e[a]);return c}),g=new e(288),p=0;p<144;++p)g[p]=8;for(var p=144;p<256;++p)g[p]=9;for(var p=256;p<280;++p)g[p]=7;for(var p=280;p<288;++p)g[p]=8;for(var _=new e(32),p=0;p<32;++p)_[p]=5;var v=/*#__PURE__*/ h(g,9,1),y=/*#__PURE__*/ h(_,5,1),ee=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},b=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},x=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},te=function(e){return(e+7)/8|0},S=function(t,n,r){return(n==null||n<0)&&(n=0),(r==null||r>t.length)&&(r=t.length),new e(t.subarray(n,r))},C=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],w=function(e,t,n){var r=Error(t||C[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,w),!n)throw r;return r},T=function(t,n,o,s){var l=t.length,u=s?s.length:0;if(!l||n.f&&!n.l)return o||new e(0);var f=!o,p=f||n.i!=2,m=n.i;f&&(o=new e(l*3));var g=function(t){var n=o.length;if(t>n){var r=new e(Math.max(n*2,t));r.set(o),o=r}},_=n.f||0,C=n.p||0,T=n.b||0,E=n.l,D=n.d,O=n.m,k=n.n,ne=l*8;do{if(!E){_=b(t,C,1);var A=b(t,C+1,3);if(C+=3,!A){var j=te(C)+4,re=t[j-4]|t[j-3]<<8,ie=j+re;if(ie>l){m&&w(0);break}p&&g(T+re),o.set(t.subarray(j,ie),T),n.b=T+=re,n.p=C=ie*8,n.f=_;continue}if(A==1)E=v,D=y,O=9,k=5;else if(A==2){var ae=b(t,C,31)+257,oe=b(t,C+10,15)+4,se=ae+b(t,C+5,31)+1;C+=14;for(var M=new e(se),N=new e(19),P=0;P<oe;++P)N[a[P]]=b(t,C+P*3,7);C+=oe*3;for(var F=ee(N),I=(1<<F)-1,ce=h(N,F,1),P=0;P<se;){var L=ce[b(t,C,I)];C+=L&15;var j=L>>4;if(j<16)M[P++]=j;else{var le=0,ue=0;for(j==16?(ue=3+b(t,C,3),C+=2,le=M[P-1]):j==17?(ue=3+b(t,C,7),C+=3):j==18&&(ue=11+b(t,C,127),C+=7);ue--;)M[P++]=le}}var de=M.subarray(0,ae),R=M.subarray(ae);O=ee(de),k=ee(R),E=h(de,O,1),D=h(R,k,1)}else w(1);if(C>ne){m&&w(0);break}}p&&g(T+131072);for(var fe=(1<<O)-1,pe=(1<<k)-1,me=C;;me=C){var le=E[x(t,C)&fe],z=le>>4;if(C+=le&15,C>ne){m&&w(0);break}if(le||w(2),z<256)o[T++]=z;else if(z==256){me=C,E=null;break}else{var he=z-254;if(z>264){var P=z-257,ge=r[P];he=b(t,C,(1<<ge)-1)+c[P],C+=ge}var _e=D[x(t,C)&pe],ve=_e>>4;_e||w(3),C+=_e&15;var R=d[ve];if(ve>3){var ge=i[ve];R+=x(t,C)&(1<<ge)-1,C+=ge}if(C>ne){m&&w(0);break}p&&g(T+131072);var ye=T+he;if(T<R){var be=u-R,xe=Math.min(R,ye);for(be+T<0&&w(3);T<xe;++T)o[T]=s[be+T]}for(;T<ye;++T)o[T]=o[T-R]}}n.l=E,n.p=me,n.b=T,n.f=_,E&&(_=1,n.m=O,n.d=D,n.n=k)}while(!_);return T!=o.length&&f?S(o,0,T):o.subarray(0,T)},E=/*#__PURE__*/ new e(0),D=function(e,t){return e[t]|e[t+1]<<8},O=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},k=function(e,t){return O(e,t)+O(e,t+4)*4294967296};function ne(e,t){return T(e,{i:2},t&&t.out,t&&t.dictionary)}var A=typeof TextDecoder<`u`&&/*#__PURE__*/ new TextDecoder;try{A.decode(E,{stream:!0})}catch{}var j=function(e){for(var t=``,n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return{s:t,r:S(e,n-1)};i?i==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function re(e,t){if(t){for(var n=``,r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}if(A)return A.decode(e);var i=j(e),a=i.s,n=i.r;return n.length&&w(8),a}var ie=function(e,t){return t+30+D(e,t+26)+D(e,t+28)},ae=function(e,t,n){var r=D(e,t+28),i=D(e,t+30),a=re(e.subarray(t+46,t+46+r),!(D(e,t+8)&2048)),o=t+46+r,s=oe(e,o,i,n,O(e,t+20),O(e,t+24),O(e,t+42)),c=s[0],l=s[1],u=s[2];return[D(e,t+10),c,l,a,o+i+D(e,t+32),u]},oe=function(e,t,n,r,i,a,o){var s=i==4294967295,c=a==4294967295,l=o==4294967295,u=t+n,d=s+c+l;if(r&&d){for(;t+4<u;t+=4+D(e,t+2))if(D(e,t)==1)return[s?k(e,t+4+8*c):i,c?k(e,t+4):a,l?k(e,t+4+8*(c+s)):o,1];r<2&&w(13)}return[i,a,o,0]};function se(t,n){for(var r={},i=t.length-22;O(t,i)!=101010256;--i)(!i||t.length-i>65558)&&w(13);var a=D(t,i+8);if(!a)return{};var o=O(t,i+16),s=O(t,i-20)==117853008;if(s){var c=O(t,i-12);s=O(t,c)==101075792,s&&(a=O(t,c+32),o=O(t,c+48))}for(var l=n&&n.filter,u=0;u<a;++u){var d=ae(t,o,s),f=d[0],p=d[1],m=d[2],h=d[3],g=d[4],_=d[5],v=ie(t,_);o=g,(!l||l({name:h,size:p,originalSize:m,compression:f}))&&(f?f==8?r[h]=ne(t.subarray(v,v+p),{out:new e(m)}):w(14,`unknown compression type `+f):r[h]=S(t,v,v+p))}return r}const M=4096,N={NADA:0,NULO:1,PILA:2},P={falla:`__laboratorio_falla`,direccion:`__laboratorio_direccion`,pila:`__laboratorio_pila`};var F=class{constructor(e,t=0,n=e.length){this.b=e,this.p=t,this.fin=n}byte(){if(this.p>=this.fin)throw Error(`fin`);return this.b[this.p++]}u32(){let e=0,t=0;for(;;){let n=this.byte();if(e+=(n&127)*2**t,t+=7,!(n&128))return e;if(t>35)throw Error(`leb`)}}saltarLeb(){for(let e=0;e<10;e+=1)if(!(this.byte()&128))return;throw Error(`leb`)}nombre(){let e=this.u32(),t=new TextDecoder().decode(this.b.subarray(this.p,this.p+e));return this.p+=e,t}};const I=e=>{let t=[],n=e>>>0;do{let e=n&127;n>>>=7,n&&(e|=128),t.push(e)}while(n);return t},ce=e=>{let t=new TextEncoder().encode(e);return[...I(t.length),...t]},L=(e,t)=>[e,...I(t.length),...t],le=e=>[...I(e.length),...e.flat()],ue={54:127,55:126,56:125,57:124,58:127,59:127,60:126,61:126,62:126};function de(e){if(e[0]!==0||e[1]!==97||e[2]!==115||e[3]!==109||e[4]!==1)throw Error(`magic`);let t=[],n=new F(e,8);for(;n.p<e.length;){let e=n.byte(),r=n.u32();t.push({id:e,desde:n.p,hasta:n.p+r}),n.p+=r}return t}function R(e,t){let n=new F(e,t.desde,t.hasta),r={funciones:0,globales:0};for(let e=n.u32();e>0;--e){n.nombre(),n.nombre();let e=n.byte();if(e===0)n.u32(),r.funciones+=1;else if(e===1){n.byte();let e=n.byte();n.u32(),e&1&&n.u32()}else if(e===2){let e=n.byte();n.u32(),e&1&&n.u32()}else if(e===3)n.byte(),n.byte(),r.globales+=1;else if(e===4)n.byte(),n.u32();else throw Error(`import`)}return r}function fe(e){let t=/* @__PURE__ */ new Map,n=/* @__PURE__ */ new Map;try{for(let r of de(e)){if(r.id!==0)continue;let i=new F(e,r.desde,r.hasta);if(i.nombre()===`name`)for(;i.p<r.hasta;){let e=i.byte(),r=i.u32()+i.p;if(e===1||e===7){let r=e===1?t:n;for(let e=i.u32();e>0;--e)r.set(i.u32(),i.nombre())}i.p=r}}}catch{}return{funciones:t,globales:n}}function pe(e,t,n,r){let i=new F(e,t,n),a=[],o=t=>{for(let n=t;n<i.p;n+=1)a.push(e[n])},s=i.p;for(let e=i.u32();e>0;--e)i.u32(),i.byte();for(o(s);i.p<n;){s=i.p;let e=i.byte();if(e>=40&&e<=62)a.push(16,...I(e<=53?r.carga:r.guardado[ue[e]])),i.u32()&64&&i.u32(),i.u32(),o(s);else{switch(e){case 2:case 3:case 4:case 6:i.saltarLeb();break;case 7:case 8:case 9:case 12:case 13:case 16:case 18:case 20:case 21:case 24:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 210:i.u32();break;case 14:for(let e=i.u32()+1;e>0;--e)i.u32();break;case 17:case 19:i.u32(),i.u32();break;case 28:for(let e=i.u32();e>0;--e)i.byte();break;case 63:case 64:i.u32();break;case 65:case 66:case 208:i.saltarLeb();break;case 67:i.p+=4;break;case 68:i.p+=8;break;case 252:{let e=i.u32();if(e<=7)break;if(e===10||e===11)a.push(16,...I(e===10?r.copia:r.relleno)),i.u32(),e===10&&i.u32();else if(e===8||e===12||e===14)i.u32(),i.u32();else if(e===9||e===13||e>=15&&e<=17)i.u32();else throw Error(`0xfc ${e}`);break}default:if(e<=1||e===5||e===10||e===11||e===15||e===25||e===26||e===27||e>=69&&e<=196||e===209)break;throw Error(`op ${e}`)}o(s)}}return a}function me(e,{pila:t,paginas:n=4096}={}){try{return{bytes:z(e,t,n),vigilado:!0}}catch{return{bytes:e,vigilado:!1}}}function z(e,t,n){let r=de(e),i=e=>r.find(t=>t.id===e),a=i(1),o=i(3),s=i(6),c=i(7),l=i(10),u=i(5);if(!a||!o||!s||!c||!l||!u)throw Error(`secciones`);let d=i(2)?R(e,i(2)):{funciones:0,globales:0},f=t=>new F(e,t.desde,t.hasta).u32(),p=f(a),m=f(o),h=[...fe(e).globales].find(([,e])=>e===`__stack_pointer`)?.[0]??-1,g=new F(e,s.desde,s.hasta),_=g.u32();for(let n=0;n<_;n+=1){let r=g.byte(),i=g.byte(),a=g.byte(),o=null;if(a===65){let t=g.p;g.saltarLeb(),o=_e(e.subarray(t,g.p))}else if(a===66)g.saltarLeb();else if(a===67)g.p+=4;else if(a===68)g.p+=8;else if(a===35||a===210)g.u32();else throw Error(`global`);if(g.byte()!==11)throw Error(`global`);h<0&&r===127&&i&&o===t&&(h=d.globales+n)}if(h<0)throw Error(`pila`);let v=d.globales+_,y=v+1,ee=p,b={127:p+1,126:p+2,125:p+3,124:p+4},x=p+5,te=[[96,1,127,1,127],...[127,126,125,124].map(e=>[96,2,127,e,2,127,e]),[96,3,127,127,127,3,127,127,127]],S=d.funciones+m,C={carga:S,guardado:{127:S+1,126:S+2,125:S+3,124:S+4},copia:S+5,relleno:S+6},w=e=>[32,e,65,...ge(M),73,4,64,32,e,36,...I(y),65,N.PILA,65,N.NULO,35,...I(h),65,...ge(M),73,27,36,...I(v),0,11],T=e=>{let t=[0,...e,11];return[...I(t.length),...t]},E=[T([...w(0),32,0]),...[127,126,125,124].map(()=>T([...w(0),32,0,32,1])),T([32,2,4,64,...w(0),...w(1),11,32,0,32,1,32,2]),T([32,2,4,64,...w(0),11,32,0,32,1,32,2])],D=[ee,b[127],b[126],b[125],b[124],x,x],O=new F(e,l.desde,l.hasta),k=O.u32(),ne=[];for(let t=0;t<k;t+=1){let t=O.u32(),n=pe(e,O.p,O.p+t,C);ne.push([...I(n.length),...n]),O.p+=t}let A=[...e.subarray(0,8)],j=t=>{let n=new F(e,t.desde,t.hasta);return n.u32(),[...e.subarray(n.p,t.hasta)]};for(let t of r){let r=[...e.subarray(t.desde,t.hasta)];if(t===a)A.push(...L(1,[...I(p+te.length),...j(t),...te.flat()]));else if(t===o)A.push(...L(3,[...I(m+D.length),...j(t),...D.flatMap(I)]));else if(t===u)A.push(...L(5,he(e,t,n)));else if(t===s)A.push(...L(6,[...I(_+2),...j(t),127,1,65,0,11,127,1,65,0,11]));else if(t===c){let e=[[...ce(P.falla),3,...I(v)],[...ce(P.direccion),3,...I(y)],[...ce(P.pila),3,...I(h)]];A.push(...L(7,[...I(f(t)+e.length),...j(t),...e.flat()]))}else t===l?A.push(...L(10,le([...ne,...E]))):A.push(t.id,...I(r.length),...r)}let re=new Uint8Array(A);if(!WebAssembly.validate(re))throw Error(`inválido`);return re}function he(e,t,n){let r=new F(e,t.desde,t.hasta);if(r.u32()!==1)throw Error(`memorias`);let i=r.byte();if(i&-2)throw Error(`memoria`);let a=r.u32(),o=i&1?r.u32():1/0,s=Math.max(a,Math.min(o,n));return[1,1,...I(a),...I(s)]}function ge(e){let t=[],n=e;for(;;){let e=n&127;if(n>>=7,n===0&&!(e&64)||n===-1&&e&64)return t.push(e),t;t.push(e|128)}}function _e(e){let t=0,n=0,r=0;for(let i of e)t|=(i&127)<<n,n+=7,r=i;return n<32&&r&64&&(t|=-1<<n),t}function ve(e){let t=String(e??``).replace(/\n+$/,``).split(`
`),n=-1;return t.forEach((e,t)=>{/^\s/.test(e)&&(n=t)}),{donde:t.slice(0,n+1).join(`
`),que:t.slice(n+1).join(`
`)}}const ye=(e,t)=>`${e}\nMensaje original: ${t}`,be=e=>ve(e).que.split(`
`).find(e=>e.trim()&&!e.startsWith(`Mensaje original: `))??``,xe={"stdio.h":`printf scanf puts putchar getchar gets fgets fopen fclose fprintf fscanf sprintf snprintf sscanf fputs fgetc fputc getc putc ungetc perror fflush fread fwrite feof ferror clearerr rewind fseek ftell fgetpos fsetpos setbuf setvbuf remove rename getline tmpfile vprintf vfprintf vsprintf vsnprintf EOF FILE SEEK_SET SEEK_CUR SEEK_END stdin stdout stderr`,"stdlib.h":`malloc calloc realloc free exit atexit atoi atof atol atoll strtol strtoul strtoll strtoull strtod strtof rand srand qsort bsearch abs labs llabs div ldiv lldiv abort getenv EXIT_SUCCESS EXIT_FAILURE RAND_MAX`,"string.h":`strlen strcpy strncpy strcat strncat strcmp strncmp strchr strrchr strstr strtok strdup strndup strspn strcspn strpbrk strerror strcasecmp strncasecmp memcpy memmove memset memcmp memchr`,"math.h":`sqrt cbrt pow hypot sin cos tan asin acos atan atan2 sinh cosh tanh exp exp2 log log10 log2 fabs floor ceil round trunc rint lround fmod fmin fmax sqrtf powf fabsf floorf ceilf roundf M_PI M_E INFINITY NAN isnan isinf`,"ctype.h":`isdigit isalpha isalnum isspace isblank isupper islower ispunct isxdigit isprint isgraph iscntrl toupper tolower`,"time.h":`time clock difftime mktime localtime gmtime strftime asctime ctime time_t clock_t CLOCKS_PER_SEC`,"stdbool.h":`bool true false`,"assert.h":`assert`,"limits.h":`INT_MAX INT_MIN UINT_MAX LONG_MAX LONG_MIN LLONG_MAX LLONG_MIN SHRT_MAX SHRT_MIN CHAR_MAX CHAR_MIN`,"stdint.h":`int8_t uint8_t int16_t uint16_t int32_t uint32_t int64_t uint64_t intptr_t uintptr_t INT32_MAX INT64_MAX`,"float.h":`DBL_MAX DBL_MIN DBL_EPSILON FLT_MAX FLT_MIN FLT_EPSILON`,"stddef.h":`NULL size_t`},Se=new Map(Object.entries(xe).flatMap(([e,t])=>t.split(` `).map(t=>[t,e]))),Ce=/^(?:fork|vfork|wait|waitpid|exec\w*|pipe2?|dup2?|kill|signal|raise|getpid|getppid|sleep|usleep|pthread_\w+|sem_\w+|shm\w+|mmap|munmap|popen|pclose)$/,we=/^(?:pthread|semaphore|signal|sys\/wait|sys\/mman|sys\/ipc|sys\/shm|sys\/sem|sys\/socket|netinet\/in|arpa\/inet|termios|dirent|sched)\.h$/,B=e=>`\`${e}\``,Te=(e,t,n)=>e===1?t:n,Ee=[[/^`;' expected$/,"Falta un `;`."],[/^`\)' expected$/,"Falta cerrar un paréntesis, `)`."],[/^`\(' expected$/,"Falta abrir un paréntesis, `(`."],[/^`\]' expected$/,"Falta cerrar un corchete, `]`."],[/^`\}' expected$/,"Falta cerrar una llave, `}`. Cada `{` necesita la suya."],[/^`:' expected$/,"Falta un `:`."],[/^`,' expected$/,`Falta una coma.`],[/^`,' or `\)` expected$|^`,' or `\)' expected$/,`Falta una coma o cerrar el paréntesis.`],[/^`;' or `,' expected$/,"Falta un `;` o una coma."],[/^`\}' or `,' expected$/,`Falta una coma o cerrar la llave.`],[/^`while' expected$/,"Falta el `while` del `do`."],[/^`=' expected for dotted initializer$/,"Falta el `=` después del campo."],[/^String not closed$/,`Falta cerrar las comillas de un texto.`],[/^Block comment not closed$/,"Falta cerrar un comentario con `*/`."],[/^Illegal literal$|^Illegal (?:unsigned|long) literal$/,`Ese número está mal escrito.`],[/^Illegal escape$/,"Esa secuencia con `\\` no existe."],[/^Unexpected character `(.)'\(\d+\)$/,e=>`C no entiende el carácter ${B(e[1])}.`],[/^Illegal byte sequence$/,`Hay un carácter que C no entiende.`],[/^ident expected$|^member name expected$/,`Falta un nombre.`],[/^type expected$/,`Falta un tipo.`],[/^expression expected$/,`Falta una expresión.`],[/^statement expected$/,`Falta una instrucción.`],[/^unexpected token$|^Unexpected$/,`Algo sobra o está fuera de lugar.`],[/^`(\w+)' undeclared$/,e=>De(e[1])],[/^`(\w+)' undefined$/,e=>`${B(e[1])} no está definida.`],[/^`(\w+)' (?:is )?already defined$/,e=>`${B(e[1])} ya está declarada. Usá otro nombre.`],[/^`(\w+)' function already defined$/,e=>`La función ${B(e[1])} ya está escrita más arriba.`],[/^`(\w+)' type conflict$|^definition conflict: `(\w+)'$/,e=>`${B(e[1]??e[2])} está declarada con otro tipo más arriba.`],[/^function `(\w+)' expect (\d+) arguments, but (\d+)$/,e=>`${B(e[1])} recibe ${e[2]} ${Te(Number(e[2]),`argumento`,`argumentos`)} y le pasaste ${e[3]}.`],[/^cannot call except function$/,`Eso no es una función, pero se llama como una.`],[/^`(\w+)' doesn't exist in the struct$|^`(\w+)' is not member of struct$/,e=>`El struct no tiene un campo ${B(e[1]??e[2])}.`],[/^`\.' for non struct value$/,"Usaste `.` en algo que no es un struct."],[/^`->' for non pointer value$/,"Usaste `->` en algo que no es un puntero. Si es un struct, va con `.`."],[/^`->' for non struct value$/,"Usaste `->` en un puntero que no apunta a un struct."],[/^cannot assign to array$/,"No se puede asignar un arreglo entero. Copialo elemento por elemento o con `memcpy`."],[/^cannot assign to (.+)$/,`Eso no se puede asignar.`],[/^cannot assign to incompatible struct$/,"Los dos lados del `=` no son del mismo tipo."],[/^cannot modify `const'$/,"Eso es `const` y no se puede cambiar."],[/^lvalue expected$|^Cannot take reference$/,"A la izquierda del `=` (o después de `&`) va una variable."],[/^convert value from type `(.+?)' to `(.+?)'$|^convert value from type `(.+?)' to array type `(.+?)'$/,e=>`No se puede pasar de ${B(e[1]??e[3])} a ${B(e[2]??e[4])}.`],[/^incompatible type$|^lhs and rhs must be same type$/,`Los tipos no coinciden.`],[/^cannot compare except numbers$/,`Solo se pueden comparar números o punteros.`],[/^array or pointer required for `\['$/,"Usaste `[]` en algo que no es un arreglo ni un puntero."],[/^int required for `\['$/,"Lo que va entre `[]` tiene que ser un entero."],[/^cannot dereference raw type$/,"Usaste `*` en algo que no es un puntero."],[/^`return' required a value$/,"Falta el valor del `return`."],[/^void function `return' a value$/,"Una función `void` no devuelve nada."],[/^`(break|continue)' cannot be used outside of loop$/,e=>`${B(e[1])} va adentro de un bucle${e[1]===`break`?" o de un `switch`":``}.`],[/^`(case|default)' cannot use outside of `switch`$/,e=>`${B(e[1])} va adentro de un \`switch\`.`],[/^`default' already defined in `switch'$/,"Este `switch` ya tiene un `default`."],[/^case value `(.+)' already defined$/,e=>`Este \`switch\` ya tiene un \`case ${e[1]}\`.`],[/^excess elements in array initializer$|^initializer more than array size$/,`Hay más valores que lugares en el arreglo.`],[/^array size must be greater than 0.*$/,`El tamaño de un arreglo tiene que ser mayor que cero.`],[/^(?:must be constant|constant expression expected|initializer must be constant|constant integer expected)$/,`Acá va un valor fijo, no una variable.`],[/^illegal type combination$/,`Esa combinación de tipos no existe.`],[/^`void' not allowed$/,"Acá no puede ir algo `void`."],[/^size unknown$/,`No se sabe cuánto mide ese tipo. ¿Falta declarar el struct?`],[/^incomplete struct: `(\w+)'$/,e=>`El struct ${B(e[1])} no tiene sus campos declarados.`],[/^Character not closed$/,`Un carácter va entre comillas simples y es uno solo, como 'a'. Para varias letras va un texto entre comillas dobles.`],[/^compare pointer to other types$/,"Se compara un puntero, o un texto, con algo que no es un puntero. Para comparar textos va `strcmp`."],[/^int type expected$/,"Esa operación, como el `%`, solo anda con números enteros."],[/^divide by 0$/,`Divide por cero.`],[/^unreachable$/,`Este código nunca se ejecuta.`],[/^`return' required$/,"Falta un `return` al final de la función."],[/^`return' with void value$/,"Un `return` sin valor en una función que devuelve algo."],[/^unused variable:? `(\w+)'$/,e=>`La variable ${B(e[1])} no se usa.`],[/^unused function: `(\w+)'$/,e=>`La función ${B(e[1])} no se usa.`],[/^always (true|false)$/,e=>`Esa condición siempre da ${e[1]===`true`?`verdadero`:`falso`}.`]];function De(e){if(Ce.test(e))return`${B(e)} no anda en el laboratorio. Corre un solo programa, sin procesos, hilos ni señales.`;let t=Se.get(e);return t?`${B(e)} no está declarada. Sumá \`#include <${t}>\` arriba de todo.`:`${B(e)} no está declarada. Fijate que esté bien escrita y declarada antes de usarla.`}function Oe(e){for(let[t,n]of Ee){let r=t.exec(e);if(r)return typeof n==`function`?n(r):n}return e}function ke(e,t){let n=String(e??``).replace(/\r/g,``).split(`
`),r=[],i=[];for(let e=0;e<n.length;e+=1){let a=n[e];if(!a.trim())continue;let o=/^(.+?)\((\d+)\): (warning: )?(.*)$/.exec(a);if(!o){i.push(a.trim());continue}let s=t.get(o[1])??null,c={propio:s!==null,archivo:s,linea:Number(o[2]),columna:-1,aviso:!!o[3],mensaje:o[4].trim(),fuente:``,marca:``};/^[ \t]*\^~*$/.test(n[e+2]??``)&&(c.fuente=n[e+1],c.marca=n[e+2],c.columna=c.marca.indexOf(`^`),e+=2),r.push(c)}return{diagnosticos:r,sueltos:i}}function Ae(e){let t=``,n=0;for(;n<e.length;){let r=e[n];if(r===`/`&&e[n+1]===`/`)for(;n<e.length&&e[n]!==`
`;)t+=` `,n+=1;else if(r===`/`&&e[n+1]===`*`){let r=e.indexOf(`*/`,n+2),i=r<0?e.length:r+2;t+=e.slice(n,i).replace(/[^\n]/g,` `),n=i}else if(r===`"`||r===`'`){let i=n+1;for(;i<e.length&&e[i]!==r&&e[i]!==`
`;)i+=e[i]===`\\`?2:1;t+=r+e.slice(n+1,i).replace(/[^\n]/g,`x`)+(e[i]===r?r:``),n=e[i]===r?i+1:i}else t+=r,n+=1}return t}function je(e,t,n){let r=Ae(String(e)).split(`
`),i=(r[t-1]??``).slice(0,Math.max(0,n));if(i.trim())return{linea:t,columna:i.trimEnd().length};for(let e=t-1;e>=1;--e){let t=r[e-1]??``;if(t.trim())return{linea:e,columna:t.trimEnd().length}}return{linea:t,columna:Math.max(0,n)}}function Me(e,t=-1,n=1){let r=e.replace(/\t/g,`    `),i=r.length-r.trimStart().length,a=e.slice(0,Math.max(0,t)).replace(/\t/g,`    `).length-i,o=t>=0?`\n    ${` `.repeat(Math.max(0,a))}^${`~`.repeat(Math.max(0,n-1))}`:``;return`    ${r.slice(i)}${o}`}const Ne=[...Object.keys(xe),`stdint.h`,`stdarg.h`,`float.h`,`errno.h`,`inttypes.h`,`strings.h`,`unistd.h`,`wchar.h`,`setjmp.h`,`fcntl.h`,`stdnoreturn.h`,`alloca.h`,`libgen.h`,`sys/stat.h`,`sys/types.h`];function Pe(e,t){let n=Array.from({length:e.length+1},(e,n)=>[n,...Array(t.length).fill(0)]);for(let e=1;e<=t.length;e+=1)n[0][e]=e;for(let r=1;r<=e.length;r+=1)for(let i=1;i<=t.length;i+=1)n[r][i]=Math.min(n[r-1][i]+1,n[r][i-1]+1,n[r-1][i-1]+(e[r-1]===t[i-1]?0:1));return n[e.length][t.length]}function Fe(e){let t=e.replace(/^[<"]|[>"]$/g,``);if(we.test(t))return`\`<${t}>\` no está en el laboratorio. Corre un solo programa, sin procesos, hilos ni señales.`;if(/^(?:conio|windows|dos)\.h$/i.test(t))return`\`<${t}>\` es de Windows y acá no está.`;let n=Ne.map(e=>[e,Pe(e,t)]).filter(([,e])=>e<=2).sort((e,t)=>e[1]-t[1])[0];return n?`No existe \`<${t}>\`. ¿Quisiste decir \`<${n[0]}>\`?`:`No existe \`<${t}>\` en el laboratorio.`}function Ie(e,t){return String(e).split(`
`).findIndex(e=>e.includes(t))+1}function Le(e,t){for(let n of e){let e=Ie(n.contenido,t);if(e)return{archivo:n.nombre,linea:e,codigo:n.contenido}}return{archivo:e[0]?.nombre??null,linea:0,codigo:e[0]?.contenido??``}}function Re(e,t){let n=[...e.split(`/`).slice(0,-1),...t.split(`/`)],r=[];for(let e of n)e===`..`?r.pop():e&&e!==`.`&&r.push(e);return r.join(`/`)}const ze=(e,t)=>typeof e==`string`||e==null?[{nombre:t??`tu_codigo.c`,contenido:String(e??``)}]:e;function Be(e,t){if(!/^\w+$/.test(t))return 0;let n=Ae(String(e)).split(`
`),r=new RegExp(String.raw`^[A-Za-z_][\w\s*]*?\b${t}\s*\(`);for(let e=0;e<n.length;e+=1){if(!r.test(n[e]))continue;let t=n.slice(e,e+6).join(`
`),i=t.indexOf(`{`),a=t.indexOf(`;`);if(i>=0&&(a<0||i<a))return e+1}return 0}function Ve(e,t,n){let r=ze(t,n),i=r.length>1,a=new Map(r.map(e=>[`/home/alumno/${e.nombre}`,e.nombre])),o=new Map(r.map(e=>[e.nombre,String(e.contenido)])),{diagnosticos:s,sueltos:c}=ke(e,a),l=s.filter(e=>!e.aviso&&e.propio),u=s.filter(e=>e.aviso&&e.propio&&!l.length);if(l.length){let e=l[0],t=e.archivo,n=o.get(t),r=e.linea,i=e.fuente,a=e.columna,s=e.marca.trim().length||1,c=Oe(e.mensaje),u=c!==e.mensaje;if(/^`[^']+'(?: or `[^'`]+[`'])? expected$/.test(e.mensaje)&&e.columna>=0){let l=je(n,e.linea,e.columna),u=/^\s*#\s*include\s*"([^"]+)"/.exec(String(n).split(`
`)[l.linea-1]??``)?.[1],d=u&&Re(t,u);if(d&&o.has(d)&&(t=d,n=o.get(d),l=je(n,n.split(`
`).length+1,0)),(t!==e.archivo||l.linea!==e.linea||l.columna<e.columna)&&(r=l.linea,i=String(n).split(`
`)[r-1]??``,a=l.columna,s=1,t!==e.archivo||l.linea!==e.linea)){let[,e,t]=/^(.*?)\.(?: (.*))?$/.exec(c)??[null,c,``];c=`${e} al final de la línea ${r}.${t?` ${t}`:``}`}}let d=new Set(l.slice(1).filter(t=>t.linea!==e.linea||t.archivo!==e.archivo).map(e=>`${e.archivo}:${e.linea}`)),f=[`  ${t}, línea ${r}`,i.trim()?Me(i,a,s):``].filter(Boolean).join(`
`),p=d.size?`\n${Te(d.size,`Hay otro error más abajo.`,`Hay errores en ${d.size} líneas más.`)} Arreglá este primero y corré de nuevo.`:``;return{error:`${f}\n${u?ye(c,e.mensaje):c}${p}`,linea:r,archivo:t,avisos:[]}}for(let e of c){let t=/^Cannot open file: (.+?)\s*$/.exec(e);if(t){let e=t[1].replace(/^[<"]|[>"]$/g,``),n=Le(r,e),i=n.linea||1,a=String(n.codigo).split(`
`)[i-1]??``,o=/^\s*#\s*include\s*"/.test(a)&&a.includes(`"${e}"`)?`No está el archivo ${B(e)} en el proyecto. Fijate que se llame igual, con su carpeta.`:Fe(t[1]);return{error:`  ${n.archivo}, línea ${i}\n${Me(a)}\n${o}`,linea:i,archivo:n.archivo,avisos:[]}}let n=/^Unresolved: (?:env\.)?(\w+)$/.exec(e);if(n){let e=n[1];if(e===`__main_argc_argv`||e===`main`||e===`__main_void`)return{error:"Falta la función `main`, que es donde empieza el programa.",linea:0,archivo:null,avisos:[]};let t=Le(r,`${e}(`);return Ce.test(e)?{error:De(e),linea:t.linea,archivo:t.archivo,avisos:[]}:{error:`Falta escribir la función ${B(e)}. Está declarada, pero no tiene su cuerpo con \`{ }\`.`,linea:t.linea,archivo:t.archivo,avisos:[]}}let i=/^duplicate symbol: (\w+)$/.exec(e);if(i){let e=/^__main_(?:void|argc_argv)$/.test(i[1])?`main`:i[1],t=r.filter(t=>t.nombre.endsWith(`.c`)&&Be(t.contenido,e)).map(e=>B(e.nombre)),n=Le(r.filter(e=>e.nombre.endsWith(`.c`)),`${e}(`),a=t.length>1?` Está en ${t.slice(0,-1).join(`, `)} y en ${t.at(-1)}.`:``;return{error:`${e===`main`?"Hay más de un `main` en el proyecto: el programa empieza en uno solo.":`La función ${B(e)} está escrita más de una vez en el proyecto.`}${a}`,linea:n.linea,archivo:n.archivo,avisos:[]}}}let d=c.find(e=>/Assertion .* failed/.test(e));return d?{error:ye(`El compilador tropezó con algo que no sabe convertir. Fijate que los valores que asignás o comparás sean del tipo de la variable.`,d),linea:0,archivo:null,avisos:[]}:s.some(e=>!e.aviso)||c.length?{error:`No se pudo compilar.\n${[...s.filter(e=>!e.aviso).map(e=>e.mensaje),...c].join(`
`)}`.trim(),linea:0,archivo:null,avisos:[]}:{error:null,linea:0,avisos:u.map(e=>`Aviso en ${i?`${e.archivo}, línea`:`la línea`} ${e.linea}. ${Oe(e.mensaje)}\n`)}}const He=[[`division`,/divide by zero|division by zero|integer divide/i],[`resto`,/remainder by zero|rem.* by zero/i],[`memoria`,/out of bounds memory|memory access out of bounds|index out of bounds/i],[`pila`,/call stack|stack overflow|too much recursion|recursion/i],[`conversion`,/float unrepresentable|integer overflow|invalid conversion|out of range float/i],[`puntero`,/null function|signature mismatch|table index|indirect call|function signature/i],[`imposible`,/unreachable/i]];function Ue(e){return He.find(([,t])=>t.test(String(e)))?.[0]??`otra`}const We={division:`División por cero.`,resto:"Resto de una división por cero, un `%` con 0.",nulo:"Segmentation fault. Usaste un puntero que vale `NULL`, que no apunta a nada.",memoria:`Segmentation fault. Leíste o escribiste fuera de la memoria del programa, con un puntero o un índice que se pasa.`,pila:`Se llenó la pila (stack overflow). Seguro es una recursión que no termina.`,conversion:`Un número con coma no entra en el entero al que lo convertiste.`,puntero:`Se llamó a un puntero a función que no apunta a una función.`,imposible:`El programa llegó a un lugar al que no debía llegar.`,abort:"El programa se cortó con `abort()`.",otra:`El programa se cortó por un error.`};function Ge({tipo:e,funciones:t=[],codigoFuente:n=``,fuentes:r=null,original:i=``}){let a=r??ze(n),o=a.length>1,s=[];for(let e of t){let t=e===`__main_argc_argv`||e===`__main_void`?`main`:e,n=0,r=null;for(let e of a)if(n=Be(e.contenido,t),r=e.nombre,n)break;if(n&&!s.some(e=>e.nombre===t&&e.linea===n&&e.archivo===r)&&s.push({nombre:t,linea:n,archivo:r}),s.length>=4)break}let c=t[0]&&!/^__main|^_start/.test(t[0])&&!s.some(e=>e.nombre===t[0])?t[0]:null,l=[c&&`  adentro de ${c}, de la biblioteca de C`,...s.map((e,t)=>`  ${t||c?`llamada desde`:`en`} ${e.nombre}, ${o?`${e.archivo}, `:``}línea ${e.linea}`)].filter(Boolean).join(`
`),u=s[0],d=u?` Pasó en ${B(u.nombre)}${c?`, al llamar a ${B(c)}`:``}.`:``,f=`${We[e]??We.otra}${d}`,p=i?ye(f,i):f;return{error:l?`${l}\n${p}`:p,linea:u?.linea??0,archivo:u?.archivo??null}}function Ke(e,t){let n=/(?:^|\n)(?:\/home\/alumno\/)?([^\n:]+):(\d+): (\w+): Assertion `(.*)` failed\s*$/.exec(String(e));if(!n)return null;let r=Number(n[2]);return{error:`  ${n[1]===t?t:n[1]}, línea ${r}, en ${n[3]}\nNo se cumplió \`assert(${n[4]})\`.`,linea:r,archivo:n[1]}}var qe=`// Compiled with each program of the lab's C, next to the library of xcc: what it lacks for WebAssembly or does
// differently from the C of a PC (gcc, the one of the classes), with the declarations added to its headers in
// cMotor.js (AGREGADOS). The FILE of xcc is the one of libsrc/stdio/_file.h (MIT, vendor/xcc/LICENSE); a test reads
// it, so a new xcc with another one doesn't go unnoticed.
#include <ctype.h>
#include <errno.h>
#include <fcntl.h>
#include <limits.h>
#include <math.h>
#include <stdarg.h>
#include <stdbool.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <unistd.h>
#include <wasi.h>

typedef struct {
  ssize_t (*read)(void *cookie, char *buf, size_t size);
  ssize_t (*write)(void *cookie, const char *buf, size_t size);
  int (*seek)(void *cookie, off_t *offset, int whence);
  int (*close)(void *cookie);
} Funciones;

struct FILE {
  const Funciones *iof;
  int (*flush)(FILE *fp);
  unsigned char *wbuf;
  unsigned char *rbuf;
  int fd;
  unsigned int rp, rs, rcapa;
  unsigned int wp, wcapa;
  unsigned int flag;
  int unget_char;
};
#define FF_EOF  (1 << 3)

extern int _detect_open_flag(const char *mode);
extern void _flush_opened_files(void);
WASI_MODULE int fd_fdstat_set_flags(int fd, int flags);

// Each function here gives way to one the student writes with the same name (their own \`gets\` or \`trunc\`), as the
// library of gcc does.
#define DEBIL  __attribute__((weak))

// ---- The keyboard and the end of the program

// Reading the keyboard first shows what was printed: the question before a scanf, as a terminal does.
DEBIL ssize_t read(int fd, void *buf, size_t size) {
  if (fd == 0) {
    fflush(stdout);
    fflush(stderr);
  }
  Iov iov;
  iov.str = buf;
  iov.n = size;
  size_t leido;
  int r = fd_read(fd, &iov, 1, &leido);
  if (r == 0)
    return leido;
  errno = EIO;
  return -1;
}

DEBIL void abort(void) {
  fflush(stdout);
  fflush(stderr);
  exit(134);
}

// What was printed and is still in the buffer, for the lab to show it when the program breaks.
DEBIL void __laboratorio_vaciar(void) {
  fflush(stdout);
  fflush(stderr);
}

// ---- Memory: malloc() gives NULL when there's no more (the sbrk of xcc doesn't check it)

extern size_t __heap_base;
static char *__laboratorio_fin = (char *)&__heap_base;

DEBIL void *sbrk(intptr_t cuanto) {
  char *antes = __laboratorio_fin;
  uintptr_t hasta = ((uintptr_t)antes + (uintptr_t)cuanto + 7) & ~(uintptr_t)7;
  if (cuanto < 0 || hasta < (uintptr_t)antes) {
    errno = ENOMEM;
    return (void *)-1;
  }
  size_t paginas = (hasta + 65535) >> 16;
  size_t hay = __builtin_wasm_memory_size(0);
  if (paginas > hay && __builtin_wasm_memory_grow(0, paginas - hay) == (size_t)-1) {
    errno = ENOMEM;
    return (void *)-1;
  }
  __laboratorio_fin = (char *)hasta;
  return antes;
}

// ---- Files

// fopen as gcc's: "a" writes at the end (xcc opens it without O_APPEND and writes over the start) and the \`t\` of
// Windows ("rt", "wt") is accepted and ignored.
DEBIL FILE *fopen(const char *nombre, const char *modo) {
  char limpio[8];
  int n = 0;
  for (const char *m = modo; *m != '\\0' && n < 7; ++m)
    if (*m != 't')
      limpio[n++] = *m;
  limpio[n] = '\\0';
  int flag = _detect_open_flag(limpio);
  if (flag == -1) {
    errno = EINVAL;
    return NULL;
  }
  int fd = open(nombre, flag & ~O_APPEND, 0644);
  if (fd < 0)
    return NULL;
  if (flag & O_APPEND)
    fd_fdstat_set_flags(fd, FDFLAGS_APPEND);
  FILE *fp = fdopen(fd, limpio);
  if (fp == NULL)
    close(fd);
  return fp;
}

// fflush(stdin) throws away what's left of the line, as on Windows (the classes use it before a scanf or a gets).
DEBIL int fflush(FILE *fp) {
  if (fp == stdin) {
    fp->rp = fp->rs = 0;
    fp->unget_char = EOF;
    lseek(0, 0, SEEK_END);
    return 0;
  }
  if (fp != NULL)
    return (fp->flush)(fp);
  int r = 0;
  if ((stdout->flush)(stdout) != 0)
    r = EOF;
  if ((stderr->flush)(stderr) != 0)
    r = EOF;
  _flush_opened_files();
  return r;
}

// Where the program is in the file: what the file says, plus what's still to write, minus what was read ahead and
// what went back with ungetc (xcc forgets this last one).
DEBIL long ftell(FILE *fp) {
  off_t o = 0;
  if ((fp->iof->seek)(fp, &o, SEEK_CUR) < 0)
    return -1;
  return (long)o + (long)fp->wp - (long)(fp->rs - fp->rp) - (fp->unget_char != EOF ? 1 : 0);
}

// xcc moves SEEK_CUR from where the file was read ahead to, not from where the program is: the classic
// \`fseek(f, -sizeof r, SEEK_CUR)\` after an fread wrote over another record. Here it goes from ftell, and an
// fseek(f, 0, SEEK_CUR) between reading and writing also leaves the buffer empty, as C asks.
DEBIL int fseek(FILE *fp, long offset, int origin) {
  if (origin == SEEK_CUR) {
    long actual = ftell(fp);
    if (actual < 0)
      return -1;
    offset += actual;
    origin = SEEK_SET;
  }
  if (origin == SEEK_SET && offset < 0) {
    errno = EINVAL;
    return -1;
  }
  fflush(fp);
  off_t o = offset;
  if ((fp->iof->seek)(fp, &o, origin) == -1)
    return -1;
  return 0;
}

DEBIL void clearerr(FILE *fp) {
  fp->flag &= ~FF_EOF;
}

// The files live in memory: there are no reading or writing errors to remember.
DEBIL int ferror(FILE *fp) {
  (void)fp;
  return 0;
}

DEBIL void rewind(FILE *fp) {
  fseek(fp, 0, SEEK_SET);
  clearerr(fp);
}

DEBIL int fgetpos(FILE *fp, fpos_t *pos) {
  long donde = ftell(fp);
  if (donde < 0)
    return -1;
  *pos = donde;
  return 0;
}

DEBIL int fsetpos(FILE *fp, const fpos_t *pos) {
  return fseek(fp, *pos, SEEK_SET);
}

// The buffer of each file stays as it is.
DEBIL int setvbuf(FILE *fp, char *buf, int modo, size_t tam) {
  (void)fp;
  (void)buf;
  (void)modo;
  (void)tam;
  return 0;
}

DEBIL void setbuf(FILE *fp, char *buf) {
  (void)fp;
  (void)buf;
}

// Out of C since C11, but in the classes: reads a line without its Enter, with no limit.
DEBIL char *gets(char *s) {
  int c = getchar();
  if (c == EOF)
    return NULL;
  char *p = s;
  while (c != EOF && c != '\\n') {
    *p++ = c;
    c = getchar();
  }
  *p = '\\0';
  return s;
}

// ---- scanf and its family: the one of xcc doesn't know %c, %[ ], %x or %o, nor a space before them, and stops there.

typedef struct {
  FILE *fp;
  const char *s;
  int leidos;
} Fuente;

static int sig(Fuente *f) {
  int c;
  if (f->fp != NULL)
    c = fgetc(f->fp);
  else
    c = *f->s != '\\0' ? (unsigned char)*f->s++ : EOF;
  if (c != EOF)
    f->leidos++;
  return c;
}

static void devolver(Fuente *f, int c) {
  if (c == EOF)
    return;
  f->leidos--;
  if (f->fp != NULL)
    ungetc(c, f->fp);
  else
    f->s--;
}

static int valor_digito(int c, int base) {
  int v = c >= '0' && c <= '9' ? c - '0' : c >= 'a' && c <= 'z' ? c - 'a' + 10 : c >= 'A' && c <= 'Z' ? c - 'A' + 10 : 99;
  return v < base ? v : -1;
}

enum { T_INT, T_CHAR, T_SHORT, T_LONG, T_LLONG, T_SIZE, T_LDOUBLE };

static void guardar_entero(void *p, int tam, unsigned long long v) {
  switch (tam) {
  case T_CHAR:  *(char *)p = (char)v; break;
  case T_SHORT: *(short *)p = (short)v; break;
  case T_LONG:  *(long *)p = (long)v; break;
  case T_LLONG: *(long long *)p = (long long)v; break;
  case T_SIZE:  *(size_t *)p = (size_t)v; break;
  default:      *(int *)p = (int)v; break;
  }
}

static bool letra_igual(int c, int letra) {
  return c != EOF && tolower(c) == letra;
}

// Reads the text of a number with a point into \`buf\`; how many letters it read, without what came after.
static int leer_real(Fuente *f, char *buf, int max, int *ultimo) {
  int n = 0;
  int c = sig(f);
  if ((c == '+' || c == '-') && n < max) {
    buf[n++] = c;
    c = sig(f);
  }
  // inf, infinity and nan
  if (letra_igual(c, 'i') || letra_igual(c, 'n')) {
    const char *palabra = letra_igual(c, 'i') ? "infinity" : "nan";
    int i = 0;
    while (palabra[i] != '\\0' && n < max && letra_igual(c, palabra[i])) {
      buf[n++] = c;
      c = sig(f);
      ++i;
    }
    *ultimo = c;
    return n;
  }
  bool digitos = false;
  while (n < max && c >= '0' && c <= '9') {
    buf[n++] = c;
    digitos = true;
    c = sig(f);
  }
  if (n < max && c == '.') {
    buf[n++] = c;
    c = sig(f);
    while (n < max && c >= '0' && c <= '9') {
      buf[n++] = c;
      digitos = true;
      c = sig(f);
    }
  }
  if (digitos && n < max && (c == 'e' || c == 'E')) {
    buf[n++] = c;
    c = sig(f);
    if (n < max && (c == '+' || c == '-')) {
      buf[n++] = c;
      c = sig(f);
    }
    while (n < max && c >= '0' && c <= '9') {
      buf[n++] = c;
      c = sig(f);
    }
  }
  *ultimo = c;
  return n;
}

static int escanear(Fuente *f, const char *formato, va_list ap) {
  const unsigned char *fmt = (const unsigned char *)formato;
  int asignados = 0;
  bool alguna = false;  // A conversion was done: the end of the input is no longer EOF.
  int c;
#define FALLA_ENTRADA()  return alguna || asignados > 0 ? asignados : EOF

  for (; *fmt != '\\0'; ++fmt) {
    if (isspace(*fmt)) {
      while (isspace(c = sig(f)))
        ;
      devolver(f, c);
      continue;
    }
    if (*fmt != '%' || fmt[1] == '%') {
      if (*fmt == '%') {
        ++fmt;
        while (isspace(c = sig(f)))
          ;
      } else {
        c = sig(f);
      }
      if (c != *fmt) {
        devolver(f, c);
        if (c == EOF)
          FALLA_ENTRADA();
        return asignados;
      }
      continue;
    }

    ++fmt;
    bool suprimir = false;
    if (*fmt == '*') {
      suprimir = true;
      ++fmt;
    }
    int ancho = 0;
    while (*fmt >= '0' && *fmt <= '9')
      ancho = ancho * 10 + (*fmt++ - '0');
    int tam = T_INT;
    if (*fmt == 'h') {
      tam = T_SHORT;
      if (*++fmt == 'h') {
        tam = T_CHAR;
        ++fmt;
      }
    } else if (*fmt == 'l') {
      tam = T_LONG;
      if (*++fmt == 'l') {
        tam = T_LLONG;
        ++fmt;
      }
    } else if (*fmt == 'L' || *fmt == 'q' || *fmt == 'j') {
      tam = *fmt == 'L' ? T_LDOUBLE : T_LLONG;
      ++fmt;
    } else if (*fmt == 'z' || *fmt == 't') {
      tam = T_SIZE;
      ++fmt;
    }
    int conv = *fmt;
    if (conv == '\\0')
      break;

    if (conv == 'n') {
      if (!suprimir)
        guardar_entero(va_arg(ap, void *), tam, (unsigned long long)f->leidos);
      continue;
    }
    if (conv != 'c' && conv != '[') {
      while (isspace(c = sig(f)))
        ;
      devolver(f, c);
    }

    switch (conv) {
    case 'd': case 'i': case 'u': case 'o': case 'x': case 'X': case 'p':
      {
        int base = conv == 'o' ? 8 : conv == 'x' || conv == 'X' || conv == 'p' ? 16 : conv == 'i' ? 0 : 10;
        int max = ancho > 0 ? ancho : INT_MAX;
        int n = 0;
        bool negativo = false, digitos = false;
        unsigned long long v = 0;
        c = sig(f);
        if (n < max && (c == '+' || c == '-')) {
          negativo = c == '-';
          ++n;
          c = sig(f);
        }
        if ((base == 0 || base == 16) && n < max && c == '0') {
          ++n;
          digitos = true;
          c = sig(f);
          if (n < max && (c == 'x' || c == 'X')) {
            base = 16;
            ++n;
            c = sig(f);
          } else if (base == 0) {
            base = 8;
          }
        }
        if (base == 0)
          base = 10;
        int d;
        while (n < max && (d = valor_digito(c, base)) >= 0) {
          v = v * base + d;
          digitos = true;
          ++n;
          c = sig(f);
        }
        devolver(f, c);
        if (!digitos) {
          if (c == EOF && n == 0)
            FALLA_ENTRADA();
          return asignados;
        }
        if (negativo)
          v = -v;
        alguna = true;
        if (!suprimir) {
          if (conv == 'p')
            *va_arg(ap, void **) = (void *)(uintptr_t)v;
          else
            guardar_entero(va_arg(ap, void *), tam, v);
          ++asignados;
        }
      }
      break;
    case 'f': case 'F': case 'e': case 'E': case 'g': case 'G': case 'a': case 'A':
      {
        char buf[128];
        int max = ancho > 0 && ancho < (int)sizeof(buf) - 1 ? ancho : (int)sizeof(buf) - 1;
        int ultimo;
        int n = leer_real(f, buf, max, &ultimo);
        devolver(f, ultimo);
        buf[n] = '\\0';
        char *fin;
        double v = strtod(buf, &fin);
        if (n == 0 || fin == buf) {
          if (n == 0 && ultimo == EOF)
            FALLA_ENTRADA();
          return asignados;
        }
        alguna = true;
        if (!suprimir) {
          if (tam == T_LONG)
            *va_arg(ap, double *) = v;
          else if (tam == T_LDOUBLE)
            *va_arg(ap, long double *) = v;
          else
            *va_arg(ap, float *) = (float)v;
          ++asignados;
        }
      }
      break;
    case 'c':
      {
        int max = ancho > 0 ? ancho : 1;
        char *destino = suprimir ? NULL : va_arg(ap, char *);
        int n = 0;
        while (n < max && (c = sig(f)) != EOF) {
          if (destino != NULL)
            destino[n] = c;
          ++n;
        }
        if (n == 0)
          FALLA_ENTRADA();
        alguna = true;
        if (!suprimir)
          ++asignados;
      }
      break;
    case 's': case '[':
      {
        bool en[256];
        if (conv == 's') {
          for (int i = 0; i < 256; ++i)
            en[i] = !isspace(i);
        } else {
          ++fmt;
          bool negar = false;
          if (*fmt == '^') {
            negar = true;
            ++fmt;
          }
          for (int i = 0; i < 256; ++i)
            en[i] = false;
          bool primero = true;
          for (; *fmt != '\\0' && (*fmt != ']' || primero); ++fmt) {
            primero = false;
            if (fmt[1] == '-' && fmt[2] != ']' && fmt[2] != '\\0') {
              for (int i = fmt[0]; i <= fmt[2]; ++i)
                en[i] = true;
              fmt += 2;
            } else {
              en[*fmt] = true;
            }
          }
          if (*fmt == '\\0')
            --fmt;
          if (negar)
            for (int i = 0; i < 256; ++i)
              en[i] = !en[i];
          en[0] = false;
        }
        int max = ancho > 0 ? ancho : INT_MAX;
        char *destino = suprimir ? NULL : va_arg(ap, char *);
        int n = 0;
        while (n < max && (c = sig(f)) != EOF && en[c]) {
          if (destino != NULL)
            destino[n] = c;
          ++n;
        }
        if (n < max)
          devolver(f, c);
        if (n == 0) {
          if (c == EOF)
            FALLA_ENTRADA();
          return asignados;
        }
        alguna = true;
        if (destino != NULL) {
          destino[n] = '\\0';
          ++asignados;
        }
      }
      break;
    default:
      return asignados;
    }
  }
  return asignados;
#undef FALLA_ENTRADA
}

DEBIL int vfscanf(FILE *restrict fp, const char *restrict formato, va_list ap) {
  Fuente f = {fp, NULL, 0};
  return escanear(&f, formato, ap);
}

DEBIL int vsscanf(const char *restrict s, const char *restrict formato, va_list ap) {
  Fuente f = {NULL, s, 0};
  return escanear(&f, formato, ap);
}

DEBIL int vscanf(const char *restrict formato, va_list ap) {
  return vfscanf(stdin, formato, ap);
}

DEBIL int scanf(const char *restrict formato, ...) {
  va_list ap;
  va_start(ap, formato);
  int r = vfscanf(stdin, formato, ap);
  va_end(ap);
  return r;
}

DEBIL int fscanf(FILE *restrict fp, const char *restrict formato, ...) {
  va_list ap;
  va_start(ap, formato);
  int r = vfscanf(fp, formato, ap);
  va_end(ap);
  return r;
}

DEBIL int sscanf(const char *restrict s, const char *restrict formato, ...) {
  va_list ap;
  va_start(ap, formato);
  int r = vsscanf(s, formato, ap);
  va_end(ap);
  return r;
}

// ---- stdlib.h

DEBIL div_t div(int a, int b) {
  div_t r;
  r.quot = a / b;
  r.rem = a % b;
  return r;
}

DEBIL ldiv_t ldiv(long a, long b) {
  ldiv_t r;
  r.quot = a / b;
  r.rem = a % b;
  return r;
}

DEBIL lldiv_t lldiv(long long a, long long b) {
  lldiv_t r;
  r.quot = a / b;
  r.rem = a % b;
  return r;
}

DEBIL float strtof(const char *restrict p, char **restrict fin) {
  return (float)strtod(p, fin);
}

// ---- string.h and ctype.h

// The one of xcc gives 32 for "abc" and "ABC".
DEBIL int strcasecmp(const char *p, const char *q) {
  for (;; ++p, ++q) {
    int d = tolower(*(const unsigned char *)p) - tolower(*(const unsigned char *)q);
    if (d != 0 || *p == '\\0')
      return d;
  }
}

DEBIL size_t strxfrm(char *restrict destino, const char *restrict origen, size_t n) {
  size_t largo = strlen(origen);
  if (n > 0) {
    size_t copia = largo < n - 1 ? largo : n - 1;
    memcpy(destino, origen, copia);
    destino[copia] = '\\0';
  }
  return largo;
}

DEBIL int isblank(int c) {
  return c == ' ' || c == '\\t';
}

// ---- math.h: what xcc lacks, from what it has

DEBIL double trunc(double x) {
  if (x != x || x == INFINITY || x == -INFINITY)
    return x;
  return x < 0 ? ceil(x) : floor(x);
}

DEBIL double rint(double x) {
  if (x != x || x == INFINITY || x == -INFINITY)
    return x;
  double f = floor(x);
  double d = x - f;
  if (d > 0.5 || (d == 0.5 && fmod(f, 2.0) != 0))
    f += 1;
  return f == 0 ? copysign(0.0, x) : f;
}

DEBIL double nearbyint(double x) { return rint(x); }
DEBIL long lrint(double x) { return (long)rint(x); }
DEBIL long long llrint(double x) { return (long long)rint(x); }
DEBIL long lround(double x) { return (long)round(x); }
DEBIL long long llround(double x) { return (long long)round(x); }

DEBIL double hypot(double x, double y) {
  double a = fabs(x), b = fabs(y);
  if (a == INFINITY || b == INFINITY)
    return INFINITY;
  if (a < b) {
    double t = a;
    a = b;
    b = t;
  }
  if (a == 0)
    return 0;
  double r = b / a;
  return a * sqrt(1 + r * r);
}

DEBIL double cbrt(double x) {
  if (x == 0 || x != x || x == INFINITY || x == -INFINITY)
    return x;
  double y = pow(fabs(x), 1.0 / 3.0);
  y -= (y * y * y - fabs(x)) / (3 * y * y);
  return x < 0 ? -y : y;
}

DEBIL double exp2(double x) { return pow(2.0, x); }

DEBIL double expm1(double x) {
  if (fabs(x) < 1e-5)
    return x + x * x / 2 + x * x * x / 6;
  return exp(x) - 1;
}

DEBIL double log1p(double x) {
  if (fabs(x) < 1e-4)
    return x - x * x / 2 + x * x * x / 3;
  return log(1 + x);
}

DEBIL double fmin(double a, double b) { return a != a ? b : b != b ? a : a < b ? a : b; }
DEBIL double fmax(double a, double b) { return a != a ? b : b != b ? a : a > b ? a : b; }
DEBIL double fdim(double a, double b) { return a > b ? a - b : 0; }
DEBIL double fma(double a, double b, double c) { return a * b + c; }

DEBIL double remainder(double x, double y) {
  return x - rint(x / y) * y;
}

DEBIL float sqrtf(float x) { return (float)sqrt(x); }
DEBIL float powf(float x, float y) { return (float)pow(x, y); }
DEBIL float sinf(float x) { return (float)sin(x); }
DEBIL float cosf(float x) { return (float)cos(x); }
DEBIL float tanf(float x) { return (float)tan(x); }
DEBIL float asinf(float x) { return (float)asin(x); }
DEBIL float acosf(float x) { return (float)acos(x); }
DEBIL float atanf(float x) { return (float)atan(x); }
DEBIL float atan2f(float y, float x) { return (float)atan2(y, x); }
DEBIL float expf(float x) { return (float)exp(x); }
DEBIL float logf(float x) { return (float)log(x); }
DEBIL float log10f(float x) { return (float)log10(x); }
DEBIL float log2f(float x) { return (float)log2(x); }
DEBIL float floorf(float x) { return (float)floor(x); }
DEBIL float ceilf(float x) { return (float)ceil(x); }
DEBIL float roundf(float x) { return (float)round(x); }
DEBIL float truncf(float x) { return (float)trunc(x); }
DEBIL float fmodf(float x, float y) { return (float)fmod(x, y); }
DEBIL float hypotf(float x, float y) { return (float)hypot(x, y); }
DEBIL float cbrtf(float x) { return (float)cbrt(x); }
DEBIL float fminf(float a, float b) { return (float)fmin(a, b); }
DEBIL float fmaxf(float a, float b) { return (float)fmax(a, b); }

// ---- time.h: clock() counts from the start; the dates go in the zone of the device (LABORATORIO_ZONA, minutes
// east of UTC, set by the lab).

DEBIL clock_t clock(void) {
  uint64_t ns = 0;
  clock_time_get(2, 1000, &ns);
  return (clock_t)(ns / 1000);
}

DEBIL double difftime(time_t fin, time_t inicio) {
  return (double)fin - (double)inicio;
}

static long zona_en_segundos(void) {
  const char *z = getenv("LABORATORIO_ZONA");
  return z != NULL ? atol(z) * 60 : 0;
}

// Days since 1970-01-01 of a date of the proleptic Gregorian calendar (Howard Hinnant's algorithm).
static long long dias_desde_1970(long long y, int m, int d) {
  y -= m <= 2;
  long long era = (y >= 0 ? y : y - 399) / 400;
  long long yoe = y - era * 400;
  long long doy = (153 * (m + (m > 2 ? -3 : 9)) + 2) / 5 + d - 1;
  long long doe = yoe * 365 + yoe / 4 - yoe / 100 + doy;
  return era * 146097 + doe - 719468;
}

static struct tm *a_fecha(long long t, struct tm *r) {
  long long dias = t / 86400;
  long long seg = t % 86400;
  if (seg < 0) {
    seg += 86400;
    dias -= 1;
  }
  r->tm_hour = (int)(seg / 3600);
  r->tm_min = (int)(seg / 60 % 60);
  r->tm_sec = (int)(seg % 60);
  r->tm_wday = (int)((dias % 7 + 11) % 7);  // 1970-01-01 was a Thursday.
  long long z = dias + 719468;
  long long era = (z >= 0 ? z : z - 146096) / 146097;
  long long doe = z - era * 146097;
  long long yoe = (doe - doe / 1460 + doe / 36524 - doe / 146096) / 365;
  long long y = yoe + era * 400;
  long long doy = doe - (365 * yoe + yoe / 4 - yoe / 100);
  long long mp = (5 * doy + 2) / 153;
  int d = (int)(doy - (153 * mp + 2) / 5 + 1);
  int m = (int)(mp < 10 ? mp + 3 : mp - 9);
  y += m <= 2;
  r->tm_year = (int)(y - 1900);
  r->tm_mon = m - 1;
  r->tm_mday = d;
  r->tm_yday = (int)(dias - dias_desde_1970(y, 1, 1));
  r->tm_isdst = 0;
  return r;
}

static struct tm la_fecha;

DEBIL struct tm *gmtime(const time_t *t) {
  return a_fecha(*t, &la_fecha);
}

DEBIL struct tm *localtime(const time_t *t) {
  return a_fecha((long long)*t + zona_en_segundos(), &la_fecha);
}

DEBIL struct tm *gmtime_r(const time_t *t, struct tm *r) {
  return a_fecha(*t, r);
}

DEBIL struct tm *localtime_r(const time_t *t, struct tm *r) {
  return a_fecha((long long)*t + zona_en_segundos(), r);
}

DEBIL time_t mktime(struct tm *f) {
  long long mes = f->tm_mon;
  long long anio = (long long)f->tm_year + 1900 + (mes >= 0 ? mes / 12 : (mes - 11) / 12);
  mes = ((mes % 12) + 12) % 12;
  long long t = dias_desde_1970(anio, (int)mes + 1, 1) + f->tm_mday - 1;
  t = t * 86400 + (long long)f->tm_hour * 3600 + (long long)f->tm_min * 60 + f->tm_sec;
  t -= zona_en_segundos();
  a_fecha(t + zona_en_segundos(), f);
  return (time_t)t;
}

static const char *const kDias[] = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
static const char *const kMeses[] = {"January", "February", "March", "April", "May", "June", "July", "August",
                                     "September", "October", "November", "December"};

DEBIL size_t strftime(char *restrict s, size_t max, const char *restrict formato, const struct tm *restrict f) {
  size_t n = 0;
  char tmp[64];
#define PONER(texto) \\
  do { \\
    for (const char *q = (texto); *q != '\\0'; ++q) { \\
      if (n + 1 >= max) \\
        return 0; \\
      s[n++] = *q; \\
    } \\
  } while (0)
  for (const char *p = formato; *p != '\\0'; ++p) {
    if (*p != '%' || p[1] == '\\0') {
      tmp[0] = *p;
      tmp[1] = '\\0';
      PONER(tmp);
      continue;
    }
    int dia = f->tm_wday >= 0 && f->tm_wday < 7 ? f->tm_wday : 0;
    int mes = f->tm_mon >= 0 && f->tm_mon < 12 ? f->tm_mon : 0;
    int hora12 = f->tm_hour % 12 == 0 ? 12 : f->tm_hour % 12;
    switch (*++p) {
    case 'Y': snprintf(tmp, sizeof tmp, "%d", f->tm_year + 1900); break;
    case 'y': snprintf(tmp, sizeof tmp, "%02d", (f->tm_year + 1900) % 100); break;
    case 'C': snprintf(tmp, sizeof tmp, "%02d", (f->tm_year + 1900) / 100); break;
    case 'm': snprintf(tmp, sizeof tmp, "%02d", f->tm_mon + 1); break;
    case 'd': snprintf(tmp, sizeof tmp, "%02d", f->tm_mday); break;
    case 'e': snprintf(tmp, sizeof tmp, "%2d", f->tm_mday); break;
    case 'j': snprintf(tmp, sizeof tmp, "%03d", f->tm_yday + 1); break;
    case 'H': snprintf(tmp, sizeof tmp, "%02d", f->tm_hour); break;
    case 'I': snprintf(tmp, sizeof tmp, "%02d", hora12); break;
    case 'M': snprintf(tmp, sizeof tmp, "%02d", f->tm_min); break;
    case 'S': snprintf(tmp, sizeof tmp, "%02d", f->tm_sec); break;
    case 'p': snprintf(tmp, sizeof tmp, "%s", f->tm_hour < 12 ? "AM" : "PM"); break;
    case 'a': snprintf(tmp, sizeof tmp, "%.3s", kDias[dia]); break;
    case 'A': snprintf(tmp, sizeof tmp, "%s", kDias[dia]); break;
    case 'b': case 'h': snprintf(tmp, sizeof tmp, "%.3s", kMeses[mes]); break;
    case 'B': snprintf(tmp, sizeof tmp, "%s", kMeses[mes]); break;
    case 'u': snprintf(tmp, sizeof tmp, "%d", dia == 0 ? 7 : dia); break;
    case 'w': snprintf(tmp, sizeof tmp, "%d", dia); break;
    case 'F': snprintf(tmp, sizeof tmp, "%d-%02d-%02d", f->tm_year + 1900, f->tm_mon + 1, f->tm_mday); break;
    case 'D': case 'x': snprintf(tmp, sizeof tmp, "%02d/%02d/%02d", f->tm_mon + 1, f->tm_mday, (f->tm_year + 1900) % 100); break;
    case 'T': case 'X': snprintf(tmp, sizeof tmp, "%02d:%02d:%02d", f->tm_hour, f->tm_min, f->tm_sec); break;
    case 'R': snprintf(tmp, sizeof tmp, "%02d:%02d", f->tm_hour, f->tm_min); break;
    case 'r': snprintf(tmp, sizeof tmp, "%02d:%02d:%02d %s", hora12, f->tm_min, f->tm_sec, f->tm_hour < 12 ? "AM" : "PM"); break;
    case 'c':
      snprintf(tmp, sizeof tmp, "%.3s %.3s %2d %02d:%02d:%02d %d", kDias[dia], kMeses[mes], f->tm_mday, f->tm_hour,
               f->tm_min, f->tm_sec, f->tm_year + 1900);
      break;
    case 'z':
      {
        long z = zona_en_segundos() / 60;
        snprintf(tmp, sizeof tmp, "%c%02ld%02ld", z < 0 ? '-' : '+', (z < 0 ? -z : z) / 60, (z < 0 ? -z : z) % 60);
      }
      break;
    case 'Z': tmp[0] = '\\0'; break;
    case 'n': snprintf(tmp, sizeof tmp, "\\n"); break;
    case 't': snprintf(tmp, sizeof tmp, "\\t"); break;
    case '%': snprintf(tmp, sizeof tmp, "%%"); break;
    default: snprintf(tmp, sizeof tmp, "%%%c", *p); break;
    }
    PONER(tmp);
  }
#undef PONER
  if (max == 0)
    return 0;
  s[n] = '\\0';
  return n;
}

static char el_texto[32];

DEBIL char *asctime(const struct tm *f) {
  int dia = f->tm_wday >= 0 && f->tm_wday < 7 ? f->tm_wday : 0;
  int mes = f->tm_mon >= 0 && f->tm_mon < 12 ? f->tm_mon : 0;
  snprintf(el_texto, sizeof el_texto, "%.3s %.3s%3d %02d:%02d:%02d %d\\n", kDias[dia], kMeses[mes], f->tm_mday,
           f->tm_hour, f->tm_min, f->tm_sec, f->tm_year + 1900);
  return el_texto;
}

DEBIL char *ctime(const time_t *t) {
  return asctime(localtime(t));
}

// ---- system(): what code written on Windows calls

// The lab has no shell, but two calls are in almost every program written on Windows: «pause» goes on (there's no
// window that closes), and «cls» (or «clear») clears the console, with the sequence of a terminal that the worker
// turns into that (c.worker.js). Anything else says it can't and returns -1, as a system() whose command failed.
DEBIL int system(const char *orden) {
  if (!orden) return 0;
  char o[16];
  size_t n = 0;
  while (*orden == ' ') orden++;
  while (orden[n] && orden[n] != ' ' && n < sizeof o - 1) {
    o[n] = (char)tolower((unsigned char)orden[n]);
    n++;
  }
  o[n] = '\\0';
  if (!strcmp(o, "pause")) return 0;
  if (!strcmp(o, "cls") || !strcmp(o, "clear")) {
    fflush(stdout);
    fputs("\\x1b[2J\\x1b[H", stdout);
    fflush(stdout);
    return 0;
  }
  fflush(stdout);
  fprintf(stderr, "system(\\"%s\\") no anda en el laboratorio: solo \\"pause\\" y \\"cls\\".\\n", orden);
  return -1;
}
`;const Je={"/usr/include/stdio.h":`
typedef long fpos_t;
#define BUFSIZ        1024
#define FILENAME_MAX  512
#define _IOFBF  0
#define _IOLBF  1
#define _IONBF  2
void clearerr(FILE *fp);
int ferror(FILE *fp);
void rewind(FILE *fp);
int fgetpos(FILE *fp, fpos_t *pos);
int fsetpos(FILE *fp, const fpos_t *pos);
int setvbuf(FILE *fp, char *buf, int modo, size_t tam);
void setbuf(FILE *fp, char *buf);
char *gets(char *s);
int vscanf(const char *restrict format, va_list ap);
`,"/usr/include/stdlib.h":`
#if defined(__wasm)
_Noreturn void abort(void);
#endif
typedef struct { int quot, rem; } div_t;
typedef struct { long quot, rem; } ldiv_t;
typedef struct { long long quot, rem; } lldiv_t;
div_t div(int a, int b);
ldiv_t ldiv(long a, long b);
lldiv_t lldiv(long long a, long long b);
float strtof(const char *restrict p, char **restrict pp);
int system(const char *orden);
`,"/usr/include/string.h":`
#include <strings.h>
size_t strxfrm(char *restrict dst, const char *restrict src, size_t n);
`,"/usr/include/ctype.h":`
int isblank(int c);
`,"/usr/include/math.h":`
#ifndef __NO_FLONUM
double trunc(double x);
double rint(double x);
double nearbyint(double x);
long lrint(double x);
long long llrint(double x);
long lround(double x);
long long llround(double x);
double hypot(double x, double y);
double cbrt(double x);
double exp2(double x);
double expm1(double x);
double log1p(double x);
double fmin(double a, double b);
double fmax(double a, double b);
double fdim(double a, double b);
double fma(double a, double b, double c);
double remainder(double x, double y);
float sqrtf(float x);
float powf(float x, float y);
float sinf(float x);
float cosf(float x);
float tanf(float x);
float asinf(float x);
float acosf(float x);
float atanf(float x);
float atan2f(float y, float x);
float expf(float x);
float logf(float x);
float log10f(float x);
float log2f(float x);
float floorf(float x);
float ceilf(float x);
float roundf(float x);
float truncf(float x);
float fmodf(float x, float y);
float hypotf(float x, float y);
float cbrtf(float x);
float fminf(float a, float b);
float fmaxf(float a, float b);
#endif
`,"/usr/include/time.h":`
#include <stddef.h>
typedef long clock_t;
#define CLOCKS_PER_SEC 1000000L
clock_t clock(void);
struct tm {
  int tm_sec;
  int tm_min;
  int tm_hour;
  int tm_mday;
  int tm_mon;
  int tm_year;
  int tm_wday;
  int tm_yday;
  int tm_isdst;
};
double difftime(time_t fin, time_t inicio);
struct tm *gmtime(const time_t *t);
struct tm *localtime(const time_t *t);
struct tm *gmtime_r(const time_t *t, struct tm *r);
struct tm *localtime_r(const time_t *t, struct tm *r);
time_t mktime(struct tm *f);
size_t strftime(char *restrict s, size_t max, const char *restrict formato, const struct tm *restrict f);
char *asctime(const struct tm *f);
char *ctime(const time_t *t);
`};var Ye=`// printf and its family for the lab's C. From xcc (libsrc/stdio/vfprintf.c, MIT, Copyright (c) 2024 tyfkda; see
// vendor/xcc/LICENSE): its number formatting as it is, and a new reading of the format that also knows the \`h\`, \`hh\`,
// \`j\` and \`t\` sizes, the space flag, the width of \`%c\`, \`%.0s\`, the precision of integers and \`%n\`. Without these, a
// \`%hd\` came out as text and threw the rest of the arguments out of place.
#include <ctype.h>
#include <limits.h>
#include <stdarg.h>
#include <stdbool.h>
#include <stddef.h>
#include <stdint.h>
#include <stdio.h>
#include <string.h>
#include <sys/types.h>

// The FILE of xcc (libsrc/stdio/_file.h): only the first field is used here, to write one letter.
typedef struct {
  ssize_t (*read)(void *cookie, char *buf, size_t size);
  ssize_t (*write)(void *cookie, const char *buf, size_t size);
} __LaboratorioFunciones;

struct FILE {
  const __LaboratorioFunciones *iof;
};

static inline int _fputc(int c, FILE *fp) {
  unsigned char _buf = c;
  ssize_t _result = (fp->iof->write)(fp, (char*)&_buf, sizeof(_buf));
  return _result == sizeof(_buf) ? (int)_buf : EOF;
}


#define PRINTF_BUFSIZ  (32)
#define MIN(a, b)  ((a) < (b) ? (a) : (b))
#define STATIC_ASSERT(cond)  char __dummy[(cond) ? 0 : -1]; (void)__dummy

static const char kHexDigits[] = "0123456789abcdef";
static const char kUpperHexDigits[] = "0123456789ABCDEF";

static int putnstr(FILE *fp, int n, const char *s) {
  int i;
  for (i = 0; i < n && s[i] != '\\0'; ++i)
    ;
  return fwrite(s, 1, i, fp);
}

static void putpadding(FILE *fp, int m, char padding) {
  if (m <= 0)
    return;
  char buf[16];
  int n = MIN(m, (int)sizeof(buf));
  memset(buf, padding, n);
  do {
    int i = MIN(m, n);
    fwrite(buf, 1, i, fp);
    m -= i;
  } while (m > 0);
}

#ifndef __NO_FLONUM
#include "math.h"  // isfinite, signbit

static long double pow10(int order) {
  long double a = 1, x = 10;
  for (; order > 0; order >>= 1) {
    if ((order & 1) != 0)
      a *= x;
    x *= x;
  }
  return a;
}

// Float conversions (%f %F %e %E %g %G) following C99: field width, the
// '-', '0', '+' and '#' flags, and precision (including .0).

// The exact rounding error of the product p = a * b (Dekker's two-product,
// for 53-bit doubles: long double is a double on this target). Its sign says
// whether the true product is above or below p.
static long double product_error(long double a, long double b, long double p) {
  const long double split = 134217729.0;  // 2^27 + 1
  long double t = split * a;
  long double ahi = t - (t - a), alo = a - ahi;
  t = split * b;
  long double bhi = t - (t - b), blo = b - bhi;
  return ((ahi * bhi - p) + ahi * blo + alo * bhi) + alo * blo;
}

// Appends \`x\` (0 <= x < 1e18) with \`prec\` decimals to \`p\`; returns the end.
// Rounds to nearest using the exact value of x, and true ties to even, as glibc does.
// Digits past the 18th decimal are written as zeros.
static char *put_fixed(char *p, long double x, int prec, bool alt) {
  int extra = 0;
  if (prec > 18) {
    extra = (prec > 300 ? 300 : prec) - 18;
    prec = 18;
  }
  unsigned long long int_part = (unsigned long long)x;
  long double one = pow10(prec);
  long double part = x - (long double)int_part;
  long double scaled = part * one;
  unsigned long long frac = (unsigned long long)scaled;
  long double rest = scaled - (long double)frac;
  if (rest == 0.5) {
    // Looks like a tie, but the multiplication may have rounded: 0.05 * 10 is
    // just over 0.5 exactly, so it rounds up; 2.5 really is a tie, so it goes to even.
    long double err = product_error(part, one, scaled);
    if (err > 0 || (err == 0 && ((prec > 0 ? frac : int_part) & 1) != 0))
      ++frac;
  } else if (rest > 0.5) {
    ++frac;
  }
  if ((long double)frac >= one) {
    ++int_part;
    frac -= (unsigned long long)one;
  }
  char digits[24];
  int n = 0;
  do {
    digits[n++] = '0' + (char)(int_part % 10);
    int_part /= 10;
  } while (int_part != 0);
  while (n > 0)
    *p++ = digits[--n];
  if (prec > 0 || alt)
    *p++ = '.';
  for (int i = prec - 1; i >= 0; --i) {
    p[i] = '0' + (char)(frac % 10);
    frac /= 10;
  }
  p += prec;
  for (; extra > 0; --extra)
    *p++ = '0';
  return p;
}

// Splits x > 0 into m * 10^e with 1 <= m < 10.
static int decimal_exponent(long double *px) {
  static const long double kPowers[] = {
    1e256, 1e128, 1e64, 1e32, 1e16, 1e8, 1e4, 1e2, 1e1
  };
  const int N = sizeof(kPowers) / sizeof(*kPowers);
  const int kPowerIndex = 256;

  long double x = *px;
  int e = 0;

  if (x >= 10) {
    for (int i = 0; i < N; ++i) {
      long double p = kPowers[i];
      if (x >= p) {
        x /= p;
        e += kPowerIndex >> i;
      }
    }
  } else if (x < 1) {
    for (int i = 0; i < N; ++i) {
      long double y = x * kPowers[i];
      if (y < 10.0) {
        x = y;
        e -= kPowerIndex >> i;
      }
    }
  }
  *px = x;
  return e;
}

static char *put_scientific(char *p, long double x, int prec, bool alt, bool upper, int *pexp) {
  int e = 0;
  if (x != 0) {
    e = decimal_exponent(&x);
    // Rounding can carry to 10.0: renormalise.
    long double one = pow10(prec > 18 ? 18 : prec);
    if ((long double)(unsigned long long)(x * one + 0.5) >= 10 * one) {
      x /= 10;
      ++e;
    }
  }
  p = put_fixed(p, x, prec, alt);
  *p++ = upper ? 'E' : 'e';
  *p++ = e < 0 ? '-' : '+';
  int ae = e < 0 ? -e : e;
  if (ae >= 100)
    *p++ = '0' + (char)(ae / 100);
  *p++ = '0' + (char)((ae / 10) % 10);
  *p++ = '0' + (char)(ae % 10);
  if (pexp != NULL)
    *pexp = e;
  return p;
}

static char *strip_zeros(char *start, char *p) {
  char *dot = NULL;
  for (char *q = start; q < p; ++q)
    if (*q == '.')
      dot = q;
  if (dot == NULL)
    return p;
  while (p > dot + 1 && p[-1] == '0')
    --p;
  if (p == dot + 1)
    --p;
  return p;
}

static int printflonum(FILE *fp, long double x, int conv, int width, int prec, char sign,
                       bool leftalign, char padding, bool alt) {
  char body[400];   // sign + up to 18 digits + '.' + at most 300 decimals + exponent
  char *p = body;
  bool upper = conv == 'F' || conv == 'E' || conv == 'G';
  bool neg = signbit(x);
  if (neg)
    x = -x;
  if (neg)
    *p++ = '-';
  else if (sign != 0)
    *p++ = sign;
  char *digits = p;
  if (!isfinite(x)) {
    const char *s = isnan(x) ? (upper ? "NAN" : "nan") : (upper ? "INF" : "inf");
    while (*s != '\\0')
      *p++ = *s++;
    padding = ' ';
  } else if (conv == 'e' || conv == 'E') {
    p = put_scientific(p, x, prec < 0 ? 6 : prec, alt, upper, NULL);
  } else if (conv == 'g' || conv == 'G') {
    int P = prec < 0 ? 6 : prec == 0 ? 1 : prec;
    int e = 0;
    char probe[400];
    if (x != 0)
      put_scientific(probe, x, P - 1, false, upper, &e);
    if (e < -4 || e >= P || x >= 1e18) {   // put_fixed needs x < 1e18
      p = put_scientific(p, x, P - 1, alt, upper, NULL);
      if (!alt) {
        // Strip zeros from the mantissa only.
        char *ech = p;
        while (ech > digits && *ech != 'e' && *ech != 'E')
          --ech;
        char tail[8];
        int tn = (int)(p - ech);
        for (int i = 0; i < tn; ++i)
          tail[i] = ech[i];
        p = strip_zeros(digits, ech);
        for (int i = 0; i < tn; ++i)
          *p++ = tail[i];
      }
    } else {
      p = put_fixed(p, x, P - 1 - e, alt);
      if (!alt)
        p = strip_zeros(digits, p);
    }
  } else if (x >= 1e18) {
    p = put_scientific(p, x, prec < 0 ? 6 : prec, alt, upper, NULL);   // too big for the fixed path
  } else {
    p = put_fixed(p, x, prec < 0 ? 6 : prec, alt);
  }

  int len = (int)(p - body);
  int pad = width > len ? width - len : 0;
  if (leftalign) {
    putnstr(fp, len, body);
    putpadding(fp, pad, ' ');
  } else if (padding == '0') {
    putnstr(fp, (int)(digits - body), body);   // the sign goes before the zeros
    putpadding(fp, pad, '0');
    putnstr(fp, (int)(p - digits), digits);
  } else {
    putpadding(fp, pad, ' ');
    putnstr(fp, len, body);
  }
  return len + pad;
}
#endif

// An integer with its sign (0, '-', '+' or ' '), its prefix ("0", "0x", "0X" or ""), at least \`prec\` digits (-1, as
// they come) and padded to \`width\`.
static int put_integer(FILE *fp, unsigned long long x, int base, const char *digits, char sign, const char *prefix,
                       int width, int prec, bool leftalign, bool zero) {
  char buf[32];
  STATIC_ASSERT(sizeof(buf) >= (sizeof(long long) * CHAR_BIT + 2) / 3);
  int n = 0;
  if (x != 0 || prec != 0) {
    do {
      buf[sizeof(buf) - (++n)] = digits[x % base];
      x /= base;
    } while (x != 0);
  }
  // The # of %o only adds a 0 if the number doesn't start with one.
  if (prefix[0] == '0' && prefix[1] == '\\0' && (prec > n || (n > 0 && buf[sizeof(buf) - n] == '0')))
    prefix = "";
  int zeros = prec > n ? prec - n : 0;
  int len = (sign != 0) + (int)strlen(prefix) + zeros + n;
  int pad = width > len ? width - len : 0;
  if (zero && !leftalign && prec < 0) {
    zeros += pad;
    pad = 0;
  }
  if (!leftalign)
    putpadding(fp, pad, ' ');
  if (sign != 0)
    _fputc(sign, fp);
  putnstr(fp, (int)strlen(prefix), prefix);
  putpadding(fp, zeros, '0');
  fwrite(&buf[sizeof(buf) - n], 1, n, fp);
  if (leftalign)
    putpadding(fp, pad, ' ');
  return (sign != 0) + (int)strlen(prefix) + zeros + n + pad;
}

static int put_text(FILE *fp, const char *s, int len, int width, bool leftalign) {
  int pad = width > len ? width - len : 0;
  if (!leftalign)
    putpadding(fp, pad, ' ');
  fwrite(s, 1, len, fp);
  if (leftalign)
    putpadding(fp, pad, ' ');
  return len + pad;
}

enum { L_INT, L_CHAR, L_SHORT, L_LONG, L_LLONG, L_SIZE, L_MAX, L_PTRDIFF, L_LDOUBLE };

int vfprintf(FILE *fp, const char *fmt_, va_list ap) {
  const unsigned char *fmt = (const unsigned char*)fmt_;
  int o = 0;

  for (int i = 0; fmt[i] != '\\0'; i++) {
    int c = fmt[i];
    if (c != '%') {
      _fputc(c, fp);
      ++o;
      continue;
    }

    bool leftalign = false, alt = false, zero = false;
    char sign = 0;
    for (;;) {
      c = fmt[++i];
      if (c == '-') leftalign = true;
      else if (c == '+') sign = '+';
      else if (c == ' ') { if (sign == 0) sign = ' '; }
      else if (c == '#') alt = true;
      else if (c == '0') zero = true;
      else break;
    }
    int width = 0;
    if (c == '*') {
      width = va_arg(ap, int);
      if (width < 0) {
        leftalign = true;
        width = -width;
      }
      c = fmt[++i];
    } else {
      while (c >= '0' && c <= '9') {
        width = width * 10 + (c - '0');
        c = fmt[++i];
      }
    }
    int prec = -1;
    if (c == '.') {
      prec = 0;
      c = fmt[++i];
      if (c == '*') {
        prec = va_arg(ap, int);
        if (prec < 0)
          prec = -1;
        c = fmt[++i];
      } else {
        while (c >= '0' && c <= '9') {
          prec = prec * 10 + (c - '0');
          c = fmt[++i];
        }
      }
    }
    int size = L_INT;
    if (c == 'h') {
      size = L_SHORT;
      c = fmt[++i];
      if (c == 'h') {
        size = L_CHAR;
        c = fmt[++i];
      }
    } else if (c == 'l') {
      size = L_LONG;
      c = fmt[++i];
      if (c == 'l') {
        size = L_LLONG;
        c = fmt[++i];
      }
    } else if (c == 'L' || c == 'q') {
      size = c == 'L' ? L_LDOUBLE : L_LLONG;
      c = fmt[++i];
    } else if (c == 'z' || c == 'j' || c == 't') {
      size = c == 'z' ? L_SIZE : c == 'j' ? L_MAX : L_PTRDIFF;
      c = fmt[++i];
    }

    switch (c) {
    case 'd': case 'i':
      {
        long long x;
        switch (size) {
        case L_CHAR:  x = (signed char)va_arg(ap, int); break;
        case L_SHORT: x = (short)va_arg(ap, int); break;
        case L_LONG:  x = va_arg(ap, long); break;
        case L_LLONG: case L_MAX: case L_LDOUBLE: x = va_arg(ap, long long); break;
        case L_SIZE:  x = va_arg(ap, ssize_t); break;
        case L_PTRDIFF: x = va_arg(ap, ptrdiff_t); break;
        default:      x = va_arg(ap, int); break;
        }
        bool negative = x < 0;
        unsigned long long ux = negative ? -(unsigned long long)x : (unsigned long long)x;
        o += put_integer(fp, ux, 10, kHexDigits, negative ? '-' : sign, "", width, prec, leftalign, zero);
      }
      break;
    case 'u': case 'o': case 'x': case 'X':
      {
        unsigned long long x;
        switch (size) {
        case L_CHAR:  x = (unsigned char)va_arg(ap, unsigned int); break;
        case L_SHORT: x = (unsigned short)va_arg(ap, unsigned int); break;
        case L_LONG:  x = va_arg(ap, unsigned long); break;
        case L_LLONG: case L_MAX: case L_LDOUBLE: x = va_arg(ap, unsigned long long); break;
        case L_SIZE:  x = va_arg(ap, size_t); break;
        case L_PTRDIFF: x = (unsigned long)va_arg(ap, ptrdiff_t); break;
        default:      x = va_arg(ap, unsigned int); break;
        }
        int base = c == 'o' ? 8 : c == 'u' ? 10 : 16;
        const char *prefix = !alt || c == 'u' ? "" : c == 'o' ? "0" : x == 0 ? "" : c == 'X' ? "0X" : "0x";
        o += put_integer(fp, x, base, c == 'X' ? kUpperHexDigits : kHexDigits, 0, prefix, width, prec, leftalign, zero);
      }
      break;
    case 'p':
      {
        void *ptr = va_arg(ap, void*);
        o += put_integer(fp, (uintptr_t)ptr, 16, kHexDigits, 0, "0x", width, prec, leftalign, false);
      }
      break;
    case 's':
      {
        const char *s = va_arg(ap, const char*);
        if (s == NULL)
          s = prec < 0 || prec >= 6 ? "(null)" : "";
        int len = 0;
        while ((prec < 0 || len < prec) && s[len] != '\\0')
          ++len;
        o += put_text(fp, s, len, width, leftalign);
      }
      break;
    case 'c':
      {
        char ch = (char)va_arg(ap, int);
        o += put_text(fp, &ch, 1, width, leftalign);
      }
      break;
    case 'n':
      {
        void *p = va_arg(ap, void*);
        switch (size) {
        case L_CHAR:  *(signed char*)p = o; break;
        case L_SHORT: *(short*)p = o; break;
        case L_LONG:  *(long*)p = o; break;
        case L_LLONG: case L_MAX: *(long long*)p = o; break;
        case L_SIZE:  *(ssize_t*)p = o; break;
        case L_PTRDIFF: *(ptrdiff_t*)p = o; break;
        default:      *(int*)p = o; break;
        }
      }
      break;
    case '%':
      _fputc(c, fp);
      ++o;
      break;
#ifndef __NO_FLONUM
    case 'f': case 'F': case 'e': case 'E': case 'g': case 'G': case 'a': case 'A':
      {
        long double x = size == L_LDOUBLE ? va_arg(ap, long double) : va_arg(ap, double);
        // Hexadecimal floats aren't written here: they go as %e.
        int conv = c == 'a' ? 'e' : c == 'A' ? 'E' : c;
        o += printflonum(fp, x, conv, width, prec, sign, leftalign, zero ? '0' : ' ', alt);
      }
      break;
#endif
    default:
      // Unknown % sequence.  Print it to draw attention.
      _fputc('%', fp);
      ++o;
      if (c != '\\0') {
        _fputc(c, fp);
        ++o;
      } else {
        --i;
      }
      break;
    }
  }

  return o;
}
`;const V={BIEN:0,BADF:8,EXIST:20,INVAL:28,ISDIR:31,NOENT:44,NOSPC:51,NOSYS:52,NOTDIR:54,SPIPE:70},H={CARACTER:2,DIRECTORIO:3,ARCHIVO:4,FLUJO:6},U={CREAR:1,DIRECTORIO:2,EXCLUSIVO:4,TRUNCAR:8},Xe=536870911n;var Ze=class extends Error{constructor(e){super(`exit ${e}`),this.codigo=e}};const Qe=(e,t)=>{let n=[];for(let r of`${t.startsWith(`/`)?``:e}/${t}`.split(`/`))r&&r!==`.`&&(r===`..`?n.pop():n.push(r));return`/${n.join(`/`)}`};var $e=class{constructor(e=[],{tope:t=1/0}={}){this.datos=new Map(e),this.tope=t,this.total=0;for(let e of this.datos.values())this.total+=e.length}leer=e=>this.datos.get(e)??null;escribir(e,t){let n=typeof t==`string`?new TextEncoder().encode(t):t;this.total+=n.length-(this.datos.get(e)?.length??0),this.datos.set(e,n)}escribirEn(e,t,n){let r=this.datos.get(e)??/* @__PURE__ */ new Uint8Array,i=Math.max(r.length,t+n.length);if(this.total-r.length+i>this.tope)return!1;let a;if(r.byteOffset===0&&r.buffer.byteLength>=i&&this.propios?.has(r.buffer))a=new Uint8Array(r.buffer,0,i);else{let e=new ArrayBuffer(Math.max(i,Math.min(i*2,i+16777216),256));a=new Uint8Array(e,0,i),a.set(r),(this.propios??=/* @__PURE__ */ new WeakSet).add(e)}return a.set(n,t),this.escribir(e,a),!0}borrar(e){return this.total-=this.datos.get(e)?.length??0,this.datos.delete(e)}esCarpeta(e){if(e===`/`)return!0;let t=`${e}/`;for(let e of this.datos.keys())if(e.startsWith(t))return!0;return!1}};function et({args:e=[],env:t={},archivos:n,escribir:r,leer:i,archivosComoFlujo:a=!1}){let o=null,s=()=>new DataView(o.buffer),c=()=>new Uint8Array(o.buffer),l=(e,t)=>new TextDecoder().decode(c().slice(e,e+t)),u=e=>new TextEncoder().encode(e),d=/* @__PURE__ */ new Map([[0,{tipo:H.FLUJO}],[1,{tipo:H.FLUJO}],[2,{tipo:H.FLUJO}],[3,{tipo:H.DIRECTORIO,ruta:`/`,nombre:`/`}],[4,{tipo:H.DIRECTORIO,ruta:`/home/alumno`,nombre:`.`}]]),f=5,p=/* @__PURE__ */ new Uint8Array,m=(e,t)=>{let n=s();return Array.from({length:t},(t,r)=>({ptr:n.getUint32(e+r*8,!0),largo:n.getUint32(e+r*8+4,!0)}))},h=(e,t,n)=>{let r=0;for(let{ptr:i,largo:a}of m(e,t)){let e=Math.min(a,n.length-r);if(e<=0)break;c().set(n.subarray(r,r+e),i),r+=e}return r},g=(e,t,n)=>{let r=s();for(let t=0;t<64;t+=8)r.setBigUint64(e+t,0n,!0);r.setUint8(e+16,t),r.setBigUint64(e+24,1n,!0),r.setBigUint64(e+32,BigInt(n),!0)},_=(e,t,n)=>{let r=r=>{r&&r.length&&(p=p.length?tt(p,r):r);let i=h(e,t,p);return p=p.subarray(i),s().setUint32(n,i,!0),V.BIEN};if(p.length)return r(null);let a=i(m(e,t).reduce((e,t)=>e+t.largo,0));return a&&typeof a.then==`function`?a.then(r):r(a)},v={args_sizes_get(t,n){let r=s();return r.setUint32(t,e.length,!0),r.setUint32(n,e.reduce((e,t)=>e+u(t).length+1,0),!0),V.BIEN},args_get(t,n){let r=s(),i=n;return e.forEach((e,n)=>{let a=u(`${e}\0`);c().set(a,i),r.setUint32(t+n*4,i,!0),i+=a.length}),V.BIEN},environ_sizes_get(e,n){let r=Object.entries(t).map(([e,t])=>`${e}=${t}`),i=s();return i.setUint32(e,r.length,!0),i.setUint32(n,r.reduce((e,t)=>e+u(t).length+1,0),!0),V.BIEN},environ_get(e,n){let r=s(),i=n;return Object.entries(t).forEach(([t,n],a)=>{let o=u(`${t}=${n}\0`);c().set(o,i),r.setUint32(e+a*4,i,!0),i+=o.length}),V.BIEN},fd_prestat_get(e,t){let n=d.get(e);if(!n?.nombre||e>4)return V.BADF;let r=s();return r.setUint32(t,0,!0),r.setUint32(t+4,u(n.nombre).length,!0),V.BIEN},fd_prestat_dir_name(e,t,n){let r=d.get(e);return!r?.nombre||e>4?V.BADF:(c().set(u(r.nombre).subarray(0,n),t),V.BIEN)},fd_write(e,t,i,a){let o=m(t,i).map(({ptr:e,largo:t})=>c().slice(e,e+t)),l=o.length===1?o[0]:tt(...o);if(e===1||e===2)r(e,l);else{let t=d.get(e);if(!t||t.tipo!==H.ARCHIVO)return V.BADF;let r=t.agregar?n.leer(t.ruta)?.length??0:t.lugar;if(!n.escribirEn(t.ruta,r,l))return V.NOSPC;t.lugar=r+l.length}return s().setUint32(a,l.length,!0),V.BIEN},fd_read(e,t,r,i){if(e===0)return _(t,r,i);let a=d.get(e);if(!a||a.tipo!==H.ARCHIVO)return V.BADF;let o=n.leer(a.ruta)??/* @__PURE__ */ new Uint8Array,c=h(t,r,o.subarray(a.lugar));return a.lugar+=c,s().setUint32(i,c,!0),V.BIEN},fd_seek(e,t,r,i){let a=d.get(e);if(!a)return V.BADF;if(e===0&&r===2&&(p=/* @__PURE__ */ new Uint8Array),a.tipo!==H.ARCHIVO)return V.SPIPE;let o=n.leer(a.ruta)?.length??0,c=(r===0?0:r===1?a.lugar:o)+Number(t);return c<0?V.INVAL:(a.lugar=c,s().setBigUint64(i,BigInt(c),!0),V.BIEN)},fd_tell(e,t){let n=d.get(e);return!n||n.tipo!==H.ARCHIVO?V.BADF:(s().setBigUint64(t,BigInt(n.lugar),!0),V.BIEN)},fd_close(e){return e<=4?e>=0?V.BIEN:V.BADF:d.delete(e)?V.BIEN:V.BADF},fd_filestat_get(e,t){let r=d.get(e);if(!r)return V.BADF;let i=r.tipo===H.ARCHIVO&&a?H.FLUJO:r.tipo;return g(t,i,r.tipo===H.ARCHIVO?n.leer(r.ruta)?.length??0:0),V.BIEN},fd_fdstat_get(e,t){let n=d.get(e);if(!n)return V.BADF;let r=s();return r.setUint8(t,e<=2?H.CARACTER:n.tipo),r.setUint16(t+2,+!!n.agregar,!0),r.setBigUint64(t+8,Xe,!0),r.setBigUint64(t+16,Xe,!0),V.BIEN},fd_fdstat_set_flags(e,t){let n=d.get(e);return n?(n.tipo===H.ARCHIVO&&(n.agregar=!!(t&1)),V.BIEN):V.BADF},fd_sync:()=>V.BIEN,fd_datasync:()=>V.BIEN,path_open(e,t,r,i,a,o,c,u,p){let m=d.get(e);if(!m||m.tipo!==H.DIRECTORIO)return V.BADF;let h=Qe(m.ruta,l(r,i)),g=n.leer(h);if(n.esCarpeta(h)){if(a&(U.CREAR|U.TRUNCAR))return V.ISDIR;d.set(f,{tipo:H.DIRECTORIO,ruta:h})}else{if(a&U.DIRECTORIO)return g?V.NOTDIR:V.NOENT;if(g&&a&U.CREAR&&a&U.EXCLUSIVO)return V.EXIST;if(!g&&!(a&U.CREAR))return V.NOENT;(!g||a&U.TRUNCAR)&&n.escribir(h,/* @__PURE__ */ new Uint8Array),d.set(f,{tipo:H.ARCHIVO,ruta:h,lugar:0,agregar:!!(u&1)})}return s().setUint32(p,f,!0),f+=1,V.BIEN},path_filestat_get(e,t,r,i,a){let o=d.get(e);if(!o||o.tipo!==H.DIRECTORIO)return V.BADF;let s=Qe(o.ruta,l(r,i)),c=n.leer(s);if(c)g(a,H.ARCHIVO,c.length);else if(n.esCarpeta(s))g(a,H.DIRECTORIO,0);else return V.NOENT;return V.BIEN},path_unlink_file(e,t,r){let i=d.get(e);return!i||i.tipo!==H.DIRECTORIO?V.BADF:n.borrar(Qe(i.ruta,l(t,r)))?V.BIEN:V.NOENT},path_rename(e,t,r,i,a,o){let s=d.get(e),c=d.get(i);if(s?.tipo!==H.DIRECTORIO||c?.tipo!==H.DIRECTORIO)return V.BADF;let u=Qe(s.ruta,l(t,r)),f=n.leer(u);return f?(n.borrar(u),n.escribir(Qe(c.ruta,l(a,o)),f),V.BIEN):V.NOENT},path_create_directory:()=>V.BIEN,random_get(e,t){let n=new Uint8Array(t);for(let e=0;e<t;e+=65536)crypto.getRandomValues(n.subarray(e,Math.min(t,e+65536)));return c().set(n,e),V.BIEN},clock_time_get(e,t,n){let r=e===0?BigInt(Date.now())*1000000n:BigInt(Math.round(performance.now()*1e6));return s().setBigUint64(n,r,!0),V.BIEN},clock_res_get(e,t){return s().setBigUint64(t,1000n,!0),V.BIEN},sched_yield:()=>V.BIEN,proc_exit(e){throw new Ze(e)}};return{funciones:v,usar(e){o=e},importsPara(e,t=null){let n={};for(let t of WebAssembly.Module.imports(e))t.module===`wasi_snapshot_preview1`&&t.kind===`function`&&(n[t.name]=Object.hasOwn(v,t.name)?v[t.name]:()=>V.NOSYS);return t&&n.fd_read&&(n.fd_read=t(n.fd_read)),{wasi_snapshot_preview1:n}}}}function tt(...e){let t=new Uint8Array(e.reduce((e,t)=>e+t.length,0)),n=0;for(let r of e)t.set(r,n),n+=r.length;return t}const nt={archivos:200,bytes:16777216};function rt(e){let t=String(e??``);if(!t||t.length>200||/[\\\u0000-\u001f\u007f]/.test(t))return null;let n=t.split(`/`);return n.length>5||n.some(e=>!e.trim()||e===`.`||e===`..`||e.length>80)?null:t}function it(e){return typeof e==`string`?new TextEncoder().encode(e):e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):null}const at=8388608,W=`/home/alumno`,ot=`/tmp/programa.wasm`,st=[[`/usr/lib/laboratorio/apoyo.c`,qe],[`/usr/lib/laboratorio/vfprintf.c`,Ye]],ct=st.map(([e])=>e.replace(/\.c$/,`.o`)),lt=e=>new TextDecoder().decode(e);async function ut({compilador:e,archivos:t,args:n}){let r=``,i=new TextDecoder,a=et({args:[`cc`,...n],env:{HOME:W,PWD:W},archivos:t,escribir:(e,t)=>{r+=i.decode(t,{stream:!0})},leer:()=>/* @__PURE__ */ new Uint8Array}),o=await WebAssembly.instantiate(e,a.importsPara(e));a.usar(o.exports.memory);let s=0;try{o.exports._start()}catch(e){if(!(e instanceof Ze))throw e;s=e.codigo}return{codigo:s,salida:r.slice(0,5e4)}}async function dt(e){let t=new $e;for(let[n,r]of Object.entries(se(e)))r.length&&!n.endsWith(`/`)&&t.escribir(`/${n}`,r);let n=t.leer(`/usr/bin/cc`);if(!n)throw Error(`El paquete de C no trae el compilador.`);for(let[e,n]of Object.entries(Je))t.escribir(e,`${lt(t.leer(e)??/* @__PURE__ */ new Uint8Array)}${n}`);let r=await WebAssembly.compile(n);for(let[e,[n,i]]of st.entries()){t.escribir(n,i);let a=await ut({compilador:r,archivos:t,args:[`-c`,`-o`,ct[e],n]});if(a.codigo!==0||!t.leer(ct[e]))throw Error(`No se pudo preparar C: ${a.salida}`)}let{salida:i}=await ut({compilador:r,archivos:new $e(t.datos),args:[`--version`]});return{base:t,compilador:r,version:/version\s+([\w.]+)/.exec(i)?.[1]??``}}function ft({codigo:e,nombre:t,archivos:n,principal:r}={}){if(!Array.isArray(n)){let n=/^[\w-]{1,40}\.c$/.test(String(t))?String(t):`tu_codigo.c`;return{fuentes:[{nombre:n,contenido:String(e??``)}],datos:[],principal:n}}let i=[],a=[],o=/* @__PURE__ */ new Set,s=0;for(let e of n.slice(0,nt.archivos)){let t=rt(e?.nombre),n=e?.contenido,r=it(n);!t||o.has(t)||!r||s+r.length>nt.bytes||(o.add(t),s+=r.length,/\.[ch]$/.test(t)?i.push({nombre:t,contenido:typeof n==`string`?n:lt(r)}):a.push({nombre:t,bytes:r}))}let c=i.filter(e=>e.nombre.endsWith(`.c`)),l=c.find(e=>e.nombre===r)??c[0]??null;return l&&i.unshift(...i.splice(i.indexOf(l),1)),{fuentes:i,datos:a,principal:l?.nombre??null}}async function pt(e,t){let n=t?.fuentes?t:ft(t);if(!n.principal)return{error:"El proyecto no tiene ningún archivo `.c` para compilar.",linea:0,archivo:null,avisos:[]};let r=new $e(e.base.datos);for(let e of n.fuentes)r.escribir(`${W}/${e.nombre}`,e.contenido);let i=n.fuentes.filter(e=>e.nombre.endsWith(`.c`)).map(e=>`${W}/${e.nombre}`),a=await ut({compilador:e.compilador,archivos:r,args:[`--stack-size=${at}`,`-e`,`__laboratorio_vaciar`,`-o`,ot,...i,...ct]}),o=a.codigo===0?r.leer(ot):null,s=Ve(a.salida,n.fuentes);return o&&!s.error?{programa:o,avisos:s.avisos}:{error:s.error??`No se pudo compilar.\n${a.salida}`.trim(),linea:s.linea,archivo:s.archivo??null,avisos:[]}}const mt=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]);function ht(e,t){let n=[],r=[];for(let[r,i]of e.datos){if(!r.startsWith(`${W}/`))continue;let e=t.get(r);e&&mt(e,i)||n.push({nombre:r.slice(13),contenido:i.slice()})}for(let n of t.keys())e.datos.has(n)||r.push(n.slice(13));return{cambiados:n,borrados:r}}function gt(e,t){let n=[];for(let r of String(e??``).split(`
`)){let e=/wasm-function\[(\d+)\]/.exec(r),i=e?t.get(Number(e[1])):/(?:^|[\s.])([A-Za-z_]\w*)(?: \(|@)wasm/.exec(r)?.[1];i&&i!==n.at(-1)&&n.push(i)}return n}async function _t({programa:e,codigoFuente:t,fuentes:n,datos:r=[],nombre:i,leer:a,escribir:o,pausa:s,ultimoError:c=()=>``,rastro:l=null}){let u=n??[{nombre:i,contenido:String(t??``)}],d=new $e([],{tope:33554432});for(let e of r)d.escribir(`${W}/${e.nombre}`,e.bytes);let f=new Map(d.datos);return{...await vt({programa:e,fuentes:u,nombre:i,leer:a,escribir:o,pausa:s,ultimoError:c,archivos:d,rastro:l}),archivos:ht(d,f)}}async function vt({programa:e,fuentes:t,nombre:n,leer:r,escribir:i,pausa:a,ultimoError:o,archivos:s,rastro:c}){let{bytes:l,vigilado:u}=me(e,{pila:at,paginas:4096}),d=await WebAssembly.compile(l),f=fe(e).funciones,p={HOME:W,PWD:W,USER:`alumno`,LABORATORIO_ZONA:String(-(/* @__PURE__ */ new Date()).getTimezoneOffset())},m=et({args:[n.replace(/\.c$/,``)],env:p,archivos:s,escribir:i,leer:r,archivosComoFlujo:!0}),h=a?e=>new WebAssembly.Suspending(e):null,g=(await WebAssembly.instantiate(d,{...m.importsPara(d,h),...c?{laboratorio:c.imports}:{}})).exports;m.usar(g.memory),c?.usar(g);let _=a?WebAssembly.promising(g._start):g._start;try{return await _(),{codigo:0}}catch(e){if(c?.corta(e))return{codigo:0,cortado:!0};if(e instanceof Ze){if(e.codigo===134)return Ge({tipo:`abort`,fuentes:t});if(e.codigo!==0){let e=Ke(o(),n);if(e)return e}return{codigo:e.codigo}}if(!(e instanceof WebAssembly.RuntimeError)&&!(e instanceof RangeError)&&e?.name!==`InternalError`)throw e;let r=Ue(e.message);if(u){let e=g[P.falla]?.value,t=(g[P.pila]?.value??8388608)>>>0;e===N.NULO?r=`nulo`:(e===N.PILA||r===`memoria`&&(t<4096||t>8388608))&&(r=`pila`);try{g[P.pila].value=at,g[P.falla].value=N.NADA,g.__laboratorio_vaciar?.()}catch{}}return Ge({tipo:r,funciones:gt(e.stack,f),fuentes:t,original:e.message})}}const yt=/* @__PURE__ */ new Set([`void`,`char`,`short`,`int`,`long`,`float`,`double`,`signed`,`unsigned`,`_Bool`,`bool`,`_Complex`]),bt=/* @__PURE__ */ new Set([`const`,`volatile`,`restrict`,`__restrict`,`register`,`auto`,`inline`,`__inline`,`_Noreturn`,`static`,`extern`,`typedef`]),xt=[`size_t`,`ssize_t`,`ptrdiff_t`,`intptr_t`,`uintptr_t`,`intmax_t`,`uintmax_t`,`off_t`,`wchar_t`,`time_t`,`clock_t`,`int8_t`,`uint8_t`,`int16_t`,`uint16_t`,`int32_t`,`uint32_t`,`int64_t`,`uint64_t`,`fpos_t`],St=[`FILE`,`div_t`,`ldiv_t`,`lldiv_t`,`va_list`],Ct=/* @__PURE__ */ new Set([`if`,`else`,`while`,`for`,`do`,`switch`,`case`,`default`,`return`,`break`,`continue`,`goto`,`sizeof`]),wt=/* @__PURE__ */ new Set([`malloc`,`calloc`,`realloc`,`free`]),Tt=[`...`,`<<=`,`>>=`,`->`,`++`,`--`,`<<`,`>>`,`<=`,`>=`,`==`,`!=`,`&&`,`||`,`*=`,`/=`,`%=`,`+=`,`-=`,`&=`,`^=`,`|=`,`##`];function Et(e){let t=[],n=e.length,r=0,i=1,a=!0,o=()=>{let t=e.indexOf(`*/`,r+2),a=t<0?n:t+2;for(let t=r;t<a;t+=1)e[t]===`
`&&(i+=1);r=a};for(;r<n;){let s=e[r];if(s===`
`){i+=1,r+=1,a=!0;continue}if(s===` `||s===`	`||s===`\r`||s===`\f`||s===`\v`){r+=1;continue}if(s===`\\`&&e[r+1]===`
`){r+=2,i+=1;continue}if(s===`/`&&e[r+1]===`/`){for(;r<n&&e[r]!==`
`;)r+=1;continue}if(s===`/`&&e[r+1]===`*`){o();continue}if(s===`#`&&a){let a=r,s=i;for(;r<n&&e[r]!==`
`;)if(e[r]===`\\`&&e[r+1]===`
`)r+=2,i+=1;else if(e[r]===`/`&&e[r+1]===`*`)o();else if(e[r]===`/`&&e[r+1]===`/`)for(;r<n&&e[r]!==`
`;)r+=1;else r+=1;t.push({t:`pp`,v:e.slice(a,r),i:a,f:r,l:s});continue}a=!1;let c=r;if(/[A-Za-z_$]/.test(s)){for(;r<n&&/[\w$]/.test(e[r]);)r+=1;t.push({t:`id`,v:e.slice(c,r),i:c,f:r,l:i});continue}if(/\d/.test(s)||s===`.`&&/\d/.test(e[r+1]??``)){for(r+=1;r<n&&(/[\w.]/.test(e[r])||/[+-]/.test(e[r])&&/[eEpP]/.test(e[r-1]));)r+=1;t.push({t:`num`,v:e.slice(c,r),i:c,f:r,l:i});continue}if(s===`"`||s===`'`){for(r+=1;r<n&&e[r]!==s&&e[r]!==`
`;)r+=e[r]===`\\`?2:1;r=Math.min(n,r+1),t.push({t:s===`"`?`str`:`chr`,v:e.slice(c,r),i:c,f:r,l:i});continue}let l=Tt.find(t=>e.startsWith(t,r))??s;r+=l.length,t.push({t:`p`,v:l,i:c,f:r,l:i})}return t}const Dt={"(":`)`,"[":`]`,"{":`}`};function G(e,t){let n=[];for(let r=t;r<e.length;r+=1){let t=e[r].t===`p`?e[r].v:``;if(Dt[t])n.push(Dt[t]);else if(t===`)`||t===`]`||t===`}`){if(n.pop()!==t)return-1;if(!n.length)return r}}return-1}function K(e,t,n){for(let r=t;r<e.length;r+=1){let t=e[r].t===`p`?e[r].v:``;if(t&&n.includes(t))return r;if(Dt[t]){if(r=G(e,r),r<0)return-1}else if(t===`)`||t===`]`||t===`}`)return-1}return-1}var q=class extends Error{};const J=e=>{if(e<0)throw new q;return e},Ot=e=>({k:`p`,a:e});function Y(e,t,n=!1){if(t.fn)return{k:`fn`};let r=e;for(let e=0;e<t.punteros;e+=1)r=Ot(r);for(let e=t.dims.length-1;e>=0;--e)r=e===0&&n?Ot(r):{k:`a`,de:r};return r}var kt=class{constructor(){this.typedefs=new Map([...xt.map(e=>[e,{k:`b`,n:e}]),...St.map(e=>[e,{k:`o`,n:e}])]),this.structs=[],this.porClave=/* @__PURE__ */ new Map,this.tipos=[]}esTipo=e=>this.typedefs.has(e);compuesto(e,t,n,r,i,a){if(e===`enum`)return{k:`b`,n:`enum`};let o=t?`${e} ${t}`:null;if(!n)return this.nuevoTipo({k:`s`,clave:o});let s=this.structs.length;o??=`#${s}`;let c={sid:s,clave:o,tag:t,clase:e,nombre:t,expresion:t?`${e} ${t}`:null,campos:[],local:a,archivo:i};this.structs.push(c),this.porClave.has(o)&&a||this.porClave.set(o,s);let l=n[0]+1;for(;l<n[1];){let e=Mt(r,l,this,{archivo:i,local:!0});if(!e)l=J(K(r,l,`;`))+1;else{for(let t of e.declaradores)t.nombre&&!t.bits&&!t.funcion&&c.campos.push({nombre:t.nombre,tipo:Y(e.base,t)});l=e.fin}}return this.nuevoTipo({k:`s`,clave:o})}nuevoTipo(e){return this.tipos.push(e),e}resolver(){for(let e of this.tipos){let t=this.porClave.get(e.clave),n=t===void 0?null:this.structs[t];n&&(n.expresion||!n.local)?e.sid=t:Object.assign(e,{k:`o`,n:e.clave?.startsWith(`#`)?`struct`:e.clave})}}};function At(e,t,n,{archivo:r,local:i}){let a=null,o=[],s=!1,c=!1,l=!1,u=[];for(;t<e.length&&e[t].t===`id`;){let d=e[t].v;if(d===`__attribute__`||d===`__declspec`||d===`_Alignas`)t=J(G(e,t+1))+1;else if(bt.has(d))d===`typedef`&&(c=!0),d===`extern`&&(l=!0),(d===`const`||d===`volatile`)&&u.push(d),t+=1;else if(d===`struct`||d===`union`||d===`enum`){if(s)break;t+=1;let o=null;e[t]?.t===`id`&&(o=e[t].v,t+=1);let c=null;if(e[t]?.v===`{`){let n=J(G(e,t));c=[t,n],t=n+1}a=n.compuesto(d,o,c,e,r,i),u.push(o?`${d} ${o}`:`?`),s=!0}else if(yt.has(d))o.push(d),u.push(d),s=!0,t+=1;else if(!s&&n.esTipo(d))a=n.typedefs.get(d),u.push(d),s=!0,t+=1;else break}return s?(a||=o.length===1&&o[0]===`void`?{k:`v`}:{k:`b`,n:o.join(` `)},{base:a,i:t,typedef:c,externo:l,texto:u.join(` `)}):null}function jt(e,t){let n=0;for(;e[t]?.v===`*`||e[t]?.t===`id`&&bt.has(e[t].v);)e[t].v===`*`&&(n+=1),t+=1;let r={nombre:null,tok:null,punteros:n,dims:[],fn:!1,funcion:null,bits:!1,i:t};if(e[t]?.v===`(`){let n=J(G(e,t)),i=e.slice(t+1,n).find(e=>e.t===`id`&&!bt.has(e.v));for(Object.assign(r,{nombre:i?.v??null,tok:i??null,fn:!0}),t=n+1;e[t]?.v===`(`||e[t]?.v===`[`;)t=J(G(e,t))+1;return r.i=t,r}if(e[t]?.t===`id`&&(r.nombre=e[t].v,r.tok=e[t],t+=1),e[t]?.v===`(`){let n=J(G(e,t));r.funcion=[t,n],t=n+1}for(;e[t]?.v===`[`;){let n=J(G(e,t));r.dims.push([t,n]),t=n+1}for(;e[t]?.v===`__attribute__`||e[t]?.v===`__asm__`;)t=J(G(e,t+1))+1;return e[t]?.v===`:`&&(r.bits=!0,t=J(K(e,t,`,;`))),r.i=t,r}function Mt(e,t,n,r){let i=At(e,t,n,r);if(!i)return null;let a=[],o=i.i;if(e[o]?.v===`;`)return{...i,declaradores:a,fin:o+1,cuerpo:null};for(;;){let t=jt(e,o);if(!t.nombre&&!t.fn)return null;if(o=t.i,t.funcion&&e[o]?.v===`{`&&!a.length){let n=J(G(e,o));return{...i,declaradores:[t],fin:n+1,cuerpo:[o,n]}}if(e[o]?.v===`=`&&(t.inicial=!0,o=J(K(e,o+1,`,;`))),a.push(t),e[o]?.v===`,`)o+=1;else return e[o]?.v===`;`?{...i,declaradores:a,fin:o+1,cuerpo:null}:null}}function Nt(e,t,n,r,i){let a=[],o=t+1;for(;o<n;){let t=J(K(e,o,`,)`)),n=At(e,o,r,{archivo:i,local:!0});if(n){let t=jt(e,n.i);t.nombre&&a.push({nombre:t.nombre,tipo:Y(n.base,t,!0),tok:t.tok})}o=t+1}return a}function Pt(e,t){let n=t.split(`/`).slice(0,-1),r=[];for(let t of e){let e=t.t===`pp`&&/^#\s*include\s*"([^"]+)"/.exec(t.v);if(!e)continue;let i=[];for(let t of[...n,...e[1].split(`/`)])t===`..`?i.pop():t&&t!==`.`&&i.push(t);r.push(i.join(`/`))}return r}const Ft=`unsigned long, int, unsigned long, int, unsigned long, int, unsigned long, int`,It=[`#ifndef __LAB_PRELUDIO`,`#define __LAB_PRELUDIO`,`#define __LAB_I(n) __attribute__((import_module("laboratorio"), import_name(n)))`,`__LAB_I("l") void __lab_l(int); __LAB_I("e") void __lab_e(int); __LAB_I("c") void __lab_c(void); __LAB_I("r0") void __lab_r0(void);`,`__LAB_I("r") void __lab_r(void *, ${Ft});`,`__LAB_I("v") void __lab_v(int, void *, ${Ft});`,`__LAB_I("g") void __lab_g(int, void *, ${Ft});`,`__LAB_I("s") void __lab_s(int, unsigned long); __LAB_I("p") void __lab_p(int, void *);`,`__LAB_I("f") void __lab_f(int, int, unsigned long, ${Ft});`,`__LAB_I("m") void *__lab_m(void *); __LAB_I("w") void *__lab_w(void *); __LAB_I("n") unsigned long __lab_n(unsigned long); __LAB_I("k") unsigned long __lab_k(unsigned long); __LAB_I("q") void *__lab_q(void *);`,`#define __lab_malloc(n) __lab_m(malloc(__lab_n(n)))`,`#define __lab_calloc(a, b) __lab_m(calloc(__lab_n(a), __lab_k(b)))`,`#define __lab_realloc(p, n) __lab_w(realloc(__lab_q(p), __lab_n(n)))`,`#define __lab_free(p) free(__lab_q(p))`,`#define __LAB_T(x) _Generic((x), _Bool: 1, char: 2, signed char: 3, unsigned char: 4, short: 5, unsigned short: 6, int: 7, unsigned int: 8, long: 9, unsigned long: 10, long long: 11, unsigned long long: 12, float: 13, double: 14, long double: 15, default: 0)`,`#endif`].join(`
`);function Lt(e,t){let n=[],r=e,i=t;for(let e=0;e<4;e+=1)if(n.push(`sizeof(${r}), __LAB_T(${r})`),i.k===`a`)r=`${r}[0]`,i=i.de;else if(i.k===`p`&&[`b`,`p`,`a`].includes(i.a.k))r=`(*${r})`,i=i.a;else break;for(;n.length<4;)n.push(`0, 0`);return n.join(`, `)}function Rt(e){let t=new kt,n={funciones:[],variables:[],structs:t.structs},r=e.map(e=>({...e,tk:Et(String(e.contenido))})),i=new Map(r.map(e=>[e.nombre,e]));for(let e of r){e.tops=[];let n=e.tk.filter(e=>e.t!==`pp`);e.limpios=n;let r=0;for(;r<n.length;){if(n[r].v===`;`){r+=1;continue}let i=null;try{if(i=Mt(n,r,t,{archivo:e.nombre,local:!1}),!i&&n[r].t===`id`&&n[r+1]?.v===`(`){let e=G(n,r+1);if(e>0&&n[e+1]?.v===`{`){let t=J(G(n,e+1));i={base:{k:`b`,n:`int`},texto:`int`,typedef:!1,externo:!1,declaradores:[{nombre:n[r].v,tok:n[r],punteros:0,dims:[],funcion:[r+1,e]}],fin:t+1,cuerpo:[e+1,t]}}}}catch(e){if(!(e instanceof q))throw e}if(!i)r+=1;else{if(i.typedef)for(let e of i.declaradores){if(!e.nombre)continue;let n=Y(i.base,e);if(t.typedefs.set(e.nombre,n),n.k===`s`&&e.punteros===0&&!e.dims.length){let r=t.structs.find(e=>e.clave===n.clave);r&&(r.nombre=e.nombre,r.expresion??=e.nombre)}}else if(i.cuerpo)e.tops.push({tipo:`funcion`,d:i});else if(!i.externo&&e.nombre.endsWith(`.c`))for(let t of i.declaradores)t.nombre&&!t.funcion&&e.tops.push({tipo:`global`,nombre:t.nombre,t:Y(i.base,t),tok:t.tok});r=i.fin}}}let a=e=>{let n=/* @__PURE__ */ new Set,r=[e.nombre];for(;r.length;){let e=r.pop();!n.has(e)&&i.has(e)&&(n.add(e),r.push(...Pt(i.get(e).tk,e)))}return t.structs.filter(e=>!e.local&&n.has(e.archivo))},o=[],s=[];for(let e of r){let r=[];for(let i of e.tops)if(i.tipo===`funcion`){let a=[];try{Bt(e,i.d,t,n,a),r.push(...a)}catch(e){if(!(e instanceof q))throw e}}e.limpios.forEach((t,n)=>{t.t===`id`&&wt.has(t.v)&&e.limpios[n+1]?.v===`(`&&e.limpios[n-1]?.v!==`.`&&e.limpios[n-1]?.v!==`->`&&r.push({desde:t.i,hasta:t.f,texto:`__lab_${t.v}`})}),s.push({a:e,cambios:r,globales:e.tops.filter(e=>e.tipo===`global`)})}t.resolver();for(let{a:e,cambios:t,globales:r}of s){if(!e.nombre.endsWith(`.c`)){o.push({nombre:e.nombre,contenido:`${It}\n#line 1 "/home/alumno/${e.nombre}"\n${zt(e.contenido,t)}`});continue}let i=[];for(let t of a(e))!t.expresion||t.clase!==`struct`&&t.clase!==`union`||(i.push(`__lab_s(${t.sid}, sizeof(${t.expresion}));`),t.campos.forEach((e,n)=>{if(e.tipo.k===`fn`)return;let r=`((${t.expresion} *)0)->${e.nombre}`;i.push(`__lab_f(${t.sid}, ${n}, (unsigned long)&(${r}), ${Lt(r,e.tipo)});`)}));n.funciones.forEach((t,n)=>{t.archivo===e.nombre&&t.nombre!==`main`&&i.push(`__lab_p(${n}, (void *)${t.nombre});`)});for(let t of r){let r=n.variables.length;n.variables.push({nombre:t.nombre,tipo:t.t,archivo:e.nombre,desde:0,hasta:1/0,global:!0}),i.push(`__lab_g(${r}, (void *)&${t.nombre}, ${Lt(t.nombre,t.t)});`)}let s=i.length?`\n__attribute__((constructor)) static void __lab_inicio(void) { ${i.join(` `)} }\n`:``;o.push({nombre:e.nombre,contenido:`${It}\n#line 1 "/home/alumno/${e.nombre}"\n${zt(e.contenido,t)}${s}`})}let c=new Map(e.map((e,t)=>[e.nombre,t]));return o.sort((e,t)=>c.get(e.nombre)-c.get(t.nombre)),{fuentes:o,mapa:n}}function zt(e,t){let n=t.map((e,t)=>({...e,k:t})).sort((e,t)=>e.desde-t.desde||e.hasta-e.desde-(t.hasta-t.desde)||e.k-t.k),r=``,i=0;for(let t of n)t.desde<i||(r+=e.slice(i,t.desde)+t.texto,i=t.hasta);return r+e.slice(i)}function Bt(e,t,n,r,i){let a=e.limpios,o=t.declaradores[0],s=Y(t.base,{...o,funcion:null,fn:!1}),c=s.k===`v`,l=c||t.texto.includes(`?`)?null:`${t.texto} ${`*`.repeat(o.punteros)}`;if(!c&&!l)throw new q;let u=r.funciones.length,[d,f]=t.cuerpo;r.funciones.push({nombre:o.nombre,archivo:e.nombre,linea:o.tok.l,retorno:c?null:s});let p=(e,t)=>i.push({desde:e,hasta:e,texto:t}),m=(t,n,i,a)=>{let o=r.variables.length;return r.variables.push({nombre:t,tipo:n,archivo:e.nombre,desde:i,hasta:a,global:!1}),`__lab_v(${o}, (void *)&${t}, ${Lt(t,n)});`},h=null,g=e=>{e!==h&&p(e.i,`__lab_l(${e.l});`)},_=Nt(a,...o.funcion,n,e.nombre),v=a[f].l;p(a[d].f,` __lab_e(${u}); ${_.map(e=>m(e.nombre,e.tipo,o.tok.l,v)).join(` `)} __lab_c();`),p(a[f].i,`__lab_r0(); `);let y=(e,t)=>{if(a[e]?.v===`{`)return ee(e);p(a[e].i,`{ `);let n=te(e,t);return p(a[n-1].f,` }`),n},ee=e=>{let t=J(G(a,e)),n=e+1;for(;n<t;)n=te(n,a[t].l);return t+1},b=(e,t,n,r=``)=>{t>e+1?(p(a[e].f,`${r}__lab_l(${n}), (`),p(a[t].i,`)`)):p(a[e].f,`${r}__lab_l(${n}), 1`)},x=e=>J(K(a,e,`;`))+1;function te(t,r){let o=a[t];if(!o)throw new q;if(o.v===`{`)return ee(t);if(o.v===`;`)return t+1;if(o.t===`id`){switch(o.v){case`if`:{g(o);let e=J(G(a,t+1));a[e+1]?.l===o.l&&a[e+1].v!==`{`&&(h=a[e+1]);let n=y(e+1,r);return a[n]?.v===`else`&&(n=y(n+1,r)),n}case`while`:{let e=J(G(a,t+1));return b(t+1,e,o.l),y(e+1,r)}case`do`:{let e=y(t+1,r);if(a[e]?.v!==`while`)throw new q;let n=J(G(a,e+1));return b(e+1,n,a[e].l),x(n+1)}case`for`:{let i=J(G(a,t+1)),s=J(K(a,t+2,`;`)),c=J(K(a,s+1,`;`)),l=y(i+1,r),u=``,d=Mt(a,t+2,n,{archivo:e.nombre,local:!0});return d&&d.fin===s+1&&!d.typedef&&(u=d.declaradores.filter(e=>!e.funcion).map(e=>m(e.nombre,Y(d.base,e),o.l,a[l-1].l)).filter(Boolean).map(e=>`${e.slice(0,-1)}, `).join(``)),b(s,c,o.l,u),l}case`switch`:{g(o);let e=J(G(a,t+1));return y(e+1,r)}case`case`:{let e=t+1,n=0;for(;e<a.length&&(a[e].v!==`:`||n!==0);)a[e].v===`?`&&(n+=1),a[e].v===`:`&&--n,e+=1;return J(e<a.length?e:-1)+1}case`default`:if(a[t+1]?.v===`:`)return t+2;break;case`return`:{g(o);let e=x(t+1)-1;return e===t+1||c?(p(o.i,`{ __lab_r0(); `),p(a[e].f,` }`)):(i.push({desde:o.i,hasta:o.f,texto:`{ ${l} __lab_rv = (`}),i.push({desde:a[e].i,hasta:a[e].f,texto:`); __lab_r((void *)&__lab_rv, ${Lt(`__lab_rv`,s)}); return __lab_rv; }`})),e+1}case`break`:case`continue`:case`goto`:return g(o),x(t+1);case`else`:throw new q}if(a[t+1]?.v===`:`&&!Ct.has(o.v))return t+2;if(!Ct.has(o.v)&&(n.esTipo(o.v)||yt.has(o.v)||bt.has(o.v)||[`struct`,`union`,`enum`].includes(o.v)||a[t+1]?.t===`id`&&!Ct.has(a[t+1].v))){let i=Mt(a,t,n,{archivo:e.nombre,local:!0});if(!i&&a[t+1]?.t===`id`&&!n.esTipo(o.v)&&(n.typedefs.set(o.v,{k:`b`,n:o.v}),i=Mt(a,t,n,{archivo:e.nombre,local:!0}),n.typedefs.delete(o.v)),i&&!i.cuerpo){if(g(o),i.typedef)for(let e of i.declaradores)e.nombre&&n.typedefs.set(e.nombre,Y(i.base,e));else if(!i.externo){let e=i.declaradores.filter(e=>e.nombre&&!e.funcion).map(e=>m(e.nombre,Y(i.base,e),e.tok?.l??o.l,r));p(a[i.fin-1].f,` ${e.join(` `)}`)}return i.fin}}}return g(o),x(t)}let S=d+1;for(;S<f;)S=te(S,v)}var Vt=class extends Error{};const X={BOOL:1,CHAR:2,FLOAT:13,DOUBLE:14,LONG_DOUBLE:15},Ht={3:[`getInt8`,1],4:[`getUint8`,1],5:[`getInt16`,2],6:[`getUint16`,2],7:[`getInt32`,4],8:[`getUint32`,4],9:[`getInt32`,4],10:[`getUint32`,4],11:[`getBigInt64`,8],12:[`getBigUint64`,8]},Ut=e=>`0x${(e>>>0).toString(16)}`,Wt={0:`\\0`,7:`\\a`,8:`\\b`,9:`\\t`,10:`\\n`,11:`\\v`,12:`\\f`,13:`\\r`,34:`\\"`,39:`\\'`,92:`\\\\`};function Gt(e,t){return Wt[e]&&(e!==34||t===`"`)&&(e!==39||t===`'`)?Wt[e]:e>=32&&e<127?String.fromCharCode(e):`\\x${e.toString(16).padStart(2,`0`)}`}function Kt(e,t){if(!Number.isFinite(e))return Number.isNaN(e)?`nan`:e>0?`inf`:`-inf`;let n=String(t?Number(e.toPrecision(7)):e);return/^-?\d+$/.test(n)?`${n}.0`:n}var qt=class{constructor(e,t){this.mapa=e,this.tope=t,this.pasos=[],this.marcos=[],this.objetos=[],this.indiceMarcos=/* @__PURE__ */ new Map,this.indiceObjetos=/* @__PURE__ */ new Map,this.salida=[],this.escritos=0,this.cortado=!1,this.pila=[],this.globales=[],this.structs=[],this.bloques=/* @__PURE__ */ new Map,this.funciones=/* @__PURE__ */ new Map,this.serie=0,this.numeros=/* @__PURE__ */ new Map,this.cuantos=/* @__PURE__ */ new Map,this.pedido={n:0,k:1},this.decodificadores={};let n=e=>[0,2,4,6].map(t=>({s:e[t]>>>0,t:e[t+1]})),r=()=>this.pila.at(-1);this.imports={l:e=>{let t=r();t&&(t.linea=e,this.paso(`line`))},e:t=>{let n=e.funciones[t];this.pila.push({f:n,vars:/* @__PURE__ */ new Map,linea:n?.linea??0,serie:this.serie+=1})},c:()=>this.paso(`call`),r0:()=>this.salir(null),r:(e,...t)=>this.salir({dir:e>>>0,niv:n(t)}),v:(e,t,...i)=>r()?.vars.set(e,{dir:t>>>0,niv:n(i)}),g:(e,t,...r)=>this.globales.push({id:e,dir:t>>>0,niv:n(r)}),s:(e,t)=>{this.structs[e]??={tamano:t>>>0,campos:[]}},f:(e,t,r,...i)=>{let a=this.structs[e];a&&(a.campos[t]={desde:r>>>0,niv:n(i)})},p:(t,n)=>this.funciones.set(n>>>0,e.funciones[t]?.nombre),n:e=>(this.pedido.n=e>>>0,e),k:e=>(this.pedido.k=e>>>0,e),q:e=>{let t=this.bloques.get(e>>>0);return this.bloques.delete(e>>>0),this.pedido.antes=t?.serie,e},m:e=>this.bloque(e,!1),w:e=>this.bloque(e,!0)}}bloque(e,t){let{n,k:r,antes:i}=this.pedido;return e&&this.bloques.set(e>>>0,{tamano:n*r,serie:t&&i?i:this.serie+=1}),this.pedido={n:0,k:1},e}usar(e){this.x=e}corta=e=>e instanceof Vt;anotar(e,t){if(!t)return;let n=this.salida.at(-1);n&&n[0]===e?n[1]+=t:this.salida.push([e,t]),this.escritos+=t.length}escrito(e,t){let n=e===2?`err`:`out`;this.decodificadores[n]??=new TextDecoder,this.anotar(n,this.decodificadores[n].decode(t,{stream:!0}).split(`\x1B[2J\x1B[H`).join(``))}leido(e){e?.length&&this.anotar(`in`,new TextDecoder().decode(e))}salir(e){this.pila.at(-1)&&(this.paso(`return`,e),this.pila.pop())}vista(){let e=this.x.memory.buffer;return this.dv?.buffer!==e&&(this.dv=new DataView(e)),this.dv}dentro=(e,t)=>e>0&&e+t<=this.vista().byteLength;texto(e,t){let n=this.vista(),r=``;for(let i=0;i<t&&e+i<n.byteLength;i+=1){let t=n.getUint8(e+i);if(!t)return`"${r}"`;if(r+=Gt(t,`"`),r.length>60)break}return`"${r}`}numero(e,t){let{s:n,t:r}=t;if(!this.dentro(e,Math.max(n,1)))return`?`;let i=this.vista();if(r===X.BOOL)return i.getUint8(e)?`true`:`false`;if(r===X.CHAR)return`'${Gt(i.getUint8(e),`'`)}'`;if(r===X.FLOAT)return Kt(i.getFloat32(e,!0),!0);if((r===X.DOUBLE||r===X.LONG_DOUBLE)&&n===8)return Kt(i.getFloat64(e,!0),!1);let a=Ht[r];return a&&a[1]===n?String(i[a[0]](e,!0)):`?`}tamano(e,t,n){return e?.k===`s`?this.structs[e.sid]?.tamano??0:t[n]?.s??0}firma(e,t,n){return e?e.k===`s`?`s${e.sid}`:e.k===`a`?`a${t[n]?.s}(${this.firma(e.de,t,n+1)})`:e.k===`p`?`p(${this.firma(e.a,t,n+1)})`:`${e.k}${t[n]?.t??``}`:`?`}objeto(e,t,n,r,i,a){let o=`${e}:${t}:${this.firma(n,r,i)}`,s=this.numeros.get(o);if(!s){let a=n.k===`s`?this.mapa.structs[n.sid]:null,c=a?a.nombre||a.clase:`arreglo`;this.cuantos.set(c,(this.cuantos.get(c)??0)+1),s={n:this.numeros.size+1,clave:o,zona:e,dir:t,tipo:n,niv:r.slice(i),clase:c,k:this.cuantos.get(c),esStruct:!!a},this.numeros.set(o,s)}return a.push(s),[`r`,s.n]}valor(e,t,n,r,i,a){if(!n)return[`v`,`?`];switch(n.k){case`b`:{let e=r[i]??{s:0,t:0};return[`v`,this.numero(t,n.n===`enum`&&!e.t&&e.s===4?{s:4,t:7}:e)]}case`a`:return n.de?.k===`b`&&r[i+1]?.t===X.CHAR?[`v`,this.dentro(t,1)?this.texto(t,r[i]?.s??0):`?`]:this.objeto(e,t,n,r,i,a);case`s`:return this.structs[n.sid]?this.objeto(e,t,n,r,i,a):[`v`,`{…}`];case`p`:return this.dentro(t,4)?this.apuntado(this.vista().getUint32(t,!0),n.a,r,i+1,a):[`v`,`?`];case`fn`:{let e=this.dentro(t,4)?this.vista().getUint32(t,!0):-1;return e?this.funciones.has(e)?[`f`,this.funciones.get(e)]:[`v`,`?`]:[`v`,`NULL`]}case`o`:return[`v`,n.n===`FILE`?`archivo`:`…`];default:return[`v`,`?`]}}apuntado(e,t,n,r,i){if(!e)return[`v`,`NULL`];if(t?.k===`o`)return[`v`,t.n===`FILE`?`archivo abierto`:Ut(e)];if(t?.k===`b`&&n[r]?.t===X.CHAR)return[`v`,this.dentro(e,1)?this.texto(e,4096):Ut(e)];if(!t||t.k===`v`||t.k===`fn`)return[`v`,Ut(e)];let a=this.tamano(t,n,r);for(let[o,s]of this.bloques){if(e<o||e>=o+Math.max(s.tamano,1))continue;let c=`h${s.serie}`;if(!a)return[`v`,Ut(e)];if(t.k===`s`&&((e-o)%a||s.tamano<=a||e!==o))return this.objeto(c,e,t,n,r,i);let l=Math.floor(s.tamano/a);return l<1?[`v`,Ut(e)]:this.objeto(c,o,{k:`a`,de:t},[{s:l*a,t:0},...n.slice(r)],0,i)}for(let a of this.vivas){if(e<a.dir||e>=a.dir+Math.max(a.niv[0].s,1))continue;if(t.k===`s`&&a.tipo.k!==`s`)return this.objeto(a.zona,e,t,n,r,i);if(e===a.dir)return a.tipo.k===`a`||a.tipo.k===`s`?this.valor(a.zona,a.dir,a.tipo,a.niv,0,i):[`v`,`&${a.nombre}`];let o=a.tipo.k===`a`?a.niv[1]?.s:0;return o&&(e-a.dir)%o===0?[`v`,`&${a.nombre}[${(e-a.dir)/o}]`]:[`v`,Ut(e)]}return[`v`,Ut(e)]}foto(e,t){let n={i:e.n,t:e.esStruct?`objeto`:`arreglo`,k:e.k},r=0;if(e.esStruct){n.c=e.clase;let i=this.structs[e.tipo.sid],a=this.mapa.structs[e.tipo.sid].campos,o=[];a.forEach((n,r)=>{let a=i.campos[r];a&&n.tipo.k!==`fn`&&o.push([n.nombre,this.valor(e.zona,e.dir+a.desde,n.tipo,a.niv,0,t)])}),n.a=o.slice(0,40),r=o.length-40}else{let i=this.tamano(e.tipo.de,e.niv,1),a=i?Math.floor(e.niv[0].s/i):0;n.e=[];for(let r=0;r<Math.min(a,40);r+=1)n.e.push(this.valor(e.zona,e.dir+r*i,e.tipo.de,e.niv,1,t));r=a-40}return r>0&&(n.m=r),n}guardar(e,t,n){let r=JSON.stringify(n),i=t.get(r);return i===void 0&&(i=e.length,t.set(r,i),e.push(r)),i}variablesDe(e){let t=/* @__PURE__ */ new Map;for(let[n,r]of e.vars){let i=this.mapa.variables[n];i&&e.linea>=i.desde&&e.linea<=i.hasta&&t.set(i.nombre,{...r,nombre:i.nombre,tipo:i.tipo,zona:`m${e.serie}`})}return[...t.values()]}paso(e,t){if(this.pasos.length>=this.tope)throw this.cortado=!0,new Vt;this.x?.__laboratorio_vaciar?.();try{this.anotarPaso(e,t)}catch(e){if(e instanceof Vt)throw e}}anotarPaso(e,t){let n=this.pila.at(-1),r=this.pila,i=0;r.length>26&&(i=r.length-25-1,r=[r[0],...r.slice(-25)]);let a=this.globales.map(e=>({...e,nombre:this.mapa.variables[e.id].nombre,tipo:this.mapa.variables[e.id].tipo,zona:`g`})),o=r.map(e=>this.variablesDe(e));this.vivas=[...a,...this.pila.flatMap(e=>this.variablesDe(e))];let s=[],c=e=>{let t=e.slice(0,80).map(e=>[e.nombre,this.valor(e.zona,e.dir,e.tipo,e.niv,0,s)]);return e.length>80?{v:t,m:e.length-80}:{v:t}},l=[];a.length&&l.push(this.guardar(this.marcos,this.indiceMarcos,{f:`Variables globales`,a:n?.f?.archivo??``,t:`g`,l:0,...c(a)})),r.forEach((e,t)=>{l.push(this.guardar(this.marcos,this.indiceMarcos,{f:e.f?.nombre??`?`,a:e.f?.archivo??``,t:`f`,l:e.linea,...c(o[t])}))});let u={e,a:n?.f?.archivo??``,l:n?.linea??0,s:this.escritos,m:l};i&&(u.h=i),e===`return`&&(t&&n.f?.retorno?u.d=this.valor(`m${n.serie}`,t.dir,n.f.retorno,t.niv,0,s):u.n=1);let d=[],f=/* @__PURE__ */ new Set;for(let e=0;e<s.length&&d.length<60;e+=1){let t=s[e];f.has(t.n)||(f.add(t.n),d.push(this.guardar(this.objetos,this.indiceObjetos,this.foto(t,s))))}u.o=d,this.pasos.push(u)}terminar(e){for(let e of Object.keys(this.decodificadores))this.anotar(e,this.decodificadores[e].decode());let t=this.pasos.at(-1);if(!t||this.cortado)return;let n=typeof e?.error==`string`&&e.error.trim()?e.error.trim():``;n?this.anotar(`err`,`${be(e.error)}\n`):e?.codigo&&this.anotar(`err`,`El programa terminó con el código ${e.codigo}.\n`);let r={e:`fin`,a:t.a,l:t.l,s:this.escritos,m:t.m,o:t.o};t.h&&(r.h=t.h),n&&(r.x=be(e.error)),this.pasos.push(r)}textoFinal(){return`{"pasos":${JSON.stringify(this.pasos)},"marcos":[${this.marcos.join(`,`)}],"objetos":[${this.objetos.join(`,`)}],"salida":${JSON.stringify(this.salida)},"tope":${this.cortado}}`}};async function Jt(e,t,{tope:n,leer:r,escribir:i,pausa:a,ultimoError:o}){let{fuentes:s,mapa:c}=Rt(t.fuentes),l=await pt(e,{...t,fuentes:s});if(!l.programa)return null;let u=new qt(c,n),d=e=>(u.leido(e),e),f=await _t({programa:l.programa,fuentes:t.fuentes,datos:t.datos,nombre:t.principal,pausa:a,ultimoError:o,rastro:u,leer:e=>{let t=r(e);return typeof t?.then==`function`?t.then(d):d(t)},escribir:(e,t)=>{u.escrito(e,t),i(e,t)}});return u.terminar(f),{r:f,pasos:u.textoFinal()}}new Intl.NumberFormat(`es-AR`);function Yt(e,t){let n=e.fetch.bind(e),r=0;return e.fetch=async(...e)=>{let i=await n(...e);if(!i.ok||!i.body)return i;let a=i.body.getReader(),o=new ReadableStream({async pull(e){let{done:n,value:i}=await a.read();n?e.close():(r+=i.byteLength,t(r),e.enqueue(i))},cancel:e=>a.cancel(e)});return new Response(o,{status:i.status,statusText:i.statusText,headers:i.headers})},()=>{e.fetch=n}}const Xt=[`fetch`,`fetchLater`,`XMLHttpRequest`,`WebSocket`,`WebSocketStream`,`EventSource`,`WebTransport`,`importScripts`,`Worker`,`SharedWorker`,`caches`,`indexedDB`,`BroadcastChannel`,`CookieStore`,`cookieStore`,`RTCPeerConnection`,`webkitRTCPeerConnection`,`RTCDataChannel`,`WebSocketError`,`postMessage`];function Zt(e,t=Xt){let n=[];for(let r of t){let t=!1;for(let n=e;n&&n!==Object.prototype;n=Object.getPrototypeOf(n))if(Object.prototype.hasOwnProperty.call(n,r)){t=!0;try{delete n[r]}catch{}}t&&n.push(r);try{Object.defineProperty(e,r,{value:void 0,writable:!1,configurable:!1,enumerable:!1})}catch{}}return n}const Z=self.postMessage.bind(self),Qt=self.addEventListener.bind(self),$t=typeof WebAssembly.Suspending==`function`&&typeof WebAssembly.promising==`function`,en=e=>new TextEncoder().encode(e);let Q=null,tn=0,nn=0,rn=!1,an=null,on=0,sn=0,cn=[],ln=!1,$={flujo:``,texto:``},un=0,dn=``,fn=``,pn={};function mn(){$.texto&&Z({tipo:`salida`,id:tn,flujo:$.flujo,texto:$.texto}),$={flujo:``,texto:``},un=performance.now()}function hn(e,t){if(!rn&&t){if(nn+=t.length,nn>1e5)rn=!0,mn(),Z({tipo:`tope`,id:tn});else{if($.flujo&&$.flujo!==e&&mn(),$.flujo=e,$.texto+=t,e===`out`){let e=t.lastIndexOf(`
`);dn=e>=0?t.slice(e+1):`${dn}${t}`.slice(-200)}else fn=`${fn}${t}`.slice(-2e3);($.texto.length>8192||performance.now()-un>50)&&mn()}}}const gn=(e,t)=>{let n=e===2?`err`:`out`;pn[n]??=new TextDecoder,pn[n].decode(t,{stream:!0}).split(`\x1B[2J\x1B[H`).forEach((e,t)=>{t>0&&!rn&&($={flujo:``,texto:``},Z({tipo:`limpiar`,id:tn})),hn(n,e)})};function _n(){if($t)return mn(),new Promise(e=>{an=e,sn=performance.now(),Z({tipo:`pide`,id:tn,pregunta:dn.slice(-200)})});if(cn.length){let e=String(cn.shift());return hn(`out`,`${e}\n`),en(`${e}\n`)}return ln||(ln=!0,mn(),Z({tipo:`sin-pausa`,id:tn})),/* @__PURE__ */ new Uint8Array}async function vn(e,t){Yt(self,e=>Z({tipo:`progreso`,bajado:e,total:t}));let n=await fetch(`${e}c/wccfiles.zip`);if(!n.ok)throw Error(`No se pudo bajar C (${n.status}).`);return Q=await dt(new Uint8Array(await n.arrayBuffer())),Zt(self),{version:`xcc ${Q.version}`.trim(),pausa:$t}}async function yn({id:e,codigo:t,nombre:n,lineas:r,archivos:i,principal:a,modo:o}){tn=e,nn=0,rn=!1,on=0,cn=Array.isArray(r)?r.slice(0,1e3):[],ln=!1,$={flujo:``,texto:``},un=performance.now(),dn=``,fn=``,pn={};let s=ft({codigo:t,nombre:n,archivos:i,principal:a}),c=performance.now(),l,u=null;try{let e=await pt(Q,s);if(e.error)l=e;else{e.avisos.forEach(e=>hn(`err`,e));let t={pausa:$t,leer:_n,escribir:gn,ultimoError:()=>fn},n=o?.tipo===`pasos`?await Jt(Q,s,{...t,tope:Number(o.tope)||1e3}):null;n?{r:l,pasos:u}=n:(o?.tipo===`pasos`&&hn(`err`,`Este programa no se puede seguir paso a paso. Corre como siempre.
`),l=await _t({programa:e.programa,fuentes:s.fuentes,datos:s.datos,nombre:s.principal,...t}))}}catch(e){l={error:`El programa se cortó por un error.\n${String(e?.message??e)}`,linea:0}}for(let[e,t]of Object.entries(pn))hn(e,t.decode());l.codigo&&hn(`err`,`${dn?`
`:``}El programa terminó con el código ${l.codigo}.\n`),mn(),u&&Z({tipo:`pasos`,id:e,pasos:u});let d=l.archivos??null,f={tipo:`fin`,id:e,ms:Math.round(performance.now()-c-on),error:typeof l.error==`string`?l.error:null,linea:Number(l.linea)||0,archivo:typeof l.archivo==`string`?l.archivo:null,archivos:d};Z(f,d?d.cambiados.map(e=>e.contenido.buffer):[])}async function bn({id:e,codigo:t,nombre:n,archivos:r,principal:i}){let a;try{a=await pt(Q,ft({codigo:t,nombre:n,archivos:r,principal:i}))}catch{a={}}Z({tipo:`revisado`,id:e,error:typeof a.error==`string`?a.error:null,linea:Number(a.linea)||0,archivo:typeof a.archivo==`string`?a.archivo:null,avisos:Array.isArray(a.avisos)?a.avisos.map(String):[]})}Qt(`message`,async({data:e})=>{if(e?.tipo===`cargar`)try{Z({tipo:`listo`,...await vn(String(e.base),Number(e.total)||0)})}catch(e){Z({tipo:`falla`,mensaje:String(e?.message??e)})}else if(e?.tipo===`correr`&&Q)yn(e);else if(e?.tipo===`revisar`&&Q)bn(e);else if(e?.tipo===`entrada`&&an){let t=an;an=null,on+=performance.now()-sn,dn=``,t(typeof e.texto==`string`?en(`${e.texto}\n`):/* @__PURE__ */ new Uint8Array)}});