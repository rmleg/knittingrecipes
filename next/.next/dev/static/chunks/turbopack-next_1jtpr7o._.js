(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    {"otherChunks":["static/chunks/[turbopack]_browser_dev_hmr-client_hmr-client_ts_09a6rn8._.js","static/chunks/07ob_next_dist_compiled_next-devtools_index_106ute-.js","static/chunks/07ob_next_dist_compiled_react-dom_cjs_react-dom-client_development_1oduz9j.js","static/chunks/07ob_next_dist_compiled_react-dom_cjs_react-dom_development_15g84x5.js","static/chunks/07ob_next_dist_compiled_react-dom_0s1brhu._.js","static/chunks/07ob_next_dist_compiled_react-server-dom-turbopack_0kwip6u._.js","static/chunks/07ob_next_dist_compiled_1ko7z0r._.js","static/chunks/07ob_next_dist_client_0v832fs._.js","static/chunks/07ob_next_dist_1wdmn35._.js","static/chunks/1v6e__pnpm_1amge65._.js"],"runtimeModuleIds":["[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/@next/react-refresh-utils/dist/runtime.js [app-client] (ecmascript)","[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-next-turbopack.js [app-client] (ecmascript)"]}
]);
(() => {
if (!Array.isArray(globalThis["TURBOPACK"])) {
    return;
}

const CHUNK_BASE_PATH = "/_next/";
const RELATIVE_ROOT_PATH = "/ROOT";
const RUNTIME_PUBLIC_PATH = "/_next/";
const ASSET_SUFFIX = getAssetSuffixFromScriptSrc();
const WORKER_FORWARDED_GLOBALS = ["NEXT_DEPLOYMENT_ID","NEXT_CLIENT_ASSET_SUFFIX"];
/**
 * This file contains runtime types and functions that are shared between all
 * TurboPack ECMAScript runtimes.
 *
 * It will be prepended to the runtime code of each runtime.
 */ /* eslint-disable @typescript-eslint/no-unused-vars */ /// <reference path="./runtime-types.d.ts" />
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
/**
 * Describes why a module was instantiated.
 * Shared between browser and Node.js runtimes.
 */ var SourceType = /*#__PURE__*/ function(SourceType) {
    /**
   * The module was instantiated because it was included in an evaluated chunk's
   * runtime.
   * SourceData is a ChunkPath.
   */ SourceType[SourceType["Runtime"] = 0] = "Runtime";
    /**
   * The module was instantiated because a parent module imported it.
   * SourceData is a ModuleId.
   */ SourceType[SourceType["Parent"] = 1] = "Parent";
    /**
   * The module was instantiated because it was included in a chunk's hot module
   * update.
   * SourceData is an array of ModuleIds or undefined.
   */ SourceType[SourceType["Update"] = 2] = "Update";
    return SourceType;
}(SourceType || {});
/**
 * Flag indicating which module object type to create when a module is merged. Set to `true`
 * by each runtime that uses ModuleWithDirection (browser dev-base.ts, nodejs dev-base.ts,
 * nodejs build-base.ts). Browser production (build-base.ts) leaves it as `false` since it
 * uses plain Module objects.
 */ var createModuleWithDirectionFlag = false;
var REEXPORTED_OBJECTS = new WeakMap();
/**
 * Constructs the `__turbopack_context__` object for a module.
 */ function Context(module, exports) {
    this.m = module;
    // We need to store this here instead of accessing it from the module object to:
    // 1. Make it available to factories directly, since we rewrite `this` to
    //    `__turbopack_context__.e` in CJS modules.
    // 2. Support async modules which rewrite `module.exports` to a promise, so we
    //    can still access the original exports object from functions like
    //    `esmExport`
    // Ideally we could find a new approach for async modules and drop this property altogether.
    this.e = exports;
}
var contextPrototype = Context.prototype;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var toStringTag = typeof Symbol !== 'undefined' && Symbol.toStringTag;
function defineProp(obj, name, options) {
    if (!hasOwnProperty.call(obj, name)) Object.defineProperty(obj, name, options);
}
function getOverwrittenModule(moduleCache, id) {
    var module = moduleCache[id];
    if (!module) {
        if (createModuleWithDirectionFlag) {
            // set in development modes for hmr support
            module = createModuleWithDirection(id);
        } else {
            module = createModuleObject(id);
        }
        moduleCache[id] = module;
    }
    return module;
}
/**
 * Creates the module object. Only done here to ensure all module objects have the same shape.
 */ function createModuleObject(id) {
    return {
        exports: {},
        error: undefined,
        id: id,
        namespaceObject: undefined
    };
}
function createModuleWithDirection(id) {
    return {
        exports: {},
        error: undefined,
        id: id,
        namespaceObject: undefined,
        parents: [],
        children: []
    };
}
var BindingTag_Value = 0;
/**
 * Adds the getters to the exports object.
 */ function esm(exports, bindings) {
    defineProp(exports, '__esModule', {
        value: true
    });
    if (toStringTag) defineProp(exports, toStringTag, {
        value: 'Module'
    });
    var i = 0;
    while(i < bindings.length){
        var propName = bindings[i++];
        var tagOrFunction = bindings[i++];
        if (typeof tagOrFunction === 'number') {
            if (tagOrFunction === BindingTag_Value) {
                defineProp(exports, propName, {
                    value: bindings[i++],
                    enumerable: true,
                    writable: false
                });
            } else {
                throw new Error("unexpected tag: ".concat(tagOrFunction));
            }
        } else {
            var getterFn = tagOrFunction;
            if (typeof bindings[i] === 'function') {
                var setterFn = bindings[i++];
                defineProp(exports, propName, {
                    get: getterFn,
                    set: setterFn,
                    enumerable: true
                });
            } else {
                defineProp(exports, propName, {
                    get: getterFn,
                    enumerable: true
                });
            }
        }
    }
    Object.seal(exports);
}
/**
 * Makes the module an ESM with exports
 */ function esmExport(bindings, id) {
    var module;
    var exports;
    if (id != null) {
        module = getOverwrittenModule(this.c, id);
        exports = module.exports;
    } else {
        module = this.m;
        exports = this.e;
    }
    module.namespaceObject = exports;
    esm(exports, bindings);
}
contextPrototype.s = esmExport;
function ensureDynamicExports(module, exports) {
    var reexportedObjects = REEXPORTED_OBJECTS.get(module);
    if (!reexportedObjects) {
        REEXPORTED_OBJECTS.set(module, reexportedObjects = []);
        module.exports = module.namespaceObject = new Proxy(exports, {
            get: function get(target, prop) {
                if (hasOwnProperty.call(target, prop) || prop === 'default' || prop === '__esModule') {
                    return Reflect.get(target, prop);
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = reexportedObjects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var obj = _step.value;
                        var value = Reflect.get(obj, prop);
                        if (value !== undefined) return value;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return undefined;
            },
            ownKeys: function ownKeys(target) {
                var keys = Reflect.ownKeys(target);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = reexportedObjects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var obj = _step.value;
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = Reflect.ownKeys(obj)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var key = _step1.value;
                                if (key !== 'default' && !keys.includes(key)) keys.push(key);
                            }
                        } catch (err) {
                            _didIteratorError1 = true;
                            _iteratorError1 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally{
                                if (_didIteratorError1) {
                                    throw _iteratorError1;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return keys;
            }
        });
    }
    return reexportedObjects;
}
/**
 * Dynamically exports properties from an object
 */ function dynamicExport(object, id) {
    var module;
    var exports;
    if (id != null) {
        module = getOverwrittenModule(this.c, id);
        exports = module.exports;
    } else {
        module = this.m;
        exports = this.e;
    }
    var reexportedObjects = ensureDynamicExports(module, exports);
    if ((typeof object === "undefined" ? "undefined" : _type_of(object)) === 'object' && object !== null) {
        reexportedObjects.push(object);
    }
}
contextPrototype.j = dynamicExport;
function exportValue(value, id) {
    var module;
    if (id != null) {
        module = getOverwrittenModule(this.c, id);
    } else {
        module = this.m;
    }
    module.exports = value;
}
contextPrototype.v = exportValue;
function exportNamespace(namespace, id) {
    var module;
    if (id != null) {
        module = getOverwrittenModule(this.c, id);
    } else {
        module = this.m;
    }
    module.exports = module.namespaceObject = namespace;
}
contextPrototype.n = exportNamespace;
function createGetter(obj, key) {
    return function() {
        return obj[key];
    };
}
/**
 * @returns prototype of the object
 */ var getProto = Object.getPrototypeOf ? function(obj) {
    return Object.getPrototypeOf(obj);
} : function(obj) {
    return obj.__proto__;
};
/** Prototypes that are not expanded for exports */ var LEAF_PROTOTYPES = [
    null,
    getProto({}),
    getProto([]),
    getProto(getProto)
];
/**
 * @param raw
 * @param ns
 * @param allowExportDefault
 *   * `false`: will have the raw module as default export
 *   * `true`: will have the default property as default export
 */ function interopEsm(raw, ns, allowExportDefault) {
    var bindings = [];
    var defaultLocation = -1;
    for(var current = raw; ((typeof current === "undefined" ? "undefined" : _type_of(current)) === 'object' || typeof current === 'function') && !LEAF_PROTOTYPES.includes(current); current = getProto(current)){
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.getOwnPropertyNames(current)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var key = _step.value;
                bindings.push(key, createGetter(raw, key));
                if (defaultLocation === -1 && key === 'default') {
                    defaultLocation = bindings.length - 1;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    // this is not really correct
    // we should set the `default` getter if the imported module is a `.cjs file`
    if (!(allowExportDefault && defaultLocation >= 0)) {
        // Replace the binding with one for the namespace itself in order to preserve iteration order.
        if (defaultLocation >= 0) {
            // Replace the getter with the value
            bindings.splice(defaultLocation, 1, BindingTag_Value, raw);
        } else {
            bindings.push('default', BindingTag_Value, raw);
        }
    }
    esm(ns, bindings);
    return ns;
}
function createNS(raw) {
    if (typeof raw === 'function') {
        return function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return raw.apply(this, args);
        };
    } else {
        return Object.create(null);
    }
}
function esmImport(id) {
    var module = getOrInstantiateModuleFromParent(id, this.m);
    // any ES module has to have `module.namespaceObject` defined.
    if (module.namespaceObject) return module.namespaceObject;
    // only ESM can be an async module, so we don't need to worry about exports being a promise here.
    var raw = module.exports;
    return module.namespaceObject = interopEsm(raw, createNS(raw), raw && raw.__esModule);
}
contextPrototype.i = esmImport;
function asyncLoader(moduleId) {
    var loader = this.r(moduleId);
    return loader(esmImport.bind(this));
}
contextPrototype.A = asyncLoader;
// Add a simple runtime require so that environments without one can still pass
// `typeof require` CommonJS checks so that exports are correctly registered.
var runtimeRequire = // @ts-ignore
typeof require === 'function' ? require : function require1() {
    throw new Error('Unexpected use of runtime require');
};
contextPrototype.t = runtimeRequire;
function commonJsRequire(id) {
    return getOrInstantiateModuleFromParent(id, this.m).exports;
}
contextPrototype.r = commonJsRequire;
/**
 * Remove fragments and query parameters since they are never part of the context map keys
 *
 * This matches how we parse patterns at resolving time.  Arguably we should only do this for
 * strings passed to `import` but the resolve does it for `import` and `require` and so we do
 * here as well.
 */ function parseRequest(request) {
    // Per the URI spec fragments can contain `?` characters, so we should trim it off first
    // https://datatracker.ietf.org/doc/html/rfc3986#section-3.5
    var hashIndex = request.indexOf('#');
    if (hashIndex !== -1) {
        request = request.substring(0, hashIndex);
    }
    var queryIndex = request.indexOf('?');
    if (queryIndex !== -1) {
        request = request.substring(0, queryIndex);
    }
    return request;
}
/**
 * `require.context` and require/import expression runtime.
 */ function moduleContext(map) {
    function moduleContext(id) {
        id = parseRequest(id);
        if (hasOwnProperty.call(map, id)) {
            return map[id].module();
        }
        var e = new Error("Cannot find module '".concat(id, "'"));
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    }
    moduleContext.keys = function() {
        return Object.keys(map);
    };
    moduleContext.resolve = function(id) {
        id = parseRequest(id);
        if (hasOwnProperty.call(map, id)) {
            return map[id].id();
        }
        var e = new Error("Cannot find module '".concat(id, "'"));
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    };
    moduleContext.import = function(id) {
        return _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            moduleContext(id)
                        ];
                    case 1:
                        return [
                            2,
                            _state.sent()
                        ];
                }
            });
        })();
    };
    return moduleContext;
}
contextPrototype.f = moduleContext;
/**
 * Returns the path of a chunk defined by its data.
 */ function getChunkPath(chunkData) {
    return typeof chunkData === 'string' ? chunkData : chunkData.path;
}
function isPromise(maybePromise) {
    return maybePromise != null && (typeof maybePromise === "undefined" ? "undefined" : _type_of(maybePromise)) === 'object' && 'then' in maybePromise && typeof maybePromise.then === 'function';
}
function isAsyncModuleExt(obj) {
    return turbopackQueues in obj;
}
function createPromise() {
    var resolve;
    var reject;
    var promise = new Promise(function(res, rej) {
        reject = rej;
        resolve = res;
    });
    return {
        promise: promise,
        resolve: resolve,
        reject: reject
    };
}
// Load the CompressedmoduleFactories of a chunk into the `moduleFactories` Map.
// The CompressedModuleFactories format is
// - 1 or more module ids
// - a module factory function
// So walking this is a little complex but the flat structure is also fast to
// traverse, we can use `typeof` operators to distinguish the two cases.
function installCompressedModuleFactories(chunkModules, offset, moduleFactories, newModuleId) {
    var i = offset;
    while(i < chunkModules.length){
        var end = i + 1;
        // Find our factory function
        while(end < chunkModules.length && typeof chunkModules[end] !== 'function'){
            end++;
        }
        if (end === chunkModules.length) {
            throw new Error('malformed chunk format, expected a factory function');
        }
        // Install the factory for each module ID that doesn't already have one.
        // When some IDs in this group already have a factory, reuse that existing
        // group factory for the missing IDs to keep all IDs in the group consistent.
        // Otherwise, install the factory from this chunk.
        var moduleFactoryFn = chunkModules[end];
        var existingGroupFactory = undefined;
        for(var j = i; j < end; j++){
            var id = chunkModules[j];
            var existingFactory = moduleFactories.get(id);
            if (existingFactory) {
                existingGroupFactory = existingFactory;
                break;
            }
        }
        var factoryToInstall = existingGroupFactory !== null && existingGroupFactory !== void 0 ? existingGroupFactory : moduleFactoryFn;
        var didInstallFactory = false;
        for(var j1 = i; j1 < end; j1++){
            var id1 = chunkModules[j1];
            if (!moduleFactories.has(id1)) {
                if (!didInstallFactory) {
                    if (factoryToInstall === moduleFactoryFn) {
                        applyModuleFactoryName(moduleFactoryFn);
                    }
                    didInstallFactory = true;
                }
                moduleFactories.set(id1, factoryToInstall);
                newModuleId === null || newModuleId === void 0 ? void 0 : newModuleId(id1);
            }
        }
        i = end + 1; // end is pointing at the last factory advance to the next id or the end of the array.
    }
}
// everything below is adapted from webpack
// https://github.com/webpack/webpack/blob/6be4065ade1e252c1d8dcba4af0f43e32af1bdc1/lib/runtime/AsyncModuleRuntimeModule.js#L13
var turbopackQueues = Symbol('turbopack queues');
var turbopackExports = Symbol('turbopack exports');
var turbopackError = Symbol('turbopack error');
function resolveQueue(queue) {
    if (queue && queue.status !== 1) {
        queue.status = 1;
        queue.forEach(function(fn) {
            return fn.queueCount--;
        });
        queue.forEach(function(fn) {
            return fn.queueCount-- ? fn.queueCount++ : fn();
        });
    }
}
function wrapDeps(deps) {
    return deps.map(function(dep) {
        if (dep !== null && (typeof dep === "undefined" ? "undefined" : _type_of(dep)) === 'object') {
            if (isAsyncModuleExt(dep)) return dep;
            if (isPromise(dep)) {
                var queue = Object.assign([], {
                    status: 0
                });
                var _obj;
                var obj = (_obj = {}, _define_property(_obj, turbopackExports, {}), _define_property(_obj, turbopackQueues, function(fn) {
                    return fn(queue);
                }), _obj);
                dep.then(function(res) {
                    obj[turbopackExports] = res;
                    resolveQueue(queue);
                }, function(err) {
                    obj[turbopackError] = err;
                    resolveQueue(queue);
                });
                return obj;
            }
        }
        var _obj1;
        return _obj1 = {}, _define_property(_obj1, turbopackExports, dep), _define_property(_obj1, turbopackQueues, function() {}), _obj1;
    });
}
function asyncModule(body, hasAwait) {
    var module = this.m;
    var queue = hasAwait ? Object.assign([], {
        status: -1
    }) : undefined;
    var depQueues = new Set();
    var _createPromise = createPromise(), resolve = _createPromise.resolve, reject = _createPromise.reject, rawPromise = _createPromise.promise;
    var _obj;
    var promise = Object.assign(rawPromise, (_obj = {}, _define_property(_obj, turbopackExports, module.exports), _define_property(_obj, turbopackQueues, function(fn) {
        queue && fn(queue);
        depQueues.forEach(fn);
        promise['catch'](function() {});
    }), _obj));
    var attributes = {
        get: function get() {
            return promise;
        },
        set: function set(v) {
            // Calling `esmExport` leads to this.
            if (v !== promise) {
                promise[turbopackExports] = v;
            }
        }
    };
    Object.defineProperty(module, 'exports', attributes);
    Object.defineProperty(module, 'namespaceObject', attributes);
    function handleAsyncDependencies(deps) {
        var currentDeps = wrapDeps(deps);
        var getResult = function getResult() {
            return currentDeps.map(function(d) {
                if (d[turbopackError]) throw d[turbopackError];
                return d[turbopackExports];
            });
        };
        var _createPromise = createPromise(), promise = _createPromise.promise, resolve = _createPromise.resolve;
        var fn = Object.assign(function() {
            return resolve(getResult);
        }, {
            queueCount: 0
        });
        function fnQueue(q) {
            if (q !== queue && !depQueues.has(q)) {
                depQueues.add(q);
                if (q && q.status === 0) {
                    fn.queueCount++;
                    q.push(fn);
                }
            }
        }
        currentDeps.map(function(dep) {
            return dep[turbopackQueues](fnQueue);
        });
        return fn.queueCount ? promise : getResult();
    }
    function asyncResult(err) {
        if (err) {
            reject(promise[turbopackError] = err);
        } else {
            resolve(promise[turbopackExports]);
        }
        resolveQueue(queue);
    }
    body(handleAsyncDependencies, asyncResult);
    if (queue && queue.status === -1) {
        queue.status = 0;
    }
}
contextPrototype.a = asyncModule;
/**
 * A pseudo "fake" URL object to resolve to its relative path.
 *
 * When UrlRewriteBehavior is set to relative, calls to the `new URL()` will construct url without base using this
 * runtime function to generate context-agnostic urls between different rendering context, i.e ssr / client to avoid
 * hydration mismatch.
 *
 * This is based on webpack's existing implementation:
 * https://github.com/webpack/webpack/blob/87660921808566ef3b8796f8df61bd79fc026108/lib/runtime/RelativeUrlRuntimeModule.js
 */ var relativeURL = function relativeURL(inputUrl) {
    var realUrl = new URL(inputUrl, 'x:/');
    var values = {};
    for(var key in realUrl)values[key] = realUrl[key];
    values.href = inputUrl;
    values.pathname = inputUrl.replace(/[?#].*/, '');
    values.origin = values.protocol = '';
    values.toString = values.toJSON = function() {
        for(var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++){
            _args[_key] = arguments[_key];
        }
        return inputUrl;
    };
    for(var key1 in values)Object.defineProperty(this, key1, {
        enumerable: true,
        configurable: true,
        value: values[key1]
    });
};
relativeURL.prototype = URL.prototype;
contextPrototype.U = relativeURL;
/**
 * Utility function to ensure all variants of an enum are handled.
 */ function invariant(never, computeMessage) {
    throw new Error("Invariant: ".concat(computeMessage(never)));
}
/**
 * Constructs an error message for when a module factory is not available.
 */ function factoryNotAvailableMessage(moduleId, sourceType, sourceData) {
    var instantiationReason;
    switch(sourceType){
        case 0:
            instantiationReason = "as a runtime entry of chunk ".concat(sourceData);
            break;
        case 1:
            instantiationReason = "because it was required from module ".concat(sourceData);
            break;
        case 2:
            instantiationReason = 'because of an HMR update';
            break;
        default:
            invariant(sourceType, function(sourceType) {
                return "Unknown source type: ".concat(sourceType);
            });
    }
    return "Module ".concat(moduleId, " was instantiated ").concat(instantiationReason, ", but the module factory is not available.");
}
/**
 * A stub function to make `require` available but non-functional in ESM.
 */ function requireStub(_moduleId) {
    throw new Error('dynamic usage of require is not supported');
}
contextPrototype.z = requireStub;
// Make `globalThis` available to the module in a way that cannot be shadowed by a local variable.
contextPrototype.g = globalThis;
function applyModuleFactoryName(factory) {
    // Give the module factory a nice name to improve stack traces.
    Object.defineProperty(factory, 'name', {
        value: 'module evaluation'
    });
}
/**
 * This file contains runtime types and functions that are shared between all
 * Turbopack *browser* ECMAScript runtimes.
 *
 * It will be appended to the runtime code of each runtime right after the
 * shared runtime utils.
 */ /* eslint-disable @typescript-eslint/no-unused-vars */ /// <reference path="../base/globals.d.ts" />
/// <reference path="../../../shared/runtime/runtime-utils.ts" />
// Used in WebWorkers to tell the runtime about the chunk suffix
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var browserContextPrototype = Context.prototype;
var moduleFactories = new Map();
contextPrototype.M = moduleFactories;
var availableModules = new Map();
var availableModuleChunks = new Map();
function loadChunk(chunkData) {
    return loadChunkInternal(SourceType.Parent, this.m.id, chunkData);
}
browserContextPrototype.l = loadChunk;
function loadInitialChunk(chunkPath, chunkData) {
    return loadChunkInternal(SourceType.Runtime, chunkPath, chunkData);
}
function loadChunkInternal(sourceType, sourceData, chunkData) {
    return _async_to_generator(function() {
        var includedList, modulesPromises, includedModuleChunksList, moduleChunksPromises, promise, moduleChunksToLoad, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, moduleChunk, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, moduleChunkToLoad, promise1, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, includedModuleChunk, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, included;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (typeof chunkData === 'string') {
                        return [
                            2,
                            loadChunkPath(sourceType, sourceData, chunkData)
                        ];
                    }
                    includedList = chunkData.included || [];
                    modulesPromises = includedList.map(function(included) {
                        if (moduleFactories.has(included)) return true;
                        return availableModules.get(included);
                    });
                    if (!(modulesPromises.length > 0 && modulesPromises.every(function(p) {
                        return p;
                    }))) return [
                        3,
                        2
                    ];
                    // When all included items are already loaded or loading, we can skip loading ourselves
                    return [
                        4,
                        Promise.all(modulesPromises)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
                case 2:
                    includedModuleChunksList = chunkData.moduleChunks || [];
                    moduleChunksPromises = includedModuleChunksList.map(function(included) {
                        // TODO(alexkirsz) Do we need this check?
                        // if (moduleFactories[included]) return true;
                        return availableModuleChunks.get(included);
                    }).filter(function(p) {
                        return p;
                    });
                    if (!(moduleChunksPromises.length > 0)) return [
                        3,
                        5
                    ];
                    if (!(moduleChunksPromises.length === includedModuleChunksList.length)) return [
                        3,
                        4
                    ];
                    // When all included module chunks are already loaded or loading, we can skip loading ourselves
                    return [
                        4,
                        Promise.all(moduleChunksPromises)
                    ];
                case 3:
                    _state.sent();
                    return [
                        2
                    ];
                case 4:
                    moduleChunksToLoad = new Set();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = includedModuleChunksList[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            moduleChunk = _step.value;
                            if (!availableModuleChunks.has(moduleChunk)) {
                                moduleChunksToLoad.add(moduleChunk);
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(_iterator1 = moduleChunksToLoad[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            moduleChunkToLoad = _step1.value;
                            promise1 = loadChunkPath(sourceType, sourceData, moduleChunkToLoad);
                            availableModuleChunks.set(moduleChunkToLoad, promise1);
                            moduleChunksPromises.push(promise1);
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                    promise = Promise.all(moduleChunksPromises);
                    return [
                        3,
                        6
                    ];
                case 5:
                    promise = loadChunkPath(sourceType, sourceData, chunkData.path);
                    _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                    try {
                        // Mark all included module chunks as loading if they are not already loaded or loading.
                        for(_iterator2 = includedModuleChunksList[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                            includedModuleChunk = _step2.value;
                            if (!availableModuleChunks.has(includedModuleChunk)) {
                                availableModuleChunks.set(includedModuleChunk, promise);
                            }
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                _iterator2.return();
                            }
                        } finally{
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                    _state.label = 6;
                case 6:
                    _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                    try {
                        for(_iterator3 = includedList[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                            included = _step3.value;
                            if (!availableModules.has(included)) {
                                // It might be better to race old and new promises, but it's rare that the new promise will be faster than a request started earlier.
                                // In production it's even more rare, because the chunk optimization tries to deduplicate modules anyway.
                                availableModules.set(included, promise);
                            }
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                                _iterator3.return();
                            }
                        } finally{
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }
                    return [
                        4,
                        promise
                    ];
                case 7:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    })();
}
var loadedChunk = Promise.resolve(undefined);
var instrumentedBackendLoadChunks = new WeakMap();
// Do not make this async. React relies on referential equality of the returned Promise.
function loadChunkByUrl(chunkUrl) {
    return loadChunkByUrlInternal(SourceType.Parent, this.m.id, chunkUrl);
}
browserContextPrototype.L = loadChunkByUrl;
// Do not make this async. React relies on referential equality of the returned Promise.
function loadChunkByUrlInternal(sourceType, sourceData, chunkUrl) {
    var thenable = BACKEND.loadChunkCached(sourceType, chunkUrl);
    var entry = instrumentedBackendLoadChunks.get(thenable);
    if (entry === undefined) {
        var resolve = instrumentedBackendLoadChunks.set.bind(instrumentedBackendLoadChunks, thenable, loadedChunk);
        entry = thenable.then(resolve).catch(function(cause) {
            var loadReason;
            switch(sourceType){
                case SourceType.Runtime:
                    loadReason = "as a runtime dependency of chunk ".concat(sourceData);
                    break;
                case SourceType.Parent:
                    loadReason = "from module ".concat(sourceData);
                    break;
                case SourceType.Update:
                    loadReason = 'from an HMR update';
                    break;
                default:
                    invariant(sourceType, function(sourceType) {
                        return "Unknown source type: ".concat(sourceType);
                    });
            }
            var error = new Error("Failed to load chunk ".concat(chunkUrl, " ").concat(loadReason).concat(cause ? ": ".concat(cause) : ''), cause ? {
                cause: cause
            } : undefined);
            error.name = 'ChunkLoadError';
            throw error;
        });
        instrumentedBackendLoadChunks.set(thenable, entry);
    }
    return entry;
}
// Do not make this async. React relies on referential equality of the returned Promise.
function loadChunkPath(sourceType, sourceData, chunkPath) {
    var url = getChunkRelativeUrl(chunkPath);
    return loadChunkByUrlInternal(sourceType, sourceData, url);
}
/**
 * Returns an absolute url to an asset.
 */ function resolvePathFromModule(moduleId) {
    var _ref;
    var exported = this.r(moduleId);
    return (_ref = exported === null || exported === void 0 ? void 0 : exported.default) !== null && _ref !== void 0 ? _ref : exported;
}
browserContextPrototype.R = resolvePathFromModule;
/**
 * no-op for browser
 * @param modulePath
 */ function resolveAbsolutePath(modulePath) {
    return "/ROOT/".concat(modulePath !== null && modulePath !== void 0 ? modulePath : '');
}
browserContextPrototype.P = resolveAbsolutePath;
/**
 * Exports a URL with the static suffix appended.
 */ function exportUrl(url, id) {
    exportValue.call(this, "".concat(url).concat(ASSET_SUFFIX), id);
}
browserContextPrototype.q = exportUrl;
/**
 * Creates a worker by instantiating the given WorkerConstructor with the
 * appropriate URL and options.
 *
 * The entrypoint is a pre-compiled worker runtime file. The params configure
 * which module chunks to load and which module to run as the entry point.
 *
 * The params are a JSON array of the following structure:
 * `[TURBOPACK_NEXT_CHUNK_URLS, ASSET_SUFFIX, ...WORKER_FORWARDED_GLOBALS values]`
 *
 * @param WorkerConstructor The Worker or SharedWorker constructor
 * @param entrypoint URL path to the worker entrypoint chunk
 * @param moduleChunks list of module chunk paths to load
 * @param workerOptions options to pass to the Worker constructor (optional)
 */ function createWorker(WorkerConstructor, entrypoint, moduleChunks, workerOptions) {
    var isSharedWorker = WorkerConstructor.name === 'SharedWorker';
    var chunkUrls = moduleChunks.map(function(chunk) {
        return getChunkRelativeUrl(chunk);
    }).reverse();
    var params = [
        chunkUrls,
        ASSET_SUFFIX
    ];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = WORKER_FORWARDED_GLOBALS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var globalName = _step.value;
            params.push(globalThis[globalName]);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var url = new URL(getChunkRelativeUrl(entrypoint), location.origin);
    var paramsJson = JSON.stringify(params);
    if (isSharedWorker) {
        url.searchParams.set('params', paramsJson);
    } else {
        url.hash = '#params=' + encodeURIComponent(paramsJson);
    }
    // Remove type: "module" from options since our worker entrypoint is not a module
    var options = workerOptions ? _object_spread_props(_object_spread({}, workerOptions), {
        type: undefined
    }) : undefined;
    return new WorkerConstructor(url, options);
}
browserContextPrototype.b = createWorker;
/**
 * Instantiates a runtime module.
 */ function instantiateRuntimeModule(moduleId, chunkPath) {
    return instantiateModule(moduleId, SourceType.Runtime, chunkPath);
}
/**
 * Returns the URL relative to the origin where a chunk can be fetched from.
 */ function getChunkRelativeUrl(chunkPath) {
    return "".concat(CHUNK_BASE_PATH).concat(chunkPath.split('/').map(function(p) {
        return encodeURIComponent(p);
    }).join('/')).concat(ASSET_SUFFIX);
}
function getPathFromScript(chunkScript) {
    if (typeof chunkScript === 'string') {
        return chunkScript;
    }
    var chunkUrl = chunkScript.src;
    var src = decodeURIComponent(chunkUrl.replace(/[?#].*$/, ''));
    var path = src.startsWith(CHUNK_BASE_PATH) ? src.slice(CHUNK_BASE_PATH.length) : src;
    return path;
}
/**
 * Return the ChunkUrl from a ChunkScript.
 */ function getUrlFromScript(chunk) {
    if (typeof chunk === 'string') {
        return getChunkRelativeUrl(chunk);
    } else {
        // This is already exactly what we want
        return chunk.src;
    }
}
/**
 * Determine the chunk to register. Note that this function has side-effects!
 */ function getChunkFromRegistration(chunk) {
    if (typeof chunk === 'string') {
        return chunk;
    } else if (!chunk) {
        if (typeof TURBOPACK_NEXT_CHUNK_URLS !== 'undefined') {
            return {
                src: TURBOPACK_NEXT_CHUNK_URLS.pop()
            };
        } else {
            throw new Error('chunk path empty but not in a worker');
        }
    } else {
        return {
            src: chunk.getAttribute('src')
        };
    }
}
var regexJsUrl = /\.js(?:\?[^#]*)?(?:#.*)?$/;
/**
 * Checks if a given path/URL ends with .js, optionally followed by ?query or #fragment.
 */ function isJs(chunkUrlOrPath) {
    return regexJsUrl.test(chunkUrlOrPath);
}
var regexCssUrl = /\.css(?:\?[^#]*)?(?:#.*)?$/;
/**
 * Checks if a given path/URL ends with .css, optionally followed by ?query or #fragment.
 */ function isCss(chunkUrl) {
    return regexCssUrl.test(chunkUrl);
}
function loadWebAssembly(chunkPath, edgeModule, importsObj) {
    return BACKEND.loadWebAssembly(SourceType.Parent, this.m.id, chunkPath, edgeModule, importsObj);
}
contextPrototype.w = loadWebAssembly;
function loadWebAssemblyModule(chunkPath, edgeModule) {
    return BACKEND.loadWebAssemblyModule(SourceType.Parent, this.m.id, chunkPath, edgeModule);
}
contextPrototype.u = loadWebAssemblyModule;
/// <reference path="./runtime-utils.ts" />
/// <reference path="./runtime-types.d.ts" />
/// <reference path="./dev-extensions.ts" />
/// <reference path="./dev-protocol.d.ts" />
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
/**
 * Shared HMR (Hot Module Replacement) implementation.
 *
 * This file contains the complete HMR implementation that's shared between
 * browser and Node.js runtimes. It manages module hot state, dependency
 * tracking, the module.hot API, and the full HMR update flow.
 */ /**
 * The development module cache shared across the runtime.
 * Browser runtime declares this directly.
 * Node.js runtime assigns globalThis.__turbopack_module_cache__ to this.
 */ var devModuleCache;
/**
 * Module IDs that are instantiated as part of the runtime of a chunk.
 */ var runtimeModules;
/**
 * Maps module IDs to persisted data between executions of their hot module
 * implementation (`hot.data`).
 */ var moduleHotData = new Map();
/**
 * Maps module instances to their hot module state.
 * Uses WeakMap so it works with both HotModule and ModuleWithDirection.
 */ var moduleHotState = new WeakMap();
/**
 * Modules that call `module.hot.invalidate()` (while being updated).
 */ var queuedInvalidatedModules = new Set();
var UpdateApplyError = /*#__PURE__*/ function(Error1) {
    "use strict";
    _inherits(UpdateApplyError, Error1);
    function UpdateApplyError(message, dependencyChain) {
        _class_call_check(this, UpdateApplyError);
        var _this;
        _this = _call_super(this, UpdateApplyError, [
            message
        ]), _define_property(_this, "name", 'UpdateApplyError'), _define_property(_this, "dependencyChain", void 0);
        _this.dependencyChain = dependencyChain;
        return _this;
    }
    return UpdateApplyError;
}(_wrap_native_super(Error));
/**
 * Records parent-child relationship when a module imports another.
 * Should be called during module instantiation.
 */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
function trackModuleImport(parentModule, childModuleId, childModule) {
    // Record that parent imports child
    if (parentModule.children.indexOf(childModuleId) === -1) {
        parentModule.children.push(childModuleId);
    }
    // Record that child is imported by parent
    if (childModule && childModule.parents.indexOf(parentModule.id) === -1) {
        childModule.parents.push(parentModule.id);
    }
}
function formatDependencyChain(dependencyChain) {
    return "Dependency chain: ".concat(dependencyChain.join(' -> '));
}
/**
 * Walks the dependency tree to find all modules affected by a change.
 * Returns information about whether the update can be accepted and which
 * modules need to be invalidated.
 *
 * @param moduleId - The module that changed
 * @param autoAcceptRootModules - If true, root modules auto-accept updates without explicit module.hot.accept().
 *                           This is used for server-side HMR where pages auto-accept at the top level.
 */ function getAffectedModuleEffects(moduleId, autoAcceptRootModules) {
    var outdatedModules = new Set();
    var outdatedDependencies = new Map();
    var queue = [
        {
            moduleId: moduleId,
            dependencyChain: []
        }
    ];
    var nextItem;
    while(nextItem = queue.shift()){
        var _$moduleId = nextItem.moduleId, dependencyChain = nextItem.dependencyChain;
        if (_$moduleId != null) {
            if (outdatedModules.has(_$moduleId)) {
                continue;
            }
            outdatedModules.add(_$moduleId);
        }
        // We've arrived at the runtime of the chunk, which means that nothing
        // else above can accept this update.
        if (_$moduleId === undefined) {
            if (autoAcceptRootModules) {
                return {
                    type: 'accepted',
                    moduleId: _$moduleId,
                    outdatedModules: outdatedModules,
                    outdatedDependencies: outdatedDependencies
                };
            }
            return {
                type: 'unaccepted',
                dependencyChain: dependencyChain
            };
        }
        var module = devModuleCache[_$moduleId];
        var hotState = moduleHotState.get(module);
        if (// The module is not in the cache. Since this is a "modified" update,
        // it means that the module was never instantiated before.
        !module || hotState.selfAccepted && !hotState.selfInvalidated) {
            continue;
        }
        if (hotState.selfDeclined) {
            return {
                type: 'self-declined',
                dependencyChain: dependencyChain,
                moduleId: _$moduleId
            };
        }
        if (runtimeModules.has(_$moduleId)) {
            if (autoAcceptRootModules) {
                continue;
            }
            queue.push({
                moduleId: undefined,
                dependencyChain: _to_consumable_array(dependencyChain).concat([
                    _$moduleId
                ])
            });
            continue;
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = module.parents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var parentId = _step.value;
                var parent = devModuleCache[parentId];
                if (!parent) {
                    continue;
                }
                var parentHotState = moduleHotState.get(parent);
                // Check if parent declined this dependency
                if (parentHotState === null || parentHotState === void 0 ? void 0 : parentHotState.declinedDependencies[_$moduleId]) {
                    return {
                        type: 'declined',
                        dependencyChain: _to_consumable_array(dependencyChain).concat([
                            _$moduleId
                        ]),
                        moduleId: _$moduleId,
                        parentId: parentId
                    };
                }
                // Skip if parent is already outdated
                if (outdatedModules.has(parentId)) {
                    continue;
                }
                // Check if parent accepts this dependency
                if (parentHotState === null || parentHotState === void 0 ? void 0 : parentHotState.acceptedDependencies[_$moduleId]) {
                    if (!outdatedDependencies.has(parentId)) {
                        outdatedDependencies.set(parentId, new Set());
                    }
                    outdatedDependencies.get(parentId).add(_$moduleId);
                    continue;
                }
                // Neither accepted nor declined — propagate to parent
                queue.push({
                    moduleId: parentId,
                    dependencyChain: _to_consumable_array(dependencyChain).concat([
                        _$moduleId
                    ])
                });
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        // If no parents and we're at a root module, auto-accept if configured
        if (module.parents.length === 0 && autoAcceptRootModules) {
            continue;
        }
    }
    return {
        type: 'accepted',
        moduleId: moduleId,
        outdatedModules: outdatedModules,
        outdatedDependencies: outdatedDependencies
    };
}
/**
 * Merges source dependency map into target dependency map.
 */ function mergeDependencies(target, source) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = source[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), parentId = _step_value[0], deps = _step_value[1];
            var existing = target.get(parentId);
            if (existing) {
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = deps[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var dep = _step1.value;
                        existing.add(dep);
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
            } else {
                target.set(parentId, new Set(deps));
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
/**
 * Computes all modules that need to be invalidated based on which modules changed.
 *
 * @param invalidated - The modules that have been invalidated
 * @param autoAcceptRootModules - If true, root modules auto-accept updates without explicit module.hot.accept()
 */ function computedInvalidatedModules(invalidated, autoAcceptRootModules) {
    var outdatedModules = new Set();
    var outdatedDependencies = new Map();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = invalidated[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var moduleId = _step.value;
            var effect = getAffectedModuleEffects(moduleId, autoAcceptRootModules);
            switch(effect.type){
                case 'unaccepted':
                    throw new UpdateApplyError("cannot apply update: unaccepted module. ".concat(formatDependencyChain(effect.dependencyChain), "."), effect.dependencyChain);
                case 'self-declined':
                    throw new UpdateApplyError("cannot apply update: self-declined module. ".concat(formatDependencyChain(effect.dependencyChain), "."), effect.dependencyChain);
                case 'declined':
                    throw new UpdateApplyError("cannot apply update: declined dependency. ".concat(formatDependencyChain(effect.dependencyChain), ". Declined by ").concat(effect.parentId, "."), effect.dependencyChain);
                case 'accepted':
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = effect.outdatedModules[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var outdatedModuleId = _step1.value;
                            outdatedModules.add(outdatedModuleId);
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                    mergeDependencies(outdatedDependencies, effect.outdatedDependencies);
                    break;
                default:
                    invariant(effect, function(effect) {
                        return "Unknown effect type: ".concat(effect === null || effect === void 0 ? void 0 : effect.type);
                    });
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return {
        outdatedModules: outdatedModules,
        outdatedDependencies: outdatedDependencies
    };
}
/**
 * Creates the module.hot API object and its internal state.
 * This provides the HMR API that user code calls (module.hot.accept(), etc.)
 */ function createModuleHot(moduleId, hotData) {
    var hotState = {
        selfAccepted: false,
        selfDeclined: false,
        selfInvalidated: false,
        disposeHandlers: [],
        acceptedDependencies: {},
        acceptedErrorHandlers: {},
        declinedDependencies: {}
    };
    var hot = {
        // TODO(alexkirsz) This is not defined in the HMR API. It was used to
        // decide whether to warn whenever an HMR-disposed module required other
        // modules. We might want to remove it.
        active: true,
        data: hotData !== null && hotData !== void 0 ? hotData : {},
        accept: function accept(modules, callback, errorHandler) {
            if (modules === undefined) {
                hotState.selfAccepted = true;
            } else if (typeof modules === 'function') {
                hotState.selfAccepted = modules;
            } else if ((typeof modules === "undefined" ? "undefined" : _type_of(modules)) === 'object' && modules !== null) {
                for(var i = 0; i < modules.length; i++){
                    hotState.acceptedDependencies[modules[i]] = callback || function() {};
                    hotState.acceptedErrorHandlers[modules[i]] = errorHandler;
                }
            } else {
                hotState.acceptedDependencies[modules] = callback || function() {};
                hotState.acceptedErrorHandlers[modules] = errorHandler;
            }
        },
        decline: function decline(dep) {
            if (dep === undefined) {
                hotState.selfDeclined = true;
            } else if ((typeof dep === "undefined" ? "undefined" : _type_of(dep)) === 'object' && dep !== null) {
                for(var i = 0; i < dep.length; i++){
                    hotState.declinedDependencies[dep[i]] = true;
                }
            } else {
                hotState.declinedDependencies[dep] = true;
            }
        },
        dispose: function dispose(callback) {
            hotState.disposeHandlers.push(callback);
        },
        addDisposeHandler: function addDisposeHandler(callback) {
            hotState.disposeHandlers.push(callback);
        },
        removeDisposeHandler: function removeDisposeHandler(callback) {
            var idx = hotState.disposeHandlers.indexOf(callback);
            if (idx >= 0) {
                hotState.disposeHandlers.splice(idx, 1);
            }
        },
        invalidate: function invalidate() {
            hotState.selfInvalidated = true;
            queuedInvalidatedModules.add(moduleId);
        },
        // NOTE(alexkirsz) This is part of the management API, which we don't
        // implement, but the Next.js React Refresh runtime uses this to decide
        // whether to schedule an update.
        status: function status() {
            return 'idle';
        },
        // NOTE(alexkirsz) Since we always return "idle" for now, these are no-ops.
        addStatusHandler: function addStatusHandler(_handler) {},
        removeStatusHandler: function removeStatusHandler(_handler) {},
        // NOTE(jridgewell) Check returns the list of updated modules, but we don't
        // want the webpack code paths to ever update (the turbopack paths handle
        // this already).
        check: function check() {
            return Promise.resolve(null);
        }
    };
    return {
        hot: hot,
        hotState: hotState
    };
}
/**
 * Processes queued invalidated modules and adds them to the outdated modules set.
 * Modules that call module.hot.invalidate() are queued and processed here.
 *
 * @param outdatedModules - The current set of outdated modules
 * @param autoAcceptRootModules - If true, root modules auto-accept updates without explicit module.hot.accept()
 */ function applyInvalidatedModules(outdatedModules, outdatedDependencies, autoAcceptRootModules) {
    if (queuedInvalidatedModules.size > 0) {
        var result = computedInvalidatedModules(queuedInvalidatedModules, autoAcceptRootModules);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = result.outdatedModules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var moduleId = _step.value;
                outdatedModules.add(moduleId);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        mergeDependencies(outdatedDependencies, result.outdatedDependencies);
        queuedInvalidatedModules.clear();
    }
    return {
        outdatedModules: outdatedModules,
        outdatedDependencies: outdatedDependencies
    };
}
/**
 * Computes which outdated modules have self-accepted and can be hot reloaded.
 */ function computeOutdatedSelfAcceptedModules(outdatedModules) {
    var outdatedSelfAcceptedModules = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = outdatedModules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var moduleId = _step.value;
            var module = devModuleCache[moduleId];
            var hotState = moduleHotState.get(module);
            if (module && (hotState === null || hotState === void 0 ? void 0 : hotState.selfAccepted) && !hotState.selfInvalidated) {
                outdatedSelfAcceptedModules.push({
                    moduleId: moduleId,
                    errorHandler: hotState.selfAccepted
                });
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return outdatedSelfAcceptedModules;
}
/**
 * Disposes of an instance of a module.
 * Runs hot.dispose handlers and manages persistent hot data.
 *
 * NOTE: mode = "replace" will not remove modules from devModuleCache.
 * This must be done in a separate step afterwards.
 */ function disposeModule(moduleId, mode) {
    var module = devModuleCache[moduleId];
    if (!module) {
        return;
    }
    var hotState = moduleHotState.get(module);
    if (!hotState) {
        return;
    }
    var data = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        // Run the `hot.dispose` handler, if any, passing in the persistent
        // `hot.data` object.
        for(var _iterator = hotState.disposeHandlers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var disposeHandler = _step.value;
            disposeHandler(data);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    // This used to warn in `getOrInstantiateModuleFromParent` when a disposed
    // module is still importing other modules.
    if (module.hot) {
        module.hot.active = false;
    }
    moduleHotState.delete(module);
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        // Remove the disposed module from its children's parent list.
        // It will be added back once the module re-instantiates and imports its
        // children again.
        for(var _iterator1 = module.children[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var childId = _step1.value;
            var child = devModuleCache[childId];
            if (!child) {
                continue;
            }
            var idx = child.parents.indexOf(module.id);
            if (idx >= 0) {
                child.parents.splice(idx, 1);
            }
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    switch(mode){
        case 'clear':
            delete devModuleCache[module.id];
            moduleHotData.delete(module.id);
            break;
        case 'replace':
            moduleHotData.set(module.id, data);
            break;
        default:
            invariant(mode, function(mode) {
                return "invalid mode: ".concat(mode);
            });
    }
}
/**
 * Dispose phase: runs dispose handlers and cleans up outdated/disposed modules.
 * Returns the parent modules of outdated modules for use in the apply phase.
 */ function disposePhase(outdatedModules, disposedModules, outdatedDependencies) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = outdatedModules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var moduleId = _step.value;
            disposeModule(moduleId, 'replace');
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = disposedModules[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var moduleId1 = _step1.value;
            disposeModule(moduleId1, 'clear');
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    // Removing modules from the module cache is a separate step.
    // We also want to keep track of previous parents of the outdated modules.
    var outdatedModuleParents = new Map();
    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
    try {
        for(var _iterator2 = outdatedModules[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
            var moduleId2 = _step2.value;
            var oldModule = devModuleCache[moduleId2];
            outdatedModuleParents.set(moduleId2, oldModule === null || oldModule === void 0 ? void 0 : oldModule.parents);
            delete devModuleCache[moduleId2];
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
            }
        } finally{
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
    var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
    try {
        // Remove outdated dependencies from parent module's children list.
        // When a parent accepts a child's update, the child is re-instantiated
        // but the parent stays alive. We remove the old child reference so it
        // gets re-added when the child re-imports.
        for(var _iterator3 = outdatedDependencies[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
            var _step_value = _sliced_to_array(_step3.value, 2), parentId = _step_value[0], deps = _step_value[1];
            var module = devModuleCache[parentId];
            if (module) {
                var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
                try {
                    for(var _iterator4 = deps[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                        var dep = _step4.value;
                        var idx = module.children.indexOf(dep);
                        if (idx >= 0) {
                            module.children.splice(idx, 1);
                        }
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                            _iterator4.return();
                        }
                    } finally{
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
            }
        } finally{
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
    return {
        outdatedModuleParents: outdatedModuleParents
    };
}
/* eslint-disable @typescript-eslint/no-unused-vars */ /**
 * Shared module instantiation logic.
 * This handles the full module instantiation flow for both browser and Node.js.
 * Only React Refresh hooks differ between platforms (passed as callback).
 */ function instantiateModuleShared(moduleId, sourceType, sourceData, moduleFactories, devModuleCache, runtimeModules, createModuleObjectFn, createContextFn, runModuleExecutionHooksFn) {
    // 1. Factory validation (same in both browser and Node.js)
    var id = moduleId;
    var moduleFactory = moduleFactories.get(id);
    if (typeof moduleFactory !== 'function') {
        throw new Error(factoryNotAvailableMessage(moduleId, sourceType, sourceData) + "\nThis is often caused by a stale browser cache, misconfigured Cache-Control headers, or a service worker serving outdated responses." + "\nTo fix this, make sure your Cache-Control headers allow revalidation of chunks and review your service worker configuration. " + "As an immediate workaround, try hard-reloading the page, clearing the browser cache, or unregistering any service workers.");
    }
    // 2. Hot API setup (same in both - works for browser, included for Node.js)
    var hotData = moduleHotData.get(id);
    var _createModuleHot = createModuleHot(id, hotData), hot = _createModuleHot.hot, hotState = _createModuleHot.hotState;
    // 3. Parent assignment logic (same in both)
    var parents;
    switch(sourceType){
        case SourceType.Runtime:
            runtimeModules.add(id);
            parents = [];
            break;
        case SourceType.Parent:
            parents = [
                sourceData
            ];
            break;
        case SourceType.Update:
            parents = sourceData || [];
            break;
        default:
            throw new Error("Unknown source type: ".concat(sourceType));
    }
    // 4. Module creation (platform creates base module object)
    var module = createModuleObjectFn(id);
    var exports = module.exports;
    module.parents = parents;
    module.children = [];
    module.hot = hot;
    devModuleCache[id] = module;
    moduleHotState.set(module, hotState);
    // 5. Module execution (React Refresh hooks are platform-specific)
    try {
        runModuleExecutionHooksFn(module, function(refresh) {
            var context = createContextFn(module, exports, refresh);
            moduleFactory.call(exports, context, module, exports);
        });
    } catch (error) {
        module.error = error;
        throw error;
    }
    // 6. ESM interop (same in both)
    if (module.namespaceObject && module.exports !== module.namespaceObject) {
        // in case of a circular dependency: cjs1 -> esm2 -> cjs1
        interopEsm(module.exports, module.namespaceObject);
    }
    return module;
}
/**
 * Analyzes update entries and chunks to determine which modules were added, modified, or deleted.
 * This is pure logic that doesn't depend on the runtime environment.
 */ function computeChangedModules(entries, updates, chunkModulesMap) {
    var chunksAdded = new Map();
    var chunksDeleted = new Map();
    var added = new Map();
    var modified = new Map();
    var deleted = new Set();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(updates)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), chunkPath = _step_value[0], mergedChunkUpdate = _step_value[1];
            switch(mergedChunkUpdate.type){
                case 'added':
                    {
                        var updateAdded = new Set(mergedChunkUpdate.modules);
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = updateAdded[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var moduleId = _step1.value;
                                added.set(moduleId, entries[moduleId]);
                            }
                        } catch (err) {
                            _didIteratorError1 = true;
                            _iteratorError1 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally{
                                if (_didIteratorError1) {
                                    throw _iteratorError1;
                                }
                            }
                        }
                        chunksAdded.set(chunkPath, updateAdded);
                        break;
                    }
                case 'deleted':
                    {
                        var updateDeleted = chunkModulesMap ? new Set(chunkModulesMap.get(chunkPath)) : new Set();
                        var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                        try {
                            for(var _iterator2 = updateDeleted[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                var moduleId1 = _step2.value;
                                deleted.add(moduleId1);
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                    _iterator2.return();
                                }
                            } finally{
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }
                        chunksDeleted.set(chunkPath, updateDeleted);
                        break;
                    }
                case 'partial':
                    {
                        var updateAdded1 = new Set(mergedChunkUpdate.added);
                        var updateDeleted1 = new Set(mergedChunkUpdate.deleted);
                        var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                        try {
                            for(var _iterator3 = updateAdded1[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                                var moduleId2 = _step3.value;
                                added.set(moduleId2, entries[moduleId2]);
                            }
                        } catch (err) {
                            _didIteratorError3 = true;
                            _iteratorError3 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                                    _iterator3.return();
                                }
                            } finally{
                                if (_didIteratorError3) {
                                    throw _iteratorError3;
                                }
                            }
                        }
                        var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
                        try {
                            for(var _iterator4 = updateDeleted1[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                                var moduleId3 = _step4.value;
                                deleted.add(moduleId3);
                            }
                        } catch (err) {
                            _didIteratorError4 = true;
                            _iteratorError4 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                                    _iterator4.return();
                                }
                            } finally{
                                if (_didIteratorError4) {
                                    throw _iteratorError4;
                                }
                            }
                        }
                        chunksAdded.set(chunkPath, updateAdded1);
                        chunksDeleted.set(chunkPath, updateDeleted1);
                        break;
                    }
                default:
                    throw new Error('Unknown merged chunk update type');
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
    try {
        // If a module was added from one chunk and deleted from another in the same update,
        // consider it to be modified, as it means the module was moved from one chunk to another
        // AND has new code in a single update.
        for(var _iterator5 = added.keys()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true){
            var moduleId4 = _step5.value;
            if (deleted.has(moduleId4)) {
                added.delete(moduleId4);
                deleted.delete(moduleId4);
            }
        }
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
            }
        } finally{
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }
    var _iteratorNormalCompletion6 = true, _didIteratorError6 = false, _iteratorError6 = undefined;
    try {
        for(var _iterator6 = Object.entries(entries)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true){
            var _step_value1 = _sliced_to_array(_step6.value, 2), moduleId5 = _step_value1[0], entry = _step_value1[1];
            // Modules that haven't been added to any chunk but have new code are considered
            // to be modified.
            // This needs to be under the previous loop, as we need it to get rid of modules
            // that were added and deleted in the same update.
            if (!added.has(moduleId5)) {
                modified.set(moduleId5, entry);
            }
        }
    } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                _iterator6.return();
            }
        } finally{
            if (_didIteratorError6) {
                throw _iteratorError6;
            }
        }
    }
    return {
        added: added,
        deleted: deleted,
        modified: modified,
        chunksAdded: chunksAdded,
        chunksDeleted: chunksDeleted
    };
}
/**
 * Compiles new module code and walks the dependency tree to find all outdated modules.
 * Uses the evalModuleEntry function to compile code (platform-specific).
 *
 * @param added - Map of added modules
 * @param modified - Map of modified modules
 * @param evalModuleEntry - Function to compile module code
 * @param autoAcceptRootModules - If true, root modules auto-accept updates without explicit module.hot.accept()
 */ function computeOutdatedModules(added, modified, evalModuleEntry, autoAcceptRootModules) {
    var newModuleFactories = new Map();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        // Compile added modules
        for(var _iterator = added[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), moduleId = _step_value[0], entry = _step_value[1];
            if (entry != null) {
                newModuleFactories.set(moduleId, evalModuleEntry(entry));
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    // Walk dependency tree to find all modules affected by modifications
    var _computedInvalidatedModules = computedInvalidatedModules(modified.keys(), autoAcceptRootModules), outdatedModules = _computedInvalidatedModules.outdatedModules, outdatedDependencies = _computedInvalidatedModules.outdatedDependencies;
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        // Compile modified modules
        for(var _iterator1 = modified[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var _step_value1 = _sliced_to_array(_step1.value, 2), moduleId1 = _step_value1[0], entry1 = _step_value1[1];
            newModuleFactories.set(moduleId1, evalModuleEntry(entry1));
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    return {
        outdatedModules: outdatedModules,
        outdatedDependencies: outdatedDependencies,
        newModuleFactories: newModuleFactories
    };
}
/**
 * Updates module factories and re-instantiates self-accepted modules.
 * Uses the instantiateModule function (platform-specific via callback).
 */ function applyPhase(outdatedSelfAcceptedModules, newModuleFactories, outdatedModuleParents, outdatedDependencies, moduleFactories, devModuleCache, instantiateModuleFn, applyModuleFactoryNameFn, reportError) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        // Update module factories
        for(var _iterator = newModuleFactories.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), moduleId = _step_value[0], factory = _step_value[1];
            applyModuleFactoryNameFn(factory);
            moduleFactories.set(moduleId, factory);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        // TODO(alexkirsz) Run new runtime entries here.
        // Call accept handlers for outdated dependencies.
        // This runs BEFORE re-instantiating self-accepted modules, matching
        // webpack's behavior.
        for(var _iterator1 = outdatedDependencies[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var _step_value1 = _sliced_to_array(_step1.value, 2), parentId = _step_value1[0], deps = _step_value1[1];
            var module = devModuleCache[parentId];
            if (!module) continue;
            var hotState = moduleHotState.get(module);
            if (!hotState) continue;
            // Group deps by callback, deduplicating callbacks that handle multiple deps.
            // Each callback receives only the deps it was registered for.
            var callbackDeps = new Map();
            var callbackErrorHandlers = new Map();
            var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
            try {
                for(var _iterator2 = deps[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                    var dep = _step2.value;
                    var acceptCallback = hotState.acceptedDependencies[dep];
                    if (acceptCallback) {
                        var depList = callbackDeps.get(acceptCallback);
                        if (!depList) {
                            depList = [];
                            callbackDeps.set(acceptCallback, depList);
                            callbackErrorHandlers.set(acceptCallback, hotState.acceptedErrorHandlers[dep]);
                        }
                        depList.push(dep);
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                        _iterator2.return();
                    }
                } finally{
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
            var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
            try {
                for(var _iterator3 = callbackDeps[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                    var _step_value2 = _sliced_to_array(_step3.value, 2), callback = _step_value2[0], cbDeps = _step_value2[1];
                    try {
                        callback.call(null, cbDeps);
                    } catch (err) {
                        var errorHandler = callbackErrorHandlers.get(callback);
                        if (typeof errorHandler === 'function') {
                            try {
                                errorHandler(err, {
                                    moduleId: parentId,
                                    dependencyId: cbDeps[0]
                                });
                            } catch (err2) {
                                reportError(err2);
                                reportError(err);
                            }
                        } else {
                            reportError(err);
                        }
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                        _iterator3.return();
                    }
                } finally{
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
    try {
        // Re-instantiate all outdated self-accepted modules
        for(var _iterator4 = outdatedSelfAcceptedModules[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
            var _step_value3 = _step4.value, moduleId1 = _step_value3.moduleId, errorHandler1 = _step_value3.errorHandler;
            try {
                instantiateModuleFn(moduleId1, SourceType.Update, outdatedModuleParents.get(moduleId1));
            } catch (err) {
                if (typeof errorHandler1 === 'function') {
                    try {
                        errorHandler1(err, {
                            moduleId: moduleId1,
                            module: devModuleCache[moduleId1]
                        });
                    } catch (err2) {
                        reportError(err2);
                        reportError(err);
                    }
                } else {
                    reportError(err);
                }
            }
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
            }
        } finally{
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }
}
/**
 * Internal implementation that orchestrates the full HMR update flow:
 * invalidation, disposal, and application of new modules.
 *
 * @param autoAcceptRootModules - If true, root modules auto-accept updates without explicit module.hot.accept()
 */ function applyInternal(outdatedModules, outdatedDependencies, disposedModules, newModuleFactories, moduleFactories, devModuleCache, instantiateModuleFn, applyModuleFactoryNameFn, autoAcceptRootModules) {
    ;
    var ref;
    ref = applyInvalidatedModules(outdatedModules, outdatedDependencies, autoAcceptRootModules), outdatedModules = ref.outdatedModules, outdatedDependencies = ref.outdatedDependencies, ref;
    // Find self-accepted modules to re-instantiate
    var outdatedSelfAcceptedModules = computeOutdatedSelfAcceptedModules(outdatedModules);
    // Run dispose handlers, save hot.data, clear caches
    var outdatedModuleParents = disposePhase(outdatedModules, disposedModules, outdatedDependencies).outdatedModuleParents;
    var error;
    function reportError(err) {
        if (!error) error = err; // Keep first error
    }
    applyPhase(outdatedSelfAcceptedModules, newModuleFactories, outdatedModuleParents, outdatedDependencies, moduleFactories, devModuleCache, instantiateModuleFn, applyModuleFactoryNameFn, reportError);
    if (error) {
        throw error;
    }
    // Recursively apply any queued invalidations from new module execution
    if (queuedInvalidatedModules.size > 0) {
        applyInternal(new Set(), new Map(), [], new Map(), moduleFactories, devModuleCache, instantiateModuleFn, applyModuleFactoryNameFn, autoAcceptRootModules);
    }
}
/**
 * Main entry point for applying an ECMAScript merged update.
 * This is called by both browser and Node.js runtimes with platform-specific callbacks.
 *
 * @param options.autoAcceptRootModules - If true, root modules auto-accept updates without explicit
 *                                   module.hot.accept(). Used for server-side HMR where pages
 *                                   auto-accept at the top level.
 */ function applyEcmascriptMergedUpdateShared(options) {
    var added = options.added, modified = options.modified, disposedModules = options.disposedModules, evalModuleEntry = options.evalModuleEntry, instantiateModule = options.instantiateModule, applyModuleFactoryName = options.applyModuleFactoryName, moduleFactories = options.moduleFactories, devModuleCache = options.devModuleCache, autoAcceptRootModules = options.autoAcceptRootModules;
    var _computeOutdatedModules = computeOutdatedModules(added, modified, evalModuleEntry, autoAcceptRootModules), outdatedModules = _computeOutdatedModules.outdatedModules, outdatedDependencies = _computeOutdatedModules.outdatedDependencies, newModuleFactories = _computeOutdatedModules.newModuleFactories;
    applyInternal(outdatedModules, outdatedDependencies, disposedModules, newModuleFactories, moduleFactories, devModuleCache, instantiateModule, applyModuleFactoryName, autoAcceptRootModules);
}
/// <reference path="../../../shared/runtime/dev-globals.d.ts" />
/// <reference path="../../../shared/runtime/dev-protocol.d.ts" />
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var _globalThis, _TURBOPACK_CHUNK_UPDATE_LISTENERS;
var devContextPrototype = Context.prototype;
/**
 * This file contains runtime types and functions that are shared between all
 * Turbopack *development* ECMAScript runtimes.
 *
 * It will be appended to the runtime code of each runtime right after the
 * shared runtime utils.
 */ /* eslint-disable @typescript-eslint/no-unused-vars */ // Assign browser's module cache and runtime modules to shared HMR state
devModuleCache = Object.create(null);
devContextPrototype.c = devModuleCache;
runtimeModules = new Set();
// Set flag to indicate we use ModuleWithDirection
createModuleWithDirectionFlag = true;
/**
 * Map from module ID to the chunks that contain this module.
 *
 * In HMR, we need to keep track of which modules are contained in which so
 * chunks. This is so we don't eagerly dispose of a module when it is removed
 * from chunk A, but still exists in chunk B.
 */ var moduleChunksMap = new Map();
/**
 * Map from a chunk path to all modules it contains.
 */ var chunkModulesMap = new Map();
/**
 * Chunk lists that contain a runtime. When these chunk lists receive an update
 * that can't be reconciled with the current state of the page, we need to
 * reload the runtime entirely.
 */ var runtimeChunkLists = new Set();
/**
 * Map from a chunk list to the chunk paths it contains.
 */ var chunkListChunksMap = new Map();
/**
 * Map from a chunk path to the chunk lists it belongs to.
 */ var chunkChunkListsMap = new Map();
/**
 * Gets or instantiates a runtime module.
 */ // @ts-ignore
function getOrInstantiateRuntimeModule(chunkPath, moduleId) {
    var module = devModuleCache[moduleId];
    if (module) {
        if (module.error) {
            throw module.error;
        }
        return module;
    }
    // @ts-ignore
    return instantiateModule(moduleId, SourceType.Runtime, chunkPath);
}
/**
 * Retrieves a module from the cache, or instantiate it if it is not cached.
 */ // @ts-ignore Defined in `runtime-utils.ts`
var getOrInstantiateModuleFromParent = function getOrInstantiateModuleFromParent(id, sourceModule) {
    if (!sourceModule.hot.active) {
        console.warn("Unexpected import of module ".concat(id, " from module ").concat(sourceModule.id, ", which was deleted by an HMR update"));
    }
    var module = devModuleCache[id];
    if (sourceModule.children.indexOf(id) === -1) {
        sourceModule.children.push(id);
    }
    if (module) {
        if (module.error) {
            throw module.error;
        }
        if (module.parents.indexOf(sourceModule.id) === -1) {
            module.parents.push(sourceModule.id);
        }
        return module;
    }
    return instantiateModule(id, SourceType.Parent, sourceModule.id);
};
function DevContext(module, exports, refresh) {
    Context.call(this, module, exports);
    this.k = refresh;
}
DevContext.prototype = Context.prototype;
function instantiateModule(moduleId, sourceType, sourceData) {
    // Browser: creates base HotModule object (hot API added by shared code)
    var createModuleObjectFn = function createModuleObjectFn(id) {
        return createModuleObject(id);
    };
    // Browser: creates DevContext with refresh
    var createContext = function createContext(module, exports, refresh) {
        return new DevContext(module, exports, refresh);
    };
    // Use shared instantiation logic (includes hot API setup)
    return instantiateModuleShared(moduleId, sourceType, sourceData, moduleFactories, devModuleCache, runtimeModules, createModuleObjectFn, createContext, runModuleExecutionHooks);
}
var DUMMY_REFRESH_CONTEXT = {
    register: function register(_type, _id) {},
    signature: function signature() {
        return function(_type) {};
    },
    registerExports: function registerExports(_module, _helpers) {}
};
/**
 * NOTE(alexkirsz) Webpack has a "module execution" interception hook that
 * Next.js' React Refresh runtime hooks into to add module context to the
 * refresh registry.
 */ function runModuleExecutionHooks(module, executeModule) {
    if (typeof globalThis.$RefreshInterceptModuleExecution$ === 'function') {
        var cleanupReactRefreshIntercept = globalThis.$RefreshInterceptModuleExecution$(module.id);
        try {
            executeModule({
                register: globalThis.$RefreshReg$,
                signature: globalThis.$RefreshSig$,
                registerExports: registerExportsAndSetupBoundaryForReactRefresh
            });
        } finally{
            // Always cleanup the intercept, even if module execution failed.
            cleanupReactRefreshIntercept();
        }
    } else {
        // If the react refresh hooks are not installed we need to bind dummy functions.
        // This is expected when running in a Web Worker.  It is also common in some of
        // our test environments.
        executeModule(DUMMY_REFRESH_CONTEXT);
    }
}
/**
 * This is adapted from https://github.com/vercel/next.js/blob/3466862d9dc9c8bb3131712134d38757b918d1c0/packages/react-refresh-utils/internal/ReactRefreshModule.runtime.ts
 */ function registerExportsAndSetupBoundaryForReactRefresh(module, helpers) {
    var _module_hot_data_prevExports;
    var currentExports = module.exports;
    var prevExports = (_module_hot_data_prevExports = module.hot.data.prevExports) !== null && _module_hot_data_prevExports !== void 0 ? _module_hot_data_prevExports : null;
    helpers.registerExportsForReactRefresh(currentExports, module.id);
    // A module can be accepted automatically based on its exports, e.g. when
    // it is a Refresh Boundary.
    if (helpers.isReactRefreshBoundary(currentExports)) {
        // Save the previous exports on update, so we can compare the boundary
        // signatures.
        module.hot.dispose(function(data) {
            data.prevExports = currentExports;
        });
        // Unconditionally accept an update to this module, we'll check if it's
        // still a Refresh Boundary later.
        module.hot.accept();
        // This field is set when the previous version of this module was a
        // Refresh Boundary, letting us know we need to check for invalidation or
        // enqueue an update.
        if (prevExports !== null) {
            // A boundary can become ineligible if its exports are incompatible
            // with the previous exports.
            //
            // For example, if you add/remove/change exports, we'll want to
            // re-execute the importing modules, and force those components to
            // re-render. Similarly, if you convert a class component to a
            // function, we want to invalidate the boundary.
            if (helpers.shouldInvalidateReactRefreshBoundary(helpers.getRefreshBoundarySignature(prevExports), helpers.getRefreshBoundarySignature(currentExports))) {
                module.hot.invalidate();
            } else {
                helpers.scheduleUpdate();
            }
        }
    } else {
        // Since we just executed the code for the module, it's possible that the
        // new exports made it ineligible for being a boundary.
        // We only care about the case when we were _previously_ a boundary,
        // because we already accepted this update (accidental side effect).
        var isNoLongerABoundary = prevExports !== null;
        if (isNoLongerABoundary) {
            module.hot.invalidate();
        }
    }
}
/**
 * Adds, deletes, and moves modules between chunks. This must happen before the
 * dispose phase as it needs to know which modules were removed from all chunks,
 * which we can only compute *after* taking care of added and moved modules.
 */ function updateChunksPhase(chunksAddedModules, chunksDeletedModules) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = chunksAddedModules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), chunkPath = _step_value[0], addedModuleIds = _step_value[1];
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = addedModuleIds[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var moduleId = _step1.value;
                    addModuleToChunk(moduleId, chunkPath);
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var disposedModules = new Set();
    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
    try {
        for(var _iterator2 = chunksDeletedModules[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
            var _step_value1 = _sliced_to_array(_step2.value, 2), chunkPath1 = _step_value1[0], addedModuleIds1 = _step_value1[1];
            var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
            try {
                for(var _iterator3 = addedModuleIds1[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                    var moduleId1 = _step3.value;
                    if (removeModuleFromChunk(moduleId1, chunkPath1)) {
                        disposedModules.add(moduleId1);
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                        _iterator3.return();
                    }
                } finally{
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
            }
        } finally{
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
    return {
        disposedModules: disposedModules
    };
}
function applyUpdate(update) {
    switch(update.type){
        case 'ChunkListUpdate':
            applyChunkListUpdate(update);
            break;
        default:
            invariant(update, function(update) {
                return "Unknown update type: ".concat(update.type);
            });
    }
}
function applyChunkListUpdate(update) {
    if (update.merged != null) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = update.merged[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var merged = _step.value;
                switch(merged.type){
                    case 'EcmascriptMergedUpdate':
                        applyEcmascriptMergedUpdate(merged);
                        break;
                    default:
                        invariant(merged, function(merged) {
                            return "Unknown merged type: ".concat(merged.type);
                        });
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    if (update.chunks != null) {
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = Object.entries(update.chunks)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var _step_value = _sliced_to_array(_step1.value, 2), chunkPath = _step_value[0], chunkUpdate = _step_value[1];
                var chunkUrl = getChunkRelativeUrl(chunkPath);
                switch(chunkUpdate.type){
                    case 'added':
                        BACKEND.loadChunkCached(SourceType.Update, chunkUrl);
                        break;
                    case 'total':
                        var _DEV_BACKEND_reloadChunk, _DEV_BACKEND;
                        (_DEV_BACKEND_reloadChunk = (_DEV_BACKEND = DEV_BACKEND).reloadChunk) === null || _DEV_BACKEND_reloadChunk === void 0 ? void 0 : _DEV_BACKEND_reloadChunk.call(_DEV_BACKEND, chunkUrl);
                        break;
                    case 'deleted':
                        var _DEV_BACKEND_unloadChunk, _DEV_BACKEND1;
                        (_DEV_BACKEND_unloadChunk = (_DEV_BACKEND1 = DEV_BACKEND).unloadChunk) === null || _DEV_BACKEND_unloadChunk === void 0 ? void 0 : _DEV_BACKEND_unloadChunk.call(_DEV_BACKEND1, chunkUrl);
                        break;
                    case 'partial':
                        invariant(chunkUpdate.instruction, function(instruction) {
                            return "Unknown partial instruction: ".concat(JSON.stringify(instruction), ".");
                        });
                        break;
                    default:
                        invariant(chunkUpdate, function(chunkUpdate) {
                            return "Unknown chunk update type: ".concat(chunkUpdate.type);
                        });
                }
            }
        } catch (err) {
            _didIteratorError1 = true;
            _iteratorError1 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                    _iterator1.return();
                }
            } finally{
                if (_didIteratorError1) {
                    throw _iteratorError1;
                }
            }
        }
    }
}
function applyEcmascriptMergedUpdate(update) {
    // Browser-specific chunk management phase
    var _update_entries = update.entries, entries = _update_entries === void 0 ? {} : _update_entries, _update_chunks = update.chunks, chunks = _update_chunks === void 0 ? {} : _update_chunks;
    var _computeChangedModules = computeChangedModules(entries, chunks, chunkModulesMap), added = _computeChangedModules.added, modified = _computeChangedModules.modified, chunksAdded = _computeChangedModules.chunksAdded, chunksDeleted = _computeChangedModules.chunksDeleted;
    var disposedModules = updateChunksPhase(chunksAdded, chunksDeleted).disposedModules;
    // Use shared HMR update implementation
    applyEcmascriptMergedUpdateShared({
        added: added,
        modified: modified,
        disposedModules: disposedModules,
        evalModuleEntry: _eval,
        instantiateModule: instantiateModule,
        applyModuleFactoryName: applyModuleFactoryName,
        moduleFactories: moduleFactories,
        devModuleCache: devModuleCache,
        autoAcceptRootModules: false
    });
}
function handleApply(chunkListPath, update) {
    switch(update.type){
        case 'partial':
            {
                // This indicates that the update is can be applied to the current state of the application.
                applyUpdate(update.instruction);
                break;
            }
        case 'restart':
            {
                // This indicates that there is no way to apply the update to the
                // current state of the application, and that the application must be
                // restarted.
                DEV_BACKEND.restart();
                break;
            }
        case 'notFound':
            {
                // This indicates that the chunk list no longer exists: either the dynamic import which created it was removed,
                // or the page itself was deleted.
                // If it is a dynamic import, we simply discard all modules that the chunk has exclusive access to.
                // If it is a runtime chunk list, we restart the application.
                if (runtimeChunkLists.has(chunkListPath)) {
                    DEV_BACKEND.restart();
                } else {
                    disposeChunkList(chunkListPath);
                }
                break;
            }
        default:
            throw new Error("Unknown update type: ".concat(update.type));
    }
}
/**
 * Removes a module from a chunk.
 * Returns `true` if there are no remaining chunks including this module.
 */ function removeModuleFromChunk(moduleId, chunkPath) {
    var moduleChunks = moduleChunksMap.get(moduleId);
    moduleChunks.delete(chunkPath);
    var chunkModules = chunkModulesMap.get(chunkPath);
    chunkModules.delete(moduleId);
    var noRemainingModules = chunkModules.size === 0;
    if (noRemainingModules) {
        chunkModulesMap.delete(chunkPath);
    }
    var noRemainingChunks = moduleChunks.size === 0;
    if (noRemainingChunks) {
        moduleChunksMap.delete(moduleId);
    }
    return noRemainingChunks;
}
/**
 * Disposes of a chunk list and its corresponding exclusive chunks.
 */ function disposeChunkList(chunkListPath) {
    var _DEV_BACKEND_unloadChunk, _DEV_BACKEND;
    var chunkPaths = chunkListChunksMap.get(chunkListPath);
    if (chunkPaths == null) {
        return false;
    }
    chunkListChunksMap.delete(chunkListPath);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = chunkPaths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var chunkPath = _step.value;
            var chunkChunkLists = chunkChunkListsMap.get(chunkPath);
            chunkChunkLists.delete(chunkListPath);
            if (chunkChunkLists.size === 0) {
                chunkChunkListsMap.delete(chunkPath);
                disposeChunk(chunkPath);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    // We must also dispose of the chunk list's chunk itself to ensure it may
    // be reloaded properly in the future.
    var chunkListUrl = getChunkRelativeUrl(chunkListPath);
    (_DEV_BACKEND_unloadChunk = (_DEV_BACKEND = DEV_BACKEND).unloadChunk) === null || _DEV_BACKEND_unloadChunk === void 0 ? void 0 : _DEV_BACKEND_unloadChunk.call(_DEV_BACKEND, chunkListUrl);
    return true;
}
/**
 * Disposes of a chunk and its corresponding exclusive modules.
 *
 * @returns Whether the chunk was disposed of.
 */ function disposeChunk(chunkPath) {
    var // This should happen whether the chunk has any modules in it or not.
    // For instance, CSS chunks have no modules in them, but they still need to be unloaded.
    _DEV_BACKEND_unloadChunk, _DEV_BACKEND;
    var chunkUrl = getChunkRelativeUrl(chunkPath);
    (_DEV_BACKEND_unloadChunk = (_DEV_BACKEND = DEV_BACKEND).unloadChunk) === null || _DEV_BACKEND_unloadChunk === void 0 ? void 0 : _DEV_BACKEND_unloadChunk.call(_DEV_BACKEND, chunkUrl);
    var chunkModules = chunkModulesMap.get(chunkPath);
    if (chunkModules == null) {
        return false;
    }
    chunkModules.delete(chunkPath);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = chunkModules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var moduleId = _step.value;
            var moduleChunks = moduleChunksMap.get(moduleId);
            moduleChunks.delete(chunkPath);
            var noRemainingChunks = moduleChunks.size === 0;
            if (noRemainingChunks) {
                moduleChunksMap.delete(moduleId);
                disposeModule(moduleId, 'clear');
                availableModules.delete(moduleId);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return true;
}
/**
 * Adds a module to a chunk.
 */ function addModuleToChunk(moduleId, chunkPath) {
    var moduleChunks = moduleChunksMap.get(moduleId);
    if (!moduleChunks) {
        moduleChunks = new Set([
            chunkPath
        ]);
        moduleChunksMap.set(moduleId, moduleChunks);
    } else {
        moduleChunks.add(chunkPath);
    }
    var chunkModules = chunkModulesMap.get(chunkPath);
    if (!chunkModules) {
        chunkModules = new Set([
            moduleId
        ]);
        chunkModulesMap.set(chunkPath, chunkModules);
    } else {
        chunkModules.add(moduleId);
    }
}
/**
 * Marks a chunk list as a runtime chunk list. There can be more than one
 * runtime chunk list. For instance, integration tests can have multiple chunk
 * groups loaded at runtime, each with its own chunk list.
 */ function markChunkListAsRuntime(chunkListPath) {
    runtimeChunkLists.add(chunkListPath);
}
function registerChunk(registration) {
    var chunk = getChunkFromRegistration(registration[0]);
    var runtimeParams;
    // When bootstrapping we are passed a single runtimeParams object so we can distinguish purely based on length
    if (registration.length === 2) {
        runtimeParams = registration[1];
    } else {
        var chunkPath = getPathFromScript(chunk);
        runtimeParams = undefined;
        installCompressedModuleFactories(registration, /* offset= */ 1, moduleFactories, function(id) {
            return addModuleToChunk(id, chunkPath);
        });
    }
    return BACKEND.registerChunk(chunk, runtimeParams);
}
/**
 * Subscribes to chunk list updates from the update server and applies them.
 */ function registerChunkList(chunkList) {
    var chunkListScript = getChunkFromRegistration(chunkList.script);
    var chunkListPath = getPathFromScript(chunkListScript);
    // The "chunk" is also registered to finish the loading in the backend
    BACKEND.registerChunk(chunkListPath);
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS.push([
        chunkListPath,
        handleApply.bind(null, chunkListPath)
    ]);
    // Adding chunks to chunk lists and vice versa.
    var chunkPaths = new Set(chunkList.chunks.map(getChunkPath));
    chunkListChunksMap.set(chunkListPath, chunkPaths);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = chunkPaths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var chunkPath = _step.value;
            var chunkChunkLists = chunkChunkListsMap.get(chunkPath);
            if (!chunkChunkLists) {
                chunkChunkLists = new Set([
                    chunkListPath
                ]);
                chunkChunkListsMap.set(chunkPath, chunkChunkLists);
            } else {
                chunkChunkLists.add(chunkListPath);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    if (chunkList.source === 'entry') {
        markChunkListAsRuntime(chunkListPath);
    }
}
(_TURBOPACK_CHUNK_UPDATE_LISTENERS = (_globalThis = globalThis).TURBOPACK_CHUNK_UPDATE_LISTENERS) !== null && _TURBOPACK_CHUNK_UPDATE_LISTENERS !== void 0 ? _TURBOPACK_CHUNK_UPDATE_LISTENERS : _globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = [];
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
/**
 * This file contains the runtime code specific to the Turbopack ECMAScript DOM runtime.
 *
 * It will be appended to the base runtime code.
 */ /* eslint-disable @typescript-eslint/no-unused-vars */ /// <reference path="../../../browser/runtime/base/runtime-base.ts" />
/// <reference path="../../../shared/runtime/runtime-types.d.ts" />
function getAssetSuffixFromScriptSrc() {
    var _ref;
    var _document_currentScript_getAttribute, _document_currentScript, _document;
    // TURBOPACK_ASSET_SUFFIX is set in web workers
    if (self.TURBOPACK_ASSET_SUFFIX != null) return self.TURBOPACK_ASSET_SUFFIX;
    var src = (_ref = (_document = document) === null || _document === void 0 ? void 0 : (_document_currentScript = _document.currentScript) === null || _document_currentScript === void 0 ? void 0 : (_document_currentScript_getAttribute = _document_currentScript.getAttribute) === null || _document_currentScript_getAttribute === void 0 ? void 0 : _document_currentScript_getAttribute.call(_document_currentScript, 'src')) !== null && _ref !== void 0 ? _ref : '';
    var qi = src.indexOf('?');
    return qi >= 0 ? src.slice(qi) : '';
}
var BACKEND;
/**
 * Maps chunk paths to the corresponding resolver.
 */ var chunkResolvers = new Map();
(function() {
    var getOrCreateResolver = function getOrCreateResolver(chunkUrl) {
        var resolver = chunkResolvers.get(chunkUrl);
        if (!resolver) {
            var resolve;
            var reject;
            var promise = new Promise(function(innerResolve, innerReject) {
                resolve = innerResolve;
                reject = innerReject;
            });
            resolver = {
                resolved: false,
                loadingStarted: false,
                promise: promise,
                resolve: function resolve1() {
                    resolver.resolved = true;
                    resolve();
                },
                reject: reject
            };
            chunkResolvers.set(chunkUrl, resolver);
        }
        return resolver;
    };
    var doLoadChunk = /**
   * Loads the given chunk, and returns a promise that resolves once the chunk
   * has been loaded.
   */ function doLoadChunk(sourceType, chunkUrl) {
        var resolver = getOrCreateResolver(chunkUrl);
        if (resolver.loadingStarted) {
            return resolver.promise;
        }
        if (sourceType === SourceType.Runtime) {
            // We don't need to load chunks references from runtime code, as they're already
            // present in the DOM.
            resolver.loadingStarted = true;
            if (isCss(chunkUrl)) {
                // CSS chunks do not register themselves, and as such must be marked as
                // loaded instantly.
                resolver.resolve();
            }
            // We need to wait for JS chunks to register themselves within `registerChunk`
            // before we can start instantiating runtime modules, hence the absence of
            // `resolver.resolve()` in this branch.
            return resolver.promise;
        }
        if (typeof importScripts === 'function') {
            // We're in a web worker
            if (isCss(chunkUrl)) {
            // ignore
            } else if (isJs(chunkUrl)) {
                self.TURBOPACK_NEXT_CHUNK_URLS.push(chunkUrl);
                importScripts(chunkUrl);
            } else {
                throw new Error("can't infer type of chunk from URL ".concat(chunkUrl, " in worker"));
            }
        } else {
            // TODO(PACK-2140): remove this once all filenames are guaranteed to be escaped.
            var decodedChunkUrl = decodeURI(chunkUrl);
            if (isCss(chunkUrl)) {
                var previousLinks = document.querySelectorAll('link[rel=stylesheet][href="'.concat(chunkUrl, '"],link[rel=stylesheet][href^="').concat(chunkUrl, '?"],link[rel=stylesheet][href="').concat(decodedChunkUrl, '"],link[rel=stylesheet][href^="').concat(decodedChunkUrl, '?"]'));
                if (previousLinks.length > 0) {
                    // CSS chunks do not register themselves, and as such must be marked as
                    // loaded instantly.
                    resolver.resolve();
                } else {
                    var link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = chunkUrl;
                    link.onerror = function() {
                        resolver.reject();
                    };
                    link.onload = function() {
                        // CSS chunks do not register themselves, and as such must be marked as
                        // loaded instantly.
                        resolver.resolve();
                    };
                    // Append to the `head` for webpack compatibility.
                    document.head.appendChild(link);
                }
            } else if (isJs(chunkUrl)) {
                var previousScripts = document.querySelectorAll('script[src="'.concat(chunkUrl, '"],script[src^="').concat(chunkUrl, '?"],script[src="').concat(decodedChunkUrl, '"],script[src^="').concat(decodedChunkUrl, '?"]'));
                if (previousScripts.length > 0) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        // There is this edge where the script already failed loading, but we
                        // can't detect that. The Promise will never resolve in this case.
                        for(var _iterator = Array.from(previousScripts)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var script = _step.value;
                            script.addEventListener('error', function() {
                                resolver.reject();
                            });
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                } else {
                    var script1 = document.createElement('script');
                    script1.src = chunkUrl;
                    // We'll only mark the chunk as loaded once the script has been executed,
                    // which happens in `registerChunk`. Hence the absence of `resolve()` in
                    // this branch.
                    script1.onerror = function() {
                        resolver.reject();
                    };
                    // Append to the `head` for webpack compatibility.
                    document.head.appendChild(script1);
                }
            } else {
                throw new Error("can't infer type of chunk from URL ".concat(chunkUrl));
            }
        }
        resolver.loadingStarted = true;
        return resolver.promise;
    };
    var fetchWebAssembly = function fetchWebAssembly(wasmChunkPath) {
        return fetch(getChunkRelativeUrl(wasmChunkPath));
    };
    BACKEND = {
        registerChunk: function registerChunk(chunk, params) {
            return _async_to_generator(function() {
                var chunkPath, chunkUrl, resolver, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, otherChunkData, otherChunkPath, otherChunkUrl, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, moduleId;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            chunkPath = getPathFromScript(chunk);
                            chunkUrl = getUrlFromScript(chunk);
                            resolver = getOrCreateResolver(chunkUrl);
                            resolver.resolve();
                            if (params == null) {
                                return [
                                    2
                                ];
                            }
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(_iterator = params.otherChunks[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    otherChunkData = _step.value;
                                    otherChunkPath = getChunkPath(otherChunkData);
                                    otherChunkUrl = getChunkRelativeUrl(otherChunkPath);
                                    // Chunk might have started loading, so we want to avoid triggering another load.
                                    getOrCreateResolver(otherChunkUrl);
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                            // This waits for chunks to be loaded, but also marks included items as available.
                            return [
                                4,
                                Promise.all(params.otherChunks.map(function(otherChunkData) {
                                    return loadInitialChunk(chunkPath, otherChunkData);
                                }))
                            ];
                        case 1:
                            _state.sent();
                            if (params.runtimeModuleIds.length > 0) {
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                try {
                                    for(_iterator1 = params.runtimeModuleIds[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                        moduleId = _step1.value;
                                        getOrInstantiateRuntimeModule(chunkPath, moduleId);
                                    }
                                } catch (err) {
                                    _didIteratorError1 = true;
                                    _iteratorError1 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                            _iterator1.return();
                                        }
                                    } finally{
                                        if (_didIteratorError1) {
                                            throw _iteratorError1;
                                        }
                                    }
                                }
                            }
                            return [
                                2
                            ];
                    }
                });
            })();
        },
        /**
     * Loads the given chunk, and returns a promise that resolves once the chunk
     * has been loaded.
     */ loadChunkCached: function loadChunkCached(sourceType, chunkUrl) {
            return doLoadChunk(sourceType, chunkUrl);
        },
        loadWebAssembly: function loadWebAssembly(_sourceType, _sourceData, wasmChunkPath, _edgeModule, importsObj) {
            return _async_to_generator(function() {
                var req, instance;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            req = fetchWebAssembly(wasmChunkPath);
                            return [
                                4,
                                WebAssembly.instantiateStreaming(req, importsObj)
                            ];
                        case 1:
                            instance = _state.sent().instance;
                            return [
                                2,
                                instance.exports
                            ];
                    }
                });
            })();
        },
        loadWebAssemblyModule: function loadWebAssemblyModule(_sourceType, _sourceData, wasmChunkPath, _edgeModule) {
            return _async_to_generator(function() {
                var req;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            req = fetchWebAssembly(wasmChunkPath);
                            return [
                                4,
                                WebAssembly.compileStreaming(req)
                            ];
                        case 1:
                            return [
                                2,
                                _state.sent()
                            ];
                    }
                });
            })();
        }
    };
})();
/**
 * This file contains the runtime code specific to the Turbopack development
 * ECMAScript DOM runtime.
 *
 * It will be appended to the base development runtime code.
 */ /* eslint-disable @typescript-eslint/no-unused-vars */ /// <reference path="../base/runtime-base.ts" />
/// <reference path="../base/dev-base.ts" />
/// <reference path="./runtime-backend-dom.ts" />
/// <reference path="../../../shared/require-type.d.ts" />
var DEV_BACKEND;
(function() {
    var deleteResolver = function deleteResolver(chunkUrl) {
        chunkResolvers.delete(chunkUrl);
    };
    DEV_BACKEND = {
        unloadChunk: function unloadChunk(chunkUrl) {
            deleteResolver(chunkUrl);
            // Strip query string so we match links regardless of cache-busting
            // params (e.g. ?ts=) that may differ between HMR updates.
            var baseChunkUrl = chunkUrl.split('?')[0];
            // TODO(PACK-2140): remove this once all filenames are guaranteed to be escaped.
            var decodedBaseChunkUrl = decodeURI(baseChunkUrl);
            if (isCss(chunkUrl)) {
                var links = document.querySelectorAll('link[href="'.concat(baseChunkUrl, '"],link[href^="').concat(baseChunkUrl, '?"],link[href="').concat(decodedBaseChunkUrl, '"],link[href^="').concat(decodedBaseChunkUrl, '?"]'));
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Array.from(links)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var link = _step.value;
                        link.remove();
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            } else if (isJs(chunkUrl)) {
                // Unloading a JS chunk would have no effect, as it lives in the JS
                // runtime once evaluated.
                // However, we still want to remove the script tag from the DOM to keep
                // the HTML somewhat consistent from the user's perspective.
                var scripts = document.querySelectorAll('script[src="'.concat(baseChunkUrl, '"],script[src^="').concat(baseChunkUrl, '?"],script[src="').concat(decodedBaseChunkUrl, '"],script[src^="').concat(decodedBaseChunkUrl, '?"]'));
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = Array.from(scripts)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var script = _step1.value;
                        script.remove();
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
            } else {
                throw new Error("can't infer type of chunk from URL ".concat(chunkUrl));
            }
        },
        reloadChunk: function reloadChunk(chunkUrl) {
            return new Promise(function(resolve, reject) {
                if (!isCss(chunkUrl)) {
                    reject(new Error('The DOM backend can only reload CSS chunks'));
                    return;
                }
                // Strip query string so we match links regardless of cache-busting
                // params (e.g. ?ts=) that may differ between HMR updates.
                var baseChunkUrl = chunkUrl.split('?')[0];
                var decodedBaseChunkUrl = decodeURI(baseChunkUrl);
                var previousLinks = document.querySelectorAll('link[rel=stylesheet][href="'.concat(baseChunkUrl, '"],link[rel=stylesheet][href^="').concat(baseChunkUrl, '?"],link[rel=stylesheet][href="').concat(decodedBaseChunkUrl, '"],link[rel=stylesheet][href^="').concat(decodedBaseChunkUrl, '?"]'));
                if (previousLinks.length === 0) {
                    reject(new Error("No link element found for chunk ".concat(chunkUrl)));
                    return;
                }
                var link = document.createElement('link');
                link.rel = 'stylesheet';
                if (navigator.userAgent.includes('Firefox') || navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome') && !navigator.userAgent.includes('Chromium')) {
                    // Firefox won't reload CSS files that were previously loaded on the
                    // current page: https://bugzilla.mozilla.org/show_bug.cgi?id=1037506
                    //
                    // Safari serves cached CSS when a <link rel=preload> exists for the
                    // same URL: https://bugs.webkit.org/show_bug.cgi?id=187726
                    //
                    // Replace or add a fresh `ts` cache-busting param without
                    // discarding other query parameters that may already be present.
                    var url = new URL(chunkUrl, location.origin);
                    url.searchParams.set('ts', String(Date.now()));
                    // Reduced timer precision in some browers could lead to an update getting dropped
                    // in firefox if it happens fast enough (in firefox precision is sometimes 100ms!).
                    // So trust that the server is only updating us when it is important and use a
                    // random number to bust the cache.
                    url.searchParams.set('_next_rand', String(Math.random()));
                    link.href = url.pathname + url.search;
                } else {
                    link.href = chunkUrl;
                }
                link.onerror = function() {
                    reject();
                };
                link.onload = function() {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        // First load the new CSS, then remove the old ones. This prevents visible
                        // flickering that would happen in-between removing the previous CSS and
                        // loading the new one.
                        for(var _iterator = Array.from(previousLinks)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var previousLink = _step.value;
                            previousLink.remove();
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    // CSS chunks do not register themselves, and as such must be marked as
                    // loaded instantly.
                    resolve();
                };
                // Make sure to insert the new CSS right after the previous one, so that
                // its precedence is higher.
                previousLinks[0].parentElement.insertBefore(link, previousLinks[0].nextSibling);
            });
        },
        restart: function restart() {
            return self.location.reload();
        }
    };
})();
function _eval(param) {
    var code = param.code, url = param.url, map = param.map;
    code += "\n\n//# sourceURL=".concat(encodeURI(location.origin + CHUNK_BASE_PATH + url + ASSET_SUFFIX));
    if (map) {
        code += "\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(btoa(// btoa doesn't handle nonlatin characters, so escape them as \x sequences
        // See https://stackoverflow.com/a/26603875
        unescape(encodeURIComponent(map))));
    }
    // eslint-disable-next-line no-eval
    return eval(code);
}
const chunksToRegister = globalThis["TURBOPACK"];
globalThis["TURBOPACK"] = { push: registerChunk };
chunksToRegister.forEach(registerChunk);
const chunkListsToRegister = globalThis["TURBOPACK_CHUNK_LISTS"] || [];
globalThis["TURBOPACK_CHUNK_LISTS"] = { push: registerChunkList };
chunkListsToRegister.forEach(registerChunkList);
})();


//# sourceMappingURL=next_1jtpr7o._.js.map