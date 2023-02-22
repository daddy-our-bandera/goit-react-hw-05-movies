"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[468,242],{6830:function(n,t,e){e.d(t,{h:function(){return i}});var r,a=e(168),c=e(4934),o=e(1087),i=(0,c.Z)(o.OL)(r||(r=(0,a.Z)(["\n  background: #d3d3d3;\n  color: #2c2c2c;\n  cursor: pointer;\n  font-size: 1em;\n  padding: 0.5rem;\n  border: 0;\n  transition: all 0.5s;\n  border-radius: 10px;\n\n  :after {\n    position: absolute;\n    left: 80%;\n    top: 54%;\n    right: 0;\n    bottom: 0;\n    opacity: 0;\n    transform: translate(-50%, -50%);\n  }\n\n  :hover {\n    background: black;\n    transition: all 0.5s;\n    border-radius: 10px;\n    box-shadow: 0px 6px 15px #0000ff61;\n    padding: 0.5rem 2rem 0.5rem 0.5rem;\n    color: #ffffff;\n    :after {\n      opacity: 1;\n      transition: all 0.5s;\n      color: #ffffff;\n    }\n  }\n"])))},8861:function(n,t,e){e.d(t,{W:function(){return c}});var r,a=e(168),c=e(4934).Z.div(r||(r=(0,a.Z)(["\n  padding: 50px 50px;\n"])))},854:function(n,t,e){e.d(t,{a:function(){return c}});var r=e(2043),a=e(184),c=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(r.v,{size:90,thickness:97,speed:38,color:"#36ad47"})})}},4146:function(n,t,e){e.d(t,{Z:function(){return m}});var r,a,c,o,i=e(7689),u=e(168),s=e(4934),d=e(1087),p=s.Z.ul(r||(r=(0,u.Z)(["\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  width: 70%;\n  padding-top: 30px;\n  color: #ddd;\n  gap: 20px;\n  list-style: none;\n"]))),f=s.Z.li(a||(a=(0,u.Z)(["\n  width: 220px;\n  transition: all 200ms ease-out;\n\n  :hover {\n     box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, \n     rgba(0, 0, 0, 0.22) 0px 15px 12px;   \n     transform: scale(1.05);\n  }\n\n  :after {\n      padding-bottom: 100%\n      display: block\n  }\n"]))),l=(0,s.Z)(d.rU)(c||(c=(0,u.Z)(["\n  text-decoration: none;\n"]))),x=s.Z.img(o||(o=(0,u.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),h=e(3225),v=e(184);function m(n){var t=n.movies,e=(0,i.TH)();return(0,v.jsx)(p,{children:t.map((function(n){return(0,v.jsx)(f,{children:(0,v.jsx)(l,{to:"/movie/".concat(n.id),state:{from:e},children:(0,v.jsx)(x,{src:n.poster_path?"https://image.tmdb.org/t/p/w200/".concat(n.poster_path):h,alt:n.title})})},n.id)}))})}},7468:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(9439),a=e(2791),c=e(427),o=e(4146),i=e(854),u=e(3242),s=e(8861),d=e(184);function p(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],p=t[1],f=(0,a.useState)("idle"),l=(0,r.Z)(f,2),x=l[0],h=l[1],v=(0,a.useState)(null),m=(0,r.Z)(v,2),g=m[0],b=m[1];return(0,a.useEffect)((function(){h("pending"),(0,c.Tg)(1).then((function(n){p(n.results),h("resolved")})).catch((function(n){b(n.message),h("rejected")}))}),[1]),(0,d.jsxs)(s.W,{children:["pending"===x&&(0,d.jsx)(i.a,{}),"resolved"===x&&(0,d.jsx)(o.Z,{movies:e}),"rejected"===x&&(0,d.jsx)(u.default,{message:g})]})}},3242:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(6830),a=e(8861),c=e(2791),o=e(7689),i=e(7695),u=e(184);function s(){var n,t,e=(0,o.TH)(),s=(0,c.useRef)(null!==(n=null===(t=e.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/");return(0,u.jsxs)(a.W,{children:[(0,u.jsx)(r.h,{to:s.current,children:"Go back"}),(0,u.jsxs)("div",{style:{paddingTop:"40px"},children:[(0,u.jsx)("p",{children:" Something went wrong, try reloading the page or come back later"}),(0,u.jsx)("img",{src:i,alt:"",width:"1000px"})]})]})}},427:function(n,t,e){e.d(t,{IV:function(){return f},Mc:function(){return p},Tg:function(){return s},vw:function(){return d},wH:function(){return l}});var r=e(5861),a=e(4687),c=e.n(a),o=e(1912),i="https://api.themoviedb.org/3",u="e6eac04b3db1d8bf65626de9a2b0d930",s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/trending/all/day?api_key=").concat(u,"&page=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/search/movie?api_key=").concat(u,"&query=").concat(t,"&page=").concat(e,"&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3225:function(n,t,e){n.exports=e.p+"static/media/NotImage.43cd9c57954bbdf584a5.jpg"},7695:function(n,t,e){n.exports=e.p+"static/media/imgError.450cf5a5c11bdd9f8100.jpg"}}]);
//# sourceMappingURL=468.be797dde.chunk.js.map