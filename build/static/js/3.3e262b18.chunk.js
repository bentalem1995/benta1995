(this.webpackJsonpnorthwind=this.webpackJsonpnorthwind||[]).push([[3],{374:function(t,e,c){},375:function(t,e,c){},376:function(t,e,c){},379:function(t,e,c){"use strict";c.r(e);var s=c(25),a=c.n(s),i=c(38),n=c(44),r=c(68),o=c(65),j=c(64),u=c(19),d=c.n(u),l=c(0),h=c(41),b=c(17),p=(c(374),c(31)),O=c(9),m=c(37),x=(c(375),c(1));var v=function(){var t=Object(l.useState)(),e=Object(O.a)(t,2),c=e[0],s=e[1],a=Object(p.a)();return Object(l.useEffect)((function(){d.a.get(b.a.urls.similar,{headers:a}).then((function(t){s(t.data)})).catch((function(t){console.log(t)}))}),[]),Object(x.jsx)("div",{className:"Similar",children:null===c||void 0===c?void 0:c.map((function(t){return Object(x.jsx)(m.a,{product:t},t.id)}))})};c(376);var f=function(){var t=Object(l.useState)(),e=Object(O.a)(t,2),c=e[0],s=e[1],a=Object(p.a)();return Object(l.useEffect)((function(){d.a.get(b.a.urls.product+"sales/",{headers:a}).then((function(t){s(t.data)})).catch((function(t){console.log(t)}))}),[]),Object(x.jsx)("div",{className:"Sales",children:null===c||void 0===c?void 0:c.map((function(t){return Object(x.jsx)(m.a,{product:t},t.id)}))})},g=c(358),N=function(t){Object(o.a)(c,t);var e=Object(j.a)(c);function c(t){var s;return Object(n.a)(this,c),(s=e.call(this,t)).state={product:null,count:0,similarProduct:null,isModuleOpen:!1},s}return Object(r.a)(c,[{key:"componentDidMount",value:function(){var t=Object(i.a)(a.a.mark((function t(){var e,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(p.a)(),t.next=3,d.a.get(b.a.urls.product+this.props.match.params.id,{headers:e});case 3:c=t.sent,this.setState({product:c.data});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e,c,s;return Object(x.jsxs)(g.a,{container:!0,className:"Buy",children:[Object(x.jsxs)(g.a,{item:!0,xs:12,className:"images",children:[Object(x.jsx)("img",{src:b.a.urls.product+"images/"+this.props.match.params.image}),Object(x.jsx)("img",{src:b.a.urls.product+"images/"+this.props.match.params.image}),Object(x.jsx)("img",{src:b.a.urls.product+"images/"+this.props.match.params.image})]}),Object(x.jsxs)(g.a,{className:"title",children:[Object(x.jsxs)(g.a,{item:!0,xs:12,className:"title-price",children:[Object(x.jsx)("div",{children:Object(x.jsx)("h3",{children:"\u05de\u05d7\u05d9\u05e8"})}),Object(x.jsx)("div",{className:"title-price-child2",children:Object(x.jsxs)("h3",{children:[null===(t=this.state.product)||void 0===t?void 0:t.price,"\u05e9\u05d7"]})})]}),Object(x.jsxs)(g.a,{item:!0,xs:12,justifyContent:"center",className:"paymentCart",children:[Object(x.jsx)(h.b,{to:"/payment/"+(null===(e=this.state.product)||void 0===e?void 0:e.image)+"&&"+(null===(c=this.state.product)||void 0===c?void 0:c.id),children:"\u05e8\u05db\u05d9\u05e9\u05d4"}),Object(x.jsx)(h.b,{to:"/cart",children:"\u05d4\u05d5\u05e1\u05e3 \u05dc\u05e1\u05dc"})]}),Object(x.jsxs)("div",{className:"description",children:[Object(x.jsx)("h5",{children:":\u05ea\u05d9\u05d0\u05d5\u05e8 \u05d4\u05de\u05d5\u05e6\u05e8"}),Object(x.jsx)("p",{children:null===(s=this.state.product)||void 0===s?void 0:s.description}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:"\u05de\u05d1\u05e6\u05e2\u05d9\u05dd \u05de\u05d9\u05d5\u05d7\u05d3\u05d9\u05dd"}),Object(x.jsx)(f,{})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:"\u05de\u05d5\u05e6\u05e8\u05d9\u05dd \u05d3\u05d5\u05de\u05d9\u05dd"}),Object(x.jsx)(v,{})]})]}),Object(x.jsx)("div",{})]})}}]),c}(l.Component);e.default=N}}]);
//# sourceMappingURL=3.3e262b18.chunk.js.map