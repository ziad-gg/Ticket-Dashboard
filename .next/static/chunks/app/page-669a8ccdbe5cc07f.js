(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{36300:function(e,t,r){Promise.resolve().then(r.bind(r,38020))},38020:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(57437),a=r(2265);function s(e){let{className:t="",quantity:r=30,staticity:s=50,ease:c=50,refresh:l=!1}=e,i=(0,a.useRef)(null),u=(0,a.useRef)(null),o=(0,a.useRef)(null),h=(0,a.useRef)([]),f=function(){let[e,t]=(0,a.useState)({x:0,y:0});return(0,a.useEffect)(()=>{let e=e=>{t({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[]),e}(),d=(0,a.useRef)({x:0,y:0}),m=(0,a.useRef)({w:0,h:0}),x=window.devicePixelRatio;(0,a.useEffect)(()=>(i.current&&(o.current=i.current.getContext("2d")),w(),E(),window.addEventListener("resize",w),()=>{window.removeEventListener("resize",w)}),[]),(0,a.useEffect)(()=>{y()},[f.x,f.y]),(0,a.useEffect)(()=>{w()},[l]);let w=()=>{p(),j()},y=()=>{if(i.current){let e=i.current.getBoundingClientRect(),{w:t,h:r}=m.current,n=f.x-e.left-t/2,a=f.y-e.top-r/2,s=n<t/2&&n>-t/2&&a<r/2&&a>-r/2;s&&(d.current.x=n,d.current.y=a)}},p=()=>{u.current&&i.current&&o.current&&(h.current.length=0,m.current.w=u.current.offsetWidth,m.current.h=u.current.offsetHeight,i.current.width=m.current.w*x,i.current.height=m.current.h*x,i.current.style.width="".concat(m.current.w,"px"),i.current.style.height="".concat(m.current.h,"px"),o.current.scale(x,x))},g=()=>{let e=Math.floor(Math.random()*m.current.w),t=Math.floor(Math.random()*m.current.h),r=parseFloat((.6*Math.random()+.1).toFixed(1));return{x:e,y:t,translateX:0,translateY:0,size:Math.floor(2*Math.random())+.1,alpha:0,targetAlpha:r,dx:(Math.random()-.5)*.2,dy:(Math.random()-.5)*.2,magnetism:.1+4*Math.random()}},v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(o.current){let{x:r,y:n,translateX:a,translateY:s,size:c,alpha:l}=e;o.current.translate(a,s),o.current.beginPath(),o.current.arc(r,n,c,0,2*Math.PI),o.current.fillStyle="rgba(255, 255, 255, ".concat(l,")"),o.current.fill(),o.current.setTransform(x,0,0,x,0,0),t||h.current.push(e)}},b=()=>{o.current&&o.current.clearRect(0,0,m.current.w,m.current.h)},j=()=>{b();for(let e=0;e<r;e++){let e=g();v(e)}},z=(e,t,r,n,a)=>{let s=(e-t)*(a-n)/(r-t)+n;return s>0?s:0},E=()=>{b(),h.current.forEach((e,t)=>{let r=[e.x+e.translateX-e.size,m.current.w-e.x-e.translateX-e.size,e.y+e.translateY-e.size,m.current.h-e.y-e.translateY-e.size],n=r.reduce((e,t)=>Math.min(e,t)),a=parseFloat(z(n,0,20,0,1).toFixed(2));if(a>1?(e.alpha+=.02,e.alpha>e.targetAlpha&&(e.alpha=e.targetAlpha)):e.alpha=e.targetAlpha*a,e.x+=e.dx,e.y+=e.dy,e.translateX+=(d.current.x/(s/e.magnetism)-e.translateX)/c,e.translateY+=(d.current.y/(s/e.magnetism)-e.translateY)/c,e.x<-e.size||e.x>m.current.w+e.size||e.y<-e.size||e.y>m.current.h+e.size){h.current.splice(t,1);let e=g();v(e)}else v({...e,x:e.x,y:e.y,translateX:e.translateX,translateY:e.translateY,alpha:e.alpha},!0)}),window.requestAnimationFrame(E)};return(0,n.jsx)("div",{className:t,ref:u,"aria-hidden":"true",children:(0,n.jsx)("canvas",{ref:i})})}var c=r(32697),l=r(16691),i=r.n(l),u=r(61396),o=r.n(u);async function h(){let e=await fetch(c.Z.api("metadata"),{cache:"no-store",next:{revalidate:5}}),t=await e.json();return t}async function f(){let e=await h();return(0,n.jsxs)("div",{className:"flex flex-col items-center h-screen justify-center w-screen before overflow-hidden bg-black relative",children:[(0,n.jsx)(s,{className:"absolute inset-0 animate-fade-in bg-gray-900",quantity:120}),(0,n.jsxs)("div",{className:"h-[35rem] w-[30rem] bg-gray-800 shadow-2xl bg-opacity-50 z-50 rounded-lg",children:[(0,n.jsxs)("div",{className:"w-full h-[10rem] flex justify-center items-center pt-10 flex-col gap-y-4",children:[(0,n.jsx)(i(),{alt:"Bot",height:1,width:1,quality:100,unoptimized:!0,priority:!0,src:e.serverImage,className:"rounded-full w-[7rem] h-[7rem]"}),(0,n.jsx)("h2",{className:"text-white font-bold text-xl ",children:e.username})]}),(0,n.jsx)("div",{className:"w-full h-[25rem] flex flex-col justify-center items-center",children:(0,n.jsx)(o(),{href:"/dashboard",className:"bg-gray-700 w-[70%] h-[15%] flex justify-center items-center font-bold text-white text-2xl",children:"Dashboard"})})]})]})}},32697:function(e,t){"use strict";let r={apiURL:"http://localhost:8008",api:e=>{if("string"!=typeof e)return r.apiURL;{let t=r.apiURL.concat("/api","/",e);return t}}};t.Z=r}},function(e){e.O(0,[691,176,971,596,744],function(){return e(e.s=36300)}),_N_E=e.O()}]);