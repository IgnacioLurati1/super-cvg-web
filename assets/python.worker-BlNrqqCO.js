var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),l=/* @__PURE__ */ (e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")}),u=Object.defineProperty,d=(e,t)=>u(e,`name`,{value:t,configurable:!0}),f=(e=>typeof l<`u`?l:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof l<`u`?l:e)[t]}):e)(function(e){if(typeof l<`u`)return l.apply(this,arguments);throw Error(`Dynamic require of "`+e+`" is not supported`)}),p=(()=>{for(var e=/* @__PURE__ */ new Uint8Array(128),t=0;t<64;t++)e[t<26?t+65:t<52?t+71:t<62?t-4:t*4-205]=t;return t=>{for(var n=t.length,r=new Uint8Array((n-(t[n-1]==`=`)-(t[n-2]==`=`))*3/4|0),i=0,a=0;i<n;){var o=e[t.charCodeAt(i++)],s=e[t.charCodeAt(i++)],c=e[t.charCodeAt(i++)],l=e[t.charCodeAt(i++)];r[a++]=o<<2|s>>4,r[a++]=s<<4|c>>2,r[a++]=c<<6|l}return r}})();function m(e){return!isNaN(parseFloat(e))&&isFinite(e)}d(m,`_isNumber`);function h(e){return e.charAt(0).toUpperCase()+e.substring(1)}d(h,`_capitalize`);function g(e){return function(){return this[e]}}d(g,`_getter`);var _=[`isConstructor`,`isEval`,`isNative`,`isToplevel`],v=[`columnNumber`,`lineNumber`],y=[`fileName`,`functionName`,`source`],b=_.concat(v,y,[`args`],[`evalOrigin`]);function x(e){if(e)for(var t=0;t<b.length;t++)e[b[t]]!==void 0&&this[`set`+h(b[t])](e[b[t]])}for(d(x,`StackFrame`),x.prototype={getArgs:d(function(){return this.args},`getArgs`),setArgs:d(function(e){if(Object.prototype.toString.call(e)!==`[object Array]`)throw TypeError(`Args must be an Array`);this.args=e},`setArgs`),getEvalOrigin:d(function(){return this.evalOrigin},`getEvalOrigin`),setEvalOrigin:d(function(e){if(e instanceof x)this.evalOrigin=e;else if(e instanceof Object)this.evalOrigin=new x(e);else throw TypeError(`Eval Origin must be an Object or StackFrame`)},`setEvalOrigin`),toString:d(function(){var e=this.getFileName()||``,t=this.getLineNumber()||``,n=this.getColumnNumber()||``,r=this.getFunctionName()||``;return this.getIsEval()?e?`[eval] (`+e+`:`+t+`:`+n+`)`:`[eval]:`+t+`:`+n:r?r+` (`+e+`:`+t+`:`+n+`)`:e+`:`+t+`:`+n},`toString`)},x.fromString=d(function(e){var t=e.indexOf(`(`),n=e.lastIndexOf(`)`),r=e.substring(0,t),i=e.substring(t+1,n).split(`,`),a=e.substring(n+1);if(a.indexOf(`@`)===0)var o=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(a,``),s=o[1],c=o[2],l=o[3];return new x({functionName:r,args:i||void 0,fileName:s,lineNumber:c||void 0,columnNumber:l||void 0})},`StackFrame$$fromString`),S=0;S<_.length;S++)x.prototype[`get`+h(_[S])]=g(_[S]),x.prototype[`set`+h(_[S])]=function(e){return function(t){this[e]=!!t}}(_[S]);var S;for(C=0;C<v.length;C++)x.prototype[`get`+h(v[C])]=g(v[C]),x.prototype[`set`+h(v[C])]=function(e){return function(t){if(!m(t))throw TypeError(e+` must be a Number`);this[e]=Number(t)}}(v[C]);var C;for(w=0;w<y.length;w++)x.prototype[`get`+h(y[w])]=g(y[w]),x.prototype[`set`+h(y[w])]=function(e){return function(t){this[e]=String(t)}}(y[w]);var w,T=x;function ee(){var e=/^\s*at .*(\S+:\d+|\(native\))/m,t=/^(eval@)?(\[native code])?$/;return{parse:d(function(t){if(t.stack&&t.stack.match(e))return this.parseV8OrIE(t);if(t.stack)return this.parseFFOrSafari(t);throw Error(`Cannot parse given Error object`)},`ErrorStackParser$$parse`),extractLocation:d(function(e){if(e.indexOf(`:`)===-1)return[e];var t=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g,``));return[t[1],t[2]||void 0,t[3]||void 0]},`ErrorStackParser$$extractLocation`),parseV8OrIE:d(function(t){return t.stack.split(`
`).filter(function(t){return!!t.match(e)},this).map(function(e){e.indexOf(`(eval `)>-1&&(e=e.replace(/eval code/g,`eval`).replace(/(\(eval at [^()]*)|(,.*$)/g,``));var t=e.replace(/^\s+/,``).replace(/\(eval code/g,`(`).replace(/^.*?\s+/,``),n=t.match(/ (\(.+\)$)/);t=n?t.replace(n[0],``):t;var r=this.extractLocation(n?n[1]:t);return new T({functionName:n&&t||void 0,fileName:[`eval`,`<anonymous>`].indexOf(r[0])>-1?void 0:r[0],lineNumber:r[1],columnNumber:r[2],source:e})},this)},`ErrorStackParser$$parseV8OrIE`),parseFFOrSafari:d(function(e){return e.stack.split(`
`).filter(function(e){return!e.match(t)},this).map(function(e){if(e.indexOf(` > eval`)>-1&&(e=e.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,`:$1`)),e.indexOf(`@`)===-1&&e.indexOf(`:`)===-1)return new T({functionName:e});var t=/((.*".+"[^@]*)?[^@]*)(?:@)/,n=e.match(t),r=n&&n[1]?n[1]:void 0,i=this.extractLocation(e.replace(t,``));return new T({functionName:r,fileName:i[0],lineNumber:i[1],columnNumber:i[2],source:e})},this)},`ErrorStackParser$$parseFFOrSafari`)}}d(ee,`ErrorStackParser`);var te=new ee;function ne(){return typeof API<`u`&&API!==globalThis.API?API.runtimeEnv:re({IN_BUN:typeof Bun<`u`,IN_DENO:typeof Deno<`u`,IN_NODE:typeof process==`object`&&typeof process.versions==`object`&&typeof process.versions.node==`string`&&!process.browser,IN_SAFARI:typeof navigator==`object`&&typeof navigator.userAgent==`string`&&navigator.userAgent.indexOf(`Chrome`)===-1&&navigator.userAgent.indexOf(`Safari`)>-1,IN_SHELL:typeof read==`function`&&typeof load==`function`,IN_WORKERD:typeof navigator==`object`&&navigator.userAgent?.includes(`Cloudflare-Workers`)})}d(ne,`getGlobalRuntimeEnv`);var E=ne();function re(e){let t=e.IN_NODE&&typeof module<`u`&&module.exports&&typeof f==`function`&&typeof __dirname==`string`,n=e.IN_NODE&&!t,r=!e.IN_NODE&&!e.IN_DENO&&!e.IN_BUN,i=r&&typeof window<`u`&&typeof window.document<`u`&&typeof document.createElement==`function`&&`sessionStorage`in window&&typeof globalThis.importScripts!=`function`,a=r&&typeof globalThis.WorkerGlobalScope<`u`&&typeof globalThis.self<`u`&&globalThis.self instanceof globalThis.WorkerGlobalScope;if(a&&ie())throw Error(`Classic web workers are not supported`);let o={...e,IN_BROWSER:r,IN_BROWSER_MAIN_THREAD:i,IN_BROWSER_WEB_WORKER:a,IN_NODE_COMMONJS:t,IN_NODE_ESM:n};if(!(o.IN_BROWSER_MAIN_THREAD||o.IN_BROWSER_WEB_WORKER||o.IN_NODE||o.IN_SHELL||o.IN_WORKERD))throw Error(`Cannot determine runtime environment: ${JSON.stringify(o)}`);return o}d(re,`calculateDerivedFlags`);function ie(){try{return globalThis.importScripts(`data:text/javascript,`),!0}catch{return!1}}d(ie,`isClassicWorker`);var ae,D,oe,O;async function k(){if(!E.IN_NODE||(ae=(await import(`./__vite-browser-external-BWJSi_EM.js`).then(e=>/* @__PURE__ */ c(e.default,1))).default,oe=await import(`./__vite-browser-external-BWJSi_EM.js`).then(e=>/* @__PURE__ */ c(e.default,1)),O=await import(`./__vite-browser-external-BWJSi_EM.js`).then(e=>/* @__PURE__ */ c(e.default,1)),(await import(`./__vite-browser-external-BWJSi_EM.js`).then(e=>/* @__PURE__ */ c(e.default,1))).default,D=await import(`./__vite-browser-external-BWJSi_EM.js`).then(e=>/* @__PURE__ */ c(e.default,1)),A=D.sep,typeof f<`u`))return;let e={fs:oe,crypto:await import(`./__vite-browser-external-BWJSi_EM.js`).then(e=>/* @__PURE__ */ c(e.default,1)),ws:await import(`./__vite-browser-external-BWJSi_EM.js`).then(e=>/* @__PURE__ */ c(e.default,1)),child_process:await import(`./__vite-browser-external-BWJSi_EM.js`).then(e=>/* @__PURE__ */ c(e.default,1))};globalThis.require=function(t){return e[t]}}d(k,`initNodeModules`);function se(e,t){return D.resolve(t||`.`,e)}d(se,`node_resolvePath`);function ce(e,t){return t===void 0&&(t=location),new URL(e,t).toString()}d(ce,`browser_resolvePath`);var le=E.IN_NODE?se:E.IN_SHELL?d(e=>e,`resolvePath`):ce,A;E.IN_NODE||(A=`/`);function ue(e,t){return e.startsWith(`file://`)&&(e=e.slice(7)),e.includes(`://`)?{response:fetch(e)}:{binary:O.readFile(e).then(e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength))}}d(ue,`node_getBinaryResponse`);function de(e,t){if(e.startsWith(`file://`)&&(e=e.slice(7)),e.includes(`://`))throw Error(`Shell cannot fetch urls`);return{binary:Promise.resolve(new Uint8Array(readbuffer(e)))}}d(de,`shell_getBinaryResponse`);function fe(e,t){let n=new URL(e,location);return{response:fetch(n,t?{integrity:t}:{})}}d(fe,`browser_getBinaryResponse`);var pe=E.IN_NODE?ue:E.IN_SHELL?de:fe;async function me(e,t){let{response:n,binary:r}=pe(e,t);if(r)return r;let i=await n;if(!i.ok)throw Error(`Failed to load '${e}': request failed.`);return new Uint8Array(await i.arrayBuffer())}d(me,`loadBinaryFile`);var he=E.IN_NODE?ge:d(async e=>await import(e),`loadScript`);async function ge(e){return e.startsWith(`file://`)&&(e=e.slice(7)),e.includes(`://`)?await import(e):await import(ae.pathToFileURL(e).href)}d(ge,`nodeLoadScript`);async function _e(e){if(E.IN_NODE){await k();let t=await O.readFile(e,{encoding:`utf8`});return JSON.parse(t)}if(E.IN_SHELL){let t=read(e);return JSON.parse(t)}return await(await fetch(e)).json()}d(_e,`loadLockFile`);async function j(){if(E.IN_NODE_COMMONJS)return __dirname;let e;try{throw Error()}catch(t){e=t}let t=te.parse(e)[0].fileName;if(E.IN_NODE&&!t.startsWith(`file://`)&&(t=`file://${t}`),E.IN_NODE_ESM){let e=await import(`./__vite-browser-external-BWJSi_EM.js`).then(e=>/* @__PURE__ */ c(e.default,1));return(await import(`./__vite-browser-external-BWJSi_EM.js`).then(e=>/* @__PURE__ */ c(e.default,1))).fileURLToPath(e.dirname(t))}let n=t.lastIndexOf(A);if(n===-1)throw Error(`Could not extract indexURL path from pyodide module location. Please pass the indexURL explicitly to loadPyodide.`);return t.slice(0,n)}d(j,`calculateDirname`);function M(e){return e.substring(0,e.lastIndexOf(`/`)+1)||globalThis.location?.toString()||`.`}d(M,`calculateInstallBaseUrl`);function N(e){let t=e.FS,n=e.FS.filesystems.MEMFS,r=e.PATH,i={DIR_MODE:16895,FILE_MODE:33279,mount:d(function(e){if(!e.opts.fileSystemHandle)throw Error(`opts.fileSystemHandle is required`);return n.mount.apply(null,arguments)},`mount`),syncfs:d(async(e,t,n)=>{try{let r=i.getLocalSet(e),a=await i.getRemoteSet(e),o=t?a:r,s=t?r:a;await i.reconcile(e,o,s),n(null)}catch(e){n(e)}},`syncfs`),getLocalSet:d(e=>{let n=Object.create(null);function i(e){return e!==`.`&&e!==`..`}d(i,`isRealDir`);function a(e){return t=>r.join2(e,t)}d(a,`toAbsolute`);let o=t.readdir(e.mountpoint).filter(i).map(a(e.mountpoint));for(;o.length;){let e=o.pop(),r=t.stat(e);t.isDir(r.mode)&&o.push.apply(o,t.readdir(e).filter(i).map(a(e))),n[e]={timestamp:r.mtime,mode:r.mode}}return{type:`local`,entries:n}},`getLocalSet`),getRemoteSet:d(async e=>{let t=Object.create(null),n=await ve(e.opts.fileSystemHandle);for(let[a,o]of n)a!==`.`&&(t[r.join2(e.mountpoint,a)]={timestamp:o.kind===`file`?new Date((await o.getFile()).lastModified):/* @__PURE__ */ new Date,mode:o.kind===`file`?i.FILE_MODE:i.DIR_MODE});return{type:`remote`,entries:t,handles:n}},`getRemoteSet`),loadLocalEntry:d(e=>{let r=t.lookupPath(e,{}).node,i=t.stat(e);if(t.isDir(i.mode))return{timestamp:i.mtime,mode:i.mode};if(t.isFile(i.mode))return r.contents=n.getFileDataAsTypedArray(r),{timestamp:i.mtime,mode:i.mode,contents:r.contents};throw Error(`node type not supported`)},`loadLocalEntry`),storeLocalEntry:d((e,n)=>{if(t.isDir(n.mode))t.mkdirTree(e,n.mode);else if(t.isFile(n.mode))t.writeFile(e,n.contents,{canOwn:!0});else throw Error(`node type not supported`);t.chmod(e,n.mode),t.utime(e,n.timestamp,n.timestamp)},`storeLocalEntry`),removeLocalEntry:d(e=>{var n=t.stat(e);t.isDir(n.mode)?t.rmdir(e):t.isFile(n.mode)&&t.unlink(e)},`removeLocalEntry`),loadRemoteEntry:d(async e=>{if(e.kind===`file`){let t=await e.getFile();return{contents:new Uint8Array(await t.arrayBuffer()),mode:i.FILE_MODE,timestamp:new Date(t.lastModified)}}if(e.kind===`directory`)return{mode:i.DIR_MODE,timestamp:/* @__PURE__ */ new Date};throw Error(`unknown kind: `+e.kind)},`loadRemoteEntry`),storeRemoteEntry:d(async(e,n,i)=>{let a=e.get(r.dirname(n)),o=t.isFile(i.mode)?await a.getFileHandle(r.basename(n),{create:!0}):await a.getDirectoryHandle(r.basename(n),{create:!0});if(o.kind===`file`){let e=await o.createWritable();await e.write(i.contents),await e.close()}e.set(n,o)},`storeRemoteEntry`),removeRemoteEntry:d(async(e,t)=>{await e.get(r.dirname(t)).removeEntry(r.basename(t)),e.delete(t)},`removeRemoteEntry`),reconcile:d(async(e,n,a)=>{let o=0,s=[];Object.keys(n.entries).forEach(function(e){let r=n.entries[e],i=a.entries[e];(!i||t.isFile(r.mode)&&r.timestamp.getTime()>i.timestamp.getTime())&&(s.push(e),o++)}),s.sort();let c=[];if(Object.keys(a.entries).forEach(function(e){n.entries[e]||(c.push(e),o++)}),c.sort().reverse(),!o)return;let l=n.type===`remote`?n.handles:a.handles;for(let t of s){let n=r.normalize(t.replace(e.mountpoint,`/`)).substring(1);if(a.type===`local`){let e=l.get(n),r=await i.loadRemoteEntry(e);i.storeLocalEntry(t,r)}else{let e=i.loadLocalEntry(t);await i.storeRemoteEntry(l,n,e)}}for(let t of c)if(a.type===`local`)i.removeLocalEntry(t);else{let n=r.normalize(t.replace(e.mountpoint,`/`)).substring(1);await i.removeRemoteEntry(l,n)}},`reconcile`)};e.FS.filesystems.NATIVEFS_ASYNC=i}d(N,`initializeNativeFS`);var ve=d(async e=>{let t=[];async function n(e){for await(let r of e.values())t.push(r),r.kind===`directory`&&await n(r)}d(n,`collect`),await n(e);let r=/* @__PURE__ */ new Map;r.set(`.`,e);for(let n of t){let t=(await e.resolve(n)).join(`/`);r.set(t,n)}return r},`getFsHandles`),ye=p(`AGFzbQEAAAABDANfAGAAAW9gAW8BfwMDAgECBygCE0pzdl9HZXRFcnJvcl9pbXBvcnQAAA5Kc3ZFcnJvcl9DaGVjawABChMCBwD7AQD7GwsJACAA+xr7FAAL`),be=async function(){if(!(globalThis.navigator&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform===`MacIntel`&&typeof navigator.maxTouchPoints<`u`&&navigator.maxTouchPoints>1)))try{let e=await WebAssembly.compile(ye);return await WebAssembly.instantiate(e)}catch(e){if(e instanceof WebAssembly.CompileError)return;throw e}}();async function P(){let e=await be;if(e)return e.exports;let t=Symbol(`error marker`);return{Jsv_GetError_import:d(()=>t,`Jsv_GetError_import`),JsvError_Check:d(e=>e===t,`JsvError_Check`)}}d(P,`getJsvErrorImport`);function F(e){let t={config:e,runtimeEnv:E},n={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preRun:Te(e),print:e.stdout,printErr:e.stderr,onExit(e){n.exitCode=e},thisProgram:e._sysExecutable,arguments:e.args,API:t,locateFile:d(t=>e.indexURL+t,`locateFile`),instantiateWasm:Ee(e.indexURL)};return n}d(F,`createSettings`);function I(e){return function(t){try{t.FS.mkdirTree(e)}catch(t){console.error(`Error occurred while making a home directory '${e}':`),console.error(t),console.error(`Using '/' for a home directory instead`),e=`/`}t.FS.chdir(e)}}d(I,`createHomeDirectory`);function xe(e){return function(t){Object.assign(t.ENV,e)}}d(xe,`setEnvironment`);function Se(e){return e?[async t=>{t.addRunDependency(`fsInitHook`);try{await e(t.FS,{sitePackages:t.API.sitePackages})}finally{t.removeRunDependency(`fsInitHook`)}}]:[]}d(Se,`callFsInitHook`);function Ce(e){let t=e.HEAPU32[e._Py_Version>>>2];return[t>>>24&255,t>>>16&255,t>>>8&255]}d(Ce,`computeVersionTuple`);function we(e){let t=me(e);return async e=>{e.API.pyVersionTuple=Ce(e);let[n,r]=e.API.pyVersionTuple;e.FS.mkdirTree(`/lib`),e.API.sitePackages=`/lib/python${n}.${r}/site-packages`,e.FS.mkdirTree(e.API.sitePackages),e.FS.mkdirTree(`/lib/python${n}.${r}/lib-dynload`),e.addRunDependency(`install-stdlib`);try{let i=await t;e.FS.writeFile(`/lib/python${n}${r}.zip`,i)}catch(e){console.error(`Error occurred while installing the standard library:`),console.error(e)}finally{e.removeRunDependency(`install-stdlib`)}}}d(we,`installStdlib`);function Te(e){let t;return t=e.stdLibURL==null?e.indexURL+`python_stdlib.zip`:e.stdLibURL,[we(t),I(e.env.HOME),xe(e.env),N,...Se(e.fsInit)]}d(Te,`getFileSystemInitializationFuncs`);function Ee(e){if(typeof WasmOffsetConverter<`u`)return;let{binary:t,response:n}=pe(e+`pyodide.asm.wasm`),r=P();return function(e,i){return async function(){let{Jsv_GetError_import:a,JsvError_Check:o}=await r;e.env.Jsv_GetError_import=a,e.env.JsvError_Check=o;try{let r;r=n?await WebAssembly.instantiateStreaming(n,e):await WebAssembly.instantiate(await t,e);let{instance:a,module:o}=r;i(a,o)}catch(e){console.warn(`wasm instantiation failed!`),console.warn(e)}}(),{}}}d(Ee,`getInstantiateWasmFunc`);var De=`314.0.7`;function L(e){return e===void 0||e.endsWith(`/`)?e:e+`/`}d(L,`withTrailingSlash`);var Oe=De;async function ke(e={}){if(await k(),e.lockFileContents&&e.lockFileURL)throw Error(`Can't pass both lockFileContents and lockFileURL`);let t=e.indexURL||await j();if(t=L(le(t)),e.packageBaseUrl=L(e.packageBaseUrl),e.cdnUrl=L(e.packageBaseUrl??`https://cdn.jsdelivr.net/pyodide/v314.0.7/full/`),!e.lockFileContents){let n=e.lockFileURL??t+`pyodide-lock.json`;e.lockFileContents=_e(n),e.packageBaseUrl??=M(n)}e.indexURL=t,e.packageCacheDir&&=L(le(e.packageCacheDir));let n={jsglobals:globalThis,stdin:globalThis.prompt?()=>globalThis.prompt():void 0,args:[],env:{},packages:[],packageCacheDir:e.packageBaseUrl,enableRunUntilComplete:!0,checkAPIVersion:!0,BUILD_ID:`990c3b51a9722d62434de2bbc9643732658d488c1b6d467f22c1b6beba80d497`},r=Object.assign(n,e);return r.env.HOME??=`/home/pyodide`,r.env.PYTHONINSPECT??=`1`,r}d(ke,`initializeConfiguration`);function Ae(e){let t=F(e),n=t.API;return n.lockFilePromise=Promise.resolve(e.lockFileContents),t}d(Ae,`createEmscriptenSettings`);async function je(e){return e.createPyodideModule?e.createPyodideModule:(await he(`${e.indexURL}pyodide.asm.mjs`)).default}d(je,`loadWasmScript`);async function Me(e,t){if(!e._loadSnapshot)return;let n=await e._loadSnapshot,r=ArrayBuffer.isView(n)?n:new Uint8Array(n);return t.noInitialRun=!0,t.INITIAL_MEMORY=r.length,r}d(Me,`prepareSnapshot`);async function Ne(e,t){let n=await e(t);if(t.exitCode!==void 0)throw new n.ExitStatus(t.exitCode);return n}d(Ne,`instantiatePyodideModule`);function Pe(e,t){let n=e.API;if(t.pyproxyToStringRepr&&n.setPyProxyToStringMethod(!0),t.convertNullToNone&&n.setCompatNullToNone(!0),t.toJsLiteralMap&&n.setCompatToJsLiteralMap(!0),n.version!==`314.0.7`&&t.checkAPIVersion)throw Error(`Pyodide version does not match: '${Oe}' <==> '${n.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);e.locateFile=e=>{throw e.endsWith(`.so`)?/* @__PURE__ */ Error(`Failed to find dynamic library "${e}"`):/* @__PURE__ */ Error(`Unexpected call to locateFile("${e}")`)}}d(Pe,`configureAPI`);function Fe(e,t,n){let r=e.API,i;return t&&(i=r.restoreSnapshot(t)),r.finalizeBootstrap(i,n._snapshotDeserializer)}d(Fe,`bootstrapPyodide`);async function Ie(e,t){let n=e._api;return n.sys.path.insert(0,``),n._pyodide.set_excepthook(),await n.packageIndexReady,n.initializeStreams(t.stdin,t.stdout,t.stderr),e}d(Ie,`finalizeSetup`);async function R(e={}){let t=await ke(e),n=Ae(t),r=await je(t),i=await Me(t,n),a=await Ne(r,n);return Pe(a,t),await Ie(Fe(a,i,t),t)}d(R,`loadPyodide`);const Le=String.raw`
import ast as _c_ast
import io as _c_io
import json as _c_json
import textwrap as _c_textwrap
import tokenize as _c_tokenize

_C_TOPE = 600
_C_HONDO = 30
_C_LARGO = 300000
_C_DECL = 40
_C_LECTURAS = ("int", "float", "str", "eval")
_C_SALTEA = (_c_ast.Import, _c_ast.ImportFrom, _c_ast.Global, _c_ast.Nonlocal)
_C_DEFS = (_c_ast.FunctionDef, _c_ast.AsyncFunctionDef)
_C_SIMPLES = (_c_ast.Return, _c_ast.Assign, _c_ast.AugAssign, _c_ast.AnnAssign, _c_ast.Expr, _c_ast.Raise, _c_ast.Assert, _c_ast.Delete, _c_ast.Pass)


class _CHoja:
    def __init__(self, codigo):
        partir = getattr(_c_ast, "_splitlines_no_ff", None)
        lineas = partir(codigo) if partir else codigo.splitlines(True)
        self.b = [l.encode("utf-8") for l in lineas]
        self.cuenta = 0
        self.cortado = False

    def trozo(self, n, relleno=False):
        l1, l2, c1, c2 = n.lineno - 1, n.end_lineno - 1, n.col_offset, n.end_col_offset
        if l1 == l2:
            return self.b[l1][c1:c2].decode("utf-8", "replace")
        partes = [self.b[l1][c1:]] + self.b[l1 + 1:l2] + [self.b[l2][:c2]]
        texto = b"".join(partes).decode("utf-8", "replace")
        if relleno:
            texto = " " * len(self.b[l1][:c1].decode("utf-8", "replace")) + texto
        return texto


def _c_junto(texto):
    partes = texto.replace("\r\n", "\n").replace("\r", "\n").split("\n")
    r = partes[0].rstrip()
    for p in partes[1:]:
        p = p.strip()
        if not p:
            continue
        if r.endswith("\\"):
            r = r[:-1].rstrip()
        if r.endswith(("(", "[", "{")) or p.startswith((")", "]", "}")):
            r += p
        else:
            r += " " + p
    return r


def _c_es_input(v):
    return isinstance(v, _c_ast.Call) and isinstance(v.func, _c_ast.Name) and v.func.id == "input" and not v.keywords and len(v.args) <= 1 and not any(isinstance(a, _c_ast.Starred) for a in v.args)


def _c_lectura(v):
    if _c_es_input(v):
        return v
    if isinstance(v, _c_ast.Call) and isinstance(v.func, _c_ast.Name) and v.func.id in _C_LECTURAS and len(v.args) == 1 and not v.keywords and _c_es_input(v.args[0]):
        return v.args[0]
    return None


def _c_texto(h, n):
    h.cuenta += 1
    return ["txt", _c_textwrap.dedent(h.trozo(n, True)).strip("\n"), n.lineno]


def _c_s(h, texto, n):
    h.cuenta += 1
    return ["s", texto, n.lineno]


def _c_sentencias(h, cuerpo, hondo):
    r = []
    for n in cuerpo:
        if h.cuenta >= _C_TOPE:
            h.cortado = True
            break
        r.extend(_c_sentencia(h, n, hondo))
    return r


def _c_sentencia(h, n, hondo):
    A = _c_ast
    if isinstance(n, _C_SALTEA + _C_DEFS):
        return []
    if hondo >= _C_HONDO:
        return [_c_texto(h, n)]
    if isinstance(n, A.If):
        h.cuenta += 1
        return [["si", _c_junto(h.trozo(n.test)), _c_sentencias(h, n.body, hondo + 1), _c_sentencias(h, n.orelse, hondo + 1), n.lineno]]
    if isinstance(n, A.While) and not n.orelse:
        h.cuenta += 1
        return [["rep", "Mientras " + _c_junto(h.trozo(n.test)) + ":", _c_sentencias(h, n.body, hondo + 1), n.lineno]]
    if isinstance(n, A.For) and not n.orelse:
        h.cuenta += 1
        cabeza = "for " + _c_junto(h.trozo(n.target)) + " in " + _c_junto(h.trozo(n.iter)) + ":"
        return [["rep", cabeza, _c_sentencias(h, n.body, hondo + 1), n.lineno]]
    if isinstance(n, A.Match):
        h.cuenta += 1
        casos = []
        for c in n.cases:
            rotulo = _c_junto(h.trozo(c.pattern))
            if c.guard is not None:
                rotulo += " if " + _c_junto(h.trozo(c.guard))
            casos.append([rotulo, _c_sentencias(h, c.body, hondo + 1)])
        return [["segun", "Según " + _c_junto(h.trozo(n.subject)) + ":", casos, n.lineno]]
    if isinstance(n, (A.Assign, A.AnnAssign)) and n.value is not None:
        destinos = n.targets if isinstance(n, A.Assign) else [n.target]
        leida = _c_lectura(n.value)
        if leida is not None and len(destinos) == 1:
            r = []
            if leida.args and not (isinstance(leida.args[0], A.Constant) and isinstance(leida.args[0].value, str)):
                r.append(_c_s(h, "Mostrar(" + _c_junto(h.trozo(leida.args[0])) + ")", n))
            r.append(_c_s(h, "Leer(" + _c_junto(h.trozo(destinos[0])) + ")", n))
            return r
    if isinstance(n, A.Expr) and isinstance(n.value, A.Call) and isinstance(n.value.func, A.Name) and n.value.func.id == "print":
        llamada = _c_junto(h.trozo(n.value))
        return [_c_s(h, "Mostrar" + llamada[len("print"):].lstrip(), n)]
    if isinstance(n, _C_SIMPLES):
        return [_c_s(h, _c_junto(h.trozo(n)), n)]
    return [_c_texto(h, n)]


def _c_comentarios(codigo):
    r = {}
    try:
        for t in _c_tokenize.generate_tokens(_c_io.StringIO(codigo).readline):
            if t.type == _c_tokenize.COMMENT and not t.line[:t.start[1]].strip():
                r[t.start[0]] = (t.start[1], t.string.strip())
    except Exception:
        pass
    return r


def _c_desde(n):
    return min([n.lineno] + [d.lineno for d in getattr(n, "decorator_list", [])])


def _c_defs(cuerpo, r):
    A = _c_ast
    for n in cuerpo:
        if isinstance(n, _C_DEFS):
            r.append(n)
            _c_defs(n.body, r)
        elif isinstance(n, (A.If, A.While, A.For)):
            _c_defs(n.body, r)
            _c_defs(n.orelse, r)
        elif isinstance(n, A.Match):
            for c in n.cases:
                _c_defs(c.body, r)
    return r


def _c_titulo(h, n):
    return n.name + "(" + _c_junto(_c_ast.unparse(n.args)) + ")"


def _chapin(codigo):
    codigo = str(codigo)
    if len(codigo) > _C_LARGO:
        return _c_json.dumps({"ok": False, "largo": True})
    try:
        arbol = _c_ast.parse(codigo, "<chapin>")
    except SyntaxError as e:
        return _c_json.dumps({"ok": False, "linea": e.lineno or 0})
    except (ValueError, MemoryError, RecursionError):
        return _c_json.dumps({"ok": False, "linea": 0})
    h = _CHoja(codigo)
    comentarios = _c_comentarios(codigo)
    diagramas = []
    try:
        # The main program: what isn't a def, with the comments of its level and the classes as they are written.
        ocupado = set()
        for n in arbol.body:
            ocupado.update(range(_c_desde(n), n.end_lineno + 1))
        decl = [t for l, (col, t) in sorted(comentarios.items()) if col == 0 and l not in ocupado and t.lstrip("#").strip().lower() != "programa principal"]
        for n in arbol.body:
            if isinstance(n, _c_ast.ClassDef):
                decl.extend(_c_textwrap.dedent(h.trozo(n, True)).split("\n"))
        cuerpo = _c_sentencias(h, [n for n in arbol.body if not isinstance(n, _c_ast.ClassDef)], 0)
        if cuerpo:
            diagramas.append({"titulo": "Programa principal", "decl": decl[:_C_DECL], "cuerpo": cuerpo, "linea": cuerpo[0][-1]})
        for d in _c_defs(arbol.body, []):
            if h.cuenta >= _C_TOPE:
                h.cortado = True
                break
            primera = d.body[0].lineno
            decl = [t for l, (col, t) in sorted(comentarios.items()) if d.lineno < l < primera]
            diagramas.append({"titulo": _c_titulo(h, d), "decl": decl[:_C_DECL], "cuerpo": _c_sentencias(h, d.body, 0), "linea": d.lineno})
    except RecursionError:
        return _c_json.dumps({"ok": False, "linea": 0})
    return _c_json.dumps({"ok": True, "diagramas": diagramas, "cortado": h.cortado}, ensure_ascii=False)
`,Re={archivos:200,bytes:16777216};function ze(e){let t=String(e??``);if(!t||t.length>200||/[\\\u0000-\u001f\u007f]/.test(t))return null;let n=t.split(`/`);return n.length>5||n.some(e=>!e.trim()||e===`.`||e===`..`||e.length>80)?null:t}function Be(e){return typeof e==`string`?new TextEncoder().encode(e):e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):null}const z=`/home/alumno/proyecto`,Ve=e=>new TextDecoder().decode(e);function He({codigo:e,nombre:t,archivos:n,principal:r}={}){if(!Array.isArray(n))return{solo:!0,principal:ze(t)&&!String(t).includes(`/`)?String(t):`tu_codigo.py`,codigo:String(e??``),archivos:[]};let i=[],a=/* @__PURE__ */ new Set,o=0;for(let e of n.slice(0,Re.archivos)){let t=ze(e?.nombre),n=Be(e?.contenido);!t||a.has(t)||!n||o+n.length>Re.bytes||(a.add(t),o+=n.length,i.push({nombre:t,bytes:n}))}let s=i.filter(e=>e.nombre.endsWith(`.py`)),c=s.find(e=>e.nombre===r)??s.find(e=>e.nombre===`main.py`)??s[0];return c?{solo:!1,principal:c.nombre,codigo:Ve(c.bytes),archivos:i}:{error:"El proyecto no tiene ningún archivo `.py` para correr."}}const Ue=(e,t)=>e.analyzePath(t).exists;function B(e,t,n=``,r=/* @__PURE__ */ new Map){for(let i of e.readdir(t)){if(i===`.`||i===`..`)continue;let a=`${t}/${i}`,o=e.lstat(a).mode;e.isDir(o)?B(e,a,`${n}${i}/`,r):e.isFile(o)&&r.set(`${n}${i}`,e.readFile(a))}return r}function We(e,t){for(let n of e.readdir(t)){if(n===`.`||n===`..`)continue;let r=`${t}/${n}`;e.isDir(e.lstat(r).mode)?(We(e,r),e.rmdir(r)):e.unlink(r)}}function Ge(e,t){if(e.chdir(`/`),Ue(e,`/home/alumno/proyecto`)||e.mkdirTree(z),!t.solo){We(e,z);for(let n of t.archivos){let t=n.nombre.lastIndexOf(`/`);t>0&&e.mkdirTree(`${z}/${n.nombre.slice(0,t)}`),e.writeFile(`${z}/${n.nombre}`,n.bytes)}}return B(e,z)}const Ke=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]);function qe(e,t){let n=Ue(e,`/home/alumno/proyecto`)?B(e,z):/* @__PURE__ */ new Map,r=[];for(let[e,i]of n){let n=t.get(e);n&&Ke(n,i)||r.push({nombre:e,contenido:i})}return{cambiados:r,borrados:[...t.keys()].filter(e=>!n.has(e))}}const Je=`
import builtins, importlib.abc, importlib.machinery, io, linecache, os, sys, traceback
from pyodide.ffi import can_run_sync, run_sync
import _laboratorio

_PROPIO = "<laboratorio>"
_CARPETA = ${JSON.stringify(z)}
_ORIGINALES = dict(builtins.__dict__)
_antes = []
# Where the imports of the project look (the folder of the main file, and the project's), and what they loaded.
_raices = [""]
_cargados = set()
# The project's files are rewritten for each run: a .pyc next to them would be one more file of the student.
sys.dont_write_bytecode = True

def _del_proyecto(archivo):
    return isinstance(archivo, str) and archivo != "" and archivo[0] not in "/<"

class _Cargador(importlib.abc.SourceLoader):
    def __init__(self, archivo):
        self.archivo = archivo
    def get_filename(self, nombre):
        return self.archivo
    def get_data(self, ruta):
        with open(os.path.join(_CARPETA, ruta), "rb") as f:
            return f.read()

class _Buscador(importlib.abc.MetaPathFinder):
    def find_spec(self, nombre, ruta=None, objetivo=None):
        if ruta is None:
            if "." in nombre:
                return None
            lugares = _raices
        else:
            lugares = []
            for r in ruta:
                if not isinstance(r, str):
                    continue
                if r == _CARPETA:
                    lugares.append("")
                elif r.startswith(_CARPETA + "/"):
                    lugares.append(r[len(_CARPETA) + 1 :])
                elif _del_proyecto(r):
                    lugares.append(r)
        hoja = nombre.rpartition(".")[2]
        for lugar in lugares:
            base = lugar + "/" + hoja if lugar else hoja
            if os.path.isfile(os.path.join(_CARPETA, base, "__init__.py")):
                return self._spec(nombre, base + "/__init__.py", [base])
            if os.path.isfile(os.path.join(_CARPETA, base + ".py")):
                return self._spec(nombre, base + ".py", None)
        return None
    def _spec(self, nombre, archivo, lugares):
        _cargados.add(nombre)
        spec = importlib.machinery.ModuleSpec(nombre, _Cargador(archivo), origin=archivo, is_package=lugares is not None)
        spec.has_location = True
        if lugares is not None:
            spec.submodule_search_locations = lugares
        return spec

sys.meta_path.insert(0, _Buscador())

def _leer(prompt=""):
    prompt = str(prompt)
    if prompt:
        sys.stdout.write(prompt)
    sys.stdout.flush()
    sys.stderr.flush()
    if can_run_sync():
        linea = run_sync(_laboratorio.pedir(prompt))
    elif _antes:
        linea = _antes.pop(0)
        sys.stdout.write(linea + "\\n")
    else:
        _laboratorio.sin_pausa()
        linea = None
    if linea is None:
        raise EOFError("EOF when reading a line")
    return str(linea)

class _Entrada(io.TextIOBase):
    def readable(self):
        return True
    def readline(self, size=-1):
        try:
            return _leer() + "\\n"
        except EOFError:
            return ""
    def read(self, size=-1):
        partes = []
        while True:
            linea = self.readline()
            if not linea:
                return "".join(partes)
            partes.append(linea)

def _sin_lo_propio(e, tb):
    te = traceback.TracebackException(type(e), e, tb)
    te.stack = traceback.StackSummary.from_list([f for f in te.stack if f.filename != _PROPIO])
    return "".join(te.format())

# Before each run: Python as it came, the modules of the project to load again, and the program in its folder.
def _preparar(codigo, nombre, lineas):
    if "matplotlib.pyplot" in sys.modules:
        sys.modules["matplotlib.pyplot"].close("all")
    builtins.__dict__.clear()
    builtins.__dict__.update(_ORIGINALES)
    builtins.input = _leer
    sys.stdin = _Entrada()
    _antes[:] = list(lineas)
    for m in _cargados:
        sys.modules.pop(m, None)
    _cargados.clear()
    os.makedirs(_CARPETA, exist_ok=True)
    os.chdir(_CARPETA)
    carpeta = os.path.dirname(nombre)
    _raices[:] = [carpeta, ""] if carpeta else [""]
    for archivo in [a for a in linecache.cache if _del_proyecto(a)]:
        del linecache.cache[archivo]
    linecache.cache[nombre] = (len(codigo), None, codigo.splitlines(True), nombre)

def _sintaxis(e, nombre):
    return ["".join(traceback.format_exception_only(type(e), e)), e.lineno or 0, nombre]

# Where it broke: the last frame of the project (or, for a SyntaxError in a module it imports, that module's line).
def _fallo(e):
    tb = e.__traceback__
    while tb is not None and not _del_proyecto(tb.tb_frame.f_code.co_filename):
        tb = tb.tb_next
    linea = 0
    archivo = None
    for f in traceback.extract_tb(tb):
        if _del_proyecto(f.filename):
            linea = f.lineno or 0
            archivo = f.filename
    if isinstance(e, SyntaxError) and _del_proyecto(e.filename):
        linea = e.lineno or 0
        archivo = e.filename
    return [_sin_lo_propio(e, tb), linea, archivo]

def _espacio(nombre):
    return {"__name__": "__main__", "__file__": nombre, "__builtins__": builtins}

def _correr(codigo, nombre, lineas):
    _preparar(codigo, nombre, lineas)
    try:
        programa = compile(codigo, nombre, "exec")
    except SyntaxError as e:
        return _sintaxis(e, nombre)
    try:
        exec(programa, _espacio(nombre))
    except SystemExit as e:
        if e.code not in (None, 0):
            sys.stderr.write(str(e.code) + "\\n")
    except BaseException as e:
        return _fallo(e)
    finally:
        sys.stdout.flush()
        sys.stderr.flush()
    return [None, 0, None]
`,Ye=[137,80,78,71,13,10,26,10];function Xe(e){return!(e instanceof Uint8Array)||e.length<16||e.length>4194304?!1:Ye.every((t,n)=>e[n]===t)}function Ze(e,t){let n=e.fetch.bind(e),r=0;return e.fetch=async(...e)=>{let i=await n(...e);if(!i.ok||!i.body)return i;let a=i.body.getReader(),o=new ReadableStream({async pull(e){let{done:n,value:i}=await a.read();n?e.close():(r+=i.byteLength,t(r),e.enqueue(i))},cancel:e=>a.cancel(e)});return new Response(o,{status:i.status,statusText:i.statusText,headers:i.headers})},()=>{e.fetch=n}}const Qe=[`fetch`,`fetchLater`,`XMLHttpRequest`,`WebSocket`,`WebSocketStream`,`EventSource`,`WebTransport`,`importScripts`,`Worker`,`SharedWorker`,`caches`,`indexedDB`,`BroadcastChannel`,`CookieStore`,`cookieStore`,`RTCPeerConnection`,`webkitRTCPeerConnection`,`RTCDataChannel`,`WebSocketError`,`postMessage`];function $e(e,t=Qe){let n=[];for(let r of t){let t=!1;for(let n=e;n&&n!==Object.prototype;n=Object.getPrototypeOf(n))if(Object.prototype.hasOwnProperty.call(n,r)){t=!0;try{delete n[r]}catch{}}t&&n.push(r);try{Object.defineProperty(e,r,{value:void 0,writable:!1,configurable:!1,enumerable:!1})}catch{}}return n}const V=self.postMessage.bind(self),et=self.addEventListener.bind(self);let H=null,U=null,tt=null,nt=null,rt=null,W=null,G=!1,K=null,q=0,J=0,Y=0,X=``,Z=!1,Q=null,$=0,it=0;function at(e){let t=new TextDecoder;return{isatty:!1,write(n){let r=t.decode(n,{stream:!0});return Z||(J+=r.length,J>1e5?(Z=!0,V({tipo:`tope`,id:q})):r&&V({tipo:`salida`,id:q,flujo:e,texto:r})),n.length}}}async function ot(e,t){return Ze(self,e=>V({tipo:`progreso`,bajado:e,total:t})),H=await R({indexURL:`${e}python/`,env:{HOME:`/home/alumno`,PYTHONHASHSEED:`0`,PYTHON_COLORS:`0`,NO_COLOR:`1`,MPLBACKEND:`module://_laboratorio_mpl`},jsglobals:Object.create(null),stdout:()=>{},stderr:()=>{}}),H.setStdout(at(`out`)),H.setStderr(at(`err`)),H.registerJsModule(`_laboratorio`,{pedir:e=>new Promise(t=>{Q=t,it=performance.now(),V({tipo:`pide`,id:q,pregunta:String(e??``).slice(-200)})}),sin_pausa:()=>V({tipo:`sin-pausa`,id:q}),imagen:e=>{Y+=1;let t=e instanceof Uint8Array?e.slice():/* @__PURE__ */ new Uint8Array;Y>30?Y===31&&V({tipo:`salida`,id:q,flujo:`err`,texto:`Mostró 30 gráficos y no muestra más.
`}):Xe(t)?V({tipo:`imagen`,id:q,png:t},[t.buffer]):V({tipo:`salida`,id:q,flujo:`err`,texto:`El gráfico pesa más de 4 MB y no se muestra.
`})},pasos:e=>V({tipo:`pasos`,id:q,pasos:String(e)}),medida_empieza:e=>V({tipo:`medida-empieza`,id:q,n:Number(e)}),medida:(e,t,n)=>V({tipo:`medida`,id:q,n:Number(e),s:Number(t),veces:Number(n)}),medida_vuelta:(e,t)=>V({tipo:`medida-vuelta`,id:q,vuelta:Number(e),s:Number(t)}),medida_funciones:e=>V({tipo:`medida-funciones`,id:q,texto:String(e).slice(0,2e4)}),medida_tope:e=>V({tipo:`medida-tope`,id:q,n:Number(e)}),medida_falla:(e,t,n)=>V({tipo:`medida-falla`,id:q,donde:String(e),texto:String(t??``).slice(0,300),n:Number(n)||0})}),X=H.runPython(`import site; site.getsitepackages()[0]`),H.FS.writeFile(`${X}/_laboratorio_mpl.py`,`
import io, os, warnings
from matplotlib import MatplotlibDeprecationWarning
from matplotlib.backend_bases import _Backend, FigureManagerBase
from matplotlib.backends.backend_agg import FigureCanvasAgg
from matplotlib.figure import Figure
from matplotlib._pylab_helpers import Gcf
from pyodide.ffi import to_js
import _laboratorio

backend_version = "laboratorio"
# Agg itself writes it with each title in this build of matplotlib 3.10: it isn't about the student's code.
warnings.filterwarnings("ignore", message=r"The [xy] parameter as float", category=MatplotlibDeprecationWarning)

def _mostrar(figura):
    datos = io.BytesIO()
    _guardar(figura, datos, format="png")
    figura._laboratorio_mostrada = True
    _laboratorio.imagen(to_js(datos.getbuffer()))

_guardar = Figure.savefig

def _savefig(self, fname, *args, **kwargs):
    r = _guardar(self, fname, *args, **kwargs)
    if isinstance(fname, (str, os.PathLike)):
        _mostrar(self)
    return r

_savefig.__doc__ = _guardar.__doc__
Figure.savefig = _savefig

class FigureManagerLaboratorio(FigureManagerBase):
    def show(self):
        _mostrar(self.canvas.figure)

@_Backend.export
class _BackendLaboratorio(_Backend):
    FigureCanvas = FigureCanvasAgg
    FigureManager = FigureManagerLaboratorio

    @classmethod
    def show(cls, *args, **kwargs):
        for gestor in Gcf.get_all_fig_managers():
            figura = gestor.canvas.figure
            if not (getattr(figura, "_laboratorio_mostrada", False) and not figura.stale):
                _mostrar(figura)
        Gcf.destroy_all()
`),H.runPython(Je,{filename:`<laboratorio>`}),U=H.globals.get(`_correr`),H.runPython(`
import gc, io, json, math, random, re, time, types

class _Tope(BaseException):
    pass

class _PideEntrada(BaseException):
    pass

_LARGO = 60
_ELEMENTOS = 40
_OBJETOS = 60
_MARCOS = 25
_VARIABLES = 80
_TIPOS = {list: "lista", tuple: "tupla", dict: "diccionario", set: "conjunto", frozenset: "conjunto"}
_SIMPLES = (type(None), bool, int, float, complex, str, bytes)
_DIRECCION = re.compile(r" at 0x[0-9a-fA-F]+")

def _dunder(n):
    return isinstance(n, str) and n.startswith("__") and n.endswith("__")

def _ultima_linea(e):
    return "".join(traceback.format_exception_only(type(e), e)).strip().splitlines()[-1]

class _Copia(io.TextIOBase):
    def __init__(self, real, flujo, anotar):
        self._real = real
        self._flujo = flujo
        self._anotar = anotar
    def writable(self):
        return True
    def write(self, s):
        s = str(s)
        self._anotar(self._flujo, s)
        return self._real.write(s)
    def flush(self):
        self._real.flush()

class _Nada(io.TextIOBase):
    def writable(self):
        return True
    def write(self, s):
        return len(s)

class _Rastro:
    def __init__(self, tope):
        self.tope = tope
        self.pasos = []
        self.marcos = []
        self.objetos = []
        self._marcos = {}
        self._objetos = {}
        self.numeros = {}
        self.cuantos = {}
        self.vivos = []
        self.salida = []
        self.escrito = 0
        self.cortado = False
        self.mandado = False
        self.con_error = set()

    def anotar(self, flujo, texto):
        if not texto:
            return
        if self.salida and self.salida[-1][0] == flujo:
            self.salida[-1][1] += texto
        else:
            self.salida.append([flujo, texto])
        self.escrito += len(texto)

    def corto(self, v):
        if type(v) is int and v.bit_length() > 190:
            return ["e", len(str(abs(v))) if v.bit_length() < 13000 else 0]
        try:
            r = repr(v)
        except Exception:
            r = "?"
        r = _DIRECCION.sub("", r)
        return ["v", r if len(r) <= _LARGO else r[: _LARGO - 1] + "\\u2026"]

    def propio(self, t):
        modulo = getattr(t, "__module__", None)
        return (modulo == "__main__" or modulo in _cargados) and t not in (_Copia, _Nada, _Entrada, _Rastro)

    # A value: inline if it's simple, a reference (its number) if it's an object to draw apart.
    def valor(self, v, pendientes):
        t = type(v)
        if t in _SIMPLES:
            return self.corto(v)
        if t in _TIPOS or self.propio(t):
            clave = id(v)
            n = self.numeros.get(clave)
            if n is None:
                tipo = _TIPOS.get(t, "objeto")
                clase = None if tipo != "objeto" else t.__name__
                cuenta = clase or tipo
                self.cuantos[cuenta] = self.cuantos.get(cuenta, 0) + 1
                n = len(self.numeros) + 1
                self.numeros[clave] = n
                # Kept until the end: no other object takes its id (and its name) while the program runs.
                self.vivos.append((v, tipo, self.cuantos[cuenta], clase))
            pendientes.append(n)
            return ["r", n]
        if isinstance(v, (types.FunctionType, types.BuiltinFunctionType, types.MethodType)):
            return ["f", getattr(v, "__name__", "?")]
        if isinstance(v, type):
            return ["c", v.__name__]
        if isinstance(v, types.ModuleType):
            return ["m", v.__name__]
        return self.corto(v)

    def foto(self, n, pendientes):
        v, tipo, k, clase = self.vivos[n - 1]
        d = {"i": n, "t": tipo, "k": k}
        mas = 0
        if tipo == "diccionario":
            pares = list(v.items())
            d["p"] = [[self.valor(a, pendientes), self.valor(b, pendientes)] for a, b in pares[:_ELEMENTOS]]
            mas = len(pares) - _ELEMENTOS
        elif tipo in ("lista", "tupla", "conjunto"):
            elementos = list(v) if tipo == "conjunto" else v
            d["e"] = [self.valor(x, pendientes) for x in elementos[:_ELEMENTOS]]
            mas = len(elementos) - _ELEMENTOS
        else:
            d["c"] = clase
            campos = getattr(type(v), "_fields", None)
            if isinstance(v, tuple) and campos:
                pares = list(zip(campos, v))
            else:
                atributos = getattr(v, "__dict__", None)
                pares = [(a, b) for a, b in atributos.items() if not _dunder(a)] if isinstance(atributos, dict) else []
            d["a"] = [[str(a), self.valor(b, pendientes)] for a, b in pares[:_ELEMENTOS]]
            mas = len(pares) - _ELEMENTOS
        if mas > 0:
            d["m"] = mas
        return d

    def marco(self, f, linea, pendientes):
        co = f.f_code
        if co.co_name == "<module>":
            tipo = "g"
            pares = [(a, b) for a, b in f.f_globals.items() if not _dunder(a)]
        else:
            tipo = "f" if co.co_flags & 1 else "c"
            pares = list(f.f_locals.items())
            if tipo == "c":
                pares = [(a, b) for a, b in pares if not _dunder(a)]
        d = {"f": co.co_name, "a": co.co_filename, "t": tipo, "l": linea, "v": [[str(a), self.valor(b, pendientes)] for a, b in pares[:_VARIABLES]]}
        if len(pares) > _VARIABLES:
            d["m"] = len(pares) - _VARIABLES
        return d

    def guardar(self, tabla, indice, d):
        texto = json.dumps(d, ensure_ascii=False, separators=(",", ":"))
        n = indice.get(texto)
        if n is None:
            n = len(tabla)
            indice[texto] = n
            tabla.append(texto)
        return n

    def paso(self, frame, evento, arg):
        pila = []
        f = frame
        while f is not None:
            if _del_proyecto(f.f_code.co_filename):
                pila.append(f)
            f = f.f_back
        pila.reverse()
        ocultos = 0
        if len(pila) > _MARCOS + 1:
            ocultos = len(pila) - _MARCOS - 1
            pila = pila[:1] + pila[-_MARCOS:]
        pendientes = []
        marcos = [self.guardar(self.marcos, self._marcos, self.marco(f, f.f_lineno, pendientes)) for f in pila]
        p = {"e": evento, "a": frame.f_code.co_filename, "l": frame.f_lineno, "s": self.escrito, "m": marcos}
        if ocultos:
            p["h"] = ocultos
        if evento == "return" and frame.f_code.co_name != "<module>" and id(frame) not in self.con_error:
            p["d"] = self.valor(arg, pendientes)
        if evento == "exception":
            p["x"] = _ultima_linea(arg[1]) if arg and arg[1] is not None else ""
        objetos = []
        hechos = set()
        i = 0
        while i < len(pendientes) and len(objetos) < _OBJETOS:
            n = pendientes[i]
            i += 1
            if n in hechos:
                continue
            hechos.add(n)
            objetos.append(self.guardar(self.objetos, self._objetos, self.foto(n, pendientes)))
        p["o"] = objetos
        if evento == "return" and frame.f_code.co_name == "<module>" and frame.f_globals.get("__name__") == "__main__":
            p["e"] = "fin"
        self.pasos.append(p)

    def texto(self):
        return '{"pasos":' + json.dumps(self.pasos, ensure_ascii=False, separators=(",", ":")) + ',"marcos":[' + ",".join(self.marcos) + '],"objetos":[' + ",".join(self.objetos) + '],"salida":' + json.dumps(self.salida, ensure_ascii=False) + ',"tope":' + ("true" if self.cortado else "false") + "}"

    def mandar(self):
        if not self.mandado:
            self.mandado = True
            _laboratorio.pasos(self.texto())

    def __call__(self, frame, evento, arg):
        if not _del_proyecto(frame.f_code.co_filename):
            return None
        if evento == "call" and frame.f_code.co_name == "<module>":
            return self
        if evento not in ("call", "line", "return", "exception"):
            return self
        if len(self.pasos) >= self.tope:
            # Enough: what was seen goes now, and the program stops here.
            self.cortado = True
            self.mandar()
            raise _Tope()
        if evento == "exception":
            self.con_error.add(id(frame))
        elif evento == "line":
            self.con_error.discard(id(frame))
        try:
            self.paso(frame, evento, arg)
        except Exception:
            pass
        if evento == "return":
            self.con_error.discard(id(frame))
        return self

def _paso_a_paso(codigo, nombre, lineas, tope):
    _preparar(codigo, nombre, lineas)
    try:
        programa = compile(codigo, nombre, "exec")
    except SyntaxError as e:
        return _sintaxis(e, nombre)
    rastro = _Rastro(int(tope))
    def _leer_y_anotar(prompt=""):
        if rastro.cortado:
            raise _Tope()
        linea = _leer(prompt)
        if can_run_sync():
            rastro.anotar("in", linea + "\\n")
        return linea
    builtins.input = _leer_y_anotar
    espacio = _espacio(nombre)
    afuera, errores = sys.stdout, sys.stderr
    sys.stdout = _Copia(afuera, "out", rastro.anotar)
    sys.stderr = _Copia(errores, "err", rastro.anotar)
    resultado = [None, 0, None]
    sys.settrace(rastro)
    try:
        exec(programa, espacio)
    except _Tope:
        pass
    except SystemExit as e:
        if e.code not in (None, 0):
            sys.stderr.write(str(e.code) + "\\n")
    except BaseException as e:
        resultado = _fallo(e)
    finally:
        sys.settrace(None)
        sys.stdout.flush()
        sys.stderr.flush()
        sys.stdout, sys.stderr = afuera, errores
    if resultado[0] and not rastro.cortado:
        rastro.anotar("err", resultado[0])
        if rastro.pasos and rastro.pasos[-1]["e"] == "fin":
            rastro.pasos[-1]["x"] = resultado[0].strip().splitlines()[-1]
            if resultado[1]:
                rastro.pasos[-1]["l"] = resultado[1]
                rastro.pasos[-1]["a"] = resultado[2]
    rastro.mandar()
    return resultado

def _una_vez(f, armar, n, veces):
    entradas = [armar(n) for _ in range(veces)]
    reloj = time.perf_counter
    # As timeit: the collector doesn't stop in the middle of a round.
    gc.disable()
    try:
        desde = reloj()
        for a, k in entradas:
            f(*a, **k)
        return reloj() - desde
    finally:
        gc.enable()

# How long a call takes with n: as many calls together as fill 20 ms (the browser's clock is coarse), the best of five
# rounds (of three, or less, if they're long). The inputs of a round are built before it: with a big n, fewer calls
# together, so they fit in memory.
def _tiempo(f, armar, n):
    tope = max(1, min(10000, 2000000 // max(n, 1)))
    veces = 1
    while True:
        t = _una_vez(f, armar, n, veces)
        if t >= 0.02 or veces >= tope:
            break
        veces = min(tope, veces * 10 if t < 0.002 else max(veces * 2, int(veces * 0.03 / t)))
    mejor = t / veces
    for _ in range(4 if t < 0.1 else 2 if t < 0.3 else 1 if t < 1 else 0):
        mejor = min(mejor, _una_vez(f, armar, n, veces) / veces)
    return mejor, veces

# Sizes by themselves: from 1 up while a call takes less than _AUTO_DESDE (the fixed cost of a call would weigh), or
# up to _AUTO_SONDEO for what takes nothing; from there _AUTO_PUNTOS sizes, each one up to four times the time of the
# one before and at most the double of n. 2ⁿ goes 16, 19, 21, 23; n, by doubles.
_AUTO_DESDE = 1e-4
_AUTO_SONDEO = 1000
_AUTO_PUNTOS = 6
_AUTO_MAX_N = 2000000

def _siguiente(medidos):
    if not medidos:
        return 1
    n1, t1 = medidos[-1]
    k = 1.0
    if len(medidos) >= 2:
        n0, t0 = medidos[-2]
        if t0 > 0 and t1 > 0:
            k = max(k, math.log(t1 / t0) / math.log(n1 / n0))
    if t1 < _AUTO_DESDE and n1 < _AUTO_SONDEO:
        factor = min(8.0, max(1.2, (_AUTO_DESDE / max(t1, 1e-9)) ** (1 / k)))
        return min(_AUTO_SONDEO, max(n1 + 1, round(n1 * factor)))
    return max(n1 + 1, round(n1 * min(2.0, 4 ** (1 / k))))

def _medir(codigo, nombre, lineas, funcion, argumentos, tamanos, presupuesto):
    _preparar(codigo, nombre, lineas)
    try:
        programa = compile(codigo, nombre, "exec")
    except SyntaxError as e:
        return _sintaxis(e, nombre)
    espacio = _espacio(nombre)
    try:
        exec(programa, espacio)
    except SystemExit:
        pass
    except BaseException as e:
        return _fallo(e)
    finally:
        sys.stdout.flush()
        sys.stderr.flush()
    f = espacio.get(str(funcion))
    if not callable(f):
        _laboratorio.medida_falla("funcion", "", 0)
        return [None, 0, None]
    contexto = dict(espacio)
    contexto.setdefault("random", random)
    contexto.setdefault("math", math)
    try:
        armar = eval(compile("lambda n: (lambda *a, **k: (a, k))(" + str(argumentos) + "\\n)", "<entrada>", "eval"), contexto)
    except SyntaxError as e:
        _laboratorio.medida_falla("entrada", _ultima_linea(e), 0)
        return [None, 0, None]
    def _sin_input(prompt=""):
        raise _PideEntrada()
    builtins.input = _sin_input
    afuera = sys.stdout
    reloj = time.perf_counter
    inicio = reloj()
    lista = [int(x) for x in tamanos]
    # Without sizes, they go by themselves (_siguiente): from 1, and they count from where a call takes _AUTO_DESDE.
    auto = not lista
    medidos = []
    contados = 0
    n = 0 if auto else lista[0]
    try:
        while True:
            if not auto:
                if len(medidos) >= len(lista):
                    break
                n = lista[len(medidos)]
            else:
                n = _siguiente(medidos)
                if contados >= _AUTO_PUNTOS or n > _AUTO_MAX_N:
                    break
            if medidos:
                n1, t1 = medidos[-1]
                # As it grew between the last two (like n² at least), three times: what wouldn't fit isn't started.
                k = 2.0
                if len(medidos) >= 2:
                    n0, t0 = medidos[-2]
                    if t0 > 0 and t1 > 0:
                        k = max(k, math.log(t1 / t0) / math.log(n1 / n0))
                if reloj() - inicio + 3 * t1 * (n / n1) ** k > presupuesto:
                    _laboratorio.medida_tope(n)
                    break
            _laboratorio.medida_empieza(n)
            try:
                armar(n)
            except BaseException as e:
                _laboratorio.medida_falla("entrada", _ultima_linea(e), n)
                return [None, 0, None]
            sys.stdout = _Nada()
            try:
                segundos, veces = _tiempo(f, armar, n)
            finally:
                sys.stdout = afuera
            medidos.append((n, segundos))
            if not auto or segundos >= _AUTO_DESDE or n >= _AUTO_SONDEO:
                _laboratorio.medida(n, segundos, veces)
                contados += 1
    except _PideEntrada:
        sys.stdout = afuera
        _laboratorio.medida_falla("input", "", 0)
        return [None, 0, None]
    except BaseException as e:
        sys.stdout = afuera
        _laboratorio.medida_falla("funcion-error", "", n)
        return _fallo(e)
    return [None, 0, None]

# Measuring the whole program: it runs as always once (what it prints and draws shows), and then up to vueltas times
# more with what it prints and draws set aside and the same answers it got. Each lap is told as it ends; one that
# wouldn't fit in the budget isn't started. The time waiting for what the student types doesn't count.
# In the first lap, sys.monitoring times each function of the project's files (only those: anything else turns its
# events off the first time), from its outermost call, so a recursive one isn't counted twice.
class _Callado:
    @staticmethod
    def imagen(*a):
        pass

class _LeeCon(io.TextIOBase):
    def __init__(self, leer):
        self._leer = leer
    def readable(self):
        return True
    def readline(self, size=-1):
        try:
            return self._leer() + chr(10)
        except EOFError:
            return ""

_MAX_FUNCIONES = 30

def _medir_programa(codigo, nombre, lineas, vueltas, presupuesto):
    _preparar(codigo, nombre, lineas)
    try:
        programa = compile(codigo, nombre, "exec")
    except SyntaxError as e:
        return _sintaxis(e, nombre)
    reloj = time.perf_counter
    mon = sys.monitoring
    ev = mon.events
    funciones = {}
    respuestas = []
    espera = [0.0]

    def _anotada(prompt=""):
        desde = reloj()
        try:
            r = _leer(prompt)
        finally:
            esperado = reloj() - desde
            espera[0] += esperado
            for f in funciones.values():
                if f[2] > 0:
                    f[3] += esperado
        respuestas.append(r)
        return r

    def _entra(code, offset, contar):
        if not _del_proyecto(code.co_filename) or code.co_name.startswith("<"):
            return mon.DISABLE
        f = funciones.get(code)
        if f is None:
            f = funciones[code] = [0, 0.0, 0, 0.0]
        if contar:
            f[0] += 1
        if f[2] == 0:
            f[3] = reloj()
        f[2] += 1

    def _sale(code):
        f = funciones.get(code)
        if f is None:
            return mon.DISABLE
        if f[2] > 0:
            f[2] -= 1
            if f[2] == 0:
                f[1] += reloj() - f[3]

    def _por_error(code, offset, e):
        if code in funciones:
            _sale(code)

    herramienta = mon.PROFILER_ID
    if mon.get_tool(herramienta) is not None:
        mon.free_tool_id(herramienta)
    mon.use_tool_id(herramienta, "laboratorio")
    mon.register_callback(herramienta, ev.PY_START, lambda c, o: _entra(c, o, True))
    mon.register_callback(herramienta, ev.PY_RESUME, lambda c, o: _entra(c, o, False))
    mon.register_callback(herramienta, ev.PY_RETURN, lambda c, o, v: _sale(c))
    mon.register_callback(herramienta, ev.PY_YIELD, lambda c, o, v: _sale(c))
    mon.register_callback(herramienta, ev.PY_UNWIND, _por_error)
    builtins.input = _anotada
    sys.stdin = _LeeCon(_anotada)
    inicio = reloj()
    mon.set_events(herramienta, ev.PY_START | ev.PY_RESUME | ev.PY_RETURN | ev.PY_YIELD | ev.PY_UNWIND)
    try:
        exec(programa, _espacio(nombre))
    except SystemExit:
        pass
    except BaseException as e:
        return _fallo(e)
    finally:
        mon.set_events(herramienta, 0)
        mon.free_tool_id(herramienta)
        sys.stdout.flush()
        sys.stderr.flush()
    primera = max(0.0, reloj() - inicio - espera[0])
    _laboratorio.medida_vuelta(1, primera)
    lista = sorted(
        ({"nombre": c.co_qualname, "archivo": c.co_filename, "llamadas": f[0], "s": f[1]} for c, f in funciones.items() if f[0]),
        key=lambda x: -x["s"],
    )
    _laboratorio.medida_funciones(json.dumps({"total": primera, "funciones": lista[:_MAX_FUNCIONES], "mas": max(0, len(lista) - _MAX_FUNCIONES)}))

    afuera, errores = sys.stdout, sys.stderr
    graficos = sys.modules.get("_laboratorio_mpl")
    envia = getattr(graficos, "_laboratorio", None)
    usado = primera
    ultima = primera
    for vuelta in range(2, int(vueltas) + 1):
        if usado + ultima > presupuesto:
            _laboratorio.medida_tope(vuelta)
            break
        _preparar(codigo, nombre, [])
        quedan = list(respuestas)

        def _repite(prompt=""):
            if not quedan:
                raise _PideEntrada()
            return quedan.pop(0)

        builtins.input = _repite
        sys.stdin = _LeeCon(_repite)
        sys.stdout = sys.stderr = _Nada()
        if graficos is not None:
            graficos._laboratorio = _Callado
        desde = reloj()
        try:
            exec(programa, _espacio(nombre))
        except SystemExit:
            pass
        except _PideEntrada:
            _laboratorio.medida_falla("input", "", vuelta)
            break
        except BaseException:
            _laboratorio.medida_falla("programa-error", "", vuelta)
            break
        finally:
            sys.stdout, sys.stderr = afuera, errores
            if graficos is not None:
                graficos._laboratorio = envia
        ultima = reloj() - desde
        usado += ultima
        _laboratorio.medida_vuelta(vuelta, ultima)
    return [None, 0, None]
`,{filename:`<laboratorio>`}),tt=H.globals.get(`_paso_a_paso`),nt=H.globals.get(`_medir`),rt=H.globals.get(`_medir_programa`),H.runPython(`
import ast as _r_ast
import builtins as _r_builtins
import difflib as _r_difflib
import traceback as _r_traceback
import warnings as _r_warnings

_r_pyflakes = None

def _r_cargar():
    global _r_pyflakes
    if _r_pyflakes is None:
        try:
            from pyflakes import checker, messages
            _r_pyflakes = (checker, messages)
        except Exception:
            _r_pyflakes = False
    return _r_pyflakes

def _r_nombres(arbol):
    nombres = set(dir(_r_builtins))
    for n in _r_ast.walk(arbol):
        if isinstance(n, _r_ast.Name):
            nombres.add(n.id)
        elif isinstance(n, (_r_ast.FunctionDef, _r_ast.AsyncFunctionDef, _r_ast.ClassDef)):
            nombres.add(n.name)
        elif isinstance(n, _r_ast.arg):
            nombres.add(n.arg)
        elif isinstance(n, _r_ast.alias):
            nombres.add((n.asname or n.name).split(".")[0])
    return nombres

def _r_parecido(nombre, arbol):
    opciones = [x for x in _r_nombres(arbol) if x != nombre and not x.startswith("_")]
    return next(iter(_r_difflib.get_close_matches(nombre, opciones, n=1, cutoff=0.75)), None)

def _r_flakes(codigo, nombre, arbol):
    cargado = _r_cargar()
    if not cargado:
        return []
    checker, m = cargado
    marcas = []
    for msg in checker.Checker(arbol, filename=nombre).messages:
        linea = getattr(msg, "lineno", 0) or 0
        args = msg.message_args
        if isinstance(msg, m.UndefinedName):
            otro = _r_parecido(args[0], arbol)
            texto = f"\`{args[0]}\` no está definido." + (f" ¿Quisiste decir \`{otro}\`?" if otro else "")
            marcas.append([linea, "error", texto])
        elif isinstance(msg, m.UndefinedLocal):
            marcas.append([linea, "error", f"\`{args[0]}\` se usa antes de darle un valor en esta función."])
        elif isinstance(msg, m.UnusedImport):
            marcas.append([linea, "aviso", f"\`{args[0]}\` se importa y no se usa."])
    return marcas

def _revisar(codigo, nombre):
    with _r_warnings.catch_warnings(record=True) as avisos:
        _r_warnings.simplefilter("always")
        try:
            compile(codigo, nombre, "exec", dont_inherit=True)
        except SyntaxError as e:
            return ["".join(_r_traceback.format_exception_only(type(e), e)), e.lineno or 0, []]
        except (ValueError, MemoryError, RecursionError) as e:
            return [f"{type(e).__name__}: {e}", 0, []]
        marcas = [[a.lineno, "aviso", f"SyntaxWarning: {a.message}"] for a in avisos if issubclass(a.category, SyntaxWarning) and a.lineno]
        try:
            arbol = _r_ast.parse(codigo, nombre)
            marcas += _r_flakes(codigo, nombre, arbol)
        except Exception:
            pass
    return [None, 0, marcas]
`,{filename:`<laboratorio>`}),W=H.globals.get(`_revisar`),H.runPython(Le,{filename:`<laboratorio>`}),K=H.globals.get(`_chapin`),$e(self),{version:H.runPython(`import sys; sys.version.split()[0]`),pausa:typeof WebAssembly.Suspending==`function`}}function st(e,t,n,r){if(r?.tipo===`pasos`)return[tt,[e,t,n,Number(r.tope)||1e3]];if(r?.tipo===`medir`&&r.programa)return[rt,[e,t,n,Math.min(10,Math.max(1,Math.round(Number(r.vueltas))||3)),Number(r.presupuesto)||20]];if(r?.tipo===`medir`){let i=Array.isArray(r.tamanos)?r.tamanos.map(Number).filter(Number.isFinite):[];return[nt,[e,t,n,String(r.funcion??``),String(r.argumentos??``),i,Number(r.presupuesto)||20]]}return[U,[e,t,n]]}async function ct({id:e,codigo:t,nombre:n,lineas:r,modo:i,archivos:a,principal:o}){q=e,J=0,Y=0,Z=!1,$=0;let s=performance.now(),c=He({codigo:t,nombre:n,archivos:a,principal:o});if(c.error){V({tipo:`fin`,id:e,ms:0,error:c.error,linea:0,archivo:null,archivos:{cambiados:[],borrados:[]}});return}let l,u=/* @__PURE__ */ new Map;try{u=Ge(H.FS,c);let[e,t]=st(c.codigo,c.principal,r,i),n=typeof WebAssembly.Suspending==`function`?await e.callPromising(...t):e(...t);l=n.toJs(),n.destroy()}catch(e){l=[String(e?.message??e),0,null]}let[d,f,p]=l,m;try{m=qe(H.FS,u)}catch{m={cambiados:[],borrados:[]}}let h={tipo:`fin`,id:e,ms:Math.round(performance.now()-s-$),error:d??null,linea:Number(f)||0,archivo:typeof p==`string`?p:null,archivos:m};V(h,m.cambiados.map(e=>e.contenido.buffer))}function lt({id:e,codigo:t,nombre:n,pyflakes:r}){if(!G&&r instanceof ArrayBuffer)try{H.unpackArchive(r,`wheel`,{extractDir:X}),G=!0}catch{G=!1}let i=[null,0,[]];try{let e=W(String(t??``),String(n??`main.py`));i=e.toJs(),e.destroy()}catch{}let[a,o,s]=i;V({tipo:`revisado`,id:e,error:typeof a==`string`?a:null,linea:Number(o)||0,marcas:Array.isArray(s)?s:[],pyflakes:G})}et(`message`,async({data:e})=>{if(e?.tipo===`cargar`)try{V({tipo:`listo`,...await ot(String(e.base),Number(e.total)||0)})}catch(e){V({tipo:`falla`,mensaje:String(e?.message??e)})}else if(e?.tipo===`correr`&&U)ct(e);else if(e?.tipo===`revisar`&&W)lt(e);else if(e?.tipo===`chapin`&&K){let t=null;try{t=String(K(String(e.codigo??``)))}catch{t=null}V({tipo:`chapin`,id:e.id,json:t})}else if(e?.tipo===`paquete`&&U){let t=!0;try{H.unpackArchive(e.bytes,`wheel`,{extractDir:X})}catch{t=!1}V({tipo:`paquete`,nombre:String(e.nombre),ok:t})}else if(e?.tipo===`entrada`&&Q){let t=Q;Q=null,$+=performance.now()-it,t(typeof e.texto==`string`?e.texto:null)}});export{o as t};