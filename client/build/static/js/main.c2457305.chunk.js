(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/Logo.dfab9e19.png"},33:function(e,t,a){e.exports=a(64)},38:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(30),r=a.n(c),o=(a(38),a(2)),i=a(8),s=a(10),m=a(12),u=a(7),b=function(e){var t=e.classes,a=e.children;return l.a.createElement("div",{className:"container ".concat(t)},a)},E=function(e){var t=e.classes,a=e.children;return l.a.createElement("div",{className:"row ".concat(t)},a)},d=function(e){var t=e.size,a=e.classes,n=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-".concat(e)}).join(" ")+" "+a},n)},f=function(e){var t=e.navState,a=e.children,n=e.id,c=t?"navbar-collapse collapse show":"navbar-collapse collapse";return l.a.createElement("div",{className:c,id:n},a)};function p(e){return l.a.createElement("input",Object.assign({className:"form-control"},e))}function g(e){return l.a.createElement("button",Object.assign({className:e.classes},e))}function v(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),c=t[0],r=t[1],i=function(e){var t=e.target,a=t.name,n=t.value;r(Object(m.a)({},c,Object(s.a)({},a,n)))};return l.a.createElement(b,null,l.a.createElement(E,null,l.a.createElement(d,{size:"md-4"}),l.a.createElement(d,{size:"md-4"},l.a.createElement(E,null,l.a.createElement("div",{className:"mt-5"},l.a.createElement("h5",{style:w},l.a.createElement("img",{style:h,src:a(19),alt:"Logo"}),"Log-in to your account"))),l.a.createElement(E,null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),e.target.reset()},className:"card-body"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email:"),l.a.createElement(p,{onChange:i,name:"email",type:"email",placeholder:"E-mail address"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password:"),l.a.createElement(p,{onChange:i,name:"password",type:"password",placeholder:"Password"})),l.a.createElement(g,{classes:"btn btn-primary btn-lg btn-block",type:"submit"},"Log In"))),l.a.createElement(E,{classes:"justify-content-center"},l.a.createElement("p",null," New here?",l.a.createElement(o.b,{to:"/signup"}," Sign up.")))),l.a.createElement(d,{size:"md-4"})))}var h={width:"100px",height:"auto"},w={color:"#a1deb6",textShadow:"1px 1px #000"};function y(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),c=t[0],r=t[1],i=function(e){var t=e.target,a=t.name,n=t.value;r(Object(m.a)({},c,Object(s.a)({},a,n)))};return l.a.createElement(b,null,l.a.createElement(E,null,l.a.createElement(d,{size:"md-4"}),l.a.createElement(d,{size:"md-4"},l.a.createElement(E,null,l.a.createElement("div",{className:"mt-5"},l.a.createElement("h5",{style:j},l.a.createElement("img",{style:N,src:a(19),alt:"Logo"}),"Create your account"))),l.a.createElement(E,null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),e.target.reset()},className:"card-body"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email:"),l.a.createElement(p,{onChange:i,name:"email",type:"email",placeholder:"E-mail address"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password:"),l.a.createElement(p,{onChange:i,name:"password",type:"password",placeholder:"Password"})),l.a.createElement(g,{classes:"btn btn-primary btn-lg btn-block",type:"submit"},"Sign Up"))),l.a.createElement(E,{classes:"justify-content-center"},l.a.createElement("p",null," Already have an account?",l.a.createElement(o.b,{to:"/"}," Log In.")))),l.a.createElement(d,{size:"md-4"})))}var N={width:"100px",height:"auto"},j={color:"#a1deb6",textShadow:"1px 1px #000"};function k(){return l.a.createElement(b,null)}var x=a(17),O=a.n(x);a(29).config();var S={getDrugs:function(){return O.a.get("/api/drugs")},getDrugInfo:function(){return O.a.get("https://www.dictionaryapi.com/api/v3/references/medical/json/cetirizine?key=".concat("f57f85fe-8b49-4bf7-a104-d906698dec04"))}};var L=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0];return t[1],Object(n.useEffect)(function(){S.getDrugInfo().then(function(e){return console.log(e.data)}).catch(function(e){return console.log(e)})},[]),l.a.createElement("p",null,a)};function P(){return l.a.createElement(b,null,l.a.createElement("div",{class:"col-lg-6",id:"profileButtons"},l.a.createElement("button",{type:"button",class:"btn btn-info btn-lg btn-block"},"Profile 1"),l.a.createElement("button",{type:"button",class:"btn btn-info btn-lg btn-block"},"Profile 2"),l.a.createElement("button",{type:"button",class:"btn btn-info btn-lg btn-block"},"Profile 3"),l.a.createElement("button",{type:"button",class:"btn btn-info btn-lg btn-block"},"Profile 4"),l.a.createElement("button",{type:"button",class:"btn btn-info btn-lg btn-block"},"Profile 5")))}function z(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(i.e)().pathname;return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(o.b,{to:"/",className:"navbar-brand"},l.a.createElement("em",null,"my"),"ERH"),l.a.createElement("button",{onClick:function(){return c(a=!a)},className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#target-collapse"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement(f,{navState:a,id:"target-collapse"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"/"===r?"nav-item active":"nav-item"},l.a.createElement(o.b,{to:"/",className:"nav-link"},"Home")),l.a.createElement("li",{className:"/profiles"===r?"nav-item active":"nav-item"},l.a.createElement(o.b,{to:"/profiles",className:"nav-link"},"profiles")),l.a.createElement("li",{className:"/medications"===r?"nav-item active":"nav-item"},l.a.createElement(o.b,{to:"/medications",className:"nav-link"},"medications")),l.a.createElement("li",{className:"/contacts"===r?"nav-item active":"nav-item"},l.a.createElement(o.b,{to:"/contacts",className:"nav-link"},"contacts"))),l.a.createElement("div",null,l.a.createElement(g,{classes:"btn btn-outline-primary m-2",type:"button"},"Log In"),l.a.createElement(g,{classes:"btn btn-outline-primary m-2",type:"button"},"Sign Up"))))}a(62),a(63);var C=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(z,null),l.a.createElement(i.a,{exact:!0,path:"/"}," ",l.a.createElement(v,null)," "),l.a.createElement(i.a,{exact:!0,path:"/signUp"}," ",l.a.createElement(y,null)," "),l.a.createElement(i.a,{exact:!0,path:"/profiles"}," ",l.a.createElement(P,null)," "),l.a.createElement(i.a,{exact:!0,path:"/userInfo"}," ",l.a.createElement(k,null)," "),l.a.createElement(i.a,{exact:!0,path:"/medications"}," ",l.a.createElement(L,null)," ")))},I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(29).config(),r.a.render(l.a.createElement(C,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");I?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):D(e)})}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.c2457305.chunk.js.map