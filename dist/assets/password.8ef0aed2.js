import{c as e,o as d,i as p,t as n}from"./index.1321f78c.js";import{T as u}from"./Title.a581f7e6.js";import{B as l,M as c,F as a}from"./FlexContainer.4704f1cd.js";import{I as m}from"./Notice.1c36cc36.js";import{C as h}from"./CheckBox.dd527ae0.js";import{InputFieldsContainer as w}from"./login.324bc715.js";import"./Link.804d3260.js";const y=n("<h1>Welcome back, [FirstName]!</h1>"),g=n("<br>"),f=n("<h3>Please enter <!> to verify your identity!</h3>"),x=n('<input id="username-hidden" type="username" style="display: none;" value="TestUsername">');function C(i){let o=e(l,{type:"link",href:"/user/challenge",primary:!0,children:"Next"});return d(()=>{let t=document.getElementById("password"),r=()=>{t.value.length<8||t.value.length>96?o().setAttribute("disabled",""):o().removeAttribute("disabled")};r(),t.oninput=r}),i.report(),[e(u,{children:"Sign In"}),y.cloneNode(!0),g.cloneNode(!0),(()=>{const t=f.cloneNode(!0),r=t.firstChild,s=r.nextSibling;return s.nextSibling,p(t,e(c,{children:"your password"}),s),t})(),e(a,{space:"around",style:{width:"400px"},get children(){return[x.cloneNode(!0),e(w,{get children(){return e(m,{id:"password",type:"password",label:"Password",autocomplete:"current-password",get hint(){return e(h,{id:"showPassword",label:"Show password",style:{margin:"12px 0px 0px 0px"},checked:!1,onActive:function(){document.getElementById("password").type="text"},onInactive:function(){document.getElementById("password").type="password"}})},style:{width:"calc(100% - 8px)"}})}}),e(a,{space:"between",horozontal:!0,"no-grow":!0,get children(){return[e(l,{type:"link",href:"/user/recovery/password",children:"Forgot password?"}),o]}})]}})]}export{C as default};
