"use strict";(self.webpackChunkreact_movies=self.webpackChunkreact_movies||[]).push([[753],{6607:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r,a,i,c=t(9439),o=t(3904),u=t(5837),s=t(6396),l=t(168),d=t(6444),v=d.default.ul(r||(r=(0,l.Z)(["\n  padding: 30px;\n"]))),p=d.default.li(a||(a=(0,l.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),f=d.default.h2(i||(i=(0,l.Z)(["\n  margin-bottom: 20px;\n"]))),m=t(184);var h=function(){var e=(0,s.j)("movieReviews"),n=(0,c.Z)(e,3),t=n[0],r=n[1],a=n[2],i=t?t.results:null;return(0,m.jsxs)(m.Fragment,{children:[r&&(0,m.jsx)(o.Z,{visible:r}),(null===i||void 0===i?void 0:i.length)>0&&(0,m.jsx)(v,{children:i.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,m.jsxs)(p,{children:[(0,m.jsx)(f,{children:"".concat(t)}),(0,m.jsx)("p",{children:"".concat(r)})]},n)}))}),(0===(null===i||void 0===i?void 0:i.length)||a)&&(0,m.jsx)(u.Z,{error:null!==a&&void 0!==a?a:"There are no reviews for this movie yet."})]})}},6396:function(e,n,t){t.d(n,{j:function(){return v}});var r=t(4165),a=t(1413),i=t(5861),c=t(9439),o=t(2791),u=t(7689),s=t(1243),l=t(2945),d=t(8997);function v(e){var n=(0,o.useState)(null),t=(0,c.Z)(n,2),v=t[0],p=t[1],f=(0,o.useState)(!1),m=(0,c.Z)(f,2),h=m[0],Z=m[1],g=(0,o.useState)(null),b=(0,c.Z)(g,2),x=b[0],w=b[1],j=(0,u.UO)().slug,k=j?j.match(/[a-zA-Z0-9]+$/)[0]:null;return(0,o.useEffect)((function(){var n=new AbortController;function t(){return(t=(0,i.Z)((0,r.Z)().mark((function t(){var i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,Z(!0),t.next=4,(0,l.X)({action:"".concat(e),movieId:k,controller:{signal:n.signal}});case 4:i=t.sent,p((0,a.Z)({},i)),"trending"===e&&(0,d.qz)("trending"),t.next=16;break;case 9:if(t.prev=9,t.t0=t.catch(0),!s.Z.isCancel(t.t0)){t.next=13;break}return t.abrupt("return");case 13:w(t.t0.message),(0,d.LE)(t.t0.message),p(null);case 16:return t.prev=16,Z(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[0,9,16,19]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){n.abort()}}),[e,k]),[v,h,x]}},2945:function(e,n,t){t.d(n,{f:function(){return s},X:function(){return l}});var r=t(4165),a=t(1413),i=t(5861),c=t(1243),o="https://api.themoviedb.org/3",u={timeout:5e3,params:{language:"en-US",api_key:"b5edf42d0c828c3abea97e9ad1ce315b"},headers:{accept:"application/json"}},s="https://image.tmdb.org/t/p/";function l(e){return d.apply(this,arguments)}function d(){return(d=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,s,l,d,p,f,m,h,Z;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.action,i=n.movieId,s=void 0===i?null:i,l=n.controller,d=void 0===l?{}:l,p=n.params,f=void 0===p?{}:p,m=(0,a.Z)((0,a.Z)({},u),{},{params:(0,a.Z)((0,a.Z)({},u.params),f)},d),e.next=4,c.Z.get("".concat(o).concat(v(t,s)),m);case 4:return h=e.sent,Z=h.data,e.abrupt("return",Z);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,n){switch(e){case"trending":return"/trending/movie/day";case"search":return"/search/movie";case"movieDetails":return"/movie/".concat(n);case"movieCredits":return"/movie/".concat(n,"/credits");case"movieReviews":return"/movie/".concat(n,"/reviews");default:return}}}}]);
//# sourceMappingURL=Reviews.8c4ae2e8.chunk.js.map