(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{4588:function(e,n,t){"use strict";t.d(n,{Ar:function(){return m},cD:function(){return u},OL:function(){return h}});var r=t(5893),i=t(5675),s=function(e){var n=e.src,t=e.size,s=e.alt;return(0,r.jsx)(i.default,{alt:s,height:t,priority:!0,src:n,width:t})},a=t(9008),c=t(5350),o=t(1163),l=t(7294),u=function(e){var n=e.href,t=e.children,i=(0,o.useRouter)(),s=(0,l.useCallback)((function(e){e.preventDefault(),i.push(n)}),[n,i]);return(0,r.jsx)("button",{onClick:s,type:"submit",children:t})},d=t(1664),h=function(e){var n=e.href,t=e.children;return(0,r.jsx)(d.default,{href:n,children:(0,r.jsx)("a",{children:t})})},f=t(2738),p=t.n(f),x=(new Date).getFullYear(),m=function(e){var n=e.children;return(0,r.jsxs)("div",{className:p().container,children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("link",{href:"/favicon.ico",rel:"icon"}),(0,r.jsx)("meta",{content:"Learn how to build a personal website using Next.js",name:"description"}),(0,r.jsx)("meta",{content:"https://og-image.vercel.app/".concat(encodeURI(c.g.siteTitle),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"),property:"og:image"}),(0,r.jsx)("meta",{content:c.g.siteTitle,name:"og:title"}),(0,r.jsx)("meta",{content:"summary_large_image",name:"twitter:card"})]}),(0,r.jsx)("header",{className:p().header,children:(0,r.jsxs)("nav",{className:p().nav,children:[(0,r.jsx)("div",{className:p().div,children:(0,r.jsx)(h,{href:"/",children:(0,r.jsxs)("div",{className:p().row,children:[(0,r.jsx)(s,{alt:"logo",size:20,src:"/images/profile.jpg"}),(0,r.jsx)("p",{children:"example"})]})})}),(0,r.jsxs)("ul",{className:p().row,children:[(0,r.jsx)("li",{className:p().li,children:(0,r.jsx)(h,{href:"/",children:(0,r.jsx)("p",{children:"link"})})}),(0,r.jsx)("li",{className:p().li,children:(0,r.jsx)(h,{href:"/",children:(0,r.jsx)("p",{children:"link"})})}),(0,r.jsx)("li",{className:p().li,children:(0,r.jsx)(u,{href:"/",children:(0,r.jsx)("p",{children:"action"})})})]})]})}),(0,r.jsx)("main",{children:n}),(0,r.jsx)("footer",{className:p().footer,children:(0,r.jsxs)("p",{children:["example",x]})})]})}},7191:function(e,n,t){"use strict";t.d(n,{h:function(){return s}});var r=t(5893),i=t(4588),s=function(e){var n=e.id,t=e.name,s=e.email,a=e.phone;return(0,r.jsxs)("div",{children:[n," ",s," ",t," ",a,(0,r.jsx)(i.OL,{href:"/posts",children:(0,r.jsx)("p",{children:"Posts"})}),(0,r.jsx)(i.OL,{href:"/todos",children:(0,r.jsx)("p",{children:"Todos"})})]},n)}},9726:function(e,n,t){"use strict";t.d(n,{N:function(){return r},W:function(){return i}});var r=function(e){return"object"===typeof e&&"number"===typeof e.id&&"string"===typeof e.email&&"string"===typeof e.name&&"string"===typeof e.username&&"string"===typeof e.website},i=function(e){return Array.isArray(e)&&e.length>0&&"number"===typeof e[0].id&&"string"===typeof e[0].email&&"string"===typeof e[0].name&&"string"===typeof e[0].username&&"string"===typeof e[0].website}},84:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(5893),i=t(9008),s=t(5723),a=t(4588),c=t(5350),o=t(7191),l=t(9726),u=function(){var e=(0,s.ZP)("".concat(c.g.baseUrl,"/users"),c.r),n=e.data;return e.error?(0,r.jsx)("div",{children:"failed to load"}):n?(0,l.W)(n)?(0,r.jsxs)(a.Ar,{children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:"Users"})}),(0,r.jsx)("h1",{children:"Users"}),(0,r.jsx)("div",{children:n.map((function(e){var n=e.id,t=e.email,i=e.name,s=e.phone;return(0,r.jsx)(o.h,{email:t,id:n,name:i,phone:s},n)}))})]}):(0,r.jsx)("div",{children:"invalid data"}):(0,r.jsx)("div",{children:"loading..."})},d=function(){return(0,r.jsx)(u,{})}},5350:function(e,n,t){"use strict";t.d(n,{g:function(){return r},r:function(){return i}});var r={fontFamily:"https://fonts.googleapis.com/css2?family=Open+Sans",baseUrl:"https://jsonplaceholder.typicode.com",siteTitle:"Example Web Template"},i=function(e){return fetch(e).then((function(e){return e.json()}))}},1876:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return t(84)}])},2738:function(e){e.exports={container:"Layout_container__1_Y9X",footer:"Layout_footer__TuZxx",row:"Layout_row__4bKvN","nav-link":"Layout_nav-link__up-hr",div:"Layout_div__28QQt",nav:"Layout_nav__2sVcb",li:"Layout_li__1PKJ5"}}},function(e){e.O(0,[675,723,774,888,179],(function(){return n=1876,e(e.s=n);var n}));var n=e.O();_N_E=n}]);