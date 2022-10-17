import{e as k,y as q,a as C,q as x,o as A,c as n,i as h,m as y,k as e,B as b,t as d,h as N,b as Q,d as _,j as S,f as R}from"./index.f85b29b8.js";import{T}from"./Title.a581f7e6.js";import{N as B,B as I,n as L,r as w}from"./register.0f846eb2.js";import{M as D,F as P}from"./FlexContainer.7563198b.js";import{g as U}from"./securityQuestions.81697a5d.js";import{s as W}from"./accounts.5552f8fa.js";const M="_table_7or2f_13",O="_item_7or2f_23",E="_title_7or2f_35",F="_content_7or2f_55",G="_contentTextWrapper_7or2f_77",H="_securityQuestionItem_7or2f_87",j="_securityQuestion_7or2f_87",K="_securityQuestionAnswer_7or2f_109",f={table:M,item:O,title:E,content:F,contentTextWrapper:G,securityQuestionItem:H,securityQuestion:j,securityQuestionAnswer:K},Y=d("<table></table>"),z=d("<tr><td unselectable><text></text></td><td><text></text></td></tr>"),J=d("<div><text></text><text></text></div>"),V=d("<h1>Let's Review</h1>"),X=d("<br>"),Z=d("<h3>Make sure these are the <!> you want!</h3>");function ee(u){return(()=>{const r=Y.cloneNode(!0);return N(r,u,!1,!1),Q(()=>_(r,f.table)),r})()}function c(u){return(()=>{const r=z.cloneNode(!0),s=r.firstChild,l=s.firstChild,o=s.nextSibling,i=o.firstChild;return h(l,()=>u.title),h(i,()=>u.children),Q(t=>{const a=f.item,g=f.title,m=f.content,p=f.contentTextWrapper;return a!==t._v$&&_(r,t._v$=a),g!==t._v$2&&_(s,t._v$2=g),m!==t._v$3&&_(o,t._v$3=m),p!==t._v$4&&S(i,"class",t._v$4=p),t},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),r})()}function v(u){return(()=>{const r=J.cloneNode(!0),s=r.firstChild,l=s.nextSibling;return h(s,()=>u.question),h(l,()=>u.answer),Q(o=>{const i=f.securityQuestionItem,t=f.securityQuestion,a=f.securityQuestionAnswer;return i!==o._v$5&&_(r,o._v$5=i),t!==o._v$6&&S(s,"class",o._v$6=t),a!==o._v$7&&S(l,"class",o._v$7=a),o},{_v$5:void 0,_v$6:void 0,_v$7:void 0}),r})()}function $(u,r,s){if(u!=null)return u[r][s-1]}function oe(u){let r=k(),s;const[l,o]=q(void 0);return C(()=>{x(7,function(i){i?w(r):U().then(function(t){o(t),u.pageLoaded()})})}),A(()=>{u.pageUnloading()}),[n(T,{children:"Sign Up"}),V.cloneNode(!0),X.cloneNode(!0),(()=>{const i=Z.cloneNode(!0),t=i.firstChild,a=t.nextSibling;return a.nextSibling,h(i,n(D,{children:"configurations"}),a),i})(),n(P,{space:"around",style:{width:"400px"},get children(){return[n(ee,{get children(){return[n(c,{title:"Owner",get children(){return[y(()=>e.name.first)," ",y(()=>e.name.last)]}}),n(c,{title:"Username",get children(){return e.username}}),n(c,{title:"Birthday",get children(){return new Date(`${e.birthdate.month}/${e.birthdate.day}/${e.birthdate.year}`).toLocaleDateString("en-UK")}}),n(c,{title:"Gender",get children(){return[y(()=>e.gender)," (",y(()=>function(){return e.pronounce==1?"he/him":e.pronounce==2?"she/her":"they/them"}()),")"]}}),n(c,{title:"Security Question #1",get children(){return n(v,{get question(){return $(l(),1,e.securityQuestions.q1)},get answer(){return e.securityQuestions.a1}})}}),n(c,{title:"Security Question #2",get children(){return n(v,{get question(){return $(l(),2,e.securityQuestions.q2)},get answer(){return e.securityQuestions.a2}})}}),n(c,{title:"Security Question #3",get children(){return n(v,{get question(){return $(l(),3,e.securityQuestions.q3)},get answer(){return e.securityQuestions.a3}})}}),n(c,{title:"Public Profile",get children(){return function(){if(e.quickSettings.profile==1)return"Rich";if(e.quickSettings.profile==2)return"Limited";if(e.quickSettings.profile==3)return"Hidden"}()}}),n(c,{title:"Activity History",get children(){return function(){return e.quickSettings.activity==1?"Ciel, Affiliated, and third-party":e.quickSettings.activity==2?"Ciel & Affiliated":e.quickSettings.activity==3?"Only Ciel":null}()}}),n(c,{title:"Location",get children(){return e.quickSettings.location==1?"Approximate":"Precise"}}),n(c,{title:"Colour Scheme",get children(){return function(){return e.quickSettings.colorScheme==1?"Light":e.quickSettings.colorScheme==2?"Dark":"Auto"}()}})]}}),n(B,{children:"You can always change your account configurations from your account console!"}),n(I,{get children(){return[n(b,{type:"action",function:function(){history.back()},children:"Go back"}),n(b,{ref(i){const t=s;typeof t=="function"?t(i):s=i},type:"action",function:function(){L(s,function(i,t){e.agreement=!0,x(7,function(a){a?(t(),w(r)):W(e,function(g,m){t(),g?alert(":)"):R("Error!","We couldn't create your Ciel account! Please try again at a later time.")})})},function(){})},primary:!0,children:"Create account"})]}})]}})]}export{oe as default};