import{o as y,c as t,i as h,t as e}from"./index.434d493f.js";import{T as g}from"./Title.a581f7e6.js";import{M as _,F as i,B as c}from"./FlexContainer.5e5d4d1d.js";import{I as u,N as s}from"./Notice.4cf9ac25.js";import{S as d}from"./Select.c63bfcf2.js";import{clientDataCheck as b,InputFieldsContainer as f}from"./register.6c724dfe.js";const v=e("<h1>Let's get personal!</h1>"),N=e("<br>"),$=e("<h3>Enter your <!>!</h3>"),x=e('<option value="1">January</option>'),I=e('<option value="2">February</option>'),w=e('<option value="3">March</option>'),B=e('<option value="4">April</option>'),C=e('<option value="5">May</option>'),M=e('<option value="6">June</option>'),k=e('<option value="7">July</option>'),E=e('<option value="8">August</option>'),F=e('<option value="9">September</option>'),S=e('<option value="10">October</option>'),G=e('<option value="11">November</option>'),L=e('<option value="12">December</option>'),P=e('<option value="male">Male</option>'),D=e('<option value="female">Female</option>'),J=e('<option value="unknown">Prefer not to say</option>'),z=e('<option value="custom">Custom</option>'),A=e('<option value="he">he/him</option>'),T=e('<option value="she">she/her</option>'),Y=e('<option value="they">they/them</option>');function K(m){let r,l,a;return y(()=>{b(a,"birthday_month","birthday_day","birthday_year","gender","custom-gender-name","custom-gender-pronouns")}),m.report(),[t(g,{children:"Sign Up"}),v.cloneNode(!0),N.cloneNode(!0),(()=>{const o=$.cloneNode(!0),n=o.firstChild,p=n.nextSibling;return p.nextSibling,h(o,t(_,{children:"personal details"}),p),o})(),t(i,{space:"around",style:{width:"400px"},get children(){return[t(f,{get children(){return[t(i,{horozontal:!0,style:{margin:0},get children(){return[t(d,{id:"birthday_month",label:"Month",style:{"min-width":"40%","margin-bottom":"auto"},get children(){return[x.cloneNode(!0),I.cloneNode(!0),w.cloneNode(!0),B.cloneNode(!0),C.cloneNode(!0),M.cloneNode(!0),k.cloneNode(!0),E.cloneNode(!0),F.cloneNode(!0),S.cloneNode(!0),G.cloneNode(!0),L.cloneNode(!0)]}}),t(u,{id:"birthday_day",type:"number",label:"Day",autocomplete:"bday-day",style:{"margin-bottom":"auto"}}),t(u,{id:"birthday_year",type:"number",label:"Year",autocomplete:"bday-year",style:{"margin-bottom":"auto"}})]}}),t(s,{smaller:!0,children:"Enter your birthday"}),t(d,{id:"gender",label:"Gender",style:{width:"calc(100% - 8px)"},onChange:function(){document.getElementById("gender").value!="custom"?l.style.display!="none"&&(l.style.display="none",r.style.display="none",document.getElementById("custom-gender-pronouns").selectedIndex=1,document.getElementById("custom-gender-name").value="FILL"):(document.getElementById("custom-gender-pronouns").selectedIndex=0,document.getElementById("custom-gender-name").value="",l.style.display=null,r.style.display=null)},get children(){return[P.cloneNode(!0),D.cloneNode(!0),J.cloneNode(!0),z.cloneNode(!0)]}}),t(u,{ref(o){const n=r;typeof n=="function"?n(o):r=o},id:"custom-gender-name",type:"text",label:"Gender name",style:{width:"calc(100% - 8px)",display:"none"},value:"FILL"}),t(d,{ref(o){const n=l;typeof n=="function"?n(o):l=o},id:"custom-gender-pronouns",label:"Prefered pronouns",style:{width:"calc(100% - 8px)",display:"none"},selectedIndex:1,get children(){return[A.cloneNode(!0),T.cloneNode(!0),Y.cloneNode(!0)]}})]}}),t(s,{children:"Make sure to use your real date of birth. You can create a Ciel account as long as you are 13+ years old! (access to external services will be limited depending on your age)"}),t(i,{space:"between",horozontal:!0,"no-grow":!0,get children(){return[t(c,{type:"action",function:function(){history.back()},children:"Go back"}),t(c,{ref(o){const n=a;typeof n=="function"?n(o):a=o},type:"link",href:"/user/register/security-questions",primary:!0,children:"Next"})]}})]}})]}export{K as default};
