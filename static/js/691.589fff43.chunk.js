(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[691],{691:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return A}});var r,a,c,o,i,s,u,p,l,d,h,f,v=t(861),g=t(439),m=t(757),x=t.n(m),b=t(791),w=t(585),y=t(7),Z=t.n(y),k=t(87),_=t(689),P=t(390),j=t(168),E=t(444),T=E.ZP.div(r||(r=(0,j.Z)(["\n  background-color: #f9f9f9;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),S=E.ZP.h1(a||(a=(0,j.Z)(["\n  color: #b92121;\n  margin-bottom: 20px;\n"]))),R=E.ZP.div(c||(c=(0,j.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n"]))),O=E.ZP.input(o||(o=(0,j.Z)(["\n  padding: 8px;\n  font-size: 16px;\n"]))),C=E.ZP.span(i||(i=(0,j.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),U=E.ZP.button(s||(s=(0,j.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://cdn-icons-png.flaticon.com/512/109/109164.png');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),z=E.ZP.ul(u||(u=(0,j.Z)(["\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),q=E.ZP.li(p||(p=(0,j.Z)(["\n  flex: 0 0 calc(100% / 6);\n  margin-bottom: 10px;\n\n  @media (max-width: 1200px) {\n    flex-basis: calc(100% / 4);\n  }\n\n  @media (max-width: 800px) {\n    flex-basis: calc(100% / 3);\n  }\n\n  @media (max-width: 600px) {\n    flex-basis: calc(100% / 2);\n  }\n"]))),I=(0,E.ZP)(k.rU)(l||(l=(0,j.Z)(["\n  color: #333;\n  text-decoration: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n"]))),L=E.ZP.img(d||(d=(0,j.Z)(["\n  width: 150px;\n  height: auto;\n  margin-bottom: 5px;\n"]))),D=E.ZP.div(h||(h=(0,j.Z)(["\n  width: 150px;\n  height: 225px;\n  margin-bottom: 10px;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3c?xml version='1.0' encoding='UTF-8' standalone='no'?%3e%3csvg xmlns='http://www.w3.org/2000/svg' width='225' height='150' version='1.0'%3e%3cpath fill='%23d4d4d4' d='M0 0v150h225V0H0z'/%3e%3cpath fill='%23fff' d='m64.055077 38.894466 36.105543 36.105536-36.105543 36.105538 12.320373 12.32038 36.10554-36.105547 36.12454 36.124547 12.33939-12.33938-36.12454-36.124551 36.10554-36.105537-12.32039-12.320372-36.10552 36.105536L76.394463 26.55508 64.055077 38.894466z' overflow='visible' style='marker:none'/%3e%3c/svg%3e\");\n  background-size: cover;\n  background-position: center;\n"]))),F=E.ZP.p(f||(f=(0,j.Z)(["\n  color: red;\n"]))),W=t(184);z.propTypes={searchResults:Z().arrayOf(Z().shape({id:Z().number.isRequired,poster_path:Z().string,title:Z().string.isRequired}))};var A=function(){var n=(0,b.useState)(""),e=(0,g.Z)(n,2),t=e[0],r=e[1],a=(0,b.useState)([]),c=(0,g.Z)(a,2),o=c[0],i=c[1],s=(0,b.useState)(!1),u=(0,g.Z)(s,2),p=u[0],l=u[1],d=(0,b.useState)(""),h=(0,g.Z)(d,2),f=h[0],m=h[1],y=(0,k.lr)(),Z=(0,g.Z)(y,1)[0],j=(0,_.s0)();(0,b.useEffect)((function(){var n=Z.get("query")||"";r(n),n&&E(n)}),[Z]);var E=function(){var n=(0,v.Z)(x().mark((function n(e){var t;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l(!0),m(""),n.next=5,(0,P.z1)(e);case 5:if(0!==(t=n.sent).length){n.next=11;break}return m("No movies found"),i([]),l(!1),n.abrupt("return");case 11:i(t),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(0),console.log("Error searching movies:",n.t0),m("An error occurred while searching movies.");case 18:return n.prev=18,l(!1),n.finish(18);case 21:case"end":return n.stop()}}),n,null,[[0,14,18,21]])})));return function(e){return n.apply(this,arguments)}}(),A=function(){j("?query=".concat(encodeURIComponent(t))),E(t)};return(0,W.jsxs)(T,{children:[(0,W.jsx)(S,{children:"Search Movies"}),(0,W.jsxs)(R,{children:[(0,W.jsx)(O,{type:"text",value:t,onChange:function(n){return r(n.target.value)},onKeyDown:function(n){"Enter"===n.key&&A()}}),(0,W.jsx)(U,{type:"submit",onClick:A,children:(0,W.jsx)(C,{children:"Search"})})]}),f&&(0,W.jsx)(F,{children:f}),p?(0,W.jsx)(w.Z,{}):(0,W.jsx)(z,{children:o.map((function(n){return(0,W.jsx)(q,{children:(0,W.jsxs)(I,{to:"/movies/".concat(n.id),children:[n.poster_path?(0,W.jsx)(L,{src:"https://image.tmdb.org/t/p/w300/".concat(n.poster_path),alt:n.title}):(0,W.jsx)(D,{}),(0,W.jsx)("span",{children:n.title})]})},n.id)}))})]})}},390:function(n,e,t){"use strict";t.d(e,{Bt:function(){return d},Y5:function(){return p},wr:function(){return s},y:function(){return l},z1:function(){return u}});var r=t(861),a=t(757),c=t.n(a),o=t(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=new URLSearchParams({method:"GET",api_key:"6d44761072bd3455ede44a6813ca8a9a",language:"en-US",include_adult:!1,headers:{accept:"application/json"}}),s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/trending/movie/day",n.prev=1,n.next=4,o.Z.get("".concat("/trending/movie/day","?").concat(i));case 4:return e=n.sent,n.abrupt("return",e.data.results);case 8:throw n.prev=8,n.t0=n.catch(1),console.log("Error fetching trending movies:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/search/movie",n.prev=1,n.next=4,o.Z.get("".concat("/search/movie","?").concat(i,"&query=").concat(e));case 4:return t=n.sent,n.abrupt("return",t.data.results);case 8:throw n.prev=8,n.t0=n.catch(1),console.log("Error searching movies:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/movie/".concat(e),n.prev=1,n.next=4,o.Z.get("".concat(t,"?").concat(i));case 4:return r=n.sent,n.abrupt("return",r.data);case 8:throw n.prev=8,n.t0=n.catch(1),console.log("Error fetching movie details:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/movie/".concat(e,"/credits"),n.prev=1,n.next=4,o.Z.get("".concat(t,"?").concat(i));case 4:return r=n.sent,n.abrupt("return",r.data.cast);case 8:throw n.prev=8,n.t0=n.catch(1),console.log("Error fetching cast:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/movie/".concat(e,"/reviews"),n.prev=1,n.next=4,o.Z.get("".concat(t,"?").concat(i));case 4:return r=n.sent,n.abrupt("return",r.data.results);case 8:throw n.prev=8,n.t0=n.catch(1),console.log("Error fetching reviews:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},888:function(n,e,t){"use strict";var r=t(47);function a(){}function c(){}c.resetWarningCache=a,n.exports=function(){function n(n,e,t,a,c,o){if(o!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:c,resetWarningCache:a};return t.PropTypes=t,t}},7:function(n,e,t){n.exports=t(888)()},47:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=691.589fff43.chunk.js.map