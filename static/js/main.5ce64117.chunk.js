(this["webpackJsonpudemy-react-lerarning"]=this["webpackJsonpudemy-react-lerarning"]||[]).push([[0],{26:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(14),n=c.n(s),r=c(15),i=c(16),o=c(21),l=c(20),j=c(17),h=c(2),d=c(12),u=(c(26),c(1)),p=function(e){var t=e.placeHolder,c=e.handleChange;return Object(u.jsx)("div",{className:"SearchBox",children:Object(u.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:c})})},m=(c(28),function(e){var t=e.cat;return Object(u.jsxs)("div",{className:"Card",children:[Object(u.jsx)("img",{className:"img",alt:"cat",src:"https://robohash.org/".concat(t.id,"?set=set4&size=180x180")}),Object(u.jsx)("h2",{className:"name",children:t.name})]})}),b=(c(29),function(e){var t=e.cats;return Object(u.jsx)("div",{className:"CardList",children:t.map((function(e){return Object(u.jsx)(m,{cat:e},e.id)}))})}),O=(c(30),function(e){var t=Object(a.useState)([]),c=Object(d.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(""),i=Object(d.a)(r,2),o=i[0],l=i[1];Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]);var j=s.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{className:"custom-shape-divider-top-1634800428",children:Object(u.jsxs)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:[Object(u.jsx)("path",{d:"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",opacity:".25",className:"shape-fill"}),Object(u.jsx)("path",{d:"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",opacity:".5",className:"shape-fill"}),Object(u.jsx)("path",{d:"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",className:"shape-fill"})]})}),Object(u.jsx)("h1",{className:"mainTitle",children:"Cats"}),Object(u.jsx)(p,{className:"SearchBox",placeHolder:"search your cats",handleChange:function(e){l(e.target.value)}}),Object(u.jsx)(b,{className:"CardList",cats:j}),Object(u.jsx)("div",{className:"custom-shape-divider-bottom-1634800922",children:Object(u.jsxs)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:[Object(u.jsx)("path",{d:"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",opacity:".25",className:"shape-fill"}),Object(u.jsx)("path",{d:"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",opacity:".5",className:"shape-fill"}),Object(u.jsx)("path",{d:"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",className:"shape-fill"})]})})]})}),x=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(u.jsx)(j.a,{children:Object(u.jsx)(h.c,{children:Object(u.jsx)(h.a,{exact:!0,path:"/",component:O})})})}}]),c}(a.Component),f=x;c(36),c(37),c(38);n.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.5ce64117.chunk.js.map