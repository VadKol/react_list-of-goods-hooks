(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),r=n(6),i=n(8),a=n(1),u=n(4),l=n.n(u),b=n(0),j=function(t){var e=t.goods;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})},d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];n(14),n(15);!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var h=function(){var t=Object(a.useState)(!1),e=Object(r.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(s.NONE),u=Object(r.a)(o,2),h=u[0],N=u[1],O=h!==s.NONE||n,g=function(t,e){var n=e.sortType,c=e.isReversed,o=Object(i.a)(t);return o.sort((function(t,e){switch(n){case s.ALPHABET:return t.localeCompare(e);case s.LENGTH:return t.length-e.length;default:return 0}})),c&&o.reverse(),o}(d,{sortType:h,isReversed:n});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button","is-info",{"is-light":h!==s.ALPHABET}),onClick:function(){return N(s.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button","is-success",{"is-light":h!==s.LENGTH}),onClick:function(){return N(s.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button","is-warning",{"is-light":!n}),onClick:function(){return c(!n)},children:"Reverse"}),O&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(!1),N(s.NONE)},children:"Reset"})]}),Object(b.jsx)(j,{goods:g})]})};o.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a7aa7ad2.chunk.js.map