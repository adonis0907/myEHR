(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,a,t){e.exports=t.p+"static/media/Logo.dfab9e19.png"},36:function(e,a,t){e.exports=t(70)},41:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(32),c=t.n(r),s=(t(41),t(3)),o=t(11),m=function(e){var a=e.classes,t=e.children;return l.a.createElement("div",{className:"container ".concat(a)},t)},i=function(e){var a=e.classes,t=e.children;return l.a.createElement("div",{className:"row ".concat(a)},t)},u=function(e){var a=e.size,t=e.classes,n=e.children;return l.a.createElement("div",{className:a.split(" ").map(function(e){return"col-".concat(e)}).join(" ")+" "+t},n)},d=function(e){var a=e.navState,t=e.children,n=e.id,r=a?"navbar-collapse collapse show":"navbar-collapse collapse";return l.a.createElement("div",{className:r,id:n},t)};function E(e){return l.a.createElement("input",Object.assign({className:"form-control"},e))}function f(e){return l.a.createElement("textarea",Object.assign({className:"form-control"},e))}function g(e){return l.a.createElement("button",e,e.children)}function p(){return l.a.createElement(m,null,l.a.createElement("div",{class:"jumbotron"},l.a.createElement("h1",{class:"display-4"},"My EHR"),l.a.createElement("p",{class:"lead"},"All your medical records in one place."),l.a.createElement("hr",{class:"my-4"}),l.a.createElement("p",null),l.a.createElement("a",{class:"btn btn-primary btn-lg",href:"../SignUp",role:"button"},"Get Started")))}var v=t(8),b=t(10),h=t(1),y=t(12),N=t.n(y);t(29).config();var w="f57f85fe-8b49-4bf7-a104-d906698dec04",z={getDrugs:function(){return N.a.get("/api/drugs")},getDrugInfo:function(){return N.a.get("https://www.dictionaryapi.com/api/v3/references/medical/json/cetirizine?key=".concat(w))},getConditionNames:function(e){return N.a.get("https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=".concat(e,"&sf=primary_name,consumer_name&df=primary_name,consumer_name,info_link_data")).catch(function(e){return console.log(e)})},fetchCondition:function(e){return N.a.get("https://www.dictionaryapi.com/api/v3/references/medical/json/".concat(e,"?key=").concat(w)).catch(function(e){return console.log(e)})},updateEHR:function(e,a){return new Promise(function(e,a){e({status:"success"})})},fetchUser:function(){return{email:"example@example.com",_id:"123456789"}},fetchProfile:function(){return N.a.get("/load")},register:function(e){var a=e.email,t=e.password;return N.a.post("/register",{email:a,password:t})},login:function(e){var a=e.email,t=e.password;return N.a.post("/login",{email:a,password:t})}};function x(){var e=Object(o.e)(),a=Object(n.useState)({}),r=Object(h.a)(a,2),c=r[0],d=r[1],f=function(e){var a=e.target,t=a.name,n=a.value;d(Object(b.a)({},c,Object(v.a)({},t,n)))};return l.a.createElement(m,{classes:"box-shadow sign"},l.a.createElement(i,null,l.a.createElement(u,{size:"md-12"},l.a.createElement(i,null,l.a.createElement("div",{className:"mt-5"},l.a.createElement("h5",{style:C},l.a.createElement("img",{style:k,src:t(31),alt:"Logo"}),"Log-in to your account"))),l.a.createElement(i,null,l.a.createElement("form",{onSubmit:function(a){a.preventDefault(),a.target.reset(),z.login(c).then(function(a){a.data.success&&(localStorage.setItem("JWT",a.data.token),e.push("/"))}).catch(function(e){return e})},className:"card-body"},l.a.createElement("div",{className:"form-group usr-inpt"},l.a.createElement("label",null,"Email:"),l.a.createElement("span",{className:"fa fa-user"}),l.a.createElement(E,{onChange:f,name:"email",type:"email",placeholder:"E-mail address"})),l.a.createElement("div",{className:"form-group usr-inpt"},l.a.createElement("label",null,"Password:"),l.a.createElement("span",{className:"fa fa-lock"}),l.a.createElement(E,{onChange:f,name:"password",type:"password",placeholder:"Password"})),l.a.createElement(g,{className:"btn btn-primary btn-lg btn-block",type:"submit"},"Log In"))),l.a.createElement(i,{classes:"justify-content-center"},l.a.createElement("p",null," New here?",l.a.createElement(s.b,{to:"/signup"}," Sign up."))))))}var k={width:"100px",height:"auto"},C={color:"#a1deb6",textShadow:"1px 1px #000"};function O(){var e=Object(n.useState)({}),a=Object(h.a)(e,2),r=a[0],c=a[1],o=function(e){var a=e.target,t=a.name,n=a.value;c(Object(b.a)({},r,Object(v.a)({},t,n)))};return l.a.createElement(m,{classes:"box-shadow sign"},l.a.createElement(i,null,l.a.createElement(u,{size:"md-12"},l.a.createElement(i,null,l.a.createElement("div",{className:"mt-5"},l.a.createElement("h5",{style:j},l.a.createElement("img",{style:S,src:t(31),alt:"Logo"}),"Create your account"))),l.a.createElement(i,null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(r),z.register(r).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},className:"card-body"},l.a.createElement("div",{className:"form-group usr-inpt"},l.a.createElement("label",null,"Email:"),l.a.createElement("span",{className:"fa fa-user"}),l.a.createElement(E,{onChange:o,name:"email",type:"email",placeholder:"E-mail address"})),l.a.createElement("div",{className:"form-group usr-inpt"},l.a.createElement("label",null,"Password:"),l.a.createElement("span",{className:"fa fa-lock"}),l.a.createElement(E,{onChange:o,name:"password",type:"password",placeholder:"Password"})),l.a.createElement(g,{className:"btn btn-primary btn-lg btn-block",type:"submit"},"Sign Up"))),l.a.createElement(i,{classes:"justify-content-center"},l.a.createElement("p",null," Already have an account?",l.a.createElement(s.b,{to:"/SignIn"}," Log In."))))))}var S={width:"100px",height:"auto"},j={color:"#a1deb6",textShadow:"1px 1px #000"},P=t(35),D=t(6),A=t.n(D),B=t(14);function I(e){var a=e.data,t=e.target,n=e.editState,r=e.toggleState,c=e.formSubmit;return n?l.a.createElement("div",{className:"mt-5"},l.a.createElement(u,{size:"md-12"},l.a.createElement(g,{className:"fas fa-backspace fa-2x",style:F,onClick:r})),l.a.createElement("form",{onSubmit:c},l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"First Name"),l.a.createElement(E,{value:a.firstName,name:"firstName",style:T,onChange:t})),l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Last Name"),l.a.createElement(E,{value:a.lastName,name:"lastName",style:T,onChange:t})),l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Nickname"),l.a.createElement(E,{value:a.nickname,name:"nickname",style:T,placeholder:"e.g. 'Mom'",onChange:t}))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Address Line 1"),l.a.createElement(E,{value:a.addressOne,name:"addressOne",style:T,onChange:t}),"                    "),l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Address Line 2"),l.a.createElement(E,{value:a.addressTwo,name:"addressTwo",style:T,onChange:t}))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-3",classes:"form-group"},l.a.createElement("label",null,"City"),l.a.createElement(E,{value:a.city,name:"city",style:T,onChange:t})),l.a.createElement(u,{size:"md-3",classes:"form-group"},l.a.createElement("label",null,"State/Providence"),l.a.createElement(E,{value:a.state,name:"state",style:T,onChange:t})),l.a.createElement(u,{size:"md-3",classes:"form-group"},l.a.createElement("label",null,"Zip/Postal Code"),l.a.createElement(E,{value:a.zip,name:"zip",style:T,onChange:t})),l.a.createElement(u,{size:"md-3",classes:"form-group"},l.a.createElement("label",null,"Country"),l.a.createElement(E,{value:a.country,name:"country",style:T,onChange:t}))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Phone Number"),l.a.createElement(E,{value:a.phone,name:"phone",style:T,onChange:t})),l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Email"),l.a.createElement(E,{value:a.email,name:"email",style:T,onChange:t}))),l.a.createElement(u,{size:"md-12"},l.a.createElement(g,{className:"btn",style:U,type:"submit"}," ",l.a.createElement("i",{className:"fas fa-sync-alt fa-2x mr-2"})," "," "," "," update")))):l.a.createElement("div",{className:"mt-5 gen-info"},l.a.createElement(u,{size:"md-12",classes:"gen-edit"},l.a.createElement(g,{className:"fas fa-user-edit fa-2x",style:R,onClick:r})),l.a.createElement("form",null,l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"First Name:"),l.a.createElement("div",{style:L},a.firstName)),l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Last Name:"),l.a.createElement("div",{style:L},a.lastName)),l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Nickname:"),l.a.createElement("div",{style:L},a.nickname))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Address line 1:"),l.a.createElement("div",{style:L},a.addressOne)),l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Address line 2:"),l.a.createElement("div",{style:L},a.addressTwo))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-3",classes:"form-group"},l.a.createElement("label",null,"City:"),l.a.createElement("div",{style:L},a.city)),l.a.createElement(u,{size:"md-3",classes:"form-group"},l.a.createElement("label",null,"State/Providence:"),l.a.createElement("div",{style:L},a.state)),l.a.createElement(u,{size:"md-3",classes:"form-group"},l.a.createElement("label",null,"Zip/Postal Code:"),l.a.createElement("div",{style:L},a.zip)),l.a.createElement(u,{size:"md-3",classes:"form-group"},l.a.createElement("label",null,"Country:"),l.a.createElement("div",{style:L},a.country))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Phone Number:"),l.a.createElement("div",{style:L},a.phone)),l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Email:"),l.a.createElement("div",{style:L},a.email)))))}var L={fontStyle:"italic",fontWeight:"1000",fontSize:"100%",padding:"10px",paddingLeft:"0",color:"black"},R={float:"right",border:"none",margin:"0",color:"white",backgroundColor:"white"},F={float:"right",border:"none",margin:"0",color:"tomato",backgroundColor:"white"},U={float:"right",margin:"0",backgroundColor:"#214c91",color:"white"},T={borderBottom:"1px solid rgba(0, 0, 0, .2)",transition:"all 0.30s ease-in-out"};function W(e){var a,t=e.data,n=e.target,r=e.editState,c=e.toggleState,s=e.formSubmit,o=function(e){var a=new Date,t=new Date(e),n=a.getMonth()-t.getMonth(),l=isNaN(l)?"??":a.getFullYear()-t.getFullYear();return n<0||0===n&&a.getDate()<t.getDate()?l-1:l};return r?l.a.createElement("div",{className:"mt-5"},l.a.createElement(u,{size:"md-12"},l.a.createElement(g,{className:"fas fa-backspace fa-2x",style:M,onClick:c})),l.a.createElement("form",{onSubmit:s},l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Date of Birth"),l.a.createElement(E,{name:"dob",placeholder:"MM/DD/YYYY",value:t.dob,style:J,onChange:n})),l.a.createElement(u,{size:"md-2",classes:"form-group"},l.a.createElement("label",null,"Age"),l.a.createElement("div",{style:_},o("06/12/1929"))),l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Blood Type"),l.a.createElement("select",{style:J,name:"bloodType",class:"form-control"},(a=t.bloodType,["Unknown","A-Positive","A-Negative","B-Positive","B-Negative","AB-Positive","AB-Negative","O-Positive","O-Negative"].map(function(e){return e===a?l.a.createElement("option",{selected:!0},a):l.a.createElement("option",null,e)}))))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Insurance Plan"),l.a.createElement(E,{value:t.insurance,name:"insurance",style:J,onChange:n})),l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Number"),l.a.createElement(E,{value:t.insNumber,name:"insNumber",style:J,onChange:n})),l.a.createElement(u,{size:"md-2",classes:"form-group"},l.a.createElement("label",null,"Rx BIN"),l.a.createElement(E,{value:t.rxBin,name:"rxBin",style:J,onChange:n})),l.a.createElement(u,{size:"md-2",classes:"form-group"},l.a.createElement("label",null,"Rx PCN"),l.a.createElement(E,{value:t.rxPcn,name:"rcPcn",style:J,onChange:n}))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Allergies"),l.a.createElement(f,{value:t.allergies,name:"allergies",style:J,onChange:n})),l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Immunizations (include dates received)"),l.a.createElement(f,{value:t.immunizations,name:"immunizations",style:J,onChange:n}))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Family History & Other Notes"),l.a.createElement(f,{value:t.notes,name:"notes",style:J,onChange:n}))),l.a.createElement(u,{size:"md-12"},l.a.createElement(g,{className:"btn",style:Y,type:"submit"}," ",l.a.createElement("i",{className:"fas fa-sync-alt fa-2x mr-2"})," "," "," "," update")))):l.a.createElement("div",{className:"mt-5 health-info"},l.a.createElement(u,{size:"md-12",classes:"gen-edit"},l.a.createElement(g,{className:"fas fa-user-edit fa-2x",style:H,onClick:c})),l.a.createElement("form",null,l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Date of Birth:"),l.a.createElement("div",{style:_},t.dob)),l.a.createElement(u,{size:"md-2",classes:"form-group"},l.a.createElement("label",null,"Age:"),l.a.createElement("div",{style:_},o(t.dob))),l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Blood Type:"),l.a.createElement("div",{style:_},t.bloodType))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Insurance Plan:"),l.a.createElement("div",{style:_},t.insurance)),l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Number:"),l.a.createElement("div",{style:_},t.insNumber)),l.a.createElement(u,{size:"md-2",classes:"form-group"},l.a.createElement("label",null,"Rx BIN:"),l.a.createElement("div",{style:_},t.rxBin)),l.a.createElement(u,{size:"md-2",classes:"form-group"},l.a.createElement("label",null,"Rx PCN:"),l.a.createElement("div",{style:_},t.rxPcn))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Allergies:"),l.a.createElement("div",{style:_},t.allergies)),l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Immunizations (include dates received):"),l.a.createElement("div",{style:_},t.immunizations))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Family History & Other Notes:"),l.a.createElement("div",{style:_},t.notes)))))}var _={fontStyle:"italic",fontWeight:"1000",fontSize:"100%",padding:"10px",paddingLeft:"0",color:"black"},H={float:"right",border:"none",margin:"0",color:"white",backgroundColor:"white"},M={float:"right",border:"none",margin:"0",color:"tomato",backgroundColor:"white"},Y={float:"right",margin:"0",backgroundColor:"#214c91",color:"white"},J={borderBottom:"1px solid rgba(0, 0, 0, .2)",transition:"all 0.30s ease-in-out"};function q(e){var a=e.data,t=e.target,n=e.editState,r=e.toggleState,c=e.formSubmit,s=e.renderSuggestions,o=e.text,m=e.toggleDescState,i=e.editDescState;var d=function(e){return e.length>250?e.length/100:3};return!n&&0!==a.length||i?i?l.a.createElement("div",{className:"mt-5"},l.a.createElement(u,{size:"md-12"},l.a.createElement(g,{className:"fas fa-backspace fa-2x",style:K,onClick:r})),l.a.createElement("form",{onSubmit:c},l.a.createElement("div",{className:"form-row",style:{background:"white"}},l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Add New Condition"),l.a.createElement("div",null,l.a.createElement(E,{type:"text",style:G,value:o,onChange:t}),s())),l.a.createElement(u,{size:"md-3"},l.a.createElement(g,{className:"btn",style:Q,type:"submit"}," ",l.a.createElement("i",{className:"fa fa-plus fa-2x mr-2"})," "," Add"))),l.a.createElement("div",{className:"form-row"},function(e){var a=this;return console.log(e),e.map(function(e,t){return l.a.createElement(u,{key:t,size:"md-12",classes:"form-group"},l.a.createElement("label",{style:Z},e.name," "," ",l.a.createElement(g,{className:"fas fa-pen",style:{border:"none"},onClick:m.bind(a,t)}),l.a.createElement(g,{className:"fas fa-times",style:X,onClick:r}),l.a.createElement(g,{className:"fas fa-sync-alt",style:V,onClick:r})),l.a.createElement("form",null,l.a.createElement(f,{value:e.description,name:"desc",rows:d(e.description),style:G})))})}(a)))):l.a.createElement("div",{className:"mt-5 condition-info"},l.a.createElement(u,{size:"md-12",classes:"condition-edit"},l.a.createElement(g,{className:"fas fa-user-edit fa-2x",style:$,onClick:r})),l.a.createElement("form",null,l.a.createElement("div",{className:"form-row"},function(e){return e.map(function(e,a){return l.a.createElement(u,{key:a,size:"md-12",classes:"form-group"},l.a.createElement("label",{style:Z},e.name," "),l.a.createElement("div",null,e.description))})}(a)))):l.a.createElement("div",{className:"mt-5"},l.a.createElement(u,{size:"md-12"},l.a.createElement(g,{className:"fas fa-backspace fa-2x",style:K,onClick:r})),l.a.createElement("form",{onSubmit:c},l.a.createElement("div",{className:"form-row",style:{background:"white"}},l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Add New Condition"),l.a.createElement("div",null,l.a.createElement(E,{type:"text",style:G,value:o,onChange:t}),s())),l.a.createElement(u,{size:"md-3"},l.a.createElement(g,{className:"btn",style:Q,type:"submit"}," ",l.a.createElement("i",{className:"fa fa-plus fa-2x mr-2"})," "," Add"))),l.a.createElement("div",{className:"form-row"},a.map(function(e,a){return l.a.createElement(u,{key:a,size:"md-12",classes:"form-group"},l.a.createElement("label",{style:Z},e.name," "," ",l.a.createElement(g,{className:"fas fa-pen",style:{border:"none"},onClick:m}),l.a.createElement(g,{className:"fas fa-times",style:X,onClick:r})),l.a.createElement("div",null,e.description))}))))}var Z={fontStyle:"italic",fontWeight:"1000",fontSize:"100%",padding:"10px",paddingLeft:"0",color:"black"},G={borderBottom:"1px solid rgba(0, 0, 0, .2)",transition:"all 0.30s ease-in-out"},$={float:"right",border:"none",margin:"0",color:"white",backgroundColor:"white"},K={float:"right",border:"none",margin:"0",color:"tomato",backgroundColor:"white"},Q={marginTop:"30px",color:"#214c91",focus:"none",size:"10em"},V={border:"none",color:"#214c91"},X={border:"none",color:"red"};function ee(e){var a=e.usrId,t=Object(n.useState)({}),r=Object(h.a)(t,2),c=r[0],s=r[1],o=Object(n.useState)({}),d=Object(h.a)(o,2),E=d[0],f=d[1],g=Object(n.useState)([]),p=Object(h.a)(g,2),y=p[0],N=p[1],w=Object(n.useState)(!1),x=Object(h.a)(w,2),k=x[0],C=x[1],O=Object(n.useState)(!1),S=Object(h.a)(O,2),j=S[0],D=S[1],L=Object(n.useState)(!1),R=Object(h.a)(L,2),F=R[0],U=R[1],T=Object(n.useState)(!1),_=Object(h.a)(T,2),H=_[0],M=_[1],Y=Object(n.useState)([]),J=Object(h.a)(Y,2),Z=J[0],G=J[1],$=Object(n.useState)(""),K=Object(h.a)($,2),Q=(K[0],K[1],function(){var e=Object(B.a)(A.a.mark(function e(a){var t,n,l,r;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.target.value,e.next=3,V(t);case 3:n=e.sent,l=[],t.length>0&&(r=new RegExp("^".concat(t),"i"),l=n.sort().filter(function(e){return r.test(e)})),G({suggestions:l,text:t});case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()),V=function(){var e=Object(B.a)(A.a.mark(function e(a){var t,n;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.getConditionNames(a);case 2:return t=e.sent,n=t.data,e.abrupt("return",n[3].map(function(e){return e[0]}));case 5:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),X=function(e){e.preventDefault(),z.updateEHR(a,c).then(function(e){"success"===e.status?console.log("Updated record!","green"):console.log("Fail to update record.","red")})},ee=function(){var e=Object(B.a)(A.a.mark(function e(a){var t,n,l,r,c,s,o;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),G([]),a.target.reset(),t=Z.text){e.next=6;break}return e.abrupt("return");case 6:return n=t.split("-"),l=Object(h.a)(n,1),r=l[0],e.next=11,z.fetchCondition(r);case 11:c=e.sent,s=c.data,o=s[0].shortdef?s[0].shortdef.join("\n"):"",N([].concat(Object(P.a)(y),[{name:t,description:o}]));case 15:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();function ae(){z.fetchProfile().then(function(e){return console.log(e.data)}).catch(function(e){return console.log(e)})}return Object(n.useEffect)(function(){ae()},[]),l.a.createElement(m,null,l.a.createElement(i,{classes:"my-5"},l.a.createElement(u,{size:"md-8",classes:"offset-md-2"},l.a.createElement(I,{toggleState:function(){return C(!k)},editState:k,data:c,target:function(e){var a=e.target,t=a.name,n=a.value;s(Object(b.a)({},c,Object(v.a)({},t,n))),ae()},formSubmit:X}))),l.a.createElement(i,{classes:"my-5"},l.a.createElement(u,{size:"md-8",classes:"offset-md-2"},l.a.createElement(W,{toggleState:function(){return D(!j)},editState:j,data:E,target:function(e){var a=e.target,t=a.name,n=a.value;f(Object(b.a)({},E,Object(v.a)({},t,n)))},formSubmit:X}))),l.a.createElement(i,{classes:"my-5"},l.a.createElement(u,{size:"md-8",classes:"offset-md-2"},l.a.createElement(q,{toggleState:function(){return U(!F)},editState:F,toggleDescState:function(){return M(!H)},editDescState:H,data:y,target:Q,renderSuggestions:function(){var e=Z.suggestions;if(e&&0!==e.length)return l.a.createElement("ul",null,e.map(function(e,a){return l.a.createElement("li",{onClick:function(){G({suggestions:[],text:e})},key:a},e)}))},text:Z.text,formSubmit:ee}))))}t(67);var ae=function(){var e=Object(n.useState)([]),a=Object(h.a)(e,2);return a[0],a[1],Object(n.useEffect)(function(){z.getDrugInfo().then(function(e){return console.log(e.data)}).catch(function(e){return console.log(e)})},[]),l.a.createElement(m,null,l.a.createElement("div",{class:"table-responsive"},l.a.createElement("table",{class:"table"},l.a.createElement("tbody",null,l.a.createElement("tr",{class:"accordion-toggle collapsed",id:"accordion1","data-toggle":"collapse","data-parent":"#accordion1",href:"#collapseOne"},l.a.createElement("td",{class:"expand-button"}),l.a.createElement("td",null,"Amlodipine")),l.a.createElement("tr",{class:"hide-table-padding"},l.a.createElement("td",null),l.a.createElement("td",{colspan:"3"},l.a.createElement("div",{id:"collapseOne",class:"collapse in p-3"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-2"},"Pill Description"),l.a.createElement("div",{class:"col-6"},"value 1")),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-2"},"Dosage"),l.a.createElement("div",{class:"col-6"},"value 2")),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-2"},"Frequency"),l.a.createElement("div",{class:"col-6"},"value 3")),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-2"},"Reason"),l.a.createElement("div",{class:"col-6"},"value 4")),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-2"},"Pharmacy"),l.a.createElement("div",{class:"col-6"},"value 3"))))),l.a.createElement("tr",{class:"accordion-toggle collapsed",id:"accordion1","data-toggle":"collapse","data-parent":"#accordion1",href:"#collapseOne"},l.a.createElement("td",{class:"expand-button"}),l.a.createElement("td",null,"Metformin")),l.a.createElement("tr",{class:"hide-table-padding"},l.a.createElement("td",null),l.a.createElement("td",{colspan:"3"},l.a.createElement("div",{id:"collapseOne",class:"collapse in p-3"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-2"},"Drug Code"),l.a.createElement("div",{class:"col-6"},"value 1")),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-2"},"Dosage"),l.a.createElement("div",{class:"col-6"},"value 2")),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-2"},"Frequency"),l.a.createElement("div",{class:"col-6"},"value 3")),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-2"},"Reason"),l.a.createElement("div",{class:"col-6"},"value 4")),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-2"},"Pharmacy"),l.a.createElement("div",{class:"col-6"},"value 3")))))))))};function te(e){var a=e.name;return l.a.createElement(s.b,{to:"/ehr",style:{textDecoration:"none"}},l.a.createElement("div",{className:"card box-shadow mt-5"},l.a.createElement("div",{className:"card-body text-center"},l.a.createElement("h2",{className:"card-title"},a),l.a.createElement("p",{className:"card-text"}," Access First_Name's information here"))))}function ne(){var e=Object(n.useState)(),a=Object(h.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(),s=Object(h.a)(c,2),o=s[0];s[1];Object(n.useEffect)(function(){d()},[]),Object(n.useEffect)(function(){E()},[t]);var d=function(){var e=Object(B.a)(A.a.mark(function e(){var a,t;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.fetchUser();case 2:a=e.sent,t=a.user,r(t);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(B.a)(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return l.a.createElement(m,null,l.a.createElement(i,null,l.a.createElement(u,{size:"md-8",classes:"offset-md-2"},l.a.createElement(te,{props:o,name:"User's Name"}),l.a.createElement(te,{name:"First Care Recipient"}),l.a.createElement(te,{name:"Second Care Recipient"}))),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("button",{type:"button",class:"btn",href:"../UserInfo"},"Add Profile")))}function le(){var e=Object(n.useState)(!1),a=Object(h.a)(e,2),t=a[0],r=a[1],c=Object(o.f)().pathname;return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(s.b,{to:"/",className:"navbar-brand"},l.a.createElement("em",null,"my"),"ERH"),l.a.createElement("button",{onClick:function(){return r(t=!t)},className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#target-collapse"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement(d,{navState:t,id:"target-collapse"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"/"===c?"nav-item active":"nav-item"},l.a.createElement(s.b,{to:"/",className:"nav-link"},"Home")),l.a.createElement("li",{className:"/profiles"===c?"nav-item active":"nav-item"},l.a.createElement(s.b,{to:"/profiles",className:"nav-link"},"profiles")),l.a.createElement("li",{className:"/ehr"===c?"nav-item active":"nav-item"},l.a.createElement(s.b,{to:"/ehr",className:"nav-link"},"health record")),l.a.createElement("li",{className:"/contacts"===c?"nav-item active":"nav-item"},l.a.createElement(s.b,{to:"/contacts",className:"nav-link"},"contacts"))),l.a.createElement("div",null,l.a.createElement(s.b,{to:"/signin"},l.a.createElement(g,{className:"btn btn-outline-primary m-2",type:"button"},"Log In")),l.a.createElement(s.b,{to:"/signup"},l.a.createElement(g,{className:"btn btn-outline-primary m-2",type:"button"},"Sign Up")))))}t(68),t(69);var re=function(){return l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(le,null),l.a.createElement(o.a,{exact:!0,path:"/"}," ",l.a.createElement(p,null)," "),l.a.createElement(o.a,{exact:!0,path:"/signIn"}," ",l.a.createElement(x,null)," "),l.a.createElement(o.a,{exact:!0,path:"/signUp"}," ",l.a.createElement(O,null)," "),l.a.createElement(o.a,{exact:!0,path:"/profiles"}," ",l.a.createElement(ne,null)," "),l.a.createElement(o.a,{exact:!0,path:"/ehr"}," ",l.a.createElement(ee,null)," "),l.a.createElement(o.a,{exact:!0,path:"/medications"}," ",l.a.createElement(ae,null)," ")))},ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function se(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}t(29).config(),c.a.render(l.a.createElement(re,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");ce?function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):se(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):se(e)})}}()}},[[36,1,2]]]);
//# sourceMappingURL=main.c948433f.chunk.js.map