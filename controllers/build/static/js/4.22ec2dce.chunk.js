(this.webpackJsonpnorthwind=this.webpackJsonpnorthwind||[]).push([[4],{372:function(e,a,t){(function(a){var n;e.exports=(n=t(0),function(e){var a={};function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)t.d(n,r,function(a){return e[a]}.bind(null,r));return n},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=4)}([function(e,a,t){e.exports=t(2)()},function(e,a){e.exports=n},function(e,a,t){"use strict";var n=t(3);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,a,t,r,i,s){if(s!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function a(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:r};return t.PropTypes=t,t}},function(e,a,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),i=t(0),s=t.n(i);function l(){return(l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var o=function(e){var a=e.pageClassName,t=e.pageLinkClassName,n=e.page,i=e.selected,s=e.activeClassName,o=e.activeLinkClassName,u=e.getEventListener,c=e.pageSelectedHandler,p=e.href,f=e.extraAriaContext,d=e.pageLabelBuilder,g=e.ariaLabel||"Page "+n+(f?" "+f:""),b=null;return i&&(b="page",g=e.ariaLabel||"Page "+n+" is your current page",a=void 0!==a?a+" "+s:s,void 0!==t?void 0!==o&&(t=t+" "+o):t=o),r.a.createElement("li",{className:a},r.a.createElement("a",l({role:"button",className:t,href:p,tabIndex:"0","aria-label":g,"aria-current":b,onKeyPress:c},u(c)),d(n)))};o.propTypes={pageSelectedHandler:s.a.func.isRequired,selected:s.a.bool.isRequired,pageClassName:s.a.string,pageLinkClassName:s.a.string,activeClassName:s.a.string,activeLinkClassName:s.a.string,extraAriaContext:s.a.string,href:s.a.string,ariaLabel:s.a.string,page:s.a.number.isRequired,getEventListener:s.a.func.isRequired,pageLabelBuilder:s.a.func.isRequired};var u=o;function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var p=function(e){var a=e.breakLabel,t=e.breakClassName,n=e.breakLinkClassName,i=e.breakHandler,s=e.getEventListener,l=t||"break";return r.a.createElement("li",{className:l},r.a.createElement("a",c({className:n,role:"button",tabIndex:"0",onKeyPress:i},s(i)),a))};p.propTypes={breakLabel:s.a.oneOfType([s.a.string,s.a.node]),breakClassName:s.a.string,breakLinkClassName:s.a.string,breakHandler:s.a.func.isRequired,getEventListener:s.a.func.isRequired};var f=p;function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function b(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,a){return(v=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function h(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=C(e);if(a){var r=C(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return m(this,t)}}function m(e,a){return!a||"object"!==d(a)&&"function"!=typeof a?y(e):a}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var L=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&v(e,a)}(s,e);var a,t,n,i=h(s);function s(e){var a,t;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,s),k(y(a=i.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)})),k(y(a),"handleNextPage",(function(e){var t=a.state.selected,n=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<n-1&&a.handlePageSelected(t+1,e)})),k(y(a),"handlePageSelected",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e?(a.setState({selected:e}),a.callCallback(e)):a.callActiveCallback(e)})),k(y(a),"getEventListener",(function(e){return k({},a.props.eventListener,e)})),k(y(a),"handleBreakClick",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1;var n=a.state.selected;a.handlePageSelected(n<e?a.getForwardJump():a.getBackwardJump(),t)})),k(y(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),k(y(a),"callActiveCallback",(function(e){void 0!==a.props.onPageActive&&"function"==typeof a.props.onPageActive&&a.props.onPageActive({selected:e})})),k(y(a),"pagination",(function(){var e=[],t=a.props,n=t.pageRangeDisplayed,i=t.pageCount,s=t.marginPagesDisplayed,l=t.breakLabel,o=t.breakClassName,u=t.breakLinkClassName,c=a.state.selected;if(i<=n)for(var p=0;p<i;p++)e.push(a.getPageElement(p));else{var d,g,b,v=n/2,h=n-v;c>i-n/2?v=n-(h=i-c):c<n/2&&(h=n-(v=c));var m=function(e){return a.getPageElement(e)};for(d=0;d<i;d++)(g=d+1)<=s||g>i-s||d>=c-v&&d<=c+h?e.push(m(d)):l&&e[e.length-1]!==b&&(b=r.a.createElement(f,{key:d,breakLabel:l,breakClassName:o,breakLinkClassName:u,breakHandler:a.handleBreakClick.bind(null,d),getEventListener:a.getEventListener}),e.push(b))}return e})),t=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:t},a}return a=s,(t=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,n=e.extraAriaContext;void 0===a||t||this.callCallback(a),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,n=e+a.pageRangeDisplayed;return n>=t?t-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,n=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<n)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,n=t.pageClassName,i=t.pageLinkClassName,s=t.activeClassName,l=t.activeLinkClassName,o=t.extraAriaContext,c=t.pageLabelBuilder;return r.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:n,pageLinkClassName:i,activeClassName:s,activeLinkClassName:l,extraAriaContext:o,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:c,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.pageCount,n=e.containerClassName,i=e.previousLabel,s=e.previousClassName,l=e.previousLinkClassName,o=e.previousAriaLabel,u=e.prevRel,c=e.nextLabel,p=e.nextClassName,f=e.nextLinkClassName,d=e.nextAriaLabel,b=e.nextRel,v=this.state.selected,h=s+(0===v?" ".concat(a):""),m=p+(v===t-1?" ".concat(a):""),y=0===v?"true":"false",C=v===t-1?"true":"false";return r.a.createElement("ul",{className:n},r.a.createElement("li",{className:h},r.a.createElement("a",g({className:l,href:this.hrefBuilder(v-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":y,"aria-label":o,rel:u},this.getEventListener(this.handlePreviousPage)),i)),this.pagination(),r.a.createElement("li",{className:m},r.a.createElement("a",g({className:f,href:this.hrefBuilder(v+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":C,"aria-label":d,rel:b},this.getEventListener(this.handleNextPage)),c)))}}])&&b(a.prototype,t),n&&b(a,n),s}(n.Component);k(L,"propTypes",{pageCount:s.a.number.isRequired,pageRangeDisplayed:s.a.number.isRequired,marginPagesDisplayed:s.a.number.isRequired,previousLabel:s.a.node,previousAriaLabel:s.a.string,prevRel:s.a.string,nextLabel:s.a.node,nextAriaLabel:s.a.string,nextRel:s.a.string,breakLabel:s.a.oneOfType([s.a.string,s.a.node]),hrefBuilder:s.a.func,onPageChange:s.a.func,onPageActive:s.a.func,initialPage:s.a.number,forcePage:s.a.number,disableInitialCallback:s.a.bool,containerClassName:s.a.string,pageClassName:s.a.string,pageLinkClassName:s.a.string,pageLabelBuilder:s.a.func,activeClassName:s.a.string,activeLinkClassName:s.a.string,previousClassName:s.a.string,nextClassName:s.a.string,previousLinkClassName:s.a.string,nextLinkClassName:s.a.string,disabledClassName:s.a.string,breakClassName:s.a.string,breakLinkClassName:s.a.string,extraAriaContext:s.a.string,ariaLabelBuilder:s.a.func,eventListener:s.a.string}),k(L,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick"}),a.default=L}]))}).call(this,t(162))},373:function(e,a,t){},377:function(e,a,t){"use strict";t.r(a);var n=t(9),r=t(18),i=t.n(r),s=t(0),l=t(17),o=t(31),u=t(37),c=t(372),p=t.n(c),f=(t(373),t(1));a.default=function(){var e=Object(o.a)(),a=Object(s.useState)(),t=Object(n.a)(a,2),r=t[0],c=t[1],d=Object(s.useState)(0),g=Object(n.a)(d,2),b=g[0],v=g[1],h=8*b,m=null===r||void 0===r?void 0:r.slice(h,h+8).map((function(e){return Object(f.jsx)(u.a,{product:e},e.id)})),y=Math.ceil((null===r||void 0===r?void 0:r.length)/8);return Object(s.useEffect)((function(){i.a.get(l.a.urls.product,{headers:e}).then((function(e){c(e.data)})).catch((function(e){alert(e)}))}),[]),Object(f.jsxs)("div",{className:"Chains",children:[m,Object(f.jsx)(p.a,{previousLabel:"Previous",nextLabel:"Next",pageCount:y,onPageChange:function(e){var a=e.selected;v(a)},containerClassName:"paginationBttns",previousLinkClassName:"previousBttn",nextLinkClassName:"nextBttn",disabledClassName:"paginationDisabled",activeClassName:"paginationActive"})]})}}}]);
//# sourceMappingURL=4.22ec2dce.chunk.js.map