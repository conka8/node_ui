import { jsx as i, jsxs as p, Fragment as E } from "react/jsx-runtime";
import m from "classnames";
import { useCallback as R, memo as b, forwardRef as Ii, useMemo as k, useRef as V, useEffect as B, createContext as Q, useContext as F, useState as M, useId as X, Fragment as ye, createElement as Xr, Suspense as Co, useImperativeHandle as No } from "react";
import { useNavigate as So, Link as ko, useLocation as Ti, useRouteError as Io } from "react-router-dom";
import { LazyMotion as To, domAnimation as qo, m as jo, motion as U, AnimatePresence as W, useMotionValue as bn } from "framer-motion";
import { v4 as xn } from "uuid";
import { createPortal as Ao } from "react-dom";
import { ERROR_USER_INTERRUPT as Mo } from "@dfinity/auth-client";
import { AxiosError as Ro } from "axios";
import Oo from "react-markdown";
import { set as Eo } from "lodash";
import _e, { Big as H } from "big.js";
import { Root as Bo } from "@radix-ui/react-switch";
import * as Me from "@radix-ui/react-slider";
import { formatInTimeZone as Lo } from "date-fns-tz";
import Po from "qrcode";
import { useQuery as Do, QueryClient as zo, QueryClientProvider as Fo } from "@tanstack/react-query";
import * as bc from "@tanstack/react-query";
import { useMutation as Ru, useQuery as Ou, useQueryClient as Eu } from "@tanstack/react-query";
const qi = () => {
  const e = So(), t = R((n) => n, []);
  return { push: R((n) => e(t(n)), []), getHref: t };
}, Uo = (e) => e.onClick !== void 0 || e.href !== void 0 || e.isSubmit === !0 || e.isOutLink === !0, z = b(
  Ii(
    ({
      disabled: e,
      isOutLink: t = !1,
      style: r,
      href: n,
      onClick: a,
      children: o,
      className: s,
      isSubmit: l,
      eventName: c
    }, u) => {
      const d = k(
        () => m(
          {
            "cursor-pointer": a && !e,
            "pointer-events-none": e
          },
          s
        ),
        [s, a, e]
      ), f = V(null), h = V(null);
      B(() => {
        const w = f.current || h.current;
        typeof u == "function" ? u(w) : u && (u.current = w);
      }, [u, f.current, h.current]);
      const g = R(
        (w) => {
          const C = w, q = f.current ? f : h;
          return ((N) => {
            for (; N && N !== document.body; ) {
              if (N === q.current)
                return !0;
              N = N.parentNode;
            }
            return !1;
          })(C);
        },
        [f, h]
      ), { getHref: x, push: y } = qi(), v = R(
        (w) => {
        },
        // track("button-click", {
        //   content:
        //     eventName || (e.target as HTMLElement).textContent || "unknown",
        // }),
        // [track, eventName],
        [c]
      ), _ = R(
        (w) => {
          v(w), !e && (t || !a || !g(w.target) || a());
        },
        [v, a, g]
      );
      return n ? t ? /* @__PURE__ */ i(
        "a",
        {
          href: t ? n : x(n),
          ref: h,
          className: d,
          onClick: _,
          target: t ? "_blank" : void 0,
          children: o
        }
      ) : /* @__PURE__ */ i(
        ko,
        {
          to: n,
          ref: h,
          className: d,
          onClick: _,
          target: t ? "_blank" : void 0,
          children: o
        }
      ) : l ? /* @__PURE__ */ i(
        "button",
        {
          className: d,
          ref: f,
          onClick: v,
          type: "submit",
          disabled: e,
          style: r,
          children: o
        }
      ) : a ? /* @__PURE__ */ i(
        "button",
        {
          className: d,
          ref: f,
          onClick: _,
          disabled: e,
          style: r,
          children: o
        }
      ) : /* @__PURE__ */ i("div", { className: d, style: r, children: o });
    }
  )
), Kr = Q({ isDark: !0 }), ji = b(
  ({ children: e, ...t }) => {
    const r = F(Kr);
    return /* @__PURE__ */ i(Kr.Provider, { value: { ...r, ...t }, children: e });
  }
), Go = () => F(Kr), Vo = b(
  ({ src: e, className: t, alt: r }) => /* @__PURE__ */ i("img", { src: e, className: t, alt: r })
), Ho = b(
  ({ src: e, type: t, width: r, height: n, sizes: a = 3, className: o, alt: s }) => {
    const l = window.devicePixelRatio || 1, c = k(
      () => Array.from(
        { length: a - 1 },
        (u, d) => {
          const f = d + 2;
          return {
            srcSet: `${e.replace(
              `.${t}`,
              `@${f}x.${t}`
            )} ${f}x`,
            media: `(min-width: ${r / l}px) and (min-height: ${n / l}px)`,
            type: `image/${t}`
          };
        }
      ),
      [e, a, t, r, n, l]
    );
    return /* @__PURE__ */ p("picture", { className: o, children: [
      c.map((u) => /* @__PURE__ */ i("source", { ...u }, u.srcSet)),
      /* @__PURE__ */ i(
        "img",
        {
          src: e,
          alt: s,
          className: "w-full h-full object-contain object-center "
        }
      )
    ] });
  }
), J = b((e) => {
  switch (e.type) {
    case "png":
    case "jpg":
      return /* @__PURE__ */ i(Ho, { ...e });
    case "svg":
      return /* @__PURE__ */ i(Vo, { ...e });
  }
}), Ee = b(
  ({ className: e }) => {
    const { isDark: t } = Go();
    return /* @__PURE__ */ i(
      "div",
      {
        className: m("flex justify-center items-center", e),
        children: /* @__PURE__ */ p("div", { className: "relative w-6 h-6", children: [
          /* @__PURE__ */ i(
            J,
            {
              type: "svg",
              src: `/icons/loading${t ? "" : "-dark"}-inner.svg`,
              alt: "Loading spinner inner",
              className: "w-6 h-6 opacity-30"
            }
          ),
          /* @__PURE__ */ i(
            J,
            {
              type: "svg",
              src: `/icons/loading${t ? "" : "-dark"}-outer.svg`,
              alt: "Loading spinner outer",
              className: "absolute object-cover animate-stepped-spin left-0 top-0 w-6 h-6"
            }
          )
        ] })
      }
    );
  }
), Ai = Q({
  register: () => {
  },
  unRegister: () => {
  },
  getStackIndex: () => -1
}), Ko = b(
  ({ children: e }) => {
    const [t, r] = M([]), n = R(
      (s) => r((l) => [...l, s]),
      []
    ), a = R(
      (s) => r((l) => l.filter((c) => c !== s)),
      []
    ), o = R(
      (s) => t.length - t.indexOf(s) - 1,
      [t]
    );
    return /* @__PURE__ */ i(Ai.Provider, { value: { register: n, unRegister: a, getStackIndex: o }, children: e });
  }
), $o = (e) => {
  const { register: t, unRegister: r, getStackIndex: n } = F(Ai), a = X();
  return B(() => (e ? t(a) : r(a), () => r(a)), [a, e]), B(() => () => r(a), []), k(() => n(a), [a, n]);
}, Wo = ["zkpoker", "purepoker"], $r = Q({ theme: "zkpoker" }), Xo = b(
  ({ children: e, ...t }) => {
    const r = F($r);
    return B(() => {
      document.documentElement.setAttribute("data-theme", t.theme), Wo.forEach((n) => document.documentElement.classList.remove(n)), document.documentElement.classList.add(t.theme);
    }, [t.theme]), /* @__PURE__ */ i($r.Provider, { value: { ...r, ...t }, children: e });
  }
), ae = () => F($r), xc = b(({ children: e, ...t }) => /* @__PURE__ */ i(Xo, { ...t, children: /* @__PURE__ */ i(ji, { isDark: !0, children: /* @__PURE__ */ i(Ko, { children: e }) }) })), de = b(
  ({
    onClick: e,
    href: t,
    isOutLink: r = !1,
    isLoading: n = !1,
    className: a,
    children: o,
    color: s,
    purpose: l,
    variant: c = "filled"
  }) => {
    const { theme: u } = ae(), d = k(() => {
      const f = u === "purepoker" ? "orange" : "green";
      switch (l) {
        case "primary":
          return f;
        case "secondary":
          return "purple";
        case "error":
          return "red";
        default:
          return s || f;
      }
    }, [s, l, u]);
    return /* @__PURE__ */ p(
      z,
      {
        onClick: e,
        href: t,
        isOutLink: r,
        className: m(
          "rounded-[10px] leading-none group flex flex-row justify-center items-center type-button-1 cursor-pointer",
          a,
          {
            "px-5 h-[52px] border-2": c !== "material",
            "h-11 w-11 material": c === "material",
            "text-white": c === "filled",
            "border-transparent": c === "naked",
            "transition-all duration-75 origin-center active:scale-95 active:shadow-none": c !== "naked",
            "border-green-400": c !== "naked" && d === "green",
            "border-red-400": c !== "naked" && d === "red",
            "border-blue-500": c !== "naked" && d === "blue",
            "border-neutral-100": c !== "naked" && d === "grey",
            "border-black": c !== "naked" && d === "black",
            "bg-black": c === "filled" && d === "black",
            relative: !a?.includes("absolute")
          },
          u === "purepoker" && [
            "bg-linear-70 from-5% via-10% to-90% shadow-inner",
            {
              "from-green-500 via-green-400 to-green-600": c === "filled" && d === "green",
              "from-primary-500 via-primary-400 to-primary-500": c === "filled" && d === "orange",
              "border-primary-400": c !== "naked" && d === "orange",
              "from-red-500 via-red-400 to-red-500": c === "filled" && d === "red",
              "from-blue-600 via-blue-500 to-blue-600": c === "filled" && d === "blue",
              "from-fuchsia-500 via-fuchsia-400 to-fuchsia-500": c === "filled" && d === "purple",
              "border-fuchsia-400": c !== "naked" && d === "purple",
              "from-neutral-300 to-neutral-200": c === "filled" && d === "grey"
            }
          ],
          u === "zkpoker" && {
            "border-orange-400": c !== "naked" && d === "orange",
            "border-purple-400": c !== "naked" && d === "purple",
            "bg-green-500": c === "filled" && d === "green",
            "bg-orange-500": c === "filled" && d === "orange",
            "bg-red-500": c === "filled" && d === "red",
            "bg-blue-600": c === "filled" && d === "blue",
            "bg-purple-500": c === "filled" && d === "purple",
            "bg-neutral-200": c === "filled" && d === "grey"
          }
        ),
        disabled: n,
        children: [
          d !== "black" && /* @__PURE__ */ i("div", { className: "absolute pointer-events-none z-[0] inset-0 overflow-hidden rounded-[8px]", children: /* @__PURE__ */ i(
            "div",
            {
              className: m(
                "absolute pointer-events-none origin-right group-active:origin-left z-[0] left-0 w-full top-1/2 blur-2xl -translate-y-1/2 aspect-square scale-x-0 transition-transform group-active:scale-x-125 duration-[150ms] group-active:duration-[750ms] ease-out",
                {
                  "bg-green-400": c === "filled" && d === "green",
                  "bg-orange-400": c === "filled" && d === "orange" && u === "zkpoker",
                  "bg-primary-400": c === "filled" && d === "orange" && u === "purepoker",
                  "bg-red-400": c === "filled" && d === "red",
                  "bg-purple-400": c === "filled" && d === "purple",
                  "bg-neutral-100": c === "filled" && d === "grey"
                }
              )
            }
          ) }),
          n && /* @__PURE__ */ i(Ee, { className: "absolute inset-0" }),
          /* @__PURE__ */ i(
            "div",
            {
              className: m(
                "transition-opacity duration-75 relative z-[1] flex flex-row flex-nowrap whitespace-nowrap justify-center items-center gap-1",
                {
                  "text-green-500": c !== "filled" && d === "green",
                  "text-orange-500": c !== "filled" && d === "orange" && u === "zkpoker",
                  "text-primary-500": c !== "filled" && d === "orange" && u === "purepoker",
                  "text-red-500": c !== "filled" && d === "red",
                  "text-purple-500": c !== "filled" && d === "purple",
                  "text-blue-500": c !== "filled" && d === "blue",
                  "text-neutral-200": c !== "filled" && d === "grey",
                  "text-black": c !== "filled" && d === "black",
                  "opacity-0": n
                }
              ),
              children: o
            }
          )
        ]
      }
    );
  }
);
var Re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Yo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $e, wn;
function Jo() {
  if (wn) return $e;
  wn = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return $e = e, $e;
}
var We, _n;
function Mi() {
  if (_n) return We;
  _n = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return We = e, We;
}
var Xe, Cn;
function Be() {
  if (Cn) return Xe;
  Cn = 1;
  var e = Mi();
  function t(r, n) {
    for (var a = r.length; a--; )
      if (e(r[a][0], n))
        return a;
    return -1;
  }
  return Xe = t, Xe;
}
var Ye, Nn;
function Qo() {
  if (Nn) return Ye;
  Nn = 1;
  var e = Be(), t = Array.prototype, r = t.splice;
  function n(a) {
    var o = this.__data__, s = e(o, a);
    if (s < 0)
      return !1;
    var l = o.length - 1;
    return s == l ? o.pop() : r.call(o, s, 1), --this.size, !0;
  }
  return Ye = n, Ye;
}
var Je, Sn;
function Zo() {
  if (Sn) return Je;
  Sn = 1;
  var e = Be();
  function t(r) {
    var n = this.__data__, a = e(n, r);
    return a < 0 ? void 0 : n[a][1];
  }
  return Je = t, Je;
}
var Qe, kn;
function es() {
  if (kn) return Qe;
  kn = 1;
  var e = Be();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return Qe = t, Qe;
}
var Ze, In;
function ts() {
  if (In) return Ze;
  In = 1;
  var e = Be();
  function t(r, n) {
    var a = this.__data__, o = e(a, r);
    return o < 0 ? (++this.size, a.push([r, n])) : a[o][1] = n, this;
  }
  return Ze = t, Ze;
}
var et, Tn;
function Le() {
  if (Tn) return et;
  Tn = 1;
  var e = Jo(), t = Qo(), r = Zo(), n = es(), a = ts();
  function o(s) {
    var l = -1, c = s == null ? 0 : s.length;
    for (this.clear(); ++l < c; ) {
      var u = s[l];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = r, o.prototype.has = n, o.prototype.set = a, et = o, et;
}
var tt, qn;
function rs() {
  if (qn) return tt;
  qn = 1;
  var e = Le();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return tt = t, tt;
}
var rt, jn;
function ns() {
  if (jn) return rt;
  jn = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return rt = e, rt;
}
var nt, An;
function as() {
  if (An) return nt;
  An = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return nt = e, nt;
}
var at, Mn;
function is() {
  if (Mn) return at;
  Mn = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return at = e, at;
}
var it, Rn;
function Ri() {
  if (Rn) return it;
  Rn = 1;
  var e = typeof Re == "object" && Re && Re.Object === Object && Re;
  return it = e, it;
}
var ot, On;
function Z() {
  if (On) return ot;
  On = 1;
  var e = Ri(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return ot = r, ot;
}
var st, En;
function Yr() {
  if (En) return st;
  En = 1;
  var e = Z(), t = e.Symbol;
  return st = t, st;
}
var lt, Bn;
function os() {
  if (Bn) return lt;
  Bn = 1;
  var e = Yr(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, a = e ? e.toStringTag : void 0;
  function o(s) {
    var l = r.call(s, a), c = s[a];
    try {
      s[a] = void 0;
      var u = !0;
    } catch {
    }
    var d = n.call(s);
    return u && (l ? s[a] = c : delete s[a]), d;
  }
  return lt = o, lt;
}
var ct, Ln;
function ss() {
  if (Ln) return ct;
  Ln = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return ct = r, ct;
}
var ut, Pn;
function Pe() {
  if (Pn) return ut;
  Pn = 1;
  var e = Yr(), t = os(), r = ss(), n = "[object Null]", a = "[object Undefined]", o = e ? e.toStringTag : void 0;
  function s(l) {
    return l == null ? l === void 0 ? a : n : o && o in Object(l) ? t(l) : r(l);
  }
  return ut = s, ut;
}
var dt, Dn;
function Ne() {
  if (Dn) return dt;
  Dn = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return dt = e, dt;
}
var ft, zn;
function Oi() {
  if (zn) return ft;
  zn = 1;
  var e = Pe(), t = Ne(), r = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", o = "[object Proxy]";
  function s(l) {
    if (!t(l))
      return !1;
    var c = e(l);
    return c == n || c == a || c == r || c == o;
  }
  return ft = s, ft;
}
var pt, Fn;
function ls() {
  if (Fn) return pt;
  Fn = 1;
  var e = Z(), t = e["__core-js_shared__"];
  return pt = t, pt;
}
var ht, Un;
function cs() {
  if (Un) return ht;
  Un = 1;
  var e = ls(), t = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function r(n) {
    return !!t && t in n;
  }
  return ht = r, ht;
}
var mt, Gn;
function Ei() {
  if (Gn) return mt;
  Gn = 1;
  var e = Function.prototype, t = e.toString;
  function r(n) {
    if (n != null) {
      try {
        return t.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return mt = r, mt;
}
var gt, Vn;
function us() {
  if (Vn) return gt;
  Vn = 1;
  var e = Oi(), t = cs(), r = Ne(), n = Ei(), a = /[\\^$.*+?()[\]{}|]/g, o = /^\[object .+?Constructor\]$/, s = Function.prototype, l = Object.prototype, c = s.toString, u = l.hasOwnProperty, d = RegExp(
    "^" + c.call(u).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function f(h) {
    if (!r(h) || t(h))
      return !1;
    var g = e(h) ? d : o;
    return g.test(n(h));
  }
  return gt = f, gt;
}
var vt, Hn;
function ds() {
  if (Hn) return vt;
  Hn = 1;
  function e(t, r) {
    return t?.[r];
  }
  return vt = e, vt;
}
var yt, Kn;
function ie() {
  if (Kn) return yt;
  Kn = 1;
  var e = us(), t = ds();
  function r(n, a) {
    var o = t(n, a);
    return e(o) ? o : void 0;
  }
  return yt = r, yt;
}
var bt, $n;
function Jr() {
  if ($n) return bt;
  $n = 1;
  var e = ie(), t = Z(), r = e(t, "Map");
  return bt = r, bt;
}
var xt, Wn;
function De() {
  if (Wn) return xt;
  Wn = 1;
  var e = ie(), t = e(Object, "create");
  return xt = t, xt;
}
var wt, Xn;
function fs() {
  if (Xn) return wt;
  Xn = 1;
  var e = De();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return wt = t, wt;
}
var _t, Yn;
function ps() {
  if (Yn) return _t;
  Yn = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return _t = e, _t;
}
var Ct, Jn;
function hs() {
  if (Jn) return Ct;
  Jn = 1;
  var e = De(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function a(o) {
    var s = this.__data__;
    if (e) {
      var l = s[o];
      return l === t ? void 0 : l;
    }
    return n.call(s, o) ? s[o] : void 0;
  }
  return Ct = a, Ct;
}
var Nt, Qn;
function ms() {
  if (Qn) return Nt;
  Qn = 1;
  var e = De(), t = Object.prototype, r = t.hasOwnProperty;
  function n(a) {
    var o = this.__data__;
    return e ? o[a] !== void 0 : r.call(o, a);
  }
  return Nt = n, Nt;
}
var St, Zn;
function gs() {
  if (Zn) return St;
  Zn = 1;
  var e = De(), t = "__lodash_hash_undefined__";
  function r(n, a) {
    var o = this.__data__;
    return this.size += this.has(n) ? 0 : 1, o[n] = e && a === void 0 ? t : a, this;
  }
  return St = r, St;
}
var kt, ea;
function vs() {
  if (ea) return kt;
  ea = 1;
  var e = fs(), t = ps(), r = hs(), n = ms(), a = gs();
  function o(s) {
    var l = -1, c = s == null ? 0 : s.length;
    for (this.clear(); ++l < c; ) {
      var u = s[l];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = r, o.prototype.has = n, o.prototype.set = a, kt = o, kt;
}
var It, ta;
function ys() {
  if (ta) return It;
  ta = 1;
  var e = vs(), t = Le(), r = Jr();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return It = n, It;
}
var Tt, ra;
function bs() {
  if (ra) return Tt;
  ra = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Tt = e, Tt;
}
var qt, na;
function ze() {
  if (na) return qt;
  na = 1;
  var e = bs();
  function t(r, n) {
    var a = r.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return qt = t, qt;
}
var jt, aa;
function xs() {
  if (aa) return jt;
  aa = 1;
  var e = ze();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return jt = t, jt;
}
var At, ia;
function ws() {
  if (ia) return At;
  ia = 1;
  var e = ze();
  function t(r) {
    return e(this, r).get(r);
  }
  return At = t, At;
}
var Mt, oa;
function _s() {
  if (oa) return Mt;
  oa = 1;
  var e = ze();
  function t(r) {
    return e(this, r).has(r);
  }
  return Mt = t, Mt;
}
var Rt, sa;
function Cs() {
  if (sa) return Rt;
  sa = 1;
  var e = ze();
  function t(r, n) {
    var a = e(this, r), o = a.size;
    return a.set(r, n), this.size += a.size == o ? 0 : 1, this;
  }
  return Rt = t, Rt;
}
var Ot, la;
function Ns() {
  if (la) return Ot;
  la = 1;
  var e = ys(), t = xs(), r = ws(), n = _s(), a = Cs();
  function o(s) {
    var l = -1, c = s == null ? 0 : s.length;
    for (this.clear(); ++l < c; ) {
      var u = s[l];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = r, o.prototype.has = n, o.prototype.set = a, Ot = o, Ot;
}
var Et, ca;
function Ss() {
  if (ca) return Et;
  ca = 1;
  var e = Le(), t = Jr(), r = Ns(), n = 200;
  function a(o, s) {
    var l = this.__data__;
    if (l instanceof e) {
      var c = l.__data__;
      if (!t || c.length < n - 1)
        return c.push([o, s]), this.size = ++l.size, this;
      l = this.__data__ = new r(c);
    }
    return l.set(o, s), this.size = l.size, this;
  }
  return Et = a, Et;
}
var Bt, ua;
function ks() {
  if (ua) return Bt;
  ua = 1;
  var e = Le(), t = rs(), r = ns(), n = as(), a = is(), o = Ss();
  function s(l) {
    var c = this.__data__ = new e(l);
    this.size = c.size;
  }
  return s.prototype.clear = t, s.prototype.delete = r, s.prototype.get = n, s.prototype.has = a, s.prototype.set = o, Bt = s, Bt;
}
var Lt, da;
function Is() {
  if (da) return Lt;
  da = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a && r(t[n], n, t) !== !1; )
      ;
    return t;
  }
  return Lt = e, Lt;
}
var Pt, fa;
function Ts() {
  if (fa) return Pt;
  fa = 1;
  var e = ie(), t = function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  }();
  return Pt = t, Pt;
}
var Dt, pa;
function Bi() {
  if (pa) return Dt;
  pa = 1;
  var e = Ts();
  function t(r, n, a) {
    n == "__proto__" && e ? e(r, n, {
      configurable: !0,
      enumerable: !0,
      value: a,
      writable: !0
    }) : r[n] = a;
  }
  return Dt = t, Dt;
}
var zt, ha;
function Li() {
  if (ha) return zt;
  ha = 1;
  var e = Bi(), t = Mi(), r = Object.prototype, n = r.hasOwnProperty;
  function a(o, s, l) {
    var c = o[s];
    (!(n.call(o, s) && t(c, l)) || l === void 0 && !(s in o)) && e(o, s, l);
  }
  return zt = a, zt;
}
var Ft, ma;
function Fe() {
  if (ma) return Ft;
  ma = 1;
  var e = Li(), t = Bi();
  function r(n, a, o, s) {
    var l = !o;
    o || (o = {});
    for (var c = -1, u = a.length; ++c < u; ) {
      var d = a[c], f = s ? s(o[d], n[d], d, o, n) : void 0;
      f === void 0 && (f = n[d]), l ? t(o, d, f) : e(o, d, f);
    }
    return o;
  }
  return Ft = r, Ft;
}
var Ut, ga;
function qs() {
  if (ga) return Ut;
  ga = 1;
  function e(t, r) {
    for (var n = -1, a = Array(t); ++n < t; )
      a[n] = r(n);
    return a;
  }
  return Ut = e, Ut;
}
var Gt, va;
function Se() {
  if (va) return Gt;
  va = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Gt = e, Gt;
}
var Vt, ya;
function js() {
  if (ya) return Vt;
  ya = 1;
  var e = Pe(), t = Se(), r = "[object Arguments]";
  function n(a) {
    return t(a) && e(a) == r;
  }
  return Vt = n, Vt;
}
var Ht, ba;
function As() {
  if (ba) return Ht;
  ba = 1;
  var e = js(), t = Se(), r = Object.prototype, n = r.hasOwnProperty, a = r.propertyIsEnumerable, o = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(s) {
    return t(s) && n.call(s, "callee") && !a.call(s, "callee");
  };
  return Ht = o, Ht;
}
var Kt, xa;
function Qr() {
  if (xa) return Kt;
  xa = 1;
  var e = Array.isArray;
  return Kt = e, Kt;
}
var be = { exports: {} }, $t, wa;
function Ms() {
  if (wa) return $t;
  wa = 1;
  function e() {
    return !1;
  }
  return $t = e, $t;
}
be.exports;
var _a;
function Pi() {
  return _a || (_a = 1, function(e, t) {
    var r = Z(), n = Ms(), a = t && !t.nodeType && t, o = a && !0 && e && !e.nodeType && e, s = o && o.exports === a, l = s ? r.Buffer : void 0, c = l ? l.isBuffer : void 0, u = c || n;
    e.exports = u;
  }(be, be.exports)), be.exports;
}
var Wt, Ca;
function Rs() {
  if (Ca) return Wt;
  Ca = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, a) {
    var o = typeof n;
    return a = a ?? e, !!a && (o == "number" || o != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return Wt = r, Wt;
}
var Xt, Na;
function Di() {
  if (Na) return Xt;
  Na = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return Xt = t, Xt;
}
var Yt, Sa;
function Os() {
  if (Sa) return Yt;
  Sa = 1;
  var e = Pe(), t = Di(), r = Se(), n = "[object Arguments]", a = "[object Array]", o = "[object Boolean]", s = "[object Date]", l = "[object Error]", c = "[object Function]", u = "[object Map]", d = "[object Number]", f = "[object Object]", h = "[object RegExp]", g = "[object Set]", x = "[object String]", y = "[object WeakMap]", v = "[object ArrayBuffer]", _ = "[object DataView]", w = "[object Float32Array]", C = "[object Float64Array]", q = "[object Int8Array]", I = "[object Int16Array]", N = "[object Int32Array]", O = "[object Uint8Array]", G = "[object Uint8ClampedArray]", j = "[object Uint16Array]", P = "[object Uint32Array]", S = {};
  S[w] = S[C] = S[q] = S[I] = S[N] = S[O] = S[G] = S[j] = S[P] = !0, S[n] = S[a] = S[v] = S[o] = S[_] = S[s] = S[l] = S[c] = S[u] = S[d] = S[f] = S[h] = S[g] = S[x] = S[y] = !1;
  function A(T) {
    return r(T) && t(T.length) && !!S[e(T)];
  }
  return Yt = A, Yt;
}
var Jt, ka;
function Zr() {
  if (ka) return Jt;
  ka = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return Jt = e, Jt;
}
var xe = { exports: {} };
xe.exports;
var Ia;
function en() {
  return Ia || (Ia = 1, function(e, t) {
    var r = Ri(), n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, o = a && a.exports === n, s = o && r.process, l = function() {
      try {
        var c = a && a.require && a.require("util").types;
        return c || s && s.binding && s.binding("util");
      } catch {
      }
    }();
    e.exports = l;
  }(xe, xe.exports)), xe.exports;
}
var Qt, Ta;
function Es() {
  if (Ta) return Qt;
  Ta = 1;
  var e = Os(), t = Zr(), r = en(), n = r && r.isTypedArray, a = n ? t(n) : e;
  return Qt = a, Qt;
}
var Zt, qa;
function zi() {
  if (qa) return Zt;
  qa = 1;
  var e = qs(), t = As(), r = Qr(), n = Pi(), a = Rs(), o = Es(), s = Object.prototype, l = s.hasOwnProperty;
  function c(u, d) {
    var f = r(u), h = !f && t(u), g = !f && !h && n(u), x = !f && !h && !g && o(u), y = f || h || g || x, v = y ? e(u.length, String) : [], _ = v.length;
    for (var w in u)
      (d || l.call(u, w)) && !(y && // Safari 9 has enumerable `arguments.length` in strict mode.
      (w == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      g && (w == "offset" || w == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      x && (w == "buffer" || w == "byteLength" || w == "byteOffset") || // Skip index properties.
      a(w, _))) && v.push(w);
    return v;
  }
  return Zt = c, Zt;
}
var er, ja;
function tn() {
  if (ja) return er;
  ja = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, a = typeof n == "function" && n.prototype || e;
    return r === a;
  }
  return er = t, er;
}
var tr, Aa;
function Fi() {
  if (Aa) return tr;
  Aa = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return tr = e, tr;
}
var rr, Ma;
function Bs() {
  if (Ma) return rr;
  Ma = 1;
  var e = Fi(), t = e(Object.keys, Object);
  return rr = t, rr;
}
var nr, Ra;
function Ls() {
  if (Ra) return nr;
  Ra = 1;
  var e = tn(), t = Bs(), r = Object.prototype, n = r.hasOwnProperty;
  function a(o) {
    if (!e(o))
      return t(o);
    var s = [];
    for (var l in Object(o))
      n.call(o, l) && l != "constructor" && s.push(l);
    return s;
  }
  return nr = a, nr;
}
var ar, Oa;
function Ui() {
  if (Oa) return ar;
  Oa = 1;
  var e = Oi(), t = Di();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return ar = r, ar;
}
var ir, Ea;
function rn() {
  if (Ea) return ir;
  Ea = 1;
  var e = zi(), t = Ls(), r = Ui();
  function n(a) {
    return r(a) ? e(a) : t(a);
  }
  return ir = n, ir;
}
var or, Ba;
function Ps() {
  if (Ba) return or;
  Ba = 1;
  var e = Fe(), t = rn();
  function r(n, a) {
    return n && e(a, t(a), n);
  }
  return or = r, or;
}
var sr, La;
function Ds() {
  if (La) return sr;
  La = 1;
  function e(t) {
    var r = [];
    if (t != null)
      for (var n in Object(t))
        r.push(n);
    return r;
  }
  return sr = e, sr;
}
var lr, Pa;
function zs() {
  if (Pa) return lr;
  Pa = 1;
  var e = Ne(), t = tn(), r = Ds(), n = Object.prototype, a = n.hasOwnProperty;
  function o(s) {
    if (!e(s))
      return r(s);
    var l = t(s), c = [];
    for (var u in s)
      u == "constructor" && (l || !a.call(s, u)) || c.push(u);
    return c;
  }
  return lr = o, lr;
}
var cr, Da;
function nn() {
  if (Da) return cr;
  Da = 1;
  var e = zi(), t = zs(), r = Ui();
  function n(a) {
    return r(a) ? e(a, !0) : t(a);
  }
  return cr = n, cr;
}
var ur, za;
function Fs() {
  if (za) return ur;
  za = 1;
  var e = Fe(), t = nn();
  function r(n, a) {
    return n && e(a, t(a), n);
  }
  return ur = r, ur;
}
var we = { exports: {} };
we.exports;
var Fa;
function Us() {
  return Fa || (Fa = 1, function(e, t) {
    var r = Z(), n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, o = a && a.exports === n, s = o ? r.Buffer : void 0, l = s ? s.allocUnsafe : void 0;
    function c(u, d) {
      if (d)
        return u.slice();
      var f = u.length, h = l ? l(f) : new u.constructor(f);
      return u.copy(h), h;
    }
    e.exports = c;
  }(we, we.exports)), we.exports;
}
var dr, Ua;
function Gs() {
  if (Ua) return dr;
  Ua = 1;
  function e(t, r) {
    var n = -1, a = t.length;
    for (r || (r = Array(a)); ++n < a; )
      r[n] = t[n];
    return r;
  }
  return dr = e, dr;
}
var fr, Ga;
function Vs() {
  if (Ga) return fr;
  Ga = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, o = 0, s = []; ++n < a; ) {
      var l = t[n];
      r(l, n, t) && (s[o++] = l);
    }
    return s;
  }
  return fr = e, fr;
}
var pr, Va;
function Gi() {
  if (Va) return pr;
  Va = 1;
  function e() {
    return [];
  }
  return pr = e, pr;
}
var hr, Ha;
function an() {
  if (Ha) return hr;
  Ha = 1;
  var e = Vs(), t = Gi(), r = Object.prototype, n = r.propertyIsEnumerable, a = Object.getOwnPropertySymbols, o = a ? function(s) {
    return s == null ? [] : (s = Object(s), e(a(s), function(l) {
      return n.call(s, l);
    }));
  } : t;
  return hr = o, hr;
}
var mr, Ka;
function Hs() {
  if (Ka) return mr;
  Ka = 1;
  var e = Fe(), t = an();
  function r(n, a) {
    return e(n, t(n), a);
  }
  return mr = r, mr;
}
var gr, $a;
function Vi() {
  if ($a) return gr;
  $a = 1;
  function e(t, r) {
    for (var n = -1, a = r.length, o = t.length; ++n < a; )
      t[o + n] = r[n];
    return t;
  }
  return gr = e, gr;
}
var vr, Wa;
function Hi() {
  if (Wa) return vr;
  Wa = 1;
  var e = Fi(), t = e(Object.getPrototypeOf, Object);
  return vr = t, vr;
}
var yr, Xa;
function Ki() {
  if (Xa) return yr;
  Xa = 1;
  var e = Vi(), t = Hi(), r = an(), n = Gi(), a = Object.getOwnPropertySymbols, o = a ? function(s) {
    for (var l = []; s; )
      e(l, r(s)), s = t(s);
    return l;
  } : n;
  return yr = o, yr;
}
var br, Ya;
function Ks() {
  if (Ya) return br;
  Ya = 1;
  var e = Fe(), t = Ki();
  function r(n, a) {
    return e(n, t(n), a);
  }
  return br = r, br;
}
var xr, Ja;
function $i() {
  if (Ja) return xr;
  Ja = 1;
  var e = Vi(), t = Qr();
  function r(n, a, o) {
    var s = a(n);
    return t(n) ? s : e(s, o(n));
  }
  return xr = r, xr;
}
var wr, Qa;
function $s() {
  if (Qa) return wr;
  Qa = 1;
  var e = $i(), t = an(), r = rn();
  function n(a) {
    return e(a, r, t);
  }
  return wr = n, wr;
}
var _r, Za;
function Ws() {
  if (Za) return _r;
  Za = 1;
  var e = $i(), t = Ki(), r = nn();
  function n(a) {
    return e(a, r, t);
  }
  return _r = n, _r;
}
var Cr, ei;
function Xs() {
  if (ei) return Cr;
  ei = 1;
  var e = ie(), t = Z(), r = e(t, "DataView");
  return Cr = r, Cr;
}
var Nr, ti;
function Ys() {
  if (ti) return Nr;
  ti = 1;
  var e = ie(), t = Z(), r = e(t, "Promise");
  return Nr = r, Nr;
}
var Sr, ri;
function Js() {
  if (ri) return Sr;
  ri = 1;
  var e = ie(), t = Z(), r = e(t, "Set");
  return Sr = r, Sr;
}
var kr, ni;
function Qs() {
  if (ni) return kr;
  ni = 1;
  var e = ie(), t = Z(), r = e(t, "WeakMap");
  return kr = r, kr;
}
var Ir, ai;
function on() {
  if (ai) return Ir;
  ai = 1;
  var e = Xs(), t = Jr(), r = Ys(), n = Js(), a = Qs(), o = Pe(), s = Ei(), l = "[object Map]", c = "[object Object]", u = "[object Promise]", d = "[object Set]", f = "[object WeakMap]", h = "[object DataView]", g = s(e), x = s(t), y = s(r), v = s(n), _ = s(a), w = o;
  return (e && w(new e(new ArrayBuffer(1))) != h || t && w(new t()) != l || r && w(r.resolve()) != u || n && w(new n()) != d || a && w(new a()) != f) && (w = function(C) {
    var q = o(C), I = q == c ? C.constructor : void 0, N = I ? s(I) : "";
    if (N)
      switch (N) {
        case g:
          return h;
        case x:
          return l;
        case y:
          return u;
        case v:
          return d;
        case _:
          return f;
      }
    return q;
  }), Ir = w, Ir;
}
var Tr, ii;
function Zs() {
  if (ii) return Tr;
  ii = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function r(n) {
    var a = n.length, o = new n.constructor(a);
    return a && typeof n[0] == "string" && t.call(n, "index") && (o.index = n.index, o.input = n.input), o;
  }
  return Tr = r, Tr;
}
var qr, oi;
function el() {
  if (oi) return qr;
  oi = 1;
  var e = Z(), t = e.Uint8Array;
  return qr = t, qr;
}
var jr, si;
function sn() {
  if (si) return jr;
  si = 1;
  var e = el();
  function t(r) {
    var n = new r.constructor(r.byteLength);
    return new e(n).set(new e(r)), n;
  }
  return jr = t, jr;
}
var Ar, li;
function tl() {
  if (li) return Ar;
  li = 1;
  var e = sn();
  function t(r, n) {
    var a = n ? e(r.buffer) : r.buffer;
    return new r.constructor(a, r.byteOffset, r.byteLength);
  }
  return Ar = t, Ar;
}
var Mr, ci;
function rl() {
  if (ci) return Mr;
  ci = 1;
  var e = /\w*$/;
  function t(r) {
    var n = new r.constructor(r.source, e.exec(r));
    return n.lastIndex = r.lastIndex, n;
  }
  return Mr = t, Mr;
}
var Rr, ui;
function nl() {
  if (ui) return Rr;
  ui = 1;
  var e = Yr(), t = e ? e.prototype : void 0, r = t ? t.valueOf : void 0;
  function n(a) {
    return r ? Object(r.call(a)) : {};
  }
  return Rr = n, Rr;
}
var Or, di;
function al() {
  if (di) return Or;
  di = 1;
  var e = sn();
  function t(r, n) {
    var a = n ? e(r.buffer) : r.buffer;
    return new r.constructor(a, r.byteOffset, r.length);
  }
  return Or = t, Or;
}
var Er, fi;
function il() {
  if (fi) return Er;
  fi = 1;
  var e = sn(), t = tl(), r = rl(), n = nl(), a = al(), o = "[object Boolean]", s = "[object Date]", l = "[object Map]", c = "[object Number]", u = "[object RegExp]", d = "[object Set]", f = "[object String]", h = "[object Symbol]", g = "[object ArrayBuffer]", x = "[object DataView]", y = "[object Float32Array]", v = "[object Float64Array]", _ = "[object Int8Array]", w = "[object Int16Array]", C = "[object Int32Array]", q = "[object Uint8Array]", I = "[object Uint8ClampedArray]", N = "[object Uint16Array]", O = "[object Uint32Array]";
  function G(j, P, S) {
    var A = j.constructor;
    switch (P) {
      case g:
        return e(j);
      case o:
      case s:
        return new A(+j);
      case x:
        return t(j, S);
      case y:
      case v:
      case _:
      case w:
      case C:
      case q:
      case I:
      case N:
      case O:
        return a(j, S);
      case l:
        return new A();
      case c:
      case f:
        return new A(j);
      case u:
        return r(j);
      case d:
        return new A();
      case h:
        return n(j);
    }
  }
  return Er = G, Er;
}
var Br, pi;
function ol() {
  if (pi) return Br;
  pi = 1;
  var e = Ne(), t = Object.create, r = /* @__PURE__ */ function() {
    function n() {
    }
    return function(a) {
      if (!e(a))
        return {};
      if (t)
        return t(a);
      n.prototype = a;
      var o = new n();
      return n.prototype = void 0, o;
    };
  }();
  return Br = r, Br;
}
var Lr, hi;
function sl() {
  if (hi) return Lr;
  hi = 1;
  var e = ol(), t = Hi(), r = tn();
  function n(a) {
    return typeof a.constructor == "function" && !r(a) ? e(t(a)) : {};
  }
  return Lr = n, Lr;
}
var Pr, mi;
function ll() {
  if (mi) return Pr;
  mi = 1;
  var e = on(), t = Se(), r = "[object Map]";
  function n(a) {
    return t(a) && e(a) == r;
  }
  return Pr = n, Pr;
}
var Dr, gi;
function cl() {
  if (gi) return Dr;
  gi = 1;
  var e = ll(), t = Zr(), r = en(), n = r && r.isMap, a = n ? t(n) : e;
  return Dr = a, Dr;
}
var zr, vi;
function ul() {
  if (vi) return zr;
  vi = 1;
  var e = on(), t = Se(), r = "[object Set]";
  function n(a) {
    return t(a) && e(a) == r;
  }
  return zr = n, zr;
}
var Fr, yi;
function dl() {
  if (yi) return Fr;
  yi = 1;
  var e = ul(), t = Zr(), r = en(), n = r && r.isSet, a = n ? t(n) : e;
  return Fr = a, Fr;
}
var Ur, bi;
function fl() {
  if (bi) return Ur;
  bi = 1;
  var e = ks(), t = Is(), r = Li(), n = Ps(), a = Fs(), o = Us(), s = Gs(), l = Hs(), c = Ks(), u = $s(), d = Ws(), f = on(), h = Zs(), g = il(), x = sl(), y = Qr(), v = Pi(), _ = cl(), w = Ne(), C = dl(), q = rn(), I = nn(), N = 1, O = 2, G = 4, j = "[object Arguments]", P = "[object Array]", S = "[object Boolean]", A = "[object Date]", T = "[object Error]", Y = "[object Function]", ge = "[object GeneratorFunction]", K = "[object Map]", ro = "[object Number]", hn = "[object Object]", no = "[object RegExp]", ao = "[object Set]", io = "[object String]", oo = "[object Symbol]", so = "[object WeakMap]", lo = "[object ArrayBuffer]", co = "[object DataView]", uo = "[object Float32Array]", fo = "[object Float64Array]", po = "[object Int8Array]", ho = "[object Int16Array]", mo = "[object Int32Array]", go = "[object Uint8Array]", vo = "[object Uint8ClampedArray]", yo = "[object Uint16Array]", bo = "[object Uint32Array]", D = {};
  D[j] = D[P] = D[lo] = D[co] = D[S] = D[A] = D[uo] = D[fo] = D[po] = D[ho] = D[mo] = D[K] = D[ro] = D[hn] = D[no] = D[ao] = D[io] = D[oo] = D[go] = D[vo] = D[yo] = D[bo] = !0, D[T] = D[Y] = D[so] = !1;
  function Te(L, se, le, xo, qe, ee) {
    var $, je = se & N, Ae = se & O, wo = se & G;
    if (le && ($ = qe ? le(L, xo, qe, ee) : le(L)), $ !== void 0)
      return $;
    if (!w(L))
      return L;
    var mn = y(L);
    if (mn) {
      if ($ = h(L), !je)
        return s(L, $);
    } else {
      var ce = f(L), gn = ce == Y || ce == ge;
      if (v(L))
        return o(L, je);
      if (ce == hn || ce == j || gn && !qe) {
        if ($ = Ae || gn ? {} : x(L), !je)
          return Ae ? c(L, a($, L)) : l(L, n($, L));
      } else {
        if (!D[ce])
          return qe ? L : {};
        $ = g(L, ce, je);
      }
    }
    ee || (ee = new e());
    var vn = ee.get(L);
    if (vn)
      return vn;
    ee.set(L, $), C(L) ? L.forEach(function(te) {
      $.add(Te(te, se, le, te, L, ee));
    }) : _(L) && L.forEach(function(te, ne) {
      $.set(ne, Te(te, se, le, ne, L, ee));
    });
    var _o = wo ? Ae ? d : u : Ae ? I : q, yn = mn ? void 0 : _o(L);
    return t(yn || L, function(te, ne) {
      yn && (ne = te, te = L[ne]), r($, ne, Te(te, se, le, ne, L, ee));
    }), $;
  }
  return Ur = Te, Ur;
}
var Gr, xi;
function pl() {
  if (xi) return Gr;
  xi = 1;
  var e = fl(), t = 1, r = 4;
  function n(a) {
    return e(a, t | r);
  }
  return Gr = n, Gr;
}
var hl = pl();
const ml = /* @__PURE__ */ Yo(hl), ln = Q({
  boxes: {},
  observe: () => () => {
  }
}), Vr = "rid", gl = () => {
  const [e, t] = M({}), r = R((n, a) => {
    const o = {};
    a ? o[n] = {
      width: Math.round(a.width),
      height: Math.round(a.height)
    } : delete o[n], t(ml({ ...o }));
  }, []);
  return [e, r];
}, wc = ({ children: e }) => {
  const [t, r] = gl(), [n, a] = M();
  B(() => {
    if (typeof window > "u") return;
    const l = new ResizeObserver((c) => {
      c?.filter((u) => u.contentRect).forEach(({ target: u, contentRect: d }) => {
        const f = u;
        if (!f?.dataset || !(Vr in f.dataset)) return;
        const h = u?.dataset[Vr];
        h && r(h, d);
      });
    });
    return a(l), () => l?.disconnect();
  }, [r]);
  const o = R(
    (l, c) => {
      !n || !l.current || (n.unobserve(l.current), r(c, void 0));
    },
    [n, r]
  ), s = R(
    (l, c) => {
      if (!n || !l.current) return () => {
      };
      n.observe(l.current, {
        box: l.current.nodeName === "div" ? "device-pixel-content-box" : "content-box"
      }), l.current.dataset[Vr] = c;
      const u = l.current.getBoundingClientRect();
      return r(c, { width: u.width, height: u.height }), () => o(l, c);
    },
    [n, o]
  );
  return /* @__PURE__ */ i(
    ln.Provider,
    {
      value: {
        boxes: t,
        observe: s
      },
      children: e
    }
  );
}, re = (e, t) => {
  const r = X(), n = k(() => e, [e.current]), { observe: a, boxes: o } = F(ln);
  return B(() => a(n, r), [n.current, r, a]), k(() => {
    if (r in o) return o[r];
    if (!n.current) return {};
    const s = n.current.getBoundingClientRect(), l = Math.round(s.width), c = Math.round(s.height), { clientWidth: u, clientHeight: d, scrollWidth: f, scrollHeight: h } = n.current, g = f > l, x = h > c;
    return {
      offsetHeight: n.current.offsetHeight,
      offsetWidth: n.current.offsetWidth,
      width: l,
      height: c,
      clientWidth: u,
      clientHeight: d,
      scrollWidth: f,
      scrollHeight: h,
      isScrollableX: g,
      isScrollableY: x
    };
  }, [o, n, r, t]);
}, _c = (e) => {
  const t = X(), r = k(() => e, [e.current]), { observe: n, boxes: a } = F(ln);
  return B(() => n(r, t), [r.current, t, n]), k(() => a[t], [a, t]);
}, ke = b(({ children: e, className: t, variant: r = "spinner", hideDots: n = !1 }) => /* @__PURE__ */ i(To, { features: qo, children: /* @__PURE__ */ p(
  jo.div,
  {
    variants: {
      hidden: { opacity: 0, height: 0 },
      visible: { opacity: 1, height: "auto" }
    },
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    className: m(
      "flex flex-row items-center justify-center gap-4",
      t
    ),
    children: [
      r === "spinner" && /* @__PURE__ */ i(Ee, {}),
      e && /* @__PURE__ */ p(
        "div",
        {
          className: m("type-callou", {
            "text-animation-shimmer": r === "shimmer"
          }),
          children: [
            e,
            !n && /* @__PURE__ */ i(E, { children: "..." })
          ]
        }
      )
    ]
  }
) })), Cc = b(
  ({ variant: e = "transparent", hoverLabel: t, children: r, isPending: n, mutate: a, href: o, straightRightMobile: s, straightLeftMobile: l, hideOnMobile: c }) => {
    const u = V(null), d = V(null), f = re(u), h = re(d), g = k(() => !f.width || !h.width ? "auto" : Math.max(f.width, h.width), [f.width, h.width]), x = k(() => {
      switch (e) {
        case "gray":
          return !1;
        default:
          return !0;
      }
    }, [e]);
    return /* @__PURE__ */ i(ji, { isDark: x, children: /* @__PURE__ */ i(
      z,
      {
        onClick: a,
        href: o,
        className: m(
          "flex type-button-2 px-5 py-3 lg:px-5 lg:py-4 justify-center items-center group whitespace-nowrap",
          "material leading-none rounded-[8px] lg:rounded-[12px] active:scale-95 relative",
          {
            "bg-red-500 text-white": e === "red",
            "bg-neutral-200 text-black": e === "gray",
            "bg-neutral-400 text-white": e === "black",
            "bg-orange-500 text-white": e === "orange",
            "bg-green-500 text-white": e === "green",
            "bg-material text-white": e === "transparent"
          },
          {
            "hidden lg:flex": c,
            "rounded-r-none lg:rounded-r-[12px]": s,
            "rounded-l-none lg:rounded-r-[12px]": l
          }
        ),
        disabled: n,
        children: /* @__PURE__ */ p("div", { style: { width: g }, className: "flex justify-center items-center", children: [
          n && /* @__PURE__ */ i("div", { className: "absolute inset-0 flex justify-center items-center", children: /* @__PURE__ */ i(ke, {}) }),
          /* @__PURE__ */ i(
            "div",
            {
              ref: u,
              className: m(
                "transition-opacity leading-none flex flex-row justify-center items-center",
                {
                  "opacity-0": n,
                  "group-hover:opacity-0": t
                }
              ),
              children: r
            }
          ),
          t && /* @__PURE__ */ i(
            "div",
            {
              ref: d,
              className: "transition-opacity hidden lg:flex pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 rounded-[25px] z-[-1]",
              children: t
            }
          )
        ] })
      }
    ) });
  }
), Ie = b(
  ({
    size: e = "small",
    straightRight: t = !1,
    straightLeft: r = !1,
    filled: n = !1,
    className: a,
    children: o,
    isLoading: s,
    ...l
  }) => /* @__PURE__ */ p(
    z,
    {
      ...l,
      className: m(
        a,
        n ? "bg-white text-black" : "material hover:bg-material-main-2",
        "active:scale-95 transition-all flex flex-row gap-2 justify-center items-center",
        e === "small" ? "type-button-3 px-[14px] h-9" : "type-button-2 h-10 px-4",
        t ? "rounded-r-[8px]" : e === "small" ? "rounded-r-[36px]" : "rounded-r-[40px]",
        r ? "rounded-l-[8px]" : e === "small" ? "rounded-l-[36px]" : "rounded-l-[40px]",
        {
          "relative text-opacity-0": s && !a?.includes("absolute")
        }
      ),
      children: [
        s && /* @__PURE__ */ i(Ee, { className: "absolute inset-0" }),
        /* @__PURE__ */ i(
          "div",
          {
            className: m(
              "whitespace-nowrap flex flex-row justify-center items-center transition-opacity",
              { "opacity-0": s }
            ),
            children: o
          }
        )
      ]
    }
  )
), vl = b(
  ({ ctas: e, children: t, error: r }) => /* @__PURE__ */ p(
    U.div,
    {
      role: "dialog",
      className: m(
        "text-white rounded-full flex flex-nowrap whitespace-nowrap flex-row items-center shadow-material z-[52] relative",
        r ? "bg-red-500" : "bg-black",
        e && e?.length > 0 ? "pl-4 pr-1 py-1" : "px-4 py-2"
      ),
      variants: {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -16 }
      },
      style: { pointerEvents: "all" },
      initial: "hidden",
      animate: "visible",
      exit: "hidden",
      children: [
        t,
        r ? "" + r : null,
        e && e?.length > 0 && /* @__PURE__ */ i("div", { className: "flex flex-1 flex-row justify-end items-center gap-0.5 ml-2", children: e?.map((n, a) => /* @__PURE__ */ i(
          Ie,
          {
            className: "bg-neutral-300/30",
            ...n,
            straightLeft: a > 0 && e.length > 1,
            straightRight: a < e.length - 1 && e.length > 1
          },
          a
        )) })
      ]
    }
  )
), Wi = Q({
  addToast: () => {
  },
  addStickyToast: () => () => {
  }
}), yl = (e) => new Promise((t) => setTimeout(t, e)), Nc = b(({ children: e }) => {
  const [t, r] = M([]), n = R(async (s) => {
    const l = xn();
    r((c) => [...c, { props: s, id: l, isSticky: !1 }]), await yl(6e3), r((c) => c.filter((u) => u.id !== l));
  }, []), a = R(
    (s, l = xn()) => (r((c) => [...c, { props: s, id: l, isSticky: !0 }]), () => r((c) => c.filter((u) => u.id !== l))),
    []
  ), o = k(
    () => t.sort(
      (s, l) => s.isSticky === l.isSticky ? 0 : s.isSticky ? -1 : 1
    ),
    [t]
  );
  return /* @__PURE__ */ p(Wi.Provider, { value: { addToast: n, addStickyToast: a }, children: [
    /* @__PURE__ */ i(U.div, { className: "fixed top-4 w-0 flex left-1/2 items-center flex-col gap-1 z-[53] pointer-events-auto", children: /* @__PURE__ */ i(W, { children: o.map(({ props: s, id: l }) => /* @__PURE__ */ i(vl, { ...s }, l)) }) }),
    e
  ] });
}), cn = () => F(Wi), bl = (e) => {
  const { addToast: t } = cn();
  return R(() => {
    e && (navigator.clipboard.writeText(e), t({ children: "Link copied" }));
  }, [e]);
}, xl = b(
  ({ title: e, value: t, isHeader: r }) => /* @__PURE__ */ p(
    "div",
    {
      className: m(
        "flex flex-row gap-4",
        r ? "type-button-1 text-white" : "type-button-3"
      ),
      children: [
        /* @__PURE__ */ i("div", { children: e }),
        /* @__PURE__ */ i("div", { className: "flex-1" }),
        /* @__PURE__ */ i("div", { className: "type-button-3", children: t })
      ]
    }
  )
), Sc = b(
  ({
    index: e,
    variant: t = "large",
    image: r,
    background: n,
    items: a = [],
    joinLabel: o,
    joinUrl: s,
    leftLabel: l
  }) => {
    const c = bl(s);
    return /* @__PURE__ */ p(
      U.div,
      {
        variants: {
          hidden: { y: -4, opacity: 0, transition: e !== void 0 ? { delay: 0 } : { delay: 0 } },
          visible: { y: 0, opacity: 1, transition: e !== void 0 ? { delay: e * 0.02 } : { delay: 0 } }
        },
        initial: "hidden",
        animate: "visible",
        className: "flex rounded-[16px] material relative",
        children: [
          n && /* @__PURE__ */ i("div", { className: "absolute inset-0 rounded-[16px] z-0 flex flex-1 justify-stretch items-stretch", children: n }),
          /* @__PURE__ */ p(
            z,
            {
              href: s,
              className: m(
                "w-full h-full flex relative z-[1]",
                t === "small" ? "cursor-pointer flex-row gap-4 p-6" : "flex-col gap-4 lg:gap-8 p-4 lg:p-8"
              ),
              children: [
                r && /* @__PURE__ */ i("div", { className: m(
                  t === "small" ? " h-[69px] w-[120px] " : "h-48 lg:-mx-4"
                ) }),
                /* @__PURE__ */ i(
                  "div",
                  {
                    className: m(
                      "flex flex-col gap-[10px] type-body text-neutral-200/70",
                      { "justify-center": t === "small" }
                    ),
                    children: t === "small" ? /* @__PURE__ */ p(E, { children: [
                      /* @__PURE__ */ i("p", { className: "type-button-1 text-white", children: a[0]?.title }),
                      /* @__PURE__ */ i("p", { className: "type-button-3 text-white", children: a[0]?.value })
                    ] }) : /* @__PURE__ */ i(E, { children: a.map((u, d) => /* @__PURE__ */ i(xl, { ...u }, d)) })
                  }
                ),
                t === "large" && /* @__PURE__ */ p("div", { className: "flex flex-row w-full justify-between mt-auto items-center", children: [
                  l ?? /* @__PURE__ */ i("div", {}),
                  o && s && /* @__PURE__ */ p(E, { children: [
                    /* @__PURE__ */ i(Ie, { href: s, children: o }),
                    /* @__PURE__ */ i(
                      z,
                      {
                        onClick: c,
                        className: "material hover:shadow-none w-9 h-9 rounded-full flex justify-center items-center",
                        children: /* @__PURE__ */ i(
                          J,
                          {
                            type: "png",
                            src: "/icons/link.png",
                            alt: "Copy link",
                            width: 48,
                            height: 48
                          }
                        )
                      }
                    )
                  ] })
                ] })
              ]
            }
          )
        ]
      }
    );
  }
), kc = b(({ text: e }) => {
  const { addToast: t } = cn(), r = R(() => {
    navigator.clipboard.writeText(e), t({ children: "Copied" });
  }, [e]);
  return /* @__PURE__ */ p("div", { className: "flex flex-row w-full group relative", children: [
    /* @__PURE__ */ i(
      "input",
      {
        type: "text",
        value: e,
        readOnly: !0,
        className: "h-full w-full bg-transparent text-material-placeholder "
      }
    ),
    /* @__PURE__ */ i(
      z,
      {
        onClick: r,
        className: "group-hover:opacity-100 opacity-0 absolute right-0 active:scale-95 type-button-2",
        children: "Copy"
      }
    )
  ] });
}), Ue = () => {
  const [e, t] = M({
    width: window.innerWidth,
    height: window.innerHeight
  });
  return B(() => {
    const r = () => t({ width: window.innerWidth, height: window.innerHeight });
    return window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), e;
}, Ic = () => {
  const e = Ue();
  return k(() => e.width < 1023, [e.width]);
}, Tc = b(
  ({
    shown: e = !1,
    className: t,
    children: r,
    minSize: n = { width: 343, height: 200 }
  }) => {
    const a = V(null), o = V(null), s = V(null), [l, c] = M(), [u, d] = M(
      n
    ), [f, h] = M({
      x: 0,
      y: 0
    }), [g, x] = M(!0), y = k(() => {
      if (s.current && g) {
        const I = s.current.getBoundingClientRect();
        return {
          left: I.left,
          top: I.top,
          width: I.width,
          height: I.height
        };
      }
      return {
        height: Math.max(n.height, u.height),
        width: Math.max(n.width, u.width),
        left: f.x,
        top: f.y
      };
    }, [u, f, g, s.current]), v = re(a), _ = Ue(), [w, C] = M(
      _.height - 24 * 4 * 2
    );
    B(() => {
      !g || !s.current || h({
        x: s.current?.getBoundingClientRect().left ?? 0,
        y: s.current?.getBoundingClientRect().top ?? 0
      });
    }, [_]);
    const q = R(
      (I) => {
        if (!a.current) return;
        const { clientX: N, clientY: O } = I, { left: G, top: j } = a.current.getBoundingClientRect(), P = N - G, S = O - j;
        c({
          x: P,
          y: S,
          type: I.target === o.current ? "resizing" : "dragging"
        });
      },
      [a.current]
    );
    return B(() => {
      if (!l) return;
      const I = (O) => {
        if (!a.current || !v.width || !v.height)
          return;
        if (O.preventDefault(), O.stopPropagation(), O.stopImmediatePropagation(), l.type === "resizing")
          return C(O.clientY - f.y), g || d({
            width: Math.max(n.width, O.clientX - f.x),
            height: Math.max(n.height, O.clientY - f.y)
          }), !1;
        const G = {
          x: Math.min(
            _.width - v.width,
            Math.max(0, O.clientX - l.x)
          ),
          y: Math.min(
            _.height - v.height,
            Math.max(0, O.clientY - l.y)
          )
        };
        if (s.current) {
          const j = s.current.getBoundingClientRect();
          if (O.clientX > j.left && O.clientX < j.right && O.clientY > j.top && O.clientY < j.bottom)
            return x(!0), h({ x: j.left, y: j.top }), !1;
        }
        return x(!1), h(G), !1;
      }, N = () => {
        window.removeEventListener("mousemove", I), window.removeEventListener("mouseup", N), c(void 0), document.body.style.cursor = "", document.body.style.userSelect = "";
      };
      return window.addEventListener("mousemove", I), window.addEventListener("mouseup", N), document.body.style.cursor = l.type === "resizing" ? `${g ? "ns" : "se"}-resize` : "grabbing", document.body.style.userSelect = "none", () => {
        window.removeEventListener("mousemove", I), window.removeEventListener("mouseup", N), document.body.style.cursor = "", document.body.style.userSelect = "";
      };
    }, [
      l,
      _,
      v,
      g,
      s.current,
      n,
      f
    ]), Ao(
      /* @__PURE__ */ i(W, { children: /* @__PURE__ */ p("div", { className: "absolute h-screen w-screen top-0 left-0 overflow-hidden pointer-events-none", children: [
        /* @__PURE__ */ p(
          U.div,
          {
            className: m("absolute z-30 group pointer-events-auto", {
              "cursor-grab": !l,
              "pointer-events-none": l
            }),
            ref: a,
            onMouseDown: q,
            variants: g ? {
              hidden: { x: "100%", left: "100%" },
              shown: (I) => ({ x: 0, left: I.left })
            } : {
              hidden: { x: 0, opacity: 0, y: 16 },
              shown: { x: 0, opacity: 1, y: 0 }
            },
            initial: !1,
            custom: y,
            animate: e ? "shown" : "hidden",
            style: {
              width: y.width,
              height: g ? Math.max(
                Math.min(_.height - 24 * 4 * 2, w),
                n.height
              ) : y.height,
              left: y.left,
              top: y.top
            },
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 22
            },
            children: [
              /* @__PURE__ */ i("div", { className: "absolute top-0 type-callout flex justify-center items-center left-0 w-full h-12 z-[2] bg-material-main-1 rounded-t-[16px] backdrop-blur-[40px]", children: "Chat" }),
              /* @__PURE__ */ i("div", { className: m(t, "absolute inset-0 z-[1]"), children: r }),
              /* @__PURE__ */ i(
                "div",
                {
                  className: m(
                    "absolute z-[0]",
                    g ? [
                      "left-4 right-4 h-1 -bottom-4 cursor-ns-resize rounded-full",
                      l?.type === "resizing" ? "bg-material-medium-2" : "bg-material-main-2 hover:bg-material-main-3"
                    ] : [
                      "border-b-[3px] h-8 w-8 -right-2 -bottom-2 rounded-br-[20px] border-r-[3px] cursor-se-resize",
                      l?.type === "resizing" ? "border-material-medium-2" : "border-material-main-2 hover:border-material-main-3"
                    ]
                  ),
                  ref: o
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ i(
          U.div,
          {
            ref: s,
            className: m(
              "absolute bg-material-main-1 rounded-[16px] top-24 right-4 z-[29] pointer-events-none",
              {
                "opacity-0": l?.type !== "dragging" || g
              }
            ),
            style: {
              width: n.width,
              height: Math.max(
                Math.min(_.height - 24 * 4 * 2, w),
                n.height
              )
            }
          }
        )
      ] }) }),
      document.body
    );
  }
), wl = "data:image/svg+xml,%3csvg%20width='10'%20height='11'%20viewBox='0%200%2010%2011'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.23047%209.5C5.41406%209.49613%205.58203%209.45934%205.73437%209.38963C5.89062%209.31992%206.04492%209.20954%206.19727%209.05851L9.74871%205.71112C9.84134%205.62382%209.88765%205.58017%209.92082%205.52847C9.95023%205.48264%209.97195%205.43232%209.98513%205.37948C10%205.31988%2010%205.25624%2010%205.12896V4.31092C10%203.73785%2010%203.45132%209.8847%203.31244C9.78456%203.19182%209.63365%203.12515%209.47704%203.13235C9.29673%203.14064%209.08491%203.3336%208.66126%203.71951L5.23633%206.83942L1.31047%203.586C0.892229%203.2394%200.683109%203.0661%200.506582%203.06378C0.353114%203.06176%200.207219%203.13033%200.110849%203.24979C0%203.38719%200%203.65879%200%204.20198V5.10167C0%205.23866%200%205.30715%200.0170021%205.37067C0.0320663%205.42696%200.0568533%205.48018%200.0902424%205.52792C0.127925%205.58181%200.180355%205.62589%200.285215%205.71404L4.26367%209.05851C4.41602%209.21342%204.56836%209.32573%204.7207%209.39544C4.87695%209.46515%205.04687%209.5%205.23047%209.5Z'%20fill='white'/%3e%3c/svg%3e", _l = b(
  ({
    className: e,
    isOpenInitially: t = !1,
    value: r,
    placeholder: n,
    onChange: a,
    options: o
  }) => {
    const s = k(() => o ? o.map((v) => typeof v == "object" ? {
      ...v,
      label: v.label,
      // in case it’s a ReactNode
      value: String(v.value),
      realValue: v.value
    } : {
      value: String(v),
      realValue: v,
      label: v ?? ""
    }) : [], [o]), l = k(() => {
      const v = r ?? n;
      return s.find(
        (_) => _.realValue === v || _.value === v
      );
    }, [r, n, s]), [c, u] = M(t), d = V(null), f = V(null), h = V(null), g = Ue(), [x, y] = M();
    return B(() => {
      if (!c) {
        y(void 0);
        return;
      }
      let v = !1;
      return requestAnimationFrame(() => {
        if (v || !h.current || !f.current)
          return;
        const w = h.current.getBoundingClientRect(), C = f.current.getBoundingClientRect(), q = Math.min(
          g.width - C.width - 16,
          Math.max(16, w.left)
        ), N = { top: Math.min(
          g.height - C.height - 16,
          Math.max(16, w.top)
        ), left: q };
        N.top !== void 0 && N.top < 16 && (N.top = 16, N.height = g.height - 32), y(N);
      }), () => {
        v = !0;
      };
    }, [c, g]), B(() => {
      const v = d.current;
      if (v)
        if (c) {
          v.showModal();
          const _ = (C) => {
            C.target === v && u(!1);
          }, w = () => u(!1);
          return window.addEventListener("click", _), v.addEventListener("close", w), () => {
            window.removeEventListener("click", _), v.removeEventListener("close", w);
          };
        } else
          v.close();
    }, [c]), /* @__PURE__ */ p(E, { children: [
      /* @__PURE__ */ p(
        z,
        {
          ref: h,
          onClick: () => u((v) => !v),
          className: m(
            "type-button-2 flex flex-row items-center whitespace-nowrap",
            e
          ),
          children: [
            l?.label ?? n,
            /* @__PURE__ */ i(
              J,
              {
                src: wl,
                className: "ml-2",
                type: "svg",
                alt: "chevron down"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ i(
        "dialog",
        {
          ref: d,
          className: m(
            "overflow-visible bg-transparent text-white type-button-2 text-left transition-opacity duration-75 z-10",
            {
              "opacity-0": !x
              // hides until positioned
            }
          ),
          style: {
            position: "absolute",
            top: x?.top,
            left: x?.left,
            height: x?.height
          },
          children: /* @__PURE__ */ i(
            U.div,
            {
              variants: {
                closed: { opacity: 0, y: -4, scale: 0.9 },
                open: { opacity: 1, y: 0, scale: 1 }
              },
              initial: !1,
              animate: c ? "open" : "closed",
              ref: f,
              className: "flex flex-col whitespace-nowrap bg-material rounded-[12px] p-1 gap-1 -mt-1 overflow-auto",
              style: { maxHeight: x?.height ?? "auto" },
              children: s.map(({ value: v, realValue: _, label: w }) => /* @__PURE__ */ i(
                z,
                {
                  onClick: () => {
                    u(!1), a(_);
                  },
                  className: m(
                    "w-full py-2 px-4 text-left rounded-[8px] cursor-pointer hover:bg-material",
                    {
                      "bg-green-500": r === _
                    }
                  ),
                  children: w
                },
                v
              ))
            }
          )
        }
      )
    ] });
  }
), qc = b(({ className: e, children: t, animateWidth: r, animateHeight: n }) => {
  const a = V(null), { width: o, height: s } = re(a);
  return /* @__PURE__ */ p(E, { children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: m(
          "absolute opacity-0 left-0 pointer-events-none whitespace-nowrap",
          e
        ),
        ref: a,
        children: t
      }
    ),
    /* @__PURE__ */ i(
      U.div,
      {
        animate: {
          width: r ? o : void 0,
          height: n ? s : void 0
        },
        className: m("flex", e, {
          "flex-row": e?.indexOf("flex-col") === -1
        }),
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 20
        },
        children: t
      }
    )
  ] });
}), Xi = "data:image/svg+xml,%3csvg%20width='7'%20height='11'%20viewBox='0%200%207%2011'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%205.26953C6.99613%205.08594%206.95934%204.91797%206.88963%204.76563C6.81992%204.60938%206.70954%204.45508%206.55851%204.30273L3.21112%200.751287C3.12382%200.658664%203.08017%200.612352%203.02847%200.579179C2.98264%200.549773%202.93232%200.52805%202.87948%200.51487C2.81988%200.5%202.75624%200.5%202.62896%200.5H1.81092C1.23785%200.5%200.951321%200.5%200.812442%200.615297C0.691821%200.715437%200.625151%200.866355%200.63235%201.02296C0.640639%201.20327%200.833596%201.41509%201.21951%201.83874L4.33942%205.26367L1.086%209.18953C0.739403%209.60777%200.566103%209.81689%200.563778%209.99342C0.561758%2010.1469%200.630334%2010.2928%200.749789%2010.3892C0.887193%2010.5%201.15879%2010.5%201.70198%2010.5H2.60167C2.73866%2010.5%202.80715%2010.5%202.87067%2010.483C2.92696%2010.4679%202.98018%2010.4431%203.02792%2010.4098C3.08181%2010.3721%203.12589%2010.3196%203.21404%2010.2148L6.55851%206.23633C6.71342%206.08398%206.82573%205.93164%206.89544%205.7793C6.96515%205.62305%207%205.45313%207%205.26953Z'%20fill='%23E7E7E7'/%3e%3c/svg%3e", Yi = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.30057%2013.1992C2.16625%2013.0648%202.07594%2012.9073%202.02962%2012.7265C1.98793%2012.5411%201.99025%2012.3604%202.03657%2012.1843C2.08288%2012.0035%202.16857%2011.8506%202.29362%2011.7255L6.26067%207.74909L2.29362%203.77964C2.16857%203.65451%202.08288%203.50157%202.03657%203.32083C1.99488%203.14008%201.99488%202.95934%202.03657%202.77859C2.08288%202.59785%202.17088%202.44028%202.30057%202.30588C2.43489%202.16684%202.59237%202.07647%202.773%202.03476C2.95827%201.99305%203.14122%201.99305%203.32186%202.03476C3.5025%202.07647%203.65766%202.16221%203.78735%202.29197L7.75439%206.25446L11.7145%202.29197C11.8442%202.16221%2011.9993%202.07647%2012.18%202.03476C12.3606%201.98841%2012.5389%201.98841%2012.7149%202.03476C12.8956%202.0811%2013.0554%202.17148%2013.1943%202.30588C13.3286%202.44028%2013.4189%202.59785%2013.4653%202.77859C13.5116%202.95934%2013.5116%203.14008%2013.4653%203.32083C13.4236%203.49694%2013.3379%203.6522%2013.2082%203.7866L9.24811%207.74909L13.2082%2011.7185C13.3379%2011.8483%2013.4236%2012.0035%2013.4653%2012.1843C13.5069%2012.365%2013.5046%2012.5458%2013.4583%2012.7265C13.4166%2012.9073%2013.3286%2013.0648%2013.1943%2013.1992C13.06%2013.3336%2012.9025%2013.4217%2012.7219%2013.4634C12.5412%2013.5098%2012.3606%2013.5121%2012.18%2013.4704C11.9993%2013.4287%2011.8442%2013.3406%2011.7145%2013.2062L7.75439%209.24371L3.78735%2013.2132C3.65766%2013.3383%203.5025%2013.4217%203.32186%2013.4634C3.14586%2013.5098%202.96522%2013.5098%202.77995%2013.4634C2.59932%2013.4217%202.43952%2013.3336%202.30057%2013.1992Z'%20fill='white'/%3e%3c/svg%3e", pe = Q({
  setFooter: () => {
  },
  removeFooter: () => {
  },
  close: () => {
  },
  setTitle: () => {
  },
  removeTitle: () => {
  },
  setBackButton: () => {
  },
  removeBackButton: () => {
  }
}), un = b(
  ({ children: e }) => {
    const { setFooter: t, removeFooter: r, modalId: n } = F(pe), a = X();
    return B(() => {
      if (n)
        return t({ children: e, id: a }), () => r(a);
    }, [e, a]), n ? /* @__PURE__ */ i(E, {}) : /* @__PURE__ */ i("div", { className: "flex flex-row mt-3", children: e });
  }
), Cl = b(({ children: e }) => {
  const { setTitle: t, removeTitle: r, modalId: n } = F(pe), a = X();
  return B(() => {
    if (n)
      return t({ children: e, id: a }), () => r(a);
  }, [a, e]), n ? /* @__PURE__ */ i(E, {}) : /* @__PURE__ */ i("div", { className: "flex flex-row mt-3", children: e });
}), jc = b(({ children: e, onClick: t }) => {
  const { setBackButton: r, removeBackButton: n, modalId: a } = F(pe), o = X();
  return B(() => {
    if (a)
      return r({ children: e, onClick: t, id: o }), () => n(o);
  }, [o, e, t]), a ? /* @__PURE__ */ i(E, {}) : /* @__PURE__ */ i("div", { className: "flex flex-row mt-3", children: e });
}), Nl = b(({ children: e, open: t, stackIndex: r, onClose: n, hasFooter: a, contentClassName: o, onScrollStateUpdate: s }) => {
  const l = V(null);
  B(() => {
    if (!l.current || !l.current) return;
    if (!t) return l.current.close();
    if (l.current.showModal(), !n) return;
    const d = (f) => {
      f.target === l.current && n();
    };
    return requestAnimationFrame(() => window.addEventListener("click", d)), l.current.addEventListener("close", n), () => {
      window.removeEventListener("click", d), l.current?.removeEventListener("close", n);
    };
  }, [t]);
  const c = V(!1), { theme: u } = ae();
  return /* @__PURE__ */ i(
    "dialog",
    {
      className: m(
        "backdrop:bg-black/30 backdrop:z-0 z-50 open:opacity-100 pt-8 lg:py-10",
        "flex flex-col justify-center mt-auto mx-0 mb-0 lg:items-center",
        "lg:m-auto bg-transparent self-center overflow-visible"
      ),
      style: {
        overscrollBehavior: "contain"
      },
      ref: l,
      children: /* @__PURE__ */ i(W, { children: t && /* @__PURE__ */ i(
        U.div,
        {
          variants: {
            closed: { opacity: 0, y: 4, scale: 1 - r * 0.1 },
            open: { opacity: 1, y: 0, scale: 1 - r * 0.1 }
          },
          initial: "closed",
          animate: "open",
          exit: "closed",
          className: m(
            "text-white w-screen",
            {
              "border-l border-material-main-2": u === "purepoker"
            },
            { "pb-4": !a },
            "overflow-hidden bg-material z-50 shadow-modal origin-bottom backdrop-blur-2xl rounded-t-[16px] lg:rounded-b-[16px] w-full lg:w-[31.25rem] flex flex-col",
            o
          ),
          onScrollCapture: (d) => {
            const h = d.target.scrollTop > 0;
            c.current !== h && (c.current = h, s(h));
          },
          children: e
        }
      ) })
    }
  );
}), he = b(
  ({ title: e, onClose: t, open: r = !0, contentClassName: n, children: a, contentGap: o }) => {
    const s = X(), [l, c] = M(), [u, d] = M(), [f, h] = M(e ? { children: e, id: "props" } : void 0), g = $o(r), [x, y] = M(!1), v = k(
      () => ({
        modalId: s,
        setFooter: (w) => c(w),
        removeFooter: (w) => c((C) => C && C.id !== w ? C : void 0),
        setTitle: (w) => h(w),
        removeTitle: (w) => h((C) => C && C.id !== w ? C : void 0),
        setBackButton: (w) => d(w),
        removeBackButton: (w) => d((C) => C && C.id !== w ? C : void 0),
        title: f?.toString(),
        close: () => t?.()
      }),
      [s, f]
    ), { theme: _ } = ae();
    return r ? /* @__PURE__ */ i(pe.Provider, { value: v, children: /* @__PURE__ */ p(
      Nl,
      {
        open: r,
        stackIndex: g,
        hasFooter: !!l?.children,
        onClose: t,
        contentClassName: n,
        onScrollStateUpdate: (w) => {
          x !== w && y(w);
        },
        children: [
          (f || t || u) && /* @__PURE__ */ p(
            "div",
            {
              className: m(
                "flex justify-between items-center h-13 border-b flex-shrink-0 relative z-[1] transition-all duration-150 !bg-transparent rounded-b-[0px]",
                { "opacity-30": g, "px-10": t },
                x ? [
                  "border-material-main-1",
                  _ === "purepoker" && "shadow-inner-ultra-light-regular-default bg-linear-to-r from-transparent to-material-main-1"
                ] : "border-transparent"
              ),
              children: [
                u && /* @__PURE__ */ p(
                  z,
                  {
                    className: "absolute left-3 h-8 flex justify-center items-center outline-hidden group z-[1]",
                    onClick: u.onClick,
                    children: [
                      /* @__PURE__ */ i("span", { className: "size-6 text-center type-button-3 flex justify-center items-center transition-transform group-hover:-translate-x-1", children: /* @__PURE__ */ i(
                        J,
                        {
                          type: "svg",
                          alt: "Close",
                          src: Xi,
                          className: "flex pointer-events-none rotate-180"
                        }
                      ) }),
                      u.children
                    ]
                  },
                  u.id
                ),
                /* @__PURE__ */ i(W, { initial: !1, children: f?.children && /* @__PURE__ */ i(
                  U.div,
                  {
                    initial: { opacity: 0, x: -8, position: "relative" },
                    animate: { opacity: 1, x: 0, position: "relative" },
                    exit: { opacity: 0, x: -16, position: "absolute" },
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 22
                    },
                    className: m(
                      "grow text-center flex-row flex justify-center items-center type-medior z-0 w-full"
                    ),
                    children: f.children
                  },
                  f.id
                ) }),
                t && /* @__PURE__ */ i(
                  z,
                  {
                    className: "absolute right-3 h-8 w-8 flex justify-center items-center outline-hidden z-[1]",
                    onClick: t,
                    children: /* @__PURE__ */ i(
                      J,
                      {
                        type: "svg",
                        alt: "Close",
                        src: Yi,
                        className: "flex pointer-events-none"
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ i(
            "div",
            {
              className: m(
                "flex flex-col grow overflow-auto px-4 lg:px-8 pb-4 pt-4 transition-opacity",
                { "opacity-50": g }
              ),
              children: /* @__PURE__ */ i("div", { className: m("flex flex-col shrink-0 grow whitespace-normal", o ?? "gap-8"), children: a })
            }
          ),
          l?.children && /* @__PURE__ */ i(
            "div",
            {
              className: m(
                "flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center p-4 transition-opacity w-full",
                { "opacity-50": g }
              ),
              children: l?.children
            },
            l.id
          )
        ]
      }
    ) }) : null;
  }
), Ac = pe.Consumer, Sl = () => F(pe), dn = () => Sl().modalId !== void 0, Oe = b(({ md: e }) => {
  const t = dn();
  return /* @__PURE__ */ i(
    Oo,
    {
      children: e,
      className: "max-w-[650px]",
      components: {
        h1: (r) => /* @__PURE__ */ i("h1", { className: m("mb-3", t ? "type-header" : "type-callout"), ...r }),
        h2: (r) => /* @__PURE__ */ i("h2", { className: m("mb-3", t ? "type-header" : "type-callout"), ...r }),
        h3: (r) => /* @__PURE__ */ i("h3", { className: m("mb-3", t ? "type-header" : "type-callout"), ...r }),
        p: (r) => /* @__PURE__ */ i("p", { className: "mb-3 type-body text-material-medium-3", ...r }),
        ul: (r) => /* @__PURE__ */ i("ul", { className: "list-disc ml-5 mb-4 type-body", ...r }),
        ol: (r) => /* @__PURE__ */ i("ol", { className: "list-decimal ml-5 mb-4 type-body", ...r }),
        li: (r) => /* @__PURE__ */ i("li", { className: "mb-2 type-body text-material-medium-3", ...r }),
        code: (r) => /* @__PURE__ */ i("code", { className: "type-caption material px-2 py-1 type-tiny font-mono", ...r }),
        pre: (r) => /* @__PURE__ */ i("pre", { className: "type-caption bg-gray-100 rounded-lg p-4 overflow-auto mb-4", ...r }),
        blockquote: (r) => /* @__PURE__ */ i("blockquote", { className: "type-subheadline border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4", ...r }),
        hr: () => /* @__PURE__ */ i(E, {}),
        a: (r) => /* @__PURE__ */ i("a", { className: "text-blue-500 hover:underline", target: "_blank", ...r })
      }
    }
  );
}), kl = b(
  ({ children: e }) => /* @__PURE__ */ i(Oe, { md: e })
), Mc = b(
  ({ children: e, className: t }) => {
    const r = k(() => e.split(/^# /gm).filter(Boolean).map((o) => {
      const [s, ...l] = o.split(`
`), c = l.join(`
`), [u, ...d] = c.split(/^## /gm), f = d.map((g) => {
        const [x, ...y] = g.split(`
`), v = y.join(`
`).trim();
        return {
          title: x.trim(),
          markdown: v || void 0
        };
      }), h = u.trim();
      return {
        title: s.trim(),
        markdown: h || void 0,
        subsections: f.length > 0 ? f : void 0
      };
    }), [e]), n = dn();
    return /* @__PURE__ */ p("div", { className: m(t), children: [
      /* @__PURE__ */ i("div", { className: "flex flex-col lg:hidden", children: r.map((a, o) => /* @__PURE__ */ p(ye, { children: [
        /* @__PURE__ */ i("h1", { className: m("type-top text-center w-full max-w-[800px] mx-auto mb-4", { "lg:type-display": !n }), children: a.title }),
        a.markdown && /* @__PURE__ */ i("h1", { className: "type-header text-material-medium-2 text-center w-full max-w-[650px]", children: a.markdown }),
        a.subsections?.map((s, l) => /* @__PURE__ */ p(ye, { children: [
          /* @__PURE__ */ i("hr", { className: "border-t border-material-main-1 my-8" }),
          /* @__PURE__ */ i("h2", { className: "type-header text-material-medium-2 mb-4 w-full max-w-[650px]", children: s.title }),
          /* @__PURE__ */ i(Oe, { md: s.markdown ?? "" })
        ] }, l))
      ] }, o)) }),
      /* @__PURE__ */ i("table", { className: "w-full hidden lg:table", children: /* @__PURE__ */ i("tbody", { children: r.map((a, o) => /* @__PURE__ */ p(ye, { children: [
        /* @__PURE__ */ i("tr", { children: /* @__PURE__ */ i("td", { colSpan: 2, children: /* @__PURE__ */ i("h1", { className: m(" text-center w-full max-w-[800px] mx-auto", n ? "type-top" : "type-display"), children: a.title }) }) }),
        a.markdown && /* @__PURE__ */ i("tr", { children: /* @__PURE__ */ i("td", { colSpan: 2, children: /* @__PURE__ */ i("h1", { className: "type-header text-material-medium-2 text-center w-full max-w-[650px] mx-auto", children: a.markdown }) }) }),
        a.subsections?.map((s, l) => /* @__PURE__ */ i(ye, { children: n ? /* @__PURE__ */ p(E, { children: [
          /* @__PURE__ */ i("tr", { children: /* @__PURE__ */ i("td", { className: " align-top type-header text-material-medium-2", colSpan: 2, children: /* @__PURE__ */ i("h2", { className: " whitespace-nowrap pr-8", children: s.title }) }) }),
          /* @__PURE__ */ i("tr", { children: /* @__PURE__ */ i("td", { colSpan: 2, children: /* @__PURE__ */ i(Oe, { md: s.markdown ?? "" }) }) })
        ] }) : /* @__PURE__ */ p(E, { children: [
          /* @__PURE__ */ i("tr", { children: /* @__PURE__ */ i("td", { colSpan: 2, children: /* @__PURE__ */ i("hr", { className: "border-t border-material-main-1 my-16" }) }) }),
          /* @__PURE__ */ p("tr", { children: [
            /* @__PURE__ */ i("td", { className: " align-top type-header text-material-medium-2", children: /* @__PURE__ */ i("h2", { className: " whitespace-nowrap pr-8", children: s.title }) }),
            /* @__PURE__ */ i("td", { children: /* @__PURE__ */ i(Oe, { md: s.markdown ?? "" }) })
          ] })
        ] }) }, l))
      ] }, o)) }) })
    ] });
  }
), ve = (e) => e.split(/(?=[A-Z])/).map(
  (t, r) => r === 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t.toLowerCase()
).join(" "), Il = b(
  ({ title: e, message: t }) => /* @__PURE__ */ p(E, { children: [
    e && /* @__PURE__ */ i("p", { className: "whitespace-nowrap font-bold w-full", children: e }),
    t && /* @__PURE__ */ i("div", { className: m({ "text-opacity-75": e }, "w-full"), children: /* @__PURE__ */ i(kl, { children: t.trim() }) })
  ] })
);
class Ji extends Error {
  isUserError = !0;
  constructor(t) {
    super(t), this.name = "UserError";
  }
}
class Tl extends Ji {
  constructor(t) {
    super("Wallet not found"), this.walletType = t, this.name = "WalletTypeNotInstalledError";
  }
}
const fe = b(({ error: e, title: t, className: r, isUserError: n = !1, translucent: a = !1 }) => {
  const o = k(() => {
    let s = e;
    if (!s) return [];
    if (s instanceof Ro)
      return [{ message: s.response?.data?.description || s.message }];
    if (s instanceof Tl)
      switch (s.walletType) {
        case "bitfinityWallet":
          return [{
            title: "Bitfinity Wallet not installed",
            message: "Please [install Bitfinity Wallet](https://wallet.bitfinity.network/) to continue.",
            isUserError: !0
          }];
        case "plug":
          return [{
            title: "Plug Wallet not installed",
            message: "Please [install Plug Wallet](https://www.plugwallet.ooo/) to continue.",
            isUserError: !0
          }];
      }
    if (s instanceof Ji)
      return [{ message: s.message, isUserError: !0 }];
    if (s instanceof Error) return [{ message: s.message }];
    if (typeof s == "string")
      try {
        s = JSON.parse(s);
      } catch {
        s = e;
      }
    if (typeof s == "string")
      switch (s) {
        case Mo:
          return [{ message: "Interrupted", isUserError: !0 }];
        default:
          return [{ message: s, isUserError: !0 }];
      }
    if (Array.isArray(s)) return s.map((c) => ({ message: "" + c }));
    if (!(s instanceof Object)) return [{ message: "" + s }];
    if ("message" in s) return [{ message: "" + s.message }];
    const l = s;
    return "Game" in l ? "ActionNotAllowed" in l.Game ? [
      {
        title: "Action not allowed",
        message: ve(l.Game.ActionNotAllowed.reason),
        isUserError: !0
      }
    ] : "BlindInsufficientFunds" in l.Game ? [
      {
        title: "Insufficient funds",
        message: `User with id ${l.Game.BlindInsufficientFunds.user_id} has insufficient funds to place blinds`,
        isUserError: !0
      }
    ] : "InvalidCardValue" in l.Game ? [{ message: "Invalid card value", isUserError: !1 }] : "Other" in l.Game ? [
      { message: "error" + JSON.stringify(l.Game.Other), isUserError: !0 }
    ] : Object.entries(l.Game).map(([c, u]) => ({
      title: (u || void 0) && ve(c),
      message: (u ? "" + u : void 0) ?? ve(c),
      isUserError: !0
    })) : "InsufficientFunds" in l ? [{ message: "Insufficient funds", isUserError: !0 }] : "TableNotFound" in l ? [{ message: "Table not found", isUserError: !0 }] : "UserError" in s && s.UserError instanceof Object ? Object.entries(s.UserError).map(([c, u]) => ({
      title: ve(c),
      message: u && "" + u,
      isUserError: !0
    })) : Object.entries(s).map(([c, u]) => ({
      title: ve(c),
      message: u && "" + JSON.stringify(u)
    }));
  }, [e]);
  return k(
    () => !n && !o?.some(({ isUserError: s }) => s),
    [o, n]
  ), B(() => {
    e && console.error(e);
  }, [e]), /* @__PURE__ */ i(W, { children: o !== void 0 && o.length > 0 && /* @__PURE__ */ i(
    U.div,
    {
      variants: {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: "auto" }
      },
      initial: "hidden",
      animate: "visible",
      exit: "hidden",
      className: m(
        "text-white type-callout rounded-xl overflow-hidden",
        a ? "bg-[#392247]" : "bg-purple-500/[0.12]",
        r
      ),
      children: /* @__PURE__ */ p("div", { className: "p-6 gap-1 text-left flex flex-col justify-start items-start overflow-auto whitespace-pre-wrap", children: [
        t && /* @__PURE__ */ i("p", { className: "type-header", children: t }, "title"),
        /* @__PURE__ */ i(W, { children: o.map((s, l) => /* @__PURE__ */ Xr(Il, { ...s, key: `${l}-${s}` })) })
      ] })
    },
    "error"
  ) });
}), ql = b(
  ({ children: e, for: t, ctas: r = [] }) => /* @__PURE__ */ p(
    "label",
    {
      className: "type-button-3 text-material-main-3 flex flex-row items-center",
      htmlFor: t,
      children: [
        e,
        r?.length > 0 && /* @__PURE__ */ p(E, { children: [
          /* @__PURE__ */ i("div", { className: "flex flex-1" }),
          r.map(({ label: n, ...a }, o) => /* @__PURE__ */ i(
            z,
            {
              ...a,
              className: "type-button-3 bg-blue rounded-full px-2 py-1 text-material-medium-2 material",
              children: n
            },
            o
          ))
        ] })
      ]
    }
  )
), Ge = Q({
  attach: () => {
  },
  detatch: () => {
  },
  variant: { type: "default" }
}), jl = b(({ first: e, last: t, openSublist: r, ...n }) => {
  const { variant: a } = F(Ge), { push: o } = qi();
  let s = "bg-material-main-1";
  const [l, c] = M(!1);
  switch (a.type === "default" && a.variant === "alert" && (s = "bg-red-500/20"), n.type) {
    case "seperator":
      return /* @__PURE__ */ p("tr", { children: [
        a.type !== "droppel" && /* @__PURE__ */ i("td", { className: m("w-4") }),
        /* @__PURE__ */ i("td", { colSpan: a.type === "droppel" ? 4 : 3, children: /* @__PURE__ */ i("div", { className: m("h-[3px] w-full rounded-full", s) }) }),
        /* @__PURE__ */ i(
          "td",
          {
            className: m(a.type === "droppel" ? "w-1" : "w-4")
          }
        )
      ] });
    case "item":
    default: {
      const u = !!(a.type === "default" && a.readonly), d = m(
        "py-0",
        a.type === "default" ? ["border-b px-0", s] : "px-2"
      ), f = m(
        d,
        a.type === "default" && (t ? "border-transparent" : "border-material-main-1")
      ), h = a.type === "droppel" ? "rounded-l-lg" : m({
        "rounded-tl-[12px]": a.type === "default" && e,
        "rounded-bl-[12px]": a.type === "default" && t
      }), g = a.type === "droppel" ? "rounded-r-lg" : m({
        "rounded-tr-[12px]": a.type === "default" && e,
        "rounded-br-[12px]": a.type === "default" && t
      });
      if (n.type === "header")
        return /* @__PURE__ */ p("tr", { children: [
          a.type !== "droppel" && /* @__PURE__ */ i("td", { className: m(d, "border-transparent", h, "w-4") }),
          /* @__PURE__ */ i("td", { className: f, children: /* @__PURE__ */ p("div", { className: "flex flex-col py-3 gap-1", children: [
            (n.subtitle || n.rightSide) && /* @__PURE__ */ p("div", { className: "flex flex-row type-button-3 text-material-medium-3", children: [
              n.subtitle,
              n.rightSide && /* @__PURE__ */ p(E, { children: [
                /* @__PURE__ */ i("div", { className: "flex flex-1" }),
                n.rightSide
              ] })
            ] }),
            /* @__PURE__ */ i("p", { className: "type-header", children: n.title }),
            /* @__PURE__ */ i("p", { className: "type-callout text-material-medium-3", children: n.description })
          ] }) }),
          /* @__PURE__ */ i(
            "td",
            {
              className: m(
                f,
                g,
                a.type === "droppel" ? "w-1" : "w-4"
              )
            }
          )
        ] });
      const {
        icon: x,
        href: y,
        rightLabel: v,
        rightIcon: _ = /* @__PURE__ */ i(
          "img",
          {
            src: "/icons/chevron-right-grey-small.svg",
            width: 7,
            height: 11,
            alt: "Icon right"
          }
        ),
        onClick: w,
        modal: C,
        children: q,
        className: I,
        list: N
      } = n;
      let O = w || N && (() => r(N)) || C && (() => c(!0)) || void 0;
      const G = v !== void 0 || y || O ? /* @__PURE__ */ p(E, { children: [
        /* @__PURE__ */ i("div", { className: "w-2" }),
        v,
        !!(y || O) && a.type === "default" && /* @__PURE__ */ i("div", { className: "ml-4 transform group-hover:translate-x-1 transition-transform", children: _ })
      ] }) : void 0;
      return !O && y && (O = () => o(y)), /* @__PURE__ */ p(
        U.tr,
        {
          variants: {
            hidden: {
              opacity: 1
            },
            visible: {
              opacity: 1
            }
          },
          initial: "hidden",
          animate: "visible",
          exit: "hidden",
          className: m(I, "w-full overflow-hidden group", {
            "cursor-pointer": O,
            "hover:bg-material-main-1": !!O && a.type === "droppel",
            "type-callout text-material-heavy-1": u
          }),
          onClick: O,
          children: [
            /* @__PURE__ */ p(
              "td",
              {
                className: m(
                  a.type === "droppel" ? "w-1" : "w-4",
                  "border-transparent",
                  d,
                  h
                ),
                children: [
                  C && /* @__PURE__ */ i(
                    he,
                    {
                      open: l,
                      onClose: () => c(!1),
                      ...C,
                      title: C.title ?? n.children
                    }
                  ),
                  x && /* @__PURE__ */ i("div", { className: "flex flex-row justify-center items-center", children: x })
                ]
              }
            ),
            /* @__PURE__ */ i("td", { className: m(f), children: /* @__PURE__ */ p("div", { className: "flex flex-row justify-between gap-5", children: [
              /* @__PURE__ */ i(
                "div",
                {
                  className: m(
                    "flex flex-row items-center flex-grow",
                    u ? "py-3 min-h-[21px]" : "min-h-[44px] py-2"
                  ),
                  children: q
                }
              ),
              G && /* @__PURE__ */ i(E, { children: /* @__PURE__ */ i(
                "div",
                {
                  className: m(
                    "flex flex-row justify-end items-center text-right relative flex-grow",
                    u ? "py-3 min-h-[21px]" : "min-h-[44px] py-2"
                  ),
                  children: G
                }
              ) })
            ] }) }),
            /* @__PURE__ */ i(
              "td",
              {
                width: (a.type === "droppel" ? 1 : 4) * 4,
                className: m(
                  f,
                  g
                  // variant.type === "droppel" ? "w-1" : "w-4",
                )
              }
            )
          ]
        }
      );
    }
  }
}), me = b((e) => {
  const { attach: t, detatch: r, listId: n } = F(Ge), a = X();
  return B(() => () => r(a), [t, r, a, n]), B(() => t(a, e), [t, r, a, e]), n ? /* @__PURE__ */ i(E, {}) : /* @__PURE__ */ i(Ve, { children: /* @__PURE__ */ i(me, { ...e }) });
}), Rc = b((e) => /* @__PURE__ */ i(me, { ...e, type: "header" })), Oc = b(() => /* @__PURE__ */ i(me, { type: "seperator" })), Ve = b(
  ({ children: e, label: t, ctas: r, variant: n = { type: "default" }, className: a }) => {
    const [o, s] = M({}), l = k(() => Object.entries(o), [o]), c = X(), [u, d] = M(), f = k(
      () => ({
        attach(h, g) {
          s((x) => ({
            ...x,
            [h]: {
              item: g,
              index: x[h]?.index ?? Object.keys(x).length
            }
          }));
        },
        detatch(h) {
          s((g) => {
            const x = { ...g };
            return delete x[h].item, x;
          });
        },
        listId: c,
        variant: n
      }),
      [c]
    );
    return /* @__PURE__ */ i(Ge.Provider, { value: f, children: /* @__PURE__ */ p("div", { className: "flex flex-col gap-2 w-full relative", children: [
      !!(t || r) && /* @__PURE__ */ i(ql, { ctas: r, children: t }),
      u && /* @__PURE__ */ i("div", { className: "absolute left-", children: /* @__PURE__ */ i(Ve, { ...u, variant: { type: "droppel", side: "left" } }) }),
      /* @__PURE__ */ p(
        U.table,
        {
          variants: n.type === "droppel" ? {
            closed: {
              opacity: 0,
              y: -8,
              scale: 0.8,
              transition: { ease: "backOut", duration: 0.15 }
            },
            open: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { ease: "backOut", duration: 0.3 }
            }
          } : {
            closed: { opacity: 0 },
            open: { opacity: 1 }
          },
          initial: "closed",
          animate: "open",
          exit: "closed",
          className: m(
            a,
            "w-full table-auto overflow-auto",
            n.type !== "droppel" ? "origin-top-left" : [
              n.side === "left" ? "origin-top-left" : "origin-top-right",
              "border-spacing-y-[2px] rounded-xl min-w-[280px] px-1 py-0.5 border-separate shadow-modal bg-material"
            ]
          ),
          children: [
            /* @__PURE__ */ p("colgroup", { children: [
              /* @__PURE__ */ i(
                "col",
                {
                  style: {
                    width: l.every(([, { item: h }]) => {
                      if (!h) return !0;
                      switch (h.type) {
                        case "seperator":
                        case "header":
                          return !0;
                        default:
                          return !h.icon;
                      }
                    }) ? "1rem" : "auto"
                  }
                }
              ),
              /* @__PURE__ */ i("col", { style: { width: "auto", overflow: "auto" } }),
              /* @__PURE__ */ i("col", { style: { width: "1rem" } })
            ] }),
            /* @__PURE__ */ i("tbody", { children: /* @__PURE__ */ i(W, { children: l.filter(([, { item: h }]) => !!h).map(([h, { item: g }], x, y) => /* @__PURE__ */ Xr(
              jl,
              {
                ...g,
                key: h + x,
                last: x === y.length - 1,
                first: x === 0,
                openSublist: d
              }
            )) }) })
          ]
        }
      ),
      e
    ] }) });
  }
), Qi = () => F(Ge).listId !== void 0, Al = b(({ fullWidth: e }) => {
  const { footerLinks: t } = Ke(), { theme: r } = ae();
  return /* @__PURE__ */ i("footer", { className: "bg-primary-950 h-[52px] w-full flex flex-col justify-center items-center sticky bottom-0 backdrop-blur-[40px] z-[40]", children: /* @__PURE__ */ p(
    "div",
    {
      className: m(
        "container mx-auto gap-8 flex-row items-center flex w-full type-button-3 text-neutral-200/70",
        {
          "max-w-none": e
        }
      ),
      children: [
        /* @__PURE__ */ p("p", { children: [
          "© ",
          r === "zkpoker" ? "ZKPoker" : "PurePoker",
          " 2025"
        ] }),
        /* @__PURE__ */ i("div", { className: "flex flex-row gap-4", children: /* @__PURE__ */ i(
          z,
          {
            href: `https://x.com/${r === "zkpoker" ? "zkpokerapp?t=L5smCG0u8sNX9h0vCjgDiQ&s=09" : "purepokerapp"}`,
            isOutLink: !0,
            children: /* @__PURE__ */ i("img", { src: "/icons/twitter-gray.svg" })
          }
        ) }),
        /* @__PURE__ */ i("div", { className: "hidden lg:flex gap-8 flex-1 flex-row justify-end items-center", children: t?.map((n) => /* @__PURE__ */ i(
          z,
          {
            ...n,
            children: n.label
          },
          n.label.toString()
        )) })
      ]
    }
  ) });
}), Ml = b(
  ({ children: e, title: t, subTitle: r, ctas: n, image: a, mobileImage: o }) => /* @__PURE__ */ p("div", { className: "container mx-auto mb-8", children: [
    o && /* @__PURE__ */ i(J, { ...o, className: "flex mb-8 lg:hidden" }),
    /* @__PURE__ */ p("div", { className: "max-w-[800px] flex flex-col mx-auto", children: [
      /* @__PURE__ */ i("h1", { className: "type-top lg:type-display text-center mb-6", children: t }),
      r && /* @__PURE__ */ i("p", { className: "type-header text-center mb-8 text-material-medium-2 max-w-[650px] mx-auto", children: r }),
      n && n.length > 0 && /* @__PURE__ */ i("div", { className: "flex flex-row mb-6 gap-2 w-full justify-center", children: n?.map((s, l) => /* @__PURE__ */ Xr(Ie, { ...s, key: l })) })
    ] }),
    a && /* @__PURE__ */ i(
      J,
      {
        ...a,
        className: m(
          // '-mx-16',
          {
            "hidden lg:flex": o
          }
        )
      }
    ),
    e
  ] })
), Rl = "data:image/svg+xml,%3csvg%20width='7'%20height='11'%20viewBox='0%200%207%2011'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%205.26953C6.99613%205.08594%206.95934%204.91797%206.88963%204.76563C6.81992%204.60938%206.70954%204.45508%206.55851%204.30273L3.21112%200.751287C3.12382%200.658664%203.08017%200.612352%203.02847%200.579179C2.98264%200.549773%202.93232%200.52805%202.87948%200.51487C2.81988%200.5%202.75624%200.5%202.62896%200.5H1.81092C1.23785%200.5%200.951321%200.5%200.812442%200.615297C0.691821%200.715437%200.625151%200.866355%200.63235%201.02296C0.640639%201.20327%200.833596%201.41509%201.21951%201.83874L4.33942%205.26367L1.086%209.18953C0.739403%209.60777%200.566103%209.81689%200.563778%209.99342C0.561758%2010.1469%200.630334%2010.2928%200.749789%2010.3892C0.887193%2010.5%201.15879%2010.5%201.70198%2010.5H2.60167C2.73866%2010.5%202.80715%2010.5%202.87067%2010.483C2.92696%2010.4679%202.98018%2010.4431%203.02792%2010.4098C3.08181%2010.3721%203.12589%2010.3196%203.21404%2010.2148L6.55851%206.23633C6.71342%206.08398%206.82573%205.93164%206.89544%205.7793C6.96515%205.62305%207%205.45313%207%205.26953Z'%20fill='%23E7E7E7'/%3e%3c/svg%3e", Ol = b(({ children: e, ...t }) => {
  const { theme: r } = ae();
  return /* @__PURE__ */ p(
    z,
    {
      className: m(
        "flex flex-row group justify-center relative items-center w-full py-3 px-4 flex-shrink-0 z-100 overflow-hidden animation-scroll-gradient-slow bg-size-[200%_100%]",
        "bg-gradient-to-r type-button-3",
        {
          "from-primary-500 via-primary-600 to-primary-500": r === "zkpoker",
          "from-primary-500 via-primary-700 to-primary-500": r === "purepoker"
        }
      ),
      ...t,
      children: [
        e,
        Uo(t) && /* @__PURE__ */ i("img", { src: Rl, className: "ml-2 transition-transform group-hover:translate-x-1" })
      ]
    }
  );
}), He = Q({
  updateLayout: () => {
  },
  overrideProp: () => () => {
  },
  props: {}
}), El = () => F(He).props, Ec = b(({ children: e }) => {
  const [t, r] = M({}), n = Ke(), [a, o] = M({}), { banner: s } = ae(), {
    navbar: l,
    footer: c,
    hero: u,
    className: d,
    isFullScreen: f,
    container: h = "default"
  } = k(() => Object.values(a).reduce((y, { path: v, value: _ }) => (v && Eo(y, v, _), y), t), [t, a]), g = R(function(v, _, w) {
    return o((C) => ({ ...C, [v]: { path: _, value: w } })), () => o((C) => {
      const q = { ...C };
      return delete q[v], q;
    });
  }, []), x = R(
    (y) => r(y),
    []
  );
  return B(() => {
    window.document.documentElement?.classList[f ? "add" : "remove"]("global-full-screen");
  }, [f]), /* @__PURE__ */ p(
    He.Provider,
    {
      value: {
        updateLayout: x,
        overrideProp: g,
        props: {
          navbar: l,
          footer: c,
          hero: u,
          className: d,
          container: h
        }
      },
      children: [
        !f && !n.isOverlay && s && /* @__PURE__ */ i(Ol, { ...s }),
        /* @__PURE__ */ i(Zi, { ...l }),
        /* @__PURE__ */ p(Co, { fallback: /* @__PURE__ */ i(ke, { className: "m-auto" }), children: [
          /* @__PURE__ */ p(
            "main",
            {
              className: m(
                "w-full min-h-full flex-1 flex flex-col",
                d
              ),
              children: [
                u && /* @__PURE__ */ i(Ml, { ...u }),
                /* @__PURE__ */ i(
                  "div",
                  {
                    className: m(
                      "flex flex-col overflow-hidden basis-full flex-1",
                      { "pb-12": c }
                    ),
                    children: e
                  }
                )
              ]
            }
          ),
          c && /* @__PURE__ */ i(Al, { fullWidth: h === "large" })
        ] })
      ]
    }
  );
}), Bc = b(
  ({ children: e, ...t }) => {
    const { updateLayout: r } = F(He);
    return B(
      () => r(t),
      [
        t.navbar,
        t.className,
        t.footer,
        t.hero,
        t.container,
        r
      ]
    ), e;
  }
), Bl = (e, t) => {
  const r = X(), { overrideProp: n } = F(He), a = k(() => t, [t]), o = R(
    () => n(r, e, a),
    [r, e, a]
  );
  B(() => o(), [o]);
}, Lc = b(({ path: e, value: t }) => (Bl(e, t), null)), fn = Q({
  footerLinks: [],
  navbarTabs: [],
  override: () => () => {
  },
  NavbarUserComponent: () => /* @__PURE__ */ i(E, {})
}), Pc = b(({ children: e, ...t }) => {
  const [r, n] = M(), {
    footerLinks: a,
    NavbarUserComponent: o,
    isOverlay: s,
    hideUser: l,
    navbarTabs: c,
    navbarRightSide: u
  } = k(
    () => r ? Object.values(r).reduce((h, g) => ({ ...h, ...g }), t) : t,
    [t, r]
  ), d = R(function(g, x) {
    return n((y) => ({
      ...y,
      [g]: x
    })), () => n((y) => {
      const v = { ...y };
      return delete v[g], v;
    });
  }, []), f = k(() => ({
    footerLinks: a,
    NavbarUserComponent: o,
    isOverlay: s,
    hideUser: l,
    navbarTabs: c,
    navbarRightSide: u,
    override: d
  }), [a, o, s, l, c, u, d]);
  return /* @__PURE__ */ i(
    fn.Provider,
    {
      value: f,
      children: e
    }
  );
}), Ke = () => F(fn), Ll = (e) => {
  const t = X(), { override: r } = F(fn), n = k(() => e, [e]), a = R(
    () => r(t, n),
    [t, n]
  );
  B(() => a(), [a]);
}, Dc = b(({ children: e, ...t }) => (Ll(t), /* @__PURE__ */ i(E, { children: e }))), Pl = b((e) => {
  const { pathname: t } = Ti();
  if (e.mobileOnly) return null;
  switch (e.type) {
    case "link":
      return /* @__PURE__ */ p(
        z,
        {
          className: m("hidden lg:flex type-button-2 justify-center items-center", {
            "text-material-medium-2": t === e.href,
            "text-white": t !== e.href
          }),
          ...e,
          children: [
            e.label,
            e.comingSoon && /* @__PURE__ */ i("span", { className: "text-material-medium-2 rounded-full overflow-hidden material px-2 py-1 type-tiny ml-1", children: "Soon" })
          ]
        }
      );
    case "seperator":
      return /* @__PURE__ */ i("div", { className: "h-[24px] w-[1px] bg-material-main-2 hidden lg:flex" });
  }
}), Dl = "data:image/svg+xml,%3csvg%20width='11'%20height='7'%20viewBox='0%200%2011%207'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.0835%201.64453C0.941895%201.64453%200.810059%201.60791%200.687988%201.53467C0.565918%201.45654%200.46582%201.35645%200.387695%201.23438C0.30957%201.1123%200.270508%200.975586%200.270508%200.824219C0.270508%200.677734%200.30957%200.541016%200.387695%200.414062C0.46582%200.287109%200.565918%200.187012%200.687988%200.11377C0.810059%200.0405273%200.941895%200.00390625%201.0835%200.00390625H9.9165C10.063%200.00390625%2010.1973%200.0405273%2010.3193%200.11377C10.4414%200.187012%2010.5391%200.287109%2010.6123%200.414062C10.6904%200.541016%2010.7295%200.677734%2010.7295%200.824219C10.7295%200.975586%2010.6904%201.1123%2010.6123%201.23438C10.5391%201.35645%2010.4414%201.45654%2010.3193%201.53467C10.1973%201.60791%2010.063%201.64453%209.9165%201.64453H1.0835ZM1.0835%206.44189C0.941895%206.44189%200.810059%206.40527%200.687988%206.33203C0.565918%206.25879%200.46582%206.15869%200.387695%206.03174C0.30957%205.90479%200.270508%205.76807%200.270508%205.62158C0.270508%205.47021%200.30957%205.3335%200.387695%205.21143C0.46582%205.08936%200.565918%204.98926%200.687988%204.91113C0.810059%204.83301%200.941895%204.79395%201.0835%204.79395H9.9165C10.063%204.79395%2010.1973%204.83301%2010.3193%204.91113C10.4414%204.98926%2010.5391%205.08936%2010.6123%205.21143C10.6904%205.3335%2010.7295%205.47021%2010.7295%205.62158C10.7295%205.76807%2010.6904%205.90479%2010.6123%206.03174C10.5391%206.15869%2010.4414%206.25879%2010.3193%206.33203C10.1973%206.40527%2010.063%206.44189%209.9165%206.44189H1.0835Z'%20fill='white'/%3e%3c/svg%3e", wi = b(
  ({ variant: e = "tabs" }) => {
    const { navbarTabs: t } = Ke();
    switch (e) {
      case "droppel":
        return /* @__PURE__ */ i(E, { children: /* @__PURE__ */ i(Ve, { variant: { type: "droppel", side: "right" }, children: t.filter((r) => r.type === "link").map((r, n) => /* @__PURE__ */ i(me, { onClick: r.onClick, href: r.href, children: r.label }, n)) }) });
      case "tabs":
        return /* @__PURE__ */ i(E, { children: t.map((r, n) => /* @__PURE__ */ i(Pl, { ...r }, n)) });
    }
  }
), Zi = b(
  ({ hideUser: e }) => {
    const { container: t, isFullScreen: r } = El(), { pathname: n } = Ti(), [a, o] = M(!1), { NavbarUserComponent: s, isOverlay: l, navbarRightSide: c } = Ke(), { theme: u } = ae();
    return B(() => o(!1), [n]), /* @__PURE__ */ i(E, { children: /* @__PURE__ */ p("nav", { className: m(
      "flex flex-col w-full z-40 left-0 top-0 px-4 py-[var(--navbar-space-top)]",
      r || l ? "fixed" : "sticky"
    ), children: [
      /* @__PURE__ */ p(
        "div",
        {
          className: m(
            "ease container ease-in-out transition-[max-width] duration-[750ms] relative z-[1] p-0",
            {
              "max-w-none lg:max-w-[3000px]": t === "large"
            }
          ),
          children: [
            /* @__PURE__ */ p(
              "div",
              {
                className: m(
                  "w-full gap-3 flex items-center flex-row justify-between",
                  !l && [
                    "material h-[var(--navbar-inner-height)] pl-3 pr-0 lg:px-2.5",
                    {
                      "rounded-[18px] lg:rounded-full": u === "zkpoker",
                      "rounded-[18px] shadow-inner border-material-main-2 border-1": u === "purepoker"
                    }
                  ]
                ),
                children: [
                  /* @__PURE__ */ p(
                    z,
                    {
                      href: "/",
                      className: "relative z-[1] flex flex-row gap-2 items-center justify-start pointer-events-auto",
                      children: [
                        /* @__PURE__ */ i(
                          J,
                          {
                            type: "png",
                            width: 46,
                            height: 46,
                            src: "/logo.png",
                            alt: "logo",
                            className: "size-[32px]",
                            sizes: 3
                          }
                        ),
                        /* @__PURE__ */ i("span", { className: "type-button-2 text-neutral-200/70", children: "Beta" })
                      ]
                    }
                  ),
                  l ? /* @__PURE__ */ i("div", { className: "flex flex-1" }) : /* @__PURE__ */ i(wi, {}),
                  c,
                  /* @__PURE__ */ p("div", { className: "flex flex-row justify-center items-center", children: [
                    !e && /* @__PURE__ */ i(s, {}),
                    /* @__PURE__ */ i(
                      z,
                      {
                        className: "pl-2 pr-4 flex lg:hidden",
                        onClick: () => o((d) => !d),
                        children: /* @__PURE__ */ i(
                          J,
                          {
                            type: "svg",
                            src: Dl,
                            alt: "hamburger",
                            className: "w-[15px] h-[11px] pointer-events-auto"
                          }
                        )
                      }
                    )
                  ] })
                ]
              }
            ),
            a && /* @__PURE__ */ i("div", { className: "absolute top-full mt-0.5 right-0", children: /* @__PURE__ */ i(W, { children: /* @__PURE__ */ i(wi, { variant: "droppel" }) }) })
          ]
        }
      ),
      !l && /* @__PURE__ */ p(E, { children: [
        u === "zkpoker" && /* @__PURE__ */ i("div", { className: "pb-[1px] bg-gradient-to-r from-transparent via-[rgba(0,0,0,0.12)] to-transparent w-full" }),
        /* @__PURE__ */ i("div", { className: "absolute top-0 inset-x-0 z-[0] h-[calc(var(--navbar-height)/2+0.5rem)] linear-gradient-mask" })
      ] })
    ] }) });
  }
), zc = b(() => {
  const e = Io();
  return /* @__PURE__ */ p("div", { children: [
    /* @__PURE__ */ i(Zi, { hideUser: !0 }),
    /* @__PURE__ */ i("div", { className: "m-auto container gap-4 flex flex-col", children: /* @__PURE__ */ i(fe, { error: e }) })
  ] });
}), Fc = (...e) => e.reduce((t, r) => t > r ? t : r, 0n), Uc = (...e) => e.reduce(
  (t, r) => (t !== void 0 && t < r ? t : r) ?? 0n,
  void 0
) ?? 0n, Gc = (e, t) => {
  if (e !== void 0)
    return BigInt(t === 0 ? e.toFixed() : e.mul(_e(10).pow(t)).toFixed());
}, Vc = (e, t) => {
  if (e !== void 0)
    return t === 0 ? _e(e.toString()) : _e(e.toString()).div(_e(10).pow(t));
}, zl = (e, t, r = 2) => {
  if (t === 0) return e.toString();
  const n = e.toString().slice(0, -t), a = e.toString().slice(-t).padStart(t, "0").slice(0, r).replace(/0+$/, "");
  return !n && !a ? "0" : n ? a ? `${n}.${a}` : n : `0.${a}`;
}, Fl = 0, Hc = b(({ experience_points: e = [], className: t, size: r = "medium" }) => {
  const n = e[0] || 0n;
  return /* @__PURE__ */ i(
    "div",
    {
      className: m(
        "inline items-center justify-center whitespace-nowrap text-material-heavy-1",
        t,
        {
          "type-header": r === "big",
          "type-button-2": r === "medium",
          "type-button-3": r === "small"
        }
      ),
      children: `${zl(n, Fl)} XP`
    }
  );
}), oe = b(
  ({
    children: e,
    label: t,
    className: r,
    showClear: n,
    onClear: a,
    isRight: o,
    isFixedHeight: s = !0,
    rightPadding: l = !0,
    quickActions: c
  }) => {
    const u = Qi(), d = k(() => !n || !a ? null : /* @__PURE__ */ i(
      z,
      {
        onClick: a,
        className: m(
          "absolute top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full w-6 h-6 bg-material-main-1 cursor-pointer",
          u ? "right-0" : "right-3"
        ),
        children: /* @__PURE__ */ i(
          "img",
          {
            src: Yi,
            className: "w-[12px] h-[12px]",
            alt: "Clear"
          }
        )
      }
    ), [u, n, a]), f = k(() => c ? /* @__PURE__ */ i("div", { className: "flex flex-row gap-1 mr-2", children: c.map((h, g) => /* @__PURE__ */ i(
      z,
      {
        className: "bg-material-main-1 flex flex-row whitespace-nowrap rounded-[8px] px-2 py-1 type-tiny",
        onClick: h.action,
        children: h.label
      },
      g
    )) }) : null, [c]);
    return u ? /* @__PURE__ */ i(
      me,
      {
        rightLabel: o ? /* @__PURE__ */ p(E, { children: [
          e,
          !o && d
        ] }) : void 0,
        children: o ? /* @__PURE__ */ p("div", { className: "whitespace-nowrap truncate flex-shrink flex-row flex flex-wrap justify-start gap-4 items-center", children: [
          t,
          f
        ] }) : /* @__PURE__ */ p("div", { className: "relative w-full truncate", children: [
          f,
          e,
          d
        ] })
      }
    ) : /* @__PURE__ */ p(
      "div",
      {
        className: m(
          "flex flex-col justify-start items-start gap-2",
          r
        ),
        children: [
          t && /* @__PURE__ */ i("div", { className: "type-callout text-material-medium-2", children: t }),
          /* @__PURE__ */ p(
            "div",
            {
              className: m(
                "bg-material-main-1 pl-4 rounded-[12px] w-full relative flex flex-row justify-start items-center min-h-[42px] transition-all duration-75",
                { "h-[42px]": s, "pr-4": l && !d, "pr-12": d }
              ),
              children: [
                f,
                e,
                d
              ]
            }
          )
        ]
      }
    );
  }
), _i = (e, t = H(0)) => {
  try {
    return H(e);
  } catch {
    return t;
  }
}, Ci = (e, t) => {
  if (t === void 0) return _i(e);
  const r = H(10).pow(t);
  return _i(e).mul(r).round().div(r);
}, pn = b(
  Ii(
    ({
      disabled: e,
      placeholder: t,
      defaultValue: r,
      min: n,
      max: a,
      step: o,
      onChange: s,
      onChangeBigFloat: l,
      value: c,
      maxDecimals: u = 8,
      className: d,
      pad: f = 0,
      orientation: h = "left"
    }, g) => {
      const x = k(() => {
        if (o === void 0) return u;
        const T = H(o).toString().split(".")[1]?.length || 0;
        return Math.max(u, T);
      }, [u, o]), y = V(null), [v, _] = M(c ?? r ? H(c ?? r) : void 0), [w, C] = M(!1), q = R(
        (A) => {
          const T = H(A);
          s && s(T.toNumber()), l && l(T);
        },
        [s, l]
      ), I = R((A) => A === void 0 ? "" : f ? A.toFixed().padStart(f, "0") : A.toFixed(), [f]), N = R((A) => {
        if (A === void 0 || A === "" || A === "-" || A === ".") return;
        let T = H(A);
        return o !== void 0 && (T = H(o).mul(Math.floor(T.div(H(o)).toNumber()))), n !== void 0 && T.lt(n) ? H(n) : a !== void 0 && T.gt(a) ? H(a) : (T = Ci(T, x), T);
      }, [n?.toString(), a?.toString(), o?.toString(), x?.toString()]);
      B(() => {
        const A = N(c), T = N(v);
        A !== T && (_(A), y.current && (y.current.value = I(A)));
      }, [c?.toString(), v?.toFixed(), w, N, I]);
      const O = R(() => {
        y.current && (y.current.value = "", y.current.focus()), _(void 0), q && q(0);
      }, [q]);
      No(
        g,
        () => ({
          setInternalValue: (A) => {
            const T = N(A?.toString() || "");
            _(T), y.current && (y.current.value = I(T)), q && T !== void 0 && q(T);
          },
          getInternalValue: () => v,
          focus: () => y.current?.focus(),
          clear: O
        }),
        [v?.toFixed(), q, N, I, O]
      );
      const G = R((A) => {
        const T = A.target.value;
        if (!(/^-?\d*\.?\d*$/.test(T) || T === "" || T === "-" || T === "."))
          return A.preventDefault(), !1;
      }, []), j = R(() => {
        if (C(!1), !y.current) return;
        const A = y.current.value, T = N(A);
        if (T !== void 0) {
          const Y = I(T);
          A !== Y && (y.current.value = Y), _(T), q && q(T);
        } else
          y.current.value = "", _(void 0);
      }, [N, q, I]), P = R(() => {
        C(!0);
      }, []), S = R(
        (A) => {
          if (A.key === "Enter" && y.current) {
            const T = N(y.current.value);
            T !== void 0 && (y.current.value = I(T), _(T), q && q(T)), y.current.blur();
          }
          if (A.key === "Escape" && O(), A.key === "ArrowUp" || A.key === "ArrowDown") {
            if (A.preventDefault(), !y.current) return;
            let T;
            try {
              T = H(y.current.value === "" ? 0 : y.current.value);
            } catch {
              T = H(0);
            }
            const Y = H(o === void 0 ? 1 : o), ge = H(A.key === "ArrowUp" ? 1 : -1);
            let K;
            o !== void 0 ? (K = T.add(Y.mul(ge)).div(Y).round().mul(Y), K.eq(T) && (K = T.add(ge.mul(Y)))) : K = T.add(ge.mul(Y)), n !== void 0 && K.lt(n) && (K = H(n)), a !== void 0 && K.gt(a) && (K = H(a)), K = Ci(K, x), y.current.value = I(K), _(K), q && q(K);
          }
        },
        [N, q, o?.toString(), n?.toString(), a?.toString(), x?.toString(), O, I]
      );
      return /* @__PURE__ */ i(
        "input",
        {
          ref: y,
          disabled: e,
          type: "text",
          min: n?.toString(),
          max: a?.toString(),
          inputMode: "numeric",
          placeholder: t,
          defaultValue: v !== void 0 ? v.toString() : "",
          onFocus: P,
          onBlur: j,
          onChange: G,
          onKeyDown: S,
          style: {
            fontVariantNumeric: "tabular-nums",
            width: o === 1 && a !== void 0 ? `${a.toString().length + 1}ch` : void 0
          },
          className: m(
            d,
            "bg-transparent active:outline-hidden focus:outline-hidden",
            h === "left" ? "text-left" : "text-right",
            { "opacity-50": e }
          )
        }
      );
    }
  )
), Ul = b(
  ({
    disabled: e,
    label: t,
    defaultValue: r,
    symbol: n,
    min: a,
    max: o,
    step: s,
    onChange: l,
    onChangeBigFloat: c,
    value: u,
    maxDecimals: d = 8,
    hideLabelInList: f = !1,
    className: h,
    hideClear: g = !1,
    quickActions: x,
    minQuickAction: y,
    maxQuickAction: v
  }) => {
    const _ = V(null), w = k(() => _.current?.getInternalValue() !== void 0 && !g, [_.current, g]), C = (I) => {
      const N = _e(I);
      l && l(N.toNumber()), c && c(N);
    }, q = k(() => {
      const I = x || [];
      if (y && a !== void 0 && I.push({ label: "Min", value: a }), v && o !== void 0 && I.push({ label: "Max", value: o }), !(I.length === 0 || !C))
        return I.map((N) => ({
          ...N,
          action: () => C(N.value)
        }));
    }, [y, v, a, o, x]);
    return /* @__PURE__ */ i(
      oe,
      {
        label: t,
        showClear: w,
        onClear: !e && _.current?.clear || void 0,
        isRight: !f,
        className: h,
        quickActions: q,
        children: /* @__PURE__ */ p("div", { className: "flex flex-row w-full h-full justify-end items-center", children: [
          /* @__PURE__ */ i(
            pn,
            {
              ref: _,
              value: u,
              min: a,
              max: o,
              step: s,
              onChangeBigFloat: C,
              maxDecimals: d,
              orientation: "right",
              defaultValue: r,
              disabled: e,
              className: "w-full"
            }
          ),
          n && /* @__PURE__ */ i("span", { className: m("ml-2", { "opacity-50": e }), children: n })
        ] })
      }
    );
  }
), Gl = b(
  ({ onChange: e, disabled: t = !1, checked: r = !1 }) => /* @__PURE__ */ p(
    Bo,
    {
      className: "relative w-[52px] h-[30px] inline-flex items-center m-0 p-[2px]",
      checked: r,
      onCheckedChange: e,
      disabled: t,
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            className: m(
              "absolute rounded-full w-full h-full left-0 top-0 transition-colors pointer-events-none z-[0] duration-300 shadow-switch-box",
              r ? "bg-green-500" : "bg-black/[0.12]"
            )
          }
        ),
        /* @__PURE__ */ i(
          U.div,
          {
            initial: !1,
            animate: { x: r ? 22 : 0 },
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 20
            },
            className: m(
              "h-full z-[1] aspect-square rounded-full bg-neutral-200 shadow-switch-box-knob ",
              { "opacity-50": t }
            )
          }
        )
      ]
    }
  )
), Vl = b(
  ({ label: e, ...t }) => /* @__PURE__ */ i(me, { rightLabel: /* @__PURE__ */ i(Gl, { ...t }), children: e })
), Hl = b(
  ({
    isArea: e = !1,
    icon: t,
    value: r,
    defaultValue: n,
    type: a = "text",
    onChange: o,
    label: s,
    placeholder: l,
    disabled: c,
    maxLength: u,
    pattern: d,
    error: f
  }) => {
    const h = V(null), [g, x] = M(r ?? n ?? ""), [y, v] = M(!1);
    B(() => {
      r !== void 0 && r !== g && !y && x(r);
    }, [r, g, y]);
    const _ = R((j) => j ? u !== void 0 && j.length > u ? j.slice(0, u) : d && !new RegExp(d).test(j) ? g || "" : a === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(j) && j !== "" ? y ? j : g || "" : j : "", [g, u, d, a, y]), w = R(
      (j) => {
        const P = j.target.value, S = _(P);
        x(S), o && o(S);
      },
      [o, _]
    ), C = R(() => {
      v(!0);
    }, []), q = R(() => {
      if (v(!1), !h.current) return;
      const j = h.current.value, P = _(j);
      x(P), o && o(P);
    }, [o, _]), I = R(
      (j) => {
        j.key === "Enter" && !e && h.current?.blur(), j.key === "Escape" && (x(""), o && o(""));
      },
      [e, o]
    ), N = R(() => {
      x(""), o && o(""), setTimeout(() => {
        h.current?.focus();
      }, 0);
    }, [o]), O = k(() => e ? "textarea" : "input", [e]), G = r !== void 0 ? r : g;
    return /* @__PURE__ */ i(
      oe,
      {
        showClear: !!G,
        onClear: N,
        label: s,
        isFixedHeight: !e,
        rightPadding: !e,
        children: /* @__PURE__ */ p("div", { className: "flex flex-row w-full h-full justify-start items-center", children: [
          t && /* @__PURE__ */ i("div", { className: "ml-2", children: t }),
          /* @__PURE__ */ i(
            O,
            {
              ref: h,
              type: a,
              defaultValue: G,
              onChange: w,
              onFocus: C,
              onBlur: q,
              onKeyDown: I,
              placeholder: l || `${s}`,
              disabled: c,
              maxLength: u,
              className: m(
                "bg-transparent w-full h-full inline focus:outline-none",
                e ? "min-h-[42px] py-2" : "h-full",
                t ? "ml-2" : "",
                { "opacity-50": c }
              )
            }
          )
        ] })
      }
    );
  }
), Kl = b(
  ({ label: e, ...t }) => {
    const r = Qi();
    return /* @__PURE__ */ i(oe, { isRight: !0, label: e, children: /* @__PURE__ */ i(
      _l,
      {
        ...t,
        className: m({ "w-full": !r })
      }
    ) });
  }
), $l = b(
  ({ min: e, max: t, label: r, step: n, value: a, onChange: o }) => {
    const [s, l] = M(!1), [c, u] = M();
    B(() => {
      if (!a) return;
      if (c === void 0) {
        u(!1);
        return;
      }
      u(!0);
      const f = setTimeout(() => u(!1), 1e3);
      return () => clearTimeout(f);
    }, [a]);
    const d = k(
      () => c || s,
      [c, s]
    );
    return /* @__PURE__ */ i(oe, { label: r, isRight: !0, children: /* @__PURE__ */ p(
      Me.Root,
      {
        min: e,
        max: t,
        step: n,
        value: [a],
        onValueChange: ([f]) => o(f),
        onPointerDown: () => l(!0),
        onPointerUp: () => l(!1),
        className: "w-full relative flex items-center h-[10px] min-w-[120px]",
        children: [
          /* @__PURE__ */ i(Me.Track, { className: "relative h-full w-full material overflow-hidden", children: /* @__PURE__ */ i(Me.Range, { className: "absolute h-full material bg-white/70 rounded-full min-w-[10px]", children: /* @__PURE__ */ i("div", { className: "absolute right-[2px] w-[6px] h-[6px] top-[2px] bg-black rounded-full" }) }) }),
          /* @__PURE__ */ i(
            Me.Thumb,
            {
              className: m("h-full relative transition-all"),
              children: /* @__PURE__ */ i(
                "div",
                {
                  className: m(
                    "p-3 type-button-2 bg-white text-black rounded-[12px] shadow-md transition-all duration-150",
                    d ? "opacity-100 scale-100 -translate-y-8" : "opacity-0 scale-95 -translate-y-7"
                  ),
                  children: a.toFixed(0)
                }
              )
            }
          )
        ]
      }
    ) });
  }
), Wl = b(
  ({ onChange: e, value: t, ...r }) => {
    switch (r.type) {
      case "text":
      case "email":
        return /* @__PURE__ */ i(
          Hl,
          {
            error: r.error,
            label: r.label,
            value: t,
            onChange: e,
            type: r.type
          }
        );
      case "toggle":
        return /* @__PURE__ */ i(
          Vl,
          {
            checked: typeof t > "u" ? r.defaultValue : t,
            onChange: e,
            label: r.label
          }
        );
      case "slider":
        return /* @__PURE__ */ i(
          $l,
          {
            value: t,
            onChange: e,
            label: r.label,
            min: r.min,
            max: r.max
          }
        );
      case "dropdown":
        return /* @__PURE__ */ i(
          Kl,
          {
            placeholder: "" + r.defaultValue,
            value: t,
            onChange: e,
            options: r.options,
            label: r.label
          }
        );
      case "button":
        return /* @__PURE__ */ i("button", { onClick: e, children: r.label });
      // Assuming the button triggers the onChange
      case "number":
        return /* @__PURE__ */ i(
          Ul,
          {
            ...r,
            value: t,
            onChange: e
          }
        );
      default:
        return /* @__PURE__ */ p("p", { children: [
          "Unkown field type ",
          r.type
        ] });
    }
  }
), Kc = b(
  ({
    fields: e,
    onChange: t,
    onConfirm: r,
    onCancel: n,
    cancelLabel: a = "Cancel",
    confirmLabel: o = "Confirm",
    values: s,
    children: l,
    isLoading: c = !1,
    cancelColor: u
  }) => {
    const [d, f] = M(e.map((v) => v.defaultValue));
    B(() => f(e.map((v) => v.defaultValue)), [e]);
    const h = k(
      () => s || d,
      [s, d]
    ), [g, x] = M(), y = R(() => {
      if (r)
        try {
          r(h);
        } catch (v) {
          x(v);
        }
    }, [r, h]);
    return /* @__PURE__ */ p(Ve, { children: [
      e.map((v, _) => /* @__PURE__ */ i(
        Wl,
        {
          ...v,
          value: h[_],
          onChange: (w) => {
            if (s) {
              const C = [
                ...JSON.parse(JSON.stringify(s))
              ];
              C[_] = w, t && t(C);
            } else
              f((C) => {
                const q = [...C];
                return q[_] = w, q;
              });
          }
        },
        v.name ?? "" + _
      )),
      l,
      /* @__PURE__ */ i(fe, { error: g }),
      (r || n) && /* @__PURE__ */ p(un, { children: [
        n ? /* @__PURE__ */ i(
          de,
          {
            color: u,
            onClick: n,
            variant: "naked",
            children: a
          }
        ) : /* @__PURE__ */ i("div", {}),
        r && /* @__PURE__ */ i(
          de,
          {
            onClick: y,
            variant: "filled",
            isLoading: c,
            children: o
          }
        )
      ] })
    ] });
  }
), $c = b(({ onBack: e, title: t, subtitle: r, icon: n, className: a }) => /* @__PURE__ */ p(
  "div",
  {
    className: m(
      "flex flex-col gap-4 m-auto justify-center text-center items-center",
      a
    ),
    children: [
      n && /* @__PURE__ */ i(J, { ...n }),
      /* @__PURE__ */ i("p", { className: "text-neutral-200/70 type-top", children: t }),
      r && /* @__PURE__ */ i("p", { className: "text-neutral-200/70 ", children: r }),
      e && /* @__PURE__ */ i(Ie, { size: "large", onClick: e, children: "Go back" })
    ]
  }
)), Wc = (e) => {
  const t = Math.floor(e / 60), r = e % 60;
  return t === 0 ? `${r} seconds` : t === 1 ? "1 minute" : r === 0 ? `${t} minutes` : `${t} minutes and ${r} seconds`;
}, Ni = (e) => new Date(Number(e / 1000000n)), Xl = (e) => BigInt(e.getTime()) * 1000000n, Xc = (e) => BigInt(e.getTime()) * 1000000n, Yc = (e, t = "yyyy-MM-dd HH:mm") => {
  try {
    return Lo(
      Ni(e),
      Intl.DateTimeFormat().resolvedOptions().timeZone,
      t
    );
  } catch {
    return Ni(e).toISOString().slice(0, 16);
  }
}, ue = b(({ value: e, min: t, max: r, onChange: n, suffix: a }) => /* @__PURE__ */ p("div", { className: "flex flex-row", children: [
  /* @__PURE__ */ i(
    pn,
    {
      value: Number(e),
      min: t,
      max: r,
      step: 1,
      onChange: (o) => n(BigInt(o)),
      orientation: "right",
      pad: 2
    }
  ),
  /* @__PURE__ */ i("span", { className: "text-material-heavy-1 ml-[1px]", children: a })
] })), Jc = b(
  ({
    label: e,
    datetime_ns: t = Xl(/* @__PURE__ */ new Date()),
    min_ns: r,
    max_ns: n,
    showSeconds: a = !1,
    showTime: o = !0,
    onChange: s
  }) => {
    const l = k(() => {
      const u = Number(t / 1000000n), d = new Date(u);
      return {
        nanoSeconds: t % 1000000n,
        seconds: BigInt(d.getSeconds()),
        minutes: BigInt(d.getMinutes()),
        hours: BigInt(d.getHours()),
        days: BigInt(d.getDate()),
        // 1-31
        months: BigInt(d.getMonth() + 1),
        // 1-12
        years: BigInt(d.getFullYear())
      };
    }, [t]), c = R((u) => {
      if (!s) return;
      const d = {
        nanoSeconds: u.nanoSeconds ?? l.nanoSeconds,
        seconds: u.seconds ?? l.seconds,
        minutes: u.minutes ?? l.minutes,
        hours: u.hours ?? l.hours,
        days: u.days ?? l.days,
        months: u.months ?? l.months,
        years: u.years ?? l.years
      };
      let f = Number(d.seconds), h = Number(d.minutes) + Math.floor(f / 60);
      f %= 60, f < 0 && (f += 60, h--);
      let g = Number(d.hours) + Math.floor(h / 60);
      h %= 60, h < 0 && (h += 60);
      const x = new Date(
        Number(d.years),
        0,
        // Start at January
        1,
        // Start at day 1
        0,
        0,
        0
      );
      x.setMonth(x.getMonth() + Number(d.months) - 1), x.setDate(x.getDate() + Number(d.days) - 1), x.setHours(g), x.setMinutes(h), x.setSeconds(f);
      let v = BigInt(x.getTime()) * 1000000n + d.nanoSeconds;
      r && v < r && (v = r), n && v > n && (v = n), s(v);
    }, [l, s, r, n]);
    return /* @__PURE__ */ i(oe, { isRight: !0, label: e ?? "Date", children: /* @__PURE__ */ p("div", { className: "flex flex-row gap-2", children: [
      /* @__PURE__ */ p("div", { className: "flex flex-row gap-0.5 bg-material-main-1 rounded-full px-2 py-0.5 w-full", children: [
        /* @__PURE__ */ i(
          ue,
          {
            value: l.years,
            min: 2e3,
            max: 2999,
            onChange: (u) => c({ years: u }),
            suffix: "Y"
          }
        ),
        /* @__PURE__ */ i(
          ue,
          {
            value: l.months,
            min: 0,
            max: 13,
            onChange: (u) => c({ months: u }),
            suffix: "M"
          }
        ),
        /* @__PURE__ */ i(
          ue,
          {
            value: l.days,
            min: 0,
            max: 32,
            onChange: (u) => c({ days: u }),
            suffix: "D"
          }
        )
      ] }),
      o && /* @__PURE__ */ p("div", { className: "flex flex-row gap-0.5 bg-material-main-1 rounded-full px-2 py-0.5", children: [
        /* @__PURE__ */ i(
          ue,
          {
            value: l.hours,
            min: -1,
            max: 24,
            onChange: (u) => c({ hours: u }),
            suffix: "h"
          }
        ),
        /* @__PURE__ */ i(
          ue,
          {
            value: l.minutes,
            min: -1,
            max: 60,
            onChange: (u) => c({ minutes: u }),
            suffix: "m"
          }
        ),
        a && /* @__PURE__ */ i(
          ue,
          {
            value: l.seconds,
            min: -1,
            max: 60,
            onChange: (u) => c({ seconds: u }),
            suffix: "s"
          }
        )
      ] })
    ] }) });
  }
), Qc = b(
  ({ value: e, onChange: t, label: r }) => {
    const n = R(
      (o) => t(o.target.files?.[0]),
      [t]
    ), a = X();
    return /* @__PURE__ */ p(oe, { label: r, isFixedHeight: !1, children: [
      /* @__PURE__ */ p(
        "label",
        {
          htmlFor: a,
          className: m(
            "flex w-full cursor-pointer items-center",
            e ? "flex-row justify-between gap-3" : "gap-6 py-8 flex-col justify-start"
          ),
          children: [
            e ? /* @__PURE__ */ p(E, { children: [
              /* @__PURE__ */ i(
                "img",
                {
                  src: URL.createObjectURL(e),
                  className: "w-[48px] h-[48px] rounded-[8px] my-3"
                }
              ),
              /* @__PURE__ */ i("p", { children: e.name }),
              /* @__PURE__ */ i("div", { className: "flex flex-1" })
            ] }) : /* @__PURE__ */ i("p", { className: "text-material-medium-1 type-button-3", children: "Drop here or..." }),
            /* @__PURE__ */ i(
              Ie,
              {
                size: "small",
                className: "pointer-events-none text-material-diabolical",
                children: e ? "Upload new" : "Select"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ i(
        "input",
        {
          type: "file",
          id: a,
          onChange: n,
          placeholder: "" + r,
          className: m("hidden")
        }
      )
    ] });
  }
);
function Si({
  tabs: e,
  value: t,
  onChange: r,
  className: n,
  variant: a = "tabs"
}) {
  const o = k(() => {
    if (a !== "tabs") return;
    const l = e.findIndex((u) => u.value === t);
    if (l === -1) return;
    const c = 100 / e.length;
    return {
      left: `${(l * c).toFixed(2)}%`,
      right: `${((e.length - l - 1) * c).toFixed(2)}%`
    };
  }, [e, t, a]), s = dn();
  return /* @__PURE__ */ p(
    "div",
    {
      className: m(
        "flex flex-row relative",
        {
          "shadow-switch-box bg-black/[0.12] p-1 rounded-full": a === "tabs",
          [m({
            "-mx-4 w-[calc(100%+16px*2)] px-4 lg:-mx-8 lg:w-[calc(100%+32px*2)] lg:px-8": s
          }, "gap-0.5 overflow-auto")]: a === "buttons"
        },
        n
      ),
      children: [
        a === "tabs" && /* @__PURE__ */ i("div", { className: "absolute inset-1", children: /* @__PURE__ */ i(W, { children: o && /* @__PURE__ */ i(
          U.div,
          {
            variants: {
              shown: { opacity: 1, ...o },
              hidden: { opacity: 0, ...o }
            },
            animate: "shown",
            exit: "hidden",
            initial: "hidden",
            transition: { duration: 0.3 },
            className: "rounded-full material absolute h-full top-0 bottom-0 z-0"
          }
        ) }) }),
        e.map(({ value: l, label: c, disabled: u }) => /* @__PURE__ */ i(
          z,
          {
            className: m(
              "flex justify-center items-center px-4 relative z-1",
              {
                "opacity-50": u,
                "w-full h-8 type-button-3 rounded-full": a === "tabs",
                [m("type-button-2 material rounded-xl h-[42px] whitespace-nowrap", {
                  "bg-white text-black": t === l,
                  "text-white": t !== l
                })]: a === "buttons"
              }
            ),
            onClick: u ? void 0 : () => r(l),
            children: c
          },
          l
        ))
      ]
    }
  );
}
function Zc({
  label: e,
  ...t
}) {
  return e ? /* @__PURE__ */ p(
    "div",
    {
      className: m(
        "flex flex-col justify-start items-start gap-2",
        t.className
      ),
      children: [
        /* @__PURE__ */ i("div", { className: "type-callout text-material-medium-2", children: e }),
        /* @__PURE__ */ i(Si, { ...t, className: "w-full", variant: "buttons" })
      ]
    }
  ) : /* @__PURE__ */ i(Si, { ...t });
}
const Hr = b(({ value: e, suffix: t, min: r = -1, max: n, onChange: a }) => /* @__PURE__ */ p("label", { className: "rounded-full flex flex-row", children: [
  /* @__PURE__ */ i(
    pn,
    {
      value: e,
      min: r,
      max: n,
      step: 1,
      onChange: a,
      orientation: "right",
      pad: 2
    }
  ),
  /* @__PURE__ */ i("span", { className: "text-material-heavy-1 ml-[1px]", children: t })
] })), eu = b(({
  label: e,
  nanoseconds: t,
  seconds: r,
  showSeconds: n = !1,
  hideHours: a = !1,
  onChangeNanoseconds: o,
  onChangeSeconds: s,
  maxHours: l = 9999n
}) => {
  const c = k(() => r ?? (t ? t / BigInt(1e9) : BigInt(0)), [t, r]), u = k(() => c % 60n, [c]), d = k(() => c / 60n % 60n, [c]), f = k(() => c / 3600n, [c]), h = k(() => l * 3600n + 59n * 60n + 59n, [l]), g = R((x) => {
    let y = x(c);
    y < 0 && (y = 0n), y > h && (y = h), o && o(y * BigInt(1e9)), s && s(y);
  }, [o, s, c, l]);
  return /* @__PURE__ */ i(E, { children: /* @__PURE__ */ i(oe, { isRight: !0, label: e, children: /* @__PURE__ */ p("div", { className: "flex flex-row gap-0.5 justify-center bg-material-main-1 rounded-full px-2 py-0.5", children: [
    !a && /* @__PURE__ */ i(
      Hr,
      {
        value: Number(f),
        suffix: "h",
        max: Number(l),
        onChange: (x) => g(() => BigInt(x) * 3600n + d * 60n + u)
      }
    ),
    /* @__PURE__ */ i(
      Hr,
      {
        value: Number(d),
        suffix: "m",
        max: 60,
        onChange: (x) => g(() => f * 3600n + BigInt(x) * 60n + u)
      }
    ),
    n && /* @__PURE__ */ i(
      Hr,
      {
        value: Number(u),
        suffix: "s",
        max: 60,
        onChange: (x) => g(() => f * 3600n + d * 60n + BigInt(x))
      }
    )
  ] }) }) });
}), Yl = b(({ progress: e, className: t }) => {
  const r = V(null), n = re(r), a = k(
    () => n.width && n.height ? Math.max(n.height, n.width * Math.max(0, Math.min(1, e))) : void 0,
    [n.width, e]
  );
  return /* @__PURE__ */ i(
    "div",
    {
      className: m(
        t,
        "h-[10px] backdrop-blur-2xl rounded-full",
        { relative: !t?.includes("absolute") }
      ),
      ref: r,
      children: /* @__PURE__ */ i(
        "svg",
        {
          width: "100%",
          height: "10",
          className: "absolute left-0 top-0 pointer-events-none",
          viewBox: `0 0 ${n.width ?? 1} 10`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          overflow: "visible",
          children: /* @__PURE__ */ p("g", { transform: "translate(-8 -5)", children: [
            /* @__PURE__ */ i("g", { filter: "url(#filter0_bd_2902_2722)", children: /* @__PURE__ */ i(
              "rect",
              {
                x: "8",
                y: "5",
                width: n.width,
                height: "10",
                rx: "5",
                fill: "white",
                fillOpacity: "0.12",
                shapeRendering: "crispEdges"
              }
            ) }),
            /* @__PURE__ */ i("g", { filter: "url(#filter1_ddi_2902_2722)", children: /* @__PURE__ */ i(
              U.rect,
              {
                x: "8",
                y: "5",
                animate: { width: a },
                height: "10",
                rx: "5",
                fill: "white",
                fillOpacity: "0.7",
                shapeRendering: "crispEdges"
              }
            ) }),
            /* @__PURE__ */ p("defs", { children: [
              /* @__PURE__ */ p(
                "filter",
                {
                  id: "filter0_bd_2902_2722",
                  x: "-32",
                  y: "-35",
                  width: (n.width ?? 0) * 2,
                  height: "90",
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB",
                  children: [
                    /* @__PURE__ */ i("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                    /* @__PURE__ */ i("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "20" }),
                    /* @__PURE__ */ i(
                      "feComposite",
                      {
                        in2: "SourceAlpha",
                        operator: "in",
                        result: "effect1_backgroundBlur_2902_2722"
                      }
                    ),
                    /* @__PURE__ */ i(
                      "feColorMatrix",
                      {
                        in: "SourceAlpha",
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                        result: "hardAlpha"
                      }
                    ),
                    /* @__PURE__ */ i("feOffset", { dy: "1.5" }),
                    /* @__PURE__ */ i("feGaussianBlur", { stdDeviation: "1.5" }),
                    /* @__PURE__ */ i("feComposite", { in2: "hardAlpha", operator: "out" }),
                    /* @__PURE__ */ i(
                      "feColorMatrix",
                      {
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                      }
                    ),
                    /* @__PURE__ */ i(
                      "feBlend",
                      {
                        mode: "normal",
                        in2: "effect1_backgroundBlur_2902_2722",
                        result: "effect2_dropShadow_2902_2722"
                      }
                    ),
                    /* @__PURE__ */ i(
                      "feBlend",
                      {
                        mode: "normal",
                        in: "SourceGraphic",
                        in2: "effect2_dropShadow_2902_2722",
                        result: "shape"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ p(
                "filter",
                {
                  id: "filter1_ddi_2902_2722",
                  x: "0",
                  y: "0",
                  width: (n.width ?? 0) * 2,
                  height: "26",
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB",
                  children: [
                    /* @__PURE__ */ i("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                    /* @__PURE__ */ i(
                      "feColorMatrix",
                      {
                        in: "SourceAlpha",
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                        result: "hardAlpha"
                      }
                    ),
                    /* @__PURE__ */ i("feOffset", { dy: "1" }),
                    /* @__PURE__ */ i("feGaussianBlur", { stdDeviation: "1" }),
                    /* @__PURE__ */ i("feComposite", { in2: "hardAlpha", operator: "out" }),
                    /* @__PURE__ */ i(
                      "feColorMatrix",
                      {
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                      }
                    ),
                    /* @__PURE__ */ i(
                      "feBlend",
                      {
                        mode: "normal",
                        in2: "BackgroundImageFix",
                        result: "effect1_dropShadow_2902_2722"
                      }
                    ),
                    /* @__PURE__ */ i(
                      "feColorMatrix",
                      {
                        in: "SourceAlpha",
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                        result: "hardAlpha"
                      }
                    ),
                    /* @__PURE__ */ i("feOffset", { dy: "3" }),
                    /* @__PURE__ */ i("feGaussianBlur", { stdDeviation: "4" }),
                    /* @__PURE__ */ i("feComposite", { in2: "hardAlpha", operator: "out" }),
                    /* @__PURE__ */ i(
                      "feColorMatrix",
                      {
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                      }
                    ),
                    /* @__PURE__ */ i(
                      "feBlend",
                      {
                        mode: "normal",
                        in2: "effect1_dropShadow_2902_2722",
                        result: "effect2_dropShadow_2902_2722"
                      }
                    ),
                    /* @__PURE__ */ i(
                      "feBlend",
                      {
                        mode: "normal",
                        in: "SourceGraphic",
                        in2: "effect2_dropShadow_2902_2722",
                        result: "shape"
                      }
                    ),
                    /* @__PURE__ */ i(
                      "feColorMatrix",
                      {
                        in: "SourceAlpha",
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                        result: "hardAlpha"
                      }
                    ),
                    /* @__PURE__ */ i("feOffset", { dy: "1.5" }),
                    /* @__PURE__ */ i(
                      "feComposite",
                      {
                        in2: "hardAlpha",
                        operator: "arithmetic",
                        k2: "-1",
                        k3: "1"
                      }
                    ),
                    /* @__PURE__ */ i(
                      "feColorMatrix",
                      {
                        type: "matrix",
                        values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"
                      }
                    ),
                    /* @__PURE__ */ i(
                      "feBlend",
                      {
                        mode: "normal",
                        in2: "shape",
                        result: "effect3_innerShadow_2902_2722"
                      }
                    )
                  ]
                }
              )
            ] })
          ] })
        }
      )
    }
  );
}), Jl = b(({ children: e, className: t, averageLoadingTimeInS: r = 5 }) => {
  const [n, a] = M(0);
  return B(() => {
    const s = setInterval(() => {
      a((l) => {
        if (l === 1) return 0;
        const c = Math.random() * 100 / (r * 1e3), u = Math.min(l + c, 1);
        return u === 1 && clearInterval(s), u;
      });
    }, 100);
    return () => clearInterval(s);
  }, [r]), /* @__PURE__ */ p(
    "div",
    {
      className: m(
        "flex flex-col gap-2 items-start justify-start",
        t
      ),
      children: [
        /* @__PURE__ */ i(ke, { variant: "shimmer", children: e }),
        /* @__PURE__ */ i(
          Yl,
          {
            className: "w-full",
            progress: n * 0.95
          }
        )
      ]
    }
  );
}), tu = b(({ isProcessing: e, isTransferring: t, children: r }) => /* @__PURE__ */ p(E, { children: [
  t && /* @__PURE__ */ i(ke, { children: "Waiting for transfer" }),
  e && !t && /* @__PURE__ */ p(Jl, { children: [
    r ?? "Processing",
    "..."
  ] })
] }));
function ru({
  steps: e,
  mutate: t,
  error: r,
  isPending: n,
  reset: a,
  open: o,
  onClose: s,
  initialStep: l = 0,
  submitLabel: c = "Create",
  initialData: u = {}
}) {
  const [d, f] = M(
    e.reduce((P, { defaultValues: S }) => ({ ...P, ...S, ...u }), {})
  ), h = k(() => e.filter((P) => !P.enabled || P.enabled(d)), [e, d]), [g, x] = M(l);
  B(() => {
    a && a();
  }, [g]);
  const [y, v] = M({}), { Component: _, isValid: w, applyLocalState: C, title: q, deriveLocalState: I } = k(() => h[g], [g]), [N, O] = M(I ? I(d) : {}), G = k(
    () => h.map((P, S) => {
      const A = S > g;
      return /* @__PURE__ */ i(
        z,
        {
          onClick: !A && g !== S ? () => x(S) : void 0,
          className: m(
            "w-[24px] lg:w-[42px] h-1 rounded-full",
            A ? "bg-material-main-1" : y[S] && y[S]?.length > 0 ? "bg-purple-500" : "bg-white"
          )
        },
        S
      );
    }),
    [g, y]
  ), j = k(() => /* @__PURE__ */ p(E, { children: [
    /* @__PURE__ */ i(fe, { translucent: !0, error: r }, "error"),
    /* @__PURE__ */ i(
      fe,
      {
        translucent: !0,
        error: y[g],
        isUserError: !0
      },
      "validation"
    )
  ] }), [r, y, g]);
  return /* @__PURE__ */ p(
    he,
    {
      onClose: s,
      open: o,
      contentGap: "",
      children: [
        /* @__PURE__ */ i(Cl, { children: /* @__PURE__ */ i("div", { className: "flex flex-row justify-center items-center gap-2", children: G }) }),
        /* @__PURE__ */ i(W, { children: !!(r || y[g]) && /* @__PURE__ */ p(E, { children: [
          /* @__PURE__ */ i(
            U.div,
            {
              variants: {
                hidden: { opacity: 0, height: 0 },
                visible: { opacity: 0, height: "auto" }
              },
              className: "opacity-0",
              children: j
            },
            "size preview"
          ),
          /* @__PURE__ */ i(
            U.div,
            {
              variants: {
                hidden: { opacity: 0, height: 0 },
                visible: { opacity: 1, height: "auto" }
              },
              className: "absolute top-14 w-full left-0 px-4 lg:px-8",
              children: j
            },
            "real"
          )
        ] }) }),
        /* @__PURE__ */ p("div", { className: "flex flex-col gap-8", children: [
          /* @__PURE__ */ p("div", { className: "flex flex-col text-center justify-center items-center gap-2", children: [
            /* @__PURE__ */ p("p", { className: "type-medior text-material-medium-1", children: [
              "Step ",
              g + 1
            ] }),
            /* @__PURE__ */ i("p", { className: "type-top text-white", children: q })
          ] }),
          /* @__PURE__ */ i(
            _,
            {
              data: d,
              patch: (P) => f((S) => ({ ...S, ...P })),
              localState: N,
              patchLocalState: (P) => O((S) => ({ ...S, ...P }))
            }
          )
        ] }),
        /* @__PURE__ */ p(un, { children: [
          /* @__PURE__ */ i(
            de,
            {
              variant: "naked",
              onClick: g === 0 ? s : () => x(g - 1),
              children: g === 0 ? "Cancel" : "Back"
            }
          ),
          /* @__PURE__ */ i(
            de,
            {
              onClick: () => {
                const P = w(d, N);
                if (P !== !0) {
                  v((S) => ({ ...S, [g]: P }));
                  return;
                }
                if (v({ ...y, [g]: [] }), g < h.length - 1) {
                  C && f(C(d, N)), x(g + 1);
                  return;
                }
                t(C ? C(d, N) : d);
              },
              isLoading: n,
              children: g === h.length - 1 ? c : "Next"
            }
          )
        ] })
      ]
    }
  );
}
const nu = b(({ children: e }) => /* @__PURE__ */ i(he, { children: /* @__PURE__ */ i(ke, { className: "mb-8", children: e }) })), Ql = b(({ children: e, title: t = "Error", onClose: r }) => /* @__PURE__ */ i(he, { title: t, onClose: r, children: /* @__PURE__ */ i(fe, { error: e }) })), eo = Q({
  showErrorModal: () => {
  }
}), au = b(
  ({ children: e }) => {
    const [t, r] = M();
    return /* @__PURE__ */ p(eo.Provider, { value: { showErrorModal: r }, children: [
      t && /* @__PURE__ */ i(Ql, { onClose: () => r(void 0), children: t }),
      e
    ] });
  }
), iu = () => F(eo).showErrorModal, Zl = b(({
  isOpen: e,
  title: t,
  onClose: r,
  onConfirm: n,
  cancelLabel: a = "Cancel",
  confirmLabel: o = "Confirm",
  children: s
}) => /* @__PURE__ */ p(
  he,
  {
    open: e,
    onClose: r,
    title: t,
    children: [
      s,
      /* @__PURE__ */ p(un, { children: [
        /* @__PURE__ */ i(de, { variant: "naked", onClick: r, children: a }),
        /* @__PURE__ */ i(de, { onClick: n, children: o })
      ] })
    ]
  }
)), to = Q({
  confirm: async () => {
  }
}), ou = b(({
  children: e
}) => {
  const [t, r] = M(void 0), n = (a, ...o) => new Promise((s, l) => {
    r({
      props: {
        ...a,
        children: o,
        cancelLabel: "Cancel",
        confirmLabel: "Confirm"
      },
      onClose: () => {
        r(void 0), l("Manually rejected");
      },
      onConfirm: () => {
        r(void 0), s();
      }
    });
  });
  return /* @__PURE__ */ p(to.Provider, { value: { confirm: n }, children: [
    e,
    t && /* @__PURE__ */ i(
      Zl,
      {
        isOpen: !0,
        onClose: t.onClose,
        onConfirm: t.onConfirm,
        ...t.props
      }
    )
  ] });
}), su = () => F(to).confirm, lu = b(({ progress: e, className: t }) => {
  const a = k(() => 2 * Math.PI * 37, [37]), o = k(
    () => a - e * a,
    [e, a]
  );
  return /* @__PURE__ */ i("div", { className: m(t, ""), children: /* @__PURE__ */ i(
    "svg",
    {
      viewBox: "0 0 98 98",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      overflow: "visible",
      children: /* @__PURE__ */ p("g", { transform: "scale(1.22) translate(-12 -6)", children: [
        /* @__PURE__ */ i("g", { filter: "url(#filter0_bdi_2858_1825)", children: /* @__PURE__ */ i(
          "circle",
          {
            cx: "52",
            cy: "46",
            r: 37,
            stroke: "#808080",
            strokeOpacity: "0.3",
            strokeWidth: 3 * 2,
            style: { mixBlendMode: "luminosity" },
            shapeRendering: "crispEdges"
          }
        ) }),
        /* @__PURE__ */ i("g", { filter: "url(#filter1_ddi_2858_1825)", children: /* @__PURE__ */ i(
          U.circle,
          {
            transform: "rotate(-90 52 46)",
            initial: !1,
            animate: { strokeDashoffset: o },
            transition: { duration: 0.5 },
            cx: "52",
            cy: "46",
            r: 37,
            stroke: "#EDEDED",
            strokeOpacity: "0.7",
            strokeWidth: 3 * 2,
            strokeLinecap: "round",
            style: { mixBlendMode: "luminosity" },
            shapeRendering: "crispEdges",
            strokeDasharray: a,
            strokeDashoffset: o
          }
        ) }),
        /* @__PURE__ */ p("defs", { children: [
          /* @__PURE__ */ p(
            "filter",
            {
              id: "filter0_bdi_2858_1825",
              x: "-3.5",
              y: "-9.5",
              width: "111",
              height: "111",
              filterUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [
                /* @__PURE__ */ i("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                /* @__PURE__ */ i("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "8" }),
                /* @__PURE__ */ i(
                  "feComposite",
                  {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_2858_1825"
                  }
                ),
                /* @__PURE__ */ i(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                  }
                ),
                /* @__PURE__ */ i("feOffset", { dy: "1" }),
                /* @__PURE__ */ i("feGaussianBlur", { stdDeviation: "1" }),
                /* @__PURE__ */ i("feComposite", { in2: "hardAlpha", operator: "out" }),
                /* @__PURE__ */ i(
                  "feColorMatrix",
                  {
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                  }
                ),
                /* @__PURE__ */ i(
                  "feBlend",
                  {
                    mode: "normal",
                    in2: "effect1_backgroundBlur_2858_1825",
                    result: "effect2_dropShadow_2858_1825"
                  }
                ),
                /* @__PURE__ */ i(
                  "feBlend",
                  {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "effect2_dropShadow_2858_1825",
                    result: "shape"
                  }
                ),
                /* @__PURE__ */ i(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                  }
                ),
                /* @__PURE__ */ i("feOffset", { dy: "1" }),
                /* @__PURE__ */ i(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: "-1",
                    k3: "1"
                  }
                ),
                /* @__PURE__ */ i(
                  "feColorMatrix",
                  {
                    type: "matrix",
                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"
                  }
                ),
                /* @__PURE__ */ i(
                  "feBlend",
                  {
                    mode: "normal",
                    in2: "shape",
                    result: "effect3_innerShadow_2858_1825"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ p(
            "filter",
            {
              id: "filter1_ddi_2858_1825",
              x: "0.5",
              y: "0.5",
              width: "97.166",
              height: "103",
              filterUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [
                /* @__PURE__ */ i("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                /* @__PURE__ */ i(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                  }
                ),
                /* @__PURE__ */ i("feOffset", { dy: "1" }),
                /* @__PURE__ */ i("feGaussianBlur", { stdDeviation: "1" }),
                /* @__PURE__ */ i(
                  "feColorMatrix",
                  {
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                  }
                ),
                /* @__PURE__ */ i(
                  "feBlend",
                  {
                    mode: "normal",
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_2858_1825"
                  }
                ),
                /* @__PURE__ */ i(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                  }
                ),
                /* @__PURE__ */ i("feOffset", { dy: "6" }),
                /* @__PURE__ */ i("feGaussianBlur", { stdDeviation: "6" }),
                /* @__PURE__ */ i("feComposite", { in2: "hardAlpha", operator: "out" }),
                /* @__PURE__ */ i(
                  "feColorMatrix",
                  {
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"
                  }
                ),
                /* @__PURE__ */ i(
                  "feBlend",
                  {
                    mode: "normal",
                    in2: "effect1_dropShadow_2858_1825",
                    result: "effect2_dropShadow_2858_1825"
                  }
                ),
                /* @__PURE__ */ i(
                  "feBlend",
                  {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "effect2_dropShadow_2858_1825",
                    result: "shape"
                  }
                ),
                /* @__PURE__ */ i(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                  }
                ),
                /* @__PURE__ */ i("feOffset", { dy: "1" }),
                /* @__PURE__ */ i(
                  "feComposite",
                  {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: "-1",
                    k3: "1"
                  }
                ),
                /* @__PURE__ */ i(
                  "feColorMatrix",
                  {
                    type: "matrix",
                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"
                  }
                ),
                /* @__PURE__ */ i(
                  "feBlend",
                  {
                    mode: "normal",
                    in2: "shape",
                    result: "effect3_innerShadow_2858_1825"
                  }
                )
              ]
            }
          )
        ] })
      ] })
    }
  ) });
}), cu = b(({ value: e, className: t }) => {
  const { data: r, isPending: n, error: a } = Do({
    queryKey: ["qr", e ?? "unknown"],
    queryFn: () => new Promise((o, s) => {
      if (!e) return s("No value to encode");
      Po.toDataURL(e, (l, c) => {
        if (l) return s(l);
        o(c);
      });
    }),
    enabled: !!e
  });
  return e ? /* @__PURE__ */ p(E, { children: [
    /* @__PURE__ */ i(W, { children: /* @__PURE__ */ i(fe, { error: a }) }),
    /* @__PURE__ */ p(
      "div",
      {
        className: m(
          "relative bg-white flex justify-center items-center overflow-hidden rounded-[12px]",
          t
        ),
        children: [
          /* @__PURE__ */ i(W, { children: n && /* @__PURE__ */ i(Ee, { className: "absolute inset-0" }) }),
          r && /* @__PURE__ */ i("img", { src: r, alt: "QR Code" })
        ]
      }
    )
  ] }) : null;
}), uu = b(
  ({ title: e, text: t, leftAligned: r, className: n }) => /* @__PURE__ */ p("div", { className: m(n, "gap-3 flex flex-col justify-center text-center", { "text-left items-start": r, "text-center items-center": !r }), children: [
    e && /* @__PURE__ */ i("h1", { className: "type-top", children: e }),
    t && /* @__PURE__ */ i("p", { className: "type-body text-neutral-200/70", children: t })
  ] })
), du = b(
  (e) => {
    const { addStickyToast: t } = cn(), r = X();
    return B(() => t(e, r), [e.ctas, e.error, r]), /* @__PURE__ */ i(E, {});
  }
), fu = b(({ isOn: e, onChange: t, className: r, children: n }) => /* @__PURE__ */ i(
  "button",
  {
    onClick: () => t(!e),
    className: m(
      r,
      "bg-material-main-1 rounded-[12px] w-[66px] h-[42px] p-1 pr-6"
    ),
    children: /* @__PURE__ */ i(
      U.div,
      {
        variants: {
          on: { x: "1.25rem" },
          off: { x: 0 }
        },
        initial: !1,
        animate: e ? "on" : "off",
        className: "bg-material-main-1 rounded-[8px] w-[36px] h-full flex justify-center items-center shadow-inner-light-regular-default",
        transition: {
          type: "spring",
          stiffness: 700,
          damping: 30
        },
        children: n
      }
    )
  }
)), pu = b(({ children: e, className: t, overlayClassName: r, title: n }) => {
  const [a, o] = M(!1);
  return /* @__PURE__ */ p(E, { children: [
    /* @__PURE__ */ i(
      z,
      {
        onClick: () => o(!0),
        className: m(
          "relative inline-flex justify-center items-center group material rounded-full w-5 h-5",
          t
        ),
        children: /* @__PURE__ */ i("p", { className: "pointer-events-none type-tiny", children: "?" })
      }
    ),
    /* @__PURE__ */ i(he, { title: n, open: a, onClose: () => o(!1), contentClassName: r, children: e })
  ] });
}), hu = b(({ children: e, className: t, container: r }) => {
  const n = V(null), a = re(n), o = re(r), s = k(() => {
    if (!a) return;
    const l = n.current?.getBoundingClientRect(), c = r.current?.getBoundingClientRect();
    if (!l || !c) return;
    const u = Math.floor(c.left - l.left);
    if (u > 0) return { left: u };
    const d = Math.floor(c.right - l.right);
    if (d < 0) return { left: d };
  }, [a, o]);
  return /* @__PURE__ */ p("div", { className: "relative", children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: m(t, {
          "pointer-events-none invisible": s
        }),
        ref: n,
        children: e
      }
    ),
    s && /* @__PURE__ */ i(
      "div",
      {
        className: m(t, "!absolute w-full top-0 left-0"),
        style: {
          ...s,
          flex: "none"
        },
        children: e
      }
    )
  ] });
}), mu = b(({ children: e, className: t }) => {
  const r = V(null), n = re(r), a = Ue(), o = k(() => {
    const c = getComputedStyle(document.documentElement);
    return {
      // --safe-area-inset-top
      // --safe-area-inset-right
      // --safe-area-inset-bottom
      // --safe-area-inset-left
      top: parseInt(c.getPropertyValue("--safe-area-inset-top")),
      right: parseInt(c.getPropertyValue("--safe-area-inset-right")),
      bottom: parseInt(c.getPropertyValue("--safe-area-inset-bottom")),
      left: parseInt(c.getPropertyValue("--safe-area-inset-left"))
    };
  }, []), s = k(() => a.width < 1024 ? Math.max(o.top, 16) + 48 : Math.max(o.top, 16), [a, o]), l = k(() => {
    if (!n) return;
    const c = r.current?.getBoundingClientRect();
    if (!c) return;
    const u = Math.floor(c.top - 16);
    if (u < s) return { top: -u };
    const d = Math.floor(c.left - 16);
    if (d < o.left) return { left: -d };
    if (Math.floor(c.right + 16) > window.innerWidth - o.right)
      return { left: window.innerWidth - c.right - 16 };
  }, [n, a, o]);
  return /* @__PURE__ */ p("div", { className: "relative", children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: m(t, {
          "pointer-events-none invisible": l
        }),
        ref: r,
        children: e
      }
    ),
    l && /* @__PURE__ */ i(
      "div",
      {
        className: m(t, "!absolute w-full top-0 left-0"),
        style: {
          ...l,
          flex: "none"
        },
        children: e
      }
    )
  ] });
}), ki = b(({ direction: e, onClick: t }) => /* @__PURE__ */ i(
  z,
  {
    className: "material rounded-full size-8 flex justify-center items-center cursor-pointer transition-all duration-150 active:scale-95",
    onClick: t,
    children: /* @__PURE__ */ i(
      J,
      {
        type: "svg",
        alt: "Close",
        src: Xi,
        className: m(
          "flex pointer-events-none",
          { "rotate-180": e !== "right" }
        )
      }
    )
  }
)), ec = b(
  ({ page: e, isActive: t, onClick: r, isFirst: n, isLast: a }) => /* @__PURE__ */ i(
    z,
    {
      className: m("py-1 text-center transition-all duration-150 active:scale-90", {
        "bg-material-main-1": t,
        "pl-1 rounded-l-full": n,
        "pr-1 rounded-r-full": a,
        "w-11": a || n,
        "w-10": !a && !n
      }),
      onClick: r,
      children: e + 1
    }
  )
), gu = b(({
  className: e,
  totalPages: t,
  currentPage: r,
  onPageChange: n
}) => /* @__PURE__ */ p("div", { className: m("flex flex-row items-center justify-center gap-2", e), children: [
  /* @__PURE__ */ i(
    ki,
    {
      direction: "left",
      onClick: () => n(Math.max(0, r - 1))
    }
  ),
  /* @__PURE__ */ i("div", { className: "flex flex-row material rounded-full", children: Array.from({ length: t }, (a, o) => /* @__PURE__ */ p(
    ye,
    {
      children: [
        o > 0 && /* @__PURE__ */ i("div", { className: "border-l border-material-main-1" }),
        /* @__PURE__ */ i(
          ec,
          {
            page: o,
            isActive: o === r,
            onClick: () => n(o),
            isFirst: o === 0,
            isLast: o === t - 1
          }
        )
      ]
    },
    o
  )) }),
  /* @__PURE__ */ i(
    ki,
    {
      direction: "right",
      onClick: () => n(Math.min(t - 1, r + 1))
    }
  )
] })), vu = b(({ className: e, children: t }) => {
  const [r, n] = M(!1), a = bn(0), o = bn(0);
  return /* @__PURE__ */ i(
    U.div,
    {
      onHoverStart: () => n(!0),
      onHoverEnd: () => n(!1),
      onMouseMove: (s) => {
        a.set(s.clientX), o.set(s.clientY);
      },
      className: m(
        e,
        "relative",
        "overflow-hidden"
      ),
      children: /* @__PURE__ */ p(W, { children: [
        r && /* @__PURE__ */ i(
          U.div,
          {
            variants: {
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 }
            },
            initial: "hidden",
            animate: "visible",
            exit: "hidden",
            style: {
              x: a,
              y: o
            },
            transition: { duration: 0.8 },
            className: "bg-white/3 absolute rounded-full pointer-events-none size-128 blur-[128px] z-[-1] origin-center -translate-x-1/2 -translate-y-1/2"
          }
        ),
        t
      ] })
    }
  );
}), Wr = new zo({
  defaultOptions: {
    queries: {
      gcTime: 1 / 0
    }
  }
}), yu = b(({ children: e }) => /* @__PURE__ */ i(Fo, { client: Wr, children: e }));
function bu(e) {
  return {
    key: e,
    invalidate: (...t) => Wr.invalidateQueries({ queryKey: e(...t) }),
    reset: (...t) => Wr.resetQueries({ queryKey: e(...t) })
  };
}
let Ce = "development";
typeof window < "u" && (window.location.origin.includes("localhost") || window.location.origin.includes("127.0.0") ? Ce = "development" : window.location.origin.includes("zkpoker.app") ? Ce = "production" : Ce = "staging");
const tc = Ce === "development", xu = (e) => e[Ce], wu = tc ? "http://127.0.0.1:4943/" : "https://ic0.app", _u = (e, t) => {
  const [r, n] = M(
    (() => {
      const o = localStorage.getItem(e);
      try {
        return o ? JSON.parse(o) : t;
      } catch {
        return t;
      }
    })()
  );
  return [r, (o) => {
    o === void 0 ? localStorage.removeItem(e) : localStorage.setItem(e, JSON.stringify(o)), n(o);
  }];
};
async function Cu(e, t, ...r) {
  const n = e[t], a = await n(...r);
  if ("Err" in a) throw a;
  return a.Ok;
}
const Nu = (e) => (e ?? 0) / 65536, Su = (e) => Math.round((e ?? 0) * 65536);
function ku(e) {
  if (e)
    return e[0];
}
function Iu(e) {
  return e === void 0 ? [] : [e];
}
function Tu(e) {
  return Array.isArray(e);
}
function qu(e) {
  const t = Object.keys(e);
  if (t.length !== 1)
    throw new Error(
      `Expected exactly one key in variant object, but got [${t.join(", ")}].`
    );
  const [r] = t, n = e[r];
  return (a) => {
    const o = a[r];
    return o(n);
  };
}
const rc = (e) => {
  const t = Math.floor(Number(e) / 3600), r = Math.floor(Number(e) % 3600 / 60), n = Number(e) % 60;
  return `${t > 0 ? `${t}h ` : ""}${r > 0 ? `${r}m ` : ""}${n}s`;
}, ju = (e) => rc(e / 1000000000n);
export {
  Ci as ApplyMaxDecimals,
  Ni as BigIntTimestampToDate,
  Vc as BigIntToBig,
  zl as BigIntToString,
  Gc as BigToBigInt,
  de as ButtonComponent,
  Sc as CardComponent,
  lu as CircularProgressBarComponent,
  Ac as ConsumeModal,
  hu as ContainerAvoidingElementContainer,
  Nu as ConvertNat16ToPerc,
  Su as ConvertPercToNat16,
  kc as CopiableTextComponent,
  Jc as DateInputComponent,
  Xl as DateToBigIntTimestamp,
  Xc as DateToBigNanoseconds,
  Yc as DateToLocalDateTimeString,
  Tc as DragPanelComponent,
  _l as DropdownComponent,
  Kl as DropdownInputComponent,
  qc as DynamicSizeComponent,
  wc as ElementBoxProvider,
  zc as ErrorBoundaryComponent,
  fe as ErrorComponent,
  Ql as ErrorModalComponent,
  Hc as ExperiencePointsComponent,
  Jl as FauxLoadingBarAnimationComponent,
  Wl as FieldComponent,
  Al as FooterComponent,
  Kc as FormComponent,
  Ml as HeroComponent,
  wu as IC_HOST,
  J as Image,
  kl as InlineMarkdownComponent,
  oe as InputWrapperComponent,
  z as Interactable,
  tc as IsDev,
  Uo as IsInteractableEnabled,
  Tu as IsOptional,
  ql as Label,
  Bc as LayoutComponent,
  Lc as LayoutOverrideComponent,
  Ec as LayoutProvider,
  Yl as LinearProgressBarComponent,
  Ve as List,
  Rc as ListHeader,
  me as ListItem,
  Oc as ListSeperator,
  ke as LoadingAnimationComponent,
  nu as LoadingModal,
  Ee as LoadingSpinnerComponent,
  Mc as MarkdownPageComponent,
  Fc as Max,
  Uc as Min,
  he as Modal,
  jc as ModalBackButtonPortal,
  un as ModalFooterPortal,
  Cl as ModalTitlePortal,
  vu as MouseHighlightComponent,
  Zi as NavbarComponent,
  Pl as NavbarTabComponent,
  wi as NavbarTabsComponent,
  Ul as NumberInputComponent,
  Dc as OverrideLayoutConfigComponent,
  gu as PaginationComponent,
  Qc as PhotoInputComponent,
  Ie as PillComponent,
  ou as ProvideConfirmModal,
  au as ProvideErrorModalContext,
  Pc as ProvideLayoutConfig,
  Ko as ProvideModalStack,
  yu as ProvideQuery,
  ji as ProvideTheme,
  xc as ProvideUI,
  cu as QRCodeComponent,
  pn as RawNumberInputComponent,
  _i as SafeNumber,
  mu as ScreenAvoidingElement,
  xu as SelectEnv,
  $l as SliderInputComponent,
  $c as SmallHeroComponent,
  ru as SteppedModalComponent,
  du as StickyToastComponent,
  Gl as SwitchComponent,
  Vl as SwitchInputComponent,
  Si as TabsComponent,
  Zc as TabsInputComponent,
  Hl as TextInputComponent,
  Wo as Themes,
  eu as TimeInputComponent,
  uu as TitleTextComponent,
  vl as ToastComponent,
  Nc as ToastProvider,
  fu as ToggleComponent,
  pu as TooltipComponent,
  tu as TransferLoadingIndicatorComponent,
  ku as UnwrapOptional,
  Ji as UserError,
  Tl as WalletTypeNotInstalledError,
  Cc as WeirdKnobComponent,
  Iu as WrapOptional,
  Fl as XP_DECIMALS,
  Cu as callActorMutation,
  Ce as environment,
  qu as matchRustEnum,
  ju as nanosecondsToString,
  Wr as queryClient,
  bu as queryKeyFactory,
  bc as rq,
  Wc as secondsToLabel,
  rc as secondsToString,
  ae as useConfig,
  su as useConfirmModal,
  bl as useCopyToClipboard,
  $o as useCurrentModalStackIndex,
  _c as useElementBox,
  re as useElementSize,
  iu as useErrorModal,
  Qi as useIsInList,
  dn as useIsInsideModal,
  Ic as useIsMobile,
  El as useLayout,
  Ke as useLayoutConfig,
  Sl as useModal,
  Ru as useMutation,
  Bl as useOverrideLayout,
  Ll as useOverrideLayoutConfig,
  _u as usePersistentState,
  Ou as useQuery,
  Eu as useQueryClient,
  qi as useRouting,
  Ue as useScreenSize,
  Go as useTheme,
  cn as useToast
};
