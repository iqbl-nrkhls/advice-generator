(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,n,t){"use strict";var r=t(3038);var i,c=(i=t(7294))&&i.__esModule?i:{default:i},s=t(1063),a=t(4651),u=t(7426);var o={};function d(e,n,t,r){if(e&&s.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;o[n+"%"+t+(i?"%"+i:"")]=!0}}},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!s,u=i.useRef(),o=i.useState(!1),d=r(o,2),f=d[0],l=d[1],v=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||f||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=a.get(n);if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return a.set(n,t={id:n,observer:i,elements:r}),t}(t),i=r.id,c=r.observer,s=r.elements;return s.set(e,n),c.observe(e),function(){s.delete(e),c.unobserve(e),0===s.size&&(c.disconnect(),a.delete(i))}}(e,(function(e){return e&&l(e)}),{rootMargin:n}))}),[t,n,f]);return i.useEffect((function(){if(!s&&!f){var e=c.requestIdleCallback((function(){return l(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),[v,f]};var i=t(7294),c=t(3447),s="undefined"!==typeof IntersectionObserver;var a=new Map},5015:function(e,n,t){"use strict";function r(e,n,t,r,i,c,s){try{var a=e[c](s),u=a.value}catch(o){return void t(o)}a.done?n(u):Promise.resolve(u).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,c){var s=e.apply(n,t);function a(e){r(s,i,c,a,u,"next",e)}function u(e){r(s,i,c,a,u,"throw",e)}a(void 0)}))}}t.r(n),t.d(n,{default:function(){return f}});var c=t(7757),s=t.n(c),a=t(7294),u=(t(1664),t(9008)),o=t(5893),d=function(){var e=i(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.adviceslip.com/advice");case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t.slip);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.useState)(!1),n=e[0],t=e[1],r=(0,a.useState)({id:117,advice:"It is easy to sit and take notice, what's difficult is getting up and taking action."}),c=r[0],f=r[1],l=function(){var e=i(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(!0),e.next=3,d();case 3:n=e.sent,f(n),t(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(u.default,{children:[(0,o.jsx)("title",{children:"Advice Generator App"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),(0,o.jsx)("div",{className:"app",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsxs)("header",{children:["ADVICE #",c.id]}),(0,o.jsxs)("main",{children:[(0,o.jsxs)("h1",{children:['"',c.advice,'"']}),(0,o.jsx)("div",{className:"divider",children:(0,o.jsxs)("picture",{children:[(0,o.jsx)("source",{srcSet:"images/pattern-divider-desktop.svg",media:"(min-width: 640px)"}),(0,o.jsx)("img",{src:"images/pattern-divider-mobile.svg"})]})})]}),(0,o.jsx)("button",{className:"dice ".concat(n?"loading":""),onClick:l,children:(0,o.jsx)("img",{src:"images/icon-dice.svg",alt:""})})]})})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5015)}])},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);