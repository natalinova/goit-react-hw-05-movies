"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[267],{633:function(A,r,e){e.d(r,{Z:function(){return s}});e(791);var n=e(689),t=e(490),u=e(299),a=e(184);function s(A){var r=A.data,e=(0,n.TH)(),s=r.map((function(A){var r=A.id,n=A.poster_path,s=A.title,l=A.release_date;return(0,a.jsx)(t.ck,{children:(0,a.jsxs)(t.nf,{to:"/movies/".concat(r),state:{from:e},children:[(0,a.jsx)("img",{src:null!==n?"".concat("https://image.tmdb.org/t/p/w500").concat(n):u,alt:s,width:"400"}),(0,a.jsx)(t.XQ,{children:s}),(0,a.jsxs)(t.eT,{children:[" Release date:",l]})]})},r)}));return(0,a.jsx)(t.aV,{children:s})}},267:function(A,r,e){e.r(r),e.d(r,{default:function(){return X}});var n=e(861),t=e(885),u=e(757),a=e.n(u),s=e(791),l=e(490),c=e(184),o=function(A){var r=A.value,e=A.onChange;return(0,c.jsx)(l.II,{type:"text",value:r,placeholder:"Insert your query",onChange:function(A){return e(A.target.value)}})},v=e(731),p=e(689),i=e(784),V=e(633),S=e(944),X=function(){var A,r=(0,s.useState)([]),e=(0,t.Z)(r,2),u=e[0],X=e[1],j=(0,s.useState)(null),U=(0,t.Z)(j,2),f=U[0],d=U[1],q=(0,v.lr)(""),x=(0,t.Z)(q,2),y=x[0],h=x[1],K=(0,s.useState)((function(){var A,r=null!==(A=y.get("search"))&&void 0!==A?A:"";return r||""})),g=(0,t.Z)(K,2),N=g[0],O=g[1],W=null!==(A=y.get("search"))&&void 0!==A?A:"";console.log(W);var m=W.toLowerCase(),F=function(){var A=(0,n.Z)(a().mark((function A(r){var e,n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,(0,S.o)("/search","","","&query=".concat(r));case 3:e=A.sent,n=e.data.results,X(n),0===n.length?d("Not any movies for your query"):d(null),A.next=11;break;case 9:A.prev=9,A.t0=A.catch(0);case 11:case"end":return A.stop()}}),A,null,[[0,9]])})));return function(r){return A.apply(this,arguments)}}();return(0,s.useEffect)((function(){""!==N&&F(N)}),[N]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.l0,{onSubmit:function(A){A.preventDefault(),console.log(m),O(W)},children:(0,c.jsx)(o,{value:W,onChange:function(A){h(""!==A?{search:A}:{})}})}),null===f?""!==u?(0,c.jsx)(V.Z,{data:u}):(0,c.jsx)("div",{}):(0,c.jsx)(i.Z,{message:f}),(0,c.jsx)(s.Suspense,{fallback:"Loading...",children:(0,c.jsx)(p.j3,{})})]})}},299:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=267.0118935e.chunk.js.map