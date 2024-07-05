(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185], {
      6528: function(e, t, r) {
          Promise.resolve().then(r.t.bind(r, 8822, 23)), Promise.resolve().then(r.t.bind(r, 3385, 23)), Promise.resolve().then(r.bind(r, 1655))
      },
      1655: function(e, t, r) {
          "use strict";
          r.r(t), r.d(t, {
              default: function() {
                  return E
              }
          });
          var n = r(7437),
              i = r(2265),
              s = r(2641),
              o = r(1396),
              l = r.n(o),
              a = r(4033),
              d = () => {
                  let [e, t] = (0, i.useState)(!0), {
                      width: r
                  } = (0, s.Z)(), o = (0, a.usePathname)(), [d, c] = (0, i.useState)(!1), [m, u] = (0, i.useState)(!1), [h, p] = (0, i.useState)(!1);
                  (0, i.useEffect)(() => {
                      p(!0)
                  }, []), (0, i.useEffect)(() => {
                      let e = () => {
                          let e = window.pageYOffset;
                          c(e > 100), u(e > 200)
                      };
                      return "/pitch" !== o && window.addEventListener("scroll", e), () => {
                          window.removeEventListener("scroll", e)
                      }
                  }, [d, o]);
                  let x = () => {
                          t(!e)
                      },
                      f = () => {
                          e || t(!0)
                      };
                  return (0, i.useEffect)(() => {
                      r >= 768 && !1 === e && t(!e)
                  }, [r, e]), (0, n.jsx)("header", {
                      children: (0, n.jsxs)("nav", {
                          style: {
                              boxShadow: "/" === o && m ? "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px" : "/" !== o && d ? "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px" : "none",
                              fontFamily: "Mars Condensed,Arial"
                          },
                          className: "z-[1000] top-0 left-0 fixed ".concat("/pitch" === o ? "hidden" : "flex", "  ").concat("/" === o && m ? "bg-[#fff]" : "/" !== o && d ? "bg-[#fff]" : "/careers" === o ? "bg-white" : "/" !== o && "bg-white sm:bg-transparent", " items-center w-full  mt-0 px-4 md:px-8 py-4 md:py-[6px] text-lg text-gray-700"),
                          children: [(0, n.jsx)("div", {
                              className: "mr-3 lg:mr-8",
                              children: (0, n.jsx)(l(), {
                                  href: "/",
                                  children: (0, n.jsx)("div", {
                                      className: "text-[#225599] text-xl font-bold tracking-widest",
                                      children: "LIVEINTECH"
                                  })
                              })
                          }), (0, n.jsxs)("div", {
                              className: "flex ml-auto justify-between basis-[52%] 2xl:pl-5 items-center",
                              children: [(0, n.jsxs)("div", {
                                  className: "".concat(e ? "hidden" : "absolute top-0 left-0 h-full bg-white", " w-full md:flex  md:items-center md:w-auto md:pr-5"),
                                  id: "menu",
                                  children: [!e && (0, n.jsxs)("div", {
                                      className: "py-4 px-4 flex items-center justify-between",
                                      children: [(0, n.jsx)("div", {
                                          className: "text-[#225599] text-xl font-bold tracking-widest",
                                          children: "LIVEINTECH"
                                      }), (0, n.jsx)("div", {
                                          children: (0, n.jsx)("svg", {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              width: "32",
                                              height: "32",
                                              fill: "currentColor",
                                              onClick: x,
                                              className: "bi bi-x cursor-pointer",
                                              viewBox: "0 0 16 16",
                                              children: (0, n.jsx)("path", {
                                                  d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                              })
                                          })
                                      })]
                                  }), (0, n.jsxs)("ul", {
                                      className: "\n            sub-menu\n              text-base ".concat(e && "/irise" === o ? d > 0 ? "text-text-color" : "text-white" : "text-text-color", " \n              ").concat(e ? "bg-transparent" : "bg-white", "\n              md:flex\n              items-center\n              w-full\n              md:justify-between\n              md:pt-0 -mt-[2px] md:mt-0 h-screen md:h-fit"),
                                      children: [(0, n.jsx)("li", {
                                          onClick: f,
                                          className: "px-4 py-4 md:px-[14px] lg:px-5 border-b-[1px] md:border-none border-gray-200",
                                          children: (0, n.jsx)(l(), {
                                              className: "hover-underline-animation border-gray-200 block hover:text-[#000] font-medium md:border-none w-fit",
                                              href: "/",
                                              children: "Home"
                                          })
                                      }), (0, n.jsx)("li", {
                                          onClick: f,
                                          className: "px-4 py-4 md:px-[14px] lg:px-5 border-b-[1px] md:border-none border-gray-200",
                                          children: (0, n.jsx)(l(), {
                                              className: "hover-underline-animation text-nowrap border-gray-200 block hover:text-[#000] font-medium md:border-none w-fit",
                                              href: "/#whyStudio",
                                              children: "Why Studio"
                                          })
                                      }), (0, n.jsx)("li", {
                                          onClick: f,
                                          className: "px-4 py-4 md:px-[14px] lg:px-5 border-b-[1px] md:border-none border-gray-200",
                                          children: (0, n.jsx)(l(), {
                                              className: "hover-underline-animation text-nowrap border-gray-200 block hover:text-[#000] font-medium md:border-none w-fit",
                                              href: "/#tracks",
                                              children: "Tracks"
                                          })
                                      }), (0, n.jsx)("li", {
                                          onClick: f,
                                          className: "px-4 py-4 md:px-[14px] lg:px-5 border-b-[1px] md:border-none border-gray-200",
                                          children: (0, n.jsx)(l(), {
                                              className: "hover-underline-animation border-gray-200 block hover:text-[#000] font-medium md:border-none w-fit",
                                              href: "/#catalysts",
                                              children: "Catalysts"
                                          })
                                      }), (0, n.jsx)("li", {
                                          onClick: f,
                                          className: "px-4 py-4 md:px-[14px] lg:px-5 border-b-[1px] md:border-none border-gray-200",
                                          children: (0, n.jsx)(l(), {
                                              className: "hover-underline-animation border-gray-200 block hover:text-[#000] font-medium md:border-none w-fit",
                                              href: "/about-us",
                                              children: "About"
                                          })
                                      }), (0, n.jsx)("li", {
                                          onClick: f,
                                          className: "px-4 py-4 md:px-[14px] lg:px-5 border-b-[1px] md:border-none border-gray-200",
                                          children: (0, n.jsxs)(l(), {
                                              className: "hover-underline-animation relative border-gray-200 block hover:text-[#000] font-medium md:border-none w-fit",
                                              href: "/irise",
                                              children: [(0, n.jsx)("span", {
                                                  className: "absolute text-[8px] right-0 font-semibold -top-3 z-[100] text-primary-color1 block",
                                                  children: "NEW"
                                              }), "iRise"]
                                          })
                                      })]
                                  })]
                              }), (0, n.jsx)(l(), {
                                  href: "/pitch",
                                  children: (0, n.jsx)("button", {
                                      className: "bg-primary-color1  hidden md:block font-medium text-white px-3 text-base py-[3px] h-fit",
                                      children: "PITCH"
                                  })
                              })]
                          }), (0, n.jsxs)("div", {
                              className: "flex items-center md:hidden",
                              children: [(0, n.jsx)(l(), {
                                  href: "#",
                                  children: (0, n.jsx)("svg", {
                                      xmlns: "<http://www.w3.org/2000/svg>",
                                      id: "menu-button",
                                      onClick: x,
                                      className: "h-6 w-6 cursor-pointer md:hidden block ".concat("/" === o ? d > 0 ? "text-header-color" : "text-white" : "text-header-color"),
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                      children: (0, n.jsx)("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2",
                                          d: "M4 6h16M4 12h16M4 18h16"
                                      })
                                  })
                              }), (0, n.jsx)(l(), {
                                  href: "/pitch",
                                  children: (0, n.jsx)("button", {
                                      className: "bg-primary-color1 ml-6 block md:hidden font-medium text-white text-base px-3 py-[3px] h-fit",
                                      children: "Pitch"
                                  })
                              })]
                          })]
                      })
                  })
              };
          r(7875);
          var c = r(538);

          function m() {
              let e = (0, i.useRef)(!1);
              return (0, c.L)(() => (e.current = !0, () => {
                  e.current = !1
              }), []), e
          }
          var u = r(6846),
              h = r(8243),
              p = r(961);
          class x extends i.Component {
              getSnapshotBeforeUpdate(e) {
                  let t = this.props.childRef.current;
                  if (t && e.isPresent && !this.props.isPresent) {
                      let e = this.props.sizeRef.current;
                      e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft
                  }
                  return null
              }
              componentDidUpdate() {}
              render() {
                  return this.props.children
              }
          }

          function f({
              children: e,
              isPresent: t
          }) {
              let r = (0, i.useId)(),
                  n = (0, i.useRef)(null),
                  s = (0, i.useRef)({
                      width: 0,
                      height: 0,
                      top: 0,
                      left: 0
                  });
              return (0, i.useInsertionEffect)(() => {
                  let {
                      width: e,
                      height: i,
                      top: o,
                      left: l
                  } = s.current;
                  if (t || !n.current || !e || !i) return;
                  n.current.dataset.motionPopId = r;
                  let a = document.createElement("style");
                  return document.head.appendChild(a), a.sheet && a.sheet.insertRule(`
        [data-motion-pop-id="${r}"] {
          position: absolute !important;
          width: ${e}px !important;
          height: ${i}px !important;
          top: ${o}px !important;
          left: ${l}px !important;
        }
      `), () => {
                      document.head.removeChild(a)
                  }
              }, [t]), i.createElement(x, {
                  isPresent: t,
                  childRef: n,
                  sizeRef: s
              }, i.cloneElement(e, {
                  ref: n
              }))
          }
          let b = ({
              children: e,
              initial: t,
              isPresent: r,
              onExitComplete: n,
              custom: s,
              presenceAffectsLayout: o,
              mode: l
          }) => {
              let a = (0, p.h)(w),
                  d = (0, i.useId)(),
                  c = (0, i.useMemo)(() => ({
                      id: d,
                      initial: t,
                      isPresent: r,
                      custom: s,
                      onExitComplete: e => {
                          for (let t of (a.set(e, !0), a.values()))
                              if (!t) return;
                          n && n()
                      },
                      register: e => (a.set(e, !1), () => a.delete(e))
                  }), o ? void 0 : [r]);
              return (0, i.useMemo)(() => {
                  a.forEach((e, t) => a.set(t, !1))
              }, [r]), i.useEffect(() => {
                  r || a.size || !n || n()
              }, [r]), "popLayout" === l && (e = i.createElement(f, {
                  isPresent: r
              }, e)), i.createElement(h.O.Provider, {
                  value: c
              }, e)
          };

          function w() {
              return new Map
          }
          var g = r(781),
              y = r(6567);
          let v = e => e.key || "",
              j = ({
                  children: e,
                  custom: t,
                  initial: r = !0,
                  onExitComplete: n,
                  exitBeforeEnter: s,
                  presenceAffectsLayout: o = !0,
                  mode: l = "sync"
              }) => {
                  var a;
                  (0, y.k)(!s, "Replace exitBeforeEnter with mode='wait'");
                  let d = (0, i.useContext)(g.p).forceRender || function() {
                          let e = m(),
                              [t, r] = (0, i.useState)(0),
                              n = (0, i.useCallback)(() => {
                                  e.current && r(t + 1)
                              }, [t]);
                          return [(0, i.useCallback)(() => u.Wi.postRender(n), [n]), t]
                      }()[0],
                      h = m(),
                      p = function(e) {
                          let t = [];
                          return i.Children.forEach(e, e => {
                              (0, i.isValidElement)(e) && t.push(e)
                          }), t
                      }(e),
                      x = p,
                      f = (0, i.useRef)(new Map).current,
                      w = (0, i.useRef)(x),
                      j = (0, i.useRef)(new Map).current,
                      k = (0, i.useRef)(!0);
                  if ((0, c.L)(() => {
                          k.current = !1,
                              function(e, t) {
                                  e.forEach(e => {
                                      let r = v(e);
                                      t.set(r, e)
                                  })
                              }(p, j), w.current = x
                      }), a = () => {
                          k.current = !0, j.clear(), f.clear()
                      }, (0, i.useEffect)(() => () => a(), []), k.current) return i.createElement(i.Fragment, null, x.map(e => i.createElement(b, {
                      key: v(e),
                      isPresent: !0,
                      initial: !!r && void 0,
                      presenceAffectsLayout: o,
                      mode: l
                  }, e)));
                  x = [...x];
                  let E = w.current.map(v),
                      N = p.map(v),
                      C = E.length;
                  for (let e = 0; e < C; e++) {
                      let t = E[e]; - 1 !== N.indexOf(t) || f.has(t) || f.set(t, void 0)
                  }
                  return "wait" === l && f.size && (x = []), f.forEach((e, r) => {
                      if (-1 !== N.indexOf(r)) return;
                      let s = j.get(r);
                      if (!s) return;
                      let a = E.indexOf(r),
                          c = e;
                      c || (c = i.createElement(b, {
                          key: v(s),
                          isPresent: !1,
                          onExitComplete: () => {
                              f.delete(r);
                              let e = Array.from(j.keys()).filter(e => !N.includes(e));
                              if (e.forEach(e => j.delete(e)), w.current = p.filter(t => {
                                      let n = v(t);
                                      return n === r || e.includes(n)
                                  }), !f.size) {
                                  if (!1 === h.current) return;
                                  d(), n && n()
                              }
                          },
                          custom: t,
                          presenceAffectsLayout: o,
                          mode: l
                      }, s), f.set(r, c)), x.splice(a, 0, c)
                  }), x = x.map(e => {
                      let t = e.key;
                      return f.has(t) ? e : i.createElement(b, {
                          key: v(e),
                          isPresent: !0,
                          presenceAffectsLayout: o,
                          mode: l
                      }, e)
                  }), i.createElement(i.Fragment, null, f.size ? x : x.map(e => (0, i.cloneElement)(e)))
              };
          var k = r(8095),
              E = e => {
                  let {
                      children: t
                  } = e, r = (0, a.usePathname)();
                  return (0, n.jsx)(j, {
                      mode: "wait",
                      children: (0, n.jsxs)(k.E.div, {
                          initial: "initial",
                          animate: "animate",
                          variants: "/pitch" === r ? {
                              initial: {
                                  opacity: 0,
                                  scale: .6,
                                  y: -20
                              },
                              animate: {
                                  opacity: 1,
                                  scale: 1,
                                  y: 0,
                                  transition: {
                                      duration: .5
                                  }
                              }
                          } : {},
                          children: [(0, n.jsx)(d, {}), t]
                      }, r)
                  })
              }
      },
      2641: function(e, t, r) {
          "use strict";
          var n = r(2265);
          t.Z = function() {
              let [e, t] = (0, n.useState)({
                  width: 0,
                  height: 0
              });
              return (0, n.useEffect)(() => {
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
      3385: function() {},
      8822: function(e) {
          e.exports = {
              style: {
                  fontFamily: "'__Inter_aaf875', '__Inter_Fallback_aaf875'",
                  fontStyle: "normal"
              },
              className: "__className_aaf875"
          }
      }
  },
  function(e) {
      e.O(0, [306, 582, 370, 234, 95, 875, 971, 938, 744], function() {
          return e(e.s = 6528)
      }), _N_E = e.O()
  }
]);