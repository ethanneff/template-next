(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[823],{8809:function(e,n,t){"use strict";t.d(n,{Ar:function(){return _},cD:function(){return f},OL:function(){return m}});var r=t(5893),i=t(5675),s=t(1045),c=t.n(s),a=function(e){var n=e.src,t=e.size,s=e.alt,a=e.circle;return(0,r.jsx)(i.default,{alt:s,className:a?c().circle:void 0,height:t,priority:!0,src:n,width:t})},o=t(9008),l=t(9551),u=t(1163),d=t(7294),f=function(e){var n=e.href,t=e.children,i=(0,u.useRouter)(),s=(0,d.useCallback)((function(e){e.preventDefault(),i.push(n)}),[n,i]);return(0,r.jsx)("button",{onClick:s,type:"submit",children:t})},h=t(1664),m=function(e){var n=e.href,t=e.children;return(0,r.jsx)(h.default,{href:n,children:(0,r.jsx)("a",{children:t})})},x=t(6830),p=t.n(x),j=(new Date).getFullYear(),_=function(e){var n=e.children;return(0,r.jsxs)("div",{className:p().container,children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("link",{href:"/favicon.ico",rel:"icon"}),(0,r.jsx)("meta",{content:"Learn how to build a personal website using Next.js",name:"description"}),(0,r.jsx)("meta",{content:"https://og-image.vercel.app/".concat(encodeURI(l.g.siteTitle),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"),property:"og:image"}),(0,r.jsx)("meta",{content:l.g.siteTitle,name:"og:title"}),(0,r.jsx)("meta",{content:"summary_large_image",name:"twitter:card"})]}),(0,r.jsx)("header",{className:p().header,children:(0,r.jsxs)("nav",{className:p().nav,children:[(0,r.jsx)("div",{className:p().div,children:(0,r.jsx)(m,{href:"/",children:(0,r.jsxs)("div",{className:p().row,children:[(0,r.jsx)(a,{alt:"logo",circle:!0,size:40,src:"/images/profile.webp"}),(0,r.jsx)("p",{className:p().navTitle,children:"Example"})]})})}),(0,r.jsxs)("ul",{className:p().row,children:[(0,r.jsx)("li",{className:p().li,children:(0,r.jsx)(m,{href:"/",children:(0,r.jsx)("p",{children:"link"})})}),(0,r.jsx)("li",{className:p().li,children:(0,r.jsx)(m,{href:"/",children:(0,r.jsx)("p",{children:"link"})})}),(0,r.jsx)("li",{className:p().li,children:(0,r.jsx)(f,{href:"/",children:(0,r.jsx)("p",{children:"action"})})})]})]})}),(0,r.jsx)("main",{children:n}),(0,r.jsx)("footer",{className:p().footer,children:(0,r.jsxs)("p",{children:["Example ",j]})})]})}},387:function(e,n,t){"use strict";t.d(n,{p:function(){return a}});var r=t(5893),i=t(8809),s=t(5073),c=t.n(s),a=function(e){var n=e.id,t=e.postId,s=e.name,a=e.email,o=e.body,l=e.hideLink;return(0,r.jsxs)("div",{className:c().card,children:[(0,r.jsx)("h2",{style:{textTransform:"capitalize"},children:s}),(0,r.jsx)("p",{children:o}),(0,r.jsx)("a",{href:"mailto:".concat(a),children:a}),!l&&(0,r.jsx)(i.OL,{href:"/comments/".concat(n),children:(0,r.jsx)("span",{children:"\ud83d\udcac Comment Details"})})]},t)}},6798:function(e,n,t){"use strict";t.d(n,{v:function(){return f}});var r=t(5893),i=t(9008),s=t(1163),c=t(8809),a=t(5723),o=t(9551),l=t(387),u=t(4919),d=function(){var e=(0,s.useRouter)().query.commentId,n="".concat(o.g.baseUrl,"/comments/").concat(e),t=(0,a.ZP)(n,o.r),i=t.data;if(t.error)return(0,r.jsx)("div",{children:"failed to load"});if(!i)return(0,r.jsx)("div",{children:"loading..."});if(!(0,u.C)(i))return(0,r.jsx)("div",{children:"invalid data"});var c=i.id,d=i.name,f=i.email,h=i.body,m=i.postId;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h1",{children:["Comment ",e]}),(0,r.jsx)(l.p,{body:h,email:f,hideLink:!0,id:c,name:d,postId:m})]})},f=function(){var e=(0,s.useRouter)().query.commentId;return(0,r.jsxs)(c.Ar,{children:[(0,r.jsx)(i.default,{children:(0,r.jsxs)("title",{children:["Comment ",e]})}),(0,r.jsx)(d,{})]})}},4919:function(e,n,t){"use strict";t.d(n,{C:function(){return r},j:function(){return i}});var r=function(e){return"object"===typeof e&&"number"===typeof e.id&&"number"===typeof e.postId&&"string"===typeof e.name&&"string"===typeof e.email&&"string"===typeof e.body},i=function(e){return Array.isArray(e)&&e.every(r)}},3404:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(6798);n.default=function(){return(0,r.jsx)(i.v,{})}},9551:function(e,n,t){"use strict";t.d(n,{g:function(){return r},r:function(){return i}});var r={fontFamily:"https://fonts.googleapis.com/css2?family=Open+Sans",baseUrl:"https://jsonplaceholder.typicode.com",siteTitle:"Example Web Template"},i=function(e){return fetch(e).then((function(e){return e.json()}))}},8521:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/[userId]/comments/[commentId]",function(){return t(3404)}])},1045:function(e){e.exports={circle:"Image_circle__2z4DJ"}},6830:function(e){e.exports={container:"Layout_container__3wzsY",footer:"Layout_footer__G0kbW",row:"Layout_row__2g1tp",navTitle:"Layout_navTitle__eE2u_",div:"Layout_div__2BLD6",nav:"Layout_nav__2NeEv",li:"Layout_li__2F-Wf"}},5073:function(e){e.exports={card:"utils_card__1pO5P",center:"utils_center__3XnDU",row:"utils_row__3ur_O",flex:"utils_flex__x0Bdp"}}},function(e){e.O(0,[675,723,774,888,179],(function(){return n=8521,e(e.s=n);var n}));var n=e.O();_N_E=n}]);