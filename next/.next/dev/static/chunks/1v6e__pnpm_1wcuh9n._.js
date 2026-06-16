(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "disableSmoothScrollDuringRouteTransition", {
    enumerable: true,
    get: function get() {
        return disableSmoothScrollDuringRouteTransition;
    }
});
var _warnonce = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
function disableSmoothScrollDuringRouteTransition(fn) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    // if only the hash is changed, we don't need to disable smooth scrolling
    // we only care to prevent smooth scrolling when navigating to a new page to avoid jarring UX
    if (options.onlyHashChange) {
        fn();
        return;
    }
    var htmlElement = document.documentElement;
    var hasDataAttribute = htmlElement.dataset.scrollBehavior === 'smooth';
    if (!hasDataAttribute) {
        // Warn if smooth scrolling is detected but no data attribute is present
        if (("TURBOPACK compile-time value", "development") === 'development' && getComputedStyle(htmlElement).scrollBehavior === 'smooth') {
            (0, _warnonce.warnOnce)('Detected `scroll-behavior: smooth` on the `<html>` element. To disable smooth scrolling during route transitions, ' + 'add `data-scroll-behavior="smooth"` to your <html> element. ' + 'Learn more: https://nextjs.org/docs/messages/missing-data-scroll-behavior');
        }
        // No smooth scrolling configured, run directly without style manipulation
        fn();
        return;
    }
    // Proceed with temporarily disabling smooth scrolling
    var existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'auto';
    if (!options.dontForceLayout) {
        // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
        // Otherwise it will not pickup the change in scrollBehavior
        // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
        htmlElement.getClientRects();
    }
    fn();
    htmlElement.style.scrollBehavior = existing;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/bfcache-state-manager.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useRouterBFCache", {
    enumerable: true,
    get: function get() {
        return useRouterBFCache;
    }
});
var _react = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// When the flag is disabled, only track the currently active tree
var MAX_BF_CACHE_ENTRIES = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1;
function useRouterBFCache(activeTree, activeCacheNode, activeStateKey) {
    // The currently active entry. The entries form a linked list, sorted in
    // order of most recently active. This allows us to reuse parts of the list
    // without cloning, unless there's a reordering or removal.
    // TODO: Once we start tracking back/forward history at each route level,
    // we should use the history order instead. In other words, when traversing
    // to an existing entry as a result of a popstate event, we should maintain
    // the existing order instead of moving it to the front of the list. I think
    // an initial implementation of this could be to pass an incrementing id
    // to history.pushState/replaceState, then use that here for ordering.
    var _ref = _sliced_to_array._((0, _react.useState)(function() {
        var initialEntry = {
            tree: activeTree,
            cacheNode: activeCacheNode,
            stateKey: activeStateKey,
            next: null
        };
        return initialEntry;
    }), 2), prevActiveEntry = _ref[0], setPrevActiveEntry = _ref[1];
    if (prevActiveEntry.tree === activeTree) {
        // Fast path. The active tree hasn't changed, so we can reuse the
        // existing state.
        return prevActiveEntry;
    }
    // The route tree changed. Note that this doesn't mean that the tree changed
    // *at this level* — the change may be due to a child route. Either way, we
    // need to either add or update the router tree in the bfcache.
    //
    // The rest of the code looks more complicated than it actually is because we
    // can't mutate the state in place; we have to copy-on-write.
    // Create a new entry for the active cache key. This is the head of the new
    // linked list.
    var newActiveEntry = {
        tree: activeTree,
        cacheNode: activeCacheNode,
        stateKey: activeStateKey,
        next: null
    };
    // We need to append the old list onto the new list. If the head of the new
    // list was already present in the cache, then we'll need to clone everything
    // that came before it. Then we can reuse the rest.
    var n = 1;
    var oldEntry = prevActiveEntry;
    var clonedEntry = newActiveEntry;
    while(oldEntry !== null && n < MAX_BF_CACHE_ENTRIES){
        if (oldEntry.stateKey === activeStateKey) {
            // Fast path. This entry in the old list that corresponds to the key that
            // is now active. We've already placed a clone of this entry at the front
            // of the new list. We can reuse the rest of the old list without cloning.
            // NOTE: We don't need to worry about eviction in this case because we
            // haven't increased the size of the cache, and we assume the max size
            // is constant across renders. If we were to change it to a dynamic limit,
            // then the implementation would need to account for that.
            clonedEntry.next = oldEntry.next;
            break;
        } else {
            // Clone the entry and append it to the list.
            n++;
            var entry = {
                tree: oldEntry.tree,
                cacheNode: oldEntry.cacheNode,
                stateKey: oldEntry.stateKey,
                next: null
            };
            clonedEntry.next = entry;
            clonedEntry = entry;
        }
        oldEntry = oldEntry.next;
    }
    setPrevActiveEntry(newActiveEntry);
    return newActiveEntry;
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/layout-router.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
var _call_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_call_super.cjs [app-client] (ecmascript)");
var _class_call_check = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_create_class.cjs [app-client] (ecmascript)");
var _define_property = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_define_property.cjs [app-client] (ecmascript)");
var _inherits = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_inherits.cjs [app-client] (ecmascript)");
var _instanceof = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_instanceof.cjs [app-client] (ecmascript)");
var _object_spread = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_object_spread.cjs [app-client] (ecmascript)");
var _object_spread_props = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_object_spread_props.cjs [app-client] (ecmascript)");
var _to_consumable_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    LoadingBoundaryProvider: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    LoadingBoundaryProvider: function LoadingBoundaryProvider1() {
        return LoadingBoundaryProvider;
    },
    /**
 * OuterLayoutRouter handles the current segment as well as <Offscreen> rendering of other segments.
 * It can be rendered next to each other with a different `parallelRouterKey`, allowing for Parallel routes.
 */ default: function _default() {
        return OuterLayoutRouter;
    }
});
var _interop_require_default = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
var _interop_require_wildcard = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
var _jsxruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
var _approutercontextsharedruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
var _unresolvedthenable = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/unresolved-thenable.js [app-client] (ecmascript)");
var _errorboundary = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
var _disablesmoothscroll = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)");
var _redirectboundary = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)");
var _errorboundary1 = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)");
var _createroutercachekey = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
var _bfcachestatemanager = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/bfcache-state-manager.js [app-client] (ecmascript)");
var _apppaths = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-client] (ecmascript)");
var _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
var _routeparams = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
var _pprnavigations = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
var enableNewScrollHandler = ("TURBOPACK compile-time value", false);
var __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _reactdom.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (typeof window === 'undefined') return null;
    // __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode is null during module init.
    // We need to lazily reference it.
    var internal_reactDOMfindDOMNode = __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode;
    return internal_reactDOMfindDOMNode(instance);
}
var rectProperties = [
    'bottom',
    'height',
    'left',
    'right',
    'top',
    'width',
    'x',
    'y'
];
/**
 * Check if a HTMLElement is hidden or fixed/sticky position
 */ function shouldSkipElement(element) {
    // we ignore fixed or sticky positioned elements since they'll likely pass the "in-viewport" check
    // and will result in a situation we bail on scroll because of something like a fixed nav,
    // even though the actual page content is offscreen
    if ([
        'sticky',
        'fixed'
    ].includes(getComputedStyle(element).position)) {
        return true;
    }
    // Uses `getBoundingClientRect` to check if the element is hidden instead of `offsetParent`
    // because `offsetParent` doesn't consider document/body
    var rect = element.getBoundingClientRect();
    return rectProperties.every(function(item) {
        return rect[item] === 0;
    });
}
/**
 * Check if the top corner of the HTMLElement is in the viewport.
 */ function topOfElementInViewport(instance, viewportHeight) {
    var rects = instance.getClientRects();
    if (rects.length === 0) {
        // Just to be explicit.
        return false;
    }
    var elementTop = Number.POSITIVE_INFINITY;
    for(var i = 0; i < rects.length; i++){
        var rect = rects[i];
        if (rect.top < elementTop) {
            elementTop = rect.top;
        }
    }
    return elementTop >= 0 && elementTop <= viewportHeight;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    var _document_getElementById;
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === 'top') {
        return document.body;
    }
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return (_document_getElementById = document.getElementById(hashFragment)) !== null && _document_getElementById !== void 0 ? _document_getElementById : // If the hash fragment is a name, the page has to scroll to the first element with that name.
    document.getElementsByName(hashFragment)[0];
}
var InnerScrollAndFocusHandlerOld = /*#__PURE__*/ function(_react_default_Component) {
    "use strict";
    _inherits._(InnerScrollAndFocusHandlerOld, _react_default_Component);
    function InnerScrollAndFocusHandlerOld() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _class_call_check._(this, InnerScrollAndFocusHandlerOld);
        var _this;
        _this = _call_super._(this, InnerScrollAndFocusHandlerOld, _to_consumable_array._(args)), _this.handlePotentialScroll = function() {
            // Handle scroll and focus, it's only applied once.
            var _this_props = _this.props, focusAndScrollRef = _this_props.focusAndScrollRef, cacheNode = _this_props.cacheNode;
            var scrollRef = focusAndScrollRef.forceScroll ? focusAndScrollRef.scrollRef : cacheNode.scrollRef;
            if (scrollRef === null || !scrollRef.current) return;
            var domNode = null;
            var hashFragment = focusAndScrollRef.hashFragment;
            if (hashFragment) {
                domNode = getHashFragmentDomNode(hashFragment);
            }
            // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
            // This already caused a bug where the first child was a <link/> in head.
            if (!domNode) {
                domNode = findDOMNode(_this);
            }
            // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
            if (!_instanceof._(domNode, Element)) {
                return;
            }
            // Verify if the element is a HTMLElement and if we want to consider it for scroll behavior.
            // If the element is skipped, try to select the next sibling and try again.
            while(!_instanceof._(domNode, HTMLElement) || shouldSkipElement(domNode)){
                if ("TURBOPACK compile-time truthy", 1) {
                    var _domNode_parentElement;
                    if (((_domNode_parentElement = domNode.parentElement) === null || _domNode_parentElement === void 0 ? void 0 : _domNode_parentElement.localName) === 'head') {
                    // We enter this state when metadata was rendered as part of the page or via Next.js.
                    // This is always a bug in Next.js and caused by React hoisting metadata.
                    // Fixed with `experimental.appNewScrollHandler`
                    }
                }
                // No siblings found that match the criteria are found, so handle scroll higher up in the tree instead.
                if (domNode.nextElementSibling === null) {
                    return;
                }
                domNode = domNode.nextElementSibling;
            }
            // Mark as scrolled so no other segment scrolls for this navigation.
            scrollRef.current = false;
            (0, _disablesmoothscroll.disableSmoothScrollDuringRouteTransition)(function() {
                // In case of hash scroll, we only need to scroll the element into view
                if (hashFragment) {
                    domNode.scrollIntoView();
                    return;
                }
                // Store the current viewport height because reading `clientHeight` causes a reflow,
                // and it won't change during this function.
                var htmlElement = document.documentElement;
                var viewportHeight = htmlElement.clientHeight;
                // If the element's top edge is already in the viewport, exit early.
                if (topOfElementInViewport(domNode, viewportHeight)) {
                    return;
                }
                // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                htmlElement.scrollTop = 0;
                // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                if (!topOfElementInViewport(domNode, viewportHeight)) {
                    // Scroll into view doesn't scroll horizontally by default when not needed
                    domNode.scrollIntoView();
                }
            }, {
                // We will force layout by querying domNode position
                dontForceLayout: true,
                onlyHashChange: focusAndScrollRef.onlyHashChange
            });
            // Mutate after scrolling so that it can be read by `disableSmoothScrollDuringRouteTransition`
            focusAndScrollRef.onlyHashChange = false;
            focusAndScrollRef.hashFragment = null;
            // Set focus on the element
            domNode.focus();
        };
        return _this;
    }
    _create_class._(InnerScrollAndFocusHandlerOld, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.handlePotentialScroll();
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.handlePotentialScroll();
            }
        },
        {
            key: "render",
            value: function render() {
                return this.props.children;
            }
        }
    ]);
    return InnerScrollAndFocusHandlerOld;
}(_react.default.Component);
/**
 * Fork of InnerScrollAndFocusHandlerOld using Fragment refs for scrolling.
 * No longer focuses the first host descendant.
 */ function InnerScrollHandlerNew(props) {
    var childrenRef = _react.default.useRef(null);
    (0, _react.useLayoutEffect)(function() {
        var focusAndScrollRef = props.focusAndScrollRef, cacheNode = props.cacheNode;
        var scrollRef = focusAndScrollRef.forceScroll ? focusAndScrollRef.scrollRef : cacheNode.scrollRef;
        if (scrollRef === null || !scrollRef.current) return;
        var instance = null;
        var hashFragment = focusAndScrollRef.hashFragment;
        if (hashFragment) {
            instance = getHashFragmentDomNode(hashFragment);
        }
        if (!instance) {
            instance = childrenRef.current;
        }
        // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
        if (instance === null) {
            return;
        }
        // Mark as scrolled so no other segment scrolls for this navigation.
        scrollRef.current = false;
        var activeElement = document.activeElement;
        if (activeElement !== null && 'blur' in activeElement && typeof activeElement.blur === 'function') {
            // Trying to match hard navigations.
            // Ideally we'd move the internal focus cursor either to the top
            // or at least before the segment. But there's no DOM API to do that,
            // so we just blur.
            // We could workaround this by moving focus to a temporary element in
            // the body. But adding elements might trigger layout or other effects
            // so it should be well motivated.
            activeElement.blur();
        }
        (0, _disablesmoothscroll.disableSmoothScrollDuringRouteTransition)(function() {
            // In case of hash scroll, we only need to scroll the element into view
            if (hashFragment) {
                instance.scrollIntoView();
                return;
            }
            // Store the current viewport height because reading `clientHeight` causes a reflow,
            // and it won't change during this function.
            var htmlElement = document.documentElement;
            var viewportHeight = htmlElement.clientHeight;
            // If the element's top edge is already in the viewport, exit early.
            if (topOfElementInViewport(instance, viewportHeight)) {
                return;
            }
            // Otherwise, try scrolling go the top of the document to be backward compatible with pages
            // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
            // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
            // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
            htmlElement.scrollTop = 0;
            // Scroll to domNode if domNode is not in viewport when scrolled to top of document
            if (!topOfElementInViewport(instance, viewportHeight)) {
                // Scroll into view doesn't scroll horizontally by default when not needed
                instance.scrollIntoView();
            }
        }, {
            // We will force layout by querying domNode position
            dontForceLayout: true,
            onlyHashChange: focusAndScrollRef.onlyHashChange
        });
        // Mutate after scrolling so that it can be read by `disableSmoothScrollDuringRouteTransition`
        focusAndScrollRef.onlyHashChange = false;
        focusAndScrollRef.hashFragment = null;
    }, // but be prepared for lots of manual testing.
    undefined);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Fragment, {
        ref: childrenRef,
        children: props.children
    });
}
var InnerScrollAndMaybeFocusHandler = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : InnerScrollAndFocusHandlerOld;
function ScrollAndMaybeFocusHandler(param) {
    var children = param.children, cacheNode = param.cacheNode;
    var context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerScrollAndMaybeFocusHandler, {
        focusAndScrollRef: context.focusAndScrollRef,
        cacheNode: cacheNode,
        children: children
    });
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter(param) {
    var tree = param.tree, segmentPath = param.segmentPath, debugNameContext = param.debugNameContext, maybeCacheNode = param.cacheNode, params = param.params, url = param.url, isActive = param.isActive;
    var context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    var parentNavPromises = (0, _react.useContext)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    var cacheNode = maybeCacheNode !== null ? maybeCacheNode : // This should only be reachable for inactive/hidden segments, during
    // prerendering The active segment should always be consistent with the
    // CacheNode tree. Regardless, if we don't have a matching CacheNode, we
    // must suspend rather than render nothing, to prevent showing an
    // inconsistent route.
    (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    // `rsc` represents the renderable node for this segment.
    // If this segment has a `prefetchRsc`, it's the statically prefetched data.
    // We should use that on initial render instead of `rsc`. Then we'll switch
    // to `rsc` when the dynamic response streams in.
    //
    // If no prefetch data is available, then we go straight to rendering `rsc`.
    var resolvedPrefetchRsc = cacheNode.prefetchRsc !== null ? cacheNode.prefetchRsc : cacheNode.rsc;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    var rsc = (0, _react.useDeferredValue)(cacheNode.rsc, resolvedPrefetchRsc);
    // `rsc` is either a React node or a promise for a React node, except we
    // special case `null` to represent that this segment's data is missing. If
    // it's a promise, we need to unwrap it so we can determine whether or not the
    // data is missing.
    var resolvedRsc;
    if ((0, _pprnavigations.isDeferredRsc)(rsc)) {
        var unwrappedRsc = (0, _react.use)(rsc);
        if (unwrappedRsc === null) {
            // If the promise was resolved to `null`, it means the data for this
            // segment was not returned by the server. Suspend indefinitely. When this
            // happens, the router is responsible for triggering a new state update to
            // un-suspend this segment.
            (0, _react.use)(_unresolvedthenable.unresolvedThenable);
        }
        resolvedRsc = unwrappedRsc;
    } else {
        // This is not a deferred RSC promise. Don't need to unwrap it.
        if (rsc === null) {
            (0, _react.use)(_unresolvedthenable.unresolvedThenable);
        }
        resolvedRsc = rsc;
    }
    // In dev, we create a NavigationPromisesContext containing the instrumented promises that provide
    // `useSelectedLayoutSegment` and `useSelectedLayoutSegments`.
    // Promises are cached outside of render to survive suspense retries.
    var navigationPromises = null;
    if ("TURBOPACK compile-time truthy", 1) {
        var createNestedLayoutNavigationPromises = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/navigation-devtools.js [app-client] (ecmascript)").createNestedLayoutNavigationPromises;
        navigationPromises = createNestedLayoutNavigationPromises(tree, parentNavPromises);
    }
    var children = resolvedRsc;
    if (navigationPromises) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.NavigationPromisesContext.Provider, {
            value: navigationPromises,
            children: resolvedRsc
        });
    }
    children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: tree,
            parentCacheNode: cacheNode,
            parentSegmentPath: segmentPath,
            parentParams: params,
            // This is always set to null as we enter a child segment. It's
            // populated by LoadingBoundaryProvider the next time we reach a
            // loading boundary.
            parentLoadingData: null,
            debugNameContext: debugNameContext,
            // TODO-APP: overriding of url for parallel routes
            url: url,
            isActive: isActive
        },
        children: children
    });
    return children;
}
function LoadingBoundaryProvider(param) {
    var loading = param.loading, children = param.children;
    // Provides the data needed to render a loading.tsx boundary, via context.
    //
    // loading.tsx creates a Suspense boundary around each of a layout's child
    // slots. (Might be bit confusing to think about the data flow, but: if
    // loading.tsx and layout.tsx are in the same directory, they are assigned
    // to the same CacheNode.)
    //
    // This provider component does not render the Suspense boundary directly;
    // that's handled by LoadingBoundary.
    //
    // TODO: For simplicity, we should combine this provider with LoadingBoundary
    // and render the Suspense boundary directly. The only real benefit of doing
    // it separately is so that when there are multiple parallel routes, we only
    // send the boundary data once, rather than once per child. But that's a
    // negligible benefit and can be achieved via caching instead.
    var parentContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
    if (parentContext === null) {
        return children;
    }
    // All values except for parentLoadingData are the same as the parent context.
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: parentContext.parentTree,
            parentCacheNode: parentContext.parentCacheNode,
            parentSegmentPath: parentContext.parentSegmentPath,
            parentParams: parentContext.parentParams,
            parentLoadingData: loading,
            debugNameContext: parentContext.debugNameContext,
            url: parentContext.url,
            isActive: parentContext.isActive
        },
        children: children
    });
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary(param) {
    var name = param.name, loading = param.loading, children = param.children;
    // TODO: For LoadingBoundary, and the other built-in boundary types, don't
    // wrap in an extra function component if no user-defined boundary is
    // provided. In other words, inline this conditional wrapping logic into
    // the parent component. More efficient and keeps unnecessary junk out of
    // the component stack.
    if (loading !== null) {
        var loadingRsc = loading[0];
        var loadingStyles = loading[1];
        var loadingScripts = loading[2];
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
            name: name,
            fallback: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    loadingStyles,
                    loadingScripts,
                    loadingRsc
                ]
            }),
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
function OuterLayoutRouter(param) {
    var parallelRouterKey = param.parallelRouterKey, error = param.error, errorStyles = param.errorStyles, errorScripts = param.errorScripts, templateStyles = param.templateStyles, templateScripts = param.templateScripts, template = param.template, notFound = param.notFound, forbidden = param.forbidden, unauthorized = param.unauthorized, segmentViewBoundaries = param.segmentViewBoundaries;
    var _maybeParentSlots_parallelRouterKey;
    var context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant expected layout router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E56",
            enumerable: false,
            configurable: true
        });
    }
    var parentTree = context.parentTree, parentCacheNode = context.parentCacheNode, parentSegmentPath = context.parentSegmentPath, parentParams = context.parentParams, parentLoadingData = context.parentLoadingData, url = context.url, isActive = context.isActive, debugNameContext = context.debugNameContext;
    // Get the CacheNode for this segment by reading it from the parent segment's
    // child map.
    var parentTreeSegment = parentTree[0];
    var segmentPath = parentSegmentPath === null ? // the code. We should clean this up.
    [
        parallelRouterKey
    ] : parentSegmentPath.concat([
        parentTreeSegment,
        parallelRouterKey
    ]);
    // The "state" key of a segment is the one passed to React — it represents the
    // identity of the UI tree. Whenever the state key changes, the tree is
    // recreated and the state is reset. In the App Router model, search params do
    // not cause state to be lost, so two segments with the same segment path but
    // different search params should have the same state key.
    //
    // The "cache" key of a segment, however, *does* include the search params, if
    // it's possible that the segment accessed the search params on the server.
    // (This only applies to page segments; layout segments cannot access search
    // params on the server.)
    var activeTree = parentTree[1][parallelRouterKey];
    var maybeParentSlots = parentCacheNode.slots;
    if (activeTree === undefined || maybeParentSlots === null) {
        // Could not find a matching segment. The client tree is inconsistent with
        // the server tree. Suspend indefinitely; the router will have already
        // detected the inconsistency when handling the server response, and
        // triggered a refresh of the page to recover.
        (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    }
    var maybeValidationBoundaryId = null;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    {
        var InstantValidationBoundaryContext;
    /*TURBOPACK member replacement*/ }
    var activeSegment = activeTree[0];
    var activeCacheNode = (_maybeParentSlots_parallelRouterKey = maybeParentSlots[parallelRouterKey]) !== null && _maybeParentSlots_parallelRouterKey !== void 0 ? _maybeParentSlots_parallelRouterKey : null;
    var activeStateKey = (0, _createroutercachekey.createRouterCacheKey)(activeSegment, true) // no search params
    ;
    // At each level of the route tree, not only do we render the currently
    // active segment — we also render the last N segments that were active at
    // this level inside a hidden <Activity> boundary, to preserve their state
    // if or when the user navigates to them again.
    //
    // bfcacheEntry is a linked list of FlightRouterStates.
    var bfcacheEntry = (0, _bfcachestatemanager.useRouterBFCache)(activeTree, activeCacheNode, activeStateKey);
    var children = [];
    do {
        var tree = bfcacheEntry.tree;
        var cacheNode = bfcacheEntry.cacheNode;
        var stateKey = bfcacheEntry.stateKey;
        var segment = tree[0];
        /*
    - Error boundary
      - Only renders error boundary if error component is provided.
      - Rendered for each segment to ensure they have their own error state.
      - When gracefully degrade for bots, skip rendering error boundary.
    - Loading boundary
      - Only renders suspense boundary if loading components is provided.
      - Rendered for each segment to ensure they have their own loading state.
      - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
  */ var segmentBoundaryTriggerNode = null;
        var segmentViewStateNode = null;
        if ("TURBOPACK compile-time truthy", 1) {
            var _require = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)"), SegmentBoundaryTriggerNode = _require.SegmentBoundaryTriggerNode, SegmentViewStateNode = _require.SegmentViewStateNode;
            var pagePrefix = (0, _apppaths.normalizeAppPath)(url);
            segmentViewStateNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentViewStateNode, {
                page: pagePrefix
            }, pagePrefix);
            segmentBoundaryTriggerNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentBoundaryTriggerNode, {})
            });
        }
        var params = parentParams;
        if (Array.isArray(segment)) {
            // This segment contains a route param. Accumulate these as we traverse
            // down the router tree. The result represents the set of params that
            // the layout/page components are permitted to access below this point.
            var paramName = segment[0];
            var paramCacheKey = segment[1];
            var paramType = segment[2];
            var paramValue = (0, _routeparams.getParamValueFromCacheKey)(paramCacheKey, paramType);
            if (paramValue !== null) {
                params = _object_spread_props._(_object_spread._({}, parentParams), _define_property._({}, paramName, paramValue));
            }
        }
        var debugName = getBoundaryDebugNameFromSegment(segment);
        // `debugNameContext` represents the nearest non-"virtual" parent segment.
        // `getBoundaryDebugNameFromSegment` returns undefined for virtual segments.
        // So if `debugName` is undefined, the context is passed through unchanged.
        var childDebugNameContext = debugName !== null && debugName !== void 0 ? debugName : debugNameContext;
        // In practical terms, clicking this name in the Suspense DevTools
        // should select the child slots of that layout.
        //
        // So the name we apply to the Activity boundary is actually based on
        // the nearest parent segments.
        //
        // We skip over "virtual" parents, i.e. ones inserted by Next.js that
        // don't correspond to application-defined code.
        var isVirtual = debugName === undefined;
        var debugNameToDisplay = isVirtual ? undefined : debugNameContext;
        var templateValue = /*#__PURE__*/ (0, _jsxruntime.jsxs)(ScrollAndMaybeFocusHandler, {
            cacheNode: cacheNode,
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
                    errorComponent: error,
                    errorStyles: errorStyles,
                    errorScripts: errorScripts,
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(LoadingBoundary, {
                        name: debugNameToDisplay,
                        // TODO: The loading module data for a segment is stored on the
                        // parent, then applied to each of that parent segment's
                        // parallel route slots. In the simple case where there's only
                        // one parallel route (the `children` slot), this is no
                        // different from if the loading module data were stored on the
                        // child directly. But I'm not sure this actually makes sense
                        // when there are multiple parallel routes. It's not a huge
                        // issue because you always have the option to define a narrower
                        // loading boundary for a particular slot. But this sort of
                        // smells like an implementation accident to me.
                        loading: parentLoadingData,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary1.HTTPAccessFallbackBoundary, {
                            notFound: notFound,
                            forbidden: forbidden,
                            unauthorized: unauthorized,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_redirectboundary.RedirectBoundary, {
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerLayoutRouter, {
                                        url: url,
                                        tree: tree,
                                        params: params,
                                        cacheNode: cacheNode,
                                        segmentPath: segmentPath,
                                        debugNameContext: childDebugNameContext,
                                        isActive: isActive && stateKey === activeStateKey
                                    }),
                                    segmentBoundaryTriggerNode
                                ]
                            })
                        })
                    })
                }),
                segmentViewStateNode
            ]
        });
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        {
            var RenderValidationBoundaryAtThisLevel;
        /*TURBOPACK member replacement*/ }
        var child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_approutercontextsharedruntime.TemplateContext.Provider, {
            value: templateValue,
            children: [
                templateStyles,
                templateScripts,
                template
            ]
        }, stateKey);
        if ("TURBOPACK compile-time truthy", 1) {
            var SegmentStateProvider = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)").SegmentStateProvider;
            child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(SegmentStateProvider, {
                children: [
                    child,
                    segmentViewBoundaries
                ]
            }, stateKey);
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        children.push(child);
        bfcacheEntry = bfcacheEntry.next;
    }while (bfcacheEntry !== null)
    return children;
}
function getBoundaryDebugNameFromSegment(segment) {
    if (segment === '/') {
        // Reached the root
        return '/';
    }
    if (typeof segment === 'string') {
        if (isVirtualLayout(segment)) {
            return undefined;
        } else {
            return segment + '/';
        }
    }
    var paramCacheKey = segment[1];
    return paramCacheKey + '/';
}
function isVirtualLayout(segment) {
    return(// (like __PAGE__ and __DEFAULT__) to avoid collisions with
    // user-defined route groups.
    segment === '(__SLOT__)');
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/render-from-template-context.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
        return RenderFromTemplateContext;
    }
});
var _interop_require_wildcard = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
var _jsxruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _approutercontextsharedruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
function RenderFromTemplateContext() {
    var children = (0, _react.useContext)(_approutercontextsharedruntime.TemplateContext);
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _class_call_check = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_create_class.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReflectAdapter", {
    enumerable: true,
    get: function get() {
        return ReflectAdapter;
    }
});
var ReflectAdapter = /*#__PURE__*/ function() {
    function ReflectAdapter() {
        _class_call_check._(this, ReflectAdapter);
    }
    _create_class._(ReflectAdapter, null, [
        {
            key: "get",
            value: function get(target, prop, receiver) {
                var value = Reflect.get(target, prop, receiver);
                if (typeof value === 'function') {
                    return value.bind(target);
                }
                return value;
            }
        },
        {
            key: "set",
            value: function set(target, prop, value, receiver) {
                return Reflect.set(target, prop, value, receiver);
            }
        },
        {
            key: "has",
            value: function has(target, prop) {
                return Reflect.has(target, prop);
            }
        },
        {
            key: "deleteProperty",
            value: function deleteProperty(target, prop) {
                return Reflect.deleteProperty(target, prop);
            }
        }
    ]);
    return ReflectAdapter;
}();
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This regex will have fast negatives meaning valid identifiers may not pass
// this test. However this is only used during static generation to provide hints
// about why a page bailed out of some or all prerendering and we can use bracket notation
// for example while `ಠ_ಠ` is a valid identifier it's ok to print `searchParams['ಠ_ಠ']`
// even if this would have been fine too `searchParams.ಠ_ಠ`
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    describeHasCheckingStringProperty: null,
    describeStringPropertyAccess: null,
    wellKnownProperties: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    describeHasCheckingStringProperty: function describeHasCheckingStringProperty1() {
        return describeHasCheckingStringProperty;
    },
    describeStringPropertyAccess: function describeStringPropertyAccess1() {
        return describeStringPropertyAccess;
    },
    wellKnownProperties: function wellKnownProperties1() {
        return wellKnownProperties;
    }
});
var isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function describeStringPropertyAccess(target, prop) {
    if (isDefinitelyAValidIdentifier.test(prop)) {
        return "`".concat(target, ".").concat(prop, "`");
    }
    return "`".concat(target, "[").concat(JSON.stringify(prop), "]`");
}
function describeHasCheckingStringProperty(target, prop) {
    var stringifiedProp = JSON.stringify(prop);
    return "`Reflect.has(".concat(target, ", ").concat(stringifiedProp, ")`, `").concat(stringifiedProp, " in ").concat(target, "`, or similar");
}
var wellKnownProperties = new Set([
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    'toLocaleString',
    // Promise prototype
    'then',
    'catch',
    'finally',
    // React Promise extension
    'status',
    // 'value',
    // 'error',
    // React introspection
    'displayName',
    '_debugInfo',
    // Common tested properties
    'toJSON',
    '$$typeof',
    '__esModule',
    // Tested by flight when checking for iterables
    '@@iterator'
]);
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function get() {
        return createRenderSearchParamsFromClient;
    }
});
var _reflect = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
var _reflectutils = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
var CachedSearchParams = new WeakMap();
function makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams) {
    var cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    var proxiedProperties = new Set();
    var promise = Promise.resolve(underlyingSearchParams);
    Object.keys(underlyingSearchParams).forEach(function(prop) {
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    var proxiedPromise = new Proxy(promise, {
        get: function get(target, prop, receiver) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    var expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set: function set(target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has: function has(target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    var expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys: function ownKeys(target) {
            warnForSyncSpread();
            return Reflect.ownKeys(target);
        }
    });
    CachedSearchParams.set(underlyingSearchParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error("A searchParam property was accessed directly with ".concat(expression, ". ") + "`searchParams` is a Promise and must be unwrapped with `React.use()` before accessing its properties. " + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis");
}
function warnForSyncSpread() {
    console.error("The keys of `searchParams` were accessed directly. " + "`searchParams` is a Promise and must be unwrapped with `React.use()` before accessing its properties. " + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis");
}
function createRenderSearchParamsFromClient(underlyingSearchParams) {
    return makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams);
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function get() {
        return createRenderSearchParamsFromClient;
    }
});
var createRenderSearchParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)").createRenderSearchParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function get() {
        return createRenderParamsFromClient;
    }
});
var _reflect = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
var _reflectutils = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
var CachedParams = new WeakMap();
function makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams) {
    var cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    var promise = Promise.resolve(underlyingParams);
    var proxiedProperties = new Set();
    Object.keys(underlyingParams).forEach(function(prop) {
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    var proxiedPromise = new Proxy(promise, {
        get: function get(target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    var expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set: function set(target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys: function ownKeys(target) {
            warnForEnumeration();
            return Reflect.ownKeys(target);
        }
    });
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error("A param property was accessed directly with ".concat(expression, ". ") + "`params` is a Promise and must be unwrapped with `React.use()` before accessing its properties. " + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis");
}
function warnForEnumeration() {
    console.error("params are being enumerated. " + "`params` is a Promise and must be unwrapped with `React.use()` before accessing its properties. " + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis");
}
function createRenderParamsFromClient(clientParams) {
    return makeDynamicallyTrackedParamsWithDevWarnings(clientParams);
}
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function get() {
        return createRenderParamsFromClient;
    }
});
var createRenderParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)").createRenderParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || _type_of._(exports.default) === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/vary-params.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _async_to_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_async_to_generator.cjs [app-client] (ecmascript)");
var _ts_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_ts_generator.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    accumulateRootVaryParam: null,
    accumulateVaryParam: null,
    createResponseVaryParamsAccumulator: null,
    createVaryParamsAccumulator: null,
    createVaryingParams: null,
    createVaryingSearchParams: null,
    emptyVaryParamsAccumulator: null,
    finishAccumulatingVaryParams: null,
    getMetadataVaryParamsAccumulator: null,
    getMetadataVaryParamsThenable: null,
    getRootParamsVaryParamsAccumulator: null,
    getVaryParamsThenable: null,
    getViewportVaryParamsAccumulator: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    accumulateRootVaryParam: function accumulateRootVaryParam1() {
        return accumulateRootVaryParam;
    },
    accumulateVaryParam: function accumulateVaryParam1() {
        return accumulateVaryParam;
    },
    createResponseVaryParamsAccumulator: function createResponseVaryParamsAccumulator1() {
        return createResponseVaryParamsAccumulator;
    },
    createVaryParamsAccumulator: function createVaryParamsAccumulator1() {
        return createVaryParamsAccumulator;
    },
    createVaryingParams: function createVaryingParams1() {
        return createVaryingParams;
    },
    createVaryingSearchParams: function createVaryingSearchParams1() {
        return createVaryingSearchParams;
    },
    emptyVaryParamsAccumulator: function emptyVaryParamsAccumulator1() {
        return emptyVaryParamsAccumulator;
    },
    finishAccumulatingVaryParams: function finishAccumulatingVaryParams1() {
        return finishAccumulatingVaryParams;
    },
    getMetadataVaryParamsAccumulator: function getMetadataVaryParamsAccumulator1() {
        return getMetadataVaryParamsAccumulator;
    },
    getMetadataVaryParamsThenable: function getMetadataVaryParamsThenable1() {
        return getMetadataVaryParamsThenable;
    },
    getRootParamsVaryParamsAccumulator: function getRootParamsVaryParamsAccumulator1() {
        return getRootParamsVaryParamsAccumulator;
    },
    getVaryParamsThenable: function getVaryParamsThenable1() {
        return getVaryParamsThenable;
    },
    getViewportVaryParamsAccumulator: function getViewportVaryParamsAccumulator1() {
        return getViewportVaryParamsAccumulator;
    }
});
var _workunitasyncstorageexternal = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
function createSegmentVaryParamsAccumulator() {
    var accumulator = {
        varyParams: new Set(),
        status: 'pending',
        value: new Set(),
        then: function then(onfulfilled) {
            if (onfulfilled) {
                if (accumulator.status === 'pending') {
                    accumulator.resolvers.push(onfulfilled);
                } else {
                    onfulfilled(accumulator.value);
                }
            }
        },
        resolvers: []
    };
    return accumulator;
}
/**
 * A singleton accumulator that's already resolved to an empty Set. Use this for
 * segments where we know upfront that no params will be accessed, such as
 * client components or segments without user code.
 *
 * Benefits:
 * - No need to accumulate or resolve later
 * - Resilient: resolves correctly even if other tracking fails
 * - Memory efficient: reuses the same object
 */ var emptySet = new Set();
