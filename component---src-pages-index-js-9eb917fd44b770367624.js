"use strict";(self.webpackChunkanurag_shenoy_website=self.webpackChunkanurag_shenoy_website||[]).push([[293],{6105:function(e,t,a){a.d(t,{A:function(){return s}});var l=a(6540);var r=e=>{let{heading:t,paragraph:a,imgUrl:r,projectLink:n}=e;return l.createElement("div",{className:"card",style:{backgroundImage:"linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.8)),url("+r+")"}},l.createElement("div",{className:"content"},l.createElement("h1",{className:"header"},t),l.createElement("p",{className:"text"},a),l.createElement("a",{href:n||"#",target:"_blank",rel:"noopener noreferrer",className:"btn"},"Explore")))},n=a(5438),c=a.n(n),m=a(5977);var s=()=>l.createElement("div",{className:"section",id:"work"},l.createElement("div",{className:"container"},l.createElement("div",{className:"work-wrapper"},l.createElement(c(),{bottom:!0},l.createElement("h1",null,"Projects")),l.createElement("div",{className:"grid"},l.createElement(c(),{bottom:!0,cascade:!0},m.A.projects.map(((e,t)=>l.createElement(r,{key:t,heading:e.title,paragraph:e.para,imgUrl:e.imageSrc,projectLink:e.url}))))))))},6384:function(e,t,a){var l=a(6540);t.A=e=>{let{heading:t,date:a,paragraph:r,imgUrl:n,projectLink:c}=e;return l.createElement("div",{className:"blog-card",style:{backgroundImage:"url("+n+")"}},l.createElement("div",{className:"content"},l.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},l.createElement("h1",null,t)),l.createElement("p",{className:"date"},a),l.createElement("p",{className:"text"},r)))}},2273:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var l=a(6540),r=a(8007),n=a(4446),c=a(2269),m=a(5438),s=a.n(m),i=a(9285),o=a(5977);var d=()=>l.createElement("div",{className:"section",id:"home"},l.createElement("div",{className:"container"},l.createElement("div",{className:"header-wrapper"},l.createElement(s(),{bottom:!0},l.createElement("h1",null,"Hi, I'm ",o.A.name," ",l.createElement("span",{role:"img","aria-label":"Emoji"},"👋"))),l.createElement(s(),{bottom:!0,cascade:!0},l.createElement("div",{className:"heading-wrapper"},l.createElement("h1",null,o.A.headerTaglines[0]?o.A.headerTaglines[0]:"Building digital"),l.createElement("h1",null," ",o.A.headerTaglines[1]?o.A.headerTaglines[1]:"products, brands"))),l.createElement(s(),{bottom:!0},l.createElement("p",null,o.A.headerParagraph)),l.createElement(s(),{bottom:!0},l.createElement("button",{onClick:()=>(0,i.A)("#contact"),onKeyPress:()=>(0,i.A)("#contact"),className:"primary-btn"},"CONNECT WITH ME"))))),E=a(6105);var u=()=>l.createElement("div",{className:"section"},l.createElement("div",{className:"container"},l.createElement("div",{className:"skills-container"},l.createElement("h1",null,"Skills"),l.createElement("div",{className:"skills-grid"},o.A.skills.map(((e,t)=>l.createElement("div",{className:"skill",key:t},l.createElement("img",{src:e.img,alt:"css"}),l.createElement("p",{className:e.level},e.level),l.createElement("p",null,e.para)))))))),g=a(6384);const p=e=>{let t=[];for(let l=0;l<e.data.allMarkdownRemark.nodes.length;l++)e.data.allMarkdownRemark.nodes[l].frontmatter.published&&t.push(e.data.allMarkdownRemark.nodes[l]);t=t.sort(((e,t)=>e.frontmatter.date>t.frontmatter.date?-1:e.frontmatter.date<t.frontmatter.date?1:0));let a=t.slice(0,5);return l.createElement("div",{className:"section",id:"blog"},l.createElement("div",{className:"container"},l.createElement("div",{className:"blog-wrapper"},l.createElement(s(),{bottom:!0},l.createElement("h1",null,"Blog Posts")),l.createElement("div",null,a.map(((e,t)=>l.createElement(g.A,{key:t,heading:e.frontmatter.title,date:e.frontmatter.date,paragraph:e.frontmatter.description,imgUrl:e.frontmatter.img,projectLink:e.frontmatter.slug})))),l.createElement(r.Link,{to:"/blog",className:"btn heavy"},"All Blog Posts"))))},h=e=>l.createElement(r.StaticQuery,{query:"1251454402",render:t=>l.createElement(p,Object.assign({data:t},e))});var v=()=>l.createElement("div",{className:"section",id:"contact"},l.createElement("div",{className:"container"},l.createElement("div",{className:"footer-container"},l.createElement(s(),{bottom:!0,cascade:!0},l.createElement("h1",null,"Contact"),l.createElement("h2",null,o.A.contactSubHeading)),l.createElement("a",{className:"email-link",href:`mailto:${o.A.contactEmail}`},o.A.contactEmail)))),N=a(2794);var b=()=>l.createElement(n.A,null,l.createElement(c.A,{title:"Anurag Shenoy"}),l.createElement(d,null),l.createElement(E.A,null),l.createElement(u,null),l.createElement(h,null),l.createElement(v,null),l.createElement(N.A,null))}}]);
//# sourceMappingURL=component---src-pages-index-js-9eb917fd44b770367624.js.map