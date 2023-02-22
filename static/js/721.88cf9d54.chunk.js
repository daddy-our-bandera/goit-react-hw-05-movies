"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[721],{6830:function(n,t,e){e.d(t,{h:function(){return i}});var r,a=e(168),c=e(4934),o=e(1087),i=(0,c.Z)(o.OL)(r||(r=(0,a.Z)(["\n  background: #d3d3d3;\n  color: #2c2c2c;\n  cursor: pointer;\n  font-size: 1em;\n  padding: 0.5rem;\n  border: 0;\n  transition: all 0.5s;\n  border-radius: 10px;\n\n  :after {\n    position: absolute;\n    left: 80%;\n    top: 54%;\n    right: 0;\n    bottom: 0;\n    opacity: 0;\n    transform: translate(-50%, -50%);\n  }\n\n  :hover {\n    background: black;\n    transition: all 0.5s;\n    border-radius: 10px;\n    box-shadow: 0px 6px 15px #0000ff61;\n    padding: 0.5rem 2rem 0.5rem 0.5rem;\n    color: #ffffff;\n    :after {\n      opacity: 1;\n      transition: all 0.5s;\n      color: #ffffff;\n    }\n  }\n"])))},8861:function(n,t,e){e.d(t,{W:function(){return c}});var r,a=e(168),c=e(4934).Z.div(r||(r=(0,a.Z)(["\n  padding: 50px 50px;\n"])))},7505:function(n,t,e){e.d(t,{Z:function(){return a}});var r=e(184);function a(n){var t=n.message;return(0,r.jsx)("h1",{children:t})}},854:function(n,t,e){e.d(t,{a:function(){return c}});var r=e(2043),a=e(184),c=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(r.v,{size:90,thickness:97,speed:38,color:"#36ad47"})})}},2721:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,c,o=e(9439),i=e(2791),s=e(7689),u=e(427),d=e(3225),f=e(168),p=e(4934),l=e(1087),v=p.Z.section(r||(r=(0,f.Z)(["\n  margin-top: 30px;\n"]))),x=p.Z.div(a||(a=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  padding: 40px;\n  gap: 50px;\n"]))),h=(0,p.Z)(l.rU)(c||(c=(0,f.Z)(["\n  background: #d3d3d3;\n  color: #2c2c2c;\n  cursor: pointer;\n  font-size: 1em;\n  padding: 0.5rem;\n  border: 0;\n  transition: all 0.5s;\n  border-radius: 10px;\n\n  :after {\n    position: absolute;\n    left: 80%;\n    top: 54%;\n    right: 0;\n    bottom: 0;\n    opacity: 0;\n    transform: translate(-50%, -50%);\n  }\n\n  :hover {\n    background: black;\n    transition: all 0.5s;\n    border-radius: 10px;\n    box-shadow: 0px 6px 15px #0000ff61;\n    padding: 0rem 0.5rem 1rem 0.5rem;\n    color: #ffffff;\n    :after {\n      opacity: 1;\n      transition: all 0.5s;\n      color: #ffffff;\n    }\n  }\n"]))),m=e(184),b=function(n){var t=n.movie,e=t.title,r=t.name,a=t.release_date,c=t.vote_average,o=t.poster_path,i=t.overview,s=t.genres;return(0,m.jsxs)(v,{children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("img",{src:o?"https://image.tmdb.org/t/p/w200/".concat(o," "):d,alt:e}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:e}),(0,m.jsx)("li",{children:r}),(0,m.jsx)("li",{children:a}),(0,m.jsx)("li",{children:c}),(0,m.jsx)("li",{children:i})]}),(0,m.jsx)("ul",{children:s.map((function(n){var t=n.id,e=n.name;return(0,m.jsxs)("li",{children:[e," "]},t)}))})]}),(0,m.jsxs)(x,{children:[(0,m.jsx)(h,{to:"cast",children:"Cast"}),(0,m.jsx)(h,{to:"reviews",children:"Revievs"})]})]})},g=e(6830),j=e(8861),k=e(854),Z=e(7505);function w(){var n,t,e=(0,i.useState)(null),r=(0,o.Z)(e,2),a=r[0],c=r[1],d=(0,i.useState)("idle"),f=(0,o.Z)(d,2),p=f[0],l=f[1],v=(0,s.UO)().movieId,x=(0,s.TH)(),h=(0,i.useRef)(null!==(n=null===(t=x.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/");return(0,i.useEffect)((function(){l("pending"),(0,u.Mc)(v).then((function(n){c(n),document.title="My Movies | ".concat(n.title),l("resolved")})).catch((function(n){l("rejected")}))}),[v]),(0,m.jsxs)(j.W,{children:[(0,m.jsx)(g.h,{to:h.current,children:"Go back"}),"pending"===p&&(0,m.jsx)(k.a,{}),"resolved"===p&&(0,m.jsx)(b,{movie:a}),"rejected"===p&&(0,m.jsx)(Z.Z,{}),(0,m.jsx)(i.Suspense,{fallback:(0,m.jsx)(k.a,{}),children:(0,m.jsx)(s.j3,{})})]})}},427:function(n,t,e){e.d(t,{IV:function(){return p},Mc:function(){return f},Tg:function(){return u},vw:function(){return d},wH:function(){return l}});var r=e(5861),a=e(4687),c=e.n(a),o=e(1912),i="https://api.themoviedb.org/3",s="e6eac04b3db1d8bf65626de9a2b0d930",u=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/trending/all/day?api_key=").concat(s,"&page=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/search/movie?api_key=").concat(s,"&query=").concat(t,"&page=").concat(e,"&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3225:function(n,t,e){n.exports=e.p+"static/media/NotImage.43cd9c57954bbdf584a5.jpg"}}]);
//# sourceMappingURL=721.88cf9d54.chunk.js.map