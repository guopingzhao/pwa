webpackJsonp([12],{1077:function(e,t){},976:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,u,d=a(130),i=n(d),c=a(236),f=n(c),p=a(939),w=n(p),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(159),a(113),a(940);var m=a(0),E=n(m),y=a(5),_=n(y),b=a(401),P=n(b),v=a(978),h=n(v),$=a(390),A=n($),O=a(238),z=n(O),F=a(34),N=a(132);a(1077);var C=w.default,k=(l=(0,$.create)({globalMaxError:1,globalErrorStop:!0}))(u=function(e){function t(){var e,a,n,o;s(this,t);for(var l=arguments.length,u=Array(l),d=0;d<l;d++)u[d]=arguments[d];return a=n=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.state={openEyes1:!0,openEyes2:!0,level:""},o=a,r(n,o)}return o(t,e),g(t,[{key:"render",value:function(){var e=this,t=this.props.form,a=this.state,n=a.openEyes1,s=a.openEyes2,r=a.level;return E.default.createElement("div",{className:"changePassword"},E.default.createElement(h.default,null,"修改密码"),E.default.createElement("div",{className:"bgFFF"},E.default.createElement("div",{className:"center-position"},E.default.createElement(A.default,null,E.default.createElement(z.default,{label:"旧密码："},t.getFieldDecorator("oldPassword",{rules:[{rule:"require",message:"请输入旧密码"}]})(E.default.createElement(f.default,{type:"password"}))),E.default.createElement(z.default,{label:"新密码："},t.getFieldDecorator("newPassword",{rules:[{rule:"require",message:"请输入新密码"}]})(E.default.createElement("div",null,E.default.createElement(f.default,{type:n?"password":"text",onChange:function(){var a=new RegExp("^(?![a-zA-z]+$)(?!\\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\\d!@#$%^&*]+$)[a-zA-Z\\d!@#$%^&*]+$","g"),n=new RegExp("^(?![a-zA-z]+$)(?!\\d+$)(?![!@#$%^&*]+$)[a-zA-Z\\d!@#$%^&*]+$","g"),s=new RegExp("^(?:\\d+|[a-zA-Z]+|[!@#$%^&*]+)$","g"),r=t.getFieldValue("newPassword");a.test(r)?e.setState({level:"强"}):n.test(r)?e.setState({level:"中"}):s.test(r)&&e.setState({level:"弱"})}}),E.default.createElement("span",{className:(0,_.default)({icon:!0,"icon-iconfont1":!n,"icon-biyan":n}),onClick:function(){e.setState({openEyes1:!e.state.openEyes1})}}),E.default.createElement("div",{className:(0,_.default)({nodate:""===r,showPwdPower:""!==r})},E.default.createElement("div",{className:(0,_.default)({part:!0,qiang:"强"===r,zhong:"中"===r,ruo:"弱"===r})},r))))),E.default.createElement(z.default,{label:"确认密码："},t.getFieldDecorator("sureNewPassword",{rules:[{rule:"require",message:"请输入确认密码"}]})(E.default.createElement("div",null,E.default.createElement(f.default,{type:s?"password":"text"}),E.default.createElement("span",{className:(0,_.default)({icon:!0,"icon-iconfont1":!s,"icon-biyan":s}),onClick:function(){e.setState({openEyes2:!e.state.openEyes2})}}))))),E.default.createElement(i.default,{className:"sureBtn",onClick:function(){t.setFields({},{oldPassword:[{message:""}]}),t.setFields({},{newPassword:[{message:""}]}),t.setFields({},{sureNewPassword:[{message:""}]}),t.validateFields(function(e,a){if(!e){if(a.newPassword!==a.sureNewPassword)return void t.setFields({},{sureNewPassword:[{message:"两次密码不一致"}]});a=(0,F.write)(a,"oldPassword",(0,P.default)((0,P.default)(a.oldPassword))),a=(0,F.write)(a,"newPassword",(0,P.default)((0,P.default)(a.newPassword))),(0,N.changePassword)(a).then(function(e){var a=e.eCode,n=e.message;9===a&&t.setFields({},{oldPassword:[{message:n}]}),a||(C.success("修改成功，请重新登录"),setTimeout("location.href = '/#/'",1500))})}})}},"确 定"))))}}]),t}(m.PureComponent))||u;t.default=k;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(C,"messageAntd","/Users/zhaoguoping/work/integrationPay_web/backstage/src/app/system/changePwd/index.js"),__REACT_HOT_LOADER__.register(k,"ChangePwd","/Users/zhaoguoping/work/integrationPay_web/backstage/src/app/system/changePwd/index.js"))}()}});