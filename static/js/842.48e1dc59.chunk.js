"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[842],{842:function(n,t,e){e.r(t);var r,a,c,o,i,s,u,p=e(861),d=e(439),l=e(168),f=e(757),h=e.n(f),v=e(791),m=e(87),x=e(444),w=e(390),g=e(184),Z=x.ZP.div(r||(r=(0,l.Z)(["\n  padding: 20px;\n  text-align: center;\n"]))),b=x.ZP.h1(a||(a=(0,l.Z)(["\n  font-size: 24px;\n  margin-bottom: 20px;\n"]))),y=x.ZP.ul(c||(c=(0,l.Z)(["\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),k=x.ZP.li(o||(o=(0,l.Z)(["\n  width: calc(100% / 6);\n  margin-bottom: 20px;\n  padding: 10px;\n\n  @media (max-width: 1200px) {\n    width: calc(100% / 4);\n  }\n\n  @media (max-width: 800px) {\n    width: calc(100% / 3);\n  }\n\n  @media (max-width: 600px) {\n    width: calc(100% / 2);\n  }\n"]))),_=(0,x.ZP)(m.rU)(i||(i=(0,l.Z)(["\n  display: block;\n  text-decoration: none;\n  color: #333;\n"]))),j=x.ZP.img(s||(s=(0,l.Z)(["\n  width: 100%;\n  height: auto;\n  margin-bottom: 10px;\n  transition: transform 0.1s ease-in-out;\n\n  &:hover {\n    animation: pulsare 1s ease-in-out;\n    transform: scale(1.01);\n  }\n  @keyframes pulsare {\n    0% {\n      box-shadow: 0 0 25px #5ddcff, 0 0 50px #4e00c2;\n    }\n  }\n"]))),P=x.ZP.p(u||(u=(0,l.Z)(["\n  font-size: 16px;\n  margin: 0;\n"])));t.default=function(){var n=(0,v.useState)([]),t=(0,d.Z)(n,2),e=t[0],r=t[1];return(0,v.useEffect)((function(){var n=function(){var n=(0,p.Z)(h().mark((function n(){var t;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,w.wr)();case 2:t=n.sent,r(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,g.jsxs)(Z,{children:[(0,g.jsx)(b,{children:"Trending Movies"}),(0,g.jsx)(y,{children:e.map((function(n){return(0,g.jsx)(k,{children:(0,g.jsxs)(_,{to:"/movies/".concat(n.id),children:[(0,g.jsx)(j,{src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),alt:n.title}),(0,g.jsx)(P,{children:n.title})]})},n.id)}))})]})}},390:function(n,t,e){e.d(t,{Bt:function(){return l},Y5:function(){return p},wr:function(){return s},y:function(){return d},z1:function(){return u}});var r=e(861),a=e(757),c=e.n(a),o=e(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=new URLSearchParams({method:"GET",api_key:"6d44761072bd3455ede44a6813ca8a9a",language:"en-US",include_adult:!1,headers:{accept:"application/json"}}),s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/trending/movie/day",n.prev=1,n.next=4,o.Z.get("".concat("/trending/movie/day","?").concat(i));case 4:return t=n.sent,n.abrupt("return",t.data.results);case 8:throw n.prev=8,n.t0=n.catch(1),console.log("Error fetching trending movies:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/search/movie",n.prev=1,n.next=4,o.Z.get("".concat("/search/movie","?").concat(i,"&query=").concat(t));case 4:return e=n.sent,n.abrupt("return",e.data.results);case 8:throw n.prev=8,n.t0=n.catch(1),console.log("Error searching movies:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t),n.prev=1,n.next=4,o.Z.get("".concat(e,"?").concat(i));case 4:return r=n.sent,n.abrupt("return",r.data);case 8:throw n.prev=8,n.t0=n.catch(1),console.log("Error fetching movie details:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/credits"),n.prev=1,n.next=4,o.Z.get("".concat(e,"?").concat(i));case 4:return r=n.sent,n.abrupt("return",r.data.cast);case 8:throw n.prev=8,n.t0=n.catch(1),console.log("Error fetching cast:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/reviews"),n.prev=1,n.next=4,o.Z.get("".concat(e,"?").concat(i));case 4:return r=n.sent,n.abrupt("return",r.data.results);case 8:throw n.prev=8,n.t0=n.catch(1),console.log("Error fetching reviews:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=842.48e1dc59.chunk.js.map