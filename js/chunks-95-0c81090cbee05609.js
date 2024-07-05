"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [95], {
        781: function(t, e, i) {
            i.d(e, {
                p: function() {
                    return n
                }
            });
            let n = (0, i(2265).createContext)({})
        },
        8243: function(t, e, i) {
            i.d(e, {
                O: function() {
                    return n
                }
            });
            let n = (0, i(2265).createContext)(null)
        },
        1348: function(t, e, i) {
            i.d(e, {
                Z: function() {
                    return o
                }
            });
            var n = i(6101);
            class r {
                constructor() {
                    this.order = [], this.scheduled = new Set
                }
                add(t) {
                    if (!this.scheduled.has(t)) return this.scheduled.add(t), this.order.push(t), !0
                }
                remove(t) {
                    let e = this.order.indexOf(t); - 1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t))
                }
                clear() {
                    this.order.length = 0, this.scheduled.clear()
                }
            }
            let s = ["prepare", "read", "update", "preRender", "render", "postRender"];

            function o(t, e) {
                let i = !1,
                    o = !0,
                    a = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    l = s.reduce((t, e) => (t[e] = function(t) {
                        let e = new r,
                            i = new r,
                            n = 0,
                            s = !1,
                            o = !1,
                            a = new WeakSet,
                            l = {
                                schedule: (t, r = !1, o = !1) => {
                                    let l = o && s,
                                        u = l ? e : i;
                                    return r && a.add(t), u.add(t) && l && s && (n = e.order.length), t
                                },
                                cancel: t => {
                                    i.remove(t), a.delete(t)
                                },
                                process: r => {
                                    if (s) {
                                        o = !0;
                                        return
                                    }
                                    if (s = !0, [e, i] = [i, e], i.clear(), n = e.order.length)
                                        for (let i = 0; i < n; i++) {
                                            let n = e.order[i];
                                            a.has(n) && (l.schedule(n), t()), n(r)
                                        }
                                    s = !1, o && (o = !1, l.process(r))
                                }
                            };
                        return l
                    }(() => i = !0), t), {}),
                    u = t => {
                        l[t].process(a)
                    },
                    h = () => {
                        let r = n.c.useManualTiming ? a.timestamp : performance.now();
                        i = !1, a.delta = o ? 1e3 / 60 : Math.max(Math.min(r - a.timestamp, 40), 1), a.timestamp = r, a.isProcessing = !0, s.forEach(u), a.isProcessing = !1, i && e && (o = !1, t(h))
                    },
                    c = () => {
                        i = !0, o = !0, a.isProcessing || t(h)
                    };
                return {
                    schedule: s.reduce((t, e) => {
                        let n = l[e];
                        return t[e] = (t, e = !1, r = !1) => (i || c(), n.schedule(t, e, r)), t
                    }, {}),
                    cancel: t => s.forEach(e => l[e].cancel(t)),
                    state: a,
                    steps: l
                }
            }
        },
        6846: function(t, e, i) {
            i.d(e, {
                Pn: function() {
                    return s
                },
                S6: function() {
                    return a
                },
                Wi: function() {
                    return r
                },
                frameData: function() {
                    return o
                }
            });
            var n = i(6977);
            let {
                schedule: r,
                cancel: s,
                state: o,
                steps: a
            } = (0, i(1348).Z)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : n.Z, !0)
        },
        8095: function(t, e, i) {
            let n, r;
            i.d(e, {
                E: function() {
                    return rJ
                }
            });
            var s, o, a = i(2265);
            let l = (0, a.createContext)({
                    transformPagePoint: t => t,
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                u = (0, a.createContext)({});
            var h = i(8243),
                c = i(538);
            let d = (0, a.createContext)({
                    strict: !1
                }),
                p = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
                m = "data-" + p("framerAppearId"),
                {
                    schedule: f,
                    cancel: g
                } = (0, i(1348).Z)(queueMicrotask, !1);

            function v(t) {
                return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function y(t) {
                return "string" == typeof t || Array.isArray(t)
            }

            function x(t) {
                return null !== t && "object" == typeof t && "function" == typeof t.start
            }
            let P = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                b = ["initial", ...P];

            function w(t) {
                return x(t.animate) || b.some(e => y(t[e]))
            }

            function A(t) {
                return !!(w(t) || t.variants)
            }

            function T(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            let S = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                V = {};
            for (let t in S) V[t] = {
                isEnabled: e => S[t].some(t => !!e[t])
            };
            var E = i(6613),
                M = i(781);
            let C = (0, a.createContext)({}),
                D = Symbol.for("motionComponentSymbol"),
                k = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function R(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (k.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
                return !1
            }
            let L = {},
                j = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                F = new Set(j);

            function B(t, {
                layout: e,
                layoutId: i
            }) {
                return F.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!L[t] || "opacity" === t)
            }
            let O = t => !!(t && t.getVelocity),
                U = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                I = j.length,
                W = t => e => "string" == typeof e && e.startsWith(t),
                N = W("--"),
                $ = W("var(--"),
                Z = t => $(t) && H.test(t),
                H = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)$/i,
                z = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
                Y = (t, e, i) => i > e ? e : i < t ? t : i,
                X = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                G = {
                    ...X,
                    transform: t => Y(0, 1, t)
                },
                q = {
                    ...X,
                    default: 1
                },
                K = t => Math.round(1e5 * t) / 1e5,
                _ = /(-)?([\d]*\.?[\d])+/g,
                J = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
                Q = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

            function tt(t) {
                return "string" == typeof t
            }
            let te = t => ({
                    test: e => tt(e) && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                ti = te("deg"),
                tn = te("%"),
                tr = te("px"),
                ts = te("vh"),
                to = te("vw"),
                ta = {
                    ...tn,
                    parse: t => tn.parse(t) / 100,
                    transform: t => tn.transform(100 * t)
                },
                tl = {
                    ...X,
                    transform: Math.round
                },
                tu = {
                    borderWidth: tr,
                    borderTopWidth: tr,
                    borderRightWidth: tr,
                    borderBottomWidth: tr,
                    borderLeftWidth: tr,
                    borderRadius: tr,
                    radius: tr,
                    borderTopLeftRadius: tr,
                    borderTopRightRadius: tr,
                    borderBottomRightRadius: tr,
                    borderBottomLeftRadius: tr,
                    width: tr,
                    maxWidth: tr,
                    height: tr,
                    maxHeight: tr,
                    size: tr,
                    top: tr,
                    right: tr,
                    bottom: tr,
                    left: tr,
                    padding: tr,
                    paddingTop: tr,
                    paddingRight: tr,
                    paddingBottom: tr,
                    paddingLeft: tr,
                    margin: tr,
                    marginTop: tr,
                    marginRight: tr,
                    marginBottom: tr,
                    marginLeft: tr,
                    rotate: ti,
                    rotateX: ti,
                    rotateY: ti,
                    rotateZ: ti,
                    scale: q,
                    scaleX: q,
                    scaleY: q,
                    scaleZ: q,
                    skew: ti,
                    skewX: ti,
                    skewY: ti,
                    distance: tr,
                    translateX: tr,
                    translateY: tr,
                    translateZ: tr,
                    x: tr,
                    y: tr,
                    z: tr,
                    perspective: tr,
                    transformPerspective: tr,
                    opacity: G,
                    originX: ta,
                    originY: ta,
                    originZ: tr,
                    zIndex: tl,
                    fillOpacity: G,
                    strokeOpacity: G,
                    numOctaves: tl
                };

            function th(t, e, i, n) {
                let {
                    style: r,
                    vars: s,
                    transform: o,
                    transformOrigin: a
                } = t, l = !1, u = !1, h = !0;
                for (let t in e) {
                    let i = e[t];
                    if (N(t)) {
                        s[t] = i;
                        continue
                    }
                    let n = tu[t],
                        c = z(i, n);
                    if (F.has(t)) {
                        if (l = !0, o[t] = c, !h) continue;
                        i !== (n.default || 0) && (h = !1)
                    } else t.startsWith("origin") ? (u = !0, a[t] = c) : r[t] = c
                }
                if (!e.transform && (l || n ? r.transform = function(t, {
                        enableHardwareAcceleration: e = !0,
                        allowTransformNone: i = !0
                    }, n, r) {
                        let s = "";
                        for (let e = 0; e < I; e++) {
                            let i = j[e];
                            if (void 0 !== t[i]) {
                                let e = U[i] || i;
                                s += `${e}(${t[i]}) `
                            }
                        }
                        return e && !t.z && (s += "translateZ(0)"), s = s.trim(), r ? s = r(t, n ? "" : s) : i && n && (s = "none"), s
                    }(t.transform, i, h, n) : r.transform && (r.transform = "none")), u) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: i = 0
                    } = a;
                    r.transformOrigin = `${t} ${e} ${i}`
                }
            }
            let tc = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function td(t, e, i) {
                for (let n in e) O(e[n]) || B(n, i) || (t[n] = e[n])
            }
            let tp = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

            function tm(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || tp.has(t)
            }
            let tf = t => !tm(t);
            try {
                (s = require("@emotion/is-prop-valid").default) && (tf = t => t.startsWith("on") ? !tm(t) : s(t))
            } catch (t) {}

            function tg(t, e, i) {
                return "string" == typeof t ? t : tr.transform(e + i * t)
            }
            let tv = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                ty = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function tx(t, {
                attrX: e,
                attrY: i,
                attrScale: n,
                originX: r,
                originY: s,
                pathLength: o,
                pathSpacing: a = 1,
                pathOffset: l = 0,
                ...u
            }, h, c, d) {
                if (th(t, u, h, d), c) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: p,
                    style: m,
                    dimensions: f
                } = t;
                p.transform && (f && (m.transform = p.transform), delete p.transform), f && (void 0 !== r || void 0 !== s || m.transform) && (m.transformOrigin = function(t, e, i) {
                    let n = tg(e, t.x, t.width),
                        r = tg(i, t.y, t.height);
                    return `${n} ${r}`
                }(f, void 0 !== r ? r : .5, void 0 !== s ? s : .5)), void 0 !== e && (p.x = e), void 0 !== i && (p.y = i), void 0 !== n && (p.scale = n), void 0 !== o && function(t, e, i = 1, n = 0, r = !0) {
                    t.pathLength = 1;
                    let s = r ? tv : ty;
                    t[s.offset] = tr.transform(-n);
                    let o = tr.transform(e),
                        a = tr.transform(i);
                    t[s.array] = `${o} ${a}`
                }(p, o, a, l, !1)
            }
            let tP = () => ({
                    ...tc(),
                    attrs: {}
                }),
                tb = t => "string" == typeof t && "svg" === t.toLowerCase();

            function tw(t, {
                style: e,
                vars: i
            }, n, r) {
                for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(n)), i) t.style.setProperty(s, i[s])
            }
            let tA = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function tT(t, e, i, n) {
                for (let i in tw(t, e, void 0, n), e.attrs) t.setAttribute(tA.has(i) ? i : p(i), e.attrs[i])
            }

            function tS(t, e) {
                let {
                    style: i
                } = t, n = {};
                for (let r in i)(O(i[r]) || e.style && O(e.style[r]) || B(r, t)) && (n[r] = i[r]);
                return n
            }

            function tV(t, e) {
                let i = tS(t, e);
                for (let n in t)(O(t[n]) || O(e[n])) && (i[-1 !== j.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = t[n]);
                return i
            }

            function tE(t, e, i, n = {}, r = {}) {
                return "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)), e
            }
            var tM = i(961);
            let tC = t => Array.isArray(t),
                tD = t => !!(t && "object" == typeof t && t.mix && t.toValue),
                tk = t => tC(t) ? t[t.length - 1] || 0 : t;

            function tR(t) {
                let e = O(t) ? t.get() : t;
                return tD(e) ? e.toValue() : e
            }
            let tL = t => (e, i) => {
                let n = (0, a.useContext)(u),
                    r = (0, a.useContext)(h.O),
                    s = () => (function({
                        scrapeMotionValuesFromProps: t,
                        createRenderState: e,
                        onMount: i
                    }, n, r, s) {
                        let o = {
                            latestValues: function(t, e, i, n) {
                                let r = {},
                                    s = n(t, {});
                                for (let t in s) r[t] = tR(s[t]);
                                let {
                                    initial: o,
                                    animate: a
                                } = t, l = w(t), u = A(t);
                                e && u && !l && !1 !== t.inherit && (void 0 === o && (o = e.initial), void 0 === a && (a = e.animate));
                                let h = !!i && !1 === i.initial,
                                    c = (h = h || !1 === o) ? a : o;
                                return c && "boolean" != typeof c && !x(c) && (Array.isArray(c) ? c : [c]).forEach(e => {
                                    let i = tE(t, e);
                                    if (!i) return;
                                    let {
                                        transitionEnd: n,
                                        transition: s,
                                        ...o
                                    } = i;
                                    for (let t in o) {
                                        let e = o[t];
                                        if (Array.isArray(e)) {
                                            let t = h ? e.length - 1 : 0;
                                            e = e[t]
                                        }
                                        null !== e && (r[t] = e)
                                    }
                                    for (let t in n) r[t] = n[t]
                                }), r
                            }(n, r, s, t),
                            renderState: e()
                        };
                        return i && (o.mount = t => i(n, t, o)), o
                    })(t, e, n, r);
                return i ? s() : (0, tM.h)(s)
            };
            var tj = i(6846);
            let tF = {
                    useVisualState: tL({
                        scrapeMotionValuesFromProps: tV,
                        createRenderState: tP,
                        onMount: (t, e, {
                            renderState: i,
                            latestValues: n
                        }) => {
                            tj.Wi.read(() => {
                                try {
                                    i.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                                } catch (t) {
                                    i.dimensions = {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0
                                    }
                                }
                            }), tj.Wi.render(() => {
                                tx(i, n, {
                                    enableHardwareAcceleration: !1
                                }, tb(e.tagName), t.transformTemplate), tT(e, i)
                            })
                        }
                    })
                },
                tB = {
                    useVisualState: tL({
                        scrapeMotionValuesFromProps: tS,
                        createRenderState: tc
                    })
                };

            function tO(t, e, i, n = {
                passive: !0
            }) {
                return t.addEventListener(e, i, n), () => t.removeEventListener(e, i)
            }
            let tU = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

            function tI(t, e = "page") {
                return {
                    point: {
                        x: t[e + "X"],
                        y: t[e + "Y"]
                    }
                }
            }
            let tW = t => e => tU(e) && t(e, tI(e));

            function tN(t, e, i, n) {
                return tO(t, e, tW(i), n)
            }
            let t$ = (t, e) => i => e(t(i)),
                tZ = (...t) => t.reduce(t$);

            function tH(t) {
                let e = null;
                return () => null === e && (e = t, () => {
                    e = null
                })
            }
            let tz = tH("dragHorizontal"),
                tY = tH("dragVertical");

            function tX(t) {
                let e = !1;
                if ("y" === t) e = tY();
                else if ("x" === t) e = tz();
                else {
                    let t = tz(),
                        i = tY();
                    t && i ? e = () => {
                        t(), i()
                    } : (t && t(), i && i())
                }
                return e
            }

            function tG() {
                let t = tX(!0);
                return !t || (t(), !1)
            }
            class tq {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }

            function tK(t, e) {
                let i = "onHover" + (e ? "Start" : "End");
                return tN(t.current, "pointer" + (e ? "enter" : "leave"), (n, r) => {
                    if ("touch" === n.pointerType || tG()) return;
                    let s = t.getProps();
                    t.animationState && s.whileHover && t.animationState.setActive("whileHover", e), s[i] && tj.Wi.update(() => s[i](n, r))
                }, {
                    passive: !t.getProps()[i]
                })
            }
            class t_ extends tq {
                mount() {
                    this.unmount = tZ(tK(this.node, !0), tK(this.node, !1))
                }
                unmount() {}
            }
            class tJ extends tq {
                constructor() {
                    super(...arguments), this.isActive = !1
                }
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible")
                    } catch (e) {
                        t = !0
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                }
                mount() {
                    this.unmount = tZ(tO(this.node.current, "focus", () => this.onFocus()), tO(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }
            let tQ = (t, e) => !!e && (t === e || tQ(t, e.parentElement));
            var t0 = i(6977);

            function t1(t, e) {
                if (!e) return;
                let i = new PointerEvent("pointer" + t);
                e(i, tI(i))
            }
            class t5 extends tq {
                constructor() {
                    super(...arguments), this.removeStartListeners = t0.Z, this.removeEndListeners = t0.Z, this.removeAccessibleListeners = t0.Z, this.startPointerPress = (t, e) => {
                        if (this.isPressing) return;
                        this.removeEndListeners();
                        let i = this.node.getProps(),
                            n = tN(window, "pointerup", (t, e) => {
                                if (!this.checkPressEnd()) return;
                                let {
                                    onTap: i,
                                    onTapCancel: n,
                                    globalTapTarget: r
                                } = this.node.getProps();
                                tj.Wi.update(() => {
                                    r || tQ(this.node.current, t.target) ? i && i(t, e) : n && n(t, e)
                                })
                            }, {
                                passive: !(i.onTap || i.onPointerUp)
                            }),
                            r = tN(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                                passive: !(i.onTapCancel || i.onPointerCancel)
                            });
                        this.removeEndListeners = tZ(n, r), this.startPress(t, e)
                    }, this.startAccessiblePress = () => {
                        let t = tO(this.node.current, "keydown", t => {
                                "Enter" !== t.key || this.isPressing || (this.removeEndListeners(), this.removeEndListeners = tO(this.node.current, "keyup", t => {
                                    "Enter" === t.key && this.checkPressEnd() && t1("up", (t, e) => {
                                        let {
                                            onTap: i
                                        } = this.node.getProps();
                                        i && tj.Wi.update(() => i(t, e))
                                    })
                                }), t1("down", (t, e) => {
                                    this.startPress(t, e)
                                }))
                            }),
                            e = tO(this.node.current, "blur", () => {
                                this.isPressing && t1("cancel", (t, e) => this.cancelPress(t, e))
                            });
                        this.removeAccessibleListeners = tZ(t, e)
                    }
                }
                startPress(t, e) {
                    this.isPressing = !0;
                    let {
                        onTapStart: i,
                        whileTap: n
                    } = this.node.getProps();
                    n && this.node.animationState && this.node.animationState.setActive("whileTap", !0), i && tj.Wi.update(() => i(t, e))
                }
                checkPressEnd() {
                    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !tG()
                }
                cancelPress(t, e) {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTapCancel: i
                    } = this.node.getProps();
                    i && tj.Wi.update(() => i(t, e))
                }
                mount() {
                    let t = this.node.getProps(),
                        e = tN(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                            passive: !(t.onTapStart || t.onPointerStart)
                        }),
                        i = tO(this.node.current, "focus", this.startAccessiblePress);
                    this.removeStartListeners = tZ(e, i)
                }
                unmount() {
                    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
                }
            }
            let t2 = new WeakMap,
                t3 = new WeakMap,
                t6 = t => {
                    let e = t2.get(t.target);
                    e && e(t)
                },
                t9 = t => {
                    t.forEach(t6)
                },
                t4 = {
                    some: 0,
                    all: 1
                };
            class t8 extends tq {
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
                startObserver() {
                    this.unmount();
                    let {
                        viewport: t = {}
                    } = this.node.getProps(), {
                        root: e,
                        margin: i,
                        amount: n = "some",
                        once: r
                    } = t, s = {
                        root: e ? e.current : void 0,
                        rootMargin: i,
                        threshold: "number" == typeof n ? n : t4[n]
                    };
                    return function(t, e, i) {
                        let n = function({
                            root: t,
                            ...e
                        }) {
                            let i = t || document;
                            t3.has(i) || t3.set(i, {});
                            let n = t3.get(i),
                                r = JSON.stringify(e);
                            return n[r] || (n[r] = new IntersectionObserver(t9, {
                                root: t,
                                ...e
                            })), n[r]
                        }(e);
                        return t2.set(t, i), n.observe(t), () => {
                            t2.delete(t), n.unobserve(t)
                        }
                    }(this.node.current, s, t => {
                        let {
                            isIntersecting: e
                        } = t;
                        if (this.isInView === e || (this.isInView = e, r && !e && this.hasEnteredView)) return;
                        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        let {
                            onViewportEnter: i,
                            onViewportLeave: n
                        } = this.node.getProps(), s = e ? i : n;
                        s && s(t)
                    })
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let {
                        props: t,
                        prevProps: e
                    } = this.node;
                    ["amount", "margin", "root"].some(function({
                        viewport: t = {}
                    }, {
                        viewport: e = {}
                    } = {}) {
                        return i => t[i] !== e[i]
                    }(t, e)) && this.startObserver()
                }
                unmount() {}
            }

            function t7(t, e) {
                if (!Array.isArray(e)) return !1;
                let i = e.length;
                if (i !== t.length) return !1;
                for (let n = 0; n < i; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }

            function et(t, e, i) {
                let n = t.getProps();
                return tE(n, e, void 0 !== i ? i : n.custom, function(t) {
                    let e = {};
                    return t.values.forEach((t, i) => e[i] = t.get()), e
                }(t), function(t) {
                    let e = {};
                    return t.values.forEach((t, i) => e[i] = t.getVelocity()), e
                }(t))
            }
            var ee = i(6567);
            let ei = t => 1e3 * t,
                en = t => t / 1e3,
                er = {
                    current: !1
                },
                es = t => Array.isArray(t) && "number" == typeof t[0],
                eo = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
                ea = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: eo([0, .65, .55, 1]),
                    circOut: eo([.55, 0, 1, .45]),
                    backIn: eo([.31, .01, .66, -.59]),
                    backOut: eo([.33, 1.53, .69, .99])
                },
                el = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

            function eu(t, e, i, n) {
                if (t === e && i === n) return t0.Z;
                let r = e => (function(t, e, i, n, r) {
                    let s, o;
                    let a = 0;
                    do(s = el(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o; while (Math.abs(s) > 1e-7 && ++a < 12);
                    return o
                })(e, 0, 1, t, i);
                return t => 0 === t || 1 === t ? t : el(r(t), e, n)
            }
            let eh = eu(.42, 0, 1, 1),
                ec = eu(0, 0, .58, 1),
                ed = eu(.42, 0, .58, 1),
                ep = t => Array.isArray(t) && "number" != typeof t[0],
                em = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
                ef = t => e => 1 - t(1 - e),
                eg = t => 1 - Math.sin(Math.acos(t)),
                ev = ef(eg),
                ey = em(eg),
                ex = eu(.33, 1.53, .69, .99),
                eP = ef(ex),
                eb = em(eP),
                ew = {
                    linear: t0.Z,
                    easeIn: eh,
                    easeInOut: ed,
                    easeOut: ec,
                    circIn: eg,
                    circInOut: ey,
                    circOut: ev,
                    backIn: eP,
                    backInOut: eb,
                    backOut: ex,
                    anticipate: t => (t *= 2) < 1 ? .5 * eP(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                },
                eA = t => {
                    if (Array.isArray(t)) {
                        (0, ee.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, i, n, r] = t;
                        return eu(e, i, n, r)
                    }
                    return "string" == typeof t ? ((0, ee.k)(void 0 !== ew[t], `Invalid easing type '${t}'`), ew[t]) : t
                },
                eT = (t, e, i) => {
                    let n = e - t;
                    return 0 === n ? 1 : (i - t) / n
                },
                eS = (t, e, i) => t + (e - t) * i;

            function eV(t, e, i) {
                return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }
            let eE = (t, e) => i => !!(tt(i) && Q.test(i) && i.startsWith(t) || e && Object.prototype.hasOwnProperty.call(i, e)),
                eM = (t, e, i) => n => {
                    if (!tt(n)) return n;
                    let [r, s, o, a] = n.match(_);
                    return {
                        [t]: parseFloat(r),
                        [e]: parseFloat(s),
                        [i]: parseFloat(o),
                        alpha: void 0 !== a ? parseFloat(a) : 1
                    }
                },
                eC = t => Y(0, 255, t),
                eD = {
                    ...X,
                    transform: t => Math.round(eC(t))
                },
                ek = {
                    test: eE("rgb", "red"),
                    parse: eM("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: i,
                        alpha: n = 1
                    }) => "rgba(" + eD.transform(t) + ", " + eD.transform(e) + ", " + eD.transform(i) + ", " + K(G.transform(n)) + ")"
                },
                eR = {
                    test: eE("#"),
                    parse: function(t) {
                        let e = "",
                            i = "",
                            n = "",
                            r = "";
                        return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), n = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), n = t.substring(3, 4), r = t.substring(4, 5), e += e, i += i, n += n, r += r), {
                            red: parseInt(e, 16),
                            green: parseInt(i, 16),
                            blue: parseInt(n, 16),
                            alpha: r ? parseInt(r, 16) / 255 : 1
                        }
                    },
                    transform: ek.transform
                },
                eL = {
                    test: eE("hsl", "hue"),
                    parse: eM("hue", "saturation", "lightness"),
                    transform: ({
                        hue: t,
                        saturation: e,
                        lightness: i,
                        alpha: n = 1
                    }) => "hsla(" + Math.round(t) + ", " + tn.transform(K(e)) + ", " + tn.transform(K(i)) + ", " + K(G.transform(n)) + ")"
                },
                ej = (t, e, i) => {
                    let n = t * t,
                        r = i * (e * e - n) + n;
                    return r < 0 ? 0 : Math.sqrt(r)
                },
                eF = [eR, ek, eL],
                eB = t => eF.find(e => e.test(t));

            function eO(t) {
                let e = eB(t);
                (0, ee.k)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
                let i = e.parse(t);
                return e === eL && (i = function({
                    hue: t,
                    saturation: e,
                    lightness: i,
                    alpha: n
                }) {
                    t /= 360, i /= 100;
                    let r = 0,
                        s = 0,
                        o = 0;
                    if (e /= 100) {
                        let n = i < .5 ? i * (1 + e) : i + e - i * e,
                            a = 2 * i - n;
                        r = eV(a, n, t + 1 / 3), s = eV(a, n, t), o = eV(a, n, t - 1 / 3)
                    } else r = s = o = i;
                    return {
                        red: Math.round(255 * r),
                        green: Math.round(255 * s),
                        blue: Math.round(255 * o),
                        alpha: n
                    }
                }(i)), i
            }
            let eU = (t, e) => {
                    let i = eO(t),
                        n = eO(e),
                        r = {
                            ...i
                        };
                    return t => (r.red = ej(i.red, n.red, t), r.green = ej(i.green, n.green, t), r.blue = ej(i.blue, n.blue, t), r.alpha = eS(i.alpha, n.alpha, t), ek.transform(r))
                },
                eI = {
                    test: t => ek.test(t) || eR.test(t) || eL.test(t),
                    parse: t => ek.test(t) ? ek.parse(t) : eL.test(t) ? eL.parse(t) : eR.parse(t),
                    transform: t => tt(t) ? t : t.hasOwnProperty("red") ? ek.transform(t) : eL.transform(t)
                },
                eW = "number",
                eN = "color",
                e$ = /(var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\))|(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))|((-)?([\d]*\.?[\d])+)/gi;

            function eZ(t) {
                let e = t.toString(),
                    i = e.match(e$) || [],
                    n = [],
                    r = {
                        color: [],
                        number: [],
                        var: []
                    },
                    s = [];
                for (let t = 0; t < i.length; t++) {
                    let e = i[t];
                    eI.test(e) ? (r.color.push(t), s.push(eN), n.push(eI.parse(e))) : e.startsWith("var(") ? (r.var.push(t), s.push("var"), n.push(e)) : (r.number.push(t), s.push(eW), n.push(parseFloat(e)))
                }
                return {
                    values: n,
                    split: e.replace(e$, "${}").split("${}"),
                    indexes: r,
                    types: s
                }
            }

            function eH(t) {
                return eZ(t).values
            }

            function ez(t) {
                let {
                    split: e,
                    types: i
                } = eZ(t), n = e.length;
                return t => {
                    let r = "";
                    for (let s = 0; s < n; s++)
                        if (r += e[s], void 0 !== t[s]) {
                            let e = i[s];
                            e === eW ? r += K(t[s]) : e === eN ? r += eI.transform(t[s]) : r += t[s]
                        } return r
                }
            }
            let eY = t => "number" == typeof t ? 0 : t,
                eX = {
                    test: function(t) {
                        var e, i;
                        return isNaN(t) && tt(t) && ((null === (e = t.match(_)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(J)) || void 0 === i ? void 0 : i.length) || 0) > 0
                    },
                    parse: eH,
                    createTransformer: ez,
                    getAnimatableNone: function(t) {
                        let e = eH(t);
                        return ez(t)(e.map(eY))
                    }
                };

            function eG(t, e) {
                return i => i > 0 ? e : t
            }

            function eq(t, e) {
                return i => eS(t, e, i)
            }

            function eK(t) {
                return "number" == typeof t ? eq : "string" == typeof t ? Z(t) ? eG : eI.test(t) ? eU : eQ : Array.isArray(t) ? e_ : "object" == typeof t ? eI.test(t) ? eU : eJ : eG
            }

            function e_(t, e) {
                let i = [...t],
                    n = i.length,
                    r = t.map((t, i) => eK(t)(t, e[i]));
                return t => {
                    for (let e = 0; e < n; e++) i[e] = r[e](t);
                    return i
                }
            }

            function eJ(t, e) {
                let i = {
                        ...t,
                        ...e
                    },
                    n = {};
                for (let r in i) void 0 !== t[r] && void 0 !== e[r] && (n[r] = eK(t[r])(t[r], e[r]));
                return t => {
                    for (let e in n) i[e] = n[e](t);
                    return i
                }
            }
            let eQ = (t, e) => {
                let i = eX.createTransformer(e),
                    n = eZ(t),
                    r = eZ(e);
                return n.indexes.var.length === r.indexes.var.length && n.indexes.color.length === r.indexes.color.length && n.indexes.number.length >= r.indexes.number.length ? tZ(e_(function(t, e) {
                    var i;
                    let n = [],
                        r = {
                            color: 0,
                            var: 0,
                            number: 0
                        };
                    for (let s = 0; s < e.values.length; s++) {
                        let o = e.types[s],
                            a = t.indexes[o][r[o]],
                            l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                        n[s] = l, r[o]++
                    }
                    return n
                }(n, r), r.values), i) : ((0, ee.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), eG(t, e))
            };

            function e0(t, e, i) {
                return "number" == typeof t && "number" == typeof e && "number" == typeof i ? eS(t, e, i) : eK(t)(t, e)
            }

            function e1({
                duration: t = 300,
                keyframes: e,
                times: i,
                ease: n = "easeInOut"
            }) {
                let r = ep(n) ? n.map(eA) : eA(n),
                    s = {
                        done: !1,
                        value: e[0]
                    },
                    o = function(t, e, {
                        clamp: i = !0,
                        ease: n,
                        mixer: r
                    } = {}) {
                        let s = t.length;
                        if ((0, ee.k)(s === e.length, "Both input and output ranges must be the same length"), 1 === s) return () => e[0];
                        t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
                        let o = function(t, e, i) {
                                let n = [],
                                    r = i || e0,
                                    s = t.length - 1;
                                for (let i = 0; i < s; i++) {
                                    let s = r(t[i], t[i + 1]);
                                    e && (s = tZ(Array.isArray(e) ? e[i] || t0.Z : e, s)), n.push(s)
                                }
                                return n
                            }(e, n, r),
                            a = o.length,
                            l = e => {
                                let i = 0;
                                if (a > 1)
                                    for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                                let n = eT(t[i], t[i + 1], e);
                                return o[i](n)
                            };
                        return i ? e => l(Y(t[0], t[s - 1], e)) : l
                    }((i && i.length === e.length ? i : function(t) {
                        let e = [0];
                        return function(t, e) {
                            let i = t[t.length - 1];
                            for (let n = 1; n <= e; n++) {
                                let r = eT(0, e, n);
                                t.push(eS(i, 1, r))
                            }
                        }(e, t.length - 1), e
                    }(e)).map(e => e * t), e, {
                        ease: Array.isArray(r) ? r : e.map(() => r || ed).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (s.value = o(e), s.done = e >= t, s)
                }
            }

            function e5(t, e, i) {
                var n, r;
                let s = Math.max(e - 5, 0);
                return n = i - t(s), (r = e - s) ? 1e3 / r * n : 0
            }

            function e2(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let e3 = ["duration", "bounce"],
                e6 = ["stiffness", "damping", "mass"];

            function e9(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function e4({
                keyframes: t,
                restDelta: e,
                restSpeed: i,
                ...n
            }) {
                let r;
                let s = t[0],
                    o = t[t.length - 1],
                    a = {
                        done: !1,
                        value: s
                    },
                    {
                        stiffness: l,
                        damping: u,
                        mass: h,
                        duration: c,
                        velocity: d,
                        isResolvedFromDuration: p
                    } = function(t) {
                        let e = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!e9(t, e6) && e9(t, e3)) {
                            let i = function({
                                duration: t = 800,
                                bounce: e = .25,
                                velocity: i = 0,
                                mass: n = 1
                            }) {
                                let r, s;
                                (0, ee.K)(t <= ei(10), "Spring duration must be 10 seconds or less");
                                let o = 1 - e;
                                o = Y(.05, 1, o), t = Y(.01, 10, en(t)), o < 1 ? (r = e => {
                                    let n = e * o,
                                        r = n * t;
                                    return .001 - (n - i) / e2(e, o) * Math.exp(-r)
                                }, s = e => {
                                    let n = e * o * t,
                                        s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                                        a = e2(Math.pow(e, 2), o);
                                    return (n * i + i - s) * Math.exp(-n) * (-r(e) + .001 > 0 ? -1 : 1) / a
                                }) : (r = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1), s = e => t * t * (i - e) * Math.exp(-e * t));
                                let a = function(t, e, i) {
                                    let n = i;
                                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                                    return n
                                }(r, s, 5 / t);
                                if (t = ei(t), isNaN(a)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: t
                                };
                                {
                                    let e = Math.pow(a, 2) * n;
                                    return {
                                        stiffness: e,
                                        damping: 2 * o * Math.sqrt(n * e),
                                        duration: t
                                    }
                                }
                            }(t);
                            (e = {
                                ...e,
                                ...i,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return e
                    }({
                        ...n,
                        velocity: -en(n.velocity || 0)
                    }),
                    m = d || 0,
                    f = u / (2 * Math.sqrt(l * h)),
                    g = o - s,
                    v = en(Math.sqrt(l / h)),
                    y = 5 > Math.abs(g);
                if (i || (i = y ? .01 : 2), e || (e = y ? .005 : .5), f < 1) {
                    let t = e2(v, f);
                    r = e => o - Math.exp(-f * v * e) * ((m + f * v * g) / t * Math.sin(t * e) + g * Math.cos(t * e))
                } else if (1 === f) r = t => o - Math.exp(-v * t) * (g + (m + v * g) * t);
                else {
                    let t = v * Math.sqrt(f * f - 1);
                    r = e => {
                        let i = Math.exp(-f * v * e),
                            n = Math.min(t * e, 300);
                        return o - i * ((m + f * v * g) * Math.sinh(n) + t * g * Math.cosh(n)) / t
                    }
                }
                return {
                    calculatedDuration: p && c || null,
                    next: t => {
                        let n = r(t);
                        if (p) a.done = t >= c;
                        else {
                            let s = m;
                            0 !== t && (s = f < 1 ? e5(r, t, n) : 0);
                            let l = Math.abs(s) <= i,
                                u = Math.abs(o - n) <= e;
                            a.done = l && u
                        }
                        return a.value = a.done ? o : n, a
                    }
                }
            }

            function e8({
                keyframes: t,
                velocity: e = 0,
                power: i = .8,
                timeConstant: n = 325,
                bounceDamping: r = 10,
                bounceStiffness: s = 500,
                modifyTarget: o,
                min: a,
                max: l,
                restDelta: u = .5,
                restSpeed: h
            }) {
                let c, d;
                let p = t[0],
                    m = {
                        done: !1,
                        value: p
                    },
                    f = t => void 0 !== a && t < a || void 0 !== l && t > l,
                    g = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l,
                    v = i * e,
                    y = p + v,
                    x = void 0 === o ? y : o(y);
                x !== y && (v = x - p);
                let P = t => -v * Math.exp(-t / n),
                    b = t => x + P(t),
                    w = t => {
                        let e = P(t),
                            i = b(t);
                        m.done = Math.abs(e) <= u, m.value = m.done ? x : i
                    },
                    A = t => {
                        f(m.value) && (c = t, d = e4({
                            keyframes: [m.value, g(m.value)],
                            velocity: e5(b, t, m.value),
                            damping: r,
                            stiffness: s,
                            restDelta: u,
                            restSpeed: h
                        }))
                    };
                return A(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (d || void 0 !== c || (e = !0, w(t), A(t)), void 0 !== c && t > c) ? d.next(t - c) : (e || w(t), m)
                    }
                }
            }
            var e7 = i(6101);

            function it() {
                n = void 0
            }
            let ie = {
                    now: () => (void 0 === n && ie.set(tj.frameData.isProcessing || e7.c.useManualTiming ? tj.frameData.timestamp : performance.now()), n),
                    set: t => {
                        n = t, queueMicrotask(it)
                    }
                },
                ii = t => {
                    let e = ({
                        timestamp: e
                    }) => t(e);
                    return {
                        start: () => tj.Wi.update(e, !0),
                        stop: () => (0, tj.Pn)(e),
                        now: () => tj.frameData.isProcessing ? tj.frameData.timestamp : ie.now()
                    }
                };

            function ir(t) {
                let e = 0,
                    i = t.next(e);
                for (; !i.done && e < 2e4;) e += 50, i = t.next(e);
                return e >= 2e4 ? 1 / 0 : e
            }
            let is = {
                    decay: e8,
                    inertia: e8,
                    tween: e1,
                    keyframes: e1,
                    spring: e4
                },
                io = t => t / 100;

            function ia({
                autoplay: t = !0,
                delay: e = 0,
                driver: i = ii,
                keyframes: n,
                type: r = "keyframes",
                repeat: s = 0,
                repeatDelay: o = 0,
                repeatType: a = "loop",
                onPlay: l,
                onStop: u,
                onComplete: h,
                onUpdate: c,
                ...d
            }) {
                let p, m, f, g, v, y = 1,
                    x = !1,
                    P = () => {
                        m = new Promise(t => {
                            p = t
                        })
                    };
                P();
                let b = is[r] || e1;
                b !== e1 && "number" != typeof n[0] && (g = tZ(io, e0(n[0], n[1])), n = [0, 100]);
                let w = b({
                    ...d,
                    keyframes: n
                });
                "mirror" === a && (v = b({
                    ...d,
                    keyframes: [...n].reverse(),
                    velocity: -(d.velocity || 0)
                }));
                let A = "idle",
                    T = null,
                    S = null,
                    V = null;
                null === w.calculatedDuration && s && (w.calculatedDuration = ir(w));
                let {
                    calculatedDuration: E
                } = w, M = 1 / 0, C = 1 / 0;
                null !== E && (C = (M = E + o) * (s + 1) - o);
                let D = 0,
                    k = t => {
                        if (null === S) return;
                        y > 0 && (S = Math.min(S, t)), y < 0 && (S = Math.min(t - C / y, S));
                        let i = (D = null !== T ? T : Math.round(t - S) * y) - e * (y >= 0 ? 1 : -1),
                            r = y >= 0 ? i < 0 : i > C;
                        D = Math.max(i, 0), "finished" === A && null === T && (D = C);
                        let l = D,
                            u = w;
                        if (s) {
                            let t = Math.min(D, C) / M,
                                e = Math.floor(t),
                                i = t % 1;
                            !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, s + 1)) % 2 && ("reverse" === a ? (i = 1 - i, o && (i -= o / M)) : "mirror" === a && (u = v)), l = Y(0, 1, i) * M
                        }
                        let h = r ? {
                            done: !1,
                            value: n[0]
                        } : u.next(l);
                        g && (h.value = g(h.value));
                        let {
                            done: d
                        } = h;
                        r || null === E || (d = y >= 0 ? D >= C : D <= 0);
                        let p = null === T && ("finished" === A || "running" === A && d);
                        return c && c(h.value), p && j(), h
                    },
                    R = () => {
                        f && f.stop(), f = void 0
                    },
                    L = () => {
                        A = "idle", R(), p(), P(), S = V = null
                    },
                    j = () => {
                        A = "finished", h && h(), R(), p()
                    },
                    F = () => {
                        if (x) return;
                        f || (f = i(k));
                        let t = f.now();
                        l && l(), null !== T ? S = t - T : S && "finished" !== A || (S = t), "finished" === A && P(), V = S, T = null, A = "running", f.start()
                    };
                t && F();
                let B = {
                    then: (t, e) => m.then(t, e),
                    get time() {
                        return en(D)
                    },
                    set time(newTime) {
                        D = newTime = ei(newTime), null === T && f && 0 !== y ? S = f.now() - newTime / y : T = newTime
                    },
                    get duration() {
                        return en(null === w.calculatedDuration ? ir(w) : w.calculatedDuration)
                    },
                    get speed() {
                        return y
                    },
                    set speed(newSpeed) {
                        if (newSpeed === y || !f) return;
                        y = newSpeed, B.time = en(D)
                    },
                    get state() {
                        return A
                    },
                    play: F,
                    pause: () => {
                        A = "paused", T = D
                    },
                    stop: () => {
                        x = !0, "idle" !== A && (A = "idle", u && u(), L())
                    },
                    cancel: () => {
                        null !== V && k(V), L()
                    },
                    complete: () => {
                        A = "finished"
                    },
                    sample: t => (S = 0, k(t))
                };
                return B
            }
            let il = (o = () => Object.hasOwnProperty.call(Element.prototype, "animate"), () => (void 0 === r && (r = o()), r)),
                iu = new Set(["opacity", "clipPath", "filter", "transform"]),
                ih = (t, e) => "spring" === e.type || "backgroundColor" === t || ! function t(e) {
                    return !!(!e || "string" == typeof e && ea[e] || es(e) || Array.isArray(e) && e.every(t))
                }(e.ease),
                ic = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                id = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                ip = {
                    type: "keyframes",
                    duration: .8
                },
                im = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                ig = (t, {
                    keyframes: e
                }) => e.length > 2 ? ip : F.has(t) ? t.startsWith("scale") ? id(e[1]) : ic : im,
                iv = (t, e) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (eX.test(e) || "0" === e) && !e.startsWith("url(")),
                iy = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function ix(t) {
                let [e, i] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [n] = i.match(_) || [];
                if (!n) return t;
                let r = i.replace(n, ""),
                    s = iy.has(e) ? 1 : 0;
                return n !== i && (s *= 100), e + "(" + s + r + ")"
            }
            let iP = /([a-z-]*)\(.*?\)/g,
                ib = {
                    ...eX,
                    getAnimatableNone: t => {
                        let e = t.match(iP);
                        return e ? e.map(ix).join(" ") : t
                    }
                },
                iw = {
                    ...tu,
                    color: eI,
                    backgroundColor: eI,
                    outlineColor: eI,
                    fill: eI,
                    stroke: eI,
                    borderColor: eI,
                    borderTopColor: eI,
                    borderRightColor: eI,
                    borderBottomColor: eI,
                    borderLeftColor: eI,
                    filter: ib,
                    WebkitFilter: ib
                },
                iA = t => iw[t];

            function iT(t, e) {
                let i = iA(t);
                return i !== ib && (i = eX), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
            }
            let iS = t => /^0[^.\s]+$/.test(t);

            function iV(t, e) {
                return t[e] || t.default || t
            }
            let iE = (t, e, i, n = {}) => r => {
                let s = iV(n, t) || {},
                    o = s.delay || n.delay || 0,
                    {
                        elapsed: a = 0
                    } = n;
                a -= ei(o);
                let l = function(t, e, i, n) {
                        let r, s;
                        let o = iv(e, i);
                        r = Array.isArray(i) ? [...i] : [null, i];
                        let a = void 0 !== n.from ? n.from : t.get(),
                            l = [];
                        for (let t = 0; t < r.length; t++) {
                            var u;
                            null === r[t] && (r[t] = 0 === t ? a : r[t - 1]), ("number" == typeof(u = r[t]) ? 0 === u : null !== u ? "none" === u || "0" === u || iS(u) : void 0) && l.push(t), "string" == typeof r[t] && "none" !== r[t] && "0" !== r[t] && (s = r[t])
                        }
                        if (o && l.length && s)
                            for (let t = 0; t < l.length; t++) r[l[t]] = iT(e, s);
                        return r
                    }(e, t, i, s),
                    u = l[0],
                    h = l[l.length - 1],
                    c = iv(t, u),
                    d = iv(t, h);
                (0, ee.K)(c === d, `You are trying to animate ${t} from "${u}" to "${h}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${h} via the \`style\` property.`);
                let p = {
                    keyframes: l,
                    velocity: e.getVelocity(),
                    ease: "easeOut",
                    ...s,
                    delay: -a,
                    onUpdate: t => {
                        e.set(t), s.onUpdate && s.onUpdate(t)
                    },
                    onComplete: () => {
                        r(), s.onComplete && s.onComplete()
                    }
                };
                if (! function({
                        when: t,
                        delay: e,
                        delayChildren: i,
                        staggerChildren: n,
                        staggerDirection: r,
                        repeat: s,
                        repeatType: o,
                        repeatDelay: a,
                        from: l,
                        elapsed: u,
                        ...h
                    }) {
                        return !!Object.keys(h).length
                    }(s) && (p = {
                        ...p,
                        ...ig(t, p)
                    }), p.duration && (p.duration = ei(p.duration)), p.repeatDelay && (p.repeatDelay = ei(p.repeatDelay)), !c || !d || er.current || !1 === s.type || e7.c.skipAnimations) return function({
                    keyframes: t,
                    delay: e,
                    onUpdate: i,
                    onComplete: n
                }) {
                    let r = () => (i && i(t[t.length - 1]), n && n(), {
                        time: 0,
                        speed: 1,
                        duration: 0,
                        play: t0.Z,
                        pause: t0.Z,
                        stop: t0.Z,
                        then: t => (t(), Promise.resolve()),
                        cancel: t0.Z,
                        complete: t0.Z
                    });
                    return e ? ia({
                        keyframes: [0, 1],
                        duration: 0,
                        delay: e,
                        onComplete: r
                    }) : r()
                }(er.current ? {
                    ...p,
                    delay: 0
                } : p);
                if (!n.isHandoff && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
                    let i = function(t, e, {
                        onUpdate: i,
                        onComplete: n,
                        ...r
                    }) {
                        let s, o;
                        if (!(il() && iu.has(e) && !r.repeatDelay && "mirror" !== r.repeatType && 0 !== r.damping && "inertia" !== r.type)) return !1;
                        let a = !1,
                            l = !1,
                            u = () => {
                                o = new Promise(t => {
                                    s = t
                                })
                            };
                        u();
                        let {
                            keyframes: h,
                            duration: c = 300,
                            ease: d,
                            times: p
                        } = r;
                        if (ih(e, r)) {
                            let t = ia({
                                    ...r,
                                    repeat: 0,
                                    delay: 0
                                }),
                                e = {
                                    done: !1,
                                    value: h[0]
                                },
                                i = [],
                                n = 0;
                            for (; !e.done && n < 2e4;) e = t.sample(n), i.push(e.value), n += 10;
                            p = void 0, h = i, c = n - 10, d = "linear"
                        }
                        let m = function(t, e, i, {
                                delay: n = 0,
                                duration: r,
                                repeat: s = 0,
                                repeatType: o = "loop",
                                ease: a,
                                times: l
                            } = {}) {
                                let u = {
                                    [e]: i
                                };
                                l && (u.offset = l);
                                let h = function t(e) {
                                    if (e) return es(e) ? eo(e) : Array.isArray(e) ? e.map(t) : ea[e]
                                }(a);
                                return Array.isArray(h) && (u.easing = h), t.animate(u, {
                                    delay: n,
                                    duration: r,
                                    easing: Array.isArray(h) ? "linear" : h,
                                    fill: "both",
                                    iterations: s + 1,
                                    direction: "reverse" === o ? "alternate" : "normal"
                                })
                            }(t.owner.current, e, h, {
                                ...r,
                                duration: c,
                                ease: d,
                                times: p
                            }),
                            f = () => {
                                l = !1, m.cancel()
                            },
                            g = () => {
                                l = !0, tj.Wi.update(f), s(), u()
                            };
                        return m.onfinish = () => {
                            l || (t.set(function(t, {
                                repeat: e,
                                repeatType: i = "loop"
                            }) {
                                let n = e && "loop" !== i && e % 2 == 1 ? 0 : t.length - 1;
                                return t[n]
                            }(h, r)), n && n(), g())
                        }, {
                            then: (t, e) => o.then(t, e),
                            attachTimeline: t => (m.timeline = t, m.onfinish = null, t0.Z),
                            get time() {
                                return en(m.currentTime || 0)
                            },
                            set time(newTime) {
                                m.currentTime = ei(newTime)
                            },
                            get speed() {
                                return m.playbackRate
                            },
                            set speed(newSpeed) {
                                m.playbackRate = newSpeed
                            },
                            get duration() {
                                return en(c)
                            },
                            play: () => {
                                a || (m.play(), (0, tj.Pn)(f))
                            },
                            pause: () => m.pause(),
                            stop: () => {
                                if (a = !0, "idle" === m.playState) return;
                                let {
                                    currentTime: e
                                } = m;
                                if (e) {
                                    let i = ia({
                                        ...r,
                                        autoplay: !1
                                    });
                                    t.setWithVelocity(i.sample(e - 10).value, i.sample(e).value, 10)
                                }
                                g()
                            },
                            complete: () => {
                                l || m.finish()
                            },
                            cancel: g
                        }
                    }(e, t, p);
                    if (i) return i
                }
                return ia(p)
            };

            function iM(t) {
                return !!(O(t) && t.add)
            }
            let iC = t => /^\-?\d*\.?\d+$/.test(t);

            function iD(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function ik(t, e) {
                let i = t.indexOf(e);
                i > -1 && t.splice(i, 1)
            }
            class iR {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return iD(this.subscriptions, t), () => ik(this.subscriptions, t)
                }
                notify(t, e, i) {
                    let n = this.subscriptions.length;
                    if (n) {
                        if (1 === n) this.subscriptions[0](t, e, i);
                        else
                            for (let r = 0; r < n; r++) {
                                let n = this.subscriptions[r];
                                n && n(t, e, i)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
            let iL = t => !isNaN(parseFloat(t)),
                ij = {
                    current: void 0
                };
            class iF {
                constructor(t, e = {}) {
                    this.version = "11.0.5", this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                        let i = ie.now();
                        this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.hasAnimated = !1, this.setCurrent(t), this.canTrackVelocity = iL(this.current), this.owner = e.owner
                }
                setCurrent(t) {
                    this.current = t, this.updatedAt = ie.now()
                }
                setPrevFrameValue(t = this.current) {
                    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new iR);
                    let i = this.events[t].add(e);
                    return "change" === t ? () => {
                        i(), tj.Wi.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : i
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, i) {
                    this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - i
                }
                jump(t) {
                    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return ij.current && ij.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    var t;
                    let e = ie.now();
                    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30) return 0;
                    let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                    return t = parseFloat(this.current) - parseFloat(this.prevFrameValue), i ? 1e3 / i * t : 0
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function iB(t, e) {
                return new iF(t, e)
            }
            let iO = t => e => e.test(t),
                iU = [X, tr, tn, ti, to, ts, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                iI = t => iU.find(iO(t)),
                iW = [...iU, eI, eX],
                iN = t => iW.find(iO(t));

            function i$(t, e, {
                delay: i = 0,
                transitionOverride: n,
                type: r
            } = {}) {
                let {
                    transition: s = t.getDefaultTransition(),
                    transitionEnd: o,
                    ...a
                } = t.makeTargetAnimatable(e), l = t.getValue("willChange");
                n && (s = n);
                let u = [],
                    h = r && t.animationState && t.animationState.getState()[r];
                for (let e in a) {
                    let n = t.getValue(e),
                        r = a[e];
                    if (!n || void 0 === r || h && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, i) {
                            let n = t.hasOwnProperty(i) && !0 !== e[i];
                            return e[i] = !1, n
                        }(h, e)) continue;
                    let o = {
                        delay: i,
                        elapsed: 0,
                        ...iV(s || {}, e)
                    };
                    if (window.HandoffAppearAnimations) {
                        let i = t.getProps()[m];
                        if (i) {
                            let t = window.HandoffAppearAnimations(i, e, n, tj.Wi);
                            null !== t && (o.elapsed = t, o.isHandoff = !0)
                        }
                    }
                    let c = !o.isHandoff && ! function(t, e) {
                        let i = t.get();
                        if (!Array.isArray(e)) return i !== e;
                        for (let t = 0; t < e.length; t++)
                            if (e[t] !== i) return !0
                    }(n, r);
                    if ("spring" === o.type && (n.getVelocity() || o.velocity) && (c = !1), n.animation && (c = !1), c) continue;
                    n.start(iE(e, n, r, t.shouldReduceMotion && F.has(e) ? {
                        type: !1
                    } : o));
                    let d = n.animation;
                    iM(l) && (l.add(e), d.then(() => l.remove(e))), u.push(d)
                }
                return o && Promise.all(u).then(() => {
                    o && function(t, e) {
                        let i = et(t, e),
                            {
                                transitionEnd: n = {},
                                transition: r = {},
                                ...s
                            } = i ? t.makeTargetAnimatable(i, !1) : {};
                        for (let e in s = {
                                ...s,
                                ...n
                            }) {
                            let i = tk(s[e]);
                            t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, iB(i))
                        }
                    }(t, o)
                }), u
            }

            function iZ(t, e, i = {}) {
                let n = et(t, e, i.custom),
                    {
                        transition: r = t.getDefaultTransition() || {}
                    } = n || {};
                i.transitionOverride && (r = i.transitionOverride);
                let s = n ? () => Promise.all(i$(t, n, i)) : () => Promise.resolve(),
                    o = t.variantChildren && t.variantChildren.size ? (n = 0) => {
                        let {
                            delayChildren: s = 0,
                            staggerChildren: o,
                            staggerDirection: a
                        } = r;
                        return function(t, e, i = 0, n = 0, r = 1, s) {
                            let o = [],
                                a = (t.variantChildren.size - 1) * n,
                                l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                            return Array.from(t.variantChildren).sort(iH).forEach((t, n) => {
                                t.notify("AnimationStart", e), o.push(iZ(t, e, {
                                    ...s,
                                    delay: i + l(n)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(o)
                        }(t, e, s + n, o, a, i)
                    } : () => Promise.resolve(),
                    {
                        when: a
                    } = r;
                if (!a) return Promise.all([s(), o(i.delay)]);
                {
                    let [t, e] = "beforeChildren" === a ? [s, o] : [o, s];
                    return t().then(() => e())
                }
            }

            function iH(t, e) {
                return t.sortNodePosition(e)
            }
            let iz = [...P].reverse(),
                iY = P.length;

            function iX(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            class iG extends tq {
                constructor(t) {
                    super(t), t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map(({
                                animation: e,
                                options: i
                            }) => (function(t, e, i = {}) {
                                let n;
                                if (t.notify("AnimationStart", e), Array.isArray(e)) n = Promise.all(e.map(e => iZ(t, e, i)));
                                else if ("string" == typeof e) n = iZ(t, e, i);
                                else {
                                    let r = "function" == typeof e ? et(t, e, i.custom) : e;
                                    n = Promise.all(i$(t, r, i))
                                }
                                return n.then(() => t.notify("AnimationComplete", e))
                            })(t, e, i))),
                            i = {
                                animate: iX(!0),
                                whileInView: iX(),
                                whileHover: iX(),
                                whileTap: iX(),
                                whileDrag: iX(),
                                whileFocus: iX(),
                                exit: iX()
                            },
                            n = !0,
                            r = (e, i) => {
                                let n = et(t, i);
                                if (n) {
                                    let {
                                        transition: t,
                                        transitionEnd: i,
                                        ...r
                                    } = n;
                                    e = {
                                        ...e,
                                        ...r,
                                        ...i
                                    }
                                }
                                return e
                            };

                        function s(s, o) {
                            let a = t.getProps(),
                                l = t.getVariantContext(!0) || {},
                                u = [],
                                h = new Set,
                                c = {},
                                d = 1 / 0;
                            for (let e = 0; e < iY; e++) {
                                var p;
                                let m = iz[e],
                                    f = i[m],
                                    g = void 0 !== a[m] ? a[m] : l[m],
                                    v = y(g),
                                    P = m === o ? f.isActive : null;
                                !1 === P && (d = e);
                                let b = g === l[m] && g !== a[m] && v;
                                if (b && n && t.manuallyAnimateOnMount && (b = !1), f.protectedKeys = {
                                        ...c
                                    }, !f.isActive && null === P || !g && !f.prevProp || x(g) || "boolean" == typeof g) continue;
                                let w = (p = f.prevProp, ("string" == typeof g ? g !== p : !!Array.isArray(g) && !t7(g, p)) || m === o && f.isActive && !b && v || e > d && v),
                                    A = !1,
                                    T = Array.isArray(g) ? g : [g],
                                    S = T.reduce(r, {});
                                !1 === P && (S = {});
                                let {
                                    prevResolvedValues: V = {}
                                } = f, E = {
                                    ...V,
                                    ...S
                                }, M = t => {
                                    w = !0, h.has(t) && (A = !0, h.delete(t)), f.needsAnimating[t] = !0
                                };
                                for (let t in E) {
                                    let e = S[t],
                                        i = V[t];
                                    if (!c.hasOwnProperty(t))(tC(e) && tC(i) ? t7(e, i) : e === i) ? void 0 !== e && h.has(t) ? M(t) : f.protectedKeys[t] = !0 : void 0 !== e ? M(t) : h.add(t)
                                }
                                f.prevProp = g, f.prevResolvedValues = S, f.isActive && (c = {
                                    ...c,
                                    ...S
                                }), n && t.blockInitialAnimation && (w = !1), w && (!b || A) && u.push(...T.map(t => ({
                                    animation: t,
                                    options: {
                                        type: m,
                                        ...s
                                    }
                                })))
                            }
                            if (h.size) {
                                let e = {};
                                h.forEach(i => {
                                    let n = t.getBaseTarget(i);
                                    void 0 !== n && (e[i] = n)
                                }), u.push({
                                    animation: e
                                })
                            }
                            let m = !!u.length;
                            return n && (!1 === a.initial || a.initial === a.animate) && !t.manuallyAnimateOnMount && (m = !1), n = !1, m ? e(u) : Promise.resolve()
                        }
                        return {
                            animateChanges: s,
                            setActive: function(e, n, r) {
                                var o;
                                if (i[e].isActive === n) return Promise.resolve();
                                null === (o = t.variantChildren) || void 0 === o || o.forEach(t => {
                                    var i;
                                    return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, n)
                                }), i[e].isActive = n;
                                let a = s(r, e);
                                for (let t in i) i[t].protectedKeys = {};
                                return a
                            },
                            setAnimateFunction: function(i) {
                                e = i(t)
                            },
                            getState: () => i
                        }
                    }(t))
                }
                updateAnimationControlsSubscription() {
                    let {
                        animate: t
                    } = this.node.getProps();
                    this.unmount(), x(t) && (this.unmount = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: t
                    } = this.node.getProps(), {
                        animate: e
                    } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {}
            }
            let iq = 0;
            class iK extends tq {
                constructor() {
                    super(...arguments), this.id = iq++
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: t,
                        onExitComplete: e,
                        custom: i
                    } = this.node.presenceContext, {
                        isPresent: n
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === n) return;
                    let r = this.node.animationState.setActive("exit", !t, {
                        custom: null != i ? i : this.node.getProps().custom
                    });
                    e && !t && r.then(() => e(this.id))
                }
                mount() {
                    let {
                        register: t
                    } = this.node.presenceContext || {};
                    t && (this.unmount = t(this.id))
                }
                unmount() {}
            }
            let i_ = (t, e) => Math.abs(t - e);
            class iJ {
                constructor(t, e, {
                    transformPagePoint: i,
                    contextWindow: n,
                    dragSnapToOrigin: r = !1
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                            var t, e;
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let i = i1(this.lastMoveEventInfo, this.history),
                                n = null !== this.startEvent,
                                r = (t = i.offset, e = {
                                    x: 0,
                                    y: 0
                                }, Math.sqrt(i_(t.x, e.x) ** 2 + i_(t.y, e.y) ** 2) >= 3);
                            if (!n && !r) return;
                            let {
                                point: s
                            } = i, {
                                timestamp: o
                            } = tj.frameData;
                            this.history.push({
                                ...s,
                                timestamp: o
                            });
                            let {
                                onStart: a,
                                onMove: l
                            } = this.handlers;
                            n || (a && a(this.lastMoveEvent, i), this.startEvent = this.lastMoveEvent), l && l(this.lastMoveEvent, i)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = iQ(e, this.transformPagePoint), tj.Wi.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            this.end();
                            let {
                                onEnd: i,
                                onSessionEnd: n,
                                resumeAnimation: r
                            } = this.handlers;
                            if (this.dragSnapToOrigin && r && r(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let s = i1("pointercancel" === t.type ? this.lastMoveEventInfo : iQ(e, this.transformPagePoint), this.history);
                            this.startEvent && i && i(t, s), n && n(t, s)
                        }, !tU(t)) return;
                    this.dragSnapToOrigin = r, this.handlers = e, this.transformPagePoint = i, this.contextWindow = n || window;
                    let s = iQ(tI(t), this.transformPagePoint),
                        {
                            point: o
                        } = s,
                        {
                            timestamp: a
                        } = tj.frameData;
                    this.history = [{
                        ...o,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: l
                    } = e;
                    l && l(t, i1(s, this.history)), this.removeListeners = tZ(tN(this.contextWindow, "pointermove", this.handlePointerMove), tN(this.contextWindow, "pointerup", this.handlePointerUp), tN(this.contextWindow, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), (0, tj.Pn)(this.updatePoint)
                }
            }

            function iQ(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function i0(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function i1({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: i0(t, i5(e)),
                    offset: i0(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = t.length - 1,
                            n = null,
                            r = i5(t);
                        for (; i >= 0 && (n = t[i], !(r.timestamp - n.timestamp > ei(.1)));) i--;
                        if (!n) return {
                            x: 0,
                            y: 0
                        };
                        let s = en(r.timestamp - n.timestamp);
                        if (0 === s) return {
                            x: 0,
                            y: 0
                        };
                        let o = {
                            x: (r.x - n.x) / s,
                            y: (r.y - n.y) / s
                        };
                        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
                    }(e, 0)
                }
            }

            function i5(t) {
                return t[t.length - 1]
            }

            function i2(t) {
                return t.max - t.min
            }

            function i3(t, e = 0, i = .01) {
                return Math.abs(t - e) <= i
            }

            function i6(t, e, i, n = .5) {
                t.origin = n, t.originPoint = eS(e.min, e.max, t.origin), t.scale = i2(i) / i2(e), (i3(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = eS(i.min, i.max, t.origin) - t.originPoint, (i3(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function i9(t, e, i, n) {
                i6(t.x, e.x, i.x, n ? n.originX : void 0), i6(t.y, e.y, i.y, n ? n.originY : void 0)
            }

            function i4(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + i2(e)
            }

            function i8(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + i2(e)
            }

            function i7(t, e, i) {
                i8(t.x, e.x, i.x), i8(t.y, e.y, i.y)
            }

            function nt(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function ne(t, e) {
                let i = e.min - t.min,
                    n = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, n] = [n, i]), {
                    min: i,
                    max: n
                }
            }

            function ni(t, e, i) {
                return {
                    min: nn(t, e),
                    max: nn(t, i)
                }
            }

            function nn(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let nr = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                ns = () => ({
                    x: nr(),
                    y: nr()
                }),
                no = () => ({
                    min: 0,
                    max: 0
                }),
                na = () => ({
                    x: no(),
                    y: no()
                });

            function nl(t) {
                return [t("x"), t("y")]
            }

            function nu({
                top: t,
                left: e,
                right: i,
                bottom: n
            }) {
                return {
                    x: {
                        min: e,
                        max: i
                    },
                    y: {
                        min: t,
                        max: n
                    }
                }
            }

            function nh(t) {
                return void 0 === t || 1 === t
            }

            function nc({
                scale: t,
                scaleX: e,
                scaleY: i
            }) {
                return !nh(t) || !nh(e) || !nh(i)
            }

            function nd(t) {
                return nc(t) || np(t) || t.z || t.rotate || t.rotateX || t.rotateY
            }

            function np(t) {
                var e, i;
                return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
            }

            function nm(t, e, i, n, r) {
                return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e
            }

            function nf(t, e = 0, i = 1, n, r) {
                t.min = nm(t.min, e, i, n, r), t.max = nm(t.max, e, i, n, r)
            }

            function ng(t, {
                x: e,
                y: i
            }) {
                nf(t.x, e.translate, e.scale, e.originPoint), nf(t.y, i.translate, i.scale, i.originPoint)
            }

            function nv(t) {
                return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
            }

            function ny(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function nx(t, e, [i, n, r]) {
                let s = void 0 !== e[r] ? e[r] : .5,
                    o = eS(t.min, t.max, s);
                nf(t, e[i], e[n], o, e.scale)
            }
            let nP = ["x", "scaleX", "originX"],
                nb = ["y", "scaleY", "originY"];

            function nw(t, e) {
                nx(t.x, e, nP), nx(t.y, e, nb)
            }

            function nA(t, e) {
                return nu(function(t, e) {
                    if (!e) return t;
                    let i = e({
                            x: t.left,
                            y: t.top
                        }),
                        n = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: i.y,
                        left: i.x,
                        bottom: n.y,
                        right: n.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            let nT = ({
                    current: t
                }) => t ? t.ownerDocument.defaultView : null,
                nS = new WeakMap;
            class nV {
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = na(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: i
                    } = this.visualElement;
                    if (i && !1 === i.isPresent) return;
                    let {
                        dragSnapToOrigin: n
                    } = this.getProps();
                    this.panSession = new iJ(t, {
                        onSessionStart: t => {
                            let {
                                dragSnapToOrigin: i
                            } = this.getProps();
                            i ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(tI(t, "page").point)
                        },
                        onStart: (t, e) => {
                            let {
                                drag: i,
                                dragPropagation: n,
                                onDragStart: r
                            } = this.getProps();
                            if (i && !n && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = tX(i), !this.openGlobalLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), nl(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (tn.test(e)) {
                                    let {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        let n = i.layout.layoutBox[t];
                                        if (n) {
                                            let t = i2(n);
                                            e = parseFloat(e) / 100 * t
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            }), r && tj.Wi.update(() => r(t, e), !1, !0);
                            let {
                                animationState: s
                            } = this.visualElement;
                            s && s.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: n,
                                onDirectionLock: r,
                                onDrag: s
                            } = this.getProps();
                            if (!i && !this.openGlobalLock) return;
                            let {
                                offset: o
                            } = e;
                            if (n && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let i = null;
                                    return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                }(o), null !== this.currentDirection && r && r(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), s && s(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e),
                        resumeAnimation: () => nl(t => {
                            var e;
                            return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                        })
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint(),
                        dragSnapToOrigin: n,
                        contextWindow: nT(this.visualElement)
                    })
                }
                stop(t, e) {
                    let i = this.isDragging;
                    if (this.cancel(), !i) return;
                    let {
                        velocity: n
                    } = e;
                    this.startAnimation(n);
                    let {
                        onDragEnd: r
                    } = this.getProps();
                    r && tj.Wi.update(() => r(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, i) {
                    let {
                        drag: n
                    } = this.getProps();
                    if (!i || !nE(t, n, this.currentDirection)) return;
                    let r = this.getAxisMotionValue(t),
                        s = this.originPoint[t] + i[t];
                    this.constraints && this.constraints[t] && (s = function(t, {
                        min: e,
                        max: i
                    }, n) {
                        return void 0 !== e && t < e ? t = n ? eS(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? eS(i, t, n.max) : Math.min(t, i)), t
                    }(s, this.constraints[t], this.elastic[t])), r.set(s)
                }
                resolveConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        dragElastic: i
                    } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout, r = this.constraints;
                    e && v(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(t, {
                        top: e,
                        left: i,
                        bottom: n,
                        right: r
                    }) {
                        return {
                            x: nt(t.x, i, r),
                            y: nt(t.y, e, n)
                        }
                    }(n.layoutBox, e) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: ni(t, "left", "right"),
                            y: ni(t, "top", "bottom")
                        }
                    }(i), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && nl(t => {
                        this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                        }(n.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!e || !v(e)) return !1;
                    let n = e.current;
                    (0, ee.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: r
                    } = this.visualElement;
                    if (!r || !r.layout) return !1;
                    let s = function(t, e, i) {
                            let n = nA(t, i),
                                {
                                    scroll: r
                                } = e;
                            return r && (ny(n.x, r.offset.x), ny(n.y, r.offset.y)), n
                        }(n, r.root, this.visualElement.getTransformPagePoint()),
                        o = {
                            x: ne((t = r.layout.layoutBox).x, s.x),
                            y: ne(t.y, s.y)
                        };
                    if (i) {
                        let t = i(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(o));
                        this.hasMutatedConstraints = !!t, t && (o = nu(t))
                    }
                    return o
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: i,
                        dragElastic: n,
                        dragTransition: r,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: o
                    } = this.getProps(), a = this.constraints || {};
                    return Promise.all(nl(o => {
                        if (!nE(o, e, this.currentDirection)) return;
                        let l = a && a[o] || {};
                        s && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: i ? t[o] : 0,
                            bounceStiffness: n ? 200 : 1e6,
                            bounceDamping: n ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...r,
                            ...l
                        };
                        return this.startAxisValueAnimation(o, u)
                    })).then(o)
                }
                startAxisValueAnimation(t, e) {
                    let i = this.getAxisMotionValue(t);
                    return i.start(iE(t, i, 0, e))
                }
                stopAnimation() {
                    nl(t => this.getAxisMotionValue(t).stop())
                }
                pauseAnimation() {
                    nl(t => {
                        var e;
                        return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                    })
                }
                getAnimationState(t) {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
                }
                getAxisMotionValue(t) {
                    let e = "_drag" + t.toUpperCase(),
                        i = this.visualElement.getProps();
                    return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    nl(e => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!nE(e, i, this.currentDirection)) return;
                        let {
                            projection: n
                        } = this.visualElement, r = this.getAxisMotionValue(e);
                        if (n && n.layout) {
                            let {
                                min: i,
                                max: s
                            } = n.layout.layoutBox[e];
                            r.set(t[e] - eS(i, s, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!v(e) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let n = {
                        x: 0,
                        y: 0
                    };
                    nl(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e) {
                            let i = e.get();
                            n[t] = function(t, e) {
                                let i = .5,
                                    n = i2(t),
                                    r = i2(e);
                                return r > n ? i = eT(e.min, e.max - n, t.min) : n > r && (i = eT(t.min, t.max - r, e.min)), Y(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: r
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), nl(e => {
                        if (!nE(e, t, null)) return;
                        let i = this.getAxisMotionValue(e),
                            {
                                min: r,
                                max: s
                            } = this.constraints[e];
                        i.set(eS(r, s, n[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    nS.set(this.visualElement, this);
                    let t = tN(this.visualElement.current, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: i = !0
                            } = this.getProps();
                            e && i && this.start(t)
                        }),
                        e = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            v(t) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: i
                        } = this.visualElement,
                        n = i.addEventListener("measure", e);
                    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), e();
                    let r = tO(window, "resize", () => this.scalePositionWithinConstraints()),
                        s = i.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (nl(e => {
                                let i = this.getAxisMotionValue(e);
                                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        r(), t(), n(), s && s()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: n = !1,
                            dragConstraints: r = !1,
                            dragElastic: s = .35,
                            dragMomentum: o = !0
                        } = t;
                    return {
                        ...t,
                        drag: e,
                        dragDirectionLock: i,
                        dragPropagation: n,
                        dragConstraints: r,
                        dragElastic: s,
                        dragMomentum: o
                    }
                }
            }

            function nE(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            class nM extends tq {
                constructor(t) {
                    super(t), this.removeGroupControls = t0.Z, this.removeListeners = t0.Z, this.controls = new nV(t)
                }
                mount() {
                    let {
                        dragControls: t
                    } = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || t0.Z
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let nC = t => (e, i) => {
                t && tj.Wi.update(() => t(e, i))
            };
            class nD extends tq {
                constructor() {
                    super(...arguments), this.removePointerDownListener = t0.Z
                }
                onPointerDown(t) {
                    this.session = new iJ(t, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: nT(this.node)
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: t,
                        onPanStart: e,
                        onPan: i,
                        onPanEnd: n
                    } = this.node.getProps();
                    return {
                        onSessionStart: nC(t),
                        onStart: nC(e),
                        onMove: i,
                        onEnd: (t, e) => {
                            delete this.session, n && tj.Wi.update(() => n(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = tN(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
            }
            let nk = {
                hasAnimatedSinceResize: !0,
                hasEverUpdated: !1
            };

            function nR(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let nL = {
                correct: (t, e) => {
                    if (!e.target) return t;
                    if ("string" == typeof t) {
                        if (!tr.test(t)) return t;
                        t = parseFloat(t)
                    }
                    let i = nR(t, e.target.x),
                        n = nR(t, e.target.y);
                    return `${i}% ${n}%`
                }
            };
            class nj extends a.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i,
                        layoutId: n
                    } = this.props, {
                        projection: r
                    } = t;
                    Object.assign(L, nB), r && (e.group && e.group.add(r), i && i.register && n && i.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), r.setOptions({
                        ...r.options,
                        onExitComplete: () => this.safeToRemove()
                    })), nk.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: i,
                        drag: n,
                        isPresent: r
                    } = this.props, s = i.projection;
                    return s && (s.isPresent = r, n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent === r || (r ? s.promote() : s.relegate() || tj.Wi.postRender(() => {
                        let t = s.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), f.postRender(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: n
                    } = t;
                    n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), i && i.deregister && i.deregister(n))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function nF(t) {
                let [e, i] = function() {
                    let t = (0, a.useContext)(h.O);
                    if (null === t) return [!0, null];
                    let {
                        isPresent: e,
                        onExitComplete: i,
                        register: n
                    } = t, r = (0, a.useId)();
                    return (0, a.useEffect)(() => n(r), []), !e && i ? [!1, () => i && i(r)] : [!0]
                }(), n = (0, a.useContext)(M.p);
                return a.createElement(nj, {
                    ...t,
                    layoutGroup: n,
                    switchLayoutGroup: (0, a.useContext)(C),
                    isPresent: e,
                    safeToRemove: i
                })
            }
            let nB = {
                    borderRadius: {
                        ...nL,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: nL,
                    borderTopRightRadius: nL,
                    borderBottomLeftRadius: nL,
                    borderBottomRightRadius: nL,
                    boxShadow: {
                        correct: (t, {
                            treeScale: e,
                            projectionDelta: i
                        }) => {
                            let n = eX.parse(t);
                            if (n.length > 5) return t;
                            let r = eX.createTransformer(t),
                                s = "number" != typeof n[0] ? 1 : 0,
                                o = i.x.scale * e.x,
                                a = i.y.scale * e.y;
                            n[0 + s] /= o, n[1 + s] /= a;
                            let l = eS(o, a, .5);
                            return "number" == typeof n[2 + s] && (n[2 + s] /= l), "number" == typeof n[3 + s] && (n[3 + s] /= l), r(n)
                        }
                    }
                },
                nO = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                nU = nO.length,
                nI = t => "string" == typeof t ? parseFloat(t) : t,
                nW = t => "number" == typeof t || tr.test(t);

            function nN(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let n$ = nH(0, .5, ev),
                nZ = nH(.5, .95, t0.Z);

            function nH(t, e, i) {
                return n => n < t ? 0 : n > e ? 1 : i(eT(t, e, n))
            }

            function nz(t, e) {
                t.min = e.min, t.max = e.max
            }

            function nY(t, e) {
                nz(t.x, e.x), nz(t.y, e.y)
            }

            function nX(t, e, i, n, r) {
                return t -= e, t = n + 1 / i * (t - n), void 0 !== r && (t = n + 1 / r * (t - n)), t
            }

            function nG(t, e, [i, n, r], s, o) {
                ! function(t, e = 0, i = 1, n = .5, r, s = t, o = t) {
                    if (tn.test(e) && (e = parseFloat(e), e = eS(o.min, o.max, e / 100) - o.min), "number" != typeof e) return;
                    let a = eS(s.min, s.max, n);
                    t === s && (a -= e), t.min = nX(t.min, e, i, a, r), t.max = nX(t.max, e, i, a, r)
                }(t, e[i], e[n], e[r], e.scale, s, o)
            }
            let nq = ["x", "scaleX", "originX"],
                nK = ["y", "scaleY", "originY"];

            function n_(t, e, i, n) {
                nG(t.x, e, nq, i ? i.x : void 0, n ? n.x : void 0), nG(t.y, e, nK, i ? i.y : void 0, n ? n.y : void 0)
            }

            function nJ(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function nQ(t) {
                return nJ(t.x) && nJ(t.y)
            }

            function n0(t, e) {
                return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
            }

            function n1(t) {
                return i2(t.x) / i2(t.y)
            }
            class n5 {
                constructor() {
                    this.members = []
                }
                add(t) {
                    iD(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if (ik(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let i = this.members.findIndex(e => t === e);
                    if (0 === i) return !1;
                    for (let t = i; t >= 0; t--) {
                        let i = this.members[t];
                        if (!1 !== i.isPresent) {
                            e = i;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: n
                        } = t.options;
                        !1 === n && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: i
                        } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function n2(t, e, i) {
                let n = "",
                    r = t.x.translate / e.x,
                    s = t.y.translate / e.y;
                if ((r || s) && (n = `translate3d(${r}px, ${s}px, 0) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1/e.x}, ${1/e.y}) `), i) {
                    let {
                        rotate: t,
                        rotateX: e,
                        rotateY: r
                    } = i;
                    t && (n += `rotate(${t}deg) `), e && (n += `rotateX(${e}deg) `), r && (n += `rotateY(${r}deg) `)
                }
                let o = t.x.scale * e.x,
                    a = t.y.scale * e.y;
                return (1 !== o || 1 !== a) && (n += `scale(${o}, ${a})`), n || "none"
            }
            let n3 = (t, e) => t.depth - e.depth;
            class n6 {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    iD(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    ik(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(n3), this.isDirty = !1, this.children.forEach(t)
                }
            }
            let n9 = ["", "X", "Y", "Z"],
                n4 = {
                    visibility: "hidden"
                },
                n8 = 0,
                n7 = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                };

            function rt({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: i,
                checkIsScrollRoot: n,
                resetTransform: r
            }) {
                return class {
                    constructor(t = {}, i = null == e ? void 0 : e()) {
                        this.id = n8++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1, n7.totalNodes = n7.resolvedTargetDeltas = n7.recalculatedProjection = 0, this.nodes.forEach(rn), this.nodes.forEach(rh), this.nodes.forEach(rc), this.nodes.forEach(rr), window.MotionDebug && window.MotionDebug.record(n7)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new n6)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new iR), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let i = this.eventHandlers.get(t);
                        i && i.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, i = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: n,
                            layout: r,
                            visualElement: s
                        } = this.options;
                        if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (r || n) && (this.isLayoutDirty = !0), t) {
                            let i;
                            let n = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, i && i(), i = function(t, e) {
                                    let i = ie.now(),
                                        n = ({
                                            timestamp: r
                                        }) => {
                                            let s = r - i;
                                            s >= e && ((0, tj.Pn)(n), t(s - e))
                                        };
                                    return tj.Wi.read(n, !0), () => (0, tj.Pn)(n)
                                }(n, 250), nk.hasAnimatedSinceResize && (nk.hasAnimatedSinceResize = !1, this.nodes.forEach(ru))
                            })
                        }
                        n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && s && (n || r) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: i,
                            layout: n
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let r = this.options.transition || s.getDefaultTransition() || rv,
                                {
                                    onLayoutAnimationStart: o,
                                    onLayoutAnimationComplete: a
                                } = s.getProps(),
                                l = !this.targetLayout || !n0(this.targetLayout, n) || i,
                                u = !e && i;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                                let e = {
                                    ...iV(r, "layout"),
                                    onPlay: o,
                                    onComplete: a
                                };
                                (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || ru(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = n
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, tj.Pn)(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(rd), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: i
                        } = this.options;
                        if (void 0 === e && !i) return;
                        let n = this.getTransformTemplate();
                        this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ro);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(ra), this.isUpdating = !1, this.nodes.forEach(rl), this.nodes.forEach(re), this.nodes.forEach(ri), this.clearAllSnapshots();
                        let t = ie.now();
                        tj.frameData.delta = Y(0, 1e3 / 60, t - tj.frameData.timestamp), tj.frameData.timestamp = t, tj.frameData.isProcessing = !0, tj.S6.update.process(tj.frameData), tj.S6.preRender.process(tj.frameData), tj.S6.render.process(tj.frameData), tj.frameData.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, f.read(() => this.update()))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(rs), this.sharedNodes.forEach(rp)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, tj.Wi.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        tj.Wi.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = na(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: n(this.instance),
                            offset: i(this.instance)
                        })
                    }
                    resetTransform() {
                        if (!r) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform,
                            e = this.projectionDelta && !nQ(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            n = i ? i(this.latestValues, "") : void 0,
                            s = n !== this.prevTransformTemplateValue;
                        t && (e || nd(this.latestValues) || s) && (r(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let i = this.measurePageBox(),
                            n = this.removeElementScroll(i);
                        return t && (n = this.removeTransform(n)), rP((e = n).x), rP(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: i,
                            layoutBox: n,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return na();
                        let e = t.measureViewportBox(),
                            {
                                scroll: i
                            } = this.root;
                        return i && (ny(e.x, i.offset.x), ny(e.y, i.offset.y)), e
                    }
                    removeElementScroll(t) {
                        let e = na();
                        nY(e, t);
                        for (let i = 0; i < this.path.length; i++) {
                            let n = this.path[i],
                                {
                                    scroll: r,
                                    options: s
                                } = n;
                            if (n !== this.root && r && s.layoutScroll) {
                                if (r.isRoot) {
                                    nY(e, t);
                                    let {
                                        scroll: i
                                    } = this.root;
                                    i && (ny(e.x, -i.offset.x), ny(e.y, -i.offset.y))
                                }
                                ny(e.x, r.offset.x), ny(e.y, r.offset.y)
                            }
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        let i = na();
                        nY(i, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let n = this.path[t];
                            !e && n.options.layoutScroll && n.scroll && n !== n.root && nw(i, {
                                x: -n.scroll.offset.x,
                                y: -n.scroll.offset.y
                            }), nd(n.latestValues) && nw(i, n.latestValues)
                        }
                        return nd(this.latestValues) && nw(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        let e = na();
                        nY(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            if (!i.instance || !nd(i.latestValues)) continue;
                            nc(i.latestValues) && i.updateSnapshot();
                            let n = na();
                            nY(n, i.measurePageBox()), n_(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                        }
                        return nd(this.latestValues) && n_(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = {
                            ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== tj.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e, i, n, r;
                        let s = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                        let o = !!this.resumingFrom || this !== s;
                        if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget)) return;
                        let {
                            layout: a,
                            layoutId: l
                        } = this.options;
                        if (this.layout && (a || l)) {
                            if (this.resolvedRelativeTargetAt = tj.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = na(), this.relativeTargetOrigin = na(), i7(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), nY(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = na(), this.targetWithTransforms = na()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), i = this.target, n = this.relativeTarget, r = this.relativeParent.target, i4(i.x, n.x, r.x), i4(i.y, n.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nY(this.target, this.layout.layoutBox), ng(this.target, this.targetDelta)) : nY(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = na(), this.relativeTargetOrigin = na(), i7(this.relativeTargetOrigin, this.target, t.target), nY(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                n7.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || nc(this.parent.latestValues) || np(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            i = !!this.resumingFrom || this !== e,
                            n = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === tj.frameData.timestamp && (n = !1), n) return;
                        let {
                            layout: r,
                            layoutId: s
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || s)) return;
                        nY(this.layoutCorrected, this.layout.layoutBox);
                        let o = this.treeScale.x,
                            a = this.treeScale.y;
                        ! function(t, e, i, n = !1) {
                            let r, s;
                            let o = i.length;
                            if (o) {
                                e.x = e.y = 1;
                                for (let a = 0; a < o; a++) {
                                    s = (r = i[a]).projectionDelta;
                                    let o = r.instance;
                                    (!o || !o.style || "contents" !== o.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && nw(t, {
                                        x: -r.scroll.offset.x,
                                        y: -r.scroll.offset.y
                                    }), s && (e.x *= s.x.scale, e.y *= s.y.scale, ng(t, s)), n && nd(r.latestValues) && nw(t, r.latestValues))
                                }
                                e.x = nv(e.x), e.y = nv(e.y)
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, i), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox, e.targetWithTransforms = na());
                        let {
                            target: l
                        } = e;
                        if (!l) {
                            this.projectionTransform && (this.projectionDelta = ns(), this.projectionTransform = "none", this.scheduleRender());
                            return
                        }
                        this.projectionDelta || (this.projectionDelta = ns(), this.projectionDeltaWithTransform = ns());
                        let u = this.projectionTransform;
                        i9(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = n2(this.projectionDelta, this.treeScale), (this.projectionTransform !== u || this.treeScale.x !== o || this.treeScale.y !== a) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), n7.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        if (this.options.scheduleRender && this.options.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(t, e = !1) {
                        let i;
                        let n = this.snapshot,
                            r = n ? n.latestValues : {},
                            s = {
                                ...this.latestValues
                            },
                            o = ns();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let a = na(),
                            l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            u = this.getStack(),
                            h = !u || u.members.length <= 1,
                            c = !!(l && !h && !0 === this.options.crossfade && !this.path.some(rg));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let n = e / 1e3;
                            if (rm(o.x, t.x, n), rm(o.y, t.y, n), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var u, d, p, m;
                                i7(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), p = this.relativeTarget, m = this.relativeTargetOrigin, rf(p.x, m.x, a.x, n), rf(p.y, m.y, a.y, n), i && (u = this.relativeTarget, d = i, u.x.min === d.x.min && u.x.max === d.x.max && u.y.min === d.y.min && u.y.max === d.y.max) && (this.isProjectionDirty = !1), i || (i = na()), nY(i, this.relativeTarget)
                            }
                            l && (this.animationValues = s, function(t, e, i, n, r, s) {
                                r ? (t.opacity = eS(0, void 0 !== i.opacity ? i.opacity : 1, n$(n)), t.opacityExit = eS(void 0 !== e.opacity ? e.opacity : 1, 0, nZ(n))) : s && (t.opacity = eS(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                                for (let r = 0; r < nU; r++) {
                                    let s = `border${nO[r]}Radius`,
                                        o = nN(e, s),
                                        a = nN(i, s);
                                    (void 0 !== o || void 0 !== a) && (o || (o = 0), a || (a = 0), 0 === o || 0 === a || nW(o) === nW(a) ? (t[s] = Math.max(eS(nI(o), nI(a), n), 0), (tn.test(a) || tn.test(o)) && (t[s] += "%")) : t[s] = a)
                                }(e.rotate || i.rotate) && (t.rotate = eS(e.rotate || 0, i.rotate || 0, n))
                            }(s, r, this.latestValues, n, c, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, tj.Pn)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = tj.Wi.update(() => {
                            nk.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, i) {
                                let n = O(t) ? t : iB(t);
                                return n.start(iE("", n, 1e3, i)), n.animation
                            }(0, 0, {
                                ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: i,
                                layout: n,
                                latestValues: r
                            } = t;
                        if (e && i && n) {
                            if (this !== t && this.layout && n && rb(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                                i = this.target || na();
                                let e = i2(this.layout.layoutBox.x);
                                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                                let n = i2(this.layout.layoutBox.y);
                                i.y.min = t.target.y.min, i.y.max = i.y.min + n
                            }
                            nY(e, i), nw(e, r), i9(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new n5), this.sharedNodes.get(t).add(e);
                        let i = e.options.initialPromotionConfig;
                        e.promote({
                            transition: i ? i.transition : void 0,
                            preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: i
                    } = {}) {
                        let n = this.getStack();
                        n && n.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: i
                            } = t;
                        if ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0), !e) return;
                        let n = {};
                        for (let e = 0; e < n9.length; e++) {
                            let r = "rotate" + n9[e];
                            i[r] && (n[r] = i[r], t.setStaticValue(r, 0))
                        }
                        for (let e in t.render(), n) t.setStaticValue(e, n[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t) {
                        var e, i;
                        if (!this.instance || this.isSVG) return;
                        if (!this.isVisible) return n4;
                        let n = {
                                visibility: ""
                            },
                            r = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = tR(null == t ? void 0 : t.pointerEvents) || "", n.transform = r ? r(this.latestValues, "") : "none", n;
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = tR(null == t ? void 0 : t.pointerEvents) || ""), this.hasProjected && !nd(this.latestValues) && (e.transform = r ? r({}, "") : "none", this.hasProjected = !1), e
                        }
                        let o = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), n.transform = n2(this.projectionDeltaWithTransform, this.treeScale, o), r && (n.transform = r(o, n.transform));
                        let {
                            x: a,
                            y: l
                        } = this.projectionDelta;
                        for (let t in n.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, s.animationValues ? n.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0, L) {
                            if (void 0 === o[t]) continue;
                            let {
                                correct: e,
                                applyTo: i
                            } = L[t], r = "none" === n.transform ? o[t] : e(o[t], s);
                            if (i) {
                                let t = i.length;
                                for (let e = 0; e < t; e++) n[i[e]] = r
                            } else n[t] = r
                        }
                        return this.options.layoutId && (n.pointerEvents = s === this ? tR(null == t ? void 0 : t.pointerEvents) || "" : "none"), n
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(ro), this.root.sharedNodes.clear()
                    }
                }
            }

            function re(t) {
                t.updateLayout()
            }

            function ri(t) {
                var e;
                let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: n
                    } = t.layout, {
                        animationType: r
                    } = t.options, s = i.source !== t.layout.source;
                    "size" === r ? nl(t => {
                        let n = s ? i.measuredBox[t] : i.layoutBox[t],
                            r = i2(n);
                        n.min = e[t].min, n.max = n.min + r
                    }) : rb(r, i.layoutBox, e) && nl(n => {
                        let r = s ? i.measuredBox[n] : i.layoutBox[n],
                            o = i2(e[n]);
                        r.max = r.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + o)
                    });
                    let o = ns();
                    i9(o, e, i.layoutBox);
                    let a = ns();
                    s ? i9(a, t.applyTransform(n, !0), i.measuredBox) : i9(a, e, i.layoutBox);
                    let l = !nQ(o),
                        u = !1;
                    if (!t.resumeFrom) {
                        let n = t.getClosestProjectingParent();
                        if (n && !n.resumeFrom) {
                            let {
                                snapshot: r,
                                layout: s
                            } = n;
                            if (r && s) {
                                let o = na();
                                i7(o, i.layoutBox, r.layoutBox);
                                let a = na();
                                i7(a, e, s.layoutBox), n0(o, a) || (u = !0), n.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = o, t.relativeParent = n)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: i,
                        delta: a,
                        layoutDelta: o,
                        hasLayoutChanged: l,
                        hasRelativeTargetChanged: u
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function rn(t) {
                n7.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function rr(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function rs(t) {
                t.clearSnapshot()
            }

            function ro(t) {
                t.clearMeasurements()
            }

            function ra(t) {
                t.isLayoutDirty = !1
            }

            function rl(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function ru(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function rh(t) {
                t.resolveTargetDelta()
            }

            function rc(t) {
                t.calcProjection()
            }

            function rd(t) {
                t.resetRotation()
            }

            function rp(t) {
                t.removeLeadSnapshot()
            }

            function rm(t, e, i) {
                t.translate = eS(e.translate, 0, i), t.scale = eS(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function rf(t, e, i, n) {
                t.min = eS(e.min, i.min, n), t.max = eS(e.max, i.max, n)
            }

            function rg(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let rv = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                ry = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
                rx = ry("applewebkit/") && !ry("chrome/") ? Math.round : t0.Z;

            function rP(t) {
                t.min = rx(t.min), t.max = rx(t.max)
            }

            function rb(t, e, i) {
                return "position" === t || "preserve-aspect" === t && !i3(n1(e), n1(i), .2)
            }
            let rw = rt({
                    attachResizeListener: (t, e) => tO(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                rA = {
                    current: void 0
                },
                rT = rt({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!rA.current) {
                            let t = new rw({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), rA.current = t
                        }
                        return rA.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                }),
                rS = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function rV(t, e, i = 1) {
                (0, ee.k)(i <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
                let [n, r] = function(t) {
                    let e = rS.exec(t);
                    if (!e) return [, ];
                    let [, i, n] = e;
                    return [i, n]
                }(t);
                if (!n) return;
                let s = window.getComputedStyle(e).getPropertyValue(n);
                if (s) {
                    let t = s.trim();
                    return iC(t) ? parseFloat(t) : t
                }
                return Z(r) ? rV(r, e, i + 1) : r
            }
            let rE = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                rM = t => rE.has(t),
                rC = t => Object.keys(t).some(rM),
                rD = t => t === X || t === tr,
                rk = (t, e) => parseFloat(t.split(", ")[e]),
                rR = (t, e) => (i, {
                    transform: n
                }) => {
                    if ("none" === n || !n) return 0;
                    let r = n.match(/^matrix3d\((.+)\)$/);
                    if (r) return rk(r[1], e);
                    {
                        let e = n.match(/^matrix\((.+)\)$/);
                        return e ? rk(e[1], t) : 0
                    }
                },
                rL = new Set(["x", "y", "z"]),
                rj = j.filter(t => !rL.has(t)),
                rF = {
                    width: ({
                        x: t
                    }, {
                        paddingLeft: e = "0",
                        paddingRight: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    height: ({
                        y: t
                    }, {
                        paddingTop: e = "0",
                        paddingBottom: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    top: (t, {
                        top: e
                    }) => parseFloat(e),
                    left: (t, {
                        left: e
                    }) => parseFloat(e),
                    bottom: ({
                        y: t
                    }, {
                        top: e
                    }) => parseFloat(e) + (t.max - t.min),
                    right: ({
                        x: t
                    }, {
                        left: e
                    }) => parseFloat(e) + (t.max - t.min),
                    x: rR(4, 13),
                    y: rR(5, 14)
                };
            rF.translateX = rF.x, rF.translateY = rF.y;
            let rB = (t, e, i) => {
                    let n = e.measureViewportBox(),
                        r = e.current,
                        s = getComputedStyle(r),
                        {
                            display: o
                        } = s,
                        a = {};
                    "none" === o && e.setStaticValue("display", t.display || "block"), i.forEach(t => {
                        a[t] = rF[t](n, s)
                    }), e.render();
                    let l = e.measureViewportBox();
                    return i.forEach(i => {
                        let n = e.getValue(i);
                        n && n.jump(a[i]), t[i] = rF[i](l, s)
                    }), t
                },
                rO = (t, e, i = {}, n = {}) => {
                    e = {
                        ...e
                    }, n = {
                        ...n
                    };
                    let r = Object.keys(e).filter(rM),
                        s = [],
                        o = !1,
                        a = [];
                    if (r.forEach(r => {
                            let l;
                            let u = t.getValue(r);
                            if (!t.hasValue(r)) return;
                            let h = i[r],
                                c = iI(h),
                                d = e[r];
                            if (tC(d)) {
                                let t = d.length,
                                    e = null === d[0] ? 1 : 0;
                                c = iI(h = d[e]);
                                for (let i = e; i < t && null !== d[i]; i++) l ? (0, ee.k)(iI(d[i]) === l, "All keyframes must be of the same type") : (l = iI(d[i]), (0, ee.k)(l === c || rD(c) && rD(l), "Keyframes must be of the same dimension as the current value"))
                            } else l = iI(d);
                            if (c !== l) {
                                if (rD(c) && rD(l)) {
                                    let t = u.get();
                                    "string" == typeof t && u.set(parseFloat(t)), "string" == typeof d ? e[r] = parseFloat(d) : Array.isArray(d) && l === tr && (e[r] = d.map(parseFloat))
                                } else(null == c ? void 0 : c.transform) && (null == l ? void 0 : l.transform) && (0 === h || 0 === d) ? 0 === h ? u.set(l.transform(h)) : e[r] = c.transform(d) : (o || (s = function(t) {
                                    let e = [];
                                    return rj.forEach(i => {
                                        let n = t.getValue(i);
                                        void 0 !== n && (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0))
                                    }), e.length && t.render(), e
                                }(t), o = !0), a.push(r), n[r] = void 0 !== n[r] ? n[r] : e[r], u.jump(d))
                            }
                        }), !a.length) return {
                        target: e,
                        transitionEnd: n
                    };
                    {
                        let i = a.indexOf("height") >= 0 ? window.pageYOffset : null,
                            r = rB(e, t, a);
                        return s.length && s.forEach(([e, i]) => {
                            t.getValue(e).set(i)
                        }), t.render(), E.j && null !== i && window.scrollTo({
                            top: i
                        }), {
                            target: r,
                            transitionEnd: n
                        }
                    }
                },
                rU = (t, e, i, n) => {
                    var r, s;
                    let o = function(t, {
                        ...e
                    }, i) {
                        let n = t.current;
                        if (!(n instanceof Element)) return {
                            target: e,
                            transitionEnd: i
                        };
                        for (let r in i && (i = {
                                ...i
                            }), t.values.forEach(t => {
                                let e = t.get();
                                if (!Z(e)) return;
                                let i = rV(e, n);
                                i && t.set(i)
                            }), e) {
                            let t = e[r];
                            if (!Z(t)) continue;
                            let s = rV(t, n);
                            s && (e[r] = s, i || (i = {}), void 0 === i[r] && (i[r] = t))
                        }
                        return {
                            target: e,
                            transitionEnd: i
                        }
                    }(t, e, n);
                    return e = o.target, n = o.transitionEnd, r = e, s = n, rC(r) ? rO(t, r, i, s) : {
                        target: r,
                        transitionEnd: s
                    }
                },
                rI = {
                    current: null
                },
                rW = {
                    current: !1
                },
                rN = new WeakMap,
                r$ = Object.keys(V),
                rZ = r$.length,
                rH = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
                rz = b.length;
            class rY {
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: i,
                    reducedMotionConfig: n,
                    visualState: r
                }, s = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.scheduleRender = () => tj.Wi.render(this.render, !1, !0);
                    let {
                        latestValues: o,
                        renderState: a
                    } = r;
                    this.latestValues = o, this.baseTarget = {
                        ...o
                    }, this.initialValues = e.initial ? {
                        ...o
                    } : {}, this.renderState = a, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = s, this.isControllingVariants = w(e), this.isVariantNode = A(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: l,
                        ...u
                    } = this.scrapeMotionValuesFromProps(e, {});
                    for (let t in u) {
                        let e = u[t];
                        void 0 !== o[t] && O(e) && (e.set(o[t], !1), iM(l) && l.add(t))
                    }
                }
                scrapeMotionValuesFromProps(t, e) {
                    return {}
                }
                mount(t) {
                    this.current = t, rN.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), rW.current || function() {
                        if (rW.current = !0, E.j) {
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => rI.current = t.matches;
                                t.addListener(e), e()
                            } else rI.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || rI.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in rN.delete(this.current), this.projection && this.projection.unmount(), (0, tj.Pn)(this.notifyUpdate), (0, tj.Pn)(this.render), this.valueSubscriptions.forEach(t => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let t in this.features) this.features[t].unmount();
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let i = F.has(t),
                        n = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && tj.Wi.update(this.notifyUpdate, !1, !0), i && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        r = e.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(t, () => {
                        n(), r()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                loadFeatures({
                    children: t,
                    ...e
                }, i, n, r) {
                    let s, o;
                    for (let t = 0; t < rZ; t++) {
                        let i = r$[t],
                            {
                                isEnabled: n,
                                Feature: r,
                                ProjectionNode: a,
                                MeasureLayout: l
                            } = V[i];
                        a && (s = a), n(e) && (!this.features[i] && r && (this.features[i] = new r(this)), l && (o = l))
                    }
                    if (("html" === this.type || "svg" === this.type) && !this.projection && s) {
                        this.projection = new s(this.latestValues, this.parent && this.parent.projection);
                        let {
                            layoutId: t,
                            layout: i,
                            drag: n,
                            dragConstraints: o,
                            layoutScroll: a,
                            layoutRoot: l
                        } = e;
                        this.projection.setOptions({
                            layoutId: t,
                            layout: i,
                            alwaysMeasureLayout: !!n || o && v(o),
                            visualElement: this,
                            scheduleRender: () => this.scheduleRender(),
                            animationType: "string" == typeof i ? i : "both",
                            initialPromotionConfig: r,
                            layoutScroll: a,
                            layoutRoot: l
                        })
                    }
                    return o
                }
                updateFeatures() {
                    for (let t in this.features) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : na()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                makeTargetAnimatable(t, e = !0) {
                    return this.makeTargetAnimatableFromInstance(t, e)
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < rH.length; e++) {
                        let i = rH[e];
                        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                        let n = t["on" + i];
                        n && (this.propEventSubscriptions[i] = this.on(i, n))
                    }
                    this.prevMotionValues = function(t, e, i) {
                        let {
                            willChange: n
                        } = e;
                        for (let r in e) {
                            let s = e[r],
                                o = i[r];
                            if (O(s)) t.addValue(r, s), iM(n) && n.add(r);
                            else if (O(o)) t.addValue(r, iB(s, {
                                owner: t
                            })), iM(n) && n.remove(r);
                            else if (o !== s) {
                                if (t.hasValue(r)) {
                                    let e = t.getValue(r);
                                    e.hasAnimated || e.set(s)
                                } else {
                                    let e = t.getStaticValue(r);
                                    t.addValue(r, iB(void 0 !== e ? e : s, {
                                        owner: t
                                    }))
                                }
                            }
                        }
                        for (let n in i) void 0 === e[n] && t.removeValue(n);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                getVariantContext(t = !1) {
                    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
                    if (!this.isControllingVariants) {
                        let t = this.parent && this.parent.getVariantContext() || {};
                        return void 0 !== this.props.initial && (t.initial = this.props.initial), t
                    }
                    let e = {};
                    for (let t = 0; t < rz; t++) {
                        let i = b[t],
                            n = this.props[i];
                        (y(n) || !1 === n) && (e[i] = n)
                    }
                    return e
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    e !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, e)), this.values.set(t, e), this.latestValues[t] = e.get()
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let i = this.values.get(t);
                    return void 0 === i && void 0 !== e && (i = iB(e, {
                        owner: this
                    }), this.addValue(t, i)), i
                }
                readValue(t) {
                    var e;
                    return void 0 === this.latestValues[t] && this.current ? null !== (e = this.getBaseTargetFromProps(this.props, t)) && void 0 !== e ? e : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    var e;
                    let {
                        initial: i
                    } = this.props, n = "string" == typeof i || "object" == typeof i ? null === (e = tE(this.props, i)) || void 0 === e ? void 0 : e[t] : void 0;
                    if (i && void 0 !== n) return n;
                    let r = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === r || O(r) ? void 0 !== this.initialValues[t] && void 0 === n ? void 0 : this.baseTarget[t] : r
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new iR), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            }
            class rX extends rY {
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: i
                }) {
                    delete e[t], delete i[t]
                }
                makeTargetAnimatableFromInstance({
                    transition: t,
                    transitionEnd: e,
                    ...i
                }, n) {
                    let r = function(t, e, i) {
                        let n = {};
                        for (let r in t) {
                            let t = function(t, e) {
                                if (e) return (e[t] || e.default || e).from
                            }(r, e);
                            if (void 0 !== t) n[r] = t;
                            else {
                                let t = i.getValue(r);
                                t && (n[r] = t.get())
                            }
                        }
                        return n
                    }(i, t || {}, this);
                    if (n) {
                        ! function(t, e, i) {
                            var n, r;
                            let s = Object.keys(e).filter(e => !t.hasValue(e)),
                                o = s.length;
                            if (o)
                                for (let a = 0; a < o; a++) {
                                    let o = s[a],
                                        l = e[o],
                                        u = null;
                                    Array.isArray(l) && (u = l[0]), null === u && (u = null !== (r = null !== (n = i[o]) && void 0 !== n ? n : t.readValue(o)) && void 0 !== r ? r : e[o]), null != u && ("string" == typeof u && (iC(u) || iS(u)) ? u = parseFloat(u) : !iN(u) && eX.test(l) && (u = iT(o, l)), t.addValue(o, iB(u, {
                                        owner: t
                                    })), void 0 === i[o] && (i[o] = u), null !== u && t.setBaseTarget(o, u))
                                }
                        }(this, i, r);
                        let t = rU(this, i, r, e);
                        e = t.transitionEnd, i = t.target
                    }
                    return {
                        transition: t,
                        transitionEnd: e,
                        ...i
                    }
                }
            }
            class rG extends rX {
                constructor() {
                    super(...arguments), this.type = "html"
                }
                readValueFromInstance(t, e) {
                    if (F.has(e)) {
                        let t = iA(e);
                        return t && t.default || 0
                    } {
                        let i = window.getComputedStyle(t),
                            n = (N(e) ? i.getPropertyValue(e) : i[e]) || 0;
                        return "string" == typeof n ? n.trim() : n
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return nA(t, e)
                }
                build(t, e, i, n) {
                    th(t, e, i, n.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e) {
                    return tS(t, e)
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    O(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
                renderInstance(t, e, i, n) {
                    tw(t, e, i, n)
                }
            }
            class rq extends rX {
                constructor() {
                    super(...arguments), this.type = "svg", this.isSVGTag = !1
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (F.has(e)) {
                        let t = iA(e);
                        return t && t.default || 0
                    }
                    return e = tA.has(e) ? e : p(e), t.getAttribute(e)
                }
                measureInstanceViewportBox() {
                    return na()
                }
                scrapeMotionValuesFromProps(t, e) {
                    return tV(t, e)
                }
                build(t, e, i, n) {
                    tx(t, e, i, this.isSVGTag, n.transformTemplate)
                }
                renderInstance(t, e, i, n) {
                    tT(t, e, i, n)
                }
                mount(t) {
                    this.isSVGTag = tb(t.tagName), super.mount(t)
                }
            }
            let rK = (t, e) => R(t) ? new rq(e, {
                    enableHardwareAcceleration: !1
                }) : new rG(e, {
                    enableHardwareAcceleration: !0
                }),
                r_ = {
                    animation: {
                        Feature: iG
                    },
                    exit: {
                        Feature: iK
                    },
                    inView: {
                        Feature: t8
                    },
                    tap: {
                        Feature: t5
                    },
                    focus: {
                        Feature: tJ
                    },
                    hover: {
                        Feature: t_
                    },
                    pan: {
                        Feature: nD
                    },
                    drag: {
                        Feature: nM,
                        ProjectionNode: rT,
                        MeasureLayout: nF
                    },
                    layout: {
                        ProjectionNode: rT,
                        MeasureLayout: nF
                    }
                },
                rJ = function(t) {
                    function e(e, i = {}) {
                        return function({
                            preloadedFeatures: t,
                            createVisualElement: e,
                            useRender: i,
                            useVisualState: n,
                            Component: r
                        }) {
                            t && function(t) {
                                for (let e in t) V[e] = {
                                    ...V[e],
                                    ...t[e]
                                }
                            }(t);
                            let s = (0, a.forwardRef)(function(s, o) {
                                var p;
                                let g;
                                let x = {
                                        ...(0, a.useContext)(l),
                                        ...s,
                                        layoutId: function({
                                            layoutId: t
                                        }) {
                                            let e = (0, a.useContext)(M.p).id;
                                            return e && void 0 !== t ? e + "-" + t : t
                                        }(s)
                                    },
                                    {
                                        isStatic: P
                                    } = x,
                                    b = function(t) {
                                        let {
                                            initial: e,
                                            animate: i
                                        } = function(t, e) {
                                            if (w(t)) {
                                                let {
                                                    initial: e,
                                                    animate: i
                                                } = t;
                                                return {
                                                    initial: !1 === e || y(e) ? e : void 0,
                                                    animate: y(i) ? i : void 0
                                                }
                                            }
                                            return !1 !== t.inherit ? e : {}
                                        }(t, (0, a.useContext)(u));
                                        return (0, a.useMemo)(() => ({
                                            initial: e,
                                            animate: i
                                        }), [T(e), T(i)])
                                    }(s),
                                    A = n(s, P);
                                if (!P && E.j) {
                                    b.visualElement = function(t, e, i, n) {
                                        let {
                                            visualElement: r
                                        } = (0, a.useContext)(u), s = (0, a.useContext)(d), o = (0, a.useContext)(h.O), p = (0, a.useContext)(l).reducedMotion, g = (0, a.useRef)();
                                        n = n || s.renderer, !g.current && n && (g.current = n(t, {
                                            visualState: e,
                                            parent: r,
                                            props: i,
                                            presenceContext: o,
                                            blockInitialAnimation: !!o && !1 === o.initial,
                                            reducedMotionConfig: p
                                        }));
                                        let v = g.current;
                                        (0, a.useInsertionEffect)(() => {
                                            v && v.update(i, o)
                                        });
                                        let y = (0, a.useRef)(!!(i[m] && !window.HandoffComplete));
                                        return (0, c.L)(() => {
                                            v && (f.postRender(v.render), y.current && v.animationState && v.animationState.animateChanges())
                                        }), (0, a.useEffect)(() => {
                                            v && (v.updateFeatures(), !y.current && v.animationState && v.animationState.animateChanges(), y.current && (y.current = !1, window.HandoffComplete = !0))
                                        }), v
                                    }(r, A, x, e);
                                    let i = (0, a.useContext)(C),
                                        n = (0, a.useContext)(d).strict;
                                    b.visualElement && (g = b.visualElement.loadFeatures(x, n, t, i))
                                }
                                return a.createElement(u.Provider, {
                                    value: b
                                }, g && b.visualElement ? a.createElement(g, {
                                    visualElement: b.visualElement,
                                    ...x
                                }) : null, i(r, s, (p = b.visualElement, (0, a.useCallback)(t => {
                                    t && A.mount && A.mount(t), p && (t ? p.mount(t) : p.unmount()), o && ("function" == typeof o ? o(t) : v(o) && (o.current = t))
                                }, [p])), A, P, b.visualElement))
                            });
                            return s[D] = r, s
                        }(t(e, i))
                    }
                    if ("undefined" == typeof Proxy) return e;
                    let i = new Map;
                    return new Proxy(e, {
                        get: (t, n) => (i.has(n) || i.set(n, e(n)), i.get(n))
                    })
                }((t, e) => (function(t, {
                    forwardMotionProps: e = !1
                }, i, n) {
                    return {
                        ...R(t) ? tF : tB,
                        preloadedFeatures: i,
                        useRender: function(t = !1) {
                            return (e, i, n, {
                                latestValues: r
                            }, s) => {
                                let o = (R(e) ? function(t, e, i, n) {
                                        let r = (0, a.useMemo)(() => {
                                            let i = tP();
                                            return tx(i, e, {
                                                enableHardwareAcceleration: !1
                                            }, tb(n), t.transformTemplate), {
                                                ...i.attrs,
                                                style: {
                                                    ...i.style
                                                }
                                            }
                                        }, [e]);
                                        if (t.style) {
                                            let e = {};
                                            td(e, t.style, t), r.style = {
                                                ...e,
                                                ...r.style
                                            }
                                        }
                                        return r
                                    } : function(t, e, i) {
                                        let n = {},
                                            r = function(t, e, i) {
                                                let n = t.style || {},
                                                    r = {};
                                                return td(r, n, t), Object.assign(r, function({
                                                    transformTemplate: t
                                                }, e, i) {
                                                    return (0, a.useMemo)(() => {
                                                        let n = tc();
                                                        return th(n, e, {
                                                            enableHardwareAcceleration: !i
                                                        }, t), Object.assign({}, n.vars, n.style)
                                                    }, [e])
                                                }(t, e, i)), r
                                            }(t, e, i);
                                        return t.drag && !1 !== t.dragListener && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = r, n
                                    })(i, r, s, e),
                                    l = {
                                        ... function(t, e, i) {
                                            let n = {};
                                            for (let r in t)("values" !== r || "object" != typeof t.values) && (tf(r) || !0 === i && tm(r) || !e && !tm(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                                            return n
                                        }(i, "string" == typeof e, t),
                                        ...o,
                                        ref: n
                                    },
                                    {
                                        children: u
                                    } = i,
                                    h = (0, a.useMemo)(() => O(u) ? u.get() : u, [u]);
                                return (0, a.createElement)(e, {
                                    ...l,
                                    children: h
                                })
                            }
                        }(e),
                        createVisualElement: n,
                        Component: t
                    }
                })(t, e, r_, rK))
        },
        6101: function(t, e, i) {
            i.d(e, {
                c: function() {
                    return n
                }
            });
            let n = {
                skipAnimations: !1,
                useManualTiming: !1
            }
        },
        6567: function(t, e, i) {
            i.d(e, {
                K: function() {
                    return r
                },
                k: function() {
                    return s
                }
            });
            var n = i(6977);
            let r = n.Z,
                s = n.Z
        },
        6613: function(t, e, i) {
            i.d(e, {
                j: function() {
                    return n
                }
            });
            let n = "undefined" != typeof document
        },
        6977: function(t, e, i) {
            i.d(e, {
                Z: function() {
                    return n
                }
            });
            let n = t => t
        },
        961: function(t, e, i) {
            i.d(e, {
                h: function() {
                    return r
                }
            });
            var n = i(2265);

            function r(t) {
                let e = (0, n.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        538: function(t, e, i) {
            i.d(e, {
                L: function() {
                    return r
                }
            });
            var n = i(2265);
            let r = i(6613).j ? n.useLayoutEffect : n.useEffect
        }
    }
]);