(this["webpackJsonpchallenge-library"]=this["webpackJsonpchallenge-library"]||[]).push([[0],{16:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(6),r=c.n(i),l=c(3),j=(c(16),c(1)),a=function(e){var t=e.term,c=e.searchKeyword;return Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"search_inputField",type:"text",value:t,placeholder:"Search...",onChange:function(e){c(e.target.value)}})})},o=c(9),u=c.n(o),h=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(!1),r=Object(l.a)(i,2),o=r[0],h=r[1],b=Object(n.useState)(""),d=Object(l.a)(b,2),O=d[0],x=d[1],p=Object(n.useState)(""),f=Object(l.a)(p,2),m=f[0],v=f[1],_=Object(n.useState)([]),g=Object(l.a)(_,2),y=g[0],k=g[1],N=c.docs;if(Object(n.useEffect)((function(){h(!0),fetch("http://openlibrary.org/search.json?author=tolkien").then((function(e){return e.json()})).then((function(e){return s(e)})).then((function(){return h(o)})).catch(x)}),[]),o)return Object(j.jsx)("h1",{style:{textAlign:"center"},children:"Loading..."});if(O)return Object(j.jsx)("pre",{children:JSON.stringify(O,null,2)});if(!c)return null;return Object(j.jsxs)("div",{className:"appContainer",children:[Object(j.jsx)(a,{term:m,searchKeyword:function(e){if(v(e),""!=e){var t=N.filter((function(t){return Object.values(t).join("").toLowerCase().includes(e.toLowerCase())}));k(t)}else k(N);console.log(y)}}),m.length<1?Object(j.jsx)("ul",{className:"list",children:N.map((function(e,t){return Object(j.jsxs)("li",{className:"list_item",children:[Object(j.jsx)(u.a,{className:"menubook_list_item"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Title: ",e.title]}),Object(j.jsxs)("p",{children:["Book Cover: ",e.cover_edition_key]}),Object(j.jsxs)("p",{children:["Author: ",e.author_name]}),Object(j.jsx)("div",{children:Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:"Publish Date:"}),Object(j.jsx)("ul",{children:e.publish_date})]})})]})]},t)}))}):Object(j.jsx)("ul",{className:"list",children:y.map((function(e,t){return Object(j.jsxs)("li",{className:"list_item",children:[Object(j.jsx)(u.a,{className:"menubook_list_item"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Title: ",e.title]}),Object(j.jsxs)("p",{children:["Book Cover: ",e.cover_edition_key]}),Object(j.jsxs)("p",{children:["Author: ",e.author_name]}),Object(j.jsx)("div",{children:Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:"Publish Date:"}),Object(j.jsx)("ul",{children:e.publish_date})]})})]})]},t)}))})]})};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.de49fa29.chunk.js.map