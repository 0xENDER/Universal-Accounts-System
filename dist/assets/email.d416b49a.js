import{d as u,o as d,c as e,i as p,t as r}from"./index.1321f78c.js";import{T as m}from"./Title.a581f7e6.js";import{M as h,F as i,B as a}from"./FlexContainer.4704f1cd.js";import{I as y,N as g}from"./Notice.1c36cc36.js";import{InputFieldsContainer as f}from"./register.868c1d9c.js";const x=r("<h1>Add an email address</h1>"),v=r("<br>"),b=r("<h3>Add a <!> to your account!</h3>");function $(l){const[s,o]=u("Skip");return d(()=>{let t=document.getElementById("recovery-email");t.addEventListener("input",()=>{t.value.replace(/\s/gi,"")==""?o("Skip"):o("Next")})}),l.report(),[e(m,{children:"Sign Up"}),x.cloneNode(!0),v.cloneNode(!0),(()=>{const t=b.cloneNode(!0),c=t.firstChild,n=c.nextSibling;return n.nextSibling,p(t,e(h,{children:"recovery email address"}),n),t})(),e(i,{space:"around",style:{width:"400px"},get children(){return[e(f,{get children(){return e(y,{id:"recovery-email",type:"text",label:"Recovery email address",style:{width:"calc(100% - 8px)"}})}}),e(g,{children:"This step is optional! Your 'recovery' email address is going to help you recover your username when you forget it. You can NOT use your email to recover a locked-out account, so be careful!"}),e(i,{space:"between",horozontal:!0,"no-grow":!0,get children(){return[e(a,{type:"action",function:function(){history.back()},children:"Go back"}),e(a,{type:"link",href:"/user/register/email",primary:!0,get children(){return s()}})]}})]}})]}export{$ as default};
