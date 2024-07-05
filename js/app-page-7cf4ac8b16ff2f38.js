(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        548: function(e, t, s) {
            Promise.resolve().then(s.bind(s, 9558))
        },
        9558: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return $
                }
            });
            var i = s(7437),
                a = s(6691),
                n = s.n(a),
                r = {
                    src: "images/home-banner.webp",
                    height: 2160,
                    width: 3840,
                    blurDataURL: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADwAQCdASoIAAUAAkA4JagCdAEf/1ISigAA/uvFWBel8NdEAmihTJM8ChVnfcf2wv2981oR2a37R+MKTxsqAA==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                o = {
                    src: "images/home-banner.webp",
                    height: 900,
                    width: 500,
                    blurDataURL: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAAAwAgCdASoEAAgAAkA4JaACdFKAAef/hEvE6AD+63UIvkIwR+68xfOF7T1Lh1aL/GDneadPCd34h/aN1wAAAA==",
                    blurWidth: 4,
                    blurHeight: 8
                };
            s(480);
            var l = s(2265);
            s(4033);
            var c = s(7712),
                d = s(6620),
                h = s(9849),
                u = s(2510),
                p = s(8910),
                m = s(8095);
            let x = [{
                title: "THE GUILD FACTOR",
                description: "A rapid injection of quality talent in a high-ambition setting where stuff gets done; Dream co-founder with vested interest and accountability. Passionate about fostering an environment of creativity and collaboration, driving toward ambitious goals with a strong sense of ownership and dedication. Dedicated to creating a dynamic and results-oriented atmosphere that rewards excellence and ongoing progress.",
                image: c.Z
            }, {
                title: "RISK MITIGATION",
                description: "Design-Thinking discipline to foster a culture of learning and adapting ideas, lowering the likelihood of costly mistakes in the venture-building path. By encouraging teams to empathize with users, define problems, ideate solutions, prototype, and test their ideas, it helps to innovate more effectively. This iterative process allows for rapid iteration and refinement of concepts before significant resources are invested.",
                image: d.Z
            }, {
                title: "RISK-REWARD",
                description: "Eliminate confirmation biases by taking calculated risks to innovate and generate value, with the potential for high-impact growth. By challenging preconceived notions and seeking out diverse perspectives, we break free from traditional thinking and discover new opportunities for growth. Embracing uncertainty and being open to failure can lead to breakthrough innovations that drive long-term success.",
                image: h.Z
            }, {
                title: "CO-CREATION",
                description: (0, i.jsxs)("span", {
                    children: ["Self-reliance: An exercisable option based on roadmaps and milestones to build and spin off the Global Capability-Capital", (0, i.jsx)("sup", {
                        className: "text-sm",
                        children: "TM"
                    }), " (GCC - independent, nurtured tech-talent). This approach allows for the development of a sustainable talent pool that can support the growth and success of the GCC in the long term. By focusing on self-reliance, the GCC can reduce its dependence on external resources and become a more resilient and competitive player."]
                }),
                image: {
                    src: "/_next/static/media/guild4.8b6384b1.webp",
                    height: 1280,
                    width: 1920,
                    blurDataURL: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADwAQCdASoIAAUAAkA4JZQCdH8AFbMfegAA/lv4xsjiyvtAdd4xLb/zfHB6ICG2aTgXrDC7nkS6CmROcQAAAA==",
                    blurWidth: 8,
                    blurHeight: 5
                }
            }];
            var A = () => {
                    let [e, t] = (0, l.useState)(0), s = {
                        visible: {
                            scale: 1
                        },
                        hidden: {
                            scale: .8
                        }
                    };
                    return (0, l.useEffect)(() => {
                        let e = window.location.hash;
                        if (e) {
                            let t = document.querySelector(e);
                            t && t.scrollIntoView({
                                behavior: "smooth"
                            })
                        }
                    }, []), (0, l.useEffect)(() => {
                        let e = e => {
                            "Enter" === e.key && t(e => (e + 1) % x.length)
                        };
                        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                    }, [e]), (0, i.jsxs)("div", {
                        id: "catalysts",
                        className: "pt-10",
                        children: [(0, i.jsxs)("h1", {
                            className: "text-[28px] md:text-4xl text-center tracking-wide font-bold my-10 md:mb-0 text-header-color",
                            children: ["CATALYS", (0, i.jsx)("span", {
                                className: "text-primary-color1 w-fit inline-block after:contents'' after:block after:bg-primary-color1 after:h-[2px] after:w-full",
                                children: "TS"
                            })]
                        }), (0, i.jsx)("div", {
                            className: "h-fit md:min-h-[80vh] mb-10 mt-5",
                            children: (0, i.jsx)("div", {
                                className: "flex relative",
                                children: x.map((a, r) => (0, i.jsxs)("div", {
                                    className: "flex flex-col relative gap-10 lg:flex-row pb-5 px-5 md:p-10 ".concat(r === e ? "" : "hidden"),
                                    children: [(0, i.jsx)("div", {
                                        className: "space-y-5 basis-[42%]",
                                        children: (0, i.jsxs)("div", {
                                            className: "flex flex-col justify-between h-full",
                                            children: [(0, i.jsxs)("div", {
                                                children: [(0, i.jsx)("h2", {
                                                    style: {
                                                        fontFamily: "Libre Baskerville"
                                                    },
                                                    className: "text-2xl md:text-3xl font-bold mb-4 lg:mb-8 text-header-color",
                                                    children: a.title
                                                }), (0, i.jsx)("p", {
                                                    className: "md:text-lg tracking-wide leading-7 md:leading-[30px] md:pb-2 text-justify relative text-text-color",
                                                    children: a.description
                                                })]
                                            }), (0, i.jsx)("div", {
                                                className: "text-black ml-auto mt-5 lg:mt-0",
                                                children: (0, i.jsxs)("button", {
                                                    onClick: () => t(e => (e + 1) % x.length),
                                                    className: "flex items-center gap-2 bottom-0",
                                                    children: [(0, i.jsx)("span", {
                                                        className: "bg-primary-color1 block rounded-md px-3 py-[5px]",
                                                        children: (0, i.jsx)(u.Z1Y, {
                                                            size: 22,
                                                            color: "white"
                                                        })
                                                    }), (0, i.jsxs)("span", {
                                                        className: "text-sm",
                                                        children: ["press Enter", (0, i.jsx)(p.Xc_, {
                                                            className: "inline-block"
                                                        })]
                                                    })]
                                                })
                                            })]
                                        })
                                    }), (0, i.jsx)(m.E.div, {
                                        variants: s,
                                        initial: "hidden",
                                        whileInView: "visible",
                                        className: "basis-full md:basis-[58%] relative w-full hidden sm:block md:min-w-[480px] min-h-[300px] md:min-h-[400px] h-full",
                                        children: (0, i.jsx)(n(), {
                                            alt: "usecase".concat(r + 1),
                                            src: a.image,
                                            fill: !0,
                                            className: "rounded-xl object-cover"
                                        })
                                    })]
                                }, r))
                            })
                        })]
                    })
                },
                f = s(7875),
                g = s(1396),
                b = s.n(g);

            function w() {
                return (w = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                    }
                    return e
                }).apply(this, arguments)
            }
            var y = {
                    strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
                    stringsElement: null,
                    typeSpeed: 0,
                    startDelay: 0,
                    backSpeed: 0,
                    smartBackspace: !0,
                    shuffle: !1,
                    backDelay: 700,
                    fadeOut: !1,
                    fadeOutClass: "typed-fade-out",
                    fadeOutDelay: 500,
                    loop: !1,
                    loopCount: 1 / 0,
                    showCursor: !0,
                    cursorChar: "|",
                    autoInsertCss: !0,
                    attr: null,
                    bindInputFocusEvents: !1,
                    contentType: "html",
                    onBegin: function(e) {},
                    onComplete: function(e) {},
                    preStringTyped: function(e, t) {},
                    onStringTyped: function(e, t) {},
                    onLastStringBackspaced: function(e) {},
                    onTypingPaused: function(e, t) {},
                    onTypingResumed: function(e, t) {},
                    onReset: function(e) {},
                    onStop: function(e, t) {},
                    onStart: function(e, t) {},
                    onDestroy: function(e) {}
                },
                v = new(function() {
                    function e() {}
                    var t = e.prototype;
                    return t.load = function(e, t, s) {
                        if (e.el = "string" == typeof s ? document.querySelector(s) : s, e.options = w({}, y, t), e.isInput = "input" === e.el.tagName.toLowerCase(), e.attr = e.options.attr, e.bindInputFocusEvents = e.options.bindInputFocusEvents, e.showCursor = !e.isInput && e.options.showCursor, e.cursorChar = e.options.cursorChar, e.cursorBlinking = !0, e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent, e.contentType = e.options.contentType, e.typeSpeed = e.options.typeSpeed, e.startDelay = e.options.startDelay, e.backSpeed = e.options.backSpeed, e.smartBackspace = e.options.smartBackspace, e.backDelay = e.options.backDelay, e.fadeOut = e.options.fadeOut, e.fadeOutClass = e.options.fadeOutClass, e.fadeOutDelay = e.options.fadeOutDelay, e.isPaused = !1, e.strings = e.options.strings.map(function(e) {
                                return e.trim()
                            }), e.stringsElement = "string" == typeof e.options.stringsElement ? document.querySelector(e.options.stringsElement) : e.options.stringsElement, e.stringsElement) {
                            e.strings = [], e.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
                            var i = Array.prototype.slice.apply(e.stringsElement.children),
                                a = i.length;
                            if (a)
                                for (var n = 0; n < a; n += 1) e.strings.push(i[n].innerHTML.trim())
                        }
                        for (var r in e.strPos = 0, e.currentElContent = this.getCurrentElContent(e), e.currentElContent && e.currentElContent.length > 0 && (e.strPos = e.currentElContent.length - 1, e.strings.unshift(e.currentElContent)), e.sequence = [], e.strings) e.sequence[r] = r;
                        e.arrayPos = 0, e.stopNum = 0, e.loop = e.options.loop, e.loopCount = e.options.loopCount, e.curLoop = 0, e.shuffle = e.options.shuffle, e.pause = {
                            status: !1,
                            typewrite: !0,
                            curString: "",
                            curStrPos: 0
                        }, e.typingComplete = !1, e.autoInsertCss = e.options.autoInsertCss, e.autoInsertCss && (this.appendCursorAnimationCss(e), this.appendFadeOutAnimationCss(e))
                    }, t.getCurrentElContent = function(e) {
                        return e.attr ? e.el.getAttribute(e.attr) : e.isInput ? e.el.value : "html" === e.contentType ? e.el.innerHTML : e.el.textContent
                    }, t.appendCursorAnimationCss = function(e) {
                        var t = "data-typed-js-cursor-css";
                        if (e.showCursor && !document.querySelector("[" + t + "]")) {
                            var s = document.createElement("style");
                            s.setAttribute(t, "true"), s.innerHTML = "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ", document.body.appendChild(s)
                        }
                    }, t.appendFadeOutAnimationCss = function(e) {
                        var t = "data-typed-fadeout-js-css";
                        if (e.fadeOut && !document.querySelector("[" + t + "]")) {
                            var s = document.createElement("style");
                            s.setAttribute(t, "true"), s.innerHTML = "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ", document.body.appendChild(s)
                        }
                    }, e
                }()),
                j = new(function() {
                    function e() {}
                    var t = e.prototype;
                    return t.typeHtmlChars = function(e, t, s) {
                        if ("html" !== s.contentType) return t;
                        var i, a = e.substring(t).charAt(0);
                        if ("<" === a || "&" === a) {
                            for (i = "<" === a ? ">" : ";"; e.substring(t + 1).charAt(0) !== i && !(1 + ++t > e.length););
                            t++
                        }
                        return t
                    }, t.backSpaceHtmlChars = function(e, t, s) {
                        if ("html" !== s.contentType) return t;
                        var i, a = e.substring(t).charAt(0);
                        if (">" === a || ";" === a) {
                            for (i = ">" === a ? "<" : "&"; e.substring(t - 1).charAt(0) !== i && !(--t < 0););
                            t--
                        }
                        return t
                    }, e
                }()),
                k = function() {
                    function e(e, t) {
                        v.load(this, t, e), this.begin()
                    }
                    var t = e.prototype;
                    return t.toggle = function() {
                        this.pause.status ? this.start() : this.stop()
                    }, t.stop = function() {
                        this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this))
                    }, t.start = function() {
                        this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
                    }, t.destroy = function() {
                        this.reset(!1), this.options.onDestroy(this)
                    }, t.reset = function(e) {
                        void 0 === e && (e = !0), clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, e && (this.insertCursor(), this.options.onReset(this), this.begin())
                    }, t.begin = function() {
                        var e = this;
                        this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
                            0 === e.strPos ? e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos) : e.backspace(e.strings[e.sequence[e.arrayPos]], e.strPos)
                        }, this.startDelay)
                    }, t.typewrite = function(e, t) {
                        var s = this;
                        this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                        var i = this.humanizer(this.typeSpeed),
                            a = 1;
                        !0 !== this.pause.status ? this.timeout = setTimeout(function() {
                            t = j.typeHtmlChars(e, t, s);
                            var i, n = 0,
                                r = e.substring(t);
                            if ("^" === r.charAt(0) && /^\^\d+/.test(r) && (i = 1 + (r = /\d+/.exec(r)[0]).length, n = parseInt(r), s.temporaryPause = !0, s.options.onTypingPaused(s.arrayPos, s), e = e.substring(0, t) + e.substring(t + i), s.toggleBlinking(!0)), "`" === r.charAt(0)) {
                                for (;
                                    "`" !== e.substring(t + a).charAt(0) && (a++, !(t + a > e.length)););
                                var o = e.substring(0, t),
                                    l = e.substring(o.length + 1, t + a);
                                e = o + l + e.substring(t + a + 1), a--
                            }
                            s.timeout = setTimeout(function() {
                                s.toggleBlinking(!1), t >= e.length ? s.doneTyping(e, t) : s.keepTyping(e, t, a), s.temporaryPause && (s.temporaryPause = !1, s.options.onTypingResumed(s.arrayPos, s))
                            }, n)
                        }, i) : this.setPauseStatus(e, t, !0)
                    }, t.keepTyping = function(e, t, s) {
                        0 === t && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this));
                        var i = e.substring(0, t += s);
                        this.replaceText(i), this.typewrite(e, t)
                    }, t.doneTyping = function(e, t) {
                        var s = this;
                        this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
                            s.backspace(e, t)
                        }, this.backDelay))
                    }, t.backspace = function(e, t) {
                        var s = this;
                        if (!0 !== this.pause.status) {
                            if (this.fadeOut) return this.initFadeOut();
                            this.toggleBlinking(!1);
                            var i = this.humanizer(this.backSpeed);
                            this.timeout = setTimeout(function() {
                                t = j.backSpaceHtmlChars(e, t, s);
                                var i = e.substring(0, t);
                                if (s.replaceText(i), s.smartBackspace) {
                                    var a = s.strings[s.arrayPos + 1];
                                    s.stopNum = a && i === a.substring(0, t) ? t : 0
                                }
                                t > s.stopNum ? (t--, s.backspace(e, t)) : t <= s.stopNum && (s.arrayPos++, s.arrayPos === s.strings.length ? (s.arrayPos = 0, s.options.onLastStringBackspaced(), s.shuffleStringsIfNeeded(), s.begin()) : s.typewrite(s.strings[s.sequence[s.arrayPos]], t))
                            }, i)
                        } else this.setPauseStatus(e, t, !1)
                    }, t.complete = function() {
                        this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0
                    }, t.setPauseStatus = function(e, t, s) {
                        this.pause.typewrite = s, this.pause.curString = e, this.pause.curStrPos = t
                    }, t.toggleBlinking = function(e) {
                        this.cursor && (this.pause.status || this.cursorBlinking !== e && (this.cursorBlinking = e, e ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
                    }, t.humanizer = function(e) {
                        return Math.round(Math.random() * e / 2) + e
                    }, t.shuffleStringsIfNeeded = function() {
                        this.shuffle && (this.sequence = this.sequence.sort(function() {
                            return Math.random() - .5
                        }))
                    }, t.initFadeOut = function() {
                        var e = this;
                        return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
                            e.arrayPos++, e.replaceText(""), e.strings.length > e.arrayPos ? e.typewrite(e.strings[e.sequence[e.arrayPos]], 0) : (e.typewrite(e.strings[0], 0), e.arrayPos = 0)
                        }, this.fadeOutDelay)
                    }, t.replaceText = function(e) {
                        this.attr ? this.el.setAttribute(this.attr, e) : this.isInput ? this.el.value = e : "html" === this.contentType ? this.el.innerHTML = e : this.el.textContent = e
                    }, t.bindFocusEvents = function() {
                        var e = this;
                        this.isInput && (this.el.addEventListener("focus", function(t) {
                            e.stop()
                        }), this.el.addEventListener("blur", function(t) {
                            e.el.value && 0 !== e.el.value.length || e.start()
                        }))
                    }, t.insertCursor = function() {
                        this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
                    }, e
                }();
            let N = (0, l.memo)(({
                style: e,
                className: t,
                typedRef: s,
                parseRef: i,
                stopped: a,
                children: n,
                startWhenVisible: r,
                ...o
            }) => {
                let c = (0, l.useRef)(null),
                    d = (0, l.useMemo)(() => [...Object.values(o).filter(e => "boolean" == typeof e || "number" == typeof e || "string" == typeof e), o.strings?.join(",")], [o]);
                (0, l.useEffect)(() => {
                    let e = i && i(c) || c.current,
                        t = new k(e, {
                            ...o
                        });
                    if ((a || r) && t?.stop(), r) {
                        let s = new IntersectionObserver(([e]) => {
                            e.isIntersecting && (t?.start(), s.disconnect())
                        });
                        s.observe(e)
                    }
                    return s && t && s(t), () => {
                        t.destroy()
                    }
                }, d);
                let h = n ? l.cloneElement(n, {
                    ref: c
                }) : l.createElement("span", {
                    style: e,
                    ref: c
                });
                return l.createElement("span", {
                    style: e,
                    className: t,
                    "data-testid": "react-typed"
                }, h)
            });
            var C = () => ((0, l.useEffect)(() => {
                    let e = window.location.hash;
                    if (e) {
                        let t = document.querySelector(e);
                        t && t.scrollIntoView({
                            behavior: "smooth"
                        })
                    }
                }, []), (0, i.jsx)("div", {
                    className: "px-5 my-16",
                    children: (0, i.jsxs)("div", {
                        className: "max-w-[1100px] flex items-center justify-center flex-wrap md:flex-nowrap mx-auto gap-5 md:gap-0 sm:justify-between",
                        children: [(0, i.jsxs)("div", {
                            className: "py-8 px-4",
                            children: [(0, i.jsx)("h1", {
                                className: "text-4xl md:text-5xl text-center mb-4 font-semibold text-header-color",
                                children: "8+"
                            }), (0, i.jsxs)("p", {
                                className: "text-center md:text-lg tracking-[0.15rem] text-primary-color1",
                                children: ["YEARS\xa0", (0, i.jsx)("span", {
                                    className: "inline-block md:block",
                                    children: "ENGAGEMENTS"
                                })]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "sm:py-8 px-4",
                            children: [(0, i.jsx)("h1", {
                                className: "text-4xl md:text-5xl text-center mb-4 font-semibold text-header-color",
                                children: "10+"
                            }), (0, i.jsxs)("p", {
                                className: "text-center md:text-lg tracking-[0.15rem] text-primary-color1",
                                children: ["IDEATION TO\xa0", (0, i.jsx)("span", {
                                    className: "inline-block md:block",
                                    children: "GROWTH"
                                })]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "py-8 px-4",
                            children: [(0, i.jsx)("h1", {
                                className: "text-4xl md:text-5xl text-center mb-4 font-semibold text-header-color",
                                children: "6+"
                            }), (0, i.jsxs)("p", {
                                className: "text-center md:text-lg tracking-[0.15rem] text-primary-color1",
                                children: ["GCC'S\xa0", (0, i.jsx)("span", {
                                    className: "inline-block md:block",
                                    children: "SPIN-OFF"
                                })]
                            })]
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)("h1", {
                                className: "text-4xl md:text-5xl text-center mb-4 font-semibold text-header-color",
                                children: "4+"
                            }), (0, i.jsxs)("p", {
                                className: "text-center md:text-lg tracking-[0.15rem] text-primary-color1",
                                children: ["INTRAPRENEURSHIP\xa0", (0, i.jsx)("span", {
                                    className: "inline-block md:block",
                                    children: "ENGAGEMENTS"
                                })]
                            })]
                        }), (0, i.jsx)("div", {
                            id: "tracks"
                        })]
                    })
                })),
                I = s(8378),
                S = s.n(I),
                R = s(7846),
                T = s(1824),
                D = s(9348),
                E = s(8574),
                P = s(3487),
                U = {
                    src: "/_next/static/media/focussed_gif.dbcd2b45.webp",
                    height: 1500,
                    width: 1500,
                    blurWidth: 0,
                    blurHeight: 0
                };
            let B = [{
                    icon: (0, i.jsx)(R.Ix$, {}),
                    expertise: "Web3 / DLT",
                    header: "Permissionless Distributed Ownership",
                    description: "Web3 Solutioning, Decentralized Finance (DeFi) and dApps, Blockchain Infrastructure, and Digital Identity Solutions; Cloud-Based Collaboration."
                }, {
                    icon: "",
                    expertise: "",
                    description: ""
                }, {
                    icon: (0, i.jsx)(D.FmD, {}),
                    expertise: "SaaS and Marketplaces",
                    header: "Subscription Economy",
                    description: "Cloud Hosted Solutions and Online Trade Hubs or Marketplaces to connect Buyers and Sellers in various industries."
                }, {
                    icon: "",
                    expertise: "",
                    header: "",
                    description: ""
                }, {
                    icon: (0, i.jsx)(E.DZz, {}),
                    expertise: "Infrastructure Softwares",
                    header: "Infrastructure-As-Code (IaC)",
                    description: "DevOps, Cloud Computing, and Digital Infrastructure solutions that can effectively manage and secure networks."
                }, {
                    icon: "",
                    expertise: "",
                    header: "",
                    description: ""
                }],
                Q = [{
                    icon: "",
                    expertise: "",
                    description: ""
                }, {
                    icon: (0, i.jsx)(T.W79, {}),
                    expertise: "Applied AI & Data Platforms",
                    header: "DataScience - AI, ML and NLP",
                    description: "Practical Implementation of Artificial Intelligence (AI) to solve real-world problems and address specific business or societal challenges."
                }, {
                    icon: "",
                    expertise: "",
                    description: ""
                }, {
                    icon: (0, i.jsx)(E.dT0, {}),
                    expertise: "Digital Trust",
                    header: "Data, Privacy and Protection",
                    description: "Solutions focus on the reliability and integrity of Digital Technologies and Platforms. Cybersecurity, Data Protection, and Robust."
                }, {
                    icon: "",
                    alignContent: "",
                    expertise: "",
                    description: ""
                }, {
                    icon: (0, i.jsx)(P.g_B, {}),
                    expertise: "Corporate Innovation",
                    header: "Strategy Canvas - Untapped Growth",
                    description: "HealthTech, EdTech, WealthTech, FinTech, RetailTech, PropTech, InsurTech, LegalTech, BioTech, FemTech, FoodTech, CleanTech and Digital & Transformation."
                }];
            var O = () => {
                let [e, t] = (0, l.useState)(0), [s, a] = (0, l.useState)(!1), r = (0, l.useRef)([]);
                return (0, i.jsxs)("div", {
                    children: [(0, i.jsxs)("h1", {
                        className: "text-[28px] md:text-4xl tracking-wide text-center font-bold my-10 md:mb-0 text-header-color",
                        children: ["FOCUSSED ", (0, i.jsx)("span", {
                            className: "text-primary-color1 w-fit inline-block after:contents'' after:block after:bg-primary-color1 after:h-[2px] after:w-full",
                            children: "TRACKS"
                        })]
                    }), (0, i.jsxs)("section", {
                        className: S().approach,
                        children: [(0, i.jsx)("div", {
                            className: S().approachright,
                            children: B.map((e, t) => (0, i.jsx)("div", {
                                className: "",
                                children: (0, i.jsxs)("div", {
                                    className: "".concat(S().point1),
                                    ref: e => r.current[t] = e,
                                    children: [(0, i.jsx)("h4", {
                                        className: "text-2xl md:text-3xl font-medium mb-1 tracking-wide text-header-color",
                                        children: e.expertise
                                    }), (0, i.jsx)("h4", {
                                        className: "text-xl font-medium mb-7 tracking-wide text-primary-color1",
                                        children: e.header
                                    }), (0, i.jsx)("p", {
                                        className: " text-text-color text-lg text-justify",
                                        children: e.description
                                    })]
                                })
                            }, t))
                        }), (0, i.jsx)(m.E.div, {
                            variants: {
                                visible: {
                                    scale: 1
                                },
                                hidden: {
                                    scale: .8
                                }
                            },
                            initial: "hidden",
                            whileInView: "visible",
                            className: "".concat(S().approachleft, " my-10 md:my-0"),
                            children: (0, i.jsx)(n(), {
                                className: "".concat(s ? "hidden" : ""),
                                src: U,
                                alt: "placeholder"
                            })
                        }), (0, i.jsx)("div", {
                            className: S().approachright,
                            children: Q.map((e, t) => (0, i.jsxs)("div", {
                                className: S().point1,
                                ref: e => r.current[t] = e,
                                children: [(0, i.jsx)("h4", {
                                    className: "text-2xl md:text-3xl font-medium mb-1 tracking-wide text-header-color",
                                    children: e.expertise
                                }), (0, i.jsx)("h4", {
                                    className: "text-xl font-medium mb-7 tracking-wide text-primary-color1",
                                    children: e.header
                                }), (0, i.jsx)("p", {
                                    className: " text-text-color text-lg text-justify",
                                    children: e.description
                                })]
                            }, t))
                        })]
                    })]
                })
            };
            s(2641);
            var L = s(1095),
                H = {
                    src: "/_next/static/media/free-deal-img.18186c6c.webp",
                    height: 2275,
                    width: 1280,
                    blurDataURL: "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAAAQAgCdASoFAAgAAkA4JQBOjXAAUP+ecdkAAP7ohNwPYYYMt0cxUvYeNhrAYWqNrxkJslpHuKs/jC8AAAA=",
                    blurWidth: 5,
                    blurHeight: 8
                },
                J = s(2775),
                G = s(8956),
                F = s(6222),
                W = s(7036),
                Z = s(4190),
                _ = s(8735),
                X = s(3060),
                V = s(3032),
                M = s(7025),
                Y = s(6645),
                q = s(9884),
                z = s(3045),
                K = () => (0, i.jsxs)("div", {
                    className: "grid md:grid-cols-2 md:mb-20",
                    children: [(0, i.jsx)("div", {
                        className: "relative w-full md:h-full min-h-[500px]  md:basis-[30%]",
                        children: (0, i.jsx)(n(), {
                            fill: !0,
                            alt: "futute",
                            className: "object-cover",
                            src: H
                        })
                    }), (0, i.jsx)("div", {
                        className: "bg-header-color flex md:basis-[70%] pl-5 lg:pl-10 pr-5 py-8",
                        children: (0, i.jsxs)("div", {
                            className: "text-gray-300 space-y-10",
                            children: [(0, i.jsxs)("div", {
                                children: [(0, i.jsx)("h2", {
                                    className: "text-[5vw] sm:text-[4vw] md:text-[2.5vw] lg:text-[2vw] font-semibold",
                                    children: "Get upto $2.8m in free and discounted Deals for selected Startups"
                                }), (0, i.jsx)("p", {
                                    className: "text-lg text-justify tracking-wide mt-5",
                                    children: "Exclusive deals for hosting, design, software, email, database, analytics, accounting, mobile, advertising and more."
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "flex flex-wrap gap-10 items-center",
                                children: [(0, i.jsx)(n(), {
                                    src: J.Z,
                                    className: "h-[70px] w-[70px]"
                                }), (0, i.jsx)(n(), {
                                    src: G.Z,
                                    className: "h-[70px] w-[70px]"
                                }), (0, i.jsx)(n(), {
                                    src: F.Z,
                                    className: "h-[70px] w-[70px]"
                                }), (0, i.jsx)(n(), {
                                    src: W.Z,
                                    className: "h-[70px] w-[70px]"
                                }), (0, i.jsx)(n(), {
                                    src: Z.Z,
                                    className: "h-[70px] w-[70px]"
                                }), (0, i.jsx)(n(), {
                                    src: X.Z,
                                    className: "h-[70px] w-[70px]"
                                }), (0, i.jsx)(n(), {
                                    src: _.Z,
                                    className: "h-[70px] w-[70px]"
                                }), (0, i.jsx)(n(), {
                                    src: V.Z,
                                    className: "h-[70px] w-[70px]"
                                }), (0, i.jsx)(n(), {
                                    src: M.Z,
                                    className: "h-[70px] w-[70px]"
                                }), (0, i.jsx)(n(), {
                                    src: Y.Z,
                                    className: "h-[70px] w-[70px]"
                                }), (0, i.jsx)(n(), {
                                    src: q.Z,
                                    className: "h-[70px] w-[70px]"
                                }), (0, i.jsx)(n(), {
                                    src: z.Z,
                                    className: "h-[70px] w-[70px]"
                                })]
                            }), (0, i.jsx)("p", {
                                className: "text-lg text-justify tracking-wide",
                                children: "It’s our unwavering commitment to foster innovation and entrepreneurship. We believe that by nurturing the next generation of startups, we can drive economic growth and create a more dynamic, forward-thinking business landscape. Together, we are building the future\xa0of\xa0innovation."
                            }), (0, i.jsx)(b(), {
                                className: "block",
                                target: "_blank",
                                href: "https://www.f6s.com/deals",
                                children: (0, i.jsx)("button", {
                                    className: "py-2 px-3 rounded-full text-black font-medium bg-white hover:bg-primary-color1 transition-all duration-500 hover:text-white",
                                    children: "Explore All Deals"
                                })
                            })]
                        })
                    })]
                });

            function $() {
                let [e, t] = (0, l.useState)(""), [s, a] = (0, l.useState)("");
                return (0, l.useEffect)(() => {
                    let e = window.location.hash;
                    if (e) {
                        let t = document.querySelector(e);
                        t && t.scrollIntoView({
                            behavior: "smooth"
                        })
                    }
                }, []), (0, l.useEffect)(() => {
                    L.gn && t("ios"), L.Q5 && a("mac")
                }), (0, i.jsx)("main", {
                    children: (0, i.jsxs)("div", {
                        className: "parallax-body",
                        children: [(0, i.jsx)("div", {
                            className: "home-section",
                            children: (0, i.jsx)("div", {
                                className: "fixed",
                                children: (0, i.jsxs)("div", {
                                    className: "flex h-[100dvh] w-screen bg-[#A5DBFA]",
                                    children: [(0, i.jsx)(n(), {
                                        className: "object-fill sm:object-cover sm:hidden w-full h-[80svh]",
                                        src: o,
                                        alt: "home-banner"
                                    }), (0, i.jsx)(n(), {
                                        className: "object-fill sm:object-cover hidden lg:block w-full\n                  h-full",
                                        src: r,
                                        alt: "home-banner"
                                    }), (0, i.jsxs)("div", {
                                        className: "absolute w-fit md:w-[60%] lg:w-[47%] py-8 px-5 md:px-0 md:right-14 min-h-full top-[52svh] sm:top-[15%] md:top-[20%]",
                                        children: [(0, i.jsx)("h1", {
                                            className: "title text-[28px] sm:text-[8vw] md:text-[5.5vw] mb-4 uppercase w-fit font-bold leading-none tracking-widest text-header-color",
                                            children: "OPERATIONAL"
                                        }), (0, i.jsx)("h1", {
                                            className: "title text-[28px] sm:text-[8vw] md:text-[5.5vw] uppercase w-fit font-bold leading-none text-primary-color1",
                                            children: (0, i.jsx)(N, {
                                                strings: ["COFOUNDER.", "PARTNER."],
                                                typeSpeed: 150,
                                                loop: !0,
                                                backSpeed: 100,
                                                cursorChar: "|",
                                                showCursor: !0
                                            })
                                        }), (0, i.jsxs)("p", {
                                            className: "mt-5 sm:mt-10 md:mt-14 tracking-wide text-justify font-light !leading-8  lg:mb-10 sm:text-xl text-text-color",
                                            children: ["We collaborate with exceptional", " ", (0, i.jsxs)("span", {
                                                className: "text-primary-color1",
                                                children: ["'", (0, i.jsx)("span", {
                                                    className: "underline",
                                                    children: "Entrepreneurs"
                                                }), "'"]
                                            }), "\xa0and\xa0", (0, i.jsxs)("span", {
                                                className: "text-primary-color1",
                                                children: ["'", (0, i.jsx)("span", {
                                                    className: "underline",
                                                    children: "Intrapreneurs"
                                                }), "'"]
                                            }), " ", "to bring meaningful ideas to reality. We encourage collaboration through validation, talent, resources, and investment."]
                                        })]
                                    })]
                                })
                            })
                        }), (0, i.jsx)("div", {
                            id: "whyStudio",
                            className: "home-section",
                            children: (0, i.jsx)("div", {
                                className: "fixed",
                                children: (0, i.jsxs)("div", {
                                    className: "scrollbar h-[100dvh] flex flex-col md:flex-row bg-[#FAF9F6] w-screen",
                                    children: [(0, i.jsxs)("div", {
                                        className: "w-full md:w-1/2 h-[60svh] md:h-full flex flex-col pt-24 md:pt-28 px-5 md:pl-8",
                                        children: [(0, i.jsx)("div", {
                                            className: "mb-5 md:mb-14",
                                            children: (0, i.jsxs)("h1", {
                                                className: "text-2xl sm:text-[5.5vw] leading-[1.95rem] sm:leading-none font-bold text-header-color",
                                                children: [(0, i.jsx)("span", {
                                                    className: "inline-block",
                                                    children: "TOGETHER"
                                                }), " FROM IDEA TO", " ", (0, i.jsx)("span", {
                                                    className: "text-primary-color1 w-fit inline-block sm:block after:contents'' after:block after:bg-primary-color1 after:h-[2px] after:w-full",
                                                    children: "ICONIC"
                                                })]
                                            })
                                        }), (0, i.jsx)("p", {
                                            className: "md:text-lg text-justify tracking-wide leading-7 md:leading-[30px] text-text-color",
                                            children: "We believe in an outcome-driven process to test assumptions, eliminate confirmation biases, and operate with passion. We reduce a process that could take years to months. We ensure that you are pursuing the right market, that you are fully validated, and that you are surrounded by incredible teammates."
                                        }), (0, i.jsx)("br", {}), (0, i.jsx)("br", {})]
                                    }), (0, i.jsx)("div", {
                                        className: "w-full md:w-1/2 h-[50svh] md:h-full",
                                        children: (0, i.jsx)("video", {
                                            className: "w-full h-full object-cover",
                                            autoPlay: !0,
                                            muted: !0,
                                            loop: !0,
                                            playsInline: !0,
                                            src: "ios" === e || "mac" === s ? "/assets/liveintech-stock-asset/whystudio_video.mov" : "/assets/liveintech-stock-asset/whystudio_video.webm"
                                        })
                                    })]
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "home-section",
                            children: (0, i.jsx)("div", {
                                className: "fixed",
                                children: (0, i.jsxs)("div", {
                                    className: "scrollbar h-[100dvh] overflow-y-auto md:overflow-y-hidden flex flex-col md:flex-row bg-[#ececed] w-screen",
                                    children: [(0, i.jsxs)("div", {
                                        className: "w-full md:w-1/2 h-[60svh] md:h-full flex flex-col pt-24 md:pt-28 px-5 md:pl-8",
                                        children: [(0, i.jsxs)("div", {
                                            children: [(0, i.jsxs)("h1", {
                                                className: "text-[6vw] sm:text-[5.5vw] leading-none font-bold text-header-color",
                                                children: ["COCREATE", (0, i.jsx)("br", {
                                                    className: "hidden md:block"
                                                }), (0, i.jsxs)("span", {
                                                    className: "text-primary-color1 text-[6vw] sm:text-[5.5vw]",
                                                    children: [(0, i.jsx)("span", {
                                                        className: "sm:hidden",
                                                        children: "\xa0"
                                                    }), "&", (0, i.jsx)("span", {
                                                        className: "sm:hidden",
                                                        children: "\xa0"
                                                    }), (0, i.jsx)("span", {
                                                        className: "w-fit inline-block after:contents'' after:block after:bg-primary-color1 after:h-[2px] after:w-full",
                                                        children: "COINVEST"
                                                    })]
                                                })]
                                            }), (0, i.jsxs)("p", {
                                                className: "md:text-lg text-justify leading-[30px] tracking-wide my-5 md:my-14 text-text-color",
                                                children: ["We provide a streamlined risk-reward framework for co-creation, encompassing validation, solutioning, risk mitigation, and capability-capital", (0, i.jsx)("sup", {
                                                    className: "text-sm",
                                                    children: "TM"
                                                }), ", so that entrepreneurs may focus on product and market fit."]
                                            })]
                                        }), (0, i.jsx)(b(), {
                                            href: "/pitch",
                                            children: (0, i.jsx)("button", {
                                                className: "bg-primary-color1 float-right font-medium text-white px-3 md:px-5 py-1 md:py-2 mr-1 rounded-full",
                                                children: "REACH US"
                                            })
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: "w-full md:w-1/2 h-[50svh] md:h-full",
                                        children: (0, i.jsx)("video", {
                                            className: "w-full h-full object-cover",
                                            autoPlay: !0,
                                            muted: !0,
                                            loop: !0,
                                            playsInline: !0,
                                            src: "ios" === e || "mac" === s ? "/assets/liveintech-stock-asset/build-together.mov" : "/assets/liveintech-stock-asset/build-together.webm"
                                        })
                                    })]
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "home-section",
                            children: (0, i.jsx)("div", {
                                className: "md:flex items-center h-fit",
                                children: (0, i.jsx)("div", {
                                    children: (0, i.jsxs)("div", {
                                        className: "bg-white",
                                        children: [(0, i.jsx)(C, {}), (0, i.jsx)(O, {}), (0, i.jsx)(A, {}), (0, i.jsx)(K, {}), (0, i.jsx)("div", {
                                            className: "flex items-center lg:items-start min-h-[90vh] py-10 px-5 md:px-10 relative z-50",
                                            children: (0, i.jsxs)("div", {
                                                className: "mx-auto text-center",
                                                children: [(0, i.jsx)("h2", {
                                                    className: "text-2xl  sm:text-5xl lg:text-7xl text-primary-color1 font-semibold",
                                                    children: "BUILD - GROW - SCALE"
                                                }), (0, i.jsxs)("div", {
                                                    children: [(0, i.jsx)("p", {
                                                        className: "text-text-color text-justify sm:text-center text-lg md:text-xl tracking-wide my-20 sm:my-24 md:max-w-[80%] mx-auto",
                                                        children: "We understand the entrepreneur’s journey; most of us have been down that road. We love to dig in early to help build important, valuable companies, and we are always looking for the next team with exceptional potential. Have an idea? Or just want to be a part of something big? Let’s talk."
                                                    }), (0, i.jsx)("p", {
                                                        className: "text-text-color text-lg mb-4",
                                                        children: "It’s never too early to get in touch."
                                                    })]
                                                }), (0, i.jsx)(b(), {
                                                    href: "/pitch",
                                                    children: (0, i.jsxs)("button", {
                                                        className: "bg-primary-color1 text-white px-3 py-1 tracking-tight",
                                                        children: [(0, i.jsx)("span", {
                                                            children: "REACH"
                                                        }), " US"]
                                                    })
                                                })]
                                            })
                                        }), (0, i.jsx)(f.Z, {})]
                                    })
                                })
                            })
                        })]
                    })
                })
            }
        },
        2641: function(e, t, s) {
            "use strict";
            var i = s(2265);
            t.Z = function() {
                let [e, t] = (0, i.useState)({
                    width: 0,
                    height: 0
                });
                return (0, i.useEffect)(() => {
                    let e = () => {
                        t({
                            width: window.innerWidth,
                            height: window.innerHeight
                        })
                    };
                    return window.addEventListener("resize", e), () => {
                        window.removeEventListener("resize", e)
                    }
                }, []), e
            }
        },
        480: function() {},
        8378: function(e) {
            e.exports = {
                approach: "focussed_approach__NlwDR",
                approachright: "focussed_approachright___caTJ",
                approachleft: "focussed_approachleft__beT4M",
                point1: "focussed_point1__djYRi",
                whyusleft: "focussed_whyusleft__JKgXo"
            }
        },
        8735: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/apollos.51fc184f.webp",
                height: 140,
                width: 140,
                blurDataURL: "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAAAQAgCdASoIAAgAAkA4JbACdLoAAzkn506gAP7wtWi7zdxckyG+s1KKjwt7SF4TnEoVnE8/YpXR7i+hMWUxOkEKQv/Roz4ZyX1R/8nyX/JyBuz7yH7VsSi96YbPPYAA",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        4190: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/aws.0aad49a4.webp",
                height: 736,
                width: 736,
                blurDataURL: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAABQAgCdASoIAAgAAkA4JZQCdH8GJ/gex9UKVoAA/vtjKAGwCi80JQivSdxahz6/DG99CN0oKRSsePv2MxbSHphgBRAAAA==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        8956: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/cloudfare.d57f30cf.webp",
                height: 140,
                width: 140,
                blurDataURL: "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADwAQCdASoIAAgAAkA4JQBOgCIjxkhlEAAA/v1OfQ9f8PGhI/y7N5w6uRPJ5Yhclmq6u6oqudWv/ouf75dT2dR26iCyf/L6360QifIFkAA=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        6222: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/dell.cb539c0b.webp",
                height: 140,
                width: 140,
                blurDataURL: "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAAAQAgCdASoIAAgAAkA4JQBOgJYAPHiRvcFAAP76LOXHdwsrxTDa24SpRSjj4f5RXcPxsUrnKP/cV7ybQqG0nYy7RBltndVuP5phjJ6+nMFTYfsdwNAAAA==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        6645: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/docsend.c60e7eb8.webp",
                height: 140,
                width: 140,
                blurDataURL: "data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAAAQAgCdASoIAAgAAkA4JbACdDBEQUcg+QcAAP7yk63mZ2xsmapFu5PP/mQ+dz8F/TaKH2tTx0ypmx5mkfVJtsHwpS93mKTtpMeAf7GTv+cB935vwovKE2wtqj7CgXvBHu0Dx779BmhB93d+cd/wAAAA",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        7036: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/git.c4beb2ff.webp",
                height: 140,
                width: 140,
                blurDataURL: "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAgAAkA4JaQAAueA+nsgAAD+/C7eW9uu+xb5kTOXI9DcUvbfIQHPelf3SsCsJoFsC8UAAAA=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        2775: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/google-cloud.be0bd4dd.webp",
                height: 140,
                width: 140,
                blurDataURL: "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAAAQAgCdASoIAAgAAkA4JYwCdH8AGJwNfgyAAP78pAXuei40UtyWkG5Whbbma+H/BwaE/K8pTQzmoeJ4yu5zPiST/EBDeg9ELCGmbIz9VcSnPsIwAAA=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        7712: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/guild1.cabe0c70.webp",
                height: 1280,
                width: 1920,
                blurDataURL: "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAkA4JZwCw7EOuwSAAPXdZ1d1dUibrcGadjx1JUpTqYrKrhv1IKJiqCgt+AAAAA==",
                blurWidth: 8,
                blurHeight: 5
            }
        },
        6620: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/guild2.fca09dc3.webp",
                height: 1280,
                width: 1920,
                blurDataURL: "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAUAAkA4JZQCdAD0h/pcAPeNO+joNsDDauBwTUUaCsa1FPveHDw0pmkOjUWAAAA=",
                blurWidth: 8,
                blurHeight: 5
            }
        },
        9849: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/guild3.6b636deb.webp",
                height: 1280,
                width: 1920,
                blurDataURL: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAUAAkA4JQBOgB6M/4o7AAD+7e9Eh2qhqgDIOpiHYoP+HV/3/BmKPUpUPRylk2G4bPkQ4SAAAA==",
                blurWidth: 8,
                blurHeight: 5
            }
        },
        3032: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/hubspot.110beabd.webp",
                height: 140,
                width: 140,
                blurDataURL: "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAAAwAgCdASoIAAgAAkA4JbACdLoB+AACXe+aAAD9/AC1GwTQ2tW8ythnw4bWtiz0aw1QicQ//FpihY9bos23b/64HMhd8PhPSsfSsfuUAAA=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        7025: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/mobbin.c1b883a3.webp",
                height: 140,
                width: 140,
                blurDataURL: "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoIAAgAAkA4JaQAAxU/bG8gAAD++6G2NPynNbEPk2Ktw+La6Uv/jRLvMDx/vA99jOmMls8297A9rwYnz+/fAL+yTgAAAA==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        3060: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/notion.c56beef2.webp",
                height: 140,
                width: 140,
                blurDataURL: "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADwAQCdASoIAAgAAkA4JaQAD4AQkfxWeQAA/vVifwM+y4g24b2Zuefn+EzRpmDX84XTQDnOvPNm9KO8uOx7qAAA",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        3045: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/teamplan.37bfe900.webp",
                height: 140,
                width: 140,
                blurDataURL: "data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAAAwAgCdASoIAAgAAkA4JbACdLoAAzkn9P1fAADOP+4YyZ1ccF+cMtRnpk2Z0MIGmk1CTRaedq+mfxee9645upiBi0/uINdQI9D/ymg/9r7/mU+Y2/9T7H4C3Zv/jdeLf+IT4wYlF7yN2QPQeytYwAAA",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        9884: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/webflow.91fdbdd9.webp",
                height: 140,
                width: 140,
                blurDataURL: "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAAAQAgCdASoIAAgAAkA4JagCdLoAAncVFbQAAP6HzKYm6X0T6I4JXt0dBthCyFI84tgPUGRqZ2vD1Af/XA94cZOUz/9pZ/9Sz/PQ68p8UpAAAA==",
                blurWidth: 8,
                blurHeight: 8
            }
        }
    },
    function(e) {
        e.O(0, [306, 582, 370, 169, 222, 61, 184, 234, 691, 95, 40, 875, 971, 938, 744], function() {
            return e(e.s = 548)
        }), _N_E = e.O()
    }
]);