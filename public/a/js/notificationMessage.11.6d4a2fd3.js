webpackJsonp([11],{1078:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.column=void 0;var l=a(0),r=n(l),o=a(20),i=n(o),u=t.column=[{title:"通知内容标题",dataIndex:"title",key:"title"},{title:"内容概览",dataIndex:"content",key:"content",render:function(e){var t=e.content;return r.default.createElement("div",{className:"maxFontNum15",title:t},t)}},{title:"发布时间",key:"updateTime",render:function(e){var t=e.updateTime;return r.default.createElement("div",null,r.default.createElement("span",null,t?(0,i.default)(t).format("YYYY-MM-DD HH:mm:ss"):"--"))}},{title:"通知消息状态",dataIndex:"publish",key:"publish",render:function(e){var t=e.publish;return r.default.createElement("div",null,t?r.default.createElement("span",{className:"released"},"已发布"):r.default.createElement("span",{className:"unreleased"},"未发布"))}}];!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(u,"column","/Users/zhaoguoping/work/integrationPay_web/backstage/src/app/notification-message/const.js")}()},1079:function(e,t){},977:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,c,d,s=a(941),f=n(s),m=a(939),p=n(m),h=a(943),E=n(h),g=a(236),v=n(g),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},b=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(942),a(940),a(944),a(113);var y=a(0),w=n(y),S=a(111),C=a(112),M=a(1005),O=n(M),k=a(983),N=n(k),A=a(390),R=n(A),x=a(238),T=n(x),P=a(980),F=n(P),j=a(979),D=n(j),z=a(405),q=a(404),H=a(1078),I=a(34);a(1079);var L=(u=(0,S.connect)(function(e){return{list:e.notificationMessage.data}},function(e){return(0,C.bindActionCreators)({page:q.page},e)}),c=(0,A.create)({globalMaxError:1,globalErrorStop:!0}),u(d=c(d=function(e){function t(){var e,a,n,l;r(this,t);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return a=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.state={addModal:!1,editModal:!1,delModal:!1,detailModal:!1,query:{page:0,pageSize:10,condition:""},visible:!1,x:0,y:0,currentChoose:{operate:[]},onload:!1,selectRow:{}},n.search=function(){var e;return(e=n).__search__REACT_HOT_LOADER__.apply(e,arguments)},n.columns=H.column.concat({title:"操作",key:"caozuo",render:function(e){return w.default.createElement("div",{className:"more-box",onClick:function(t){var a=t.target,l=a.getBoundingClientRect(),r=l.left,o=l.top,i=l.width,u={};u=e.publish?{operate:["详情","删除"],data:e}:{operate:["发布","编辑","详情","删除"],data:e},n.setState({x:r+i/2,y:o,currentChoose:u,visible:!0})}},w.default.createElement("span",{className:"icon icon-gengduo"}))}}),l=a,o(n,l)}return i(t,e),b(t,[{key:"__search__REACT_HOT_LOADER__",value:function(){this.setState({onload:!1}),this.props.page(this.state.query)}},{key:"render",value:function(){var e=this,t=this.state,a=t.query,n=t.addModal,r=t.editModal,o=t.delModal,i=t.detailModal,u=t.currentChoose,c=t.onload,d=t.selectRow,s=this.props,m=s.list,h=void 0===m?{content:[]}:m,g=s.form;return w.default.createElement("div",{className:"notification-message"},w.default.createElement("div",{className:"add-header"},w.default.createElement("div",null,w.default.createElement(O.default,{text:"新增消息通知",onClick:function(){e.setState({addModal:!0})}}),w.default.createElement("p",{className:"show-p-tip"},"发布的系统通知将展示在商户管理后台的商户中心")),w.default.createElement("div",{className:"search-box"},w.default.createElement("div",null,w.default.createElement(v.default,{onChange:function(t){e.setState({query:(0,I.write)(a,"condition",t.target.value)})},placeholder:"标题，内容搜索"}),w.default.createElement("div",{onClick:function(){e.setState({query:(0,I.write)(a,"page",0)},function(){return e.search()})}},"搜 索")))),c?w.default.createElement("div",{className:"table"},w.default.createElement(N.default,{dataSource:h.content,column:this.columns,isShowFalseValue:!1,selectRow:d,onClick:function(t){var a=t.data,n=t.index;d[n]?e.setState({selectRow:{}}):e.setState({selectRow:l({},n,a)})}}),w.default.createElement("div",{className:"flexd-div-page"},w.default.createElement("div",null,"当前页共",h.content.length,"项"),w.default.createElement(D.default,{showSizeChange:!0,selectSizeFormat:"每页{}条",showJump:!0,showTotal:!0,total:h.totalPages,showtotalElements:!0,elements:h.totalElements,current:a.page+1,pageSize:a.pageSize,onChange:function(t,n){e.setState({query:(0,I.write)(a,["page","pageSize"],{page:t-1,pageSize:n})},function(){return e.search()})},sizeAry:[5,10,20,50]}))):w.default.createElement("div",{className:"spin-box"},w.default.createElement(E.default,{tip:"加载中...",size:"large",spinning:!0})),w.default.createElement(F.default,{x:this.state.x-46,y:this.state.y+20,visible:this.state.visible,menus:u.operate,width:100,itemClick:function(t){var a=t.menu;"编辑"===a&&(e.props.form.setFields(u.data),e.setState({editModal:!0})),"详情"===a&&e.setState({detailModal:!0}),"发布"===a&&(0,z.pushNotificationAPI)(u.data.id).then(function(t){t.eCode?p.default.error("发布失败"):(p.default.success("发布成功"),e.search())}),"删除"===a&&e.setState({delModal:!0})},onCancel:function(){e.setState({visible:!1})}}),n&&w.default.createElement(f.default,{title:"新增消息通知",wrapClassName:"add-notice",visible:n,onOk:function(){g.validateFields(function(t,n){t||(0,z.addNotificationAPI)(n).then(function(t){t.eCode?p.default.error("操作失败"):(p.default.success("操作成功"),e.setState({addModal:!1,query:(0,I.write)(a,"page",0)},function(){return e.search()}),g.resetFields())})})},onCancel:function(){e.setState({addModal:!1}),g.resetFields()}},w.default.createElement(R.default,null,w.default.createElement(T.default,{label:"标题"},g.getFieldDecorator("title",{rules:[{rule:"require",message:"请输入标题"},{rule:/^\S{0,20}$/,message:"最多20个的非空字符！"}]})(w.default.createElement(v.default,{placeholder:"不超过20个字"}))),w.default.createElement(T.default,{label:"通知消息内容"},g.getFieldDecorator("content",{rules:[{rule:"require",message:"请输入消息通知内容"}]})(w.default.createElement(v.default.TextArea,{rows:6}))))),r&&w.default.createElement(f.default,{title:"编辑消息通知",wrapClassName:"add-notice",visible:r,onOk:function(){g.validateFields(function(t,a){t||(0,z.updateNotificationAPI)(_({id:u.data.id},a)).then(function(t){t.eCode?p.default.error("操作失败"):(p.default.success("操作成功"),e.setState({editModal:!1},function(){return e.search()}),g.resetFields())})})},onCancel:function(){e.setState({editModal:!1}),g.resetFields()}},w.default.createElement(R.default,null,w.default.createElement(T.default,{label:"标题"},g.getFieldDecorator("title",{rules:[{rule:"require",message:"请输入标题"},{rule:/^\S{0,20}$/,message:"最多20个的非空字符！"}]})(w.default.createElement(v.default,{placeholder:"不超过20个字"}))),w.default.createElement(T.default,{label:"通知消息内容"},g.getFieldDecorator("content",{rules:[{rule:"require",message:"请输入通知消息内容"}]})(w.default.createElement(v.default.TextArea,{row:6}))))),o&&w.default.createElement(f.default,{title:"删除消息通知",width:400,visible:o,onOk:function(){(0,z.delNotificationAPI)(u.data.id).then(function(t){t.eCode?p.default.error("操作失败"):(p.default.success("操作成功"),e.setState({delModal:!1},function(){return e.search()}))})},onCancel:function(){e.setState({delModal:!1})}},w.default.createElement("div",{className:"warn-content"},w.default.createElement("p",null,"是否删除消息通知",u.data.title))),i&&w.default.createElement(f.default,{title:"消息通知详情",width:600,visible:i,onOk:function(){e.setState({detailModal:!1})},onCancel:function(){e.setState({detailModal:!1})}},w.default.createElement("div",{className:"detail-modal"},w.default.createElement("div",null,w.default.createElement("p",null,"标题："),w.default.createElement("p",null,u.data.title)),w.default.createElement("div",null,w.default.createElement("p",null,"消息通知内容："),w.default.createElement("p",null,u.data.content)))))}},{key:"componentWillReceiveProps",value:function(e){e.list!==this.props.list&&this.setState({onload:!0})}},{key:"componentDidMount",value:function(){this.search()}}]),t}(y.PureComponent))||d)||d);t.default=L;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(L,"NotificationMessage","/Users/zhaoguoping/work/integrationPay_web/backstage/src/app/notification-message/index.js")}()}});