(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/register-deployment-id-global.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _deploymentid = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/deployment-id.js [app-client] (ecmascript)");
var deploymentId = (0, _deploymentid.getDeploymentId)();
globalThis.NEXT_DEPLOYMENT_ID = deploymentId;
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/asset-prefix.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _instanceof = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_instanceof.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getAssetPrefix", {
    enumerable: true,
    get: function get() {
        return getAssetPrefix;
    }
});
var _invarianterror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
function getAssetPrefix() {
    var currentScript = document.currentScript;
    if (!_instanceof._(currentScript, HTMLScriptElement)) {
        throw Object.defineProperty(new _invarianterror.InvariantError("Expected document.currentScript to be a <script> element. Received ".concat(currentScript, " instead.")), "__NEXT_ERROR_CODE", {
            value: "E783",
            enumerable: false,
            configurable: true
        });
    }
    var pathname = new URL(currentScript.src).pathname;
    var nextIndex = pathname.indexOf('/_next/');
    if (nextIndex === -1) {
        throw Object.defineProperty(new _invarianterror.InvariantError("Expected document.currentScript src to contain '/_next/'. Received ".concat(currentScript.src, " instead.")), "__NEXT_ERROR_CODE", {
            value: "E784",
            enumerable: false,
            configurable: true
        });
    }
    return pathname.slice(0, nextIndex);
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/set-attributes-from-props.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setAttributesFromProps", {
    enumerable: true,
    get: function get() {
        return setAttributesFromProps;
    }
});
var DOMAttributeNames = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv',
    noModule: 'noModule'
};
var ignoreProps = [
    'onLoad',
    'onReady',
    'dangerouslySetInnerHTML',
    'children',
    'onError',
    'strategy',
    'stylesheets'
];
function isBooleanScriptAttribute(attr) {
    return [
        'async',
        'defer',
        'noModule'
    ].includes(attr);
}
function setAttributesFromProps(el, props) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array._(_step.value, 2), p = _step_value[0], value = _step_value[1];
            if (!props.hasOwnProperty(p)) continue;
            if (ignoreProps.includes(p)) continue;
            // we don't render undefined props to the DOM
            if (value === undefined) {
                continue;
            }
            var attr = DOMAttributeNames[p] || p.toLowerCase();
            if (el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr)) {
                // Correctly assign boolean script attributes
                // https://github.com/vercel/next.js/pull/20748
                ;
                el[attr] = !!value;
            } else {
                el.setAttribute(attr, String(value));
            }
            // Remove falsy non-zero boolean attributes so they are correctly interpreted
            // (e.g. if we set them to false, this coerces to the string "false", which the browser interprets as true)
            if (value === false || el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr) && (!value || value === 'false')) {
                // Call setAttribute before, as we need to set and unset the attribute to override force async:
                // https://html.spec.whatwg.org/multipage/scripting.html#script-force-async
                el.setAttribute(attr, '');
                el.removeAttribute(attr);
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
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-bootstrap.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Before starting the Next.js runtime and requiring any module, we need to make
 * sure the following scripts are executed in the correct order:
 * - Polyfills
 * - next/script with `beforeInteractive` strategy
 */ "use strict";
var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "appBootstrap", {
    enumerable: true,
    get: function get() {
        return appBootstrap;
    }
});
var _assetprefix = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/asset-prefix.js [app-client] (ecmascript)");
var _setattributesfromprops = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/set-attributes-from-props.js [app-client] (ecmascript)");
var version = "16.2.9";
window.next = {
    version: version,
    appDir: true
};
function loadScriptsInSequence(scripts, hydrate) {
    if (!scripts || !scripts.length) {
        return hydrate();
    }
    return scripts.reduce(function(promise, param) {
        var _param = _sliced_to_array._(param, 2), src = _param[0], props = _param[1];
        return promise.then(function() {
            return new Promise(function(resolve, reject) {
                var el = document.createElement('script');
                if (props) {
                    (0, _setattributesfromprops.setAttributesFromProps)(el, props);
                }
                if (src) {
                    el.src = src;
                    el.onload = function() {
                        return resolve();
                    };
                    el.onerror = reject;
                } else if (props) {
                    el.innerHTML = props.children;
                    setTimeout(resolve);
                }
                document.head.appendChild(el);
            });
        });
    }, Promise.resolve()).catch(function(err) {
        console.error(err);
    // Still try to hydrate even if there's an error.
    }).then(function() {
        hydrate();
    });
}
function appBootstrap(hydrate) {
    var assetPrefix = (0, _assetprefix.getAssetPrefix)();
    loadScriptsInSequence(self.__next_s, function() {
        // If the static shell is being debugged, skip hydration if the
        // `__nextppronly` query is present. This is only enabled when the
        // environment variable `__NEXT_EXPERIMENTAL_STATIC_SHELL_DEBUGGING` is
        // set to `1`. Otherwise the following is optimized out.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        {
            var search;
        /*TURBOPACK member replacement*/ }
        hydrate(assetPrefix);
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/react-client-callbacks/report-global-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "reportGlobalError", {
    enumerable: true,
    get: function get() {
        return reportGlobalError;
    }
});
var reportGlobalError = typeof reportError === 'function' ? reportError : function(error) {
    // TODO: Dispatch error event
    globalThis.console.error(error);
};
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// This module can be shared between both pages router and app router
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isRecoverableError: null,
    onRecoverableError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isRecoverableError: function isRecoverableError1() {
        return isRecoverableError;
    },
    onRecoverableError: function onRecoverableError1() {
        return onRecoverableError;
    }
});
var _interop_require_default = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
var _bailouttocsr = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
var _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/is-error.js [app-client] (ecmascript)"));
var _reportglobalerror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/react-client-callbacks/report-global-error.js [app-client] (ecmascript)");
var recoverableErrors = new WeakSet();
var isInstantTest = ("TURBOPACK compile-time value", true) && typeof self !== 'undefined' && !!self.__next_instant_test;
function isRecoverableError(error) {
    return recoverableErrors.has(error);
}
var onRecoverableError = function onRecoverableError(error) {
    // x-ref: https://github.com/facebook/react/pull/28736
    var cause = (0, _iserror.default)(error) && 'cause' in error ? error.cause : error;
    // Skip certain custom errors which are not expected to be reported on client
    if ((0, _bailouttocsr.isBailoutToCSRError)(cause)) return;
    // Instant Navigation Testing API: suppress "server could not finish this
    // Suspense boundary" errors (React error #419) during instant test mode.
    // The static shell intentionally has incomplete Suspense boundaries — React
    // correctly falls back to client rendering, which is expected.
    if (isInstantTest) {
        if ((0, _iserror.default)(cause)) {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            else {
                if (cause.message.includes('could not finish this Suspense boundary')) return;
            }
        }
    }
    if ("TURBOPACK compile-time truthy", 1) {
        var decorateDevError = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/errors/stitched-error.js [app-client] (ecmascript)").decorateDevError;
        var causeError = decorateDevError(cause);
        recoverableErrors.add(causeError);
        cause = causeError;
    }
    (0, _reportglobalerror.reportGlobalError)(cause);
};
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTTPAccessErrorStatus: null,
    HTTP_ERROR_FALLBACK_ERROR_CODE: null,
    getAccessFallbackErrorTypeByStatus: null,
    getAccessFallbackHTTPStatus: null,
    isHTTPAccessFallbackError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function HTTPAccessErrorStatus1() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function HTTP_ERROR_FALLBACK_ERROR_CODE1() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function getAccessFallbackErrorTypeByStatus1() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function getAccessFallbackHTTPStatus1() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function isHTTPAccessFallbackError1() {
        return isHTTPAccessFallbackError;
    }
});
var HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
var ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
var HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if ((typeof error === "undefined" ? "undefined" : _type_of._(error)) !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    var _error_digest_split = _sliced_to_array._(error.digest.split(';'), 2), prefix = _error_digest_split[0], httpStatus = _error_digest_split[1];
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    var httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/redirect-status-code.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedirectStatusCode", {
    enumerable: true,
    get: function get() {
        return RedirectStatusCode;
    }
});
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REDIRECT_ERROR_CODE: null,
    isRedirectError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REDIRECT_ERROR_CODE: function REDIRECT_ERROR_CODE1() {
        return REDIRECT_ERROR_CODE;
    },
    isRedirectError: function isRedirectError1() {
        return isRedirectError;
    }
});
var _redirectstatuscode = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/redirect-status-code.js [app-client] (ecmascript)");
var REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
function isRedirectError(error) {
    if ((typeof error === "undefined" ? "undefined" : _type_of._(error)) !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    var digest = error.digest.split(';');
    var _digest = _sliced_to_array._(digest, 2), errorCode = _digest[0], type = _digest[1];
    var destination = digest.slice(2, -2).join(';');
    var status = digest.at(-2);
    var statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function get() {
        return isNextRouterError;
    }
});
var _httpaccessfallback = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
var _redirecterror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/lib/console.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _instanceof = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_instanceof.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatConsoleArgs: null,
    parseConsoleArgs: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatConsoleArgs: function formatConsoleArgs1() {
        return formatConsoleArgs;
    },
    parseConsoleArgs: function parseConsoleArgs1() {
        return parseConsoleArgs;
    }
});
var _interop_require_default = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
var _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/is-error.js [app-client] (ecmascript)"));
function formatObject(arg, depth) {
    switch(typeof arg === "undefined" ? "undefined" : _type_of._(arg)){
        case 'object':
            if (arg === null) {
                return 'null';
            } else if (Array.isArray(arg)) {
                var result = '[';
                if (depth < 1) {
                    for(var i = 0; i < arg.length; i++){
                        if (result !== '[') {
                            result += ',';
                        }
                        if (Object.prototype.hasOwnProperty.call(arg, i)) {
                            result += formatObject(arg[i], depth + 1);
                        }
                    }
                } else {
                    result += arg.length > 0 ? '...' : '';
                }
                result += ']';
                return result;
            } else if (_instanceof._(arg, Error)) {
                return arg + '';
            } else {
                var keys = Object.keys(arg);
                var result1 = '{';
                if (depth < 1) {
                    for(var i1 = 0; i1 < keys.length; i1++){
                        var key = keys[i1];
                        var desc = Object.getOwnPropertyDescriptor(arg, 'key');
                        if (desc && !desc.get && !desc.set) {
                            var jsonKey = JSON.stringify(key);
                            if (jsonKey !== '"' + key + '"') {
                                result1 += jsonKey + ': ';
                            } else {
                                result1 += key + ': ';
                            }
                            result1 += formatObject(desc.value, depth + 1);
                        }
                    }
                } else {
                    result1 += keys.length > 0 ? '...' : '';
                }
                result1 += '}';
                return result1;
            }
        case 'string':
            return JSON.stringify(arg);
        case 'number':
        case 'bigint':
        case 'boolean':
        case 'symbol':
        case 'undefined':
        case 'function':
        default:
            return String(arg);
    }
}
function formatConsoleArgs(args) {
    var message;
    var idx;
    if (typeof args[0] === 'string') {
        message = args[0];
        idx = 1;
    } else {
        message = '';
        idx = 0;
    }
    var result = '';
    var startQuote = false;
    for(var i = 0; i < message.length; ++i){
        var char = message[i];
        if (char !== '%' || i === message.length - 1 || idx >= args.length) {
            result += char;
            continue;
        }
        var code = message[++i];
        switch(code){
            case 'c':
                {
                    // TODO: We should colorize with HTML instead of turning into a string.
                    // Ignore for now.
                    result = startQuote ? "".concat(result, "]") : "[".concat(result);
                    startQuote = !startQuote;
                    idx++;
                    break;
                }
            case 'O':
            case 'o':
                {
                    result += formatObject(args[idx++], 0);
                    break;
                }
            case 'd':
            case 'i':
                {
                    result += parseInt(args[idx++], 10);
                    break;
                }
            case 'f':
                {
                    result += parseFloat(args[idx++]);
                    break;
                }
            case 's':
                {
                    result += String(args[idx++]);
                    break;
                }
            default:
                result += '%' + code;
        }
    }
    for(; idx < args.length; idx++){
        result += (idx > 0 ? ' ' : '') + formatObject(args[idx], 0);
    }
    return result;
}
function parseConsoleArgs(args) {
    // See
    // https://github.com/facebook/react/blob/65a56d0e99261481c721334a3ec4561d173594cd/packages/react-devtools-shared/src/backend/flight/renderer.js#L88-L93
    //
    // Logs replayed from the server look like this:
    // [
    //   "%c%s%c%o\n\n%s\n\n%s\n",
    //   "background: #e6e6e6; ...",
    //   " Server ", // can also be e.g. " Prerender "
    //   "",
    //   Error,
    //   "The above error occurred in the <Page> component.",
    //   ...
    // ]
    if (args.length > 3 && typeof args[0] === 'string' && args[0].startsWith('%c%s%c') && typeof args[1] === 'string' && typeof args[2] === 'string' && typeof args[3] === 'string') {
        var environmentName = args[2];
        var maybeError = args[4];
        return {
            environmentName: environmentName.trim(),
            error: (0, _iserror.default)(maybeError) ? maybeError : null
        };
    }
    return {
        environmentName: null,
        error: null
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_HEADER: null,
    FLIGHT_HEADERS: null,
    NEXT_ACTION_NOT_FOUND_HEADER: null,
    NEXT_ACTION_REVALIDATED_HEADER: null,
    NEXT_DID_POSTPONE_HEADER: null,
    NEXT_HMR_REFRESH_HASH_COOKIE: null,
    NEXT_HMR_REFRESH_HEADER: null,
    NEXT_HTML_REQUEST_ID_HEADER: null,
    NEXT_INSTANT_PREFETCH_HEADER: null,
    NEXT_INSTANT_TEST_COOKIE: null,
    NEXT_IS_PRERENDER_HEADER: null,
    NEXT_REQUEST_ID_HEADER: null,
    NEXT_REWRITTEN_PATH_HEADER: null,
    NEXT_REWRITTEN_QUERY_HEADER: null,
    NEXT_ROUTER_PREFETCH_HEADER: null,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: null,
    NEXT_ROUTER_STALE_TIME_HEADER: null,
    NEXT_ROUTER_STATE_TREE_HEADER: null,
    NEXT_RSC_UNION_QUERY: null,
    NEXT_URL: null,
    RSC_CONTENT_TYPE_HEADER: null,
    RSC_HEADER: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_HEADER: function ACTION_HEADER1() {
        return ACTION_HEADER;
    },
    FLIGHT_HEADERS: function FLIGHT_HEADERS1() {
        return FLIGHT_HEADERS;
    },
    NEXT_ACTION_NOT_FOUND_HEADER: function NEXT_ACTION_NOT_FOUND_HEADER1() {
        return NEXT_ACTION_NOT_FOUND_HEADER;
    },
    NEXT_ACTION_REVALIDATED_HEADER: function NEXT_ACTION_REVALIDATED_HEADER1() {
        return NEXT_ACTION_REVALIDATED_HEADER;
    },
    NEXT_DID_POSTPONE_HEADER: function NEXT_DID_POSTPONE_HEADER1() {
        return NEXT_DID_POSTPONE_HEADER;
    },
    NEXT_HMR_REFRESH_HASH_COOKIE: function NEXT_HMR_REFRESH_HASH_COOKIE1() {
        return NEXT_HMR_REFRESH_HASH_COOKIE;
    },
    NEXT_HMR_REFRESH_HEADER: function NEXT_HMR_REFRESH_HEADER1() {
        return NEXT_HMR_REFRESH_HEADER;
    },
    NEXT_HTML_REQUEST_ID_HEADER: function NEXT_HTML_REQUEST_ID_HEADER1() {
        return NEXT_HTML_REQUEST_ID_HEADER;
    },
    NEXT_INSTANT_PREFETCH_HEADER: function NEXT_INSTANT_PREFETCH_HEADER1() {
        return NEXT_INSTANT_PREFETCH_HEADER;
    },
    NEXT_INSTANT_TEST_COOKIE: function NEXT_INSTANT_TEST_COOKIE1() {
        return NEXT_INSTANT_TEST_COOKIE;
    },
    NEXT_IS_PRERENDER_HEADER: function NEXT_IS_PRERENDER_HEADER1() {
        return NEXT_IS_PRERENDER_HEADER;
    },
    NEXT_REQUEST_ID_HEADER: function NEXT_REQUEST_ID_HEADER1() {
        return NEXT_REQUEST_ID_HEADER;
    },
    NEXT_REWRITTEN_PATH_HEADER: function NEXT_REWRITTEN_PATH_HEADER1() {
        return NEXT_REWRITTEN_PATH_HEADER;
    },
    NEXT_REWRITTEN_QUERY_HEADER: function NEXT_REWRITTEN_QUERY_HEADER1() {
        return NEXT_REWRITTEN_QUERY_HEADER;
    },
    NEXT_ROUTER_PREFETCH_HEADER: function NEXT_ROUTER_PREFETCH_HEADER1() {
        return NEXT_ROUTER_PREFETCH_HEADER;
    },
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function NEXT_ROUTER_SEGMENT_PREFETCH_HEADER1() {
        return NEXT_ROUTER_SEGMENT_PREFETCH_HEADER;
    },
    NEXT_ROUTER_STALE_TIME_HEADER: function NEXT_ROUTER_STALE_TIME_HEADER1() {
        return NEXT_ROUTER_STALE_TIME_HEADER;
    },
    NEXT_ROUTER_STATE_TREE_HEADER: function NEXT_ROUTER_STATE_TREE_HEADER1() {
        return NEXT_ROUTER_STATE_TREE_HEADER;
    },
    NEXT_RSC_UNION_QUERY: function NEXT_RSC_UNION_QUERY1() {
        return NEXT_RSC_UNION_QUERY;
    },
    NEXT_URL: function NEXT_URL1() {
        return NEXT_URL;
    },
    RSC_CONTENT_TYPE_HEADER: function RSC_CONTENT_TYPE_HEADER1() {
        return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_HEADER: function RSC_HEADER1() {
        return RSC_HEADER;
    }
});
var RSC_HEADER = 'rsc';
var ACTION_HEADER = 'next-action';
var NEXT_ROUTER_STATE_TREE_HEADER = 'next-router-state-tree';
var NEXT_ROUTER_PREFETCH_HEADER = 'next-router-prefetch';
var NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = 'next-router-segment-prefetch';
var NEXT_HMR_REFRESH_HEADER = 'next-hmr-refresh';
var NEXT_HMR_REFRESH_HASH_COOKIE = '__next_hmr_refresh_hash__';
var NEXT_URL = 'next-url';
var RSC_CONTENT_TYPE_HEADER = 'text/x-component';
var NEXT_INSTANT_PREFETCH_HEADER = 'next-instant-navigation-testing-prefetch';
var NEXT_INSTANT_TEST_COOKIE = 'next-instant-navigation-testing';
var FLIGHT_HEADERS = [
    RSC_HEADER,
    NEXT_ROUTER_STATE_TREE_HEADER,
    NEXT_ROUTER_PREFETCH_HEADER,
    NEXT_HMR_REFRESH_HEADER,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
];
var NEXT_RSC_UNION_QUERY = '_rsc';
var NEXT_ROUTER_STALE_TIME_HEADER = 'x-nextjs-stale-time';
var NEXT_DID_POSTPONE_HEADER = 'x-nextjs-postponed';
var NEXT_REWRITTEN_PATH_HEADER = 'x-nextjs-rewritten-path';
var NEXT_REWRITTEN_QUERY_HEADER = 'x-nextjs-rewritten-query';
var NEXT_IS_PRERENDER_HEADER = 'x-nextjs-prerender';
var NEXT_ACTION_NOT_FOUND_HEADER = 'x-nextjs-action-not-found';
var NEXT_REQUEST_ID_HEADER = 'x-nextjs-request-id';
var NEXT_HTML_REQUEST_ID_HEADER = 'x-nextjs-html-request-id';
var NEXT_ACTION_REVALIDATED_HEADER = 'x-action-revalidated';
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_HMR_REFRESH: null,
    ACTION_NAVIGATE: null,
    ACTION_REFRESH: null,
    ACTION_RESTORE: null,
    ACTION_SERVER_ACTION: null,
    ACTION_SERVER_PATCH: null,
    PrefetchKind: null,
    ScrollBehavior: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_HMR_REFRESH: function ACTION_HMR_REFRESH1() {
        return ACTION_HMR_REFRESH;
    },
    ACTION_NAVIGATE: function ACTION_NAVIGATE1() {
        return ACTION_NAVIGATE;
    },
    ACTION_REFRESH: function ACTION_REFRESH1() {
        return ACTION_REFRESH;
    },
    ACTION_RESTORE: function ACTION_RESTORE1() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_ACTION: function ACTION_SERVER_ACTION1() {
        return ACTION_SERVER_ACTION;
    },
    ACTION_SERVER_PATCH: function ACTION_SERVER_PATCH1() {
        return ACTION_SERVER_PATCH;
    },
    PrefetchKind: function PrefetchKind1() {
        return PrefetchKind;
    },
    ScrollBehavior: function ScrollBehavior1() {
        return ScrollBehavior;
    }
});
var ACTION_REFRESH = 'refresh';
var ACTION_NAVIGATE = 'navigate';
var ACTION_RESTORE = 'restore';
var ACTION_SERVER_PATCH = 'server-patch';
var ACTION_HMR_REFRESH = 'hmr-refresh';
var ACTION_SERVER_ACTION = 'server-action';
var PrefetchKind = /*#__PURE__*/ function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    return PrefetchKind;
}({});
var ScrollBehavior = /*#__PURE__*/ function(ScrollBehavior) {
    /** Use per-node ScrollRef to decide whether to scroll. */ ScrollBehavior[ScrollBehavior["Default"] = 0] = "Default";
    /** Suppress scroll entirely (e.g. scroll={false} on Link or router.push). */ ScrollBehavior[ScrollBehavior["NoScroll"] = 1] = "NoScroll";
    return ScrollBehavior;
}({});
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/use-action-queue.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _to_consumable_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    dispatchAppRouterAction: null,
    dispatchGestureState: null,
    refreshOnInstantNavigationUnlock: null,
    useActionQueue: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    dispatchAppRouterAction: function dispatchAppRouterAction1() {
        return dispatchAppRouterAction;
    },
    dispatchGestureState: function dispatchGestureState1() {
        return dispatchGestureState;
    },
    refreshOnInstantNavigationUnlock: function refreshOnInstantNavigationUnlock1() {
        return refreshOnInstantNavigationUnlock;
    },
    useActionQueue: function useActionQueue1() {
        return useActionQueue;
    }
});
var _interop_require_wildcard = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _isthenable = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/is-thenable.js [app-client] (ecmascript)");
var _routerreducertypes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
// The app router state lives outside of React, so we can import the dispatch
// method directly wherever we need it, rather than passing it around via props
// or context.
var dispatch = null;
function refreshOnInstantNavigationUnlock() {
    if ("TURBOPACK compile-time truthy", 1) {
        if (dispatch !== null) {
            dispatch({
                type: _routerreducertypes.ACTION_REFRESH,
                bypassCacheInvalidation: true
            });
        } else {
            window.location.reload();
        }
    }
}
function dispatchAppRouterAction(action) {
    if (dispatch === null) {
        throw Object.defineProperty(new Error('Internal Next.js error: Router action dispatched before initialization.'), "__NEXT_ERROR_CODE", {
            value: "E668",
            enumerable: false,
            configurable: true
        });
    }
    dispatch(action);
}
// Optimistic state setter for experimental_gesturePush. Only should be used
// during a gesture transition.
var setGestureRouterState = null;
function dispatchGestureState(state) {
    if (setGestureRouterState === null) {
        throw Object.defineProperty(new Error('Internal Next.js error: Router action dispatched before initialization.'), "__NEXT_ERROR_CODE", {
            value: "E668",
            enumerable: false,
            configurable: true
        });
    }
    setGestureRouterState(state);
}
var __DEV__ = ("TURBOPACK compile-time value", "development") !== 'production';
var promisesWithDebugInfo = ("TURBOPACK compile-time truthy", 1) ? new WeakMap() : "TURBOPACK unreachable";
function useActionQueue(actionQueue) {
    var _react_default_useState = _sliced_to_array._(_react.default.useState(actionQueue.state), 2), canonicalState = _react_default_useState[0], setState = _react_default_useState[1];
    // Wrap the canonical state in useOptimistic to support
    // experimental_gesturePush. During a gesture transition, this returns a fork
    // of the router state that represents the eventual target if/when the gesture
    // completes. Otherwise it returns the canonical state.
    var _ref = _sliced_to_array._((0, _react.useOptimistic)(canonicalState), 2), state = _ref[0], setGesture = _ref[1];
    if (typeof window !== 'undefined') {
        setGestureRouterState = setGesture;
    }
    // Because of a known issue that requires to decode Flight streams inside the
    // render phase, we have to be a bit clever and assign the dispatch method to
    // a module-level variable upon initialization. The useState hook in this
    // module only exists to synchronize state that lives outside of React.
    // Ideally, what we'd do instead is pass the state as a prop to root.render;
    // this is conceptually how we're modeling the app router state, despite the
    // weird implementation details.
    var nextDispatch;
    if ("TURBOPACK compile-time truthy", 1) {
        var useAppDevRenderingIndicator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/use-app-dev-rendering-indicator.js [app-client] (ecmascript)").useAppDevRenderingIndicator;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        var appDevRenderingIndicator = useAppDevRenderingIndicator();
        nextDispatch = function nextDispatch(action) {
            appDevRenderingIndicator(function() {
                actionQueue.dispatch(action, setState);
            });
        };
    } else //TURBOPACK unreachable
    ;
    if (typeof window !== 'undefined') {
        dispatch = nextDispatch;
    }
    // When navigating to a non-prefetched route, then App Router state will be
    // blocked until the server responds. We need to transfer the `_debugInfo`
    // from the underlying Flight response onto the top-level promise that is
    // passed to React (via `use`) so that the latency is accurately represented
    // in the React DevTools.
    var stateWithDebugInfo = (0, _react.useMemo)(function() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if ((0, _isthenable.isThenable)(state)) {
            // useMemo can't be used to cache a Promise since the memoized value is thrown
            // away when we suspend. So we use a WeakMap to cache the Promise with debug info.
            var promiseWithDebugInfo = promisesWithDebugInfo.get(state);
            if (promiseWithDebugInfo === undefined) {
                var debugInfo = [];
                promiseWithDebugInfo = Promise.resolve(state).then(function(asyncState) {
                    if (asyncState.debugInfo !== null) {
                        var _debugInfo;
                        (_debugInfo = debugInfo).push.apply(_debugInfo, _to_consumable_array._(asyncState.debugInfo));
                    }
                    return asyncState;
                });
                promiseWithDebugInfo._debugInfo = debugInfo;
                promisesWithDebugInfo.set(state, promiseWithDebugInfo);
            }
            return promiseWithDebugInfo;
        }
        return state;
    }, [
        state
    ]);
    return (0, _isthenable.isThenable)(stateWithDebugInfo) ? (0, _react.use)(stateWithDebugInfo) : stateWithDebugInfo;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/navigation-testing-lock.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Navigation lock for the Instant Navigation Testing API.
 *
 * Manages the in-memory lock (a promise) that gates dynamic data writes
 * during instant navigation captures, and owns all cookie state
 * transitions (pending → captured-MPA, pending → captured-SPA).
 *
 * External actors (Playwright, devtools) set [0] to start a lock scope
 * and delete the cookie to end one. Next.js writes captured values.
 * The CookieStore handler distinguishes them by value: pending = external,
 * captured = self-write (ignored).
 */ "use strict";
var _async_to_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_async_to_generator.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var _ts_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_ts_generator.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isNavigationLocked: null,
    startListeningForInstantNavigationCookie: null,
    transitionToCapturedSPA: null,
    updateCapturedSPAToTree: null,
    waitForNavigationLockIfActive: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isNavigationLocked: function isNavigationLocked1() {
        return isNavigationLocked;
    },
    startListeningForInstantNavigationCookie: function startListeningForInstantNavigationCookie1() {
        return startListeningForInstantNavigationCookie;
    },
    transitionToCapturedSPA: function transitionToCapturedSPA1() {
        return transitionToCapturedSPA;
    },
    updateCapturedSPAToTree: function updateCapturedSPAToTree1() {
        return updateCapturedSPAToTree;
    },
    waitForNavigationLockIfActive: function waitForNavigationLockIfActive1() {
        return waitForNavigationLockIfActive;
    }
});
var _approuterheaders = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
var _useactionqueue = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/use-action-queue.js [app-client] (ecmascript)");
function parseCookieValue(raw) {
    try {
        var parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length >= 3) {
            var rawState = parsed[2];
            return rawState === null ? 'mpa' : 'spa';
        }
    } catch (unused) {}
    return 'pending';
}
function writeCookieValue(value) {
    if (typeof cookieStore === 'undefined') {
        return;
    }
    // Read the existing cookie to preserve its attributes (domain, path),
    // then write back with the new value. This updates the same cookie
    // entry that the external actor created, regardless of how it was
    // scoped.
    cookieStore.get(_approuterheaders.NEXT_INSTANT_TEST_COOKIE).then(function(existing) {
        if (existing) {
            var _existing_path;
            var options = {
                name: _approuterheaders.NEXT_INSTANT_TEST_COOKIE,
                value: JSON.stringify(value),
                path: (_existing_path = existing.path) !== null && _existing_path !== void 0 ? _existing_path : '/'
            };
            if (existing.domain) {
                options.domain = existing.domain;
            }
            cookieStore.set(options);
        }
    });
}
var lockState = null;
function acquireLock() {
    if (lockState !== null) {
        return;
    }
    var resolve;
    var promise = new Promise(function(r) {
        resolve = r;
    });
    lockState = {
        promise: promise,
        resolve: resolve
    };
}
function releaseLock() {
    if (lockState !== null) {
        lockState.resolve();
        lockState = null;
    }
}
function startListeningForInstantNavigationCookie() {
    if ("TURBOPACK compile-time truthy", 1) {
        // If the server served a static shell, this is an MPA page load
        // while the lock is held. Transition to captured-MPA and acquire.
        if (self.__next_instant_test) {
            if (typeof cookieStore !== 'undefined') {
                // If the cookie was already cleared during the MPA page
                // transition, reload to get the full dynamic page.
                cookieStore.get(_approuterheaders.NEXT_INSTANT_TEST_COOKIE).then(function(cookie) {
                    if (!cookie) {
                        window.location.reload();
                    }
                });
            }
            writeCookieValue([
                1,
                "c".concat(Math.random()),
                null
            ]);
            acquireLock();
        }
        if (typeof cookieStore === 'undefined') {
            return;
        }
        cookieStore.addEventListener('change', function(event) {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = event.changed[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var cookie = _step.value;
                    if (cookie.name === _approuterheaders.NEXT_INSTANT_TEST_COOKIE) {
                        var _cookie_value;
                        var state = parseCookieValue((_cookie_value = cookie.value) !== null && _cookie_value !== void 0 ? _cookie_value : '');
                        if (state !== 'pending') {
                            // Captured value — our own transition. Ignore.
                            return;
                        }
                        // Pending value — external actor starting a new lock scope.
                        if (lockState !== null) {
                            releaseLock();
                        }
                        acquireLock();
                        return;
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
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = event.deleted[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var cookie1 = _step1.value;
                    if (cookie1.name === _approuterheaders.NEXT_INSTANT_TEST_COOKIE) {
                        releaseLock();
                        (0, _useactionqueue.refreshOnInstantNavigationUnlock)();
                        return;
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
        });
    }
}
function transitionToCapturedSPA(fromTree, toTree) {
    if ("TURBOPACK compile-time truthy", 1) {
        writeCookieValue([
            1,
            "c".concat(Math.random()),
            {
                from: fromTree,
                to: toTree
            }
        ]);
    }
}
function updateCapturedSPAToTree(fromTree, toTree) {
    if ("TURBOPACK compile-time truthy", 1) {
        writeCookieValue([
            1,
            "c".concat(Math.random()),
            {
                from: fromTree,
                to: toTree
            }
        ]);
    }
}
function isNavigationLocked() {
    if ("TURBOPACK compile-time truthy", 1) {
        return lockState !== null;
    }
    //TURBOPACK unreachable
    ;
}
function waitForNavigationLockIfActive() {
    return _async_to_generator._(function() {
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    if (!(lockState !== null)) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        lockState.promise
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    return [
                        2
                    ];
            }
        });
    })();
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-globals.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// imports polyfill from `@next/polyfill-module` after build.
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/polyfill-module.js [app-client] (ecmascript)");
// Only set up devtools for the dev server.
if ("TURBOPACK compile-time truthy", 1) {
    __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/app-dev-overlay-setup.js [app-client] (ecmascript)");
}
// Start listening for the instant navigation test cookie. The test framework
// (e.g. Playwright) sets/clears this cookie to control the navigation lock.
// Browser-only.
if (("TURBOPACK compile-time value", true) && typeof window !== 'undefined') {
    var startListeningForInstantNavigationCookie = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/navigation-testing-lock.js [app-client] (ecmascript)").startListeningForInstantNavigationCookie;
    startListeningForInstantNavigationCookie();
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/readonly-url-search-params.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * ReadonlyURLSearchParams implementation shared between client and server.
 * This file is intentionally not marked as 'use client' or 'use server'
 * so it can be imported by both environments.
 */ /** @internal */ var _call_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_call_super.cjs [app-client] (ecmascript)");
var _class_call_check = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_create_class.cjs [app-client] (ecmascript)");
var _inherits = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_inherits.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var _wrap_native_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_wrap_native_super.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReadonlyURLSearchParams", {
    enumerable: true,
    get: function get() {
        return ReadonlyURLSearchParams;
    }
});
var ReadonlyURLSearchParamsError = /*#__PURE__*/ function(Error1) {
    _inherits._(ReadonlyURLSearchParamsError, Error1);
    function ReadonlyURLSearchParamsError() {
        _class_call_check._(this, ReadonlyURLSearchParamsError);
        return _call_super._(this, ReadonlyURLSearchParamsError, [
            'Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams'
        ]);
    }
    return ReadonlyURLSearchParamsError;
}(_wrap_native_super._(Error));
var ReadonlyURLSearchParams = /*#__PURE__*/ function(URLSearchParams1) {
    _inherits._(ReadonlyURLSearchParams, URLSearchParams1);
    function ReadonlyURLSearchParams() {
        _class_call_check._(this, ReadonlyURLSearchParams);
        return _call_super._(this, ReadonlyURLSearchParams, arguments);
    }
    _create_class._(ReadonlyURLSearchParams, [
        {
            /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ key: "append",
            value: function append() {
                throw new ReadonlyURLSearchParamsError();
            }
        },
        {
            /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ key: "delete",
            value: function _delete() {
                throw new ReadonlyURLSearchParamsError();
            }
        },
        {
            /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ key: "set",
            value: function set() {
                throw new ReadonlyURLSearchParamsError();
            }
        },
        {
            /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ key: "sort",
            value: function sort() {
                throw new ReadonlyURLSearchParamsError();
            }
        }
    ]);
    return ReadonlyURLSearchParams;
}(_wrap_native_super._(URLSearchParams));
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/navigation-untracked.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useUntrackedPathname", {
    enumerable: true,
    get: function get() {
        return useUntrackedPathname;
    }
});
var _react = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
/**
 * This checks to see if the current render has any unknown route parameters that
 * would cause the pathname to be dynamic. It's used to trigger a different
 * render path in the error boundary.
 *
 * @returns true if there are any unknown route parameters, false otherwise
 */ function hasFallbackRouteParams() {
    if (typeof window === 'undefined') {
        // AsyncLocalStorage should not be included in the client bundle.
        var workUnitAsyncStorage = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)").workUnitAsyncStorage;
        var workUnitStore = workUnitAsyncStorage.getStore();
        if (!workUnitStore) return false;
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'validation-client':
                var fallbackParams = workUnitStore.fallbackRouteParams;
                return fallbackParams ? fallbackParams.size > 0 : false;
            case 'prerender-legacy':
            case 'request':
            case 'prerender-runtime':
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
            case 'generate-static-params':
                break;
            default:
                workUnitStore;
        }
        return false;
    }
    return false;
}
function useUntrackedPathname() {
    // If there are any unknown route parameters we would typically throw
    // an error, but this internal method allows us to return a null value instead
    // for components that do not propagate the pathname to the static shell (like
    // the error boundary).
    if (hasFallbackRouteParams()) {
        return null;
    }
    // This shouldn't cause any issues related to conditional rendering because
    // the environment will be consistent for the render.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createHrefFromUrl", {
    enumerable: true,
    get: function get() {
        return createHrefFromUrl;
    }
});
function createHrefFromUrl(url) {
    var includeHash = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    return url.pathname + url.search + (includeHash ? url.hash : '');
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/nav-failure-handler.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    handleHardNavError: null,
    useNavFailureHandler: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    handleHardNavError: function handleHardNavError1() {
        return handleHardNavError;
    },
    useNavFailureHandler: function useNavFailureHandler1() {
        return useNavFailureHandler;
    }
});
var _react = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _createhreffromurl = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
function handleHardNavError(error) {
    if (error && typeof window !== 'undefined' && window.next.__pendingUrl && (0, _createhreffromurl.createHrefFromUrl)(new URL(window.location.href)) !== (0, _createhreffromurl.createHrefFromUrl)(window.next.__pendingUrl)) {
        console.error("Error occurred during navigation, falling back to hard navigation", error);
        window.location.href = window.next.__pendingUrl.toString();
        return true;
    }
    return false;
}
function useNavFailureHandler() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/handle-isr-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "handleISRError", {
    enumerable: true,
    get: function get() {
        return handleISRError;
    }
});
var workAsyncStorage = typeof window === 'undefined' ? __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)").workAsyncStorage : undefined;
function handleISRError(param) {
    var error = param.error;
    if (workAsyncStorage) {
        var store = workAsyncStorage.getStore();
        if (store === null || store === void 0 ? void 0 : store.isStaticGeneration) {
            if (error) {
                console.error(error);
            }
            throw error;
        }
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
var _call_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_call_super.cjs [app-client] (ecmascript)");
var _class_call_check = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_create_class.cjs [app-client] (ecmascript)");
var _inherits = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_inherits.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ErrorBoundary: null,
    ErrorBoundaryHandler: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorBoundary: function ErrorBoundary1() {
        return ErrorBoundary;
    },
    ErrorBoundaryHandler: function ErrorBoundaryHandler1() {
        return ErrorBoundaryHandler;
    }
});
var _interop_require_wildcard = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
var _jsxruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _navigationuntracked = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/navigation-untracked.js [app-client] (ecmascript)");
var _isnextroutererror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
var _navfailurehandler = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/nav-failure-handler.js [app-client] (ecmascript)");
var _handleisrerror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/handle-isr-error.js [app-client] (ecmascript)");
var _isbot = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/is-bot.js [app-client] (ecmascript)");
var _approutercontextsharedruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
var isBotUserAgent = typeof window !== 'undefined' && (0, _isbot.isBot)(window.navigator.userAgent);
var ErrorBoundaryHandler = /*#__PURE__*/ function(_react_default_Component) {
    "use strict";
    _inherits._(ErrorBoundaryHandler, _react_default_Component);
    function ErrorBoundaryHandler(props) {
        _class_call_check._(this, ErrorBoundaryHandler);
        var _this;
        _this = _call_super._(this, ErrorBoundaryHandler, [
            props
        ]), _this.reset = function() {
            _this.setState({
                error: null
            });
        }, _this.unstable_retry = function() {
            (0, _react.startTransition)(function() {
                var _this_context;
                (_this_context = _this.context) === null || _this_context === void 0 ? void 0 : _this_context.refresh();
                _this.reset();
            });
        };
        _this.state = {
            error: null,
            previousPathname: _this.props.pathname
        };
        return _this;
    }
    _create_class._(ErrorBoundaryHandler, [
        {
            // Explicit type is needed to avoid the generated `.d.ts` having a wide return type that could be specific to the `@types/react` version.
            key: "render",
            value: function render() {
                //When it's bot request, segment level error boundary will keep rendering the children,
                // the final error will be caught by the root error boundary and determine wether need to apply graceful degrade.
                if (this.state.error && !isBotUserAgent) {
                    (0, _handleisrerror.handleISRError)({
                        error: this.state.error
                    });
                    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                        children: [
                            this.props.errorStyles,
                            this.props.errorScripts,
                            /*#__PURE__*/ (0, _jsxruntime.jsx)(this.props.errorComponent, {
                                error: this.state.error,
                                reset: this.reset,
                                unstable_retry: this.unstable_retry
                            })
                        ]
                    });
                }
                return this.props.children;
            }
        }
    ], [
        {
            key: "getDerivedStateFromError",
            value: function getDerivedStateFromError(error) {
                if ((0, _isnextroutererror.isNextRouterError)(error)) {
                    // Re-throw if an expected internal Next.js router error occurs
                    // this means it should be handled by a different boundary (such as a NotFound boundary in a parent segment)
                    throw error;
                }
                return {
                    error: error
                };
            }
        },
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(props, state) {
                var error = state.error;
                // if we encounter an error while
                // a navigation is pending we shouldn't render
                // the error boundary and instead should fallback
                // to a hard navigation to attempt recovering
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.error) {
                    return {
                        error: null,
                        previousPathname: props.pathname
                    };
                }
                return {
                    error: state.error,
                    previousPathname: props.pathname
                };
            }
        }
    ]);
    return ErrorBoundaryHandler;
}(_react.default.Component);
ErrorBoundaryHandler.contextType = _approutercontextsharedruntime.AppRouterContext;
function ErrorBoundary(param) {
    var errorComponent = param.errorComponent, errorStyles = param.errorStyles, errorScripts = param.errorScripts, children = param.children;
    // When we're rendering the missing params shell, this will return null. This
    // is because we won't be rendering any not found boundaries or error
    // boundaries for the missing params shell. When this runs on the client
    // (where these errors can occur), we will get the correct pathname.
    var pathname = (0, _navigationuntracked.useUntrackedPathname)();
    if (errorComponent) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(ErrorBoundaryHandler, {
            pathname: pathname,
            errorComponent: errorComponent,
            errorStyles: errorStyles,
            errorScripts: errorScripts,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/builtin/error-styles.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    WarningIcon: null,
    errorStyles: null,
    errorThemeCss: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    WarningIcon: function WarningIcon1() {
        return WarningIcon;
    },
    errorStyles: function errorStyles1() {
        return errorStyles;
    },
    errorThemeCss: function errorThemeCss1() {
        return errorThemeCss;
    }
});
var _interop_require_default = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
var _jsxruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var errorStyles = {
    container: {
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        marginTop: '-32px',
        maxWidth: '325px',
        padding: '32px 28px',
        textAlign: 'left'
    },
    icon: {
        marginBottom: '24px'
    },
    title: {
        fontSize: '24px',
        fontWeight: 500,
        letterSpacing: '-0.02em',
        lineHeight: '32px',
        margin: '0 0 12px 0',
        color: 'var(--next-error-title)'
    },
    message: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '21px',
        margin: '0 0 20px 0',
        color: 'var(--next-error-message)'
    },
    form: {
        margin: 0
    },
    buttonGroup: {
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
    },
    button: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '32px',
        padding: '0 12px',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '20px',
        borderRadius: '6px',
        cursor: 'pointer',
        color: 'var(--next-error-btn-text)',
        background: 'var(--next-error-btn-bg)',
        border: 'var(--next-error-btn-border)'
    },
    buttonSecondary: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '32px',
        padding: '0 12px',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '20px',
        borderRadius: '6px',
        cursor: 'pointer',
        color: 'var(--next-error-btn-secondary-text)',
        background: 'var(--next-error-btn-secondary-bg)',
        border: 'var(--next-error-btn-secondary-border)'
    },
    digestFooter: {
        position: 'fixed',
        bottom: '32px',
        left: '0',
        right: '0',
        textAlign: 'center',
        fontFamily: 'ui-monospace,SFMono-Regular,"SF Mono",Menlo,Consolas,monospace',
        fontSize: '12px',
        lineHeight: '18px',
        fontWeight: 400,
        margin: '0',
        color: 'var(--next-error-digest)'
    }
};
var errorThemeCss = "\n:root {\n  --next-error-bg: #fff;\n  --next-error-text: #171717;\n  --next-error-title: #171717;\n  --next-error-message: #171717;\n  --next-error-digest: #666666;\n  --next-error-btn-text: #fff;\n  --next-error-btn-bg: #171717;\n  --next-error-btn-border: none;\n  --next-error-btn-secondary-text: #171717;\n  --next-error-btn-secondary-bg: transparent;\n  --next-error-btn-secondary-border: 1px solid rgba(0,0,0,0.08);\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --next-error-bg: #0a0a0a;\n    --next-error-text: #ededed;\n    --next-error-title: #ededed;\n    --next-error-message: #ededed;\n    --next-error-digest: #a0a0a0;\n    --next-error-btn-text: #0a0a0a;\n    --next-error-btn-bg: #ededed;\n    --next-error-btn-border: none;\n    --next-error-btn-secondary-text: #ededed;\n    --next-error-btn-secondary-bg: transparent;\n    --next-error-btn-secondary-border: 1px solid rgba(255,255,255,0.14);\n  }\n}\nbody { margin: 0; color: var(--next-error-text); background: var(--next-error-bg); }\n".replace(/\n\s*/g, '');
function WarningIcon() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        width: "32",
        height: "32",
        viewBox: "-0.2 -1.5 32 32",
        fill: "none",
        style: errorStyles.icon,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            d: "M16.9328 0C18.0839 0.000116771 19.1334 0.658832 19.634 1.69531L31.4299 26.1309C32.0708 27.4588 31.1036 28.9999 29.6291 29H2.00215C0.527541 29 -0.439628 27.4588 0.201371 26.1309L11.9973 1.69531C12.4979 0.658823 13.5474 7.75066e-05 14.6984 0H16.9328ZM3.59493 26H28.0363L16.9328 3H14.6984L3.59493 26ZM15.8156 19C16.9202 19.0001 17.8156 19.8955 17.8156 21C17.8156 22.1045 16.9202 22.9999 15.8156 23C14.7111 23 13.8156 22.1046 13.8156 21C13.8156 19.8954 14.7111 19 15.8156 19ZM17.3156 16.5H14.3156V8.5H17.3156V16.5Z",
            fill: "var(--next-error-title)"
        })
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/builtin/global-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, // supplied custom global error signatures.
"default", {
    enumerable: true,
    get: function get() {
        return _default;
    }
});
var _interop_require_default = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
var _jsxruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _handleisrerror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/handle-isr-error.js [app-client] (ecmascript)");
var _errorstyles = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/builtin/error-styles.js [app-client] (ecmascript)");
function DefaultGlobalError(param) {
    var error = param.error;
    var digest = error === null || error === void 0 ? void 0 : error.digest;
    var isServerError = !!digest;
    var message = isServerError ? 'A server error occurred. Reload to try again.' : 'Reload to try again, or go back.';
    (0, _handleisrerror.handleISRError)({
        error: error
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("html", {
        id: "__next_error__",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("head", {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: _errorstyles.errorThemeCss
                    }
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("body", {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        style: _errorstyles.errorStyles.container,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                            style: _errorstyles.errorStyles.card,
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorstyles.WarningIcon, {}),
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("h1", {
                                    style: _errorstyles.errorStyles.title,
                                    children: "This page couldn’t load"
                                }),
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                    style: _errorstyles.errorStyles.message,
                                    children: message
                                }),
                                /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                                    style: _errorstyles.errorStyles.buttonGroup,
                                    children: [
                                        /*#__PURE__*/ (0, _jsxruntime.jsx)("form", {
                                            style: _errorstyles.errorStyles.form,
                                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                                                type: "submit",
                                                style: _errorstyles.errorStyles.button,
                                                children: "Reload"
                                            })
                                        }),
                                        !isServerError && /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                                            type: "button",
                                            style: _errorstyles.errorStyles.buttonSecondary,
                                            onClick: function onClick() {
                                                if (window.history.length > 1) {
                                                    window.history.back();
                                                } else {
                                                    window.location.href = '/';
                                                }
                                            },
                                            children: "Back"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    digest && /*#__PURE__*/ (0, _jsxruntime.jsxs)("p", {
                        style: _errorstyles.errorStyles.digestFooter,
                        children: [
                            "ERROR ",
                            digest
                        ]
                    })
                ]
            })
        ]
    });
}
var _default = DefaultGlobalError;
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/runtime-error-handler.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RuntimeErrorHandler", {
    enumerable: true,
    get: function get() {
        return RuntimeErrorHandler;
    }
});
var RuntimeErrorHandler = {
    hadRuntimeError: false
};
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/not-found.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "notFound", {
    enumerable: true,
    get: function get() {
        return notFound;
    }
});
var _httpaccessfallback = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
/**
 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
 * within a route segment as well as inject a tag.
 *
 * `notFound()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
 *
 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
 */ var DIGEST = "".concat(_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE, ";404");
function notFound() {
    var error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E1041",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/react-client-callbacks/error-boundary-callbacks.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// This file is only used in app router due to the specific error state handling.
"use strict";
var _instanceof = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_instanceof.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    onCaughtError: null,
    onUncaughtError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    onCaughtError: function onCaughtError1() {
        return onCaughtError;
    },
    onUncaughtError: function onUncaughtError1() {
        return onUncaughtError;
    }
});
var _interop_require_default = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
var _isnextroutererror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
var _bailouttocsr = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
var _reportglobalerror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/react-client-callbacks/report-global-error.js [app-client] (ecmascript)");
var _errorboundary = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
var _globalerror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/builtin/global-error.js [app-client] (ecmascript)"));
var devToolErrorMod = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/errors/index.js [app-client] (ecmascript)") : "TURBOPACK unreachable";
function onCaughtError(thrownValue, errorInfo) {
    var _errorInfo_errorBoundary;
    var errorBoundaryComponent = (_errorInfo_errorBoundary = errorInfo.errorBoundary) === null || _errorInfo_errorBoundary === void 0 ? void 0 : _errorInfo_errorBoundary.constructor;
    var isImplicitErrorBoundary;
    if ("TURBOPACK compile-time truthy", 1) {
        var AppDevOverlayErrorBoundary = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/app-dev-overlay-error-boundary.js [app-client] (ecmascript)").AppDevOverlayErrorBoundary;
        isImplicitErrorBoundary = errorBoundaryComponent === AppDevOverlayErrorBoundary;
    }
    isImplicitErrorBoundary = isImplicitErrorBoundary || errorBoundaryComponent === _errorboundary.ErrorBoundaryHandler && errorInfo.errorBoundary.props.errorComponent === _globalerror.default;
    // Skip the segment explorer triggered error
    if ("TURBOPACK compile-time truthy", 1) {
        var SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)").SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE;
        if (_instanceof._(thrownValue, Error) && thrownValue.message === SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE) {
            return;
        }
    }
    if (isImplicitErrorBoundary) {
        // We don't consider errors caught unless they're caught by an explicit error
        // boundary. The built-in ones are considered implicit.
        // This mimics how the same app would behave without Next.js.
        return onUncaughtError(thrownValue);
    }
    // Skip certain custom errors which are not expected to be reported on client
    if ((0, _bailouttocsr.isBailoutToCSRError)(thrownValue) || (0, _isnextroutererror.isNextRouterError)(thrownValue)) return;
    if ("TURBOPACK compile-time truthy", 1) {
        var _ref;
        var _errorInfo_componentStack;
        var errorBoundaryName = (errorBoundaryComponent === null || errorBoundaryComponent === void 0 ? void 0 : errorBoundaryComponent.displayName) || (errorBoundaryComponent === null || errorBoundaryComponent === void 0 ? void 0 : errorBoundaryComponent.name) || 'Unknown';
        var componentThatErroredFrame = errorInfo === null || errorInfo === void 0 ? void 0 : (_errorInfo_componentStack = errorInfo.componentStack) === null || _errorInfo_componentStack === void 0 ? void 0 : _errorInfo_componentStack.split('\n')[1];
        // Match chrome or safari stack trace
        var matches = (_ref = // example 1: at Page (http://localhost:3000/_next/static/chunks/pages/index.js?ts=1631600000000:2:1)
        // example 2: Page@http://localhost:3000/_next/static/chunks/pages/index.js?ts=1631600000000:2:1
        componentThatErroredFrame === null || componentThatErroredFrame === void 0 ? void 0 : componentThatErroredFrame.match(/\s+at (\w+)\s+|(\w+)@/)) !== null && _ref !== void 0 ? _ref : [];
        var componentThatErroredName = matches[1] || matches[2] || 'Unknown';
        // Create error location with errored component and error boundary, to match the behavior of default React onCaughtError handler.
        var errorBoundaryMessage = "It was handled by the <".concat(errorBoundaryName, "> error boundary.");
        var componentErrorMessage = componentThatErroredName ? "The above error occurred in the <".concat(componentThatErroredName, "> component.") : "The above error occurred in one of your components.";
        var errorLocation = "".concat(componentErrorMessage, " ").concat(errorBoundaryMessage);
        var error = devToolErrorMod.decorateDevError(thrownValue);
        // Log and report the error with location but without modifying the error stack
        devToolErrorMod.originConsoleError('%o\n\n%s', thrownValue, errorLocation);
        devToolErrorMod.handleClientError(error);
    } else //TURBOPACK unreachable
    ;
}
function onUncaughtError(thrownValue) {
    // Skip certain custom errors which are not expected to be reported on client
    if ((0, _bailouttocsr.isBailoutToCSRError)(thrownValue) || (0, _isnextroutererror.isNextRouterError)(thrownValue)) return;
    if ("TURBOPACK compile-time truthy", 1) {
        var error = devToolErrorMod.decorateDevError(thrownValue);
        // TODO: Add an adendum to the overlay telling people about custom error boundaries.
        (0, _reportglobalerror.reportGlobalError)(error);
    } else //TURBOPACK unreachable
    ;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _async_to_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_async_to_generator.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var _ts_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_ts_generator.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "callServer", {
    enumerable: true,
    get: function get() {
        return callServer;
    }
});
var _react = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _routerreducertypes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
var _useactionqueue = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/use-action-queue.js [app-client] (ecmascript)");
function callServer(actionId, actionArgs) {
    return _async_to_generator._(function() {
        return _ts_generator._(this, function(_state) {
            return [
                2,
                new Promise(function(resolve, reject) {
                    (0, _react.startTransition)(function() {
                        (0, _useactionqueue.dispatchAppRouterAction)({
                            type: _routerreducertypes.ACTION_SERVER_ACTION,
                            actionId: actionId,
                            actionArgs: actionArgs,
                            resolve: resolve,
                            reject: reject
                        });
                    });
                })
            ];
        });
    })();
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findSourceMapURL", {
    enumerable: true,
    get: function get() {
        return findSourceMapURL;
    }
});
var basePath = ("TURBOPACK compile-time value", "") || '';
var pathname = "".concat(basePath, "/__nextjs_source-map");
var findSourceMapURL = ("TURBOPACK compile-time truthy", 1) ? function findSourceMapURL(filename) {
    if (filename === '') {
        return null;
    }
    if (filename.startsWith(document.location.origin) && filename.includes('/_next/static')) {
        // This is a request for a client chunk. This can only happen when
        // using Turbopack. In this case, since we control how those source
        // maps are generated, we can safely assume that the sourceMappingURL
        // is relative to the filename, with an added `.map` extension. The
        // browser can just request this file, and it gets served through the
        // normal dev server, without the need to route this through
        // the `/__nextjs_source-map` dev middleware.
        return "".concat(filename, ".map");
    }
    var url = new URL(pathname, document.location.origin);
    url.searchParams.set('filename', filename);
    return url.href;
} : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    doesStaticSegmentAppearInURL: null,
    getCacheKeyForDynamicParam: null,
    getParamValueFromCacheKey: null,
    getRenderedPathname: null,
    getRenderedSearch: null,
    parseDynamicParamFromURLPart: null,
    urlSearchParamsToParsedUrlQuery: null,
    urlToUrlWithoutFlightMarker: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    doesStaticSegmentAppearInURL: function doesStaticSegmentAppearInURL1() {
        return doesStaticSegmentAppearInURL;
    },
    getCacheKeyForDynamicParam: function getCacheKeyForDynamicParam1() {
        return getCacheKeyForDynamicParam;
    },
    getParamValueFromCacheKey: function getParamValueFromCacheKey1() {
        return getParamValueFromCacheKey;
    },
    getRenderedPathname: function getRenderedPathname1() {
        return getRenderedPathname;
    },
    getRenderedSearch: function getRenderedSearch1() {
        return getRenderedSearch;
    },
    parseDynamicParamFromURLPart: function parseDynamicParamFromURLPart1() {
        return parseDynamicParamFromURLPart;
    },
    urlSearchParamsToParsedUrlQuery: function urlSearchParamsToParsedUrlQuery1() {
        return urlSearchParamsToParsedUrlQuery;
    },
    urlToUrlWithoutFlightMarker: function urlToUrlWithoutFlightMarker1() {
        return urlToUrlWithoutFlightMarker;
    }
});
var _segment = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
var _segmentvalueencoding = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/segment-cache/segment-value-encoding.js [app-client] (ecmascript)");
var _approuterheaders = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
function getRenderedSearch(response) {
    // If the server performed a rewrite, the search params used to render the
    // page will be different from the params in the request URL. In this case,
    // the response will include a header that gives the rewritten search query.
    var rewrittenQuery = response.headers.get(_approuterheaders.NEXT_REWRITTEN_QUERY_HEADER);
    if (rewrittenQuery !== null) {
        return rewrittenQuery === '' ? '' : '?' + rewrittenQuery;
    }
    // If the header is not present, there was no rewrite, so we use the search
    // query of the response URL.
    return urlToUrlWithoutFlightMarker(new URL(response.url)).search;
}
function getRenderedPathname(response) {
    // If the server performed a rewrite, the pathname used to render the
    // page will be different from the pathname in the request URL. In this case,
    // the response will include a header that gives the rewritten pathname.
    var rewrittenPath = response.headers.get(_approuterheaders.NEXT_REWRITTEN_PATH_HEADER);
    return rewrittenPath !== null && rewrittenPath !== void 0 ? rewrittenPath : urlToUrlWithoutFlightMarker(new URL(response.url)).pathname;
}
// Pathname parts come from `URL.pathname.split('/')`, so they are already
// in the encoded form the URL parser produces. The server-side equivalent
// (`get-dynamic-param.ts`) starts from a decoded param value and applies
// `encodeURIComponent` once. The two encodings are not the same — for
// example, the URL parser leaves `,` and `:` untouched while
// `encodeURIComponent` percent-encodes them. To produce the same canonical
// form on the client (and avoid double-encoding `%xx` sequences such as
// `%2F` → `%252F`), we decode the URL part first and re-encode it.
function canonicalizeURLPart(part) {
    try {
        return encodeURIComponent(decodeURIComponent(part));
    } catch (unused) {
        // `decodeURIComponent` throws on malformed sequences. Fall back to the
        // already-encoded form rather than failing the navigation.
        return part;
    }
}
function parseDynamicParamFromURLPart(paramType, pathnameParts, partIndex) {
    // This needs to match the behavior in get-dynamic-param.ts.
    switch(paramType){
        // Catchalls
        case 'c':
            {
                // Catchalls receive all the remaining URL parts. If there are no
                // remaining pathname parts, return an empty array.
                return partIndex < pathnameParts.length ? pathnameParts.slice(partIndex).map(function(s) {
                    return canonicalizeURLPart(s);
                }) : [];
            }
        // Catchall intercepted
        case 'ci(..)(..)':
        case 'ci(.)':
        case 'ci(..)':
        case 'ci(...)':
            {
                var prefix = paramType.length - 2;
                return partIndex < pathnameParts.length ? pathnameParts.slice(partIndex).map(function(s, i) {
                    if (i === 0) {
                        return canonicalizeURLPart(s.slice(prefix));
                    }
                    return canonicalizeURLPart(s);
                }) : [];
            }
        // Optional catchalls
        case 'oc':
            {
                // Optional catchalls receive all the remaining URL parts, unless this is
                // the end of the pathname, in which case they return null.
                return partIndex < pathnameParts.length ? pathnameParts.slice(partIndex).map(function(s) {
                    return canonicalizeURLPart(s);
                }) : null;
            }
        // Dynamic
        case 'd':
            {
                if (partIndex >= pathnameParts.length) {
                    // The route tree expected there to be more parts in the URL than there
                    // actually are. This could happen if the x-nextjs-rewritten-path header
                    // is incorrectly set, or potentially due to bug in Next.js. TODO:
                    // Should this be a hard error? During a prefetch, we can just abort.
                    // During a client navigation, we could trigger a hard refresh. But if
                    // it happens during initial render, we don't really have any
                    // recovery options.
                    return '';
                }
                return canonicalizeURLPart(pathnameParts[partIndex]);
            }
        // Dynamic intercepted
        case 'di(..)(..)':
        case 'di(.)':
        case 'di(..)':
        case 'di(...)':
            {
                var prefix1 = paramType.length - 2;
                if (partIndex >= pathnameParts.length) {
                    // The route tree expected there to be more parts in the URL than there
                    // actually are. This could happen if the x-nextjs-rewritten-path header
                    // is incorrectly set, or potentially due to bug in Next.js. TODO:
                    // Should this be a hard error? During a prefetch, we can just abort.
                    // During a client navigation, we could trigger a hard refresh. But if
                    // it happens during initial render, we don't really have any
                    // recovery options.
                    return '';
                }
                return canonicalizeURLPart(pathnameParts[partIndex].slice(prefix1));
            }
        default:
            paramType;
            return '';
    }
}
function doesStaticSegmentAppearInURL(segment) {
    // This is not a parameterized segment; however, we need to determine
    // whether or not this segment appears in the URL. For example, this route
    // groups do not appear in the URL, so they should be skipped. Any other
    // special cases must be handled here.
    // TODO: Consider encoding this directly into the router tree instead of
    // inferring it on the client based on the segment type. Something like
    // a `doesAppearInURL` flag in FlightRouterState.
    if (segment === _segmentvalueencoding.ROOT_SEGMENT_REQUEST_KEY || // For some reason, the loader tree sometimes includes extra __PAGE__
    // "layouts" when part of a parallel route. But it's not a leaf node.
    // Otherwise, we wouldn't need this special case because pages are
    // always leaf nodes.
    // TODO: Investigate why the loader produces these fake page segments.
    segment.startsWith(_segment.PAGE_SEGMENT_KEY) || // Route groups.
    segment[0] === '(' && segment.endsWith(')') || segment === _segment.DEFAULT_SEGMENT_KEY || segment === '/_not-found') {
        return false;
    } else {
        // All other segment types appear in the URL
        return true;
    }
}
function getCacheKeyForDynamicParam(paramValue, renderedSearch) {
    // This needs to match the logic in get-dynamic-param.ts, until we're able to
    // unify the various implementations so that these are always computed on
    // the client.
    if (typeof paramValue === 'string') {
        // TODO: Refactor or remove this helper function to accept a string rather
        // than the whole segment type. Also we can probably just append the
        // search string instead of turning it into JSON.
        var pageSegmentWithSearchParams = (0, _segment.addSearchParamsIfPageSegment)(paramValue, Object.fromEntries(new URLSearchParams(renderedSearch)));
        return pageSegmentWithSearchParams;
    } else if (paramValue === null) {
        return '';
    } else {
        return paramValue.join('/');
    }
}
function urlToUrlWithoutFlightMarker(url) {
    var urlWithoutFlightParameters = new URL(url);
    urlWithoutFlightParameters.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    {
        var pathname;
        var length;
    /*TURBOPACK member replacement*/ }
    return urlWithoutFlightParameters;
}
function getParamValueFromCacheKey(paramCacheKey, paramType) {
    // Turn the cache key string sent by the server (as part of FlightRouterState)
    // into a value that can be passed to `useParams` and client components.
    var isCatchAll = paramType === 'c' || paramType === 'oc';
    if (isCatchAll) {
        // Catch-all param keys are a concatenation of the path segments.
        // See equivalent logic in `getSelectedParams`.
        // TODO: We should just pass the array directly, rather than concatenate
        // it to a string and then split it back to an array. It needs to be an
        // array in some places, like when passing a key React, but we can convert
        // it at runtime in those places.
        return paramCacheKey.split('/');
    }
    return paramCacheKey;
}
function urlSearchParamsToParsedUrlQuery(searchParams) {
    // Converts a URLSearchParams object to the same type used by the server when
    // creating search params props, i.e. the type returned by Node's
    // "querystring" module.
    var result = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = searchParams.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array._(_step.value, 2), key = _step_value[0], value = _step_value[1];
            if (result[key] === undefined) {
                result[key] = value;
            } else if (Array.isArray(result[key])) {
                result[key].push(value);
            } else {
                result[key] = [
                    result[key],
                    value
                ];
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
    return result;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createInitialRSCPayloadFromFallbackPrerender: null,
    getFlightDataPartsFromPath: null,
    getNextFlightSegmentPath: null,
    normalizeFlightData: null,
    prepareFlightRouterStateForRequest: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createInitialRSCPayloadFromFallbackPrerender: function createInitialRSCPayloadFromFallbackPrerender1() {
        return createInitialRSCPayloadFromFallbackPrerender;
    },
    getFlightDataPartsFromPath: function getFlightDataPartsFromPath1() {
        return getFlightDataPartsFromPath;
    },
    getNextFlightSegmentPath: function getNextFlightSegmentPath1() {
        return getNextFlightSegmentPath;
    },
    normalizeFlightData: function normalizeFlightData1() {
        return normalizeFlightData;
    },
    prepareFlightRouterStateForRequest: function prepareFlightRouterStateForRequest1() {
        return prepareFlightRouterStateForRequest;
    }
});
var _segment = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
var _routeparams = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
var _createhreffromurl = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
function getFlightDataPartsFromPath(flightDataPath) {
    var _segmentPath_;
    // Pick the last 4 items from the `FlightDataPath` to get the [tree, seedData, viewport, isHeadPartial].
    var flightDataPathLength = 4;
    // tree, seedData, and head are *always* the last three items in the `FlightDataPath`.
    var _flightDataPath_slice = _sliced_to_array._(flightDataPath.slice(-flightDataPathLength), 4), tree = _flightDataPath_slice[0], seedData = _flightDataPath_slice[1], head = _flightDataPath_slice[2], isHeadPartial = _flightDataPath_slice[3];
    // The `FlightSegmentPath` is everything except the last three items. For a root render, it won't be present.
    var segmentPath = flightDataPath.slice(0, -flightDataPathLength);
    return {
        // TODO: Unify these two segment path helpers. We are inconsistently pushing an empty segment ("")
        // to the start of the segment path in some places which makes it hard to use solely the segment path.
        // Look for "// TODO-APP: remove ''" in the codebase.
        pathToSegment: segmentPath.slice(0, -1),
        segmentPath: segmentPath,
        // if the `FlightDataPath` corresponds with the root, there'll be no segment path,
        // in which case we default to ''.
        segment: (_segmentPath_ = segmentPath[segmentPath.length - 1]) !== null && _segmentPath_ !== void 0 ? _segmentPath_ : '',
        tree: tree,
        seedData: seedData,
        head: head,
        isHeadPartial: isHeadPartial,
        isRootRender: flightDataPath.length === flightDataPathLength
    };
}
function createInitialRSCPayloadFromFallbackPrerender(response, fallbackInitialRSCPayload) {
    // This is a static fallback page. In order to hydrate the page, we need to
    // parse the client params from the URL, but to account for the possibility
    // that the page was rewritten, we need to check the response headers
    // for x-nextjs-rewritten-path or x-nextjs-rewritten-query headers. Since
    // we can't access the headers of the initial document response, the client
    // performs a fetch request to the current location. Since it's possible that
    // the fetch request will be dynamically rewritten to a different path than
    // the initial document, this fetch request delivers _all_ the hydration data
    // for the page; it was not inlined into the document, like it normally
    // would be.
    //
    // TODO: Consider treating the case where fetch is rewritten to a different
    // path from the document as a special deopt case. We should optimistically
    // assume this won't happen, inline the data into the document, and perform
    // a minimal request (like a HEAD or range request) to verify that the
    // response matches. Tricky to get right because we need to account for
    // all the different deployment environments we support, like output:
    // "export" mode, where we currently don't assume that custom response
    // headers are present.
    // Patch the Flight data sent by the server with the correct params parsed
    // from the URL + response object.
    var renderedPathname = (0, _routeparams.getRenderedPathname)(response);
    var renderedSearch = (0, _routeparams.getRenderedSearch)(response);
    var canonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(new URL(location.href));
    var originalFlightDataPath = fallbackInitialRSCPayload.f[0];
    var originalFlightRouterState = originalFlightDataPath[0];
    var payload = {
        c: canonicalUrl.split('/'),
        q: renderedSearch,
        i: fallbackInitialRSCPayload.i,
        f: [
            [
                fillInFallbackFlightRouterState(originalFlightRouterState, renderedPathname, renderedSearch),
                originalFlightDataPath[1],
                originalFlightDataPath[2],
                originalFlightDataPath[2]
            ]
        ],
        m: fallbackInitialRSCPayload.m,
        G: fallbackInitialRSCPayload.G,
        S: fallbackInitialRSCPayload.S,
        h: fallbackInitialRSCPayload.h
    };
    if (fallbackInitialRSCPayload.b) {
        payload.b = fallbackInitialRSCPayload.b;
    }
    return payload;
}
function fillInFallbackFlightRouterState(flightRouterState, renderedPathname, renderedSearch) {
    var pathnameParts = renderedPathname.split('/').filter(function(p) {
        return p !== '';
    });
    var index = 0;
    return fillInFallbackFlightRouterStateImpl(flightRouterState, renderedSearch, pathnameParts, index);
}
function fillInFallbackFlightRouterStateImpl(flightRouterState, renderedSearch, pathnameParts, pathnamePartsIndex) {
    var originalSegment = flightRouterState[0];
    var newSegment;
    var doesAppearInURL;
    if (typeof originalSegment === 'string') {
        newSegment = originalSegment;
        doesAppearInURL = (0, _routeparams.doesStaticSegmentAppearInURL)(originalSegment);
    } else {
        var paramName = originalSegment[0];
        var paramType = originalSegment[2];
        var staticSiblings = originalSegment[3];
        var paramValue = (0, _routeparams.parseDynamicParamFromURLPart)(paramType, pathnameParts, pathnamePartsIndex);
        var cacheKey = (0, _routeparams.getCacheKeyForDynamicParam)(paramValue, renderedSearch);
        newSegment = [
            paramName,
            cacheKey,
            paramType,
            staticSiblings
        ];
        doesAppearInURL = true;
    }
    // Only increment the index if the segment appears in the URL. If it's a
    // "virtual" segment, like a route group, it remains the same.
    var childPathnamePartsIndex = doesAppearInURL ? pathnamePartsIndex + 1 : pathnamePartsIndex;
    var children = flightRouterState[1];
    var newChildren = {};
    for(var key in children){
        var childFlightRouterState = children[key];
        newChildren[key] = fillInFallbackFlightRouterStateImpl(childFlightRouterState, renderedSearch, pathnameParts, childPathnamePartsIndex);
    }
    var newState = [
        newSegment,
        newChildren,
        null,
        flightRouterState[3],
        flightRouterState[4]
    ];
    return newState;
}
function getNextFlightSegmentPath(flightSegmentPath) {
    // Since `FlightSegmentPath` is a repeated tuple of `Segment` and `ParallelRouteKey`, we slice off two items
    // to get the next segment path.
    return flightSegmentPath.slice(2);
}
function normalizeFlightData(flightData) {
    // FlightData can be a string when the server didn't respond with a proper flight response,
    // or when a redirect happens, to signal to the client that it needs to perform an MPA navigation.
    if (typeof flightData === 'string') {
        return flightData;
    }
    return flightData.map(function(flightDataPath) {
        return getFlightDataPartsFromPath(flightDataPath);
    });
}
function prepareFlightRouterStateForRequest(flightRouterState, isHmrRefresh) {
    // HMR requests need the complete, unmodified state for proper functionality
    if (isHmrRefresh) {
        return encodeURIComponent(JSON.stringify(flightRouterState));
    }
    return encodeURIComponent(JSON.stringify(stripClientOnlyDataFromFlightRouterState(flightRouterState)));
}
/**
 * Recursively strips client-only data from FlightRouterState while preserving
 * server-needed information for proper rendering decisions.
 */ function stripClientOnlyDataFromFlightRouterState(flightRouterState) {
    var _flightRouterState = _sliced_to_array._(flightRouterState, 5), segment = _flightRouterState[0], parallelRoutes = _flightRouterState[1], _refreshState = _flightRouterState[2], refreshMarker = _flightRouterState[3], prefetchHints = _flightRouterState[4];
    // Strip client-only data from the segment
    var cleanedSegment = stripClientOnlyDataFromSegment(segment);
    // Recursively process parallel routes
    var cleanedParallelRoutes = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(parallelRoutes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array._(_step.value, 2), key = _step_value[0], childState = _step_value[1];
            cleanedParallelRoutes[key] = stripClientOnlyDataFromFlightRouterState(childState);
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
    var result = [
        cleanedSegment,
        cleanedParallelRoutes
    ];
    if (refreshMarker) {
        result[2] = null // null slightly more compact than undefined
        ;
        result[3] = refreshMarker;
    }
    // Append optional fields if present
    if (prefetchHints !== undefined) {
        result[4] = prefetchHints;
    }
    // Everything else is used only by the client and is not needed for requests.
    return result;
}
/**
 * Strips client-only data from segments:
 * - Search parameters from __PAGE__ segments
 * - staticSiblings from dynamic segment tuples (only needed for client-side
 *   prefetch reuse decisions)
 */ function stripClientOnlyDataFromSegment(segment) {
    if (typeof segment === 'string') {
        // Strip search params from __PAGE__ segments
        if (segment.startsWith(_segment.PAGE_SEGMENT_KEY + '?')) {
            return _segment.PAGE_SEGMENT_KEY;
        }
        return segment;
    }
    // Dynamic segment tuple: [paramName, paramCacheKey, paramType, staticSiblings]
    // Strip staticSiblings (4th element) since server doesn't need it
    var _segment1 = _sliced_to_array._(segment, 3), paramName = _segment1[0], paramCacheKey = _segment1[1], paramType = _segment1[2];
    return [
        paramName,
        paramCacheKey,
        paramType,
        null
    ];
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/set-cache-busting-search-param.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _async_to_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_async_to_generator.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var _ts_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_ts_generator.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    setCacheBustingSearchParam: null,
    setCacheBustingSearchParamWithHash: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    setCacheBustingSearchParam: function setCacheBustingSearchParam1() {
        return setCacheBustingSearchParam;
    },
    setCacheBustingSearchParamWithHash: function setCacheBustingSearchParamWithHash1() {
        return setCacheBustingSearchParamWithHash;
    }
});
var _cachebustingsearchparam = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/cache-busting-search-param.js [app-client] (ecmascript)");
var _approuterheaders = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
function computeClientCacheBustingSearchParam(headers) {
    return _async_to_generator._(function() {
        var _globalThis_crypto_subtle, _globalThis_crypto;
        return _ts_generator._(this, function(_state) {
            if (typeof ((_globalThis_crypto = globalThis.crypto) === null || _globalThis_crypto === void 0 ? void 0 : (_globalThis_crypto_subtle = _globalThis_crypto.subtle) === null || _globalThis_crypto_subtle === void 0 ? void 0 : _globalThis_crypto_subtle.digest) === 'function') {
                return [
                    2,
                    (0, _cachebustingsearchparam.computeCacheBustingSearchParam)(headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER], headers[_approuterheaders.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER], headers[_approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER], headers[_approuterheaders.NEXT_URL])
                ];
            }
            return [
                2,
                (0, _cachebustingsearchparam.computeLegacyCacheBustingSearchParam)(headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER], headers[_approuterheaders.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER], headers[_approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER], headers[_approuterheaders.NEXT_URL])
            ];
        });
    })();
}
var setCacheBustingSearchParam = function setCacheBustingSearchParam(url, headers) {
    return _async_to_generator._(function() {
        var uniqueCacheKey;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        computeClientCacheBustingSearchParam(headers)
                    ];
                case 1:
                    uniqueCacheKey = _state.sent();
                    setCacheBustingSearchParamWithHash(url, uniqueCacheKey);
                    return [
                        2
                    ];
            }
        });
    })();
};
var setCacheBustingSearchParamWithHash = function setCacheBustingSearchParamWithHash(url, hash) {
    /**
   * Note that we intentionally do not use `url.searchParams.set` here:
   *
   * const url = new URL('https://example.com/search?q=custom%20spacing');
   * url.searchParams.set('_rsc', 'abc123');
   * console.log(url.toString()); // Outputs: https://example.com/search?q=custom+spacing&_rsc=abc123
   *                                                                             ^ <--- this is causing confusion
   * This is in fact intended based on https://url.spec.whatwg.org/#interface-urlsearchparams, but
   * we want to preserve the %20 as %20 if that's what the user passed in, hence the custom
   * logic below.
   */ var existingSearch = url.search;
    var rawQuery = existingSearch.startsWith('?') ? existingSearch.slice(1) : existingSearch;
    // Always remove any existing cache busting param and add a fresh one to ensure
    // we have the correct value based on current request headers
    var pairs = rawQuery.split('&').filter(function(pair) {
        return pair && !pair.startsWith("".concat(_approuterheaders.NEXT_RSC_UNION_QUERY, "="));
    });
    if (hash.length > 0) {
        pairs.push("".concat(_approuterheaders.NEXT_RSC_UNION_QUERY, "=").concat(hash));
    } else {
        pairs.push("".concat(_approuterheaders.NEXT_RSC_UNION_QUERY));
    }
    url.search = pairs.length ? "?".concat(pairs.join('&')) : '';
};
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/navigation-build-id.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This gets assigned as a side-effect during app initialization. Because it
// represents the build used to create the JS bundle, it should never change
// after being set, so we store it in a global variable.
//
// When performing RSC requests, if the incoming data has a different build ID,
// we perform an MPA navigation/refresh to load the updated build and ensure
// that the client and server in sync.
//
// Starts as an empty string. In practice, because setNavigationBuildId is called during initialization
// before hydration starts, this will always get reassigned to the actual ID before it's ever needed
// by a navigation. If for some reasons it didn't, due to a bug or race condition, then on
// navigation the build comparision would fail and trigger an MPA navigation.
//
// Note that this can also be initialized with the deployment id instead (if available). So it's not
// the same as "the build id", but we are running out of alternative names for "build id or
// deployment id".
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getNavigationBuildId: null,
    setNavigationBuildId: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getNavigationBuildId: function getNavigationBuildId1() {
        return getNavigationBuildId;
    },
    setNavigationBuildId: function setNavigationBuildId1() {
        return setNavigationBuildId;
    }
});
var globalBuildId = '';
function setNavigationBuildId(buildId) {
    globalBuildId = buildId;
}
function getNavigationBuildId() {
    return globalBuildId;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "matchSegment", {
    enumerable: true,
    get: function get() {
        return matchSegment;
    }
});
var matchSegment = function matchSegment(existingSegment, segment) {
    // segment is either Array or string
    if (typeof existingSegment === 'string') {
        if (typeof segment === 'string') {
            // Common case: segment is just a string
            return existingSegment === segment;
        }
        return false;
    }
    if (typeof segment === 'string') {
        return false;
    }
    return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
};
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// TypeScript trick to simulate opaque types, like in Flow.
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createCacheKey", {
    enumerable: true,
    get: function get() {
        return createCacheKey;
    }
});
function createCacheKey(originalHref, nextUrl) {
    var originalUrl = new URL(originalHref);
    var cacheKey = {
        pathname: originalUrl.pathname,
        search: originalUrl.search,
        nextUrl: nextUrl
    };
    return cacheKey;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Shared types and constants for the Segment Cache.
 */ var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    FetchStrategy: null,
    NavigationResultTag: null,
    PrefetchPriority: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    FetchStrategy: function FetchStrategy1() {
        return FetchStrategy;
    },
    NavigationResultTag: function NavigationResultTag1() {
        return NavigationResultTag;
    },
    PrefetchPriority: function PrefetchPriority1() {
        return PrefetchPriority;
    }
});
var NavigationResultTag = /*#__PURE__*/ function(NavigationResultTag) {
    NavigationResultTag[NavigationResultTag["MPA"] = 0] = "MPA";
    NavigationResultTag[NavigationResultTag["Success"] = 1] = "Success";
    NavigationResultTag[NavigationResultTag["NoOp"] = 2] = "NoOp";
    NavigationResultTag[NavigationResultTag["Async"] = 3] = "Async";
    return NavigationResultTag;
}({});
var PrefetchPriority = /*#__PURE__*/ function(PrefetchPriority) {
    /**
   * Assigned to the most recently hovered/touched link. Special network
   * bandwidth is reserved for this task only. There's only ever one Intent-
   * priority task at a time; when a new Intent task is scheduled, the previous
   * one is bumped down to Default.
   */ PrefetchPriority[PrefetchPriority["Intent"] = 2] = "Intent";
    /**
   * The default priority for prefetch tasks.
   */ PrefetchPriority[PrefetchPriority["Default"] = 1] = "Default";
    /**
   * Assigned to tasks when they spawn non-blocking background work, like
   * revalidating a partially cached entry to see if more data is available.
   */ PrefetchPriority[PrefetchPriority["Background"] = 0] = "Background";
    return PrefetchPriority;
}({});
var FetchStrategy = /*#__PURE__*/ function(FetchStrategy) {
    // Deliberately ordered so we can easily compare two segments
    // and determine if one segment is "more specific" than another
    // (i.e. if it's likely that it contains more data)
    FetchStrategy[FetchStrategy["LoadingBoundary"] = 0] = "LoadingBoundary";
    FetchStrategy[FetchStrategy["PPR"] = 1] = "PPR";
    FetchStrategy[FetchStrategy["PPRRuntime"] = 2] = "PPRRuntime";
    FetchStrategy[FetchStrategy["Full"] = 3] = "Full";
    return FetchStrategy;
}({});
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache-map.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Fallback: null,
    createCacheMap: null,
    deleteFromCacheMap: null,
    deleteMapEntry: null,
    getFromCacheMap: null,
    isValueExpired: null,
    setInCacheMap: null,
    setSizeInCacheMap: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Fallback: function Fallback1() {
        return Fallback;
    },
    createCacheMap: function createCacheMap1() {
        return createCacheMap;
    },
    deleteFromCacheMap: function deleteFromCacheMap1() {
        return deleteFromCacheMap;
    },
    deleteMapEntry: function deleteMapEntry1() {
        return deleteMapEntry;
    },
    getFromCacheMap: function getFromCacheMap1() {
        return getFromCacheMap;
    },
    isValueExpired: function isValueExpired1() {
        return isValueExpired;
    },
    setInCacheMap: function setInCacheMap1() {
        return setInCacheMap;
    },
    setSizeInCacheMap: function setSizeInCacheMap1() {
        return setSizeInCacheMap;
    }
});
var _lru = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/lru.js [app-client] (ecmascript)");
var Fallback = {};
// This is a special internal key that is used for "revalidation" entries. It's
// an implementation detail that shouldn't leak outside of this module.
var Revalidation = {};
function createCacheMap() {
    var cacheMap = {
        parent: null,
        key: null,
        value: null,
        map: null,
        // LRU-related fields
        prev: null,
        next: null,
        size: 0
    };
    return cacheMap;
}
function getOrInitialize(cacheMap, keys, isRevalidation) {
    // Go through each level of keys until we find the entry that matches, or
    // create a new entry if one doesn't exist.
    //
    // This function will only return entries that match the keypath _exactly_.
    // Unlike getWithFallback, it will not access fallback entries unless it's
    // explicitly part of the keypath.
    var entry = cacheMap;
    var remainingKeys = keys;
    var key = null;
    while(true){
        var previousKey = key;
        if (remainingKeys !== null) {
            key = remainingKeys.value;
            remainingKeys = remainingKeys.parent;
        } else if (isRevalidation && previousKey !== Revalidation) {
            // During a revalidation, we append an internal "Revalidation" key to
            // the end of the keypath. The "normal" entry is its parent.
            // However, if the parent entry is currently empty, we don't need to store
            // this as a revalidation entry. Just insert the revalidation into the
            // normal slot.
            if (entry.value === null) {
                return entry;
            }
            // Otheriwse, create a child entry.
            key = Revalidation;
        } else {
            break;
        }
        var map = entry.map;
        if (map !== null) {
            var existingEntry = map.get(key);
            if (existingEntry !== undefined) {
                // Found a match. Keep going.
                entry = existingEntry;
                continue;
            }
        } else {
            map = new Map();
            entry.map = map;
        }
        // No entry exists yet at this level. Create a new one.
        var newEntry = {
            parent: entry,
            key: key,
            value: null,
            map: null,
            // LRU-related fields
            prev: null,
            next: null,
            size: 0
        };
        map.set(key, newEntry);
        entry = newEntry;
    }
    return entry;
}
function getFromCacheMap(now, currentCacheVersion, rootEntry, keys, isRevalidation) {
    var entry = getEntryWithFallbackImpl(now, currentCacheVersion, rootEntry, keys, isRevalidation, 0);
    if (entry === null || entry.value === null) {
        return null;
    }
    // This is an LRU access. Move the entry to the front of the list.
    (0, _lru.lruPut)(entry);
    return entry.value;
}
function isValueExpired(now, currentCacheVersion, value) {
    return value.staleAt <= now || value.version < currentCacheVersion;
}
function lazilyEvictIfNeeded(now, currentCacheVersion, entry) {
    // We have a matching entry, but before we can return it, we need to check if
    // it's still fresh. Otherwise it should be treated the same as a cache miss.
    if (entry.value === null) {
        // This entry has no value, so there's nothing to evict.
        return entry;
    }
    var value = entry.value;
    if (isValueExpired(now, currentCacheVersion, value)) {
        // The value expired. Lazily evict it from the cache, and return null. This
        // is conceptually the same as a cache miss.
        deleteMapEntry(entry);
        return null;
    }
    // The matched entry has not expired. Return it.
    return entry;
}
function getEntryWithFallbackImpl(now, currentCacheVersion, entry, keys, isRevalidation, previousKey) {
    // This is similar to getExactEntry, but if an exact match is not found for
    // a key, it will return the fallback entry instead. This is recursive at
    // every level, e.g. an entry with keypath [a, Fallback, c, Fallback] is
    // valid match for [a, b, c, d].
    //
    // It will return the most specific match available.
    var key;
    var remainingKeys;
    if (keys !== null) {
        key = keys.value;
        remainingKeys = keys.parent;
    } else if (isRevalidation && previousKey !== Revalidation) {
        // During a revalidation, we append an internal "Revalidation" key to
        // the end of the keypath.
        key = Revalidation;
        remainingKeys = null;
    } else {
        // There are no more keys. This is the terminal entry.
        // TODO: When performing a lookup during a navigation, as opposed to a
        // prefetch, we may want to skip entries that are Pending if there's also
        // a Fulfilled fallback entry. Tricky to say, though, since if it's
        // already pending, it's likely to stream in soon. Maybe we could do this
        // just on slow connections and offline mode.
        return lazilyEvictIfNeeded(now, currentCacheVersion, entry);
    }
    var map = entry.map;
    if (map !== null) {
        var existingEntry = map.get(key);
        if (existingEntry !== undefined) {
            // Found an exact match for this key. Keep searching.
            var result = getEntryWithFallbackImpl(now, currentCacheVersion, existingEntry, remainingKeys, isRevalidation, key);
            if (result !== null) {
                return result;
            }
        }
        // No match found for this key. Check if there's a fallback.
        var fallbackEntry = map.get(Fallback);
        if (fallbackEntry !== undefined) {
            // Found a fallback for this key. Keep searching.
            return getEntryWithFallbackImpl(now, currentCacheVersion, fallbackEntry, remainingKeys, isRevalidation, key);
        }
    }
    return null;
}
function setInCacheMap(cacheMap, keys, value, isRevalidation) {
    // Add a value to the map at the given keypath. If the value is already
    // part of the map, it's removed from its previous keypath. (NOTE: This is
    // unlike a regular JS map, but the behavior is intentional.)
    var entry = getOrInitialize(cacheMap, keys, isRevalidation);
    setMapEntryValue(entry, value);
    // This is an LRU access. Move the entry to the front of the list.
    (0, _lru.lruPut)(entry);
    (0, _lru.updateLruSize)(entry, value.size);
}
function setMapEntryValue(entry, value) {
    if (entry.value !== null) {
        // There's already a value at the given keypath. Disconnect the old value
        // from the map. We're not calling `deleteMapEntry` here because the
        // entry itself is still in the map. We just want to overwrite its value.
        dropRef(entry.value);
        entry.value = null;
    }
    // This value may already be in the map at a different keypath.
    // Grab a reference before we overwrite it.
    var oldEntry = value.ref;
    entry.value = value;
    value.ref = entry;
    (0, _lru.updateLruSize)(entry, value.size);
    if (oldEntry !== null && oldEntry !== entry && oldEntry.value === value) {
        // This value is already in the map at a different keypath in the map.
        // Values only exist at a single keypath at a time. Remove it from the
        // previous keypath.
        //
        // Note that only the internal map entry is garbage collected; we don't
        // call `dropRef` here because it's still in the map, just
        // at a new keypath (the one we just set, above).
        deleteMapEntry(oldEntry);
    }
}
function deleteFromCacheMap(value) {
    var entry = value.ref;
    if (entry === null) {
        // This value is not a member of any map.
        return;
    }
    dropRef(value);
    deleteMapEntry(entry);
}
function dropRef(value) {
    // Drop the value from the map by setting its `ref` backpointer to
    // null. This is a separate operation from `deleteMapEntry` because when
    // re-keying a value we need to be able to delete the old, internal map
    // entry without garbage collecting the value itself.
    value.ref = null;
}
function deleteMapEntry(entry) {
    // Delete the entry from the cache.
    entry.value = null;
    (0, _lru.deleteFromLru)(entry);
    // Check if we can garbage collect the entry.
    var map = entry.map;
    if (map === null) {
        // Since this entry has no value, and also no child entries, we can
        // garbage collect it. Remove it from its parent, and keep garbage
        // collecting the parents until we reach a non-empty entry.
        var parent = entry.parent;
        var key = entry.key;
        while(parent !== null){
            var parentMap = parent.map;
            if (parentMap !== null) {
                parentMap.delete(key);
                if (parentMap.size === 0) {
                    // We just removed the last entry in the parent map.
                    parent.map = null;
                    if (parent.value === null) {
                        // The parent node has no child entries, nor does it have a value
                        // on itself. It can be garbage collected. Keep going.
                        key = parent.key;
                        parent = parent.parent;
                        continue;
                    }
                }
            }
            break;
        }
    } else {
        // Check if there's a revalidating entry. If so, promote it to a
        // "normal" entry, since the normal one was just deleted.
        var revalidatingEntry = map.get(Revalidation);
        if (revalidatingEntry !== undefined && revalidatingEntry.value !== null) {
            setMapEntryValue(entry, revalidatingEntry.value);
        }
    }
}
function setSizeInCacheMap(value, size) {
    var entry = value.ref;
    if (entry === null) {
        // This value is not a member of any map.
        return;
    }
    // Except during initialization (when the size is set to 0), this is the only
    // place the `size` field should be updated, to ensure it's in sync with the
    // the LRU.
    value.size = size;
    (0, _lru.updateLruSize)(entry, size);
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/lru.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    cleanup: null,
    deleteFromLru: null,
    lruPut: null,
    updateLruSize: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cleanup: function cleanup1() {
        return cleanup;
    },
    deleteFromLru: function deleteFromLru1() {
        return deleteFromLru;
    },
    lruPut: function lruPut1() {
        return lruPut;
    },
    updateLruSize: function updateLruSize1() {
        return updateLruSize;
    }
});
var _cachemap = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache-map.js [app-client] (ecmascript)");
var _scheduler = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-client] (ecmascript)");
// We use an LRU for memory management. We must update this whenever we add or
// remove a new cache entry, or when an entry changes size.
var head = null;
var lruSize = 0;
// TODO: I chose the max size somewhat arbitrarily. Consider setting this based
// on navigator.deviceMemory, or some other heuristic. We should make this
// customizable via the Next.js config, too.
var maxLruSize = 50 * 1024 * 1024 // 50 MB
;
function lruPut(node) {
    if (head === node) {
        // Already at the head
        return;
    }
    var prev = node.prev;
    var next = node.next;
    if (next === null || prev === null) {
        // This is an insertion
        lruSize += node.size;
        // Whenever we add an entry, we need to check if we've exceeded the
        // max size. We don't evict entries immediately; they're evicted later in
        // an asynchronous task.
        ensureCleanupIsScheduled();
    } else {
        // This is a move. Remove from its current position.
        prev.next = next;
        next.prev = prev;
    }
    // Move to the front of the list
    if (head === null) {
        // This is the first entry
        node.prev = node;
        node.next = node;
    } else {
        // Add to the front of the list
        var tail = head.prev;
        node.prev = tail;
        // In practice, this is never null, but that isn't encoded in the type
        if (tail !== null) {
            tail.next = node;
        }
        node.next = head;
        head.prev = node;
    }
    head = node;
}
function updateLruSize(node, newNodeSize) {
    // This is a separate function from `put` so that we can resize the entry
    // regardless of whether it's currently being tracked by the LRU.
    var prevNodeSize = node.size;
    node.size = newNodeSize;
    if (node.next === null) {
        // This entry is not currently being tracked by the LRU.
        return;
    }
    // Update the total LRU size
    lruSize = lruSize - prevNodeSize + newNodeSize;
    ensureCleanupIsScheduled();
}
function deleteFromLru(deleted) {
    var next = deleted.next;
    var prev = deleted.prev;
    if (next !== null && prev !== null) {
        lruSize -= deleted.size;
        deleted.next = null;
        deleted.prev = null;
        // Remove from the list
        if (head === deleted) {
            // Update the head
            if (next === head) {
                // This was the last entry
                head = null;
            } else {
                head = next;
                prev.next = next;
                next.prev = prev;
            }
        } else {
            prev.next = next;
            next.prev = prev;
        }
    } else {
    // Already deleted
    }
}
function ensureCleanupIsScheduled() {
    if (lruSize <= maxLruSize) {
        return;
    }
    // To schedule cleanup, ping the prefetch scheduler. At the end of its work
    // loop, once there are no queued tasks and no in-progress requests, it will
    // call cleanup().
    (0, _scheduler.pingPrefetchScheduler)();
}
function cleanup() {
    if (lruSize <= maxLruSize) {
        return;
    }
    // Evict entries until we're at 90% capacity. We can assume this won't
    // infinite loop because even if `maxLruSize` were 0, eventually
    // `deleteFromLru` sets `head` to `null` when we run out entries.
    var ninetyPercentMax = maxLruSize * 0.9;
    while(lruSize > ninetyPercentMax && head !== null){
        var tail = head.prev;
        // In practice, this is never null, but that isn't encoded in the type
        if (tail !== null) {
            // Delete the entry from the map. In turn, this will remove it from
            // the LRU.
            (0, _cachemap.deleteMapEntry)(tail);
        }
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    cancelPrefetchTask: null,
    isPrefetchTaskDirty: null,
    pingPrefetchScheduler: null,
    pingPrefetchTask: null,
    reschedulePrefetchTask: null,
    schedulePrefetchTask: null,
    startRevalidationCooldown: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cancelPrefetchTask: function cancelPrefetchTask1() {
        return cancelPrefetchTask;
    },
    isPrefetchTaskDirty: function isPrefetchTaskDirty1() {
        return isPrefetchTaskDirty;
    },
    pingPrefetchScheduler: function pingPrefetchScheduler1() {
        return pingPrefetchScheduler;
    },
    pingPrefetchTask: function pingPrefetchTask1() {
        return pingPrefetchTask;
    },
    reschedulePrefetchTask: function reschedulePrefetchTask1() {
        return reschedulePrefetchTask;
    },
    schedulePrefetchTask: function schedulePrefetchTask1() {
        return schedulePrefetchTask;
    },
    startRevalidationCooldown: function startRevalidationCooldown1() {
        return startRevalidationCooldown;
    }
});
var _approutertypes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/app-router-types.js [app-client] (ecmascript)");
var _matchsegments = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
var _cache = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)");
var _cachekey = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-client] (ecmascript)");
var _types = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
var _segment = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
var _lru = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/lru.js [app-client] (ecmascript)");
var scheduleMicrotask = typeof queueMicrotask === 'function' ? queueMicrotask : function(fn) {
    return Promise.resolve().then(fn).catch(function(error) {
        return setTimeout(function() {
            throw error;
        });
    });
};
var taskHeap = [];
var inProgressRequests = 0;
var sortIdCounter = 0;
var didScheduleMicrotask = false;
// The most recently hovered (or touched, etc) link, i.e. the most recent task
// scheduled at Intent priority. There's only ever a single task at Intent
// priority at a time. We reserve special network bandwidth for this task only.
var mostRecentlyHoveredLink = null;
// CDN cache propagation delay after revalidation (in milliseconds)
var REVALIDATION_COOLDOWN_MS = 300;
// Timeout handle for the revalidation cooldown. When non-null, prefetch
// requests are blocked to allow CDN cache propagation.
var revalidationCooldownTimeoutHandle = null;
function startRevalidationCooldown() {
    // Clear any existing timeout in case multiple revalidations happen
    // in quick succession.
    if (revalidationCooldownTimeoutHandle !== null) {
        clearTimeout(revalidationCooldownTimeoutHandle);
    }
    // Schedule the cooldown to expire after the delay.
    revalidationCooldownTimeoutHandle = setTimeout(function() {
        revalidationCooldownTimeoutHandle = null;
        // Retry the prefetch queue now that the cooldown has expired.
        pingPrefetchScheduler();
    }, REVALIDATION_COOLDOWN_MS);
}
function schedulePrefetchTask(key, treeAtTimeOfPrefetch, fetchStrategy, priority, onInvalidate, _onComplete) {
    // Spawn a new prefetch task
    var task = {
        key: key,
        treeAtTimeOfPrefetch: treeAtTimeOfPrefetch,
        routeCacheVersion: (0, _cache.getCurrentRouteCacheVersion)(),
        segmentCacheVersion: (0, _cache.getCurrentSegmentCacheVersion)(),
        priority: priority,
        phase: 1,
        hasBackgroundWork: false,
        spawnedRuntimePrefetches: null,
        fetchStrategy: fetchStrategy,
        sortId: sortIdCounter++,
        isCanceled: false,
        onInvalidate: onInvalidate,
        _heapIndex: -1
    };
    if ("TURBOPACK compile-time truthy", 1) {
        task._onComplete = _onComplete;
    }
    trackMostRecentlyHoveredLink(task);
    heapPush(taskHeap, task);
    // Schedule an async task to process the queue.
    //
    // The main reason we process the queue in an async task is for batching.
    // It's common for a single JS task/event to trigger multiple prefetches.
    // By deferring to a microtask, we only process the queue once per JS task.
    // If they have different priorities, it also ensures they are processed in
    // the optimal order.
    pingPrefetchScheduler();
    return task;
}
function cancelPrefetchTask(task) {
    // Remove the prefetch task from the queue. If the task already completed,
    // then this is a no-op.
    //
    // We must also explicitly mark the task as canceled so that a blocked task
    // does not get added back to the queue when it's pinged by the network.
    task.isCanceled = true;
    heapDelete(taskHeap, task);
    if ("TURBOPACK compile-time truthy", 1) {
        // Call completion callback. In practice this shouldn't be reached for
        // test-initiated prefetches since cancellation is only used by the Link
        // component when elements scroll out of viewport.
        var onComplete = task._onComplete;
        task._onComplete = undefined;
        onComplete === null || onComplete === void 0 ? void 0 : onComplete();
    }
}
function reschedulePrefetchTask(task, treeAtTimeOfPrefetch, fetchStrategy, priority) {
    // Bump the prefetch task to the top of the queue, as if it were a fresh
    // task. This is essentially the same as canceling the task and scheduling
    // a new one, except it reuses the original object.
    //
    // The primary use case is to increase the priority of a Link-initated
    // prefetch on hover.
    //
    // Note: _onComplete is not reset here because it's preserved on the same
    // task object. When the rescheduled task completes, the original callback
    // will still be invoked.
    // Un-cancel the task, in case it was previously canceled.
    task.isCanceled = false;
    task.phase = 1;
    // Assign a new sort ID to move it ahead of all other tasks at the same
    // priority level. (Higher sort IDs are processed first.)
    task.sortId = sortIdCounter++;
    task.priority = // Intent priority, even if the rescheduled priority is lower.
    task === mostRecentlyHoveredLink ? _types.PrefetchPriority.Intent : priority;
    task.treeAtTimeOfPrefetch = treeAtTimeOfPrefetch;
    task.fetchStrategy = fetchStrategy;
    trackMostRecentlyHoveredLink(task);
    if (task._heapIndex !== -1) {
        // The task is already in the queue.
        heapResift(taskHeap, task);
    } else {
        heapPush(taskHeap, task);
    }
    pingPrefetchScheduler();
}
function isPrefetchTaskDirty(task, nextUrl, tree) {
    // This is used to quickly bail out of a prefetch task if the result is
    // guaranteed to not have changed since the task was initiated. This is
    // strictly an optimization — theoretically, if it always returned true, no
    // behavior should change because a full prefetch task will effectively
    // perform the same checks.
    return task.routeCacheVersion !== (0, _cache.getCurrentRouteCacheVersion)() || task.segmentCacheVersion !== (0, _cache.getCurrentSegmentCacheVersion)() || task.treeAtTimeOfPrefetch !== tree || task.key.nextUrl !== nextUrl;
}
function trackMostRecentlyHoveredLink(task) {
    // Track the mostly recently hovered link, i.e. the most recently scheduled
    // task at Intent priority. There must only be one such task at a time.
    if (task.priority === _types.PrefetchPriority.Intent && task !== mostRecentlyHoveredLink) {
        if (mostRecentlyHoveredLink !== null) {
            // Bump the previously hovered link's priority down to Default.
            if (mostRecentlyHoveredLink.priority !== _types.PrefetchPriority.Background) {
                mostRecentlyHoveredLink.priority = _types.PrefetchPriority.Default;
                heapResift(taskHeap, mostRecentlyHoveredLink);
            }
        }
        mostRecentlyHoveredLink = task;
    }
}
function pingPrefetchScheduler() {
    if (didScheduleMicrotask) {
        // Already scheduled a task to process the queue
        return;
    }
    didScheduleMicrotask = true;
    scheduleMicrotask(processQueueInMicrotask);
}
/**
 * Checks if we've exceeded the maximum number of concurrent prefetch requests,
 * to avoid saturating the browser's internal network queue. This is a
 * cooperative limit — prefetch tasks should check this before issuing
 * new requests.
 *
 * Also checks if we're within the revalidation cooldown window, during which
 * prefetch requests are delayed to allow CDN cache propagation.
 */ function hasNetworkBandwidth(task) {
    // Check if we're within the revalidation cooldown window
    if (revalidationCooldownTimeoutHandle !== null) {
        // We're within the cooldown window. Return false to prevent prefetching.
        // When the cooldown expires, the timeout will call ensureWorkIsScheduled()
        // to retry the queue.
        return false;
    }
    // TODO: Also check if there's an in-progress navigation. We should never
    // add prefetch requests to the network queue if an actual navigation is
    // taking place, to ensure there's sufficient bandwidth for render-blocking
    // data and resources.
    // TODO: Consider reserving some amount of bandwidth for static prefetches.
    if (task.priority === _types.PrefetchPriority.Intent) {
        // The most recently hovered link is allowed to exceed the default limit.
        //
        // The goal is to always have enough bandwidth to start a new prefetch
        // request when hovering over a link.
        //
        // However, because we don't abort in-progress requests, it's still possible
        // we'll run out of bandwidth. When links are hovered in quick succession,
        // there could be multiple hover requests running simultaneously.
        return inProgressRequests < 12;
    }
    // The default limit is lower than the limit for a hovered link.
    return inProgressRequests < 4;
}
function spawnPrefetchSubtask(prefetchSubtask) {
    // When the scheduler spawns an async task, we don't await its result.
    // Instead, the async task writes its result directly into the cache, then
    // pings the scheduler to continue.
    //
    // We process server responses streamingly, so the prefetch subtask will
    // likely resolve before we're finished receiving all the data. The subtask
    // result includes a promise that resolves once the network connection is
    // closed. The scheduler uses this to control network bandwidth by tracking
    // and limiting the number of concurrent requests.
    inProgressRequests++;
    return prefetchSubtask.then(function(result) {
        if (result === null) {
            // The prefetch task errored before it could start processing the
            // network stream. Assume the connection is closed.
            onPrefetchConnectionClosed();
            return null;
        }
        // Wait for the connection to close before freeing up more bandwidth.
        result.closed.then(onPrefetchConnectionClosed);
        return result.value;
    });
}
function onPrefetchConnectionClosed() {
    inProgressRequests--;
    // Notify the scheduler that we have more bandwidth, and can continue
    // processing tasks.
    pingPrefetchScheduler();
}
function pingPrefetchTask(task) {
    // "Ping" a prefetch that's already in progress to notify it of new data.
    if (task.isCanceled || // Check if prefetch is already queued.
    task._heapIndex !== -1) {
        return;
    }
    // Add the task back to the queue.
    heapPush(taskHeap, task);
    pingPrefetchScheduler();
}
function processQueueInMicrotask() {
    didScheduleMicrotask = false;
    // We aim to minimize how often we read the current time. Since nearly all
    // functions in the prefetch scheduler are synchronous, we can read the time
    // once and pass it as an argument wherever it's needed.
    var now = Date.now();
    // Process the task queue until we run out of network bandwidth.
    var task = heapPeek(taskHeap);
    while(task !== null && hasNetworkBandwidth(task)){
        task.routeCacheVersion = (0, _cache.getCurrentRouteCacheVersion)();
        task.segmentCacheVersion = (0, _cache.getCurrentSegmentCacheVersion)();
        var exitStatus = pingRoute(now, task);
        // These fields are only valid for a single attempt. Reset them after each
        // iteration of the task queue.
        var hasBackgroundWork = task.hasBackgroundWork;
        task.hasBackgroundWork = false;
        task.spawnedRuntimePrefetches = null;
        switch(exitStatus){
            case 0:
                // The task yielded because there are too many requests in progress.
                // Stop processing tasks until we have more bandwidth.
                return;
            case 1:
                // The task is blocked. It needs more data before it can proceed.
                // Keep the task out of the queue until the server responds.
                heapPop(taskHeap);
                // Continue to the next task
                task = heapPeek(taskHeap);
                continue;
            case 2:
                if (task.phase === 1) {
                    // Finished prefetching the route tree. Proceed to prefetching
                    // the segments.
                    task.phase = 0;
                    heapResift(taskHeap, task);
                } else if (hasBackgroundWork) {
                    // The task spawned additional background work. Reschedule the task
                    // at background priority.
                    task.priority = _types.PrefetchPriority.Background;
                    heapResift(taskHeap, task);
                } else {
                    // The prefetch is complete. Continue to the next task.
                    if ("TURBOPACK compile-time truthy", 1) {
                        // Notify the Instant Navigation Testing API that the prefetch has
                        // completed, so it can proceed with navigation.
                        var onComplete = task._onComplete;
                        task._onComplete = undefined;
                        onComplete === null || onComplete === void 0 ? void 0 : onComplete();
                    }
                    heapPop(taskHeap);
                }
                task = heapPeek(taskHeap);
                continue;
            default:
                exitStatus;
        }
    }
    // Run LRU cleanup only when the scheduler is fully idle: no queued tasks and
    // no in-progress requests. At that point, all active prefetch tasks have
    // finished reading from the cache (moving recently used entries to the front
    // of the list), so only genuinely stale data gets evicted.
    if (task === null && inProgressRequests === 0) {
        (0, _lru.cleanup)();
    }
}
/**
 * Check this during a prefetch task to determine if background work can be
 * performed. If so, it evaluates to `true`. Otherwise, it returns `false`,
 * while also scheduling a background task to run later. Usage:
 *
 * @example
 * if (background(task)) {
 *   // Perform background-pri work
 * }
 */ function background(task) {
    if (task.priority === _types.PrefetchPriority.Background) {
        return true;
    }
    task.hasBackgroundWork = true;
    return false;
}
function pingRoute(now, task) {
    var key = task.key;
    var route = (0, _cache.readOrCreateRouteCacheEntry)(now, task, key);
    var exitStatus = pingRootRouteTree(now, task, route);
    if (exitStatus !== 0 && key.search !== '') {
        // If the URL has a non-empty search string, also prefetch the pathname
        // without the search string. We use the searchless route tree as a base for
        // optimistic routing; see requestOptimisticRouteCacheEntry for details.
        //
        // Note that we don't need to prefetch any of the segment data. Just the
        // route tree.
        //
        // TODO: This is a temporary solution; the plan is to replace this by adding
        // a wildcard lookup method to the TupleMap implementation. This is
        // non-trivial to implement because it needs to account for things like
        // fallback route entries, hence this temporary workaround.
        var url = new URL(key.pathname, location.origin);
        var keyWithoutSearch = (0, _cachekey.createCacheKey)(url.href, key.nextUrl);
        var routeWithoutSearch = (0, _cache.readOrCreateRouteCacheEntry)(now, task, keyWithoutSearch);
        switch(routeWithoutSearch.status){
            case _cache.EntryStatus.Empty:
                {
                    if (background(task)) {
                        routeWithoutSearch.status = _cache.EntryStatus.Pending;
                        spawnPrefetchSubtask((0, _cache.fetchRouteOnCacheMiss)(routeWithoutSearch, keyWithoutSearch));
                    }
                    break;
                }
            case _cache.EntryStatus.Pending:
            case _cache.EntryStatus.Fulfilled:
            case _cache.EntryStatus.Rejected:
                {
                    break;
                }
            default:
                routeWithoutSearch;
        }
    }
    return exitStatus;
}
function pingRootRouteTree(now, task, route) {
    switch(route.status){
        case _cache.EntryStatus.Empty:
            {
                // Route is not yet cached, and there's no request already in progress.
                // Spawn a task to request the route, load it into the cache, and ping
                // the task to continue.
                // TODO: There are multiple strategies in the <Link> API for prefetching
                // a route. Currently we've only implemented the main one: per-segment,
                // static-data only.
                //
                // There's also `<Link prefetch={true}>`
                // which prefetch both static *and* dynamic data.
                // Similarly, we need to fallback to the old, per-page
                // behavior if PPR is disabled for a route (via the incremental opt-in).
                //
                // Those cases will be handled here.
                spawnPrefetchSubtask((0, _cache.fetchRouteOnCacheMiss)(route, task.key));
                // If the request takes longer than a minute, a subsequent request should
                // retry instead of waiting for this one. When the response is received,
                // this value will be replaced by a new value based on the stale time sent
                // from the server.
                // TODO: We should probably also manually abort the fetch task, to reclaim
                // server bandwidth.
                route.staleAt = now + 60 * 1000;
                // Upgrade to Pending so we know there's already a request in progress
                route.status = _cache.EntryStatus.Pending;
            // Intentional fallthrough to the Pending branch
            }
        case _cache.EntryStatus.Pending:
            {
                // Still pending. We can't start prefetching the segments until the route
                // tree has loaded. Add the task to the set of blocked tasks so that it
                // is notified when the route tree is ready.
                var blockedTasks = route.blockedTasks;
                if (blockedTasks === null) {
                    route.blockedTasks = new Set([
                        task
                    ]);
                } else {
                    blockedTasks.add(task);
                }
                return 1;
            }
        case _cache.EntryStatus.Rejected:
            {
                // Route tree failed to load. Treat as a 404.
                return 2;
            }
        case _cache.EntryStatus.Fulfilled:
            {
                if (task.phase !== 0) {
                    // Do not prefetch segment data until we've entered the segment phase.
                    return 2;
                }
                // Recursively fill in the segment tree.
                if (!hasNetworkBandwidth(task)) {
                    // Stop prefetching segments until there's more bandwidth.
                    return 0;
                }
                var tree = route.tree;
                // A task's fetch strategy gets set to `PPR` for any "auto" prefetch.
                // If it turned out that the route isn't PPR-enabled, we need to use `LoadingBoundary` instead.
                // We don't need to do this for runtime prefetches, because those are only available in
                // `cacheComponents`, where every route is PPR.
                var fetchStrategy;
                if (tree.prefetchHints & _approutertypes.PrefetchHint.SubtreeHasInstant) {
                    // If `instant` is defined anywhere on the target route, ignore the
                    // fetch strategy and switch to unified strategy used by Cache
                    // Components (called `PPR` for now, will likely be renamed).
                    //
                    // In practice, this just means that a "full" prefetch (<Link
                    // prefetch={true}>) has no effect. You're meant to use Runtime
                    // Prefetching instead — that's the new pattern that replaces
                    // prefetch={true}.
                    //
                    // The reason we check for `instant` rather than the `cacheComponents`
                    // flag is to support incremental adoption. `prefetch={true}` will
                    // continue to work until you opt into `instant`.
                    fetchStrategy = _types.FetchStrategy.PPR;
                } else if (task.fetchStrategy === _types.FetchStrategy.PPR) {
                    fetchStrategy = route.supportsPerSegmentPrefetching ? _types.FetchStrategy.PPR : _types.FetchStrategy.LoadingBoundary;
                } else {
                    fetchStrategy = task.fetchStrategy;
                }
                switch(fetchStrategy){
                    case _types.FetchStrategy.PPR:
                        {
                            // For Cache Components pages, each segment may be prefetched
                            // statically or using a runtime request, based on various
                            // configurations and heuristics. We'll do this in two passes: first
                            // traverse the tree and perform all the static prefetches.
                            //
                            // Then, if there are any segments that need a runtime request,
                            // do another pass to perform a runtime prefetch.
                            pingStaticHead(now, task, route);
                            var exitStatus = pingSharedPartOfCacheComponentsTree(now, task, route, task.treeAtTimeOfPrefetch, tree);
                            if (exitStatus === 0) {
                                // Child yielded without finishing.
                                return 0;
                            }
                            var spawnedRuntimePrefetches = task.spawnedRuntimePrefetches;
                            if (spawnedRuntimePrefetches !== null) {
                                // During the first pass, we discovered segments that require a
                                // runtime prefetch. Do a second pass to construct a request tree.
                                var spawnedEntries = new Map();
                                pingRuntimeHead(now, task, route, spawnedEntries, _types.FetchStrategy.PPRRuntime);
                                var requestTree = pingRuntimePrefetches(now, task, route, tree, spawnedRuntimePrefetches, spawnedEntries);
                                var needsDynamicRequest = spawnedEntries.size > 0;
                                if (needsDynamicRequest) {
                                    // Perform a dynamic prefetch request and populate the cache with
                                    // the result.
                                    spawnPrefetchSubtask((0, _cache.fetchSegmentPrefetchesUsingDynamicRequest)(task, route, _types.FetchStrategy.PPRRuntime, requestTree, spawnedEntries));
                                }
                            }
                            return 2;
                        }
                    case _types.FetchStrategy.Full:
                    case _types.FetchStrategy.PPRRuntime:
                    case _types.FetchStrategy.LoadingBoundary:
                        {
                            // Prefetch multiple segments using a single dynamic request.
                            // TODO: We can consolidate this branch with previous one by modeling
                            // it as if the first segment in the new tree has runtime prefetching
                            // enabled. Will do this as a follow-up refactor. Might want to remove
                            // the special metatdata case below first. In the meantime, it's not
                            // really that much duplication, just would be nice to remove one of
                            // these codepaths.
                            var spawnedEntries1 = new Map();
                            pingRuntimeHead(now, task, route, spawnedEntries1, fetchStrategy);
                            var dynamicRequestTree = diffRouteTreeAgainstCurrent(now, task, route, task.treeAtTimeOfPrefetch, tree, spawnedEntries1, fetchStrategy);
                            var needsDynamicRequest1 = spawnedEntries1.size > 0;
                            if (needsDynamicRequest1) {
                                spawnPrefetchSubtask((0, _cache.fetchSegmentPrefetchesUsingDynamicRequest)(task, route, fetchStrategy, dynamicRequestTree, spawnedEntries1));
                            }
                            return 2;
                        }
                    default:
                        fetchStrategy;
                }
                break;
            }
        default:
            {
                route;
            }
    }
    return 2;
}
function pingStaticHead(now, task, route) {
    // The Head data for a page (metadata, viewport) is not really a route
    // segment, in the sense that it doesn't appear in the route tree. But we
    // store it in the cache as if it were, using a special key.
    pingStaticSegmentData(now, task, route, (0, _cache.readOrCreateSegmentCacheEntry)(now, _types.FetchStrategy.PPR, route.metadata), task.key, route.metadata);
}
function pingRuntimeHead(now, task, route, spawnedEntries, fetchStrategy) {
    pingRouteTreeAndIncludeDynamicData(now, task, route, route.metadata, false, spawnedEntries, // and LoadingBoundary
    fetchStrategy === _types.FetchStrategy.LoadingBoundary ? _types.FetchStrategy.Full : fetchStrategy);
}
// TODO: Rename dynamic -> runtime throughout this module
function pingSharedPartOfCacheComponentsTree(now, task, route, oldTree, newTree) {
    // When Cache Components is enabled (or PPR, or a fully static route when PPR
    // is disabled; those cases are treated equivalently to Cache Components), we
    // start by prefetching each segment individually. Once we reach the "new"
    // part of the tree — the part that doesn't exist on the current page — we
    // may choose to switch to a runtime prefetch instead, based on the
    // information sent by the server in the route tree.
    //
    // The traversal starts in the "shared" part of the tree. Once we reach the
    // "new" part of the tree, we switch to a different traversal,
    // pingNewPartOfCacheComponentsTree.
    // Prefetch this segment's static data.
    var segment = (0, _cache.readOrCreateSegmentCacheEntry)(now, task.fetchStrategy, newTree);
    pingStaticSegmentData(now, task, route, segment, task.key, newTree);
    // Recursively ping the children.
    var oldTreeChildren = oldTree[1];
    var newTreeChildren = newTree.slots;
    if (newTreeChildren !== null) {
        for(var parallelRouteKey in newTreeChildren){
            if (!hasNetworkBandwidth(task)) {
                // Stop prefetching segments until there's more bandwidth.
                return 0;
            }
            var newTreeChild = newTreeChildren[parallelRouteKey];
            var newTreeChildSegment = newTreeChild.segment;
            var oldTreeChild = oldTreeChildren[parallelRouteKey];
            var oldTreeChildSegment = oldTreeChild === null || oldTreeChild === void 0 ? void 0 : oldTreeChild[0];
            var childExitStatus = void 0;
            if (oldTreeChildSegment !== undefined && doesCurrentSegmentMatchCachedSegment(route, newTreeChildSegment, oldTreeChildSegment)) {
                // We're still in the "shared" part of the tree.
                childExitStatus = pingSharedPartOfCacheComponentsTree(now, task, route, oldTreeChild, newTreeChild);
            } else {
                // We've entered the "new" part of the tree. Switch
                // traversal functions.
                childExitStatus = pingNewPartOfCacheComponentsTree(now, task, route, newTreeChild);
            }
            if (childExitStatus === 0) {
                // Child yielded without finishing.
                return 0;
            }
        }
    }
    return 2;
}
function pingNewPartOfCacheComponentsTree(now, task, route, tree) {
    // We're now prefetching in the "new" part of the tree, the part that doesn't
    // exist on the current page. (In other words, we're deeper than the
    // shared layouts.) Segments in here default to being prefetched statically.
    // However, if the server instructs us to, we may switch to a runtime
    // prefetch instead. Traverse the tree and check at each segment.
    if (tree.prefetchHints & _approutertypes.PrefetchHint.HasRuntimePrefetch) {
        // This route has a runtime prefetch response. Since we're below the shared
        // layout, everything from this point should be prefetched using a single,
        // combined runtime request, rather than using per-segment static requests.
        // This is true even if some of the child segments are known to be fully
        // static — once we've decided to perform a runtime prefetch, we might as
        // well respond with the static segments in the same roundtrip. (That's how
        // regular navigations work, too.) We'll still skip over segments that are
        // already cached, though.
        //
        // It's the server's responsibility to set a reasonable value of
        // `hasRuntimePrefetch`. Currently it's user-defined, but eventually, the
        // server may send a value of `false` even if the user opts in, if it
        // determines during build that the route is always fully static. There are
        // more optimizations we can do once we implement fallback param
        // tracking, too.
        //
        // Use the task object to collect the segments that need a runtime prefetch.
        // This will signal to the outer task queue that a second traversal is
        // required to construct a request tree.
        if (task.spawnedRuntimePrefetches === null) {
            task.spawnedRuntimePrefetches = new Set([
                tree.requestKey
            ]);
        } else {
            task.spawnedRuntimePrefetches.add(tree.requestKey);
        }
        // Then exit the traversal without prefetching anything further.
        return 2;
    }
    // This segment should not be runtime prefetched. Prefetch its static data.
    var segment = (0, _cache.readOrCreateSegmentCacheEntry)(now, task.fetchStrategy, tree);
    pingStaticSegmentData(now, task, route, segment, task.key, tree);
    if (tree.slots !== null) {
        if (!hasNetworkBandwidth(task)) {
            // Stop prefetching segments until there's more bandwidth.
            return 0;
        }
        // Recursively ping the children.
        for(var parallelRouteKey in tree.slots){
            var childTree = tree.slots[parallelRouteKey];
            var childExitStatus = pingNewPartOfCacheComponentsTree(now, task, route, childTree);
            if (childExitStatus === 0) {
                // Child yielded without finishing.
                return 0;
            }
        }
    }
    // This segment and all its children have finished prefetching.
    return 2;
}
function diffRouteTreeAgainstCurrent(now, task, route, oldTree, newTree, spawnedEntries, fetchStrategy) {
    // This is a single recursive traversal that does multiple things:
    // - Finds the parts of the target route (newTree) that are not part of
    //   of the current page (oldTree) by diffing them, using the same algorithm
    //   as a real navigation.
    // - Constructs a request tree (FlightRouterState) that describes which
    //   segments need to be prefetched and which ones are already cached.
    // - Creates a set of pending cache entries for the segments that need to
    //   be prefetched, so that a subsequent prefetch task does not request the
    //   same segments again.
    var oldTreeChildren = oldTree[1];
    var newTreeChildren = newTree.slots;
    var requestTreeChildren = {};
    if (newTreeChildren !== null) {
        for(var parallelRouteKey in newTreeChildren){
            var newTreeChild = newTreeChildren[parallelRouteKey];
            var newTreeChildSegment = newTreeChild.segment;
            var oldTreeChild = oldTreeChildren[parallelRouteKey];
            var oldTreeChildSegment = oldTreeChild === null || oldTreeChild === void 0 ? void 0 : oldTreeChild[0];
            if (oldTreeChildSegment !== undefined && doesCurrentSegmentMatchCachedSegment(route, newTreeChildSegment, oldTreeChildSegment)) {
                // This segment is already part of the current route. Keep traversing.
                var requestTreeChild = diffRouteTreeAgainstCurrent(now, task, route, oldTreeChild, newTreeChild, spawnedEntries, fetchStrategy);
                requestTreeChildren[parallelRouteKey] = requestTreeChild;
            } else {
                // This segment is not part of the current route. We're entering a
                // part of the tree that we need to prefetch (unless everything is
                // already cached).
                switch(fetchStrategy){
                    case _types.FetchStrategy.LoadingBoundary:
                        {
                            // When PPR is disabled, we can't prefetch per segment. We must
                            // fallback to the old prefetch behavior and send a dynamic request.
                            // Only routes that include a loading boundary can be prefetched in
                            // this way.
                            //
                            // This is simlar to a "full" prefetch, but we're much more
                            // conservative about which segments to include in the request.
                            //
                            // The server will only render up to the first loading boundary
                            // inside new part of the tree. If there's no loading boundary
                            // anywhere in the tree, the server will never return any data, so
                            // we can skip the request.
                            var subtreeHasLoadingBoundary = (newTreeChild.prefetchHints & (_approutertypes.PrefetchHint.SegmentHasLoadingBoundary | _approutertypes.PrefetchHint.SubtreeHasLoadingBoundary)) !== 0;
                            var requestTreeChild1 = subtreeHasLoadingBoundary ? pingPPRDisabledRouteTreeUpToLoadingBoundary(now, task, route, newTreeChild, null, spawnedEntries) : (0, _cache.convertRouteTreeToFlightRouterState)(newTreeChild);
                            requestTreeChildren[parallelRouteKey] = requestTreeChild1;
                            break;
                        }
                    case _types.FetchStrategy.PPRRuntime:
                        {
                            // This is a runtime prefetch. Fetch all cacheable data in the tree,
                            // not just the static PPR shell.
                            var requestTreeChild2 = pingRouteTreeAndIncludeDynamicData(now, task, route, newTreeChild, false, spawnedEntries, fetchStrategy);
                            requestTreeChildren[parallelRouteKey] = requestTreeChild2;
                            break;
                        }
                    case _types.FetchStrategy.Full:
                        {
                            // This is a "full" prefetch. Fetch all the data in the tree, both
                            // static and dynamic. We issue roughly the same request that we
                            // would during a real navigation. The goal is that once the
                            // navigation occurs, the router should not have to fetch any
                            // additional data.
                            //
                            // Although the response will include dynamic data, opting into a
                            // Full prefetch — via <Link prefetch={true}> — implicitly
                            // instructs the cache to treat the response as "static", or non-
                            // dynamic, since the whole point is to cache it for
                            // future navigations.
                            //
                            // Construct a tree (currently a FlightRouterState) that represents
                            // which segments need to be prefetched and which ones are already
                            // cached. If the tree is empty, then we can exit. Otherwise, we'll
                            // send the request tree to the server and use the response to
                            // populate the segment cache.
                            var requestTreeChild3 = pingRouteTreeAndIncludeDynamicData(now, task, route, newTreeChild, false, spawnedEntries, fetchStrategy);
                            requestTreeChildren[parallelRouteKey] = requestTreeChild3;
                            break;
                        }
                    default:
                        fetchStrategy;
                }
            }
        }
    }
    var requestTree = [
        newTree.segment,
        requestTreeChildren,
        null,
        null
    ];
    return requestTree;
}
function pingPPRDisabledRouteTreeUpToLoadingBoundary(now, task, route, tree, refetchMarkerContext, spawnedEntries) {
    // This function is similar to pingRouteTreeAndIncludeDynamicData, except the
    // server is only going to return a minimal loading state — it will stop
    // rendering at the first loading boundary. Whereas a Full prefetch is
    // intentionally aggressive and tries to pretfetch all the data that will be
    // needed for a navigation, a LoadingBoundary prefetch is much more
    // conservative. For example, it will omit from the request tree any segment
    // that is already cached, regardles of whether it's partial or full. By
    // contrast, a Full prefetch will refetch partial segments.
    // "inside-shared-layout" tells the server where to start looking for a
    // loading boundary.
    var refetchMarker = refetchMarkerContext === null ? 'inside-shared-layout' : null;
    var segment = (0, _cache.readOrCreateSegmentCacheEntry)(now, task.fetchStrategy, tree);
    switch(segment.status){
        case _cache.EntryStatus.Empty:
            {
                // This segment is not cached. Add a refetch marker so the server knows
                // to start rendering here.
                // TODO: Instead of a "refetch" marker, we could just omit this subtree's
                // FlightRouterState from the request tree. I think this would probably
                // already work even without any updates to the server. For consistency,
                // though, I'll send the full tree and we'll look into this later as part
                // of a larger redesign of the request protocol.
                // Add the pending cache entry to the result map.
                spawnedEntries.set(tree.requestKey, (0, _cache.upgradeToPendingSegment)(segment, // might not include it in the pending response. If another route is able
                // to issue a per-segment request, we'll do that in the background.
                _types.FetchStrategy.LoadingBoundary));
                if (refetchMarkerContext !== 'refetch') {
                    refetchMarker = refetchMarkerContext = 'refetch';
                } else {
                // There's already a parent with a refetch marker, so we don't need
                // to add another one.
                }
                break;
            }
        case _cache.EntryStatus.Fulfilled:
            {
                // The segment is already cached.
                var segmentHasLoadingBoundary = (tree.prefetchHints & _approutertypes.PrefetchHint.SegmentHasLoadingBoundary) !== 0;
                if (segmentHasLoadingBoundary) {
                    // This segment has a loading boundary, which means the server won't
                    // render its children. So there's nothing left to prefetch along this
                    // path. We can bail out.
                    return (0, _cache.convertRouteTreeToFlightRouterState)(tree);
                }
                break;
            }
        case _cache.EntryStatus.Pending:
            {
                break;
            }
        case _cache.EntryStatus.Rejected:
            {
                break;
            }
        default:
            segment;
    }
    var requestTreeChildren = {};
    if (tree.slots !== null) {
        for(var parallelRouteKey in tree.slots){
            var childTree = tree.slots[parallelRouteKey];
            requestTreeChildren[parallelRouteKey] = pingPPRDisabledRouteTreeUpToLoadingBoundary(now, task, route, childTree, refetchMarkerContext, spawnedEntries);
        }
    }
    var requestTree = [
        tree.segment,
        requestTreeChildren,
        null,
        refetchMarker
    ];
    return requestTree;
}
function pingRouteTreeAndIncludeDynamicData(now, task, route, tree, isInsideRefetchingParent, spawnedEntries, fetchStrategy) {
    // The tree we're constructing is the same shape as the tree we're navigating
    // to. But even though this is a "new" tree, some of the individual segments
    // may be cached as a result of other route prefetches.
    //
    // So we need to find the first uncached segment along each path add an
    // explicit "refetch" marker so the server knows where to start rendering.
    // Once the server starts rendering along a path, it keeps rendering the
    // entire subtree.
    var segment = (0, _cache.readOrCreateSegmentCacheEntry)(now, // and we have to use the former here.
    // We can have a task with `FetchStrategy.PPR` where some of its segments are configured to
    // always use runtime prefetching (via `export const prefetch`), and those should check for
    // entries that include search params.
    fetchStrategy, tree);
    var spawnedSegment = null;
    switch(segment.status){
        case _cache.EntryStatus.Empty:
            {
                // This segment is not cached.
                if (fetchStrategy === _types.FetchStrategy.Full) {
                    // Check if there's a matching entry in the bfcache. If so, fulfill the
                    // segment using the bfcache entry instead of issuing a new request.
                    var fulfilled = (0, _cache.attemptToFulfillDynamicSegmentFromBFCache)(now, segment, tree);
                    if (fulfilled !== null) {
                        break;
                    }
                }
                // Include it in the request.
                spawnedSegment = (0, _cache.upgradeToPendingSegment)(segment, fetchStrategy);
                break;
            }
        case _cache.EntryStatus.Fulfilled:
            {
                // The segment is already cached.
                if (segment.isPartial && (0, _cache.canNewFetchStrategyProvideMoreContent)(segment.fetchStrategy, fetchStrategy)) {
                    // The cached segment contains dynamic holes, and was prefetched using a
                    // less specific strategy than the current one. This means we're in one
                    // of these cases:
                    //   - we have a static prefetch, and we're doing a runtime prefetch
                    //   - we have a static or runtime prefetch, and we're doing a Full
                    //     prefetch (or a navigation).
                    // In either case, we need to include it in the request to get a more
                    // specific (or full) version. However, if there's a non-stale bfcache
                    // entry from a previous navigation, prefer that over making a new
                    // request.
                    if (fetchStrategy === _types.FetchStrategy.Full) {
                        var fulfilled1 = (0, _cache.attemptToUpgradeSegmentFromBFCache)(now, tree);
                        if (fulfilled1 !== null) {
                            break;
                        }
                    }
                    spawnedSegment = pingFullSegmentRevalidation(now, tree, fetchStrategy);
                }
                break;
            }
        case _cache.EntryStatus.Pending:
        case _cache.EntryStatus.Rejected:
            {
                // There's either another prefetch currently in progress, or the previous
                // attempt failed. If the new strategy can provide more content, fetch it again.
                if ((0, _cache.canNewFetchStrategyProvideMoreContent)(segment.fetchStrategy, fetchStrategy)) {
                    spawnedSegment = pingFullSegmentRevalidation(now, tree, fetchStrategy);
                }
                break;
            }
        default:
            segment;
    }
    var requestTreeChildren = {};
    if (tree.slots !== null) {
        for(var parallelRouteKey in tree.slots){
            var childTree = tree.slots[parallelRouteKey];
            requestTreeChildren[parallelRouteKey] = pingRouteTreeAndIncludeDynamicData(now, task, route, childTree, isInsideRefetchingParent || spawnedSegment !== null, spawnedEntries, fetchStrategy);
        }
    }
    if (spawnedSegment !== null) {
        // Add the pending entry to the result map.
        spawnedEntries.set(tree.requestKey, spawnedSegment);
    }
    // Don't bother to add a refetch marker if one is already present in a parent.
    var refetchMarker = !isInsideRefetchingParent && spawnedSegment !== null ? 'refetch' : null;
    var requestTree = [
        tree.segment,
        requestTreeChildren,
        null,
        refetchMarker
    ];
    return requestTree;
}
function pingRuntimePrefetches(now, task, route, tree, spawnedRuntimePrefetches, spawnedEntries) {
    // Construct a request tree (FlightRouterState) for a runtime prefetch. If
    // a segment is part of the runtime prefetch, the tree is constructed by
    // diffing against what's already in the prefetch cache. Otherwise, we send
    // a regular FlightRouterState with no special markers.
    //
    // See pingRouteTreeAndIncludeDynamicData for details.
    if (spawnedRuntimePrefetches.has(tree.requestKey)) {
        // This segment needs a runtime prefetch.
        return pingRouteTreeAndIncludeDynamicData(now, task, route, tree, false, spawnedEntries, _types.FetchStrategy.PPRRuntime);
    }
    var requestTreeChildren = {};
    var slots = tree.slots;
    if (slots !== null) {
        for(var parallelRouteKey in slots){
            var childTree = slots[parallelRouteKey];
            requestTreeChildren[parallelRouteKey] = pingRuntimePrefetches(now, task, route, childTree, spawnedRuntimePrefetches, spawnedEntries);
        }
    }
    // This segment is not part of the runtime prefetch. Clone the base tree.
    var requestTree = [
        tree.segment,
        requestTreeChildren,
        null,
        null
    ];
    return requestTree;
}
function pingStaticSegmentData(now, task, route, segment, routeKey, tree) {
    switch(segment.status){
        case _cache.EntryStatus.Empty:
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            {
                // All segment data for this route is bundled into a single
                // /_inlined response. Walk the full route tree to collect all
                // Empty segments, upgrade them to Pending, and spawn one
                // bundled request. Subsequent calls for other segments in the
                // same tree will see them as Pending and skip.
                var inlinedEntries;
            /*TURBOPACK member replacement*/ }
            // Upgrade to Pending so we know there's already a request in progress
            spawnPrefetchSubtask((0, _cache.fetchSegmentOnCacheMiss)(route, (0, _cache.upgradeToPendingSegment)(segment, _types.FetchStrategy.PPR), routeKey, tree));
            break;
        case _cache.EntryStatus.Pending:
            {
                // There's already a request in progress. Depending on what kind of
                // request it is, we may want to revalidate it.
                switch(segment.fetchStrategy){
                    case _types.FetchStrategy.PPR:
                    case _types.FetchStrategy.PPRRuntime:
                    case _types.FetchStrategy.Full:
                        break;
                    case _types.FetchStrategy.LoadingBoundary:
                        // There's a pending request, but because it's using the old
                        // prefetching strategy, we can't be sure if it will be fulfilled by
                        // the response — it might be inside the loading boundary. Perform
                        // a revalidation, but because it's speculative, wait to do it at
                        // background priority.
                        if (background(task)) {
                            // TODO: Instead of speculatively revalidating, consider including
                            // `hasLoading` in the route tree prefetch response.
                            pingPPRSegmentRevalidation(now, route, routeKey, tree);
                        }
                        break;
                    default:
                        segment.fetchStrategy;
                }
                break;
            }
        case _cache.EntryStatus.Rejected:
            {
                // The existing entry in the cache was rejected. Depending on how it
                // was originally fetched, we may or may not want to revalidate it.
                switch(segment.fetchStrategy){
                    case _types.FetchStrategy.PPR:
                    case _types.FetchStrategy.PPRRuntime:
                    case _types.FetchStrategy.Full:
                        break;
                    case _types.FetchStrategy.LoadingBoundary:
                        // There's a rejected entry, but it was fetched using the loading
                        // boundary strategy. So the reason it wasn't returned by the server
                        // might just be because it was inside a loading boundary. Or because
                        // there was a dynamic rewrite. Revalidate it using the per-
                        // segment strategy.
                        //
                        // Because a rejected segment will definitely prevent the segment (and
                        // all of its children) from rendering, we perform this revalidation
                        // immediately instead of deferring it to a background task.
                        pingPPRSegmentRevalidation(now, route, routeKey, tree);
                        break;
                    default:
                        segment.fetchStrategy;
                }
                break;
            }
        case _cache.EntryStatus.Fulfilled:
            break;
        default:
            segment;
    }
// Segments do not have dependent tasks, so once the prefetch is initiated,
// there's nothing else for us to do (except write the server data into the
// entry, which is handled by `fetchSegmentOnCacheMiss`).
}
/**
 * Walks the RouteTree (including the head metadata) and collects any segments
 * that are still Empty into a Map, upgrading them to Pending. These entries
 * will be fulfilled by the inlined prefetch response.
 */ function collectInlinedEntries(now, route) {
    var entries = new Map();
    collectInlinedEntriesImpl(now, route.tree, entries);
    // Also collect the head/metadata entry.
    var headEntry = (0, _cache.readOrCreateSegmentCacheEntry)(now, _types.FetchStrategy.PPR, route.metadata);
    if (headEntry.status === _cache.EntryStatus.Empty) {
        entries.set(route.metadata.requestKey, (0, _cache.upgradeToPendingSegment)(headEntry, _types.FetchStrategy.PPR));
    }
    return entries;
}
function collectInlinedEntriesImpl(now, tree, entries) {
    var entry = (0, _cache.readOrCreateSegmentCacheEntry)(now, _types.FetchStrategy.PPR, tree);
    if (entry.status === _cache.EntryStatus.Empty) {
        entries.set(tree.requestKey, (0, _cache.upgradeToPendingSegment)(entry, _types.FetchStrategy.PPR));
    }
    if (tree.slots !== null) {
        for(var parallelRouteKey in tree.slots){
            collectInlinedEntriesImpl(now, tree.slots[parallelRouteKey], entries);
        }
    }
}
function pingPPRSegmentRevalidation(now, route, routeKey, tree) {
    var revalidatingSegment = (0, _cache.readOrCreateRevalidatingSegmentEntry)(now, _types.FetchStrategy.PPR, tree);
    switch(revalidatingSegment.status){
        case _cache.EntryStatus.Empty:
            // Spawn a prefetch request. The fetch function handles upserting
            // the entry at the correct fulfilled vary path upon completion.
            spawnPrefetchSubtask((0, _cache.fetchSegmentOnCacheMiss)(route, (0, _cache.upgradeToPendingSegment)(revalidatingSegment, _types.FetchStrategy.PPR), routeKey, tree));
            break;
        case _cache.EntryStatus.Pending:
            break;
        case _cache.EntryStatus.Fulfilled:
        case _cache.EntryStatus.Rejected:
            break;
        default:
            revalidatingSegment;
    }
}
function pingFullSegmentRevalidation(now, tree, fetchStrategy) {
    var revalidatingSegment = (0, _cache.readOrCreateRevalidatingSegmentEntry)(now, fetchStrategy, tree);
    if (revalidatingSegment.status === _cache.EntryStatus.Empty) {
        // During a Full/PPRRuntime prefetch, a single dynamic request is made for all the
        // segments that we need. So we don't initiate a request here directly. By
        // returning a pending entry from this function, it signals to the caller
        // that this segment should be included in the request that's sent to
        // the server.
        var pendingSegment = (0, _cache.upgradeToPendingSegment)(revalidatingSegment, fetchStrategy);
        // The upsert is handled by fulfillEntrySpawnedByRuntimePrefetch
        // when the dynamic prefetch response is written into the cache.
        return pendingSegment;
    } else {
        // There's already a revalidation in progress.
        var nonEmptyRevalidatingSegment = revalidatingSegment;
        if ((0, _cache.canNewFetchStrategyProvideMoreContent)(nonEmptyRevalidatingSegment.fetchStrategy, fetchStrategy)) {
            // The existing revalidation was fetched using a less specific strategy.
            // Reset it and start a new revalidation.
            var emptySegment = (0, _cache.overwriteRevalidatingSegmentCacheEntry)(now, fetchStrategy, tree);
            var pendingSegment1 = (0, _cache.upgradeToPendingSegment)(emptySegment, fetchStrategy);
            // The upsert is handled by fulfillEntrySpawnedByRuntimePrefetch
            // when the dynamic prefetch response is written into the cache.
            return pendingSegment1;
        }
        switch(nonEmptyRevalidatingSegment.status){
            case _cache.EntryStatus.Pending:
                // There's already an in-progress prefetch that includes this segment.
                return null;
            case _cache.EntryStatus.Fulfilled:
            case _cache.EntryStatus.Rejected:
                // A previous revalidation attempt finished, but we chose not to replace
                // the existing entry in the cache. Don't try again until or unless the
                // revalidation entry expires.
                return null;
            default:
                nonEmptyRevalidatingSegment;
                return null;
        }
    }
}
function doesCurrentSegmentMatchCachedSegment(route, currentSegment, cachedSegment) {
    if (cachedSegment === _segment.PAGE_SEGMENT_KEY) {
        // In the FlightRouterState stored by the router, the page segment has the
        // rendered search params appended to the name of the segment. In the
        // prefetch cache, however, this is stored separately. So, when comparing
        // the router's current FlightRouterState to the cached FlightRouterState,
        // we need to make sure we compare both parts of the segment.
        // TODO: This is not modeled clearly. We use the same type,
        // FlightRouterState, for both the CacheNode tree _and_ the prefetch cache
        // _and_ the server response format, when conceptually those are three
        // different things and treated in different ways. We should encode more of
        // this information into the type design so mistakes are less likely.
        return currentSegment === (0, _segment.addSearchParamsIfPageSegment)(_segment.PAGE_SEGMENT_KEY, Object.fromEntries(new URLSearchParams(route.renderedSearch)));
    }
    // Non-page segments are compared using the same function as the server
    return (0, _matchsegments.matchSegment)(cachedSegment, currentSegment);
}
// -----------------------------------------------------------------------------
// The remainder of the module is a MinHeap implementation. Try not to put any
// logic below here unless it's related to the heap algorithm. We can extract
// this to a separate module if/when we need multiple kinds of heaps.
// -----------------------------------------------------------------------------
function compareQueuePriority(a, b) {
    // Since the queue is a MinHeap, this should return a positive number if b is
    // higher priority than a, and a negative number if a is higher priority
    // than b.
    // `priority` is an integer, where higher numbers are higher priority.
    var priorityDiff = b.priority - a.priority;
    if (priorityDiff !== 0) {
        return priorityDiff;
    }
    // If the priority is the same, check which phase the prefetch is in — is it
    // prefetching the route tree, or the segments? Route trees are prioritized.
    var phaseDiff = b.phase - a.phase;
    if (phaseDiff !== 0) {
        return phaseDiff;
    }
    // Finally, check the insertion order. `sortId` is an incrementing counter
    // assigned to prefetches. We want to process the newest prefetches first.
    return b.sortId - a.sortId;
}
function heapPush(heap, node) {
    var index = heap.length;
    heap.push(node);
    node._heapIndex = index;
    heapSiftUp(heap, node, index);
}
function heapPeek(heap) {
    return heap.length === 0 ? null : heap[0];
}
function heapPop(heap) {
    if (heap.length === 0) {
        return null;
    }
    var first = heap[0];
    first._heapIndex = -1;
    var last = heap.pop();
    if (last !== first) {
        heap[0] = last;
        last._heapIndex = 0;
        heapSiftDown(heap, last, 0);
    }
    return first;
}
function heapDelete(heap, node) {
    var index = node._heapIndex;
    if (index !== -1) {
        node._heapIndex = -1;
        if (heap.length !== 0) {
            var last = heap.pop();
            if (last !== node) {
                heap[index] = last;
                last._heapIndex = index;
                heapSiftDown(heap, last, index);
            }
        }
    }
}
function heapResift(heap, node) {
    var index = node._heapIndex;
    if (index !== -1) {
        if (index === 0) {
            heapSiftDown(heap, node, 0);
        } else {
            var parentIndex = index - 1 >>> 1;
            var parent = heap[parentIndex];
            if (compareQueuePriority(parent, node) > 0) {
                // The parent is larger. Sift up.
                heapSiftUp(heap, node, index);
            } else {
                // The parent is smaller (or equal). Sift down.
                heapSiftDown(heap, node, index);
            }
        }
    }
}
function heapSiftUp(heap, node, i) {
    var index = i;
    while(index > 0){
        var parentIndex = index - 1 >>> 1;
        var parent = heap[parentIndex];
        if (compareQueuePriority(parent, node) > 0) {
            // The parent is larger. Swap positions.
            heap[parentIndex] = node;
            node._heapIndex = parentIndex;
            heap[index] = parent;
            parent._heapIndex = index;
            index = parentIndex;
        } else {
            // The parent is smaller. Exit.
            return;
        }
    }
}
function heapSiftDown(heap, node, i) {
    var index = i;
    var length = heap.length;
    var halfLength = length >>> 1;
    while(index < halfLength){
        var leftIndex = (index + 1) * 2 - 1;
        var left = heap[leftIndex];
        var rightIndex = leftIndex + 1;
        var right = heap[rightIndex];
        // If the left or right node is smaller, swap with the smaller of those.
        if (compareQueuePriority(left, node) < 0) {
            if (rightIndex < length && compareQueuePriority(right, left) < 0) {
                heap[index] = right;
                right._heapIndex = index;
                heap[rightIndex] = node;
                node._heapIndex = rightIndex;
                index = rightIndex;
            } else {
                heap[index] = left;
                left._heapIndex = index;
                heap[leftIndex] = node;
                node._heapIndex = leftIndex;
                index = leftIndex;
            }
        } else if (rightIndex < length && compareQueuePriority(right, node) < 0) {
            heap[index] = right;
            right._heapIndex = index;
            heap[rightIndex] = node;
            node._heapIndex = rightIndex;
            index = rightIndex;
        } else {
            // Neither child is smaller. Exit.
            return;
        }
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/vary-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    appendLayoutVaryPath: null,
    clonePageVaryPathWithNewSearchParams: null,
    finalizeLayoutVaryPath: null,
    finalizeMetadataVaryPath: null,
    finalizePageVaryPath: null,
    getFulfilledRouteVaryPath: null,
    getFulfilledSegmentVaryPath: null,
    getPartialLayoutVaryPath: null,
    getPartialPageVaryPath: null,
    getRenderedSearchFromVaryPath: null,
    getRouteVaryPath: null,
    getSegmentVaryPathForRequest: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    appendLayoutVaryPath: function appendLayoutVaryPath1() {
        return appendLayoutVaryPath;
    },
    clonePageVaryPathWithNewSearchParams: function clonePageVaryPathWithNewSearchParams1() {
        return clonePageVaryPathWithNewSearchParams;
    },
    finalizeLayoutVaryPath: function finalizeLayoutVaryPath1() {
        return finalizeLayoutVaryPath;
    },
    finalizeMetadataVaryPath: function finalizeMetadataVaryPath1() {
        return finalizeMetadataVaryPath;
    },
    finalizePageVaryPath: function finalizePageVaryPath1() {
        return finalizePageVaryPath;
    },
    getFulfilledRouteVaryPath: function getFulfilledRouteVaryPath1() {
        return getFulfilledRouteVaryPath;
    },
    getFulfilledSegmentVaryPath: function getFulfilledSegmentVaryPath1() {
        return getFulfilledSegmentVaryPath;
    },
    getPartialLayoutVaryPath: function getPartialLayoutVaryPath1() {
        return getPartialLayoutVaryPath;
    },
    getPartialPageVaryPath: function getPartialPageVaryPath1() {
        return getPartialPageVaryPath;
    },
    getRenderedSearchFromVaryPath: function getRenderedSearchFromVaryPath1() {
        return getRenderedSearchFromVaryPath;
    },
    getRouteVaryPath: function getRouteVaryPath1() {
        return getRouteVaryPath;
    },
    getSegmentVaryPathForRequest: function getSegmentVaryPathForRequest1() {
        return getSegmentVaryPathForRequest;
    }
});
var _types = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
var _cachemap = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache-map.js [app-client] (ecmascript)");
var _segmentvalueencoding = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/segment-cache/segment-value-encoding.js [app-client] (ecmascript)");
function getRouteVaryPath(pathname, search, nextUrl) {
    // requestKey -> searchParams -> nextUrl
    var varyPath = {
        id: null,
        value: pathname,
        parent: {
            id: '?',
            value: search,
            parent: {
                id: null,
                value: nextUrl,
                parent: null
            }
        }
    };
    return varyPath;
}
function getFulfilledRouteVaryPath(pathname, search, nextUrl, couldBeIntercepted) {
    // This is called when a route's data is fulfilled. The cache entry will be
    // re-keyed based on which inputs the response varies by.
    // requestKey -> searchParams -> nextUrl
    var varyPath = {
        id: null,
        value: pathname,
        parent: {
            id: '?',
            value: search,
            parent: {
                id: null,
                value: couldBeIntercepted ? nextUrl : _cachemap.Fallback,
                parent: null
            }
        }
    };
    return varyPath;
}
function appendLayoutVaryPath(parentPath, cacheKey, paramName) {
    var varyPathPart = {
        id: paramName,
        value: cacheKey,
        parent: parentPath
    };
    return varyPathPart;
}
function finalizeLayoutVaryPath(requestKey, varyPath) {
    var layoutVaryPath = {
        id: null,
        value: requestKey,
        parent: varyPath
    };
    return layoutVaryPath;
}
function getPartialLayoutVaryPath(finalizedVaryPath) {
    // This is the inverse of finalizeLayoutVaryPath.
    return finalizedVaryPath.parent;
}
function finalizePageVaryPath(requestKey, renderedSearch, varyPath) {
    // Unlike layouts, a page segment's vary path also includes the search string.
    // requestKey -> searchParams -> pathParams
    var pageVaryPath = {
        id: null,
        value: requestKey,
        parent: {
            id: '?',
            value: renderedSearch,
            parent: varyPath
        }
    };
    return pageVaryPath;
}
function getPartialPageVaryPath(finalizedVaryPath) {
    // This is the inverse of finalizePageVaryPath.
    return finalizedVaryPath.parent.parent;
}
function finalizeMetadataVaryPath(pageRequestKey, renderedSearch, varyPath) {
    // The metadata "segment" is not a real segment because it doesn't exist in
    // the normal structure of the route tree, but in terms of caching, it
    // behaves like a page segment because it varies by all the same params as
    // a page.
    //
    // To keep the protocol for querying the server simple, the request key for
    // the metadata does not include any path information. It's unnecessary from
    // the server's perspective, because unlike page segments, there's only one
    // metadata response per URL, i.e. there's no need to distinguish multiple
    // parallel pages.
    //
    // However, this means the metadata request key is insufficient for
    // caching the the metadata in the client cache, because on the client we
    // use the request key to distinguish the metadata entry from all other
    // page's metadata entries.
    //
    // So instead we create a simulated request key based on the page segment.
    // Conceptually this is equivalent to the request key the server would have
    // assigned the metadata segment if it treated it as part of the actual
    // route structure.
    // If there are multiple parallel pages, we use whichever is the first one.
    // This is fine because the only difference between request keys for
    // different parallel pages are things like route groups and parallel
    // route slots. As long as it's always the same one, it doesn't matter.
    var pageVaryPath = {
        id: null,
        // Append the actual metadata request key to the page request key. Note
        // that we're not using a separate vary path part; it's unnecessary because
        // these are not conceptually separate inputs.
        value: pageRequestKey + _segmentvalueencoding.HEAD_REQUEST_KEY,
        parent: {
            id: '?',
            value: renderedSearch,
            parent: varyPath
        }
    };
    return pageVaryPath;
}
function getSegmentVaryPathForRequest(fetchStrategy, tree) {
    // This is used for storing pending requests in the cache. We want to choose
    // the most generic vary path based on the strategy used to fetch it, i.e.
    // static/PPR versus runtime prefetching, so that it can be reused as much
    // as possible.
    //
    // We may be able to re-key the response to something even more generic once
    // we receive it — for example, if the server tells us that the response
    // doesn't vary on a particular param — but even before we send the request,
    // we know some params are reusable based on the fetch strategy alone. For
    // example, a static prefetch will never vary on search params.
    //
    // The original vary path with all the params filled in is stored on the
    // route tree object. We will clone this one to create a new vary path
    // where certain params are replaced with Fallback.
    //
    // This result of this function is not stored anywhere. It's only used to
    // access the cache a single time.
    //
    // TODO: Rather than create a new list object just to access the cache, the
    // plan is to add the concept of a "vary mask". This will represent all the
    // params that can be treated as Fallback. (Or perhaps the inverse.)
    var originalVaryPath = tree.varyPath;
    // Only page segments (and the special "metadata" segment, which is treated
    // like a page segment for the purposes of caching) may contain search
    // params. There's no reason to include them in the vary path otherwise.
    if (tree.isPage) {
        // Only a runtime prefetch will include search params in the vary path.
        // Static prefetches never include search params, so they can be reused
        // across all possible search param values.
        var doesVaryOnSearchParams = fetchStrategy === _types.FetchStrategy.Full || fetchStrategy === _types.FetchStrategy.PPRRuntime;
        if (!doesVaryOnSearchParams) {
            // The response from the the server will not vary on search params. Clone
            // the end of the original vary path to replace the search params
            // with Fallback.
            //
            // requestKey -> searchParams -> pathParams
            //               ^ This part gets replaced with Fallback
            var searchParamsVaryPath = originalVaryPath.parent;
            var pathParamsVaryPath = searchParamsVaryPath.parent;
            var patchedVaryPath = {
                id: null,
                value: originalVaryPath.value,
                parent: {
                    id: '?',
                    value: _cachemap.Fallback,
                    parent: pathParamsVaryPath
                }
            };
            return patchedVaryPath;
        }
    }
    // The request does vary on search params. We don't need to modify anything.
    return originalVaryPath;
}
function clonePageVaryPathWithNewSearchParams(originalVaryPath, newSearch) {
    // requestKey -> searchParams -> pathParams
    //               ^ This part gets replaced with newSearch
    var searchParamsVaryPath = originalVaryPath.parent;
    var clonedVaryPath = {
        id: null,
        value: originalVaryPath.value,
        parent: {
            id: '?',
            value: newSearch,
            parent: searchParamsVaryPath.parent
        }
    };
    return clonedVaryPath;
}
function getRenderedSearchFromVaryPath(varyPath) {
    var searchParams = varyPath.parent.value;
    return typeof searchParams === 'string' ? searchParams : null;
}
function getFulfilledSegmentVaryPath(original, varyParams) {
    // Re-keys a segment's vary path based on which params the segment actually
    // depends on. Params that are NOT in the varyParams set are replaced with
    // Fallback, allowing the cache entry to be reused across different values of
    // those params.
    // This is called when a segment is fulfilled with data from the server. The
    // varyParams set comes from the server and indicates which params were
    // accessed during rendering.
    var clone = {
        id: original.id,
        // If the id is null, this node is not a param (e.g., it's a request key).
        // If the id is in the varyParams set, keep the original value.
        // Otherwise, replace with Fallback to make it reusable.
        value: original.id === null || varyParams.has(original.id) ? original.value : _cachemap.Fallback,
        parent: original.parent === null ? null : getFulfilledSegmentVaryPath(original.parent, varyParams)
    };
    return clone;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/normalize-trailing-slash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizePathTrailingSlash", {
    enumerable: true,
    get: function get() {
        return normalizePathTrailingSlash;
    }
});
var _removetrailingslash = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-client] (ecmascript)");
var _parsepath = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-client] (ecmascript)");
var normalizePathTrailingSlash = function normalizePathTrailingSlash(path) {
    if (!path.startsWith('/') || ("TURBOPACK compile-time value", void 0)) {
        return path;
    }
    var _ref = (0, _parsepath.parsePath)(path), pathname = _ref.pathname, query = _ref.query, hash = _ref.hash;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return "".concat((0, _removetrailingslash.removeTrailingSlash)(pathname)).concat(query).concat(hash);
};
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addBasePath", {
    enumerable: true,
    get: function get() {
        return addBasePath;
    }
});
var _addpathprefix = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [app-client] (ecmascript)");
var _normalizetrailingslash = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/normalize-trailing-slash.js [app-client] (ecmascript)");
var basePath = ("TURBOPACK compile-time value", "") || '';
function addBasePath(path, required) {
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createPrefetchURL: null,
    isExternalURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createPrefetchURL: function createPrefetchURL1() {
        return createPrefetchURL;
    },
    isExternalURL: function isExternalURL1() {
        return isExternalURL;
    }
});
var _isbot = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/is-bot.js [app-client] (ecmascript)");
var _addbasepath = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
function isExternalURL(url) {
    return url.origin !== window.location.origin;
}
function createPrefetchURL(href) {
    // Don't prefetch for bots as they don't navigate.
    if ((0, _isbot.isBot)(window.navigator.userAgent)) {
        return null;
    }
    var url;
    try {
        url = new URL((0, _addbasepath.addBasePath)(href), window.location.href);
    } catch (_) {
        // TODO: Does this need to throw or can we just console.error instead? Does
        // anyone rely on this throwing? (Seems unlikely.)
        throw Object.defineProperty(new Error("Cannot prefetch '".concat(href, "' because it cannot be converted to a URL.")), "__NEXT_ERROR_CODE", {
            value: "E234",
            enumerable: false,
            configurable: true
        });
    }
    // Don't prefetch during development (improves compilation performance)
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    //TURBOPACK unreachable
    ;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    IDLE_LINK_STATUS: null,
    PENDING_LINK_STATUS: null,
    getLinkForCurrentNavigation: null,
    mountFormInstance: null,
    mountLinkInstance: null,
    onLinkVisibilityChanged: null,
    onNavigationIntent: null,
    pingVisibleLinks: null,
    setLinkForCurrentNavigation: null,
    unmountLinkForCurrentNavigation: null,
    unmountPrefetchableInstance: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    IDLE_LINK_STATUS: function IDLE_LINK_STATUS1() {
        return IDLE_LINK_STATUS;
    },
    PENDING_LINK_STATUS: function PENDING_LINK_STATUS1() {
        return PENDING_LINK_STATUS;
    },
    getLinkForCurrentNavigation: function getLinkForCurrentNavigation1() {
        return getLinkForCurrentNavigation;
    },
    mountFormInstance: function mountFormInstance1() {
        return mountFormInstance;
    },
    mountLinkInstance: function mountLinkInstance1() {
        return mountLinkInstance;
    },
    onLinkVisibilityChanged: function onLinkVisibilityChanged1() {
        return onLinkVisibilityChanged;
    },
    onNavigationIntent: function onNavigationIntent1() {
        return onNavigationIntent;
    },
    pingVisibleLinks: function pingVisibleLinks1() {
        return pingVisibleLinks;
    },
    setLinkForCurrentNavigation: function setLinkForCurrentNavigation1() {
        return setLinkForCurrentNavigation;
    },
    unmountLinkForCurrentNavigation: function unmountLinkForCurrentNavigation1() {
        return unmountLinkForCurrentNavigation;
    },
    unmountPrefetchableInstance: function unmountPrefetchableInstance1() {
        return unmountPrefetchableInstance;
    }
});
var _types = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
var _cachekey = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-client] (ecmascript)");
var _scheduler = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-client] (ecmascript)");
var _react = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// Tracks the most recently navigated link instance. When null, indicates
// the current navigation was not initiated by a link click.
var linkForMostRecentNavigation = null;
var PENDING_LINK_STATUS = {
    pending: true
};
var IDLE_LINK_STATUS = {
    pending: false
};
function setLinkForCurrentNavigation(link) {
    (0, _react.startTransition)(function() {
        linkForMostRecentNavigation === null || linkForMostRecentNavigation === void 0 ? void 0 : linkForMostRecentNavigation.setOptimisticLinkStatus(IDLE_LINK_STATUS);
        link === null || link === void 0 ? void 0 : link.setOptimisticLinkStatus(PENDING_LINK_STATUS);
        linkForMostRecentNavigation = link;
    });
}
function unmountLinkForCurrentNavigation(link) {
    if (linkForMostRecentNavigation === link) {
        linkForMostRecentNavigation = null;
    }
}
function getLinkForCurrentNavigation() {
    return linkForMostRecentNavigation;
}
// Use a WeakMap to associate a Link instance with its DOM element. This is
// used by the IntersectionObserver to track the link's visibility.
var prefetchable = typeof WeakMap === 'function' ? new WeakMap() : new Map();
// A Set of the currently visible links. We re-prefetch visible links after a
// cache invalidation, or when the current URL changes. It's a separate data
// structure from the WeakMap above because only the visible links need to
// be enumerated.
var prefetchableAndVisible = new Set();
// A single IntersectionObserver instance shared by all <Link> components.
var observer = typeof IntersectionObserver === 'function' ? new IntersectionObserver(handleIntersect, {
    rootMargin: '200px'
}) : null;
function observeVisibility(element, instance) {
    var existingInstance = prefetchable.get(element);
    if (existingInstance !== undefined) {
        // This shouldn't happen because each <Link> component should have its own
        // anchor tag instance, but it's defensive coding to avoid a memory leak in
        // case there's a logical error somewhere else.
        unmountPrefetchableInstance(element);
    }
    // Only track prefetchable links that have a valid prefetch URL
    prefetchable.set(element, instance);
    if (observer !== null) {
        observer.observe(element);
    }
}
function coercePrefetchableUrl(href) {
    if (typeof window !== 'undefined') {
        var createPrefetchURL = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-utils.js [app-client] (ecmascript)").createPrefetchURL;
        try {
            return createPrefetchURL(href);
        } catch (unused) {
            // createPrefetchURL sometimes throws an error if an invalid URL is
            // provided, though I'm not sure if it's actually necessary.
            // TODO: Consider removing the throw from the inner function, or change it
            // to reportError. Or maybe the error isn't even necessary for automatic
            // prefetches, just navigations.
            var reportErrorFn = typeof reportError === 'function' ? reportError : console.error;
            reportErrorFn("Cannot prefetch '".concat(href, "' because it cannot be converted to a URL."));
            return null;
        }
    } else {
        return null;
    }
}
function mountLinkInstance(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus) {
    if (prefetchEnabled) {
        var prefetchURL = coercePrefetchableUrl(href);
        if (prefetchURL !== null) {
            var instance = {
                router: router,
                fetchStrategy: fetchStrategy,
                isVisible: false,
                prefetchTask: null,
                prefetchHref: prefetchURL.href,
                setOptimisticLinkStatus: setOptimisticLinkStatus
            };
            // We only observe the link's visibility if it's prefetchable. For
            // example, this excludes links to external URLs.
            observeVisibility(element, instance);
            return instance;
        }
    }
    // If the link is not prefetchable, we still create an instance so we can
    // track its optimistic state (i.e. useLinkStatus).
    var instance1 = {
        router: router,
        fetchStrategy: fetchStrategy,
        isVisible: false,
        prefetchTask: null,
        prefetchHref: null,
        setOptimisticLinkStatus: setOptimisticLinkStatus
    };
    return instance1;
}
function mountFormInstance(element, href, router, fetchStrategy) {
    var prefetchURL = coercePrefetchableUrl(href);
    if (prefetchURL === null) {
        // This href is not prefetchable, so we don't track it.
        // TODO: We currently observe/unobserve a form every time its href changes.
        // For Links, this isn't a big deal because the href doesn't usually change,
        // but for forms it's extremely common. We should optimize this.
        return;
    }
    var instance = {
        router: router,
        fetchStrategy: fetchStrategy,
        isVisible: false,
        prefetchTask: null,
        prefetchHref: prefetchURL.href,
        setOptimisticLinkStatus: null
    };
    observeVisibility(element, instance);
}
function unmountPrefetchableInstance(element) {
    var instance = prefetchable.get(element);
    if (instance !== undefined) {
        prefetchable.delete(element);
        prefetchableAndVisible.delete(instance);
        var prefetchTask = instance.prefetchTask;
        if (prefetchTask !== null) {
            (0, _scheduler.cancelPrefetchTask)(prefetchTask);
        }
    }
    if (observer !== null) {
        observer.unobserve(element);
    }
}
function handleIntersect(entries) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var entry = _step.value;
            // Some extremely old browsers or polyfills don't reliably support
            // isIntersecting so we check intersectionRatio instead. (Do we care? Not
            // really. But whatever this is fine.)
            var isVisible = entry.intersectionRatio > 0;
            onLinkVisibilityChanged(entry.target, isVisible);
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
function onLinkVisibilityChanged(element, isVisible) {
    if ("TURBOPACK compile-time truthy", 1) {
        // Prefetching on viewport is disabled in development for performance
        // reasons, because it requires compiling the target page.
        // TODO: Investigate re-enabling this.
        return;
    }
    //TURBOPACK unreachable
    ;
    var instance;
}
function onNavigationIntent(element, unstable_upgradeToDynamicPrefetch) {
    var instance = prefetchable.get(element);
    if (instance === undefined) {
        return;
    }
    // Prefetch the link on hover/touchstart.
    if (instance !== undefined) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        rescheduleLinkPrefetch(instance, _types.PrefetchPriority.Intent);
    }
}
function rescheduleLinkPrefetch(instance, priority) {
    // Ensures that app-router-instance is not compiled in the server bundle
    if (typeof window !== 'undefined') {
        var existingPrefetchTask = instance.prefetchTask;
        if (!instance.isVisible) {
            // Cancel any in-progress prefetch task. (If it already finished then this
            // is a no-op.)
            if (existingPrefetchTask !== null) {
                (0, _scheduler.cancelPrefetchTask)(existingPrefetchTask);
            }
            // We don't need to reset the prefetchTask to null upon cancellation; an
            // old task object can be rescheduled with reschedulePrefetchTask. This is a
            // micro-optimization but also makes the code simpler (don't need to
            // worry about whether an old task object is stale).
            return;
        }
        var getCurrentAppRouterState = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)").getCurrentAppRouterState;
        var appRouterState = getCurrentAppRouterState();
        if (appRouterState !== null) {
            var treeAtTimeOfPrefetch = appRouterState.tree;
            if (existingPrefetchTask === null) {
                // Initiate a prefetch task.
                var nextUrl = appRouterState.nextUrl;
                var cacheKey = (0, _cachekey.createCacheKey)(instance.prefetchHref, nextUrl);
                instance.prefetchTask = (0, _scheduler.schedulePrefetchTask)(cacheKey, treeAtTimeOfPrefetch, instance.fetchStrategy, priority, null);
            } else {
                // We already have an old task object that we can reschedule. This is
                // effectively the same as canceling the old task and creating a new one.
                (0, _scheduler.reschedulePrefetchTask)(existingPrefetchTask, treeAtTimeOfPrefetch, instance.fetchStrategy, priority);
            }
        }
    }
}
function pingVisibleLinks(nextUrl, tree) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        // For each currently visible link, cancel the existing prefetch task (if it
        // exists) and schedule a new one. This is effectively the same as if all the
        // visible links left and then re-entered the viewport.
        //
        // This is called when the Next-Url or the base tree changes, since those
        // may affect the result of a prefetch task. It's also called after a
        // cache invalidation.
        for(var _iterator = prefetchableAndVisible[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var instance = _step.value;
            var task = instance.prefetchTask;
            if (task !== null && !(0, _scheduler.isPrefetchTaskDirty)(task, nextUrl, tree)) {
                continue;
            }
            // Something changed. Cancel the existing prefetch task and schedule a
            // new one.
            if (task !== null) {
                (0, _scheduler.cancelPrefetchTask)(task);
            }
            var cacheKey = (0, _cachekey.createCacheKey)(instance.prefetchHref, nextUrl);
            instance.prefetchTask = (0, _scheduler.schedulePrefetchTask)(cacheKey, tree, instance.fetchStrategy, _types.PrefetchPriority.Default, null);
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
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/bfcache.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    UnknownDynamicStaleTime: null,
    computeDynamicStaleAt: null,
    invalidateBfCache: null,
    readFromBFCache: null,
    readFromBFCacheDuringRegularNavigation: null,
    updateBFCacheEntryStaleAt: null,
    writeHeadToBFCache: null,
    writeToBFCache: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    UnknownDynamicStaleTime: function UnknownDynamicStaleTime1() {
        return UnknownDynamicStaleTime;
    },
    computeDynamicStaleAt: function computeDynamicStaleAt1() {
        return computeDynamicStaleAt;
    },
    invalidateBfCache: function invalidateBfCache1() {
        return invalidateBfCache;
    },
    readFromBFCache: function readFromBFCache1() {
        return readFromBFCache;
    },
    readFromBFCacheDuringRegularNavigation: function readFromBFCacheDuringRegularNavigation1() {
        return readFromBFCacheDuringRegularNavigation;
    },
    updateBFCacheEntryStaleAt: function updateBFCacheEntryStaleAt1() {
        return updateBFCacheEntryStaleAt;
    },
    writeHeadToBFCache: function writeHeadToBFCache1() {
        return writeHeadToBFCache;
    },
    writeToBFCache: function writeToBFCache1() {
        return writeToBFCache;
    }
});
var _navigatereducer = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
var _cachemap = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache-map.js [app-client] (ecmascript)");
var UnknownDynamicStaleTime = -1;
function computeDynamicStaleAt(now, dynamicStaleTimeSeconds) {
    return dynamicStaleTimeSeconds !== UnknownDynamicStaleTime ? now + dynamicStaleTimeSeconds * 1000 : now + _navigatereducer.DYNAMIC_STALETIME_MS;
}
var bfcacheMap = (0, _cachemap.createCacheMap)();
var currentBfCacheVersion = 0;
function invalidateBfCache() {
    if (typeof window === 'undefined') {
        return;
    }
    currentBfCacheVersion++;
}
function writeToBFCache(now, varyPath, rsc, prefetchRsc, head, prefetchHead, dynamicStaleAt) {
    if (typeof window === 'undefined') {
        return;
    }
    var entry = {
        rsc: rsc,
        prefetchRsc: prefetchRsc,
        // TODO: These fields will be removed from both BFCacheEntry and
        // SegmentCacheEntry. The head has its own separate cache entry.
        head: head,
        prefetchHead: prefetchHead,
        ref: null,
        // TODO: This is just a heuristic. Getting the actual size of the segment
        // isn't feasible because it's part of a larger streaming response. The
        // LRU will still evict it, we just won't have a fully accurate total
        // LRU size. However, we'll probably remove the size tracking from the LRU
        // entirely and use memory pressure events instead.
        size: 100,
        navigatedAt: now,
        // A back/forward navigation will disregard the stale time. This field is
        // only relevant when staleTimes.dynamic is enabled or unstable_dynamicStaleTime
        // is exported by a page.
        staleAt: dynamicStaleAt,
        version: currentBfCacheVersion
    };
    var isRevalidation = false;
    (0, _cachemap.setInCacheMap)(bfcacheMap, varyPath, entry, isRevalidation);
}
function writeHeadToBFCache(now, varyPath, head, prefetchHead, dynamicStaleAt) {
    // Read the special "segment" that represents the head data.
    writeToBFCache(now, varyPath, head, prefetchHead, null, null, dynamicStaleAt);
}
function updateBFCacheEntryStaleAt(varyPath, newStaleAt) {
    if (typeof window === 'undefined') {
        return;
    }
    var isRevalidation = false;
    // Read with staleness bypass (-1) so we can update even stale entries
    var entry = (0, _cachemap.getFromCacheMap)(-1, currentBfCacheVersion, bfcacheMap, varyPath, isRevalidation);
    if (entry !== null) {
        entry.staleAt = newStaleAt;
    }
}
function readFromBFCache(varyPath) {
    if (typeof window === 'undefined') {
        return null;
    }
    var isRevalidation = false;
    return (0, _cachemap.getFromCacheMap)(// might be. Pass -1 instead of the actual current time to bypass
    // staleness checks.
    -1, currentBfCacheVersion, bfcacheMap, varyPath, isRevalidation);
}
function readFromBFCacheDuringRegularNavigation(now, varyPath) {
    if (typeof window === 'undefined') {
        return null;
    }
    var isRevalidation = false;
    return (0, _cachemap.getFromCacheMap)(now, currentBfCacheVersion, bfcacheMap, varyPath, isRevalidation);
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/optimistic-routes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Optimistic Routing (Known Routes)
 *
 * This module enables the client to predict route structure for URLs that
 * haven't been prefetched yet, based on previously learned route patterns.
 * When successful, this allows skipping the route tree prefetch request
 * entirely.
 *
 * The core idea is that many URLs map to the same route structure. For example,
 * /blog/post-1 and /blog/post-2 both resolve to /blog/[slug]. Once we've
 * prefetched one, we can predict the structure of the other.
 *
 * However, we can't always make this prediction. Static siblings (like
 * /blog/featured alongside /blog/[slug]) have different route structures.
 * When we learn a dynamic route, we also learn its static siblings so we
 * know when NOT to apply the prediction.
 *
 * Main entry points:
 *
 * 1. discoverKnownRoute: Called after receiving a route tree from the server.
 *    Traverses the route tree, compares URL parts to segments, and populates
 *    the known route tree if they match. Routes are always inserted into the
 *    cache.
 *
 * 2. matchKnownRoute: Called when looking up a route with no cache entry.
 *    Matches the candidate URL against learned patterns. Returns a synthetic
 *    cache entry if successful, or null to fall back to server resolution.
 *
 * Rewrite detection happens during traversal: if a URL path part doesn't match
 * the corresponding route segment, we stop populating the known route tree
 * (since the mapping is incorrect) but still insert the route into the cache.
 *
 * The known route tree is append-only with no eviction. Route patterns are
 * derived from the filesystem, so they don't become stale within a session.
 * Cache invalidation on deploy clears everything anyway.
 *
 * Current limitations (deopt to server resolution):
 * - Rewrites: Detected during traversal (tree not populated, but route cached)
 * - Intercepted routes: The route tree varies by referrer (Next-Url header),
 *   so we can't predict the correct structure from the URL alone. Patterns are
 *   still stored during discovery (so the trie stays populated for non-
 *   intercepted siblings), but matching bails out when the pattern is marked
 *   as interceptable.
 */ var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    discoverKnownRoute: null,
    matchKnownRoute: null,
    resetKnownRoutes: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    discoverKnownRoute: function discoverKnownRoute1() {
        return discoverKnownRoute;
    },
    matchKnownRoute: function matchKnownRoute1() {
        return matchKnownRoute;
    },
    resetKnownRoutes: function resetKnownRoutes1() {
        return resetKnownRoutes;
    }
});
var _cache = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)");
var _routeparams = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
var _varypath = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/vary-path.js [app-client] (ecmascript)");
function createEmptyPart() {
    return {
        staticChildren: null,
        dynamicChild: null,
        dynamicChildParamName: null,
        dynamicChildParamType: null,
        pattern: null
    };
}
// The root of the known route tree.
var knownRouteTreeRoot = createEmptyPart();
function discoverKnownRoute(now, pathname, nextUrl, pendingEntry, routeTree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching, hasDynamicRewrite) {
    var tree = routeTree;
    var pathnameParts = pathname.split('/').filter(function(p) {
        return p !== '';
    });
    var firstPart = pathnameParts.length > 0 ? pathnameParts[0] : null;
    var remainingParts = pathnameParts.length > 0 ? pathnameParts.slice(1) : [];
    if (pendingEntry !== null) {
        // Fulfill the pending entry first
        var fulfilledEntry = (0, _cache.fulfillRouteCacheEntry)(now, pendingEntry, tree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching);
        if (hasDynamicRewrite) {
            fulfilledEntry.hasDynamicRewrite = true;
        }
        // Populate the known route tree (handles rewrite detection internally).
        // The entry is already in the cache; this just stores it as a pattern
        // if the URL matches the route structure.
        discoverKnownRoutePart(knownRouteTreeRoot, tree, firstPart, remainingParts, fulfilledEntry, now, pathname, nextUrl, tree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching, hasDynamicRewrite);
        return fulfilledEntry;
    }
    // No pending entry - discoverKnownRoutePart will create one and insert it
    // into the cache, or return an existing pattern if one exists.
    return discoverKnownRoutePart(knownRouteTreeRoot, tree, firstPart, remainingParts, null, now, pathname, nextUrl, tree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching, hasDynamicRewrite);
}
/**
 * Gets or creates the dynamic child node for a KnownRoutePart.
 * A node can have at most one dynamic child (you can't have both [slug] and
 * [id] at the same route level), so we either return existing or create new.
 */ function discoverDynamicChild(part, paramName, paramType) {
    if (part.dynamicChild !== null) {
        return part.dynamicChild;
    }
    var newChild = createEmptyPart();
    // Type assertion needed because we're converting from "without" to "with"
    // dynamic child variant.
    var mutablePart = part;
    mutablePart.dynamicChild = newChild;
    mutablePart.dynamicChildParamName = paramName;
    mutablePart.dynamicChildParamType = paramType;
    return newChild;
}
/**
 * Recursive workhorse for discoverKnownRoute.
 *
 * Walks the route tree and URL parts in parallel, building out the known
 * route tree as it goes. At each step:
 * 1. Determines if the current segment appears in the URL (dynamic/static)
 * 2. Validates URL matches route structure (detects rewrites)
 * 3. Creates/updates the corresponding KnownRoutePart node
 * 4. Records static siblings for future matching
 * 5. Recurses into child slots (parallel routes)
 *
 * If a URL/route mismatch is detected (rewrite), we stop building the known
 * route tree but still cache the route entry for direct lookup.
 */ function discoverKnownRoutePart(parentKnownRoutePart, routeTree, urlPart, remainingParts, existingEntry, now, pathname, nextUrl, fullTree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching, hasDynamicRewrite) {
    var segment = routeTree.segment;
    var segmentAppearsInURL;
    var paramName = null;
    var paramType = null;
    var staticSiblings = null;
    if (typeof segment === 'string') {
        segmentAppearsInURL = (0, _routeparams.doesStaticSegmentAppearInURL)(segment);
    } else {
        // Dynamic segment tuple: [paramName, paramCacheKey, paramType, staticSiblings]
        paramName = segment[0];
        paramType = segment[2];
        staticSiblings = segment[3];
        segmentAppearsInURL = true;
    }
    var knownRoutePart = parentKnownRoutePart;
    var nextUrlPart = urlPart;
    var nextRemainingParts = remainingParts;
    if (segmentAppearsInURL) {
        // Check for mismatch: if this is a static segment, the URL part must match
        if (paramName === null && urlPart !== segment) {
            // URL doesn't match route structure (likely a rewrite).
            // Don't populate the known route tree, just write the route into the
            // cache and return immediately.
            if (existingEntry !== null) {
                return existingEntry;
            }
            return (0, _cache.writeRouteIntoCache)(now, pathname, nextUrl, fullTree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching);
        }
        // URL matches route structure. Build the known route tree.
        if (paramName !== null && paramType !== null) {
            // Dynamic segment
            knownRoutePart = discoverDynamicChild(parentKnownRoutePart, paramName, paramType);
            // Record static siblings as placeholder parts.
            // IMPORTANT: We use the null vs Map distinction to track whether
            // siblings are known at this level:
            // - staticChildren: null = siblings unknown (can't safely match dynamic)
            // - staticChildren: Map = siblings known (even if empty)
            // This matters in dev mode where webpack may not know all siblings yet.
            if (staticSiblings !== null) {
                // Siblings are known - ensure we have a Map (even if empty)
                if (parentKnownRoutePart.staticChildren === null) {
                    parentKnownRoutePart.staticChildren = new Map();
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = staticSiblings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var sibling = _step.value;
                        if (!parentKnownRoutePart.staticChildren.has(sibling)) {
                            parentKnownRoutePart.staticChildren.set(sibling, createEmptyPart());
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
        } else {
            // Static segment
            if (parentKnownRoutePart.staticChildren === null) {
                parentKnownRoutePart.staticChildren = new Map();
            }
            var existingChild = parentKnownRoutePart.staticChildren.get(urlPart);
            if (existingChild === undefined) {
                existingChild = createEmptyPart();
                parentKnownRoutePart.staticChildren.set(urlPart, existingChild);
            }
            knownRoutePart = existingChild;
        }
        // Advance to next URL part
        nextUrlPart = remainingParts.length > 0 ? remainingParts[0] : null;
        nextRemainingParts = remainingParts.length > 0 ? remainingParts.slice(1) : [];
    }
    // else: Transparent segment (route group, __PAGE__, etc.)
    // Stay at the same known route part, don't advance URL parts
    // Recurse into child routes. A route tree can have multiple parallel routes
    // (e.g., @modal alongside children). Each parallel route is a separate
    // branch, but they all share the same URL - we just need to traverse all
    // branches to build out the known route tree.
    var slots = routeTree.slots;
    var resultFromChildren = null;
    if (slots !== null) {
        for(var parallelRouteKey in slots){
            var childRouteTree = slots[parallelRouteKey];
            // Skip branches with refreshState set - these were reused from a
            // different route (e.g., a "default" parallel slot) and don't represent
            // the actual route structure for this URL.
            if (childRouteTree.refreshState !== null) {
                continue;
            }
            var result = discoverKnownRoutePart(knownRoutePart, childRouteTree, nextUrlPart, nextRemainingParts, existingEntry, now, pathname, nextUrl, fullTree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching, hasDynamicRewrite);
            // All parallel route branches share the same URL, so they should all
            // reach compatible leaf nodes. We capture any result.
            resultFromChildren = result;
        }
        if (resultFromChildren !== null) {
            return resultFromChildren;
        }
        // Defensive fallback: no children returned a result. This shouldn't happen
        // for valid route trees, but handle it gracefully.
        if (existingEntry !== null) {
            return existingEntry;
        }
        return (0, _cache.writeRouteIntoCache)(now, pathname, nextUrl, fullTree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching);
    }
    // Reached a page node. Create/get the route cache entry and store as a
    // pattern. First, check if there's already a pattern for this route.
    if (knownRoutePart.pattern !== null) {
        // If this route has a dynamic rewrite, mark the existing pattern.
        if (hasDynamicRewrite) {
            knownRoutePart.pattern.hasDynamicRewrite = true;
        }
        return knownRoutePart.pattern;
    }
    // Get or create the entry
    var entry;
    if (existingEntry !== null) {
        // Already have a fulfilled entry, use it directly. It's already in the
        // route cache map.
        entry = existingEntry;
    } else {
        // Create the entry and insert it into the route cache map.
        entry = (0, _cache.writeRouteIntoCache)(now, pathname, nextUrl, fullTree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching);
    }
    if (hasDynamicRewrite) {
        entry.hasDynamicRewrite = true;
    }
    // Store as pattern
    knownRoutePart.pattern = entry;
    return entry;
}
function matchKnownRoute(pathname, search) {
    var pathnameParts = pathname.split('/').filter(function(p) {
        return p !== '';
    });
    var resolvedParams = new Map();
    var match = matchKnownRoutePart(knownRouteTreeRoot, pathnameParts, 0, resolvedParams);
    if (match === null) {
        return null;
    }
    var matchedPart = match.part;
    var pattern = match.pattern;
    // If the pattern could be intercepted, we can't safely use it for prediction.
    // Interception routes resolve to different route trees depending on the
    // referrer (the Next-Url header), which means the same URL can map to
    // different page components depending on where the navigation originated.
    // Since the known route tree only stores a single pattern per URL shape, we
    // can't distinguish between the intercepted and non-intercepted cases, so we
    // bail out to server resolution.
    //
    // TODO: We could store interception behavior in the known route tree itself
    // (e.g., which segments use interception markers and what they resolve to).
    // With enough information embedded in the trie, we could match interception
    // routes entirely on the client without a server round-trip.
    if (pattern.couldBeIntercepted) {
        return null;
    }
    // "Reify" the pattern: clone the template tree with concrete param values.
    // This substitutes resolved params (e.g., slug: "hello") into dynamic
    // segments and recomputes vary paths for correct segment cache keying.
    var acc = {
        metadataVaryPath: null
    };
    var reifiedTree = reifyRouteTree(pattern.tree, resolvedParams, search, null, acc);
    // The metadata tree is a flat page node without the intermediate layout
    // structure. Clone it with the updated metadata vary path collected during
    // the main tree traversal.
    var metadataVaryPath = acc.metadataVaryPath;
    if (metadataVaryPath === null) {
        // This shouldn't be reachable for a valid route tree.
        return null;
    }
    var reifiedMetadata = (0, _cache.createMetadataRouteTree)(metadataVaryPath);
    // Create a synthetic (predicted) entry and store it as the new pattern.
    //
    // Why replace the pattern? We intentionally update the pattern with this
    // synthetic entry so that if our prediction was wrong (server returns a
    // different pathname due to dynamic rewrite), the entry gets marked with
    // hasDynamicRewrite. Future predictions for this route will see the flag
    // and bail out to server resolution instead of making the same mistake.
    var syntheticEntry = {
        canonicalUrl: pathname + search,
        status: _cache.EntryStatus.Fulfilled,
        blockedTasks: null,
        tree: reifiedTree,
        metadata: reifiedMetadata,
        couldBeIntercepted: pattern.couldBeIntercepted,
        supportsPerSegmentPrefetching: pattern.supportsPerSegmentPrefetching,
        hasDynamicRewrite: false,
        renderedSearch: search,
        ref: null,
        size: pattern.size,
        staleAt: pattern.staleAt,
        version: pattern.version
    };
    matchedPart.pattern = syntheticEntry;
    return syntheticEntry;
}
/**
 * Recursively matches a URL against the known route tree.
 *
 * Matching priority (most specific first):
 * 1. Static children - exact path segment match
 * 2. Dynamic child - [param], [...param], [[...param]]
 * 3. Direct pattern - when no more URL parts remain
 *
 * Collects resolved param values in resolvedParams as it traverses.
 * Returns null if no match found (caller should fall back to server).
 */ function matchKnownRoutePart(part, pathnameParts, partIndex, resolvedParams) {
    var urlPart = partIndex < pathnameParts.length ? pathnameParts[partIndex] : null;
    // If staticChildren is null, we don't know what static routes exist at this
    // level. This happens in webpack dev mode where routes are compiled
    // on-demand. We can't safely match a dynamicChild because the URL part might
    // be a static sibling we haven't discovered yet. Example: We know
    // /blog/[slug] exists, but haven't compiled /blog/featured. A request for
    // /blog/featured would incorrectly match /blog/[slug].
    if (part.staticChildren === null) {
        // The only safe match is a direct pattern when no URL parts remain.
        if (urlPart === null) {
            var pattern = part.pattern;
            if (pattern !== null && !pattern.hasDynamicRewrite) {
                return {
                    part: part,
                    pattern: pattern
                };
            }
        }
        return null;
    }
    // Static children take priority over dynamic. This ensures /blog/featured
    // matches its own route rather than /blog/[slug].
    if (urlPart !== null) {
        var staticChild = part.staticChildren.get(urlPart);
        if (staticChild !== undefined) {
            // Check if this is an "unknown" placeholder part. These are created when
            // we learn about static siblings (from the route tree's staticSiblings
            // field) but haven't prefetched them yet. We know the path exists but
            // don't know its structure, so we can't predict it.
            if (staticChild.pattern === null && staticChild.dynamicChild === null && staticChild.staticChildren === null) {
                // Bail out - server must resolve this route.
                return null;
            }
            var match = matchKnownRoutePart(staticChild, pathnameParts, partIndex + 1, resolvedParams);
            if (match !== null) {
                return match;
            }
            // Static child is a real node (not a placeholder) but its subtree
            // didn't match the remaining URL parts. This means the route exists
            // in the static subtree but hasn't been fully discovered yet. Do not
            // fall through to try the dynamic child — the static match is
            // authoritative. Bail out to server resolution.
            return null;
        }
    }
    // Try dynamic child
    if (part.dynamicChild !== null) {
        var dynamicPart = part.dynamicChild;
        var paramName = part.dynamicChildParamName;
        var paramType = part.dynamicChildParamType;
        var dynamicPattern = dynamicPart.pattern;
        switch(paramType){
            case 'c':
                // Required catch-all [...param]: consumes 1+ URL parts
                if (dynamicPattern !== null && !dynamicPattern.hasDynamicRewrite && urlPart !== null) {
                    resolvedParams.set(paramName, pathnameParts.slice(partIndex));
                    return {
                        part: dynamicPart,
                        pattern: dynamicPattern
                    };
                }
                break;
            case 'oc':
                // Optional catch-all [[...param]]: consumes 0+ URL parts
                if (dynamicPattern !== null && !dynamicPattern.hasDynamicRewrite) {
                    if (urlPart !== null) {
                        resolvedParams.set(paramName, pathnameParts.slice(partIndex));
                        return {
                            part: dynamicPart,
                            pattern: dynamicPattern
                        };
                    }
                    // urlPart is null - can match with zero parts, but a direct pattern
                    // (e.g., page.tsx alongside [[...param]]) takes precedence.
                    if (part.pattern === null || part.pattern.hasDynamicRewrite) {
                        resolvedParams.set(paramName, []);
                        return {
                            part: dynamicPart,
                            pattern: dynamicPattern
                        };
                    }
                }
                break;
            case 'd':
                // Regular dynamic [param]: consumes exactly 1 URL part.
                // Unlike catch-all which terminates here, regular dynamic must
                // continue recursing to find the leaf pattern.
                if (urlPart !== null) {
                    resolvedParams.set(paramName, urlPart);
                    return matchKnownRoutePart(dynamicPart, pathnameParts, partIndex + 1, resolvedParams);
                }
                break;
            // Intercepted routes use relative path markers like (.), (..), (...)
            // Their behavior depends on navigation context (soft vs hard nav),
            // so we can't predict them client-side. Defer to server.
            case 'ci(..)(..)':
            case 'ci(.)':
            case 'ci(..)':
            case 'ci(...)':
            case 'di(..)(..)':
            case 'di(.)':
            case 'di(..)':
            case 'di(...)':
                return null;
            default:
                paramType;
        }
    }
    // No children matched. If we've consumed all URL parts, check for a direct
    // pattern at this node (the route terminates here).
    if (urlPart === null) {
        var pattern1 = part.pattern;
        if (pattern1 !== null && !pattern1.hasDynamicRewrite) {
            return {
                part: part,
                pattern: pattern1
            };
        }
    }
    return null;
}
/**
 * "Reify" means to make concrete - we take an abstract pattern (the template
 * route tree) and produce a concrete instance with actual param values.
 *
 * This function clones a RouteTree, substituting dynamic segment values from
 * resolvedParams and computing new vary paths. The vary path encodes param
 * values so segment cache entries can be correctly keyed.
 *
 * Example: Pattern for /blog/[slug] with resolvedParams { slug: "hello" }
 * produces a tree where segment [slug] has cacheKey "hello".
 */ function reifyRouteTree(pattern, resolvedParams, search, parentPartialVaryPath, acc) {
    var originalSegment = pattern.segment;
    var newSegment = originalSegment;
    var partialVaryPath;
    if (typeof originalSegment !== 'string') {
        // Dynamic segment: compute new cache key and append to partial vary path
        var paramName = originalSegment[0];
        var paramType = originalSegment[2];
        var staticSiblings = originalSegment[3];
        var newValue = resolvedParams.get(paramName);
        if (newValue !== undefined) {
            var newCacheKey = Array.isArray(newValue) ? newValue.join('/') : newValue;
            newSegment = [
                paramName,
                newCacheKey,
                paramType,
                staticSiblings
            ];
            partialVaryPath = (0, _varypath.appendLayoutVaryPath)(parentPartialVaryPath, newCacheKey, paramName);
        } else {
            // Param not found in resolvedParams - keep original and inherit partial
            // TODO: This should never happen. Bail out with null.
            partialVaryPath = parentPartialVaryPath;
        }
    } else {
        // Static segment: inherit partial vary path from parent
        partialVaryPath = parentPartialVaryPath;
    }
    // Recurse into children with the (possibly updated) partial vary path
    var newSlots = null;
    if (pattern.slots !== null) {
        newSlots = {};
        for(var key in pattern.slots){
            newSlots[key] = reifyRouteTree(pattern.slots[key], resolvedParams, search, partialVaryPath, acc);
        }
    }
    if (pattern.isPage) {
        // Page segment: finalize with search params
        var newVaryPath = (0, _varypath.finalizePageVaryPath)(pattern.requestKey, search, partialVaryPath);
        // Collect metadata vary path (first page wins, same as original algorithm)
        if (acc.metadataVaryPath === null) {
            acc.metadataVaryPath = (0, _varypath.finalizeMetadataVaryPath)(pattern.requestKey, search, partialVaryPath);
        }
        return {
            requestKey: pattern.requestKey,
            segment: newSegment,
            refreshState: pattern.refreshState,
            slots: newSlots,
            prefetchHints: pattern.prefetchHints,
            isPage: true,
            varyPath: newVaryPath
        };
    } else {
        // Layout segment: finalize without search params
        var newVaryPath1 = (0, _varypath.finalizeLayoutVaryPath)(pattern.requestKey, partialVaryPath);
        return {
            requestKey: pattern.requestKey,
            segment: newSegment,
            refreshState: pattern.refreshState,
            slots: newSlots,
            prefetchHints: pattern.prefetchHints,
            isPage: false,
            varyPath: newVaryPath1
        };
    }
}
function resetKnownRoutes() {
    knownRouteTreeRoot = createEmptyPart();
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _async_iterator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_async_iterator.cjs [app-client] (ecmascript)");
var _async_to_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_async_to_generator.cjs [app-client] (ecmascript)");
var _define_property = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_define_property.cjs [app-client] (ecmascript)");
var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var _ts_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_ts_generator.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    EntryStatus: null,
    attemptToFulfillDynamicSegmentFromBFCache: null,
    attemptToUpgradeSegmentFromBFCache: null,
    canNewFetchStrategyProvideMoreContent: null,
    convertReusedFlightRouterStateToRouteTree: null,
    convertRootFlightRouterStateToRouteTree: null,
    convertRouteTreeToFlightRouterState: null,
    createDetachedSegmentCacheEntry: null,
    createMetadataRouteTree: null,
    deprecated_requestOptimisticRouteCacheEntry: null,
    fetchInlinedSegmentsOnCacheMiss: null,
    fetchRouteOnCacheMiss: null,
    fetchSegmentOnCacheMiss: null,
    fetchSegmentPrefetchesUsingDynamicRequest: null,
    fulfillRouteCacheEntry: null,
    getCurrentRouteCacheVersion: null,
    getCurrentSegmentCacheVersion: null,
    getStaleAt: null,
    getStaleTimeMs: null,
    invalidateEntirePrefetchCache: null,
    invalidateRouteCacheEntries: null,
    invalidateSegmentCacheEntries: null,
    markRouteEntryAsDynamicRewrite: null,
    overwriteRevalidatingSegmentCacheEntry: null,
    pingInvalidationListeners: null,
    processRuntimePrefetchStream: null,
    readOrCreateRevalidatingSegmentEntry: null,
    readOrCreateRouteCacheEntry: null,
    readOrCreateSegmentCacheEntry: null,
    readRouteCacheEntry: null,
    readSegmentCacheEntry: null,
    stripIsPartialByte: null,
    upgradeToPendingSegment: null,
    upsertSegmentEntry: null,
    waitForSegmentCacheEntry: null,
    writeDynamicRenderResponseIntoCache: null,
    writeRouteIntoCache: null,
    writeStaticStageResponseIntoCache: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    EntryStatus: function EntryStatus1() {
        return EntryStatus;
    },
    attemptToFulfillDynamicSegmentFromBFCache: function attemptToFulfillDynamicSegmentFromBFCache1() {
        return attemptToFulfillDynamicSegmentFromBFCache;
    },
    attemptToUpgradeSegmentFromBFCache: function attemptToUpgradeSegmentFromBFCache1() {
        return attemptToUpgradeSegmentFromBFCache;
    },
    canNewFetchStrategyProvideMoreContent: function canNewFetchStrategyProvideMoreContent1() {
        return canNewFetchStrategyProvideMoreContent;
    },
    convertReusedFlightRouterStateToRouteTree: function convertReusedFlightRouterStateToRouteTree1() {
        return convertReusedFlightRouterStateToRouteTree;
    },
    convertRootFlightRouterStateToRouteTree: function convertRootFlightRouterStateToRouteTree1() {
        return convertRootFlightRouterStateToRouteTree;
    },
    convertRouteTreeToFlightRouterState: function convertRouteTreeToFlightRouterState1() {
        return convertRouteTreeToFlightRouterState;
    },
    createDetachedSegmentCacheEntry: function createDetachedSegmentCacheEntry1() {
        return createDetachedSegmentCacheEntry;
    },
    createMetadataRouteTree: function createMetadataRouteTree1() {
        return createMetadataRouteTree;
    },
    deprecated_requestOptimisticRouteCacheEntry: function deprecated_requestOptimisticRouteCacheEntry1() {
        return deprecated_requestOptimisticRouteCacheEntry;
    },
    fetchInlinedSegmentsOnCacheMiss: function fetchInlinedSegmentsOnCacheMiss1() {
        return fetchInlinedSegmentsOnCacheMiss;
    },
    fetchRouteOnCacheMiss: function fetchRouteOnCacheMiss1() {
        return fetchRouteOnCacheMiss;
    },
    fetchSegmentOnCacheMiss: function fetchSegmentOnCacheMiss1() {
        return fetchSegmentOnCacheMiss;
    },
    fetchSegmentPrefetchesUsingDynamicRequest: function fetchSegmentPrefetchesUsingDynamicRequest1() {
        return fetchSegmentPrefetchesUsingDynamicRequest;
    },
    fulfillRouteCacheEntry: function fulfillRouteCacheEntry1() {
        return fulfillRouteCacheEntry;
    },
    getCurrentRouteCacheVersion: function getCurrentRouteCacheVersion1() {
        return getCurrentRouteCacheVersion;
    },
    getCurrentSegmentCacheVersion: function getCurrentSegmentCacheVersion1() {
        return getCurrentSegmentCacheVersion;
    },
    getStaleAt: function getStaleAt1() {
        return getStaleAt;
    },
    getStaleTimeMs: function getStaleTimeMs1() {
        return getStaleTimeMs;
    },
    invalidateEntirePrefetchCache: function invalidateEntirePrefetchCache1() {
        return invalidateEntirePrefetchCache;
    },
    invalidateRouteCacheEntries: function invalidateRouteCacheEntries1() {
        return invalidateRouteCacheEntries;
    },
    invalidateSegmentCacheEntries: function invalidateSegmentCacheEntries1() {
        return invalidateSegmentCacheEntries;
    },
    markRouteEntryAsDynamicRewrite: function markRouteEntryAsDynamicRewrite1() {
        return markRouteEntryAsDynamicRewrite;
    },
    overwriteRevalidatingSegmentCacheEntry: function overwriteRevalidatingSegmentCacheEntry1() {
        return overwriteRevalidatingSegmentCacheEntry;
    },
    pingInvalidationListeners: function pingInvalidationListeners1() {
        return pingInvalidationListeners;
    },
    processRuntimePrefetchStream: function processRuntimePrefetchStream1() {
        return processRuntimePrefetchStream;
    },
    readOrCreateRevalidatingSegmentEntry: function readOrCreateRevalidatingSegmentEntry1() {
        return readOrCreateRevalidatingSegmentEntry;
    },
    readOrCreateRouteCacheEntry: function readOrCreateRouteCacheEntry1() {
        return readOrCreateRouteCacheEntry;
    },
    readOrCreateSegmentCacheEntry: function readOrCreateSegmentCacheEntry1() {
        return readOrCreateSegmentCacheEntry;
    },
    readRouteCacheEntry: function readRouteCacheEntry1() {
        return readRouteCacheEntry;
    },
    readSegmentCacheEntry: function readSegmentCacheEntry1() {
        return readSegmentCacheEntry;
    },
    stripIsPartialByte: function stripIsPartialByte1() {
        return stripIsPartialByte;
    },
    upgradeToPendingSegment: function upgradeToPendingSegment1() {
        return upgradeToPendingSegment;
    },
    upsertSegmentEntry: function upsertSegmentEntry1() {
        return upsertSegmentEntry;
    },
    waitForSegmentCacheEntry: function waitForSegmentCacheEntry1() {
        return waitForSegmentCacheEntry;
    },
    writeDynamicRenderResponseIntoCache: function writeDynamicRenderResponseIntoCache1() {
        return writeDynamicRenderResponseIntoCache;
    },
    writeRouteIntoCache: function writeRouteIntoCache1() {
        return writeRouteIntoCache;
    },
    writeStaticStageResponseIntoCache: function writeStaticStageResponseIntoCache1() {
        return writeStaticStageResponseIntoCache;
    }
});
var _varyparamsdecoding = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/segment-cache/vary-params-decoding.js [app-client] (ecmascript)");
var _approuterheaders = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
var _fetchserverresponse = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
var _scheduler = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-client] (ecmascript)");
var _varypath = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/vary-path.js [app-client] (ecmascript)");
var _createhreffromurl = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
var _cachekey = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-client] (ecmascript)");
var _routeparams = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
var _cachemap = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache-map.js [app-client] (ecmascript)");
var _segmentvalueencoding = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/segment-cache/segment-value-encoding.js [app-client] (ecmascript)");
var _flightdatahelpers = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)");
var _navigatereducer = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
var _links = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
var _segment = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
var _types = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
var _promisewithresolvers = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-client] (ecmascript)");
var _bfcache = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/bfcache.js [app-client] (ecmascript)");
var _optimisticroutes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/optimistic-routes.js [app-client] (ecmascript)");
var _navigation = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/navigation.js [app-client] (ecmascript)");
var _navigationbuildid = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/navigation-build-id.js [app-client] (ecmascript)");
var _constants = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/constants.js [app-client] (ecmascript)");
function getStaleTimeMs(staleTimeSeconds) {
    return Math.max(staleTimeSeconds, 30) * 1000;
}
var EntryStatus = /*#__PURE__*/ function(EntryStatus) {
    EntryStatus[EntryStatus["Empty"] = 0] = "Empty";
    EntryStatus[EntryStatus["Pending"] = 1] = "Pending";
    EntryStatus[EntryStatus["Fulfilled"] = 2] = "Fulfilled";
    EntryStatus[EntryStatus["Rejected"] = 3] = "Rejected";
    return EntryStatus;
}({});
var isOutputExportMode = ("TURBOPACK compile-time value", "development") === 'production' && ("TURBOPACK compile-time value", void 0) === 'export';
var MetadataOnlyRequestTree = [
    '',
    {},
    null,
    'metadata-only'
];
var routeCacheMap = (0, _cachemap.createCacheMap)();
var segmentCacheMap = (0, _cachemap.createCacheMap)();
// All invalidation listeners for the whole cache are tracked in single set.
// Since we don't yet support tag or path-based invalidation, there's no point
// tracking them any more granularly than this. Once we add granular
// invalidation, that may change, though generally the model is to just notify
// the listeners and allow the caller to poll the prefetch cache with a new
// prefetch task if desired.
var invalidationListeners = null;
// Incrementing counters used to track cache invalidations. Route and segment
// caches have separate versions so they can be invalidated independently.
// Invalidation does not eagerly evict anything from the cache; entries are
// lazily evicted when read.
var currentRouteCacheVersion = 0;
var currentSegmentCacheVersion = 0;
function getCurrentRouteCacheVersion() {
    return currentRouteCacheVersion;
}
function getCurrentSegmentCacheVersion() {
    return currentSegmentCacheVersion;
}
function invalidateEntirePrefetchCache(nextUrl, tree) {
    currentRouteCacheVersion++;
    currentSegmentCacheVersion++;
    (0, _links.pingVisibleLinks)(nextUrl, tree);
    pingInvalidationListeners(nextUrl, tree);
}
function invalidateRouteCacheEntries(nextUrl, tree) {
    currentRouteCacheVersion++;
    (0, _links.pingVisibleLinks)(nextUrl, tree);
    pingInvalidationListeners(nextUrl, tree);
}
function invalidateSegmentCacheEntries(nextUrl, tree) {
    currentSegmentCacheVersion++;
    (0, _links.pingVisibleLinks)(nextUrl, tree);
    pingInvalidationListeners(nextUrl, tree);
}
function attachInvalidationListener(task) {
    // This function is called whenever a prefetch task reads a cache entry. If
    // the task has an onInvalidate function associated with it — i.e. the one
    // optionally passed to router.prefetch(onInvalidate) — then we attach that
    // listener to the every cache entry that the task reads. Then, if an entry
    // is invalidated, we call the function.
    if (task.onInvalidate !== null) {
        if (invalidationListeners === null) {
            invalidationListeners = new Set([
                task
            ]);
        } else {
            invalidationListeners.add(task);
        }
    }
}
function notifyInvalidationListener(task) {
    var onInvalidate = task.onInvalidate;
    if (onInvalidate !== null) {
        // Clear the callback from the task object to guarantee it's not called more
        // than once.
        task.onInvalidate = null;
        // This is a user-space function, so we must wrap in try/catch.
        try {
            onInvalidate();
        } catch (error) {
            if (typeof reportError === 'function') {
                reportError(error);
            } else {
                console.error(error);
            }
        }
    }
}
function pingInvalidationListeners(nextUrl, tree) {
    // The rough equivalent of pingVisibleLinks, but for onInvalidate callbacks.
    // This is called when the Next-Url or the base tree changes, since those
    // may affect the result of a prefetch task. It's also called after a
    // cache invalidation.
    if (invalidationListeners !== null) {
        var tasks = invalidationListeners;
        invalidationListeners = null;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = tasks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var task = _step.value;
                if ((0, _scheduler.isPrefetchTaskDirty)(task, nextUrl, tree)) {
                    notifyInvalidationListener(task);
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
}
function readRouteCacheEntry(now, key) {
    var varyPath = (0, _varypath.getRouteVaryPath)(key.pathname, key.search, key.nextUrl);
    var isRevalidation = false;
    var existingEntry = (0, _cachemap.getFromCacheMap)(now, getCurrentRouteCacheVersion(), routeCacheMap, varyPath, isRevalidation);
    if (existingEntry !== null) {
        return existingEntry;
    }
    // No cache hit. Attempt to construct from template using the new
    // optimistic routing mechanism (pattern-based matching).
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return null;
}
function readSegmentCacheEntry(now, varyPath) {
    var isRevalidation = false;
    return (0, _cachemap.getFromCacheMap)(now, getCurrentSegmentCacheVersion(), segmentCacheMap, varyPath, isRevalidation);
}
function readRevalidatingSegmentCacheEntry(now, varyPath) {
    var isRevalidation = true;
    return (0, _cachemap.getFromCacheMap)(now, getCurrentSegmentCacheVersion(), segmentCacheMap, varyPath, isRevalidation);
}
function waitForSegmentCacheEntry(pendingEntry) {
    // Because the entry is pending, there's already a in-progress request.
    // Attach a promise to the entry that will resolve when the server responds.
    var promiseWithResolvers = pendingEntry.promise;
    if (promiseWithResolvers === null) {
        promiseWithResolvers = pendingEntry.promise = (0, _promisewithresolvers.createPromiseWithResolvers)();
    } else {
    // There's already a promise we can use
    }
    return promiseWithResolvers.promise;
}
function createDetachedRouteCacheEntry() {
    return {
        canonicalUrl: null,
        status: 0,
        blockedTasks: null,
        tree: null,
        metadata: null,
        // This is initialized to true because we don't know yet whether the route
        // could be intercepted. It's only set to false once we receive a response
        // from the server.
        couldBeIntercepted: true,
        // Similarly, we don't yet know if the route supports PPR.
        supportsPerSegmentPrefetching: false,
        renderedSearch: null,
        // Map-related fields
        ref: null,
        size: 0,
        // Since this is an empty entry, there's no reason to ever evict it. It will
        // be updated when the data is populated.
        staleAt: Infinity,
        version: getCurrentRouteCacheVersion()
    };
}
function readOrCreateRouteCacheEntry(now, task, key) {
    attachInvalidationListener(task);
    var existingEntry = readRouteCacheEntry(now, key);
    if (existingEntry !== null) {
        return existingEntry;
    }
    // Create a pending entry and add it to the cache.
    var pendingEntry = createDetachedRouteCacheEntry();
    var varyPath = (0, _varypath.getRouteVaryPath)(key.pathname, key.search, key.nextUrl);
    var isRevalidation = false;
    (0, _cachemap.setInCacheMap)(routeCacheMap, varyPath, pendingEntry, isRevalidation);
    return pendingEntry;
}
function deprecated_requestOptimisticRouteCacheEntry(now, requestedUrl, nextUrl) {
    // This function is called during a navigation when there was no matching
    // route tree in the prefetch cache. Before de-opting to a blocking,
    // unprefetched navigation, we will first attempt to construct an "optimistic"
    // route tree by checking the cache for similar routes.
    //
    // Check if there's a route with the same pathname, but with different
    // search params. We can then base our optimistic route tree on this entry.
    //
    // Conceptually, we are simulating what would happen if we did perform a
    // prefetch the requested URL, under the assumption that the server will
    // not redirect or rewrite the request in a different manner than the
    // base route tree. This assumption might not hold, in which case we'll have
    // to recover when we perform the dynamic navigation request. However, this
    // is what would happen if a route were dynamically rewritten/redirected
    // in between the prefetch and the navigation. So the logic needs to exist
    // to handle this case regardless.
    // Look for a route with the same pathname, but with an empty search string.
    // TODO: There's nothing inherently special about the empty search string;
    // it's chosen somewhat arbitrarily, with the rationale that it's the most
    // likely one to exist. But we should update this to match _any_ search
    // string. The plan is to generalize this logic alongside other improvements
    // related to "fallback" cache entries.
    var requestedSearch = requestedUrl.search;
    if (requestedSearch === '') {
        // The caller would have already checked if a route with an empty search
        // string is in the cache. So we can bail out here.
        return null;
    }
    var urlWithoutSearchParams = new URL(requestedUrl);
    urlWithoutSearchParams.search = '';
    var routeWithNoSearchParams = readRouteCacheEntry(now, (0, _cachekey.createCacheKey)(urlWithoutSearchParams.href, nextUrl));
    if (routeWithNoSearchParams === null || routeWithNoSearchParams.status !== 2) {
        // Bail out of constructing an optimistic route tree. This will result in
        // a blocking, unprefetched navigation.
        return null;
    }
    // Now we have a base route tree we can "patch" with our optimistic values.
    // Optimistically assume that redirects for the requested pathname do
    // not vary on the search string. Therefore, if the base route was
    // redirected to a different search string, then the optimistic route
    // should be redirected to the same search string. Otherwise, we use
    // the requested search string.
    var canonicalUrlForRouteWithNoSearchParams = new URL(routeWithNoSearchParams.canonicalUrl, requestedUrl.origin);
    var optimisticCanonicalSearch = canonicalUrlForRouteWithNoSearchParams.search !== '' ? canonicalUrlForRouteWithNoSearchParams.search : requestedSearch;
    // Similarly, optimistically assume that rewrites for the requested
    // pathname do not vary on the search string. Therefore, if the base
    // route was rewritten to a different search string, then the optimistic
    // route should be rewritten to the same search string. Otherwise, we use
    // the requested search string.
    var optimisticRenderedSearch = routeWithNoSearchParams.renderedSearch !== '' ? routeWithNoSearchParams.renderedSearch : requestedSearch;
    var optimisticUrl = new URL(routeWithNoSearchParams.canonicalUrl, location.origin);
    optimisticUrl.search = optimisticCanonicalSearch;
    var optimisticCanonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(optimisticUrl);
    var optimisticRouteTree = deprecated_createOptimisticRouteTree(routeWithNoSearchParams.tree, optimisticRenderedSearch);
    var optimisticMetadataTree = deprecated_createOptimisticRouteTree(routeWithNoSearchParams.metadata, optimisticRenderedSearch);
    // Clone the base route tree, and override the relevant fields with our
    // optimistic values.
    var optimisticEntry = {
        canonicalUrl: optimisticCanonicalUrl,
        status: 2,
        // This isn't cloned because it's instance-specific
        blockedTasks: null,
        tree: optimisticRouteTree,
        metadata: optimisticMetadataTree,
        couldBeIntercepted: routeWithNoSearchParams.couldBeIntercepted,
        supportsPerSegmentPrefetching: routeWithNoSearchParams.supportsPerSegmentPrefetching,
        hasDynamicRewrite: routeWithNoSearchParams.hasDynamicRewrite,
        // Override the rendered search with the optimistic value.
        renderedSearch: optimisticRenderedSearch,
        // Map-related fields
        ref: null,
        size: 0,
        staleAt: routeWithNoSearchParams.staleAt,
        version: routeWithNoSearchParams.version
    };
    // Do not insert this entry into the cache. It only exists so we can
    // perform the current navigation. Just return it to the caller.
    return optimisticEntry;
}
function deprecated_createOptimisticRouteTree(tree, newRenderedSearch) {
    // Create a new route tree that identical to the original one except for
    // the rendered search string, which is contained in the vary path.
    var clonedSlots = null;
    var originalSlots = tree.slots;
    if (originalSlots !== null) {
        clonedSlots = {};
        for(var parallelRouteKey in originalSlots){
            var childTree = originalSlots[parallelRouteKey];
            clonedSlots[parallelRouteKey] = deprecated_createOptimisticRouteTree(childTree, newRenderedSearch);
        }
    }
    // We only need to clone the vary path if the route is a page.
    if (tree.isPage) {
        return {
            requestKey: tree.requestKey,
            segment: tree.segment,
            refreshState: tree.refreshState,
            varyPath: (0, _varypath.clonePageVaryPathWithNewSearchParams)(tree.varyPath, newRenderedSearch),
            isPage: true,
            slots: clonedSlots,
            prefetchHints: tree.prefetchHints
        };
    }
    return {
        requestKey: tree.requestKey,
        segment: tree.segment,
        refreshState: tree.refreshState,
        varyPath: tree.varyPath,
        isPage: false,
        slots: clonedSlots,
        prefetchHints: tree.prefetchHints
    };
}
function readOrCreateSegmentCacheEntry(now, fetchStrategy, tree) {
    var existingEntry = readSegmentCacheEntry(now, tree.varyPath);
    if (existingEntry !== null) {
        return existingEntry;
    }
    // Create a pending entry and add it to the cache. The stale time is set to a
    // default value; the actual stale time will be set when the entry is
    // fulfilled with data from the server response.
    var varyPathForRequest = (0, _varypath.getSegmentVaryPathForRequest)(fetchStrategy, tree);
    var pendingEntry = createDetachedSegmentCacheEntry(now);
    var isRevalidation = false;
    (0, _cachemap.setInCacheMap)(segmentCacheMap, varyPathForRequest, pendingEntry, isRevalidation);
    return pendingEntry;
}
function readOrCreateRevalidatingSegmentEntry(now, fetchStrategy, tree) {
    // This function is called when we've already confirmed that a particular
    // segment is cached, but we want to perform another request anyway in case it
    // returns more complete and/or fresher data than we already have. The logic
    // for deciding whether to replace the existing entry is handled elsewhere;
    // this function just handles retrieving a cache entry that we can use to
    // track the revalidation.
    //
    // The reason revalidations are stored in the cache is because we need to be
    // able to dedupe multiple revalidation requests. The reason they have to be
    // handled specially is because we shouldn't overwrite a "normal" entry if
    // one exists at the same keypath. So, for each internal cache location, there
    // is a special "revalidation" slot that is used solely for this purpose.
    //
    // You can think of it as if all the revalidation entries were stored in a
    // separate cache map from the canonical entries, and then transfered to the
    // canonical cache map once the request is complete — this isn't how it's
    // actually implemented, since it's more efficient to store them in the same
    // data structure as the normal entries, but that's how it's modeled
    // conceptually.
    // TODO: Once we implement Fallback behavior for params, where an entry is
    // re-keyed based on response information, we'll need to account for the
    // possibility that the keypath of the previous entry is more generic than
    // the keypath of the revalidating entry. In other words, the server could
    // return a less generic entry upon revalidation. For now, though, this isn't
    // a concern because the keypath is based solely on the prefetch strategy,
    // not on data contained in the response.
    var existingEntry = readRevalidatingSegmentCacheEntry(now, tree.varyPath);
    if (existingEntry !== null) {
        return existingEntry;
    }
    // Create a pending entry and add it to the cache. The stale time is set to a
    // default value; the actual stale time will be set when the entry is
    // fulfilled with data from the server response.
    var varyPathForRequest = (0, _varypath.getSegmentVaryPathForRequest)(fetchStrategy, tree);
    var pendingEntry = createDetachedSegmentCacheEntry(now);
    var isRevalidation = true;
    (0, _cachemap.setInCacheMap)(segmentCacheMap, varyPathForRequest, pendingEntry, isRevalidation);
    return pendingEntry;
}
function overwriteRevalidatingSegmentCacheEntry(now, fetchStrategy, tree) {
    // This function is called when we've already decided to replace an existing
    // revalidation entry. Create a new entry and write it into the cache,
    // overwriting the previous value. The stale time is set to a default value;
    // the actual stale time will be set when the entry is fulfilled with data
    // from the server response.
    var varyPathForRequest = (0, _varypath.getSegmentVaryPathForRequest)(fetchStrategy, tree);
    var pendingEntry = createDetachedSegmentCacheEntry(now);
    var isRevalidation = true;
    (0, _cachemap.setInCacheMap)(segmentCacheMap, varyPathForRequest, pendingEntry, isRevalidation);
    return pendingEntry;
}
function upsertSegmentEntry(now, varyPath, candidateEntry) {
    // We have a new entry that has not yet been inserted into the cache. Before
    // we do so, we need to confirm whether it takes precedence over the existing
    // entry (if one exists).
    // TODO: We should not upsert an entry if its key was invalidated in the time
    // since the request was made. We can do that by passing the "owner" entry to
    // this function and confirming it's the same as `existingEntry`.
    if ((0, _cachemap.isValueExpired)(now, getCurrentSegmentCacheVersion(), candidateEntry)) {
        // The entry is expired. We cannot upsert it.
        return null;
    }
    var existingEntry = readSegmentCacheEntry(now, varyPath);
    if (existingEntry !== null) {
        // Don't replace a more specific segment with a less-specific one. A case where this
        // might happen is if the existing segment was fetched via
        // `<Link prefetch={true}>`.
        if (// than the segment we already have in the cache, so it can't have more content.
        candidateEntry.fetchStrategy !== existingEntry.fetchStrategy && !canNewFetchStrategyProvideMoreContent(existingEntry.fetchStrategy, candidateEntry.fetchStrategy) || // The existing entry isn't partial, but the new one is.
        // (TODO: can this be true if `candidateEntry.fetchStrategy >= existingEntry.fetchStrategy`?)
        !existingEntry.isPartial && candidateEntry.isPartial) {
            // We're going to leave revalidating entry in the cache so that it doesn't
            // get revalidated again unnecessarily. Downgrade the Fulfilled entry to
            // Rejected and null out the data so it can be garbage collected. We leave
            // `staleAt` intact to prevent subsequent revalidation attempts only until
            // the entry expires.
            var rejectedEntry = candidateEntry;
            rejectedEntry.status = 3;
            rejectedEntry.rsc = null;
            return null;
        }
        // Evict the existing entry from the cache.
        (0, _cachemap.deleteFromCacheMap)(existingEntry);
    }
    var isRevalidation = false;
    (0, _cachemap.setInCacheMap)(segmentCacheMap, varyPath, candidateEntry, isRevalidation);
    return candidateEntry;
}
function createDetachedSegmentCacheEntry(now) {
    // Default stale time for pending segment cache entries. The actual stale time
    // is set when the entry is fulfilled with data from the server response.
    var staleAt = now + 30 * 1000;
    var emptyEntry = {
        status: 0,
        // Default to assuming the fetch strategy will be PPR. This will be updated
        // when a fetch is actually initiated.
        fetchStrategy: _types.FetchStrategy.PPR,
        rsc: null,
        isPartial: true,
        promise: null,
        // Map-related fields
        ref: null,
        size: 0,
        staleAt: staleAt,
        version: 0
    };
    return emptyEntry;
}
function upgradeToPendingSegment(emptyEntry, fetchStrategy) {
    var pendingEntry = emptyEntry;
    pendingEntry.status = 1;
    pendingEntry.fetchStrategy = fetchStrategy;
    if (fetchStrategy === _types.FetchStrategy.Full) {
        // We can assume the response will contain the full segment data. Set this
        // to false so we know it's OK to omit this segment from any navigation
        // requests that may happen while the data is still pending.
        pendingEntry.isPartial = false;
    }
    // Set the version here, since this is right before the request is initiated.
    // The next time the segment cache version is incremented, the entry will
    // effectively be evicted. This happens before initiating the request, rather
    // than when receiving the response, because it's guaranteed to happen
    // before the data is read on the server.
    pendingEntry.version = getCurrentSegmentCacheVersion();
    return pendingEntry;
}
function attemptToFulfillDynamicSegmentFromBFCache(now, segment, tree) {
    // Attempts to fulfill an empty segment cache entry using data from the
    // bfcache. This is only valid during a Full prefetch (i.e. one that includes
    // dynamic data), because the bfcache stores data from navigations which
    // always include dynamic data.
    // We always use the canonical vary path when checking the bfcache. This is
    // the same operation we'd use to access the cache during a
    // regular navigation.
    var varyPath = tree.varyPath;
    // Read from the BFCache without expiring it (pass -1). We check freshness
    // ourselves using navigatedAt, because the BFCache's staleAt may have been
    // overridden by a per-page unstable_dynamicStaleTime and can't be used to
    // derive the original request time.
    var bfcacheEntry = (0, _bfcache.readFromBFCache)(varyPath);
    if (bfcacheEntry !== null) {
        // The stale time for dynamic prefetches (default: 5 mins) is different
        // from the stale time for regular navigations (default: 0 secs). Use
        // navigatedAt to compute the correct expiry for prefetch purposes.
        var dynamicPrefetchStaleAt = bfcacheEntry.navigatedAt + _navigatereducer.STATIC_STALETIME_MS;
        if (now > dynamicPrefetchStaleAt) {
            return null;
        }
        var pendingSegment = upgradeToPendingSegment(segment, _types.FetchStrategy.Full);
        var isPartial = false;
        return fulfillSegmentCacheEntry(pendingSegment, bfcacheEntry.rsc, dynamicPrefetchStaleAt, isPartial);
    }
    return null;
}
function attemptToUpgradeSegmentFromBFCache(now, tree) {
    var varyPath = tree.varyPath;
    var bfcacheEntry = (0, _bfcache.readFromBFCache)(varyPath);
    if (bfcacheEntry !== null) {
        var dynamicPrefetchStaleAt = bfcacheEntry.navigatedAt + _navigatereducer.STATIC_STALETIME_MS;
        if (now > dynamicPrefetchStaleAt) {
            return null;
        }
        var pendingSegment = upgradeToPendingSegment(createDetachedSegmentCacheEntry(now), _types.FetchStrategy.Full);
        var isPartial = false;
        var newEntry = fulfillSegmentCacheEntry(pendingSegment, bfcacheEntry.rsc, dynamicPrefetchStaleAt, isPartial);
        var segmentVaryPath = (0, _varypath.getSegmentVaryPathForRequest)(_types.FetchStrategy.Full, tree);
        var upserted = upsertSegmentEntry(now, segmentVaryPath, newEntry);
        if (upserted !== null && upserted.status === 2) {
            return upserted;
        }
    }
    return null;
}
function pingBlockedTasks(entry) {
    var blockedTasks = entry.blockedTasks;
    if (blockedTasks !== null) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = blockedTasks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var task = _step.value;
                (0, _scheduler.pingPrefetchTask)(task);
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
        entry.blockedTasks = null;
    }
}
function createMetadataRouteTree(metadataVaryPath) {
    // The Head is not actually part of the route tree, but other than that, it's
    // fetched and cached like a segment. Some functions expect a RouteTree
    // object, so rather than fork the logic in all those places, we use this
    // "fake" one.
    var metadata = {
        requestKey: _segmentvalueencoding.HEAD_REQUEST_KEY,
        segment: _segmentvalueencoding.HEAD_REQUEST_KEY,
        refreshState: null,
        varyPath: metadataVaryPath,
        // The metadata isn't really a "page" (though it isn't really a "segment"
        // either) but for the purposes of how this field is used, it behaves like
        // one. If this logic ever gets more complex we can change this to an enum.
        isPage: true,
        slots: null,
        prefetchHints: 0
    };
    return metadata;
}
function fulfillRouteCacheEntry(now, entry, tree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching) {
    var _ref;
    // Get the rendered search from the vary path
    var renderedSearch = (_ref = (0, _varypath.getRenderedSearchFromVaryPath)(metadataVaryPath)) !== null && _ref !== void 0 ? _ref : '';
    var fulfilledEntry = entry;
    fulfilledEntry.status = 2;
    fulfilledEntry.tree = tree;
    fulfilledEntry.metadata = createMetadataRouteTree(metadataVaryPath);
    // Route structure is essentially static — it only changes on deploy.
    // Always use the static stale time.
    // NOTE: An exception is rewrites/redirects in middleware or proxy, which can
    // change routes dynamically. We have other strategies for handling those.
    fulfilledEntry.staleAt = now + _navigatereducer.STATIC_STALETIME_MS;
    fulfilledEntry.couldBeIntercepted = couldBeIntercepted;
    fulfilledEntry.canonicalUrl = canonicalUrl;
    fulfilledEntry.renderedSearch = renderedSearch;
    fulfilledEntry.supportsPerSegmentPrefetching = supportsPerSegmentPrefetching;
    fulfilledEntry.hasDynamicRewrite = false;
    pingBlockedTasks(entry);
    return fulfilledEntry;
}
function writeRouteIntoCache(now, pathname, nextUrl, tree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching) {
    var pendingEntry = createDetachedRouteCacheEntry();
    var fulfilledEntry = fulfillRouteCacheEntry(now, pendingEntry, tree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching);
    var renderedSearch = fulfilledEntry.renderedSearch;
    var varyPath = (0, _varypath.getFulfilledRouteVaryPath)(pathname, renderedSearch, nextUrl, couldBeIntercepted);
    var isRevalidation = false;
    (0, _cachemap.setInCacheMap)(routeCacheMap, varyPath, fulfilledEntry, isRevalidation);
    return fulfilledEntry;
}
function markRouteEntryAsDynamicRewrite(entry) {
    entry.hasDynamicRewrite = true;
// Note: The caller is responsible for also calling invalidateRouteCacheEntries
// to invalidate other entries that may have been derived from this template
// before we knew it had a dynamic rewrite.
}
function fulfillSegmentCacheEntry(segmentCacheEntry, rsc, staleAt, isPartial) {
    var fulfilledEntry = segmentCacheEntry;
    fulfilledEntry.status = 2;
    fulfilledEntry.rsc = rsc;
    fulfilledEntry.staleAt = staleAt;
    fulfilledEntry.isPartial = isPartial;
    // Resolve any listeners that were waiting for this data.
    if (segmentCacheEntry.promise !== null) {
        segmentCacheEntry.promise.resolve(fulfilledEntry);
        // Free the promise for garbage collection.
        fulfilledEntry.promise = null;
    }
    return fulfilledEntry;
}
function rejectRouteCacheEntry(entry, staleAt) {
    var rejectedEntry = entry;
    rejectedEntry.status = 3;
    rejectedEntry.staleAt = staleAt;
    pingBlockedTasks(entry);
}
function rejectSegmentCacheEntry(entry, staleAt) {
    var rejectedEntry = entry;
    rejectedEntry.status = 3;
    rejectedEntry.staleAt = staleAt;
    if (entry.promise !== null) {
        // NOTE: We don't currently propagate the reason the prefetch was canceled
        // but we could by accepting a `reason` argument.
        entry.promise.resolve(null);
        entry.promise = null;
    }
}
function convertRootTreePrefetchToRouteTree(rootTree, renderedPathname, renderedSearch, acc) {
    // Remove trailing and leading slashes
    var pathnameParts = renderedPathname.split('/').filter(function(p) {
        return p !== '';
    });
    var index = 0;
    var rootSegment = _segmentvalueencoding.ROOT_SEGMENT_REQUEST_KEY;
    return convertTreePrefetchToRouteTree(rootTree.tree, rootSegment, null, _segmentvalueencoding.ROOT_SEGMENT_REQUEST_KEY, pathnameParts, index, renderedSearch, acc);
}
function convertTreePrefetchToRouteTree(prefetch, segment, partialVaryPath, requestKey, pathnameParts, pathnamePartsIndex, renderedSearch, acc) {
    // Converts the route tree sent by the server into the format used by the
    // cache. The cached version of the tree includes additional fields, such as a
    // cache key for each segment. Since this is frequently accessed, we compute
    // it once instead of on every access. This same cache key is also used to
    // request the segment from the server.
    var slots = null;
    var isPage;
    var varyPath;
    var prefetchSlots = prefetch.slots;
    if (prefetchSlots !== null) {
        isPage = false;
        varyPath = (0, _varypath.finalizeLayoutVaryPath)(requestKey, partialVaryPath);
        slots = {};
        for(var parallelRouteKey in prefetchSlots){
            var childPrefetch = prefetchSlots[parallelRouteKey];
            var childSegmentName = childPrefetch.name;
            var childParam = childPrefetch.param;
            var childDoesAppearInURL = void 0;
            var childSegment = void 0;
            var childPartialVaryPath = void 0;
            if (childParam !== null) {
                // This segment is parameterized. Get the param from the pathname.
                var childParamValue = (0, _routeparams.parseDynamicParamFromURLPart)(childParam.type, pathnameParts, pathnamePartsIndex);
                // Assign a cache key to the segment, based on the param value. In the
                // pre-Segment Cache implementation, the server computes this and sends
                // it in the body of the response. In the Segment Cache implementation,
                // the server sends an empty string and we fill it in here.
                // TODO: We're intentionally not adding the search param to page
                // segments here; it's tracked separately and added back during a read.
                // This would clearer if we waited to construct the segment until it's
                // read from the cache, since that's effectively what we're
                // doing anyway.
                var childParamKey = // cacheComponents is enabled.
                childParam.key !== null ? childParam.key : (0, _routeparams.getCacheKeyForDynamicParam)(childParamValue, '');
                childPartialVaryPath = (0, _varypath.appendLayoutVaryPath)(partialVaryPath, childParamKey, childSegmentName);
                childSegment = [
                    childSegmentName,
                    childParamKey,
                    childParam.type,
                    childParam.siblings
                ];
                childDoesAppearInURL = true;
            } else {
                // This segment does not have a param. Inherit the partial vary path of
                // the parent.
                childPartialVaryPath = partialVaryPath;
                childSegment = childSegmentName;
                childDoesAppearInURL = (0, _routeparams.doesStaticSegmentAppearInURL)(childSegmentName);
            }
            // Only increment the index if the segment appears in the URL. If it's a
            // "virtual" segment, like a route group, it remains the same.
            var childPathnamePartsIndex = childDoesAppearInURL ? pathnamePartsIndex + 1 : pathnamePartsIndex;
            var childRequestKeyPart = (0, _segmentvalueencoding.createSegmentRequestKeyPart)(childSegment);
            var childRequestKey = (0, _segmentvalueencoding.appendSegmentRequestKeyPart)(requestKey, parallelRouteKey, childRequestKeyPart);
            slots[parallelRouteKey] = convertTreePrefetchToRouteTree(childPrefetch, childSegment, childPartialVaryPath, childRequestKey, pathnameParts, childPathnamePartsIndex, renderedSearch, acc);
        }
    } else {
        if (requestKey.endsWith(_segment.PAGE_SEGMENT_KEY)) {
            // This is a page segment.
            isPage = true;
            varyPath = (0, _varypath.finalizePageVaryPath)(requestKey, renderedSearch, partialVaryPath);
            // The metadata "segment" is not part the route tree, but it has the same
            // conceptual params as a page segment. Write the vary path into the
            // accumulator object. If there are multiple parallel pages, we use the
            // first one. Which page we choose is arbitrary as long as it's
            // consistently the same one every time every time. See
            // finalizeMetadataVaryPath for more details.
            if (acc.metadataVaryPath === null) {
                acc.metadataVaryPath = (0, _varypath.finalizeMetadataVaryPath)(requestKey, renderedSearch, partialVaryPath);
            }
        } else {
            // This is a layout segment.
            isPage = false;
            varyPath = (0, _varypath.finalizeLayoutVaryPath)(requestKey, partialVaryPath);
        }
    }
    return {
        requestKey: requestKey,
        segment: segment,
        refreshState: null,
        // TODO: Cheating the type system here a bit because TypeScript can't tell
        // that the type of isPage and varyPath are consistent. The fix would be to
        // create separate constructors and call the appropriate one from each of
        // the branches above. Just seems a bit overkill only for one field so I'll
        // leave it as-is for now. If isPage were wrong it would break the behavior
        // and we'd catch it quickly, anyway.
        varyPath: varyPath,
        isPage: isPage,
        slots: slots,
        prefetchHints: prefetch.prefetchHints
    };
}
function convertRootFlightRouterStateToRouteTree(flightRouterState, renderedSearch, acc) {
    return convertFlightRouterStateToRouteTree(flightRouterState, _segmentvalueencoding.ROOT_SEGMENT_REQUEST_KEY, null, renderedSearch, acc);
}
function convertReusedFlightRouterStateToRouteTree(parentRouteTree, parallelRouteKey, flightRouterState, renderedSearch, acc) {
    // Create a RouteTree for a FlightRouterState that was reused from an older
    // route. This happens during a navigation when a parallel route slot does not
    // match the target route; we reuse whatever slot was already active.
    // Unlike a FlightRouterState, the RouteTree type contains backreferences to
    // the parent segments. Append the vary path to the parent's vary path.
    var parentPartialVaryPath = parentRouteTree.isPage ? (0, _varypath.getPartialPageVaryPath)(parentRouteTree.varyPath) : (0, _varypath.getPartialLayoutVaryPath)(parentRouteTree.varyPath);
    var segment = flightRouterState[0];
    // And the request key.
    var parentRequestKey = parentRouteTree.requestKey;
    var requestKeyPart = (0, _segmentvalueencoding.createSegmentRequestKeyPart)(segment);
    var requestKey = (0, _segmentvalueencoding.appendSegmentRequestKeyPart)(parentRequestKey, parallelRouteKey, requestKeyPart);
    return convertFlightRouterStateToRouteTree(flightRouterState, requestKey, parentPartialVaryPath, renderedSearch, acc);
}
function convertFlightRouterStateToRouteTree(flightRouterState, requestKey, parentPartialVaryPath, parentRenderedSearch, acc) {
    var _flightRouterState_, _flightRouterState_1;
    var originalSegment = flightRouterState[0];
    // If the FlightRouterState has a refresh state, then this segment is part of
    // an inactive parallel route. It has a different rendered search query than
    // the outer parent route. In order to construct the inactive route correctly,
    // we must restore the query that was originally used to render it.
    var compressedRefreshState = (_flightRouterState_ = flightRouterState[2]) !== null && _flightRouterState_ !== void 0 ? _flightRouterState_ : null;
    var refreshState = compressedRefreshState !== null ? {
        canonicalUrl: compressedRefreshState[0],
        renderedSearch: compressedRefreshState[1]
    } : null;
    var renderedSearch = refreshState !== null ? refreshState.renderedSearch : parentRenderedSearch;
    var segment;
    var partialVaryPath;
    var isPage;
    var varyPath;
    if (Array.isArray(originalSegment)) {
        isPage = false;
        var paramCacheKey = originalSegment[1];
        var paramName = originalSegment[0];
        partialVaryPath = (0, _varypath.appendLayoutVaryPath)(parentPartialVaryPath, paramCacheKey, paramName);
        varyPath = (0, _varypath.finalizeLayoutVaryPath)(requestKey, partialVaryPath);
        segment = originalSegment;
    } else {
        // This segment does not have a param. Inherit the partial vary path of
        // the parent.
        partialVaryPath = parentPartialVaryPath;
        if (requestKey.endsWith(_segment.PAGE_SEGMENT_KEY)) {
            // This is a page segment.
            isPage = true;
            // The navigation implementation expects the search params to be included
            // in the segment. However, in the case of a static response, the search
            // params are omitted. So the client needs to add them back in when reading
            // from the Segment Cache.
            //
            // For consistency, we'll do this for dynamic responses, too.
            //
            // TODO: We should move search params out of FlightRouterState and handle
            // them entirely on the client, similar to our plan for dynamic params.
            segment = _segment.PAGE_SEGMENT_KEY;
            varyPath = (0, _varypath.finalizePageVaryPath)(requestKey, renderedSearch, partialVaryPath);
            // The metadata "segment" is not part the route tree, but it has the same
            // conceptual params as a page segment. Write the vary path into the
            // accumulator object. If there are multiple parallel pages, we use the
            // first one. Which page we choose is arbitrary as long as it's
            // consistently the same one every time every time. See
            // finalizeMetadataVaryPath for more details.
            if (acc.metadataVaryPath === null) {
                acc.metadataVaryPath = (0, _varypath.finalizeMetadataVaryPath)(requestKey, renderedSearch, partialVaryPath);
            }
        } else {
            // This is a layout segment.
            isPage = false;
            segment = originalSegment;
            varyPath = (0, _varypath.finalizeLayoutVaryPath)(requestKey, partialVaryPath);
        }
    }
    var slots = null;
    var parallelRoutes = flightRouterState[1];
    for(var parallelRouteKey in parallelRoutes){
        var childRouterState = parallelRoutes[parallelRouteKey];
        var childSegment = childRouterState[0];
        // TODO: Eventually, the param values will not be included in the response
        // from the server. We'll instead fill them in on the client by parsing
        // the URL. This is where we'll do that.
        var childRequestKeyPart = (0, _segmentvalueencoding.createSegmentRequestKeyPart)(childSegment);
        var childRequestKey = (0, _segmentvalueencoding.appendSegmentRequestKeyPart)(requestKey, parallelRouteKey, childRequestKeyPart);
        var childTree = convertFlightRouterStateToRouteTree(childRouterState, childRequestKey, partialVaryPath, renderedSearch, acc);
        if (slots === null) {
            slots = _define_property._({}, parallelRouteKey, childTree);
        } else {
            slots[parallelRouteKey] = childTree;
        }
    }
    return {
        requestKey: requestKey,
        segment: segment,
        refreshState: refreshState,
        // TODO: Cheating the type system here a bit because TypeScript can't tell
        // that the type of isPage and varyPath are consistent. The fix would be to
        // create separate constructors and call the appropriate one from each of
        // the branches above. Just seems a bit overkill only for one field so I'll
        // leave it as-is for now. If isPage were wrong it would break the behavior
        // and we'd catch it quickly, anyway.
        varyPath: varyPath,
        isPage: isPage,
        slots: slots,
        prefetchHints: (_flightRouterState_1 = flightRouterState[4]) !== null && _flightRouterState_1 !== void 0 ? _flightRouterState_1 : 0
    };
}
function convertRouteTreeToFlightRouterState(routeTree) {
    var parallelRoutes = {};
    if (routeTree.slots !== null) {
        for(var parallelRouteKey in routeTree.slots){
            parallelRoutes[parallelRouteKey] = convertRouteTreeToFlightRouterState(routeTree.slots[parallelRouteKey]);
        }
    }
    var flightRouterState = [
        routeTree.segment,
        parallelRoutes,
        null,
        null
    ];
    return flightRouterState;
}
function fetchRouteOnCacheMiss(entry, key) {
    return _async_to_generator._(function() {
        var pathname, search, nextUrl, segmentPath, _obj, headers, url, response, urlAfterRedirects, headResponse, canonicalUrl, varyHeader, couldBeIntercepted, closed, routeIsPPREnabled, _response_headers_get, _ref, prefetchStream, responseSize, serverData, renderedPathname, renderedSearch, acc, routeTree, metadataVaryPath, _response_headers_get1, _ref1, prefetchStream1, responseSize1, serverData1, headVaryParamsThenable, headVaryParams, fulfilledVaryPath, isRevalidation, error;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    // This function is allowed to use async/await because it contains the actual
                    // fetch that gets issued on a cache miss. Notice it writes the result to the
                    // cache entry directly, rather than return data that is then written by
                    // the caller.
                    pathname = key.pathname;
                    search = key.search;
                    nextUrl = key.nextUrl;
                    segmentPath = '/_tree';
                    headers = (_obj = {}, _define_property._(_obj, _approuterheaders.RSC_HEADER, '1'), _define_property._(_obj, _approuterheaders.NEXT_ROUTER_PREFETCH_HEADER, '1'), _define_property._(_obj, _approuterheaders.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER, segmentPath), _obj);
                    if (nextUrl !== null) {
                        headers[_approuterheaders.NEXT_URL] = nextUrl;
                    }
                    // Tell the server to perform a static pre-render for the Instant Navigation
                    // Testing API. Static pre-renders don't normally happen during development.
                    addInstantPrefetchHeaderIfLocked(headers);
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        13,
                        ,
                        14
                    ]);
                    url = new URL(pathname + search, location.origin);
                    if ("TURBOPACK compile-time truthy", 1) return [
                        3,
                        4
                    ];
                    //TURBOPACK unreachable
                    ;
                case 2:
                    headResponse = _state.sent();
                    if (headResponse.status < 200 || headResponse.status >= 400) {
                        // The target page responded w/o a successful status code
                        // Could be a WAF serving a 403, or a 5xx from a backend
                        //
                        // Note that we can't use headResponse.ok here, because
                        // Response#ok returns `false` with 3xx responses.
                        rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
                        return [
                            2,
                            null
                        ];
                    }
                    urlAfterRedirects = headResponse.redirected ? new URL(headResponse.url) : url;
                    return [
                        4,
                        fetchPrefetchResponse(addSegmentPathToUrlInOutputExportMode(urlAfterRedirects, segmentPath), headers)
                    ];
                case 3:
                    response = _state.sent();
                    return [
                        3,
                        6
                    ];
                case 4:
                    return [
                        4,
                        fetchPrefetchResponse(url, headers)
                    ];
                case 5:
                    // "Server" mode. We can use request headers instead of the pathname.
                    // TODO: The eventual plan is to get rid of our custom request headers and
                    // encode everything into the URL, using a similar strategy to the
                    // "output: export" block above.
                    response = _state.sent();
                    urlAfterRedirects = response !== null && response.redirected ? new URL(response.url) : url;
                    _state.label = 6;
                case 6:
                    if (!response || !response.ok || // 204 is a Cache miss. Though theoretically this shouldn't happen when
                    // PPR is enabled, because we always respond to route tree requests, even
                    // if it needs to be blockingly generated on demand.
                    response.status === 204 || !response.body) {
                        // Server responded with an error, or with a miss. We should still cache
                        // the response, but we can try again after 10 seconds.
                        rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
                        return [
                            2,
                            null
                        ];
                    }
                    // TODO: The canonical URL is the href without the origin. I think
                    // historically the reason for this is because the initial canonical URL
                    // gets passed as a prop to the top-level React component, which means it
                    // needs to be computed during SSR. If it were to include the origin, it
                    // would need to always be same as location.origin on the client, to prevent
                    // a hydration mismatch. To sidestep this complexity, we omit the origin.
                    //
                    // However, since this is neither a native URL object nor a fully qualified
                    // URL string, we need to be careful about how we use it. To prevent subtle
                    // mistakes, we should create a special type for it, instead of just string.
                    // Or, we should just use a (readonly) URL object instead. The type of the
                    // prop that we pass to seed the initial state does not need to be the same
                    // type as the state itself.
                    canonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(urlAfterRedirects);
                    // Check whether the response varies based on the Next-Url header.
                    varyHeader = response.headers.get('vary');
                    couldBeIntercepted = varyHeader !== null && varyHeader.includes(_approuterheaders.NEXT_URL);
                    // TODO: The `closed` promise was originally used to track when a streaming
                    // network connection closes, so the scheduler could limit concurrent
                    // connections. Now that prefetch responses are buffered, `closed` is
                    // resolved immediately after buffering — before the outer function even
                    // returns. This mechanism is only still meaningful for dynamic (Full)
                    // prefetches, which use incremental streaming. Consider removing the
                    // `closed` plumbing for buffered prefetch paths.
                    closed = (0, _promisewithresolvers.createPromiseWithResolvers)();
                    // This checks whether the response was served from the per-segment cache,
                    // rather than the old prefetching flow. If it fails, it implies that PPR
                    // is disabled on this route.
                    routeIsPPREnabled = response.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER) === '2' || // In output: "export" mode, we can't rely on response headers. But if we
                    // receive a well-formed response, we can assume it's a static response,
                    // because all data is static in this mode.
                    isOutputExportMode;
                    if (!routeIsPPREnabled) return [
                        3,
                        9
                    ];
                    return [
                        4,
                        createNonTaskyPrefetchResponseStream(response.body)
                    ];
                case 7:
                    _ref = _state.sent(), prefetchStream = _ref.stream, responseSize = _ref.size;
                    closed.resolve();
                    (0, _cachemap.setSizeInCacheMap)(entry, responseSize);
                    return [
                        4,
                        (0, _fetchserverresponse.createFromNextReadableStream)(prefetchStream, headers, {
                            allowPartialStream: true
                        })
                    ];
                case 8:
                    serverData = _state.sent();
                    if (((_response_headers_get = response.headers.get(_constants.NEXT_NAV_DEPLOYMENT_ID_HEADER)) !== null && _response_headers_get !== void 0 ? _response_headers_get : serverData.buildId) !== (0, _navigationbuildid.getNavigationBuildId)()) {
                        // The server build does not match the client. Treat as a 404. During
                        // an actual navigation, the router will trigger an MPA navigation.
                        // TODO: We should cache the fact that this is an MPA navigation.
                        rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
                        return [
                            2,
                            null
                        ];
                    }
                    // Get the params that were used to render the target page. These may
                    // be different from the params in the request URL, if the page
                    // was rewritten.
                    renderedPathname = (0, _routeparams.getRenderedPathname)(response);
                    renderedSearch = (0, _routeparams.getRenderedSearch)(response);
                    // Convert the server-sent data into the RouteTree format used by the
                    // client cache.
                    //
                    // During this traversal, we accumulate additional data into this
                    // "accumulator" object.
                    acc = {
                        metadataVaryPath: null
                    };
                    routeTree = convertRootTreePrefetchToRouteTree(serverData, renderedPathname, renderedSearch, acc);
                    metadataVaryPath = acc.metadataVaryPath;
                    if (metadataVaryPath === null) {
                        rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
                        return [
                            2,
                            null
                        ];
                    }
                    (0, _optimisticroutes.discoverKnownRoute)(Date.now(), pathname, nextUrl, entry, routeTree, metadataVaryPath, couldBeIntercepted, canonicalUrl, routeIsPPREnabled, false // hasDynamicRewrite
                    );
                    return [
                        3,
                        12
                    ];
                case 9:
                    return [
                        4,
                        createNonTaskyPrefetchResponseStream(response.body)
                    ];
                case 10:
                    _ref1 = _state.sent(), prefetchStream1 = _ref1.stream, responseSize1 = _ref1.size;
                    closed.resolve();
                    (0, _cachemap.setSizeInCacheMap)(entry, responseSize1);
                    return [
                        4,
                        (0, _fetchserverresponse.createFromNextReadableStream)(prefetchStream1, headers, {
                            allowPartialStream: true
                        })
                    ];
                case 11:
                    serverData1 = _state.sent();
                    if (((_response_headers_get1 = response.headers.get(_constants.NEXT_NAV_DEPLOYMENT_ID_HEADER)) !== null && _response_headers_get1 !== void 0 ? _response_headers_get1 : serverData1.b) !== (0, _navigationbuildid.getNavigationBuildId)()) {
                        // The server build does not match the client. Treat as a 404. During
                        // an actual navigation, the router will trigger an MPA navigation.
                        // TODO: We should cache the fact that this is an MPA navigation.
                        rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
                        return [
                            2,
                            null
                        ];
                    }
                    // Read head vary params synchronously. Individual segments carry their
                    // own thenables in CacheNodeSeedData.
                    headVaryParamsThenable = serverData1.h;
                    headVaryParams = headVaryParamsThenable !== null ? (0, _varyparamsdecoding.readVaryParams)(headVaryParamsThenable) : null;
                    writeDynamicTreeResponseIntoCache(Date.now(), // using the LoadingBoundary fetch strategy, so mark their cache entries accordingly.
                    _types.FetchStrategy.LoadingBoundary, response, serverData1, entry, couldBeIntercepted, canonicalUrl, routeIsPPREnabled, headVaryParams, pathname, nextUrl);
                    _state.label = 12;
                case 12:
                    if (!couldBeIntercepted) {
                        // This route will never be intercepted. So we can use this entry for all
                        // requests to this route, regardless of the Next-Url header. This works
                        // because when reading the cache we always check for a valid
                        // non-intercepted entry first.
                        // Re-key the entry. The `set` implementation handles removing it from
                        // its previous position in the cache. We don't need to do anything to
                        // update the LRU, because the entry is already in it.
                        // TODO: Treat this as an upsert — should check if an entry already
                        // exists at the new keypath, and if so, whether we should keep that
                        // one instead.
                        fulfilledVaryPath = (0, _varypath.getFulfilledRouteVaryPath)(pathname, search, nextUrl, couldBeIntercepted);
                        isRevalidation = false;
                        (0, _cachemap.setInCacheMap)(routeCacheMap, fulfilledVaryPath, entry, isRevalidation);
                    }
                    // Return a promise that resolves when the network connection closes, so
                    // the scheduler can track the number of concurrent network connections.
                    return [
                        2,
                        {
                            value: null,
                            closed: closed.promise
                        }
                    ];
                case 13:
                    error = _state.sent();
                    // Either the connection itself failed, or something bad happened while
                    // decoding the response.
                    rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
                    return [
                        2,
                        null
                    ];
                case 14:
                    return [
                        2
                    ];
            }
        });
    })();
}
function fetchSegmentOnCacheMiss(route, segmentCacheEntry, routeKey, tree) {
    return _async_to_generator._(function() {
        var url, nextUrl, requestKey, normalizedRequestKey, _obj, headers, requestUrl, _response_headers_get, response, closed, _ref, prefetchStream, responseSize, serverData, now, staleAt, fulfilledEntry, varyParams, fulfilledVaryPath, error;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    // This function is allowed to use async/await because it contains the actual
                    // fetch that gets issued on a cache miss. Notice it writes the result to the
                    // cache entry directly, rather than return data that is then written by
                    // the caller.
                    //
                    // Segment fetches are non-blocking so we don't need to ping the scheduler
                    // on completion.
                    // Use the canonical URL to request the segment, not the original URL. These
                    // are usually the same, but the canonical URL will be different if the route
                    // tree response was redirected. To avoid an extra waterfall on every segment
                    // request, we pass the redirected URL instead of the original one.
                    url = new URL(route.canonicalUrl, location.origin);
                    nextUrl = routeKey.nextUrl;
                    requestKey = tree.requestKey;
                    normalizedRequestKey = requestKey === _segmentvalueencoding.ROOT_SEGMENT_REQUEST_KEY ? // `_index` instead of as an empty string. This should be treated as
                    // an implementation detail and not as a stable part of the protocol.
                    // It just needs to match the equivalent logic that happens when
                    // prerendering the responses. It should not leak outside of Next.js.
                    '/_index' : requestKey;
                    headers = (_obj = {}, _define_property._(_obj, _approuterheaders.RSC_HEADER, '1'), _define_property._(_obj, _approuterheaders.NEXT_ROUTER_PREFETCH_HEADER, '1'), _define_property._(_obj, _approuterheaders.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER, normalizedRequestKey), _obj);
                    if (nextUrl !== null) {
                        headers[_approuterheaders.NEXT_URL] = nextUrl;
                    }
                    // Tell the server to perform a static pre-render for the Instant Navigation
                    // Testing API. Static pre-renders don't normally happen during development.
                    addInstantPrefetchHeaderIfLocked(headers);
                    requestUrl = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : url;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        5,
                        ,
                        6
                    ]);
                    return [
                        4,
                        fetchPrefetchResponse(requestUrl, headers)
                    ];
                case 2:
                    response = _state.sent();
                    if (!response || !response.ok || response.status === 204 || // Cache miss
                    // This checks whether the response was served from the per-segment cache,
                    // rather than the old prefetching flow. If it fails, it implies that PPR
                    // is disabled on this route. Theoretically this should never happen
                    // because we only issue requests for segments once we've verified that
                    // the route supports PPR.
                    response.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER) !== '2' && // In output: "export" mode, we can't rely on response headers. But if
                    // we receive a well-formed response, we can assume it's a static
                    // response, because all data is static in this mode.
                    !isOutputExportMode || !response.body) {
                        // Server responded with an error, or with a miss. We should still cache
                        // the response, but we can try again after 10 seconds.
                        rejectSegmentCacheEntry(segmentCacheEntry, Date.now() + 10 * 1000);
                        return [
                            2,
                            null
                        ];
                    }
                    // See TODO in fetchRouteOnCacheMiss about removing `closed` for
                    // buffered prefetch paths.
                    closed = (0, _promisewithresolvers.createPromiseWithResolvers)();
                    return [
                        4,
                        createNonTaskyPrefetchResponseStream(response.body)
                    ];
                case 3:
                    _ref = _state.sent(), prefetchStream = _ref.stream, responseSize = _ref.size;
                    closed.resolve();
                    (0, _cachemap.setSizeInCacheMap)(segmentCacheEntry, responseSize);
                    return [
                        4,
                        (0, _fetchserverresponse.createFromNextReadableStream)(prefetchStream, headers, {
                            allowPartialStream: true
                        })
                    ];
                case 4:
                    serverData = _state.sent();
                    if (((_response_headers_get = response.headers.get(_constants.NEXT_NAV_DEPLOYMENT_ID_HEADER)) !== null && _response_headers_get !== void 0 ? _response_headers_get : serverData.buildId) !== (0, _navigationbuildid.getNavigationBuildId)()) {
                        // The server build does not match the client. Treat as a 404. During
                        // an actual navigation, the router will trigger an MPA navigation.
                        rejectSegmentCacheEntry(segmentCacheEntry, Date.now() + 10 * 1000);
                        return [
                            2,
                            null
                        ];
                    }
                    now = Date.now();
                    staleAt = now + getStaleTimeMs(serverData.staleTime);
                    fulfilledEntry = fulfillSegmentCacheEntry(segmentCacheEntry, serverData.rsc, staleAt, serverData.isPartial);
                    // If the server tells us which params the segment varies by, we can re-key
                    // the entry to a more generic vary path. This allows the entry to be reused
                    // across different param values for params that the segment doesn't
                    // actually depend on.
                    varyParams = serverData.varyParams;
                    fulfilledVaryPath = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, _varypath.getSegmentVaryPathForRequest)(segmentCacheEntry.fetchStrategy, tree);
                    // Re-key and upsert the entry at the fulfilled vary path. This ensures
                    // the entry is stored at the most generic path possible based on which
                    // params the segment actually depends on.
                    upsertSegmentEntry(now, fulfilledVaryPath, fulfilledEntry);
                    return [
                        2,
                        {
                            value: fulfilledEntry,
                            // Return a promise that resolves when the network connection closes, so
                            // the scheduler can track the number of concurrent network connections.
                            closed: closed.promise
                        }
                    ];
                case 5:
                    error = _state.sent();
                    // Either the connection itself failed, or something bad happened while
                    // decoding the response.
                    rejectSegmentCacheEntry(segmentCacheEntry, Date.now() + 10 * 1000);
                    return [
                        2,
                        null
                    ];
                case 6:
                    return [
                        2
                    ];
            }
        });
    })();
}
function fetchInlinedSegmentsOnCacheMiss(route, routeKey, tree, spawnedEntries) {
    return _async_to_generator._(function() {
        var url, nextUrl, _obj, headers, _response_headers_get, response, closed, _ref, prefetchStream, serverData, now, headStaleAt, headKey, ownedHeadEntry, existingEntry, error;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    // When prefetch inlining is enabled, all segment data for a route is bundled
                    // into a single /_inlined response instead of individual per-segment
                    // requests. This function fetches that response and walks the tree to fill
                    // all segment cache entries at once.
                    url = new URL(route.canonicalUrl, location.origin);
                    nextUrl = routeKey.nextUrl;
                    headers = (_obj = {}, _define_property._(_obj, _approuterheaders.RSC_HEADER, '1'), _define_property._(_obj, _approuterheaders.NEXT_ROUTER_PREFETCH_HEADER, '1'), _define_property._(_obj, _approuterheaders.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER, '/' + _segment.PAGE_SEGMENT_KEY), _obj);
                    if (nextUrl !== null) {
                        headers[_approuterheaders.NEXT_URL] = nextUrl;
                    }
                    addInstantPrefetchHeaderIfLocked(headers);
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        5,
                        ,
                        6
                    ]);
                    return [
                        4,
                        fetchPrefetchResponse(url, headers)
                    ];
                case 2:
                    response = _state.sent();
                    if (!response || !response.ok || response.status === 204 || response.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER) !== '2' && !isOutputExportMode || !response.body) {
                        rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
                        return [
                            2,
                            null
                        ];
                    }
                    // See TODO in fetchRouteOnCacheMiss about removing `closed` for
                    // buffered prefetch paths.
                    closed = (0, _promisewithresolvers.createPromiseWithResolvers)();
                    return [
                        4,
                        createNonTaskyPrefetchResponseStream(response.body)
                    ];
                case 3:
                    _ref = _state.sent(), prefetchStream = _ref.stream;
                    closed.resolve();
                    return [
                        4,
                        (0, _fetchserverresponse.createFromNextReadableStream)(prefetchStream, headers, {
                            allowPartialStream: true
                        })
                    ];
                case 4:
                    serverData = _state.sent();
                    if (((_response_headers_get = response.headers.get(_constants.NEXT_NAV_DEPLOYMENT_ID_HEADER)) !== null && _response_headers_get !== void 0 ? _response_headers_get : serverData.tree.segment.buildId) !== (0, _navigationbuildid.getNavigationBuildId)()) {
                        rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
                        return [
                            2,
                            null
                        ];
                    }
                    now = Date.now();
                    // Walk the inlined tree in parallel with the RouteTree and fill
                    // segment cache entries.
                    fillInlinedSegmentEntries(now, route, tree, serverData.tree, spawnedEntries);
                    // Fill the head entry.
                    headStaleAt = now + getStaleTimeMs(serverData.head.staleTime);
                    headKey = route.metadata.requestKey;
                    ownedHeadEntry = spawnedEntries.get(headKey);
                    if (ownedHeadEntry !== undefined) {
                        fulfillSegmentCacheEntry(ownedHeadEntry, serverData.head.rsc, headStaleAt, serverData.head.isPartial);
                    } else {
                        // The head was already cached. Try to upsert if the entry is empty.
                        existingEntry = readOrCreateSegmentCacheEntry(now, _types.FetchStrategy.PPR, route.metadata);
                        if (existingEntry.status === 0) {
                            fulfillSegmentCacheEntry(upgradeToPendingSegment(existingEntry, _types.FetchStrategy.PPR), serverData.head.rsc, headStaleAt, serverData.head.isPartial);
                        }
                    }
                    // Reject any remaining entries that were not fulfilled by the response.
                    rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
                    return [
                        2,
                        {
                            value: null,
                            closed: closed.promise
                        }
                    ];
                case 5:
                    error = _state.sent();
                    rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
                    return [
                        2,
                        null
                    ];
                case 6:
                    return [
                        2
                    ];
            }
        });
    })();
}
function fillInlinedSegmentEntries(now, route, tree, inlinedNode, spawnedEntries) {
    // Check if the spawned entries map has an entry for this segment's key.
    var segment = inlinedNode.segment;
    var staleAt = now + getStaleTimeMs(segment.staleTime);
    var ownedEntry = spawnedEntries.get(tree.requestKey);
    if (ownedEntry !== undefined) {
        // We own this entry. Fulfill it directly.
        fulfillSegmentCacheEntry(ownedEntry, segment.rsc, staleAt, segment.isPartial);
    } else {
        // Not owned by us — this is extra data from the inlined response for a
        // segment that was already cached. Try to upsert if the entry is empty.
        var existingEntry = readOrCreateSegmentCacheEntry(now, _types.FetchStrategy.PPR, tree);
        if (existingEntry.status === 0) {
            fulfillSegmentCacheEntry(upgradeToPendingSegment(existingEntry, _types.FetchStrategy.PPR), segment.rsc, staleAt, segment.isPartial);
        }
    }
    // Recurse into children.
    if (tree.slots !== null && inlinedNode.slots !== null) {
        for(var parallelRouteKey in tree.slots){
            var childTree = tree.slots[parallelRouteKey];
            var childInlinedNode = inlinedNode.slots[parallelRouteKey];
            if (childInlinedNode !== undefined) {
                fillInlinedSegmentEntries(now, route, childTree, childInlinedNode, spawnedEntries);
            }
        }
    }
}
function fetchSegmentPrefetchesUsingDynamicRequest(task, route, fetchStrategy, dynamicRequestTree, spawnedEntries) {
    return _async_to_generator._(function() {
        var key, url, nextUrl, _obj, headers, _ref, _response_headers_get, response, renderedSearch, closed, fulfilledEntries, prefetchStream, bufferedResponseSize, _ref1, stream, size, _ref2, serverData, cacheData, headVaryParamsThenable, headVaryParams, now, staleAt, isResponsePartial, buildId, flightDatas, navigationSeed, averageSize, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry, error;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    key = task.key;
                    url = new URL(route.canonicalUrl, location.origin);
                    nextUrl = key.nextUrl;
                    if (spawnedEntries.size === 1 && spawnedEntries.has(route.metadata.requestKey)) {
                        // The only thing pending is the head. Instruct the server to
                        // skip over everything else.
                        dynamicRequestTree = MetadataOnlyRequestTree;
                    }
                    headers = (_obj = {}, _define_property._(_obj, _approuterheaders.RSC_HEADER, '1'), _define_property._(_obj, _approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER, (0, _flightdatahelpers.prepareFlightRouterStateForRequest)(dynamicRequestTree)), _obj);
                    if (nextUrl !== null) {
                        headers[_approuterheaders.NEXT_URL] = nextUrl;
                    }
                    switch(fetchStrategy){
                        case _types.FetchStrategy.Full:
                            {
                                break;
                            }
                        case _types.FetchStrategy.PPRRuntime:
                            {
                                headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER] = '2';
                                break;
                            }
                        case _types.FetchStrategy.LoadingBoundary:
                            {
                                headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER] = '1';
                                break;
                            }
                        default:
                            {
                                fetchStrategy;
                            }
                    }
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        8,
                        ,
                        9
                    ]);
                    return [
                        4,
                        fetchPrefetchResponse(url, headers)
                    ];
                case 2:
                    response = _state.sent();
                    if (!response || !response.ok || !response.body) {
                        // Server responded with an error, or with a miss. We should still cache
                        // the response, but we can try again after 10 seconds.
                        rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
                        return [
                            2,
                            null
                        ];
                    }
                    renderedSearch = (0, _routeparams.getRenderedSearch)(response);
                    if (renderedSearch !== route.renderedSearch) {
                        // The search params that were used to render the target page are
                        // different from the search params in the request URL. This only happens
                        // when there's a dynamic rewrite in between the tree prefetch and the
                        // data prefetch.
                        // TODO: For now, since this is an edge case, we reject the prefetch, but
                        // the proper way to handle this is to evict the stale route tree entry
                        // then fill the cache with the new response.
                        rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
                        return [
                            2,
                            null
                        ];
                    }
                    // Track when the network connection closes. Only meaningful for Full
                    // (dynamic) prefetches which use incremental streaming. For buffered
                    // paths, this is resolved immediately — see TODO in fetchRouteOnCacheMiss.
                    closed = (0, _promisewithresolvers.createPromiseWithResolvers)();
                    fulfilledEntries = null;
                    bufferedResponseSize = null;
                    if (!(fetchStrategy === _types.FetchStrategy.Full)) return [
                        3,
                        3
                    ];
                    // Full prefetches are dynamic responses stored in the prefetch cache.
                    // They don't carry vary params or other cache metadata, so there's no
                    // need to buffer them. Use the incremental version to allow data to be
                    // processed as it arrives.
                    prefetchStream = createIncrementalPrefetchResponseStream(response.body, closed.resolve, function onResponseSizeUpdate(totalBytesReceivedSoFar) {
                        // When processing a dynamic response, we don't know how large each
                        // individual segment is, so approximate by assigning each segment
                        // the average of the total response size.
                        if (fulfilledEntries === null) {
                            // Haven't received enough data yet to know which segments
                            // were included.
                            return;
                        }
                        var averageSize = totalBytesReceivedSoFar / fulfilledEntries.length;
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = fulfilledEntries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var entry = _step.value;
                                (0, _cachemap.setSizeInCacheMap)(entry, averageSize);
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
                    });
                    return [
                        3,
                        5
                    ];
                case 3:
                    return [
                        4,
                        createNonTaskyPrefetchResponseStream(response.body)
                    ];
                case 4:
                    _ref1 = _state.sent(), stream = _ref1.stream, size = _ref1.size;
                    closed.resolve();
                    prefetchStream = stream;
                    bufferedResponseSize = size;
                    _state.label = 5;
                case 5:
                    return [
                        4,
                        Promise.all([
                            (0, _fetchserverresponse.createFromNextReadableStream)(prefetchStream, headers, {
                                allowPartialStream: true
                            }),
                            response.cacheData
                        ])
                    ];
                case 6:
                    _ref2 = _sliced_to_array._.apply(void 0, [
                        _state.sent(),
                        2
                    ]), serverData = _ref2[0], cacheData = _ref2[1];
                    // Read head vary params synchronously. Individual segments carry their
                    // own thenables in CacheNodeSeedData.
                    headVaryParamsThenable = serverData.h;
                    headVaryParams = headVaryParamsThenable !== null ? (0, _varyparamsdecoding.readVaryParams)(headVaryParamsThenable) : null;
                    now = Date.now();
                    return [
                        4,
                        getStaleAt(now, serverData.s, response)
                    ];
                case 7:
                    staleAt = _state.sent();
                    // PPRRuntime prefetches are partial when the server marks the response
                    // as '~' (Partial). Full/LoadingBoundary prefetches are always complete.
                    isResponsePartial = fetchStrategy === _types.FetchStrategy.PPRRuntime && ((_ref = cacheData === null || cacheData === void 0 ? void 0 : cacheData.isResponsePartial) !== null && _ref !== void 0 ? _ref : false);
                    // Aside from writing the data into the cache, this function also returns
                    // the entries that were fulfilled, so we can streamingly update their sizes
                    // in the LRU as more data comes in.
                    buildId = (_response_headers_get = response.headers.get(_constants.NEXT_NAV_DEPLOYMENT_ID_HEADER)) !== null && _response_headers_get !== void 0 ? _response_headers_get : serverData.b;
                    flightDatas = (0, _flightdatahelpers.normalizeFlightData)(serverData.f);
                    if (typeof flightDatas === 'string') {
                        rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
                        return [
                            2,
                            null
                        ];
                    }
                    navigationSeed = (0, _navigation.convertServerPatchToFullTree)(now, dynamicRequestTree, flightDatas, renderedSearch, _bfcache.UnknownDynamicStaleTime);
                    fulfilledEntries = writeDynamicRenderResponseIntoCache(now, fetchStrategy, flightDatas, buildId, isResponsePartial, headVaryParams, staleAt, navigationSeed, spawnedEntries);
                    // For buffered responses, update LRU sizes now that we know which
                    // entries were fulfilled.
                    if (bufferedResponseSize !== null && fulfilledEntries !== null && fulfilledEntries.length > 0) {
                        averageSize = bufferedResponseSize / fulfilledEntries.length;
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = fulfilledEntries[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                entry = _step.value;
                                (0, _cachemap.setSizeInCacheMap)(entry, averageSize);
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
                    // Return a promise that resolves when the network connection closes, so
                    // the scheduler can track the number of concurrent network connections.
                    return [
                        2,
                        {
                            value: null,
                            closed: closed.promise
                        }
                    ];
                case 8:
                    error = _state.sent();
                    rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
                    return [
                        2,
                        null
                    ];
                case 9:
                    return [
                        2
                    ];
            }
        });
    })();
}
function writeDynamicTreeResponseIntoCache(now, fetchStrategy, response, serverData, entry, couldBeIntercepted, canonicalUrl, routeIsPPREnabled, headVaryParams, originalPathname, nextUrl) {
    var _response_headers_get;
    var renderedSearch = (0, _routeparams.getRenderedSearch)(response);
    var normalizedFlightDataResult = (0, _flightdatahelpers.normalizeFlightData)(serverData.f);
    if (// MPA navigation.
    typeof normalizedFlightDataResult === 'string' || normalizedFlightDataResult.length !== 1) {
        rejectRouteCacheEntry(entry, now + 10 * 1000);
        return;
    }
    var flightData = normalizedFlightDataResult[0];
    if (!flightData.isRootRender) {
        // Unexpected response format.
        rejectRouteCacheEntry(entry, now + 10 * 1000);
        return;
    }
    var flightRouterState = flightData.tree;
    // If the response was postponed, segments may contain dynamic holes.
    // The head has its own partiality flag (flightDataEntry.isHeadPartial)
    // which is handled separately in writeDynamicRenderResponseIntoCache.
    var isResponsePartial = response.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER) === '1';
    // Convert the server-sent data into the RouteTree format used by the
    // client cache.
    //
    // During this traversal, we accumulate additional data into this
    // "accumulator" object.
    var acc = {
        metadataVaryPath: null
    };
    var routeTree = convertRootFlightRouterStateToRouteTree(flightRouterState, renderedSearch, acc);
    var metadataVaryPath = acc.metadataVaryPath;
    if (metadataVaryPath === null) {
        rejectRouteCacheEntry(entry, now + 10 * 1000);
        return;
    }
    (0, _optimisticroutes.discoverKnownRoute)(now, originalPathname, nextUrl, entry, routeTree, metadataVaryPath, couldBeIntercepted, canonicalUrl, routeIsPPREnabled, false // hasDynamicRewrite
    );
    // If the server sent segment data as part of the response, we should write
    // it into the cache to prevent a second, redundant prefetch request.
    // TODO: This is a leftover branch from before Client Segment Cache was
    // enabled everywhere. Tree prefetches should never include segment data.  We
    // can delete it. Leaving for a subsequent PR.
    var navigationSeed = (0, _navigation.convertServerPatchToFullTree)(now, flightRouterState, normalizedFlightDataResult, renderedSearch, _bfcache.UnknownDynamicStaleTime);
    var buildId = (_response_headers_get = response.headers.get(_constants.NEXT_NAV_DEPLOYMENT_ID_HEADER)) !== null && _response_headers_get !== void 0 ? _response_headers_get : serverData.b;
    writeDynamicRenderResponseIntoCache(now, fetchStrategy, normalizedFlightDataResult, buildId, isResponsePartial, headVaryParams, getStaleAtFromHeader(now, response), navigationSeed, null);
}
function rejectSegmentEntriesIfStillPending(entries, staleAt) {
    var fulfilledEntries = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = entries.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var entry = _step.value;
            if (entry.status === 1) {
                rejectSegmentCacheEntry(entry, staleAt);
            } else if (entry.status === 2) {
                fulfilledEntries.push(entry);
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
    return fulfilledEntries;
}
function writeDynamicRenderResponseIntoCache(now, fetchStrategy, flightDatas, buildId, isResponsePartial, headVaryParams, staleAt, navigationSeed, spawnedEntries) {
    if (buildId && buildId !== (0, _navigationbuildid.getNavigationBuildId)()) {
        // The server build does not match the client. Treat as a 404. During
        // an actual navigation, the router will trigger an MPA navigation.
        if (spawnedEntries !== null) {
            rejectSegmentEntriesIfStillPending(spawnedEntries, now + 10 * 1000);
        }
        return null;
    }
    var routeTree = navigationSeed.routeTree;
    var metadataTree = navigationSeed.metadataVaryPath !== null ? createMetadataRouteTree(navigationSeed.metadataVaryPath) : null;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = flightDatas[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var flightDataEntry = _step.value;
            var seedData = flightDataEntry.seedData;
            if (seedData !== null) {
                // The data sent by the server represents only a subtree of the app. We
                // need to find the part of the task tree that matches the response.
                //
                // segmentPath represents the parent path of subtree. It's a repeating
                // pattern of parallel route key and segment:
                //
                //   [string, Segment, string, Segment, string, Segment, ...]
                var segmentPath = flightDataEntry.segmentPath;
                var tree = routeTree;
                for(var i = 0; i < segmentPath.length; i += 2){
                    var _tree_slots;
                    var parallelRouteKey = segmentPath[i];
                    if ((tree === null || tree === void 0 ? void 0 : (_tree_slots = tree.slots) === null || _tree_slots === void 0 ? void 0 : _tree_slots[parallelRouteKey]) !== undefined) {
                        tree = tree.slots[parallelRouteKey];
                    } else {
                        if (spawnedEntries !== null) {
                            rejectSegmentEntriesIfStillPending(spawnedEntries, now + 10 * 1000);
                        }
                        return null;
                    }
                }
                writeSeedDataIntoCache(now, fetchStrategy, tree, staleAt, seedData, isResponsePartial, spawnedEntries);
            }
            var head = flightDataEntry.head;
            if (head !== null && metadataTree !== null) {
                // When Cache Components is enabled, the server conservatively marks
                // the head as partial during static generation (isPossiblyPartialHead
                // in app-render.tsx), even for fully static pages where the head is
                // actually complete. When the response is non-partial, we override
                // this since the server confirmed no dynamic content exists.
                //
                // Without Cache Components, the server always sends the correct
                // isHeadPartial value, so no override is needed.
                var isHeadPartial = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : flightDataEntry.isHeadPartial;
                fulfillEntrySpawnedByRuntimePrefetch(now, fetchStrategy, head, isHeadPartial, staleAt, // parameter.
                headVaryParams, metadataTree, spawnedEntries);
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
    // Any entry that's still pending was intentionally not rendered by the
    // server, because it was inside the loading boundary. Mark them as rejected
    // so we know not to fetch them again.
    // TODO: If PPR is enabled on some routes but not others, then it's possible
    // that a different page is able to do a per-segment prefetch of one of the
    // segments we're marking as rejected here. We should mark on the segment
    // somehow that the reason for the rejection is because of a non-PPR prefetch.
    // That way a per-segment prefetch knows to disregard the rejection.
    if (spawnedEntries !== null) {
        var fulfilledEntries = rejectSegmentEntriesIfStillPending(spawnedEntries, now + 10 * 1000);
        return fulfilledEntries;
    }
    return null;
}
function writeSeedDataIntoCache(now, fetchStrategy, tree, staleAt, seedData, isResponsePartial, entriesOwnedByCurrentTask) {
    // This function is used to write the result of a runtime server request
    // (CacheNodeSeedData) into the prefetch cache.
    var rsc = seedData[0];
    var isPartial = rsc === null || isResponsePartial;
    var varyParamsThenable = seedData[4];
    // Each segment carries its own vary params thenable in the seed data. The
    // thenable resolves to the set of params the segment accessed during render.
    // A null thenable means tracking was not enabled (not a prerender).
    var varyParams = varyParamsThenable !== null ? (0, _varyparamsdecoding.readVaryParams)(varyParamsThenable) : null;
    fulfillEntrySpawnedByRuntimePrefetch(now, fetchStrategy, rsc, isPartial, staleAt, varyParams, tree, entriesOwnedByCurrentTask);
    // Recursively write the child data into the cache.
    var slots = tree.slots;
    if (slots !== null) {
        var seedDataChildren = seedData[1];
        for(var parallelRouteKey in slots){
            var childTree = slots[parallelRouteKey];
            var childSeedData = seedDataChildren[parallelRouteKey];
            if (childSeedData !== null && childSeedData !== undefined) {
                writeSeedDataIntoCache(now, fetchStrategy, childTree, staleAt, childSeedData, isResponsePartial, entriesOwnedByCurrentTask);
            }
        }
    }
}
function fulfillEntrySpawnedByRuntimePrefetch(now, fetchStrategy, rsc, isPartial, staleAt, segmentVaryParams, tree, entriesOwnedByCurrentTask) {
    // We should only write into cache entries that are owned by us. Or create
    // a new one and write into that. We must never write over an entry that was
    // created by a different task, because that causes data races.
    var ownedEntry = entriesOwnedByCurrentTask !== null ? entriesOwnedByCurrentTask.get(tree.requestKey) : undefined;
    if (ownedEntry !== undefined) {
        var fulfilledEntry = fulfillSegmentCacheEntry(ownedEntry, rsc, staleAt, isPartial);
        // Re-key the entry based on which params the segment actually depends on.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        {
            var fulfilledVaryPath;
            var isRevalidation;
        }
    } else {
        // There's no matching entry. Attempt to create a new one.
        var possiblyNewEntry = readOrCreateSegmentCacheEntry(now, fetchStrategy, tree);
        if (possiblyNewEntry.status === 0) {
            // Confirmed this is a new entry. We can fulfill it.
            var newEntry = possiblyNewEntry;
            var fulfilledEntry1 = fulfillSegmentCacheEntry(upgradeToPendingSegment(newEntry, fetchStrategy), rsc, staleAt, isPartial);
            // Re-key the entry based on which params the segment actually depends on.
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            {
                var fulfilledVaryPath1;
                var isRevalidation1;
            }
        } else {
            // There was already an entry in the cache. But we may be able to
            // replace it with the new one from the server.
            var newEntry1 = fulfillSegmentCacheEntry(upgradeToPendingSegment(createDetachedSegmentCacheEntry(now), fetchStrategy), rsc, staleAt, isPartial);
            // Use the fulfilled vary path if available, otherwise fall back to
            // the request vary path.
            var varyPath = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, _varypath.getSegmentVaryPathForRequest)(fetchStrategy, tree);
            upsertSegmentEntry(now, varyPath, newEntry1);
        }
    }
}
function fetchPrefetchResponse(url, headers) {
    return _async_to_generator._(function() {
        var fetchPriority, shouldImmediatelyDecode, response, contentType, isFlightResponse;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    fetchPriority = 'low';
                    // When issuing a prefetch request, don't immediately decode the response; we
                    // use the lower level `createFromResponse` API instead because we need to do
                    // some extra processing of the response stream. See
                    // `createNonTaskyPrefetchResponseStream` for more details.
                    shouldImmediatelyDecode = false;
                    return [
                        4,
                        (0, _fetchserverresponse.createFetch)(url, headers, fetchPriority, shouldImmediatelyDecode)
                    ];
                case 1:
                    response = _state.sent();
                    if (!response.ok) {
                        return [
                            2,
                            null
                        ];
                    }
                    // Check the content type
                    if ("TURBOPACK compile-time falsy", 0) {
                    // In output: "export" mode, we relaxed about the content type, since it's
                    // not Next.js that's serving the response. If the status is OK, assume the
                    // response is valid. If it's not a valid response, the Flight client won't
                    // be able to decode it, and we'll treat it as a miss.
                    } else {
                        contentType = response.headers.get('content-type');
                        isFlightResponse = contentType && contentType.startsWith(_approuterheaders.RSC_CONTENT_TYPE_HEADER);
                        if (!isFlightResponse) {
                            return [
                                2,
                                null
                            ];
                        }
                    }
                    return [
                        2,
                        response
                    ];
            }
        });
    })();
}
function createNonTaskyPrefetchResponseStream(body) {
    return _async_to_generator._(function() {
        var reader, chunks, size, _ref, done, value, buffer, offset, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, chunk, stream;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Buffer the entire response before passing it to the Flight client. This
                    // ensures that when Flight processes the stream, all model data is available
                    // synchronously. This is important for readVaryParams, which synchronously
                    // checks the thenable status — if data arrived in multiple network chunks,
                    // the thenables might not yet be fulfilled.
                    //
                    // TODO: There are too many intermediate stream transformations in the
                    // prefetch response pipeline (e.g. stripIsPartialByte, this function).
                    // These could all be consolidated into a single transformation. Refactor
                    // once the cached navigations experiment lands.
                    //
                    // Read the entire response from the network.
                    reader = body.getReader();
                    chunks = [];
                    size = 0;
                    _state.label = 1;
                case 1:
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    return [
                        4,
                        reader.read()
                    ];
                case 2:
                    _ref = _state.sent(), done = _ref.done, value = _ref.value;
                    if (done) return [
                        3,
                        3
                    ];
                    chunks.push(value);
                    size += value.byteLength;
                    return [
                        3,
                        1
                    ];
                case 3:
                    if (chunks.length === 1) {
                        buffer = chunks[0];
                    } else if (chunks.length > 1) {
                        buffer = new Uint8Array(size);
                        offset = 0;
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = chunks[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                chunk = _step.value;
                                buffer.set(chunk, offset);
                                offset += chunk.byteLength;
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
                        buffer = new Uint8Array(0);
                    }
                    stream = new ReadableStream({
                        start: function start(controller) {
                            controller.enqueue(buffer);
                            controller.close();
                        }
                    });
                    return [
                        2,
                        {
                            stream: stream,
                            size: size
                        }
                    ];
            }
        });
    })();
}
/**
 * Creates a streaming (non-buffered) prefetch response stream for dynamic/Full
 * prefetches. These are essentially dynamic responses that get stored in the
 * prefetch cache — they don't carry vary params or other cache metadata that
 * requires synchronous thenable resolution, so there's no need to buffer them.
 * They should continue to stream so consumers can process data as it arrives.
 */ function createIncrementalPrefetchResponseStream(originalFlightStream, onStreamClose, onResponseSizeUpdate) {
    // While processing the original stream, we incrementally update the size
    // of the cache entry in the LRU.
    var totalByteLength = 0;
    var reader = originalFlightStream.getReader();
    return new ReadableStream({
        pull: function pull(controller) {
            return _async_to_generator._(function() {
                var _ref, done, value;
                return _ts_generator._(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                            ;
                            return [
                                4,
                                reader.read()
                            ];
                        case 1:
                            _ref = _state.sent(), done = _ref.done, value = _ref.value;
                            if (!done) {
                                // Pass to the target stream and keep consuming the Flight response
                                // from the server.
                                controller.enqueue(value);
                                // Incrementally update the size of the cache entry in the LRU.
                                totalByteLength += value.byteLength;
                                onResponseSizeUpdate(totalByteLength);
                                return [
                                    3,
                                    0
                                ];
                            }
                            controller.close();
                            onStreamClose();
                            return [
                                2
                            ];
                        case 2:
                            return [
                                2
                            ];
                    }
                });
            })();
        }
    });
}
function addSegmentPathToUrlInOutputExportMode(url, segmentPath) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    {
        // In output: "export" mode, we cannot use a header to encode the segment
        // path. Instead, we append it to the end of the pathname.
        var staticUrl;
        var routeDir;
        var staticExportFilename;
    }
    return url;
}
function canNewFetchStrategyProvideMoreContent(currentStrategy, newStrategy) {
    return currentStrategy < newStrategy;
}
/**
 * Adds the instant prefetch header if the navigation lock is active.
 * Uses a lazy require to ensure dead code elimination.
 */ function addInstantPrefetchHeaderIfLocked(headers) {
    if ("TURBOPACK compile-time truthy", 1) {
        var isNavigationLocked = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/navigation-testing-lock.js [app-client] (ecmascript)").isNavigationLocked;
        if (isNavigationLocked()) {
            headers[_approuterheaders.NEXT_INSTANT_PREFETCH_HEADER] = '1';
        }
    }
}
function getStaleAtFromHeader(now, response) {
    var _response_headers_get;
    var staleTimeSeconds = parseInt((_response_headers_get = response.headers.get(_approuterheaders.NEXT_ROUTER_STALE_TIME_HEADER)) !== null && _response_headers_get !== void 0 ? _response_headers_get : '', 10);
    var staleTimeMs = !isNaN(staleTimeSeconds) ? getStaleTimeMs(staleTimeSeconds) : _navigatereducer.STATIC_STALETIME_MS;
    return now + staleTimeMs;
}
function getStaleAt(now, staleTimeIterable, response) {
    return _async_to_generator._(function() {
        var staleTimeSeconds, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, value, err, staleTimeMs;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!(staleTimeIterable !== undefined)) return [
                        3,
                        13
                    ];
                    _iteratorAbruptCompletion = false, _didIteratorError = false;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        12
                    ]);
                    _iterator = _async_iterator._(staleTimeIterable);
                    _state.label = 2;
                case 2:
                    return [
                        4,
                        _iterator.next()
                    ];
                case 3:
                    if (!(_iteratorAbruptCompletion = !(_step = _state.sent()).done)) return [
                        3,
                        5
                    ];
                    _value = _step.value;
                    value = _value;
                    staleTimeSeconds = value;
                    _state.label = 4;
                case 4:
                    _iteratorAbruptCompletion = false;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        12
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        12
                    ];
                case 7:
                    _state.trys.push([
                        7,
                        ,
                        10,
                        11
                    ]);
                    if (!(_iteratorAbruptCompletion && _iterator.return != null)) return [
                        3,
                        9
                    ];
                    return [
                        4,
                        _iterator.return()
                    ];
                case 8:
                    _state.sent();
                    _state.label = 9;
                case 9:
                    return [
                        3,
                        11
                    ];
                case 10:
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                    return [
                        7
                    ];
                case 11:
                    return [
                        7
                    ];
                case 12:
                    if (staleTimeSeconds !== undefined) {
                        staleTimeMs = isNaN(staleTimeSeconds) ? _navigatereducer.STATIC_STALETIME_MS : getStaleTimeMs(staleTimeSeconds);
                        return [
                            2,
                            now + staleTimeMs
                        ];
                    }
                    _state.label = 13;
                case 13:
                    if (response !== undefined) {
                        return [
                            2,
                            getStaleAtFromHeader(now, response)
                        ];
                    }
                    return [
                        2,
                        now + _navigatereducer.STATIC_STALETIME_MS
                    ];
            }
        });
    })();
}
function writeStaticStageResponseIntoCache(now, flightData, buildId, headVaryParamsThenable, staleAt, baseTree, renderedSearch, isResponsePartial) {
    var fetchStrategy = isResponsePartial ? _types.FetchStrategy.PPR : _types.FetchStrategy.Full;
    var headVaryParams = headVaryParamsThenable !== null ? (0, _varyparamsdecoding.readVaryParams)(headVaryParamsThenable) : null;
    var flightDatas = (0, _flightdatahelpers.normalizeFlightData)(flightData);
    if (typeof flightDatas === 'string') {
        return;
    }
    var navigationSeed = (0, _navigation.convertServerPatchToFullTree)(now, baseTree, flightDatas, renderedSearch, _bfcache.UnknownDynamicStaleTime);
    writeDynamicRenderResponseIntoCache(now, fetchStrategy, flightDatas, buildId, isResponsePartial, headVaryParams, staleAt, navigationSeed, null // spawnedEntries — no pre-created entries; will create or upsert
    );
}
function processRuntimePrefetchStream(now, runtimePrefetchStream, baseTree, renderedSearch) {
    return _async_to_generator._(function() {
        var _ref, stream, isPartial, serverData, headVaryParamsThenable, headVaryParams, staleAt, flightDatas, navigationSeed;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        stripIsPartialByte(runtimePrefetchStream)
                    ];
                case 1:
                    _ref = _state.sent(), stream = _ref.stream, isPartial = _ref.isPartial;
                    return [
                        4,
                        (0, _fetchserverresponse.createFromNextReadableStream)(stream, undefined, {
                            allowPartialStream: true
                        })
                    ];
                case 2:
                    serverData = _state.sent();
                    headVaryParamsThenable = serverData.h;
                    headVaryParams = headVaryParamsThenable !== null ? (0, _varyparamsdecoding.readVaryParams)(headVaryParamsThenable) : null;
                    return [
                        4,
                        getStaleAt(now, serverData.s)
                    ];
                case 3:
                    staleAt = _state.sent();
                    flightDatas = (0, _flightdatahelpers.normalizeFlightData)(serverData.f);
                    if (typeof flightDatas === 'string') {
                        return [
                            2,
                            null
                        ];
                    }
                    navigationSeed = (0, _navigation.convertServerPatchToFullTree)(now, baseTree, flightDatas, renderedSearch, _bfcache.UnknownDynamicStaleTime);
                    return [
                        2,
                        {
                            flightDatas: flightDatas,
                            navigationSeed: navigationSeed,
                            buildId: serverData.b,
                            isResponsePartial: isPartial,
                            headVaryParams: headVaryParams,
                            staleAt: staleAt
                        }
                    ];
            }
        });
    })();
}
function stripIsPartialByte(stream) {
    return _async_to_generator._(function() {
        var defaultIsPartial, reader, _ref, done, value, firstByte, hasMarker, isPartial, remainder;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    // When there is no recognized marker byte, the fallback depends on whether
                    // Cached Navigations is enabled. When enabled, dynamic navigation responses
                    // don't have a marker but may contain dynamic holes, so they are treated as
                    // partial. When disabled, unmarked responses are treated as non-partial.
                    defaultIsPartial = !!("TURBOPACK compile-time value", false);
                    reader = stream.getReader();
                    return [
                        4,
                        reader.read()
                    ];
                case 1:
                    _ref = _state.sent(), done = _ref.done, value = _ref.value;
                    if (done || !value || value.byteLength === 0) {
                        return [
                            2,
                            {
                                stream: new ReadableStream({
                                    start: function start(c) {
                                        return c.close();
                                    }
                                }),
                                isPartial: defaultIsPartial
                            }
                        ];
                    }
                    firstByte = value[0];
                    hasMarker = firstByte === 0x23 || firstByte === 0x7e;
                    isPartial = hasMarker ? firstByte === 0x7e : defaultIsPartial;
                    remainder = hasMarker ? value.byteLength > 1 ? value.subarray(1) : null : value;
                    return [
                        2,
                        {
                            isPartial: isPartial,
                            stream: new ReadableStream({
                                start: function start(controller) {
                                    if (remainder) {
                                        controller.enqueue(remainder);
                                    }
                                },
                                pull: function pull(controller) {
                                    return _async_to_generator._(function() {
                                        var result;
                                        return _ts_generator._(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        reader.read()
                                                    ];
                                                case 1:
                                                    result = _state.sent();
                                                    if (result.done) {
                                                        controller.close();
                                                    } else {
                                                        controller.enqueue(result.value);
                                                    }
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    })();
                                }
                            })
                        }
                    ];
            }
        });
    })();
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/debug-channel.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createDebugChannel: null,
    getOrCreateDebugChannelReadableWriterPair: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createDebugChannel: function createDebugChannel1() {
        return createDebugChannel;
    },
    getOrCreateDebugChannelReadableWriterPair: function getOrCreateDebugChannelReadableWriterPair1() {
        return getOrCreateDebugChannelReadableWriterPair;
    }
});
var _approuterheaders = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
var _invarianterror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
var pairs = new Map();
var DEBUG_CHANNEL_STORAGE_KEY_PREFIX = '__next_debug_channel:';
// Buffer for the initial document's debug channel data. Written to
// sessionStorage once complete so it can be restored when the browser serves
// the page from HTTP cache (back-forward navigation, tab duplication, etc.).
var initialDocumentDebugChunks = [];
function persistDebugChannelToSessionStorage(requestId) {
    var key = DEBUG_CHANNEL_STORAGE_KEY_PREFIX + requestId;
    var value = JSON.stringify(initialDocumentDebugChunks.map(function(chunk) {
        var binary = '';
        for(var i = 0; i < chunk.byteLength; i++){
            binary += String.fromCharCode(chunk[i]);
        }
        return btoa(binary);
    }));
    try {
        sessionStorage.setItem(key, value);
    } catch (unused) {
        // Likely a quota error. Drop entries from previous documents in this tab
        // (we only need to restore the current one's entry on cache restore) and
        // retry once. If it still fails, skip silently — the location.reload()
        // fallback in createDebugChannel handles this case.
        for(var i = sessionStorage.length - 1; i >= 0; i--){
            var k = sessionStorage.key(i);
            if ((k === null || k === void 0 ? void 0 : k.startsWith(DEBUG_CHANNEL_STORAGE_KEY_PREFIX)) && k !== key) {
                sessionStorage.removeItem(k);
            }
        }
        try {
            sessionStorage.setItem(key, value);
        } catch (unused) {}
    }
}
function wasServedFromCache() {
    try {
        // There is exactly one PerformanceNavigationTiming entry per page load.
        var entry = performance.getEntriesByType('navigation')[0];
        return (entry === null || entry === void 0 ? void 0 : entry.transferSize) === 0;
    } catch (unused) {
        return false;
    }
}
function restoreDebugChannelFromSessionStorage(requestId) {
    try {
        var serializedData = sessionStorage.getItem(DEBUG_CHANNEL_STORAGE_KEY_PREFIX + requestId);
        if (!serializedData) {
            return undefined;
        }
        var chunks = JSON.parse(serializedData).map(function(base64) {
            var binary = atob(base64);
            var bytes = new Uint8Array(binary.length);
            for(var i = 0; i < binary.length; i++){
                bytes[i] = binary.charCodeAt(i);
            }
            return bytes;
        });
        return new ReadableStream({
            start: function start(controller) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = chunks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var chunk = _step.value;
                        controller.enqueue(chunk);
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
                controller.close();
            }
        });
    } catch (unused) {
        return undefined;
    }
}
function getOrCreateDebugChannelReadableWriterPair(requestId) {
    var pair = pairs.get(requestId);
    if (!pair) {
        // Only buffer chunks for the initial document's debug channel, not for
        // client-side navigation requests.
        var shouldBuffer = requestId === self.__next_r;
        var _ref = new TransformStream({
            transform: function transform(chunk, controller) {
                if (shouldBuffer) {
                    initialDocumentDebugChunks.push(chunk.slice());
                }
                controller.enqueue(chunk);
            }
        }), readable = _ref.readable, writable = _ref.writable;
        pair = {
            readable: readable,
            writer: writable.getWriter()
        };
        pairs.set(requestId, pair);
        pair.writer.closed.then(function() {
            if (shouldBuffer) {
                persistDebugChannelToSessionStorage(requestId);
            }
        }).finally(function() {
            return pairs.delete(requestId);
        });
    }
    return pair;
}
function createDebugChannel(requestHeaders) {
    var requestId;
    if (requestHeaders) {
        var _requestHeaders__approuterheaders_NEXT_REQUEST_ID_HEADER;
        requestId = (_requestHeaders__approuterheaders_NEXT_REQUEST_ID_HEADER = requestHeaders[_approuterheaders.NEXT_REQUEST_ID_HEADER]) !== null && _requestHeaders__approuterheaders_NEXT_REQUEST_ID_HEADER !== void 0 ? _requestHeaders__approuterheaders_NEXT_REQUEST_ID_HEADER : undefined;
        if (!requestId) {
            throw Object.defineProperty(new _invarianterror.InvariantError("Expected a ".concat(JSON.stringify(_approuterheaders.NEXT_REQUEST_ID_HEADER), " request header.")), "__NEXT_ERROR_CODE", {
                value: "E854",
                enumerable: false,
                configurable: true
            });
        }
    } else {
        requestId = self.__next_r;
        if (!requestId) {
            throw Object.defineProperty(new _invarianterror.InvariantError("Expected a request ID to be defined for the document via self.__next_r."), "__NEXT_ERROR_CODE", {
                value: "E806",
                enumerable: false,
                configurable: true
            });
        }
    }
    // Only attempt to restore the sessionStorage debug channel entry for the
    // initial document load (no request headers). Client-side navigations pass
    // request headers and should always use the WebSocket-backed debug channel.
    if (!requestHeaders && wasServedFromCache()) {
        var readable = restoreDebugChannelFromSessionStorage(requestId);
        if (readable) {
            return {
                readable: readable
            };
        }
        // Debug channel can't be restored — debug deps would block hydration.
        // Force a fresh page load from the server. Return a never-closing stream
        // so the Flight client stays parked until the reload tears the document
        // down, instead of synchronously erroring with "Connection closed.".
        location.reload();
        return {
            readable: new ReadableStream()
        };
    }
    var readable1 = getOrCreateDebugChannelReadableWriterPair(requestId).readable;
    return {
        readable: readable1
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
var _async_to_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_async_to_generator.cjs [app-client] (ecmascript)");
var _define_property = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_define_property.cjs [app-client] (ecmascript)");
var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var _ts_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_ts_generator.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createFetch: null,
    createFromNextReadableStream: null,
    decodeStaticStage: null,
    fetchServerResponse: null,
    processFetch: null,
    resolveStaticStageData: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createFetch: function createFetch1() {
        return createFetch;
    },
    createFromNextReadableStream: function createFromNextReadableStream1() {
        return createFromNextReadableStream;
    },
    decodeStaticStage: function decodeStaticStage1() {
        return decodeStaticStage;
    },
    fetchServerResponse: function fetchServerResponse1() {
        return fetchServerResponse;
    },
    processFetch: function processFetch1() {
        return processFetch;
    },
    resolveStaticStageData: function resolveStaticStageData1() {
        return resolveStaticStageData;
    }
});
var _client = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)");
var _invarianterror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
var _approuterheaders = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
var _appcallserver = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
var _appfindsourcemapurl = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
var _flightdatahelpers = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)");
var _setcachebustingsearchparam = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/set-cache-busting-search-param.js [app-client] (ecmascript)");
var _routeparams = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
var _deploymentid = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/deployment-id.js [app-client] (ecmascript)");
var _navigationbuildid = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/navigation-build-id.js [app-client] (ecmascript)");
var _constants = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/constants.js [app-client] (ecmascript)");
var _cache = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)");
var _bfcache = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/bfcache.js [app-client] (ecmascript)");
var createFromReadableStream = _client.createFromReadableStream;
var createFromFetch = _client.createFromFetch;
var createDebugChannel;
if ("TURBOPACK compile-time truthy", 1) {
    createDebugChannel = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/debug-channel.js [app-client] (ecmascript)").createDebugChannel;
}
function doMpaNavigation(url) {
    return (0, _routeparams.urlToUrlWithoutFlightMarker)(new URL(url, location.origin)).toString();
}
var isPageUnloading = false;
if (typeof window !== 'undefined') {
    // Track when the page is unloading, e.g. due to reloading the page or
    // performing hard navigations. This allows us to suppress error logging when
    // the browser cancels in-flight requests during page unload.
    window.addEventListener('pagehide', function() {
        isPageUnloading = true;
    });
    // Reset the flag on pageshow, e.g. when navigating back and the JavaScript
    // execution context is restored by the browser.
    window.addEventListener('pageshow', function() {
        isPageUnloading = false;
    });
}
function fetchServerResponse(url, options) {
    return _async_to_generator._(function() {
        var flightRouterState, nextUrl, _obj, headers, originalUrl, _res_headers_get, _flightResponse_d, _flightResponse_p, _flightResponsePromise__debugInfo, _res_headers_get1, isLegacyPPR, shouldImmediatelyDecode, res, responseUrl, canonicalUrl, contentType, interception, postponed, isFlightResponse, flightResponsePromise, _ref, flightResponse, cacheData, normalizedFlightData, staticStageData, _tmp, err;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    flightRouterState = options.flightRouterState, nextUrl = options.nextUrl;
                    headers = (_obj = {}, // Enable flight response
                    _define_property._(_obj, _approuterheaders.RSC_HEADER, '1'), // Provide the current router state
                    _define_property._(_obj, _approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER, (0, _flightdatahelpers.prepareFlightRouterStateForRequest)(flightRouterState, options.isHmrRefresh)), _obj);
                    if (("TURBOPACK compile-time value", "development") === 'development' && options.isHmrRefresh) {
                        headers[_approuterheaders.NEXT_HMR_REFRESH_HEADER] = '1';
                    }
                    if (nextUrl) {
                        headers[_approuterheaders.NEXT_URL] = nextUrl;
                    }
                    // In static export mode, we need to modify the URL to request the .txt file,
                    // but we should preserve the original URL for the canonical URL and error handling.
                    originalUrl = url;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        9,
                        ,
                        10
                    ]);
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    // Typically, during a navigation, we decode the response using Flight's
                    // `createFromFetch` API, which accepts a `fetch` promise.
                    // TODO: Remove this check once the old PPR flag is removed
                    isLegacyPPR = ("TURBOPACK compile-time value", false) && !("TURBOPACK compile-time value", false);
                    shouldImmediatelyDecode = !isLegacyPPR;
                    return [
                        4,
                        createFetch(url, headers, 'auto', shouldImmediatelyDecode)
                    ];
                case 2:
                    res = _state.sent();
                    responseUrl = (0, _routeparams.urlToUrlWithoutFlightMarker)(new URL(res.url));
                    canonicalUrl = res.redirected ? responseUrl : originalUrl;
                    contentType = res.headers.get('content-type') || '';
                    interception = !!((_res_headers_get1 = res.headers.get('vary')) === null || _res_headers_get1 === void 0 ? void 0 : _res_headers_get1.includes(_approuterheaders.NEXT_URL));
                    postponed = !!res.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER);
                    isFlightResponse = contentType.startsWith(_approuterheaders.RSC_CONTENT_TYPE_HEADER);
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    // If fetch returns something different than flight response handle it like a mpa navigation
                    // If the fetch was not 200, we also handle it like a mpa navigation
                    if (!isFlightResponse || !res.ok || !res.body) {
                        // in case the original URL came with a hash, preserve it before redirecting to the new URL
                        if (url.hash) {
                            responseUrl.hash = url.hash;
                        }
                        return [
                            2,
                            doMpaNavigation(responseUrl.toString())
                        ];
                    }
                    if ("TURBOPACK compile-time truthy", 1) return [
                        3,
                        4
                    ];
                    //TURBOPACK unreachable
                    ;
                case 3:
                    _state.sent();
                    _state.label = 4;
                case 4:
                    flightResponsePromise = res.flightResponsePromise;
                    if (flightResponsePromise === null) {
                        // Typically, `createFetch` would have already started decoding the
                        // Flight response. If it hasn't, though, we need to decode it now.
                        // TODO: This should only be reachable if legacy PPR is enabled (i.e. PPR
                        // without Cache Components). Remove this branch once legacy PPR
                        // is deleted.
                        flightResponsePromise = createFromNextReadableStream(res.body, headers, {
                            allowPartialStream: postponed
                        });
                    }
                    return [
                        4,
                        Promise.all([
                            flightResponsePromise,
                            res.cacheData
                        ])
                    ];
                case 5:
                    _ref = _sliced_to_array._.apply(void 0, [
                        _state.sent(),
                        2
                    ]), flightResponse = _ref[0], cacheData = _ref[1];
                    if (((_res_headers_get = res.headers.get(_constants.NEXT_NAV_DEPLOYMENT_ID_HEADER)) !== null && _res_headers_get !== void 0 ? _res_headers_get : flightResponse.b) !== (0, _navigationbuildid.getNavigationBuildId)()) {
                        // The server build does not match the client build.
                        return [
                            2,
                            doMpaNavigation(res.url)
                        ];
                    }
                    normalizedFlightData = (0, _flightdatahelpers.normalizeFlightData)(flightResponse.f);
                    if (typeof normalizedFlightData === 'string') {
                        return [
                            2,
                            doMpaNavigation(normalizedFlightData)
                        ];
                    }
                    if (!(cacheData !== null)) return [
                        3,
                        7
                    ];
                    return [
                        4,
                        resolveStaticStageData(cacheData, flightResponse, headers)
                    ];
                case 6:
                    _tmp = _state.sent();
                    return [
                        3,
                        8
                    ];
                case 7:
                    _tmp = null;
                    _state.label = 8;
                case 8:
                    staticStageData = _tmp;
                    return [
                        2,
                        {
                            flightData: normalizedFlightData,
                            canonicalUrl: canonicalUrl,
                            // TODO: We should be able to read this from the rewrite header, not the
                            // Flight response. Theoretically they should always agree, but there are
                            // currently some cases where it's incorrect for interception routes. We
                            // can always trust the value in the response body. However, per-segment
                            // prefetch responses don't embed the value in the body; they rely on the
                            // header alone. So we need to investigate why the header is sometimes
                            // wrong for interception routes.
                            renderedSearch: flightResponse.q,
                            couldBeIntercepted: interception,
                            supportsPerSegmentPrefetching: flightResponse.S,
                            postponed: postponed,
                            // The dynamicStaleTime is only present in the response body when
                            // a page exports unstable_dynamicStaleTime and this is a dynamic render.
                            // When absent (UnknownDynamicStaleTime), the client falls back to the
                            // global DYNAMIC_STALETIME_MS. The value is in seconds.
                            dynamicStaleTime: (_flightResponse_d = flightResponse.d) !== null && _flightResponse_d !== void 0 ? _flightResponse_d : _bfcache.UnknownDynamicStaleTime,
                            staticStageData: staticStageData,
                            runtimePrefetchStream: (_flightResponse_p = flightResponse.p) !== null && _flightResponse_p !== void 0 ? _flightResponse_p : null,
                            responseHeaders: res.headers,
                            debugInfo: (_flightResponsePromise__debugInfo = flightResponsePromise._debugInfo) !== null && _flightResponsePromise__debugInfo !== void 0 ? _flightResponsePromise__debugInfo : null
                        }
                    ];
                case 9:
                    err = _state.sent();
                    if (!isPageUnloading) {
                        console.error("Failed to fetch RSC payload for ".concat(originalUrl, ". Falling back to browser navigation."), err);
                    }
                    // If fetch fails handle it like a mpa navigation
                    // TODO-APP: Add a test for the case where a CORS request fails, e.g. external url redirect coming from the response.
                    // See https://github.com/vercel/next.js/issues/43605#issuecomment-1451617521 for a reproduction.
                    return [
                        2,
                        originalUrl.toString()
                    ];
                case 10:
                    return [
                        2
                    ];
            }
        });
    })();
}
function processFetch(response) {
    return _async_to_generator._(function() {
        var _ref, stream, isPartial, responseStream, cacheData, _stream_tee, stream1, stream2, strippedResponse;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    if ("TURBOPACK compile-time truthy", 1) return [
                        3,
                        2
                    ];
                    //TURBOPACK unreachable
                    ;
                case 1:
                    _ref = _state.sent(), stream = _ref.stream, isPartial = _ref.isPartial;
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    else {
                        responseStream = stream;
                        cacheData = {
                            isResponsePartial: isPartial
                        };
                    }
                    strippedResponse = new Response(responseStream, {
                        headers: response.headers,
                        status: response.status,
                        statusText: response.statusText
                    });
                    // The Response constructor doesn't preserve `url` or `redirected` from
                    // the original. We need both: `url` for React DevTools and `redirected`
                    // for the redirect replay logic below.
                    Object.defineProperty(strippedResponse, 'url', {
                        value: response.url
                    });
                    Object.defineProperty(strippedResponse, 'redirected', {
                        value: response.redirected
                    });
                    return [
                        2,
                        {
                            response: strippedResponse,
                            cacheData: cacheData
                        }
                    ];
                case 2:
                    return [
                        2,
                        {
                            response: response,
                            cacheData: null
                        }
                    ];
            }
        });
    })();
}
function resolveStaticStageData(cacheData, flightResponse, headers) {
    return _async_to_generator._(function() {
        var isResponsePartial, responseBodyClone, response;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    isResponsePartial = cacheData.isResponsePartial, responseBodyClone = cacheData.responseBodyClone;
                    if (!responseBodyClone) return [
                        3,
                        3
                    ];
                    if (!isResponsePartial) {
                        // Fully static — cache the entire decoded response as-is.
                        responseBodyClone.cancel();
                        return [
                            2,
                            {
                                response: flightResponse,
                                isResponsePartial: false
                            }
                        ];
                    }
                    if (!(flightResponse.l !== undefined)) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        decodeStaticStage(responseBodyClone, flightResponse.l, headers)
                    ];
                case 1:
                    response = _state.sent();
                    return [
                        2,
                        {
                            response: response,
                            isResponsePartial: true
                        }
                    ];
                case 2:
                    // No caching — cancel the unused clone.
                    responseBodyClone.cancel();
                    _state.label = 3;
                case 3:
                    return [
                        2,
                        null
                    ];
            }
        });
    })();
}
function decodeStaticStage(responseBodyClone, staticStageByteLengthPromise, headers) {
    return _async_to_generator._(function() {
        var staticStageByteLength, truncatedStream;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        staticStageByteLengthPromise
                    ];
                case 1:
                    staticStageByteLength = _state.sent();
                    truncatedStream = truncateStream(responseBodyClone, staticStageByteLength);
                    return [
                        2,
                        createFromNextReadableStream(truncatedStream, headers, {
                            allowPartialStream: true
                        })
                    ];
            }
        });
    })();
}
function createFetch(url, headers, fetchPriority, shouldImmediatelyDecode, signal) {
    return _async_to_generator._(function() {
        var deploymentId, fetchOptions, fetchUrl, processed, fetchPromise, flightResponsePromise, browserResponse, redirected, MAX_REDIRECTS, n, responseUrl, responseUrl1, rscResponse;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    // TODO: In output: "export" mode, the headers do nothing. Omit them (and the
                    // cache busting search param) from the request so they're
                    // maximally cacheable.
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    deploymentId = (0, _deploymentid.getDeploymentId)();
                    if (deploymentId) {
                        headers['x-deployment-id'] = deploymentId;
                    }
                    if ("TURBOPACK compile-time truthy", 1) {
                        if (self.__next_r) {
                            headers[_approuterheaders.NEXT_HTML_REQUEST_ID_HEADER] = self.__next_r;
                        }
                        // Create a new request ID for the server action request. The server uses
                        // this to tag debug information sent via WebSocket to the client, which
                        // then routes those chunks to the debug channel associated with this ID.
                        headers[_approuterheaders.NEXT_REQUEST_ID_HEADER] = crypto.getRandomValues(new Uint32Array(1))[0].toString(16);
                    }
                    fetchOptions = {
                        // Backwards compat for older browsers. `same-origin` is the default in modern browsers.
                        credentials: 'same-origin',
                        headers: headers,
                        priority: fetchPriority || undefined,
                        signal: signal
                    };
                    // `fetchUrl` is slightly different from `url` because we add a cache-busting
                    // search param to it. This should not leak outside of this function, so we
                    // track them separately.
                    fetchUrl = new URL(url);
                    return [
                        4,
                        (0, _setcachebustingsearchparam.setCacheBustingSearchParam)(fetchUrl, headers)
                    ];
                case 1:
                    _state.sent();
                    processed = fetch(fetchUrl, fetchOptions).then(processFetch);
                    fetchPromise = processed.then(function(param) {
                        var response = param.response;
                        return response;
                    });
                    // Immediately pass the fetch promise to the Flight client so that the debug
                    // info includes the latency from the client to the server. The internal timer
                    // in React starts as soon as `createFromFetch` is called.
                    //
                    // The only case where we don't do this is during a prefetch, because a
                    // top-level prefetch response never blocks a navigation; if it hasn't already
                    // been written into the cache by the time the navigation happens, the router
                    // will go straight to a dynamic request.
                    flightResponsePromise = shouldImmediatelyDecode ? createFromNextFetch(fetchPromise, headers) : null;
                    return [
                        4,
                        fetchPromise
                    ];
                case 2:
                    browserResponse = _state.sent();
                    // If the server responds with a redirect (e.g. 307), and the redirected
                    // location does not contain the cache busting search param set in the
                    // original request, the response is likely invalid — when following the
                    // redirect, the browser forwards the request headers, but since the cache
                    // busting search param is missing, the server will reject the request due to
                    // a mismatch.
                    //
                    // Ideally, we would be able to intercept the redirect response and perform it
                    // manually, instead of letting the browser automatically follow it, but this
                    // is not allowed by the fetch API.
                    //
                    // So instead, we must "replay" the redirect by fetching the new location
                    // again, but this time we'll append the cache busting search param to prevent
                    // a mismatch.
                    //
                    // TODO: We can optimize Next.js's built-in middleware APIs by returning a
                    // custom status code, to prevent the browser from automatically following it.
                    //
                    // This does not affect Server Action-based redirects; those are encoded
                    // differently, as part of the Flight body. It only affects redirects that
                    // occur in a middleware or a third-party proxy.
                    redirected = browserResponse.redirected;
                    if ("TURBOPACK compile-time truthy", 1) return [
                        3,
                        7
                    ];
                    //TURBOPACK unreachable
                    ;
                case 3:
                    if (!(n < MAX_REDIRECTS)) return [
                        3,
                        7
                    ];
                    if (!browserResponse.redirected) {
                        return [
                            3,
                            7
                        ];
                    }
                    responseUrl = new URL(browserResponse.url, fetchUrl);
                    if (responseUrl.origin !== fetchUrl.origin) {
                        return [
                            3,
                            7
                        ];
                    }
                    if (responseUrl.searchParams.get(_approuterheaders.NEXT_RSC_UNION_QUERY) === fetchUrl.searchParams.get(_approuterheaders.NEXT_RSC_UNION_QUERY)) {
                        return [
                            3,
                            7
                        ];
                    }
                    // The RSC request was redirected. Assume the response is invalid.
                    //
                    // Append the cache busting search param to the redirected URL and
                    // fetch again.
                    // TODO: We should abort the previous request.
                    fetchUrl = new URL(responseUrl);
                    return [
                        4,
                        (0, _setcachebustingsearchparam.setCacheBustingSearchParam)(fetchUrl, headers)
                    ];
                case 4:
                    _state.sent();
                    processed = fetch(fetchUrl, fetchOptions).then(processFetch);
                    fetchPromise = processed.then(function(param) {
                        var response = param.response;
                        return response;
                    });
                    flightResponsePromise = shouldImmediatelyDecode ? createFromNextFetch(fetchPromise, headers) : null;
                    return [
                        4,
                        fetchPromise
                    ];
                case 5:
                    browserResponse = _state.sent();
                    // We just performed a manual redirect, so this is now true.
                    redirected = true;
                    _state.label = 6;
                case 6:
                    n++;
                    return [
                        3,
                        3
                    ];
                case 7:
                    // Remove the cache busting search param from the response URL, to prevent it
                    // from leaking outside of this function.
                    responseUrl1 = new URL(browserResponse.url, fetchUrl);
                    responseUrl1.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
                    rscResponse = {
                        url: responseUrl1.href,
                        // This is true if any redirects occurred, either automatically by the
                        // browser, or manually by us. So it's different from
                        // `browserResponse.redirected`, which only tells us whether the browser
                        // followed a redirect, and only for the last response in the chain.
                        redirected: redirected,
                        // These can be copied from the last browser response we received. We
                        // intentionally only expose the subset of fields that are actually used
                        // elsewhere in the codebase.
                        ok: browserResponse.ok,
                        headers: browserResponse.headers,
                        body: browserResponse.body,
                        status: browserResponse.status,
                        // This is the exact promise returned by `createFromFetch`. It contains
                        // debug information that we need to transfer to any derived promises that
                        // are later rendered by React.
                        flightResponsePromise: flightResponsePromise,
                        cacheData: processed.then(function(param) {
                            var cacheData = param.cacheData;
                            return cacheData;
                        })
                    };
                    return [
                        2,
                        rscResponse
                    ];
            }
        });
    })();
}
function createFromNextReadableStream(flightStream, requestHeaders, options) {
    return createFromReadableStream(flightStream, {
        callServer: _appcallserver.callServer,
        findSourceMapURL: _appfindsourcemapurl.findSourceMapURL,
        debugChannel: createDebugChannel && createDebugChannel(requestHeaders),
        unstable_allowPartialStream: options === null || options === void 0 ? void 0 : options.allowPartialStream
    });
}
function createFromNextFetch(promiseForResponse, requestHeaders) {
    return createFromFetch(promiseForResponse, {
        callServer: _appcallserver.callServer,
        findSourceMapURL: _appfindsourcemapurl.findSourceMapURL,
        debugChannel: createDebugChannel && createDebugChannel(requestHeaders)
    });
}
function truncateStream(stream, byteLength) {
    var reader = stream.getReader();
    var remaining = byteLength;
    return new ReadableStream({
        pull: function pull(controller) {
            return _async_to_generator._(function() {
                var _ref, done, value;
                return _ts_generator._(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (remaining <= 0) {
                                reader.cancel();
                                controller.close();
                                return [
                                    2
                                ];
                            }
                            return [
                                4,
                                reader.read()
                            ];
                        case 1:
                            _ref = _state.sent(), done = _ref.done, value = _ref.value;
                            if (done) {
                                controller.close();
                                return [
                                    2
                                ];
                            }
                            if (value.byteLength <= remaining) {
                                controller.enqueue(value);
                                remaining -= value.byteLength;
                            } else {
                                controller.enqueue(value.subarray(0, remaining));
                                remaining = 0;
                                reader.cancel();
                                controller.close();
                            }
                            return [
                                2
                            ];
                    }
                });
            })();
        },
        cancel: function cancel() {
            reader.cancel();
        }
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNavigatingToNewRootLayout", {
    enumerable: true,
    get: function get() {
        return isNavigatingToNewRootLayout;
    }
});
var _approutertypes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/app-router-types.js [app-client] (ecmascript)");
function isNavigatingToNewRootLayout(currentTree, nextTree) {
    var _currentTree_;
    // Compare segments
    var currentTreeSegment = currentTree[0];
    var nextTreeSegment = nextTree.segment;
    // If any segment is different before we find the root layout, the root layout has changed.
    // E.g. /same/(group1)/layout.js -> /same/(group2)/layout.js
    // First segment is 'same' for both, keep looking. (group1) changed to (group2) before the root layout was found, it must have changed.
    if (Array.isArray(currentTreeSegment) && Array.isArray(nextTreeSegment)) {
        // Compare dynamic param name and type but ignore the value, different values would not affect the current root layout
        // /[name] - /slug1 and /slug2, both values (slug1 & slug2) still has the same layout /[name]/layout.js
        if (currentTreeSegment[0] !== nextTreeSegment[0] || currentTreeSegment[2] !== nextTreeSegment[2]) {
            return true;
        }
    } else if (currentTreeSegment !== nextTreeSegment) {
        return true;
    }
    // Current tree root layout found
    var currentIsRootLayout = (((_currentTree_ = currentTree[4]) !== null && _currentTree_ !== void 0 ? _currentTree_ : 0) & _approutertypes.PrefetchHint.IsRootLayout) !== 0;
    var nextIsRootLayout = (nextTree.prefetchHints & _approutertypes.PrefetchHint.IsRootLayout) !== 0;
    if (currentIsRootLayout) {
        // If the next tree doesn't have the root layout flag, it must have changed.
        return !nextIsRootLayout;
    }
    // Current tree didn't have its root layout here, must have changed.
    if (nextIsRootLayout) {
        return true;
    }
    var slots = nextTree.slots;
    var currentTreeChildren = currentTree[1];
    if (slots !== null) {
        for(var slot in slots){
            var nextTreeChild = slots[slot];
            var currentTreeChild = currentTreeChildren[slot];
            if (currentTreeChild === undefined || isNavigatingToNewRootLayout(currentTreeChild, nextTreeChild)) {
                return true;
            }
        }
    }
    return false;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/committed-state.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getLastCommittedTree: null,
    setLastCommittedTree: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getLastCommittedTree: function getLastCommittedTree1() {
        return getLastCommittedTree;
    },
    setLastCommittedTree: function setLastCommittedTree1() {
        return setLastCommittedTree;
    }
});
// The tree from the last state that was committed to the browser history
// (i.e., the last state for which HistoryUpdater's useInsertionEffect ran).
// This lets the server-patch reducer distinguish between retrying a
// navigation that already pushed a history entry vs one whose transition
// suspended and never committed.
//
// Currently only used by the server-patch retry logic, but this module is a
// stepping stone toward a broader refactor of the navigation queue. The
// existing AppRouter action queue will eventually be replaced by a more
// reactive model that explicitly tracks pending vs committed navigation
// state. This file will likely evolve into (or be subsumed by) that new
// implementation.
var lastCommittedTree = null;
function getLastCommittedTree() {
    return lastCommittedTree;
}
function setLastCommittedTree(tree) {
    lastCommittedTree = tree;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _async_to_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_async_to_generator.cjs [app-client] (ecmascript)");
var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var _ts_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_ts_generator.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    FreshnessPolicy: null,
    createInitialCacheNodeForHydration: null,
    isDeferredRsc: null,
    spawnDynamicRequests: null,
    startPPRNavigation: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    FreshnessPolicy: function FreshnessPolicy1() {
        return FreshnessPolicy;
    },
    createInitialCacheNodeForHydration: function createInitialCacheNodeForHydration1() {
        return createInitialCacheNodeForHydration;
    },
    isDeferredRsc: function isDeferredRsc1() {
        return isDeferredRsc;
    },
    spawnDynamicRequests: function spawnDynamicRequests1() {
        return spawnDynamicRequests;
    },
    startPPRNavigation: function startPPRNavigation1() {
        return startPPRNavigation;
    }
});
var _approutertypes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/app-router-types.js [app-client] (ecmascript)");
var _segment = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
var _matchsegments = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
var _createhreffromurl = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
var _fetchserverresponse = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
var _useactionqueue = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/use-action-queue.js [app-client] (ecmascript)");
var _routerreducertypes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
var _isnavigatingtonewrootlayout = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-client] (ecmascript)");
var _committedstate = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/committed-state.js [app-client] (ecmascript)");
var _navigation = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/navigation.js [app-client] (ecmascript)");
var _cache = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)");
var _types = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
var _optimisticroutes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/optimistic-routes.js [app-client] (ecmascript)");
var _constants = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/constants.js [app-client] (ecmascript)");
var _varypath = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/vary-path.js [app-client] (ecmascript)");
var _bfcache = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/bfcache.js [app-client] (ecmascript)");
var FreshnessPolicy = /*#__PURE__*/ function(FreshnessPolicy) {
    FreshnessPolicy[FreshnessPolicy["Default"] = 0] = "Default";
    FreshnessPolicy[FreshnessPolicy["Hydration"] = 1] = "Hydration";
    FreshnessPolicy[FreshnessPolicy["HistoryTraversal"] = 2] = "HistoryTraversal";
    FreshnessPolicy[FreshnessPolicy["RefreshAll"] = 3] = "RefreshAll";
    FreshnessPolicy[FreshnessPolicy["HMRRefresh"] = 4] = "HMRRefresh";
    FreshnessPolicy[FreshnessPolicy["Gesture"] = 5] = "Gesture";
    return FreshnessPolicy;
}({});
var noop = function noop() {};
function createInitialCacheNodeForHydration(navigatedAt, initialTree, seedData, seedHead, seedDynamicStaleAt) {
    // Create the initial cache node tree, using the data embedded into the
    // HTML document.
    var accumulation = {
        separateRefreshUrls: null,
        scrollRef: null
    };
    var task = createCacheNodeOnNavigation(navigatedAt, initialTree, null, 1, seedData, seedHead, seedDynamicStaleAt, false, accumulation);
    return task;
}
function startPPRNavigation(navigatedAt, oldUrl, oldRenderedSearch, oldCacheNode, oldRouterState, newRouteTree, newMetadataVaryPath, freshness, seedData, seedHead, seedDynamicStaleAt, isSamePageNavigation, accumulation) {
    var didFindRootLayout = false;
    var parentNeedsDynamicRequest = false;
    var parentRefreshState = null;
    var oldRootRefreshState = {
        canonicalUrl: (0, _createhreffromurl.createHrefFromUrl)(oldUrl),
        renderedSearch: oldRenderedSearch
    };
    return updateCacheNodeOnNavigation(navigatedAt, oldUrl, oldCacheNode !== null ? oldCacheNode : undefined, oldRouterState, newRouteTree, newMetadataVaryPath, freshness, didFindRootLayout, seedData, seedHead, seedDynamicStaleAt, isSamePageNavigation, parentNeedsDynamicRequest, oldRootRefreshState, parentRefreshState, accumulation);
}
function updateCacheNodeOnNavigation(navigatedAt, oldUrl, oldCacheNode, oldRouterState, newRouteTree, newMetadataVaryPath, freshness, didFindRootLayout, seedData, seedHead, seedDynamicStaleAt, isSamePageNavigation, parentNeedsDynamicRequest, oldRootRefreshState, parentRefreshState, accumulation) {
    // Check if this segment matches the one in the previous route.
    var oldSegment = oldRouterState[0];
    var newSegment = createSegmentFromRouteTree(newRouteTree);
    if (!(0, _matchsegments.matchSegment)(newSegment, oldSegment)) {
        // This segment does not match the previous route. We're now entering the
        // new part of the target route. Switch to the "create" path.
        if (// highest-level layout in a route tree is referred to as the "root"
        // layout.) This could mean that we're navigating between two different
        // root layouts. When this happens, we perform a full-page (MPA-style)
        // navigation.
        //
        // However, the algorithm for deciding where to start rendering a route
        // (i.e. the one performed in order to reach this function) is stricter
        // than the one used to detect a change in the root layout. So just
        // because we're re-rendering a segment outside of the root layout does
        // not mean we should trigger a full-page navigation.
        //
        // Specifically, we handle dynamic parameters differently: two segments
        // are considered the same even if their parameter values are different.
        //
        // Refer to isNavigatingToNewRootLayout for details.
        //
        // Note that we only have to perform this extra traversal if we didn't
        // already discover a root layout in the part of the tree that is
        // unchanged. We also only need to compare the subtree that is not
        // shared. In the common case, this branch is skipped completely.
        !didFindRootLayout && (0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(oldRouterState, newRouteTree) || // The global Not Found route (app/global-not-found.tsx) is a special
        // case, because it acts like a root layout, but in the router tree, it
        // is rendered in the same position as app/layout.tsx.
        //
        // Any navigation to the global Not Found route should trigger a
        // full-page navigation.
        //
        // TODO: We should probably model this by changing the key of the root
        // segment when this happens. Then the root layout check would work
        // as expected, without a special case.
        newSegment === _segment.NOT_FOUND_SEGMENT_KEY) {
            return null;
        }
        return createCacheNodeOnNavigation(navigatedAt, newRouteTree, newMetadataVaryPath, freshness, seedData, seedHead, seedDynamicStaleAt, parentNeedsDynamicRequest, accumulation);
    }
    var newSlots = newRouteTree.slots;
    var oldRouterStateChildren = oldRouterState[1];
    var seedDataChildren = seedData !== null ? seedData[1] : null;
    // We're currently traversing the part of the tree that was also part of
    // the previous route. If we discover a root layout, then we don't need to
    // trigger an MPA navigation.
    var childDidFindRootLayout = didFindRootLayout || (newRouteTree.prefetchHints & _approutertypes.PrefetchHint.IsRootLayout) !== 0;
    var shouldRefreshDynamicData = false;
    switch(freshness){
        case 0:
        case 2:
        case 1:
        case 5:
            shouldRefreshDynamicData = false;
            break;
        case 3:
        case 4:
            shouldRefreshDynamicData = true;
            break;
        default:
            freshness;
            break;
    }
    // TODO: We're not consistent about how we do this check. Some places
    // check if the segment starts with PAGE_SEGMENT_KEY, but most seem to
    // check if there any any children, which is why I'm doing it here. We
    // should probably encode an empty children set as `null` though. Either
    // way, we should update all the checks to be consistent.
    var isLeafSegment = newSlots === null;
    // Get the data for this segment. Since it was part of the previous route,
    // usually we just clone the data from the old CacheNode. However, during a
    // refresh or a revalidation, there won't be any existing CacheNode. So we
    // may need to consult the prefetch cache, like we would for a new segment.
    var newCacheNode;
    var needsDynamicRequest;
    if (oldCacheNode !== undefined && !shouldRefreshDynamicData && // During a same-page navigation, we always refetch the page segments
    !(isLeafSegment && isSamePageNavigation)) {
        // Reuse the existing CacheNode
        var dropPrefetchRsc = false;
        newCacheNode = reuseSharedCacheNode(dropPrefetchRsc, oldCacheNode);
        needsDynamicRequest = false;
    } else {
        // If this is part of a refresh, ignore the existing CacheNode and create a
        // new one.
        var seedRsc = seedData !== null ? seedData[0] : null;
        var result = createCacheNodeForSegment(navigatedAt, newRouteTree, seedRsc, newMetadataVaryPath, seedHead, freshness, seedDynamicStaleAt);
        newCacheNode = result.cacheNode;
        needsDynamicRequest = result.needsDynamicRequest;
        // Carry forward the old node's scrollRef. This preserves scroll
        // intent when a prior navigation's cache node is replaced by a
        // refresh before the scroll handler has had a chance to fire —
        // e.g. when router.push() and router.refresh() are called in the
        // same startTransition batch.
        if (oldCacheNode !== undefined) {
            newCacheNode.scrollRef = oldCacheNode.scrollRef;
        }
    }
    // During a refresh navigation, there's a special case that happens when
    // entering a "default" slot. The default slot may not be part of the
    // current route; it may have been reused from an older route. If so,
    // we need to fetch its data from the old route's URL rather than current
    // route's URL. Keep track of this as we traverse the tree.
    var maybeRefreshState = newRouteTree.refreshState;
    var refreshState = maybeRefreshState !== undefined && maybeRefreshState !== null ? maybeRefreshState : parentRefreshState;
    // If this segment itself needs to fetch new data from the server, then by
    // definition it is being refreshed. Track its refresh URL so we know which
    // URL to request the data from.
    if (needsDynamicRequest && refreshState !== null) {
        accumulateRefreshUrl(accumulation, refreshState);
    }
    // As we diff the trees, we may sometimes modify (copy-on-write, not mutate)
    // the Route Tree that was returned by the server — for example, in the case
    // of default parallel routes, we preserve the currently active segment. To
    // avoid mutating the original tree, we clone the router state children along
    // the return path.
    var patchedRouterStateChildren = {};
    var taskChildren = null;
    // Most navigations require a request to fetch additional data from the
    // server, either because the data was not already prefetched, or because the
    // target route contains dynamic data that cannot be prefetched.
    //
    // However, if the target route is fully static, and it's already completely
    // loaded into the segment cache, then we can skip the server request.
    //
    // This starts off as `false`, and is set to `true` if any of the child
    // routes requires a dynamic request.
    var childNeedsDynamicRequest = false;
    // As we traverse the children, we'll construct a FlightRouterState that can
    // be sent to the server to request the dynamic data. If it turns out that
    // nothing in the subtree is dynamic (i.e. childNeedsDynamicRequest is false
    // at the end), then this will be discarded.
    // TODO: We can probably optimize the format of this data structure to only
    // include paths that are dynamic. Instead of reusing the
    // FlightRouterState type.
    var dynamicRequestTreeChildren = {};
    var newCacheNodeSlots = null;
    if (newSlots !== null) {
        var oldCacheNodeSlots = oldCacheNode !== undefined ? oldCacheNode.slots : null;
        newCacheNode.slots = newCacheNodeSlots = {};
        taskChildren = new Map();
        for(var parallelRouteKey in newSlots){
            var newRouteTreeChild = newSlots[parallelRouteKey];
            var oldRouterStateChild = oldRouterStateChildren[parallelRouteKey];
            if (oldRouterStateChild === undefined) {
                // This should never happen, but if it does, it suggests a malformed
                // server response. Trigger a full-page navigation.
                return null;
            }
            var seedDataChild = seedDataChildren !== null ? seedDataChildren[parallelRouteKey] : null;
            var oldSegmentChild = oldRouterStateChild[0];
            var newSegmentChild = createSegmentFromRouteTree(newRouteTreeChild);
            var seedHeadChild = seedHead;
            if (// was stashed in the history entry as-is.
            freshness !== 2 && newSegmentChild === _segment.DEFAULT_SEGMENT_KEY && oldSegmentChild !== _segment.DEFAULT_SEGMENT_KEY) {
                // This is a "default" segment. These are never sent by the server during
                // a soft navigation; instead, the client reuses whatever segment was
                // already active in that slot on the previous route.
                newRouteTreeChild = reuseActiveSegmentInDefaultSlot(newRouteTree, parallelRouteKey, oldRootRefreshState, oldRouterStateChild);
                newSegmentChild = createSegmentFromRouteTree(newRouteTreeChild);
                // Since we're switching to a different route tree, these are no
                // longer valid, because they correspond to the outer tree.
                seedDataChild = null;
                seedHeadChild = null;
            }
            var oldCacheNodeChild = oldCacheNodeSlots !== null ? oldCacheNodeSlots[parallelRouteKey] : undefined;
            var taskChild = updateCacheNodeOnNavigation(navigatedAt, oldUrl, oldCacheNodeChild, oldRouterStateChild, newRouteTreeChild, newMetadataVaryPath, freshness, childDidFindRootLayout, seedDataChild !== null && seedDataChild !== void 0 ? seedDataChild : null, seedHeadChild, seedDynamicStaleAt, isSamePageNavigation, parentNeedsDynamicRequest || needsDynamicRequest, oldRootRefreshState, refreshState, accumulation);
            if (taskChild === null) {
                // One of the child tasks discovered a change to the root layout.
                // Immediately unwind from this recursive traversal. This will trigger a
                // full-page navigation.
                return null;
            }
            // Recursively propagate up the child tasks.
            taskChildren.set(parallelRouteKey, taskChild);
            newCacheNodeSlots[parallelRouteKey] = taskChild.node;
            // The child tree's route state may be different from the prefetched
            // route sent by the server. We need to clone it as we traverse back up
            // the tree.
            var taskChildRoute = taskChild.route;
            patchedRouterStateChildren[parallelRouteKey] = taskChildRoute;
            var dynamicRequestTreeChild = taskChild.dynamicRequestTree;
            if (dynamicRequestTreeChild !== null) {
                // Something in the child tree is dynamic.
                childNeedsDynamicRequest = true;
                dynamicRequestTreeChildren[parallelRouteKey] = dynamicRequestTreeChild;
            } else {
                dynamicRequestTreeChildren[parallelRouteKey] = taskChildRoute;
            }
        }
    }
    var newFlightRouterState = [
        createSegmentFromRouteTree(newRouteTree),
        patchedRouterStateChildren,
        refreshState !== null ? [
            refreshState.canonicalUrl,
            refreshState.renderedSearch
        ] : null,
        null,
        newRouteTree.prefetchHints
    ];
    return {
        status: needsDynamicRequest ? 0 : 1,
        route: newFlightRouterState,
        node: newCacheNode,
        dynamicRequestTree: createDynamicRequestTree(newFlightRouterState, dynamicRequestTreeChildren, needsDynamicRequest, childNeedsDynamicRequest, parentNeedsDynamicRequest),
        refreshState: refreshState,
        children: taskChildren
    };
}
/**
 * Assigns a ScrollRef to a new leaf CacheNode so the scroll handler
 * knows to scroll to it after navigation. All leaves in the same
 * navigation share the same ScrollRef — the first segment to scroll
 * consumes it, preventing others from also scrolling.
 *
 * This is only called inside `createCacheNodeOnNavigation`, which only
 * runs when segments diverge from the previous route. So for a refresh
 * where the route structure stays the same, segments match, the update
 * path is taken, and this function is never called — no scroll ref is
 * assigned. A scroll ref is only assigned when the route actually
 * changed (e.g. a redirect, or a dynamic condition on the server that
 * produces a different route).
 *
 * Skipped during hydration (initial render should not scroll) and
 * history traversal (scroll restoration is handled separately).
 */ function accumulateScrollRef(freshness, cacheNode, accumulation) {
    switch(freshness){
        case 0:
        case 5:
        case 3:
        case 4:
            if (accumulation.scrollRef === null) {
                accumulation.scrollRef = {
                    current: true
                };
            }
            cacheNode.scrollRef = accumulation.scrollRef;
            break;
        case 1:
            break;
        case 2:
            break;
        default:
            freshness;
            break;
    }
}
function createCacheNodeOnNavigation(navigatedAt, newRouteTree, newMetadataVaryPath, freshness, seedData, seedHead, seedDynamicStaleAt, parentNeedsDynamicRequest, accumulation) {
    // Same traversal as updateCacheNodeNavigation, but simpler. We switch to this
    // path once we reach the part of the tree that was not in the previous route.
    // We don't need to diff against the old tree, we just need to create a new
    // one. We also don't need to worry about any refresh-related logic.
    //
    // For the most part, this is a subset of updateCacheNodeOnNavigation, so any
    // change that happens in this function likely needs to be applied to that
    // one, too. However there are some places where the behavior intentionally
    // diverges, which is why we keep them separate.
    var newSegment = createSegmentFromRouteTree(newRouteTree);
    var newSlots = newRouteTree.slots;
    var seedDataChildren = seedData !== null ? seedData[1] : null;
    var seedRsc = seedData !== null ? seedData[0] : null;
    var result = createCacheNodeForSegment(navigatedAt, newRouteTree, seedRsc, newMetadataVaryPath, seedHead, freshness, seedDynamicStaleAt);
    var newCacheNode = result.cacheNode;
    var needsDynamicRequest = result.needsDynamicRequest;
    var isLeafSegment = newSlots === null;
    if (isLeafSegment) {
        accumulateScrollRef(freshness, newCacheNode, accumulation);
    }
    var patchedRouterStateChildren = {};
    var taskChildren = null;
    var childNeedsDynamicRequest = false;
    var dynamicRequestTreeChildren = {};
    var newCacheNodeSlots = null;
    if (newSlots !== null) {
        newCacheNode.slots = newCacheNodeSlots = {};
        taskChildren = new Map();
        for(var parallelRouteKey in newSlots){
            var newRouteTreeChild = newSlots[parallelRouteKey];
            var seedDataChild = seedDataChildren !== null ? seedDataChildren[parallelRouteKey] : null;
            var taskChild = createCacheNodeOnNavigation(navigatedAt, newRouteTreeChild, newMetadataVaryPath, freshness, seedDataChild !== null && seedDataChild !== void 0 ? seedDataChild : null, seedHead, seedDynamicStaleAt, parentNeedsDynamicRequest || needsDynamicRequest, accumulation);
            taskChildren.set(parallelRouteKey, taskChild);
            newCacheNodeSlots[parallelRouteKey] = taskChild.node;
            var taskChildRoute = taskChild.route;
            patchedRouterStateChildren[parallelRouteKey] = taskChildRoute;
            var dynamicRequestTreeChild = taskChild.dynamicRequestTree;
            if (dynamicRequestTreeChild !== null) {
                childNeedsDynamicRequest = true;
                dynamicRequestTreeChildren[parallelRouteKey] = dynamicRequestTreeChild;
            } else {
                dynamicRequestTreeChildren[parallelRouteKey] = taskChildRoute;
            }
        }
    }
    var newFlightRouterState = [
        newSegment,
        patchedRouterStateChildren,
        null,
        null,
        newRouteTree.prefetchHints
    ];
    return {
        status: needsDynamicRequest ? 0 : 1,
        route: newFlightRouterState,
        node: newCacheNode,
        dynamicRequestTree: createDynamicRequestTree(newFlightRouterState, dynamicRequestTreeChildren, needsDynamicRequest, childNeedsDynamicRequest, parentNeedsDynamicRequest),
        // This route is not part of the current tree, so there's no reason to
        // track the refresh URL.
        refreshState: null,
        children: taskChildren
    };
}
function createSegmentFromRouteTree(newRouteTree) {
    if (newRouteTree.isPage) {
        // In a dynamic server response, the server embeds the search params into
        // the segment key, but in a static one it's omitted. The client handles
        // this inconsistency by adding the search params back right at the end.
        //
        // TODO: The only thing this is used for is to create a cache key for
        // ChildSegmentMap. But we already track the `renderedSearch` everywhere as
        // part of the varyPath. The plan is get rid of ChildSegmentMap and
        // store the page data in a CacheMap using the varyPath, like we do
        // for prefetches. Then we can remove it from the segment key.
        //
        // As an incremental step, we can grab the search params from the varyPath.
        var renderedSearch = (0, _varypath.getRenderedSearchFromVaryPath)(newRouteTree.varyPath);
        if (renderedSearch === null) {
            return _segment.PAGE_SEGMENT_KEY;
        }
        // This is based on equivalent logic in addSearchParamsIfPageSegment, used
        // on the server.
        var stringifiedQuery = JSON.stringify(Object.fromEntries(new URLSearchParams(renderedSearch)));
        return stringifiedQuery !== '{}' ? _segment.PAGE_SEGMENT_KEY + '?' + stringifiedQuery : _segment.PAGE_SEGMENT_KEY;
    }
    return newRouteTree.segment;
}
function patchRouterStateWithNewChildren(baseRouterState, newChildren) {
    var clone = [
        baseRouterState[0],
        newChildren
    ];
    // Based on equivalent logic in apply-router-state-patch-to-tree, but should
    // confirm whether we need to copy all of these fields. Not sure the server
    // ever sends, e.g. the refetch marker.
    if (2 in baseRouterState) {
        clone[2] = baseRouterState[2];
    }
    if (3 in baseRouterState) {
        clone[3] = baseRouterState[3];
    }
    if (4 in baseRouterState) {
        clone[4] = baseRouterState[4];
    }
    return clone;
}
function createDynamicRequestTree(newRouterState, dynamicRequestTreeChildren, needsDynamicRequest, childNeedsDynamicRequest, parentNeedsDynamicRequest) {
    // Create a FlightRouterState that instructs the server how to render the
    // requested segment.
    //
    // Or, if neither this segment nor any of the children require a new data,
    // then we return `null` to skip the request.
    var dynamicRequestTree = null;
    if (needsDynamicRequest) {
        dynamicRequestTree = patchRouterStateWithNewChildren(newRouterState, dynamicRequestTreeChildren);
        // The "refetch" marker is set on the top-most segment that requires new
        // data. We can omit it if a parent was already marked.
        if (!parentNeedsDynamicRequest) {
            dynamicRequestTree[3] = 'refetch';
        }
    } else if (childNeedsDynamicRequest) {
        // This segment does not request new data, but at least one of its
        // children does.
        dynamicRequestTree = patchRouterStateWithNewChildren(newRouterState, dynamicRequestTreeChildren);
    } else {
        dynamicRequestTree = null;
    }
    return dynamicRequestTree;
}
function accumulateRefreshUrl(accumulation, refreshState) {
    // This is a refresh navigation, and we're inside a "default" slot that's
    // not part of the current route; it was reused from an older route. In
    // order to get fresh data for this reused route, we need to issue a
    // separate request using the old route's URL.
    //
    // Track these extra URLs in the accumulated result. Later, we'll construct
    // an appropriate request for each unique URL in the final set. The reason
    // we don't do it immediately here is so we can deduplicate multiple
    // instances of the same URL into a single request. See
    // listenForDynamicRequest for more details.
    var refreshUrl = refreshState.canonicalUrl;
    var separateRefreshUrls = accumulation.separateRefreshUrls;
    if (separateRefreshUrls === null) {
        accumulation.separateRefreshUrls = new Set([
            refreshUrl
        ]);
    } else {
        separateRefreshUrls.add(refreshUrl);
    }
}
function reuseActiveSegmentInDefaultSlot(parentRouteTree, parallelRouteKey, oldRootRefreshState, oldRouterState) {
    // This is a "default" segment. These are never sent by the server during a
    // soft navigation; instead, the client reuses whatever segment was already
    // active in that slot on the previous route. This means if we later need to
    // refresh the segment, it will have to be refetched from the previous route's
    // URL. We store it in the Flight Router State.
    var reusedUrl;
    var reusedRenderedSearch;
    var oldRefreshState = oldRouterState[2];
    if (oldRefreshState !== undefined && oldRefreshState !== null) {
        // This segment was already reused from an even older route. Keep its
        // existing URL and refresh state.
        reusedUrl = oldRefreshState[0];
        reusedRenderedSearch = oldRefreshState[1];
    } else {
        // Since this route didn't already have a refresh state, it must have been
        // reachable from the root of the old route. So we use the refresh state
        // that represents the old route.
        reusedUrl = oldRootRefreshState.canonicalUrl;
        reusedRenderedSearch = oldRootRefreshState.renderedSearch;
    }
    var acc = {
        metadataVaryPath: null
    };
    var reusedRouteTree = (0, _cache.convertReusedFlightRouterStateToRouteTree)(parentRouteTree, parallelRouteKey, oldRouterState, reusedRenderedSearch, acc);
    reusedRouteTree.refreshState = {
        canonicalUrl: reusedUrl,
        renderedSearch: reusedRenderedSearch
    };
    return reusedRouteTree;
}
function reuseSharedCacheNode(dropPrefetchRsc, existingCacheNode) {
    // Clone the CacheNode that was already present in the previous tree.
    // Carry forward the scrollRef so scroll intent from a prior navigation
    // survives tree rebuilds (e.g. push + refresh in the same batch).
    return createCacheNode(existingCacheNode.rsc, dropPrefetchRsc ? null : existingCacheNode.prefetchRsc, existingCacheNode.head, dropPrefetchRsc ? null : existingCacheNode.prefetchHead, existingCacheNode.scrollRef);
}
function createCacheNodeForSegment(now, tree, seedRsc, metadataVaryPath, seedHead, freshness, dynamicStaleAt) {
    // Construct a new CacheNode using data from the BFCache, the client's
    // Segment Cache, or seeded from a server response.
    //
    // If there's a cache miss, or if we only have a partial hit, we'll render
    // the partial state immediately, and spawn a request to the server to fill
    // in the missing data.
    //
    // If the segment is fully cached on the client already, we can omit this
    // segment from the server request.
    //
    // If we already have a dynamic data response associated with this navigation,
    // as in the case of a Server Action-initiated redirect or refresh, we may
    // also be able to use that data without spawning a new request. (This is
    // referred to as the "seed" data.)
    var isPage = tree.isPage;
    // During certain kinds of navigations, we may be able to render from
    // the BFCache.
    switch(freshness){
        case 0:
            {
                // Check BFCache during regular navigations. The entry's staleAt
                // determines whether it's still fresh. This is used when
                // staleTimes.dynamic is configured globally or when a page exports
                // unstable_dynamicStaleTime for per-page control.
                var bfcacheEntry = (0, _bfcache.readFromBFCacheDuringRegularNavigation)(now, tree.varyPath);
                if (bfcacheEntry !== null) {
                    return {
                        cacheNode: createCacheNode(bfcacheEntry.rsc, bfcacheEntry.prefetchRsc, bfcacheEntry.head, bfcacheEntry.prefetchHead),
                        needsDynamicRequest: false
                    };
                }
                break;
            }
        case 1:
            {
                // This is not related to the BFCache but it is a special case.
                //
                // We should never spawn network requests during hydration. We must treat
                // the initial payload as authoritative, because the initial page load is
                // used as a last-ditch mechanism for recovering the app.
                //
                // This is also an important safety check because if this leaks into the
                // server rendering path (which theoretically it never should because the
                // server payload should be consistent), the server would hang because these
                // promises would never resolve.
                //
                // TODO: There is an existing case where the global "not found" boundary
                // triggers this path. But it does render correctly despite that. That's an
                // unusual render path so it's not surprising, but we should look into
                // modeling it in a more consistent way. See also the /_notFound special
                // case in updateCacheNodeOnNavigation.
                var rsc = seedRsc;
                var prefetchRsc = null;
                var head = isPage ? seedHead : null;
                var prefetchHead = null;
                (0, _bfcache.writeToBFCache)(now, tree.varyPath, rsc, prefetchRsc, head, prefetchHead, dynamicStaleAt);
                if (isPage && metadataVaryPath !== null) {
                    (0, _bfcache.writeHeadToBFCache)(now, metadataVaryPath, head, prefetchHead, dynamicStaleAt);
                }
                return {
                    cacheNode: createCacheNode(rsc, prefetchRsc, head, prefetchHead),
                    needsDynamicRequest: false
                };
            }
        case 2:
            var bfcacheEntry1 = (0, _bfcache.readFromBFCache)(tree.varyPath);
            if (bfcacheEntry1 !== null) {
                // Only show prefetched data if the dynamic data is still pending. This
                // avoids a flash back to the prefetch state in a case where it's highly
                // likely to have already streamed in.
                //
                // Tehnically, what we're actually checking is whether the dynamic
                // network response was received. But since it's a streaming response,
                // this does not mean that all the dynamic data has fully streamed in.
                // It just means that _some_ of the dynamic data was received. But as a
                // heuristic, we assume that the rest dynamic data will stream in
                // quickly, so it's still better to skip the prefetch state.
                var oldRsc = bfcacheEntry1.rsc;
                var oldRscDidResolve = !isDeferredRsc(oldRsc) || oldRsc.status !== 'pending';
                var dropPrefetchRsc = oldRscDidResolve;
                return {
                    cacheNode: createCacheNode(bfcacheEntry1.rsc, dropPrefetchRsc ? null : bfcacheEntry1.prefetchRsc, bfcacheEntry1.head, dropPrefetchRsc ? null : bfcacheEntry1.prefetchHead),
                    needsDynamicRequest: false
                };
            }
            break;
        case 3:
        case 4:
        case 5:
            break;
        default:
            freshness;
            break;
    }
    var cachedRsc = null;
    var isCachedRscPartial = true;
    var segmentEntry = (0, _cache.readSegmentCacheEntry)(now, tree.varyPath);
    if (segmentEntry !== null) {
        switch(segmentEntry.status){
            case _cache.EntryStatus.Fulfilled:
                {
                    // Happy path: a cache hit
                    cachedRsc = segmentEntry.rsc;
                    isCachedRscPartial = segmentEntry.isPartial;
                    break;
                }
            case _cache.EntryStatus.Pending:
                {
                    // We haven't received data for this segment yet, but there's already
                    // an in-progress request. Since it's extremely likely to arrive
                    // before the dynamic data response, we might as well use it.
                    var promiseForFulfilledEntry = (0, _cache.waitForSegmentCacheEntry)(segmentEntry);
                    cachedRsc = promiseForFulfilledEntry.then(function(entry) {
                        return entry !== null ? entry.rsc : null;
                    });
                    // Because the request is still pending, we typically don't know yet
                    // whether the response will be partial. We shouldn't skip this segment
                    // during the dynamic navigation request. Otherwise, we might need to
                    // do yet another request to fill in the remaining data, creating
                    // a waterfall.
                    //
                    // The one exception is if this segment is being fetched with via
                    // prefetch={true} (i.e. the "force stale" or "full" strategy). If so,
                    // we can assume the response will be full. This field is set to `false`
                    // for such segments.
                    isCachedRscPartial = segmentEntry.isPartial;
                    break;
                }
            case _cache.EntryStatus.Empty:
            case _cache.EntryStatus.Rejected:
                {
                    break;
                }
            default:
                {
                    segmentEntry;
                    break;
                }
        }
    }
    // Now combine the cached data with the seed data to determine what we can
    // render immediately, versus what needs to stream in later.
    // A partial state to show immediately while we wait for the final data to
    // arrive. If `rsc` is already a complete value (not partial), or if we
    // don't have any useful partial state, this will be `null`.
    var prefetchRsc1;
    // The final, resolved segment data. If the data is missing, this will be a
    // promise that resolves to the eventual data. A resolved value of `null`
    // means the data failed to load; the LayoutRouter will suspend indefinitely
    // until the router updates again (refer to finishNavigationTask).
    var rsc1;
    var doesSegmentNeedDynamicRequest;
    if (seedRsc !== null) {
        // We already have a dynamic server response for this segment.
        if (isCachedRscPartial) {
            // The seed data may still be streaming in, so it's worth showing the
            // partial cached state in the meantime.
            prefetchRsc1 = cachedRsc;
            rsc1 = seedRsc;
        } else {
            // We already have a completely cached segment. Ignore the seed data,
            // which may still be streaming in. This shouldn't happen in the normal
            // case because the client will inform the server which segments are
            // already fully cached, and the server will skip rendering them.
            prefetchRsc1 = null;
            rsc1 = cachedRsc;
        }
        doesSegmentNeedDynamicRequest = false;
    } else {
        if (isCachedRscPartial) {
            // The cached data contains dynamic holes, or it's missing entirely. We'll
            // show the partial state immediately (if available), and stream in the
            // final data.
            //
            // Create a pending promise that we can later write to when the
            // data arrives from the server.
            prefetchRsc1 = cachedRsc;
            rsc1 = createDeferredRsc();
        } else {
            // The data is fully cached.
            prefetchRsc1 = null;
            rsc1 = cachedRsc;
        }
        doesSegmentNeedDynamicRequest = isCachedRscPartial;
    }
    // If this is a page segment, we need to do the same for the head. This
    // follows analogous logic to the segment data above.
    // TODO: We don't need to store the head on the page segment's CacheNode; we
    // can lift it to the main state object. Then we can also delete
    // findHeadCache.
    var prefetchHead1 = null;
    var head1 = null;
    var doesHeadNeedDynamicRequest = isPage;
    if (isPage) {
        var cachedHead = null;
        var isCachedHeadPartial = true;
        if (metadataVaryPath !== null) {
            var metadataEntry = (0, _cache.readSegmentCacheEntry)(now, metadataVaryPath);
            if (metadataEntry !== null) {
                switch(metadataEntry.status){
                    case _cache.EntryStatus.Fulfilled:
                        {
                            cachedHead = metadataEntry.rsc;
                            isCachedHeadPartial = metadataEntry.isPartial;
                            break;
                        }
                    case _cache.EntryStatus.Pending:
                        {
                            cachedHead = (0, _cache.waitForSegmentCacheEntry)(metadataEntry).then(function(entry) {
                                return entry !== null ? entry.rsc : null;
                            });
                            isCachedHeadPartial = metadataEntry.isPartial;
                            break;
                        }
                    case _cache.EntryStatus.Empty:
                    case _cache.EntryStatus.Rejected:
                        {
                            break;
                        }
                    default:
                        {
                            metadataEntry;
                            break;
                        }
                }
            }
        }
        if (("TURBOPACK compile-time value", false) && isCachedHeadPartial) {
            // TODO: When optimistic routing is enabled, don't block on waiting for
            // the viewport to resolve. This is a temporary workaround until Vary
            // Params are tracked when rendering the metadata. We'll fix it before
            // this feature is stable. However, it's not a critical issue because 1)
            // it will stream in eventually anyway 2) metadata is wrapped in an
            // internal Suspense boundary, so is always non-blocking; this only
            // affects the viewport node, which is meant to blocking, however... 3)
            // before Segment Cache landed this wasn't always the case, anyway, so
            // it's unlikely that many people are relying on this behavior. Still,
            // will be fixed before stable. It's the very next step in the sequence of
            // work on this project.
            //
            // This line of code works because the App Router treats `null` as
            // "no renderable head available", rather than an empty head. React treats
            // an empty string as empty.
            cachedHead = '';
        }
        if (seedHead !== null) {
            if (isCachedHeadPartial) {
                prefetchHead1 = cachedHead;
                head1 = seedHead;
            } else {
                prefetchHead1 = null;
                head1 = cachedHead;
            }
            doesHeadNeedDynamicRequest = false;
        } else {
            if (isCachedHeadPartial) {
                prefetchHead1 = cachedHead;
                head1 = createDeferredRsc();
            } else {
                prefetchHead1 = null;
                head1 = cachedHead;
            }
            doesHeadNeedDynamicRequest = isCachedHeadPartial;
        }
    }
    // Now that we're creating a new segment, write its data to the BFCache. A
    // subsequent back/forward navigation will reuse this same data, until or
    // unless it's cleared by a refresh/revalidation.
    //
    // Skip BFCache writes for optimistic navigations since they are transient
    // and will be replaced by the canonical navigation.
    if (freshness !== 5) {
        (0, _bfcache.writeToBFCache)(now, tree.varyPath, rsc1, prefetchRsc1, head1, prefetchHead1, dynamicStaleAt);
        if (isPage && metadataVaryPath !== null) {
            (0, _bfcache.writeHeadToBFCache)(now, metadataVaryPath, head1, prefetchHead1, dynamicStaleAt);
        }
    }
    return {
        cacheNode: createCacheNode(rsc1, prefetchRsc1, head1, prefetchHead1),
        // TODO: We should store this field on the CacheNode itself. I think we can
        // probably unify NavigationTask, CacheNode, and DeferredRsc into a
        // single type. Or at least CacheNode and DeferredRsc.
        needsDynamicRequest: doesSegmentNeedDynamicRequest || doesHeadNeedDynamicRequest
    };
}
function createCacheNode(rsc, prefetchRsc, head, prefetchHead) {
    var scrollRef = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
    return {
        rsc: rsc,
        prefetchRsc: prefetchRsc,
        head: head,
        prefetchHead: prefetchHead,
        slots: null,
        scrollRef: scrollRef
    };
}
// Represents whether the previuos navigation resulted in a route tree mismatch.
// A mismatch results in a refresh of the page. If there are two successive
// mismatches, we will fall back to an MPA navigation, to prevent a retry loop.
var previousNavigationDidMismatch = false;
function spawnDynamicRequests(task, primaryUrl, nextUrl, freshnessPolicy, accumulation, // prediction. Passed through so it can be marked as having a dynamic rewrite
// if the server returns a different pathname than expected (indicating
// dynamic rewrite behavior that varies by param value).
routeCacheEntry, // server-patch retry logic so it can inherit the intent if the original
// transition hasn't committed yet.
navigateType) {
    var dynamicRequestTree = task.dynamicRequestTree;
    if (dynamicRequestTree === null) {
        // This navigation was fully cached. There are no dynamic requests to spawn.
        previousNavigationDidMismatch = false;
        return;
    }
    // This is intentionally not an async function to discourage the caller from
    // awaiting the result. Any subsequent async operations spawned by this
    // function should result in a separate navigation task, rather than
    // block the original one.
    //
    // In this function we spawn (but do not await) all the network requests that
    // block the navigation, and collect the promises. The next function,
    // `finishNavigationTask`, can await the promises in any order without
    // accidentally introducing a network waterfall.
    var primaryRequestPromise = fetchMissingDynamicData(task, dynamicRequestTree, primaryUrl, nextUrl, freshnessPolicy, routeCacheEntry);
    var separateRefreshUrls = accumulation.separateRefreshUrls;
    var refreshRequestPromises = null;
    if (separateRefreshUrls !== null) {
        // There are multiple URLs that we need to request the data from. This
        // happens when a "default" parallel route slot is present in the tree, and
        // its data cannot be fetched from the current route. We need to split the
        // combined dynamic request tree into separate requests per URL.
        // TODO: Create a scoped dynamic request tree that omits anything that
        // is not relevant to the given URL. Without doing this, the server may
        // sometimes render more data than necessary; this is not a regression
        // compared to the pre-Segment Cache implementation, though, just an
        // optimization we can make in the future.
        // Construct a request tree for each additional refresh URL. This will
        // prune away everything except the parts of the tree that match the
        // given refresh URL.
        refreshRequestPromises = [];
        var canonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(primaryUrl);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = separateRefreshUrls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var refreshUrl = _step.value;
                if (refreshUrl === canonicalUrl) {
                    continue;
                }
                // TODO: Create a scoped dynamic request tree that omits anything that
                // is not relevant to the given URL. Without doing this, the server may
                // sometimes render more data than necessary; this is not a regression
                // compared to the pre-Segment Cache implementation, though, just an
                // optimization we can make in the future.
                // const scopedDynamicRequestTree = splitTaskByURL(task, refreshUrl)
                var scopedDynamicRequestTree = dynamicRequestTree;
                if (scopedDynamicRequestTree !== null) {
                    refreshRequestPromises.push(fetchMissingDynamicData(task, scopedDynamicRequestTree, new URL(refreshUrl, location.origin), // time the refresh URL was set, not the current Next-Url. Need to
                    // start tracking this alongside the refresh URL. In the meantime,
                    // if a refresh fails due to a mismatch, it will trigger a
                    // hard refresh.
                    nextUrl, freshnessPolicy, routeCacheEntry));
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
    // Further async operations are moved into this separate function to
    // discourage sequential network requests.
    var voidPromise = finishNavigationTask(task, nextUrl, primaryRequestPromise, refreshRequestPromises, routeCacheEntry, navigateType);
    // `finishNavigationTask` is responsible for error handling, so we can attach
    // noop callbacks to this promise.
    voidPromise.then(noop, noop);
}
function finishNavigationTask(task, nextUrl, primaryRequestPromise, refreshRequestPromises, routeCacheEntry, navigateType) {
    return _async_to_generator._(function() {
        var exitStatus, isHardRetry, primaryRequestResult, isHardRetry1, primaryRequestResult1;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        waitForRequestsToFinish(primaryRequestPromise, refreshRequestPromises)
                    ];
                case 1:
                    exitStatus = _state.sent();
                    // Once the all the requests have finished, check the tree for any remaining
                    // pending tasks. If anything is still pending, it means the server response
                    // does not match the client, and we must refresh to get back to a consistent
                    // state. We can skip this step if we already detected a mismatch during the
                    // first phase; it doesn't matter in that case because we're going to refresh
                    // the whole tree regardless.
                    if (exitStatus === 0) {
                        exitStatus = abortRemainingPendingTasks(task, null, null);
                    }
                    switch(exitStatus){
                        case 0:
                            return [
                                3,
                                2
                            ];
                        case 1:
                            return [
                                3,
                                3
                            ];
                        case 2:
                            return [
                                3,
                                5
                            ];
                    }
                    return [
                        3,
                        7
                    ];
                case 2:
                    {
                        // The task has completely finished. There's no missing data. Exit.
                        previousNavigationDidMismatch = false;
                        return [
                            2
                        ];
                    }
                    _state.label = 3;
                case 3:
                    // Some data failed to finish loading. Trigger a soft retry.
                    // TODO: As an extra precaution against soft retry loops, consider
                    // tracking whether a navigation was itself triggered by a retry. If two
                    // happen in a row, fall back to a hard retry.
                    isHardRetry = false;
                    return [
                        4,
                        primaryRequestPromise
                    ];
                case 4:
                    primaryRequestResult = _state.sent();
                    dispatchRetryDueToTreeMismatch(isHardRetry, primaryRequestResult.url, nextUrl, primaryRequestResult.seed, task.route, routeCacheEntry, navigateType);
                    return [
                        2
                    ];
                case 5:
                    // Some data failed to finish loading in a non-recoverable way, such as a
                    // network error. Trigger an MPA navigation.
                    //
                    // Hard navigating/refreshing is how we prevent an infinite retry loop
                    // caused by a network error — when the network fails, we fall back to the
                    // browser behavior for offline navigations. In the future, Next.js may
                    // introduce its own custom handling of offline navigations, but that
                    // doesn't exist yet.
                    isHardRetry1 = true;
                    return [
                        4,
                        primaryRequestPromise
                    ];
                case 6:
                    primaryRequestResult1 = _state.sent();
                    dispatchRetryDueToTreeMismatch(isHardRetry1, primaryRequestResult1.url, nextUrl, primaryRequestResult1.seed, task.route, routeCacheEntry, navigateType);
                    return [
                        2
                    ];
                case 7:
                    {
                        return [
                            2,
                            exitStatus
                        ];
                    }
                    _state.label = 8;
                case 8:
                    return [
                        2
                    ];
            }
        });
    })();
}
function waitForRequestsToFinish(primaryRequestPromise, refreshRequestPromises) {
    // Custom async combinator logic. This could be replaced by Promise.any but
    // we don't assume that's available.
    //
    // Each promise resolves once the server responsds and the data is written
    // into the CacheNode tree. Resolve the combined promise once all the
    // requests finish.
    //
    // Or, resolve as soon as one of the requests fails, without waiting for the
    // others to finish.
    return new Promise(function(resolve) {
        var onFulfill = function onFulfill(result) {
            if (result.exitStatus === 0) {
                remainingCount--;
                if (remainingCount === 0) {
                    // All the requests finished successfully.
                    resolve(0);
                }
            } else {
                // One of the requests failed. Exit with a failing status.
                // NOTE: It's possible for one of the requests to fail with SoftRetry
                // and a later one to fail with HardRetry. In this case, we choose to
                // retry immediately, rather than delay the retry until all the requests
                // finish. If it fails again, we will hard retry on the next
                // attempt, anyway.
                resolve(result.exitStatus);
            }
        };
        // onReject shouldn't ever be called because fetchMissingDynamicData's
        // entire body is wrapped in a try/catch. This is just defensive.
        var onReject = function onReject() {
            return resolve(2);
        };
        // Attach the listeners to the promises.
        var remainingCount = 1;
        primaryRequestPromise.then(onFulfill, onReject);
        if (refreshRequestPromises !== null) {
            remainingCount += refreshRequestPromises.length;
            refreshRequestPromises.forEach(function(refreshRequestPromise) {
                return refreshRequestPromise.then(onFulfill, onReject);
            });
        }
    });
}
function dispatchRetryDueToTreeMismatch(isHardRetry, retryUrl, retryNextUrl, seed, baseTree, // prediction. If the navigation results in a mismatch, we mark it as having
// a dynamic rewrite so future predictions bail out.
routeCacheEntry, originalNavigateType) {
    // If the navigation used a route prediction, mark it as having a dynamic
    // rewrite since it resulted in a mismatch.
    if (routeCacheEntry !== null) {
        (0, _cache.markRouteEntryAsDynamicRewrite)(routeCacheEntry);
    } else if (seed !== null) {
        // Even without a direct reference to the route cache entry, we can still
        // mark the route as having a dynamic rewrite by traversing the known route
        // tree. This handles cases where the navigation didn't originate from a
        // route prediction, but still needs to mark the pattern.
        var metadataVaryPath = seed.metadataVaryPath;
        if (metadataVaryPath !== null) {
            var now = Date.now();
            (0, _optimisticroutes.discoverKnownRoute)(now, retryUrl.pathname, retryNextUrl, null, seed.routeTree, metadataVaryPath, false, (0, _createhreffromurl.createHrefFromUrl)(retryUrl), false, true // hasDynamicRewrite
            );
        }
    }
    // Invalidate all route cache entries. Other entries may have been derived
    // from the template before we knew it had a dynamic rewrite. This also
    // triggers re-prefetching of visible links.
    (0, _cache.invalidateRouteCacheEntries)(retryNextUrl, baseTree);
    // If this is the second time in a row that a navigation resulted in a
    // mismatch, fall back to a hard (MPA) refresh.
    isHardRetry = isHardRetry || previousNavigationDidMismatch;
    previousNavigationDidMismatch = true;
    // If the original navigation hasn't committed to the browser history yet
    // (the transition suspended before React committed), inherit its push/replace
    // intent. Otherwise, the pushState already ran, so use 'replace' to avoid
    // creating a duplicate history entry.
    //
    // This works because React entangles the retry's state update with the
    // original pending transition — they commit together as a single batch,
    // so the navigate type from the retry is what HistoryUpdater ultimately sees.
    //
    // TODO: Ideally this check would happen right before we schedule the React
    // update (i.e., closer to where the action is dispatched into the queue),
    // not here where the action is constructed. But the current action queue
    // doesn't provide a natural place for that. Revisit when we refactor the
    // action queue into a more reactive navigation model.
    var lastCommitted = (0, _committedstate.getLastCommittedTree)();
    var retryNavigateType = lastCommitted !== null && baseTree !== lastCommitted ? originalNavigateType : 'replace';
    var retryAction = {
        type: _routerreducertypes.ACTION_SERVER_PATCH,
        previousTree: baseTree,
        url: retryUrl,
        nextUrl: retryNextUrl,
        seed: seed,
        mpa: isHardRetry,
        navigateType: retryNavigateType
    };
    (0, _useactionqueue.dispatchAppRouterAction)(retryAction);
}
function fetchMissingDynamicData(task, dynamicRequestTree, url, nextUrl, freshnessPolicy, routeCacheEntry) {
    return _async_to_generator._(function() {
        var result, now, seed, _result_staticStageData, staticStageResponse, isResponsePartial, dynamicStaleAt, didReceiveUnknownParallelRoute, unused;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        4,
                        ,
                        5
                    ]);
                    return [
                        4,
                        (0, _fetchserverresponse.fetchServerResponse)(url, {
                            flightRouterState: dynamicRequestTree,
                            nextUrl: nextUrl,
                            isHmrRefresh: freshnessPolicy === 4
                        })
                    ];
                case 1:
                    result = _state.sent();
                    if (typeof result === 'string') {
                        // fetchServerResponse will return an href to indicate that the SPA
                        // navigation failed. For example, if the server triggered a hard
                        // redirect, or the fetch request errored. Initiate an MPA navigation
                        // to the given href.
                        return [
                            2,
                            {
                                exitStatus: 2,
                                url: new URL(result, location.origin),
                                seed: null
                            }
                        ];
                    }
                    now = Date.now();
                    seed = (0, _navigation.convertServerPatchToFullTree)(now, task.route, result.flightData, result.renderedSearch, result.dynamicStaleTime);
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    return [
                        4,
                        waitForNavigationLock()
                    ];
                case 2:
                    _state.sent();
                    _state.label = 3;
                case 3:
                    if (routeCacheEntry !== null && result.staticStageData !== null) {
                        _result_staticStageData = result.staticStageData, staticStageResponse = _result_staticStageData.response, isResponsePartial = _result_staticStageData.isResponsePartial;
                        (0, _cache.getStaleAt)(now, staticStageResponse.s).then(function(staleAt) {
                            var _result_responseHeaders_get;
                            var buildId = (_result_responseHeaders_get = result.responseHeaders.get(_constants.NEXT_NAV_DEPLOYMENT_ID_HEADER)) !== null && _result_responseHeaders_get !== void 0 ? _result_responseHeaders_get : staticStageResponse.b;
                            (0, _cache.writeStaticStageResponseIntoCache)(now, staticStageResponse.f, buildId, staticStageResponse.h, staleAt, dynamicRequestTree, result.renderedSearch, isResponsePartial);
                        }).catch(function() {
                        // The static stage processing failed. Not fatal — the navigation
                        // completed normally, we just won't write into the cache.
                        });
                    }
                    if (routeCacheEntry !== null && result.runtimePrefetchStream !== null) {
                        (0, _cache.processRuntimePrefetchStream)(now, result.runtimePrefetchStream, dynamicRequestTree, result.renderedSearch).then(function(processed) {
                            if (processed !== null) {
                                (0, _cache.writeDynamicRenderResponseIntoCache)(now, _types.FetchStrategy.PPRRuntime, processed.flightDatas, processed.buildId, processed.isResponsePartial, processed.headVaryParams, processed.staleAt, processed.navigationSeed, null);
                            }
                        }).catch(function() {
                        // The runtime prefetch cache write failed. Not fatal — the
                        // navigation completed normally, we just won't cache runtime data.
                        });
                    }
                    // result.dynamicStaleTime is in seconds (from the server's `d` field).
                    // Convert to an absolute timestamp using the centralized helper.
                    dynamicStaleAt = (0, _bfcache.computeDynamicStaleAt)(now, result.dynamicStaleTime);
                    didReceiveUnknownParallelRoute = writeDynamicDataIntoNavigationTask(task, seed.routeTree, seed.data, seed.head, dynamicStaleAt, result.debugInfo);
                    return [
                        2,
                        {
                            exitStatus: didReceiveUnknownParallelRoute ? 1 : 0,
                            url: new URL(result.canonicalUrl, location.origin),
                            seed: seed
                        }
                    ];
                case 4:
                    unused = _state.sent();
                    // This shouldn't happen because fetchServerResponse's entire body is
                    // wrapped in a try/catch. If it does, though, it implies the server failed
                    // to respond with any tree at all. So we must fall back to a hard retry.
                    return [
                        2,
                        {
                            exitStatus: 2,
                            url: url,
                            seed: null
                        }
                    ];
                case 5:
                    return [
                        2
                    ];
            }
        });
    })();
}
function writeDynamicDataIntoNavigationTask(task, serverRouteTree, dynamicData, dynamicHead, dynamicStaleAt, debugInfo) {
    if (task.status === 0 && dynamicData !== null) {
        task.status = 1;
        finishPendingCacheNode(task.node, dynamicData, dynamicHead, debugInfo);
        // Update the BFCache entry's staleAt for this segment with the value
        // from the dynamic response. This applies the per-page
        // unstable_dynamicStaleTime if set, or the default DYNAMIC_STALETIME_MS.
        // We only update segments that received dynamic data — static segments
        // are unaffected.
        (0, _bfcache.updateBFCacheEntryStaleAt)(serverRouteTree.varyPath, dynamicStaleAt);
    }
    var taskChildren = task.children;
    var serverChildren = serverRouteTree.slots;
    var dynamicDataChildren = dynamicData !== null ? dynamicData[1] : null;
    // Detect whether the server sends a parallel route slot that the client
    // doesn't know about.
    var didReceiveUnknownParallelRoute = false;
    if (taskChildren !== null) {
        if (serverChildren !== null) {
            for(var parallelRouteKey in serverChildren){
                var serverRouteTreeChild = serverChildren[parallelRouteKey];
                var dynamicDataChild = dynamicDataChildren !== null ? dynamicDataChildren[parallelRouteKey] : null;
                var taskChild = taskChildren.get(parallelRouteKey);
                if (taskChild === undefined) {
                    // The server sent a child segment that the client doesn't know about.
                    //
                    // When we receive an unknown parallel route, we must consider it a
                    // mismatch. This is unlike the case where the segment itself
                    // mismatches, because multiple routes can be active simultaneously.
                    // But a given layout should never have a mismatching set of
                    // child slots.
                    //
                    // Theoretically, this should only happen in development during an HMR
                    // refresh, because the set of parallel routes for a layout does not
                    // change over the lifetime of a build/deployment. In production, we
                    // should have already mismatched on either the build id or the segment
                    // path. But as an extra precaution, we validate in prod, too.
                    didReceiveUnknownParallelRoute = true;
                } else {
                    var taskSegment = taskChild.route[0];
                    var serverSegment = createSegmentFromRouteTree(serverRouteTreeChild);
                    if ((0, _matchsegments.matchSegment)(serverSegment, taskSegment) && dynamicDataChild !== null && dynamicDataChild !== undefined) {
                        // Found a match for this task. Keep traversing down the task tree.
                        var childDidReceiveUnknownParallelRoute = writeDynamicDataIntoNavigationTask(taskChild, serverRouteTreeChild, dynamicDataChild, dynamicHead, dynamicStaleAt, debugInfo);
                        if (childDidReceiveUnknownParallelRoute) {
                            didReceiveUnknownParallelRoute = true;
                        }
                    }
                }
            }
        } else {
            if (serverChildren !== null) {
                // The server sent a child segment that the client doesn't know about.
                didReceiveUnknownParallelRoute = true;
            }
        }
    }
    return didReceiveUnknownParallelRoute;
}
function finishPendingCacheNode(cacheNode, dynamicData, dynamicHead, debugInfo) {
    // Writes a dynamic response into an existing Cache Node tree. This does _not_
    // create a new tree, it updates the existing tree in-place. So it must follow
    // the Suspense rules of cache safety — it can resolve pending promises, but
    // it cannot overwrite existing data. It can add segments to the tree (because
    // a missing segment will cause the layout router to suspend).
    // but it cannot delete them.
    //
    // We must resolve every promise in the tree, or else it will suspend
    // indefinitely. If we did not receive data for a segment, we will resolve its
    // data promise to `null` to trigger a lazy fetch during render.
    // Use the dynamic data from the server to fulfill the deferred RSC promise
    // on the Cache Node.
    var rsc = cacheNode.rsc;
    var dynamicSegmentData = dynamicData[0];
    if (dynamicSegmentData === null) {
        // This is an empty CacheNode; this particular server request did not
        // render this segment. There may be a separate pending request that will,
        // though, so we won't abort the task until all pending requests finish.
        return;
    }
    if (rsc === null) {
        // This is a lazy cache node. We can overwrite it. This is only safe
        // because we know that the LayoutRouter suspends if `rsc` is `null`.
        cacheNode.rsc = dynamicSegmentData;
    } else if (isDeferredRsc(rsc)) {
        // This is a deferred RSC promise. We can fulfill it with the data we just
        // received from the server. If it was already resolved by a different
        // navigation, then this does nothing because we can't overwrite data.
        rsc.resolve(dynamicSegmentData, debugInfo);
    } else {
    // This is not a deferred RSC promise, nor is it empty, so it must have
    // been populated by a different navigation. We must not overwrite it.
    }
    // Check if this is a leaf segment. If so, it will have a `head` property with
    // a pending promise that needs to be resolved with the dynamic head from
    // the server.
    var head = cacheNode.head;
    if (isDeferredRsc(head)) {
        head.resolve(dynamicHead, debugInfo);
    }
}
function abortRemainingPendingTasks(task, error, debugInfo) {
    var exitStatus;
    if (task.status === 0) {
        // The data for this segment is still missing.
        task.status = 2;
        abortPendingCacheNode(task.node, error, debugInfo);
        // If the server failed to fulfill the data for this segment, it implies
        // that the route tree received from the server mismatched the tree that
        // was previously prefetched.
        //
        // In an app with fully static routes and no proxy-driven redirects or
        // rewrites, this should never happen, because the route for a URL would
        // always be the same across multiple requests. So, this implies that some
        // runtime routing condition changed, likely in a proxy, without being
        // pushed to the client.
        //
        // When this happens, we treat this the same as a refresh(). The entire
        // tree will be re-rendered from the root.
        if (task.refreshState === null) {
            // Trigger a "soft" refresh. Essentially the same as calling `refresh()`
            // in a Server Action.
            exitStatus = 1;
        } else {
            // The mismatch was discovered inside an inactive parallel route. This
            // implies the inactive parallel route is no longer reachable at the URL
            // that originally rendered it. Fall back to an MPA refresh.
            // TODO: An alternative could be to trigger a soft refresh but to _not_
            // re-use the inactive parallel routes this time. Similar to what would
            // happen if were to do a hard refrehs, but without the HTML page.
            exitStatus = 2;
        }
    } else {
        // This segment finished. (An error here is treated as Done because they are
        // surfaced to the application during render.)
        exitStatus = 0;
    }
    var taskChildren = task.children;
    if (taskChildren !== null) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = taskChildren[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array._(_step.value, 2), taskChild = _step_value[1];
                var childExitStatus = abortRemainingPendingTasks(taskChild, error, debugInfo);
                // Propagate the exit status up the tree. The statuses are ordered by
                // their precedence.
                if (childExitStatus > exitStatus) {
                    exitStatus = childExitStatus;
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
    return exitStatus;
}
function abortPendingCacheNode(cacheNode, error, debugInfo) {
    var rsc = cacheNode.rsc;
    if (isDeferredRsc(rsc)) {
        if (error === null) {
            // This will trigger a lazy fetch during render.
            rsc.resolve(null, debugInfo);
        } else {
            // This will trigger an error during rendering.
            rsc.reject(error, debugInfo);
        }
    }
    // Check if this is a leaf segment. If so, it will have a `head` property with
    // a pending promise that needs to be resolved. If an error was provided, we
    // will not resolve it with an error, since this is rendered at the root of
    // the app. We want the segment to error, not the entire app.
    var head = cacheNode.head;
    if (isDeferredRsc(head)) {
        head.resolve(null, debugInfo);
    }
}
var DEFERRED = Symbol();
function isDeferredRsc(value) {
    return value && (typeof value === "undefined" ? "undefined" : _type_of._(value)) === 'object' && value.tag === DEFERRED;
}
function createDeferredRsc() {
    // Create an unresolved promise that represents data derived from a Flight
    // response. The promise will be resolved later as soon as we start receiving
    // data from the server, i.e. as soon as the Flight client decodes and returns
    // the top-level response object.
    // The `_debugInfo` field contains profiling information. Promises that are
    // created by Flight already have this info added by React; for any derived
    // promise created by the router, we need to transfer the Flight debug info
    // onto the derived promise.
    //
    // The debug info represents the latency between the start of the navigation
    // and the start of rendering. (It does not represent the time it takes for
    // whole stream to finish.)
    var debugInfo = [];
    var resolve;
    var reject;
    var pendingRsc = new Promise(function(res, rej) {
        resolve = res;
        reject = rej;
    });
    pendingRsc.status = 'pending';
    pendingRsc.resolve = function(value, responseDebugInfo) {
        if (pendingRsc.status === 'pending') {
            var fulfilledRsc = pendingRsc;
            fulfilledRsc.status = 'fulfilled';
            fulfilledRsc.value = value;
            if (responseDebugInfo !== null) {
                // Transfer the debug info to the derived promise.
                debugInfo.push.apply(debugInfo, responseDebugInfo);
            }
            resolve(value);
        }
    };
    pendingRsc.reject = function(error, responseDebugInfo) {
        if (pendingRsc.status === 'pending') {
            var rejectedRsc = pendingRsc;
            rejectedRsc.status = 'rejected';
            rejectedRsc.reason = error;
            if (responseDebugInfo !== null) {
                // Transfer the debug info to the derived promise.
                debugInfo.push.apply(debugInfo, responseDebugInfo);
            }
            reject(error);
        }
    };
    pendingRsc.tag = DEFERRED;
    pendingRsc._debugInfo = debugInfo;
    return pendingRsc;
}
/**
 * Helper for the Instant Navigation Testing API. Waits for the navigation lock
 * to be released before returning. The network request has already completed by
 * the time this is called, so this only delays writing the dynamic data.
 *
 * Not exposed in production builds by default.
 */ function waitForNavigationLock() {
    return _async_to_generator._(function() {
        var waitForNavigationLockIfActive;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    waitForNavigationLockIfActive = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/navigation-testing-lock.js [app-client] (ecmascript)").waitForNavigationLockIfActive;
                    return [
                        4,
                        waitForNavigationLockIfActive()
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    return [
                        2
                    ];
            }
        });
    })();
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _to_consumable_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    computeChangedPath: null,
    extractPathFromFlightRouterState: null,
    extractSourcePageFromFlightRouterState: null,
    getSelectedParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    computeChangedPath: function computeChangedPath1() {
        return computeChangedPath;
    },
    extractPathFromFlightRouterState: function extractPathFromFlightRouterState1() {
        return extractPathFromFlightRouterState;
    },
    extractSourcePageFromFlightRouterState: function extractSourcePageFromFlightRouterState1() {
        return extractSourcePageFromFlightRouterState;
    },
    getSelectedParams: function getSelectedParams1() {
        return getSelectedParams;
    }
});
var _interceptionroutes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-client] (ecmascript)");
var _segment = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
var _matchsegments = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
var removeLeadingSlash = function removeLeadingSlash(segment) {
    return segment[0] === '/' ? segment.slice(1) : segment;
};
var segmentToPathname = function segmentToPathname(segment) {
    if (typeof segment === 'string') {
        // 'children' is not a valid path -- it's technically a parallel route that corresponds with the current segment's page
        // if we don't skip it, then the computed pathname might be something like `/children` which doesn't make sense.
        if (segment === 'children') return '';
        return segment;
    }
    return segment[1];
};
var segmentToSourcePagePathname = function segmentToSourcePagePathname(segment) {
    if (typeof segment === 'string') {
        if (segment === 'children') return '';
        if (segment.startsWith(_segment.PAGE_SEGMENT_KEY)) return 'page';
        return segment;
    }
    var _segment1 = _sliced_to_array._(segment, 3), paramName = _segment1[0], dynamicParamType = _segment1[2];
    switch(dynamicParamType){
        case 'c':
            return "[...".concat(paramName, "]");
        case 'ci(..)(..)':
            return "(..)(..)[...".concat(paramName, "]");
        case 'ci(.)':
            return "(.)[...".concat(paramName, "]");
        case 'ci(..)':
            return "(..)[...".concat(paramName, "]");
        case 'ci(...)':
            return "(...)[...".concat(paramName, "]");
        case 'oc':
            return "[[...".concat(paramName, "]]");
        case 'd':
            return "[".concat(paramName, "]");
        case 'di(..)(..)':
            return "(..)(..)[".concat(paramName, "]");
        case 'di(.)':
            return "(.)[".concat(paramName, "]");
        case 'di(..)':
            return "(..)[".concat(paramName, "]");
        case 'di(...)':
            return "(...)[".concat(paramName, "]");
        default:
            dynamicParamType;
            return "[".concat(paramName, "]");
    }
};
function normalizeSegments(segments) {
    return segments.reduce(function(acc, segment) {
        segment = removeLeadingSlash(segment);
        if (segment === '' || (0, _segment.isGroupSegment)(segment)) {
            return acc;
        }
        return "".concat(acc, "/").concat(segment);
    }, '') || '/';
}
function extractPathFromFlightRouterState(flightRouterState) {
    var _flightRouterState_;
    var segment = Array.isArray(flightRouterState[0]) ? flightRouterState[0][1] : flightRouterState[0];
    if (segment === _segment.DEFAULT_SEGMENT_KEY || _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some(function(m) {
        return segment.startsWith(m);
    })) return undefined;
    if (segment.startsWith(_segment.PAGE_SEGMENT_KEY)) return '';
    var segments = [
        segmentToPathname(segment)
    ];
    var parallelRoutes = (_flightRouterState_ = flightRouterState[1]) !== null && _flightRouterState_ !== void 0 ? _flightRouterState_ : {};
    var childrenPath = parallelRoutes.children ? extractPathFromFlightRouterState(parallelRoutes.children) : undefined;
    if (childrenPath !== undefined) {
        segments.push(childrenPath);
    } else {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.entries(parallelRoutes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array._(_step.value, 2), key = _step_value[0], value = _step_value[1];
                if (key === 'children') continue;
                var childPath = extractPathFromFlightRouterState(value);
                if (childPath !== undefined) {
                    segments.push(childPath);
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
    return normalizeSegments(segments);
}
function extractSourcePageSegmentsFromFlightRouterState(flightRouterState) {
    var _flightRouterState_;
    var segment = segmentToSourcePagePathname(flightRouterState[0]);
    if (segment === _segment.DEFAULT_SEGMENT_KEY) {
        return undefined;
    }
    if (segment === 'page') {
        return [
            segment
        ];
    }
    var parallelRoutes = (_flightRouterState_ = flightRouterState[1]) !== null && _flightRouterState_ !== void 0 ? _flightRouterState_ : {};
    var childrenPath = parallelRoutes.children ? extractSourcePageSegmentsFromFlightRouterState(parallelRoutes.children) : undefined;
    if (childrenPath !== undefined) {
        return segment === '' ? childrenPath : [
            removeLeadingSlash(segment)
        ].concat(_to_consumable_array._(childrenPath));
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(parallelRoutes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array._(_step.value, 2), key = _step_value[0], value = _step_value[1];
            if (key === 'children') continue;
            var childPath = extractSourcePageSegmentsFromFlightRouterState(value);
            if (childPath !== undefined) {
                return segment === '' ? childPath : [
                    removeLeadingSlash(segment)
                ].concat(_to_consumable_array._(childPath));
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
    return undefined;
}
function extractSourcePageFromFlightRouterState(flightRouterState) {
    var sourcePageSegments = extractSourcePageSegmentsFromFlightRouterState(flightRouterState);
    return sourcePageSegments ? "/".concat(sourcePageSegments.join('/')) : undefined;
}
function computeChangedPathImpl(treeA, treeB) {
    var _treeA = _sliced_to_array._(treeA, 2), segmentA = _treeA[0], parallelRoutesA = _treeA[1];
    var _treeB = _sliced_to_array._(treeB, 2), segmentB = _treeB[0], parallelRoutesB = _treeB[1];
    var normalizedSegmentA = segmentToPathname(segmentA);
    var normalizedSegmentB = segmentToPathname(segmentB);
    if (_interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some(function(m) {
        return normalizedSegmentA.startsWith(m) || normalizedSegmentB.startsWith(m);
    })) {
        return '';
    }
    if (!(0, _matchsegments.matchSegment)(segmentA, segmentB)) {
        var _extractPathFromFlightRouterState;
        // once we find where the tree changed, we compute the rest of the path by traversing the tree
        return (_extractPathFromFlightRouterState = extractPathFromFlightRouterState(treeB)) !== null && _extractPathFromFlightRouterState !== void 0 ? _extractPathFromFlightRouterState : '';
    }
    for(var parallelRouterKey in parallelRoutesA){
        if (parallelRoutesB[parallelRouterKey]) {
            var changedPath = computeChangedPathImpl(parallelRoutesA[parallelRouterKey], parallelRoutesB[parallelRouterKey]);
            if (changedPath !== null) {
                return "".concat(segmentToPathname(segmentB), "/").concat(changedPath);
            }
        }
    }
    return null;
}
function computeChangedPath(treeA, treeB) {
    var changedPath = computeChangedPathImpl(treeA, treeB);
    if (changedPath == null || changedPath === '/') {
        return changedPath;
    }
    // lightweight normalization to remove route groups
    return normalizeSegments(changedPath.split('/'));
}
function getSelectedParams(currentTree) {
    var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var parallelRoutes = currentTree[1];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.values(parallelRoutes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var parallelRoute = _step.value;
            var segment = parallelRoute[0];
            var isDynamicParameter = Array.isArray(segment);
            var segmentValue = isDynamicParameter ? segment[1] : segment;
            if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) continue;
            // Ensure catchAll and optional catchall are turned into an array
            var isCatchAll = isDynamicParameter && (segment[2] === 'c' || segment[2] === 'oc');
            if (isCatchAll) {
                params[segment[0]] = segment[1].split('/');
            } else if (isDynamicParameter) {
                params[segment[0]] = segment[1];
            }
            params = getSelectedParams(parallelRoute, params);
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
    return params;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/lib/javascript-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Adapted from React's sanitizeURL function found here: https://github.com/facebook/react/blob/b565373afd0cc1988497e1107106e851e8cfb261/packages/react-dom-bindings/src/shared/sanitizeURL.js
// A javascript: URL can contain leading C0 control or \u0020 SPACE,
// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isJavaScriptURLString", {
    enumerable: true,
    get: function get() {
        return isJavaScriptURLString;
    }
});
var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function isJavaScriptURLString(url) {
    return isJavaScriptProtocol.test('' + url);
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _async_to_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_async_to_generator.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var _ts_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_ts_generator.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    completeHardNavigation: null,
    completeSoftNavigation: null,
    completeTraverseNavigation: null,
    convertServerPatchToFullTree: null,
    navigate: null,
    navigateToKnownRoute: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    completeHardNavigation: function completeHardNavigation1() {
        return completeHardNavigation;
    },
    completeSoftNavigation: function completeSoftNavigation1() {
        return completeSoftNavigation;
    },
    completeTraverseNavigation: function completeTraverseNavigation1() {
        return completeTraverseNavigation;
    },
    convertServerPatchToFullTree: function convertServerPatchToFullTree1() {
        return convertServerPatchToFullTree;
    },
    navigate: function navigate1() {
        return navigate;
    },
    navigateToKnownRoute: function navigateToKnownRoute1() {
        return navigateToKnownRoute;
    }
});
var _fetchserverresponse = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
var _pprnavigations = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
var _createhreffromurl = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
var _constants = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/constants.js [app-client] (ecmascript)");
var _cache = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)");
var _optimisticroutes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/optimistic-routes.js [app-client] (ecmascript)");
var _cachekey = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-client] (ecmascript)");
var _scheduler = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-client] (ecmascript)");
var _types = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
var _links = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
var _routerreducertypes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
var _computechangedpath = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)");
var _javascripturl = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/lib/javascript-url.js [app-client] (ecmascript)");
var _bfcache = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/bfcache.js [app-client] (ecmascript)");
function navigate(state, url, currentUrl, currentRenderedSearch, currentCacheNode, currentFlightRouterState, nextUrl, freshnessPolicy, scrollBehavior, navigateType) {
    // Instant Navigation Testing API: when the lock is active, ensure a
    // prefetch task has been initiated before proceeding with the navigation.
    // This guarantees that segment data requests are at least pending, even
    // for routes that already have a cached route tree. Without this, the
    // static shell might be incomplete because some segments were never
    // requested.
    if ("TURBOPACK compile-time truthy", 1) {
        var isNavigationLocked = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/navigation-testing-lock.js [app-client] (ecmascript)").isNavigationLocked;
        if (isNavigationLocked()) {
            return ensurePrefetchThenNavigate(state, url, currentUrl, currentRenderedSearch, currentCacheNode, currentFlightRouterState, nextUrl, freshnessPolicy, scrollBehavior, navigateType);
        }
    }
    return navigateImpl(state, url, currentUrl, currentRenderedSearch, currentCacheNode, currentFlightRouterState, nextUrl, freshnessPolicy, scrollBehavior, navigateType);
}
function navigateImpl(state, url, currentUrl, currentRenderedSearch, currentCacheNode, currentFlightRouterState, nextUrl, freshnessPolicy, scrollBehavior, navigateType) {
    var now = Date.now();
    var href = url.href;
    var cacheKey = (0, _cachekey.createCacheKey)(href, nextUrl);
    var route = (0, _cache.readRouteCacheEntry)(now, cacheKey);
    if (route !== null && route.status === _cache.EntryStatus.Fulfilled) {
        // We have a matching prefetch.
        return navigateUsingPrefetchedRouteTree(now, state, url, currentUrl, currentRenderedSearch, nextUrl, currentCacheNode, currentFlightRouterState, freshnessPolicy, scrollBehavior, navigateType, route);
    }
    // There was no matching route tree in the cache. Let's see if we can
    // construct an "optimistic" route tree using the deprecated search-params
    // based matching. This is only used when the new optimisticRouting flag is
    // disabled.
    //
    // Do not construct an optimistic route tree if there was a cache hit, but
    // the entry has a rejected status, since it may have been rejected due to a
    // rewrite or redirect based on the search params.
    //
    // TODO: There are multiple reasons a prefetch might be rejected; we should
    // track them explicitly and choose what to do here based on that.
    if ("TURBOPACK compile-time truthy", 1) {
        if (route === null || route.status !== _cache.EntryStatus.Rejected) {
            var optimisticRoute = (0, _cache.deprecated_requestOptimisticRouteCacheEntry)(now, url, nextUrl);
            if (optimisticRoute !== null) {
                // We have an optimistic route tree. Proceed with the normal flow.
                return navigateUsingPrefetchedRouteTree(now, state, url, currentUrl, currentRenderedSearch, nextUrl, currentCacheNode, currentFlightRouterState, freshnessPolicy, scrollBehavior, navigateType, optimisticRoute);
            }
        }
    }
    // There's no matching prefetch for this route in the cache. We must lazily
    // fetch it from the server before we can perform the navigation.
    //
    // TODO: If this is a gesture navigation, instead of performing a
    // dynamic request, we should do a runtime prefetch.
    return navigateToUnknownRoute(now, state, url, currentUrl, currentRenderedSearch, nextUrl, currentCacheNode, currentFlightRouterState, freshnessPolicy, scrollBehavior, navigateType).catch(function() {
        // If the navigation fails, return the current state
        return state;
    });
}
function navigateToKnownRoute(now, state, url, canonicalUrl, navigationSeed, currentUrl, currentRenderedSearch, currentCacheNode, currentFlightRouterState, freshnessPolicy, nextUrl, scrollBehavior, navigateType, debugInfo, // prediction. Passed through so it can be marked as having a dynamic rewrite
// if the server returns a different pathname (indicating dynamic rewrite
// behavior).
//
// When null, the navigation did not use route prediction - either because
// the route was already fully cached, or it's a navigation that doesn't
// involve prediction (refresh, history traversal, server action, etc.).
// In these cases, if a mismatch occurs, we still mark the route as having a
// dynamic rewrite by traversing the known route tree (see
// dispatchRetryDueToTreeMismatch).
routeCacheEntry) {
    // A version of navigate() that accepts the target route tree as an argument
    // rather than reading it from the prefetch cache.
    var accumulation = {
        separateRefreshUrls: null,
        scrollRef: null
    };
    // We special case navigations to the exact same URL as the current location.
    // It's a common UI pattern for apps to refresh when you click a link to the
    // current page. So when this happens, we refresh the dynamic data in the page
    // segments.
    //
    // Note that this does not apply if the any part of the hash or search query
    // has changed. This might feel a bit weird but it makes more sense when you
    // consider that the way to trigger this behavior is to click the same link
    // multiple times.
    //
    // TODO: We should probably refresh the *entire* route when this case occurs,
    // not just the page segments. Essentially treating it the same as a refresh()
    // triggered by an action, which is the more explicit way of modeling the UI
    // pattern described above.
    //
    // Also note that this only refreshes the dynamic data, not static/ cached
    // data. If the page segment is fully static and prefetched, the request is
    // skipped. (This is also how refresh() works.)
    var isSamePageNavigation = url.href === currentUrl.href;
    var task = (0, _pprnavigations.startPPRNavigation)(now, currentUrl, currentRenderedSearch, currentCacheNode, currentFlightRouterState, navigationSeed.routeTree, navigationSeed.metadataVaryPath, freshnessPolicy, navigationSeed.data, navigationSeed.head, navigationSeed.dynamicStaleAt, isSamePageNavigation, accumulation);
    if (task !== null) {
        if (freshnessPolicy !== _pprnavigations.FreshnessPolicy.Gesture) {
            (0, _pprnavigations.spawnDynamicRequests)(task, url, nextUrl, freshnessPolicy, accumulation, routeCacheEntry, navigateType);
        }
        return completeSoftNavigation(state, url, nextUrl, task.route, task.node, navigationSeed.renderedSearch, canonicalUrl, navigateType, scrollBehavior, accumulation.scrollRef, debugInfo);
    }
    // Could not perform a SPA navigation. Revert to a full-page (MPA) navigation.
    return completeHardNavigation(state, url, navigateType);
}
function navigateUsingPrefetchedRouteTree(now, state, url, currentUrl, currentRenderedSearch, nextUrl, currentCacheNode, currentFlightRouterState, freshnessPolicy, scrollBehavior, navigateType, route) {
    var routeTree = route.tree;
    var canonicalUrl = route.canonicalUrl + url.hash;
    var renderedSearch = route.renderedSearch;
    var prefetchSeed = {
        renderedSearch: renderedSearch,
        routeTree: routeTree,
        metadataVaryPath: route.metadata.varyPath,
        data: null,
        head: null,
        dynamicStaleAt: (0, _bfcache.computeDynamicStaleAt)(now, _bfcache.UnknownDynamicStaleTime)
    };
    return navigateToKnownRoute(now, state, url, canonicalUrl, prefetchSeed, currentUrl, currentRenderedSearch, currentCacheNode, currentFlightRouterState, freshnessPolicy, nextUrl, scrollBehavior, navigateType, null, route);
}
// Used to request all the dynamic data for a route, rather than just a subset,
// e.g. during a refresh or a revalidation. Typically this gets constructed
// during the normal flow when diffing the route tree, but for an unprefetched
// navigation, where we don't know the structure of the target route, we use
// this instead.
var DynamicRequestTreeForEntireRoute = [
    '',
    {},
    null,
    'refetch'
];
function navigateToUnknownRoute(now, state, url, currentUrl, currentRenderedSearch, nextUrl, currentCacheNode, currentFlightRouterState, freshnessPolicy, scrollBehavior, navigateType) {
    return _async_to_generator._(function() {
        var dynamicRequestTree, promiseForDynamicServerResponse, result, redirectUrl, flightData, canonicalUrl, renderedSearch, couldBeIntercepted, supportsPerSegmentPrefetching, dynamicStaleTime, staticStageData, runtimePrefetchStream, responseHeaders, debugInfo, navigationSeed, metadataVaryPath, staticStageResponse, isResponsePartial;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    switch(freshnessPolicy){
                        case _pprnavigations.FreshnessPolicy.Default:
                        case _pprnavigations.FreshnessPolicy.HistoryTraversal:
                        case _pprnavigations.FreshnessPolicy.Gesture:
                            dynamicRequestTree = currentFlightRouterState;
                            break;
                        case _pprnavigations.FreshnessPolicy.Hydration:
                        case _pprnavigations.FreshnessPolicy.RefreshAll:
                        case _pprnavigations.FreshnessPolicy.HMRRefresh:
                            dynamicRequestTree = DynamicRequestTreeForEntireRoute;
                            break;
                        default:
                            freshnessPolicy;
                            dynamicRequestTree = currentFlightRouterState;
                            break;
                    }
                    promiseForDynamicServerResponse = (0, _fetchserverresponse.fetchServerResponse)(url, {
                        flightRouterState: dynamicRequestTree,
                        nextUrl: nextUrl
                    });
                    return [
                        4,
                        promiseForDynamicServerResponse
                    ];
                case 1:
                    result = _state.sent();
                    if (typeof result === 'string') {
                        // This is an MPA navigation.
                        redirectUrl = new URL(result, location.origin);
                        return [
                            2,
                            completeHardNavigation(state, redirectUrl, navigateType)
                        ];
                    }
                    flightData = result.flightData, canonicalUrl = result.canonicalUrl, renderedSearch = result.renderedSearch, couldBeIntercepted = result.couldBeIntercepted, supportsPerSegmentPrefetching = result.supportsPerSegmentPrefetching, dynamicStaleTime = result.dynamicStaleTime, staticStageData = result.staticStageData, runtimePrefetchStream = result.runtimePrefetchStream, responseHeaders = result.responseHeaders, debugInfo = result.debugInfo;
                    // Since the response format of dynamic requests and prefetches is slightly
                    // different, we'll need to massage the data a bit. Create FlightRouterState
                    // tree that simulates what we'd receive as the result of a prefetch.
                    navigationSeed = convertServerPatchToFullTree(now, currentFlightRouterState, flightData, renderedSearch, dynamicStaleTime);
                    // Learn the route pattern so we can predict it for future navigations.
                    // hasDynamicRewrite is false because this is a fresh navigation to an
                    // unknown route - any rewrite detection happens during the traversal inside
                    // discoverKnownRoute. The hasDynamicRewrite param is only set to true when
                    // retrying after a tree mismatch (see dispatchRetryDueToTreeMismatch).
                    metadataVaryPath = navigationSeed.metadataVaryPath;
                    if (metadataVaryPath !== null) {
                        (0, _optimisticroutes.discoverKnownRoute)(now, url.pathname, nextUrl, null, navigationSeed.routeTree, metadataVaryPath, couldBeIntercepted, (0, _createhreffromurl.createHrefFromUrl)(canonicalUrl), supportsPerSegmentPrefetching, false // hasDynamicRewrite - not a retry, rewrite detection happens during traversal
                        );
                        if (staticStageData !== null) {
                            staticStageResponse = staticStageData.response, isResponsePartial = staticStageData.isResponsePartial;
                            // Write the static stage of the response into the segment cache so that
                            // subsequent navigations can serve cached static segments instantly.
                            (0, _cache.getStaleAt)(now, staticStageResponse.s).then(function(staleAt) {
                                var _responseHeaders_get;
                                var buildId = (_responseHeaders_get = responseHeaders.get(_constants.NEXT_NAV_DEPLOYMENT_ID_HEADER)) !== null && _responseHeaders_get !== void 0 ? _responseHeaders_get : staticStageResponse.b;
                                (0, _cache.writeStaticStageResponseIntoCache)(now, staticStageResponse.f, buildId, staticStageResponse.h, staleAt, currentFlightRouterState, renderedSearch, isResponsePartial);
                            }).catch(function() {
                            // The static stage processing failed. Not fatal — the navigation
                            // completed normally, we just won't write into the cache.
                            });
                        }
                        if (runtimePrefetchStream !== null) {
                            (0, _cache.processRuntimePrefetchStream)(now, runtimePrefetchStream, currentFlightRouterState, renderedSearch).then(function(processed) {
                                if (processed !== null) {
                                    (0, _cache.writeDynamicRenderResponseIntoCache)(now, _types.FetchStrategy.PPRRuntime, processed.flightDatas, processed.buildId, processed.isResponsePartial, processed.headVaryParams, processed.staleAt, processed.navigationSeed, null);
                                }
                            }).catch(function() {
                            // The runtime prefetch cache write failed. Not fatal — the
                            // navigation completed normally, we just won't cache runtime data.
                            });
                        }
                    }
                    return [
                        2,
                        navigateToKnownRoute(now, state, url, (0, _createhreffromurl.createHrefFromUrl)(canonicalUrl), navigationSeed, currentUrl, currentRenderedSearch, currentCacheNode, currentFlightRouterState, freshnessPolicy, nextUrl, scrollBehavior, navigateType, debugInfo, // came directly from the server. If a mismatch occurs during dynamic data
                        // fetch, the retry handler will traverse the known route tree to mark the
                        // entry as having a dynamic rewrite.
                        null)
                    ];
            }
        });
    })();
}
function completeHardNavigation(state, url, navigateType) {
    if ((0, _javascripturl.isJavaScriptURLString)(url.href)) {
        console.error('Next.js has blocked a javascript: URL as a security precaution.');
        return state;
    }
    var newState = {
        canonicalUrl: url.origin === location.origin ? (0, _createhreffromurl.createHrefFromUrl)(url) : url.href,
        pushRef: {
            pendingPush: navigateType === 'push',
            mpaNavigation: true,
            preserveCustomHistoryState: false
        },
        // TODO: None of the rest of these values are consistent with the incoming
        // navigation. We rely on the fact that AppRouter will suspend and trigger
        // a hard navigation before it accesses any of these values. But instead
        // we should trigger the hard navigation and blocking any subsequent
        // router updates without updating React.
        renderedSearch: state.renderedSearch,
        focusAndScrollRef: state.focusAndScrollRef,
        cache: state.cache,
        tree: state.tree,
        nextUrl: state.nextUrl,
        previousNextUrl: state.previousNextUrl,
        debugInfo: null
    };
    return newState;
}
function completeSoftNavigation(oldState, url, referringNextUrl, tree, cache, renderedSearch, canonicalUrl, navigateType, scrollBehavior, scrollRef, collectedDebugInfo) {
    // The "Next-Url" is a special representation of the URL that Next.js
    // uses to implement interception routes.
    // TODO: Get rid of this extra traversal by computing this during the
    // same traversal that computes the tree itself. We should also figure out
    // what is the minimum information needed for the server to correctly
    // intercept the route.
    var changedPath = (0, _computechangedpath.computeChangedPath)(oldState.tree, tree);
    var nextUrlForNewRoute = changedPath ? changedPath : oldState.nextUrl;
    // This value is stored on the state as `previousNextUrl`; the naming is
    // confusing. What it represents is the "Next-Url" header that was used to
    // fetch the incoming route. It's essentially the refererer URL, but in a
    // Next.js specific format. During refreshes, this is sent back to the server
    // instead of the current route's "Next-Url" so that the same interception
    // logic is applied as during the original navigation.
    var previousNextUrl = referringNextUrl;
    // Check if the only thing that changed was the hash fragment.
    var oldUrl = new URL(oldState.canonicalUrl, url);
    var onlyHashChange = // navigations are always same-origin.
    url.pathname === oldUrl.pathname && url.search === oldUrl.search && url.hash !== oldUrl.hash;
    // Determine whether and how the page should scroll after this
    // navigation.
    //
    // By default, we scroll to the segments that were navigated to — i.e.
    // segments in the new part of the route, as opposed to shared segments
    // that were already part of the previous route. All newly navigated
    // segments share a single ScrollRef. When they mount, the first one
    // to mount initiates the scroll. They share a ref so that only one
    // scroll happens per navigation.
    //
    // If a subsequent navigation produces new segments, those supersede
    // any pending scroll from the previous navigation by invalidating its
    // ScrollRef. If a navigation doesn't produce any new segments (e.g.
    // a refresh where the route structure didn't change), any pending
    // scrolls from previous navigations are unaffected.
    //
    // The branches below handle special cases layered on top of this
    // default model.
    var activeScrollRef;
    var forceScroll;
    if (scrollBehavior === _routerreducertypes.ScrollBehavior.NoScroll) {
        // The user explicitly opted out of scrolling (e.g. scroll={false}
        // on a Link or router.push).
        //
        // If this navigation created new scroll targets (scrollRef !== null),
        // neutralize them. If it didn't, any prior scroll targets carried
        // forward on the cache nodes via reuseSharedCacheNode remain active.
        if (scrollRef !== null) {
            scrollRef.current = false;
        }
        activeScrollRef = oldState.focusAndScrollRef.scrollRef;
        forceScroll = false;
    } else if (onlyHashChange) {
        // Hash-only navigations should scroll regardless of per-node state.
        // Create a fresh ref so the first segment to scroll consumes it.
        //
        // Invalidate any scroll ref from a prior navigation that hasn't
        // been consumed yet.
        var oldScrollRef = oldState.focusAndScrollRef.scrollRef;
        if (oldScrollRef !== null) {
            oldScrollRef.current = false;
        }
        // Also invalidate any per-node refs that were accumulated during
        // this navigation's tree construction — the hash-only ref
        // supersedes them.
        if (scrollRef !== null) {
            scrollRef.current = false;
        }
        activeScrollRef = {
            current: true
        };
        forceScroll = true;
    } else {
        // Default case. Use the accumulated scrollRef (may be null if no
        // new segments were created). The handler checks per-node refs, so
        // unchanged parallel route slots won't scroll.
        activeScrollRef = scrollRef;
        // If this navigation created new scroll targets, invalidate any
        // pending scroll from a previous navigation.
        if (scrollRef !== null) {
            var oldScrollRef1 = oldState.focusAndScrollRef.scrollRef;
            if (oldScrollRef1 !== null) {
                oldScrollRef1.current = false;
            }
        }
        forceScroll = false;
    }
    var newState = {
        canonicalUrl: canonicalUrl,
        renderedSearch: renderedSearch,
        pushRef: {
            pendingPush: navigateType === 'push',
            mpaNavigation: false,
            preserveCustomHistoryState: false
        },
        focusAndScrollRef: {
            scrollRef: activeScrollRef,
            forceScroll: forceScroll,
            onlyHashChange: onlyHashChange,
            hashFragment: //
            // Empty hash should trigger default behavior of scrolling layout into
            // view. #top is handled in layout-router.
            //
            // Refer to `ScrollAndFocusHandler` for details on how this is used.
            scrollBehavior !== _routerreducertypes.ScrollBehavior.NoScroll && url.hash !== '' ? decodeURIComponent(url.hash.slice(1)) : oldState.focusAndScrollRef.hashFragment
        },
        cache: cache,
        tree: tree,
        nextUrl: nextUrlForNewRoute,
        previousNextUrl: previousNextUrl,
        debugInfo: collectedDebugInfo
    };
    return newState;
}
function completeTraverseNavigation(state, url, renderedSearch, cache, tree, nextUrl) {
    return {
        // Set canonical url
        canonicalUrl: (0, _createhreffromurl.createHrefFromUrl)(url),
        renderedSearch: renderedSearch,
        pushRef: {
            pendingPush: false,
            mpaNavigation: false,
            // Ensures that the custom history state that was set is preserved when applying this update.
            preserveCustomHistoryState: true
        },
        focusAndScrollRef: state.focusAndScrollRef,
        cache: cache,
        // Restore provided tree
        tree: tree,
        nextUrl: nextUrl,
        // TODO: We need to restore previousNextUrl, too, which represents the
        // Next-Url that was used to fetch the data. Anywhere we fetch using the
        // canonical URL, there should be a corresponding Next-Url.
        previousNextUrl: null,
        debugInfo: null
    };
}
function convertServerPatchToFullTree(now, currentTree, flightData, renderedSearch, dynamicStaleTimeSeconds) {
    // During a client navigation or prefetch, the server sends back only a patch
    // for the parts of the tree that have changed.
    //
    // This applies the patch to the base tree to create a full representation of
    // the resulting tree.
    //
    // The return type includes a full FlightRouterState tree and a full
    // CacheNodeSeedData tree. (Conceptually these are the same tree, and should
    // eventually be unified, but there's still lots of existing code that
    // operates on FlightRouterState trees alone without the CacheNodeSeedData.)
    //
    // TODO: This similar to what apply-router-state-patch-to-tree does. It
    // will eventually fully replace it. We should get rid of all the remaining
    // places where we iterate over the server patch format. This should also
    // eventually replace normalizeFlightData.
    var baseTree = currentTree;
    var baseData = null;
    var head = null;
    if (flightData !== null) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = flightData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _step.value, segmentPath = _step_value.segmentPath, treePatch = _step_value.tree, dataPatch = _step_value.seedData, headPatch = _step_value.head;
                var result = convertServerPatchToFullTreeImpl(baseTree, baseData, treePatch, dataPatch, segmentPath, renderedSearch, 0);
                baseTree = result.tree;
                baseData = result.data;
                // This is the same for all patches per response, so just pick an
                // arbitrary one
                head = headPatch;
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
    var finalFlightRouterState = baseTree;
    // Convert the final FlightRouterState into a RouteTree type.
    //
    // TODO: Eventually, FlightRouterState will evolve to being a transport format
    // only. The RouteTree type will become the main type used for dealing with
    // routes on the client, and we'll store it in the state directly.
    var acc = {
        metadataVaryPath: null
    };
    var routeTree = (0, _cache.convertRootFlightRouterStateToRouteTree)(finalFlightRouterState, renderedSearch, acc);
    return {
        routeTree: routeTree,
        metadataVaryPath: acc.metadataVaryPath,
        data: baseData,
        renderedSearch: renderedSearch,
        head: head,
        dynamicStaleAt: (0, _bfcache.computeDynamicStaleAt)(now, dynamicStaleTimeSeconds)
    };
}
function convertServerPatchToFullTreeImpl(baseRouterState, baseData, treePatch, dataPatch, segmentPath, renderedSearch, index) {
    if (index === segmentPath.length) {
        // We reached the part of the tree that we need to patch.
        return {
            tree: treePatch,
            data: dataPatch
        };
    }
    // segmentPath represents the parent path of subtree. It's a repeating
    // pattern of parallel route key and segment:
    //
    //   [string, Segment, string, Segment, string, Segment, ...]
    //
    // This path tells us which part of the base tree to apply the tree patch.
    //
    // NOTE: We receive the FlightRouterState patch in the same request as the
    // seed data patch. Therefore we don't need to worry about diffing the segment
    // values; we can assume the server sent us a correct result.
    var updatedParallelRouteKey = segmentPath[index];
    // const segment: Segment = segmentPath[index + 1] <-- Not used, see note above
    var baseTreeChildren = baseRouterState[1];
    var baseSeedDataChildren = baseData !== null ? baseData[1] : null;
    var newTreeChildren = {};
    var newSeedDataChildren = {};
    for(var parallelRouteKey in baseTreeChildren){
        var _baseSeedDataChildren_parallelRouteKey;
        var childBaseRouterState = baseTreeChildren[parallelRouteKey];
        var childBaseSeedData = baseSeedDataChildren !== null ? (_baseSeedDataChildren_parallelRouteKey = baseSeedDataChildren[parallelRouteKey]) !== null && _baseSeedDataChildren_parallelRouteKey !== void 0 ? _baseSeedDataChildren_parallelRouteKey : null : null;
        if (parallelRouteKey === updatedParallelRouteKey) {
            var result = convertServerPatchToFullTreeImpl(childBaseRouterState, childBaseSeedData, treePatch, dataPatch, segmentPath, renderedSearch, // the end of the segment path.
            index + 2);
            newTreeChildren[parallelRouteKey] = result.tree;
            newSeedDataChildren[parallelRouteKey] = result.data;
        } else {
            // This child is not being patched. Copy it over as-is.
            newTreeChildren[parallelRouteKey] = childBaseRouterState;
            newSeedDataChildren[parallelRouteKey] = childBaseSeedData;
        }
    }
    var clonedTree;
    var clonedSeedData;
    // Clone all the fields except the children.
    // Clone the FlightRouterState tree. Based on equivalent logic in
    // apply-router-state-patch-to-tree, but should confirm whether we need to
    // copy all of these fields. Not sure the server ever sends, e.g. the
    // refetch marker.
    clonedTree = [
        baseRouterState[0],
        newTreeChildren
    ];
    if (2 in baseRouterState) {
        var compressedRefreshState = baseRouterState[2];
        if (compressedRefreshState !== undefined && compressedRefreshState !== null) {
            // Since this part of the tree was patched with new data, any parent
            // refresh states should be updated to reflect the new rendered search
            // value. (The refresh state acts like a "context provider".) All pages
            // within the same server response share the same renderedSearch value,
            // but the same RouteTree could be composed from multiple different
            // routes, and multiple responses.
            clonedTree[2] = [
                compressedRefreshState[0],
                renderedSearch
            ];
        }
    }
    if (3 in baseRouterState) {
        clonedTree[3] = baseRouterState[3];
    }
    if (4 in baseRouterState) {
        clonedTree[4] = baseRouterState[4];
    }
    // Clone the CacheNodeSeedData tree.
    var isEmptySeedDataPartial = true;
    clonedSeedData = [
        null,
        newSeedDataChildren,
        null,
        isEmptySeedDataPartial,
        null
    ];
    return {
        tree: clonedTree,
        data: clonedSeedData
    };
}
/**
 * Instant Navigation Testing API: ensures a prefetch task has been initiated
 * and completed before proceeding with the navigation. This guarantees that
 * segment data requests are at least pending, even for routes whose route
 * tree is already cached.
 *
 * After the prefetch completes, delegates to the normal navigation flow.
 */ function ensurePrefetchThenNavigate(state, url, currentUrl, currentRenderedSearch, currentCacheNode, currentFlightRouterState, nextUrl, freshnessPolicy, scrollBehavior, navigateType) {
    return _async_to_generator._(function() {
        var link, fetchStrategy, _require, transitionToCapturedSPA, updateCapturedSPAToTree, cacheKey, result;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    link = (0, _links.getLinkForCurrentNavigation)();
                    fetchStrategy = link !== null ? link.fetchStrategy : _types.FetchStrategy.PPR;
                    // Transition the cookie to captured-SPA immediately, before waiting
                    // for the prefetch. This ensures the devtools panel can update its UI
                    // right away, even if the prefetch takes time (e.g. dev compilation).
                    // The "to" tree starts as null and is filled in after the prefetch
                    // resolves and the navigation produces a new router state.
                    _require = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/navigation-testing-lock.js [app-client] (ecmascript)"), transitionToCapturedSPA = _require.transitionToCapturedSPA, updateCapturedSPAToTree = _require.updateCapturedSPAToTree;
                    transitionToCapturedSPA(currentFlightRouterState, null);
                    cacheKey = (0, _cachekey.createCacheKey)(url.href, nextUrl);
                    return [
                        4,
                        new Promise(function(resolve) {
                            (0, _scheduler.schedulePrefetchTask)(cacheKey, currentFlightRouterState, fetchStrategy, _types.PrefetchPriority.Default, null, resolve // _onComplete callback
                            );
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        navigateImpl(state, url, currentUrl, currentRenderedSearch, currentCacheNode, currentFlightRouterState, nextUrl, freshnessPolicy, scrollBehavior, navigateType)
                    ];
                case 2:
                    result = _state.sent();
                    // Update the cookie with the resolved "to" tree so the devtools
                    // panel can display both routes immediately.
                    updateCapturedSPAToTree(currentFlightRouterState, result.tree);
                    return [
                        2,
                        result
                    ];
            }
        });
    })();
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DYNAMIC_STALETIME_MS: null,
    STATIC_STALETIME_MS: null,
    navigateReducer: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DYNAMIC_STALETIME_MS: function DYNAMIC_STALETIME_MS1() {
        return DYNAMIC_STALETIME_MS;
    },
    STATIC_STALETIME_MS: function STATIC_STALETIME_MS1() {
        return STATIC_STALETIME_MS;
    },
    navigateReducer: function navigateReducer1() {
        return navigateReducer;
    }
});
var _navigation = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/navigation.js [app-client] (ecmascript)");
var _cache = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)");
var _pprnavigations = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
var DYNAMIC_STALETIME_MS = Number(("TURBOPACK compile-time value", "0")) * 1000;
var STATIC_STALETIME_MS = (0, _cache.getStaleTimeMs)(Number(("TURBOPACK compile-time value", "300")));
function navigateReducer(state, action) {
    var url = action.url, isExternalUrl = action.isExternalUrl, navigateType = action.navigateType, scrollBehavior = action.scrollBehavior;
    if (isExternalUrl) {
        return (0, _navigation.completeHardNavigation)(state, url, navigateType);
    }
    // Handles case where `<meta http-equiv="refresh">` tag is present,
    // which will trigger an MPA navigation.
    if (document.getElementById('__next-page-redirect')) {
        return (0, _navigation.completeHardNavigation)(state, url, navigateType);
    }
    // Temporary glue code between the router reducer and the new navigation
    // implementation. Eventually we'll rewrite the router reducer to a
    // state machine.
    var currentUrl = new URL(state.canonicalUrl, location.origin);
    var currentRenderedSearch = state.renderedSearch;
    return (0, _navigation.navigate)(state, url, currentUrl, currentRenderedSearch, state.cache, state.tree, state.nextUrl, _pprnavigations.FreshnessPolicy.Default, scrollBehavior, navigateType);
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/has-interception-route-in-current-tree.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hasInterceptionRouteInCurrentTree", {
    enumerable: true,
    get: function get() {
        return hasInterceptionRouteInCurrentTree;
    }
});
var _interceptionroutes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-client] (ecmascript)");
function hasInterceptionRouteInCurrentTree(param) {
    var _param = _sliced_to_array._(param, 2), segment = _param[0], parallelRoutes = _param[1];
    // If we have a dynamic segment, it's marked as an interception route by the presence of the `i` suffix.
    if (Array.isArray(segment) && (segment[2] === 'di(..)(..)' || segment[2] === 'ci(..)(..)' || segment[2] === 'di(.)' || segment[2] === 'ci(.)' || segment[2] === 'di(..)' || segment[2] === 'ci(..)' || segment[2] === 'di(...)' || segment[2] === 'ci(...)')) {
        return true;
    }
    // If segment is not an array, apply the existing string-based check
    if (typeof segment === 'string' && (0, _interceptionroutes.isInterceptionRouteAppPath)(segment)) {
        return true;
    }
    // Iterate through parallelRoutes if they exist
    if (parallelRoutes) {
        for(var key in parallelRoutes){
            if (hasInterceptionRouteInCurrentTree(parallelRoutes[key])) {
                return true;
            }
        }
    }
    return false;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/refresh-reducer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    refreshDynamicData: null,
    refreshReducer: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    refreshDynamicData: function refreshDynamicData1() {
        return refreshDynamicData;
    },
    refreshReducer: function refreshReducer1() {
        return refreshReducer;
    }
});
var _routerreducertypes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
var _navigation = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/navigation.js [app-client] (ecmascript)");
var _cache = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)");
var _hasinterceptionrouteincurrenttree = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/has-interception-route-in-current-tree.js [app-client] (ecmascript)");
var _pprnavigations = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
var _bfcache = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/bfcache.js [app-client] (ecmascript)");
function refreshReducer(state, action) {
    // During a refresh, we invalidate the segment cache but not the route cache.
    // The route cache contains the tree structure (which segments exist at a
    // given URL) which doesn't change during a refresh. The segment cache
    // contains the actual RSC data which needs to be re-fetched.
    //
    // The Instant Navigation Testing API can bypass cache invalidation to
    // preserve prefetched data when refreshing after an MPA navigation. This is
    // only used for testing and is not exposed in production builds by default.
    var bypassCacheInvalidation = ("TURBOPACK compile-time value", true) && action.bypassCacheInvalidation;
    if (!bypassCacheInvalidation) {
        var currentNextUrl = state.nextUrl;
        var currentRouterState = state.tree;
        (0, _cache.invalidateSegmentCacheEntries)(currentNextUrl, currentRouterState);
    }
    return refreshDynamicData(state, _pprnavigations.FreshnessPolicy.RefreshAll);
}
function refreshDynamicData(state, freshnessPolicy) {
    // During a refresh, invalidate the BFCache, which may contain dynamic data.
    (0, _bfcache.invalidateBfCache)();
    var currentNextUrl = state.nextUrl;
    // We always send the last next-url, not the current when performing a dynamic
    // request. This is because we update the next-url after a navigation, but we
    // want the same interception route to be matched that used the last next-url.
    var nextUrlForRefresh = (0, _hasinterceptionrouteincurrenttree.hasInterceptionRouteInCurrentTree)(state.tree) ? state.previousNextUrl || currentNextUrl : null;
    // A refresh is modeled as a navigation to the current URL, but where any
    // existing dynamic data (including in shared layouts) is re-fetched.
    var currentCanonicalUrl = state.canonicalUrl;
    var currentUrl = new URL(currentCanonicalUrl, location.origin);
    var currentRenderedSearch = state.renderedSearch;
    var currentFlightRouterState = state.tree;
    var scrollBehavior = _routerreducertypes.ScrollBehavior.NoScroll;
    // Create a NavigationSeed from the current FlightRouterState.
    // TODO: Eventually we will store this type directly on the state object
    // instead of reconstructing it on demand. Part of a larger series of
    // refactors to unify the various tree types that the client deals with.
    var now = Date.now();
    // TODO: Store the dynamic stale time on the top-level state so it's known
    // during restores and refreshes.
    var refreshSeed = (0, _navigation.convertServerPatchToFullTree)(now, currentFlightRouterState, null, currentRenderedSearch, _bfcache.UnknownDynamicStaleTime);
    var navigateType = 'replace';
    return (0, _navigation.navigateToKnownRoute)(now, state, currentUrl, currentCanonicalUrl, refreshSeed, currentUrl, currentRenderedSearch, state.cache, currentFlightRouterState, freshnessPolicy, nextUrlForRefresh, scrollBehavior, navigateType, null, // cache entry to mark as having a dynamic rewrite on mismatch. If a
    // mismatch occurs, the retry handler will traverse the known route tree
    // to find and mark the entry.
    null);
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/server-patch-reducer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "serverPatchReducer", {
    enumerable: true,
    get: function get() {
        return serverPatchReducer;
    }
});
var _createhreffromurl = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
var _routerreducertypes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
var _navigation = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/navigation.js [app-client] (ecmascript)");
var _refreshreducer = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/refresh-reducer.js [app-client] (ecmascript)");
var _pprnavigations = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
function serverPatchReducer(state, action) {
    // A "retry" is a navigation that happens due to a route mismatch. It's
    // similar to a refresh, because we will omit any existing dynamic data on
    // the page. But we seed the retry navigation with the exact tree that the
    // server just responded with.
    var retryMpa = action.mpa;
    var retryUrl = new URL(action.url, location.origin);
    var retrySeed = action.seed;
    var navigateType = action.navigateType;
    if (retryMpa || retrySeed === null) {
        // If the server did not send back data during the mismatch, fall back to
        // an MPA navigation.
        return (0, _navigation.completeHardNavigation)(state, retryUrl, navigateType);
    }
    var currentUrl = new URL(state.canonicalUrl, location.origin);
    var currentRenderedSearch = state.renderedSearch;
    if (action.previousTree !== state.tree) {
        // There was another, more recent navigation since the once that
        // mismatched. We can abort the retry, but we still need to refresh the
        // page to evict any stale dynamic data.
        return (0, _refreshreducer.refreshReducer)(state, {
            type: _routerreducertypes.ACTION_REFRESH
        });
    }
    // There have been no new navigations since the mismatched one. Refresh,
    // using the tree we just received from the server.
    var retryCanonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(retryUrl);
    var retryNextUrl = action.nextUrl;
    var scrollBehavior = _routerreducertypes.ScrollBehavior.Default;
    var now = Date.now();
    return (0, _navigation.navigateToKnownRoute)(now, state, retryUrl, retryCanonicalUrl, retrySeed, currentUrl, currentRenderedSearch, state.cache, state.tree, _pprnavigations.FreshnessPolicy.RefreshAll, retryNextUrl, scrollBehavior, navigateType, null, // typically a retry after a previous mismatch, so the route was already
    // marked as having a dynamic rewrite when the mismatch was detected.
    null);
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/restore-reducer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "restoreReducer", {
    enumerable: true,
    get: function get() {
        return restoreReducer;
    }
});
var _computechangedpath = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)");
var _pprnavigations = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
var _navigation = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/navigation.js [app-client] (ecmascript)");
var _bfcache = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/bfcache.js [app-client] (ecmascript)");
function restoreReducer(state, action) {
    var _ref;
    // This action is used to restore the router state from the history state.
    // However, it's possible that the history state no longer contains the `FlightRouterState`.
    // We will copy over the internal state on pushState/replaceState events, but if a history entry
    // occurred before hydration, or if the user navigated to a hash using a regular anchor link,
    // the history state will not contain the `FlightRouterState`.
    // In this case, we'll continue to use the existing tree so the router doesn't get into an invalid state.
    var treeToRestore;
    var renderedSearch;
    var historyState = action.historyState;
    if (historyState) {
        treeToRestore = historyState.tree;
        renderedSearch = historyState.renderedSearch;
    } else {
        treeToRestore = state.tree;
        renderedSearch = state.renderedSearch;
    }
    var currentUrl = new URL(state.canonicalUrl, location.origin);
    var restoredUrl = action.url;
    var restoredNextUrl = (_ref = (0, _computechangedpath.extractPathFromFlightRouterState)(treeToRestore)) !== null && _ref !== void 0 ? _ref : restoredUrl.pathname;
    var now = Date.now();
    // TODO: Store the dynamic stale time on the top-level state so it's known
    // during restores and refreshes.
    var accumulation = {
        separateRefreshUrls: null,
        scrollRef: null
    };
    var restoreSeed = (0, _navigation.convertServerPatchToFullTree)(now, treeToRestore, null, renderedSearch, _bfcache.UnknownDynamicStaleTime);
    var task = (0, _pprnavigations.startPPRNavigation)(now, currentUrl, state.renderedSearch, state.cache, state.tree, restoreSeed.routeTree, restoreSeed.metadataVaryPath, _pprnavigations.FreshnessPolicy.HistoryTraversal, null, null, restoreSeed.dynamicStaleAt, false, accumulation);
    if (task === null) {
        return (0, _navigation.completeHardNavigation)(state, restoredUrl, 'replace');
    }
    (0, _pprnavigations.spawnDynamicRequests)(task, restoredUrl, restoredNextUrl, _pprnavigations.FreshnessPolicy.HistoryTraversal, accumulation, // cache entry to mark as having a dynamic rewrite on mismatch. If a
    // mismatch occurs, the retry handler will traverse the known route tree
    // to find and mark the entry.
    null, 'replace');
    return (0, _navigation.completeTraverseNavigation)(state, restoredUrl, renderedSearch, task.node, task.route, restoredNextUrl);
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/hmr-refresh-reducer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hmrRefreshReducer", {
    enumerable: true,
    get: function get() {
        return hmrRefreshReducer;
    }
});
var _refreshreducer = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/refresh-reducer.js [app-client] (ecmascript)");
var _pprnavigations = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
function hmrRefreshReducer(state) {
    return (0, _refreshreducer.refreshDynamicData)(state, _pprnavigations.FreshnessPolicy.HMRRefresh);
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/unrecognized-action-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _call_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_call_super.cjs [app-client] (ecmascript)");
var _class_call_check = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _inherits = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_inherits.cjs [app-client] (ecmascript)");
var _instanceof = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_instanceof.cjs [app-client] (ecmascript)");
var _to_consumable_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var _wrap_native_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_wrap_native_super.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    UnrecognizedActionError: null,
    unstable_isUnrecognizedActionError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    UnrecognizedActionError: function UnrecognizedActionError1() {
        return UnrecognizedActionError;
    },
    unstable_isUnrecognizedActionError: function unstable_isUnrecognizedActionError1() {
        return unstable_isUnrecognizedActionError;
    }
});
var UnrecognizedActionError = /*#__PURE__*/ function(Error1) {
    _inherits._(UnrecognizedActionError, Error1);
    function UnrecognizedActionError() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _class_call_check._(this, UnrecognizedActionError);
        var _this;
        _this = _call_super._(this, UnrecognizedActionError, _to_consumable_array._(args));
        _this.name = 'UnrecognizedActionError';
        return _this;
    }
    return UnrecognizedActionError;
}(_wrap_native_super._(Error));
function unstable_isUnrecognizedActionError(error) {
    return !!(error && (typeof error === "undefined" ? "undefined" : _type_of._(error)) === 'object' && _instanceof._(error, UnrecognizedActionError));
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/assign-location.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "assignLocation", {
    enumerable: true,
    get: function get() {
        return assignLocation;
    }
});
var _addbasepath = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
function assignLocation(location, url) {
    if (location.startsWith('.')) {
        var urlBase = url.origin + url.pathname;
        return new URL(// new URL('./relative', 'https://example.com/subdir').href -> 'https://example.com/relative'
        // new URL('./relative', 'https://example.com/subdir/').href -> 'https://example.com/subdir/relative'
        (urlBase.endsWith('/') ? urlBase : urlBase + '/') + location);
    }
    return new URL((0, _addbasepath.addBasePath)(location), url.href);
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getRedirectError: null,
    getRedirectStatusCodeFromError: null,
    getRedirectTypeFromError: null,
    getURLFromRedirectError: null,
    permanentRedirect: null,
    redirect: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRedirectError: function getRedirectError1() {
        return getRedirectError;
    },
    getRedirectStatusCodeFromError: function getRedirectStatusCodeFromError1() {
        return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function getRedirectTypeFromError1() {
        return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function getURLFromRedirectError1() {
        return getURLFromRedirectError;
    },
    permanentRedirect: function permanentRedirect1() {
        return permanentRedirect;
    },
    redirect: function redirect1() {
        return redirect;
    }
});
var _redirectstatuscode = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/redirect-status-code.js [app-client] (ecmascript)");
var _redirecterror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
var actionAsyncStorage = typeof window === 'undefined' ? __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/action-async-storage.external.js [app-client] (ecmascript)").actionAsyncStorage : undefined;
function getRedirectError(url, type) {
    var statusCode = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _redirectstatuscode.RedirectStatusCode.TemporaryRedirect;
    var error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = "".concat(_redirecterror.REDIRECT_ERROR_CODE, ";").concat(type, ";").concat(url, ";").concat(statusCode, ";");
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    var _actionAsyncStorage_getStore;
    type !== null && type !== void 0 ? type : type = (actionAsyncStorage === null || actionAsyncStorage === void 0 ? void 0 : (_actionAsyncStorage_getStore = actionAsyncStorage.getStore()) === null || _actionAsyncStorage_getStore === void 0 ? void 0 : _actionAsyncStorage_getStore.isAction) ? 'push' : 'replace';
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url) {
    var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'replace';
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
}
function getURLFromRedirectError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(';').slice(2, -2).join(';');
}
function getRedirectTypeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return error.digest.split(';', 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return Number(error.digest.split(';').at(-2));
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hasBasePath", {
    enumerable: true,
    get: function get() {
        return hasBasePath;
    }
});
var _pathhasprefix = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [app-client] (ecmascript)");
var basePath = ("TURBOPACK compile-time value", "") || '';
function hasBasePath(path) {
    return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/remove-base-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeBasePath", {
    enumerable: true,
    get: function get() {
        return removeBasePath;
    }
});
var _hasbasepath = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
var basePath = ("TURBOPACK compile-time value", "") || '';
function removeBasePath(path) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Can't trim the basePath if it has zero length!
    if (basePath.length === 0) return path;
    path = path.slice(basePath.length);
    if (!path.startsWith('/')) path = "/".concat(path);
    return path;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/server-action-reducer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _async_to_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_async_to_generator.cjs [app-client] (ecmascript)");
var _define_property = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_define_property.cjs [app-client] (ecmascript)");
var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var _ts_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_ts_generator.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "serverActionReducer", {
    enumerable: true,
    get: function get() {
        return serverActionReducer;
    }
});
var _appcallserver = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
var _appfindsourcemapurl = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
var _approuterheaders = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
var _unrecognizedactionerror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/unrecognized-action-error.js [app-client] (ecmascript)");
var _client = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)");
var _routerreducertypes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
var _assignlocation = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/assign-location.js [app-client] (ecmascript)");
var _createhreffromurl = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
var _hasinterceptionrouteincurrenttree = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/has-interception-route-in-current-tree.js [app-client] (ecmascript)");
var _flightdatahelpers = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)");
var _redirect = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)");
var _removebasepath = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/remove-base-path.js [app-client] (ecmascript)");
var _hasbasepath = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
var _serverreferenceinfo = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/server-reference-info.js [app-client] (ecmascript)");
var _cache = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)");
var _scheduler = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-client] (ecmascript)");
var _deploymentid = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/deployment-id.js [app-client] (ecmascript)");
var _navigationbuildid = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/navigation-build-id.js [app-client] (ecmascript)");
var _constants = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/constants.js [app-client] (ecmascript)");
var _navigation = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/navigation.js [app-client] (ecmascript)");
var _optimisticroutes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/optimistic-routes.js [app-client] (ecmascript)");
var _actionrevalidationkind = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/action-revalidation-kind.js [app-client] (ecmascript)");
var _approuterutils = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-utils.js [app-client] (ecmascript)");
var _pprnavigations = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
var _fetchserverresponse = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
var _bfcache = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/bfcache.js [app-client] (ecmascript)");
var createFromFetch = _client.createFromFetch;
var createDebugChannel;
if ("TURBOPACK compile-time truthy", 1) {
    createDebugChannel = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/debug-channel.js [app-client] (ecmascript)").createDebugChannel;
}
function fetchServerAction(_0, _1, _2) {
    return _async_to_generator._(function(state, nextUrl, param) {
        var actionId, actionArgs, temporaryReferences, info, usedArgs, body, _obj, headers, deploymentId, res, unrecognizedActionHeader, redirectHeader, _ref, location1, _redirectType, redirectType, isPrerender, revalidationKind, revalidationHeader, parsedKind, redirectLocation, contentType, isRscResponse, message, _tmp, actionResult, actionFlightData, actionFlightDataRenderedSearch, couldBeIntercepted, _res_headers_get, responsePromise, response, responseBuildId, maybeFlightData;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    actionId = param.actionId, actionArgs = param.actionArgs;
                    temporaryReferences = (0, _client.createTemporaryReferenceSet)();
                    info = (0, _serverreferenceinfo.extractInfoFromServerReferenceId)(actionId);
                    usedArgs = (0, _serverreferenceinfo.omitUnusedArgs)(actionArgs, info);
                    return [
                        4,
                        (0, _client.encodeReply)(usedArgs, {
                            temporaryReferences: temporaryReferences
                        })
                    ];
                case 1:
                    body = _state.sent();
                    headers = (_obj = {
                        Accept: _approuterheaders.RSC_CONTENT_TYPE_HEADER
                    }, _define_property._(_obj, _approuterheaders.ACTION_HEADER, actionId), _define_property._(_obj, _approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER, (0, _flightdatahelpers.prepareFlightRouterStateForRequest)(state.tree)), _obj);
                    deploymentId = (0, _deploymentid.getDeploymentId)();
                    if (deploymentId) {
                        headers['x-deployment-id'] = deploymentId;
                    }
                    if (nextUrl) {
                        headers[_approuterheaders.NEXT_URL] = nextUrl;
                    }
                    if ("TURBOPACK compile-time truthy", 1) {
                        if (self.__next_r) {
                            headers[_approuterheaders.NEXT_HTML_REQUEST_ID_HEADER] = self.__next_r;
                        }
                        // Create a new request ID for the server action request. The server uses
                        // this to tag debug information sent via WebSocket to the client, which
                        // then routes those chunks to the debug channel associated with this ID.
                        headers[_approuterheaders.NEXT_REQUEST_ID_HEADER] = crypto.getRandomValues(new Uint32Array(1))[0].toString(16);
                    }
                    return [
                        4,
                        fetch(state.canonicalUrl, {
                            method: 'POST',
                            headers: headers,
                            body: body
                        })
                    ];
                case 2:
                    res = _state.sent();
                    // Handle server actions that the server didn't recognize.
                    unrecognizedActionHeader = res.headers.get(_approuterheaders.NEXT_ACTION_NOT_FOUND_HEADER);
                    if (unrecognizedActionHeader === '1') {
                        throw Object.defineProperty(new _unrecognizedactionerror.UnrecognizedActionError('Server Action "'.concat(actionId, '" was not found on the server. \nRead more: https://nextjs.org/docs/messages/failed-to-find-server-action')), "__NEXT_ERROR_CODE", {
                            value: "E715",
                            enumerable: false,
                            configurable: true
                        });
                    }
                    redirectHeader = res.headers.get('x-action-redirect');
                    _ref = _sliced_to_array._((redirectHeader === null || redirectHeader === void 0 ? void 0 : redirectHeader.split(';')) || [], 2), location1 = _ref[0], _redirectType = _ref[1];
                    switch(_redirectType){
                        case 'push':
                            redirectType = 'push';
                            break;
                        case 'replace':
                            redirectType = 'replace';
                            break;
                        default:
                            redirectType = undefined;
                    }
                    isPrerender = !!res.headers.get(_approuterheaders.NEXT_IS_PRERENDER_HEADER);
                    revalidationKind = _actionrevalidationkind.ActionDidNotRevalidate;
                    try {
                        revalidationHeader = res.headers.get('x-action-revalidated');
                        if (revalidationHeader) {
                            parsedKind = JSON.parse(revalidationHeader);
                            if (parsedKind === _actionrevalidationkind.ActionDidRevalidateStaticAndDynamic || parsedKind === _actionrevalidationkind.ActionDidRevalidateDynamicOnly) {
                                revalidationKind = parsedKind;
                            }
                        }
                    } catch (unused) {}
                    redirectLocation = location1 ? (0, _assignlocation.assignLocation)(location1, new URL(state.canonicalUrl, window.location.href)) : undefined;
                    contentType = res.headers.get('content-type');
                    isRscResponse = !!(contentType && contentType.startsWith(_approuterheaders.RSC_CONTENT_TYPE_HEADER));
                    if (!(!isRscResponse && !redirectLocation)) return [
                        3,
                        6
                    ];
                    if (!(res.status >= 400 && contentType === 'text/plain')) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        res.text()
                    ];
                case 3:
                    _tmp = _state.sent();
                    return [
                        3,
                        5
                    ];
                case 4:
                    _tmp = 'An unexpected response was received from the server.';
                    _state.label = 5;
                case 5:
                    message = _tmp;
                    throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                        value: "E394",
                        enumerable: false,
                        configurable: true
                    });
                case 6:
                    couldBeIntercepted = false;
                    if (!isRscResponse) return [
                        3,
                        8
                    ];
                    // Server action redirect responses carry the Flight data of the redirect
                    // target, which may be prerendered with a completeness marker byte
                    // prepended. Strip it before passing to Flight.
                    responsePromise = redirectLocation ? (0, _fetchserverresponse.processFetch)(res).then(function(param) {
                        var r = param.response;
                        return r;
                    }) : Promise.resolve(res);
                    return [
                        4,
                        createFromFetch(responsePromise, {
                            callServer: _appcallserver.callServer,
                            findSourceMapURL: _appfindsourcemapurl.findSourceMapURL,
                            temporaryReferences: temporaryReferences,
                            debugChannel: createDebugChannel && createDebugChannel(headers)
                        })
                    ];
                case 7:
                    response = _state.sent();
                    // An internal redirect can send an RSC response, but does not have a useful `actionResult`.
                    actionResult = redirectLocation ? undefined : response.a;
                    couldBeIntercepted = response.i;
                    // Check if the response build ID matches the client build ID.
                    // In a multi-zone setup, when a server action triggers a redirect,
                    // the server pre-fetches the redirect target as RSC. If the redirect
                    // target is served by a different Next.js zone (different build), the
                    // pre-fetched RSC data will have a foreign build ID. We must discard
                    // the flight data in that case so the redirect triggers an MPA
                    // navigation (full page load) instead of trying to apply the foreign
                    // RSC payload — which would result in a blank page.
                    responseBuildId = (_res_headers_get = res.headers.get(_constants.NEXT_NAV_DEPLOYMENT_ID_HEADER)) !== null && _res_headers_get !== void 0 ? _res_headers_get : response.b;
                    if (responseBuildId !== undefined && responseBuildId !== (0, _navigationbuildid.getNavigationBuildId)()) {
                    // Build ID mismatch — discard the flight data. The redirect will
                    // still be processed, and the absence of flight data will cause an
                    // MPA navigation via completeHardNavigation().
                    } else {
                        maybeFlightData = (0, _flightdatahelpers.normalizeFlightData)(response.f);
                        if (maybeFlightData !== '') {
                            actionFlightData = maybeFlightData;
                            actionFlightDataRenderedSearch = response.q;
                        }
                    }
                    return [
                        3,
                        9
                    ];
                case 8:
                    // An external redirect doesn't contain RSC data.
                    actionResult = undefined;
                    actionFlightData = undefined;
                    actionFlightDataRenderedSearch = undefined;
                    _state.label = 9;
                case 9:
                    return [
                        2,
                        {
                            actionResult: actionResult,
                            actionFlightData: actionFlightData,
                            actionFlightDataRenderedSearch: actionFlightDataRenderedSearch,
                            redirectLocation: redirectLocation,
                            redirectType: redirectType,
                            revalidationKind: revalidationKind,
                            isPrerender: isPrerender,
                            couldBeIntercepted: couldBeIntercepted
                        }
                    ];
            }
        });
    }).apply(this, arguments);
}
function serverActionReducer(state, action) {
    var resolve = action.resolve, reject = action.reject;
    // only pass along the `nextUrl` param (used for interception routes) if the current route was intercepted.
    // If the route has been intercepted, the action should be as well.
    // Otherwise the server action might be intercepted with the wrong action id
    // (ie, one that corresponds with the intercepted route)
    var nextUrl = // performing a dynamic request. This is because we update
    // the next-url after a navigation, but we want the same
    // interception route to be matched that used the last
    // next-url.
    (state.previousNextUrl || state.nextUrl) && (0, _hasinterceptionrouteincurrenttree.hasInterceptionRouteInCurrentTree)(state.tree) ? state.previousNextUrl || state.nextUrl : null;
    return fetchServerAction(state, nextUrl, action).then(function(param) {
        var revalidationKind = param.revalidationKind, actionResult = param.actionResult, flightData = param.actionFlightData, flightDataRenderedSearch = param.actionFlightDataRenderedSearch, redirectLocation = param.redirectLocation, redirectType = param.redirectType, isPrerender = param.isPrerender, couldBeIntercepted = param.couldBeIntercepted;
        return _async_to_generator._(function() {
            var navigateType, redirectHref, redirectError, redirectWithBasepath, redirectHref1, redirectError1, currentUrl, currentRenderedSearch, redirectUrl, currentFlightRouterState, scrollBehavior, freshnessPolicy, redirectCanonicalUrl, now, redirectSeed, metadataVaryPath;
            return _ts_generator._(this, function(_state) {
                if (revalidationKind !== _actionrevalidationkind.ActionDidNotRevalidate) {
                    // There was either a revalidation or a refresh, or maybe both.
                    // Evict the BFCache, which may contain dynamic data.
                    (0, _bfcache.invalidateBfCache)();
                    // Store whether this action triggered any revalidation
                    // The action queue will use this information to potentially
                    // trigger a refresh action if the action was discarded
                    // (ie, due to a navigation, before the action completed)
                    action.didRevalidate = true;
                    // If there was a revalidation, evict the prefetch cache.
                    // TODO: Evict only segments with matching tags and/or paths.
                    // TODO: We should only invalidate the route cache if cookies were
                    // mutated, since route trees may vary based on cookies. For now we
                    // invalidate both caches until we have a way to detect cookie
                    // mutations on the client.
                    if (revalidationKind === _actionrevalidationkind.ActionDidRevalidateStaticAndDynamic) {
                        (0, _cache.invalidateEntirePrefetchCache)(nextUrl, state.tree);
                    }
                    // Start a cooldown before re-prefetching to allow CDN cache
                    // propagation.
                    (0, _scheduler.startRevalidationCooldown)();
                }
                navigateType = redirectType || 'push';
                if (redirectLocation !== undefined) {
                    // If the action triggered a redirect, the action promise will be rejected with
                    // a redirect so that it's handled by RedirectBoundary as we won't have a valid
                    // action result to resolve the promise with. This will effectively reset the state of
                    // the component that called the action as the error boundary will remount the tree.
                    // The status code doesn't matter here as the action handler will have already sent
                    // a response with the correct status code.
                    if ((0, _approuterutils.isExternalURL)(redirectLocation)) {
                        // External redirect. Triggers an MPA navigation.
                        redirectHref = redirectLocation.href;
                        redirectError = createRedirectErrorForAction(redirectHref, navigateType);
                        reject(redirectError);
                        return [
                            2,
                            (0, _navigation.completeHardNavigation)(state, redirectLocation, navigateType)
                        ];
                    } else {
                        // Internal redirect. Triggers an SPA navigation.
                        redirectWithBasepath = (0, _createhreffromurl.createHrefFromUrl)(redirectLocation, false);
                        redirectHref1 = (0, _hasbasepath.hasBasePath)(redirectWithBasepath) ? (0, _removebasepath.removeBasePath)(redirectWithBasepath) : redirectWithBasepath;
                        redirectError1 = createRedirectErrorForAction(redirectHref1, navigateType);
                        reject(redirectError1);
                    }
                } else {
                    // If there's no redirect, resolve the action with the result.
                    resolve(actionResult);
                }
                // Check if we can bail out without updating any state.
                if (redirectLocation === undefined && // Did the action revalidate any data?
                revalidationKind === _actionrevalidationkind.ActionDidNotRevalidate && // Did the server render new data?
                flightData === undefined) {
                    // The action did not trigger any revalidations or redirects. No
                    // navigation is required.
                    return [
                        2,
                        state
                    ];
                }
                if (flightData === undefined && redirectLocation !== undefined) {
                    // The server redirected, but did not send any Flight data. This implies
                    // an external redirect.
                    // TODO: We should refactor the action response type to be more explicit
                    // about the various response types.
                    return [
                        2,
                        (0, _navigation.completeHardNavigation)(state, redirectLocation, navigateType)
                    ];
                }
                if (typeof flightData === 'string') {
                    // If the flight data is just a string, something earlier in the
                    // response handling triggered an external redirect.
                    return [
                        2,
                        (0, _navigation.completeHardNavigation)(state, new URL(flightData, location.origin), navigateType)
                    ];
                }
                // The action triggered a navigation — either a redirect, a revalidation,
                // or both.
                // If there was no redirect, then the target URL is the same as the
                // current URL.
                currentUrl = new URL(state.canonicalUrl, location.origin);
                currentRenderedSearch = state.renderedSearch;
                redirectUrl = redirectLocation !== undefined ? redirectLocation : currentUrl;
                currentFlightRouterState = state.tree;
                scrollBehavior = _routerreducertypes.ScrollBehavior.Default;
                // If the action triggered a revalidation of the cache, we should also
                // refresh all the dynamic data.
                freshnessPolicy = revalidationKind === _actionrevalidationkind.ActionDidNotRevalidate ? _pprnavigations.FreshnessPolicy.Default : _pprnavigations.FreshnessPolicy.RefreshAll;
                // The server may have sent back new data. If so, we will perform a
                // "seeded" navigation that uses the data from the response.
                // TODO: Currently the server always renders from the root in
                // response to a Server Action. In the case of a normal redirect
                // with no revalidation, it should skip over the shared layouts.
                if (flightData !== undefined && flightDataRenderedSearch !== undefined) {
                    // The server sent back new route data as part of the response. We
                    // will use this to render the new page. If this happens to be only a
                    // subset of the data needed to render the new page, we'll initiate a
                    // new fetch, like we would for a normal navigation.
                    redirectCanonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(redirectUrl);
                    now = Date.now();
                    // TODO: Store the dynamic stale time on the top-level state so it's
                    // known during restores and refreshes.
                    redirectSeed = (0, _navigation.convertServerPatchToFullTree)(now, currentFlightRouterState, flightData, flightDataRenderedSearch, _bfcache.UnknownDynamicStaleTime);
                    // Learn the route pattern so we can predict it for future navigations.
                    metadataVaryPath = redirectSeed.metadataVaryPath;
                    if (metadataVaryPath !== null) {
                        (0, _optimisticroutes.discoverKnownRoute)(now, redirectUrl.pathname, nextUrl, null, redirectSeed.routeTree, metadataVaryPath, couldBeIntercepted, redirectCanonicalUrl, isPrerender, false // hasDynamicRewrite
                        );
                    }
                    return [
                        2,
                        (0, _navigation.navigateToKnownRoute)(now, state, redirectUrl, redirectCanonicalUrl, redirectSeed, currentUrl, currentRenderedSearch, state.cache, currentFlightRouterState, freshnessPolicy, nextUrl, scrollBehavior, navigateType, null, // have the route tree from the server response. If a mismatch occurs
                        // during dynamic data fetch, the retry handler will traverse the
                        // known route tree to mark the entry as having a dynamic rewrite.
                        null)
                    ];
                }
                // The server did not send back new data. We'll perform a regular, non-
                // seeded navigation — effectively the same as <Link> or router.push().
                return [
                    2,
                    (0, _navigation.navigate)(state, redirectUrl, currentUrl, currentRenderedSearch, state.cache, currentFlightRouterState, nextUrl, freshnessPolicy, scrollBehavior, navigateType)
                ];
            });
        })();
    }, function(e) {
        // When the server action is rejected we don't update the state and instead call the reject handler of the promise.
        reject(e);
        return state;
    });
}
function createRedirectErrorForAction(redirectHref, resolvedRedirectType) {
    var redirectError = (0, _redirect.getRedirectError)(redirectHref, resolvedRedirectType);
    redirectError.handled = true;
    return redirectError;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/router-reducer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "reducer", {
    enumerable: true,
    get: function get() {
        return reducer;
    }
});
var _routerreducertypes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
var _navigatereducer = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
var _serverpatchreducer = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/server-patch-reducer.js [app-client] (ecmascript)");
var _restorereducer = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/restore-reducer.js [app-client] (ecmascript)");
var _refreshreducer = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/refresh-reducer.js [app-client] (ecmascript)");
var _hmrrefreshreducer = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/hmr-refresh-reducer.js [app-client] (ecmascript)");
var _serveractionreducer = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/server-action-reducer.js [app-client] (ecmascript)");
/**
 * Reducer that handles the app-router state updates.
 */ function clientReducer(state, action) {
    switch(action.type){
        case _routerreducertypes.ACTION_NAVIGATE:
            {
                return (0, _navigatereducer.navigateReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_PATCH:
            {
                return (0, _serverpatchreducer.serverPatchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_RESTORE:
            {
                return (0, _restorereducer.restoreReducer)(state, action);
            }
        case _routerreducertypes.ACTION_REFRESH:
            {
                return (0, _refreshreducer.refreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_HMR_REFRESH:
            {
                return (0, _hmrrefreshreducer.hmrRefreshReducer)(state);
            }
        case _routerreducertypes.ACTION_SERVER_ACTION:
            {
                return (0, _serveractionreducer.serverActionReducer)(state, action);
            }
        // This case should never be hit as dispatch is strongly typed.
        default:
            throw Object.defineProperty(new Error('Unknown action'), "__NEXT_ERROR_CODE", {
                value: "E295",
                enumerable: false,
                configurable: true
            });
    }
}
function serverReducer(state, _action) {
    return state;
}
var reducer = typeof window === 'undefined' ? serverReducer : clientReducer;
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/prefetch.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "prefetch", {
    enumerable: true,
    get: function get() {
        return prefetch;
    }
});
var _approuterutils = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-utils.js [app-client] (ecmascript)");
var _cachekey = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-client] (ecmascript)");
var _scheduler = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-client] (ecmascript)");
var _types = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
function prefetch(href, nextUrl, treeAtTimeOfPrefetch, fetchStrategy, onInvalidate) {
    var url = (0, _approuterutils.createPrefetchURL)(href);
    if (url === null) {
        // This href should not be prefetched.
        return;
    }
    var cacheKey = (0, _cachekey.createCacheKey)(url.href, nextUrl);
    (0, _scheduler.schedulePrefetchTask)(cacheKey, treeAtTimeOfPrefetch, fetchStrategy, _types.PrefetchPriority.Default, onInvalidate);
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _async_to_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_async_to_generator.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var _ts_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_ts_generator.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createMutableActionQueue: null,
    dispatchNavigateAction: null,
    dispatchTraverseAction: null,
    getCurrentAppRouterState: null,
    publicAppRouterInstance: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createMutableActionQueue: function createMutableActionQueue1() {
        return createMutableActionQueue;
    },
    dispatchNavigateAction: function dispatchNavigateAction1() {
        return dispatchNavigateAction;
    },
    dispatchTraverseAction: function dispatchTraverseAction1() {
        return dispatchTraverseAction;
    },
    getCurrentAppRouterState: function getCurrentAppRouterState1() {
        return getCurrentAppRouterState;
    },
    publicAppRouterInstance: function publicAppRouterInstance1() {
        return publicAppRouterInstance;
    }
});
var _routerreducertypes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
var _routerreducer = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/router-reducer.js [app-client] (ecmascript)");
var _react = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _isthenable = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/is-thenable.js [app-client] (ecmascript)");
var _types = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
var _prefetch = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/prefetch.js [app-client] (ecmascript)");
var _navigation = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/navigation.js [app-client] (ecmascript)");
var _useactionqueue = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/use-action-queue.js [app-client] (ecmascript)");
var _optimisticroutes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/optimistic-routes.js [app-client] (ecmascript)");
var _pprnavigations = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
var _addbasepath = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
var _approuterutils = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-utils.js [app-client] (ecmascript)");
var _links = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
var _javascripturl = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/lib/javascript-url.js [app-client] (ecmascript)");
function runRemainingActions(actionQueue, setState) {
    if (actionQueue.pending !== null) {
        actionQueue.pending = actionQueue.pending.next;
        if (actionQueue.pending !== null) {
            runAction({
                actionQueue: actionQueue,
                action: actionQueue.pending,
                setState: setState
            });
        }
    } else {
        // Check for refresh when pending is already null
        // This handles the case where a discarded server action completes
        // after the navigation has already finished and the queue is empty
        if (actionQueue.needsRefresh) {
            actionQueue.needsRefresh = false;
            actionQueue.dispatch({
                type: _routerreducertypes.ACTION_REFRESH
            }, setState);
        }
    }
}
function runAction(_0) {
    return _async_to_generator._(function(param) {
        var actionQueue, action, setState, prevState, payload, actionResult;
        function handleResult(nextState) {
            // if we discarded this action, the state should also be discarded
            if (action.discarded) {
                // Check if the discarded server action revalidated data
                if (action.payload.type === _routerreducertypes.ACTION_SERVER_ACTION && action.payload.didRevalidate) {
                    // The server action was discarded but it revalidated data,
                    // mark that we need to refresh after all actions complete
                    actionQueue.needsRefresh = true;
                }
                // Still need to run remaining actions even for discarded actions
                // to potentially trigger the refresh
                runRemainingActions(actionQueue, setState);
                return;
            }
            actionQueue.state = nextState;
            runRemainingActions(actionQueue, setState);
            action.resolve(nextState);
        }
        return _ts_generator._(this, function(_state) {
            actionQueue = param.actionQueue, action = param.action, setState = param.setState;
            prevState = actionQueue.state;
            actionQueue.pending = action;
            payload = action.payload;
            actionResult = actionQueue.action(prevState, payload);
            // if the action is a promise, set up a callback to resolve it
            if ((0, _isthenable.isThenable)(actionResult)) {
                actionResult.then(handleResult, function(err) {
                    runRemainingActions(actionQueue, setState);
                    action.reject(err);
                });
            } else {
                handleResult(actionResult);
            }
            return [
                2
            ];
        });
    }).apply(this, arguments);
}
function dispatchAction(actionQueue, payload, setState) {
    var resolvers = {
        resolve: setState,
        reject: function reject() {}
    };
    // most of the action types are async with the exception of restore
    // it's important that restore is handled quickly since it's fired on the popstate event
    // and we don't want to add any delay on a back/forward nav
    // this only creates a promise for the async actions
    if (payload.type !== _routerreducertypes.ACTION_RESTORE) {
        // Create the promise and assign the resolvers to the object.
        var deferredPromise = new Promise(function(resolve, reject) {
            resolvers = {
                resolve: resolve,
                reject: reject
            };
        });
        (0, _react.startTransition)(function() {
            // we immediately notify React of the pending promise -- the resolver is attached to the action node
            // and will be called when the associated action promise resolves
            setState(deferredPromise);
        });
    }
    var newAction = {
        payload: payload,
        next: null,
        resolve: resolvers.resolve,
        reject: resolvers.reject
    };
    // Check if the queue is empty
    if (actionQueue.pending === null) {
        // The queue is empty, so add the action and start it immediately
        // Mark this action as the last in the queue
        actionQueue.last = newAction;
        runAction({
            actionQueue: actionQueue,
            action: newAction,
            setState: setState
        });
    } else if (payload.type === _routerreducertypes.ACTION_NAVIGATE || payload.type === _routerreducertypes.ACTION_RESTORE) {
        // Navigations (including back/forward) take priority over any pending actions.
        // Mark the pending action as discarded (so the state is never applied) and start the navigation action immediately.
        actionQueue.pending.discarded = true;
        // The rest of the current queue should still execute after this navigation.
        // (Note that it can't contain any earlier navigations, because we always put those into `actionQueue.pending` by calling `runAction`)
        newAction.next = actionQueue.pending.next;
        runAction({
            actionQueue: actionQueue,
            action: newAction,
            setState: setState
        });
    } else {
        // The queue is not empty, so add the action to the end of the queue
        // It will be started by runRemainingActions after the previous action finishes
        if (actionQueue.last !== null) {
            actionQueue.last.next = newAction;
        }
        actionQueue.last = newAction;
    }
}
var globalActionQueue = null;
function createMutableActionQueue(initialState, instrumentationHooks) {
    var actionQueue = {
        state: initialState,
        dispatch: function dispatch(payload, setState) {
            return dispatchAction(actionQueue, payload, setState);
        },
        action: function action(state, action) {
            return _async_to_generator._(function() {
                var result;
                return _ts_generator._(this, function(_state) {
                    result = (0, _routerreducer.reducer)(state, action);
                    return [
                        2,
                        result
                    ];
                });
            })();
        },
        pending: null,
        last: null,
        onRouterTransitionStart: instrumentationHooks !== null && typeof instrumentationHooks.onRouterTransitionStart === 'function' ? instrumentationHooks.onRouterTransitionStart : null
    };
    if (typeof window !== 'undefined') {
        // The action queue is lazily created on hydration, but after that point
        // it doesn't change. So we can store it in a global rather than pass
        // it around everywhere via props/context.
        if (globalActionQueue !== null) {
            throw Object.defineProperty(new Error('Internal Next.js Error: createMutableActionQueue was called more ' + 'than once'), "__NEXT_ERROR_CODE", {
                value: "E624",
                enumerable: false,
                configurable: true
            });
        }
        globalActionQueue = actionQueue;
    }
    return actionQueue;
}
function getCurrentAppRouterState() {
    return globalActionQueue !== null ? globalActionQueue.state : null;
}
function getAppRouterActionQueue() {
    if (globalActionQueue === null) {
        throw Object.defineProperty(new Error('Internal Next.js error: Router action dispatched before initialization.'), "__NEXT_ERROR_CODE", {
            value: "E668",
            enumerable: false,
            configurable: true
        });
    }
    return globalActionQueue;
}
function getProfilingHookForOnNavigationStart() {
    if (globalActionQueue !== null) {
        return globalActionQueue.onRouterTransitionStart;
    }
    return null;
}
function dispatchNavigateAction(href, navigateType, scrollBehavior, linkInstanceRef, transitionTypes) {
    // TODO: This stuff could just go into the reducer. Leaving as-is for now
    // since we're about to rewrite all the router reducer stuff anyway.
    if (transitionTypes) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = transitionTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var type = _step.value;
                (0, _react.addTransitionType)(type);
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
    var url = new URL((0, _addbasepath.addBasePath)(href), location.href);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    (0, _links.setLinkForCurrentNavigation)(linkInstanceRef);
    var onRouterTransitionStart = getProfilingHookForOnNavigationStart();
    if (onRouterTransitionStart !== null) {
        onRouterTransitionStart(href, navigateType);
    }
    (0, _useactionqueue.dispatchAppRouterAction)({
        type: _routerreducertypes.ACTION_NAVIGATE,
        url: url,
        isExternalUrl: (0, _approuterutils.isExternalURL)(url),
        locationSearch: location.search,
        scrollBehavior: scrollBehavior,
        navigateType: navigateType
    });
}
function dispatchTraverseAction(href, historyState) {
    var onRouterTransitionStart = getProfilingHookForOnNavigationStart();
    if (onRouterTransitionStart !== null) {
        onRouterTransitionStart(href, 'traverse');
    }
    (0, _useactionqueue.dispatchAppRouterAction)({
        type: _routerreducertypes.ACTION_RESTORE,
        url: new URL(href),
        historyState: historyState
    });
}
/**
 * (Experimental) Perform a gesture navigation. This dispatches through React's
 * useOptimistic instead of the main action queue, allowing the state to be
 * shown during a gesture transition and discarded when the canonical navigation
 * completes.
 *
 * Only available when experimental.gestureTransition is enabled.
 */ function gesturePush(href, options) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    {
        var state;
        var url;
        // Fork the router state for the duration of the gesture transition.
        var currentUrl;
        var scrollBehavior;
        // This is a special freshness policy that prevents dynamic requests from
        // being spawned. During the gesture, we should only show the cached
        // prefetched UI, not dynamic data.
        // TODO: In the case of navigations to an unknown route, this will still
        // end up performing a dynamic request. The plan is to do prefetch instead.
        // There's a separate TODO for this.
        var freshnessPolicy;
        var forkedGestureState;
    }
}
var publicAppRouterInstance = {
    back: function back() {
        return window.history.back();
    },
    forward: function forward() {
        return window.history.forward();
    },
    prefetch: // data in the router reducer state; it writes into a global mutable
    // cache. So we don't need to dispatch an action.
    function prefetch(href, options) {
        var _ref, _ref1;
        if ((0, _javascripturl.isJavaScriptURLString)(href)) {
            throw Object.defineProperty(new Error('Next.js has blocked a javascript: URL as a security precaution.'), "__NEXT_ERROR_CODE", {
                value: "E978",
                enumerable: false,
                configurable: true
            });
        }
        var actionQueue = getAppRouterActionQueue();
        var prefetchKind = (_ref = options === null || options === void 0 ? void 0 : options.kind) !== null && _ref !== void 0 ? _ref : _routerreducertypes.PrefetchKind.AUTO;
        // We don't currently offer a way to issue a runtime prefetch via `router.prefetch()`.
        // This will be possible when we update its API to not take a PrefetchKind.
        var fetchStrategy;
        switch(prefetchKind){
            case _routerreducertypes.PrefetchKind.AUTO:
                {
                    // We default to PPR. We'll discover whether or not the route supports it with the initial prefetch.
                    fetchStrategy = _types.FetchStrategy.PPR;
                    break;
                }
            case _routerreducertypes.PrefetchKind.FULL:
                {
                    fetchStrategy = _types.FetchStrategy.Full;
                    break;
                }
            default:
                {
                    prefetchKind;
                    // Despite typescript thinking that this can't happen,
                    // we might get an unexpected value from user code.
                    // We don't know what they want, but we know they want a prefetch,
                    // so use the default.
                    fetchStrategy = _types.FetchStrategy.PPR;
                }
        }
        (0, _prefetch.prefetch)(href, actionQueue.state.nextUrl, actionQueue.state.tree, fetchStrategy, (_ref1 = options === null || options === void 0 ? void 0 : options.onInvalidate) !== null && _ref1 !== void 0 ? _ref1 : null);
    },
    replace: function replace(href, options) {
        if ((0, _javascripturl.isJavaScriptURLString)(href)) {
            throw Object.defineProperty(new Error('Next.js has blocked a javascript: URL as a security precaution.'), "__NEXT_ERROR_CODE", {
                value: "E978",
                enumerable: false,
                configurable: true
            });
        }
        (0, _react.startTransition)(function() {
            dispatchNavigateAction(href, 'replace', (options === null || options === void 0 ? void 0 : options.scroll) === false ? _routerreducertypes.ScrollBehavior.NoScroll : _routerreducertypes.ScrollBehavior.Default, null, options === null || options === void 0 ? void 0 : options.transitionTypes);
        });
    },
    push: function push(href, options) {
        if ((0, _javascripturl.isJavaScriptURLString)(href)) {
            throw Object.defineProperty(new Error('Next.js has blocked a javascript: URL as a security precaution.'), "__NEXT_ERROR_CODE", {
                value: "E978",
                enumerable: false,
                configurable: true
            });
        }
        (0, _react.startTransition)(function() {
            dispatchNavigateAction(href, 'push', (options === null || options === void 0 ? void 0 : options.scroll) === false ? _routerreducertypes.ScrollBehavior.NoScroll : _routerreducertypes.ScrollBehavior.Default, null, options === null || options === void 0 ? void 0 : options.transitionTypes);
        });
    },
    refresh: function refresh() {
        (0, _react.startTransition)(function() {
            (0, _useactionqueue.dispatchAppRouterAction)({
                type: _routerreducertypes.ACTION_REFRESH
            });
        });
    },
    hmrRefresh: function hmrRefresh() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            // Reset the known routes table so that route predictions are cleared
            // when routes change during development.
            (0, _optimisticroutes.resetKnownRoutes)();
            (0, _react.startTransition)(function() {
                (0, _useactionqueue.dispatchAppRouterAction)({
                    type: _routerreducertypes.ACTION_HMR_REFRESH
                });
            });
        }
    }
};
// Conditionally add experimental_gesturePush when gestureTransition is enabled
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// Exists for debugging purposes. Don't use in application code.
if (typeof window !== 'undefined' && window.next) {
    window.next.router = publicAppRouterInstance;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-announcer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppRouterAnnouncer", {
    enumerable: true,
    get: function get() {
        return AppRouterAnnouncer;
    }
});
var _react = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _reactdom = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var ANNOUNCER_TYPE = 'next-route-announcer';
var ANNOUNCER_ID = '__next-route-announcer__';
function getAnnouncerNode() {
    var _existingAnnouncer_shadowRoot;
    var existingAnnouncer = document.getElementsByName(ANNOUNCER_TYPE)[0];
    if (existingAnnouncer === null || existingAnnouncer === void 0 ? void 0 : (_existingAnnouncer_shadowRoot = existingAnnouncer.shadowRoot) === null || _existingAnnouncer_shadowRoot === void 0 ? void 0 : _existingAnnouncer_shadowRoot.childNodes[0]) {
        return existingAnnouncer.shadowRoot.childNodes[0];
    } else {
        var container = document.createElement(ANNOUNCER_TYPE);
        container.style.cssText = 'position:absolute';
        var announcer = document.createElement('div');
        announcer.ariaLive = 'assertive';
        announcer.id = ANNOUNCER_ID;
        announcer.role = 'alert';
        announcer.style.cssText = 'position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal';
        // Use shadow DOM here to avoid any potential CSS bleed
        var shadow = container.attachShadow({
            mode: 'open'
        });
        shadow.appendChild(announcer);
        document.body.appendChild(container);
        return announcer;
    }
}
function AppRouterAnnouncer(param) {
    var tree = param.tree;
    var _ref = _sliced_to_array._((0, _react.useState)(null), 2), portalNode = _ref[0], setPortalNode = _ref[1];
    (0, _react.useEffect)(function() {
        var announcer = getAnnouncerNode();
        setPortalNode(announcer);
        return function() {
            var container = document.getElementsByTagName(ANNOUNCER_TYPE)[0];
            if (container === null || container === void 0 ? void 0 : container.isConnected) {
                document.body.removeChild(container);
            }
        };
    }, []);
    var _ref1 = _sliced_to_array._((0, _react.useState)(''), 2), routeAnnouncement = _ref1[0], setRouteAnnouncement = _ref1[1];
    var previousTitle = (0, _react.useRef)(undefined);
    (0, _react.useEffect)(function() {
        var currentTitle = '';
        if (document.title) {
            currentTitle = document.title;
        } else {
            var pageHeader = document.querySelector('h1');
            if (pageHeader) {
                currentTitle = pageHeader.innerText || pageHeader.textContent || '';
            }
        }
        // Only announce the title change, but not for the first load because screen
        // readers do that automatically.
        if (previousTitle.current !== undefined && previousTitle.current !== currentTitle) {
            setRouteAnnouncement(currentTitle);
        }
        previousTitle.current = currentTitle;
    }, [
        tree
    ]);
    return portalNode ? /*#__PURE__*/ (0, _reactdom.createPortal)(routeAnnouncement, portalNode) : null;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/forbidden.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "forbidden", {
    enumerable: true,
    get: function get() {
        return forbidden;
    }
});
var _httpaccessfallback = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
// TODO: Add `forbidden` docs
/**
 * @experimental
 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
 * within a route segment as well as inject a tag.
 *
 * `forbidden()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
 */ var DIGEST = "".concat(_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE, ";403");
function forbidden() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
            value: "E488",
            enumerable: false,
            configurable: true
        });
    }
    var error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E1019",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/unauthorized.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unauthorized", {
    enumerable: true,
    get: function get() {
        return unauthorized;
    }
});
var _httpaccessfallback = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
// TODO: Add `unauthorized` docs
/**
 * @experimental
 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
 * within a route segment as well as inject a tag.
 *
 * `unauthorized()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 *
 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
 */ var DIGEST = "".concat(_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE, ";401");
function unauthorized() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
            value: "E411",
            enumerable: false,
            configurable: true
        });
    }
    var error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E1002",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/unstable-rethrow.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _instanceof = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_instanceof.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function get() {
        return unstable_rethrow;
    }
});
var _bailouttocsr = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
var _isnextroutererror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error)) {
        throw error;
    }
    if (_instanceof._(error, Error) && 'cause' in error) {
        unstable_rethrow(error.cause);
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/hooks-server-context.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
    DynamicServerError: null,
    isDynamicServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicServerError: function DynamicServerError1() {
        return DynamicServerError;
    },
    isDynamicServerError: function isDynamicServerError1() {
        return isDynamicServerError;
    }
});
var DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
var DynamicServerError = /*#__PURE__*/ function(Error1) {
    _inherits._(DynamicServerError, Error1);
    function DynamicServerError(description) {
        _class_call_check._(this, DynamicServerError);
        var _this;
        _this = _call_super._(this, DynamicServerError, [
            "Dynamic server usage: ".concat(description)
        ]), _this.description = description, _this.digest = DYNAMIC_ERROR_CODE;
        return _this;
    }
    return DynamicServerError;
}(_wrap_native_super._(Error));
function isDynamicServerError(err) {
    if ((typeof err === "undefined" ? "undefined" : _type_of._(err)) !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/static-generation-bailout.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _call_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_call_super.cjs [app-client] (ecmascript)");
var _class_call_check = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _inherits = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_inherits.cjs [app-client] (ecmascript)");
var _to_consumable_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var _wrap_native_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_wrap_native_super.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    StaticGenBailoutError: null,
    isStaticGenBailoutError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    StaticGenBailoutError: function StaticGenBailoutError1() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function isStaticGenBailoutError1() {
        return isStaticGenBailoutError;
    }
});
var NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
var StaticGenBailoutError = /*#__PURE__*/ function(Error1) {
    _inherits._(StaticGenBailoutError, Error1);
    function StaticGenBailoutError() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _class_call_check._(this, StaticGenBailoutError);
        var _this;
        _this = _call_super._(this, StaticGenBailoutError, _to_consumable_array._(args)), _this.code = NEXT_STATIC_GEN_BAILOUT;
        return _this;
    }
    return StaticGenBailoutError;
}(_wrap_native_super._(Error));
function isStaticGenBailoutError(error) {
    if ((typeof error === "undefined" ? "undefined" : _type_of._(error)) !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _instanceof = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_instanceof.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function get() {
        return unstable_rethrow;
    }
});
var _dynamicrenderingutils = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/dynamic-rendering-utils.js [app-client] (ecmascript)");
var _ispostpone = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-client] (ecmascript)");
var _bailouttocsr = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
var _isnextroutererror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
var _dynamicrendering = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)");
var _hooksservercontext = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/hooks-server-context.js [app-client] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error) || (0, _dynamicrendering.isPrerenderInterruptedError)(error)) {
        throw error;
    }
    if (_instanceof._(error, Error) && 'cause' in error) {
        unstable_rethrow(error.cause);
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/unstable-rethrow.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This function should be used to rethrow internal Next.js errors so that they can be handled by the framework.
 * When wrapping an API that uses errors to interrupt control flow, you should use this function before you do any error handling.
 * This function will rethrow the error if it is a Next.js error so it can be handled, otherwise it will do nothing.
 *
 * Read more: [Next.js Docs: `unstable_rethrow`](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
 */ var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function get() {
        return unstable_rethrow;
    }
});
var unstable_rethrow = typeof window === 'undefined' ? __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-client] (ecmascript)").unstable_rethrow : __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/unstable-rethrow.browser.js [app-client] (ecmascript)").unstable_rethrow;
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/navigation.react-server.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function ReadonlyURLSearchParams() {
        return _readonlyurlsearchparams.ReadonlyURLSearchParams;
    },
    RedirectType: function RedirectType1() {
        return RedirectType;
    },
    forbidden: function forbidden() {
        return _forbidden.forbidden;
    },
    notFound: function notFound() {
        return _notfound.notFound;
    },
    permanentRedirect: function permanentRedirect() {
        return _redirect.permanentRedirect;
    },
    redirect: function redirect() {
        return _redirect.redirect;
    },
    unauthorized: function unauthorized() {
        return _unauthorized.unauthorized;
    },
    unstable_isUnrecognizedActionError: function unstable_isUnrecognizedActionError1() {
        return unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function unstable_rethrow() {
        return _unstablerethrow.unstable_rethrow;
    }
});
var _readonlyurlsearchparams = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/readonly-url-search-params.js [app-client] (ecmascript)");
var _redirect = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)");
var _notfound = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/not-found.js [app-client] (ecmascript)");
var _forbidden = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/forbidden.js [app-client] (ecmascript)");
var _unauthorized = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/unauthorized.js [app-client] (ecmascript)");
var _unstablerethrow = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/unstable-rethrow.js [app-client] (ecmascript)");
function unstable_isUnrecognizedActionError() {
    throw Object.defineProperty(new Error('`unstable_isUnrecognizedActionError` can only be used on the client.'), "__NEXT_ERROR_CODE", {
        value: "E776",
        enumerable: false,
        configurable: true
    });
}
var RedirectType = {
    push: 'push',
    replace: 'replace'
};
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    ServerInsertedHTMLContext: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null,
    useParams: null,
    usePathname: null,
    useRouter: null,
    useSearchParams: null,
    useSelectedLayoutSegment: null,
    useSelectedLayoutSegments: null,
    useServerInsertedHTML: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    // We need the same class that was used to instantiate the context value
    // Otherwise instanceof checks will fail in usercode
    ReadonlyURLSearchParams: function ReadonlyURLSearchParams() {
        return _hooksclientcontextsharedruntime.ReadonlyURLSearchParams;
    },
    RedirectType: function RedirectType() {
        return _navigationreactserver.RedirectType;
    },
    ServerInsertedHTMLContext: function ServerInsertedHTMLContext() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
    },
    forbidden: function forbidden() {
        return _navigationreactserver.forbidden;
    },
    notFound: function notFound() {
        return _navigationreactserver.notFound;
    },
    permanentRedirect: function permanentRedirect() {
        return _navigationreactserver.permanentRedirect;
    },
    redirect: function redirect() {
        return _navigationreactserver.redirect;
    },
    unauthorized: function unauthorized() {
        return _navigationreactserver.unauthorized;
    },
    unstable_isUnrecognizedActionError: function unstable_isUnrecognizedActionError() {
        return _unrecognizedactionerror.unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function unstable_rethrow() {
        return _navigationreactserver.unstable_rethrow;
    },
    useParams: function useParams1() {
        return useParams;
    },
    usePathname: function usePathname1() {
        return usePathname;
    },
    useRouter: function useRouter1() {
        return useRouter;
    },
    useSearchParams: function useSearchParams1() {
        return useSearchParams;
    },
    useSelectedLayoutSegment: function useSelectedLayoutSegment1() {
        return useSelectedLayoutSegment;
    },
    useSelectedLayoutSegments: function useSelectedLayoutSegments1() {
        return useSelectedLayoutSegments;
    },
    useServerInsertedHTML: function useServerInsertedHTML() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
    }
});
var _interop_require_wildcard = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _approutercontextsharedruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
var _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
var _segment = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
var _serverinsertedhtmlsharedruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js [app-client] (ecmascript)");
var _unrecognizedactionerror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/unrecognized-action-error.js [app-client] (ecmascript)");
var _navigationreactserver = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/navigation.react-server.js [app-client] (ecmascript)");
var useDynamicRouteParams = typeof window === 'undefined' ? __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)").useDynamicRouteParams : undefined;
var useDynamicSearchParams = typeof window === 'undefined' ? __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)").useDynamicSearchParams : undefined;
var _ref = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : {}, instrumentParamsForClientValidation = _ref.instrumentParamsForClientValidation, instrumentSearchParamsForClientValidation = _ref.instrumentSearchParamsForClientValidation, expectCompleteParamsInClientValidation = _ref.expectCompleteParamsInClientValidation;
function useSearchParams() {
    useDynamicSearchParams === null || useDynamicSearchParams === void 0 ? void 0 : useDynamicSearchParams('useSearchParams()');
    var searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    var readonlySearchParams = (0, _react.useMemo)(function() {
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new _hooksclientcontextsharedruntime.ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    // During build-time instant validation, wrap with an proxy
    // so that accessing undeclared search params throws an error.
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        var navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.searchParams);
        }
    }
    return readonlySearchParams;
}
function usePathname() {
    useDynamicRouteParams === null || useDynamicRouteParams === void 0 ? void 0 : useDynamicRouteParams('usePathname()');
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    var pathname = (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
    // During build-time instant validation, error if fallback params exist
    // because usePathname() can't return a sensible value without all params.
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        var navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.pathname);
        }
    }
    return pathname;
}
function useRouter() {
    var router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
    if (router === null) {
        throw Object.defineProperty(new Error('invariant expected app router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E238",
            enumerable: false,
            configurable: true
        });
    }
    return router;
}
function useParams() {
    useDynamicRouteParams === null || useDynamicRouteParams === void 0 ? void 0 : useDynamicRouteParams('useParams()');
    var params = (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
    // During build-time instant validation, wrap with a proxy
    // so that accessing undeclared params throws an error.
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        var navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.params);
        }
    }
    return params;
}
function useSelectedLayoutSegments() {
    var parallelRouteKey = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'children';
    useDynamicRouteParams === null || useDynamicRouteParams === void 0 ? void 0 : useDynamicRouteParams('useSelectedLayoutSegments()');
    var context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    // @ts-expect-error This only happens in `pages`. Type is overwritten in navigation.d.ts
    if (!context) return null;
    // During build-time instant validation, error if fallback params exist
    // because useSelectedLayoutSegments() can't return a sensible value without all params.
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        var navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            var _navigationPromises_selectedLayoutSegmentsPromises;
            var promise = (_navigationPromises_selectedLayoutSegmentsPromises = navigationPromises.selectedLayoutSegmentsPromises) === null || _navigationPromises_selectedLayoutSegmentsPromises === void 0 ? void 0 : _navigationPromises_selectedLayoutSegmentsPromises.get(parallelRouteKey);
            if (promise) {
                // We should always have a promise here, but if we don't, it's not worth erroring over.
                // We just won't be able to instrument it, but can still provide the value.
                return (0, _react.use)(promise);
            }
        }
    }
    return (0, _segment.getSelectedLayoutSegmentPath)(context.parentTree, parallelRouteKey);
}
function useSelectedLayoutSegment() {
    var parallelRouteKey = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'children';
    useDynamicRouteParams === null || useDynamicRouteParams === void 0 ? void 0 : useDynamicRouteParams('useSelectedLayoutSegment()');
    var navigationPromises = (0, _react.useContext)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
    var selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    // During build-time instant validation, error if fallback params exist
    // because useSelectedLayoutSegment() can't return a sensible value without all params.
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && navigationPromises && 'use' in _react.default) {
        var _navigationPromises_selectedLayoutSegmentPromises;
        var promise = (_navigationPromises_selectedLayoutSegmentPromises = navigationPromises.selectedLayoutSegmentPromises) === null || _navigationPromises_selectedLayoutSegmentPromises === void 0 ? void 0 : _navigationPromises_selectedLayoutSegmentPromises.get(parallelRouteKey);
        if (promise) {
            // We should always have a promise here, but if we don't, it's not worth erroring over.
            // We just won't be able to instrument it, but can still provide the value.
            return (0, _react.use)(promise);
        }
    }
    return (0, _segment.computeSelectedLayoutSegment)(selectedLayoutSegments, parallelRouteKey);
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _call_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_call_super.cjs [app-client] (ecmascript)");
var _class_call_check = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_create_class.cjs [app-client] (ecmascript)");
var _inherits = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_inherits.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RedirectBoundary: null,
    RedirectErrorBoundary: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectBoundary: function RedirectBoundary1() {
        return RedirectBoundary;
    },
    RedirectErrorBoundary: function RedirectErrorBoundary1() {
        return RedirectErrorBoundary;
    }
});
var _interop_require_wildcard = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
var _jsxruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _navigation = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
var _redirect = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)");
var _redirecterror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
function HandleRedirect(param) {
    var redirect = param.redirect, reset = param.reset, redirectType = param.redirectType;
    var router = (0, _navigation.useRouter)();
    (0, _react.useEffect)(function() {
        _react.default.startTransition(function() {
            if (redirectType === 'push') {
                router.push(redirect, {});
            } else {
                router.replace(redirect, {});
            }
            reset();
        });
    }, [
        redirect,
        redirectType,
        reset,
        router
    ]);
    return null;
}
var RedirectErrorBoundary = /*#__PURE__*/ function(_react_default_Component) {
    "use strict";
    _inherits._(RedirectErrorBoundary, _react_default_Component);
    function RedirectErrorBoundary(props) {
        _class_call_check._(this, RedirectErrorBoundary);
        var _this;
        _this = _call_super._(this, RedirectErrorBoundary, [
            props
        ]);
        _this.state = {
            redirect: null,
            redirectType: null
        };
        return _this;
    }
    _create_class._(RedirectErrorBoundary, [
        {
            // Explicit type is needed to avoid the generated `.d.ts` having a wide return type that could be specific to the `@types/react` version.
            key: "render",
            value: function render() {
                var _this = this;
                var _this_state = this.state, redirect = _this_state.redirect, redirectType = _this_state.redirectType;
                if (redirect !== null && redirectType !== null) {
                    return /*#__PURE__*/ (0, _jsxruntime.jsx)(HandleRedirect, {
                        redirect: redirect,
                        redirectType: redirectType,
                        reset: function reset() {
                            return _this.setState({
                                redirect: null
                            });
                        }
                    });
                }
                return this.props.children;
            }
        }
    ], [
        {
            key: "getDerivedStateFromError",
            value: function getDerivedStateFromError(error) {
                if ((0, _redirecterror.isRedirectError)(error)) {
                    var url = (0, _redirect.getURLFromRedirectError)(error);
                    var redirectType = (0, _redirect.getRedirectTypeFromError)(error);
                    if ('handled' in error) {
                        // The redirect was already handled. We'll still catch the redirect error
                        // so that we can remount the subtree, but we don't actually need to trigger the
                        // router.push.
                        return {
                            redirect: null,
                            redirectType: null
                        };
                    }
                    return {
                        redirect: url,
                        redirectType: redirectType
                    };
                }
                // Re-throw if error is not for redirect
                throw error;
            }
        }
    ]);
    return RedirectErrorBoundary;
}(_react.default.Component);
function RedirectBoundary(param) {
    var children = param.children;
    var router = (0, _navigation.useRouter)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(RedirectErrorBoundary, {
        router: router,
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRouterCacheKey", {
    enumerable: true,
    get: function get() {
        return createRouterCacheKey;
    }
});
var _segment = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
function createRouterCacheKey(segment) {
    var withoutSearchParameters = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    // if the segment is an array, it means it's a dynamic segment
    // for example, ['lang', 'en', 'd']. We need to convert it to a string to store it as a cache node key.
    if (Array.isArray(segment)) {
        return "".concat(segment[0], "|").concat(segment[1], "|").concat(segment[2]);
    }
    // Page segments might have search parameters, ie __PAGE__?foo=bar
    // When `withoutSearchParameters` is true, we only want to return the page segment
    if (withoutSearchParameters && segment.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return _segment.PAGE_SEGMENT_KEY;
    }
    return segment;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/find-head-in-cache.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findHeadInCache", {
    enumerable: true,
    get: function get() {
        return findHeadInCache;
    }
});
var _segment = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
var _createroutercachekey = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
function findHeadInCache(cache, parallelRoutes) {
    return findHeadInCacheImpl(cache, parallelRoutes, '', '');
}
function findHeadInCacheImpl(cache, parallelRoutes, keyPrefix, keyPrefixWithoutSearchParams) {
    var isLastItem = Object.keys(parallelRoutes).length === 0;
    if (isLastItem) {
        // Returns the entire Cache Node of the segment whose head we will render.
        return [
            cache,
            keyPrefix,
            keyPrefixWithoutSearchParams
        ];
    }
    // First try the 'children' parallel route if it exists
    // when starting from the "root", this corresponds with the main page component
    var parallelRoutesKeys = Object.keys(parallelRoutes).filter(function(key) {
        return key !== 'children';
    });
    // if we are at the root, we need to check the children slot first
    if ('children' in parallelRoutes) {
        parallelRoutesKeys.unshift('children');
    }
    var slots = cache.slots;
    if (slots !== null) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = parallelRoutesKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var key = _step.value;
                var _parallelRoutes_key = _sliced_to_array._(parallelRoutes[key], 2), segment = _parallelRoutes_key[0], childParallelRoutes = _parallelRoutes_key[1];
                // If the parallel is not matched and using the default segment,
                // skip searching the head from it.
                if (segment === _segment.DEFAULT_SEGMENT_KEY) {
                    continue;
                }
                var childCacheNode = slots[key];
                if (!childCacheNode) {
                    continue;
                }
                var cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
                var cacheKeyWithoutSearchParams = (0, _createroutercachekey.createRouterCacheKey)(segment, true);
                var item = findHeadInCacheImpl(childCacheNode, childParallelRoutes, keyPrefix + '/' + cacheKey, keyPrefix + '/' + cacheKeyWithoutSearchParams);
                if (item) {
                    return item;
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/unresolved-thenable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Create a "Thenable" that does not resolve. This is used to suspend indefinitely when data is not available yet.
 */ var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unresolvedThenable", {
    enumerable: true,
    get: function get() {
        return unresolvedThenable;
    }
});
var unresolvedThenable = {
    then: function then() {}
};
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/errors/graceful-degrade-boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _call_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_call_super.cjs [app-client] (ecmascript)");
var _class_call_check = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_create_class.cjs [app-client] (ecmascript)");
var _inherits = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_inherits.cjs [app-client] (ecmascript)");
var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    GracefulDegradeBoundary: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    GracefulDegradeBoundary: function GracefulDegradeBoundary1() {
        return GracefulDegradeBoundary;
    },
    default: function _default1() {
        return _default;
    }
});
var _jsxruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _react = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function getDomNodeAttributes(node) {
    var result = {};
    for(var i = 0; i < node.attributes.length; i++){
        var attr = node.attributes[i];
        result[attr.name] = attr.value;
    }
    return result;
}
var GracefulDegradeBoundary = /*#__PURE__*/ function(_react_Component) {
    "use strict";
    _inherits._(GracefulDegradeBoundary, _react_Component);
    function GracefulDegradeBoundary(props) {
        _class_call_check._(this, GracefulDegradeBoundary);
        var _this;
        _this = _call_super._(this, GracefulDegradeBoundary, [
            props
        ]);
        _this.state = {
            hasError: false
        };
        _this.rootHtml = '';
        _this.htmlAttributes = {};
        _this.htmlRef = /*#__PURE__*/ (0, _react.createRef)();
        return _this;
    }
    _create_class._(GracefulDegradeBoundary, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var htmlNode = this.htmlRef.current;
                if (this.state.hasError && htmlNode) {
                    // Reapply the cached HTML attributes to the root element
                    Object.entries(this.htmlAttributes).forEach(function(param) {
                        var _param = _sliced_to_array._(param, 2), key = _param[0], value = _param[1];
                        htmlNode.setAttribute(key, value);
                    });
                }
            }
        },
        {
            key: "render",
            value: function render() {
                var hasError = this.state.hasError;
                // Cache the root HTML content on the first render
                if (typeof window !== 'undefined' && !this.rootHtml) {
                    this.rootHtml = document.documentElement.innerHTML;
                    this.htmlAttributes = getDomNodeAttributes(document.documentElement);
                }
                if (hasError) {
                    // Render the current HTML content without hydration
                    return /*#__PURE__*/ (0, _jsxruntime.jsx)("html", {
                        ref: this.htmlRef,
                        suppressHydrationWarning: true,
                        dangerouslySetInnerHTML: {
                            __html: this.rootHtml
                        }
                    });
                }
                return this.props.children;
            }
        }
    ], [
        {
            key: "getDerivedStateFromError",
            value: function getDerivedStateFromError(_) {
                return {
                    hasError: true
                };
            }
        }
    ]);
    return GracefulDegradeBoundary;
}(_react.Component);
var _default = GracefulDegradeBoundary;
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/errors/root-error-boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
        return RootErrorBoundary;
    }
});
var _interop_require_default = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
var _jsxruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _gracefuldegradeboundary = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/errors/graceful-degrade-boundary.js [app-client] (ecmascript)"));
var _errorboundary = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
var _isbot = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/is-bot.js [app-client] (ecmascript)");
var isBotUserAgent = typeof window !== 'undefined' && (0, _isbot.isBot)(window.navigator.userAgent);
function RootErrorBoundary(param) {
    var children = param.children, errorComponent = param.errorComponent, errorStyles = param.errorStyles, errorScripts = param.errorScripts;
    if (isBotUserAgent) {
        // Preserve existing DOM/HTML for bots to avoid replacing content with an error UI
        // and to keep the original SSR output intact.
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_gracefuldegradeboundary.default, {
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
        errorComponent: errorComponent,
        errorStyles: errorStyles,
        errorScripts: errorScripts,
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/navigation-devtools.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _object_spread = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_object_spread.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createNestedLayoutNavigationPromises: null,
    createRootNavigationPromises: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createNestedLayoutNavigationPromises: function createNestedLayoutNavigationPromises1() {
        return createNestedLayoutNavigationPromises;
    },
    createRootNavigationPromises: function createRootNavigationPromises1() {
        return createRootNavigationPromises;
    }
});
var _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
var _segment = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
var layoutSegmentPromisesCache = new WeakMap();
/**
 * Creates instrumented promises for layout segment hooks at a given tree level.
 * This is dev-only code for React Suspense DevTools instrumentation.
 */ function createLayoutSegmentPromises(tree) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Check if we already have cached promises for this tree
    var cached = layoutSegmentPromisesCache.get(tree);
    if (cached) {
        return cached;
    }
    // Create new promises and cache them
    var segmentPromises = new Map();
    var segmentsPromises = new Map();
    var parallelRoutes = tree[1];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.keys(parallelRoutes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var parallelRouteKey = _step.value;
            var segments = (0, _segment.getSelectedLayoutSegmentPath)(tree, parallelRouteKey);
            // Use the shared logic to compute the segment value
            var segment = (0, _segment.computeSelectedLayoutSegment)(segments, parallelRouteKey);
            segmentPromises.set(parallelRouteKey, (0, _hooksclientcontextsharedruntime.createDevToolsInstrumentedPromise)('useSelectedLayoutSegment', segment));
            segmentsPromises.set(parallelRouteKey, (0, _hooksclientcontextsharedruntime.createDevToolsInstrumentedPromise)('useSelectedLayoutSegments', segments));
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
    var result = {
        selectedLayoutSegmentPromises: segmentPromises,
        selectedLayoutSegmentsPromises: segmentsPromises
    };
    // Cache the result for future renders
    layoutSegmentPromisesCache.set(tree, result);
    return result;
}
var rootNavigationPromisesCache = new WeakMap();
function createRootNavigationPromises(tree, pathname, searchParams, pathParams) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Create stable cache keys from the values
    var searchParamsString = searchParams.toString();
    var pathParamsString = JSON.stringify(pathParams);
    var cacheKey = "".concat(pathname, ":").concat(searchParamsString, ":").concat(pathParamsString);
    // Get or create the cache for this tree
    var treeCache = rootNavigationPromisesCache.get(tree);
    if (!treeCache) {
        treeCache = new Map();
        rootNavigationPromisesCache.set(tree, treeCache);
    }
    // Check if we have cached promises for this combination
    var cached = treeCache.get(cacheKey);
    if (cached) {
        return cached;
    }
    var readonlySearchParams = new _hooksclientcontextsharedruntime.ReadonlyURLSearchParams(searchParams);
    var layoutSegmentPromises = createLayoutSegmentPromises(tree);
    var promises = _object_spread._({
        pathname: (0, _hooksclientcontextsharedruntime.createDevToolsInstrumentedPromise)('usePathname', pathname),
        searchParams: (0, _hooksclientcontextsharedruntime.createDevToolsInstrumentedPromise)('useSearchParams', readonlySearchParams),
        params: (0, _hooksclientcontextsharedruntime.createDevToolsInstrumentedPromise)('useParams', pathParams)
    }, layoutSegmentPromises);
    treeCache.set(cacheKey, promises);
    return promises;
}
var nestedLayoutPromisesCache = new WeakMap();
function createNestedLayoutNavigationPromises(tree, parentNavPromises) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    var parallelRoutes = tree[1];
    var parallelRouteKeys = Object.keys(parallelRoutes);
    // Only create promises if there are parallel routes at this level
    if (parallelRouteKeys.length === 0) {
        return null;
    }
    // Get or create the cache for this tree
    var treeCache = nestedLayoutPromisesCache.get(tree);
    if (!treeCache) {
        treeCache = new Map();
        nestedLayoutPromisesCache.set(tree, treeCache);
    }
    // Check if we have cached promises for this parent combination
    var cached = treeCache.get(parentNavPromises);
    if (cached) {
        return cached;
    }
    // Create merged promises
    var layoutSegmentPromises = createLayoutSegmentPromises(tree);
    var promises = _object_spread._({}, parentNavPromises, layoutSegmentPromises);
    treeCache.set(parentNavPromises, promises);
    return promises;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
var _call_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_call_super.cjs [app-client] (ecmascript)");
var _class_call_check = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_create_class.cjs [app-client] (ecmascript)");
var _define_property = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_define_property.cjs [app-client] (ecmascript)");
var _inherits = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_inherits.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HTTPAccessFallbackBoundary", {
    enumerable: true,
    get: function get() {
        return HTTPAccessFallbackBoundary;
    }
});
var _interop_require_wildcard = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
var _jsxruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _navigationuntracked = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/navigation-untracked.js [app-client] (ecmascript)");
var _httpaccessfallback = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
var _warnonce = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
var _approutercontextsharedruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
var HTTPAccessFallbackErrorBoundary = /*#__PURE__*/ function(_react_default_Component) {
    "use strict";
    _inherits._(HTTPAccessFallbackErrorBoundary, _react_default_Component);
    function HTTPAccessFallbackErrorBoundary(props) {
        _class_call_check._(this, HTTPAccessFallbackErrorBoundary);
        var _this;
        _this = _call_super._(this, HTTPAccessFallbackErrorBoundary, [
            props
        ]);
        _this.state = {
            triggeredStatus: undefined,
            previousPathname: props.pathname
        };
        return _this;
    }
    _create_class._(HTTPAccessFallbackErrorBoundary, [
        {
            key: "componentDidCatch",
            value: function componentDidCatch() {
                if (("TURBOPACK compile-time value", "development") === 'development' && this.props.missingSlots && this.props.missingSlots.size > 0 && // A missing children slot is the typical not-found case, so no need to warn
                !this.props.missingSlots.has('children')) {
                    var warningMessage = 'No default component was found for a parallel route rendered on this page. Falling back to nearest NotFound boundary.\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#defaultjs\n\n';
                    var formattedSlots = Array.from(this.props.missingSlots).sort(function(a, b) {
                        return a.localeCompare(b);
                    }).map(function(slot) {
                        return "@".concat(slot);
                    }).join(', ');
                    warningMessage += 'Missing slots: ' + formattedSlots;
                    (0, _warnonce.warnOnce)(warningMessage);
                }
            }
        },
        {
            key: "render",
            value: function render() {
                var _this_props = this.props, notFound = _this_props.notFound, forbidden = _this_props.forbidden, unauthorized = _this_props.unauthorized, children = _this_props.children;
                var triggeredStatus = this.state.triggeredStatus;
                var _obj;
                var errorComponents = (_obj = {}, _define_property._(_obj, _httpaccessfallback.HTTPAccessErrorStatus.NOT_FOUND, notFound), _define_property._(_obj, _httpaccessfallback.HTTPAccessErrorStatus.FORBIDDEN, forbidden), _define_property._(_obj, _httpaccessfallback.HTTPAccessErrorStatus.UNAUTHORIZED, unauthorized), _obj);
                if (triggeredStatus) {
                    var isNotFound = triggeredStatus === _httpaccessfallback.HTTPAccessErrorStatus.NOT_FOUND && notFound;
                    var isForbidden = triggeredStatus === _httpaccessfallback.HTTPAccessErrorStatus.FORBIDDEN && forbidden;
                    var isUnauthorized = triggeredStatus === _httpaccessfallback.HTTPAccessErrorStatus.UNAUTHORIZED && unauthorized;
                    // If there's no matched boundary in this layer, keep throwing the error by rendering the children
                    if (!(isNotFound || isForbidden || isUnauthorized)) {
                        return children;
                    }
                    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
                                name: "robots",
                                content: "noindex"
                            }),
                            ("TURBOPACK compile-time value", "development") === 'development' && /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
                                name: "boundary-next-error",
                                content: (0, _httpaccessfallback.getAccessFallbackErrorTypeByStatus)(triggeredStatus)
                            }),
                            errorComponents[triggeredStatus]
                        ]
                    });
                }
                return children;
            }
        }
    ], [
        {
            key: "getDerivedStateFromError",
            value: function getDerivedStateFromError(error) {
                if ((0, _httpaccessfallback.isHTTPAccessFallbackError)(error)) {
                    var httpStatus = (0, _httpaccessfallback.getAccessFallbackHTTPStatus)(error);
                    return {
                        triggeredStatus: httpStatus
                    };
                }
                // Re-throw if error is not for 404
                throw error;
            }
        },
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(props, state) {
                /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.triggeredStatus) {
                    return {
                        triggeredStatus: undefined,
                        previousPathname: props.pathname
                    };
                }
                return {
                    triggeredStatus: state.triggeredStatus,
                    previousPathname: props.pathname
                };
            }
        }
    ]);
    return HTTPAccessFallbackErrorBoundary;
}(_react.default.Component);
function HTTPAccessFallbackBoundary(param) {
    var notFound = param.notFound, forbidden = param.forbidden, unauthorized = param.unauthorized, children = param.children;
    // When we're rendering the missing params shell, this will return null. This
    // is because we won't be rendering any not found boundaries or error
    // boundaries for the missing params shell. When this runs on the client
    // (where these error can occur), we will get the correct pathname.
    var pathname = (0, _navigationuntracked.useUntrackedPathname)();
    var missingSlots = (0, _react.useContext)(_approutercontextsharedruntime.MissingSlotContext);
    var hasErrorFallback = !!(notFound || forbidden || unauthorized);
    if (hasErrorFallback) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(HTTPAccessFallbackErrorBoundary, {
            pathname: pathname,
            notFound: notFound,
            forbidden: forbidden,
            unauthorized: unauthorized,
            missingSlots: missingSlots,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/dev-root-http-access-fallback-boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DevRootHTTPAccessFallbackBoundary: null,
    bailOnRootNotFound: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DevRootHTTPAccessFallbackBoundary: function DevRootHTTPAccessFallbackBoundary1() {
        return DevRootHTTPAccessFallbackBoundary;
    },
    bailOnRootNotFound: function bailOnRootNotFound1() {
        return bailOnRootNotFound;
    }
});
var _interop_require_default = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
var _jsxruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _errorboundary = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)");
function bailOnRootNotFound() {
    throw Object.defineProperty(new Error('notFound() is not allowed to use in root layout'), "__NEXT_ERROR_CODE", {
        value: "E192",
        enumerable: false,
        configurable: true
    });
}
function NotAllowedRootHTTPFallbackError() {
    bailOnRootNotFound();
    return null;
}
function DevRootHTTPAccessFallbackBoundary(param) {
    var children = param.children;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.HTTPAccessFallbackBoundary, {
        notFound: /*#__PURE__*/ (0, _jsxruntime.jsx)(NotAllowedRootHTTPFallbackError, {}),
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/hot-reloader/shared.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _instanceof = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_instanceof.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REACT_REFRESH_FULL_RELOAD: null,
    REACT_REFRESH_FULL_RELOAD_FROM_ERROR: null,
    reportInvalidHmrMessage: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REACT_REFRESH_FULL_RELOAD: function REACT_REFRESH_FULL_RELOAD1() {
        return REACT_REFRESH_FULL_RELOAD;
    },
    REACT_REFRESH_FULL_RELOAD_FROM_ERROR: function REACT_REFRESH_FULL_RELOAD_FROM_ERROR1() {
        return REACT_REFRESH_FULL_RELOAD_FROM_ERROR;
    },
    reportInvalidHmrMessage: function reportInvalidHmrMessage1() {
        return reportInvalidHmrMessage;
    }
});
var REACT_REFRESH_FULL_RELOAD = '[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.';
var REACT_REFRESH_FULL_RELOAD_FROM_ERROR = '[Fast Refresh] performing full reload because your application had an unrecoverable error';
function reportInvalidHmrMessage(message, err) {
    console.warn('[HMR] Invalid message: ' + JSON.stringify(message) + '\n' + (_instanceof._(err, Error) && (err === null || err === void 0 ? void 0 : err.stack) || ''));
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/hot-reloader/get-socket-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getSocketUrl", {
    enumerable: true,
    get: function get() {
        return getSocketUrl;
    }
});
var _normalizedassetprefix = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/normalized-asset-prefix.js [app-client] (ecmascript)");
function getSocketProtocol(assetPrefix) {
    var protocol = window.location.protocol;
    try {
        // assetPrefix is a url
        protocol = new URL(assetPrefix).protocol;
    } catch (unused) {}
    return protocol === 'http:' ? 'ws:' : 'wss:';
}
function getSocketUrl(assetPrefix) {
    var prefix = (0, _normalizedassetprefix.normalizedAssetPrefix)(assetPrefix);
    var protocol = getSocketProtocol(assetPrefix || '');
    if (URL.canParse(prefix)) {
        // since normalized asset prefix is ensured to be a URL format,
        // we can safely replace the protocol
        return prefix.replace(/^http/, 'ws');
    }
    var _window_location = window.location, hostname = _window_location.hostname, port = _window_location.port;
    return "".concat(protocol, "//").concat(hostname).concat(port ? ":".concat(port) : '').concat(prefix);
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/hot-reloader/app/web-socket.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _instanceof = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_instanceof.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createProcessTurbopackMessage: null,
    createWebSocket: null,
    useWebSocketPing: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createProcessTurbopackMessage: function createProcessTurbopackMessage1() {
        return createProcessTurbopackMessage;
    },
    createWebSocket: function createWebSocket1() {
        return createWebSocket;
    },
    useWebSocketPing: function useWebSocketPing1() {
        return useWebSocketPing;
    }
});
var _react = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _approutercontextsharedruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
var _getsocketurl = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/hot-reloader/get-socket-url.js [app-client] (ecmascript)");
var _hotreloadertypes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/dev/hot-reloader-types.js [app-client] (ecmascript)");
var _shared = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/hot-reloader/shared.js [app-client] (ecmascript)");
var _hotreloaderapp = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/hot-reloader/app/hot-reloader-app.js [app-client] (ecmascript)");
var _forwardlogs = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/forward-logs.js [app-client] (ecmascript)");
var _invarianterror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
var _constants = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/constants.js [app-client] (ecmascript)");
var reconnections = 0;
var reloading = false;
var serverSessionId = null;
var mostRecentCompilationHash = null;
function createWebSocket(assetPrefix, staticIndicatorState) {
    if (!self.__next_r) {
        throw Object.defineProperty(new _invarianterror.InvariantError("Expected a request ID to be defined for the document via self.__next_r."), "__NEXT_ERROR_CODE", {
            value: "E806",
            enumerable: false,
            configurable: true
        });
    }
    var webSocket;
    var timer;
    var sendMessage = function sendMessage(data) {
        if (webSocket && webSocket.readyState === webSocket.OPEN) {
            webSocket.send(data);
        }
    };
    var processTurbopackMessage = createProcessTurbopackMessage(sendMessage);
    function init() {
        if (webSocket) {
            webSocket.close();
        }
        var newWebSocket = new window.WebSocket("".concat((0, _getsocketurl.getSocketUrl)(assetPrefix), "/_next/webpack-hmr?id=").concat(self.__next_r));
        newWebSocket.binaryType = 'arraybuffer';
        function handleOnline() {
            _forwardlogs.logQueue.onSocketReady(newWebSocket);
            reconnections = 0;
            window.console.log('[HMR] connected');
        }
        function handleMessage(event) {
            // While the page is reloading, don't respond to any more messages.
            if (reloading) {
                return;
            }
            try {
                var message = _instanceof._(event.data, ArrayBuffer) ? parseBinaryMessage(event.data) : JSON.parse(event.data);
                // Check for server restart in Turbopack mode
                if (message.type === _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.TURBOPACK_CONNECTED) {
                    if (serverSessionId !== null && serverSessionId !== message.data.sessionId) {
                        // Either the server's session id has changed and it's a new server, or
                        // it's been too long since we disconnected and we should reload the page.
                        window.location.reload();
                        reloading = true;
                        return;
                    }
                    serverSessionId = message.data.sessionId;
                }
                // Track webpack compilation hash for server restart detection
                if (message.type === _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.SYNC && 'hash' in message) {
                    // If we had previously reconnected and the hash changed, the server may have restarted
                    if (mostRecentCompilationHash !== null && mostRecentCompilationHash !== message.hash) {
                        window.location.reload();
                        reloading = true;
                        return;
                    }
                    mostRecentCompilationHash = message.hash;
                }
                (0, _hotreloaderapp.processMessage)(message, sendMessage, processTurbopackMessage, staticIndicatorState);
            } catch (err) {
                (0, _shared.reportInvalidHmrMessage)(event, err);
            }
        }
        function handleDisconnect() {
            newWebSocket.onerror = null;
            newWebSocket.onclose = null;
            newWebSocket.close();
            reconnections++;
            // After 25 reconnects we'll want to reload the page as it indicates the dev server is no longer running.
            if (reconnections > _constants.WEB_SOCKET_MAX_RECONNECTIONS) {
                reloading = true;
                window.location.reload();
                return;
            }
            clearTimeout(timer);
            // Try again after 5 seconds
            timer = setTimeout(init, reconnections > 5 ? 5000 : 1000);
        }
        newWebSocket.onopen = handleOnline;
        newWebSocket.onerror = handleDisconnect;
        newWebSocket.onclose = handleDisconnect;
        newWebSocket.onmessage = handleMessage;
        webSocket = newWebSocket;
        return newWebSocket;
    }
    return init();
}
function createProcessTurbopackMessage(sendMessage) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    var queue = [];
    var callback;
    var processTurbopackMessage = function processTurbopackMessage(msg) {
        if (callback) {
            callback(msg);
        } else {
            queue.push(msg);
        }
    };
    __turbopack_context__.A("[turbopack]/browser/dev/hmr-client/hmr-client.ts [app-client] (ecmascript, async loader)").then(function(param) {
        var connect = param.connect;
        connect({
            addMessageListener: function addMessageListener(cb) {
                callback = cb;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    // Replay all Turbopack messages before we were able to establish the HMR client.
                    for(var _iterator = queue[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var msg = _step.value;
                        cb(msg);
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
                queue.length = 0;
            },
            sendMessage: sendMessage,
            onUpdateError: function onUpdateError(err) {
                return (0, _hotreloaderapp.performFullReload)(err, sendMessage);
            }
        });
    });
    return processTurbopackMessage;
}
function useWebSocketPing(webSocket) {
    var tree = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext).tree;
    (0, _react.useEffect)(function() {
        if (!webSocket) {
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected webSocket to be defined in dev mode.'), "__NEXT_ERROR_CODE", {
                value: "E785",
                enumerable: false,
                configurable: true
            });
        }
        // Never send pings when using Turbopack as it's not used.
        // Pings were originally used to keep track of active routes in on-demand-entries with webpack.
        if ("TURBOPACK compile-time truthy", 1) {
            return;
        }
        //TURBOPACK unreachable
        ;
        // Taken from on-demand-entries-client.js
        var interval;
    }, [
        tree,
        webSocket
    ]);
}
var textDecoder = new TextDecoder();
function parseBinaryMessage(data) {
    assertByteLength(data, 1);
    var view = new DataView(data);
    var messageType = view.getUint8(0);
    switch(messageType){
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.ERRORS_TO_SHOW_IN_BROWSER:
            {
                var serializedErrors = new Uint8Array(data, 1);
                return {
                    type: _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.ERRORS_TO_SHOW_IN_BROWSER,
                    serializedErrors: serializedErrors
                };
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.REACT_DEBUG_CHUNK:
            {
                assertByteLength(data, 2);
                var requestIdLength = view.getUint8(1);
                assertByteLength(data, 2 + requestIdLength);
                var requestId = textDecoder.decode(new Uint8Array(data, 2, requestIdLength));
                var chunk = data.byteLength > 2 + requestIdLength ? new Uint8Array(data, 2 + requestIdLength) : null;
                return {
                    type: _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.REACT_DEBUG_CHUNK,
                    requestId: requestId,
                    chunk: chunk
                };
            }
        default:
            {
                throw Object.defineProperty(new _invarianterror.InvariantError("Invalid binary HMR message of type ".concat(messageType)), "__NEXT_ERROR_CODE", {
                    value: "E809",
                    enumerable: false,
                    configurable: true
                });
            }
    }
}
function assertByteLength(data, expectedLength) {
    if (data.byteLength < expectedLength) {
        throw Object.defineProperty(new _invarianterror.InvariantError("Invalid binary HMR message: insufficient data (expected ".concat(expectedLength, " bytes, got ").concat(data.byteLength, ")")), "__NEXT_ERROR_CODE", {
            value: "E808",
            enumerable: false,
            configurable: true
        });
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/report-hmr-latency.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, /**
 * Logs information about a completed HMR to the console, the server (via a
 * `client-hmr-latency` event), and to `self.__NEXT_HMR_LATENCY_CB` (a debugging
 * hook).
 *
 * @param hasUpdate Set this to `false` to avoid reporting the HMR event via a
 *   `client-hmr-latency` event or to `self.__NEXT_HMR_LATENCY_CB`. Used by
 *   turbopack when we must report a message to the browser console (because we
 *   already logged a "rebuilding" message), but it's not a real HMR, so we
 *   don't want to impact our telemetry.
 */ "default", {
    enumerable: true,
    get: function get() {
        return reportHmrLatency;
    }
});
function reportHmrLatency(sendMessage, updatedModules, startMsSinceEpoch, endMsSinceEpoch) {
    var hasUpdate = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
    var latencyMs = endMsSinceEpoch - startMsSinceEpoch;
    console.log("[Fast Refresh] done in ".concat(latencyMs, "ms"));
    if (!hasUpdate) {
        return;
    }
    sendMessage(JSON.stringify({
        event: 'client-hmr-latency',
        id: window.__nextDevClientId,
        startTime: startMsSinceEpoch,
        endTime: endMsSinceEpoch,
        page: window.location.pathname,
        updatedModules: updatedModules,
        // Whether the page (tab) was hidden at the time the event occurred.
        // This can impact the accuracy of the event's timing.
        isPageHidden: document.visibilityState === 'hidden'
    }));
    if (self.__NEXT_HMR_LATENCY_CB) {
        self.__NEXT_HMR_LATENCY_CB(latencyMs);
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _class_call_check = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _class_private_field_get = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_private_field_get.cjs [app-client] (ecmascript)");
var _class_private_field_init = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_private_field_init.cjs [app-client] (ecmascript)");
var _class_private_field_set = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_private_field_set.cjs [app-client] (ecmascript)");
var _class_private_method_get = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_private_method_get.cjs [app-client] (ecmascript)");
var _class_private_method_init = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_private_method_init.cjs [app-client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_create_class.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TurbopackHmr", {
    enumerable: true,
    get: function get() {
        return TurbopackHmr;
    }
});
// How long to wait before reporting the HMR start, used to suppress irrelevant
// `BUILDING` events. Does not impact reported latency.
var TURBOPACK_HMR_START_DELAY_MS = 100;
var _updatedModules = /*#__PURE__*/ new WeakMap(), _startMsSinceEpoch = /*#__PURE__*/ new WeakMap(), _lastUpdateMsSinceEpoch = /*#__PURE__*/ new WeakMap(), _deferredReportHmrStartId = /*#__PURE__*/ new WeakMap(), _reportedHmrStart = /*#__PURE__*/ new WeakMap(), // HACK: Turbopack tends to generate a lot of irrelevant "BUILDING" actions,
// as it reports *any* compilation, including fully no-op/cached compilations
// and those unrelated to HMR. Fixing this would require significant
// architectural changes.
//
// Work around this by deferring any "rebuilding" message by 100ms. If we get
// a BUILT event within that threshold and nothing has changed, just suppress
// the message entirely.
_runDeferredReportHmrStart = /*#__PURE__*/ new WeakSet(), _cancelDeferredReportHmrStart = /*#__PURE__*/ new WeakSet(), /** Helper for other `onEvent` methods. */ _onUpdate = /*#__PURE__*/ new WeakSet();
var TurbopackHmr = /*#__PURE__*/ function() {
    function TurbopackHmr() {
        _class_call_check._(this, TurbopackHmr);
        _class_private_method_init._(this, _runDeferredReportHmrStart);
        _class_private_method_init._(this, _cancelDeferredReportHmrStart);
        _class_private_method_init._(this, _onUpdate);
        _class_private_field_init._(this, _updatedModules, {
            writable: true,
            value: void 0
        });
        _class_private_field_init._(this, _startMsSinceEpoch, {
            writable: true,
            value: void 0
        });
        _class_private_field_init._(this, _lastUpdateMsSinceEpoch, {
            writable: true,
            value: void 0
        });
        _class_private_field_init._(this, _deferredReportHmrStartId, {
            writable: true,
            value: void 0
        });
        _class_private_field_init._(this, _reportedHmrStart, {
            writable: true,
            value: void 0
        });
        _class_private_field_set._(this, _updatedModules, new Set());
        _class_private_field_set._(this, _reportedHmrStart, false);
    }
    _create_class._(TurbopackHmr, [
        {
            key: "onBuilding",
            value: function onBuilding() {
                var _this = this;
                _class_private_field_set._(this, _lastUpdateMsSinceEpoch, undefined);
                _class_private_method_get._(this, _cancelDeferredReportHmrStart, cancelDeferredReportHmrStart).call(this);
                _class_private_field_set._(this, _startMsSinceEpoch, Date.now());
                // report the HMR start after a short delay
                _class_private_field_set._(this, _deferredReportHmrStartId, setTimeout(function() {
                    return _class_private_method_get._(_this, _runDeferredReportHmrStart, runDeferredReportHmrStart).call(_this);
                }, self.__NEXT_HMR_TURBOPACK_REPORT_NOISY_NOOP_EVENTS ? 0 : TURBOPACK_HMR_START_DELAY_MS));
            }
        },
        {
            key: "onTurbopackMessage",
            value: function onTurbopackMessage(msg) {
                _class_private_method_get._(this, _onUpdate, onUpdate).call(this);
                var updatedModules = extractModulesFromTurbopackMessage(msg.data);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = updatedModules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _$module = _step.value;
                        _class_private_field_get._(this, _updatedModules).add(_$module);
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
        },
        {
            key: "onServerComponentChanges",
            value: function onServerComponentChanges() {
                _class_private_method_get._(this, _onUpdate, onUpdate).call(this);
            }
        },
        {
            key: "onReloadPage",
            value: function onReloadPage() {
                _class_private_method_get._(this, _onUpdate, onUpdate).call(this);
            }
        },
        {
            key: "onPageAddRemove",
            value: function onPageAddRemove() {
                _class_private_method_get._(this, _onUpdate, onUpdate).call(this);
            }
        },
        {
            /**
   * @returns `null` if the caller should ignore the update entirely. Returns an
   *   object with `hasUpdates: false` if the caller should report the end of
   *   the HMR in the browser console, but the HMR was a no-op.
   */ key: "onBuilt",
            value: function onBuilt() {
                var _$_class_private_field_get;
                // Check that we got *any* `TurbopackMessage`, even if
                // `updatedModules` is empty (not everything gets recorded there).
                //
                // There's also a case where `onBuilt` gets called before `onBuilding`,
                // which can happen during initial page load. Ignore that too!
                var hasUpdates = _class_private_field_get._(this, _lastUpdateMsSinceEpoch) != null && _class_private_field_get._(this, _startMsSinceEpoch) != null;
                if (!hasUpdates && !_class_private_field_get._(this, _reportedHmrStart)) {
                    // suppress the update entirely
                    _class_private_method_get._(this, _cancelDeferredReportHmrStart, cancelDeferredReportHmrStart).call(this);
                    return null;
                }
                _class_private_method_get._(this, _runDeferredReportHmrStart, runDeferredReportHmrStart).call(this);
                var result = {
                    hasUpdates: hasUpdates,
                    updatedModules: _class_private_field_get._(this, _updatedModules),
                    startMsSinceEpoch: _class_private_field_get._(this, _startMsSinceEpoch),
                    endMsSinceEpoch: (_$_class_private_field_get = _class_private_field_get._(this, _lastUpdateMsSinceEpoch)) !== null && _$_class_private_field_get !== void 0 ? _$_class_private_field_get : Date.now()
                };
                _class_private_field_set._(this, _updatedModules, new Set());
                _class_private_field_set._(this, _reportedHmrStart, false);
                return result;
            }
        }
    ]);
    return TurbopackHmr;
}();
function runDeferredReportHmrStart() {
    if (_class_private_field_get._(this, _deferredReportHmrStartId) != null) {
        console.log('[Fast Refresh] rebuilding');
        _class_private_field_set._(this, _reportedHmrStart, true);
        _class_private_method_get._(this, _cancelDeferredReportHmrStart, cancelDeferredReportHmrStart).call(this);
    }
}
function cancelDeferredReportHmrStart() {
    clearTimeout(_class_private_field_get._(this, _deferredReportHmrStartId));
    _class_private_field_set._(this, _deferredReportHmrStartId, undefined);
}
function onUpdate() {
    _class_private_method_get._(this, _runDeferredReportHmrStart, runDeferredReportHmrStart).call(this);
    _class_private_field_set._(this, _lastUpdateMsSinceEpoch, Date.now());
}
function extractModulesFromTurbopackMessage(data) {
    var updatedModules = new Set();
    var updates = Array.isArray(data) ? data : [
        data
    ];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = updates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var update = _step.value;
            // TODO this won't capture changes to CSS since they don't result in a "merged" update
            if (update.type !== 'partial' || update.instruction.type !== 'ChunkListUpdate' || update.instruction.merged === undefined) {
                continue;
            }
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = update.instruction.merged[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var mergedUpdate = _step1.value;
                    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                    try {
                        for(var _iterator2 = Object.keys(mergedUpdate.entries)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                            var name = _step2.value;
                            var res = /(.*)\s+[([].*/.exec(name);
                            if (res === null) {
                                continue;
                            }
                            updatedModules.add(res[1]);
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
    return updatedModules;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/hot-reloader/app/hot-reloader-app.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/// <reference types="webpack/module.d.ts" />
"use strict";
var _to_consumable_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    performFullReload: null,
    processMessage: null,
    waitForWebpackRuntimeHotUpdate: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function _default() {
        return HotReload;
    },
    performFullReload: function performFullReload1() {
        return performFullReload;
    },
    processMessage: function processMessage1() {
        return processMessage;
    },
    waitForWebpackRuntimeHotUpdate: function waitForWebpackRuntimeHotUpdate1() {
        return waitForWebpackRuntimeHotUpdate;
    }
});
var _interop_require_default = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
var _jsxruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _react = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _stripansi = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/strip-ansi/index.js [app-client] (ecmascript)"));
var _formatwebpackmessages = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/format-webpack-messages.js [app-client] (ecmascript)"));
var _shared = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/hot-reloader/shared.js [app-client] (ecmascript)");
var _nextdevtools = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/next-devtools/index.js (raw)");
var _replayssronlyerrors = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/errors/replay-ssr-only-errors.js [app-client] (ecmascript)");
var _appdevoverlayerrorboundary = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/app-dev-overlay-error-boundary.js [app-client] (ecmascript)");
var _useerrorhandler = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/errors/use-error-handler.js [app-client] (ecmascript)");
var _runtimeerrorhandler = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/runtime-error-handler.js [app-client] (ecmascript)");
var _websocket = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/hot-reloader/app/web-socket.js [app-client] (ecmascript)");
var _hotreloadertypes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/dev/hot-reloader-types.js [app-client] (ecmascript)");
var _navigationuntracked = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/navigation-untracked.js [app-client] (ecmascript)");
var _reporthmrlatency = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/report-hmr-latency.js [app-client] (ecmascript)"));
var _turbopackhotreloadercommon = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js [app-client] (ecmascript)");
var _approuterheaders = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
var _approuterinstance = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
var _invarianterror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
var _debugchannel = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/debug-channel.js [app-client] (ecmascript)");
var _client = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)");
var _appfindsourcemapurl = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
var createFromReadableStream = _client.createFromReadableStream;
var mostRecentCompilationHash = null;
var __nextDevClientId = Math.round(Math.random() * 100 + Date.now());
var reloading = false;
var webpackStartMsSinceEpoch = null;
var turbopackHmr = ("TURBOPACK compile-time truthy", 1) ? new _turbopackhotreloadercommon.TurbopackHmr() : "TURBOPACK unreachable";
var pendingHotUpdateWebpack = Promise.resolve();
var resolvePendingHotUpdateWebpack = function resolvePendingHotUpdateWebpack() {};
function setPendingHotUpdateWebpack() {
    pendingHotUpdateWebpack = new Promise(function(resolve) {
        resolvePendingHotUpdateWebpack = function resolvePendingHotUpdateWebpack() {
            resolve();
        };
    });
}
function waitForWebpackRuntimeHotUpdate() {
    return pendingHotUpdateWebpack;
}
// There is a newer version of the code available.
function handleAvailableHash(hash) {
    // Update last known compilation hash.
    mostRecentCompilationHash = hash;
}
/**
 * Is there a newer version of this code available?
 * For webpack: Check if the hash changed compared to __webpack_hash__
 * For Turbopack: Always true because it doesn't have __webpack_hash__
 */ function isUpdateAvailable() {
    if ("TURBOPACK compile-time truthy", 1) {
        return true;
    }
    //TURBOPACK unreachable
    ;
}
// Webpack disallows updates in other states.
function canApplyUpdates() {
    return module.hot.status() === 'idle';
}
function afterApplyUpdates(fn) {
    if (canApplyUpdates()) {
        fn();
    } else {
        function handler(status) {
            if (status === 'idle') {
                module.hot.removeStatusHandler(handler);
                fn();
            }
        }
        module.hot.addStatusHandler(handler);
    }
}
function performFullReload(err, sendMessage) {
    var stackTrace = err && (err.stack && err.stack.split('\n').slice(0, 5).join('\n') || err.message || err + '');
    sendMessage(JSON.stringify({
        event: 'client-full-reload',
        stackTrace: stackTrace,
        hadRuntimeError: !!_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError,
        dependencyChain: err ? err.dependencyChain : undefined
    }));
    if (reloading) return;
    reloading = true;
    window.location.reload();
}
// Attempt to update code on the fly, fall back to a hard reload.
function tryApplyUpdatesWebpack(sendMessage) {
    if (!isUpdateAvailable() || !canApplyUpdates()) {
        resolvePendingHotUpdateWebpack();
        _nextdevtools.dispatcher.onBuildOk();
        (0, _reporthmrlatency.default)(sendMessage, [], webpackStartMsSinceEpoch, Date.now());
        return;
    }
    function handleApplyUpdates(err, updatedModules) {
        if (err || _runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError || updatedModules == null) {
            if (err) {
                console.warn(_shared.REACT_REFRESH_FULL_RELOAD);
            } else if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                console.warn(_shared.REACT_REFRESH_FULL_RELOAD_FROM_ERROR);
            }
            performFullReload(err, sendMessage);
            return;
        }
        _nextdevtools.dispatcher.onBuildOk();
        if (isUpdateAvailable()) {
            // While we were updating, there was a new update! Do it again.
            tryApplyUpdatesWebpack(sendMessage);
            return;
        }
        _nextdevtools.dispatcher.onRefresh();
        resolvePendingHotUpdateWebpack();
        (0, _reporthmrlatency.default)(sendMessage, updatedModules, webpackStartMsSinceEpoch, Date.now());
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    // https://webpack.js.org/api/hot-module-replacement/#check
    module.hot.check(/* autoApply */ false).then(function(updatedModules) {
        if (updatedModules == null) {
            return null;
        }
        // We should always handle an update, even if updatedModules is empty (but
        // non-null) for any reason. That's what webpack would normally do:
        // https://github.com/webpack/webpack/blob/3aa6b6bc3a64/lib/hmr/HotModuleReplacement.runtime.js#L296-L298
        _nextdevtools.dispatcher.onBeforeRefresh();
        // https://webpack.js.org/api/hot-module-replacement/#apply
        return module.hot.apply();
    }).then(function(updatedModules) {
        handleApplyUpdates(null, updatedModules);
    }, function(err) {
        handleApplyUpdates(err, null);
    });
}
function processMessage(message, sendMessage, processTurbopackMessage, staticIndicatorState) {
    function handleErrors(errors) {
        // "Massage" webpack messages.
        var formatted = (0, _formatwebpackmessages.default)({
            errors: errors,
            warnings: []
        });
        // Only show the first error.
        _nextdevtools.dispatcher.onBuildError(formatted.errors[0]);
        // Also log them to the console.
        for(var i = 0; i < formatted.errors.length; i++){
            console.error((0, _stripansi.default)(formatted.errors[i]));
        }
        // Do not attempt to reload now.
        // We will reload on next success instead.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    function handleHotUpdate() {
        if ("TURBOPACK compile-time truthy", 1) {
            var hmrUpdate = turbopackHmr.onBuilt();
            if (hmrUpdate != null) {
                (0, _reporthmrlatency.default)(sendMessage, _to_consumable_array._(hmrUpdate.updatedModules), hmrUpdate.startMsSinceEpoch, hmrUpdate.endMsSinceEpoch, hmrUpdate.hasUpdates);
            }
            _nextdevtools.dispatcher.onBuildOk();
        } else //TURBOPACK unreachable
        ;
    }
    switch(message.type){
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.ISR_MANIFEST:
            {
                if ("TURBOPACK compile-time truthy", 1) {
                    staticIndicatorState.appIsrManifest = message.data;
                    // Handle the initial static indicator status on receiving the ISR
                    // manifest. Navigation is handled in an effect inside HotReload for
                    // pathname changes as we'll receive the updated manifest before
                    // usePathname triggers for a new value.
                    var isStatic = staticIndicatorState.pathname ? message.data[staticIndicatorState.pathname] : undefined;
                    _nextdevtools.dispatcher.onStaticIndicator(isStatic === undefined ? 'pending' : isStatic ? 'static' : 'dynamic');
                }
                break;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.BUILDING:
            {
                _nextdevtools.dispatcher.buildingIndicatorShow();
                if ("TURBOPACK compile-time truthy", 1) {
                    turbopackHmr.onBuilding();
                } else //TURBOPACK unreachable
                ;
                break;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.BUILT:
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.SYNC:
            {
                _nextdevtools.dispatcher.buildingIndicatorHide();
                if (message.hash) {
                    handleAvailableHash(message.hash);
                }
                var errors = message.errors, warnings = message.warnings;
                // Is undefined when it's a 'built' event
                if ('versionInfo' in message) _nextdevtools.dispatcher.onVersionInfo(message.versionInfo);
                if ('debug' in message && message.debug) _nextdevtools.dispatcher.onDebugInfo(message.debug);
                if ('devIndicator' in message) _nextdevtools.dispatcher.onDevIndicator(message.devIndicator);
                if ('devToolsConfig' in message) _nextdevtools.dispatcher.onDevToolsConfig(message.devToolsConfig);
                var hasErrors = Boolean(errors && errors.length);
                // Compilation with errors (e.g. syntax error or missing modules).
                if (hasErrors) {
                    sendMessage(JSON.stringify({
                        event: 'client-error',
                        errorCount: errors.length,
                        clientId: __nextDevClientId
                    }));
                    handleErrors(errors);
                    return;
                }
                var hasWarnings = Boolean(warnings && warnings.length);
                if (hasWarnings) {
                    sendMessage(JSON.stringify({
                        event: 'client-warning',
                        warningCount: warnings.length,
                        clientId: __nextDevClientId
                    }));
                    // Print warnings to the console.
                    var formattedMessages = (0, _formatwebpackmessages.default)({
                        warnings: warnings,
                        errors: []
                    });
                    for(var i = 0; i < formattedMessages.warnings.length; i++){
                        if (i === 5) {
                            console.warn('There were more warnings in other files.\n' + 'You can find a complete log in the terminal.');
                            break;
                        }
                        console.warn((0, _stripansi.default)(formattedMessages.warnings[i]));
                    }
                // No early return here as we need to apply modules in the same way between warnings only and compiles without warnings
                }
                sendMessage(JSON.stringify({
                    event: 'client-success',
                    clientId: __nextDevClientId
                }));
                if (message.type === _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.BUILT) {
                    handleHotUpdate();
                }
                return;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.TURBOPACK_CONNECTED:
            {
                processTurbopackMessage({
                    type: _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.TURBOPACK_CONNECTED,
                    data: {
                        sessionId: message.data.sessionId
                    }
                });
                break;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.TURBOPACK_MESSAGE:
            {
                turbopackHmr.onTurbopackMessage(message);
                _nextdevtools.dispatcher.onBeforeRefresh();
                processTurbopackMessage({
                    type: _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.TURBOPACK_MESSAGE,
                    data: message.data
                });
                if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                    console.warn(_shared.REACT_REFRESH_FULL_RELOAD_FROM_ERROR);
                    performFullReload(null, sendMessage);
                }
                _nextdevtools.dispatcher.onRefresh();
                break;
            }
        // TODO-APP: make server component change more granular
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.SERVER_COMPONENT_CHANGES:
            {
                turbopackHmr === null || turbopackHmr === void 0 ? void 0 : turbopackHmr.onServerComponentChanges();
                sendMessage(JSON.stringify({
                    event: 'server-component-reload-page',
                    clientId: __nextDevClientId,
                    hash: message.hash
                }));
                // Store the latest hash in a session cookie so that it's sent back to the
                // server with any subsequent requests.
                document.cookie = "".concat(_approuterheaders.NEXT_HMR_REFRESH_HASH_COOKIE, "=").concat(message.hash, ";path=/");
                if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError || document.documentElement.id === '__next_error__') {
                    if (reloading) return;
                    reloading = true;
                    return window.location.reload();
                }
                (0, _react.startTransition)(function() {
                    _approuterinstance.publicAppRouterInstance.hmrRefresh();
                    _nextdevtools.dispatcher.onRefresh();
                });
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                return;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.RELOAD_PAGE:
            {
                turbopackHmr === null || turbopackHmr === void 0 ? void 0 : turbopackHmr.onReloadPage();
                sendMessage(JSON.stringify({
                    event: 'client-reload-page',
                    clientId: __nextDevClientId
                }));
                if (reloading) return;
                reloading = true;
                return window.location.reload();
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.ADDED_PAGE:
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.REMOVED_PAGE:
            {
                turbopackHmr === null || turbopackHmr === void 0 ? void 0 : turbopackHmr.onPageAddRemove();
                // TODO-APP: potentially only refresh if the currently viewed page was added/removed.
                return _approuterinstance.publicAppRouterInstance.hmrRefresh();
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.SERVER_ERROR:
            {
                var errorJSON = message.errorJSON;
                if (errorJSON) {
                    var errorObject = JSON.parse(errorJSON);
                    var error = Object.defineProperty(new Error(errorObject.message), "__NEXT_ERROR_CODE", {
                        value: "E394",
                        enumerable: false,
                        configurable: true
                    });
                    error.stack = errorObject.stack;
                    handleErrors([
                        error
                    ]);
                }
                return;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.DEV_PAGES_MANIFEST_UPDATE:
            {
                return;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.DEVTOOLS_CONFIG:
            {
                _nextdevtools.dispatcher.onDevToolsConfig(message.data);
                return;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.REACT_DEBUG_CHUNK:
            {
                var requestId = message.requestId, chunk = message.chunk;
                var writer = (0, _debugchannel.getOrCreateDebugChannelReadableWriterPair)(requestId).writer;
                if (chunk) {
                    writer.ready.then(function() {
                        return writer.write(chunk);
                    }).catch(console.error);
                } else {
                    // A null chunk signals that no more chunks will be sent, which allows
                    // us to close the writer.
                    // TODO: Revisit this cleanup logic when we integrate the return channel
                    // that keeps the connection open to be able to lazily retrieve debug
                    // objects.
                    writer.ready.then(function() {
                        return writer.close();
                    }).catch(console.error);
                }
                return;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.REQUEST_CURRENT_ERROR_STATE:
            {
                var errorState = (0, _nextdevtools.getSerializedOverlayState)();
                var response = {
                    event: _hotreloadertypes.HMR_MESSAGE_SENT_TO_SERVER.MCP_ERROR_STATE_RESPONSE,
                    requestId: message.requestId,
                    errorState: errorState,
                    url: window.location.href
                };
                sendMessage(JSON.stringify(response));
                return;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.REQUEST_PAGE_METADATA:
            {
                var segmentTrieData = (0, _nextdevtools.getSegmentTrieData)();
                var response1 = {
                    event: _hotreloadertypes.HMR_MESSAGE_SENT_TO_SERVER.MCP_PAGE_METADATA_RESPONSE,
                    requestId: message.requestId,
                    segmentTrieData: segmentTrieData,
                    url: window.location.href
                };
                sendMessage(JSON.stringify(response1));
                return;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.CACHE_INDICATOR:
            {
                _nextdevtools.dispatcher.onCacheIndicator(message.state);
                return;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.ERRORS_TO_SHOW_IN_BROWSER:
            {
                createFromReadableStream(new ReadableStream({
                    start: function start(controller) {
                        controller.enqueue(message.serializedErrors);
                        controller.close();
                    }
                }), {
                    findSourceMapURL: _appfindsourcemapurl.findSourceMapURL
                }).then(function(param) {
                    var errors = param.errors, errorCodes = param.errorCodes;
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var error = _step.value;
                            var code = errorCodes.get(error);
                            if (code !== undefined) {
                                Object.defineProperty(error, '__NEXT_ERROR_CODE', {
                                    value: code,
                                    enumerable: false,
                                    configurable: true
                                });
                            }
                            console.error(error);
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
                }, function(err) {
                    console.error(Object.defineProperty(new Error('Failed to deserialize errors.', {
                        cause: err
                    }), "__NEXT_ERROR_CODE", {
                        value: "E946",
                        enumerable: false,
                        configurable: true
                    }));
                });
                return;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.MIDDLEWARE_CHANGES:
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.CLIENT_CHANGES:
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.SERVER_ONLY_CHANGES:
            break;
        default:
            {
                message;
            }
    }
}
function HotReload(param) {
    var children = param.children, globalError = param.globalError, webSocket = param.webSocket, staticIndicatorState = param.staticIndicatorState;
    (0, _useerrorhandler.useErrorHandler)(_nextdevtools.dispatcher.onUnhandledError, _nextdevtools.dispatcher.onUnhandledRejection);
    (0, _websocket.useWebSocketPing)(webSocket);
    // We don't want access of the pathname for the dev tools to trigger a dynamic
    // access (as the dev overlay will never be present in production).
    var pathname = (0, _navigationuntracked.useUntrackedPathname)();
    if ("TURBOPACK compile-time truthy", 1) {
        // this conditional is only for dead-code elimination which
        // isn't a runtime conditional only build-time so ignore hooks rule
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, _react.useEffect)(function() {
            if (!staticIndicatorState) {
                throw Object.defineProperty(new _invarianterror.InvariantError('Expected staticIndicatorState to be defined in dev mode.'), "__NEXT_ERROR_CODE", {
                    value: "E786",
                    enumerable: false,
                    configurable: true
                });
            }
            staticIndicatorState.pathname = pathname;
            if (staticIndicatorState.appIsrManifest) {
                var isStatic = pathname ? staticIndicatorState.appIsrManifest[pathname] : undefined;
                _nextdevtools.dispatcher.onStaticIndicator(isStatic === undefined ? 'pending' : isStatic ? 'static' : 'dynamic');
            }
        }, [
            pathname,
            staticIndicatorState
        ]);
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_appdevoverlayerrorboundary.AppDevOverlayErrorBoundary, {
        globalError: globalError,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_replayssronlyerrors.ReplaySsrOnlyErrors, {
                onBlockingError: _nextdevtools.dispatcher.openErrorOverlay
            }),
            children
        ]
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
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
        return AppRouter;
    }
});
var _interop_require_default = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
var _interop_require_wildcard = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
var _jsxruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _approutercontextsharedruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
var _routerreducertypes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
var _createhreffromurl = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
var _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
var _useactionqueue = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/use-action-queue.js [app-client] (ecmascript)");
var _committedstate = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/committed-state.js [app-client] (ecmascript)");
var _approuterannouncer = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-announcer.js [app-client] (ecmascript)");
var _redirectboundary = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)");
var _findheadincache = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/reducers/find-head-in-cache.js [app-client] (ecmascript)");
var _unresolvedthenable = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/unresolved-thenable.js [app-client] (ecmascript)");
var _removebasepath = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/remove-base-path.js [app-client] (ecmascript)");
var _hasbasepath = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
var _computechangedpath = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)");
var _navfailurehandler = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/nav-failure-handler.js [app-client] (ecmascript)");
var _approuterinstance = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
var _redirect = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)");
var _redirecterror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
var _links = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
var _rooterrorboundary = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/errors/root-error-boundary.js [app-client] (ecmascript)"));
var _globalerror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/builtin/global-error.js [app-client] (ecmascript)"));
var _boundarycomponents = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/framework/boundary-components.js [app-client] (ecmascript)");
var _deploymentid = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/deployment-id.js [app-client] (ecmascript)");
var globalMutable = {};
function HistoryUpdater(param) {
    var appRouterState = param.appRouterState;
    (0, _react.useInsertionEffect)(function() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        var tree = appRouterState.tree, pushRef = appRouterState.pushRef, canonicalUrl = appRouterState.canonicalUrl, renderedSearch = appRouterState.renderedSearch;
        var appHistoryState = {
            tree: tree,
            renderedSearch: renderedSearch
        };
        // TODO: Use Navigation API if available
        var historyState = _object_spread_props._(_object_spread._({}, pushRef.preserveCustomHistoryState ? window.history.state : {}), {
            // Identifier is shortened intentionally.
            // __NA is used to identify if the history entry can be handled by the app-router.
            // __N is used to identify if the history entry can be handled by the old router.
            __NA: true,
            __PRIVATE_NEXTJS_INTERNALS_TREE: appHistoryState
        });
        if (pushRef.pendingPush && // Skip pushing an additional history entry if the canonicalUrl is the same as the current url.
        // This mirrors the browser behavior for normal navigation.
        (0, _createhreffromurl.createHrefFromUrl)(new URL(window.location.href)) !== canonicalUrl) {
            // This intentionally mutates React state, pushRef is overwritten to ensure additional push/replace calls do not trigger an additional history entry.
            pushRef.pendingPush = false;
            window.history.pushState(historyState, '', canonicalUrl);
        } else {
            window.history.replaceState(historyState, '', canonicalUrl);
        }
        (0, _committedstate.setLastCommittedTree)(tree);
    }, [
        appRouterState
    ]);
    (0, _react.useEffect)(function() {
        // The Next-Url and the base tree may affect the result of a prefetch
        // task. Re-prefetch all visible links with the updated values. In most
        // cases, this will not result in any new network requests, only if
        // the prefetch result actually varies on one of these inputs.
        (0, _links.pingVisibleLinks)(appRouterState.nextUrl, appRouterState.tree);
    }, [
        appRouterState.nextUrl,
        appRouterState.tree
    ]);
    return null;
}
function copyNextJsInternalHistoryState(data) {
    if (data == null) data = {};
    var currentState = window.history.state;
    var __NA = currentState === null || currentState === void 0 ? void 0 : currentState.__NA;
    if (__NA) {
        data.__NA = __NA;
    }
    var __PRIVATE_NEXTJS_INTERNALS_TREE = currentState === null || currentState === void 0 ? void 0 : currentState.__PRIVATE_NEXTJS_INTERNALS_TREE;
    if (__PRIVATE_NEXTJS_INTERNALS_TREE) {
        data.__PRIVATE_NEXTJS_INTERNALS_TREE = __PRIVATE_NEXTJS_INTERNALS_TREE;
    }
    return data;
}
function Head(param) {
    var headCacheNode = param.headCacheNode;
    // If this segment has a `prefetchHead`, it's the statically prefetched data.
    // We should use that on initial render instead of `head`. Then we'll switch
    // to `head` when the dynamic response streams in.
    var head = headCacheNode !== null ? headCacheNode.head : null;
    var prefetchHead = headCacheNode !== null ? headCacheNode.prefetchHead : null;
    // If no prefetch data is available, then we go straight to rendering `head`.
    var resolvedPrefetchRsc = prefetchHead !== null ? prefetchHead : head;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    return (0, _react.useDeferredValue)(head, resolvedPrefetchRsc);
}
/**
 * The global router that wraps the application components.
 */ function Router(param) {
    var actionQueue = param.actionQueue, globalError = param.globalError, webSocket = param.webSocket, staticIndicatorState = param.staticIndicatorState;
    var state = (0, _useactionqueue.useActionQueue)(actionQueue);
    var canonicalUrl = state.canonicalUrl;
    // Add memoized pathname/query for useSearchParams and usePathname.
    var _ref = (0, _react.useMemo)(function() {
        var url = new URL(canonicalUrl, typeof window === 'undefined' ? 'http://n' : window.location.href);
        return {
            // This is turned into a readonly class in `useSearchParams`
            searchParams: url.searchParams,
            pathname: (0, _hasbasepath.hasBasePath)(url.pathname) ? (0, _removebasepath.removeBasePath)(url.pathname) : url.pathname
        };
    }, [
        canonicalUrl
    ]), searchParams = _ref.searchParams, pathname = _ref.pathname;
    if ("TURBOPACK compile-time truthy", 1) {
        var cache = state.cache, tree = state.tree;
        // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, _react.useEffect)(function() {
            // Add `window.nd` for debugging purposes.
            // This is not meant for use in applications as concurrent rendering will affect the cache/tree/router.
            // @ts-ignore this is for debugging
            window.nd = {
                router: _approuterinstance.publicAppRouterInstance,
                cache: cache,
                tree: tree
            };
        }, [
            cache,
            tree
        ]);
    }
    (0, _react.useEffect)(function() {
        var sourcePage = (0, _computechangedpath.extractSourcePageFromFlightRouterState)(state.tree);
        if (sourcePage !== undefined) {
            window.next.__internal_src_page = sourcePage;
        } else {
            delete window.next.__internal_src_page;
        }
    }, [
        state.tree
    ]);
    (0, _react.useEffect)(function() {
        var handlePageShow = // If the app is restored from bfcache, it's possible that
        // pushRef.mpaNavigation is true, which would mean that any re-render of this component
        // would trigger the mpa navigation logic again from the lines below.
        // This will restore the router to the initial state in the event that the app is restored from bfcache.
        function handlePageShow(event) {
            var _window_history_state;
            if (!event.persisted || !((_window_history_state = window.history.state) === null || _window_history_state === void 0 ? void 0 : _window_history_state.__PRIVATE_NEXTJS_INTERNALS_TREE)) {
                return;
            }
            // Clear the pendingMpaPath value so that a subsequent MPA navigation to the same URL can be triggered.
            // This is necessary because if the browser restored from bfcache, the pendingMpaPath would still be set to the value
            // of the last MPA navigation.
            globalMutable.pendingMpaPath = undefined;
            (0, _useactionqueue.dispatchAppRouterAction)({
                type: _routerreducertypes.ACTION_RESTORE,
                url: new URL(window.location.href),
                historyState: window.history.state.__PRIVATE_NEXTJS_INTERNALS_TREE
            });
        };
        window.addEventListener('pageshow', handlePageShow);
        return function() {
            window.removeEventListener('pageshow', handlePageShow);
        };
    }, []);
    (0, _react.useEffect)(function() {
        var handleUnhandledRedirect = // Ensure that any redirect errors that bubble up outside of the RedirectBoundary
        // are caught and handled by the router.
        function handleUnhandledRedirect(event) {
            var error = 'reason' in event ? event.reason : event.error;
            if ((0, _redirecterror.isRedirectError)(error)) {
                event.preventDefault();
                var url = (0, _redirect.getURLFromRedirectError)(error);
                var redirectType = (0, _redirect.getRedirectTypeFromError)(error);
                // TODO: This should access the router methods directly, rather than
                // go through the public interface.
                if (redirectType === 'push') {
                    _approuterinstance.publicAppRouterInstance.push(url, {});
                } else {
                    _approuterinstance.publicAppRouterInstance.replace(url, {});
                }
            }
        };
        window.addEventListener('error', handleUnhandledRedirect);
        window.addEventListener('unhandledrejection', handleUnhandledRedirect);
        return function() {
            window.removeEventListener('error', handleUnhandledRedirect);
            window.removeEventListener('unhandledrejection', handleUnhandledRedirect);
        };
    }, []);
    // When mpaNavigation flag is set do a hard navigation to the new url.
    // Infinitely suspend because we don't actually want to rerender any child
    // components with the new URL and any entangled state updates shouldn't
    // commit either (eg: useTransition isPending should stay true until the page
    // unloads).
    //
    // This is a side effect in render. Don't try this at home, kids. It's
    // probably safe because we know this is a singleton component and it's never
    // in <Offscreen>. At least I hope so. (It will run twice in dev strict mode,
    // but that's... fine?)
    var pushRef = state.pushRef;
    if (pushRef.mpaNavigation) {
        // if there's a re-render, we don't want to trigger another redirect if one is already in flight to the same URL
        if (globalMutable.pendingMpaPath !== canonicalUrl) {
            var location = window.location;
            if (pushRef.pendingPush) {
                location.assign(canonicalUrl);
            } else {
                location.replace(canonicalUrl);
            }
            globalMutable.pendingMpaPath = canonicalUrl;
        }
        // TODO-APP: Should we listen to navigateerror here to catch failed
        // navigations somehow? And should we call window.stop() if a SPA navigation
        // should interrupt an MPA one?
        // NOTE: This is intentionally using `throw` instead of `use` because we're
        // inside an externally mutable condition (pushRef.mpaNavigation), which
        // violates the rules of hooks.
        throw _unresolvedthenable.unresolvedThenable;
    }
    (0, _react.useEffect)(function() {
        var originalPushState = window.history.pushState.bind(window.history);
        var originalReplaceState = window.history.replaceState.bind(window.history);
        // Ensure the canonical URL in the Next.js Router is updated when the URL is changed so that `usePathname` and `useSearchParams` hold the pushed values.
        var applyUrlFromHistoryPushReplace = function applyUrlFromHistoryPushReplace(url) {
            var _window_history_state;
            var href = window.location.href;
            var appHistoryState = (_window_history_state = window.history.state) === null || _window_history_state === void 0 ? void 0 : _window_history_state.__PRIVATE_NEXTJS_INTERNALS_TREE;
            (0, _react.startTransition)(function() {
                (0, _useactionqueue.dispatchAppRouterAction)({
                    type: _routerreducertypes.ACTION_RESTORE,
                    url: new URL(url !== null && url !== void 0 ? url : href, href),
                    historyState: appHistoryState
                });
            });
        };
        /**
     * Patch pushState to ensure external changes to the history are reflected in the Next.js Router.
     * Ensures Next.js internal history state is copied to the new history entry.
     * Ensures usePathname and useSearchParams hold the newly provided url.
     */ window.history.pushState = function pushState(data, _unused, url) {
            // TODO: Warn when Navigation API is available (navigation.navigate() should be used)
            // Avoid a loop when Next.js internals trigger pushState/replaceState
            if ((data === null || data === void 0 ? void 0 : data.__NA) || (data === null || data === void 0 ? void 0 : data._N)) {
                return originalPushState(data, _unused, url);
            }
            data = copyNextJsInternalHistoryState(data);
            if (url) {
                applyUrlFromHistoryPushReplace(url);
            }
            return originalPushState(data, _unused, url);
        };
        /**
     * Patch replaceState to ensure external changes to the history are reflected in the Next.js Router.
     * Ensures Next.js internal history state is copied to the new history entry.
     * Ensures usePathname and useSearchParams hold the newly provided url.
     */ window.history.replaceState = function replaceState(data, _unused, url) {
            // TODO: Warn when Navigation API is available (navigation.navigate() should be used)
            // Avoid a loop when Next.js internals trigger pushState/replaceState
            if ((data === null || data === void 0 ? void 0 : data.__NA) || (data === null || data === void 0 ? void 0 : data._N)) {
                return originalReplaceState(data, _unused, url);
            }
            data = copyNextJsInternalHistoryState(data);
            if (url) {
                applyUrlFromHistoryPushReplace(url);
            }
            return originalReplaceState(data, _unused, url);
        };
        /**
     * Handle popstate event, this is used to handle back/forward in the browser.
     * By default dispatches ACTION_RESTORE, however if the history entry was not pushed/replaced by app-router it will reload the page.
     * That case can happen when the old router injected the history entry.
     */ var onPopState = function onPopState(event) {
            if (!event.state) {
                // TODO-APP: this case only happens when pushState/replaceState was called outside of Next.js. It should probably reload the page in this case.
                return;
            }
            // This case happens when the history entry was pushed by the `pages` router.
            if (!event.state.__NA) {
                window.location.reload();
                return;
            }
            // TODO-APP: Ideally the back button should not use startTransition as it should apply the updates synchronously
            // Without startTransition works if the cache is there for this path
            (0, _react.startTransition)(function() {
                (0, _approuterinstance.dispatchTraverseAction)(window.location.href, event.state.__PRIVATE_NEXTJS_INTERNALS_TREE);
            });
        };
        // Register popstate event to call onPopstate.
        window.addEventListener('popstate', onPopState);
        return function() {
            window.history.pushState = originalPushState;
            window.history.replaceState = originalReplaceState;
            window.removeEventListener('popstate', onPopState);
        };
    }, []);
    var cache1 = state.cache, tree1 = state.tree, nextUrl = state.nextUrl, focusAndScrollRef = state.focusAndScrollRef, previousNextUrl = state.previousNextUrl;
    var matchingHead = (0, _react.useMemo)(function() {
        return (0, _findheadincache.findHeadInCache)(cache1, tree1[1]);
    }, [
        cache1,
        tree1
    ]);
    // Add memoized pathParams for useParams.
    var pathParams = (0, _react.useMemo)(function() {
        return (0, _computechangedpath.getSelectedParams)(tree1);
    }, [
        tree1
    ]);
    // Create instrumented promises for navigation hooks (dev-only)
    // These are specially instrumented promises to show in the Suspense DevTools
    // Promises are cached outside of render to survive suspense retries.
    var instrumentedNavigationPromises = null;
    if ("TURBOPACK compile-time truthy", 1) {
        var createRootNavigationPromises = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/navigation-devtools.js [app-client] (ecmascript)").createRootNavigationPromises;
        instrumentedNavigationPromises = createRootNavigationPromises(tree1, pathname, searchParams, pathParams);
    }
    var layoutRouterContext = (0, _react.useMemo)(function() {
        return {
            parentTree: tree1,
            parentCacheNode: cache1,
            parentSegmentPath: null,
            parentParams: {},
            parentLoadingData: null,
            // This is the <Activity> "name" that shows up in the Suspense DevTools.
            // It represents the root of the app.
            debugNameContext: '/',
            // Root node always has `url`
            // Provided in AppTreeContext to ensure it can be overwritten in layout-router
            url: canonicalUrl,
            // Root segment is always active
            isActive: true
        };
    }, [
        tree1,
        cache1,
        canonicalUrl
    ]);
    var globalLayoutRouterContext = (0, _react.useMemo)(function() {
        return {
            tree: tree1,
            focusAndScrollRef: focusAndScrollRef,
            nextUrl: nextUrl,
            previousNextUrl: previousNextUrl
        };
    }, [
        tree1,
        focusAndScrollRef,
        nextUrl,
        previousNextUrl
    ]);
    var head;
    if (matchingHead !== null) {
        // The head is wrapped in an extra component so we can use
        // `useDeferredValue` to swap between the prefetched and final versions of
        // the head. (This is what LayoutRouter does for segment data, too.)
        //
        // The `key` is used to remount the component whenever the head moves to
        // a different segment.
        var _matchingHead = _sliced_to_array._(matchingHead, 3), headCacheNode = _matchingHead[0], headKey = _matchingHead[1], headKeyWithoutSearchParams = _matchingHead[2];
        head = /*#__PURE__*/ (0, _jsxruntime.jsx)(Head, {
            headCacheNode: headCacheNode
        }, typeof window === 'undefined' ? headKeyWithoutSearchParams : headKey);
    } else {
        head = null;
    }
    var content = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_redirectboundary.RedirectBoundary, {
        children: [
            head,
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_boundarycomponents.RootLayoutBoundary, {
                children: cache1.rsc
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_approuterannouncer.AppRouterAnnouncer, {
                tree: tree1
            })
        ]
    });
    if ("TURBOPACK compile-time truthy", 1) {
        // In development, we apply few error boundaries and hot-reloader:
        // - DevRootHTTPAccessFallbackBoundary: avoid using navigation API like notFound() in root layout
        // - HotReloader:
        //  - hot-reload the app when the code changes
        //  - render dev overlay
        //  - catch runtime errors and display global-error when necessary
        if (typeof window !== 'undefined') {
            var DevRootHTTPAccessFallbackBoundary = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/dev-root-http-access-fallback-boundary.js [app-client] (ecmascript)").DevRootHTTPAccessFallbackBoundary;
            content = /*#__PURE__*/ (0, _jsxruntime.jsx)(DevRootHTTPAccessFallbackBoundary, {
                children: content
            });
        }
        var HotReloader = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/hot-reloader/app/hot-reloader-app.js [app-client] (ecmascript)").default;
        content = /*#__PURE__*/ (0, _jsxruntime.jsx)(HotReloader, {
            globalError: globalError,
            webSocket: webSocket,
            staticIndicatorState: staticIndicatorState,
            children: content
        });
    } else //TURBOPACK unreachable
    ;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(HistoryUpdater, {
                appRouterState: state
            }),
            ("TURBOPACK compile-time truthy", 1) ? null : /*#__PURE__*/ "TURBOPACK unreachable",
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.NavigationPromisesContext.Provider, {
                value: instrumentedNavigationPromises,
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.PathParamsContext.Provider, {
                    value: pathParams,
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.PathnameContext.Provider, {
                        value: pathname,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.SearchParamsContext.Provider, {
                            value: searchParams,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.GlobalLayoutRouterContext.Provider, {
                                value: globalLayoutRouterContext,
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.AppRouterContext.Provider, {
                                    value: _approuterinstance.publicAppRouterInstance,
                                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
                                        value: layoutRouterContext,
                                        children: content
                                    })
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}
function AppRouter(param) {
    var actionQueue = param.actionQueue, globalErrorState = param.globalErrorState, webSocket = param.webSocket, staticIndicatorState = param.staticIndicatorState;
    (0, _navfailurehandler.useNavFailureHandler)();
    var router = /*#__PURE__*/ (0, _jsxruntime.jsx)(Router, {
        actionQueue: actionQueue,
        globalError: globalErrorState,
        webSocket: webSocket,
        staticIndicatorState: staticIndicatorState
    });
    // At the very top level, use the default GlobalError component as the final fallback.
    // When the app router itself fails, which means the framework itself fails, we show the default error.
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_rooterrorboundary.default, {
        errorComponent: _globalerror.default,
        children: router
    });
}
var runtimeStyles;
var runtimeStyleChanged;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function RuntimeStylesForWebpack() {
    var _ref;
    var _react_default_useState = _sliced_to_array._(_react.default.useState(0), 2), forceUpdate = _react_default_useState[1];
    var renderedStylesSize = (_ref = runtimeStyles === null || runtimeStyles === void 0 ? void 0 : runtimeStyles.size) !== null && _ref !== void 0 ? _ref : 0;
    (0, _react.useEffect)(function() {
        if (!runtimeStyles || !runtimeStyleChanged) return;
        var changed = function changed() {
            return forceUpdate(function(c) {
                return c + 1;
            });
        };
        runtimeStyleChanged.add(changed);
        if (renderedStylesSize !== runtimeStyles.size) {
            changed();
        }
        return function() {
            runtimeStyleChanged.delete(changed);
        };
    }, [
        renderedStylesSize,
        forceUpdate
    ]);
    var query = (0, _deploymentid.getAssetTokenQuery)();
    return _to_consumable_array._(runtimeStyles || []).map(function(href, i) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            rel: "stylesheet",
            href: "".concat(href).concat(query),
            // @ts-ignore
            precedence: "next"
        }, i);
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/create-initial-router-state.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _async_to_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_async_to_generator.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var _ts_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_ts_generator.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createInitialRouterState", {
    enumerable: true,
    get: function get() {
        return createInitialRouterState;
    }
});
var _createhreffromurl = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
var _computechangedpath = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)");
var _flightdatahelpers = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)");
var _pprnavigations = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
var _cache = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)");
var _types = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
var _bfcache = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/bfcache.js [app-client] (ecmascript)");
var _fetchserverresponse = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
var _optimisticroutes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/optimistic-routes.js [app-client] (ecmascript)");
function createInitialRouterState(param) {
    var navigatedAt = param.navigatedAt, initialRSCPayload = param.initialRSCPayload, initialFlightStreamForCache = param.initialFlightStreamForCache, location = param.location;
    var _ref;
    var initialCanonicalUrlParts = initialRSCPayload.c, initialFlightData = initialRSCPayload.f, initialRenderedSearch = initialRSCPayload.q, initialCouldBeIntercepted = initialRSCPayload.i, initialSupportsPerSegmentPrefetching = initialRSCPayload.S, initialStaleTime = initialRSCPayload.s, initialStaticStageByteLength = initialRSCPayload.l, initialHeadVaryParams = initialRSCPayload.h, initialRuntimePrefetchStream = initialRSCPayload.p, initialDynamicStaleTimeSeconds = initialRSCPayload.d;
    // When initialized on the server, the canonical URL is provided as an array of parts.
    // This is to ensure that when the RSC payload streamed to the client, crawlers don't interpret it
    // as a URL that should be crawled.
    var initialCanonicalUrl = initialCanonicalUrlParts.join('/');
    var normalizedFlightData = (0, _flightdatahelpers.getFlightDataPartsFromPath)(initialFlightData[0]);
    var initialTree = normalizedFlightData.tree, initialSeedData = normalizedFlightData.seedData, initialHead = normalizedFlightData.head;
    // For the SSR render, seed data should always be available (we only send back a `null` response
    // in the case of a `loading` segment, pre-PPR.)
    var canonicalUrl = // This is safe to do as canonicalUrl can't be rendered, it's only used to control the history updates in the useEffect further down in this file.
    location ? (0, _createhreffromurl.createHrefFromUrl)(location) : initialCanonicalUrl;
    // Convert the initial FlightRouterState into the RouteTree type.
    // NOTE: The metadataVaryPath isn't used for anything currently because the
    // head is embedded into the CacheNode tree, but eventually we'll lift it out
    // and store it on the top-level state object.
    //
    // TODO: For statically-generated-at-build-time HTML pages, the
    // FlightRouterState baked into the initial RSC payload won't have the
    // correct segment inlining hints (ParentInlinedIntoSelf, InlinedIntoChild)
    // because those are computed after the pre-render. The client will need to
    // fetch the correct hints from the route tree prefetch (/_tree) response
    // before acting on inlining decisions.
    var acc = {
        metadataVaryPath: null
    };
    var initialRouteTree = (0, _cache.convertRootFlightRouterStateToRouteTree)(initialTree, initialRenderedSearch, acc);
    var metadataVaryPath = acc.metadataVaryPath;
    var initialTask = (0, _pprnavigations.createInitialCacheNodeForHydration)(navigatedAt, initialRouteTree, initialSeedData, initialHead, (0, _bfcache.computeDynamicStaleAt)(navigatedAt, initialDynamicStaleTimeSeconds !== null && initialDynamicStaleTimeSeconds !== void 0 ? initialDynamicStaleTimeSeconds : _bfcache.UnknownDynamicStaleTime));
    // The following only applies in the browser (location !== null) since neither
    // route learning nor segment cache state persists from SSR to client.
    if (location !== null && metadataVaryPath !== null) {
        // Learn the route pattern so we can predict it for future navigations.
        (0, _optimisticroutes.discoverKnownRoute)(Date.now(), location.pathname, null, null, initialRouteTree, metadataVaryPath, initialCouldBeIntercepted, canonicalUrl, initialSupportsPerSegmentPrefetching, false // hasDynamicRewrite
        );
        // Write the initial seed data into the segment cache so subsequent
        // navigations to the initial page can serve cached segments instantly.
        if (initialSeedData !== null && initialStaleTime !== undefined) {
            if (initialStaticStageByteLength !== undefined && initialFlightStreamForCache != null) {
                // Partially static page — truncate the cloned Flight stream at the
                // static stage byte boundary, decode, and cache the static subset.
                (0, _fetchserverresponse.decodeStaticStage)(initialFlightStreamForCache, initialStaticStageByteLength, undefined).then(function(staticStageResponse) {
                    return _async_to_generator._(function() {
                        var now, staleAt;
                        return _ts_generator._(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    now = Date.now();
                                    return [
                                        4,
                                        (0, _cache.getStaleAt)(now, staticStageResponse.s)
                                    ];
                                case 1:
                                    staleAt = _state.sent();
                                    (0, _cache.writeStaticStageResponseIntoCache)(now, staticStageResponse.f, undefined, staticStageResponse.h, staleAt, initialTree, initialRenderedSearch, true // isResponsePartial
                                    );
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }).catch(function() {
                // The static stage processing failed. Not fatal — the page
                // rendered normally, we just won't write into the cache.
                });
            } else {
                // Fully static page — cache the entire decoded seed data as-is. We're
                // not using the initial response here (which would allow us to combine
                // the two branches) to avoid unnecessary decoding of the Flight data,
                // since we can just take the seed data that we already decoded during
                // hydration and write it into the cache directly.
                var now = Date.now();
                (0, _cache.getStaleAt)(now, initialStaleTime).then(function(staleAt) {
                    (0, _cache.writeStaticStageResponseIntoCache)(now, initialFlightData, undefined, initialHeadVaryParams, staleAt, initialTree, initialRenderedSearch, false // isResponsePartial
                    );
                }).catch(function() {
                // The static stage processing failed. Not fatal — the page
                // rendered normally, we just won't write into the cache.
                });
                // Cancel the stream clone — fully static path doesn't need it.
                initialFlightStreamForCache === null || initialFlightStreamForCache === void 0 ? void 0 : initialFlightStreamForCache.cancel();
            }
        } else {
            // No caching — cancel the unused stream clone.
            initialFlightStreamForCache === null || initialFlightStreamForCache === void 0 ? void 0 : initialFlightStreamForCache.cancel();
        }
        // If the initial RSC payload includes an embedded runtime prefetch stream,
        // decode it and write the runtime data into the segment cache. This allows
        // subsequent navigations to serve runtime-prefetchable content from cache
        // without a separate prefetch request.
        if (initialRuntimePrefetchStream != null) {
            (0, _cache.processRuntimePrefetchStream)(Date.now(), initialRuntimePrefetchStream, initialTree, initialRenderedSearch).then(function(processed) {
                if (processed !== null) {
                    (0, _cache.writeDynamicRenderResponseIntoCache)(Date.now(), _types.FetchStrategy.PPRRuntime, processed.flightDatas, processed.buildId, processed.isResponsePartial, processed.headVaryParams, processed.staleAt, processed.navigationSeed, null);
                }
            }).catch(function() {
            // Runtime prefetch cache write failed. Not fatal — the page rendered
            // normally, we just won't cache runtime data.
            });
        }
    }
    // NOTE: We intentionally don't check if any data needs to be fetched from the
    // server. We assume the initial hydration payload is sufficient to render
    // the page.
    //
    // The completeness of the initial data is an important property that we rely
    // on as a last-ditch mechanism for recovering the app; we must always be able
    // to reload a fresh HTML document to get to a consistent state.
    //
    // In the future, there may be cases where the server intentionally sends
    // partial data and expects the client to fill in the rest, in which case this
    // logic may change. (There already is a similar case where the server sends
    // _no_ hydration data in the HTML document at all, and the client fetches it
    // separately, but that's different because we still end up hydrating with a
    // complete tree.)
    var initialState = {
        tree: initialTask.route,
        cache: initialTask.node,
        pushRef: {
            pendingPush: false,
            mpaNavigation: false,
            // First render needs to preserve the previous window.history.state
            // to avoid it being overwritten on navigation back/forward with MPA Navigation.
            preserveCustomHistoryState: true
        },
        focusAndScrollRef: {
            scrollRef: null,
            forceScroll: false,
            onlyHashChange: false,
            hashFragment: null
        },
        canonicalUrl: canonicalUrl,
        renderedSearch: initialRenderedSearch,
        // the || operator is intentional, the pathname can be an empty string
        nextUrl: (_ref = (0, _computechangedpath.extractPathFromFlightRouterState)(initialTree) || (location === null || location === void 0 ? void 0 : location.pathname)) !== null && _ref !== void 0 ? _ref : null,
        previousNextUrl: null,
        debugInfo: null
    };
    return initialState;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-link-gc.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _to_consumable_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "linkGc", {
    enumerable: true,
    get: function get() {
        return linkGc;
    }
});
function linkGc() {
    // TODO-APP: Remove this logic when Float has GC built-in in development.
    if ("TURBOPACK compile-time truthy", 1) {
        var callback = function callback(mutationList) {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = mutationList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var mutation = _step.value;
                    if (mutation.type === 'childList') {
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = mutation.addedNodes[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var node = _step1.value;
                                if ('tagName' in node && node.tagName === 'LINK') {
                                    var _link_dataset_precedence;
                                    var link = node;
                                    if ((_link_dataset_precedence = link.dataset.precedence) === null || _link_dataset_precedence === void 0 ? void 0 : _link_dataset_precedence.startsWith('next')) {
                                        var href = link.getAttribute('href');
                                        if (href) {
                                            var _href_split = _sliced_to_array._(href.split('?v=', 2), 2), resource = _href_split[0], version = _href_split[1];
                                            if (version) {
                                                var currentOrigin = window.location.origin;
                                                var allLinks = _to_consumable_array._(document.querySelectorAll('link[href^="' + resource + '"]')).concat(// It's possible that the resource is a full URL or only pathname,
                                                // so we need to remove the alternative href as well.
                                                _to_consumable_array._(document.querySelectorAll('link[href^="' + (resource.startsWith(currentOrigin) ? resource.slice(currentOrigin.length) : currentOrigin + resource) + '"]')));
                                                var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                                                try {
                                                    var _loop = function() {
                                                        var otherLink = _step2.value;
                                                        var _otherLink_dataset_precedence;
                                                        if ((_otherLink_dataset_precedence = otherLink.dataset.precedence) === null || _otherLink_dataset_precedence === void 0 ? void 0 : _otherLink_dataset_precedence.startsWith('next')) {
                                                            var otherHref = otherLink.getAttribute('href');
                                                            if (otherHref) {
                                                                var _otherHref_split = _sliced_to_array._(otherHref.split('?v=', 2), 2), otherVersion = _otherHref_split[1];
                                                                if (!otherVersion || +otherVersion < +version) {
                                                                    // Delay the removal of the stylesheet to avoid FOUC
                                                                    // caused by `@font-face` rules, as they seem to be
                                                                    // a couple of ticks delayed between the old and new
                                                                    // styles being swapped even if the font is cached.
                                                                    setTimeout(function() {
                                                                        otherLink.remove();
                                                                    }, 5);
                                                                    var preloadLink = document.querySelector('link[rel="preload"][as="style"][href="'.concat(otherHref, '"]'));
                                                                    if (preloadLink) {
                                                                        preloadLink.remove();
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    };
                                                    for(var _iterator2 = allLinks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true)_loop();
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
                                            }
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
        };
        // Create an observer instance linked to the callback function
        var observer = new MutationObserver(callback);
        observer.observe(document.head, {
            childList: true
        });
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _async_to_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_async_to_generator.cjs [app-client] (ecmascript)");
var _object_spread = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_object_spread.cjs [app-client] (ecmascript)");
var _object_spread_props = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_object_spread_props.cjs [app-client] (ecmascript)");
var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var _ts_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_ts_generator.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hydrate", {
    enumerable: true,
    get: function get() {
        return hydrate;
    }
});
var _interop_require_default = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
var _jsxruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-globals.js [app-client] (ecmascript)");
var _client = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react-dom/client.js [app-client] (ecmascript)"));
var _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _client1 = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)");
var _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)");
var _onrecoverableerror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js [app-client] (ecmascript)");
var _errorboundarycallbacks = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/react-client-callbacks/error-boundary-callbacks.js [app-client] (ecmascript)");
var _appcallserver = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
var _appfindsourcemapurl = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
var _approuterinstance = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
var _approuter = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)"));
var _createinitialrouterstate = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/create-initial-router-state.js [app-client] (ecmascript)");
var _approutercontextsharedruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
var _flightdatahelpers = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)");
var _deploymentid = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/deployment-id.js [app-client] (ecmascript)");
var _navigationbuildid = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/navigation-build-id.js [app-client] (ecmascript)");
/// <reference types="react-dom/experimental" />
var createFromReadableStream = _client1.createFromReadableStream;
var createFromFetch = _client1.createFromFetch;
var appElement = document;
// Instant Navigation Testing API: captured once at module init. When truthy,
// this is the fetch promise for the static RSC payload (set by an injected
// <script> tag in the static shell HTML).
var instantTestStaticFetch = self.__next_instant_test ? self.__next_instant_test : undefined;
var encoder = new TextEncoder();
var initialServerDataBuffer = undefined;
var initialServerDataWriter = undefined;
var initialServerDataLoaded = false;
var initialServerDataFlushed = false;
var initialFormStateData = null;
function nextServerDataCallback(seg) {
    if (seg[0] === 0) {
        initialServerDataBuffer = [];
    } else if (seg[0] === 1) {
        if (!initialServerDataBuffer) throw Object.defineProperty(new Error('Unexpected server data: missing bootstrap script.'), "__NEXT_ERROR_CODE", {
            value: "E18",
            enumerable: false,
            configurable: true
        });
        if (initialServerDataWriter) {
            initialServerDataWriter.enqueue(encoder.encode(seg[1]));
        } else {
            initialServerDataBuffer.push(seg[1]);
        }
    } else if (seg[0] === 2) {
        initialFormStateData = seg[1];
    } else if (seg[0] === 3) {
        if (!initialServerDataBuffer) throw Object.defineProperty(new Error('Unexpected server data: missing bootstrap script.'), "__NEXT_ERROR_CODE", {
            value: "E18",
            enumerable: false,
            configurable: true
        });
        // Decode the base64 string back to binary data.
        var binaryString = atob(seg[1]);
        var decodedChunk = new Uint8Array(binaryString.length);
        for(var i = 0; i < binaryString.length; i++){
            decodedChunk[i] = binaryString.charCodeAt(i);
        }
        if (initialServerDataWriter) {
            initialServerDataWriter.enqueue(decodedChunk);
        } else {
            initialServerDataBuffer.push(decodedChunk);
        }
    }
}
function isStreamErrorOrUnfinished(ctr) {
    // If `desiredSize` is null, it means the stream is closed or errored. If it is lower than 0, the stream is still unfinished.
    return ctr.desiredSize === null || ctr.desiredSize < 0;
}
// There might be race conditions between `nextServerDataRegisterWriter` and
// `DOMContentLoaded`. The former will be called when React starts to hydrate
// the root, the latter will be called when the DOM is fully loaded.
// For streaming, the former is called first due to partial hydration.
// For non-streaming, the latter can be called first.
// Hence, we use two variables `initialServerDataLoaded` and
// `initialServerDataFlushed` to make sure the writer will be closed and
// `initialServerDataBuffer` will be cleared in the right time.
function nextServerDataRegisterWriter(ctr) {
    if (initialServerDataBuffer) {
        initialServerDataBuffer.forEach(function(val) {
            ctr.enqueue(typeof val === 'string' ? encoder.encode(val) : val);
        });
        if (initialServerDataLoaded && !initialServerDataFlushed) {
            // Instant Navigation Testing API: don't close or error the inline
            // Flight stream. The static shell has no inline Flight data, so the
            // stream is empty. Closing it would cause React to log an error about
            // missing data. Leaving it open lets React treat any holes as
            // "still suspended." Hydration uses the separately fetched RSC payload
            // (self.__next_instant_test), not this stream.
            if (isStreamErrorOrUnfinished(ctr)) {
                if (!instantTestStaticFetch) {
                    ctr.error(Object.defineProperty(new Error('The connection to the page was unexpectedly closed, possibly due to the stop button being clicked, loss of Wi-Fi, or an unstable internet connection.'), "__NEXT_ERROR_CODE", {
                        value: "E117",
                        enumerable: false,
                        configurable: true
                    }));
                }
            } else {
                ctr.close();
            }
            initialServerDataFlushed = true;
            initialServerDataBuffer = undefined;
        }
    }
    initialServerDataWriter = ctr;
}
// When `DOMContentLoaded`, we can close all pending writers to finish hydration.
var DOMContentLoaded = function DOMContentLoaded() {
    if (initialServerDataWriter && !initialServerDataFlushed) {
        initialServerDataWriter.close();
        initialServerDataFlushed = true;
        initialServerDataBuffer = undefined;
    }
    initialServerDataLoaded = true;
};
// It's possible that the DOM is already loaded.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
} else {
    // Delayed in marco task to ensure it's executed later than hydration
    setTimeout(DOMContentLoaded);
}
var nextServerDataLoadingGlobal = self.__next_f = self.__next_f || [];
// Consume all buffered chunks and clear the global data array right after to release memory.
// Otherwise it will be retained indefinitely.
nextServerDataLoadingGlobal.forEach(nextServerDataCallback);
nextServerDataLoadingGlobal.length = 0;
// Patch its push method so subsequent chunks are handled (but not actually pushed to the array).
nextServerDataLoadingGlobal.push = nextServerDataCallback;
var readable = new ReadableStream({
    start: function start(controller) {
        nextServerDataRegisterWriter(controller);
    }
});
if ("TURBOPACK compile-time truthy", 1) {
    // @ts-expect-error
    readable.name = 'hydration';
}
// When Cache Components is enabled, tee the inlined Flight stream so we can
// truncate a clone at the static stage byte boundary and cache it. We don't
// know if `l` is present until React decodes the payload, so always tee and
// cancel the clone if not needed.
var initialFlightStreamForCache = null;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
{
    var _readable_tee, forReact, forCache;
/*TURBOPACK member replacement*/ }
var debugChannel;
if (("TURBOPACK compile-time value", "1") && ("TURBOPACK compile-time value", true) && typeof window !== 'undefined') {
    var createDebugChannel = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/debug-channel.js [app-client] (ecmascript)").createDebugChannel;
    debugChannel = createDebugChannel(undefined);
}
var initialServerResponse;
if (instantTestStaticFetch) {
    // Instant Navigation Testing API: hydrate from the static RSC payload
    // fetch kicked off by an injected <script> tag, instead of the inline
    // Flight data (which is not present in the static shell).
    initialServerResponse = Promise.resolve(createFromFetch(instantTestStaticFetch, {
        callServer: _appcallserver.callServer,
        findSourceMapURL: _appfindsourcemapurl.findSourceMapURL,
        debugChannel: debugChannel,
        // The static fetch response is a partial stream (static-only Flight
        // data with no dynamic content). Allow it to close without error so
        // React treats dynamic holes as still-suspended rather than
        // triggering error recovery.
        unstable_allowPartialStream: true
    })).then(function(initialRSCPayload) {
        return _async_to_generator._(function() {
            var _;
            return _ts_generator._(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ = (0, _flightdatahelpers.createInitialRSCPayloadFromFallbackPrerender);
                        return [
                            4,
                            instantTestStaticFetch
                        ];
                    case 1:
                        return [
                            2,
                            _.apply(void 0, [
                                _state.sent(),
                                initialRSCPayload
                            ])
                        ];
                }
            });
        })();
    });
} else if (window.__NEXT_CLIENT_RESUME) {
    var clientResumeFetch = window.__NEXT_CLIENT_RESUME;
    initialServerResponse = Promise.resolve(createFromFetch(clientResumeFetch, {
        callServer: _appcallserver.callServer,
        findSourceMapURL: _appfindsourcemapurl.findSourceMapURL,
        debugChannel: debugChannel
    })).then(function(fallbackInitialRSCPayload) {
        return _async_to_generator._(function() {
            var _;
            return _ts_generator._(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ = (0, _flightdatahelpers.createInitialRSCPayloadFromFallbackPrerender);
                        return [
                            4,
                            clientResumeFetch
                        ];
                    case 1:
                        return [
                            2,
                            _.apply(void 0, [
                                _state.sent(),
                                fallbackInitialRSCPayload
                            ])
                        ];
                }
            });
        })();
    });
} else {
    initialServerResponse = createFromReadableStream(readable, {
        callServer: _appcallserver.callServer,
        findSourceMapURL: _appfindsourcemapurl.findSourceMapURL,
        debugChannel: debugChannel,
        startTime: 0
    });
}
function ServerRoot(param) {
    var initialRSCPayload = param.initialRSCPayload, actionQueue = param.actionQueue, webSocket = param.webSocket, staticIndicatorState = param.staticIndicatorState;
    var router = /*#__PURE__*/ (0, _jsxruntime.jsx)(_approuter.default, {
        actionQueue: actionQueue,
        globalErrorState: initialRSCPayload.G,
        webSocket: webSocket,
        staticIndicatorState: staticIndicatorState
    });
    if (("TURBOPACK compile-time value", "development") === 'development' && initialRSCPayload.m) {
        // We provide missing slot information in a context provider only during development
        // as we log some additional information about the missing slots in the console.
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.MissingSlotContext, {
            value: initialRSCPayload.m,
            children: router
        });
    }
    return router;
}
var StrictModeIfEnabled = ("TURBOPACK compile-time truthy", 1) ? _react.default.StrictMode : "TURBOPACK unreachable";
function Root(param) {
    var children = param.children;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return children;
}
var enableTransitionIndicator = ("TURBOPACK compile-time value", false);
function noDefaultTransitionIndicator() {
    return function() {};
}
var reactRootOptions = {
    onDefaultTransitionIndicator: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : noDefaultTransitionIndicator,
    onRecoverableError: _onrecoverableerror.onRecoverableError,
    onCaughtError: _errorboundarycallbacks.onCaughtError,
    onUncaughtError: _errorboundarycallbacks.onUncaughtError
};
function hydrate(instrumentationHooks, assetPrefix) {
    return _async_to_generator._(function() {
        var staticIndicatorState, webSocket, createWebSocket, initialRSCPayload, initialTimestamp, actionQueue, reactEl, element, RootLevelDevOverlayElement, linkGc;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    if ("TURBOPACK compile-time truthy", 1) {
                        createWebSocket = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/dev/hot-reloader/app/web-socket.js [app-client] (ecmascript)").createWebSocket;
                        staticIndicatorState = {
                            pathname: null,
                            appIsrManifest: null
                        };
                        webSocket = createWebSocket(assetPrefix, staticIndicatorState);
                    }
                    return [
                        4,
                        initialServerResponse
                    ];
                case 1:
                    initialRSCPayload = _state.sent();
                    // setNavigationBuildId should be called only once, during JS initialization
                    // and before any components have hydrated.
                    if (initialRSCPayload.b) {
                        (0, _navigationbuildid.setNavigationBuildId)(initialRSCPayload.b);
                    } else {
                        (0, _navigationbuildid.setNavigationBuildId)((0, _deploymentid.getDeploymentId)());
                    }
                    initialTimestamp = Date.now();
                    actionQueue = (0, _approuterinstance.createMutableActionQueue)((0, _createinitialrouterstate.createInitialRouterState)({
                        navigatedAt: initialTimestamp,
                        initialRSCPayload: initialRSCPayload,
                        initialFlightStreamForCache: initialFlightStreamForCache,
                        location: window.location
                    }), instrumentationHooks);
                    reactEl = /*#__PURE__*/ (0, _jsxruntime.jsx)(StrictModeIfEnabled, {
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_headmanagercontextsharedruntime.HeadManagerContext.Provider, {
                            value: {
                                appDir: true
                            },
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Root, {
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(ServerRoot, {
                                    initialRSCPayload: initialRSCPayload,
                                    actionQueue: actionQueue,
                                    webSocket: webSocket,
                                    staticIndicatorState: staticIndicatorState
                                })
                            })
                        })
                    });
                    if (document.documentElement.id === '__next_error__') {
                        element = reactEl;
                        // Server rendering failed, fall back to client-side rendering
                        if ("TURBOPACK compile-time truthy", 1) {
                            RootLevelDevOverlayElement = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/client-entry.js [app-client] (ecmascript)").RootLevelDevOverlayElement;
                            // Note this won't cause hydration mismatch because we are doing CSR w/o hydration
                            element = /*#__PURE__*/ (0, _jsxruntime.jsx)(RootLevelDevOverlayElement, {
                                children: element
                            });
                        }
                        _client.default.createRoot(appElement, reactRootOptions).render(element);
                    } else {
                        _react.default.startTransition(function() {
                            _client.default.hydrateRoot(appElement, reactEl, _object_spread_props._(_object_spread._({}, reactRootOptions), {
                                formState: initialFormStateData
                            }));
                        });
                    }
                    // TODO-APP: Remove this logic when Float has GC built-in in development.
                    if ("TURBOPACK compile-time truthy", 1) {
                        linkGc = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-link-gc.js [app-client] (ecmascript)").linkGc;
                        linkGc();
                    }
                    return [
                        2
                    ];
            }
        });
    })();
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-next-turbopack.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/register-deployment-id-global.js [app-client] (ecmascript)");
var _appbootstrap = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-bootstrap.js [app-client] (ecmascript)");
var _onrecoverableerror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js [app-client] (ecmascript)");
window.next.turbopack = true;
self.__webpack_hash__ = '';
// eslint-disable-next-line @next/internal/typechecked-require
var instrumentationHooks = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/require-instrumentation-client.js [app-client] (ecmascript)");
(0, _appbootstrap.appBootstrap)(function(assetPrefix) {
    var hydrate = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-index.js [app-client] (ecmascript)").hydrate;
    try {
        hydrate(instrumentationHooks, assetPrefix);
    } finally{
        if ("TURBOPACK compile-time truthy", 1) {
            var enableCacheIndicator = ("TURBOPACK compile-time value", false);
            var getOwnerStack = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/errors/stitched-error.js [app-client] (ecmascript)").getOwnerStack;
            var renderAppDevOverlay = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/next-devtools/index.js (raw)").renderAppDevOverlay;
            renderAppDevOverlay(getOwnerStack, _onrecoverableerror.isRecoverableError, enableCacheIndicator);
        }
    }
});
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
]);

//# sourceMappingURL=07ob_next_dist_client_0v832fs._.js.map