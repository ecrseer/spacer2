_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{Juyh:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),a=n("YFqc"),c=n.n(a),u=r.a.createElement;t.default=function(){return u("div",null,u("div",null,"About us"),u("div",null,"Back to ",u(c.a,{href:"/",as:"/spacer2/"},u("a",null,"Home"))))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var a,c=r(n("q1tI")),u=n("elyg"),l=n("nOHt"),f=new Map,i=window.IntersectionObserver,s={};var p=function(e,t){var n=a||(i?a=new i((function(e){e.forEach((function(e){if(f.has(e.target)){var t=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),f.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),f.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}f.delete(e)}):function(){}};function d(e,t,n,o){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,o).catch((function(e){0})),s[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=(0,l.useRouter)(),r=n&&n.pathname||"/",a=c.default.useMemo((function(){var t=(0,u.resolveHref)(r,e.href,!0),n=o(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,u.resolveHref)(r,e.as):c||a}}),[r,e.href,e.as]),f=a.href,h=a.as,v=e.children,y=e.replace,w=e.shallow,_=e.scroll,E=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var g=c.Children.only(v),b=g&&"object"===typeof g&&g.ref,m=c.default.useRef(),L={ref:c.default.useCallback((function(e){(m.current&&(m.current(),m.current=void 0),t&&i&&e&&e.tagName&&(0,u.isLocalURL)(f))&&(s[f+"%"+h]||(m.current=p(e,(function(){d(n,f,h,{locale:"undefined"!==typeof E?E:n&&n.locale})}))));b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[t,b,f,h,n,E]),onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=o.indexOf("#")<0),t[r?"replace":"push"](n,o,{shallow:a,locale:l}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,f,h,y,w,_,E)}};return t&&(L.onMouseEnter=function(e){(0,u.isLocalURL)(f)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),d(n,f,h,{priority:!0}))}),(e.passHref||"a"===g.type&&!("href"in g.props))&&(L.href=(0,u.addBasePath)((0,u.addLocale)(h,"undefined"!==typeof E?E:n&&n.locale,n&&n.defaultLocale))),c.default.cloneElement(g,L)};t.default=h},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])}},[["rB5V",0,2,1]]]);