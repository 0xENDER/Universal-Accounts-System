import{c as e,o as u,i as c,t as o}from"./index.1321f78c.js";import{T as m}from"./Title.a581f7e6.js";import{B as a,M as p,F as l}from"./FlexContainer.4704f1cd.js";import{I as d,N as h}from"./Notice.1c36cc36.js";import{InputFieldsContainer as f}from"./register.868c1d9c.js";const g=o("<h1>Choose a username!</h1>"),b=o("<br>"),x=o("<h3>Choose your own <!>!</h3>");function _(s){let r=e(a,{type:"link",href:"/user/register/password",primary:!0,children:"Next"});return u(()=>{let t=document.getElementById("username"),n=()=>{t.value.length<3||t.value.length>32?r().setAttribute("disabled",""):r().removeAttribute("disabled")};n(),t.oninput=n}),s.report(),[e(m,{children:"Sign Up"}),g.cloneNode(!0),b.cloneNode(!0),(()=>{const t=x.cloneNode(!0),n=t.firstChild,i=n.nextSibling;return i.nextSibling,c(t,e(p,{children:"username"}),i),t})(),e(l,{space:"around",style:{width:"400px"},get children(){return[e(f,{get children(){return e(d,{id:"username",type:"text",label:"Username",autocomplete:"off",style:{width:"calc(100% - 8px)"},maxlength:32})}}),e(h,{children:"Your username is public, make sure it does not contain any sensitive or personal information!"}),e(l,{space:"between",horozontal:!0,"no-grow":!0,get children(){return[e(a,{type:"action",function:function(){history.back()},children:"Go back"}),r]}})]}})]}export{_ as default};
