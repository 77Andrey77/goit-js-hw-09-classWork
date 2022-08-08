// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _galleryItemsJs = require("./js/gallery-items.js");
var _galleryItemsJsDefault = parcelHelpers.interopDefault(_galleryItemsJs);
var _onOpenModalJs = require("./js/onOpenModal.js");
var _onOpenModalJsDefault = parcelHelpers.interopDefault(_onOpenModalJs);
const galleryEl = document.querySelector(".js-gallery");
const createItem = (option)=>`<li class="gallery__item">
  <a
    class="gallery__link"
    href="${option.original}"
  >
    <img
    loading="lazy"
      class="gallery__image lazyload"
      data-src="${option.preview}"
      data-source="${option.original}"
      alt="${option.description}"
    />
  </a>
</li>`;
//делаем галерею
const createGalerry = (0, _galleryItemsJsDefault.default).map(createItem).join("");
galleryEl.innerHTML = createGalerry;
///////////////////////
if ("loading" in HTMLImageElement.prototype) {
    console.log("\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043B\u0438\u043D\u0438\u0432\u043A\u0438");
    const lazyLoading = document.querySelectorAll('img[loading="lazy"]');
    lazyLoading.forEach((img)=>{
        img.src = img.dataset.src;
    });
} else {
    console.log("ne \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043B\u0438\u043D\u0438\u0432\u043A\u0438");
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
    script.crossOrigin = "anonymous";
    script.referrerPolicy = "no-referrer";
    document.body.appendChild(script);
}
galleryEl.addEventListener("click", (0, _onOpenModalJsDefault.default));

},{"./js/gallery-items.js":"9C7dK","./js/onOpenModal.js":"h0t5t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9C7dK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = [
    // {
    //   preview:
    //     'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    //   original:
    //     'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    //   description: 'Hokkaido Flower',
    // },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
        description: "Container Haulage Freight"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
        description: "Aerial Beach View"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
        original: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
        description: "Flower Blooms"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
        original: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
        description: "Alpine Mountains"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
        description: "Mountain Lake Sailing"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
        description: "Alpine Spring Meadows"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
        description: "Nature Landscape"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
        description: "Lighthouse Coast Sea"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538__480.jpg",
        original: "https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_1280.jpg",
        description: "Mac"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052__480.jpg",
        original: "https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_1280.jpg",
        description: "barley-field"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__480.jpg",
        original: "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg",
        description: "sunrise"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2012/02/24/16/59/swan-16736__480.jpg",
        original: "https://cdn.pixabay.com/photo/2012/02/24/16/59/swan-16736_1280.jpg",
        description: "swan"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954__480.jpg",
        original: "https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_1280.jpg",
        description: "bird"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__480.jpg",
        original: "https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_1280.jpg",
        description: "dandelion"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056__480.jpg",
        original: "https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_1280.jpg",
        description: "woman"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830__480.jpg",
        original: "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_1280.jpg",
        description: "flowers"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__480.jpg",
        original: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
        description: "flowers"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2014/07/28/20/39/sunset-404072__480.jpg",
        original: "https://cdn.pixabay.com/photo/2014/07/28/20/39/sunset-404072_1280.jpg",
        description: "sunset"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2014/11/27/10/29/mountain-547363__480.jpg",
        original: "https://cdn.pixabay.com/photo/2014/11/27/10/29/mountain-547363_1280.jpg",
        description: "mountain"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2015/01/28/23/35/hills-615429__480.jpg",
        original: "https://cdn.pixabay.com/photo/2015/01/28/23/35/hills-615429_1280.jpg",
        description: "hills"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2015/07/31/06/50/forest-868715__480.jpg",
        original: "https://cdn.pixabay.com/photo/2015/07/31/06/50/forest-868715_1280.jpg",
        description: "forest"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2014/09/07/22/17/forest-438432__480.jpg",
        original: "https://cdn.pixabay.com/photo/2014/09/07/22/17/forest-438432_1280.jpg",
        description: "forest"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287__480.jpg",
        original: "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg",
        description: "mountains"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__480.jpg",
        original: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg",
        description: "road"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828__480.jpg",
        original: "https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_1280.jpg",
        description: "les"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367__480.jpg",
        original: "https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg",
        description: "mountains"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055__480.jpg",
        original: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
        description: "mountains"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736875__480.jpg",
        original: "https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736875_1280.jpg",
        description: "tree"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2015/03/16/10/59/sunset-675847__480.jpg",
        original: "https://cdn.pixabay.com/photo/2015/03/16/10/59/sunset-675847_1280.jpg",
        description: "sunset"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989__480.jpg",
        original: "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg",
        description: "sea"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883__480.jpg",
        original: "https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_1280.jpg",
        description: "woman"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877__480.jpg",
        original: "https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_1280.jpg",
        description: "tree"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2022/07/25/15/18/cat-7344042__480.jpg",
        original: "https://cdn.pixabay.com/photo/2022/07/25/15/18/cat-7344042_1280.jpg",
        description: "cat"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2014/12/21/15/44/raindrops-574971__480.jpg",
        original: "https://cdn.pixabay.com/photo/2014/12/21/15/44/raindrops-574971_1280.jpg",
        description: "raindrops"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2015/11/26/22/28/woman-1064664__480.jpg",
        original: "https://cdn.pixabay.com/photo/2015/11/26/22/28/woman-1064664_1280.jpg",
        description: "woman"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742__480.jpg",
        original: "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg",
        description: "deach"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581__480.jpg",
        original: "https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_1280.jpg",
        description: "beath"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455__480.jpg",
        original: "https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_1280.jpg",
        description: "beath"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2016/03/21/10/44/desert-1270345__480.jpg",
        original: "https://cdn.pixabay.com/photo/2016/03/21/10/44/desert-1270345_1280.jpg",
        description: "desert"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2014/03/05/21/12/desert-279862__480.jpg",
        original: "https://cdn.pixabay.com/photo/2014/03/05/21/12/desert-279862_1280.jpg",
        description: "desert"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2016/09/17/08/24/drought-1675729__480.jpg",
        original: "https://cdn.pixabay.com/photo/2016/09/17/08/24/drought-1675729_1280.jpg",
        description: "drought"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292__480.jpg",
        original: "https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_1280.jpg",
        description: "mountains"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2022/07/25/10/19/mountain-7343375__480.jpg",
        original: "https://cdn.pixabay.com/photo/2022/07/25/10/19/mountain-7343375_1280.jpg",
        description: "mountains"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2022/06/14/00/22/mountain-7260827__480.jpg",
        original: "https://cdn.pixabay.com/photo/2022/06/14/00/22/mountain-7260827_1280.jpg",
        description: "mountains"
    }, 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"h0t5t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _onCloseModal = require("./onCloseModal");
