webpackJsonp([5],{1072:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,u){try{var l=t[r](u),o=l.value}catch(e){return void a(e)}if(!l.done)return Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)});e(o)}return n("next")})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,c,s=a(130),d=n(s),f=a(236),p=n(f),m=a(939),_=n(m),E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},v=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(159),a(113),a(940);var y=a(0),b=n(y),h=a(384),O=n(h),g=a(982),D=n(g),w=a(994),R=n(w),T=a(984),k=n(T),A=a(989);a(1073);var P=(i=(0,O.default)({onValuesChange:function(e,t){(0,e.updateEData)(t)},mapProps:function(e){return{formValues:e.eData}}}))(c=function(e){function t(){var e,a,n,r;u(this,t);for(var o=arguments.length,i=Array(o),c=0;c<o;c++)i[c]=arguments[c];return a=n=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.onedit=function(){var e;return(e=n).__onedit__REACT_HOT_LOADER__.apply(e,arguments)},n.onsubmit=function(){var e;return(e=n).__onsubmit__REACT_HOT_LOADER__.apply(e,arguments)},n.cancel=function(){var e;return(e=n).__cancel__REACT_HOT_LOADER__.apply(e,arguments)},r=a,l(n,r)}return o(t,e),v(t,[{key:"__cancel__REACT_HOT_LOADER__",value:function(){var e=this.props,t=e.updateEData,a=e.data,n=e.updateDetailStatus;t(a),n({key:"edit",data:!1})}},{key:"__onsubmit__REACT_HOT_LOADER__",value:function(){var e=this,t=this.props,a=t.form,n=t.updateDetail,u=t.updateDetailStatus;a.validateFields(function(){var t=r(regeneratorRuntime.mark(function t(r,l){var o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=6;break}return e.next=3,(0,A.saveBase)(E({id:a.getFieldValue("id")},l));case 3:o=e.sent,i=o.eCode,i||(u({key:"edita",data:!1}),n(E({},a.getFieldsValue())),_.default.success("保存成功~"));case 6:case"end":return e.stop()}},t,e)}));return function(e,a){return t.apply(this,arguments)}}())}},{key:"__onedit__REACT_HOT_LOADER__",value:function(){var e=this.props,t=e.updateEData,a=e.data;(0,e.updateDetailStatus)({key:"edit",data:!0}),t(a)}},{key:"render",value:function(){var e=this,t=this.props,a=t.edit,n=t.data,u=t.form;return b.default.createElement("div",{className:"product-detail-base"},a?b.default.createElement("div",{className:"edit"},b.default.createElement("div",{className:"name item"},b.default.createElement("label",null,b.default.createElement("span",{className:"require"},"*"),"支付通道名称"),u.getFieldDecorator("productName",{rules:[{rule:"require",message:"请输入支付通道名称"},{rule:/^\S{0,20}$/,message:"最多20个的非空字符！"}]})(b.default.createElement(p.default,null))),b.default.createElement("div",{className:"cover item"},b.default.createElement("label",null,b.default.createElement("span",{className:"require"},"*"),"封面图"),u.getFieldDecorator("cover",{rules:[function(e){return e?null:{message:"请上传封面图"}}]})(b.default.createElement("div",{className:"fixed-div"},b.default.createElement(D.default,{accept:"image/*",upload:function(){var t=r(regeneratorRuntime.mark(function t(a,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=5;break}return e.next=3,(0,k.default)(a,"merchant/product",2);case 3:r=e.sent,n(r);case 5:case"end":return e.stop()}},t,e)}));return function(e,a){return t.apply(this,arguments)}}(),del:function(e){e("")}}),b.default.createElement("p",null,"建议图片大小330*228像素")))),b.default.createElement("div",{className:"cover-text item"},b.default.createElement("label",null,"封面文案"),u.getFieldDecorator("document")(b.default.createElement(p.default.TextArea,{rows:10}))),b.default.createElement("div",{className:"ueditor"},b.default.createElement("label",null,"正文"),u.getFieldDecorator("body",{valueName:"content"})(b.default.createElement(R.default,{id:"product-ueditor",imgdir:"product"}))),b.default.createElement("div",{className:"btn"},b.default.createElement(d.default,{type:"primary",onClick:this.onsubmit},"保存"),b.default.createElement(d.default,{onClick:this.cancel},"取消"))):b.default.createElement("div",{className:"base-btn"},b.default.createElement("div",{className:"view"},b.default.createElement("div",{dangerouslySetInnerHTML:{__html:n.body}})),b.default.createElement("div",{className:"btn"},b.default.createElement(d.default,{onClick:this.onedit},"开始编辑"))))}}]),t}(y.PureComponent))||c;t.default=P;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(P,"ProductDetailBase","/Users/zhaoguoping/work/integrationPay_web/backstage/src/app/product/product-detail/components/base/index.js")}()},1073:function(e,t){},1074:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,u){try{var l=t[r](u),o=l.value}catch(e){return void a(e)}if(!l.done)return Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)});e(o)}return n("next")})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,c,s=a(236),d=n(s),f=a(939),p=n(f),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},_=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(113),a(940);var E=a(0),v=n(E),y=a(384),b=n(y),h=a(989);a(1075);var O=(i=(0,b.default)({mapProps:function(e){return{formValues:e.data}}}))(c=function(e){function t(){var e,a,n,r;u(this,t);for(var o=arguments.length,i=Array(o),c=0;c<o;c++)i[c]=arguments[c];return a=n=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.onedit=function(){var e;return(e=n).__onedit__REACT_HOT_LOADER__.apply(e,arguments)},n.onsubmit=function(){var e;return(e=n).__onsubmit__REACT_HOT_LOADER__.apply(e,arguments)},n.cancel=function(){var e;return(e=n).__cancel__REACT_HOT_LOADER__.apply(e,arguments)},r=a,l(n,r)}return o(t,e),_(t,[{key:"__cancel__REACT_HOT_LOADER__",value:function(){(0,this.props.updateDetailStatus)({key:"edita",data:!1})}},{key:"__onsubmit__REACT_HOT_LOADER__",value:function(){var e=this,t=this.props,a=t.form,n=t.updateDetail,u=t.updateDetailStatus;a.validateFields(function(){var t=r(regeneratorRuntime.mark(function t(r){var l,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=6;break}return e.next=3,(0,h.saveApi)(m({},a.getFieldsValue()));case 3:l=e.sent,o=l.eCode,o||(p.default.success("保存成功~"),u({key:"edita",data:!1}),n(m({},a.getFieldsValue())));case 6:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}())}},{key:"__onedit__REACT_HOT_LOADER__",value:function(){var e=this.props,t=e.updateDetailStatus,a=e.form,n=e.data;a.setFieldsValue(n),t({key:"edita",data:!0})}},{key:"render",value:function(){var e=this.props,t=e.data,a=e.edit,n=e.form;return v.default.createElement("div",{className:"product-detail-api"},v.default.createElement("div",{className:"view"},v.default.createElement("div",{className:"api-info"},v.default.createElement("p",null,v.default.createElement("label",null,"请求方式："),v.default.createElement("span",null,t.mode)),v.default.createElement("p",null,v.default.createElement("label",null,"返回格式："),v.default.createElement("span",null,t.format)),v.default.createElement("p",null,v.default.createElement("label",null,"请求地址："),v.default.createElement("span",null,t.officialUrl))),v.default.createElement("div",{className:"req"},v.default.createElement("div",{className:"title"},"请求参数说明"),v.default.createElement("ul",null,v.default.createElement("li",{className:"head"},v.default.createElement("p",null,"字段(中文名)"),v.default.createElement("p",null,"长度限制"),v.default.createElement("p",null,"是否必填"),v.default.createElement("p",null,"说明")),(t.requestList||[]).map(function(e,t){return v.default.createElement("li",{className:"body",key:t},v.default.createElement("p",null,e.name),v.default.createElement("p",null,e.length),v.default.createElement("p",null,"yes"===e.isRequired?"是":"否"),v.default.createElement("p",null,a?n.getFieldDecorator("requestList."+t+".remark")(v.default.createElement(d.default,null)):e.remark))}))),!!(t.responseList||[]).length&&v.default.createElement("div",{className:"res"},v.default.createElement("div",{className:"title"},"返回参数说明"),v.default.createElement("ul",null,v.default.createElement("li",{className:"head"},v.default.createElement("p",null,"字段(中文名)"),v.default.createElement("p",null,"说明")),(t.responseList||[]).map(function(e,t){return v.default.createElement("li",{className:"body",key:t},v.default.createElement("p",null,e.name),v.default.createElement("p",null,a?n.getFieldDecorator("responseList."+t+".remark")(v.default.createElement(d.default,null)):e.remark))}))),v.default.createElement("div",{className:"json"},v.default.createElement("div",{className:"title"},"返回数据示例"),v.default.createElement("pre",{dangerouslySetInnerHTML:{__html:t.example}}))))}}]),t}(E.PureComponent))||c;t.default=O;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(O,"ProductDetail","/Users/zhaoguoping/work/integrationPay_web/backstage/src/app/product/product-detail/components/API/index.js")}()},1075:function(e,t){},1076:function(e,t){},975:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,u){try{var l=t[r](u),o=l.value}catch(e){return void a(e)}if(!l.done)return Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)});e(o)}return n("next")})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,c,s=a(945),d=n(s),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(946);var m=a(0),_=n(m),E=a(111),v=a(112),y=a(989),b=a(978),h=n(b),O=a(1072),g=n(O),D=a(1074),w=n(D),R=a(1006);a(1076);var T=d.default.TabPane,k=(i=(0,E.connect)(function(e){var t=e.product;return{detail:t.detail,eData:t.eData,edit:t.edit,edita:t.edita}},function(e){return(0,v.bindActionCreators)({updateDetail:R.updateDetail,updateEData:R.updateEData,updateDetailStatus:R.updateDetailStatus},e)}))(c=function(e){function t(){return u(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),p(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.detail,n=t.updateEData,r=t.eData,u=t.updateDetail,l=t.edit,o=t.updateDetailStatus;return _.default.createElement("div",{className:"product-detail"},_.default.createElement(h.default,null,_.default.createElement("span",{className:"product-detail-crumb",onClick:function(){e.props.history.push("/app/product")}},"产品说明 / "),a.productName),_.default.createElement(d.default,null,_.default.createElement(T,{tab:"产品介绍",key:0},_.default.createElement(g.default,{edit:l,data:a,eData:r,updateEData:n,updateDetail:u,updateDetailStatus:o})),_.default.createElement(T,{tab:"API",key:2},_.default.createElement(w.default,{data:a,updateDetail:u,updateDetailStatus:o}))))}},{key:"componentDidMount",value:function(){function e(){return t.apply(this,arguments)}var t=r(regeneratorRuntime.mark(function e(){var t,a,n,r,u,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.match.params,n=t.updateDetail,r=t.detail,e.next=3,(0,y.getApiInfo)(a.id);case 3:u=e.sent,l=u.data,n(f({},r,l));case 6:case"end":return e.stop()}},e,this)}));return e}()}]),t}(m.PureComponent))||c;t.default=k;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(T,"TabPane","/Users/zhaoguoping/work/integrationPay_web/backstage/src/app/product/product-detail/index.js"),__REACT_HOT_LOADER__.register(k,"ProductDetail","/Users/zhaoguoping/work/integrationPay_web/backstage/src/app/product/product-detail/index.js"))}()}});