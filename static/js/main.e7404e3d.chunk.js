(this["webpackJsonpsfi-exam-practice"]=this["webpackJsonpsfi-exam-practice"]||[]).push([[0],{103:function(t,e,n){},104:function(t,e,n){},105:function(t,e,n){},106:function(t,e,n){},107:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),s=n(36),i=n.n(s),l=n(8),o=n(4),d=n(3),u=n.n(d),j=n(7),b=n(2),h=n(6),m=(n(90),function(t){var e=Object(c.useState)(!1),n=Object(b.a)(e,2),r=n[0],s=n[1],i=Object(c.useState)(""),l=Object(b.a)(i,2),o=l[0],d=l[1],u=Object(c.useRef)(null),j=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e,n,c,r=h.k("%H:%M:%S"),i=h.k("%Y-%b-%d %H:%M:%S"),l=20,o=10,b=20,m=40,f=null!==(e=null===(n=document)||void 0===n||null===(c=n.querySelector("#root .container"))||void 0===c?void 0:c.clientWidth)&&void 0!==e?e:300,v=250,p=JSON.parse(JSON.stringify(t.datas));p.forEach((function(t){t.timestamp=t.time,t.time=r(t.time)}));var x=null,O=h.i().range([m+10+20,f-o-20]).domain(p.map((function(t){return t.time}))),g=h.h().range([v-b,l]).domain([0,100]),w=h.g().curve(h.d).x((function(t){return O(t.time)})).y((function(t){return g(t.score)}));(x=h.j(u.current)).attr("viewBox",[0,0,f,v]).attr("class","line-chart"),x.append("g").attr("class","x-axis").attr("transform","translate(0, ".concat(v-b,")")).call(h.b(O).tickSizeOuter(0).tickSizeInner(0).tickPadding(10)),x.append("g").attr("class","y-axis").attr("transform","translate(".concat(m,", 0)")).call(h.c(g).ticks(4).tickSize(-f).tickPadding(15)),x.selectAll(".domain").remove(),x.select(".domain").attr("stroke","#999"),x.append("linearGradient").attr("id","line-gradient").attr("gradientUnits","userSpaceOnUse").selectAll("stop").data([{offset:"0%",color:"#ffa00b"},{offset:"100%",color:"#42605e"}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color})),x.append("path").attr("class","line").attr("stroke","url(#line-gradient)").attr("stroke-width",3).attr("fill","none").style("stroke-linecap","round").attr("d",w(p));var N=x.append("defs").append("filter").attr("id","drop-shadow").attr("height",v);N.append("feGaussianBlur").attr("in","SourceAlpha").attr("stdDeviation",4).attr("result","blur"),N.append("feOffset").attr("in","blur").attr("dx",0).attr("dy",15).attr("result","offsetBlur");var S=N.append("feMerge");S.append("feMergeNode").attr("in","offsetBlur"),S.append("feMergeNode").attr("in","SourceGraphic"),x.append("path").attr("class","line-shadow").style("filter","url(#drop-shadow)").attr("d",w(p)),x.selectAll("circle").data(p).enter().append("circle").attr("r",5).attr("cx",(function(t){return O(t.time)})).attr("cy",(function(t){return g(t.score)})).style("cursor","pointer").style("fill",(function(){return"#795548"})).on("mouseover",(function(t){if(null===j||void 0===j?void 0:j.current){s(!0);var e=h.e,n=e.pageX,c=e.pageY;n+140>window.innerWidth?(j.current.style.left="initial",j.current.style.right=window.innerWidth-n+"px"):j.current.style.left=n+"px",j.current.style.top=c-70+"px",d(Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:i(t.timestamp)}),Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"Score"}),": ",t.score]})]}))}})).on("mouseout",(function(t){(null===j||void 0===j?void 0:j.current)&&s(!1)}))}),[t.datas]),Object(a.jsxs)("div",{className:"line-chart-container",children:[Object(a.jsx)("svg",{ref:u}),Object(a.jsx)("div",{className:"d3-tooltip ".concat(r?"active":""),ref:j,children:o})]})}),f=function(t){var e=Object(c.useRef)(null);return Object(c.useEffect)((function(){var n,a,c,r=null!==(n=null===(a=document)||void 0===a||null===(c=a.querySelector("#root .container"))||void 0===c?void 0:c.clientWidth)&&void 0!==n?n:300,s=2*Math.PI,i=h.f(".0%"),l=h.a().startAngle(0).innerRadius(50).outerRadius(45),o=Number((t.percentage/100).toFixed(2)),d=h.j(e.current);d.attr("viewBox",[0,0,r,100]).attr("class","line-chart");var u=d.append("g").attr("class","g-transform").attr("transform","translate(".concat(r/2,", ").concat(50,")")).append("g").attr("class","progress-meter");u.append("path").attr("class","background").attr("fill","#ccc").attr("fill-opacity",.5).attr("d",l.endAngle(s));var j=u.append("path").attr("class","foreground").attr("fill",t.fillColor).attr("fill-opacity",1),b=u.append("text").attr("fill","#333").attr("text-anchor","middle").attr("dy",".35em");j.attr("d",l.endAngle(s*o)),b.text(i(o))}),[t]),Object(a.jsx)("div",{className:"line-chart-container",children:Object(a.jsx)("svg",{ref:e})})},v=n(12),p=function(t){return t.map((function(t){var e,n=function(t){var e=/(.*?)\s*\(1\)(.*?)\s*\(2\)(.*?)\s*\(3\)(.*?)\s*\(4\)(.*?)\s*$/g.exec(t);if(!Array.isArray(e))return console.warn("".concat(t," is invalid question title format")),null;for(var n=[],a=1,c=2;c<=5;c++){var r=e[c].trim();n.push({val:a,text:r}),a++}return{title:e[1].trim()||"no title",options:n}}(t.title.replace(/\n/g,""));return{ans:Math.abs(t.ans),qn:t.qn,category:t.category,title:null!==(e=null===n||void 0===n?void 0:n.title)&&void 0!==e?e:"",options:null===n||void 0===n?void 0:n.options}}))},x=function(){var t=Object(j.a)(u.a.mark((function t(e){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(".","/data/").concat(e,".json"));case 2:if((n=t.sent).ok){t.next=5;break}throw new Error("An error has occured");case 5:return t.next=7,n.json();case 7:return a=t.sent,t.abrupt("return",p(a));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=JSON.parse(window.localStorage.getItem("".concat(t,"-pra-history")));return e||null},g=function(){var t=Object(j.a)(u.a.mark((function t(e){var n,a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:return n=t.sent,a=O(e),c=[],a&&a.forEach((function(t,e){"false"===t&&c.push(n[e])})),t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=JSON.parse(window.localStorage.getItem("bookmarks"));if(!t){var e={html_css:[],javascript:[]};return window.localStorage.setItem("bookmarks",JSON.stringify(e)),e}return t},N=function(){var t=Object(j.a)(u.a.mark((function t(){var e,n,a,c,r,s,i,l,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=w(),n=e.html_css,a=void 0===n?[]:n,c=e.javascript,r=void 0===c?[]:c,t.next=3,x("html_css");case 3:return s=t.sent,t.next=6,x("javascript");case 6:return i=t.sent,l=s.filter((function(t){return a.includes(t.qn)})),o=i.filter((function(t){return r.includes(t.qn)})),t.abrupt("return",[].concat(Object(v.a)(l),Object(v.a)(o)));case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=function(t,e){var n=Object(c.useState)((function(){return function(t,e){var n=window.localStorage.getItem(t);return n?(console.log("hook content",n),console.log("hook JSON.parse(content)",JSON.parse(n)),JSON.parse(n)):e instanceof Function?e():e}(t,e)})),a=Object(b.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){window.localStorage.setItem(t,JSON.stringify(r))}),[r]),[r,s]},k=function(){var t=S("scoreHistory",[]),e=Object(b.a)(t,1)[0],n=Object(c.useState)([]),r=Object(b.a)(n,2),s=r[0],i=r[1],o=Object(c.useState)([]),d=Object(b.a)(o,2),h=d[0],v=d[1];Object(c.useEffect)((function(){(function(){var t=Object(j.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g("html_css");case 2:return e=t.sent,t.next=5,g("javascript");case 5:n=t.sent,i(e),v(n);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var p=function(t){var e=O(t);if(!e)return 0;var n=e.length,a=e.filter((function(t){return null!==t})).length;return Math.round(a/n*100)},x=function(t){var e=O(t);return e?e.filter((function(t){return null!==t})).length:0},w=p("html_css"),N=p("javascript"),k=[];return s.length&&k.push(Object(a.jsx)("div",{className:"col-6",children:Object(a.jsx)(l.b,{to:"/review/html_css",className:"ans-btn review-bg",children:"HTML/CSS"})},"html_css")),h.length&&k.push(Object(a.jsx)("div",{className:"col-6",children:Object(a.jsx)(l.b,{to:"/review/javascript",className:"ans-btn review-bg",children:"JavaScript"})},"javascript")),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"container-fluid max-width-700 pt-4 pb-4",children:[Object(a.jsxs)("div",{id:"practice-sec",className:"mb-3",children:[Object(a.jsx)("h3",{className:"section-heading",children:"\u8003\u984c\u7df4\u7fd2 Practice"}),Object(a.jsxs)("div",{className:"row align-items-center",children:[Object(a.jsx)("div",{className:"col-6",children:Object(a.jsx)(l.b,{to:"/practice/html_css",className:"ans-btn practice-bg",children:"HTML/CSS"})}),Object(a.jsx)("div",{className:"col-6",children:Object(a.jsx)(l.b,{to:"/practice/javascript",className:"ans-btn practice-bg",children:"JavaScript"})})]})]}),s.length||h.length?Object(a.jsxs)("div",{id:"review-sec",className:"mb-3",children:[Object(a.jsx)("h3",{className:"section-heading",children:"\u8907\u7fd2\u932f\u8aa4\u984c\u76ee Review"}),Object(a.jsx)("div",{className:"row align-items-center",children:k})]}):null,Object(a.jsx)("h3",{className:"section-heading",children:"\u6a21\u64ec\u8003\u8a66 Mock examination"}),Object(a.jsx)(l.b,{to:"/exam",className:"ans-btn exam-bg",children:"\u6a21\u64ec\u6e2c\u9a57"})]}),Object(a.jsxs)("div",{className:"container-fluid max-width-700 mt-3 mb-3",children:[Object(a.jsxs)("section",{children:[Object(a.jsx)("h3",{className:"section-heading",children:"\u4f5c\u7b54\u5b8c\u6210\u7387 Answer completion rate"}),Object(a.jsxs)("div",{className:"progress-line-wrap",children:[Object(a.jsx)("div",{className:"progress-line-item",children:"HTML / CSS"}),Object(a.jsx)(f,{percentage:w,fillColor:"#8c682f"}),Object(a.jsxs)("dl",{className:"progress-finished-dl",children:[Object(a.jsx)("dt",{children:"\u5df2\u4f5c\u7b54"}),Object(a.jsx)("dd",{children:x("html_css")})]})]}),Object(a.jsxs)("div",{className:"progress-line-wrap",children:[Object(a.jsx)("div",{className:"progress-line-item",children:"JavaScript"}),Object(a.jsx)(f,{percentage:N,fillColor:"#8c682f"}),Object(a.jsxs)("dl",{className:"progress-finished-dl",children:[Object(a.jsx)("dt",{children:"\u5df2\u4f5c\u7b54"}),Object(a.jsx)("dd",{children:x("javascript")})]})]})]}),Object(a.jsxs)("section",{children:[Object(a.jsx)("h3",{className:"section-heading",children:"\u8fd1\u671f\u6a21\u64ec\u6e2c\u9a57\u5206\u6578 Latest Score Histories"}),Object(a.jsx)("div",{className:"statistics-card",children:Object(a.jsx)(m,{datas:e.slice(-5)})})]})]})]})},y=new(n(98)),C=function(t,e){return null===e||e&&e>t.length?t:y.pickset(t,e)},q=function(t,e){var n=e/2,a=y.pickset(t.htmlcss,n),c=y.pickset(t.javascript,n);return[].concat(Object(v.a)(a),Object(v.a)(c))},E=Object(a.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-bookmark",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{fillRule:"evenodd",d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"})}),J=Object(a.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-bookmark-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{fillRule:"evenodd",d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5V2z"})}),A=Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-three-dots",viewBox:"0 0 16 16",children:Object(a.jsx)("path",{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})}),M=Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-trash-fill",viewBox:"0 0 16 16",children:Object(a.jsx)("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"})}),I=(n(103),{html_css:"HTML/CSS",javascript:"JavaScript"}),L=function(t){var e=Object(c.useState)(null),n=Object(b.a)(e,2),r=n[0],s=n[1],i=Object(c.useState)(!1),l=Object(b.a)(i,2),o=l[0],d=l[1],u=t.seq,j=t.data,h=t.haveSubmitted,m=t.onAnsChanged;Object(c.useEffect)((function(){d(function(t,e){var n=w();return!(!n[t]||!n[t].includes(e))}(j.category,Number(j.qn)))}),[j]);var f=!0===h&&Number(r)!==Number(j.ans);return Object(a.jsx)("div",{className:"question-card ".concat(f?"has-error":""),"data-testid":"que-card",children:Object(a.jsxs)("div",{className:"question-card-content",children:[Object(a.jsxs)("div",{className:"question-card-header",children:[Object(a.jsx)("div",{className:"question-idx",children:u+1}),Object(a.jsxs)("span",{className:"question-badge badge-".concat(j.category),"data-testid":"que-badge",children:[I[j.category]," ",j.qn]}),Object(a.jsx)("button",{className:"question-bm-btn","data-testid":"que-bm-btn",onClick:function(t){t.preventDefault();var e=!o;d(e),!1===e?function(t,e){var n=w(),a=n[t];a=a.filter((function(t){return t!==e})),n[t]=a.sort((function(t,e){return t-e})),window.localStorage.setItem("bookmarks",JSON.stringify(n))}(j.category,Number(j.qn)):function(t,e){var n=w();n[t].includes(e)||(n[t].push(e),n[t].sort((function(t,e){return t-e})),window.localStorage.setItem("bookmarks",JSON.stringify(n)))}(j.category,Number(j.qn))},children:o?J:E})]}),Object(a.jsx)("h3",{className:"question-title","data-testid":"que-title",children:j.title}),Object(a.jsx)("div",{className:"ans-btn-group",children:j.options?j.options.map((function(e){var n="";if(!0===h){var c=Number(r)!==Number(j.ans)&&e.val===j.ans,i=Number(r)===Number(j.ans)&&e.val===j.ans;n=c?"wrong-ans-marked":i?"correct-ans-marked":""}return Object(a.jsxs)("div",{className:"custom-control custom-radio ".concat(n),children:[Object(a.jsx)("input",{type:"radio",id:"opt-".concat(u,"-").concat(e.val),name:"q-".concat(u),value:e.val,checked:r===e.val.toString(),onChange:function(t){return function(t){s(t.target.value),m(t.target.value,u)}(t)},disabled:!0===t.haveSubmitted,className:"custom-control-input","data-testid":"que-input"}),Object(a.jsxs)("label",{className:"custom-control-label d-block",htmlFor:"opt-".concat(u,"-").concat(e.val),children:["(",e.val,") ",e.text]})]},"".concat(e.text))})):null})]})})},T=function(){var t=S("scoreHistory",[]),e=Object(b.a)(t,2),n=e[0],r=e[1],s=Object(c.useState)([]),i=Object(b.a)(s,2),l=i[0],o=i[1],d=Object(c.useState)([]),h=Object(b.a)(d,2),m=h[0],f=h[1],p=Object(c.useState)(null),O=Object(b.a)(p,2),g=O[0],w=O[1];Object(c.useEffect)((function(){(function(){var t=Object(j.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x("html_css");case 2:return e=t.sent,t.next=5,x("javascript");case 5:n=t.sent,o(q({htmlcss:e,javascript:n},10));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){l.length&&f(new Array(l.length).fill(null))}),[l]),Object(c.useEffect)((function(){if(null!==g){var t=JSON.parse(JSON.stringify(n));t.push({time:(new Date).getTime(),score:g}),r(t)}}),[g]);var N=function(t,e){var n=Object(v.a)(m);n[e]=t,f(n)},k=function(){var t=0;return l.forEach((function(e,n){m[n]&&Number(m[n])===Number(e.ans)&&t++})),10*t};return Object(a.jsxs)("div",{className:"container max-width-700 mt-3 mb-5","data-testid":"exam-page",children:[0===l.length?Object(a.jsx)("div",{className:"text-center","data-testid":"loading",children:"Loading"}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("nav",{className:"navbar navbar-light","data-testid":"navbar",children:Object(a.jsx)("div",{children:"\u6a21\u64ec\u8003"})}),Object(a.jsx)("div",{className:"exams-wrap",children:l.map((function(t,e){return Object(a.jsx)(L,{seq:e,data:t,haveSubmitted:null!==g,onAnsChanged:N},e)}))})]}),Object(a.jsx)("div",{className:"ans-btn-fixed",children:Object(a.jsxs)("div",{className:"container max-width-700",children:[Object(a.jsxs)("button",{className:"ans-btn d-inline-block w-50",onClick:function(t){return function(t){t.preventDefault(),m.includes(null)&&alert("\u5c1a\u672a\u6709\u984c\u76ee\u672a\u4f5c\u7b54");var e=k();alert("\u6210\u7e3e ".concat(e)),w(e)}(t)},disabled:null!==g,children:[null!==g?"\u5df2":"","\u4ea4\u5377"]}),null!==g&&Object(a.jsxs)("div",{className:"score-result",children:["\u6210\u7e3e: ",g]})]})})]})},B=function(){var t,e=Object(o.h)().practiceType,n=0;if(window.localStorage.getItem("".concat(e,"-pra-history"))){var r=JSON.parse(window.localStorage.getItem("".concat(e,"-pra-history"))),s=r.lastIndexOf("true"),i=r.lastIndexOf("false");n=i>s?i+1:s+1}var l=Object(c.useState)([]),d=Object(b.a)(l,2),h=d[0],m=d[1],f=Object(c.useState)(n),v=Object(b.a)(f,2),p=v[0],O=v[1],g=Object(c.useState)(!1),w=Object(b.a)(g,2),N=w[0],S=w[1];Object(c.useEffect)((function(){"html_css"===e||"javascript"===e?function(){var t=Object(j.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:n=t.sent,m(C(n,null));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()():console.warn("practiceType is wrong")}),[e]),Object(c.useEffect)((function(){h.length>0&&(window.localStorage.getItem("".concat(e,"-pra-history"))||window.localStorage.setItem("".concat(e,"-pra-history"),JSON.stringify(Array(h.length).fill(null))))}),[e,h]);var k=function(){S(!1)},y=function(t){if(t){if(isNaN(t))return alert("\u5f88\u62b1\u6b49\uff0c\u8acb\u8f38\u5165\u6b63\u78ba\u7684\u984c\u865f");k();var e=Number(t)-1;return Number(t)<=0?e=0:Number(t)>h.length&&(e=h.length-1),O(e)}},q=Object(a.jsx)("div",{className:"ans-btn-fixed",children:Object(a.jsx)("div",{className:"container max-width-700",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-6 text-left",children:Object(a.jsx)("button",{className:"ans-btn","data-testid":"prev-btn",onClick:function(t){return k(),void O(p-1)},disabled:p<=0,children:"\u4e0a\u4e00\u984c Prev"})}),Object(a.jsx)("div",{className:"col-6 text-right",children:Object(a.jsx)("button",{className:"ans-btn","data-testid":"next-btn",onClick:function(t){return k(),void O(p+1)},disabled:p+1>h.length,children:"\u4e0b\u4e00\u984c Next"})})]})})}),E=null!==(t=null===h||void 0===h?void 0:h[p])&&void 0!==t?t:null,J=null;return J=0===h.length?Object(a.jsx)("div",{className:"text-center","data-testid":"loading",children:"Loading"}):p>=h.length?Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("div",{"data-testid":"empty-content",children:"\u6c92\u6709\u984c\u76ee\u4e86"}),Object(a.jsx)("span",{className:"btn","data-testid":"reset-currentindex",onClick:function(){return y(1)},children:"\u56de\u5230\u7b2c\u4e00\u984c"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("nav",{className:"navbar p-0 mb-3",children:[Object(a.jsxs)("div",{"data-testid":"pra-heading",children:["\u8003\u984c\u7df4\u7fd2 ",p+1,"/",h.length]}),Object(a.jsx)("button",{className:"btn btn-outline-primary btn-sm pt-0 pb-0","data-testid":"jump-btn",onClick:function(t){t.preventDefault(),y(window.prompt("\u76f4\u63a5\u79fb\u52d5\u5230\u7b2c\u5e7e\u984c?"))},children:"\u79fb\u81f3"})]}),Object(a.jsx)("div",{className:"exams-wrap",children:Object(a.jsx)(L,{seq:p,data:E,haveSubmitted:N,onAnsChanged:function(t,n){var a=Number(h[p].ans)===Number(t);if(S(!0),window.localStorage.getItem("".concat(e,"-pra-history"))){var c=JSON.parse(window.localStorage.getItem("".concat(e,"-pra-history")));c[n]=String(a),window.localStorage.setItem("".concat(e,"-pra-history"),JSON.stringify(c))}}},p)})]}),Object(a.jsxs)("div",{className:"container max-width-700 mt-3 mb-5",children:[J,q]})};function H(t){return Object(a.jsx)("div",{className:"text-center m-4","data-testid":"no-data",children:t.text})}var z=function(t,e){var n=Object(c.useState)(0),r=Object(b.a)(n,2),s=r[0],i=r[1],l=Object(c.useState)(t),o=Object(b.a)(l,2),d=o[0],u=o[1];return{navigateBody:Object(a.jsx)("div",{className:"ans-btn-fixed",children:Object(a.jsx)("div",{className:"container max-width-700",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-6 text-left",children:Object(a.jsx)("button",{className:"ans-btn","data-testid":"prev-btn",onClick:function(t){return function(t){t.preventDefault(),e(),u((function(t){return t-1}))}(t)},disabled:d<=0,children:"\u4e0a\u4e00\u984c Prev"})}),Object(a.jsx)("div",{className:"col-6 text-right",children:Object(a.jsx)("button",{className:"ans-btn","data-testid":"next-btn",onClick:function(t){return function(t){t.preventDefault(),e(),u((function(t){return t+1}))}(t)},disabled:d+1===s,children:"\u4e0b\u4e00\u984c Next"})})]})})}),index:d,setLength:i}},_=function(){var t,e=Object(o.h)().practiceType,n=Object(c.useState)([]),r=Object(b.a)(n,2),s=r[0],i=r[1],l=Object(c.useState)(!1),d=Object(b.a)(l,2),h=d[0],m=d[1],f=z(0,(function(){m(!1)})),v=f.navigateBody,p=f.index,x=f.setLength;Object(c.useEffect)((function(){"html_css"===e||"javascript"===e?function(){var t=Object(j.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:n=t.sent,i(n),x(n.length);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()():console.warn("practiceType is wrong")}),[e]);var O=null!==(t=null===s||void 0===s?void 0:s[p])&&void 0!==t?t:null;return 0===s.length?Object(a.jsx)(H,{text:"\u5c1a\u672a\u5b58\u6709\u7b54\u932f\u7684\u984c\u76ee"}):Object(a.jsxs)("div",{className:"container max-width-700 mt-3 mb-5",children:[Object(a.jsx)("nav",{className:"navbar navbar-light","data-testid":"navbar",children:Object(a.jsxs)("div",{"data-testid":"pra-heading",children:["\u8907\u7fd2\u932f\u8aa4\u984c\u76ee ",p+1,"/",s.length]})}),Object(a.jsx)("div",{className:"exams-wrap",children:Object(a.jsx)(L,{seq:p,data:O,haveSubmitted:h,onAnsChanged:function(){m(!0)}},p)}),v]})},F=function(){var t,e=Object(c.useState)([]),n=Object(b.a)(e,2),r=n[0],s=n[1],i=Object(c.useState)(!1),l=Object(b.a)(i,2),o=l[0],d=l[1],h=z(0,(function(){d(!1)})),m=h.navigateBody,f=h.index,v=h.setLength;Object(c.useEffect)((function(){(function(){var t=Object(j.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N();case 2:e=t.sent,s(e),v(e.length);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var p=null!==(t=null===r||void 0===r?void 0:r[f])&&void 0!==t?t:null;return 0===r.length?Object(a.jsx)(H,{text:"\u5c1a\u672a\u5b58\u6709\u66f8\u7c64\u7684\u984c\u76ee"}):Object(a.jsxs)("div",{className:"container max-width-700 mt-3 mb-5",children:[Object(a.jsx)("nav",{className:"navbar navbar-light","data-testid":"navbar",children:Object(a.jsxs)("div",{"data-testid":"pra-heading",children:["\u6211\u7684\u66f8\u7c64 ",f+1,"/",r.length]})}),Object(a.jsx)("div",{className:"exams-wrap",children:Object(a.jsx)(L,{seq:f,data:p,haveSubmitted:o,onAnsChanged:function(){d(!0)}},f)}),m]})},D=(n(104),function(){var t=Object(c.useState)(!1),e=Object(b.a)(t,2),n=e[0],r=e[1];return Object(c.useEffect)((function(){window.matchMedia&&(window.matchMedia("(prefers-color-scheme: dark)").matches&&r(!0),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(t){var e=t.matches?"dark":"light";r("dark"===e)})))}),[]),Object(c.useEffect)((function(){document.querySelector("body").setAttribute("data-theme",n?"dark":"light")}),[n]),Object(a.jsxs)("div",{id:"theme-swtich",className:"custom-control custom-switch",children:[Object(a.jsx)("i",{className:"bi bi-moon-stars-fill"}),Object(a.jsxs)("div",{className:"custom-control custom-switch",children:[Object(a.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"theme-swtich-input","data-testid":"theme-swtich-input","aria-label":"Toogle Theme",checked:n,onChange:function(t){r(t.target.checked)}}),Object(a.jsx)("label",{className:"custom-control-label",htmlFor:"theme-swtich-input"})]})]})}),P=(n(105),function(){var t=Object(c.useState)(!1),e=Object(b.a)(t,2),n=e[0],r=e[1],s=Object(o.f)(),i=function(t){t.preventDefault(),r(!n)};return Object(a.jsx)("header",{className:"app-header sticky-top px-0","data-testid":"app-header",children:Object(a.jsxs)("div",{className:"container max-width-700",children:[Object(a.jsxs)("div",{className:"row no-gutters flex-nowrap justify-content-between align-items-center",children:[Object(a.jsx)("div",{className:"col-3",children:Object(a.jsx)("button",{className:"btn btn-sm btn-menu ".concat(n?"active":""),onClick:i,children:A})}),Object(a.jsx)("div",{className:"col-6 text-center",children:Object(a.jsx)(l.b,{to:"/",className:"header-logo",children:"F2E Exam Practice"})}),Object(a.jsx)("div",{className:"col-3 text-right",children:Object(a.jsx)(D,{})})]}),Object(a.jsx)("div",{className:"menu ".concat(n?"active":""),children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsxs)("button",{onClick:function(t){i(t),s.push("/bookmarks")},children:[Object(a.jsx)("i",{className:"menu-icon",children:J}),"\u66f8\u7c64\u5217\u8868"]})}),Object(a.jsx)("li",{children:Object(a.jsxs)("button",{onClick:function(t){t.preventDefault(),window.confirm("\u60a8\u78ba\u5b9a\u8981\u6e05\u9664\u6240\u6709\u4f5c\u7b54\u8a18\u9304\u55ce?")&&(window.localStorage.clear(),window.location.reload())},children:[Object(a.jsx)("i",{className:"menu-icon",children:M}),"\u6e05\u9664\u4f5c\u7b54\u8a18\u9304"]})})]})})]})})});function R(){var t=Object(o.g)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[t]),null}var V=function(){return Object(a.jsxs)(l.a,{basename:"/",children:[Object(a.jsx)(R,{}),Object(a.jsx)(P,{}),Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{exact:!0,path:"/",children:Object(a.jsx)(k,{})}),Object(a.jsx)(o.a,{exact:!0,path:"/exam",children:Object(a.jsx)(T,{})}),Object(a.jsx)(o.a,{path:"/practice/:practiceType",children:Object(a.jsx)(B,{})}),Object(a.jsx)(o.a,{path:"/review/:practiceType",children:Object(a.jsx)(_,{})}),Object(a.jsx)(o.a,{path:"/bookmarks",children:Object(a.jsx)(F,{})})]})]})},W=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};n(106);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(V,{})}),document.getElementById("root")),W()},90:function(t,e,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.e7404e3d.chunk.js.map