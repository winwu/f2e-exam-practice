(this["webpackJsonpsfi-exam-practice"]=this["webpackJsonpsfi-exam-practice"]||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(36),i=n.n(s),l=n(8),o=n(4),d=n(3),u=n.n(d),j=n(7),b=n(2),h=n(6),m=(n(90),function(e){var t=Object(c.useState)(!1),n=Object(b.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(""),l=Object(b.a)(i,2),o=l[0],d=l[1],u=Object(c.useRef)(null),j=Object(c.useRef)(null);return Object(c.useEffect)((function(){var t,n,c,r=h.k("%H:%M:%S"),i=h.k("%Y-%b-%d %H:%M:%S"),l=20,o=10,b=20,m=40,f=null!==(t=null===(n=document)||void 0===n||null===(c=n.querySelector("#root .container"))||void 0===c?void 0:c.clientWidth)&&void 0!==t?t:300,v=250,p=JSON.parse(JSON.stringify(e.datas));p.forEach((function(e){e.timestamp=e.time,e.time=r(e.time)}));var x=null,O=h.i().range([m+10+20,f-o-20]).domain(p.map((function(e){return e.time}))),g=h.h().range([v-b,l]).domain([0,100]),w=h.g().curve(h.d).x((function(e){return O(e.time)})).y((function(e){return g(e.score)}));(x=h.j(u.current)).attr("viewBox",[0,0,f,v]).attr("class","line-chart"),x.append("g").attr("class","x-axis").attr("transform","translate(0, ".concat(v-b,")")).call(h.b(O).tickSizeOuter(0).tickSizeInner(0).tickPadding(10)),x.append("g").attr("class","y-axis").attr("transform","translate(".concat(m,", 0)")).call(h.c(g).ticks(4).tickSize(-f).tickPadding(15)),x.selectAll(".domain").remove(),x.select(".domain").attr("stroke","#999"),x.append("linearGradient").attr("id","line-gradient").attr("gradientUnits","userSpaceOnUse").selectAll("stop").data([{offset:"0%",color:"#ffa00b"},{offset:"100%",color:"#42605e"}]).enter().append("stop").attr("offset",(function(e){return e.offset})).attr("stop-color",(function(e){return e.color})),x.append("path").attr("class","line").attr("stroke","url(#line-gradient)").attr("stroke-width",3).attr("fill","none").style("stroke-linecap","round").attr("d",w(p));var N=x.append("defs").append("filter").attr("id","drop-shadow").attr("height",v);N.append("feGaussianBlur").attr("in","SourceAlpha").attr("stdDeviation",4).attr("result","blur"),N.append("feOffset").attr("in","blur").attr("dx",0).attr("dy",15).attr("result","offsetBlur");var S=N.append("feMerge");S.append("feMergeNode").attr("in","offsetBlur"),S.append("feMergeNode").attr("in","SourceGraphic"),x.append("path").attr("class","line-shadow").style("filter","url(#drop-shadow)").attr("d",w(p)),x.selectAll("circle").data(p).enter().append("circle").attr("r",5).attr("cx",(function(e){return O(e.time)})).attr("cy",(function(e){return g(e.score)})).style("cursor","pointer").style("fill",(function(){return"#795548"})).on("mouseover",(function(e){if(null===j||void 0===j?void 0:j.current){s(!0);var t=h.e,n=t.pageX,c=t.pageY;n+140>window.innerWidth?(j.current.style.left="initial",j.current.style.right=window.innerWidth-n+"px"):j.current.style.left=n+"px",j.current.style.top=c-70+"px",d(Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:i(e.timestamp)}),Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"Score"}),": ",e.score]})]}))}})).on("mouseout",(function(e){(null===j||void 0===j?void 0:j.current)&&s(!1)}))}),[e.datas]),Object(a.jsxs)("div",{className:"line-chart-container",children:[Object(a.jsx)("svg",{ref:u}),Object(a.jsx)("div",{className:"d3-tooltip ".concat(r?"active":""),ref:j,children:o})]})}),f=function(e){var t=Object(c.useRef)(null);return Object(c.useEffect)((function(){var n,a,c,r=null!==(n=null===(a=document)||void 0===a||null===(c=a.querySelector("#root .container"))||void 0===c?void 0:c.clientWidth)&&void 0!==n?n:300,s=2*Math.PI,i=h.f(".0%"),l=h.a().startAngle(0).innerRadius(50).outerRadius(45),o=Number((e.percentage/100).toFixed(2)),d=h.j(t.current);d.attr("viewBox",[0,0,r,100]).attr("class","line-chart");var u=d.append("g").attr("class","g-transform").attr("transform","translate(".concat(r/2,", ").concat(50,")")).append("g").attr("class","progress-meter");u.append("path").attr("class","background").attr("fill","#ccc").attr("fill-opacity",.5).attr("d",l.endAngle(s));var j=u.append("path").attr("class","foreground").attr("fill",e.fillColor).attr("fill-opacity",1),b=u.append("text").attr("fill","#333").attr("text-anchor","middle").attr("dy",".35em");j.attr("d",l.endAngle(s*o)),b.text(i(o))}),[e]),Object(a.jsx)("div",{className:"line-chart-container",children:Object(a.jsx)("svg",{ref:t})})},v=n(12),p=function(e){return e.map((function(e){var t,n=function(e){var t=/(.*?)\s*\(1\)(.*?)\s*\(2\)(.*?)\s*\(3\)(.*?)\s*\(4\)(.*?)\s*$/g.exec(e);if(!Array.isArray(t))return console.warn("".concat(e," is invalid question title format")),null;for(var n=[],a=1,c=2;c<=5;c++){var r=t[c].trim();n.push({val:a,text:r}),a++}return{title:t[1].trim()||"no title",options:n}}(e.title.replace(/\n/g,""));return{ans:Math.abs(e.ans),qn:e.qn,category:e.category,title:null!==(t=null===n||void 0===n?void 0:n.title)&&void 0!==t?t:"",options:null===n||void 0===n?void 0:n.options}}))},x=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(".","/data/").concat(t,".json"));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("An error has occured");case 5:return e.next=7,n.json();case 7:return a=e.sent,e.abrupt("return",p(a));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=JSON.parse(window.localStorage.getItem("".concat(e,"-pra-history")));return t||null},g=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return n=e.sent,a=O(t),c=[],a&&a.forEach((function(e,t){"false"===e&&c.push(n[t])})),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=JSON.parse(window.localStorage.getItem("bookmarks"));if(!e){var t={html_css:[],javascript:[]};return window.localStorage.setItem("bookmarks",JSON.stringify(t)),t}return e},N=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,a,c,r,s,i,l,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=w(),n=t.html_css,a=void 0===n?[]:n,c=t.javascript,r=void 0===c?[]:c,e.next=3,x("html_css");case 3:return s=e.sent,e.next=6,x("javascript");case 6:return i=e.sent,l=s.filter((function(e){return a.includes(e.qn)})),o=i.filter((function(e){return r.includes(e.qn)})),e.abrupt("return",[].concat(Object(v.a)(l),Object(v.a)(o)));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(e,t){var n=Object(c.useState)((function(){return function(e,t){var n=window.localStorage.getItem(e);return n?(console.log("hook content",n),console.log("hook JSON.parse(content)",JSON.parse(n)),JSON.parse(n)):t instanceof Function?t():t}(e,t)})),a=Object(b.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(r))}),[r]),[r,s]},k=function(){var e=S("scoreHistory",[]),t=Object(b.a)(e,1)[0],n=Object(c.useState)([]),r=Object(b.a)(n,2),s=r[0],i=r[1],o=Object(c.useState)([]),d=Object(b.a)(o,2),h=d[0],v=d[1];Object(c.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("html_css");case 2:return t=e.sent,e.next=5,g("javascript");case 5:n=e.sent,i(t),v(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=function(e){var t=O(e);if(!t)return 0;var n=t.length,a=t.filter((function(e){return null!==e})).length;return Math.round(a/n*100)},x=function(e){var t=O(e);return t?t.filter((function(e){return null!==e})).length:0},w=p("html_css"),N=p("javascript"),k=[];return s.length&&k.push(Object(a.jsx)("div",{className:"col-6",children:Object(a.jsx)(l.b,{to:"/review/html_css",className:"ans-btn review-bg",children:"HTML/CSS"})},"html_css")),h.length&&k.push(Object(a.jsx)("div",{className:"col-6",children:Object(a.jsx)(l.b,{to:"/review/javascript",className:"ans-btn review-bg",children:"JavaScript"})},"javascript")),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"container-fluid max-width-700 pt-4 pb-4",children:[Object(a.jsxs)("div",{id:"practice-sec",className:"mb-3",children:[Object(a.jsx)("h3",{className:"section-heading",children:"\u8003\u984c\u7df4\u7fd2 Practice"}),Object(a.jsxs)("div",{className:"row align-items-center",children:[Object(a.jsx)("div",{className:"col-6",children:Object(a.jsx)(l.b,{to:"/practice/html_css",className:"ans-btn practice-bg",children:"HTML/CSS"})}),Object(a.jsx)("div",{className:"col-6",children:Object(a.jsx)(l.b,{to:"/practice/javascript",className:"ans-btn practice-bg",children:"JavaScript"})})]})]}),s.length||h.length?Object(a.jsxs)("div",{id:"review-sec",className:"mb-3",children:[Object(a.jsx)("h3",{className:"section-heading",children:"\u8907\u7fd2\u932f\u8aa4\u984c\u76ee Review"}),Object(a.jsx)("div",{className:"row align-items-center",children:k})]}):null,Object(a.jsx)("h3",{className:"section-heading",children:"\u6a21\u64ec\u8003\u8a66 Mock examination"}),Object(a.jsx)(l.b,{to:"/exam",className:"ans-btn exam-bg",children:"\u6a21\u64ec\u6e2c\u9a57"})]}),Object(a.jsxs)("div",{className:"container-fluid max-width-700 mt-3 mb-3",children:[Object(a.jsxs)("section",{children:[Object(a.jsx)("h3",{className:"section-heading",children:"\u4f5c\u7b54\u5b8c\u6210\u7387 Answer completion rate"}),Object(a.jsxs)("div",{className:"progress-line-wrap",children:[Object(a.jsx)("div",{className:"progress-line-item",children:"HTML / CSS"}),Object(a.jsx)(f,{percentage:w,fillColor:"#8c682f"}),Object(a.jsxs)("dl",{className:"progress-finished-dl",children:[Object(a.jsx)("dt",{children:"\u5df2\u4f5c\u7b54"}),Object(a.jsx)("dd",{children:x("html_css")})]})]}),Object(a.jsxs)("div",{className:"progress-line-wrap",children:[Object(a.jsx)("div",{className:"progress-line-item",children:"JavaScript"}),Object(a.jsx)(f,{percentage:N,fillColor:"#8c682f"}),Object(a.jsxs)("dl",{className:"progress-finished-dl",children:[Object(a.jsx)("dt",{children:"\u5df2\u4f5c\u7b54"}),Object(a.jsx)("dd",{children:x("javascript")})]})]})]}),Object(a.jsxs)("section",{children:[Object(a.jsx)("h3",{className:"section-heading",children:"\u8fd1\u671f\u6a21\u64ec\u6e2c\u9a57\u5206\u6578 Latest Score Histories"}),Object(a.jsx)("div",{className:"statistics-card",children:Object(a.jsx)(m,{datas:t.slice(-5)})})]})]})]})},y=new(n(98)),C=function(e,t){return null===t||t&&t>e.length?e:y.pickset(e,t)},q=function(e,t){var n=t/2,a=y.pickset(e.htmlcss,n),c=y.pickset(e.javascript,n);return[].concat(Object(v.a)(a),Object(v.a)(c))},E=Object(a.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-bookmark",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{fillRule:"evenodd",d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"})}),J=Object(a.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-bookmark-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{fillRule:"evenodd",d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5V2z"})}),A=Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-three-dots",viewBox:"0 0 16 16",children:Object(a.jsx)("path",{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})}),M=Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-trash-fill",viewBox:"0 0 16 16",children:Object(a.jsx)("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"})}),I=(n(103),{html_css:"HTML/CSS",javascript:"JavaScript"}),L=function(e){var t=Object(c.useState)(null),n=Object(b.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(!1),l=Object(b.a)(i,2),o=l[0],d=l[1],u=e.seq,j=e.data,h=e.haveSubmitted,m=e.onAnsChanged;Object(c.useEffect)((function(){d(function(e,t){var n=w();return!(!n[e]||!n[e].includes(t))}(j.category,Number(j.qn)))}),[j]);var f=!0===h&&Number(r)!==Number(j.ans);return Object(a.jsx)("div",{className:"question-card ".concat(f?"has-error":""),"data-testid":"que-card",children:Object(a.jsxs)("div",{className:"question-card-content",children:[Object(a.jsxs)("div",{className:"question-card-header",children:[Object(a.jsx)("div",{className:"question-idx",children:u+1}),Object(a.jsxs)("span",{className:"question-badge badge-".concat(j.category),"data-testid":"que-badge",children:[I[j.category]," ",j.qn]}),Object(a.jsx)("button",{className:"question-bm-btn","data-testid":"que-bm-btn",onClick:function(e){e.preventDefault();var t=!o;d(t),!1===t?function(e,t){var n=w(),a=n[e];a=a.filter((function(e){return e!==t})),n[e]=a.sort((function(e,t){return e-t})),window.localStorage.setItem("bookmarks",JSON.stringify(n))}(j.category,Number(j.qn)):function(e,t){var n=w();n[e].includes(t)||(n[e].push(t),n[e].sort((function(e,t){return e-t})),window.localStorage.setItem("bookmarks",JSON.stringify(n)))}(j.category,Number(j.qn))},children:o?J:E})]}),Object(a.jsx)("h3",{className:"question-title","data-testid":"que-title",children:j.title}),Object(a.jsx)("div",{className:"ans-btn-group",children:j.options?j.options.map((function(t){var n="";if(!0===h){var c=Number(r)!==Number(j.ans)&&t.val===j.ans,i=Number(r)===Number(j.ans)&&t.val===j.ans;n=c?"wrong-ans-marked":i?"correct-ans-marked":""}return Object(a.jsxs)("div",{className:"custom-control custom-radio ".concat(n),children:[Object(a.jsx)("input",{type:"radio",id:"opt-".concat(u,"-").concat(t.val),name:"q-".concat(u),value:t.val,checked:r===t.val.toString(),onChange:function(e){return function(e){s(e.target.value),m(e.target.value,u)}(e)},disabled:!0===e.haveSubmitted,className:"custom-control-input","data-testid":"que-input"}),Object(a.jsxs)("label",{className:"custom-control-label d-block",htmlFor:"opt-".concat(u,"-").concat(t.val),children:["(",t.val,") ",t.text]})]},"".concat(t.text))})):null})]})})},T=function(){var e=S("scoreHistory",[]),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),i=Object(b.a)(s,2),l=i[0],o=i[1],d=Object(c.useState)([]),h=Object(b.a)(d,2),m=h[0],f=h[1],p=Object(c.useState)(null),O=Object(b.a)(p,2),g=O[0],w=O[1];Object(c.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("html_css");case 2:return t=e.sent,e.next=5,x("javascript");case 5:n=e.sent,o(q({htmlcss:t,javascript:n},100));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){l.length&&f(new Array(l.length).fill(null))}),[l]),Object(c.useEffect)((function(){if(null!==g){var e=JSON.parse(JSON.stringify(n));e.push({time:(new Date).getTime(),score:g}),r(e)}}),[g]);var N=function(e,t){var n=Object(v.a)(m);n[t]=e,f(n)},k=function(){var e=0;return l.forEach((function(t,n){m[n]&&Number(m[n])===Number(t.ans)&&e++})),1*e};return Object(a.jsxs)("div",{className:"container max-width-700 mt-3 mb-5","data-testid":"exam-page",children:[0===l.length?Object(a.jsx)("div",{className:"text-center","data-testid":"loading",children:"Loading"}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("nav",{className:"navbar navbar-light","data-testid":"navbar",children:Object(a.jsx)("div",{children:"\u6a21\u64ec\u8003"})}),Object(a.jsx)("div",{className:"exams-wrap",children:l.map((function(e,t){return Object(a.jsx)(L,{seq:t,data:e,haveSubmitted:null!==g,onAnsChanged:N},t)}))})]}),Object(a.jsx)("div",{className:"ans-btn-fixed",children:Object(a.jsxs)("div",{className:"container max-width-700",children:[Object(a.jsxs)("button",{className:"ans-btn d-inline-block w-50",onClick:function(e){return function(e){e.preventDefault(),m.includes(null)&&alert("\u5c1a\u672a\u6709\u984c\u76ee\u672a\u4f5c\u7b54");var t=k();alert("\u6210\u7e3e ".concat(t)),w(t)}(e)},disabled:null!==g,children:[null!==g?"\u5df2":"","\u4ea4\u5377"]}),null!==g&&Object(a.jsxs)("div",{className:"score-result",children:["\u6210\u7e3e: ",g]})]})})]})},B=function(){var e,t=Object(o.h)().practiceType,n=0;if(window.localStorage.getItem("".concat(t,"-pra-history"))){var r=JSON.parse(window.localStorage.getItem("".concat(t,"-pra-history"))),s=r.lastIndexOf("true"),i=r.lastIndexOf("false");n=i>s?i+1:s+1}var l=Object(c.useState)([]),d=Object(b.a)(l,2),h=d[0],m=d[1],f=Object(c.useState)(n),v=Object(b.a)(f,2),p=v[0],O=v[1],g=Object(c.useState)(!1),w=Object(b.a)(g,2),N=w[0],S=w[1];Object(c.useEffect)((function(){"html_css"===t||"javascript"===t?function(){var e=Object(j.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:n=e.sent,m(C(n,null));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():console.warn("practiceType is wrong")}),[t]),Object(c.useEffect)((function(){h.length>0&&(window.localStorage.getItem("".concat(t,"-pra-history"))||window.localStorage.setItem("".concat(t,"-pra-history"),JSON.stringify(Array(h.length).fill(null))))}),[t,h]);var k=function(){S(!1)},y=function(e){if(e)return isNaN(e)?alert("\u5f88\u62b1\u6b49\uff0c\u8acb\u8f38\u5165\u6b63\u78ba\u7684\u984c\u865f"):(k(),Number(e)<=0?O(0):Number(e)>h.length?O(h.length-1):O(Number(e)-1))},q=Object(a.jsx)("div",{className:"ans-btn-fixed",children:Object(a.jsx)("div",{className:"container max-width-700",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-6 text-left",children:Object(a.jsx)("button",{className:"ans-btn","data-testid":"prev-btn",onClick:function(e){return k(),void O(p-1)},disabled:p<=0,children:"\u4e0a\u4e00\u984c Prev"})}),Object(a.jsx)("div",{className:"col-6 text-right",children:Object(a.jsx)("button",{className:"ans-btn","data-testid":"next-btn",onClick:function(e){return k(),void O(p+1)},disabled:p+1>h.length,children:"\u4e0b\u4e00\u984c Next"})})]})})}),E=null!==(e=null===h||void 0===h?void 0:h[p])&&void 0!==e?e:null,J=null;return J=0===h.length?Object(a.jsx)("div",{className:"text-center","data-testid":"loading",children:"Loading"}):p>=h.length?Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("div",{"data-testid":"empty-content",children:"\u6c92\u6709\u984c\u76ee\u4e86"}),Object(a.jsx)("span",{className:"btn","data-testid":"reset-currentindex",onClick:function(){return y(1)},children:"\u56de\u5230\u7b2c\u4e00\u984c"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("nav",{className:"navbar p-0 mb-3",children:[Object(a.jsxs)("div",{"data-testid":"pra-heading",children:["\u8003\u984c\u7df4\u7fd2 ",p+1,"/",h.length]}),Object(a.jsx)("button",{className:"btn btn-outline-primary btn-sm pt-0 pb-0","data-testid":"jump-btn",onClick:function(e){e.preventDefault(),y(window.prompt("\u76f4\u63a5\u79fb\u52d5\u5230\u7b2c\u5e7e\u984c?"))},children:"\u79fb\u81f3"})]}),Object(a.jsx)("div",{className:"exams-wrap",children:Object(a.jsx)(L,{seq:p,data:E,haveSubmitted:N,onAnsChanged:function(e,n){var a=Number(h[p].ans)===Number(e);if(S(!0),window.localStorage.getItem("".concat(t,"-pra-history"))){var c=JSON.parse(window.localStorage.getItem("".concat(t,"-pra-history")));c[n]=String(a),window.localStorage.setItem("".concat(t,"-pra-history"),JSON.stringify(c))}}},p)})]}),Object(a.jsxs)("div",{className:"container max-width-700 mt-3 mb-5",children:[J,q]})},H=function(e,t){var n=Object(c.useState)(0),r=Object(b.a)(n,2),s=r[0],i=r[1],l=Object(c.useState)(e),o=Object(b.a)(l,2),d=o[0],u=o[1];return{navigateBody:Object(a.jsx)("div",{className:"ans-btn-fixed",children:Object(a.jsx)("div",{className:"container max-width-700",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-6 text-left",children:Object(a.jsx)("button",{className:"ans-btn","data-testid":"prev-btn",onClick:function(e){return function(e){e.preventDefault(),t(),u((function(e){return e-1}))}(e)},disabled:d<=0,children:"\u4e0a\u4e00\u984c Prev"})}),Object(a.jsx)("div",{className:"col-6 text-right",children:Object(a.jsx)("button",{className:"ans-btn","data-testid":"next-btn",onClick:function(e){return function(e){e.preventDefault(),t(),u((function(e){return e+1}))}(e)},disabled:d+1===s,children:"\u4e0b\u4e00\u984c Next"})})]})})}),index:d,setLength:i}},z=function(){var e,t=Object(o.h)().practiceType,n=Object(c.useState)([]),r=Object(b.a)(n,2),s=r[0],i=r[1],l=Object(c.useState)(!1),d=Object(b.a)(l,2),h=d[0],m=d[1],f=H(0,(function(){m(!1)})),v=f.navigateBody,p=f.index,x=f.setLength;Object(c.useEffect)((function(){"html_css"===t||"javascript"===t?function(){var e=Object(j.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:n=e.sent,i(n),x(n.length);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():console.warn("practiceType is wrong")}),[t]);var O=null!==(e=null===s||void 0===s?void 0:s[p])&&void 0!==e?e:null;return 0===s.length?Object(a.jsx)("div",{className:"text-center m-4","data-testid":"no-reviews",children:"\u5c1a\u672a\u5b58\u6709\u7b54\u932f\u7684\u984c\u76ee"}):Object(a.jsxs)("div",{className:"container max-width-700 mt-3 mb-5",children:[Object(a.jsx)("nav",{className:"navbar navbar-light","data-testid":"navbar",children:Object(a.jsxs)("div",{"data-testid":"pra-heading",children:["\u8907\u7fd2\u932f\u8aa4\u984c\u76ee ",p+1,"/",s.length]})}),Object(a.jsx)("div",{className:"exams-wrap",children:Object(a.jsx)(L,{seq:p,data:O,haveSubmitted:h,onAnsChanged:function(){m(!0)}},p)}),v]})},_=function(){var e,t=Object(c.useState)([]),n=Object(b.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(!1),l=Object(b.a)(i,2),o=l[0],d=l[1],h=H(0,(function(){d(!1)})),m=h.navigateBody,f=h.index,v=h.setLength;Object(c.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,s(t),v(t.length);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=null!==(e=null===r||void 0===r?void 0:r[f])&&void 0!==e?e:null;return 0===r.length?Object(a.jsx)("div",{className:"text-center m-4","data-testid":"no-bookmarks",children:"\u5c1a\u672a\u5b58\u6709\u66f8\u7c64\u7684\u984c\u76ee"}):Object(a.jsxs)("div",{className:"container max-width-700 mt-3 mb-5",children:[Object(a.jsx)("nav",{className:"navbar navbar-light","data-testid":"navbar",children:Object(a.jsxs)("div",{"data-testid":"pra-heading",children:["\u6211\u7684\u66f8\u7c64 ",f+1,"/",r.length]})}),Object(a.jsx)("div",{className:"exams-wrap",children:Object(a.jsx)(L,{seq:f,data:p,haveSubmitted:o,onAnsChanged:function(){d(!0)}},f)}),m]})},F=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){window.matchMedia&&(window.matchMedia("(prefers-color-scheme: dark)").matches&&r(!0),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){var t=e.matches?"dark":"light";r("dark"===t)})))}),[]),Object(c.useEffect)((function(){document.querySelector("body").setAttribute("data-theme",n?"dark":"light")}),[n]),Object(a.jsxs)("div",{id:"theme-swtich",className:"custom-control custom-switch",children:[Object(a.jsx)("i",{className:"bi bi-moon-stars-fill"}),Object(a.jsxs)("label",{htmlFor:"theme-swtich-input",children:[Object(a.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"theme-swtich-input","data-testid":"theme-swtich-input","aria-label":"Toogle Theme",checked:n,onChange:function(e){r(e.target.checked)}}),Object(a.jsx)("div",{className:"custom-control-label",role:"button"})]})]})},D=(n(104),function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(o.f)(),i=function(e){e.preventDefault(),r(!n)};return Object(a.jsx)("header",{className:"app-header sticky-top px-0","data-testid":"app-header",children:Object(a.jsxs)("div",{className:"container max-width-700",children:[Object(a.jsxs)("div",{className:"row no-gutters flex-nowrap justify-content-between align-items-center",children:[Object(a.jsx)("div",{className:"col-3",children:Object(a.jsx)("button",{className:"btn btn-sm btn-menu ".concat(n?"active":""),onClick:i,children:A})}),Object(a.jsx)("div",{className:"col-6 text-center",children:Object(a.jsx)(l.b,{to:"/",className:"header-logo",children:"F2E Exam Practice"})}),Object(a.jsx)("div",{className:"col-3 d-flex justify-content-end align-items-center",children:Object(a.jsx)(F,{})})]}),Object(a.jsx)("div",{className:"menu ".concat(n?"active":""),children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsxs)("button",{onClick:function(e){i(e),s.push("/bookmarks")},children:[Object(a.jsx)("i",{className:"menu-icon",children:J}),"\u66f8\u7c64\u5217\u8868"]})}),Object(a.jsx)("li",{children:Object(a.jsxs)("button",{onClick:function(e){e.preventDefault(),window.confirm("\u60a8\u78ba\u5b9a\u8981\u6e05\u9664\u6240\u6709\u4f5c\u7b54\u8a18\u9304\u55ce?")&&(window.localStorage.clear(),window.location.reload())},children:[Object(a.jsx)("i",{className:"menu-icon",children:M}),"\u6e05\u9664\u4f5c\u7b54\u8a18\u9304"]})})]})})]})})});function P(){var e=Object(o.g)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var R=function(){return Object(a.jsxs)(l.a,{basename:"/f2e-exam-practice",children:[Object(a.jsx)(P,{}),Object(a.jsx)(D,{}),Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{exact:!0,path:"/",children:Object(a.jsx)(k,{})}),Object(a.jsx)(o.a,{exact:!0,path:"/exam",children:Object(a.jsx)(T,{})}),Object(a.jsx)(o.a,{path:"/practice/:practiceType",children:Object(a.jsx)(B,{})}),Object(a.jsx)(o.a,{path:"/review/:practiceType",children:Object(a.jsx)(z,{})}),Object(a.jsx)(o.a,{path:"/bookmarks",children:Object(a.jsx)(_,{})})]})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(105);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(R,{})}),document.getElementById("root")),V()},90:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.8d2d425a.chunk.js.map