(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var _global_process, _global_process1;
module.exports = ((_global_process = /*TURBOPACK member replacement*/ __turbopack_context__.g.process) == null ? void 0 : _global_process.env) && _type_of._((_global_process1 = /*TURBOPACK member replacement*/ __turbopack_context__.g.process) == null ? void 0 : _global_process1.env) === 'object' ? /*TURBOPACK member replacement*/ __turbopack_context__.g.process : __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/process/browser.js [app-client] (ecmascript)");
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/polyfill-module.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

"trimStart" in String.prototype || (String.prototype.trimStart = String.prototype.trimLeft), "trimEnd" in String.prototype || (String.prototype.trimEnd = String.prototype.trimRight), "description" in Symbol.prototype || Object.defineProperty(Symbol.prototype, "description", {
    configurable: !0,
    get: function get() {
        var t = /\((.*)\)/.exec(this.toString());
        return t ? t[1] : void 0;
    }
}), Array.prototype.flat || (Array.prototype.flat = function(t, r) {
    return r = this.concat.apply([], this), t > 1 && r.some(Array.isArray) ? r.flat(t - 1) : r;
}, Array.prototype.flatMap = function(t, r) {
    return this.map(t, r).flat();
}), Promise.prototype.finally || (Promise.prototype.finally = function(t) {
    if ("function" != typeof t) return this.then(t, t);
    var r = this.constructor || Promise;
    return this.then(function(n) {
        return r.resolve(t()).then(function() {
            return n;
        });
    }, function(n) {
        return r.resolve(t()).then(function() {
            throw n;
        });
    });
}), Object.fromEntries || (Object.fromEntries = function(t) {
    return Array.from(t).reduce(function(t, r) {
        return t[r[0]] = r[1], t;
    }, {});
}), Array.prototype.at || (Array.prototype.at = function(t) {
    var r = Math.trunc(t) || 0;
    if (r < 0 && (r += this.length), !(r < 0 || r >= this.length)) return this[r];
}), Object.hasOwn || (Object.hasOwn = function(t, r) {
    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
    return Object.prototype.hasOwnProperty.call(Object(t), r);
}), "canParse" in URL || (URL.canParse = function(t, r) {
    try {
        return !!new URL(t, r);
    } catch (t) {
        return !1;
    }
});
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/deployment-id.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getAssetToken: null,
    getAssetTokenQuery: null,
    getDeploymentId: null,
    getDeploymentIdQuery: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getAssetToken: function getAssetToken1() {
        return getAssetToken;
    },
    getAssetTokenQuery: function getAssetTokenQuery1() {
        return getAssetTokenQuery;
    },
    getDeploymentId: function getDeploymentId1() {
        return getDeploymentId;
    },
    getDeploymentIdQuery: function getDeploymentIdQuery1() {
        return getDeploymentIdQuery;
    }
});
var deploymentId;
if (typeof window !== 'undefined') {
    deploymentId = document.documentElement.dataset.dplId;
    // Immediately remove the attribute to prevent hydration errors (the dplId was inserted into the
    // HTML only), React isn't aware of it at all.
    delete document.documentElement.dataset.dplId;
} else {
    // Client side: replaced with globalThis.NEXT_DEPLOYMENT_ID
    // Server side: left as is or replaced with a string or replaced with false
    deploymentId = ("TURBOPACK compile-time value", false) || undefined;
}
function getDeploymentId() {
    return deploymentId;
}
function getDeploymentIdQuery() {
    var ampersand = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var id = getDeploymentId();
    if (id) {
        return "".concat(ampersand ? '&' : '?', "dpl=").concat(id);
    }
    return '';
}
function getAssetToken() {
    return ("TURBOPACK compile-time value", "") || ("TURBOPACK compile-time value", false);
}
function getAssetTokenQuery() {
    var ampersand = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var id = getAssetToken();
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return '';
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _call_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_call_super.cjs [app-client] (ecmascript)");
var _class_call_check = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _inherits = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_inherits.cjs [app-client] (ecmascript)");
var _wrap_native_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_wrap_native_super.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InvariantError", {
    enumerable: true,
    get: function get() {
        return InvariantError;
    }
});
var InvariantError = /*#__PURE__*/ function(Error1) {
    _inherits._(InvariantError, Error1);
    function InvariantError(message, options) {
        _class_call_check._(this, InvariantError);
        var _this;
        _this = _call_super._(this, InvariantError, [
            "Invariant: ".concat(message.endsWith('.') ? message : message + '.', " This is a bug in Next.js."),
            options
        ]);
        _this.name = 'InvariantError';
        return _this;
    }
    return InvariantError;
}(_wrap_native_super._(Error));
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/is-plain-object.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getObjectClassLabel: null,
    isPlainObject: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getObjectClassLabel: function getObjectClassLabel1() {
        return getObjectClassLabel;
    },
    isPlainObject: function isPlainObject1() {
        return isPlainObject;
    }
});
function getObjectClassLabel(value) {
    return Object.prototype.toString.call(value);
}
function isPlainObject(value) {
    if (getObjectClassLabel(value) !== '[object Object]') {
        return false;
    }
    var prototype = Object.getPrototypeOf(value);
    /**
   * this used to be previously:
   *
   * `return prototype === null || prototype === Object.prototype`
   *
   * but Edge Runtime expose Object from vm, being that kind of type-checking wrongly fail.
   *
   * It was changed to the current implementation since it's resilient to serialization.
   */ return prototype === null || prototype.hasOwnProperty('isPrototypeOf');
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This has to be a shared module which is shared between client component error boundary and dynamic component
var _call_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_call_super.cjs [app-client] (ecmascript)");
var _class_call_check = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _inherits = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_inherits.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var _wrap_native_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_wrap_native_super.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function BailoutToCSRError1() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function isBailoutToCSRError1() {
        return isBailoutToCSRError;
    }
});
var BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
var BailoutToCSRError = /*#__PURE__*/ function(Error1) {
    _inherits._(BailoutToCSRError, Error1);
    function BailoutToCSRError(reason) {
        _class_call_check._(this, BailoutToCSRError);
        var _this;
        _this = _call_super._(this, BailoutToCSRError, [
            "Bail out to client-side rendering: ".concat(reason)
        ]), _this.reason = reason, _this.digest = BAILOUT_TO_CSR;
        return _this;
    }
    return BailoutToCSRError;
}(_wrap_native_super._(Error));
function isBailoutToCSRError(err) {
    if ((typeof err === "undefined" ? "undefined" : _type_of._(err)) !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/error-source.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    decorateServerError: null,
    getErrorSource: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    decorateServerError: function decorateServerError1() {
        return decorateServerError;
    },
    getErrorSource: function getErrorSource1() {
        return getErrorSource;
    }
});
var symbolError = Symbol.for('NextjsError');
function getErrorSource(error) {
    return error[symbolError] || null;
}
function decorateServerError(error, type) {
    Object.defineProperty(error, symbolError, {
        writable: false,
        enumerable: false,
        configurable: false,
        value: type
    });
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/is-thenable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Check to see if a value is Thenable.
 *
 * @param promise the maybe-thenable value
 * @returns true if the value is thenable
 */ var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isThenable", {
    enumerable: true,
    get: function get() {
        return isThenable;
    }
});
function isThenable(promise) {
    return promise !== null && (typeof promise === "undefined" ? "undefined" : _type_of._(promise)) === 'object' && 'then' in promise && typeof promise.then === 'function';
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HeadManagerContext", {
    enumerable: true,
    get: function get() {
        return HeadManagerContext;
    }
});
var _interop_require_default = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
var _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var HeadManagerContext = _react.default.createContext({});
if ("TURBOPACK compile-time truthy", 1) {
    HeadManagerContext.displayName = 'HeadManagerContext';
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    NavigationPromisesContext: null,
    PathParamsContext: null,
    PathnameContext: null,
    ReadonlyURLSearchParams: null,
    SearchParamsContext: null,
    createDevToolsInstrumentedPromise: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    NavigationPromisesContext: function NavigationPromisesContext1() {
        return NavigationPromisesContext;
    },
    PathParamsContext: function PathParamsContext1() {
        return PathParamsContext;
    },
    PathnameContext: function PathnameContext1() {
        return PathnameContext;
    },
    ReadonlyURLSearchParams: function ReadonlyURLSearchParams() {
        return _readonlyurlsearchparams.ReadonlyURLSearchParams;
    },
    SearchParamsContext: function SearchParamsContext1() {
        return SearchParamsContext;
    },
    createDevToolsInstrumentedPromise: function createDevToolsInstrumentedPromise1() {
        return createDevToolsInstrumentedPromise;
    }
});
var _react = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _readonlyurlsearchparams = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/readonly-url-search-params.js [app-client] (ecmascript)");
var SearchParamsContext = (0, _react.createContext)(null);
var PathnameContext = (0, _react.createContext)(null);
var PathParamsContext = (0, _react.createContext)(null);
var NavigationPromisesContext = (0, _react.createContext)(null);
function createDevToolsInstrumentedPromise(displayName, value) {
    var promise = Promise.resolve(value);
    promise.status = 'fulfilled';
    promise.value = value;
    promise.displayName = "".concat(displayName, " (SSR)");
    return promise;
}
if ("TURBOPACK compile-time truthy", 1) {
    SearchParamsContext.displayName = 'SearchParamsContext';
    PathnameContext.displayName = 'PathnameContext';
    PathParamsContext.displayName = 'PathParamsContext';
    NavigationPromisesContext.displayName = 'NavigationPromisesContext';
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createPromiseWithResolvers", {
    enumerable: true,
    get: function get() {
        return createPromiseWithResolvers;
    }
});
function createPromiseWithResolvers() {
    // Shim of Stage 4 Promise.withResolvers proposal
    var resolve;
    var reject;
    var promise = new Promise(function(res, rej) {
        resolve = res;
        reject = rej;
    });
    return {
        resolve: resolve,
        reject: reject,
        promise: promise
    };
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/html-bots.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This regex contains the bots that we need to do a blocking render for and can't safely stream the response
// due to how they parse the DOM. For example, they might explicitly check for metadata in the `head` tag, so we can't stream metadata tags after the `head` was sent.
// Note: The pattern [\w-]+-Google captures all Google crawlers with "-Google" suffix (e.g., Mediapartners-Google, AdsBot-Google, Storebot-Google)
// as well as crawlers starting with "Google-" (e.g., Google-PageRenderer, Google-InspectionTool)
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HTML_LIMITED_BOT_UA_RE", {
    enumerable: true,
    get: function get() {
        return HTML_LIMITED_BOT_UA_RE;
    }
});
var HTML_LIMITED_BOT_UA_RE = /[\w-]+-Google|Google-[\w-]+|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight/i;
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/is-bot.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTML_LIMITED_BOT_UA_RE: null,
    HTML_LIMITED_BOT_UA_RE_STRING: null,
    getBotType: null,
    isBot: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTML_LIMITED_BOT_UA_RE: function HTML_LIMITED_BOT_UA_RE() {
        return _htmlbots.HTML_LIMITED_BOT_UA_RE;
    },
    HTML_LIMITED_BOT_UA_RE_STRING: function HTML_LIMITED_BOT_UA_RE_STRING1() {
        return HTML_LIMITED_BOT_UA_RE_STRING;
    },
    getBotType: function getBotType1() {
        return getBotType;
    },
    isBot: function isBot1() {
        return isBot;
    }
});
var _htmlbots = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/html-bots.js [app-client] (ecmascript)");
// Bot crawler that will spin up a headless browser and execute JS.
// Only the main Googlebot search crawler executes JavaScript, not other Google crawlers.
// x-ref: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
// This regex specifically matches "Googlebot" but NOT "Mediapartners-Google", "AdsBot-Google", etc.
var HEADLESS_BROWSER_BOT_UA_RE = /Googlebot(?!-)|Googlebot$/i;
var HTML_LIMITED_BOT_UA_RE_STRING = _htmlbots.HTML_LIMITED_BOT_UA_RE.source;
function isDomBotUA(userAgent) {
    return HEADLESS_BROWSER_BOT_UA_RE.test(userAgent);
}
function isHtmlLimitedBotUA(userAgent) {
    return _htmlbots.HTML_LIMITED_BOT_UA_RE.test(userAgent);
}
function isBot(userAgent) {
    return isDomBotUA(userAgent) || isHtmlLimitedBotUA(userAgent);
}
function getBotType(userAgent) {
    if (isDomBotUA(userAgent)) {
        return 'dom';
    }
    if (isHtmlLimitedBotUA(userAgent)) {
        return 'html';
    }
    return undefined;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    AppRouterContext: null,
    GlobalLayoutRouterContext: null,
    LayoutRouterContext: null,
    MissingSlotContext: null,
    TemplateContext: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AppRouterContext: function AppRouterContext1() {
        return AppRouterContext;
    },
    GlobalLayoutRouterContext: function GlobalLayoutRouterContext1() {
        return GlobalLayoutRouterContext;
    },
    LayoutRouterContext: function LayoutRouterContext1() {
        return LayoutRouterContext;
    },
    MissingSlotContext: function MissingSlotContext1() {
        return MissingSlotContext;
    },
    TemplateContext: function TemplateContext1() {
        return TemplateContext;
    }
});
var _interop_require_default = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
var _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var AppRouterContext = _react.default.createContext(null);
var LayoutRouterContext = _react.default.createContext(null);
var GlobalLayoutRouterContext = _react.default.createContext(null);
var TemplateContext = _react.default.createContext(null);
if ("TURBOPACK compile-time truthy", 1) {
    AppRouterContext.displayName = 'AppRouterContext';
    LayoutRouterContext.displayName = 'LayoutRouterContext';
    GlobalLayoutRouterContext.displayName = 'GlobalLayoutRouterContext';
    TemplateContext.displayName = 'TemplateContext';
}
var MissingSlotContext = _react.default.createContext(new Set());
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEFAULT_SEGMENT_KEY: null,
    NOT_FOUND_SEGMENT_KEY: null,
    PAGE_SEGMENT_KEY: null,
    addSearchParamsIfPageSegment: null,
    computeSelectedLayoutSegment: null,
    getSegmentValue: null,
    getSelectedLayoutSegmentPath: null,
    isGroupSegment: null,
    isParallelRouteSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEFAULT_SEGMENT_KEY: function DEFAULT_SEGMENT_KEY1() {
        return DEFAULT_SEGMENT_KEY;
    },
    NOT_FOUND_SEGMENT_KEY: function NOT_FOUND_SEGMENT_KEY1() {
        return NOT_FOUND_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function PAGE_SEGMENT_KEY1() {
        return PAGE_SEGMENT_KEY;
    },
    addSearchParamsIfPageSegment: function addSearchParamsIfPageSegment1() {
        return addSearchParamsIfPageSegment;
    },
    computeSelectedLayoutSegment: function computeSelectedLayoutSegment1() {
        return computeSelectedLayoutSegment;
    },
    getSegmentValue: function getSegmentValue1() {
        return getSegmentValue;
    },
    getSelectedLayoutSegmentPath: function getSelectedLayoutSegmentPath1() {
        return getSelectedLayoutSegmentPath;
    },
    isGroupSegment: function isGroupSegment1() {
        return isGroupSegment;
    },
    isParallelRouteSegment: function isParallelRouteSegment1() {
        return isParallelRouteSegment;
    }
});
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function isParallelRouteSegment(segment) {
    return segment.startsWith('@') && segment !== '@children';
}
function addSearchParamsIfPageSegment(segment, searchParams) {
    var isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
        var stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
}
function computeSelectedLayoutSegment(segments, parallelRouteKey) {
    if (!segments || segments.length === 0) {
        return null;
    }
    // For 'children', use first segment; for other parallel routes, use last segment
    var rawSegment = parallelRouteKey === 'children' ? segments[0] : segments[segments.length - 1];
    // If the default slot is showing, return null since it's not technically "selected" (it's a fallback)
    // Returning an internal value like `__DEFAULT__` would be confusing
    return rawSegment === DEFAULT_SEGMENT_KEY ? null : rawSegment;
}
function getSelectedLayoutSegmentPath(tree, parallelRouteKey) {
    var first = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, segmentPath = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
    var node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        var _parallelRoutes_children;
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        var parallelRoutes = tree[1];
        node = (_parallelRoutes_children = parallelRoutes.children) !== null && _parallelRoutes_children !== void 0 ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    var segment = node[0];
    var segmentValue = getSegmentValue(segment);
    if (!segmentValue || segmentValue.startsWith(PAGE_SEGMENT_KEY)) {
        return segmentPath;
    }
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
var PAGE_SEGMENT_KEY = '__PAGE__';
var DEFAULT_SEGMENT_KEY = '__DEFAULT__';
var NOT_FOUND_SEGMENT_KEY = '/_not-found';
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/segment-cache/segment-value-encoding.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HEAD_REQUEST_KEY: null,
    ROOT_SEGMENT_REQUEST_KEY: null,
    appendSegmentRequestKeyPart: null,
    convertSegmentPathToStaticExportFilename: null,
    createSegmentRequestKeyPart: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HEAD_REQUEST_KEY: function HEAD_REQUEST_KEY1() {
        return HEAD_REQUEST_KEY;
    },
    ROOT_SEGMENT_REQUEST_KEY: function ROOT_SEGMENT_REQUEST_KEY1() {
        return ROOT_SEGMENT_REQUEST_KEY;
    },
    appendSegmentRequestKeyPart: function appendSegmentRequestKeyPart1() {
        return appendSegmentRequestKeyPart;
    },
    convertSegmentPathToStaticExportFilename: function convertSegmentPathToStaticExportFilename1() {
        return convertSegmentPathToStaticExportFilename;
    },
    createSegmentRequestKeyPart: function createSegmentRequestKeyPart1() {
        return createSegmentRequestKeyPart;
    }
});
var _segment = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
var ROOT_SEGMENT_REQUEST_KEY = '';
var HEAD_REQUEST_KEY = '/_head';
function createSegmentRequestKeyPart(segment) {
    if (typeof segment === 'string') {
        if (segment.startsWith(_segment.PAGE_SEGMENT_KEY)) {
            // The Flight Router State type sometimes includes the search params in
            // the page segment. However, the Segment Cache tracks this as a separate
            // key. So, we strip the search params here, and then add them back when
            // the cache entry is turned back into a FlightRouterState. This is an
            // unfortunate consequence of the FlightRouteState being used both as a
            // transport type and as a cache key; we'll address this once more of the
            // Segment Cache implementation has settled.
            // TODO: We should hoist the search params out of the FlightRouterState
            // type entirely, This is our plan for dynamic route params, too.
            return _segment.PAGE_SEGMENT_KEY;
        }
        var safeName = // But params typically don't include the leading slash. We should use
        // a different encoding to avoid this special case.
        segment === '/_not-found' ? '_not-found' : encodeToFilesystemAndURLSafeString(segment);
        // Since this is not a dynamic segment, it's fully encoded. It does not
        // need to be "hydrated" with a param value.
        return safeName;
    }
    var name = segment[0];
    var paramType = segment[2];
    var safeName1 = encodeToFilesystemAndURLSafeString(name);
    var encodedName = '$' + paramType + '$' + safeName1;
    return encodedName;
}
function appendSegmentRequestKeyPart(parentRequestKey, parallelRouteKey, childRequestKeyPart) {
    // Aside from being filesystem safe, segment keys are also designed so that
    // each segment and parallel route creates its own subdirectory. Roughly in
    // the same shape as the source app directory. This is mostly just for easier
    // debugging (you can open up the build folder and navigate the output); if
    // we wanted to do we could just use a flat structure.
    // Omit the parallel route key for children, since this is the most
    // common case. Saves some bytes (and it's what the app directory does).
    var slotKey = parallelRouteKey === 'children' ? childRequestKeyPart : "@".concat(encodeToFilesystemAndURLSafeString(parallelRouteKey), "/").concat(childRequestKeyPart);
    return parentRequestKey + '/' + slotKey;
}
// Define a regex pattern to match the most common characters found in a route
// param. It excludes anything that might not be cross-platform filesystem
// compatible, like |. It does not need to be precise because the fallback is to
// just base64url-encode the whole parameter, which is fine; we just don't do it
// by default for compactness, and for easier debugging.
var simpleParamValueRegex = /^[a-zA-Z0-9\-_@]+$/;
function encodeToFilesystemAndURLSafeString(value) {
    if (simpleParamValueRegex.test(value)) {
        return value;
    }
    // If there are any unsafe characters, base64url-encode the entire value.
    // We also add a ! prefix so it doesn't collide with the simple case.
    var base64url = btoa(value).replace(/\+/g, '-') // Replace '+' with '-'
    .replace(/\//g, '_') // Replace '/' with '_'
    .replace(/=+$/, '') // Remove trailing '='
    ;
    return '!' + base64url;
}
function convertSegmentPathToStaticExportFilename(segmentPath) {
    return "__next".concat(segmentPath.replace(/\//g, '.'), ".txt");
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/hash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// http://www.cse.yorku.ca/~oz/hash.html
// More specifically, 32-bit hash via djbxor
// (ref: https://gist.github.com/eplawless/52813b1d8ad9af510d85?permalink_comment_id=3367765#gistcomment-3367765)
// This is due to number type differences between rust for turbopack to js number types,
// where rust does not have easy way to repreesnt js's 53-bit float number type for the matching
// overflow behavior. This is more `correct` in terms of having canonical hash across different runtime / implementation
// as can gaurantee determinstic output from 32bit hash.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    djb2Hash: null,
    hexHash: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    djb2Hash: function djb2Hash1() {
        return djb2Hash;
    },
    hexHash: function hexHash1() {
        return hexHash;
    }
});
function djb2Hash(str) {
    var hash = 5381;
    for(var i = 0; i < str.length; i++){
        var char = str.charCodeAt(i);
        hash = (hash << 5) + hash + char & 0xffffffff;
    }
    return hash >>> 0;
}
function hexHash(str) {
    return djb2Hash(str).toString(36).slice(0, 5);
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/cache-busting-search-param.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _async_to_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_async_to_generator.cjs [app-client] (ecmascript)");
var _ts_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_ts_generator.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    computeCacheBustingSearchParam: null,
    computeLegacyCacheBustingSearchParam: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    computeCacheBustingSearchParam: function computeCacheBustingSearchParam1() {
        return computeCacheBustingSearchParam;
    },
    computeLegacyCacheBustingSearchParam: function computeLegacyCacheBustingSearchParam1() {
        return computeLegacyCacheBustingSearchParam;
    }
});
var _hash = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/hash.js [app-client] (ecmascript)");
var CACHE_BUSTING_SEARCH_PARAM_DIGEST_BYTES = 12;
var textEncoder = new TextEncoder();
function encodeCacheBustingSearchParam(bytes) {
    var binary = '';
    for(var i = 0; i < bytes.length; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function normalizeCacheBustingInput(value) {
    if (value === undefined) {
        return '0';
    }
    return Array.isArray(value) ? value.join(',') : value;
}
function createCacheBustingSearchParamInput(prefetchHeader, segmentPrefetchHeader, stateTreeHeader, nextUrlHeader) {
    if ((prefetchHeader === undefined || prefetchHeader === '0') && segmentPrefetchHeader === undefined && stateTreeHeader === undefined && nextUrlHeader === undefined) {
        return null;
    }
    return [
        prefetchHeader !== null && prefetchHeader !== void 0 ? prefetchHeader : '0',
        normalizeCacheBustingInput(segmentPrefetchHeader),
        normalizeCacheBustingInput(stateTreeHeader),
        normalizeCacheBustingInput(nextUrlHeader)
    ].join(',');
}
function computeCacheBustingSearchParamFromInput(input) {
    return _async_to_generator._(function() {
        var digest;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        globalThis.crypto.subtle.digest('SHA-256', textEncoder.encode(input))
                    ];
                case 1:
                    digest = _state.sent();
                    return [
                        2,
                        encodeCacheBustingSearchParam(new Uint8Array(digest).subarray(0, CACHE_BUSTING_SEARCH_PARAM_DIGEST_BYTES))
                    ];
            }
        });
    })();
}
function computeCacheBustingSearchParam(prefetchHeader, segmentPrefetchHeader, stateTreeHeader, nextUrlHeader) {
    return _async_to_generator._(function() {
        var input;
        return _ts_generator._(this, function(_state) {
            input = createCacheBustingSearchParamInput(prefetchHeader, segmentPrefetchHeader, stateTreeHeader, nextUrlHeader);
            if (input === null) {
                return [
                    2,
                    ''
                ];
            }
            return [
                2,
                computeCacheBustingSearchParamFromInput(input)
            ];
        });
    })();
}
function computeLegacyCacheBustingSearchParam(prefetchHeader, segmentPrefetchHeader, stateTreeHeader, nextUrlHeader) {
    var input = createCacheBustingSearchParamInput(prefetchHeader, segmentPrefetchHeader, stateTreeHeader, nextUrlHeader);
    if (input === null) {
        return '';
    }
    return (0, _hash.hexHash)(input);
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/segment-cache/vary-params-decoding.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Vary Params Decoding
 *
 * This module is shared between server and client.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "readVaryParams", {
    enumerable: true,
    get: function get() {
        return readVaryParams;
    }
});
function readVaryParams(thenable) {
    // Attach a no-op listener to force Flight to synchronously resolve the
    // thenable. When a thenable arrives from the Flight stream, it may be in an
    // intermediate 'resolved_model' state (data received but not unwrapped).
    // Calling .then() triggers Flight to transition it to 'fulfilled', making
    // the value available synchronously. React uses this same optimization
    // internally to avoid unnecessary microtasks.
    thenable.then(noop);
    // If the thenable is still not 'fulfilled' after calling .then(), the server
    // failed to resolve it before the stream ended. Treat as unknown.
    if (thenable.status !== 'fulfilled') {
        return null;
    }
    return thenable.value;
}
var noop = function noop() {};
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/app-router-types.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * App Router types - Client-safe types for the Next.js App Router
 *
 * This file contains type definitions that can be safely imported
 * by both client-side and server-side code without circular dependencies.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PrefetchHint", {
    enumerable: true,
    get: function get() {
        return PrefetchHint;
    }
});
var PrefetchHint = /*#__PURE__*/ function(PrefetchHint) {
    // This segment has a runtime prefetch enabled (via unstable_instant with
    // prefetch: 'runtime'). Per-segment only, does not propagate to ancestors.
    PrefetchHint[PrefetchHint["HasRuntimePrefetch"] = 1] = "HasRuntimePrefetch";
    // This segment or one of its descendants has an instant config defined
    // (any truthy unstable_instant, regardless of prefetch mode). Propagates
    // upward so the root segment reflects the entire subtree.
    PrefetchHint[PrefetchHint["SubtreeHasInstant"] = 2] = "SubtreeHasInstant";
    // This segment itself has a loading.tsx boundary.
    PrefetchHint[PrefetchHint["SegmentHasLoadingBoundary"] = 4] = "SegmentHasLoadingBoundary";
    // A descendant segment (but not this one) has a loading.tsx boundary.
    // Propagates upward so the root reflects the entire subtree.
    PrefetchHint[PrefetchHint["SubtreeHasLoadingBoundary"] = 8] = "SubtreeHasLoadingBoundary";
    // This segment is the root layout of the application.
    PrefetchHint[PrefetchHint["IsRootLayout"] = 16] = "IsRootLayout";
    // This segment's response includes its parent's data inlined into it.
    // Set at build time by the segment size measurement pass.
    PrefetchHint[PrefetchHint["ParentInlinedIntoSelf"] = 32] = "ParentInlinedIntoSelf";
    // This segment's data is inlined into one of its children — don't fetch
    // it separately. Set at build time by the segment size measurement pass.
    PrefetchHint[PrefetchHint["InlinedIntoChild"] = 64] = "InlinedIntoChild";
    // On a __PAGE__: this page's response includes the head (metadata/viewport)
    // at the end of its SegmentPrefetch[] array.
    PrefetchHint[PrefetchHint["HeadInlinedIntoSelf"] = 128] = "HeadInlinedIntoSelf";
    // On the root hint node: the head was NOT inlined into any page — fetch
    // it separately. Absence of this bit means the head is bundled into a page.
    PrefetchHint[PrefetchHint["HeadOutlined"] = 256] = "HeadOutlined";
    return PrefetchHint;
}({});
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parsePath", {
    enumerable: true,
    get: function get() {
        return parsePath;
    }
});
function parsePath(path) {
    var hashIndex = path.indexOf('#');
    var queryIndex = path.indexOf('?');
    var hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : '',
            hash: hashIndex > -1 ? path.slice(hashIndex) : ''
        };
    }
    return {
        pathname: path,
        query: '',
        hash: ''
    };
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addPathPrefix", {
    enumerable: true,
    get: function get() {
        return addPathPrefix;
    }
});
var _parsepath = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-client] (ecmascript)");
function addPathPrefix(path, prefix) {
    if (!path.startsWith('/') || !prefix) {
        return path;
    }
    var _ref = (0, _parsepath.parsePath)(path), pathname = _ref.pathname, query = _ref.query, hash = _ref.hash;
    return "".concat(prefix).concat(pathname).concat(query).concat(hash);
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeTrailingSlash", {
    enumerable: true,
    get: function get() {
        return removeTrailingSlash;
    }
});
function removeTrailingSlash(route) {
    return route.replace(/\/$/, '') || '/';
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureLeadingSlash", {
    enumerable: true,
    get: function get() {
        return ensureLeadingSlash;
    }
});
function ensureLeadingSlash(path) {
    return path.startsWith('/') ? path : "/".concat(path);
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    compareAppPaths: null,
    normalizeAppPath: null,
    normalizeRscURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    compareAppPaths: function compareAppPaths1() {
        return compareAppPaths;
    },
    normalizeAppPath: function normalizeAppPath1() {
        return normalizeAppPath;
    },
    normalizeRscURL: function normalizeRscURL1() {
        return normalizeRscURL;
    }
});
var _ensureleadingslash = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js [app-client] (ecmascript)");
var _segment = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
function normalizeAppPath(route) {
    return (0, _ensureleadingslash.ensureLeadingSlash)(route.split('/').reduce(function(pathname, segment, index, segments) {
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, _segment.isGroupSegment)(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === '@') {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === 'page' || segment === 'route') && index === segments.length - 1) {
            return pathname;
        }
        return "".concat(pathname, "/").concat(segment);
    }, ''));
}
function compareAppPaths(a, b) {
    var aHasSlot = a.includes('/@');
    var bHasSlot = b.includes('/@');
    if (aHasSlot && !bHasSlot) return -1;
    if (!aHasSlot && bHasSlot) return 1;
    return a.localeCompare(b);
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, '$1');
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    INTERCEPTION_ROUTE_MARKERS: null,
    extractInterceptionRouteInformation: null,
    isInterceptionRouteAppPath: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    INTERCEPTION_ROUTE_MARKERS: function INTERCEPTION_ROUTE_MARKERS1() {
        return INTERCEPTION_ROUTE_MARKERS;
    },
    extractInterceptionRouteInformation: function extractInterceptionRouteInformation1() {
        return extractInterceptionRouteInformation;
    },
    isInterceptionRouteAppPath: function isInterceptionRouteAppPath1() {
        return isInterceptionRouteAppPath;
    }
});
var _apppaths = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-client] (ecmascript)");
var INTERCEPTION_ROUTE_MARKERS = [
    '(..)(..)',
    '(.)',
    '(..)',
    '(...)'
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split('/').find(function(segment) {
        return INTERCEPTION_ROUTE_MARKERS.find(function(m) {
            return segment.startsWith(m);
        });
    }) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    var interceptingRoute;
    var marker;
    var interceptedRoute;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var segment = _step.value;
            marker = INTERCEPTION_ROUTE_MARKERS.find(function(m) {
                return segment.startsWith(m);
            });
            if (marker) {
                ;
                var ref;
                ref = _sliced_to_array._(path.split(marker, 2), 2), interceptingRoute = ref[0], interceptedRoute = ref[1], ref;
                return "break";
            }
        };
        for(var _iterator = path.split('/')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _ret = _loop();
            if (_ret === "break") break;
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
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error("Invalid interception route: ".concat(path, ". Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>")), "__NEXT_ERROR_CODE", {
            value: "E269",
            enumerable: false,
            configurable: true
        });
    }
    interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case '(.)':
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === '/') {
                interceptedRoute = "/".concat(interceptedRoute);
            } else {
                interceptedRoute = interceptingRoute + '/' + interceptedRoute;
            }
            break;
        case '(..)':
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === '/') {
                throw Object.defineProperty(new Error("Invalid interception route: ".concat(path, ". Cannot use (..) marker at the root level, use (.) instead.")), "__NEXT_ERROR_CODE", {
                    value: "E207",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = interceptingRoute.split('/').slice(0, -1).concat(interceptedRoute).join('/');
            break;
        case '(...)':
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = '/' + interceptedRoute;
            break;
        case '(..)(..)':
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            var splitInterceptingRoute = interceptingRoute.split('/');
            if (splitInterceptingRoute.length <= 2) {
                throw Object.defineProperty(new Error("Invalid interception route: ".concat(path, ". Cannot use (..)(..) marker at the root level or one level up.")), "__NEXT_ERROR_CODE", {
                    value: "E486",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join('/');
            break;
        default:
            throw Object.defineProperty(new Error('Invariant: unexpected marker'), "__NEXT_ERROR_CODE", {
                value: "E112",
                enumerable: false,
                configurable: true
            });
    }
    return {
        interceptingRoute: interceptingRoute,
        interceptedRoute: interceptedRoute
    };
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "pathHasPrefix", {
    enumerable: true,
    get: function get() {
        return pathHasPrefix;
    }
});
var _parsepath = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-client] (ecmascript)");
function pathHasPrefix(path, prefix) {
    if (typeof path !== 'string') {
        return false;
    }
    var pathname = (0, _parsepath.parsePath)(path).pathname;
    return pathname === prefix || pathname.startsWith(prefix + '/');
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/server-reference-info.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    extractInfoFromServerReferenceId: null,
    omitUnusedArgs: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    extractInfoFromServerReferenceId: function extractInfoFromServerReferenceId1() {
        return extractInfoFromServerReferenceId;
    },
    omitUnusedArgs: function omitUnusedArgs1() {
        return omitUnusedArgs;
    }
});
function extractInfoFromServerReferenceId(id) {
    var infoByte = parseInt(id.slice(0, 2), 16);
    var typeBit = infoByte >> 7 & 0x1;
    var argMask = infoByte >> 1 & 0x3f;
    var restArgs = infoByte & 0x1;
    var usedArgs = Array(6);
    for(var index = 0; index < 6; index++){
        var bitPosition = 5 - index;
        var bit = argMask >> bitPosition & 0x1;
        usedArgs[index] = bit === 1;
    }
    return {
        type: typeBit === 1 ? 'use-cache' : 'server-action',
        usedArgs: usedArgs,
        hasRestArgs: restArgs === 1
    };
}
function omitUnusedArgs(args, info) {
    var filteredArgs = new Array(args.length);
    var length = 0;
    for(var index = 0; index < args.length; index++){
        if (index < 6 && info.usedArgs[index] || // This assumes that the server reference info byte has the restArgs bit
        // set to 1 if there are more than 6 args.
        index >= 6 && info.hasRestArgs) {
            filteredArgs[index] = args[index];
            length = index + 1;
        }
    }
    // Trim trailing unused args from the array.
    filteredArgs.length = length;
    return filteredArgs;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/action-revalidation-kind.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ActionDidNotRevalidate: null,
    ActionDidRevalidateDynamicOnly: null,
    ActionDidRevalidateStaticAndDynamic: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ActionDidNotRevalidate: function ActionDidNotRevalidate1() {
        return ActionDidNotRevalidate;
    },
    ActionDidRevalidateDynamicOnly: function ActionDidRevalidateDynamicOnly1() {
        return ActionDidRevalidateDynamicOnly;
    },
    ActionDidRevalidateStaticAndDynamic: function ActionDidRevalidateStaticAndDynamic1() {
        return ActionDidRevalidateStaticAndDynamic;
    }
});
var ActionDidNotRevalidate = 0;
var ActionDidRevalidateStaticAndDynamic = 1;
var ActionDidRevalidateDynamicOnly = 2;
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ServerInsertedHTMLContext: null,
    useServerInsertedHTML: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ServerInsertedHTMLContext: function ServerInsertedHTMLContext1() {
        return ServerInsertedHTMLContext;
    },
    useServerInsertedHTML: function useServerInsertedHTML1() {
        return useServerInsertedHTML;
    }
});
var _interop_require_wildcard = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var ServerInsertedHTMLContext = /*#__PURE__*/ _react.default.createContext(null);
function useServerInsertedHTML(callback) {
    var addInsertedServerHTMLCallback = (0, _react.useContext)(ServerInsertedHTMLContext);
    // Should have no effects on client where there's no flush effects provider
    if (addInsertedServerHTMLCallback) {
        addInsertedServerHTMLCallback(callback);
    }
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "warnOnce", {
    enumerable: true,
    get: function get() {
        return warnOnce;
    }
});
var warnOnce = function warnOnce(_) {};
if ("TURBOPACK compile-time truthy", 1) {
    var warnings = new Set();
    warnOnce = function warnOnce(msg) {
        if (!warnings.has(msg)) {
            console.warn(msg);
        }
        warnings.add(msg);
    };
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/format-webpack-messages.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
MIT License

Copyright (c) 2015-present, Facebook, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/ "use strict";
var _object_spread = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_object_spread.cjs [app-client] (ecmascript)");
var _object_spread_props = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_object_spread_props.cjs [app-client] (ecmascript)");
var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _to_consumable_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
        return formatWebpackMessages;
    }
});
var _interop_require_default = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
var _stripansi = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/strip-ansi/index.js [app-client] (ecmascript)"));
// This file is based on https://github.com/facebook/create-react-app/blob/7b1a32be6ec9f99a6c9a3c66813f3ac09c4736b9/packages/react-dev-utils/formatWebpackMessages.js
// It's been edited to remove chalk and CRA-specific logic
var friendlySyntaxErrorLabel = 'Syntax error:';
var WEBPACK_BREAKING_CHANGE_POLYFILLS = '\n\nBREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.';
function isLikelyASyntaxError(message) {
    return (0, _stripansi.default)(message).includes(friendlySyntaxErrorLabel);
}
var hadMissingSassError = false;
// Cleans up webpack error messages.
function formatMessage(message, verbose, importTraceNote) {
    // TODO: Replace this once webpack 5 is stable
    if ((typeof message === "undefined" ? "undefined" : _type_of._(message)) === 'object' && message.message) {
        var filteredModuleTrace = message.moduleTrace && message.moduleTrace.filter(function(trace) {
            return !/next-(middleware|client-pages|route|edge-function)-loader\.js/.test(trace.originName);
        });
        var body = message.message;
        var breakingChangeIndex = body.indexOf(WEBPACK_BREAKING_CHANGE_POLYFILLS);
        if (breakingChangeIndex >= 0) {
            body = body.slice(0, breakingChangeIndex);
        }
        // TODO: Rspack currently doesn't populate moduleName correctly in some cases,
        // fall back to moduleIdentifier as a workaround
        if (__TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_RSPACK && !message.moduleName && !message.file && message.moduleIdentifier) {
            var parts = message.moduleIdentifier.split('!');
            message.moduleName = parts[parts.length - 1];
        }
        message = (message.moduleName ? (0, _stripansi.default)(message.moduleName) + '\n' : '') + (message.file ? (0, _stripansi.default)(message.file) + '\n' : '') + body + (message.details && verbose ? '\n' + message.details : '') + (filteredModuleTrace && filteredModuleTrace.length ? (importTraceNote || '\n\nImport trace for requested module:') + filteredModuleTrace.map(function(trace) {
            return "\n".concat(trace.moduleName);
        }).join('') : '') + (message.stack && verbose ? '\n' + message.stack : '');
    }
    var lines = message.split('\n');
    // Extract loader paths from Webpack-added headers and move them to end.
    // Original format: "Module build failed (from ./loaders/foo-loader.js):"
    // The header line is removed and the path is appended at the end as:
    //   "  (from ./loaders/foo-loader.js)"
    // https://github.com/webpack/webpack/blob/master/lib/ModuleError.js
    var loaderPaths = [];
    lines = lines.filter(function(line) {
        var match = /Module [A-z ]+\(from (.+)\):?\s*$/.exec(line);
        if (match) {
            loaderPaths.push(match[1]);
            return false;
        }
        return true;
    });
    // Transform parsing error into syntax error
    // TODO: move this to our ESLint formatter?
    lines = lines.map(function(line) {
        var parsingError = /Line (\d+):(?:(\d+):)?\s*Parsing error: (.+)$/.exec(line);
        if (!parsingError) {
            return line;
        }
        var _parsingError = _sliced_to_array._(parsingError, 4), errorLine = _parsingError[1], errorColumn = _parsingError[2], errorMessage = _parsingError[3];
        return "".concat(friendlySyntaxErrorLabel, " ").concat(errorMessage, " (").concat(errorLine, ":").concat(errorColumn, ")");
    });
    message = lines.join('\n');
    // Smoosh syntax errors (commonly found in CSS)
    message = message.replace(/SyntaxError\s+\((\d+):(\d+)\)\s*(.+?)\n/g, "".concat(friendlySyntaxErrorLabel, " $3 ($1:$2)\n"));
    // Clean up export errors
    message = message.replace(/^.*export '(.+?)' was not found in '(.+?)'.*$/gm, "Attempted import error: '$1' is not exported from '$2'.");
    message = message.replace(/^.*export 'default' \(imported as '(.+?)'\) was not found in '(.+?)'.*$/gm, "Attempted import error: '$2' does not contain a default export (imported as '$1').");
    message = message.replace(/^.*export '(.+?)' \(imported as '(.+?)'\) was not found in '(.+?)'.*$/gm, "Attempted import error: '$1' is not exported from '$3' (imported as '$2').");
    lines = message.split('\n');
    // Remove leading newline
    if (lines.length > 2 && lines[1].trim() === '') {
        lines.splice(1, 1);
    }
    // Cleans up verbose "module not found" messages for files and packages.
    if (lines[1] && lines[1].startsWith('Module not found: ')) {
        lines = [
            lines[0],
            lines[1].replace('Error: ', '').replace('Module not found: Cannot find file:', 'Cannot find file:')
        ].concat(_to_consumable_array._(lines.slice(2)));
    }
    // Add helpful message for users trying to use Sass for the first time
    if (lines[1] && lines[1].match(/Cannot find module.+sass/)) {
        // ./file.module.scss (<<loader info>>) => ./file.module.scss
        var firstLine = lines[0].split('!');
        lines[0] = firstLine[firstLine.length - 1];
        lines[1] = "To use Next.js' built-in Sass support, you first need to install `sass`.\n";
        lines[1] += 'Run `npm i sass` or `yarn add sass` inside your workspace.\n';
        lines[1] += '\nLearn more: https://nextjs.org/docs/messages/install-sass';
        // dispose of unhelpful stack trace
        lines = lines.slice(0, 2);
        hadMissingSassError = true;
    } else if (hadMissingSassError && message.match(/(sass-loader|resolve-url-loader: CSS error)/)) {
        // dispose of unhelpful stack trace following missing sass module
        lines = [];
    }
    if (!verbose) {
        message = lines.join('\n');
        // Internal stacks are generally useless so we strip them... with the
        // exception of stacks containing `webpack:` because they're normally
        // from user code generated by Webpack. For more information see
        // https://github.com/facebook/create-react-app/pull/1050
        message = message.replace(/^\s*at\s((?!webpack:).)*:\d+:\d+[\s)]*(\n|$)/gm, '') // at ... ...:x:y
        ;
        message = message.replace(/^\s*at\s<anonymous>(\n|$)/gm, '') // at <anonymous>
        ;
        message = message.replace(/File was processed with these loaders:\n(.+[\\/](next[\\/]dist[\\/].+|@next[\\/]react-refresh-utils[\\/]loader)\.js\n)*You may need an additional loader to handle the result of these loaders.\n/g, '');
        lines = message.split('\n');
    }
    // Append loader paths at the end (before any remaining stack trace)
    if (loaderPaths.length > 0) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = loaderPaths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var loaderPath = _step.value;
                // Don't show internal Next.js loader paths — they're noise for users
                if (!/[/\\]next[/\\]dist[/\\]/.test(loaderPath)) {
                    lines.push("  (from ".concat(loaderPath, ")"));
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
    // Remove duplicated newlines
    lines = lines.filter(function(line, index, arr) {
        return index === 0 || line.trim() !== '' || line.trim() !== arr[index - 1].trim();
    });
    // Reassemble the message
    message = lines.join('\n');
    return message.trim();
}
function formatWebpackMessages(json, verbose) {
    var formattedErrors = json.errors.map(function(message) {
        var isUnknownNextFontError = message.message.includes('An error occurred in `next/font`.');
        return formatMessage(message, isUnknownNextFontError || verbose);
    });
    var formattedWarnings = json.warnings.map(function(message) {
        return formatMessage(message, verbose);
    });
    // Reorder errors to put the most relevant ones first.
    var reactServerComponentsError = -1;
    for(var i = 0; i < formattedErrors.length; i++){
        var error = formattedErrors[i];
        if (error.includes('ReactServerComponentsError')) {
            reactServerComponentsError = i;
            break;
        }
    }
    // Move the reactServerComponentsError to the top if it exists
    if (reactServerComponentsError !== -1) {
        var error1 = formattedErrors.splice(reactServerComponentsError, 1);
        formattedErrors.unshift(error1[0]);
    }
    var result = _object_spread_props._(_object_spread._({}, json), {
        errors: formattedErrors,
        warnings: formattedWarnings
    });
    if (!verbose && result.errors.some(isLikelyASyntaxError)) {
        // If there are any syntax errors, show just them.
        result.errors = result.errors.filter(isLikelyASyntaxError);
        result.warnings = [];
    }
    return result;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/errors/constants.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MISSING_ROOT_TAGS_ERROR", {
    enumerable: true,
    get: function get() {
        return MISSING_ROOT_TAGS_ERROR;
    }
});
var MISSING_ROOT_TAGS_ERROR = 'NEXT_MISSING_ROOT_TAGS';
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/normalized-asset-prefix.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizedAssetPrefix", {
    enumerable: true,
    get: function get() {
        return normalizedAssetPrefix;
    }
});
function normalizedAssetPrefix(assetPrefix) {
    // remove all leading slashes and trailing slashes
    var escapedAssetPrefix = (assetPrefix === null || assetPrefix === void 0 ? void 0 : assetPrefix.replace(/^\/+|\/+$/g, '')) || false;
    // if an assetPrefix was '/', we return empty string
    // because it could be an unnecessary trailing slash
    if (!escapedAssetPrefix) {
        return '';
    }
    if (URL.canParse(escapedAssetPrefix)) {
        var url = new URL(escapedAssetPrefix).toString();
        return url.endsWith('/') ? url.slice(0, -1) : url;
    }
    // assuming assetPrefix here is a pathname-style,
    // restore the leading slash
    return "/".concat(escapedAssetPrefix);
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/is-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getProperError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * Checks whether the given value is a NextError.
 * This can be used to print a more detailed error message with properties like `code` & `digest`.
 */ default: function _default() {
        return isError;
    },
    getProperError: function getProperError1() {
        return getProperError;
    }
});
var _isplainobject = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/is-plain-object.js [app-client] (ecmascript)");
/**
 * This is a safe stringify function that handles circular references.
 * We're using a simpler version here to avoid introducing
 * the dependency `safe-stable-stringify` into production bundle.
 *
 * This helper is used both in development and production.
 */ function safeStringifyLite(obj) {
    var seen = new WeakSet();
    return JSON.stringify(obj, function(_key, value) {
        // If value is an object and already seen, replace with "[Circular]"
        if ((typeof value === "undefined" ? "undefined" : _type_of._(value)) === 'object' && value !== null) {
            if (seen.has(value)) {
                return '[Circular]';
            }
            seen.add(value);
        }
        return value;
    });
}
function isError(err) {
    return (typeof err === "undefined" ? "undefined" : _type_of._(err)) === 'object' && err !== null && 'name' in err && 'message' in err;
}
function getProperError(err) {
    if (isError(err)) {
        return err;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        // provide better error for case where `throw undefined`
        // is called in development
        if (typeof err === 'undefined') {
            return Object.defineProperty(new Error('An undefined error was thrown, ' + 'see here for more info: https://nextjs.org/docs/messages/threw-undefined'), "__NEXT_ERROR_CODE", {
                value: "E98",
                enumerable: false,
                configurable: true
            });
        }
        if (err === null) {
            return Object.defineProperty(new Error('A null error was thrown, ' + 'see here for more info: https://nextjs.org/docs/messages/threw-undefined'), "__NEXT_ERROR_CODE", {
                value: "E336",
                enumerable: false,
                configurable: true
            });
        }
    }
    return Object.defineProperty(new Error((0, _isplainobject.isPlainObject)(err) ? safeStringifyLite(err) : err + ''), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/require-instrumentation-client.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * This module imports the client instrumentation hook from the project root.
 *
 * The `private-next-instrumentation-client` module is automatically aliased to
 * the `instrumentation-client.ts` file in the project root by webpack or turbopack.
 */ "use strict";
if ("TURBOPACK compile-time truthy", 1) {
    var measureName = 'Client Instrumentation Hook';
    var startTime = performance.now();
    // eslint-disable-next-line @next/internal/typechecked-require -- Not a module.
    module.exports = {};
    var endTime = performance.now();
    var duration = endTime - startTime;
    // Using 16ms threshold as it represents one frame (1000ms/60fps)
    // This helps identify if the instrumentation hook initialization
    // could potentially cause frame drops during development.
    var THRESHOLD = 16;
    if (duration > THRESHOLD) {
        console.log("[".concat(measureName, "] Slow execution detected: ").concat(duration.toFixed(0), "ms (Note: Code download overhead is not included in this measurement)"));
    }
} else //TURBOPACK unreachable
;
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/constants.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _object_spread = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_object_spread.cjs [app-client] (ecmascript)");
var _object_spread_props = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_object_spread_props.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_SUFFIX: null,
    APP_DIR_ALIAS: null,
    CACHE_ONE_YEAR_SECONDS: null,
    DOT_NEXT_ALIAS: null,
    ESLINT_DEFAULT_DIRS: null,
    GSP_NO_RETURNED_VALUE: null,
    GSSP_COMPONENT_MEMBER_ERROR: null,
    GSSP_NO_RETURNED_VALUE: null,
    HTML_CONTENT_TYPE_HEADER: null,
    INFINITE_CACHE: null,
    INSTRUMENTATION_HOOK_FILENAME: null,
    JSON_CONTENT_TYPE_HEADER: null,
    MATCHED_PATH_HEADER: null,
    MIDDLEWARE_FILENAME: null,
    MIDDLEWARE_LOCATION_REGEXP: null,
    NEXT_BODY_SUFFIX: null,
    NEXT_CACHE_IMPLICIT_TAG_ID: null,
    NEXT_CACHE_REVALIDATED_TAGS_HEADER: null,
    NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: null,
    NEXT_CACHE_ROOT_PARAM_TAG_ID: null,
    NEXT_CACHE_SOFT_TAG_MAX_LENGTH: null,
    NEXT_CACHE_TAGS_HEADER: null,
    NEXT_CACHE_TAG_MAX_ITEMS: null,
    NEXT_CACHE_TAG_MAX_LENGTH: null,
    NEXT_DATA_SUFFIX: null,
    NEXT_INTERCEPTION_MARKER_PREFIX: null,
    NEXT_META_SUFFIX: null,
    NEXT_NAV_DEPLOYMENT_ID_HEADER: null,
    NEXT_QUERY_PARAM_PREFIX: null,
    NEXT_RESUME_HEADER: null,
    NEXT_RESUME_STATE_LENGTH_HEADER: null,
    NON_STANDARD_NODE_ENV: null,
    PAGES_DIR_ALIAS: null,
    PRERENDER_REVALIDATE_HEADER: null,
    PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: null,
    PROXY_FILENAME: null,
    PROXY_LOCATION_REGEXP: null,
    PUBLIC_DIR_MIDDLEWARE_CONFLICT: null,
    ROOT_DIR_ALIAS: null,
    RSC_ACTION_CLIENT_WRAPPER_ALIAS: null,
    RSC_ACTION_ENCRYPTION_ALIAS: null,
    RSC_ACTION_PROXY_ALIAS: null,
    RSC_ACTION_VALIDATE_ALIAS: null,
    RSC_CACHE_WRAPPER_ALIAS: null,
    RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: null,
    RSC_MOD_REF_PROXY_ALIAS: null,
    RSC_SEGMENTS_DIR_SUFFIX: null,
    RSC_SEGMENT_SUFFIX: null,
    RSC_SUFFIX: null,
    SERVER_PROPS_EXPORT_ERROR: null,
    SERVER_PROPS_GET_INIT_PROPS_CONFLICT: null,
    SERVER_PROPS_SSG_CONFLICT: null,
    SERVER_RUNTIME: null,
    SSG_FALLBACK_EXPORT_ERROR: null,
    SSG_GET_INITIAL_PROPS_CONFLICT: null,
    STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: null,
    TEXT_PLAIN_CONTENT_TYPE_HEADER: null,
    UNSTABLE_REVALIDATE_RENAME_ERROR: null,
    WEBPACK_LAYERS: null,
    WEBPACK_RESOURCE_QUERIES: null,
    WEB_SOCKET_MAX_RECONNECTIONS: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_SUFFIX: function ACTION_SUFFIX1() {
        return ACTION_SUFFIX;
    },
    APP_DIR_ALIAS: function APP_DIR_ALIAS1() {
        return APP_DIR_ALIAS;
    },
    CACHE_ONE_YEAR_SECONDS: function CACHE_ONE_YEAR_SECONDS1() {
        return CACHE_ONE_YEAR_SECONDS;
    },
    DOT_NEXT_ALIAS: function DOT_NEXT_ALIAS1() {
        return DOT_NEXT_ALIAS;
    },
    ESLINT_DEFAULT_DIRS: function ESLINT_DEFAULT_DIRS1() {
        return ESLINT_DEFAULT_DIRS;
    },
    GSP_NO_RETURNED_VALUE: function GSP_NO_RETURNED_VALUE1() {
        return GSP_NO_RETURNED_VALUE;
    },
    GSSP_COMPONENT_MEMBER_ERROR: function GSSP_COMPONENT_MEMBER_ERROR1() {
        return GSSP_COMPONENT_MEMBER_ERROR;
    },
    GSSP_NO_RETURNED_VALUE: function GSSP_NO_RETURNED_VALUE1() {
        return GSSP_NO_RETURNED_VALUE;
    },
    HTML_CONTENT_TYPE_HEADER: function HTML_CONTENT_TYPE_HEADER1() {
        return HTML_CONTENT_TYPE_HEADER;
    },
    INFINITE_CACHE: function INFINITE_CACHE1() {
        return INFINITE_CACHE;
    },
    INSTRUMENTATION_HOOK_FILENAME: function INSTRUMENTATION_HOOK_FILENAME1() {
        return INSTRUMENTATION_HOOK_FILENAME;
    },
    JSON_CONTENT_TYPE_HEADER: function JSON_CONTENT_TYPE_HEADER1() {
        return JSON_CONTENT_TYPE_HEADER;
    },
    MATCHED_PATH_HEADER: function MATCHED_PATH_HEADER1() {
        return MATCHED_PATH_HEADER;
    },
    MIDDLEWARE_FILENAME: function MIDDLEWARE_FILENAME1() {
        return MIDDLEWARE_FILENAME;
    },
    MIDDLEWARE_LOCATION_REGEXP: function MIDDLEWARE_LOCATION_REGEXP1() {
        return MIDDLEWARE_LOCATION_REGEXP;
    },
    NEXT_BODY_SUFFIX: function NEXT_BODY_SUFFIX1() {
        return NEXT_BODY_SUFFIX;
    },
    NEXT_CACHE_IMPLICIT_TAG_ID: function NEXT_CACHE_IMPLICIT_TAG_ID1() {
        return NEXT_CACHE_IMPLICIT_TAG_ID;
    },
    NEXT_CACHE_REVALIDATED_TAGS_HEADER: function NEXT_CACHE_REVALIDATED_TAGS_HEADER1() {
        return NEXT_CACHE_REVALIDATED_TAGS_HEADER;
    },
    NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER1() {
        return NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER;
    },
    NEXT_CACHE_ROOT_PARAM_TAG_ID: function NEXT_CACHE_ROOT_PARAM_TAG_ID1() {
        return NEXT_CACHE_ROOT_PARAM_TAG_ID;
    },
    NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function NEXT_CACHE_SOFT_TAG_MAX_LENGTH1() {
        return NEXT_CACHE_SOFT_TAG_MAX_LENGTH;
    },
    NEXT_CACHE_TAGS_HEADER: function NEXT_CACHE_TAGS_HEADER1() {
        return NEXT_CACHE_TAGS_HEADER;
    },
    NEXT_CACHE_TAG_MAX_ITEMS: function NEXT_CACHE_TAG_MAX_ITEMS1() {
        return NEXT_CACHE_TAG_MAX_ITEMS;
    },
    NEXT_CACHE_TAG_MAX_LENGTH: function NEXT_CACHE_TAG_MAX_LENGTH1() {
        return NEXT_CACHE_TAG_MAX_LENGTH;
    },
    NEXT_DATA_SUFFIX: function NEXT_DATA_SUFFIX1() {
        return NEXT_DATA_SUFFIX;
    },
    NEXT_INTERCEPTION_MARKER_PREFIX: function NEXT_INTERCEPTION_MARKER_PREFIX1() {
        return NEXT_INTERCEPTION_MARKER_PREFIX;
    },
    NEXT_META_SUFFIX: function NEXT_META_SUFFIX1() {
        return NEXT_META_SUFFIX;
    },
    NEXT_NAV_DEPLOYMENT_ID_HEADER: function NEXT_NAV_DEPLOYMENT_ID_HEADER1() {
        return NEXT_NAV_DEPLOYMENT_ID_HEADER;
    },
    NEXT_QUERY_PARAM_PREFIX: function NEXT_QUERY_PARAM_PREFIX1() {
        return NEXT_QUERY_PARAM_PREFIX;
    },
    NEXT_RESUME_HEADER: function NEXT_RESUME_HEADER1() {
        return NEXT_RESUME_HEADER;
    },
    NEXT_RESUME_STATE_LENGTH_HEADER: function NEXT_RESUME_STATE_LENGTH_HEADER1() {
        return NEXT_RESUME_STATE_LENGTH_HEADER;
    },
    NON_STANDARD_NODE_ENV: function NON_STANDARD_NODE_ENV1() {
        return NON_STANDARD_NODE_ENV;
    },
    PAGES_DIR_ALIAS: function PAGES_DIR_ALIAS1() {
        return PAGES_DIR_ALIAS;
    },
    PRERENDER_REVALIDATE_HEADER: function PRERENDER_REVALIDATE_HEADER1() {
        return PRERENDER_REVALIDATE_HEADER;
    },
    PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER1() {
        return PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER;
    },
    PROXY_FILENAME: function PROXY_FILENAME1() {
        return PROXY_FILENAME;
    },
    PROXY_LOCATION_REGEXP: function PROXY_LOCATION_REGEXP1() {
        return PROXY_LOCATION_REGEXP;
    },
    PUBLIC_DIR_MIDDLEWARE_CONFLICT: function PUBLIC_DIR_MIDDLEWARE_CONFLICT1() {
        return PUBLIC_DIR_MIDDLEWARE_CONFLICT;
    },
    ROOT_DIR_ALIAS: function ROOT_DIR_ALIAS1() {
        return ROOT_DIR_ALIAS;
    },
    RSC_ACTION_CLIENT_WRAPPER_ALIAS: function RSC_ACTION_CLIENT_WRAPPER_ALIAS1() {
        return RSC_ACTION_CLIENT_WRAPPER_ALIAS;
    },
    RSC_ACTION_ENCRYPTION_ALIAS: function RSC_ACTION_ENCRYPTION_ALIAS1() {
        return RSC_ACTION_ENCRYPTION_ALIAS;
    },
    RSC_ACTION_PROXY_ALIAS: function RSC_ACTION_PROXY_ALIAS1() {
        return RSC_ACTION_PROXY_ALIAS;
    },
    RSC_ACTION_VALIDATE_ALIAS: function RSC_ACTION_VALIDATE_ALIAS1() {
        return RSC_ACTION_VALIDATE_ALIAS;
    },
    RSC_CACHE_WRAPPER_ALIAS: function RSC_CACHE_WRAPPER_ALIAS1() {
        return RSC_CACHE_WRAPPER_ALIAS;
    },
    RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: function RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS1() {
        return RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS;
    },
    RSC_MOD_REF_PROXY_ALIAS: function RSC_MOD_REF_PROXY_ALIAS1() {
        return RSC_MOD_REF_PROXY_ALIAS;
    },
    RSC_SEGMENTS_DIR_SUFFIX: function RSC_SEGMENTS_DIR_SUFFIX1() {
        return RSC_SEGMENTS_DIR_SUFFIX;
    },
    RSC_SEGMENT_SUFFIX: function RSC_SEGMENT_SUFFIX1() {
        return RSC_SEGMENT_SUFFIX;
    },
    RSC_SUFFIX: function RSC_SUFFIX1() {
        return RSC_SUFFIX;
    },
    SERVER_PROPS_EXPORT_ERROR: function SERVER_PROPS_EXPORT_ERROR1() {
        return SERVER_PROPS_EXPORT_ERROR;
    },
    SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function SERVER_PROPS_GET_INIT_PROPS_CONFLICT1() {
        return SERVER_PROPS_GET_INIT_PROPS_CONFLICT;
    },
    SERVER_PROPS_SSG_CONFLICT: function SERVER_PROPS_SSG_CONFLICT1() {
        return SERVER_PROPS_SSG_CONFLICT;
    },
    SERVER_RUNTIME: function SERVER_RUNTIME1() {
        return SERVER_RUNTIME;
    },
    SSG_FALLBACK_EXPORT_ERROR: function SSG_FALLBACK_EXPORT_ERROR1() {
        return SSG_FALLBACK_EXPORT_ERROR;
    },
    SSG_GET_INITIAL_PROPS_CONFLICT: function SSG_GET_INITIAL_PROPS_CONFLICT1() {
        return SSG_GET_INITIAL_PROPS_CONFLICT;
    },
    STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR1() {
        return STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR;
    },
    TEXT_PLAIN_CONTENT_TYPE_HEADER: function TEXT_PLAIN_CONTENT_TYPE_HEADER1() {
        return TEXT_PLAIN_CONTENT_TYPE_HEADER;
    },
    UNSTABLE_REVALIDATE_RENAME_ERROR: function UNSTABLE_REVALIDATE_RENAME_ERROR1() {
        return UNSTABLE_REVALIDATE_RENAME_ERROR;
    },
    WEBPACK_LAYERS: function WEBPACK_LAYERS1() {
        return WEBPACK_LAYERS;
    },
    WEBPACK_RESOURCE_QUERIES: function WEBPACK_RESOURCE_QUERIES1() {
        return WEBPACK_RESOURCE_QUERIES;
    },
    WEB_SOCKET_MAX_RECONNECTIONS: function WEB_SOCKET_MAX_RECONNECTIONS1() {
        return WEB_SOCKET_MAX_RECONNECTIONS;
    }
});
var TEXT_PLAIN_CONTENT_TYPE_HEADER = 'text/plain';
var HTML_CONTENT_TYPE_HEADER = 'text/html; charset=utf-8';
var JSON_CONTENT_TYPE_HEADER = 'application/json; charset=utf-8';
var NEXT_QUERY_PARAM_PREFIX = 'nxtP';
var NEXT_INTERCEPTION_MARKER_PREFIX = 'nxtI';
var MATCHED_PATH_HEADER = 'x-matched-path';
var PRERENDER_REVALIDATE_HEADER = 'x-prerender-revalidate';
var PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = 'x-prerender-revalidate-if-generated';
var RSC_SEGMENTS_DIR_SUFFIX = '.segments';
var RSC_SEGMENT_SUFFIX = '.segment.rsc';
var RSC_SUFFIX = '.rsc';
var ACTION_SUFFIX = '.action';
var NEXT_DATA_SUFFIX = '.json';
var NEXT_META_SUFFIX = '.meta';
var NEXT_BODY_SUFFIX = '.body';
var NEXT_NAV_DEPLOYMENT_ID_HEADER = 'x-nextjs-deployment-id';
var NEXT_CACHE_TAGS_HEADER = 'x-next-cache-tags';
var NEXT_CACHE_REVALIDATED_TAGS_HEADER = 'x-next-revalidated-tags';
var NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = 'x-next-revalidate-tag-token';
var NEXT_RESUME_HEADER = 'next-resume';
var NEXT_RESUME_STATE_LENGTH_HEADER = 'x-next-resume-state-length';
var NEXT_CACHE_TAG_MAX_ITEMS = 128;
var NEXT_CACHE_TAG_MAX_LENGTH = 256;
var NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
var NEXT_CACHE_IMPLICIT_TAG_ID = '_N_T_';
var NEXT_CACHE_ROOT_PARAM_TAG_ID = '_N_RP_';
var CACHE_ONE_YEAR_SECONDS = 31536000;
var INFINITE_CACHE = 0xfffffffe;
var MIDDLEWARE_FILENAME = 'middleware';
var MIDDLEWARE_LOCATION_REGEXP = "(?:src/)?".concat(MIDDLEWARE_FILENAME);
var PROXY_FILENAME = 'proxy';
var PROXY_LOCATION_REGEXP = "(?:src/)?".concat(PROXY_FILENAME);
var INSTRUMENTATION_HOOK_FILENAME = 'instrumentation';
var PAGES_DIR_ALIAS = 'private-next-pages';
var DOT_NEXT_ALIAS = 'private-dot-next';
var ROOT_DIR_ALIAS = 'private-next-root-dir';
var APP_DIR_ALIAS = 'private-next-app-dir';
var RSC_MOD_REF_PROXY_ALIAS = 'private-next-rsc-mod-ref-proxy';
var RSC_ACTION_VALIDATE_ALIAS = 'private-next-rsc-action-validate';
var RSC_ACTION_PROXY_ALIAS = 'private-next-rsc-server-reference';
var RSC_CACHE_WRAPPER_ALIAS = 'private-next-rsc-cache-wrapper';
var RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS = 'private-next-rsc-track-dynamic-import';
var RSC_ACTION_ENCRYPTION_ALIAS = 'private-next-rsc-action-encryption';
var RSC_ACTION_CLIENT_WRAPPER_ALIAS = 'private-next-rsc-action-client-wrapper';
var PUBLIC_DIR_MIDDLEWARE_CONFLICT = "You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict";
var SSG_GET_INITIAL_PROPS_CONFLICT = "You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps";
var SERVER_PROPS_GET_INIT_PROPS_CONFLICT = "You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.";
var SERVER_PROPS_SSG_CONFLICT = "You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps";
var STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = "can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props";
var SERVER_PROPS_EXPORT_ERROR = "pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export";
var GSP_NO_RETURNED_VALUE = 'Your `getStaticProps` function did not return an object. Did you forget to add a `return`?';
var GSSP_NO_RETURNED_VALUE = 'Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?';
var UNSTABLE_REVALIDATE_RENAME_ERROR = 'The `unstable_revalidate` property is available for general use.\n' + 'Please use `revalidate` instead.';
var GSSP_COMPONENT_MEMBER_ERROR = "can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member";
var NON_STANDARD_NODE_ENV = 'You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env';
var SSG_FALLBACK_EXPORT_ERROR = "Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export";
var ESLINT_DEFAULT_DIRS = [
    'app',
    'pages',
    'components',
    'lib',
    'src'
];
var SERVER_RUNTIME = {
    edge: 'edge',
    experimentalEdge: 'experimental-edge',
    nodejs: 'nodejs'
};
var WEB_SOCKET_MAX_RECONNECTIONS = 12;
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ var WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: 'shared',
    /**
   * The layer for server-only runtime and picking up `react-server` export conditions.
   * Including app router RSC pages and app router custom routes and metadata routes.
   */ reactServerComponents: 'rsc',
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: 'ssr',
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: 'action-browser',
    /**
   * The Node.js bundle layer for the API routes.
   */ apiNode: 'api-node',
    /**
   * The Edge Lite bundle layer for the API routes.
   */ apiEdge: 'api-edge',
    /**
   * The layer for the middleware code.
   */ middleware: 'middleware',
    /**
   * The layer for the instrumentation hooks.
   */ instrument: 'instrument',
    /**
   * The layer for assets on the edge.
   */ edgeAsset: 'edge-asset',
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: 'app-pages-browser',
    /**
   * The browser client bundle layer for Pages directory.
   */ pagesDirBrowser: 'pages-dir-browser',
    /**
   * The Edge Lite bundle layer for Pages directory.
   */ pagesDirEdge: 'pages-dir-edge',
    /**
   * The Node.js bundle layer for Pages directory.
   */ pagesDirNode: 'pages-dir-node'
};
var WEBPACK_LAYERS = _object_spread_props._(_object_spread._({}, WEBPACK_LAYERS_NAMES), {
    GROUP: {
        builtinReact: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ],
        serverOnly: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
            // pages api
            WEBPACK_LAYERS_NAMES.apiNode,
            WEBPACK_LAYERS_NAMES.apiEdge
        ],
        clientOnly: [
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.shared,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        appPages: [
            // app router pages and layouts
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ]
    }
});
var WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: '__next_edge_ssr_entry__',
    metadata: '__next_metadata__',
    metadataRoute: '__next_metadata_route__',
    metadataImageMeta: '__next_metadata_image_meta__'
};
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/framework/boundary-constants.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    METADATA_BOUNDARY_NAME: null,
    OUTLET_BOUNDARY_NAME: null,
    ROOT_LAYOUT_BOUNDARY_NAME: null,
    VIEWPORT_BOUNDARY_NAME: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    METADATA_BOUNDARY_NAME: function METADATA_BOUNDARY_NAME1() {
        return METADATA_BOUNDARY_NAME;
    },
    OUTLET_BOUNDARY_NAME: function OUTLET_BOUNDARY_NAME1() {
        return OUTLET_BOUNDARY_NAME;
    },
    ROOT_LAYOUT_BOUNDARY_NAME: function ROOT_LAYOUT_BOUNDARY_NAME1() {
        return ROOT_LAYOUT_BOUNDARY_NAME;
    },
    VIEWPORT_BOUNDARY_NAME: function VIEWPORT_BOUNDARY_NAME1() {
        return VIEWPORT_BOUNDARY_NAME;
    }
});
var METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
var VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
var OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__';
var ROOT_LAYOUT_BOUNDARY_NAME = '__next_root_layout_boundary__';
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/scheduler.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    atLeastOneTask: null,
    scheduleImmediate: null,
    scheduleOnNextTick: null,
    waitAtLeastOneReactRenderTask: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    atLeastOneTask: function atLeastOneTask1() {
        return atLeastOneTask;
    },
    scheduleImmediate: function scheduleImmediate1() {
        return scheduleImmediate;
    },
    scheduleOnNextTick: function scheduleOnNextTick1() {
        return scheduleOnNextTick;
    },
    waitAtLeastOneReactRenderTask: function waitAtLeastOneReactRenderTask1() {
        return waitAtLeastOneReactRenderTask;
    }
});
var scheduleOnNextTick = function scheduleOnNextTick(cb) {
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(function() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(cb);
        }
    });
};
var scheduleImmediate = function scheduleImmediate(cb) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise(function(resolve) {
        return scheduleImmediate(resolve);
    });
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return new Promise(function(r) {
            return setImmediate(r);
        });
    }
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/framework/boundary-components.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _define_property = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_define_property.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    MetadataBoundary: null,
    OutletBoundary: null,
    RootLayoutBoundary: null,
    ViewportBoundary: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    MetadataBoundary: function MetadataBoundary1() {
        return MetadataBoundary;
    },
    OutletBoundary: function OutletBoundary1() {
        return OutletBoundary;
    },
    RootLayoutBoundary: function RootLayoutBoundary1() {
        return RootLayoutBoundary;
    },
    ViewportBoundary: function ViewportBoundary1() {
        return ViewportBoundary;
    }
});
var _boundaryconstants = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/framework/boundary-constants.js [app-client] (ecmascript)");
var _obj;
// We use a namespace object to allow us to recover the name of the function
// at runtime even when production bundling/minification is used.
var NameSpace = (_obj = {}, _define_property._(_obj, _boundaryconstants.METADATA_BOUNDARY_NAME, function(param) {
    var children = param.children;
    return children;
}), _define_property._(_obj, _boundaryconstants.VIEWPORT_BOUNDARY_NAME, function(param) {
    var children = param.children;
    return children;
}), _define_property._(_obj, _boundaryconstants.OUTLET_BOUNDARY_NAME, function(param) {
    var children = param.children;
    return children;
}), _define_property._(_obj, _boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME, function(param) {
    var children = param.children;
    return children;
}), _obj);
var MetadataBoundary = // so it retains the name inferred from the namespace object
NameSpace[_boundaryconstants.METADATA_BOUNDARY_NAME.slice(0)];
var ViewportBoundary = // so it retains the name inferred from the namespace object
NameSpace[_boundaryconstants.VIEWPORT_BOUNDARY_NAME.slice(0)];
var OutletBoundary = // so it retains the name inferred from the namespace object
NameSpace[_boundaryconstants.OUTLET_BOUNDARY_NAME.slice(0)];
var RootLayoutBoundary = // so it retains the name inferred from the namespace object
NameSpace[_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME.slice(0)];
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/errors/stitched-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    coerceError: null,
    decorateDevError: null,
    getOwnerStack: null,
    setOwnerStack: null,
    setOwnerStackIfAvailable: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    coerceError: function coerceError1() {
        return coerceError;
    },
    decorateDevError: function decorateDevError1() {
        return decorateDevError;
    },
    getOwnerStack: function getOwnerStack1() {
        return getOwnerStack;
    },
    setOwnerStack: function setOwnerStack1() {
        return setOwnerStack;
    },
    setOwnerStackIfAvailable: function setOwnerStackIfAvailable1() {
        return setOwnerStackIfAvailable;
    }
});
var _interop_require_default = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
var _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/is-error.js [app-client] (ecmascript)"));
var ownerStacks = new WeakMap();
function getOwnerStack(error) {
    return ownerStacks.get(error);
}
function setOwnerStack(error, stack) {
    ownerStacks.set(error, stack);
}
function coerceError(value) {
    return (0, _iserror.default)(value) ? value : Object.defineProperty(new Error('' + value), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
}
function setOwnerStackIfAvailable(error) {
    // React 18 and prod does not have `captureOwnerStack`
    if ('captureOwnerStack' in _react.default) {
        var ownerStack = _react.default.captureOwnerStack();
        // Only set if we captured a valid owner stack, or if none exists yet.
        // This prevents overwriting a valid owner stack captured earlier
        // (e.g., in onRecoverableError) with null captured later.
        if (ownerStack || !ownerStacks.has(error)) {
            setOwnerStack(error, ownerStack);
        }
    }
}
function decorateDevError(thrownValue) {
    var error = coerceError(thrownValue);
    setOwnerStackIfAvailable(error);
    return error;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/shared/console-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// To distinguish from React error.digest, we use a different symbol here to determine if the error is from console.error or unhandled promise rejection.
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createConsoleError: null,
    isConsoleError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createConsoleError: function createConsoleError1() {
        return createConsoleError;
    },
    isConsoleError: function isConsoleError1() {
        return isConsoleError;
    }
});
var digestSym = Symbol.for('next.console.error.digest');
function createConsoleError(message, environmentName) {
    var error = typeof message === 'string' ? Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    }) : message;
    error[digestSym] = 'NEXT_CONSOLE_ERROR';
    if (environmentName && !error.environmentName) {
        error.environmentName = environmentName;
    }
    return error;
}
var isConsoleError = function isConsoleError(error) {
    return error && error[digestSym] === 'NEXT_CONSOLE_ERROR';
};
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/terminal-logging-config.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getIsTerminalLoggingEnabled: null,
    getTerminalLoggingConfig: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getIsTerminalLoggingEnabled: function getIsTerminalLoggingEnabled1() {
        return getIsTerminalLoggingEnabled;
    },
    getTerminalLoggingConfig: function getTerminalLoggingConfig1() {
        return getTerminalLoggingConfig;
    }
});
function getTerminalLoggingConfig() {
    try {
        return JSON.parse(("TURBOPACK compile-time value", '"warn"') || 'false');
    } catch (unused) {
        return false;
    }
}
function getIsTerminalLoggingEnabled() {
    var config = getTerminalLoggingConfig();
    return Boolean(config);
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/shared/forward-logs-shared.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _to_consumable_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    UNDEFINED_MARKER: null,
    patchConsoleMethod: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    UNDEFINED_MARKER: function UNDEFINED_MARKER1() {
        return UNDEFINED_MARKER;
    },
    patchConsoleMethod: function patchConsoleMethod1() {
        return patchConsoleMethod;
    }
});
var UNDEFINED_MARKER = '__next_tagged_undefined';
function patchConsoleMethod(methodName, wrapper) {
    var descriptor = Object.getOwnPropertyDescriptor(console, methodName);
    if (descriptor && (descriptor.configurable || descriptor.writable) && typeof descriptor.value === 'function') {
        var originalMethod = descriptor.value;
        var originalName = Object.getOwnPropertyDescriptor(originalMethod, 'name');
        var wrapperMethod = function wrapperMethod() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            wrapper.apply(void 0, [
                methodName
            ].concat(_to_consumable_array._(args)));
            originalMethod.apply(this, args);
        };
        if (originalName) {
            Object.defineProperty(wrapperMethod, 'name', originalName);
        }
        Object.defineProperty(console, methodName, {
            value: wrapperMethod
        });
        return function() {
            Object.defineProperty(console, methodName, {
                value: originalMethod,
                writable: descriptor.writable,
                configurable: descriptor.configurable
            });
        };
    }
    return function() {};
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/forward-logs-utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    logStringify: null,
    preLogSerializationClone: null,
    safeStringifyWithDepth: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    logStringify: function logStringify1() {
        return logStringify;
    },
    preLogSerializationClone: function preLogSerializationClone1() {
        return preLogSerializationClone;
    },
    safeStringifyWithDepth: function safeStringifyWithDepth1() {
        return safeStringifyWithDepth;
    }
});
var _safestablestringify = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/safe-stable-stringify/index.js [app-client] (ecmascript)");
var _terminalloggingconfig = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/terminal-logging-config.js [app-client] (ecmascript)");
var _forwardlogsshared = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/shared/forward-logs-shared.js [app-client] (ecmascript)");
var terminalLoggingConfig = (0, _terminalloggingconfig.getTerminalLoggingConfig)();
var PROMISE_MARKER = 'Promise {}';
var UNAVAILABLE_MARKER = '[Unable to view]';
var maximumDepth = (typeof terminalLoggingConfig === "undefined" ? "undefined" : _type_of._(terminalLoggingConfig)) === 'object' && terminalLoggingConfig.depthLimit ? terminalLoggingConfig.depthLimit : 5;
var maximumBreadth = (typeof terminalLoggingConfig === "undefined" ? "undefined" : _type_of._(terminalLoggingConfig)) === 'object' && terminalLoggingConfig.edgeLimit ? terminalLoggingConfig.edgeLimit : 100;
var safeStringifyWithDepth = (0, _safestablestringify.configure)({
    maximumDepth: maximumDepth,
    maximumBreadth: maximumBreadth
});
function preLogSerializationClone(value) {
    var seen = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new WeakMap();
    if (value === undefined) return _forwardlogsshared.UNDEFINED_MARKER;
    if (value === null || (typeof value === "undefined" ? "undefined" : _type_of._(value)) !== 'object') return value;
    if (seen.has(value)) return seen.get(value);
    try {
        Object.keys(value);
    } catch (unused) {
        return UNAVAILABLE_MARKER;
    }
    try {
        if (typeof value.then === 'function') return PROMISE_MARKER;
    } catch (unused) {
        return UNAVAILABLE_MARKER;
    }
    if (Array.isArray(value)) {
        var out = [];
        seen.set(value, out);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var item = _step.value;
                try {
                    out.push(preLogSerializationClone(item, seen));
                } catch (unused) {
                    out.push(UNAVAILABLE_MARKER);
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
        return out;
    }
    var proto = Object.getPrototypeOf(value);
    if (proto === Object.prototype || proto === null) {
        var out1 = {};
        seen.set(value, out1);
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = Object.keys(value)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var key = _step1.value;
                try {
                    out1[key] = preLogSerializationClone(value[key], seen);
                } catch (unused) {
                    out1[key] = UNAVAILABLE_MARKER;
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
        return out1;
    }
    return Object.prototype.toString.call(value);
}
var logStringify = function logStringify(data) {
    try {
        var result = safeStringifyWithDepth(data);
        return result !== null && result !== void 0 ? result : '"'.concat(UNAVAILABLE_MARKER, '"');
    } catch (unused) {
        return '"'.concat(UNAVAILABLE_MARKER, '"');
    }
};
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/forward-logs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _class_call_check = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_create_class.cjs [app-client] (ecmascript)");
var _instanceof = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_instanceof.cjs [app-client] (ecmascript)");
var _object_spread = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_object_spread.cjs [app-client] (ecmascript)");
var _object_spread_props = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_object_spread_props.cjs [app-client] (ecmascript)");
var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _to_consumable_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    forwardErrorLog: null,
    forwardUnhandledError: null,
    initializeDebugLogForwarding: null,
    logQueue: null,
    logUnhandledRejection: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    forwardErrorLog: function forwardErrorLog1() {
        return forwardErrorLog;
    },
    forwardUnhandledError: function forwardUnhandledError1() {
        return forwardUnhandledError;
    },
    initializeDebugLogForwarding: function initializeDebugLogForwarding1() {
        return initializeDebugLogForwarding;
    },
    logQueue: function logQueue1() {
        return logQueue;
    },
    logUnhandledRejection: function logUnhandledRejection1() {
        return logUnhandledRejection;
    }
});
var _errorsource = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/error-source.js [app-client] (ecmascript)");
var _terminalloggingconfig = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/terminal-logging-config.js [app-client] (ecmascript)");
var _forwardlogsshared = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/shared/forward-logs-shared.js [app-client] (ecmascript)");
var _forwardlogsutils = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/forward-logs-utils.js [app-client] (ecmascript)");
var _stitchederror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/errors/stitched-error.js [app-client] (ecmascript)");
// Client-side file logger for browser logs
var ClientFileLogger = /*#__PURE__*/ function() {
    function ClientFileLogger() {
        _class_call_check._(this, ClientFileLogger);
        this.logEntries = [];
    }
    _create_class._(ClientFileLogger, [
        {
            key: "formatTimestamp",
            value: function formatTimestamp() {
                var now = new Date();
                var hours = now.getHours().toString().padStart(2, '0');
                var minutes = now.getMinutes().toString().padStart(2, '0');
                var seconds = now.getSeconds().toString().padStart(2, '0');
                var milliseconds = now.getMilliseconds().toString().padStart(3, '0');
                return "".concat(hours, ":").concat(minutes, ":").concat(seconds, ".").concat(milliseconds);
            }
        },
        {
            key: "log",
            value: function log(level, args) {
                if (isReactServerReplayedLog(args)) {
                    return;
                }
                // Format the args into a message string
                var message = args.map(function(arg) {
                    if (typeof arg === 'string') return arg;
                    if (typeof arg === 'number' || typeof arg === 'boolean') return String(arg);
                    if (arg === null) return 'null';
                    if (arg === undefined) return 'undefined';
                    // Handle DOM nodes - only log the tag name to avoid React proxied elements
                    if (_instanceof._(arg, Element)) {
                        return "<".concat(arg.tagName.toLowerCase(), ">");
                    }
                    return (0, _forwardlogsutils.safeStringifyWithDepth)(arg);
                }).join(' ');
                var logEntry = {
                    timestamp: this.formatTimestamp(),
                    level: level.toUpperCase(),
                    message: message
                };
                this.logEntries.push(logEntry);
                // Schedule flush when new log is added
                scheduleLogFlush();
            }
        },
        {
            key: "getLogs",
            value: function getLogs() {
                return _to_consumable_array._(this.logEntries);
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.logEntries = [];
            }
        }
    ]);
    return ClientFileLogger;
}();
var clientFileLogger = new ClientFileLogger();
// Set up flush-based sending of client file logs
var logFlushTimeout = null;
var heartbeatInterval = null;
var scheduleLogFlush = function scheduleLogFlush() {
    if (logFlushTimeout) {
        clearTimeout(logFlushTimeout);
    }
    logFlushTimeout = setTimeout(function() {
        sendClientFileLogs();
        logFlushTimeout = null;
    }, 100) // Send after 100ms (much faster with debouncing)
    ;
};
var cancelLogFlush = function cancelLogFlush() {
    if (logFlushTimeout) {
        clearTimeout(logFlushTimeout);
        logFlushTimeout = null;
    }
};
var startHeartbeat = function startHeartbeat() {
    if (heartbeatInterval) return;
    heartbeatInterval = setInterval(function() {
        if (logQueue.socket && logQueue.socket.readyState === WebSocket.OPEN) {
            try {
                // Send a ping to keep the connection alive
                logQueue.socket.send(JSON.stringify({
                    event: 'ping'
                }));
            } catch (error) {
                // Connection might be closed, stop heartbeat
                stopHeartbeat();
            }
        } else {
            stopHeartbeat();
        }
    }, 5000) // Send ping every 5 seconds
    ;
};
var stopHeartbeat = function stopHeartbeat() {
    if (heartbeatInterval) {
        clearInterval(heartbeatInterval);
        heartbeatInterval = null;
    }
};
var isTerminalLoggingEnabled = (0, _terminalloggingconfig.getIsTerminalLoggingEnabled)();
var methods = [
    'log',
    'info',
    'warn',
    'debug',
    'table',
    'assert',
    'dir',
    'dirxml',
    'group',
    'groupCollapsed',
    'groupEnd',
    'trace'
];
var afterThisFrame = function afterThisFrame(cb) {
    var timeout;
    var rafId = requestAnimationFrame(function() {
        timeout = setTimeout(function() {
            cb();
        });
    });
    return function() {
        cancelAnimationFrame(rafId);
        clearTimeout(timeout);
    };
};
var isPatched = false;
var serializeEntries = function serializeEntries(entries) {
    return entries.map(function(clientEntry) {
        switch(clientEntry.kind){
            case 'any-logged-error':
            case 'console':
                {
                    return _object_spread_props._(_object_spread._({}, clientEntry), {
                        args: clientEntry.args.map(stringifyUserArg)
                    });
                }
            case 'formatted-error':
                {
                    return clientEntry;
                }
            default:
                {
                    return null;
                }
        }
    });
};
// Function to send client file logs to server
var sendClientFileLogs = function sendClientFileLogs() {
    if (!logQueue.socket || logQueue.socket.readyState !== WebSocket.OPEN) {
        return;
    }
    var logs = clientFileLogger.getLogs();
    if (logs.length === 0) {
        return;
    }
    try {
        var payload = JSON.stringify({
            event: 'client-file-logs',
            logs: logs
        });
        logQueue.socket.send(payload);
    } catch (error) {
        console.error(error);
    } finally{
        // Clear logs regardless of send success to prevent memory leaks
        clientFileLogger.clear();
    }
};
var logQueue = {
    entries: [],
    flushScheduled: false,
    cancelFlush: null,
    socket: null,
    sourceType: undefined,
    router: null,
    scheduleLogSend: function scheduleLogSend(entry) {
        logQueue.entries.push(entry);
        if (logQueue.flushScheduled) {
            return;
        }
        // safe to deref and use in setTimeout closure since we cancel on new socket
        var socket = logQueue.socket;
        if (!socket) {
            return;
        }
        // we probably dont need this
        logQueue.flushScheduled = true;
        // non blocking log flush, runs at most once per frame
        logQueue.cancelFlush = afterThisFrame(function() {
            logQueue.flushScheduled = false;
            // just incase
            try {
                var payload = JSON.stringify({
                    event: 'browser-logs',
                    entries: serializeEntries(logQueue.entries),
                    router: logQueue.router,
                    // needed for source mapping, we just assign the sourceType from the last error for the whole batch
                    sourceType: logQueue.sourceType
                });
                socket.send(payload);
                logQueue.entries = [];
                logQueue.sourceType = undefined;
                // Also send client file logs
                sendClientFileLogs();
            } catch (unused) {
            // error (make sure u don't infinite loop)
            /* noop */ }
        });
    },
    onSocketReady: function onSocketReady(socket) {
        var // incase an existing timeout was going to run with a stale socket
        _logQueue_cancelFlush;
        // When MCP or terminal logging is enabled, we enable the socket connection,
        // otherwise it will not proceed.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (socket.readyState !== WebSocket.OPEN) {
            // invariant
            return;
        }
        (_logQueue_cancelFlush = logQueue.cancelFlush) === null || _logQueue_cancelFlush === void 0 ? void 0 : _logQueue_cancelFlush.call(logQueue);
        logQueue.socket = socket;
        // Add socket event listeners to track connection state
        socket.addEventListener('close', function() {
            cancelLogFlush();
            stopHeartbeat();
        });
        // Only send terminal logs if enabled
        if (isTerminalLoggingEnabled) {
            try {
                var payload = JSON.stringify({
                    event: 'browser-logs',
                    entries: serializeEntries(logQueue.entries),
                    router: logQueue.router,
                    sourceType: logQueue.sourceType
                });
                socket.send(payload);
                logQueue.entries = [];
                logQueue.sourceType = undefined;
            } catch (unused) {
            /** noop just incase */ }
        }
        // Always send client file logs when socket is ready
        sendClientFileLogs();
        // Start heartbeat to keep connection alive
        startHeartbeat();
    }
};
var stringifyUserArg = function stringifyUserArg(arg) {
    if (arg.kind !== 'arg') {
        return arg;
    }
    return _object_spread_props._(_object_spread._({}, arg), {
        data: (0, _forwardlogsutils.logStringify)(arg.data)
    });
};
var createErrorArg = function createErrorArg(error) {
    return {
        kind: 'formatted-error-arg',
        prefix: error.message ? "".concat(error.name, ": ").concat(error.message) : "".concat(error.name),
        stack: getErrorStackWithOwnerStack(error)
    };
};
var createLogEntry = function createLogEntry(level, args) {
    // Always log to client file logger with args (formatting done inside log method)
    clientFileLogger.log(level, args);
    // Only forward to terminal if enabled
    if (!isTerminalLoggingEnabled) {
        return;
    }
    // do not abstract this, it implicitly relies on which functions call it. forcing the inlined implementation makes you think about callers
    // error capture stack trace maybe
    var stack = getErrorStack(new Error());
    var stackLines = stack === null || stack === void 0 ? void 0 : stack.split('\n');
    var cleanStack = stackLines === null || stackLines === void 0 ? void 0 : stackLines.slice(3).join('\n') // this is probably ignored anyways
    ;
    var entry = {
        kind: 'console',
        consoleMethodStack: cleanStack !== null && cleanStack !== void 0 ? cleanStack : null,
        method: level,
        args: args.map(function(arg) {
            if (_instanceof._(arg, Error)) {
                return createErrorArg(arg);
            }
            return {
                kind: 'arg',
                data: (0, _forwardlogsutils.preLogSerializationClone)(arg)
            };
        })
    };
    logQueue.scheduleLogSend(entry);
};
var forwardErrorLog = function forwardErrorLog(args) {
    // Skip React server replayed logs - they were already logged on the server
    if (isReactServerReplayedLog(args)) {
        return;
    }
    // Always log to client file logger with args (formatting done inside log method)
    clientFileLogger.log('error', args);
    // Only forward to terminal if enabled
    if (!isTerminalLoggingEnabled) {
        return;
    }
    var errorObjects = args.filter(function(arg) {
        return _instanceof._(arg, Error);
    });
    var first = errorObjects.at(0);
    if (first) {
        var source = (0, _errorsource.getErrorSource)(first);
        if (source) {
            logQueue.sourceType = source;
        }
    }
    /**
   * browser shows stack regardless of type of data passed to console.error, so we should do the same
   *
   * do not abstract this, it implicitly relies on which functions call it. forcing the inlined implementation makes you think about callers
   */ var stack = getErrorStack(new Error());
    var stackLines = stack === null || stack === void 0 ? void 0 : stack.split('\n');
    var cleanStack = stackLines === null || stackLines === void 0 ? void 0 : stackLines.slice(3).join('\n');
    var entry = {
        kind: 'any-logged-error',
        method: 'error',
        consoleErrorStack: cleanStack !== null && cleanStack !== void 0 ? cleanStack : '',
        args: args.map(function(arg) {
            if (_instanceof._(arg, Error)) {
                return createErrorArg(arg);
            }
            return {
                kind: 'arg',
                data: (0, _forwardlogsutils.preLogSerializationClone)(arg)
            };
        })
    };
    logQueue.scheduleLogSend(entry);
};
var createUncaughtErrorEntry = function createUncaughtErrorEntry(errorName, errorMessage, fullStack) {
    var entry = {
        kind: 'formatted-error',
        prefix: "Uncaught ".concat(errorName, ": ").concat(errorMessage),
        stack: fullStack,
        method: 'error'
    };
    logQueue.scheduleLogSend(entry);
};
var getErrorStack = function getErrorStack(error) {
    return error.stack || '';
};
// Get error stack with owner stack appended for source mapping on the server
var getErrorStackWithOwnerStack = function getErrorStackWithOwnerStack(error) {
    var errorStack = getErrorStack(error);
    var ownerStack = (0, _stitchederror.getOwnerStack)(error);
    return ownerStack ? "".concat(errorStack, "\n").concat(ownerStack) : errorStack;
};
function logUnhandledRejection(reason) {
    // Always log to client file logger
    var message = _instanceof._(reason, Error) ? "".concat(reason.name, ": ").concat(reason.message) : JSON.stringify(reason);
    clientFileLogger.log('error', [
        "unhandledRejection: ".concat(message)
    ]);
    // Only forward to terminal if enabled
    if (!isTerminalLoggingEnabled) {
        return;
    }
    if (_instanceof._(reason, Error)) {
        createUnhandledRejectionErrorEntry(reason, getErrorStackWithOwnerStack(reason));
        return;
    }
    createUnhandledRejectionNonErrorEntry(reason);
}
var createUnhandledRejectionErrorEntry = function createUnhandledRejectionErrorEntry(error, fullStack) {
    var source = (0, _errorsource.getErrorSource)(error);
    if (source) {
        logQueue.sourceType = source;
    }
    var entry = {
        kind: 'formatted-error',
        prefix: "⨯ unhandledRejection: ".concat(error.name, ": ").concat(error.message),
        stack: fullStack,
        method: 'error'
    };
    logQueue.scheduleLogSend(entry);
};
var createUnhandledRejectionNonErrorEntry = function createUnhandledRejectionNonErrorEntry(reason) {
    var entry = {
        kind: 'any-logged-error',
        // we can't access the stack since the event is dispatched async and creating an inline error would be meaningless
        consoleErrorStack: '',
        method: 'error',
        args: [
            {
                kind: 'arg',
                data: "⨯ unhandledRejection:",
                isRejectionMessage: true
            },
            {
                kind: 'arg',
                data: (0, _forwardlogsutils.preLogSerializationClone)(reason)
            }
        ]
    };
    logQueue.scheduleLogSend(entry);
};
var isHMR = function isHMR(args) {
    var firstArg = args[0];
    if (typeof firstArg !== 'string') {
        return false;
    }
    if (firstArg.startsWith('[Fast Refresh]')) {
        return true;
    }
    if (firstArg.startsWith('[HMR]')) {
        return true;
    }
    return false;
};
/**
 * Matches the format of logs arguments React replayed from the RSC.
 */ var isReactServerReplayedLog = function isReactServerReplayedLog(args) {
    if (args.length < 3) {
        return false;
    }
    var _args = _sliced_to_array._(args, 3), format = _args[0], styles = _args[1], label = _args[2];
    if (typeof format !== 'string' || typeof styles !== 'string' || typeof label !== 'string') {
        return false;
    }
    return format.startsWith('%c%s%c') && styles.includes('background:');
};
function forwardUnhandledError(error) {
    // Always log to client file logger
    clientFileLogger.log('error', [
        "uncaughtError: ".concat(error.name, ": ").concat(error.message)
    ]);
    // Only forward to terminal if enabled
    if (!isTerminalLoggingEnabled) {
        return;
    }
    createUncaughtErrorEntry(error.name, error.message, getErrorStackWithOwnerStack(error));
}
var initializeDebugLogForwarding = function initializeDebugLogForwarding(router) {
    // probably don't need this
    if (isPatched) {
        return;
    }
    // TODO(rob): why does this break rendering on server, important to know incase the same bug appears in browser
    if (typeof window === 'undefined') {
        return;
    }
    // better to be safe than sorry
    try {
        methods.forEach(function(method) {
            return (0, _forwardlogsshared.patchConsoleMethod)(method, function(_) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                if (isHMR(args)) {
                    return;
                }
                if (isReactServerReplayedLog(args)) {
                    return;
                }
                createLogEntry(method, args);
            });
        });
    } catch (unused) {}
    logQueue.router = router;
    isPatched = true;
    // Cleanup on page unload
    window.addEventListener('beforeunload', function() {
        cancelLogFlush();
        stopHeartbeat();
        // Send any remaining logs before page unloads
        sendClientFileLogs();
    });
};
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/errors/use-error-handler.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    handleClientError: null,
    handleConsoleError: null,
    handleGlobalErrors: null,
    useErrorHandler: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    handleClientError: function handleClientError1() {
        return handleClientError;
    },
    handleConsoleError: function handleConsoleError1() {
        return handleConsoleError;
    },
    handleGlobalErrors: function handleGlobalErrors1() {
        return handleGlobalErrors;
    },
    useErrorHandler: function useErrorHandler1() {
        return useErrorHandler;
    }
});
var _interop_require_default = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
var _react = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _isnextroutererror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
var _console = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/lib/console.js [app-client] (ecmascript)");
var _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/is-error.js [app-client] (ecmascript)"));
var _consoleerror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/shared/console-error.js [app-client] (ecmascript)");
var _stitchederror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/errors/stitched-error.js [app-client] (ecmascript)");
var _forwardlogs = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/forward-logs.js [app-client] (ecmascript)");
var queueMicroTask = globalThis.queueMicrotask || function(cb) {
    return Promise.resolve().then(cb);
};
var errorQueue = [];
var errorHandlers = [];
var rejectionQueue = [];
var rejectionHandlers = [];
function handleConsoleError(originError, consoleErrorArgs) {
    var error;
    var environmentName = (0, _console.parseConsoleArgs)(consoleErrorArgs).environmentName;
    if ((0, _iserror.default)(originError)) {
        error = (0, _consoleerror.createConsoleError)(originError, environmentName);
    } else {
        error = (0, _consoleerror.createConsoleError)((0, _console.formatConsoleArgs)(consoleErrorArgs), environmentName);
    }
    (0, _stitchederror.setOwnerStackIfAvailable)(error);
    errorQueue.push(error);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var handler = _step.value;
            // Delayed the error being passed to React Dev Overlay,
            // avoid the state being synchronously updated in the component.
            queueMicroTask(function() {
                handler(error);
            });
        };
        for(var _iterator = errorHandlers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
function handleClientError(error) {
    errorQueue.push(error);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var handler = _step.value;
            // Delayed the error being passed to React Dev Overlay,
            // avoid the state being synchronously updated in the component.
            queueMicroTask(function() {
                handler(error);
            });
        };
        for(var _iterator = errorHandlers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
function useErrorHandler(handleOnUnhandledError, handleOnUnhandledRejection) {
    (0, _react.useEffect)(function() {
        // Handle queued errors.
        errorQueue.forEach(handleOnUnhandledError);
        rejectionQueue.forEach(handleOnUnhandledRejection);
        // Listen to new errors.
        errorHandlers.push(handleOnUnhandledError);
        rejectionHandlers.push(handleOnUnhandledRejection);
        return function() {
            // Remove listeners.
            errorHandlers.splice(errorHandlers.indexOf(handleOnUnhandledError), 1);
            rejectionHandlers.splice(rejectionHandlers.indexOf(handleOnUnhandledRejection), 1);
            // Reset error queues.
            errorQueue.splice(0, errorQueue.length);
            rejectionQueue.splice(0, rejectionQueue.length);
        };
    }, [
        handleOnUnhandledError,
        handleOnUnhandledRejection
    ]);
}
function onUnhandledError(event) {
    var thrownValue = event.error;
    if ((0, _isnextroutererror.isNextRouterError)(thrownValue)) {
        event.preventDefault();
        return false;
    }
    // When there's an error property present, we log the error to error overlay.
    // Otherwise we don't do anything as it's not logging in the console either.
    if (thrownValue) {
        var error = (0, _stitchederror.coerceError)(thrownValue);
        (0, _stitchederror.setOwnerStackIfAvailable)(error);
        handleClientError(error);
        (0, _forwardlogs.forwardUnhandledError)(error);
    }
}
function onUnhandledRejection(ev) {
    var reason = ev === null || ev === void 0 ? void 0 : ev.reason;
    if ((0, _isnextroutererror.isNextRouterError)(reason)) {
        ev.preventDefault();
        return;
    }
    var error = (0, _stitchederror.coerceError)(reason);
    (0, _stitchederror.setOwnerStackIfAvailable)(error);
    rejectionQueue.push(error);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = rejectionHandlers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var handler = _step.value;
            handler(error);
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
    (0, _forwardlogs.logUnhandledRejection)(reason);
}
function handleGlobalErrors() {
    if (typeof window !== 'undefined') {
        try {
            // Increase the number of stack frames on the client
            Error.stackTraceLimit = 50;
        } catch (unused) {}
        window.addEventListener('error', onUnhandledError);
        window.addEventListener('unhandledrejection', onUnhandledRejection);
    }
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/errors/intercept-console-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    originConsoleError: null,
    patchConsoleError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    originConsoleError: function originConsoleError1() {
        return originConsoleError;
    },
    patchConsoleError: function patchConsoleError1() {
        return patchConsoleError;
    }
});
var _interop_require_default = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
var _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/is-error.js [app-client] (ecmascript)"));
var _isnextroutererror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
var _useerrorhandler = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/errors/use-error-handler.js [app-client] (ecmascript)");
var _console = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/lib/console.js [app-client] (ecmascript)");
var _forwardlogs = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/forward-logs.js [app-client] (ecmascript)");
var originConsoleError = globalThis.console.error;
function patchConsoleError() {
    // Ensure it's only patched once
    if (typeof window === 'undefined') {
        return;
    }
    window.console.error = function error() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var maybeError;
        var isReplayedLog = false;
        if ("TURBOPACK compile-time truthy", 1) {
            var _ref = (0, _console.parseConsoleArgs)(args), replayedError = _ref.error, environmentName = _ref.environmentName;
            // If environmentName is set, this is a server log replayed by React in the browser
            isReplayedLog = !!environmentName;
            if (replayedError) {
                maybeError = replayedError;
            } else if ((0, _iserror.default)(args[0])) {
                maybeError = args[0];
            } else {
                // See https://github.com/facebook/react/blob/d50323eb845c5fde0d720cae888bf35dedd05506/packages/react-reconciler/src/ReactFiberErrorLogger.js#L78
                maybeError = args[1];
            }
        } else //TURBOPACK unreachable
        ;
        if (!(0, _isnextroutererror.isNextRouterError)(maybeError)) {
            if ("TURBOPACK compile-time truthy", 1) {
                (0, _useerrorhandler.handleConsoleError)(// but if we pass the error directly, `handleClientError` will ignore it
                maybeError, args);
            }
            // Don't forward replayed server logs to terminal - they were already logged on the server
            if (!isReplayedLog) {
                (0, _forwardlogs.forwardErrorLog)(args);
            }
            originConsoleError.apply(window.console, args);
        }
    };
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/app-dev-overlay-setup.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _interceptconsoleerror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/errors/intercept-console-error.js [app-client] (ecmascript)");
var _useerrorhandler = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/errors/use-error-handler.js [app-client] (ecmascript)");
var _forwardlogs = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/forward-logs.js [app-client] (ecmascript)");
(0, _useerrorhandler.handleGlobalErrors)();
(0, _interceptconsoleerror.patchConsoleError)();
(0, _forwardlogs.initializeDebugLogForwarding)('app');
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/use-app-dev-rendering-indicator.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useAppDevRenderingIndicator", {
    enumerable: true,
    get: function get() {
        return useAppDevRenderingIndicator;
    }
});
var _react = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _nextdevtools = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/next-devtools/index.js (raw)");
var useAppDevRenderingIndicator = function useAppDevRenderingIndicator() {
    var _ref = _sliced_to_array._((0, _react.useTransition)(), 2), isPending = _ref[0], startTransition = _ref[1];
    (0, _react.useEffect)(function() {
        if (isPending) {
            _nextdevtools.dispatcher.renderingIndicatorShow();
        } else {
            _nextdevtools.dispatcher.renderingIndicatorHide();
        }
    }, [
        isPending
    ]);
    return startTransition;
};
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/errors/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    decorateDevError: null,
    handleClientError: null,
    originConsoleError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    decorateDevError: function decorateDevError() {
        return _stitchederror.decorateDevError;
    },
    handleClientError: function handleClientError() {
        return _useerrorhandler.handleClientError;
    },
    originConsoleError: function originConsoleError() {
        return _interceptconsoleerror.originConsoleError;
    }
});
var _interceptconsoleerror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/errors/intercept-console-error.js [app-client] (ecmascript)");
var _useerrorhandler = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/errors/use-error-handler.js [app-client] (ecmascript)");
var _stitchederror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/errors/stitched-error.js [app-client] (ecmascript)");
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE: null,
    SegmentBoundaryTriggerNode: null,
    SegmentStateProvider: null,
    SegmentViewNode: null,
    SegmentViewStateNode: null,
    useSegmentState: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE: function SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE1() {
        return SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE;
    },
    SegmentBoundaryTriggerNode: function SegmentBoundaryTriggerNode1() {
        return SegmentBoundaryTriggerNode;
    },
    SegmentStateProvider: function SegmentStateProvider1() {
        return SegmentStateProvider;
    },
    SegmentViewNode: function SegmentViewNode1() {
        return SegmentViewNode;
    },
    SegmentViewStateNode: function SegmentViewStateNode1() {
        return SegmentViewStateNode;
    },
    useSegmentState: function useSegmentState1() {
        return useSegmentState;
    }
});
var _jsxruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _react = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _nextdevtools = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/next-devtools/index.js (raw)");
var _approutercontextsharedruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
var _notfound = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/not-found.js [app-client] (ecmascript)");
var SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE = 'NEXT_DEVTOOLS_SIMULATED_ERROR';
function SegmentTrieNode(param) {
    var type = param.type, pagePath = param.pagePath;
    var _useSegmentState = useSegmentState(), boundaryType = _useSegmentState.boundaryType, setBoundaryType = _useSegmentState.setBoundaryType;
    var nodeState = (0, _react.useMemo)(function() {
        return {
            type: type,
            pagePath: pagePath,
            boundaryType: boundaryType,
            setBoundaryType: setBoundaryType
        };
    }, [
        type,
        pagePath,
        boundaryType,
        setBoundaryType
    ]);
    // Use `useLayoutEffect` to ensure the state is updated during suspense.
    // `useEffect` won't work as the state is preserved during suspense.
    (0, _react.useLayoutEffect)(function() {
        _nextdevtools.dispatcher.segmentExplorerNodeAdd(nodeState);
        return function() {
            _nextdevtools.dispatcher.segmentExplorerNodeRemove(nodeState);
        };
    }, [
        nodeState
    ]);
    return null;
}
function NotFoundSegmentNode() {
    (0, _notfound.notFound)();
}
function ErrorSegmentNode() {
    throw Object.defineProperty(new Error(SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE), "__NEXT_ERROR_CODE", {
        value: "E716",
        enumerable: false,
        configurable: true
    });
}
var forever = new Promise(function() {});
function LoadingSegmentNode() {
    (0, _react.use)(forever);
    return null;
}
function SegmentViewStateNode(param) {
    var page = param.page;
    var tree = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext).tree;
    (0, _react.useLayoutEffect)(function() {
        _nextdevtools.dispatcher.segmentExplorerUpdateRouteState(page, tree);
        return function() {
            _nextdevtools.dispatcher.segmentExplorerUpdateRouteState('', null);
        };
    }, [
        page,
        tree
    ]);
    return null;
}
function SegmentBoundaryTriggerNode() {
    var boundaryType = useSegmentState().boundaryType;
    var segmentNode = null;
    if (boundaryType === 'loading') {
        segmentNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(LoadingSegmentNode, {});
    } else if (boundaryType === 'not-found') {
        segmentNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(NotFoundSegmentNode, {});
    } else if (boundaryType === 'error') {
        segmentNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(ErrorSegmentNode, {});
    }
    return segmentNode;
}
function SegmentViewNode(param) {
    var type = param.type, pagePath = param.pagePath, children = param.children;
    var segmentNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentTrieNode, {
        type: type,
        pagePath: pagePath
    }, type);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            segmentNode,
            children
        ]
    });
}
var SegmentStateContext = /*#__PURE__*/ (0, _react.createContext)({
    boundaryType: null,
    setBoundaryType: function setBoundaryType() {}
});
function SegmentStateProvider(param) {
    var children = param.children;
    var _ref = _sliced_to_array._((0, _react.useState)(null), 2), boundaryType = _ref[0], setBoundaryType = _ref[1];
    var _ref1 = _sliced_to_array._((0, _react.useState)(0), 2), errorBoundaryKey = _ref1[0], setErrorBoundaryKey = _ref1[1];
    var reloadBoundary = (0, _react.useCallback)(function() {
        return setErrorBoundaryKey(function(prev) {
            return prev + 1;
        });
    }, []);
    var setBoundaryTypeAndReload = (0, _react.useCallback)(function(type) {
        if (type === null) {
            reloadBoundary();
        }
        setBoundaryType(type);
    }, [
        reloadBoundary
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentStateContext.Provider, {
        value: {
            boundaryType: boundaryType,
            setBoundaryType: setBoundaryTypeAndReload
        },
        children: children
    }, errorBoundaryKey);
}
function useSegmentState() {
    return (0, _react.useContext)(SegmentStateContext);
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/app-dev-overlay-error-boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _call_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_call_super.cjs [app-client] (ecmascript)");
var _class_call_check = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_create_class.cjs [app-client] (ecmascript)");
var _inherits = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_inherits.cjs [app-client] (ecmascript)");
var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _to_consumable_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppDevOverlayErrorBoundary", {
    enumerable: true,
    get: function get() {
        return AppDevOverlayErrorBoundary;
    }
});
var _interop_require_default = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
var _interop_require_wildcard = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
var _jsxruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _nextdevtools = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/next-devtools/index.js (raw)");
var _runtimeerrorhandler = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/runtime-error-handler.js [app-client] (ecmascript)");
var _errorboundary = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
var _globalerror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/builtin/global-error.js [app-client] (ecmascript)"));
var _segmentexplorernode = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
var _approutercontextsharedruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
function ErroredHtml(param) {
    var _param_globalError = _sliced_to_array._(param.globalError, 2), GlobalError = _param_globalError[0], globalErrorStyles = _param_globalError[1], error = param.error, reset = param.reset, unstable_retry = param.unstable_retry;
    if (!error) {
        return /*#__PURE__*/ (0, _jsxruntime.jsxs)("html", {
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)("head", {}),
                /*#__PURE__*/ (0, _jsxruntime.jsx)("body", {})
            ]
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_errorboundary.ErrorBoundary, {
        errorComponent: _globalerror.default,
        children: [
            globalErrorStyles,
            /*#__PURE__*/ (0, _jsxruntime.jsx)(GlobalError, {
                error: error,
                reset: reset,
                unstable_retry: unstable_retry
            })
        ]
    });
}
var AppDevOverlayErrorBoundary = /*#__PURE__*/ function(_react_PureComponent) {
    _inherits._(AppDevOverlayErrorBoundary, _react_PureComponent);
    function AppDevOverlayErrorBoundary() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _class_call_check._(this, AppDevOverlayErrorBoundary);
        var _this;
        _this = _call_super._(this, AppDevOverlayErrorBoundary, _to_consumable_array._(args)), _this.state = {
            reactError: null
        }, _this.unstable_retry = function() {
            (0, _react.startTransition)(function() {
                var _this_context;
                (_this_context = _this.context) === null || _this_context === void 0 ? void 0 : _this_context.refresh();
                _this.reset();
            });
        }, _this.reset = function() {
            _this.setState({
                reactError: null
            });
        };
        return _this;
    }
    _create_class._(AppDevOverlayErrorBoundary, [
        {
            key: "componentDidCatch",
            value: function componentDidCatch(err) {
                if (("TURBOPACK compile-time value", "development") === 'development' && err.message === _segmentexplorernode.SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE) {
                    return;
                }
                _nextdevtools.dispatcher.openErrorOverlay();
            }
        },
        {
            key: "render",
            value: function render() {
                var _this_props = this.props, children = _this_props.children, globalError = _this_props.globalError;
                var reactError = this.state.reactError;
                var fallback = /*#__PURE__*/ (0, _jsxruntime.jsx)(ErroredHtml, {
                    globalError: globalError,
                    error: reactError,
                    reset: this.reset,
                    unstable_retry: this.unstable_retry
                });
                return reactError !== null ? fallback : children;
            }
        }
    ], [
        {
            key: "getDerivedStateFromError",
            value: function getDerivedStateFromError(error) {
                _runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError = true;
                return {
                    reactError: error
                };
            }
        }
    ]);
    return AppDevOverlayErrorBoundary;
}(_react.PureComponent);
AppDevOverlayErrorBoundary.contextType = _approutercontextsharedruntime.AppRouterContext;
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/errors/replay-ssr-only-errors.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReplaySsrOnlyErrors", {
    enumerable: true,
    get: function get() {
        return ReplaySsrOnlyErrors;
    }
});
var _react = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _useerrorhandler = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/errors/use-error-handler.js [app-client] (ecmascript)");
var _isnextroutererror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
var _constants = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/errors/constants.js [app-client] (ecmascript)");
function readSsrError() {
    if (typeof document === 'undefined') {
        return null;
    }
    var ssrErrorTemplateTag = document.querySelector('template[data-next-error-message]');
    if (ssrErrorTemplateTag) {
        var message = ssrErrorTemplateTag.getAttribute('data-next-error-message');
        var stack = ssrErrorTemplateTag.getAttribute('data-next-error-stack');
        var digest = ssrErrorTemplateTag.getAttribute('data-next-error-digest');
        var error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
        if (digest) {
            ;
            error.digest = digest;
        }
        // Skip Next.js SSR'd internal errors that which will be handled by the error boundaries.
        if ((0, _isnextroutererror.isNextRouterError)(error)) {
            return null;
        }
        error.stack = stack || '';
        return error;
    }
    return null;
}
function ReplaySsrOnlyErrors(param) {
    var onBlockingError = param.onBlockingError;
    if ("TURBOPACK compile-time truthy", 1) {
        // Need to read during render. The attributes will be gone after commit.
        var ssrError = readSsrError();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, _react.useEffect)(function() {
            if (ssrError !== null) {
                // TODO(veil): Include original Owner Stack (NDX-905)
                // TODO(veil): Mark as recoverable error
                // TODO(veil): console.error
                (0, _useerrorhandler.handleClientError)(ssrError);
                // If it's missing root tags, we can't recover, make it blocking.
                if (ssrError.digest === _constants.MISSING_ROOT_TAGS_ERROR) {
                    onBlockingError();
                }
            }
        }, [
            ssrError,
            onBlockingError
        ]);
    }
    return null;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/client-entry.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RootLevelDevOverlayElement", {
    enumerable: true,
    get: function get() {
        return RootLevelDevOverlayElement;
    }
});
var _interop_require_default = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
var _jsxruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _globalerror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/builtin/global-error.js [app-client] (ecmascript)"));
var _appdevoverlayerrorboundary = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/app-dev-overlay-error-boundary.js [app-client] (ecmascript)");
function RootLevelDevOverlayElement(param) {
    var children = param.children;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_appdevoverlayerrorboundary.AppDevOverlayErrorBoundary, {
        globalError: [
            _globalerror.default,
            null
        ],
        children: children
    });
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/async-local-storage.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _class_call_check = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_create_class.cjs [app-client] (ecmascript)");
var _to_consumable_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    bindSnapshot: null,
    createAsyncLocalStorage: null,
    createSnapshot: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    bindSnapshot: function bindSnapshot1() {
        return bindSnapshot;
    },
    createAsyncLocalStorage: function createAsyncLocalStorage1() {
        return createAsyncLocalStorage;
    },
    createSnapshot: function createSnapshot1() {
        return createSnapshot;
    }
});
var sharedAsyncLocalStorageNotAvailableError = Object.defineProperty(new Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), "__NEXT_ERROR_CODE", {
    value: "E504",
    enumerable: false,
    configurable: true
});
var FakeAsyncLocalStorage = /*#__PURE__*/ function() {
    function FakeAsyncLocalStorage() {
        _class_call_check._(this, FakeAsyncLocalStorage);
    }
    _create_class._(FakeAsyncLocalStorage, [
        {
            key: "disable",
            value: function disable() {
                throw sharedAsyncLocalStorageNotAvailableError;
            }
        },
        {
            key: "getStore",
            value: function getStore() {
                // This fake implementation of AsyncLocalStorage always returns `undefined`.
                return undefined;
            }
        },
        {
            key: "run",
            value: function run() {
                throw sharedAsyncLocalStorageNotAvailableError;
            }
        },
        {
            key: "exit",
            value: function exit() {
                throw sharedAsyncLocalStorageNotAvailableError;
            }
        },
        {
            key: "enterWith",
            value: function enterWith() {
                throw sharedAsyncLocalStorageNotAvailableError;
            }
        }
    ], [
        {
            key: "bind",
            value: function bind(fn) {
                return fn;
            }
        }
    ]);
    return FakeAsyncLocalStorage;
}();
var maybeGlobalAsyncLocalStorage = typeof globalThis !== 'undefined' && globalThis.AsyncLocalStorage;
function createAsyncLocalStorage() {
    if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
}
function bindSnapshot(fn) {
    if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.bind(fn);
    }
    return FakeAsyncLocalStorage.bind(fn);
}
function createSnapshot() {
    if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.snapshot();
    }
    return function(fn) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        return fn.apply(void 0, _to_consumable_array._(args));
    };
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/work-unit-async-storage-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "workUnitAsyncStorageInstance", {
    enumerable: true,
    get: function get() {
        return workUnitAsyncStorageInstance;
    }
});
var _asynclocalstorage = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/async-local-storage.js [app-client] (ecmascript)");
var workUnitAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/staged-rendering.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _class_call_check = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_create_class.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RenderStage: null,
    StagedRenderingController: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RenderStage: function RenderStage1() {
        return RenderStage;
    },
    StagedRenderingController: function StagedRenderingController1() {
        return StagedRenderingController;
    }
});
var _invarianterror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
var _promisewithresolvers = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-client] (ecmascript)");
var RenderStage = /*#__PURE__*/ function(RenderStage) {
    RenderStage[RenderStage["Before"] = 1] = "Before";
    RenderStage[RenderStage["EarlyStatic"] = 2] = "EarlyStatic";
    RenderStage[RenderStage["Static"] = 3] = "Static";
    RenderStage[RenderStage["EarlyRuntime"] = 4] = "EarlyRuntime";
    RenderStage[RenderStage["Runtime"] = 5] = "Runtime";
    RenderStage[RenderStage["Dynamic"] = 6] = "Dynamic";
    RenderStage[RenderStage["Abandoned"] = 7] = "Abandoned";
    return RenderStage;
}({});
var StagedRenderingController = /*#__PURE__*/ function() {
    function StagedRenderingController(abortSignal, abandonController, shouldTrackSyncIO) {
        var _this = this;
        _class_call_check._(this, StagedRenderingController);
        this.abortSignal = abortSignal;
        this.abandonController = abandonController;
        this.shouldTrackSyncIO = shouldTrackSyncIO;
        this.currentStage = 1;
        this.syncInterruptReason = null;
        this.staticStageEndTime = Infinity;
        this.runtimeStageEndTime = Infinity;
        this.staticStageListeners = [];
        this.earlyRuntimeStageListeners = [];
        this.runtimeStageListeners = [];
        this.dynamicStageListeners = [];
        this.staticStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        this.earlyRuntimeStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        this.runtimeStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        this.dynamicStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        if (abortSignal) {
            abortSignal.addEventListener('abort', function() {
                // Reject all stage promises that haven't already been resolved.
                // If a promise was already resolved via advanceStage, the reject
                // is a no-op. The ignoreReject handler suppresses unhandled
                // rejection warnings for promises that no one is awaiting.
                var reason = abortSignal.reason;
                _this.staticStagePromise.promise.catch(ignoreReject);
                _this.staticStagePromise.reject(reason);
                _this.earlyRuntimeStagePromise.promise.catch(ignoreReject);
                _this.earlyRuntimeStagePromise.reject(reason);
                _this.runtimeStagePromise.promise.catch(ignoreReject);
                _this.runtimeStagePromise.reject(reason);
                _this.dynamicStagePromise.promise.catch(ignoreReject);
                _this.dynamicStagePromise.reject(reason);
            }, {
                once: true
            });
        }
        if (abandonController) {
            abandonController.signal.addEventListener('abort', function() {
                _this.abandonRender();
            }, {
                once: true
            });
        }
    }
    _create_class._(StagedRenderingController, [
        {
            key: "onStage",
            value: function onStage(stage, callback) {
                if (this.currentStage >= stage) {
                    callback();
                } else if (stage === 3) {
                    this.staticStageListeners.push(callback);
                } else if (stage === 4) {
                    this.earlyRuntimeStageListeners.push(callback);
                } else if (stage === 5) {
                    this.runtimeStageListeners.push(callback);
                } else if (stage === 6) {
                    this.dynamicStageListeners.push(callback);
                } else {
                    // This should never happen
                    throw Object.defineProperty(new _invarianterror.InvariantError("Invalid render stage: ".concat(stage)), "__NEXT_ERROR_CODE", {
                        value: "E881",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        },
        {
            key: "shouldTrackSyncInterrupt",
            value: function shouldTrackSyncInterrupt() {
                if (!this.shouldTrackSyncIO) {
                    return false;
                }
                switch(this.currentStage){
                    case 1:
                        // If we haven't started the render yet, it can't be interrupted.
                        return false;
                    case 2:
                    case 3:
                        return true;
                    case 4:
                        // EarlyRuntime is for runtime-prefetchable segments. Sync IO
                        // should error because it would abort a runtime prefetch.
                        return true;
                    case 5:
                        // Runtime is for non-prefetchable segments. Sync IO is fine there
                        // because in practice this segment will never be runtime prefetched
                        return false;
                    case 6:
                    case 7:
                        return false;
                    default:
                        return false;
                }
            }
        },
        {
            key: "syncInterruptCurrentStageWithReason",
            value: function syncInterruptCurrentStageWithReason(reason) {
                if (this.currentStage === 1) {
                    return;
                }
                // If the render has already been abandoned, there's nothing to interrupt.
                if (this.currentStage === 7) {
                    return;
                }
                // If Sync IO occurs during an abandonable render, we trigger the abandon.
                // The abandon listener will call abandonRender which advances through
                // stages to let caches fill before marking as Abandoned.
                if (this.abandonController) {
                    this.abandonController.abort();
                    return;
                }
                if (this.abortSignal) {
                    // If this is an abortable render, we capture the interruption reason and stop advancing.
                    // We don't release any more promises.
                    // The caller is expected to abort the signal.
                    this.syncInterruptReason = reason;
                    this.currentStage = 7;
                    return;
                }
                // If we're in a non-abandonable & non-abortable render,
                // we need to advance to the Dynamic stage and capture the interruption reason.
                // (in dev, this will be the restarted render)
                switch(this.currentStage){
                    case 2:
                    case 3:
                    case 4:
                        {
                            // EarlyRuntime is for runtime-prefetchable segments. Sync IO here
                            // means the prefetch would be aborted too early.
                            this.syncInterruptReason = reason;
                            this.advanceStage(6);
                            return;
                        }
                    case 5:
                        {
                            // canSyncInterrupt returns false for Runtime, so we should
                            // never get here. Defensive no-op.
                            return;
                        }
                    case 6:
                    default:
                }
            }
        },
        {
            key: "getSyncInterruptReason",
            value: function getSyncInterruptReason() {
                return this.syncInterruptReason;
            }
        },
        {
            key: "getStaticStageEndTime",
            value: function getStaticStageEndTime() {
                return this.staticStageEndTime;
            }
        },
        {
            key: "getRuntimeStageEndTime",
            value: function getRuntimeStageEndTime() {
                return this.runtimeStageEndTime;
            }
        },
        {
            key: "abandonRender",
            value: function abandonRender() {
                // In staged rendering, only the initial render is abandonable.
                // We can abandon the initial render if
                //   1. We notice a cache miss, and need to wait for caches to fill
                //   2. A sync IO error occurs, and the render should be interrupted
                //      (this might be a lazy intitialization of a module,
                //       so we still want to restart in this case and see if it still occurs)
                // In either case, we'll be doing another render after this one,
                // so we only want to unblock the next stage, not Dynamic, because
                // unblocking the dynamic stage would likely lead to wasted (uncached) IO.
                var currentStage = this.currentStage;
                switch(currentStage){
                    case 2:
                        {
                            this.resolveStaticStage();
                        }
                    // intentional fallthrough
                    case 3:
                        {
                            this.resolveEarlyRuntimeStage();
                        }
                    // intentional fallthrough
                    case 4:
                        {
                            this.resolveRuntimeStage();
                        }
                    // intentional fallthrough
                    case 5:
                        {
                            this.currentStage = 7;
                            return;
                        }
                    case 6:
                    case 1:
                    case 7:
                        break;
                    default:
                        {
                            currentStage;
                        }
                }
            }
        },
        {
            key: "advanceStage",
            value: function advanceStage(stage) {
                // If we're already at the target stage or beyond, do nothing.
                // (this can happen e.g. if sync IO advanced us to the dynamic stage)
                if (stage <= this.currentStage) {
                    return;
                }
                var currentStage = this.currentStage;
                this.currentStage = stage;
                if (currentStage < 3 && stage >= 3) {
                    this.resolveStaticStage();
                }
                if (currentStage < 4 && stage >= 4) {
                    this.resolveEarlyRuntimeStage();
                }
                if (currentStage < 5 && stage >= 5) {
                    this.staticStageEndTime = performance.now() + performance.timeOrigin;
                    this.resolveRuntimeStage();
                }
                if (currentStage < 6 && stage >= 6) {
                    this.runtimeStageEndTime = performance.now() + performance.timeOrigin;
                    this.resolveDynamicStage();
                    return;
                }
            }
        },
        {
            /** Fire the `onStage` listeners for the static stage and unblock any promises waiting for it. */ key: "resolveStaticStage",
            value: function resolveStaticStage() {
                var staticListeners = this.staticStageListeners;
                for(var i = 0; i < staticListeners.length; i++){
                    staticListeners[i]();
                }
                staticListeners.length = 0;
                this.staticStagePromise.resolve();
            }
        },
        {
            /** Fire the `onStage` listeners for the early runtime stage and unblock any promises waiting for it. */ key: "resolveEarlyRuntimeStage",
            value: function resolveEarlyRuntimeStage() {
                var earlyRuntimeListeners = this.earlyRuntimeStageListeners;
                for(var i = 0; i < earlyRuntimeListeners.length; i++){
                    earlyRuntimeListeners[i]();
                }
                earlyRuntimeListeners.length = 0;
                this.earlyRuntimeStagePromise.resolve();
            }
        },
        {
            /** Fire the `onStage` listeners for the runtime stage and unblock any promises waiting for it. */ key: "resolveRuntimeStage",
            value: function resolveRuntimeStage() {
                var runtimeListeners = this.runtimeStageListeners;
                for(var i = 0; i < runtimeListeners.length; i++){
                    runtimeListeners[i]();
                }
                runtimeListeners.length = 0;
                this.runtimeStagePromise.resolve();
            }
        },
        {
            /** Fire the `onStage` listeners for the dynamic stage and unblock any promises waiting for it. */ key: "resolveDynamicStage",
            value: function resolveDynamicStage() {
                var dynamicListeners = this.dynamicStageListeners;
                for(var i = 0; i < dynamicListeners.length; i++){
                    dynamicListeners[i]();
                }
                dynamicListeners.length = 0;
                this.dynamicStagePromise.resolve();
            }
        },
        {
            key: "getStagePromise",
            value: function getStagePromise(stage) {
                switch(stage){
                    case 3:
                        {
                            return this.staticStagePromise.promise;
                        }
                    case 4:
                        {
                            return this.earlyRuntimeStagePromise.promise;
                        }
                    case 5:
                        {
                            return this.runtimeStagePromise.promise;
                        }
                    case 6:
                        {
                            return this.dynamicStagePromise.promise;
                        }
                    default:
                        {
                            stage;
                            throw Object.defineProperty(new _invarianterror.InvariantError("Invalid render stage: ".concat(stage)), "__NEXT_ERROR_CODE", {
                                value: "E881",
                                enumerable: false,
                                configurable: true
                            });
                        }
                }
            }
        },
        {
            key: "waitForStage",
            value: function waitForStage(stage) {
                return this.getStagePromise(stage);
            }
        },
        {
            key: "delayUntilStage",
            value: function delayUntilStage(stage, displayName, resolvedValue) {
                var ioTriggerPromise = this.getStagePromise(stage);
                var promise = makeDevtoolsIOPromiseFromIOTrigger(ioTriggerPromise, displayName, resolvedValue);
                // Analogously to `makeHangingPromise`, we might reject this promise if the signal is invoked.
                // (e.g. in the case where we don't want want the render to proceed to the dynamic stage and abort it).
                // We shouldn't consider this an unhandled rejection, so we attach a noop catch handler here to suppress this warning.
                if (this.abortSignal) {
                    promise.catch(ignoreReject);
                }
                return promise;
            }
        }
    ]);
    return StagedRenderingController;
}();
function ignoreReject() {}
// TODO(restart-on-cache-miss): the layering of `delayUntilStage`,
// `makeDevtoolsIOPromiseFromIOTrigger` and and `makeDevtoolsIOAwarePromise`
// is confusing, we should clean it up.
function makeDevtoolsIOPromiseFromIOTrigger(ioTrigger, displayName, resolvedValue) {
    // If we create a `new Promise` and give it a displayName
    // (with no userspace code above us in the stack)
    // React Devtools will use it as the IO cause when determining "suspended by".
    // In particular, it should shadow any inner IO that resolved/rejected the promise
    // (in case of staged rendering, this will be the `setTimeout` that triggers the relevant stage)
    var promise = new Promise(function(resolve, reject) {
        ioTrigger.then(resolve.bind(null, resolvedValue), reject);
    });
    if (displayName !== undefined) {
        // @ts-expect-error
        promise.displayName = displayName;
    }
    return promise;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getCacheSignal: null,
    getDraftModeProviderForCacheScope: null,
    getHmrRefreshHash: null,
    getPrerenderResumeDataCache: null,
    getRenderResumeDataCache: null,
    getServerComponentsHmrCache: null,
    getStagedRenderingController: null,
    isHmrRefresh: null,
    isInEarlyRenderStage: null,
    throwForMissingRequestStore: null,
    throwInvariantForMissingStore: null,
    workUnitAsyncStorage: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getCacheSignal: function getCacheSignal1() {
        return getCacheSignal;
    },
    getDraftModeProviderForCacheScope: function getDraftModeProviderForCacheScope1() {
        return getDraftModeProviderForCacheScope;
    },
    getHmrRefreshHash: function getHmrRefreshHash1() {
        return getHmrRefreshHash;
    },
    getPrerenderResumeDataCache: function getPrerenderResumeDataCache1() {
        return getPrerenderResumeDataCache;
    },
    getRenderResumeDataCache: function getRenderResumeDataCache1() {
        return getRenderResumeDataCache;
    },
    getServerComponentsHmrCache: function getServerComponentsHmrCache1() {
        return getServerComponentsHmrCache;
    },
    getStagedRenderingController: function getStagedRenderingController1() {
        return getStagedRenderingController;
    },
    isHmrRefresh: function isHmrRefresh1() {
        return isHmrRefresh;
    },
    isInEarlyRenderStage: function isInEarlyRenderStage1() {
        return isInEarlyRenderStage;
    },
    throwForMissingRequestStore: function throwForMissingRequestStore1() {
        return throwForMissingRequestStore;
    },
    throwInvariantForMissingStore: function throwInvariantForMissingStore1() {
        return throwInvariantForMissingStore;
    },
    workUnitAsyncStorage: function workUnitAsyncStorage() {
        return _workunitasyncstorageinstance.workUnitAsyncStorageInstance;
    }
});
var _workunitasyncstorageinstance = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/work-unit-async-storage-instance.js [app-client] (ecmascript)");
var _approuterheaders = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
var _invarianterror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
var _stagedrendering = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/staged-rendering.js [app-client] (ecmascript)");
function isInEarlyRenderStage(requestStore) {
    var stagedRendering = requestStore.stagedRendering;
    if (stagedRendering) {
        return stagedRendering.currentStage === _stagedrendering.RenderStage.EarlyStatic || stagedRendering.currentStage === _stagedrendering.RenderStage.EarlyRuntime;
    }
    return false;
}
function throwForMissingRequestStore(callingExpression) {
    throw Object.defineProperty(new Error("`".concat(callingExpression, "` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context")), "__NEXT_ERROR_CODE", {
        value: "E251",
        enumerable: false,
        configurable: true
    });
}
function throwInvariantForMissingStore() {
    throw Object.defineProperty(new _invarianterror.InvariantError('Expected workUnitAsyncStorage to have a store.'), "__NEXT_ERROR_CODE", {
        value: "E696",
        enumerable: false,
        configurable: true
    });
}
function getPrerenderResumeDataCache(workUnitStore) {
    switch(workUnitStore.type){
        case 'prerender':
        case 'prerender-runtime':
        case 'prerender-ppr':
            return workUnitStore.prerenderResumeDataCache;
        case 'prerender-client':
        case 'validation-client':
            // TODO eliminate fetch caching in client scope and stop exposing this data
            // cache during SSR.
            return workUnitStore.prerenderResumeDataCache;
        case 'request':
            {
                // In dev, we might fill caches even during a dynamic request.
                if (workUnitStore.prerenderResumeDataCache) {
                    return workUnitStore.prerenderResumeDataCache;
                }
            // fallthrough
            }
        case 'prerender-legacy':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
        case 'generate-static-params':
            return null;
        default:
            return workUnitStore;
    }
}
function getRenderResumeDataCache(workUnitStore) {
    switch(workUnitStore.type){
        case 'request':
        case 'prerender':
        case 'prerender-runtime':
        case 'prerender-client':
        case 'validation-client':
            if (workUnitStore.renderResumeDataCache) {
                // If we are in a prerender, we might have a render resume data cache
                // that is used to read from prefilled caches.
                return workUnitStore.renderResumeDataCache;
            }
        // fallthrough
        case 'prerender-ppr':
            var _workUnitStore_prerenderResumeDataCache;
            // Otherwise we return the mutable resume data cache here as an immutable
            // version of the cache as it can also be used for reading.
            return (_workUnitStore_prerenderResumeDataCache = workUnitStore.prerenderResumeDataCache) !== null && _workUnitStore_prerenderResumeDataCache !== void 0 ? _workUnitStore_prerenderResumeDataCache : null;
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
        case 'prerender-legacy':
        case 'generate-static-params':
            return null;
        default:
            return workUnitStore;
    }
}
function getHmrRefreshHash(workUnitStore) {
    if ("TURBOPACK compile-time truthy", 1) {
        switch(workUnitStore.type){
            case 'cache':
            case 'private-cache':
            case 'prerender':
            case 'prerender-runtime':
                return workUnitStore.hmrRefreshHash;
            case 'request':
                var _workUnitStore_cookies_get;
                return (_workUnitStore_cookies_get = workUnitStore.cookies.get(_approuterheaders.NEXT_HMR_REFRESH_HASH_COOKIE)) == null ? void 0 : _workUnitStore_cookies_get.value;
            case 'prerender-client':
            case 'validation-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'unstable-cache':
            case 'generate-static-params':
                break;
            default:
                workUnitStore;
        }
    }
    return undefined;
}
function isHmrRefresh(workUnitStore) {
    if ("TURBOPACK compile-time truthy", 1) {
        switch(workUnitStore.type){
            case 'cache':
            case 'private-cache':
            case 'request':
                var _workUnitStore_isHmrRefresh;
                return (_workUnitStore_isHmrRefresh = workUnitStore.isHmrRefresh) !== null && _workUnitStore_isHmrRefresh !== void 0 ? _workUnitStore_isHmrRefresh : false;
            case 'prerender':
            case 'prerender-client':
            case 'validation-client':
            case 'prerender-runtime':
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'unstable-cache':
            case 'generate-static-params':
                break;
            default:
                workUnitStore;
        }
    }
    return false;
}
function getServerComponentsHmrCache(workUnitStore) {
    if ("TURBOPACK compile-time truthy", 1) {
        switch(workUnitStore.type){
            case 'cache':
            case 'private-cache':
            case 'request':
                return workUnitStore.serverComponentsHmrCache;
            case 'prerender':
            case 'prerender-client':
            case 'validation-client':
            case 'prerender-runtime':
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'unstable-cache':
            case 'generate-static-params':
                break;
            default:
                workUnitStore;
        }
    }
    return undefined;
}
function getDraftModeProviderForCacheScope(workStore, workUnitStore) {
    if (workStore.isDraftMode) {
        switch(workUnitStore.type){
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
            case 'prerender-runtime':
            case 'request':
                return workUnitStore.draftMode;
            case 'prerender':
            case 'prerender-client':
            case 'validation-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'generate-static-params':
                break;
            default:
                workUnitStore;
        }
    }
    return undefined;
}
function getStagedRenderingController(workUnitStore) {
    switch(workUnitStore.type){
        case 'request':
        case 'prerender-runtime':
            var _workUnitStore_stagedRendering;
            return (_workUnitStore_stagedRendering = workUnitStore.stagedRendering) !== null && _workUnitStore_stagedRendering !== void 0 ? _workUnitStore_stagedRendering : null;
        case 'prerender':
        case 'prerender-client':
        case 'validation-client':
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
        case 'generate-static-params':
            return null;
        default:
            return workUnitStore;
    }
}
function getCacheSignal(workUnitStore) {
    switch(workUnitStore.type){
        case 'prerender':
        case 'prerender-client':
        case 'validation-client':
        case 'prerender-runtime':
            return workUnitStore.cacheSignal;
        case 'request':
            {
                // In dev, we might fill caches even during a dynamic request.
                if (workUnitStore.cacheSignal) {
                    return workUnitStore.cacheSignal;
                }
            // fallthrough
            }
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
        case 'generate-static-params':
            return null;
        default:
            return workUnitStore;
    }
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/work-async-storage-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "workAsyncStorageInstance", {
    enumerable: true,
    get: function get() {
        return workAsyncStorageInstance;
    }
});
var _asynclocalstorage = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/async-local-storage.js [app-client] (ecmascript)");
var workAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "workAsyncStorage", {
    enumerable: true,
    get: function get() {
        return _workasyncstorageinstance.workAsyncStorageInstance;
    }
});
var _workasyncstorageinstance = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/work-async-storage-instance.js [app-client] (ecmascript)");
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/action-async-storage-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "actionAsyncStorageInstance", {
    enumerable: true,
    get: function get() {
        return actionAsyncStorageInstance;
    }
});
var _asynclocalstorage = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/async-local-storage.js [app-client] (ecmascript)");
var actionAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/action-async-storage.external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "actionAsyncStorage", {
    enumerable: true,
    get: function get() {
        return _actionasyncstorageinstance.actionAsyncStorageInstance;
    }
});
var _actionasyncstorageinstance = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/action-async-storage-instance.js [app-client] (ecmascript)");
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/dynamic-rendering-utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _call_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_call_super.cjs [app-client] (ecmascript)");
var _class_call_check = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _inherits = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_inherits.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var _wrap_native_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_wrap_native_super.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    delayUntilRuntimeStage: null,
    getRuntimeStage: null,
    isHangingPromiseRejectionError: null,
    makeDevtoolsIOAwarePromise: null,
    makeHangingPromise: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    delayUntilRuntimeStage: function delayUntilRuntimeStage1() {
        return delayUntilRuntimeStage;
    },
    getRuntimeStage: function getRuntimeStage1() {
        return getRuntimeStage;
    },
    isHangingPromiseRejectionError: function isHangingPromiseRejectionError1() {
        return isHangingPromiseRejectionError;
    },
    makeDevtoolsIOAwarePromise: function makeDevtoolsIOAwarePromise1() {
        return makeDevtoolsIOAwarePromise;
    },
    makeHangingPromise: function makeHangingPromise1() {
        return makeHangingPromise;
    }
});
var _stagedrendering = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/staged-rendering.js [app-client] (ecmascript)");
function isHangingPromiseRejectionError(err) {
    if ((typeof err === "undefined" ? "undefined" : _type_of._(err)) !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === HANGING_PROMISE_REJECTION;
}
var HANGING_PROMISE_REJECTION = 'HANGING_PROMISE_REJECTION';
var HangingPromiseRejectionError = /*#__PURE__*/ function(Error1) {
    _inherits._(HangingPromiseRejectionError, Error1);
    function HangingPromiseRejectionError(route, expression) {
        _class_call_check._(this, HangingPromiseRejectionError);
        var _this;
        _this = _call_super._(this, HangingPromiseRejectionError, [
            "During prerendering, ".concat(expression, " rejects when the prerender is complete. Typically these errors are handled by React but if you move ").concat(expression, ' to a different context by using `setTimeout`, `after`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "').concat(route, '".')
        ]), _this.route = route, _this.expression = expression, _this.digest = HANGING_PROMISE_REJECTION;
        return _this;
    }
    return HangingPromiseRejectionError;
}(_wrap_native_super._(Error));
var abortListenersBySignal = new WeakMap();
function makeHangingPromise(signal, route, expression) {
    if (signal.aborted) {
        return Promise.reject(new HangingPromiseRejectionError(route, expression));
    } else {
        var hangingPromise = new Promise(function(_, reject) {
            var boundRejection = reject.bind(null, new HangingPromiseRejectionError(route, expression));
            var currentListeners = abortListenersBySignal.get(signal);
            if (currentListeners) {
                currentListeners.push(boundRejection);
            } else {
                var listeners = [
                    boundRejection
                ];
                abortListenersBySignal.set(signal, listeners);
                signal.addEventListener('abort', function() {
                    for(var i = 0; i < listeners.length; i++){
                        listeners[i]();
                    }
                }, {
                    once: true
                });
            }
        });
        // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
        // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
        // your own promise out of it you'll need to ensure you handle the error when it rejects.
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
    }
}
function ignoreReject() {}
function makeDevtoolsIOAwarePromise(underlying, requestStore, stage) {
    if (requestStore.stagedRendering) {
        // We resolve each stage in a timeout, so React DevTools will pick this up as IO.
        return requestStore.stagedRendering.delayUntilStage(stage, undefined, underlying);
    }
    // in React DevTools if we resolve in a setTimeout we will observe
    // the promise resolution as something that can suspend a boundary or root.
    return new Promise(function(resolve) {
        // Must use setTimeout to be considered IO React DevTools. setImmediate will not work.
        setTimeout(function() {
            resolve(underlying);
        }, 0);
    });
}
function getRuntimeStage(stagedRendering) {
    if (stagedRendering.currentStage === _stagedrendering.RenderStage.EarlyStatic || stagedRendering.currentStage === _stagedrendering.RenderStage.EarlyRuntime) {
        return _stagedrendering.RenderStage.EarlyRuntime;
    }
    return _stagedrendering.RenderStage.Runtime;
}
function delayUntilRuntimeStage(prerenderStore, result) {
    var stagedRendering = prerenderStore.stagedRendering;
    if (!stagedRendering) {
        return result;
    }
    return stagedRendering.waitForStage(getRuntimeStage(stagedRendering)).then(function() {
        return result;
    });
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isPostpone", {
    enumerable: true,
    get: function get() {
        return isPostpone;
    }
});
var REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
function isPostpone(error) {
    return (typeof error === "undefined" ? "undefined" : _type_of._(error)) === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/instant-validation/boundary-constants.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "INSTANT_VALIDATION_BOUNDARY_NAME", {
    enumerable: true,
    get: function get() {
        return INSTANT_VALIDATION_BOUNDARY_NAME;
    }
});
var INSTANT_VALIDATION_BOUNDARY_NAME = '__next_instant_validation_boundary__';
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ "use strict";
var _instanceof = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_instanceof.cjs [app-client] (ecmascript)");
var _to_consumable_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DynamicHoleKind: null,
    Postpone: null,
    PreludeState: null,
    abortAndThrowOnSynchronousRequestDataAccess: null,
    abortOnSynchronousPlatformIOAccess: null,
    accessedDynamicData: null,
    annotateDynamicAccess: null,
    consumeDynamicAccess: null,
    createDynamicTrackingState: null,
    createDynamicValidationState: null,
    createHangingInputAbortSignal: null,
    createInstantValidationState: null,
    createRenderInBrowserAbortSignal: null,
    formatDynamicAPIAccesses: null,
    getFirstDynamicReason: null,
    getNavigationDisallowedDynamicReasons: null,
    getStaticShellDisallowedDynamicReasons: null,
    isDynamicPostpone: null,
    isPrerenderInterruptedError: null,
    logDisallowedDynamicError: null,
    markCurrentScopeAsDynamic: null,
    postponeWithTracking: null,
    throwIfDisallowedDynamic: null,
    throwToInterruptStaticGeneration: null,
    trackAllowedDynamicAccess: null,
    trackDynamicDataInDynamicRender: null,
    trackDynamicHoleInNavigation: null,
    trackDynamicHoleInRuntimeShell: null,
    trackDynamicHoleInStaticShell: null,
    trackThrownErrorInNavigation: null,
    useDynamicRouteParams: null,
    useDynamicSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicHoleKind: function DynamicHoleKind1() {
        return DynamicHoleKind;
    },
    Postpone: function Postpone1() {
        return Postpone;
    },
    PreludeState: function PreludeState1() {
        return PreludeState;
    },
    abortAndThrowOnSynchronousRequestDataAccess: function abortAndThrowOnSynchronousRequestDataAccess1() {
        return abortAndThrowOnSynchronousRequestDataAccess;
    },
    abortOnSynchronousPlatformIOAccess: function abortOnSynchronousPlatformIOAccess1() {
        return abortOnSynchronousPlatformIOAccess;
    },
    accessedDynamicData: function accessedDynamicData1() {
        return accessedDynamicData;
    },
    annotateDynamicAccess: function annotateDynamicAccess1() {
        return annotateDynamicAccess;
    },
    consumeDynamicAccess: function consumeDynamicAccess1() {
        return consumeDynamicAccess;
    },
    createDynamicTrackingState: function createDynamicTrackingState1() {
        return createDynamicTrackingState;
    },
    createDynamicValidationState: function createDynamicValidationState1() {
        return createDynamicValidationState;
    },
    createHangingInputAbortSignal: function createHangingInputAbortSignal1() {
        return createHangingInputAbortSignal;
    },
    createInstantValidationState: function createInstantValidationState1() {
        return createInstantValidationState;
    },
    createRenderInBrowserAbortSignal: function createRenderInBrowserAbortSignal1() {
        return createRenderInBrowserAbortSignal;
    },
    formatDynamicAPIAccesses: function formatDynamicAPIAccesses1() {
        return formatDynamicAPIAccesses;
    },
    getFirstDynamicReason: function getFirstDynamicReason1() {
        return getFirstDynamicReason;
    },
    getNavigationDisallowedDynamicReasons: function getNavigationDisallowedDynamicReasons1() {
        return getNavigationDisallowedDynamicReasons;
    },
    getStaticShellDisallowedDynamicReasons: function getStaticShellDisallowedDynamicReasons1() {
        return getStaticShellDisallowedDynamicReasons;
    },
    isDynamicPostpone: function isDynamicPostpone1() {
        return isDynamicPostpone;
    },
    isPrerenderInterruptedError: function isPrerenderInterruptedError1() {
        return isPrerenderInterruptedError;
    },
    logDisallowedDynamicError: function logDisallowedDynamicError1() {
        return logDisallowedDynamicError;
    },
    markCurrentScopeAsDynamic: function markCurrentScopeAsDynamic1() {
        return markCurrentScopeAsDynamic;
    },
    postponeWithTracking: function postponeWithTracking1() {
        return postponeWithTracking;
    },
    throwIfDisallowedDynamic: function throwIfDisallowedDynamic1() {
        return throwIfDisallowedDynamic;
    },
    throwToInterruptStaticGeneration: function throwToInterruptStaticGeneration1() {
        return throwToInterruptStaticGeneration;
    },
    trackAllowedDynamicAccess: function trackAllowedDynamicAccess1() {
        return trackAllowedDynamicAccess;
    },
    trackDynamicDataInDynamicRender: function trackDynamicDataInDynamicRender1() {
        return trackDynamicDataInDynamicRender;
    },
    trackDynamicHoleInNavigation: function trackDynamicHoleInNavigation1() {
        return trackDynamicHoleInNavigation;
    },
    trackDynamicHoleInRuntimeShell: function trackDynamicHoleInRuntimeShell1() {
        return trackDynamicHoleInRuntimeShell;
    },
    trackDynamicHoleInStaticShell: function trackDynamicHoleInStaticShell1() {
        return trackDynamicHoleInStaticShell;
    },
    trackThrownErrorInNavigation: function trackThrownErrorInNavigation1() {
        return trackThrownErrorInNavigation;
    },
    useDynamicRouteParams: function useDynamicRouteParams1() {
        return useDynamicRouteParams;
    },
    useDynamicSearchParams: function useDynamicSearchParams1() {
        return useDynamicSearchParams;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _hooksservercontext = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/hooks-server-context.js [app-client] (ecmascript)");
var _staticgenerationbailout = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/static-generation-bailout.js [app-client] (ecmascript)");
var _workunitasyncstorageexternal = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
var _workasyncstorageexternal = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
var _dynamicrenderingutils = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/dynamic-rendering-utils.js [app-client] (ecmascript)");
var _boundaryconstants = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/framework/boundary-constants.js [app-client] (ecmascript)");
var _scheduler = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/scheduler.js [app-client] (ecmascript)");
var _bailouttocsr = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
var _invarianterror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
var _boundaryconstants1 = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/instant-validation/boundary-constants.js [app-client] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var hasPostpone = typeof _react.default.unstable_postpone === 'function';
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses: isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null
    };
}
function createDynamicValidationState() {
    return {
        hasSuspenseAboveBody: false,
        hasDynamicMetadata: false,
        dynamicMetadata: null,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: []
    };
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'cache':
            case 'unstable-cache':
                // Inside cache scopes, marking a scope as dynamic has no effect,
                // because the outer cache scope creates a cache boundary. This is
                // subtly different from reading a dynamic data source, which is
                // forbidden inside a cache scope.
                return;
            case 'private-cache':
                // A private cache scope is already dynamic by definition.
                return;
            case 'prerender-legacy':
            case 'prerender-ppr':
            case 'request':
            case 'generate-static-params':
                break;
            default:
                workUnitStore;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError("Route ".concat(store.route, ' with `dynamic = "error"` couldn\'t be rendered statically because it used `').concat(expression, "`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering")), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: false,
            configurable: true
        });
    }
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-ppr':
                return postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
            case 'prerender-legacy':
                workUnitStore.revalidate = 0;
                // We aren't prerendering, but we are generating a static page. We need
                // to bail out of static generation.
                var err = Object.defineProperty(new _hooksservercontext.DynamicServerError("Route ".concat(store.route, " couldn't be rendered statically because it used ").concat(expression, ". See more info here: https://nextjs.org/docs/messages/dynamic-server-error")), "__NEXT_ERROR_CODE", {
                    value: "E550",
                    enumerable: false,
                    configurable: true
                });
                store.dynamicUsageDescription = expression;
                store.dynamicUsageStack = err.stack;
                throw err;
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    workUnitStore.usedDynamic = true;
                }
                break;
            case 'generate-static-params':
                break;
            default:
                workUnitStore;
        }
    }
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    var err = Object.defineProperty(new _hooksservercontext.DynamicServerError("Route ".concat(store.route, " couldn't be rendered statically because it used `").concat(expression, "`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error")), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
    });
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(workUnitStore) {
    switch(workUnitStore.type){
        case 'cache':
        case 'unstable-cache':
            // Inside cache scopes, marking a scope as dynamic has no effect,
            // because the outer cache scope creates a cache boundary. This is
            // subtly different from reading a dynamic data source, which is
            // forbidden inside a cache scope.
            return;
        case 'private-cache':
            // A private cache scope is already dynamic by definition.
            return;
        case 'prerender':
        case 'prerender-runtime':
        case 'prerender-legacy':
        case 'prerender-ppr':
        case 'prerender-client':
        case 'validation-client':
        case 'generate-static-params':
            break;
        case 'request':
            if ("TURBOPACK compile-time truthy", 1) {
                workUnitStore.usedDynamic = true;
            }
            break;
        default:
            workUnitStore;
    }
}
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    var reason = "Route ".concat(route, " needs to bail out of prerendering at this point because it used ").concat(expression, ".");
    var error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    var dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression: expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    var dynamicTracking = prerenderStore.dynamicTracking;
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    // It is important that we set this tracking value after aborting. Aborts are executed
    // synchronously except for the case where you abort during render itself. By setting this
    // value late we can use it to determine if any of the aborted tasks are the task that
    // called the sync IO expression in the first place.
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
    }
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    var prerenderSignal = prerenderStore.controller.signal;
    if (prerenderSignal.aborted === false) {
        // TODO it would be better to move this aborted check into the callsite so we can avoid making
        // the error object when it isn't relevant to the aborting of the prerender however
        // since we need the throw semantics regardless of whether we abort it is easier to land
        // this way. See how this was handled with `abortOnSynchronousPlatformIOAccess` for a closer
        // to ideal implementation
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
        // It is important that we set this tracking value after aborting. Aborts are executed
        // synchronously except for the case where you abort during render itself. By setting this
        // value late we can use it to determine if any of the aborted tasks are the task that
        // called the sync IO expression in the first place.
        var dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
            if (dynamicTracking.syncDynamicErrorWithStack === null) {
                dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
            }
        }
    }
    throw createPrerenderInterruptedError("Route ".concat(route, " needs to bail out of prerendering at this point because it used ").concat(expression, "."));
}
function Postpone(param) {
    var reason = param.reason, route = param.route;
    var prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    var dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
}
function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression: expression
        });
    }
    _react.default.unstable_postpone(createPostponeReason(route, expression));
}
function createPostponeReason(route, expression) {
    return "Route ".concat(route, " needs to bail out of prerendering at this point because it used ").concat(expression, ". ") + "React throws this special object to indicate where. It should not be caught by " + "your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error";
}
function isDynamicPostpone(err) {
    if ((typeof err === "undefined" ? "undefined" : _type_of._(err)) === 'object' && err !== null && typeof err.message === 'string') {
        return isDynamicPostponeReason(err.message);
    }
    return false;
}
function isDynamicPostponeReason(reason) {
    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
}
if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
    throw Object.defineProperty(new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
    });
}
var NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    var error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return (typeof error === "undefined" ? "undefined" : _type_of._(error)) === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && _instanceof._(error, Error);
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    var // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    _serverDynamic_dynamicAccesses;
    (_serverDynamic_dynamicAccesses = serverDynamic.dynamicAccesses).push.apply(_serverDynamic_dynamicAccesses, _to_consumable_array._(clientDynamic.dynamicAccesses));
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter(function(access) {
        return typeof access.stack === 'string' && access.stack.length > 0;
    }).map(function(param) {
        var expression = param.expression, stack = param.stack;
        stack = stack.split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter(function(line) {
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return "Dynamic API Usage Debug - ".concat(expression, ":\n").concat(stack);
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw Object.defineProperty(new Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
            value: "E224",
            enumerable: false,
            configurable: true
        });
    }
}
function createRenderInBrowserAbortSignal() {
    var controller = new AbortController();
    controller.abort(Object.defineProperty(new _bailouttocsr.BailoutToCSRError('Render in Browser'), "__NEXT_ERROR_CODE", {
        value: "E721",
        enumerable: false,
        configurable: true
    }));
    return controller.signal;
}
function createHangingInputAbortSignal(workUnitStore) {
    switch(workUnitStore.type){
        case 'prerender':
        case 'prerender-runtime':
            var controller = new AbortController();
            if (workUnitStore.cacheSignal) {
                // If we have a cacheSignal it means we're in a prospective render. If
                // the input we're waiting on is coming from another cache, we do want
                // to wait for it so that we can resolve this cache entry too.
                workUnitStore.cacheSignal.inputReady().then(function() {
                    controller.abort();
                });
            } else {
                // Otherwise we're in the final render and we should already have all
                // our caches filled.
                // If the prerender uses stages, we have wait until the runtime stage,
                // at which point all runtime inputs will be resolved.
                // (otherwise, a runtime prerender might consider `cookies()` hanging
                //  even though they'd resolve in the next task.)
                //
                // We might still be waiting on some microtasks so we
                // wait one tick before giving up. When we give up, we still want to
                // render the content of this cache as deeply as we can so that we can
                // suspend as deeply as possible in the tree or not at all if we don't
                // end up waiting for the input.
                if (workUnitStore.type === 'prerender-runtime' && workUnitStore.stagedRendering) {
                    var stagedRendering = workUnitStore.stagedRendering;
                    stagedRendering.waitForStage((0, _dynamicrenderingutils.getRuntimeStage)(stagedRendering)).then(function() {
                        return (0, _scheduler.scheduleOnNextTick)(function() {
                            return controller.abort();
                        });
                    });
                } else {
                    (0, _scheduler.scheduleOnNextTick)(function() {
                        return controller.abort();
                    });
                }
            }
            return controller.signal;
        case 'prerender-client':
        case 'validation-client':
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'request':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
        case 'generate-static-params':
            return undefined;
        default:
            workUnitStore;
    }
}
function annotateDynamicAccess(expression, prerenderStore) {
    var dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression: expression
        });
    }
}
function useDynamicRouteParams(expression) {
    var workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    var workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore && workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-client':
            case 'prerender':
                {
                    var fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        // We are in a prerender with cacheComponents semantics. We are going to
                        // hang here and never resolve. This will cause the currently
                        // rendering component to effectively be a dynamic hole.
                        _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
                    }
                    break;
                }
            case 'prerender-ppr':
                {
                    var fallbackParams1 = workUnitStore.fallbackRouteParams;
                    if (fallbackParams1 && fallbackParams1.size > 0) {
                        return postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
                    }
                    break;
                }
            case 'validation-client':
                {
                    break;
                }
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError("`".concat(expression, "` was called during a runtime prerender. Next.js should be preventing ").concat(expression, " from being included in server components statically, but did not in this case.")), "__NEXT_ERROR_CODE", {
                    value: "E771",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError("`".concat(expression, "` was called inside a cache scope. Next.js should be preventing ").concat(expression, " from being included in server components statically, but did not in this case.")), "__NEXT_ERROR_CODE", {
                    value: "E745",
                    enumerable: false,
                    configurable: true
                });
            case 'generate-static-params':
                throw Object.defineProperty(new _invarianterror.InvariantError("`".concat(expression, "` was called in `generateStaticParams`. Next.js should be preventing ").concat(expression, " from being included in server component files statically, but did not in this case.")), "__NEXT_ERROR_CODE", {
                    value: "E1130",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-legacy':
            case 'request':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
}
function useDynamicSearchParams(expression) {
    var workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    var workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workStore) {
        // We assume pages router context and just return
        return;
    }
    if (!workUnitStore) {
        (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(expression);
    }
    switch(workUnitStore.type){
        case 'validation-client':
            // During instant validation we try to behave as close to client as possible,
            // so this shouldn't hang during SSR.
            return;
        case 'prerender-client':
            {
                _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
                break;
            }
        case 'prerender-legacy':
        case 'prerender-ppr':
            {
                if (workStore.forceStatic) {
                    return;
                }
                throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(expression), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: false,
                    configurable: true
                });
            }
        case 'prerender':
        case 'prerender-runtime':
            throw Object.defineProperty(new _invarianterror.InvariantError("`".concat(expression, "` was called from a Server Component. Next.js should be preventing ").concat(expression, " from being included in server components statically, but did not in this case.")), "__NEXT_ERROR_CODE", {
                value: "E795",
                enumerable: false,
                configurable: true
            });
        case 'cache':
        case 'unstable-cache':
        case 'private-cache':
            throw Object.defineProperty(new _invarianterror.InvariantError("`".concat(expression, "` was called inside a cache scope. Next.js should be preventing ").concat(expression, " from being included in server components statically, but did not in this case.")), "__NEXT_ERROR_CODE", {
                value: "E745",
                enumerable: false,
                configurable: true
            });
        case 'generate-static-params':
            throw Object.defineProperty(new _invarianterror.InvariantError("`".concat(expression, "` was called in `generateStaticParams`. Next.js should be preventing ").concat(expression, " from being included in server component files statically, but did not in this case.")), "__NEXT_ERROR_CODE", {
                value: "E1130",
                enumerable: false,
                configurable: true
            });
        case 'request':
            return;
        default:
            workUnitStore;
    }
}
var hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
// Common implicit body tags that React will treat as body when placed directly in html
var bodyAndImplicitTags = 'body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6';
// Detects when RootLayoutBoundary (our framework marker component) appears
// after Suspense in the component stack, indicating the root layout is wrapped
// within a Suspense boundary. Ensures no body/html/implicit-body components are in between.
//
// Example matches:
//   at Suspense (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
//
// Or with other components in between (but not body/html/implicit-body):
//   at Suspense (<anonymous>)
//   at SomeComponent (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
var hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex = new RegExp("\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:".concat(bodyAndImplicitTags, ") \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ").concat(_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME, " \\([^\\n]*\\)"));
var hasMetadataRegex = new RegExp("\\n\\s+at ".concat(_boundaryconstants.METADATA_BOUNDARY_NAME, "[\\n\\s]"));
var hasViewportRegex = new RegExp("\\n\\s+at ".concat(_boundaryconstants.VIEWPORT_BOUNDARY_NAME, "[\\n\\s]"));
var hasOutletRegex = new RegExp("\\n\\s+at ".concat(_boundaryconstants.OUTLET_BOUNDARY_NAME, "[\\n\\s]"));
var hasInstantValidationBoundaryRegex = new RegExp("\\n\\s+at ".concat(_boundaryconstants1.INSTANT_VALIDATION_BOUNDARY_NAME, "[\\n\\s]"));
function trackAllowedDynamicAccess(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        var message = 'Route "'.concat(workStore.route, '": Uncached data was accessed outside of ') + '<Suspense>. This delays the entire page from rendering, resulting in a ' + 'slow user experience. Learn more: ' + 'https://nextjs.org/docs/messages/blocking-route';
        var error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1079",
            enumerable: false,
            configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
var DynamicHoleKind = /*#__PURE__*/ function(DynamicHoleKind) {
    /** We know that this hole is caused by runtime data. */ DynamicHoleKind[DynamicHoleKind["Runtime"] = 1] = "Runtime";
    /** We know that this hole is caused by dynamic data. */ DynamicHoleKind[DynamicHoleKind["Dynamic"] = 2] = "Dynamic";
    return DynamicHoleKind;
}({});
function createInstantValidationState(createInstantStack) {
    return {
        hasDynamicMetadata: false,
        hasAllowedClientDynamicAboveBoundary: false,
        dynamicMetadata: null,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: [],
        validationPreventingErrors: [],
        thrownErrorsOutsideBoundary: [],
        createInstantStack: createInstantStack
    };
}
function trackDynamicHoleInNavigation(workStore, componentStack, dynamicValidation, clientDynamic, kind, boundaryState) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    }
    if (hasMetadataRegex.test(componentStack)) {
        var usageDescription = kind === 1 ? "Runtime data such as `cookies()`, `headers()`, `params`, or `searchParams` was accessed inside `generateMetadata` or you have file-based metadata such as icons that depend on dynamic params segments." : "Uncached data or `connection()` was accessed inside `generateMetadata`.";
        var message = 'Route "'.concat(workStore.route, '": ').concat(usageDescription, " Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata");
        var error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1076",
            enumerable: false,
            configurable: true
        }), componentStack, dynamicValidation.createInstantStack);
        dynamicValidation.dynamicMetadata = error;
        return;
    }
    if (hasViewportRegex.test(componentStack)) {
        var usageDescription1 = kind === 1 ? "Runtime data such as `cookies()`, `headers()`, `params`, or `searchParams` was accessed inside `generateViewport`." : "Uncached data or `connection()` was accessed inside `generateViewport`.";
        var message1 = 'Route "'.concat(workStore.route, '": ').concat(usageDescription1, " This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport");
        var error1 = addErrorContext(Object.defineProperty(new Error(message1), "__NEXT_ERROR_CODE", {
            value: "E1086",
            enumerable: false,
            configurable: true
        }), componentStack, dynamicValidation.createInstantStack);
        dynamicValidation.dynamicErrors.push(error1);
        return;
    }
    var boundaryLocation = hasInstantValidationBoundaryRegex.exec(componentStack);
    if (!boundaryLocation) {
        // We don't see the validation boundary in the component stack,
        // so this hole must be coming from a shared parent.
        // Shared parents are fully resolved and don't have RSC holes,
        // but they can still suspend in a client component during SSR.
        // If we managed to render all the validation boundaries, that means
        // that the client holes aren't blocking validation and we can disregard them.
        // Note that we don't even care whether they have suspense or not.
        if (boundaryState.expectedIds.size === boundaryState.renderedIds.size) {
            dynamicValidation.hasAllowedClientDynamicAboveBoundary = true;
            dynamicValidation.hasAllowedDynamic = true // Holes outside the boundary contribute to allowing dynamic metadata
            ;
            return;
        } else {
            // TODO(instant-validation) TODO(NAR-787)
            // If shared parents blocked us from validating, we should only log
            // the errors from the innermost (segments), i.e. omit layouts whose
            // slots managed to render (because clearly they didn't block validation)
            var message2 = 'Route "'.concat(workStore.route, '": Could not validate `unstable_instant` because a Client Component in a parent segment prevented the page from rendering.');
            var error2 = addErrorContext(Object.defineProperty(new Error(message2), "__NEXT_ERROR_CODE", {
                value: "E1082",
                enumerable: false,
                configurable: true
            }), componentStack, dynamicValidation.createInstantStack);
            dynamicValidation.validationPreventingErrors.push(error2);
            return;
        }
    } else {
        // The hole originates inside the validation boundary.
        //
        // Check if we have a Suspense above the hole, but below the validation boundary.
        // If we do, then this dynamic usage wouldn't block a navigation to this subtree.
        // Conversely, if the nearest suspense is above the validation boundary, then this subtree would block.
        //
        // Note that in the component stack, children come before parents.
        //
        // Valid:
        //   ...
        //   at Suspense
        //   ...
        //   at __next_prefetch_validation_boundary__
        //
        // Invalid:
        //   ...
        //   at __next_prefetch_validation_boundary__
        //   ...
        //   at Suspense
        //
        var suspenseLocation = hasSuspenseRegex.exec(componentStack);
        if (suspenseLocation) {
            if (suspenseLocation.index < boundaryLocation.index) {
                dynamicValidation.hasAllowedDynamic = true;
                return;
            } else {
            // invalid - fallthrough
            }
        }
    }
    if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        var syncError = clientDynamic.syncDynamicErrorWithStack;
        if (dynamicValidation.createInstantStack !== null && syncError.cause === undefined) {
            syncError.cause = dynamicValidation.createInstantStack();
        }
        dynamicValidation.dynamicErrors.push(syncError);
        return;
    }
    var usageDescription2 = kind === 1 ? "Runtime data such as `cookies()`, `headers()`, `params`, or `searchParams` was accessed outside of `<Suspense>`." : "Uncached data or `connection()` was accessed outside of `<Suspense>`.";
    var message3 = 'Route "'.concat(workStore.route, '": ').concat(usageDescription2, " This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route");
    var error3 = addErrorContext(Object.defineProperty(new Error(message3), "__NEXT_ERROR_CODE", {
        value: "E1078",
        enumerable: false,
        configurable: true
    }), componentStack, dynamicValidation.createInstantStack);
    dynamicValidation.dynamicErrors.push(error3);
    return;
}
function trackThrownErrorInNavigation(workStore, dynamicValidation, thrownValue, componentStack) {
    var boundaryLocation = hasInstantValidationBoundaryRegex.exec(componentStack);
    if (!boundaryLocation) {
        // There's no validation boundary on the component stack.
        // This error may have blocked a boundary from rendering.
        // Wrap the error to provide component context.
        // This helps for errors from node_modules which would otherwise
        // have no useful stack information due to ignore-listing,
        // e.g. next/dynamic with `ssr: false`.
        var error = addErrorContext(Object.defineProperty(new Error('An error occurred while attempting to validate instant UI. This error may be preventing the validation from completing.', {
            cause: thrownValue
        }), "__NEXT_ERROR_CODE", {
            value: "E1118",
            enumerable: false,
            configurable: true
        }), componentStack, null);
        dynamicValidation.thrownErrorsOutsideBoundary.push(error);
    } else {
        // There's validation boundary on the component stack,
        // so we know this error didn't block a validation boundary from rendering.
        // However, this error might be hiding be hiding dynamic content that would
        // cause validation to fail.
        var suspenseLocation = hasSuspenseRegex.exec(componentStack);
        if (suspenseLocation) {
            if (suspenseLocation.index < boundaryLocation.index) {
                // There's a Suspense below the validation boundary but above this error's location.
                // This subtree can't fail instant validation because any potential
                // dynamic holes would be guarded by the Suspense anyway,
                // so we can allow this.
                return;
            } else {
            // invalid - fallthrough
            }
        }
        var message = 'Route "'.concat(workStore.route, '": Could not validate `unstable_instant` because an error prevented the target segment from rendering.');
        var error1 = addErrorContext(Object.defineProperty(new Error(message, {
            cause: thrownValue
        }), "__NEXT_ERROR_CODE", {
            value: "E1112",
            enumerable: false,
            configurable: true
        }), componentStack, null // TODO(instant-validation-build): conflicting use of cause
        );
        dynamicValidation.validationPreventingErrors.push(error1);
    }
}
function trackDynamicHoleInRuntimeShell(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        var message = 'Route "'.concat(workStore.route, '": Uncached data or `connection()` was accessed inside `generateMetadata`. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata');
        var error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1080",
            enumerable: false,
            configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicMetadata = error;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        // TODO(instant-validation): If the page only has holes caused by runtime data,
        // we won't find out if there's a suspense-above-body and error for dynamic viewport
        // even if there is in fact a suspense-above-body
        var message1 = 'Route "'.concat(workStore.route, '": Uncached data or `connection()` was accessed inside `generateViewport`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport');
        var error1 = addErrorContext(Object.defineProperty(new Error(message1), "__NEXT_ERROR_CODE", {
            value: "E1077",
            enumerable: false,
            configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicErrors.push(error1);
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    }
    var message2 = 'Route "'.concat(workStore.route, '": Uncached data or `connection()` was accessed outside of `<Suspense>`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route');
    var error2 = addErrorContext(Object.defineProperty(new Error(message2), "__NEXT_ERROR_CODE", {
        value: "E1084",
        enumerable: false,
        configurable: true
    }), componentStack, null);
    dynamicValidation.dynamicErrors.push(error2);
    return;
}
function trackDynamicHoleInStaticShell(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        var message = 'Route "'.concat(workStore.route, '": Runtime data such as `cookies()`, `headers()`, `params`, or `searchParams` was accessed inside `generateMetadata` or you have file-based metadata such as icons that depend on dynamic params segments. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata');
        var error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1085",
            enumerable: false,
            configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicMetadata = error;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        var message1 = 'Route "'.concat(workStore.route, '": Runtime data such as `cookies()`, `headers()`, `params`, or `searchParams` was accessed inside `generateViewport`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport');
        var error1 = addErrorContext(Object.defineProperty(new Error(message1), "__NEXT_ERROR_CODE", {
            value: "E1081",
            enumerable: false,
            configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicErrors.push(error1);
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        var message2 = 'Route "'.concat(workStore.route, '": Runtime data such as `cookies()`, `headers()`, `params`, or `searchParams` was accessed outside of `<Suspense>`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route');
        var error2 = addErrorContext(Object.defineProperty(new Error(message2), "__NEXT_ERROR_CODE", {
            value: "E1083",
            enumerable: false,
            configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicErrors.push(error2);
        return;
    }
}
/**
 * In dev mode, we prefer using the owner stack, otherwise the provided
 * component stack is used.
 *
 * Accepts an already-created Error so the SWC error-code plugin can see the
 * `new Error(...)` call at each call site and auto-assign error codes.
 */ function addErrorContext(error, componentStack, createInstantStack) {
    var ownerStack = ("TURBOPACK compile-time value", "development") !== 'production' && _react.default.captureOwnerStack ? _react.default.captureOwnerStack() : null;
    if (createInstantStack !== null) {
        error.cause = createInstantStack();
    }
    // TODO go back to owner stack here if available. This is temporarily using componentStack to get the right
    //
    error.stack = error.name + ': ' + error.message + (ownerStack || componentStack);
    return error;
}
var PreludeState = /*#__PURE__*/ function(PreludeState) {
    PreludeState[PreludeState["Full"] = 0] = "Full";
    PreludeState[PreludeState["Empty"] = 1] = "Empty";
    PreludeState[PreludeState["Errored"] = 2] = "Errored";
    return PreludeState;
}({});
function logDisallowedDynamicError(workStore, error) {
    console.error(error);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic) {
    if (serverDynamic.syncDynamicErrorWithStack) {
        logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
        throw new _staticgenerationbailout.StaticGenBailoutError();
    }
    if (prelude !== 0) {
        if (dynamicValidation.hasSuspenseAboveBody) {
            // This route has opted into allowing fully dynamic rendering
            // by including a Suspense boundary above the body. In this case
            // a lack of a shell is not considered disallowed so we simply return
            return;
        }
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        var dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            for(var i = 0; i < dynamicErrors.length; i++){
                logDisallowedDynamicError(workStore, dynamicErrors[i]);
            }
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        // If we got this far then the only other thing that could be blocking
        // the root is dynamic Viewport. If this is dynamic then
        // you need to opt into that by adding a Suspense boundary above the body
        // to indicate your are ok with fully dynamic rendering.
        if (dynamicValidation.hasDynamicViewport) {
            console.error('Route "'.concat(workStore.route, '" has a `generateViewport` that depends on Request data (`cookies()`, etc...) or uncached external data (`fetch(...)`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport'));
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            console.error('Route "'.concat(workStore.route, '" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.'));
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    } else {
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
            console.error('Route "'.concat(workStore.route, '" has a `generateMetadata` that depends on Request data (`cookies()`, etc...) or uncached external data (`fetch(...)`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata'));
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    }
}
function getStaticShellDisallowedDynamicReasons(workStore, prelude, dynamicValidation, configAllowsBlocking) {
    if (configAllowsBlocking || dynamicValidation.hasSuspenseAboveBody) {
        // This route has opted into allowing fully dynamic rendering
        // by including a Suspense boundary above the body. In this case
        // a lack of a shell is not considered disallowed so we simply return
        return [];
    }
    if (prelude !== 0) {
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        var dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            return dynamicErrors;
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            return [
                Object.defineProperty(new _invarianterror.InvariantError('Route "'.concat(workStore.route, '" did not produce a static shell and Next.js was unable to determine a reason.')), "__NEXT_ERROR_CODE", {
                    value: "E936",
                    enumerable: false,
                    configurable: true
                })
            ];
        }
    } else {
        // We have a prelude but we might still have dynamic metadata without any other dynamic access
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.dynamicErrors.length === 0 && dynamicValidation.dynamicMetadata) {
            return [
                dynamicValidation.dynamicMetadata
            ];
        }
    }
    // We had a non-empty prelude and there are no dynamic holes
    return [];
}
function getNavigationDisallowedDynamicReasons(workStore, prelude, dynamicValidation, validationSampleTracking, boundaryState) {
    // If we have errors related to missing samples, those should take precedence over everything else.
    if (validationSampleTracking) {
        var missingSampleErrors = validationSampleTracking.missingSampleErrors;
        if (missingSampleErrors.length > 0) {
            return missingSampleErrors;
        }
    }
    var validationPreventingErrors = dynamicValidation.validationPreventingErrors;
    if (validationPreventingErrors.length > 0) {
        return validationPreventingErrors;
    }
    if (boundaryState.renderedIds.size < boundaryState.expectedIds.size) {
        var thrownErrorsOutsideBoundary = dynamicValidation.thrownErrorsOutsideBoundary, createInstantStack = dynamicValidation.createInstantStack;
        if (thrownErrorsOutsideBoundary.length === 0) {
            var message = 'Route "'.concat(workStore.route, '": Could not validate `unstable_instant` because the target segment was prevented from rendering for an unknown reason.');
            var error = createInstantStack !== null ? createInstantStack() : new Error();
            error.name = 'Error';
            error.message = message;
            return [
                error
            ];
        } else if (thrownErrorsOutsideBoundary.length === 1) {
            var message1 = 'Route "'.concat(workStore.route, '": Could not validate `unstable_instant` because the target segment was prevented from rendering, likely due to the following error.');
            var error1 = createInstantStack !== null ? createInstantStack() : new Error();
            error1.name = 'Error';
            error1.message = message1;
            return [
                error1,
                thrownErrorsOutsideBoundary[0]
            ];
        } else {
            var message2 = 'Route "'.concat(workStore.route, '": Could not validate `unstable_instant` because the target segment was prevented from rendering, likely due to one of the following errors.');
            var error2 = createInstantStack !== null ? createInstantStack() : new Error();
            error2.name = 'Error';
            error2.message = message2;
            return [
                error2
            ].concat(_to_consumable_array._(thrownErrorsOutsideBoundary));
        }
    }
    // NOTE: We don't care about Suspense above body here,
    // we're only concerned with the validation boundary
    if (prelude !== 0) {
        var dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            return dynamicErrors;
        }
        if (prelude === 1) {
            // If a client component suspended prevented us from rendering a shell
            // but didn't block validation, we don't require a prelude.
            if (dynamicValidation.hasAllowedClientDynamicAboveBoundary) {
                return [];
            }
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            return [
                Object.defineProperty(new _invarianterror.InvariantError('Route "'.concat(workStore.route, '" failed to render during instant validation and Next.js was unable to determine a reason.')), "__NEXT_ERROR_CODE", {
                    value: "E1055",
                    enumerable: false,
                    configurable: true
                })
            ];
        }
    } else {
        var dynamicErrors1 = dynamicValidation.dynamicErrors;
        if (dynamicErrors1.length > 0) {
            return dynamicErrors1;
        }
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.dynamicMetadata) {
            return [
                dynamicValidation.dynamicMetadata
            ];
        }
    }
    // We had a non-empty prelude and there are no dynamic holes
    return [];
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/dev/hot-reloader-types.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HMR_MESSAGE_SENT_TO_BROWSER: null,
    HMR_MESSAGE_SENT_TO_SERVER: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HMR_MESSAGE_SENT_TO_BROWSER: function HMR_MESSAGE_SENT_TO_BROWSER1() {
        return HMR_MESSAGE_SENT_TO_BROWSER;
    },
    HMR_MESSAGE_SENT_TO_SERVER: function HMR_MESSAGE_SENT_TO_SERVER1() {
        return HMR_MESSAGE_SENT_TO_SERVER;
    }
});
var HMR_MESSAGE_SENT_TO_BROWSER = /*#__PURE__*/ function(HMR_MESSAGE_SENT_TO_BROWSER) {
    // JSON messages:
    HMR_MESSAGE_SENT_TO_BROWSER["ADDED_PAGE"] = "addedPage";
    HMR_MESSAGE_SENT_TO_BROWSER["REMOVED_PAGE"] = "removedPage";
    HMR_MESSAGE_SENT_TO_BROWSER["RELOAD_PAGE"] = "reloadPage";
    HMR_MESSAGE_SENT_TO_BROWSER["SERVER_COMPONENT_CHANGES"] = "serverComponentChanges";
    HMR_MESSAGE_SENT_TO_BROWSER["MIDDLEWARE_CHANGES"] = "middlewareChanges";
    HMR_MESSAGE_SENT_TO_BROWSER["CLIENT_CHANGES"] = "clientChanges";
    HMR_MESSAGE_SENT_TO_BROWSER["SERVER_ONLY_CHANGES"] = "serverOnlyChanges";
    HMR_MESSAGE_SENT_TO_BROWSER["SYNC"] = "sync";
    HMR_MESSAGE_SENT_TO_BROWSER["BUILT"] = "built";
    HMR_MESSAGE_SENT_TO_BROWSER["BUILDING"] = "building";
    HMR_MESSAGE_SENT_TO_BROWSER["DEV_PAGES_MANIFEST_UPDATE"] = "devPagesManifestUpdate";
    HMR_MESSAGE_SENT_TO_BROWSER["TURBOPACK_MESSAGE"] = "turbopack-message";
    HMR_MESSAGE_SENT_TO_BROWSER["SERVER_ERROR"] = "serverError";
    HMR_MESSAGE_SENT_TO_BROWSER["TURBOPACK_CONNECTED"] = "turbopack-connected";
    HMR_MESSAGE_SENT_TO_BROWSER["ISR_MANIFEST"] = "isrManifest";
    HMR_MESSAGE_SENT_TO_BROWSER["CACHE_INDICATOR"] = "cacheIndicator";
    HMR_MESSAGE_SENT_TO_BROWSER["DEV_INDICATOR"] = "devIndicator";
    HMR_MESSAGE_SENT_TO_BROWSER["DEVTOOLS_CONFIG"] = "devtoolsConfig";
    HMR_MESSAGE_SENT_TO_BROWSER["REQUEST_CURRENT_ERROR_STATE"] = "requestCurrentErrorState";
    HMR_MESSAGE_SENT_TO_BROWSER["REQUEST_PAGE_METADATA"] = "requestPageMetadata";
    // Binary messages:
    HMR_MESSAGE_SENT_TO_BROWSER[HMR_MESSAGE_SENT_TO_BROWSER["REACT_DEBUG_CHUNK"] = 0] = "REACT_DEBUG_CHUNK";
    HMR_MESSAGE_SENT_TO_BROWSER[HMR_MESSAGE_SENT_TO_BROWSER["ERRORS_TO_SHOW_IN_BROWSER"] = 1] = "ERRORS_TO_SHOW_IN_BROWSER";
    return HMR_MESSAGE_SENT_TO_BROWSER;
}({});
var HMR_MESSAGE_SENT_TO_SERVER = /*#__PURE__*/ function(HMR_MESSAGE_SENT_TO_SERVER) {
    // JSON messages:
    HMR_MESSAGE_SENT_TO_SERVER["MCP_ERROR_STATE_RESPONSE"] = "mcp-error-state-response";
    HMR_MESSAGE_SENT_TO_SERVER["MCP_PAGE_METADATA_RESPONSE"] = "mcp-page-metadata-response";
    HMR_MESSAGE_SENT_TO_SERVER["PING"] = "ping";
    return HMR_MESSAGE_SENT_TO_SERVER;
}({});
}),
]);

//# sourceMappingURL=07ob_next_dist_1wdmn35._.js.map