var emptyVaryParamsAccumulator = {
    varyParams: emptySet,
    status: 'fulfilled',
    value: emptySet,
    then: function then(onfulfilled) {
        if (onfulfilled) {
            onfulfilled(emptySet);
        }
    },
    resolvers: []
};
function createResponseVaryParamsAccumulator() {
    // Create the head and rootParams accumulators as top-level fields.
    // Segment accumulators are added to the segments set as they are created.
    var head = createSegmentVaryParamsAccumulator();
    var rootParams = createSegmentVaryParamsAccumulator();
    var segments = new Set();
    return {
        head: head,
        rootParams: rootParams,
        segments: segments
    };
}
function createVaryParamsAccumulator() {
    var workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-runtime':
                {
                    var responseAccumulator = workUnitStore.varyParamsAccumulator;
                    if (responseAccumulator !== null) {
                        var accumulator = createSegmentVaryParamsAccumulator();
                        responseAccumulator.segments.add(accumulator);
                        return accumulator;
                    }
                    return null;
                }
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'request':
            case 'cache':
            case 'private-cache':
            case 'prerender-client':
            case 'validation-client':
            case 'unstable-cache':
            case 'generate-static-params':
                break;
            default:
                workUnitStore;
        }
    }
    return null;
}
function getMetadataVaryParamsAccumulator() {
    var workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-runtime':
                {
                    var responseAccumulator = workUnitStore.varyParamsAccumulator;
                    if (responseAccumulator !== null) {
                        return responseAccumulator.head;
                    }
                    return null;
                }
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'request':
            case 'cache':
            case 'private-cache':
            case 'prerender-client':
            case 'validation-client':
            case 'unstable-cache':
            case 'generate-static-params':
                return null;
            default:
                workUnitStore;
        }
    }
    return null;
}
function getVaryParamsThenable(accumulator) {
    return accumulator;
}
function getMetadataVaryParamsThenable() {
    var accumulator = getMetadataVaryParamsAccumulator();
    if (accumulator !== null) {
        return getVaryParamsThenable(accumulator);
    }
    return null;
}
var getViewportVaryParamsAccumulator = getMetadataVaryParamsAccumulator;
function getRootParamsVaryParamsAccumulator() {
    var workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-runtime':
                {
                    var responseAccumulator = workUnitStore.varyParamsAccumulator;
                    if (responseAccumulator !== null) {
                        return responseAccumulator.rootParams;
                    }
                    return null;
                }
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'request':
            case 'cache':
            case 'private-cache':
            case 'prerender-client':
            case 'validation-client':
            case 'unstable-cache':
            case 'generate-static-params':
                return null;
            default:
                workUnitStore;
        }
    }
    return null;
}
function accumulateVaryParam(accumulator, paramName) {
    accumulator.varyParams.add(paramName);
}
function accumulateRootVaryParam(paramName) {
    var rootParamsAccumulator = getRootParamsVaryParamsAccumulator();
    if (rootParamsAccumulator !== null) {
        accumulateVaryParam(rootParamsAccumulator, paramName);
    }
}
function createVaryingParams(accumulator, originalParamsObject, optionalCatchAllParamName) {
    var _loop = function(paramName) {
        Object.defineProperty(underlyingParamsWithVarying, paramName, {
            get: function get() {
                accumulateVaryParam(accumulator, paramName);
                return originalParamsObject[paramName];
            },
            enumerable: true
        });
    };
    if (optionalCatchAllParamName !== null) {
        // When there's an optional catch-all param with no value (e.g.,
        // [[...slug]] at /), the param doesn't exist as a property on the params
        // object. Use a Proxy to track all param access — both existing params
        // and the missing optional param — including enumeration patterns like
        // Object.keys(), spread, for...in, and `in` checks.
        return new Proxy(originalParamsObject, {
            get: function get(target, prop, receiver) {
                if (typeof prop === 'string') {
                    if (prop === optionalCatchAllParamName || Object.prototype.hasOwnProperty.call(target, prop)) {
                        accumulateVaryParam(accumulator, prop);
                    }
                }
                return Reflect.get(target, prop, receiver);
            },
            has: function has(target, prop) {
                if (prop === optionalCatchAllParamName) {
                    accumulateVaryParam(accumulator, optionalCatchAllParamName);
                }
                return Reflect.has(target, prop);
            },
            ownKeys: function ownKeys(target) {
                // Enumerating the params object means the user's code may depend on
                // which params are present, so conservatively track the optional
                // param as accessed.
                accumulateVaryParam(accumulator, optionalCatchAllParamName);
                return Reflect.ownKeys(target);
            }
        });
    }
    // When there's no optional catch-all, all params exist as properties on the
    // object, so we can use defineProperty getters instead of a Proxy. This is
    // faster because the engine can optimize property access on regular objects
    // more aggressively than Proxy trap calls.
    var underlyingParamsWithVarying = {};
    for(var paramName in originalParamsObject)_loop(paramName);
    return underlyingParamsWithVarying;
}
function createVaryingSearchParams(accumulator, originalSearchParamsObject) {
    var _loop = function(searchParamName) {
        Object.defineProperty(underlyingSearchParamsWithVarying, searchParamName, {
            get: function get() {
                // TODO: Unlike path params, we don't vary track each search param
                // individually. The entire search string is treated as a single param.
                // This may change in the future.
                accumulateVaryParam(accumulator, '?');
                return originalSearchParamsObject[searchParamName];
            },
            enumerable: true
        });
    };
    var underlyingSearchParamsWithVarying = {};
    for(var searchParamName in originalSearchParamsObject)_loop(searchParamName);
    return underlyingSearchParamsWithVarying;
}
function finishAccumulatingVaryParams(responseAccumulator) {
    return _async_to_generator._(function() {
        var rootVaryParams, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, segmentAccumulator;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    rootVaryParams = responseAccumulator.rootParams.varyParams;
                    // Resolve head
                    finishSegmentAccumulator(responseAccumulator.head, rootVaryParams);
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        // Resolve each segment
                        for(_iterator = responseAccumulator.segments[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            segmentAccumulator = _step.value;
                            finishSegmentAccumulator(segmentAccumulator, rootVaryParams);
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
                    // Now that the thenables are resolved, Flight should be able to flush the
                    // vary params into the response stream. This work gets scheduled internally
                    // by Flight using a microtask as soon as we notify the thenable listeners.
                    //
                    // We need to ensure that Flight's pending queues are emptied before this
                    // function returns; the caller will abort the prerender immediately after.
                    // We can't use a macrotask, because that would allow dynamic IO to sneak
                    // into the response. So we use microtasks instead.
                    //
                    // The exact number of awaits here isn't important (indeed, one seems to be
                    // sufficient, at the time of writing), as long as we wait enough ticks for
                    // Flight to finish writing the response.
                    //
                    // Anything that remains in Flight's internal queue after these awaits must
                    // be actual dynamic IO, not caused by pending vary params tasks. In other
                    // words, failing to do this would cause us to treat a fully static prerender
                    // as if it were partially dynamic.
                    return [
                        4,
                        Promise.resolve()
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        Promise.resolve()
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        Promise.resolve()
                    ];
                case 3:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    })();
}
function finishSegmentAccumulator(accumulator, rootVaryParams) {
    if (accumulator.status !== 'pending') {
        return;
    }
    var merged = new Set(accumulator.varyParams);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = rootVaryParams[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var param = _step.value;
            merged.add(param);
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
    accumulator.value = merged;
    accumulator.status = 'fulfilled';
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = accumulator.resolvers[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var resolver = _step1.value;
            resolver(merged);
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
    accumulator.resolvers = [];
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _to_consumable_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createDedupedByCallsiteServerErrorLoggerDev", {
    enumerable: true,
    get: function get() {
        return createDedupedByCallsiteServerErrorLoggerDev;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || (typeof obj === "undefined" ? "undefined" : _type_of._(obj)) !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var errorRef = {
    current: null
};
// React.cache is currently only available in canary/experimental React channels.
var cache = typeof _react.cache === 'function' ? _react.cache : function(fn) {
    return fn;
};
// When Cache Components is enabled, we record these as errors so that they
// are captured by the dev overlay as it's more critical to fix these
// when enabled.
var logErrorOrWarn = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : console.warn;
// We don't want to dedupe across requests.
// The developer might've just attempted to fix the warning so we should warn again if it still happens.
var flushCurrentErrorIfNew = cache(function(key) {
    try {
        logErrorOrWarn(errorRef.current);
    } finally{
        errorRef.current = null;
    }
});
function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
    return function logDedupedError() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var message = getMessage.apply(void 0, _to_consumable_array._(args));
        if ("TURBOPACK compile-time truthy", 1) {
            var _stack;
            var callStackFrames = (_stack = new Error().stack) == null ? void 0 : _stack.split('\n');
            if (callStackFrames === undefined || callStackFrames.length < 4) {
                logErrorOrWarn(message);
            } else {
                // Error:
                //   logDedupedError
                //   asyncApiBeingAccessedSynchronously
                //   <userland callsite>
                // TODO: This breaks if sourcemaps with ignore lists are enabled.
                var key = callStackFrames[4];
                errorRef.current = message;
                flushCurrentErrorIfNew(key);
            }
        } else //TURBOPACK unreachable
        ;
    };
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/after-task-async-storage-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "afterTaskAsyncStorageInstance", {
    enumerable: true,
    get: function get() {
        return afterTaskAsyncStorageInstance;
    }
});
var _asynclocalstorage = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/async-local-storage.js [app-client] (ecmascript)");
var afterTaskAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/after-task-async-storage.external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "afterTaskAsyncStorage", {
    enumerable: true,
    get: function get() {
        return _aftertaskasyncstorageinstance.afterTaskAsyncStorageInstance;
    }
});
var _aftertaskasyncstorageinstance = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/after-task-async-storage-instance.js [app-client] (ecmascript)");
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/request/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isRequestAPICallableInsideAfter: null,
    throwForSearchParamsAccessInUseCache: null,
    throwWithStaticGenerationBailoutErrorWithDynamicError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isRequestAPICallableInsideAfter: function isRequestAPICallableInsideAfter1() {
        return isRequestAPICallableInsideAfter;
    },
    throwForSearchParamsAccessInUseCache: function throwForSearchParamsAccessInUseCache1() {
        return throwForSearchParamsAccessInUseCache;
    },
    throwWithStaticGenerationBailoutErrorWithDynamicError: function throwWithStaticGenerationBailoutErrorWithDynamicError1() {
        return throwWithStaticGenerationBailoutErrorWithDynamicError;
    }
});
var _staticgenerationbailout = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/static-generation-bailout.js [app-client] (ecmascript)");
var _aftertaskasyncstorageexternal = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/after-task-async-storage.external.js [app-client] (ecmascript)");
function throwWithStaticGenerationBailoutErrorWithDynamicError(route, expression) {
    throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError("Route ".concat(route, ' with `dynamic = "error"` couldn\'t be rendered statically because it used ').concat(expression, ". See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering")), "__NEXT_ERROR_CODE", {
        value: "E543",
        enumerable: false,
        configurable: true
    });
}
function throwForSearchParamsAccessInUseCache(workStore, constructorOpt) {
    var _workStore, _invalidDynamicUsageError;
    var error = Object.defineProperty(new Error("Route ".concat(workStore.route, ' used `searchParams` inside "use cache". Accessing dynamic request data inside a cache scope is not supported. If you need some search params inside a cached function await `searchParams` outside of the cached function and pass only the required search params as arguments to the cached function. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache')), "__NEXT_ERROR_CODE", {
        value: "E842",
        enumerable: false,
        configurable: true
    });
    Error.captureStackTrace(error, constructorOpt);
    (_invalidDynamicUsageError = (_workStore = workStore).invalidDynamicUsageError) !== null && _invalidDynamicUsageError !== void 0 ? _invalidDynamicUsageError : _workStore.invalidDynamicUsageError = error;
    throw error;
}
function isRequestAPICallableInsideAfter() {
    var afterTaskStore = _aftertaskasyncstorageexternal.afterTaskAsyncStorage.getStore();
    return (afterTaskStore == null ? void 0 : afterTaskStore.rootTaskSpawnPhase) === 'action';
}
}),
"[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_to_array.cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _array_with_holes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_array_with_holes.cjs [app-client] (ecmascript)");
var _iterable_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_iterable_to_array.cjs [app-client] (ecmascript)");
var _non_iterable_rest = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_non_iterable_rest.cjs [app-client] (ecmascript)");
var _unsupported_iterable_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_unsupported_iterable_to_array.cjs [app-client] (ecmascript)");
function _to_array(arr) {
    return _array_with_holes._(arr) || _iterable_to_array._(arr) || _unsupported_iterable_to_array._(arr) || _non_iterable_rest._();
}
exports._ = _to_array;
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _class_call_check = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_create_class.cjs [app-client] (ecmascript)");
var _object_spread = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_object_spread.cjs [app-client] (ecmascript)");
var _object_spread_props = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_object_spread_props.cjs [app-client] (ecmascript)");
var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_to_array.cjs [app-client] (ecmascript)");
var _to_consumable_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function __export(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function __copyProps(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of._(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function get() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
    return to;
};
var __toCommonJS = function __toCommonJS(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: function RequestCookies1() {
        return RequestCookies;
    },
    ResponseCookies: function ResponseCookies1() {
        return ResponseCookies;
    },
    parseCookie: function parseCookie1() {
        return parseCookie;
    },
    parseSetCookie: function parseSetCookie1() {
        return parseSetCookie;
    },
    stringifyCookie: function stringifyCookie1() {
        return stringifyCookie;
    }
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function stringifyCookie(c) {
    var _a;
    var attrs = [
        "path" in c && c.path && "Path=".concat(c.path),
        "expires" in c && (c.expires || c.expires === 0) && "Expires=".concat((typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()),
        "maxAge" in c && typeof c.maxAge === "number" && "Max-Age=".concat(c.maxAge),
        "domain" in c && c.domain && "Domain=".concat(c.domain),
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && "SameSite=".concat(c.sameSite),
        "partitioned" in c && c.partitioned && "Partitioned",
        "priority" in c && c.priority && "Priority=".concat(c.priority)
    ].filter(Boolean);
    var stringified = "".concat(c.name, "=").concat(encodeURIComponent((_a = c.value) != null ? _a : ""));
    return attrs.length === 0 ? stringified : "".concat(stringified, "; ").concat(attrs.join("; "));
}
function parseCookie(cookie) {
    var map = /* @__PURE__ */ new Map();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = cookie.split(/; */)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var pair = _step.value;
            if (!pair) continue;
            var splitAt = pair.indexOf("=");
            if (splitAt === -1) {
                map.set(pair, "true");
                continue;
            }
            var _ref = [
                pair.slice(0, splitAt),
                pair.slice(splitAt + 1)
            ], key = _ref[0], value = _ref[1];
            try {
                map.set(key, decodeURIComponent(value != null ? value : "true"));
            } catch (unused) {}
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
    return map;
}
function parseSetCookie(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    var _parseCookie = _to_array._(parseCookie(setCookie)), _parseCookie_ = _sliced_to_array._(_parseCookie[0], 2), name = _parseCookie_[0], value = _parseCookie_[1], attributes = _parseCookie.slice(1);
    var _Object_fromEntries = Object.fromEntries(attributes.map(function(param) {
        var _param = _sliced_to_array._(param, 2), key = _param[0], value2 = _param[1];
        return [
            key.toLowerCase().replace(/-/g, ""),
            value2
        ];
    })), domain = _Object_fromEntries.domain, expires = _Object_fromEntries.expires, httponly = _Object_fromEntries.httponly, maxage = _Object_fromEntries.maxage, path = _Object_fromEntries.path, samesite = _Object_fromEntries.samesite, secure = _Object_fromEntries.secure, partitioned = _Object_fromEntries.partitioned, priority = _Object_fromEntries.priority;
    var cookie = _object_spread._(_object_spread_props._(_object_spread._({
        name: name,
        value: decodeURIComponent(value),
        domain: domain
    }, expires && {
        expires: new Date(expires)
    }, httponly && {
        httpOnly: true
    }, typeof maxage === "string" && {
        maxAge: Number(maxage)
    }), {
        path: path
    }), samesite && {
        sameSite: parseSameSite(samesite)
    }, secure && {
        secure: true
    }, priority && {
        priority: parsePriority(priority)
    }, partitioned && {
        partitioned: true
    });
    return compact(cookie);
}
function compact(t) {
    var newT = {};
    for(var key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
var PRIORITY = [
    "low",
    "medium",
    "high"
];
function parsePriority(string) {
    string = string.toLowerCase();
    return PRIORITY.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// src/request-cookies.ts
var RequestCookies = /*#__PURE__*/ function() {
    function RequestCookies(requestHeaders) {
        _class_call_check._(this, RequestCookies);
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        var header = requestHeaders.get("cookie");
        if (header) {
            var parsed = parseCookie(header);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = parsed[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var _step_value = _sliced_to_array._(_step.value, 2), name = _step_value[0], value = _step_value[1];
                    this._parsed.set(name, {
                        name: name,
                        value: value
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
        }
    }
    _create_class._(RequestCookies, [
        {
            key: Symbol.iterator,
            value: function value() {
                return this._parsed[Symbol.iterator]();
            }
        },
        {
            key: "size",
            get: /**
   * The amount of cookies received from the client
   */ function get() {
                return this._parsed.size;
            }
        },
        {
            key: "get",
            value: function get() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var name = typeof args[0] === "string" ? args[0] : args[0].name;
                return this._parsed.get(name);
            }
        },
        {
            key: "getAll",
            value: function getAll() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _a;
                var all = Array.from(this._parsed);
                if (!args.length) {
                    return all.map(function(param) {
                        var _param = _sliced_to_array._(param, 2), _ = _param[0], value = _param[1];
                        return value;
                    });
                }
                var name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
                return all.filter(function(param) {
                    var _param = _sliced_to_array._(param, 1), n = _param[0];
                    return n === name;
                }).map(function(param) {
                    var _param = _sliced_to_array._(param, 2), _ = _param[0], value = _param[1];
                    return value;
                });
            }
        },
        {
            key: "has",
            value: function has(name) {
                return this._parsed.has(name);
            }
        },
        {
            key: "set",
            value: function set() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _ref = _sliced_to_array._(args.length === 1 ? [
                    args[0].name,
                    args[0].value
                ] : args, 2), name = _ref[0], value = _ref[1];
                var map = this._parsed;
                map.set(name, {
                    name: name,
                    value: value
                });
                this._headers.set("cookie", Array.from(map).map(function(param) {
                    var _param = _sliced_to_array._(param, 2), _ = _param[0], value2 = _param[1];
                    return stringifyCookie(value2);
                }).join("; "));
                return this;
            }
        },
        {
            /**
   * Delete the cookies matching the passed name or names in the request.
   */ key: "delete",
            value: function _delete(names) {
                var map = this._parsed;
                var result = !Array.isArray(names) ? map.delete(names) : names.map(function(name) {
                    return map.delete(name);
                });
                this._headers.set("cookie", Array.from(map).map(function(param) {
                    var _param = _sliced_to_array._(param, 2), _ = _param[0], value = _param[1];
                    return stringifyCookie(value);
                }).join("; "));
                return result;
            }
        },
        {
            /**
   * Delete all the cookies in the cookies in the request.
   */ key: "clear",
            value: function clear() {
                this.delete(Array.from(this._parsed.keys()));
                return this;
            }
        },
        {
            /**
   * Format the cookies in the request as a string for logging
   */ key: Symbol.for("edge-runtime.inspect.custom"),
            value: function value() {
                return "RequestCookies ".concat(JSON.stringify(Object.fromEntries(this._parsed)));
            }
        },
        {
            key: "toString",
            value: function toString() {
                return _to_consumable_array._(this._parsed.values()).map(function(v) {
                    return "".concat(v.name, "=").concat(encodeURIComponent(v.value));
                }).join("; ");
            }
        }
    ]);
    return RequestCookies;
}();
// src/response-cookies.ts
var ResponseCookies = /*#__PURE__*/ function() {
    function ResponseCookies(responseHeaders) {
        _class_call_check._(this, ResponseCookies);
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        var setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        var cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = cookieStrings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var cookieString = _step.value;
                var parsed = parseSetCookie(cookieString);
                if (parsed) this._parsed.set(parsed.name, parsed);
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
    _create_class._(ResponseCookies, [
        {
            /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ key: "get",
            value: function get() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var key = typeof args[0] === "string" ? args[0] : args[0].name;
                return this._parsed.get(key);
            }
        },
        {
            /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ key: "getAll",
            value: function getAll() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _a;
                var all = Array.from(this._parsed.values());
                if (!args.length) {
                    return all;
                }
                var key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
                return all.filter(function(c) {
                    return c.name === key;
                });
            }
        },
        {
            key: "has",
            value: function has(name) {
                return this._parsed.has(name);
            }
        },
        {
            /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ key: "set",
            value: function set() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _ref = _sliced_to_array._(args.length === 1 ? [
                    args[0].name,
                    args[0].value,
                    args[0]
                ] : args, 3), name = _ref[0], value = _ref[1], cookie = _ref[2];
                var map = this._parsed;
                map.set(name, normalizeCookie(_object_spread._({
                    name: name,
                    value: value
                }, cookie)));
                replace(map, this._headers);
                return this;
            }
        },
        {
            /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ key: "delete",
            value: function _delete() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _ref = _sliced_to_array._(typeof args[0] === "string" ? [
                    args[0]
                ] : [
                    args[0].name,
                    args[0]
                ], 2), name = _ref[0], options = _ref[1];
                return this.set(_object_spread_props._(_object_spread._({}, options), {
                    name: name,
                    value: "",
                    expires: /* @__PURE__ */ new Date(0)
                }));
            }
        },
        {
            key: Symbol.for("edge-runtime.inspect.custom"),
            value: function value() {
                return "ResponseCookies ".concat(JSON.stringify(Object.fromEntries(this._parsed)));
            }
        },
        {
            key: "toString",
            value: function toString() {
                return _to_consumable_array._(this._parsed.values()).map(stringifyCookie).join("; ");
            }
        }
    ]);
    return ResponseCookies;
}();
function replace(bag, headers) {
    headers.delete("set-cookie");
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = bag[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array._(_step.value, 2), value = _step_value[1];
            var serialized = stringifyCookie(value);
            headers.append("set-cookie", serialized);
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
function normalizeCookie() {
    var cookie = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        name: "",
        value: ""
    };
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    RequestCookies: RequestCookies,
    ResponseCookies: ResponseCookies,
    parseCookie: parseCookie,
    parseSetCookie: parseSetCookie,
    stringifyCookie: stringifyCookie
});
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/cookies.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RequestCookies: null,
    ResponseCookies: null,
    stringifyCookie: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RequestCookies: function RequestCookies() {
        return _cookies.RequestCookies;
    },
    ResponseCookies: function ResponseCookies() {
        return _cookies.ResponseCookies;
    },
    stringifyCookie: function stringifyCookie() {
        return _cookies.stringifyCookie;
    }
});
var _cookies = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-client] (ecmascript)");
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _call_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_call_super.cjs [app-client] (ecmascript)");
var _class_call_check = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_create_class.cjs [app-client] (ecmascript)");
var _inherits = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_inherits.cjs [app-client] (ecmascript)");
var _to_consumable_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
var _wrap_native_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_wrap_native_super.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    MutableRequestCookiesAdapter: null,
    ReadonlyRequestCookiesError: null,
    RequestCookiesAdapter: null,
    appendMutableCookies: null,
    areCookiesMutableInCurrentPhase: null,
    createCookiesWithMutableAccessCheck: null,
    getModifiedCookieValues: null,
    responseCookiesToRequestCookies: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    MutableRequestCookiesAdapter: function MutableRequestCookiesAdapter1() {
        return MutableRequestCookiesAdapter;
    },
    ReadonlyRequestCookiesError: function ReadonlyRequestCookiesError1() {
        return ReadonlyRequestCookiesError;
    },
    RequestCookiesAdapter: function RequestCookiesAdapter1() {
        return RequestCookiesAdapter;
    },
    appendMutableCookies: function appendMutableCookies1() {
        return appendMutableCookies;
    },
    areCookiesMutableInCurrentPhase: function areCookiesMutableInCurrentPhase1() {
        return areCookiesMutableInCurrentPhase;
    },
    createCookiesWithMutableAccessCheck: function createCookiesWithMutableAccessCheck1() {
        return createCookiesWithMutableAccessCheck;
    },
    getModifiedCookieValues: function getModifiedCookieValues1() {
        return getModifiedCookieValues;
    },
    responseCookiesToRequestCookies: function responseCookiesToRequestCookies1() {
        return responseCookiesToRequestCookies;
    }
});
var _cookies = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/cookies.js [app-client] (ecmascript)");
var _reflect = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
var _workasyncstorageexternal = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
var _actionrevalidationkind = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/action-revalidation-kind.js [app-client] (ecmascript)");
var ReadonlyRequestCookiesError = /*#__PURE__*/ function(Error1) {
    _inherits._(ReadonlyRequestCookiesError, Error1);
    function ReadonlyRequestCookiesError() {
        _class_call_check._(this, ReadonlyRequestCookiesError);
        return _call_super._(this, ReadonlyRequestCookiesError, [
            'Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options'
        ]);
    }
    _create_class._(ReadonlyRequestCookiesError, null, [
        {
            key: "callable",
            value: function callable() {
                throw new ReadonlyRequestCookiesError();
            }
        }
    ]);
    return ReadonlyRequestCookiesError;
}(_wrap_native_super._(Error));
var RequestCookiesAdapter = /*#__PURE__*/ function() {
    function RequestCookiesAdapter() {
        _class_call_check._(this, RequestCookiesAdapter);
    }
    _create_class._(RequestCookiesAdapter, null, [
        {
            key: "seal",
            value: function seal(cookies) {
                return new Proxy(cookies, {
                    get: function get(target, prop, receiver) {
                        switch(prop){
                            case 'clear':
                            case 'delete':
                            case 'set':
                                return ReadonlyRequestCookiesError.callable;
                            default:
                                return _reflect.ReflectAdapter.get(target, prop, receiver);
                        }
                    }
                });
            }
        }
    ]);
    return RequestCookiesAdapter;
}();
var SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for('next.mutated.cookies');
function getModifiedCookieValues(cookies) {
    var modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    var modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res` cookies
    // will still take precedence.
    var resCookies = new _cookies.ResponseCookies(headers);
    var returnedCookies = resCookies.getAll();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        // Set the modified cookies as fallbacks.
        for(var _iterator = modifiedCookieValues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var cookie = _step.value;
            resCookies.set(cookie);
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
        // Set the original cookies as the final values.
        for(var _iterator1 = returnedCookies[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var cookie1 = _step1.value;
            resCookies.set(cookie1);
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
    return true;
}
var MutableRequestCookiesAdapter = /*#__PURE__*/ function() {
    function MutableRequestCookiesAdapter() {
        _class_call_check._(this, MutableRequestCookiesAdapter);
    }
    _create_class._(MutableRequestCookiesAdapter, null, [
        {
            key: "wrap",
            value: function wrap(cookies, onUpdateCookies) {
                var responseCookies = new _cookies.ResponseCookies(new Headers());
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = cookies.getAll()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var cookie = _step.value;
                        responseCookies.set(cookie);
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
                var modifiedValues = [];
                var modifiedCookies = new Set();
                var updateResponseCookies = function updateResponseCookies() {
                    // TODO-APP: change method of getting workStore
                    var workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
                    if (workStore) {
                        workStore.pathWasRevalidated = _actionrevalidationkind.ActionDidRevalidateStaticAndDynamic;
                    }
                    var allCookies = responseCookies.getAll();
                    modifiedValues = allCookies.filter(function(c) {
                        return modifiedCookies.has(c.name);
                    });
                    if (onUpdateCookies) {
                        var serializedCookies = [];
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = modifiedValues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var cookie = _step.value;
                                var tempCookies = new _cookies.ResponseCookies(new Headers());
                                tempCookies.set(cookie);
                                serializedCookies.push(tempCookies.toString());
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
                        onUpdateCookies(serializedCookies);
                    }
                };
                var wrappedCookies = new Proxy(responseCookies, {
                    get: function get(target, prop, receiver) {
                        switch(prop){
                            // A special symbol to get the modified cookie values
                            case SYMBOL_MODIFY_COOKIE_VALUES:
                                return modifiedValues;
                            // TODO: Throw error if trying to set a cookie after the response
                            // headers have been set.
                            case 'delete':
                                return function() {
                                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                                        args[_key] = arguments[_key];
                                    }
                                    modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                                    try {
                                        var _target;
                                        (_target = target).delete.apply(_target, _to_consumable_array._(args));
                                        return wrappedCookies;
                                    } finally{
                                        updateResponseCookies();
                                    }
                                };
                            case 'set':
                                return function() {
                                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                                        args[_key] = arguments[_key];
                                    }
                                    modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                                    try {
                                        var _target;
                                        (_target = target).set.apply(_target, _to_consumable_array._(args));
                                        return wrappedCookies;
                                    } finally{
                                        updateResponseCookies();
                                    }
                                };
                            default:
                                return _reflect.ReflectAdapter.get(target, prop, receiver);
                        }
                    }
                });
                return wrappedCookies;
            }
        }
    ]);
    return MutableRequestCookiesAdapter;
}();
function createCookiesWithMutableAccessCheck(requestStore) {
    var wrappedCookies = new Proxy(requestStore.mutableCookies, {
        get: function get(target, prop, receiver) {
            switch(prop){
                case 'delete':
                    return function() {
                        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                            args[_key] = arguments[_key];
                        }
                        var _target;
                        ensureCookiesAreStillMutable(requestStore, 'cookies().delete');
                        (_target = target).delete.apply(_target, _to_consumable_array._(args));
                        return wrappedCookies;
                    };
                case 'set':
                    return function() {
                        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                            args[_key] = arguments[_key];
                        }
                        var _target;
                        ensureCookiesAreStillMutable(requestStore, 'cookies().set');
                        (_target = target).set.apply(_target, _to_consumable_array._(args));
                        return wrappedCookies;
                    };
                default:
                    return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
        }
    });
    return wrappedCookies;
}
function areCookiesMutableInCurrentPhase(requestStore) {
    return requestStore.phase === 'action';
}
/** Ensure that cookies() starts throwing on mutation
 * if we changed phases and can no longer mutate.
 *
 * This can happen when going:
 *   'render' -> 'after'
 *   'action' -> 'render'
 * */ function ensureCookiesAreStillMutable(requestStore, _callingExpression) {
    if (!areCookiesMutableInCurrentPhase(requestStore)) {
        // TODO: maybe we can give a more precise error message based on callingExpression?
        throw new ReadonlyRequestCookiesError();
    }
}
function responseCookiesToRequestCookies(responseCookies) {
    var requestCookies = new _cookies.RequestCookies(new Headers());
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = responseCookies.getAll()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var cookie = _step.value;
            requestCookies.set(cookie);
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
    return requestCookies;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/adapters/headers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _call_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_call_super.cjs [app-client] (ecmascript)");
var _class_call_check = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_create_class.cjs [app-client] (ecmascript)");
var _inherits = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_inherits.cjs [app-client] (ecmascript)");
var _instanceof = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_instanceof.cjs [app-client] (ecmascript)");
var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
var _wrap_native_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_wrap_native_super.cjs [app-client] (ecmascript)");
var _ts_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_ts_generator.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HeadersAdapter: null,
    ReadonlyHeadersError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HeadersAdapter: function HeadersAdapter1() {
        return HeadersAdapter;
    },
    ReadonlyHeadersError: function ReadonlyHeadersError1() {
        return ReadonlyHeadersError;
    }
});
var _reflect = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
var ReadonlyHeadersError = /*#__PURE__*/ function(Error1) {
    _inherits._(ReadonlyHeadersError, Error1);
    function ReadonlyHeadersError() {
        _class_call_check._(this, ReadonlyHeadersError);
        return _call_super._(this, ReadonlyHeadersError, [
            'Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers'
        ]);
    }
    _create_class._(ReadonlyHeadersError, null, [
        {
            key: "callable",
            value: function callable() {
                throw new ReadonlyHeadersError();
            }
        }
    ]);
    return ReadonlyHeadersError;
}(_wrap_native_super._(Error));
var HeadersAdapter = /*#__PURE__*/ function(Headers1) {
    _inherits._(HeadersAdapter, Headers1);
    function HeadersAdapter(headers) {
        _class_call_check._(this, HeadersAdapter);
        var _this;
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        _this = _call_super._(this, HeadersAdapter);
        _this.headers = new Proxy(headers, {
            get: function get(target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if ((typeof prop === "undefined" ? "undefined" : _type_of._(prop)) === 'symbol') {
                    return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
                var lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                var original = Object.keys(headers).find(function(o) {
                    return o.toLowerCase() === lowercased;
                });
                // If the original casing doesn't exist, return undefined.
                if (typeof original === 'undefined') return;
                // If the original casing exists, return the value.
                return _reflect.ReflectAdapter.get(target, original, receiver);
            },
            set: function set(target, prop, value, receiver) {
                if ((typeof prop === "undefined" ? "undefined" : _type_of._(prop)) === 'symbol') {
                    return _reflect.ReflectAdapter.set(target, prop, value, receiver);
                }
                var lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                var original = Object.keys(headers).find(function(o) {
                    return o.toLowerCase() === lowercased;
                });
                // If the original casing doesn't exist, use the prop as the key.
                return _reflect.ReflectAdapter.set(target, original !== null && original !== void 0 ? original : prop, value, receiver);
            },
            has: function has(target, prop) {
                if ((typeof prop === "undefined" ? "undefined" : _type_of._(prop)) === 'symbol') return _reflect.ReflectAdapter.has(target, prop);
                var lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                var original = Object.keys(headers).find(function(o) {
                    return o.toLowerCase() === lowercased;
                });
                // If the original casing doesn't exist, return false.
                if (typeof original === 'undefined') return false;
                // If the original casing exists, return true.
                return _reflect.ReflectAdapter.has(target, original);
            },
            deleteProperty: function deleteProperty(target, prop) {
                if ((typeof prop === "undefined" ? "undefined" : _type_of._(prop)) === 'symbol') return _reflect.ReflectAdapter.deleteProperty(target, prop);
                var lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                var original = Object.keys(headers).find(function(o) {
                    return o.toLowerCase() === lowercased;
                });
                // If the original casing doesn't exist, return true.
                if (typeof original === 'undefined') return true;
                // If the original casing exists, delete the property.
                return _reflect.ReflectAdapter.deleteProperty(target, original);
            }
        });
        return _this;
    }
    _create_class._(HeadersAdapter, [
        {
            /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ key: "merge",
            value: function merge(value) {
                if (Array.isArray(value)) return value.join(', ');
                return value;
            }
        },
        {
            key: "append",
            value: function append(name, value) {
                var existing = this.headers[name];
                if (typeof existing === 'string') {
                    this.headers[name] = [
                        existing,
                        value
                    ];
                } else if (Array.isArray(existing)) {
                    existing.push(value);
                } else {
                    this.headers[name] = value;
                }
            }
        },
        {
            key: "delete",
            value: function _delete(name) {
                delete this.headers[name];
            }
        },
        {
            key: "get",
            value: function get(name) {
                var value = this.headers[name];
                if (typeof value !== 'undefined') return this.merge(value);
                return null;
            }
        },
        {
            key: "has",
            value: function has(name) {
                return typeof this.headers[name] !== 'undefined';
            }
        },
        {
            key: "set",
            value: function set(name, value) {
                this.headers[name] = value;
            }
        },
        {
            key: "forEach",
            value: function forEach(callbackfn, thisArg) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array._(_step.value, 2), name = _step_value[0], value = _step_value[1];
                        callbackfn.call(thisArg, value, name, this);
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
            key: "entries",
            value: function entries() {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key, name, value, err;
                return _ts_generator._(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                6,
                                7,
                                8
                            ]);
                            _iterator = Object.keys(this.headers)[Symbol.iterator]();
                            _state.label = 2;
                        case 2:
                            if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                3,
                                5
                            ];
                            key = _step.value;
                            name = key.toLowerCase();
                            // We assert here that this is a string because we got it from the
                            // Object.keys() call above.
                            value = this.get(name);
                            return [
                                4,
                                [
                                    name,
                                    value
                                ]
                            ];
                        case 3:
                            _state.sent();
                            _state.label = 4;
                        case 4:
                            _iteratorNormalCompletion = true;
                            return [
                                3,
                                2
                            ];
                        case 5:
                            return [
                                3,
                                8
                            ];
                        case 6:
                            err = _state.sent();
                            _didIteratorError = true;
                            _iteratorError = err;
                            return [
                                3,
                                8
                            ];
                        case 7:
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                            return [
                                7
                            ];
                        case 8:
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            key: "keys",
            value: function keys() {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key, name, err;
                return _ts_generator._(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                6,
                                7,
                                8
                            ]);
                            _iterator = Object.keys(this.headers)[Symbol.iterator]();
                            _state.label = 2;
                        case 2:
                            if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                3,
                                5
                            ];
                            key = _step.value;
                            name = key.toLowerCase();
                            return [
                                4,
                                name
                            ];
                        case 3:
                            _state.sent();
                            _state.label = 4;
                        case 4:
                            _iteratorNormalCompletion = true;
                            return [
                                3,
                                2
                            ];
                        case 5:
                            return [
                                3,
                                8
                            ];
                        case 6:
                            err = _state.sent();
                            _didIteratorError = true;
                            _iteratorError = err;
                            return [
                                3,
                                8
                            ];
                        case 7:
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                            return [
                                7
                            ];
                        case 8:
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            key: "values",
            value: function values() {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key, value, err;
                return _ts_generator._(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                6,
                                7,
                                8
                            ]);
                            _iterator = Object.keys(this.headers)[Symbol.iterator]();
                            _state.label = 2;
                        case 2:
                            if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                3,
                                5
                            ];
                            key = _step.value;
                            // We assert here that this is a string because we got it from the
                            // Object.keys() call above.
                            value = this.get(key);
                            return [
                                4,
                                value
                            ];
                        case 3:
                            _state.sent();
                            _state.label = 4;
                        case 4:
                            _iteratorNormalCompletion = true;
                            return [
                                3,
                                2
                            ];
                        case 5:
                            return [
                                3,
                                8
                            ];
                        case 6:
                            err = _state.sent();
                            _didIteratorError = true;
                            _iteratorError = err;
                            return [
                                3,
                                8
                            ];
                        case 7:
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                            return [
                                7
                            ];
                        case 8:
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            key: Symbol.iterator,
            value: function value() {
                return this.entries();
            }
        }
    ], [
        {
            key: "seal",
            value: /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ function seal(headers) {
                return new Proxy(headers, {
                    get: function get(target, prop, receiver) {
                        switch(prop){
                            case 'append':
                            case 'delete':
                            case 'set':
                                return ReadonlyHeadersError.callable;
                            default:
                                return _reflect.ReflectAdapter.get(target, prop, receiver);
                        }
                    }
                });
            }
        },
        {
            key: "from",
            value: /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ function from(headers) {
                if (_instanceof._(headers, Headers)) return headers;
                return new HeadersAdapter(headers);
            }
        }
    ]);
    return HeadersAdapter;
}(_wrap_native_super._(Headers));
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/get-segment-param.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getParamProperties: null,
    getSegmentParam: null,
    isCatchAll: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getParamProperties: function getParamProperties1() {
        return getParamProperties;
    },
    getSegmentParam: function getSegmentParam1() {
        return getSegmentParam;
    },
    isCatchAll: function isCatchAll1() {
        return isCatchAll;
    }
});
var _interceptionroutes = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-client] (ecmascript)");
function getSegmentParam(segment) {
    var interceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find(function(marker) {
        return segment.startsWith(marker);
    });
    // if an interception marker is part of the path segment, we need to jump ahead
    // to the relevant portion for param parsing
    if (interceptionMarker) {
        segment = segment.slice(interceptionMarker.length);
    }
    if (segment.startsWith('[[...') && segment.endsWith(']]')) {
        return {
            // TODO-APP: Optional catchall does not currently work with parallel routes,
            // so for now aren't handling a potential interception marker.
            paramType: 'optional-catchall',
            paramName: segment.slice(5, -2)
        };
    }
    if (segment.startsWith('[...') && segment.endsWith(']')) {
        return {
            paramType: interceptionMarker ? "catchall-intercepted-".concat(interceptionMarker) : 'catchall',
            paramName: segment.slice(4, -1)
        };
    }
    if (segment.startsWith('[') && segment.endsWith(']')) {
        return {
            paramType: interceptionMarker ? "dynamic-intercepted-".concat(interceptionMarker) : 'dynamic',
            paramName: segment.slice(1, -1)
        };
    }
    return null;
}
function isCatchAll(type) {
    return type === 'catchall' || type === 'catchall-intercepted-(..)(..)' || type === 'catchall-intercepted-(.)' || type === 'catchall-intercepted-(..)' || type === 'catchall-intercepted-(...)' || type === 'optional-catchall';
}
function getParamProperties(paramType) {
    var repeat = false;
    var optional = false;
    switch(paramType){
        case 'catchall':
        case 'catchall-intercepted-(..)(..)':
        case 'catchall-intercepted-(.)':
        case 'catchall-intercepted-(..)':
        case 'catchall-intercepted-(...)':
            repeat = true;
            break;
        case 'optional-catchall':
            repeat = true;
            optional = true;
            break;
        case 'dynamic':
        case 'dynamic-intercepted-(..)(..)':
        case 'dynamic-intercepted-(.)':
        case 'dynamic-intercepted-(..)':
        case 'dynamic-intercepted-(...)':
            break;
        default:
            paramType;
    }
    return {
        repeat: repeat,
        optional: optional
    };
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _async_to_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_async_to_generator.cjs [app-client] (ecmascript)");
var _call_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_call_super.cjs [app-client] (ecmascript)");
var _class_call_check = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)");
var _inherits = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_inherits.cjs [app-client] (ecmascript)");
var _to_consumable_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
var _wrap_native_super = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_wrap_native_super.cjs [app-client] (ecmascript)");
var _ts_generator = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_ts_generator.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function DecodeError1() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function MiddlewareNotFoundError1() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function MissingStaticPage1() {
        return MissingStaticPage;
    },
    NormalizeError: function NormalizeError1() {
        return NormalizeError;
    },
    PageNotFoundError: function PageNotFoundError1() {
        return PageNotFoundError;
    },
    SP: function SP1() {
        return SP;
    },
    ST: function ST1() {
        return ST;
    },
    WEB_VITALS: function WEB_VITALS1() {
        return WEB_VITALS;
    },
    execOnce: function execOnce1() {
        return execOnce;
    },
    getDisplayName: function getDisplayName1() {
        return getDisplayName;
    },
    getLocationOrigin: function getLocationOrigin1() {
        return getLocationOrigin;
    },
    getURL: function getURL1() {
        return getURL;
    },
    isAbsoluteUrl: function isAbsoluteUrl1() {
        return isAbsoluteUrl;
    },
    isResSent: function isResSent1() {
        return isResSent;
    },
    loadGetInitialProps: function loadGetInitialProps1() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function normalizeRepeatedSlashes1() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function stringifyError1() {
        return stringifyError;
    }
});
var WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    var used = false;
    var result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn.apply(void 0, _to_consumable_array._(args));
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
var ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
var isAbsoluteUrl = function isAbsoluteUrl(url) {
    return ABSOLUTE_URL_REGEX.test(url);
};
function getLocationOrigin() {
    var _window_location = window.location, protocol = _window_location.protocol, hostname = _window_location.hostname, port = _window_location.port;
    return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}
function getURL() {
    var href = window.location.href;
    var origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    var urlParts = url.split('?');
    var urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?".concat(urlParts.slice(1).join('?')) : '');
}
function loadGetInitialProps(App, ctx) {
    return _async_to_generator._(function() {
        var _App_prototype, message, res, _tmp, props, message1;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    if ("TURBOPACK compile-time truthy", 1) {
                        ;
                        if ((_App_prototype = App.prototype) === null || _App_prototype === void 0 ? void 0 : _App_prototype.getInitialProps) {
                            message = '"'.concat(getDisplayName(App), '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.');
                            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                                value: "E1035",
                                enumerable: false,
                                configurable: true
                            });
                        }
                    }
                    // when called from _app `ctx` is nested in `ctx`
                    res = ctx.res || ctx.ctx && ctx.ctx.res;
                    if (!!App.getInitialProps) return [
                        3,
                        3
                    ];
                    if (!(ctx.ctx && ctx.Component)) return [
                        3,
                        2
                    ];
                    _tmp = {};
                    return [
                        4,
                        loadGetInitialProps(ctx.Component, ctx.ctx)
                    ];
                case 1:
                    // @ts-ignore pageProps default
                    return [
                        2,
                        (_tmp.pageProps = _state.sent(), _tmp)
                    ];
                case 2:
                    return [
                        2,
                        {}
                    ];
                case 3:
                    return [
                        4,
                        App.getInitialProps(ctx)
                    ];
                case 4:
                    props = _state.sent();
                    if (res && isResSent(res)) {
                        return [
                            2,
                            props
                        ];
                    }
                    if (!props) {
                        message1 = '"'.concat(getDisplayName(App), '.getInitialProps()" should resolve to an object. But found "').concat(props, '" instead.');
                        throw Object.defineProperty(new Error(message1), "__NEXT_ERROR_CODE", {
                            value: "E1025",
                            enumerable: false,
                            configurable: true
                        });
                    }
                    if ("TURBOPACK compile-time truthy", 1) {
                        if (Object.keys(props).length === 0 && !ctx.ctx) {
                            console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps"));
                        }
                    }
                    return [
                        2,
                        props
                    ];
            }
        });
    })();
}
var SP = typeof performance !== 'undefined';
var ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every(function(method) {
    return typeof performance[method] === 'function';
});
var DecodeError = /*#__PURE__*/ function(Error1) {
    _inherits._(DecodeError, Error1);
    function DecodeError() {
        _class_call_check._(this, DecodeError);
        return _call_super._(this, DecodeError, arguments);
    }
    return DecodeError;
}(_wrap_native_super._(Error));
var NormalizeError = /*#__PURE__*/ function(Error1) {
    _inherits._(NormalizeError, Error1);
    function NormalizeError() {
        _class_call_check._(this, NormalizeError);
        return _call_super._(this, NormalizeError, arguments);
    }
    return NormalizeError;
}(_wrap_native_super._(Error));
var PageNotFoundError = /*#__PURE__*/ function(Error1) {
    _inherits._(PageNotFoundError, Error1);
    function PageNotFoundError(page) {
        _class_call_check._(this, PageNotFoundError);
        var _this;
        _this = _call_super._(this, PageNotFoundError);
        _this.code = 'ENOENT';
        _this.name = 'PageNotFoundError';
        _this.message = "Cannot find module for page: ".concat(page);
        return _this;
    }
    return PageNotFoundError;
}(_wrap_native_super._(Error));
var MissingStaticPage = /*#__PURE__*/ function(Error1) {
    _inherits._(MissingStaticPage, Error1);
    function MissingStaticPage(page, message) {
        _class_call_check._(this, MissingStaticPage);
        var _this;
        _this = _call_super._(this, MissingStaticPage);
        _this.message = "Failed to load static file for page: ".concat(page, " ").concat(message);
        return _this;
    }
    return MissingStaticPage;
}(_wrap_native_super._(Error));
var MiddlewareNotFoundError = /*#__PURE__*/ function(Error1) {
    _inherits._(MiddlewareNotFoundError, Error1);
    function MiddlewareNotFoundError() {
        _class_call_check._(this, MiddlewareNotFoundError);
        var _this;
        _this = _call_super._(this, MiddlewareNotFoundError);
        _this.code = 'ENOENT';
        _this.message = "Cannot find the middleware module";
        return _this;
    }
    return MiddlewareNotFoundError;
}(_wrap_native_super._(Error));
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function assign1() {
        return assign;
    },
    searchParamsToUrlQuery: function searchParamsToUrlQuery1() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function urlQueryToSearchParams1() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    var query = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = searchParams.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array._(_step.value, 2), key = _step_value[0], value = _step_value[1];
            var existing = query[key];
            if (typeof existing === 'undefined') {
                query[key] = value;
            } else if (Array.isArray(existing)) {
                existing.push(value);
            } else {
                query[key] = [
                    existing,
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
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    var searchParams = new URLSearchParams();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(query)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array._(_step.value, 2), key = _step_value[0], value = _step_value[1];
            if (Array.isArray(value)) {
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = value[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var item = _step1.value;
                        searchParams.append(key, stringifyUrlQueryParam(item));
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
                searchParams.set(key, stringifyUrlQueryParam(value));
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
    return searchParams;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = searchParamsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var searchParams = _step.value;
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = searchParams.keys()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var key = _step1.value;
                    target.delete(key);
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
            var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
            try {
                for(var _iterator2 = searchParams.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                    var _step_value = _sliced_to_array._(_step2.value, 2), key1 = _step_value[0], value = _step_value[1];
                    target.append(key1, value);
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
    return target;
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseRelativeUrl", {
    enumerable: true,
    get: function get() {
        return parseRelativeUrl;
    }
});
var _utils = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
var _querystring = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)");
function parseRelativeUrl(url, base) {
    var parseQuery = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    var globalBase = new URL(typeof window === 'undefined' ? 'http://n' : (0, _utils.getLocationOrigin)());
    var resolvedBase = base ? new URL(base, globalBase) : url.startsWith('.') ? new URL(typeof window === 'undefined' ? 'http://n' : window.location.href) : globalBase;
    var _ref = url.startsWith('/') ? // Not using `origin` to support other protocols
    new URL("".concat(resolvedBase.protocol, "//").concat(resolvedBase.host).concat(url)) : new URL(url, resolvedBase), pathname = _ref.pathname, searchParams = _ref.searchParams, search = _ref.search, hash = _ref.hash, href = _ref.href, origin = _ref.origin;
    if (origin !== globalBase.origin) {
        throw Object.defineProperty(new Error("invariant: invalid relative URL, router received ".concat(url)), "__NEXT_ERROR_CODE", {
            value: "E159",
            enumerable: false,
            configurable: true
        });
    }
    return {
        auth: null,
        host: null,
        hostname: null,
        pathname: pathname,
        port: null,
        protocol: null,
        query: parseQuery ? (0, _querystring.searchParamsToUrlQuery)(searchParams) : undefined,
        search: search,
        hash: hash,
        href: href.slice(origin.length),
        // We don't know for relative URLs at this point since we set a custom, internal
        // base that isn't surfaced to users.
        slashes: null
    };
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/instant-validation/instant-validation-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
    InstantValidationError: null,
    isInstantValidationError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    InstantValidationError: function InstantValidationError1() {
        return InstantValidationError;
    },
    isInstantValidationError: function isInstantValidationError1() {
        return isInstantValidationError;
    }
});
var INSTANT_VALIDATION_ERROR_DIGEST = 'INSTANT_VALIDATION_ERROR';
function isInstantValidationError(err) {
    return !!(err && (typeof err === "undefined" ? "undefined" : _type_of._(err)) === 'object' && _instanceof._(err, Error) && err.digest === INSTANT_VALIDATION_ERROR_DIGEST);
}
var InstantValidationError = /*#__PURE__*/ function(Error1) {
    _inherits._(InstantValidationError, Error1);
    function InstantValidationError() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _class_call_check._(this, InstantValidationError);
        var _this;
        _this = _call_super._(this, InstantValidationError, _to_consumable_array._(args)), _this.digest = INSTANT_VALIDATION_ERROR_DIGEST;
        return _this;
    }
    return InstantValidationError;
}(_wrap_native_super._(Error));
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/instant-validation/instant-samples.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _sliced_to_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)");
var _to_consumable_array = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assertRootParamInSamples: null,
    createCookiesFromSample: null,
    createDraftModeForValidation: null,
    createExhaustiveParamsProxy: null,
    createExhaustiveSearchParamsProxy: null,
    createExhaustiveURLSearchParamsProxy: null,
    createHeadersFromSample: null,
    createRelativeURLFromSamples: null,
    createValidationSampleTracking: null,
    trackMissingSampleError: null,
    trackMissingSampleErrorAndThrow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assertRootParamInSamples: function assertRootParamInSamples1() {
        return assertRootParamInSamples;
    },
    createCookiesFromSample: function createCookiesFromSample1() {
        return createCookiesFromSample;
    },
    createDraftModeForValidation: function createDraftModeForValidation1() {
        return createDraftModeForValidation;
    },
    createExhaustiveParamsProxy: function createExhaustiveParamsProxy1() {
        return createExhaustiveParamsProxy;
    },
    createExhaustiveSearchParamsProxy: function createExhaustiveSearchParamsProxy1() {
        return createExhaustiveSearchParamsProxy;
    },
    createExhaustiveURLSearchParamsProxy: function createExhaustiveURLSearchParamsProxy1() {
        return createExhaustiveURLSearchParamsProxy;
    },
    createHeadersFromSample: function createHeadersFromSample1() {
        return createHeadersFromSample;
    },
    createRelativeURLFromSamples: function createRelativeURLFromSamples1() {
        return createRelativeURLFromSamples;
    },
    createValidationSampleTracking: function createValidationSampleTracking1() {
        return createValidationSampleTracking;
    },
    trackMissingSampleError: function trackMissingSampleError1() {
        return trackMissingSampleError;
    },
    trackMissingSampleErrorAndThrow: function trackMissingSampleErrorAndThrow1() {
        return trackMissingSampleErrorAndThrow;
    }
});
var _cookies = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/cookies.js [app-client] (ecmascript)");
var _requestcookies = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js [app-client] (ecmascript)");
var _headers = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/adapters/headers.js [app-client] (ecmascript)");
var _getsegmentparam = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/get-segment-param.js [app-client] (ecmascript)");
var _parserelativeurl = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js [app-client] (ecmascript)");
var _invarianterror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
var _instantvalidationerror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/instant-validation/instant-validation-error.js [app-client] (ecmascript)");
var _workunitasyncstorageexternal = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
var _reflectutils = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
function createValidationSampleTracking() {
    return {
        missingSampleErrors: []
    };
}
function getExpectedSampleTracking() {
    var validationSampleTracking = null;
    var workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'request':
            case 'validation-client':
                var _workUnitStore_validationSampleTracking;
                // TODO(instant-validation-build): do we need any special handling for caches?
                validationSampleTracking = (_workUnitStore_validationSampleTracking = workUnitStore.validationSampleTracking) !== null && _workUnitStore_validationSampleTracking !== void 0 ? _workUnitStore_validationSampleTracking : null;
                break;
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
            case 'prerender-legacy':
            case 'prerender-ppr':
            case 'prerender-client':
            case 'prerender':
            case 'prerender-runtime':
            case 'generate-static-params':
                break;
            default:
                workUnitStore;
        }
    }
    if (!validationSampleTracking) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Expected to have a workUnitStore that provides validationSampleTracking'), "__NEXT_ERROR_CODE", {
            value: "E1110",
            enumerable: false,
            configurable: true
        });
    }
    return validationSampleTracking;
}
function trackMissingSampleError(error) {
    var validationSampleTracking = getExpectedSampleTracking();
    validationSampleTracking.missingSampleErrors.push(error);
}
function trackMissingSampleErrorAndThrow(error) {
    // TODO(instant-validation-build): this should abort the render
    trackMissingSampleError(error);
    throw error;
}
function createCookiesFromSample(sampleCookies, route) {
    var declaredNames = new Set();
    var cookies = new _cookies.RequestCookies(new Headers());
    if (sampleCookies) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = sampleCookies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var cookie = _step.value;
                declaredNames.add(cookie.name);
                if (cookie.value !== null) {
                    cookies.set(cookie.name, cookie.value);
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
    var sealed = _requestcookies.RequestCookiesAdapter.seal(cookies);
    return new Proxy(sealed, {
        get: function get(target, prop, receiver) {
            if (prop === 'has') {
                var originalMethod = Reflect.get(target, prop, receiver);
                var wrappedMethod = function wrappedMethod(name) {
                    if (!declaredNames.has(name)) {
                        trackMissingSampleErrorAndThrow(createMissingCookieSampleError(route, name));
                    }
                    return originalMethod.call(target, name);
                };
                return wrappedMethod;
            }
            if (prop === 'get') {
                var originalMethod1 = Reflect.get(target, prop, receiver);
                var wrappedMethod1 = function wrappedMethod(nameOrCookie) {
                    var name;
                    if (typeof nameOrCookie === 'string') {
                        name = nameOrCookie;
                    } else if (nameOrCookie && (typeof nameOrCookie === "undefined" ? "undefined" : _type_of._(nameOrCookie)) === 'object' && typeof nameOrCookie.name === 'string') {
                        name = nameOrCookie.name;
                    } else {
                        // This is an invalid input. Pass it through to the original method so it can error.
                        return originalMethod1.call(target, nameOrCookie);
                    }
                    if (!declaredNames.has(name)) {
                        trackMissingSampleErrorAndThrow(createMissingCookieSampleError(route, name));
                    }
                    return originalMethod1.call(target, name);
                };
                return wrappedMethod1;
            }
            // TODO(instant-validation-build): what should getAll do?
            // Maybe we should only allow it if there's an array (possibly empty?)
            return Reflect.get(target, prop, receiver);
        }
    });
}
function createMissingCookieSampleError(route, name) {
    return Object.defineProperty(new _instantvalidationerror.InstantValidationError('Route "'.concat(route, '" accessed cookie "').concat(name, '" which is not defined in the `samples` ') + "of `unstable_instant`. Add it to the sample's `cookies` array, " + 'or `{ name: "'.concat(name, '", value: null }` if it should be absent.')), "__NEXT_ERROR_CODE", {
        value: "E1115",
        enumerable: false,
        configurable: true
    });
}
function createHeadersFromSample(rawSampleHeaders, sampleCookies, route) {
    // If we have cookie samples, add a `cookie` header to match.
    // Accessing it will be implicitly allowed by the proxy --
    // if the user defined some cookies, accessing the "cookie" header is also fine.
    var sampleHeaders = rawSampleHeaders ? _to_consumable_array._(rawSampleHeaders) : [];
    if (sampleHeaders.find(function(param) {
        var _param = _sliced_to_array._(param, 1), name = _param[0];
        return name.toLowerCase() === 'cookie';
    })) {
        throw Object.defineProperty(new _instantvalidationerror.InstantValidationError('Invalid sample: Defining cookies via a "cookie" header is not supported. Use `cookies: [{ name: ..., value: ... }]` instead.'), "__NEXT_ERROR_CODE", {
            value: "E1111",
            enumerable: false,
            configurable: true
        });
    }
    if (sampleCookies) {
        var cookieHeaderValue = sampleCookies.toString();
        sampleHeaders.push([
            'cookie',
            // if the `cookies` samples were empty, or they were all `null`, then we have no cookies,
            // and the header isn't present, but should remains readable, so we set it to null.
            cookieHeaderValue !== '' ? cookieHeaderValue : null
        ]);
    }
    var declaredNames = new Set();
    var headersInit = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = sampleHeaders[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array._(_step.value, 2), name = _step_value[0], value = _step_value[1];
            declaredNames.add(name.toLowerCase());
            if (value !== null) {
                headersInit[name.toLowerCase()] = value;
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
    var sealed = _headers.HeadersAdapter.seal(_headers.HeadersAdapter.from(headersInit));
    return new Proxy(sealed, {
        get: function get(target, prop, receiver) {
            if (prop === 'get' || prop === 'has') {
                var originalMethod = Reflect.get(target, prop, receiver);
                var patchedMethod = function patchedMethod(rawName) {
                    var name = rawName.toLowerCase();
                    if (!declaredNames.has(name)) {
                        trackMissingSampleErrorAndThrow(Object.defineProperty(new _instantvalidationerror.InstantValidationError('Route "'.concat(route, '" accessed header "').concat(name, '" which is not defined in the `samples` ') + "of `unstable_instant`. Add it to the sample's `headers` array, " + 'or `["'.concat(name, '", null]` if it should be absent.')), "__NEXT_ERROR_CODE", {
                            value: "E1116",
                            enumerable: false,
                            configurable: true
                        }));
                    }
                    // typescript can't reconcile a union of functions with a union of return types,
                    // so we have to cast the original return type away
                    return originalMethod.call(target, name);
                };
                return patchedMethod;
            }
            return Reflect.get(target, prop, receiver);
        }
    });
}
function createDraftModeForValidation() {
    // Create a minimal DraftModeProvider-compatible object
    // that always reports draft mode as disabled.
    //
    // private properties that can't be set from outside the class.
    return {
        get isEnabled () {
            return false;
        },
        enable: function enable() {
            throw Object.defineProperty(new Error('Draft mode cannot be enabled during build-time instant validation.'), "__NEXT_ERROR_CODE", {
                value: "E1092",
                enumerable: false,
                configurable: true
            });
        },
        disable: function disable() {
            throw Object.defineProperty(new Error('Draft mode cannot be disabled during build-time instant validation.'), "__NEXT_ERROR_CODE", {
                value: "E1094",
                enumerable: false,
                configurable: true
            });
        }
    };
}
function createExhaustiveParamsProxy(underlyingParams, declaredParamNames, route) {
    return new Proxy(underlyingParams, {
        get: function get(target, prop, receiver) {
            if (typeof prop === 'string' && !_reflectutils.wellKnownProperties.has(prop) && // Only error when accessing a param that is part of the route but wasn't provided.
            // accessing properties that aren't expected to be a valid param value is fine.
            prop in underlyingParams && !declaredParamNames.has(prop)) {
                trackMissingSampleErrorAndThrow(Object.defineProperty(new _instantvalidationerror.InstantValidationError('Route "'.concat(route, '" accessed param "').concat(prop, '" which is not defined in the `samples` ') + "of `unstable_instant`. Add it to the sample's `params` object."), "__NEXT_ERROR_CODE", {
                    value: "E1095",
                    enumerable: false,
                    configurable: true
                }));
            }
            return Reflect.get(target, prop, receiver);
        }
    });
}
function createExhaustiveSearchParamsProxy(searchParams, declaredSearchParamNames, route) {
    return new Proxy(searchParams, {
        get: function get(target, prop, receiver) {
            if (typeof prop === 'string' && !_reflectutils.wellKnownProperties.has(prop) && !declaredSearchParamNames.has(prop)) {
                trackMissingSampleErrorAndThrow(createMissingSearchParamSampleError(route, prop));
            }
            return Reflect.get(target, prop, receiver);
        },
        has: function has(target, prop) {
            if (typeof prop === 'string' && !_reflectutils.wellKnownProperties.has(prop) && !declaredSearchParamNames.has(prop)) {
                trackMissingSampleErrorAndThrow(createMissingSearchParamSampleError(route, prop));
            }
            return Reflect.has(target, prop);
        }
    });
}
function createExhaustiveURLSearchParamsProxy(searchParams, declaredSearchParamNames, route) {
    return new Proxy(searchParams, {
        get: function get(target, prop, receiver) {
            // Intercept method calls that access specific param names
            if (prop === 'get' || prop === 'getAll' || prop === 'has') {
                var originalMathod = Reflect.get(target, prop, receiver);
                return function(name) {
                    if (typeof name === 'string' && !declaredSearchParamNames.has(name)) {
                        trackMissingSampleErrorAndThrow(createMissingSearchParamSampleError(route, name));
                    }
                    return originalMathod.call(target, name);
                };
            }
            var value = Reflect.get(target, prop, receiver);
            // Prevent `TypeError: Value of "this" must be of type URLSearchParams` for methods
            if (typeof value === 'function' && !Object.hasOwn(target, prop)) {
                return value.bind(target);
            }
            return value;
        }
    });
}
function createMissingSearchParamSampleError(route, name) {
    return Object.defineProperty(new _instantvalidationerror.InstantValidationError('Route "'.concat(route, '" accessed searchParam "').concat(name, '" which is not defined in the `samples` ') + "of `unstable_instant`. Add it to the sample's `searchParams` object, " + 'or `{ "'.concat(name, '": null }` if it should be absent.')), "__NEXT_ERROR_CODE", {
        value: "E1098",
        enumerable: false,
        configurable: true
    });
}
function createRelativeURLFromSamples(route, sampleParams, sampleSearchParams) {
    // Build searchParams query object and URL search string from sample
    var pathname = createPathnameFromRouteAndSampleParams(route, sampleParams !== null && sampleParams !== void 0 ? sampleParams : {});
    var search = '';
    if (sampleSearchParams) {
        var qs = createURLSearchParamsFromSample(sampleSearchParams).toString();
        if (qs) {
            search = '?' + qs;
        }
    }
    return (0, _parserelativeurl.parseRelativeUrl)(pathname + search, undefined, true);
}
function createURLSearchParamsFromSample(sampleSearchParams) {
    var result = new URLSearchParams();
    if (sampleSearchParams) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.entries(sampleSearchParams)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array._(_step.value, 2), key = _step_value[0], value = _step_value[1];
                if (value === null || value === undefined) continue;
                if (Array.isArray(value)) {
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = value[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var v = _step1.value;
                            result.append(key, v);
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
                    result.set(key, value);
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
    return result;
}
/**
 * Substitute sample params into `workStore.route` to create a plausible pathname.
 * TODO(instant-validation-build): this logic is somewhat hacky and likely incomplete,
 * but it should be good enough for some initial testing.
 */ function createPathnameFromRouteAndSampleParams(route, params) {
    var interpolatedSegments = [];
    var rawSegments = route.split('/');
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = rawSegments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var rawSegment = _step.value;
            var param = (0, _getsegmentparam.getSegmentParam)(rawSegment);
            if (param) {
                switch(param.paramType){
                    case 'catchall':
                    case 'optional-catchall':
                        {
                            var _interpolatedSegments;
                            var paramValue = params[param.paramName];
                            if (paramValue === undefined) {
                                // The value for the param was not provided. `usePathname` will detect this and throw
                                // before this can surface to userspace. Use `[...NAME]` as a placeholder for the param value
                                // in case it pops up somewhere unexpectedly.
                                paramValue = [
                                    rawSegment
                                ];
                            } else if (!Array.isArray(paramValue)) {
                                // NOTE: this happens outside of render, so we don't need `trackMissingSampleErrorAndThrow`
                                throw Object.defineProperty(new _instantvalidationerror.InstantValidationError("Expected sample param value for segment '".concat(rawSegment, "' to be an array of strings, got ").concat(typeof paramValue === "undefined" ? "undefined" : _type_of._(paramValue))), "__NEXT_ERROR_CODE", {
                                    value: "E1104",
                                    enumerable: false,
                                    configurable: true
                                });
                            }
                            (_interpolatedSegments = interpolatedSegments).push.apply(_interpolatedSegments, _to_consumable_array._(paramValue.map(function(v) {
                                return encodeURIComponent(v);
                            })));
                            break;
                        }
                    case 'dynamic':
                        {
                            var paramValue1 = params[param.paramName];
                            if (paramValue1 === undefined) {
                                // The value for the param was not provided. `usePathname` will detect this and throw
                                // before this can surface to userspace. Use `[NAME]` as a placeholder for the param value
                                // in case it pops up somewhere unexpectedly.
                                paramValue1 = rawSegment;
                            } else if (typeof paramValue1 !== 'string') {
                                // NOTE: this happens outside of render, so we don't need `trackMissingSampleErrorAndThrow`
                                throw Object.defineProperty(new _instantvalidationerror.InstantValidationError("Expected sample param value for segment '".concat(rawSegment, "' to be a string, got ").concat(typeof paramValue1 === "undefined" ? "undefined" : _type_of._(paramValue1))), "__NEXT_ERROR_CODE", {
                                    value: "E1108",
                                    enumerable: false,
                                    configurable: true
                                });
                            }
                            interpolatedSegments.push(encodeURIComponent(paramValue1));
                            break;
                        }
                    case 'catchall-intercepted-(..)(..)':
                    case 'catchall-intercepted-(.)':
                    case 'catchall-intercepted-(..)':
                    case 'catchall-intercepted-(...)':
                    case 'dynamic-intercepted-(..)(..)':
                    case 'dynamic-intercepted-(.)':
                    case 'dynamic-intercepted-(..)':
                    case 'dynamic-intercepted-(...)':
                        {
                            // TODO(instant-validation-build): i don't know how these are supposed to work, or if we can even get them here
                            throw Object.defineProperty(new _invarianterror.InvariantError('Not implemented: Validation of interception routes'), "__NEXT_ERROR_CODE", {
                                value: "E1106",
                                enumerable: false,
                                configurable: true
                            });
                        }
                    default:
                        {
                            param.paramType;
                        }
                }
            } else {
                interpolatedSegments.push(rawSegment);
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
    return interpolatedSegments.join('/');
}
function assertRootParamInSamples(workStore, sampleParams, paramName) {
    if (sampleParams && paramName in sampleParams) {
    // The param is defined in the samples.
    } else {
        var route = workStore.route;
        trackMissingSampleErrorAndThrow(Object.defineProperty(new _instantvalidationerror.InstantValidationError('Route "'.concat(route, '" accessed root param "').concat(paramName, '" which is not defined in the `samples` ') + "of `unstable_instant`. Add it to the sample's `params` object."), "__NEXT_ERROR_CODE", {
            value: "E1114",
            enumerable: false,
            configurable: true
        }));
    }
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/request/search-params.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createPrerenderSearchParamsForClientPage: null,
    createSearchParamsFromClient: null,
    createServerSearchParamsForMetadata: null,
    createServerSearchParamsForServerPage: null,
    makeErroringSearchParamsForUseCache: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createPrerenderSearchParamsForClientPage: function createPrerenderSearchParamsForClientPage1() {
        return createPrerenderSearchParamsForClientPage;
    },
    createSearchParamsFromClient: function createSearchParamsFromClient1() {
        return createSearchParamsFromClient;
    },
    createServerSearchParamsForMetadata: function createServerSearchParamsForMetadata1() {
        return createServerSearchParamsForMetadata;
    },
    createServerSearchParamsForServerPage: function createServerSearchParamsForServerPage1() {
        return createServerSearchParamsForServerPage;
    },
    makeErroringSearchParamsForUseCache: function makeErroringSearchParamsForUseCache1() {
        return makeErroringSearchParamsForUseCache;
    }
});
var _workasyncstorageexternal = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
var _varyparams = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/vary-params.js [app-client] (ecmascript)");
var _reflect = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
var _dynamicrendering = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)");
var _workunitasyncstorageexternal = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
var _invarianterror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
var _dynamicrenderingutils = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/dynamic-rendering-utils.js [app-client] (ecmascript)");
var _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-client] (ecmascript)");
var _reflectutils = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
var _utils = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/request/utils.js [app-client] (ecmascript)");
var _stagedrendering = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/staged-rendering.js [app-client] (ecmascript)");
function createSearchParamsFromClient(underlyingSearchParams) {
    var workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to be initialized'), "__NEXT_ERROR_CODE", {
            value: "E1068",
            enumerable: false,
            configurable: true
        });
    }
    var workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderSearchParams(workStore, workUnitStore);
            case 'validation-client':
                {
                    return createClientSearchParamsInValidation(underlyingSearchParams, workStore, workUnitStore);
                }
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError('createSearchParamsFromClient should not be called in a runtime prerender.'), "__NEXT_ERROR_CODE", {
                    value: "E769",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createSearchParamsFromClient should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E739",
                    enumerable: false,
                    configurable: true
                });
            case 'generate-static-params':
                throw Object.defineProperty(new _invarianterror.InvariantError('createSearchParamsFromClient should not be called inside generateStaticParams.'), "__NEXT_ERROR_CODE", {
                    value: "E1133",
                    enumerable: false,
                    configurable: true
                });
            case 'request':
                // Client searchParams are not runtime prefetchable
                var isRuntimePrefetchable = false;
                return createRenderSearchParams(underlyingSearchParams, workStore, workUnitStore, isRuntimePrefetchable);
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createServerSearchParamsForMetadata(underlyingSearchParams, isRuntimePrefetchable) {
    var metadataVaryParamsAccumulator = (0, _varyparams.getMetadataVaryParamsAccumulator)();
    return createServerSearchParamsForServerPage(underlyingSearchParams, metadataVaryParamsAccumulator, isRuntimePrefetchable);
}
function createServerSearchParamsForServerPage(underlyingSearchParams, varyParamsAccumulator, isRuntimePrefetchable) {
    var workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to be initialized'), "__NEXT_ERROR_CODE", {
            value: "E1068",
            enumerable: false,
            configurable: true
        });
    }
    var workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderSearchParams(workStore, workUnitStore);
            case 'validation-client':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerSearchParamsForServerPage should not be called in a client validation.'), "__NEXT_ERROR_CODE", {
                    value: "E1066",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerSearchParamsForServerPage should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E747",
                    enumerable: false,
                    configurable: true
                });
            case 'generate-static-params':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerSearchParamsForServerPage should not be called inside generateStaticParams.'), "__NEXT_ERROR_CODE", {
                    value: "E1128",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                return createRuntimePrerenderSearchParams(underlyingSearchParams, workUnitStore, varyParamsAccumulator, isRuntimePrefetchable);
            case 'request':
                return createRenderSearchParams(underlyingSearchParams, workStore, workUnitStore, isRuntimePrefetchable);
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createPrerenderSearchParamsForClientPage() {
    var workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to be initialized'), "__NEXT_ERROR_CODE", {
            value: "E1068",
            enumerable: false,
            configurable: true
        });
    }
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    }
    var workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
                // We're prerendering in a mode that aborts (cacheComponents) and should stall
                // the promise to ensure the RSC side is considered dynamic
                return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, '`searchParams`');
            case 'validation-client':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderSearchParamsForClientPage should not be called in a client validation.'), "__NEXT_ERROR_CODE", {
                    value: "E1061",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderSearchParamsForClientPage should not be called in a runtime prerender.'), "__NEXT_ERROR_CODE", {
                    value: "E768",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderSearchParamsForClientPage should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E746",
                    enumerable: false,
                    configurable: true
                });
            case 'generate-static-params':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderSearchParamsForClientPage should not be called inside generateStaticParams.'), "__NEXT_ERROR_CODE", {
                    value: "E1124",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'request':
                return Promise.resolve({});
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createStaticPrerenderSearchParams(workStore, prerenderStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    }
    switch(prerenderStore.type){
        case 'prerender':
        case 'prerender-client':
            // We are in a cacheComponents (PPR or otherwise) prerender
            return makeHangingSearchParams(workStore, prerenderStore);
        case 'prerender-ppr':
        case 'prerender-legacy':
            // We are in a legacy static generation and need to interrupt the
            // prerender when search params are accessed.
            return makeErroringSearchParams(workStore, prerenderStore);
        default:
            return prerenderStore;
    }
}
function createRuntimePrerenderSearchParams(underlyingSearchParams, workUnitStore, varyParamsAccumulator, isRuntimePrefetchable) {
    var underlyingSearchParamsWithVarying = varyParamsAccumulator !== null ? (0, _varyparams.createVaryingSearchParams)(varyParamsAccumulator, underlyingSearchParams) : underlyingSearchParams;
    var result = makeUntrackedSearchParams(underlyingSearchParamsWithVarying);
    var stagedRendering = workUnitStore.stagedRendering;
    if (!stagedRendering) {
        return result;
    }
    var stage = isRuntimePrefetchable ? _stagedrendering.RenderStage.EarlyRuntime : _stagedrendering.RenderStage.Runtime;
    return stagedRendering.waitForStage(stage).then(function() {
        return result;
    });
}
function createRenderSearchParams(underlyingSearchParams, workStore, requestStore, isRuntimePrefetchable) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            // Semantically we only need the dev tracking when running in `next dev`
            // but since you would never use next dev with production NODE_ENV we use this
            // as a proxy so we can statically exclude this code from production builds.
            return makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams, workStore, requestStore, isRuntimePrefetchable);
        } else //TURBOPACK unreachable
        {
            var _requestStore_validationSamples_searchParams;
            var createExhaustiveSearchParamsProxy;
            var declaredKeys;
        /*TURBOPACK member replacement*/ }
    }
}
var CachedSearchParams = new WeakMap();
var CachedSearchParamsForUseCache = new WeakMap();
function makeHangingSearchParams(workStore, prerenderStore) {
    var cachedSearchParams = CachedSearchParams.get(prerenderStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    var promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, '`searchParams`');
    var proxiedPromise = new Proxy(promise, {
        get: function get(target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it.
                // We know it isn't a dynamic access because it can only be something
                // that was previously written to the promise and thus not an underlying searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            switch(prop){
                case 'then':
                    {
                        var expression = '`await searchParams`, `searchParams.then`, or similar';
                        (0, _dynamicrendering.annotateDynamicAccess)(expression, prerenderStore);
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
                case 'status':
                    {
                        var expression1 = '`use(searchParams)`, `searchParams.status`, or similar';
                        (0, _dynamicrendering.annotateDynamicAccess)(expression1, prerenderStore);
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
                default:
                    {
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
            }
        }
    });
    CachedSearchParams.set(prerenderStore, proxiedPromise);
    return proxiedPromise;
}
function makeErroringSearchParams(workStore, prerenderStore) {
    var cachedSearchParams = CachedSearchParams.get(workStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    var underlyingSearchParams = {};
    // For search params we don't construct a ReactPromise because we want to interrupt
    // rendering on any property access that was not set from outside and so we only want
    // to have properties like value and status if React sets them.
    var promise = Promise.resolve(underlyingSearchParams);
    var proxiedPromise = new Proxy(promise, {
        get: function get(target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it.
                // We know it isn't a dynamic access because it can only be something
                // that was previously written to the promise and thus not an underlying searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            if (typeof prop === 'string' && prop === 'then') {
                var expression = '`await searchParams`, `searchParams.then`, or similar';
                if (workStore.dynamicShouldError) {
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                } else if (prerenderStore.type === 'prerender-ppr') {
                    // PPR Prerender (no cacheComponents)
                    (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                } else {
                    // Legacy Prerender
                    (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        }
    });
    CachedSearchParams.set(workStore, proxiedPromise);
    return proxiedPromise;
}
function makeErroringSearchParamsForUseCache() {
    var workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to be initialized'), "__NEXT_ERROR_CODE", {
            value: "E1068",
            enumerable: false,
            configurable: true
        });
    }
    var cachedSearchParams = CachedSearchParamsForUseCache.get(workStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    var promise = Promise.resolve({});
    var proxiedPromise = new Proxy(promise, {
        get: function get(target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it. We know it
                // isn't a dynamic access because it can only be something that was
                // previously written to the promise and thus not an underlying
                // searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            if (typeof prop === 'string' && (prop === 'then' || !_reflectutils.wellKnownProperties.has(prop))) {
                (0, _utils.throwForSearchParamsAccessInUseCache)(workStore, get);
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        }
    });
    CachedSearchParamsForUseCache.set(workStore, proxiedPromise);
    return proxiedPromise;
}
function makeUntrackedSearchParams(underlyingSearchParams) {
    var cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    var promise = Promise.resolve(underlyingSearchParams);
    CachedSearchParams.set(underlyingSearchParams, promise);
    return promise;
}
function makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams, workStore, requestStore, isRuntimePrefetchable) {
    if (requestStore.asyncApiPromises) {
        // Do not cache the resulting promise. If we do, we'll only show the first "awaited at"
        // across all segments that receive searchParams.
        return makeUntrackedSearchParamsWithDevWarningsImpl(underlyingSearchParams, workStore, requestStore, isRuntimePrefetchable);
    } else {
        var cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
        if (cachedSearchParams) {
            return cachedSearchParams;
        }
        var promise = makeUntrackedSearchParamsWithDevWarningsImpl(underlyingSearchParams, workStore, requestStore, isRuntimePrefetchable);
        CachedSearchParams.set(requestStore, promise);
        return promise;
    }
}
function makeUntrackedSearchParamsWithDevWarningsImpl(underlyingSearchParams, workStore, requestStore, isRuntimePrefetchable) {
    var promiseInitialized = {
        current: false
    };
    var proxiedUnderlying = instrumentSearchParamsObjectWithDevWarnings(underlyingSearchParams, workStore, promiseInitialized);
    var promise;
    if (requestStore.asyncApiPromises) {
        // We wrap each instance of searchParams in a `new Promise()`.
        // This is important when all awaits are in third party which would otherwise
        // track all the way to the internal params.
        var sharedSearchParamsParent = isRuntimePrefetchable ? requestStore.asyncApiPromises.earlySharedSearchParamsParent : requestStore.asyncApiPromises.sharedSearchParamsParent;
        promise = new Promise(function(resolve, reject) {
            sharedSearchParamsParent.then(function() {
                return resolve(proxiedUnderlying);
            }, reject);
        });
        // @ts-expect-error
        promise.displayName = 'searchParams';
    } else {
        promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(proxiedUnderlying, requestStore, _stagedrendering.RenderStage.Runtime);
    }
    promise.then(function() {
        promiseInitialized.current = true;
    }, // is aborted before it can reach the runtime stage.
    // In that case, we have to prevent an unhandled rejection from the promise
    // created by this `.then()` call.
    // This does not affect the `promiseInitialized` logic above,
    // because `proxiedUnderlying` will not be used to resolve the promise,
    // so there's no risk of any of its properties being accessed and triggering
    // an undesireable warning.
    ignoreReject);
    return instrumentSearchParamsPromiseWithDevWarnings(underlyingSearchParams, promise, workStore);
}
function ignoreReject() {}
function instrumentSearchParamsObjectWithDevWarnings(underlyingSearchParams, workStore, promiseInitialized) {
    // We have an unfortunate sequence of events that requires this initialization logic. We want to instrument the underlying
    // searchParams object to detect if you are accessing values in dev. This is used for warnings and for things like the static prerender
    // indicator. However when we pass this proxy to our Promise.resolve() below the VM checks if the resolved value is a promise by looking
    // at the `.then` property. To our dynamic tracking logic this is indistinguishable from a `then` searchParam and so we would normally trigger
    // dynamic tracking. However we know that this .then is not real dynamic access, it's just how thenables resolve in sequence. So we introduce
    // this initialization concept so we omit the dynamic check until after we've constructed our resolved promise.
    return new Proxy(underlyingSearchParams, {
        get: function get(target, prop, receiver) {
            if (typeof prop === 'string' && promiseInitialized.current) {
                if (workStore.dynamicShouldError) {
                    var expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        has: function has(target, prop) {
            if (typeof prop === 'string') {
                if (workStore.dynamicShouldError) {
                    var expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys: function ownKeys(target) {
            if (workStore.dynamicShouldError) {
                var expression = '`{...searchParams}`, `Object.keys(searchParams)`, or similar';
                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
            }
            return Reflect.ownKeys(target);
        }
    });
}
function instrumentSearchParamsPromiseWithDevWarnings(underlyingSearchParams, promise, workStore) {
    // Track which properties we should warn for.
    var proxiedProperties = new Set();
    Object.keys(underlyingSearchParams).forEach(function(prop) {
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    return new Proxy(promise, {
        get: function get(target, prop, receiver) {
            if (prop === 'then' && workStore.dynamicShouldError) {
                var expression = '`searchParams.then`';
                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
            }
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    var expression1 = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    warnForSyncAccess(workStore.route, expression1);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set: function set(target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has: function has(target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    var expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    warnForSyncAccess(workStore.route, expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys: function ownKeys(target) {
            var expression = '`Object.keys(searchParams)` or similar';
            warnForSyncAccess(workStore.route, expression);
            return Reflect.ownKeys(target);
        }
    });
}
var warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createSearchAccessError);
function createSearchAccessError(route, expression) {
    var prefix = route ? 'Route "'.concat(route, '" ') : 'This route ';
    return Object.defineProperty(new Error("".concat(prefix, "used ").concat(expression, ". ") + "`searchParams` is a Promise and must be unwrapped with `await` or `React.use()` before accessing its properties. " + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis"), "__NEXT_ERROR_CODE", {
        value: "E848",
        enumerable: false,
        configurable: true
    });
}
function createClientSearchParamsInValidation(underlyingSearchParams, workStore, workUnitStore) {
    var _ref;
    var _workUnitStore_validationSamples;
    var createExhaustiveSearchParamsProxy = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/instant-validation/instant-samples.js [app-client] (ecmascript)").createExhaustiveSearchParamsProxy;
    var declaredKeys = new Set(Object.keys((_ref = (_workUnitStore_validationSamples = workUnitStore.validationSamples) == null ? void 0 : _workUnitStore_validationSamples.searchParams) !== null && _ref !== void 0 ? _ref : {}));
    underlyingSearchParams = createExhaustiveSearchParamsProxy(underlyingSearchParams, declaredKeys, workStore.route);
    return Promise.resolve(underlyingSearchParams);
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/dynamic-access-async-storage-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "dynamicAccessAsyncStorageInstance", {
    enumerable: true,
    get: function get() {
        return dynamicAccessAsyncStorageInstance;
    }
});
var _asynclocalstorage = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/async-local-storage.js [app-client] (ecmascript)");
var dynamicAccessAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/dynamic-access-async-storage.external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "dynamicAccessAsyncStorage", {
    enumerable: true,
    get: function get() {
        return _dynamicaccessasyncstorageinstance.dynamicAccessAsyncStorageInstance;
    }
});
var _dynamicaccessasyncstorageinstance = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/dynamic-access-async-storage-instance.js [app-client] (ecmascript)");
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/request/params.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$next$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_$40$babel$2b$core$40$7$2e$29$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _define_property = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_define_property.cjs [app-client] (ecmascript)");
var _object_spread = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_object_spread.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createParamsFromClient: null,
    createPrerenderParamsForClientSegment: null,
    createServerParamsForMetadata: null,
    createServerParamsForRoute: null,
    createServerParamsForServerSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createParamsFromClient: function createParamsFromClient1() {
        return createParamsFromClient;
    },
    createPrerenderParamsForClientSegment: function createPrerenderParamsForClientSegment1() {
        return createPrerenderParamsForClientSegment;
    },
    createServerParamsForMetadata: function createServerParamsForMetadata1() {
        return createServerParamsForMetadata;
    },
    createServerParamsForRoute: function createServerParamsForRoute1() {
        return createServerParamsForRoute;
    },
    createServerParamsForServerSegment: function createServerParamsForServerSegment1() {
        return createServerParamsForServerSegment;
    }
});
var _workasyncstorageexternal = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
var _varyparams = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/vary-params.js [app-client] (ecmascript)");
var _reflect = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
var _dynamicrendering = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)");
var _workunitasyncstorageexternal = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
var _invarianterror = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
var _reflectutils = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
var _dynamicrenderingutils = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/dynamic-rendering-utils.js [app-client] (ecmascript)");
var _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-client] (ecmascript)");
var _dynamicaccessasyncstorageexternal = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/dynamic-access-async-storage.external.js [app-client] (ecmascript)");
var _stagedrendering = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/staged-rendering.js [app-client] (ecmascript)");
function createParamsFromClient(underlyingParams) {
    var workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to be initialized'), "__NEXT_ERROR_CODE", {
            value: "E1068",
            enumerable: false,
            configurable: true
        });
    }
    var workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                // Client params don't need additional vary tracking because by the
                // time they reach the client, the access would have already been
                // tracked by the server.
                var varyParamsAccumulator = null;
                return createStaticPrerenderParams(underlyingParams, null, workStore, workUnitStore, varyParamsAccumulator);
            case 'validation-client':
                return createClientParamsInInstantValidation(underlyingParams, workStore, workUnitStore.validationSamples);
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createParamsFromClient should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E736",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError('createParamsFromClient should not be called in a runtime prerender.'), "__NEXT_ERROR_CODE", {
                    value: "E770",
                    enumerable: false,
                    configurable: true
                });
            case 'generate-static-params':
                throw Object.defineProperty(new _invarianterror.InvariantError('createParamsFromClient should not be called inside generateStaticParams.'), "__NEXT_ERROR_CODE", {
                    value: "E1122",
                    enumerable: false,
                    configurable: true
                });
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    // Semantically we only need the dev tracking when running in `next dev`
                    // but since you would never use next dev with production NODE_ENV we use this
                    // as a proxy so we can statically exclude this code from production builds.
                    var fallbackParams = workUnitStore.fallbackParams;
                    // Client params are not runtime prefetchable
                    var isRuntimePrefetchable = false;
                    return createRenderParamsInDev(underlyingParams, fallbackParams, workStore, workUnitStore, isRuntimePrefetchable);
                } else //TURBOPACK unreachable
                ;
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createServerParamsForMetadata(underlyingParams, optionalCatchAllParamName, isRuntimePrefetchable) {
    var metadataVaryParamsAccumulator = (0, _varyparams.getMetadataVaryParamsAccumulator)();
    return createServerParamsForServerSegment(underlyingParams, optionalCatchAllParamName, metadataVaryParamsAccumulator, isRuntimePrefetchable);
}
function createServerParamsForRoute(underlyingParams) {
    var varyParamsAccumulator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    var workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to be initialized'), "__NEXT_ERROR_CODE", {
            value: "E1068",
            enumerable: false,
            configurable: true
        });
    }
    var workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderParams(underlyingParams, null, workStore, workUnitStore, varyParamsAccumulator);
            case 'prerender-client':
            case 'validation-client':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerParamsForRoute should not be called in client contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E1064",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerParamsForRoute should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E738",
                    enumerable: false,
                    configurable: true
                });
            case 'generate-static-params':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerParamsForRoute should not be called inside generateStaticParams.'), "__NEXT_ERROR_CODE", {
                    value: "E1131",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                {
                    // Route params are not runtime prefetchable
                    var isRuntimePrefetchable = false;
                    return createRuntimePrerenderParams(underlyingParams, null, workUnitStore, varyParamsAccumulator, isRuntimePrefetchable);
                }
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    // Semantically we only need the dev tracking when running in `next dev`
                    // but since you would never use next dev with production NODE_ENV we use this
                    // as a proxy so we can statically exclude this code from production builds.
                    var fallbackParams = workUnitStore.fallbackParams;
                    // Route params are not runtime prefetchable
                    var isRuntimePrefetchable1 = false;
                    return createRenderParamsInDev(underlyingParams, fallbackParams, workStore, workUnitStore, isRuntimePrefetchable1);
                } else //TURBOPACK unreachable
                ;
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createServerParamsForServerSegment(underlyingParams, optionalCatchAllParamName, varyParamsAccumulator, isRuntimePrefetchable) {
    var workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to be initialized'), "__NEXT_ERROR_CODE", {
            value: "E1068",
            enumerable: false,
            configurable: true
        });
    }
    var workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderParams(underlyingParams, optionalCatchAllParamName, workStore, workUnitStore, varyParamsAccumulator);
            case 'validation-client':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerParamsForServerSegment should not be called in client contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E1101",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerParamsForServerSegment should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E743",
                    enumerable: false,
                    configurable: true
                });
            case 'generate-static-params':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerParamsForServerSegment should not be called inside generateStaticParams.'), "__NEXT_ERROR_CODE", {
                    value: "E1120",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                return createRuntimePrerenderParams(underlyingParams, optionalCatchAllParamName, workUnitStore, varyParamsAccumulator, isRuntimePrefetchable);
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    // Semantically we only need the dev tracking when running in `next dev`
                    // but since you would never use next dev with production NODE_ENV we use this
                    // as a proxy so we can statically exclude this code from production builds.
                    var fallbackParams = workUnitStore.fallbackParams;
                    return createRenderParamsInDev(underlyingParams, fallbackParams, workStore, workUnitStore, isRuntimePrefetchable);
                } else //TURBOPACK unreachable
                ;
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createPrerenderParamsForClientSegment(underlyingParams) {
    var workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Missing workStore in createPrerenderParamsForClientSegment'), "__NEXT_ERROR_CODE", {
            value: "E773",
            enumerable: false,
            configurable: true
        });
    }
    var workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
                var fallbackParams = workUnitStore.fallbackRouteParams;
                if (fallbackParams) {
                    for(var key in underlyingParams){
                        if (fallbackParams.has(key)) {
                            // This params object has one or more fallback params, so we need
                            // to consider the awaiting of this params object "dynamic". Since
                            // we are in cacheComponents mode we encode this as a promise that never
                            // resolves.
                            return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, '`params`');
                        }
                    }
                }
                break;
            case 'validation-client':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderParamsForClientSegment should not be called in validation contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E1099",
                    enumerable: false,
                    configurable: true
                });
                break;
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderParamsForClientSegment should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E734",
                    enumerable: false,
                    configurable: true
                });
            case 'generate-static-params':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderParamsForClientSegment should not be called inside generateStaticParams.'), "__NEXT_ERROR_CODE", {
                    value: "E1126",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'prerender-runtime':
            case 'request':
                break;
            default:
                workUnitStore;
        }
    }
    // We're prerendering in a mode that does not abort. We resolve the promise without
    // any tracking because we're just transporting a value from server to client where the tracking
    // will be applied.
    return Promise.resolve(underlyingParams);
}
function createStaticPrerenderParams(underlyingParams, optionalCatchAllParamName, workStore, prerenderStore, varyParamsAccumulator) {
    var underlyingParamsWithVarying = varyParamsAccumulator !== null ? (0, _varyparams.createVaryingParams)(varyParamsAccumulator, underlyingParams, optionalCatchAllParamName) : underlyingParams;
    switch(prerenderStore.type){
        case 'prerender':
        case 'prerender-client':
            {
                var fallbackParams = prerenderStore.fallbackRouteParams;
                if (fallbackParams) {
                    for(var key in underlyingParams){
                        if (fallbackParams.has(key)) {
                            // This params object has one or more fallback params, so we need
                            // to consider the awaiting of this params object "dynamic". Since
                            // we are in cacheComponents mode we encode this as a promise that never
                            // resolves.
                            return makeHangingParams(underlyingParamsWithVarying, workStore, prerenderStore);
                        }
                    }
                }
                break;
            }
        case 'prerender-ppr':
            {
                var fallbackParams1 = prerenderStore.fallbackRouteParams;
                if (fallbackParams1) {
                    for(var key1 in underlyingParams){
                        if (fallbackParams1.has(key1)) {
                            return makeErroringParams(underlyingParamsWithVarying, fallbackParams1, workStore, prerenderStore);
                        }
                    }
                }
                break;
            }
        case 'prerender-legacy':
            break;
        default:
            prerenderStore;
    }
    return makeUntrackedParams(underlyingParamsWithVarying);
}
function createRuntimePrerenderParams(underlyingParams, optionalCatchAllParamName, workUnitStore, varyParamsAccumulator, isRuntimePrefetchable) {
    var underlyingParamsWithVarying = varyParamsAccumulator !== null ? (0, _varyparams.createVaryingParams)(varyParamsAccumulator, underlyingParams, optionalCatchAllParamName) : underlyingParams;
    var result = makeUntrackedParams(underlyingParamsWithVarying);
    var stagedRendering = workUnitStore.stagedRendering;
    if (!stagedRendering) {
        return result;
    }
    var stage = isRuntimePrefetchable ? _stagedrendering.RenderStage.EarlyRuntime : _stagedrendering.RenderStage.Runtime;
    return stagedRendering.waitForStage(stage).then(function() {
        return result;
    });
}
function hasFallbackRouteParams(underlyingParams, fallbackParams) {
    if (fallbackParams) {
        for(var key in underlyingParams){
            if (fallbackParams.has(key)) {
                return true;
            }
        }
    }
    return false;
}
function createServerParamsInInstantValidation(underlyingParams, workStore, validationSamples, asyncApiPromises, isRuntimePrefetchable) {
    var _validationSamples_params;
    var createExhaustiveParamsProxy = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/instant-validation/instant-samples.js [app-client] (ecmascript)").createExhaustiveParamsProxy;
    var declaredParams = new Set(Object.keys((_validationSamples_params = validationSamples.params) !== null && _validationSamples_params !== void 0 ? _validationSamples_params : {}));
    var proxiedUnderlying = createExhaustiveParamsProxy(underlyingParams, declaredParams, workStore.route);
    return (isRuntimePrefetchable ? asyncApiPromises.earlySharedParamsParent : asyncApiPromises.sharedParamsParent).then(function() {
        return proxiedUnderlying;
    });
}
function createClientParamsInInstantValidation(underlyingParams, workStore, validationSamples) {
    var _ref;
    var createExhaustiveParamsProxy = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/instant-validation/instant-samples.js [app-client] (ecmascript)").createExhaustiveParamsProxy;
    var declaredParams = new Set(Object.keys((_ref = validationSamples == null ? void 0 : validationSamples.params) !== null && _ref !== void 0 ? _ref : {}));
    var proxiedUnderlying = createExhaustiveParamsProxy(underlyingParams, declaredParams, workStore.route);
    return Promise.resolve(proxiedUnderlying);
}
function createRenderParamsInProd(underlyingParams) {
    return makeUntrackedParams(underlyingParams);
}
function createRenderParamsInDev(underlyingParams, fallbackParams, workStore, requestStore, isRuntimePrefetchable) {
    return makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams, hasFallbackRouteParams(underlyingParams, fallbackParams), workStore, requestStore, isRuntimePrefetchable);
}
var CachedParams = new WeakMap();
var fallbackParamsProxyHandler = {
    get: function get(target, prop, receiver) {
        if (prop === 'then' || prop === 'catch' || prop === 'finally') {
            var originalMethod = _reflect.ReflectAdapter.get(target, prop, receiver);
            return _define_property._({}, prop, function() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var store = _dynamicaccessasyncstorageexternal.dynamicAccessAsyncStorage.getStore();
                if (store) {
                    store.abortController.abort(Object.defineProperty(new Error("Accessed fallback `params` during prerendering."), "__NEXT_ERROR_CODE", {
                        value: "E691",
                        enumerable: false,
                        configurable: true
                    }));
                }
                return new Proxy(originalMethod.apply(target, args), fallbackParamsProxyHandler);
            })[prop];
        }
        return _reflect.ReflectAdapter.get(target, prop, receiver);
    }
};
function makeHangingParams(underlyingParams, workStore, prerenderStore) {
    var cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    var promise = new Proxy((0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, '`params`'), fallbackParamsProxyHandler);
    CachedParams.set(underlyingParams, promise);
    return promise;
}
function makeErroringParams(underlyingParams, fallbackParams, workStore, prerenderStore) {
    var cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    var augmentedUnderlying = _object_spread._({}, underlyingParams);
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    var promise = Promise.resolve(augmentedUnderlying);
    CachedParams.set(underlyingParams, promise);
    Object.keys(underlyingParams).forEach(function(prop) {
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            if (fallbackParams.has(prop)) {
                Object.defineProperty(augmentedUnderlying, prop, {
                    get: function get() {
                        var expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                        // In most dynamic APIs we also throw if `dynamic = "error"` however
                        // for params is only dynamic when we're generating a fallback shell
                        // and even when `dynamic = "error"` we still support generating dynamic
                        // fallback shells
                        // TODO remove this comment when cacheComponents is the default since there
                        // will be no `dynamic = "error"`
                        if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no cacheComponents)
                            (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                        }
                    },
                    enumerable: true
                });
            }
        }
    });
    return promise;
}
function makeUntrackedParams(underlyingParams) {
    var cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    var promise = Promise.resolve(underlyingParams);
    CachedParams.set(underlyingParams, promise);
    return promise;
}
function makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams, hasFallbackParams, workStore, requestStore, isRuntimePrefetchable) {
    if (requestStore.asyncApiPromises && hasFallbackParams) {
        // We wrap each instance of params in a `new Promise()`, because deduping
        // them across requests doesn't work anyway and this let us show each
        // await a different set of values. This is important when all awaits
        // are in third party which would otherwise track all the way to the
        // internal params.
        var sharedParamsParent = isRuntimePrefetchable ? requestStore.asyncApiPromises.earlySharedParamsParent : requestStore.asyncApiPromises.sharedParamsParent;
        var promise = new Promise(function(resolve, reject) {
            sharedParamsParent.then(function() {
                return resolve(underlyingParams);
            }, reject);
        });
        // @ts-expect-error
        promise.displayName = 'params';
        return instrumentParamsPromiseWithDevWarnings(underlyingParams, promise, workStore);
    }
    var cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    var promise1 = hasFallbackParams ? (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingParams, requestStore, _stagedrendering.RenderStage.Runtime) : Promise.resolve(underlyingParams);
    var proxiedPromise = instrumentParamsPromiseWithDevWarnings(underlyingParams, promise1, workStore);
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function instrumentParamsPromiseWithDevWarnings(underlyingParams, promise, workStore) {
    // Track which properties we should warn for.
    var proxiedProperties = new Set();
    Object.keys(underlyingParams).forEach(function(prop) {
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    return new Proxy(promise, {
        get: function get(target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    var expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    warnForSyncAccess(workStore.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set: function set(target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys: function ownKeys(target) {
            var expression = '`...params` or similar expression';
            warnForSyncAccess(workStore.route, expression);
            return Reflect.ownKeys(target);
        }
    });
}
var warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createParamsAccessError);
function createParamsAccessError(route, expression) {
    var prefix = route ? 'Route "'.concat(route, '" ') : 'This route ';
    return Object.defineProperty(new Error("".concat(prefix, "used ").concat(expression, ". ") + "`params` is a Promise and must be unwrapped with `await` or `React.use()` before accessing its properties. " + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis"), "__NEXT_ERROR_CODE", {
        value: "E834",
        enumerable: false,
        configurable: true
    });
}
}),
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/client-page.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientPageRoot", {
    enumerable: true,
    get: function get() {
        return ClientPageRoot;
    }
});
var _jsxruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _approutercontextsharedruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
var _react = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _routeparams = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
var _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
function ClientPageRoot(param) {
    var Component = param.Component, serverProvidedParams = param.serverProvidedParams;
    var searchParams;
    var params;
    if (serverProvidedParams !== null) {
        searchParams = serverProvidedParams.searchParams;
        params = serverProvidedParams.params;
    } else {
        // When Cache Components is enabled, the server does not pass the params as
        // props; they are parsed on the client and passed via context.
        var layoutRouterContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
        params = layoutRouterContext !== null ? layoutRouterContext.parentParams : {};
        // This is an intentional behavior change: when Cache Components is enabled,
        // client segments receive the "canonical" search params, not the
        // rewritten ones. Users should either call useSearchParams directly or pass
        // the rewritten ones in from a Server Component.
        // TODO: Log a deprecation error when this object is accessed
        searchParams = (0, _routeparams.urlSearchParamsToParsedUrlQuery)((0, _react.use)(_hooksclientcontextsharedruntime.SearchParamsContext));
    }
    if (typeof window === 'undefined') {
        var clientSearchParams;
        var clientParams;
        var createSearchParamsFromClient = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/request/search-params.js [app-client] (ecmascript)").createSearchParamsFromClient;
        clientSearchParams = createSearchParamsFromClient(searchParams);
        var createParamsFromClient = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/request/params.js [app-client] (ecmascript)").createParamsFromClient;
        clientParams = createParamsFromClient(params);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            params: clientParams,
            searchParams: clientSearchParams
        });
    } else {
        var createRenderSearchParamsFromClient = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)").createRenderSearchParamsFromClient;
        var clientSearchParams1 = createRenderSearchParamsFromClient(searchParams);
        var createRenderParamsFromClient = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)").createRenderParamsFromClient;
        var clientParams1 = createRenderParamsFromClient(params);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            params: clientParams1,
            searchParams: clientSearchParams1
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/client-segment.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _object_spread = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_object_spread.cjs [app-client] (ecmascript)");
var _object_spread_props = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_object_spread_props.cjs [app-client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/next/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientSegmentRoot", {
    enumerable: true,
    get: function get() {
        return ClientSegmentRoot;
    }
});
var _jsxruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _approutercontextsharedruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
var _react = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function ClientSegmentRoot(param) {
    var Component = param.Component, slots = param.slots, serverProvidedParams = param.serverProvidedParams;
    var params;
    if (serverProvidedParams !== null) {
        params = serverProvidedParams.params;
    } else {
        // When Cache Components is enabled, the server does not pass the params
        // as props; they are parsed on the client and passed via context.
        var layoutRouterContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
        params = layoutRouterContext !== null ? layoutRouterContext.parentParams : {};
    }
    if (typeof window === 'undefined') {
        var createParamsFromClient = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/request/params.js [app-client] (ecmascript)").createParamsFromClient;
        var clientParams = createParamsFromClient(params);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, _object_spread_props._(_object_spread._({}, slots), {
            params: clientParams
        }));
    } else {
        var createRenderParamsFromClient = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)").createRenderParamsFromClient;
        var clientParams1 = createRenderParamsFromClient(params);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, _object_spread_props._(_object_spread._({}, slots), {
            params: clientParams1
        }));
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
"[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/metadata/generate/icon-mark.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IconMark", {
    enumerable: true,
    get: function get() {
        return IconMark;
    }
});
var _jsxruntime = __turbopack_context__.r("[project]/next/node_modules/.pnpm/next@16.2.9_@babel+core@7.29.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var IconMark = function IconMark() {
    if (typeof window !== 'undefined') {
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
        name: "\xabnxt-icon\xbb"
    });
};
}),
]);

//# sourceMappingURL=1v6e__pnpm_1wcuh9n._.js.map