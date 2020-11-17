module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1605508836773, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./utils"), exports);
__exportStar(require("./useRect"), exports);
__exportStar(require("./useToggle"), exports);
__exportStar(require("./useRelation"), exports);
__exportStar(require("./useCountDown"), exports);
__exportStar(require("./useClickAway"), exports);
__exportStar(require("./useWindowSize"), exports);
__exportStar(require("./useScrollParent"), exports);
__exportStar(require("./useEventListener"), exports);
__exportStar(require("./usePageVisibility"), exports);
__exportStar(require("./onMountedOrActivated"), exports);

}, function(modId) {var map = {"./utils":1605508836774,"./useRect":1605508836775,"./useToggle":1605508836776,"./useRelation":1605508836777,"./useCountDown":1605508836780,"./useClickAway":1605508836781,"./useWindowSize":1605508836784,"./useScrollParent":1605508836785,"./useEventListener":1605508836782,"./usePageVisibility":1605508836786,"./onMountedOrActivated":1605508836783}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836774, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.doubleRaf = exports.cancelRaf = exports.raf = exports.inBrowser = void 0;
exports.inBrowser = typeof window !== 'undefined';
var root = (exports.inBrowser ? window : global);
var prev = Date.now();
function rafPolyfill(fn) {
    var curr = Date.now();
    var ms = Math.max(0, 16 - (curr - prev));
    var id = setTimeout(fn, ms);
    prev = curr + ms;
    return id;
}
function raf(fn) {
    var requestAnimationFrame = root.requestAnimationFrame || rafPolyfill;
    return requestAnimationFrame.call(root, fn);
}
exports.raf = raf;
function cancelRaf(id) {
    var cancelAnimationFrame = root.cancelAnimationFrame || root.clearTimeout;
    cancelAnimationFrame.call(root, id);
}
exports.cancelRaf = cancelRaf;
// double raf for animation
function doubleRaf(fn) {
    raf(function () {
        raf(fn);
    });
}
exports.doubleRaf = doubleRaf;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836775, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.useRect = void 0;
var vue_1 = require("vue");
function isWindow(val) {
    return val === window;
}
exports.useRect = function (elementRef) {
    var element = vue_1.unref(elementRef);
    if (isWindow(element)) {
        var width = element.innerWidth;
        var height = element.innerHeight;
        return {
            top: 0,
            left: 0,
            right: width,
            bottom: height,
            width: width,
            height: height,
        };
    }
    if (element && element.getBoundingClientRect) {
        return element.getBoundingClientRect();
    }
    return {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0,
    };
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836776, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.useToggle = void 0;
var vue_1 = require("vue");
function useToggle(defaultValue) {
    if (defaultValue === void 0) { defaultValue = false; }
    var state = vue_1.ref(defaultValue);
    var toggle = function (value) {
        if (value === void 0) { value = !state.value; }
        state.value = value;
    };
    return [state, toggle];
}
exports.useToggle = useToggle;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836777, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./useParent"), exports);
__exportStar(require("./useChildren"), exports);

}, function(modId) { var map = {"./useParent":1605508836778,"./useChildren":1605508836779}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836778, function(require, module, exports) {

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useParent = void 0;
var vue_1 = require("vue");
function useParent(key) {
    var parent = vue_1.inject(key, null);
    if (parent) {
        var instance_1 = vue_1.getCurrentInstance();
        if (instance_1) {
            var link = parent.link, unlink_1 = parent.unlink, internalChildren_1 = parent.internalChildren, rest = __rest(parent, ["link", "unlink", "internalChildren"]);
            link(instance_1);
            vue_1.onUnmounted(function () {
                unlink_1(instance_1);
            });
            var index = vue_1.computed(function () { return internalChildren_1.indexOf(instance_1); });
            return {
                parent: rest,
                index: index,
            };
        }
    }
    return {};
}
exports.useParent = useParent;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836779, function(require, module, exports) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChildren = exports.sortChildren = exports.flattenVNodes = void 0;
var vue_1 = require("vue");
function flattenVNodes(children) {
    var result = [];
    var traverse = function (children) {
        if (Array.isArray(children)) {
            children.forEach(function (child) {
                var _a;
                if (vue_1.isVNode(child)) {
                    result.push(child);
                    if ((_a = child.component) === null || _a === void 0 ? void 0 : _a.subTree) {
                        traverse(child.component.subTree.children);
                    }
                    if (child.children) {
                        traverse(child.children);
                    }
                }
            });
        }
    };
    traverse(children);
    return result;
}
exports.flattenVNodes = flattenVNodes;
// sort children instances by vnodes order
function sortChildren(parent, publicChildren, internalChildren) {
    var vnodes = flattenVNodes(parent.subTree.children);
    internalChildren.sort(function (a, b) { return vnodes.indexOf(a.vnode) - vnodes.indexOf(b.vnode); });
    var orderedPublicChildren = internalChildren.map(function (item) { return item.proxy; });
    publicChildren.sort(function (a, b) {
        var indexA = orderedPublicChildren.indexOf(a);
        var indexB = orderedPublicChildren.indexOf(b);
        return indexA - indexB;
    });
}
exports.sortChildren = sortChildren;
function useChildren(key) {
    var publicChildren = vue_1.reactive([]);
    var internalChildren = vue_1.reactive([]);
    var parent = vue_1.getCurrentInstance();
    var linkChildren = function (value) {
        var link = function (child) {
            if (child.proxy) {
                internalChildren.push(child);
                publicChildren.push(child.proxy);
                sortChildren(parent, publicChildren, internalChildren);
            }
        };
        var unlink = function (child) {
            var index = internalChildren.indexOf(child);
            publicChildren.splice(index, 1);
            internalChildren.splice(index, 1);
        };
        vue_1.provide(key, __assign({ link: link,
            unlink: unlink, children: publicChildren, internalChildren: internalChildren }, value));
    };
    return {
        children: publicChildren,
        linkChildren: linkChildren,
    };
}
exports.useChildren = useChildren;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836780, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.useCountDown = void 0;
var vue_1 = require("vue");
var utils_1 = require("../utils");
var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
function parseTime(time) {
    var days = Math.floor(time / DAY);
    var hours = Math.floor((time % DAY) / HOUR);
    var minutes = Math.floor((time % HOUR) / MINUTE);
    var seconds = Math.floor((time % MINUTE) / SECOND);
    var milliseconds = Math.floor(time % SECOND);
    return {
        total: time,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds,
    };
}
function isSameSecond(time1, time2) {
    return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
}
function useCountDown(options) {
    var rafId;
    var endTime;
    var counting;
    var deactivated;
    var remain = vue_1.ref(options.time);
    var current = vue_1.computed(function () { return parseTime(remain.value); });
    var pause = function () {
        counting = false;
        utils_1.cancelRaf(rafId);
    };
    var getCurrentRemain = function () { return Math.max(endTime - Date.now(), 0); };
    var setRemain = function (value) {
        var _a, _b;
        remain.value = value;
        (_a = options.onChange) === null || _a === void 0 ? void 0 : _a.call(options, current.value);
        if (value === 0) {
            pause();
            (_b = options.onFinish) === null || _b === void 0 ? void 0 : _b.call(options);
        }
    };
    var microTick = function () {
        rafId = utils_1.raf(function () {
            // in case of call reset immediately after finish
            if (counting) {
                setRemain(getCurrentRemain());
                if (remain.value > 0) {
                    microTick();
                }
            }
        });
    };
    var macroTick = function () {
        rafId = utils_1.raf(function () {
            // in case of call reset immediately after finish
            if (counting) {
                var remainRemain = getCurrentRemain();
                if (!isSameSecond(remainRemain, remain.value) || remainRemain === 0) {
                    setRemain(remainRemain);
                }
                if (remain.value > 0) {
                    macroTick();
                }
            }
        });
    };
    var tick = function () {
        if (options.millisecond) {
            microTick();
        }
        else {
            macroTick();
        }
    };
    var start = function () {
        if (!counting) {
            endTime = Date.now() + remain.value;
            counting = true;
            tick();
        }
    };
    var reset = function (totalTime) {
        if (totalTime === void 0) { totalTime = options.time; }
        pause();
        remain.value = totalTime;
    };
    vue_1.onBeforeUnmount(pause);
    vue_1.onActivated(function () {
        if (deactivated) {
            counting = true;
            deactivated = false;
            tick();
        }
    });
    vue_1.onDeactivated(function () {
        if (counting) {
            pause();
            deactivated = true;
        }
    });
    return {
        start: start,
        pause: pause,
        reset: reset,
        current: current,
    };
}
exports.useCountDown = useCountDown;

}, function(modId) { var map = {"../utils":1605508836774}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836781, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.useClickAway = void 0;
var vue_1 = require("vue");
var utils_1 = require("../utils");
var useEventListener_1 = require("../useEventListener");
function useClickAway(target, listener, options) {
    if (options === void 0) { options = {}; }
    if (!utils_1.inBrowser) {
        return;
    }
    var _a = options.eventName, eventName = _a === void 0 ? 'click' : _a;
    var onClick = function (event) {
        var element = vue_1.unref(target);
        if (element && !element.contains(event.target)) {
            listener(event);
        }
    };
    useEventListener_1.useEventListener(eventName, onClick, { target: document });
}
exports.useClickAway = useClickAway;

}, function(modId) { var map = {"../utils":1605508836774,"../useEventListener":1605508836782}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836782, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.useEventListener = void 0;
var vue_1 = require("vue");
var onMountedOrActivated_1 = require("../onMountedOrActivated");
var utils_1 = require("../utils");
var supportsPassive = false;
if (utils_1.inBrowser) {
    try {
        var opts = {};
        Object.defineProperty(opts, 'passive', {
            get: function () {
                supportsPassive = true;
            },
        });
        window.addEventListener('test-passive', null, opts);
        // eslint-disable-next-line no-empty
    }
    catch (e) { }
}
function useEventListener(type, listener, options) {
    if (options === void 0) { options = {}; }
    if (!utils_1.inBrowser) {
        return;
    }
    var _a = options.target, target = _a === void 0 ? window : _a, _b = options.passive, passive = _b === void 0 ? false : _b, _c = options.capture, capture = _c === void 0 ? false : _c;
    var attached;
    var add = function () {
        var element = vue_1.unref(target);
        if (element && !attached) {
            element.addEventListener(type, listener, supportsPassive ? { capture: capture, passive: passive } : capture);
            attached = true;
        }
    };
    var remove = function () {
        var element = vue_1.unref(target);
        if (element && attached) {
            element.removeEventListener(type, listener, capture);
            attached = false;
        }
    };
    vue_1.onUnmounted(remove);
    vue_1.onDeactivated(remove);
    onMountedOrActivated_1.onMountedOrActivated(add);
}
exports.useEventListener = useEventListener;

}, function(modId) { var map = {"../onMountedOrActivated":1605508836783,"../utils":1605508836774}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836783, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.onMountedOrActivated = void 0;
var vue_1 = require("vue");
function onMountedOrActivated(hook) {
    var mounted;
    vue_1.onMounted(function () {
        hook();
        vue_1.nextTick(function () {
            mounted = true;
        });
    });
    vue_1.onActivated(function () {
        if (mounted) {
            hook();
        }
    });
}
exports.onMountedOrActivated = onMountedOrActivated;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836784, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowSize = void 0;
var vue_1 = require("vue");
var utils_1 = require("../utils");
var useEventListener_1 = require("../useEventListener");
function useWindowSize() {
    var width = vue_1.ref(utils_1.inBrowser ? window.innerWidth : 0);
    var height = vue_1.ref(utils_1.inBrowser ? window.innerHeight : 0);
    var onResize = function () {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
    };
    useEventListener_1.useEventListener('resize', onResize);
    useEventListener_1.useEventListener('orientationchange', onResize);
    return { width: width, height: height };
}
exports.useWindowSize = useWindowSize;

}, function(modId) { var map = {"../utils":1605508836774,"../useEventListener":1605508836782}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836785, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.useScrollParent = void 0;
var vue_1 = require("vue");
var overflowScrollReg = /scroll|auto/i;
function isElement(node) {
    var ELEMENT_NODE_TYPE = 1;
    return node.tagName !== 'HTML' && node.nodeType === ELEMENT_NODE_TYPE;
}
// http://w3help.org/zh-cn/causes/SD9013
// http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
function getScrollParent(el, root) {
    if (root === void 0) { root = window; }
    var node = el;
    while (node && node !== root && isElement(node)) {
        var overflowY = window.getComputedStyle(node).overflowY;
        if (overflowScrollReg.test(overflowY)) {
            if (node.tagName !== 'BODY') {
                return node;
            }
            // see: https://github.com/youzan/vant/issues/3823
            var htmlOverflowY = window.getComputedStyle(node.parentNode).overflowY;
            if (overflowScrollReg.test(htmlOverflowY)) {
                return node;
            }
        }
        node = node.parentNode;
    }
    return root;
}
function useScrollParent(el) {
    var scrollParent = vue_1.ref();
    vue_1.onMounted(function () {
        if (el.value) {
            scrollParent.value = getScrollParent(el.value);
        }
    });
    return scrollParent;
}
exports.useScrollParent = useScrollParent;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836786, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.usePageVisibility = void 0;
var vue_1 = require("vue");
var utils_1 = require("../utils");
var useEventListener_1 = require("../useEventListener");
function usePageVisibility() {
    var visibility = vue_1.ref('visible');
    var setVisibility = function () {
        if (utils_1.inBrowser) {
            visibility.value = document.hidden ? 'hidden' : 'visible';
        }
    };
    setVisibility();
    useEventListener_1.useEventListener('visibilitychange', setVisibility);
    return visibility;
}
exports.usePageVisibility = usePageVisibility;

}, function(modId) { var map = {"../utils":1605508836774,"../useEventListener":1605508836782}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1605508836773);
})()
//# sourceMappingURL=index.js.map