var _onCloseModalDefault = parcelHelpers.interopDefault(_onCloseModal);
var _onCloseModalOverlay = require("./onCloseModalOverlay");
var _onCloseModalOverlayDefault = parcelHelpers.interopDefault(_onCloseModalOverlay);
var _onCloseESC = require("./onCloseESC");
var _onCloseESCDefault = parcelHelpers.interopDefault(_onCloseESC);
var _onScrollImg = require("./onScrollImg");
var _onScrollImgDefault = parcelHelpers.interopDefault(_onScrollImg);
const modalEl = document.querySelector(".js-lightbox");
const imageEl = document.querySelector(".lightbox__image");
const closeBtnEl = document.querySelector(".lightbox__button");
function onOpenModal(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") return;
    //  if (!e.target.classList.contains('gallery__image')) {
    //   return;
    // };
    modalEl.classList.add("is-open");
    imageEl.src = e.target.dataset.source;
    imageEl.alt = e.target.alt;
    closeBtnEl.addEventListener("click", (0, _onCloseModalDefault.default), {
        once: true
    });
    modalEl.addEventListener("click", (0, _onCloseModalOverlayDefault.default));
    window.addEventListener("keydown", (0, _onCloseESCDefault.default));
    window.addEventListener("keydown", (0, _onScrollImgDefault.default));
}
exports.default = onOpenModal;

},{"./onCloseModal":"lDHa5","./onCloseModalOverlay":"5H0XQ","./onCloseESC":"guWrY","./onScrollImg":"9MZbz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lDHa5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _onCloseModalOverlay = require("./onCloseModalOverlay");
var _onCloseModalOverlayDefault = parcelHelpers.interopDefault(_onCloseModalOverlay);
var _onCloseESC = require("./onCloseESC");
var _onCloseESCDefault = parcelHelpers.interopDefault(_onCloseESC);
var _onScrollImg = require("./onScrollImg");
var _onScrollImgDefault = parcelHelpers.interopDefault(_onScrollImg);
const modalEl = document.querySelector(".js-lightbox");
const imageEl = document.querySelector(".lightbox__image");
function onCloseModal() {
    modalEl.classList.remove("is-open");
    imageEl.src = "";
    imageEl.alt = "";
    modalEl.removeEventListener("click", (0, _onCloseModalOverlayDefault.default));
    window.removeEventListener("keydown", (0, _onCloseESCDefault.default));
    window.removeEventListener("keydown", (0, _onScrollImgDefault.default));
}
exports.default = onCloseModal;

},{"./onCloseModalOverlay":"5H0XQ","./onCloseESC":"guWrY","./onScrollImg":"9MZbz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5H0XQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _onCloseModal = require("./onCloseModal");
var _onCloseModalDefault = parcelHelpers.interopDefault(_onCloseModal);
function onCloseModalOverlay(e) {
    if (e.target.classList.contains("lightbox__overlay")) (0, _onCloseModalDefault.default)();
}
exports.default = onCloseModalOverlay;

},{"./onCloseModal":"lDHa5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"guWrY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _onCloseModal = require("./onCloseModal");
var _onCloseModalDefault = parcelHelpers.interopDefault(_onCloseModal);
function onCloseModalESC(e) {
    if (e.key !== "Escape") return;
    (0, _onCloseModalDefault.default)();
}
exports.default = onCloseModalESC;

},{"./onCloseModal":"lDHa5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9MZbz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _galleryItemsJs = require("./gallery-items.js");
var _galleryItemsJsDefault = parcelHelpers.interopDefault(_galleryItemsJs);
const imageEl = document.querySelector(".lightbox__image");
function onScrollImg(e) {
    let imgIndex = (0, _galleryItemsJsDefault.default).findIndex((img)=>img.original === imageEl.src);
    if (e.key === "ArrowLeft") {
        if (imgIndex === 0) imgIndex = (0, _galleryItemsJsDefault.default).length - 1;
        else imgIndex -= 1;
    } else if (e.key === "ArrowRight") {
        if (imgIndex === (0, _galleryItemsJsDefault.default).length - 1) imgIndex = 0;
        else imgIndex += 1;
    }
    imageEl.src = (0, _galleryItemsJsDefault.default)[imgIndex].original;
    imageEl.alt = (0, _galleryItemsJsDefault.default)[imgIndex].description;
}
exports.default = onScrollImg;

},{"./gallery-items.js":"9C7dK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ShInH","8lqZg"], "8lqZg", "parcelRequire84e4")

//# sourceMappingURL=index.975ef6c8.js.map
