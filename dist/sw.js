if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>l(s,r),t={module:{uri:r},exports:u,require:o};e[r]=Promise.all(i.map((s=>t[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-3ea082d2"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.801b534a.js",revision:null},{url:"assets/challenge.239836c5.css",revision:null},{url:"assets/challenge.a1de9620.js",revision:null},{url:"assets/CheckBox.33bf6d85.js",revision:null},{url:"assets/email.0d620c0c.js",revision:null},{url:"assets/FlexContainer.54cadf57.js",revision:null},{url:"assets/FlexContainer.ec5efeb1.css",revision:null},{url:"assets/home.9e322a0e.js",revision:null},{url:"assets/index.3106415c.js",revision:null},{url:"assets/index.62eb401f.css",revision:null},{url:"assets/Input.58633424.js",revision:null},{url:"assets/Link.3e3ea310.js",revision:null},{url:"assets/login.feeed327.js",revision:null},{url:"assets/new.221ec2df.js",revision:null},{url:"assets/new.e3b0c442.css",revision:null},{url:"assets/Notice.96529250.js",revision:null},{url:"assets/password.0aa32e14.js",revision:null},{url:"assets/password.a34c2362.js",revision:null},{url:"assets/personal.ce5ae412.js",revision:null},{url:"assets/register.ae4c2657.js",revision:null},{url:"assets/security-questions.188975cc.js",revision:null},{url:"assets/Select.f7f38403.js",revision:null},{url:"assets/Title.a581f7e6.js",revision:null},{url:"assets/username.c188540f.js",revision:null},{url:"index.html",revision:"4ff31a86abd87bb6b18089be52d70b8e"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/icon-192.png",revision:"4104946a7f751ac60c0304d123063543"},{url:"images/icon-512.png",revision:"092f201c00b035dd97ff5a2c00d95c22"},{url:"manifest.webmanifest",revision:"d86b82704be066635a39f3dffc6757f9"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
