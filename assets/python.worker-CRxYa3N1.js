var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,ee=c.length,u;l<ee;l++)u=c[l],!a.call(e,u)&&u!==o&&t(e,u,{get:(e=>i[e]).bind(null,u),enumerable:!(s=n(i,u))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),l=/* @__PURE__ */ (e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")}),ee=Object.defineProperty,u=(e,t)=>ee(e,`name`,{value:t,configurable:!0}),te=(e=>typeof l<`u`?l:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof l<`u`?l:e)[t]}):e)(function(e){if(typeof l<`u`)return l.apply(this,arguments);throw Error(`Dynamic require of "`+e+`" is not supported`)}),ne=(()=>{for(var e=/* @__PURE__ */ new Uint8Array(128),t=0;t<64;t++)e[t<26?t+65:t<52?t+71:t<62?t-4:t*4-205]=t;return t=>{for(var n=t.length,r=new Uint8Array((n-(t[n-1]==`=`)-(t[n-2]==`=`))*3/4|0),i=0,a=0;i<n;){var o=e[t.charCodeAt(i++)],s=e[t.charCodeAt(i++)],c=e[t.charCodeAt(i++)],l=e[t.charCodeAt(i++)];r[a++]=o<<2|s>>4,r[a++]=s<<4|c>>2,r[a++]=c<<6|l}return r}})();function re(e){return!isNaN(parseFloat(e))&&isFinite(e)}u(re,`_isNumber`);function d(e){return e.charAt(0).toUpperCase()+e.substring(1)}u(d,`_capitalize`);function f(e){return function(){return this[e]}}u(f,`_getter`);var p=[`isConstructor`,`isEval`,`isNative`,`isToplevel`],m=[`columnNumber`,`lineNumber`],h=[`fileName`,`functionName`,`source`],g=p.concat(m,h,[`args`],[`evalOrigin`]);function _(e){if(e)for(var t=0;t<g.length;t++)e[g[t]]!==void 0&&this[`set`+d(g[t])](e[g[t]])}for(u(_,`StackFrame`),_.prototype={getArgs:u(function(){return this.args},`getArgs`),setArgs:u(function(e){if(Object.prototype.toString.call(e)!==`[object Array]`)throw TypeError(`Args must be an Array`);this.args=e},`setArgs`),getEvalOrigin:u(function(){return this.evalOrigin},`getEvalOrigin`),setEvalOrigin:u(function(e){if(e instanceof _)this.evalOrigin=e;else if(e instanceof Object)this.evalOrigin=new _(e);else throw TypeError(`Eval Origin must be an Object or StackFrame`)},`setEvalOrigin`),toString:u(function(){var e=this.getFileName()||``,t=this.getLineNumber()||``,n=this.getColumnNumber()||``,r=this.getFunctionName()||``;return this.getIsEval()?e?`[eval] (`+e+`:`+t+`:`+n+`)`:`[eval]:`+t+`:`+n:r?r+` (`+e+`:`+t+`:`+n+`)`:e+`:`+t+`:`+n},`toString`)},_.fromString=u(function(e){var t=e.indexOf(`(`),n=e.lastIndexOf(`)`),r=e.substring(0,t),i=e.substring(t+1,n).split(`,`),a=e.substring(n+1);if(a.indexOf(`@`)===0)var o=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(a,``),s=o[1],c=o[2],l=o[3];return new _({functionName:r,args:i||void 0,fileName:s,lineNumber:c||void 0,columnNumber:l||void 0})},`StackFrame$$fromString`),v=0;v<p.length;v++)_.prototype[`get`+d(p[v])]=f(p[v]),_.prototype[`set`+d(p[v])]=function(e){return function(t){this[e]=!!t}}(p[v]);var v;for(y=0;y<m.length;y++)_.prototype[`get`+d(m[y])]=f(m[y]),_.prototype[`set`+d(m[y])]=function(e){return function(t){if(!re(t))throw TypeError(e+` must be a Number`);this[e]=Number(t)}}(m[y]);var y;for(b=0;b<h.length;b++)_.prototype[`get`+d(h[b])]=f(h[b]),_.prototype[`set`+d(h[b])]=function(e){return function(t){this[e]=String(t)}}(h[b]);var b,x=_;function S(){var e=/^\s*at .*(\S+:\d+|\(native\))/m,t=/^(eval@)?(\[native code])?$/;return{parse:u(function(t){if(t.stack&&t.stack.match(e))return this.parseV8OrIE(t);if(t.stack)return this.parseFFOrSafari(t);throw Error(`Cannot parse given Error object`)},`ErrorStackParser$$parse`),extractLocation:u(function(e){if(e.indexOf(`:`)===-1)return[e];var t=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g,``));return[t[1],t[2]||void 0,t[3]||void 0]},`ErrorStackParser$$extractLocation`),parseV8OrIE:u(function(t){return t.stack.split(`
`).filter(function(t){return!!t.match(e)},this).map(function(e){e.indexOf(`(eval `)>-1&&(e=e.replace(/eval code/g,`eval`).replace(/(\(eval at [^()]*)|(,.*$)/g,``));var t=e.replace(/^\s+/,``).replace(/\(eval code/g,`(`).replace(/^.*?\s+/,``),n=t.match(/ (\(.+\)$)/);t=n?t.replace(n[0],``):t;var r=this.extractLocation(n?n[1]:t);return new x({functionName:n&&t||void 0,fileName:[`eval`,`<anonymous>`].indexOf(r[0])>-1?void 0:r[0],lineNumber:r[1],columnNumber:r[2],source:e})},this)},`ErrorStackParser$$parseV8OrIE`),parseFFOrSafari:u(function(e){return e.stack.split(`
`).filter(function(e){return!e.match(t)},this).map(function(e){if(e.indexOf(` > eval`)>-1&&(e=e.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,`:$1`)),e.indexOf(`@`)===-1&&e.indexOf(`:`)===-1)return new x({functionName:e});var t=/((.*".+"[^@]*)?[^@]*)(?:@)/,n=e.match(t),r=n&&n[1]?n[1]:void 0,i=this.extractLocation(e.replace(t,``));return new x({functionName:r,fileName:i[0],lineNumber:i[1],columnNumber:i[2],source:e})},this)},`ErrorStackParser$$parseFFOrSafari`)}}u(S,`ErrorStackParser`);var ie=new S;function ae(){return typeof API<`u`&&API!==globalThis.API?API.runtimeEnv:oe({IN_BUN:typeof Bun<`u`,IN_DENO:typeof Deno<`u`,IN_NODE:typeof process==`object`&&typeof process.versions==`object`&&typeof process.versions.node==`string`&&!process.browser,IN_SAFARI:typeof navigator==`object`&&typeof navigator.userAgent==`string`&&navigator.userAgent.indexOf(`Chrome`)===-1&&navigator.userAgent.indexOf(`Safari`)>-1,IN_SHELL:typeof read==`function`&&typeof load==`function`,IN_WORKERD:typeof navigator==`object`&&navigator.userAgent?.includes(`Cloudflare-Workers`)})}u(ae,`getGlobalRuntimeEnv`);var C=ae();function oe(e){let t=e.IN_NODE&&typeof module<`u`&&module.exports&&typeof te==`function`&&typeof __dirname==`string`,n=e.IN_NODE&&!t,r=!e.IN_NODE&&!e.IN_DENO&&!e.IN_BUN,i=r&&typeof window<`u`&&typeof window.document<`u`&&typeof document.createElement==`function`&&`sessionStorage`in window&&typeof globalThis.importScripts!=`function`,a=r&&typeof globalThis.WorkerGlobalScope<`u`&&typeof globalThis.self<`u`&&globalThis.self instanceof globalThis.WorkerGlobalScope;if(a&&se())throw Error(`Classic web workers are not supported`);let o={...e,IN_BROWSER:r,IN_BROWSER_MAIN_THREAD:i,IN_BROWSER_WEB_WORKER:a,IN_NODE_COMMONJS:t,IN_NODE_ESM:n};if(!(o.IN_BROWSER_MAIN_THREAD||o.IN_BROWSER_WEB_WORKER||o.IN_NODE||o.IN_SHELL||o.IN_WORKERD))throw Error(`Cannot determine runtime environment: ${JSON.stringify(o)}`);return o}u(oe,`calculateDerivedFlags`);function se(){try{return globalThis.importScripts(`data:text/javascript,`),!0}catch{return!1}}u(se,`isClassicWorker`);var ce,w,le,T;async function E(){if(!C.IN_NODE||(ce=(await import(`./__vite-browser-external-l2TqTdgG.js`).then(e=>/* @__PURE__ */ c(e.default,1))).default,le=await import(`./__vite-browser-external-l2TqTdgG.js`).then(e=>/* @__PURE__ */ c(e.default,1)),T=await import(`./__vite-browser-external-l2TqTdgG.js`).then(e=>/* @__PURE__ */ c(e.default,1)),(await import(`./__vite-browser-external-l2TqTdgG.js`).then(e=>/* @__PURE__ */ c(e.default,1))).default,w=await import(`./__vite-browser-external-l2TqTdgG.js`).then(e=>/* @__PURE__ */ c(e.default,1)),k=w.sep,typeof te<`u`))return;let e={fs:le,crypto:await import(`./__vite-browser-external-l2TqTdgG.js`).then(e=>/* @__PURE__ */ c(e.default,1)),ws:await import(`./__vite-browser-external-l2TqTdgG.js`).then(e=>/* @__PURE__ */ c(e.default,1)),child_process:await import(`./__vite-browser-external-l2TqTdgG.js`).then(e=>/* @__PURE__ */ c(e.default,1))};globalThis.require=function(t){return e[t]}}u(E,`initNodeModules`);function ue(e,t){return w.resolve(t||`.`,e)}u(ue,`node_resolvePath`);function D(e,t){return t===void 0&&(t=location),new URL(e,t).toString()}u(D,`browser_resolvePath`);var O=C.IN_NODE?ue:C.IN_SHELL?u(e=>e,`resolvePath`):D,k;C.IN_NODE||(k=`/`);function A(e,t){return e.startsWith(`file://`)&&(e=e.slice(7)),e.includes(`://`)?{response:fetch(e)}:{binary:T.readFile(e).then(e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength))}}u(A,`node_getBinaryResponse`);function j(e,t){if(e.startsWith(`file://`)&&(e=e.slice(7)),e.includes(`://`))throw Error(`Shell cannot fetch urls`);return{binary:Promise.resolve(new Uint8Array(readbuffer(e)))}}u(j,`shell_getBinaryResponse`);function M(e,t){let n=new URL(e,location);return{response:fetch(n,t?{integrity:t}:{})}}u(M,`browser_getBinaryResponse`);var N=C.IN_NODE?A:C.IN_SHELL?j:M;async function P(e,t){let{response:n,binary:r}=N(e,t);if(r)return r;let i=await n;if(!i.ok)throw Error(`Failed to load '${e}': request failed.`);return new Uint8Array(await i.arrayBuffer())}u(P,`loadBinaryFile`);var de=C.IN_NODE?F:u(async e=>await import(e),`loadScript`);async function F(e){return e.startsWith(`file://`)&&(e=e.slice(7)),e.includes(`://`)?await import(e):await import(ce.pathToFileURL(e).href)}u(F,`nodeLoadScript`);async function I(e){if(C.IN_NODE){await E();let t=await T.readFile(e,{encoding:`utf8`});return JSON.parse(t)}if(C.IN_SHELL){let t=read(e);return JSON.parse(t)}return await(await fetch(e)).json()}u(I,`loadLockFile`);async function L(){if(C.IN_NODE_COMMONJS)return __dirname;let e;try{throw Error()}catch(t){e=t}let t=ie.parse(e)[0].fileName;if(C.IN_NODE&&!t.startsWith(`file://`)&&(t=`file://${t}`),C.IN_NODE_ESM){let e=await import(`./__vite-browser-external-l2TqTdgG.js`).then(e=>/* @__PURE__ */ c(e.default,1));return(await import(`./__vite-browser-external-l2TqTdgG.js`).then(e=>/* @__PURE__ */ c(e.default,1))).fileURLToPath(e.dirname(t))}let n=t.lastIndexOf(k);if(n===-1)throw Error(`Could not extract indexURL path from pyodide module location. Please pass the indexURL explicitly to loadPyodide.`);return t.slice(0,n)}u(L,`calculateDirname`);function R(e){return e.substring(0,e.lastIndexOf(`/`)+1)||globalThis.location?.toString()||`.`}u(R,`calculateInstallBaseUrl`);function z(e){let t=e.FS,n=e.FS.filesystems.MEMFS,r=e.PATH,i={DIR_MODE:16895,FILE_MODE:33279,mount:u(function(e){if(!e.opts.fileSystemHandle)throw Error(`opts.fileSystemHandle is required`);return n.mount.apply(null,arguments)},`mount`),syncfs:u(async(e,t,n)=>{try{let r=i.getLocalSet(e),a=await i.getRemoteSet(e),o=t?a:r,s=t?r:a;await i.reconcile(e,o,s),n(null)}catch(e){n(e)}},`syncfs`),getLocalSet:u(e=>{let n=Object.create(null);function i(e){return e!==`.`&&e!==`..`}u(i,`isRealDir`);function a(e){return t=>r.join2(e,t)}u(a,`toAbsolute`);let o=t.readdir(e.mountpoint).filter(i).map(a(e.mountpoint));for(;o.length;){let e=o.pop(),r=t.stat(e);t.isDir(r.mode)&&o.push.apply(o,t.readdir(e).filter(i).map(a(e))),n[e]={timestamp:r.mtime,mode:r.mode}}return{type:`local`,entries:n}},`getLocalSet`),getRemoteSet:u(async e=>{let t=Object.create(null),n=await fe(e.opts.fileSystemHandle);for(let[a,o]of n)a!==`.`&&(t[r.join2(e.mountpoint,a)]={timestamp:o.kind===`file`?new Date((await o.getFile()).lastModified):/* @__PURE__ */ new Date,mode:o.kind===`file`?i.FILE_MODE:i.DIR_MODE});return{type:`remote`,entries:t,handles:n}},`getRemoteSet`),loadLocalEntry:u(e=>{let r=t.lookupPath(e,{}).node,i=t.stat(e);if(t.isDir(i.mode))return{timestamp:i.mtime,mode:i.mode};if(t.isFile(i.mode))return r.contents=n.getFileDataAsTypedArray(r),{timestamp:i.mtime,mode:i.mode,contents:r.contents};throw Error(`node type not supported`)},`loadLocalEntry`),storeLocalEntry:u((e,n)=>{if(t.isDir(n.mode))t.mkdirTree(e,n.mode);else if(t.isFile(n.mode))t.writeFile(e,n.contents,{canOwn:!0});else throw Error(`node type not supported`);t.chmod(e,n.mode),t.utime(e,n.timestamp,n.timestamp)},`storeLocalEntry`),removeLocalEntry:u(e=>{var n=t.stat(e);t.isDir(n.mode)?t.rmdir(e):t.isFile(n.mode)&&t.unlink(e)},`removeLocalEntry`),loadRemoteEntry:u(async e=>{if(e.kind===`file`){let t=await e.getFile();return{contents:new Uint8Array(await t.arrayBuffer()),mode:i.FILE_MODE,timestamp:new Date(t.lastModified)}}if(e.kind===`directory`)return{mode:i.DIR_MODE,timestamp:/* @__PURE__ */ new Date};throw Error(`unknown kind: `+e.kind)},`loadRemoteEntry`),storeRemoteEntry:u(async(e,n,i)=>{let a=e.get(r.dirname(n)),o=t.isFile(i.mode)?await a.getFileHandle(r.basename(n),{create:!0}):await a.getDirectoryHandle(r.basename(n),{create:!0});if(o.kind===`file`){let e=await o.createWritable();await e.write(i.contents),await e.close()}e.set(n,o)},`storeRemoteEntry`),removeRemoteEntry:u(async(e,t)=>{await e.get(r.dirname(t)).removeEntry(r.basename(t)),e.delete(t)},`removeRemoteEntry`),reconcile:u(async(e,n,a)=>{let o=0,s=[];Object.keys(n.entries).forEach(function(e){let r=n.entries[e],i=a.entries[e];(!i||t.isFile(r.mode)&&r.timestamp.getTime()>i.timestamp.getTime())&&(s.push(e),o++)}),s.sort();let c=[];if(Object.keys(a.entries).forEach(function(e){n.entries[e]||(c.push(e),o++)}),c.sort().reverse(),!o)return;let l=n.type===`remote`?n.handles:a.handles;for(let t of s){let n=r.normalize(t.replace(e.mountpoint,`/`)).substring(1);if(a.type===`local`){let e=l.get(n),r=await i.loadRemoteEntry(e);i.storeLocalEntry(t,r)}else{let e=i.loadLocalEntry(t);await i.storeRemoteEntry(l,n,e)}}for(let t of c)if(a.type===`local`)i.removeLocalEntry(t);else{let n=r.normalize(t.replace(e.mountpoint,`/`)).substring(1);await i.removeRemoteEntry(l,n)}},`reconcile`)};e.FS.filesystems.NATIVEFS_ASYNC=i}u(z,`initializeNativeFS`);var fe=u(async e=>{let t=[];async function n(e){for await(let r of e.values())t.push(r),r.kind===`directory`&&await n(r)}u(n,`collect`),await n(e);let r=/* @__PURE__ */ new Map;r.set(`.`,e);for(let n of t){let t=(await e.resolve(n)).join(`/`);r.set(t,n)}return r},`getFsHandles`),pe=ne(`AGFzbQEAAAABDANfAGAAAW9gAW8BfwMDAgECBygCE0pzdl9HZXRFcnJvcl9pbXBvcnQAAA5Kc3ZFcnJvcl9DaGVjawABChMCBwD7AQD7GwsJACAA+xr7FAAL`),me=async function(){if(!(globalThis.navigator&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform===`MacIntel`&&typeof navigator.maxTouchPoints<`u`&&navigator.maxTouchPoints>1)))try{let e=await WebAssembly.compile(pe);return await WebAssembly.instantiate(e)}catch(e){if(e instanceof WebAssembly.CompileError)return;throw e}}();async function B(){let e=await me;if(e)return e.exports;let t=Symbol(`error marker`);return{Jsv_GetError_import:u(()=>t,`Jsv_GetError_import`),JsvError_Check:u(e=>e===t,`JsvError_Check`)}}u(B,`getJsvErrorImport`);function V(e){let t={config:e,runtimeEnv:C},n={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preRun:ve(e),print:e.stdout,printErr:e.stderr,onExit(e){n.exitCode=e},thisProgram:e._sysExecutable,arguments:e.args,API:t,locateFile:u(t=>e.indexURL+t,`locateFile`),instantiateWasm:ye(e.indexURL)};return n}u(V,`createSettings`);function H(e){return function(t){try{t.FS.mkdirTree(e)}catch(t){console.error(`Error occurred while making a home directory '${e}':`),console.error(t),console.error(`Using '/' for a home directory instead`),e=`/`}t.FS.chdir(e)}}u(H,`createHomeDirectory`);function U(e){return function(t){Object.assign(t.ENV,e)}}u(U,`setEnvironment`);function he(e){return e?[async t=>{t.addRunDependency(`fsInitHook`);try{await e(t.FS,{sitePackages:t.API.sitePackages})}finally{t.removeRunDependency(`fsInitHook`)}}]:[]}u(he,`callFsInitHook`);function ge(e){let t=e.HEAPU32[e._Py_Version>>>2];return[t>>>24&255,t>>>16&255,t>>>8&255]}u(ge,`computeVersionTuple`);function _e(e){let t=P(e);return async e=>{e.API.pyVersionTuple=ge(e);let[n,r]=e.API.pyVersionTuple;e.FS.mkdirTree(`/lib`),e.API.sitePackages=`/lib/python${n}.${r}/site-packages`,e.FS.mkdirTree(e.API.sitePackages),e.FS.mkdirTree(`/lib/python${n}.${r}/lib-dynload`),e.addRunDependency(`install-stdlib`);try{let i=await t;e.FS.writeFile(`/lib/python${n}${r}.zip`,i)}catch(e){console.error(`Error occurred while installing the standard library:`),console.error(e)}finally{e.removeRunDependency(`install-stdlib`)}}}u(_e,`installStdlib`);function ve(e){let t;return t=e.stdLibURL==null?e.indexURL+`python_stdlib.zip`:e.stdLibURL,[_e(t),H(e.env.HOME),U(e.env),z,...he(e.fsInit)]}u(ve,`getFileSystemInitializationFuncs`);function ye(e){if(typeof WasmOffsetConverter<`u`)return;let{binary:t,response:n}=N(e+`pyodide.asm.wasm`),r=B();return function(e,i){return async function(){let{Jsv_GetError_import:a,JsvError_Check:o}=await r;e.env.Jsv_GetError_import=a,e.env.JsvError_Check=o;try{let r;r=n?await WebAssembly.instantiateStreaming(n,e):await WebAssembly.instantiate(await t,e);let{instance:a,module:o}=r;i(a,o)}catch(e){console.warn(`wasm instantiation failed!`),console.warn(e)}}(),{}}}u(ye,`getInstantiateWasmFunc`);var be=`314.0.7`;function W(e){return e===void 0||e.endsWith(`/`)?e:e+`/`}u(W,`withTrailingSlash`);var xe=be;async function Se(e={}){if(await E(),e.lockFileContents&&e.lockFileURL)throw Error(`Can't pass both lockFileContents and lockFileURL`);let t=e.indexURL||await L();if(t=W(O(t)),e.packageBaseUrl=W(e.packageBaseUrl),e.cdnUrl=W(e.packageBaseUrl??`https://cdn.jsdelivr.net/pyodide/v314.0.7/full/`),!e.lockFileContents){let n=e.lockFileURL??t+`pyodide-lock.json`;e.lockFileContents=I(n),e.packageBaseUrl??=R(n)}e.indexURL=t,e.packageCacheDir&&=W(O(e.packageCacheDir));let n={jsglobals:globalThis,stdin:globalThis.prompt?()=>globalThis.prompt():void 0,args:[],env:{},packages:[],packageCacheDir:e.packageBaseUrl,enableRunUntilComplete:!0,checkAPIVersion:!0,BUILD_ID:`990c3b51a9722d62434de2bbc9643732658d488c1b6d467f22c1b6beba80d497`},r=Object.assign(n,e);return r.env.HOME??=`/home/pyodide`,r.env.PYTHONINSPECT??=`1`,r}u(Se,`initializeConfiguration`);function Ce(e){let t=V(e),n=t.API;return n.lockFilePromise=Promise.resolve(e.lockFileContents),t}u(Ce,`createEmscriptenSettings`);async function we(e){return e.createPyodideModule?e.createPyodideModule:(await de(`${e.indexURL}pyodide.asm.mjs`)).default}u(we,`loadWasmScript`);async function Te(e,t){if(!e._loadSnapshot)return;let n=await e._loadSnapshot,r=ArrayBuffer.isView(n)?n:new Uint8Array(n);return t.noInitialRun=!0,t.INITIAL_MEMORY=r.length,r}u(Te,`prepareSnapshot`);async function Ee(e,t){let n=await e(t);if(t.exitCode!==void 0)throw new n.ExitStatus(t.exitCode);return n}u(Ee,`instantiatePyodideModule`);function De(e,t){let n=e.API;if(t.pyproxyToStringRepr&&n.setPyProxyToStringMethod(!0),t.convertNullToNone&&n.setCompatNullToNone(!0),t.toJsLiteralMap&&n.setCompatToJsLiteralMap(!0),n.version!==`314.0.7`&&t.checkAPIVersion)throw Error(`Pyodide version does not match: '${xe}' <==> '${n.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);e.locateFile=e=>{throw e.endsWith(`.so`)?/* @__PURE__ */ Error(`Failed to find dynamic library "${e}"`):/* @__PURE__ */ Error(`Unexpected call to locateFile("${e}")`)}}u(De,`configureAPI`);function Oe(e,t,n){let r=e.API,i;return t&&(i=r.restoreSnapshot(t)),r.finalizeBootstrap(i,n._snapshotDeserializer)}u(Oe,`bootstrapPyodide`);async function ke(e,t){let n=e._api;return n.sys.path.insert(0,``),n._pyodide.set_excepthook(),await n.packageIndexReady,n.initializeStreams(t.stdin,t.stdout,t.stderr),e}u(ke,`finalizeSetup`);async function Ae(e={}){let t=await Se(e),n=Ce(t),r=await we(t),i=await Te(t,n),a=await Ee(r,n);return De(a,t),await ke(Oe(a,i,t),t)}u(Ae,`loadPyodide`);function je(e,t){let n=e.fetch.bind(e),r=0;return e.fetch=async(...e)=>{let i=await n(...e);if(!i.ok||!i.body)return i;let a=i.body.getReader(),o=new ReadableStream({async pull(e){let{done:n,value:i}=await a.read();n?e.close():(r+=i.byteLength,t(r),e.enqueue(i))},cancel:e=>a.cancel(e)});return new Response(o,{status:i.status,statusText:i.statusText,headers:i.headers})},()=>{e.fetch=n}}const Me=[`fetch`,`fetchLater`,`XMLHttpRequest`,`WebSocket`,`WebSocketStream`,`EventSource`,`WebTransport`,`importScripts`,`Worker`,`SharedWorker`,`caches`,`indexedDB`,`BroadcastChannel`,`CookieStore`,`cookieStore`,`RTCPeerConnection`,`webkitRTCPeerConnection`,`RTCDataChannel`,`WebSocketError`,`postMessage`];function Ne(e,t=Me){let n=[];for(let r of t){let t=!1;for(let n=e;n&&n!==Object.prototype;n=Object.getPrototypeOf(n))if(Object.prototype.hasOwnProperty.call(n,r)){t=!0;try{delete n[r]}catch{}}t&&n.push(r);try{Object.defineProperty(e,r,{value:void 0,writable:!1,configurable:!1,enumerable:!1})}catch{}}return n}const G=self.postMessage.bind(self),Pe=self.addEventListener.bind(self);let K=null,q=null,Fe=null,J=null,Y=0,X=0,Z=!1,Q=null,$=0,Ie=0;function Le(e){let t=new TextDecoder;return{isatty:!1,write(n){let r=t.decode(n,{stream:!0});return Z||(X+=r.length,X>1e5?(Z=!0,G({tipo:`tope`,id:Y})):r&&G({tipo:`salida`,id:Y,flujo:e,texto:r})),n.length}}}async function Re(e,t){return je(self,e=>G({tipo:`progreso`,bajado:e,total:t})),K=await Ae({indexURL:`${e}python/`,env:{HOME:`/home/alumno`,PYTHONHASHSEED:`0`,PYTHON_COLORS:`0`,NO_COLOR:`1`},jsglobals:Object.create(null),stdout:()=>{},stderr:()=>{}}),K.setStdout(Le(`out`)),K.setStderr(Le(`err`)),K.registerJsModule(`_laboratorio`,{pedir:e=>new Promise(t=>{Q=t,Ie=performance.now(),G({tipo:`pide`,id:Y,pregunta:String(e??``).slice(-200)})}),sin_pausa:()=>G({tipo:`sin-pausa`,id:Y}),pasos:e=>G({tipo:`pasos`,id:Y,pasos:String(e)}),medida_empieza:e=>G({tipo:`medida-empieza`,id:Y,n:Number(e)}),medida:(e,t,n)=>G({tipo:`medida`,id:Y,n:Number(e),s:Number(t),veces:Number(n)}),medida_tope:e=>G({tipo:`medida-tope`,id:Y,n:Number(e)}),medida_falla:(e,t,n)=>G({tipo:`medida-falla`,id:Y,donde:String(e),texto:String(t??``).slice(0,300),n:Number(n)||0})}),K.runPython(`
import builtins, io, linecache, sys, traceback
from pyodide.ffi import can_run_sync, run_sync
import _laboratorio

_PROPIO = "<laboratorio>"
_ORIGINALES = dict(builtins.__dict__)
_antes = []

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

def _correr(codigo, nombre, lineas):
    builtins.__dict__.clear()
    builtins.__dict__.update(_ORIGINALES)
    builtins.input = _leer
    sys.stdin = _Entrada()
    _antes[:] = list(lineas)
    linecache.cache[nombre] = (len(codigo), None, codigo.splitlines(True), nombre)
    try:
        programa = compile(codigo, nombre, "exec")
    except SyntaxError as e:
        return ["".join(traceback.format_exception_only(type(e), e)), e.lineno or 0]
    espacio = {"__name__": "__main__", "__file__": nombre, "__builtins__": builtins}
    try:
        exec(programa, espacio)
    except SystemExit as e:
        if e.code not in (None, 0):
            sys.stderr.write(str(e.code) + "\\n")
    except BaseException as e:
        tb = e.__traceback__
        while tb is not None and tb.tb_frame.f_code.co_filename != nombre:
            tb = tb.tb_next
        linea = 0
        for f in traceback.extract_tb(tb):
            if f.filename == nombre:
                linea = f.lineno or 0
        return [_sin_lo_propio(e, tb), linea]
    finally:
        sys.stdout.flush()
        sys.stderr.flush()
    return [None, 0]
`,{filename:`<laboratorio>`}),q=K.globals.get(`_correr`),K.runPython(`
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

def _preparar(codigo, nombre, lineas):
    builtins.__dict__.clear()
    builtins.__dict__.update(_ORIGINALES)
    builtins.input = _leer
    sys.stdin = _Entrada()
    _antes[:] = list(lineas)
    linecache.cache[nombre] = (len(codigo), None, codigo.splitlines(True), nombre)

def _sintaxis(e):
    return ["".join(traceback.format_exception_only(type(e), e)), e.lineno or 0]

def _fallo(e, nombre):
    tb = e.__traceback__
    while tb is not None and tb.tb_frame.f_code.co_filename != nombre:
        tb = tb.tb_next
    linea = 0
    for f in traceback.extract_tb(tb):
        if f.filename == nombre:
            linea = f.lineno or 0
    return [_sin_lo_propio(e, tb), linea]

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
    def __init__(self, nombre, tope):
        self.nombre = nombre
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
        return getattr(t, "__module__", None) == "__main__" and t not in (_Copia, _Nada, _Entrada, _Rastro)

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
        d = {"f": co.co_name, "t": tipo, "l": linea, "v": [[str(a), self.valor(b, pendientes)] for a, b in pares[:_VARIABLES]]}
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
            if f.f_code.co_filename == self.nombre:
                pila.append(f)
            f = f.f_back
        pila.reverse()
        ocultos = 0
        if len(pila) > _MARCOS + 1:
            ocultos = len(pila) - _MARCOS - 1
            pila = pila[:1] + pila[-_MARCOS:]
        pendientes = []
        marcos = [self.guardar(self.marcos, self._marcos, self.marco(f, f.f_lineno, pendientes)) for f in pila]
        p = {"e": evento, "l": frame.f_lineno, "s": self.escrito, "m": marcos}
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
        if evento == "return" and frame.f_code.co_name == "<module>":
            p["e"] = "fin"
        self.pasos.append(p)

    def texto(self):
        return '{"pasos":' + json.dumps(self.pasos, ensure_ascii=False, separators=(",", ":")) + ',"marcos":[' + ",".join(self.marcos) + '],"objetos":[' + ",".join(self.objetos) + '],"salida":' + json.dumps(self.salida, ensure_ascii=False) + ',"tope":' + ("true" if self.cortado else "false") + "}"

    def mandar(self):
        if not self.mandado:
            self.mandado = True
            _laboratorio.pasos(self.texto())

    def __call__(self, frame, evento, arg):
        if frame.f_code.co_filename != self.nombre:
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
        return _sintaxis(e)
    rastro = _Rastro(nombre, int(tope))
    def _leer_y_anotar(prompt=""):
        if rastro.cortado:
            raise _Tope()
        linea = _leer(prompt)
        if can_run_sync():
            rastro.anotar("in", linea + "\\n")
        return linea
    builtins.input = _leer_y_anotar
    espacio = {"__name__": "__main__", "__file__": nombre, "__builtins__": builtins}
    afuera, errores = sys.stdout, sys.stderr
    sys.stdout = _Copia(afuera, "out", rastro.anotar)
    sys.stderr = _Copia(errores, "err", rastro.anotar)
    resultado = [None, 0]
    sys.settrace(rastro)
    try:
        exec(programa, espacio)
    except _Tope:
        pass
    except SystemExit as e:
        if e.code not in (None, 0):
            sys.stderr.write(str(e.code) + "\\n")
    except BaseException as e:
        resultado = _fallo(e, nombre)
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

def _medir(codigo, nombre, lineas, funcion, argumentos, tamanos, presupuesto):
    _preparar(codigo, nombre, lineas)
    try:
        programa = compile(codigo, nombre, "exec")
    except SyntaxError as e:
        return _sintaxis(e)
    espacio = {"__name__": "__main__", "__file__": nombre, "__builtins__": builtins}
    try:
        exec(programa, espacio)
    except SystemExit:
        pass
    except BaseException as e:
        return _fallo(e, nombre)
    finally:
        sys.stdout.flush()
        sys.stderr.flush()
    f = espacio.get(str(funcion))
    if not callable(f):
        _laboratorio.medida_falla("funcion", "", 0)
        return [None, 0]
    contexto = dict(espacio)
    contexto.setdefault("random", random)
    contexto.setdefault("math", math)
    try:
        armar = eval(compile("lambda n: (lambda *a, **k: (a, k))(" + str(argumentos) + "\\n)", "<entrada>", "eval"), contexto)
    except SyntaxError as e:
        _laboratorio.medida_falla("entrada", _ultima_linea(e), 0)
        return [None, 0]
    def _sin_input(prompt=""):
        raise _PideEntrada()
    builtins.input = _sin_input
    afuera = sys.stdout
    reloj = time.perf_counter
    inicio = reloj()
    anterior = None
    n = 0
    try:
        for n in [int(x) for x in tamanos]:
            if anterior is not None:
                n0, t0 = anterior
                # As if it grew like n², three times: what wouldn't fit isn't started.
                if reloj() - inicio + 3 * t0 * (n / n0) ** 2 > presupuesto:
                    _laboratorio.medida_tope(n)
                    break
            _laboratorio.medida_empieza(n)
            try:
                armar(n)
            except BaseException as e:
                _laboratorio.medida_falla("entrada", _ultima_linea(e), n)
                return [None, 0]
            sys.stdout = _Nada()
            try:
                segundos, veces = _tiempo(f, armar, n)
            finally:
                sys.stdout = afuera
            _laboratorio.medida(n, segundos, veces)
            anterior = (n, segundos)
    except _PideEntrada:
        sys.stdout = afuera
        _laboratorio.medida_falla("input", "", 0)
        return [None, 0]
    except BaseException as e:
        sys.stdout = afuera
        _laboratorio.medida_falla("funcion-error", "", n)
        return _fallo(e, nombre)
    return [None, 0]
`,{filename:`<laboratorio>`}),Fe=K.globals.get(`_paso_a_paso`),J=K.globals.get(`_medir`),Ne(self),{version:K.runPython(`import sys; sys.version.split()[0]`),pausa:typeof WebAssembly.Suspending==`function`}}function ze(e,t,n,r){if(r?.tipo===`pasos`)return[Fe,[e,t,n,Number(r.tope)||1e3]];if(r?.tipo===`medir`){let i=Array.isArray(r.tamanos)?r.tamanos.map(Number).filter(Number.isFinite):[];return[J,[e,t,n,String(r.funcion??``),String(r.argumentos??``),i,Number(r.presupuesto)||20]]}return[q,[e,t,n]]}async function Be({id:e,codigo:t,nombre:n,lineas:r,modo:i}){Y=e,X=0,Z=!1,$=0;let a=performance.now(),o;try{let[e,a]=ze(t,n,r,i),s=typeof WebAssembly.Suspending==`function`?await e.callPromising(...a):e(...a);o=s.toJs(),s.destroy()}catch(e){o=[String(e?.message??e),0]}let[s,c]=o;G({tipo:`fin`,id:e,ms:Math.round(performance.now()-a-$),error:s??null,linea:Number(c)||0})}Pe(`message`,async({data:e})=>{if(e?.tipo===`cargar`)try{G({tipo:`listo`,...await Re(String(e.base),Number(e.total)||0)})}catch(e){G({tipo:`falla`,mensaje:String(e?.message??e)})}else if(e?.tipo===`correr`&&q)Be(e);else if(e?.tipo===`paquete`&&q){let t=!0;try{K.unpackArchive(e.bytes,`wheel`)}catch{t=!1}G({tipo:`paquete`,nombre:String(e.nombre),ok:t})}else if(e?.tipo===`entrada`&&Q){let t=Q;Q=null,$+=performance.now()-Ie,t(typeof e.texto==`string`?e.texto:null)}});export{o as t};