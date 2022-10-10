import{h as g,o as v,c as n,i as x,u as _,B as f,t as d}from"./index.3d8901f1.js";import{T as b}from"./Title.a581f7e6.js";import{I as h,N as C,s as l}from"./Notice.0377e528.js";import{M as I,F as B}from"./FlexContainer.58377127.js";import{C as T}from"./CheckBox.3bb434ac.js";import{b as N,r as w,I as $,B as k,n as M,l as S,h as A,c as D,a as P}from"./register.1709f8b0.js";const F=d("<h1>Choose a password!</h1>"),z=d("<br>"),H=d("<h3>Choose a <!> for your account!</h3>"),R=d('<input id="username-hidden" type="username" style="display: none;" value="TestUsername">');function q(y){let p=g(),r,u,a,i,c,m=()=>{a.children[0].children[0].value="",i.children[0].children[0].value="",c.value=""};return v(()=>{r=N(u,"password","password_confirm"),c.value=w.username}),y.report(),[n(b,{children:"Sign Up"}),F.cloneNode(!0),z.cloneNode(!0),(()=>{const e=H.cloneNode(!0),t=e.firstChild,s=t.nextSibling;return s.nextSibling,x(e,n(I,{children:"secure password"}),s),e})(),n(B,{space:"around",style:{width:"400px"},get children(){return[(()=>{const e=R.cloneNode(!0),t=c;return typeof t=="function"?_(t,e):c=e,e})(),n($,{get children(){return[n(h,{ref(e){const t=a;typeof t=="function"?t(e):a=e},id:"password",type:"password",label:"Password",autocomplete:"new-password",style:{width:"calc(100% - 8px)"}}),n(h,{ref(e){const t=i;typeof t=="function"?t(e):i=e},id:"password_confirm",type:"password",label:"Confirmation",autocomplete:"new-password",style:{width:"calc(100% - 8px)"}}),n(T,{id:"showPassword",label:"Show password",style:{margin:"8px","margin-right":"auto"},checked:!1,onActive:function(){document.getElementById("password").type="text",document.getElementById("password_confirm").type="text"},onInactive:function(){document.getElementById("password").type="password",document.getElementById("password_confirm").type="password"}})]}}),n(C,{children:"The password must be at least 10 characters long, with a mix of letters and numbers! (Note that it's recommended to mix in a few special characters)"}),n(k,{get children(){return[n(f,{type:"action",function:function(){m(),setTimeout(function(){history.back()},1)},children:"Go back"}),n(f,{ref(e){const t=u;typeof t=="function"?t(e):u=e},type:"action",function:function(){M(u,function(e,t){let s=a.children[0].children[0],o=i.children[0].children[0];s.value.length<10||s.value.length>128?(l(a,!1,"Must be from 10 up to 128 characters long!"),o.value="",setTimeout(r,1),e()):!/[a-zA-Z]/.test(s.value)&&!/[0-9]/.test(s.value)?(l(a,!1,"Must contain letters and numbers!"),o.value="",setTimeout(r,1),e()):/[a-zA-Z]/.test(s.value)?/[0-9]/.test(s.value)?o.value!=s.value&&(l(i,!1,"Does not match the password!"),o.value="",setTimeout(r,1),o.focus(),e()):(l(a,!1,"Must contain at least one number!"),o.value="",setTimeout(r,1),e()):(l(a,!1,"Must contain at least one letter!"),o.value="",setTimeout(r,1),e()),t()},function(){S(function(){w.passwordHash=A(a.children[0].children[0].value),D(3,function(e){e?(m(),setTimeout(function(){P(p)},1)):p("/user/register/personal")})})})},primary:!0,children:"Next"})]}})]}})]}export{q as default};