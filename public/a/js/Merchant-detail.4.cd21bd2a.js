webpackJsonp([4],{1001:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(i);n(1035);var c=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),u(t,[{key:"render",value:function(){var e=this.props.children;return o.default.createElement("div",{className:"add-merchant-title"},o.default.createElement("storge",null,e))}}]),t}(i.PureComponent);t.default=c;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(c,"Title","/Users/zhaoguoping/work/integrationPay_web/backstage/src/app/merchant/merchant-detail/components/title/index.js")}()},1034:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(130),o=a(i),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(159);var f=n(0),d=a(f),s=n(20),p=a(s),m=n(1001),E=a(m);n(1036);var b=n(34),v=n(990),y=a(v),_=function(e){function t(){return l(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.toEdit;return d.default.createElement("div",{className:"merchant-detail-base"},d.default.createElement("div",{className:"merchant-detail-base-other"},d.default.createElement(E.default,null,"商户基本信息"),d.default.createElement("div",null,d.default.createElement("label",null,"商户代理商："),d.default.createElement("div",null,t.outMchntId)),d.default.createElement("div",null,d.default.createElement("label",null,"商户简称："),d.default.createElement("div",null,t.mchntName||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"商户全称："),d.default.createElement("div",null,t.mchntFullName||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"注册登记号："),d.default.createElement("div",null,t.npwp||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"税务登记号："),d.default.createElement("div",null,t.cnpj||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"父商户号："),d.default.createElement("div",null,t.parentMchntId||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"法人姓名："),d.default.createElement("div",null,t.corpName||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"法人身份证号："),d.default.createElement("div",null,t.idtCard||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"营业执照号："),d.default.createElement("div",null,t.licId||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"营业执照有效期："),d.default.createElement("div",null,(0,p.default)(t.licValidity).format("YYYYMMDD")||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"营业地址："),d.default.createElement("div",null,""+(this.types(t.province)||"--")+(this.types(t.city)||"--")+(this.types(t.acdCode)||"--")||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"街道地址："),d.default.createElement("div",null,t.address||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"经营类目："),d.default.createElement("div",null,t.businessCategory||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"是否是持证商户："),d.default.createElement("div",null,t.isCert||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"联系人(负责人)名称："),d.default.createElement("div",null,t.mchntFullName||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"联系人(负责人)手机号："),d.default.createElement("div",null,t.telephone||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"客服电话："),d.default.createElement("div",null,t.serviceTel||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"电子邮箱："),d.default.createElement("div",null,t.email||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"商户性质："),d.default.createElement("div",null,t.natureOfTheBusiness||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"结算方式："),d.default.createElement("div",null,1===t.autoSettle?"自动结算(T+1)":null,2===t.autoSettle?"手工提现":null,6===t.autoSettle?"D+1":null))),d.default.createElement("div",{className:"btn"},d.default.createElement(o.default,{type:"primary",onClick:n},"编辑")))}},{key:"types",value:function(e){var t=(0,b.getPath)(y.default,"value"),n="";if(t&&t.forEach(function(t){if(e===(0,b.read)(y.default,t))return void(n=t)}),n)return(0,b.read)(y.default,n.replace(/value$/,"label"))}}]),t}(f.PureComponent);t.default=_;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register("YYYYMMDD","format","/Users/zhaoguoping/work/integrationPay_web/backstage/src/app/merchant/merchant-detail/components/base/index.js"),__REACT_HOT_LOADER__.register(_,"Base","/Users/zhaoguoping/work/integrationPay_web/backstage/src/app/merchant/merchant-detail/components/base/index.js"))}()},1035:function(e,t){},1036:function(e,t){},1037:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,c,f=n(130),d=a(f),s=function(){function e(e,t){var n=[],a=!0,l=!1,r=void 0;try{for(var u,i=e[Symbol.iterator]();!(a=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);a=!0);}catch(e){l=!0,r=e}finally{try{!a&&i.return&&i.return()}finally{if(l)throw r}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(159);var m=n(0),E=a(m),b=n(384),v=a(b),y=n(982),_=a(y),h=n(1038),g=n(1002),O=a(g);n(1040);var w=(o=(0,v.default)({onValuesChange:function(e,t){(0,e.updateForm)(t)},mapProps:function(e){return{formValues:e.data}}}))(c=function(e){function t(){var e,n,a,l;r(this,t);for(var i=arguments.length,o=Array(i),c=0;c<i;c++)o[c]=arguments[c];return n=a=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a.state={visible:!1,index:0},l=n,u(a,l)}return i(t,e),p(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.form,a=t.toEdit,l=this.state,r=l.visible,u=l.index,i=this.imgs();return E.default.createElement("div",{className:"add-merchant-electronic"},E.default.createElement("div",{className:"content"},E.default.createElement(O.default,{index:u,imgs:i.map(function(e){return s(e,1)[0]}),visible:r,onCancel:function(){e.setState({visible:!1})}}),i.map(function(t,a){var l=s(t,3),r=l[1],u=l[2];return E.default.createElement("div",{className:"item",key:a},E.default.createElement("label",null,h.labels[u]),n.getFieldDecorator(""+r,{valueKey:"showSrc"})(E.default.createElement(_.default,{disabled:!0,onClick:function(){e.setState({visible:!0,index:a})}})))})),E.default.createElement("div",{className:"btn"},E.default.createElement(d.default,{type:"primary",onClick:a},"编辑")))}},{key:"imgs",value:function(){var e=this.props.data;return h.fields.reduce(function(t,n,a){return e[n].showSrc?[].concat(l(t),[[e[n].showSrc,n,a]]):t},[])}}]),t}(m.PureComponent))||c;t.default=w;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(w,"Electronic","/Users/zhaoguoping/work/integrationPay_web/backstage/src/app/merchant/merchant-detail/components/electronic/index.js")}()},1038:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=t.fields=["businessLicense","risksAndInitiatives","addressNumber","businessApply","presentation","businessCondition","licenceForOpeningAccounts","merchantsDeal","idCardFront","idCardContrary","investigationApprovalOne","investigationApprovalTwo","sealOfAgreement","merchantsSign","tenancyContract","water","electricity","bankCardFront","bankCardContrary"],l=t.labels=["营业执照","风险及倡议提示书","核实照-地址门牌","业务申请表","情况说明","核实照-经营情况","开户许可证","商户协议-正面","法人身份证正面","法人身份证反面","调查与审批表1","调查与审批表2","协议盖章页","核实照-商户招牌","租赁合同","水费缴费单","电费缴费单","银行卡正面","银行卡反面"];!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"fields","/Users/zhaoguoping/work/integrationPay_web/backstage/src/app/merchant/merchant-detail/components/electronic/const.js"),__REACT_HOT_LOADER__.register(l,"labels","/Users/zhaoguoping/work/integrationPay_web/backstage/src/app/merchant/merchant-detail/components/electronic/const.js"))}()},1040:function(e,t){},1041:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(130),o=a(i),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(159);var f=n(0),d=a(f),s=n(1001),p=a(s);n(1042);var m=n(34),E=n(991),b=a(E),v=n(992),y=a(v),_={WX:"包含微信正扫、微信反扫、微信H5跳转支付",ZFB:"包含支付宝正扫、支付宝反扫",CMBC:"集成微信、支付宝、QQ钱包支付方式"},h=function(e){function t(){return l(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,a=t.toEdit;return d.default.createElement("div",{className:"detail-merchant-configure"},d.default.createElement("div",{className:"type"},d.default.createElement(p.default,null,"支付方式"),(n.paymentChannelInfoRequestList||[]).map(function(t,n){return d.default.createElement("div",{className:"type-item",key:n},d.default.createElement("div",{className:"title"},_[t.payWay]),d.default.createElement("div",{className:"body"},d.default.createElement("div",null,d.default.createElement("label",null,"商户类别:"),d.default.createElement("div",null,e.types(t.merchantType,t.payWay)||t.merchantType||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"商户费率:"),d.default.createElement("div",null,t.rate||"--"),d.default.createElement("span",null,"%")),d.default.createElement("div",null,d.default.createElement("label",null,"日限额:"),d.default.createElement("div",null,t.dayLimit||"--","分")),d.default.createElement("div",null,d.default.createElement("label",null,"月限额:"),d.default.createElement("div",null,t.monthLimit||"--","分")),d.default.createElement("div",null,d.default.createElement("label",null,"合作方费率:"),d.default.createElement("div",null,t.partnerRate||"--"),d.default.createElement("span",null,"%"))))})),d.default.createElement("div",{className:"account"},d.default.createElement(p.default,null,"结算账户信息"),d.default.createElement("div",null,d.default.createElement("label",null,"开户人："),d.default.createElement("div",null,n.accountHolder||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"开户行："),d.default.createElement("div",null,n.bank||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"支行："),d.default.createElement("div",null,n.bankName||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"结算账号（银行卡号）："),d.default.createElement("div",null,n.cardNumber||"--")),d.default.createElement("div",null,d.default.createElement("label",null,"银行行号："),d.default.createElement("div",null,n.pbcBankId)),d.default.createElement("div",null,d.default.createElement("label",null,"账户类型："),d.default.createElement("div",null,n.acctType?"thePublic"===n.acctType?"对公":"对私":"--"))),d.default.createElement("div",{className:"btn"},d.default.createElement(o.default,{type:"primary",onClick:a},"编辑")))}},{key:"types",value:function(e,t,n){var a=n||("WX"===t?b.default:y.default),l=(0,m.getPath)(a,"value"),r="";if(l&&l.forEach(function(t){e===(0,m.read)(a,t)&&(r=t)}),r)return(0,m.read)(a,r.replace(/value$/,"label"))}}]),t}(f.PureComponent);t.default=h;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"titles","/Users/zhaoguoping/work/integrationPay_web/backstage/src/app/merchant/merchant-detail/components/configure/index.js"),__REACT_HOT_LOADER__.register(h,"Configure","/Users/zhaoguoping/work/integrationPay_web/backstage/src/app/merchant/merchant-detail/components/configure/index.js"))}()},1042:function(e,t){},1043:function(e,t){},964:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(l,r){try{var u=t[l](r),i=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(i).then(function(e){a("next",e)},function(e){a("throw",e)});e(i)}return a("next")})}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,c,f=n(945),d=a(f),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(946);var m=n(0),E=a(m),b=n(111),v=n(112),y=n(978),_=a(y),h=n(1034),g=a(h),O=n(1037),w=a(O),k=n(1041),T=a(k),j=n(986);n(1043);var C=d.default.TabPane,P=(o=(0,b.connect)(function(e){var t=e.merchant;return{detail:t.detail,electronic:t.electronic}},function(e){return(0,v.bindActionCreators)({updateForm:j.updateForm,getById:j.getById},e)}))(c=function(e){function t(){var e,n,a,l;r(this,t);for(var i=arguments.length,o=Array(i),c=0;c<i;c++)o[c]=arguments[c];return n=a=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a.state={partners:[]},l=n,u(a,l)}return i(t,e),p(t,[{key:"render",value:function(){var e=this,t=this.props.detail;return E.default.createElement("div",{className:"merchant-detail"},E.default.createElement(_.default,null,E.default.createElement("span",{className:"merchant-detail-crumb"},"商户管理 / "),E.default.createElement("span",{className:"merchant-detail-crumb",onClick:function(){e.props.history.push("/app/merchant-list")}},"商户列表 / "),"商户详情"),E.default.createElement(d.default,null,E.default.createElement(C,{tab:"商户资料",key:0},E.default.createElement(g.default,{partners:this.state.partners,data:t,toEdit:function(){return e.toEdit(0)}})),E.default.createElement(C,{tab:"商户电子信息资料",key:1},E.default.createElement(w.default,{data:t,toEdit:function(){return e.toEdit(1)}})),E.default.createElement(C,{tab:"商户支付/结算信息配置",key:2},E.default.createElement(T.default,{data:t,toEdit:function(){return e.toEdit(2)}}))))}},{key:"toEdit",value:function(){function e(){return t.apply(this,arguments)}var t=l(regeneratorRuntime.mark(function e(){var t,n,a,l,r,u,i,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props,n=t.detail,a=t.updateForm,l=t.history,r=t.electronic,u=t.match.params,i={};for(o in r)i[o]=n[o];return e.next=5,a({key:["base","electronic","configure"],data:{electronic:i,base:s({},n,{id:u.id}),configure:s({},n,{id:u.id})}});case 5:l.push("/app/edit-merchant");case 6:case"end":return e.stop()}},e,this)}));return e}()},{key:"componentDidMount",value:function(){function e(){return t.apply(this,arguments)}var t=l(regeneratorRuntime.mark(function e(){var t,n,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props,n=t.getById,a=t.match.params,n(a.id);case 2:case"end":return e.stop()}},e,this)}));return e}()}]),t}(m.PureComponent))||c;t.default=P;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(C,"TabPane","/Users/zhaoguoping/work/integrationPay_web/backstage/src/app/merchant/merchant-detail/index.js"),__REACT_HOT_LOADER__.register(P,"MerchantDetail","/Users/zhaoguoping/work/integrationPay_web/backstage/src/app/merchant/merchant-detail/index.js"))}()}});