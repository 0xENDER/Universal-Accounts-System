if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let t={};const o=s=>i(s,l),u={module:{uri:l},exports:t,require:o};e[l]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(r(...s),t)))}}define(["./workbox-3ea082d2"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.249b0625.js",revision:null},{url:"assets/Button.116cab00.js",revision:null},{url:"assets/Button.208069d7.css",revision:null},{url:"assets/home.0fef3cc1.js",revision:null},{url:"assets/index.b675437e.css",revision:null},{url:"assets/index.c60edcf2.js",revision:null},{url:"assets/login.2c123059.js",revision:null},{url:"assets/new.43c4159d.css",revision:null},{url:"assets/new.7a4565f1.js",revision:null},{url:"assets/register.48559758.js",revision:null},{url:"assets/Title.a581f7e6.js",revision:null},{url:"index.html",revision:"9c0439b376d45b0c51bfd6a45bc6f073"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/icon-192.png",revision:"4104946a7f751ac60c0304d123063543"},{url:"images/icon-512.png",revision:"092f201c00b035dd97ff5a2c00d95c22"},{url:"manifest.webmanifest",revision:"d86b82704be066635a39f3dffc6757f9"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
