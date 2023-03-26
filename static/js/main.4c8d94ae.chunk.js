(this["webpackJsonpportfolio-fe"]=this["webpackJsonpportfolio-fe"]||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),i=n(3),a=n(1),s=n(0),l=Object(a.createContext)(),r=function(e){var t=e.children,n=Object(a.useState)("light"),c=Object(i.a)(n,2),r=c[0],o=c[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="/",j="JS.",d="V\u0103n Th\u01b0",h="Front End Engineer",b="I want to find an opportunity to learn more experience, improve myself and look forward to helping with company\u2019s professional activities, becoming an official long-term employee in your company.",u="https://drive.google.com/file/d/1UmaB6bAS1uZIy398jqbw1jemmPJkAKag/view?usp=sharing",m={linkedin:"https://www.linkedin.com/in/vanthudkr/",github:"https://github.com/vanthudkr"},p=[{name:"Confidential",description:"Building and implementing the technology behind a new automated bond underwriting platform is complex, but the Propeller team has done all the hard work \u2014 so you, and your clients, don\u2019t have to.",stack:["SASS","Tailwind","TypeScript","React","React Query","GraphQL","Redux"]},{name:"Portal",description:"The portal project is a project to design the company\u2019s system to suit that company, so that all information and manipulation functions can be automated on the system, easy to manage and use.",stack:["SASS","TypeScript","NextJS","Redux"]},{name:"Webapp - Game",description:"Is a web application to exchange information between users, such as chat, make friends, and unfriend",stack:["SASS","TypeScript","React"]},{name:"Webapp - Drink",description:"A food delivery application is a software on a phone/website, representing an intermediary unit that helps users order food and deliver food to their place.",stack:["SASS","TypeScript","React"]},{name:"MiaHire Service",description:"MiaHire service is a service that can help recruiters spend very little time filtering and selecting candidates",stack:["SASS","TypeScript","React"],livePreview:"https://www.miahire.com/"}],O=["HTML","CSS","JavaScript","TypeScript","React","Redux","SASS","Material UI","Git","Unit test"],f="vanthu1998it@gmail.com",x=n(16),k=n.n(x),v=n(14),g=n.n(v),N=n(18),_=n.n(N),S=n(17),w=n.n(S),y=(n(28),function(){var e=Object(a.useContext)(l),t=Object(i.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(a.useState)(!1),o=Object(i.a)(r,2),j=o[0],d=o[1],h=function(){return d(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:h,className:"link link--nav",children:"Projects"})}):null,O.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:"Skills"})}):null,f?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:h,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(g.a,{}):Object(s.jsx)(k.a,{})}),Object(s.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(w.a,{}):Object(s.jsx)(_.a,{})})]})}),C=(n(32),function(){var e=o,t=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(y,{})]})}),T=n(11),A=n.n(T),R=n(19),E=n.n(R),P=(n(33),function(){var e=d,t=h,n=b,c=u,i=m;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsxs)("div",{className:"about__contact center",children:[c&&Object(s.jsx)("a",{href:c,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(s.jsxs)(s.Fragment,{children:[i.github&&Object(s.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(A.a,{})}),i.linkedin&&Object(s.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(E.a,{})})]})]})]})}),I=n(7),J=n.n(I),L=n(20),M=n.n(L),B=(n(35),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},J()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(A.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(M.a,{})})]})}),H=(n(36),function(){return p.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(s.jsx)(B,{project:e},J()())}))})]}):null}),G=(n(37),function(){return O.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},J()())}))})]}):null}),U=n(21),F=n.n(U),Q=(n(38),function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(F.a,{fontSize:"large"})})}):null}),V=(n(39),function(){return f?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(f),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),W=(n(40),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/vanthudkr/portfolio-fe",className:"link footer__link",children:"Created By V\u0103n Th\u01b0"})})}),q=(n(41),function(){var e=Object(a.useContext)(l),t=Object(i.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(C,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(P,{}),Object(s.jsx)(H,{}),Object(s.jsx)(G,{}),Object(s.jsx)(V,{})]}),Object(s.jsx)(Q,{}),Object(s.jsx)(W,{})]})});n(42);Object(c.render)(Object(s.jsx)(r,{children:Object(s.jsx)(q,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.4c8d94ae.chunk.js.map