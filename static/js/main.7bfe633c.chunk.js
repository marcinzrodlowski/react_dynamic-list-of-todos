(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(7),s=c.n(a),l=c(8),n=c(2),i=c(1),d=c.n(i),o=(c(13),c(14),c(5)),r=c.n(o),j=c(0),b=function(e){var t=e.todos,c=e.selected,a=e.onSelected;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"todo",className:r()({"has-background-info-light":(null===c||void 0===c?void 0:c.id)===e.id}),children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(j.jsx)("td",{className:"is-vcentered",children:Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}):Object(j.jsx)("td",{className:"is-vcentered"}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:r()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(e)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:r()("far",{"fa-eye":(null===c||void 0===c?void 0:c.id)!==e.id,"fa-eye-slash":(null===c||void 0===c?void 0:c.id)===e.id})})})})})]},e.id)}))})]})},u=function(e){var t=e.query,c=e.setQuery,a=e.filterBy,s=e.setFilterBy;return Object(j.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{name:"filterBy","data-cy":"statusSelect",value:a,onChange:function(e){return s(e.target.value)},children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"active",children:"Active"}),Object(j.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{name:"input","data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},m=(c(16),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O,x=function(e){var t=e.onClose;return Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),Object(j.jsx)(m,{}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close","aria-label":"Close Modal",onClick:t})]})},f=function(e){var t=e.onClose,c=e.errorMessage;return Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsx)("div",{className:"modal-card-head",children:Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close","aria-label":"Close Modal",onClick:t})}),Object(j.jsx)("div",{className:"modal-card-body",children:Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:c})})]})]})},v=d.a.memo((function(e){var t=e.selected,c=e.onClose,a=Object(i.useState)(null),s=Object(n.a)(a,2),l=s[0],d=s[1],o=Object(i.useState)(!0),r=Object(n.a)(o,2),b=r[0],u=r[1],m=Object(i.useState)(""),O=Object(n.a)(m,2),v=O[0],N=O[1];return Object(i.useEffect)((function(){var e;(e=t.userId,h("/users/".concat(e))).then((function(e){d(e),N("")})).catch((function(){return N("Cannot find a user")})).finally((function(){return u(!1)}))}),[t]),b?Object(j.jsx)(x,{onClose:c}):v?Object(j.jsx)(f,{onClose:c,errorMessage:v}):Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close","aria-label":"Close Modal",onClick:c})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(null===l||void 0===l?void 0:l.email),children:null===l||void 0===l?void 0:l.name})]})]})]})]})}));!function(e){e.all="all",e.active="active",e.completed="completed"}(O||(O={}));var N=function(){var e=Object(i.useState)([]),t=Object(n.a)(e,2),c=t[0],a=t[1],s=Object(i.useState)(!1),d=Object(n.a)(s,2),o=d[0],r=d[1],x=Object(i.useState)(null),f=Object(n.a)(x,2),N=f[0],p=f[1],y=Object(i.useState)(""),g=Object(n.a)(y,2),C=g[0],k=g[1],S=Object(i.useState)(O.all),w=Object(n.a)(S,2),B=w[0],M=w[1];Object(i.useEffect)((function(){r(!0),h("/todos").then(a).finally((function(){return r(!1)}))}),[]);var _=Object(i.useMemo)((function(){var e=Object(l.a)(c);switch(C.length&&(e=e.filter((function(e){return e.title.toLowerCase().includes(C.toLowerCase())}))),B){case O.active:return e.filter((function(e){return!e.completed}));case O.completed:return e.filter((function(e){return e.completed}));default:return e}}),[C,B,c]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(u,{query:C,setQuery:k,filterBy:B,setFilterBy:M})}),Object(j.jsxs)("div",{className:"block",children:[o&&Object(j.jsx)(m,{}),!o&&_.length>0&&Object(j.jsx)(b,{todos:_,selected:N,onSelected:p})]})]})})}),N&&Object(j.jsx)(v,{selected:N,onClose:function(){return p(null)}})]})};s.a.render(Object(j.jsx)(N,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7bfe633c.chunk.js.map