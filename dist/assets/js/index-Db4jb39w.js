import{u as q,e as x,o as C,c as T,a as v,f as c,w as g,b as M,g as ne,h as $,i as O,j as fe,k as he,l as H,m as it,F as X,n as ye,q as G,t as ee,p as se,d as re,s as we,r as ue,v as lt,x as st,y as pe,z as me,T as rt,K as at,A as ke,B as xe,H as $e,C as ct,D as Z,E as dt,G as Ce,I as ut,J as Fe,L as pt,M as mt,N as vt,O as _t,P as De,Q as Ie,R as ft,S as ht,U as W,V as gt}from"./index-DuuR-CZp.js";import{u as wt,a as bt,_ as He}from"./tabs-Cq67WXgW.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";const yt={key:0},xt={__name:"CollapseIcon",setup(e){const t=q(),n=()=>t.updateGlobalState("isCollapse",!t.isCollapse);return(o,i)=>{const s=x("el-icon");return C(),T("div",{class:"ct-collapseIcon flx-center",onClick:n},[v("div",null,[c(s,{class:"collapse-icon",id:"ct-collapseIcon-box"},{default:g(()=>[(C(),M(ne($(t).isCollapse?"expand":"fold")))]),_:1}),$(t).isCollapse?O("",!0):(C(),T("div",yt,"收起导航"))])])}}},Re=z(xt,[["__scopeId","data-v-c3cd3804"]]),Ct={class:"ct-tabs-box"},kt={class:"ct-tabs-menu"},$t={__name:"index",setup(e){const t=fe(),n=he(),o=wt(),i=q(),s=H(()=>o.tabsMenuList),f=H(()=>t.fullPath),p=H(()=>i.tabsIcon);it(()=>t.fullPath,()=>{if(t.meta.isFull)return;f.value=t.fullPath;const l={icon:t.meta.icon,title:t.meta.title,path:t.fullPath,name:t.name,close:!t.meta.isAffix,isKeepAlive:t.meta.isKeepAlive};o.addTabs(l)},{immediate:!0});const r=l=>{const d=l.props.name;n.push(d),console.log("route.path",t.path)},a=l=>{o.removeTabs(l,l==t.fullPath)};return(l,d)=>{const u=x("el-icon"),w=x("el-tab-pane"),y=x("el-tabs");return C(),T("div",Ct,[v("div",kt,[c(y,{modelValue:f.value,"onUpdate:modelValue":d[0]||(d[0]=_=>f.value=_),onTabClick:r,onTabRemove:a},{default:g(()=>[(C(!0),T(X,null,ye(s.value,_=>(C(),M(w,{key:_.path,label:_.title,name:_.path,closable:_.close},{label:g(()=>[_.icon&&p.value?(C(),M(u,{key:0,class:"tabs-icon"},{default:g(()=>[(C(),M(ne(_.icon)))]),_:2},1024)):O("",!0),G(" "+ee(_.title),1)]),_:2},1032,["label","name","closable"]))),128))]),_:1},8,["modelValue"])])])}}},St=z($t,[["__scopeId","data-v-d0eccf39"]]);H(()=>"2024 CT Amin");const Et={},Lt=e=>(se("data-v-2f7a43e4"),e=e(),re(),e),Pt={class:"footer flx-center"},Bt=Lt(()=>v("span",null,"2024 CT Admin",-1)),Mt=[Bt];function Tt(e,t,n,o,i,s){return C(),T("div",Pt,Mt)}const At=z(Et,[["render",Tt],["__scopeId","data-v-2f7a43e4"]]);function Se(e){return typeof e=="function"?e():$(e)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ee=()=>{};function Vt(e,t){function n(...o){return new Promise((i,s)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(i).catch(s)})}return n}function Ft(e,t={}){let n,o,i=Ee;const s=p=>{clearTimeout(p),i(),i=Ee};return p=>{const r=Se(e),a=Se(t.maxWait);return n&&s(n),r<=0||a!==void 0&&a<=0?(o&&(s(o),o=null),Promise.resolve(p())):new Promise((l,d)=>{i=t.rejectOnCancel?d:l,a&&!o&&(o=setTimeout(()=>{n&&s(n),o=null,l(p())},a)),n=setTimeout(()=>{o&&s(o),o=null,l(p())},r)})}}function Dt(e,t=200,n={}){return Vt(Ft(t,n),e)}const It={__name:"index",setup(e){const t=q(),n=bt(),{keepAliveName:o}=we(n),{maximize:i,isCollapse:s,layout:f,tabs:p,footer:r}=we(t),a=ue(!0);lt("refresh",_=>a.value=_);const d=new Map;function u(_,b){if(!_)return;const S=b.fullPath;let P=d.get(S);return P||(P={name:S,render:()=>ke(_)},d.set(S,P)),ke(P)}const w=ue(0),y=Dt(()=>{w.value=document.body.clientWidth,!i.value&&w.value>1200&&t.updateGlobalState("isCollapse",!0),s.value&&w.value>1200&&t.updateGlobalState("isCollapse",!1)},100);return window.addEventListener("resize",y,!1),st(()=>{window.removeEventListener("resize",y)}),(_,b)=>{const S=x("router-view"),P=x("el-main"),F=x("el-footer");return C(),T(X,null,[pe(c(St,null,null,512),[[me,$(p)]]),c(P,null,{default:g(()=>[c(S,null,{default:g(({Component:L,route:B})=>[c(rt,{appear:"",name:"main-transform",mode:"out-in"},{default:g(()=>[(C(),M(at,{include:$(o)},[a.value?(C(),M(ne(u(L,B)),{key:B.fullPath})):O("",!0)],1032,["include"]))]),_:2},1024)]),_:1})]),_:1}),pe(c(F,null,{default:g(()=>[c(At)]),_:1},512),[[me,$(r)]])],64)}}},Ne=z(It,[["__scopeId","data-v-be44001f"]]),Ht=["onClick"],Rt={class:"breadcrumb-title"},Nt={__name:"Breadcrumb",setup(e){const t=fe(),n=he(),o=xe(),i=q(),s=H(()=>{let p=o.breadcrumbListGet[t.matched[t.matched.length-1].path]??[];return p[0].path!==$e&&(p=[{path:$e,meta:{icon:"Menu",title:"首页"}},...p]),p}),f=(p,r)=>{r!==s.value.length-1&&n.push(p.path)};return(p,r)=>{const a=x("el-icon"),l=x("el-breadcrumb-item"),d=x("el-breadcrumb");return C(),T("div",{class:Z(["ct-breadcrumb-box mask-image",!$(q).breadcrumbIcon&&"ct-breadcrumb-no-icon"])},[c(d,{"separator-icon":$(dt)},{default:g(()=>[c(ct,{name:"ct-breadcrumb"},{default:g(()=>[(C(!0),T(X,null,ye(s.value,(u,w)=>(C(),M(l,{key:u.path},{default:g(()=>[v("div",{class:Z(["el-breadcrumb__inner is-link",{"item-no-icon":!u.meta.icon}]),onClick:y=>f(u,w)},[u.meta.icon&&$(i).breadcrumbIcon?(C(),M(a,{key:0,class:"breadcrumb-icon"},{default:g(()=>[(C(),M(ne(u.meta.icon)))]),_:2},1024)):O("",!0),v("span",Rt,ee(u.meta.title),1)],10,Ht)]),_:2},1024))),128))]),_:1})]),_:1},8,["separator-icon"])],2)}}},Wt=z(Nt,[["__scopeId","data-v-7060c61f"]]),zt={class:"ct-tool-bar-lf"},Ut={__name:"ToolBarLeft",setup(e){const t=q();return(n,o)=>(C(),T("div",zt,[pe(c(Wt,{id:"breadcrumb"},null,512),[[me,$(t).breadcrumb]])]))}},We=z(Ut,[["__scopeId","data-v-1e358eca"]]),Le=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],K=(()=>{if(typeof document>"u")return!1;const e=Le[0],t={};for(const n of Le)if((n==null?void 0:n[1])in document){for(const[i,s]of n.entries())t[e[i]]=s;return t}return!1})(),Pe={change:K.fullscreenchange,error:K.fullscreenerror};let N={request(e=document.documentElement,t){return new Promise((n,o)=>{const i=()=>{N.off("change",i),n()};N.on("change",i);const s=e[K.requestFullscreen](t);s instanceof Promise&&s.then(i).catch(o)})},exit(){return new Promise((e,t)=>{if(!N.isFullscreen){e();return}const n=()=>{N.off("change",n),e()};N.on("change",n);const o=document[K.exitFullscreen]();o instanceof Promise&&o.then(n).catch(t)})},toggle(e,t){return N.isFullscreen?N.exit():N.request(e,t)},onchange(e){N.on("change",e)},onerror(e){N.on("error",e)},on(e,t){const n=Pe[e];n&&document.addEventListener(n,t,!1)},off(e,t){const n=Pe[e];n&&document.removeEventListener(n,t,!1)},raw:K};Object.defineProperties(N,{isFullscreen:{get:()=>!!document[K.fullscreenElement]},element:{enumerable:!0,get:()=>document[K.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[K.fullscreenEnabled]}});K||(N={isEnabled:!1});const ie=N,qt={class:"fullscreen"},Gt=Ce({__name:"Fullscreen",setup(e){const t=ue(ie.isFullscreen);ut(()=>{ie.on("change",()=>{ie.isFullscreen?t.value=!0:t.value=!1})});const n=()=>{ie.isEnabled||Fe.warning("当前您的浏览器不支持全屏 ❌"),ie.toggle()};return(o,i)=>(C(),T("div",qt,[v("i",{class:Z([["iconfont",t.value?"icon-suoxiao":"icon-fangda"],"toolBar-icon"]),onClick:n},null,2)]))}});let be={};function ge(e={}){be={animate:!0,allowClose:!0,overlayOpacity:.7,smoothScroll:!1,disableActiveInteraction:!1,showProgress:!1,stagePadding:10,stageRadius:5,popoverOffset:10,showButtons:["next","previous","close"],disableButtons:[],overlayColor:"#000",...e}}function m(e){return e?be[e]:be}function ce(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}function ze(e){const t='a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';return e.flatMap(n=>{const o=n.matches(t),i=Array.from(n.querySelectorAll(t));return[...o?[n]:[],...i]}).filter(n=>getComputedStyle(n).pointerEvents!=="none"&&Kt(n))}function Ue(e){if(!e||jt(e))return;const t=m("smoothScroll");e.scrollIntoView({behavior:!t||Ot(e)?"auto":"smooth",inline:"center",block:"center"})}function Ot(e){if(!e||!e.parentElement)return;const t=e.parentElement;return t.scrollHeight>t.clientHeight}function jt(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function Kt(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}let ve={};function V(e,t){ve[e]=t}function h(e){return e?ve[e]:ve}function Be(){ve={}}let _e={};function de(e,t){_e[e]=t}function te(e){var t;(t=_e[e])==null||t.call(_e)}function Qt(){_e={}}function Yt(e,t,n,o){let i=h("__activeStagePosition");const s=i||n.getBoundingClientRect(),f=o.getBoundingClientRect(),p=ce(e,s.x,f.x-s.x,t),r=ce(e,s.y,f.y-s.y,t),a=ce(e,s.width,f.width-s.width,t),l=ce(e,s.height,f.height-s.height,t);i={x:p,y:r,width:a,height:l},Ge(i),V("__activeStagePosition",i)}function qe(e){if(!e)return;const t=e.getBoundingClientRect(),n={x:t.x,y:t.y,width:t.width,height:t.height};V("__activeStagePosition",n),Ge(n)}function Zt(){const e=h("__activeStagePosition"),t=h("__overlaySvg");if(!e)return;if(!t){console.warn("No stage svg found.");return}const n=window.innerWidth,o=window.innerHeight;t.setAttribute("viewBox",`0 0 ${n} ${o}`)}function Jt(e){const t=Xt(e);document.body.appendChild(t),Ke(t,n=>{n.target.tagName==="path"&&te("overlayClick")}),V("__overlaySvg",t)}function Ge(e){const t=h("__overlaySvg");if(!t){Jt(e);return}const n=t.firstElementChild;if((n==null?void 0:n.tagName)!=="path")throw new Error("no path element found in stage svg");n.setAttribute("d",Oe(e))}function Xt(e){const t=window.innerWidth,n=window.innerHeight,o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.classList.add("driver-overlay","driver-overlay-animated"),o.setAttribute("viewBox",`0 0 ${t} ${n}`),o.setAttribute("xmlSpace","preserve"),o.setAttribute("xmlnsXlink","http://www.w3.org/1999/xlink"),o.setAttribute("version","1.1"),o.setAttribute("preserveAspectRatio","xMinYMin slice"),o.style.fillRule="evenodd",o.style.clipRule="evenodd",o.style.strokeLinejoin="round",o.style.strokeMiterlimit="2",o.style.zIndex="10000",o.style.position="fixed",o.style.top="0",o.style.left="0",o.style.width="100%",o.style.height="100%";const i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("d",Oe(e)),i.style.fill=m("overlayColor")||"rgb(0,0,0)",i.style.opacity=`${m("overlayOpacity")}`,i.style.pointerEvents="auto",i.style.cursor="auto",o.appendChild(i),o}function Oe(e){const t=window.innerWidth,n=window.innerHeight,o=m("stagePadding")||0,i=m("stageRadius")||0,s=e.width+o*2,f=e.height+o*2,p=Math.min(i,s/2,f/2),r=Math.floor(Math.max(p,0)),a=e.x-o+r,l=e.y-o,d=s-r*2,u=f-r*2;return`M${t},0L0,0L0,${n}L${t},${n}L${t},0Z
    M${a},${l} h${d} a${r},${r} 0 0 1 ${r},${r} v${u} a${r},${r} 0 0 1 -${r},${r} h-${d} a${r},${r} 0 0 1 -${r},-${r} v-${u} a${r},${r} 0 0 1 ${r},-${r} z`}function en(){const e=h("__overlaySvg");e&&e.remove()}function tn(){const e=document.getElementById("driver-dummy-element");if(e)return e;let t=document.createElement("div");return t.id="driver-dummy-element",t.style.width="0",t.style.height="0",t.style.pointerEvents="none",t.style.opacity="0",t.style.position="fixed",t.style.top="50%",t.style.left="50%",document.body.appendChild(t),t}function Me(e){const{element:t}=e;let n=typeof t=="string"?document.querySelector(t):t;n||(n=tn()),on(n,e)}function nn(){const e=h("__activeElement"),t=h("__activeStep");e&&(qe(e),Zt(),Ye(e,t))}function on(e,t){const n=Date.now(),o=h("__activeStep"),i=h("__activeElement")||e,s=!i||i===e,f=e.id==="driver-dummy-element",p=i.id==="driver-dummy-element",r=m("animate"),a=t.onHighlightStarted||m("onHighlightStarted"),l=(t==null?void 0:t.onHighlighted)||m("onHighlighted"),d=(o==null?void 0:o.onDeselected)||m("onDeselected"),u=m(),w=h();!s&&d&&d(p?void 0:i,o,{config:u,state:w}),a&&a(f?void 0:e,t,{config:u,state:w});const y=!s&&r;let _=!1;cn(),V("previousStep",o),V("previousElement",i),V("activeStep",t),V("activeElement",e);const b=()=>{if(h("__transitionCallback")!==b)return;const S=Date.now()-n,P=400-S<=400/2;t.popover&&P&&!_&&y&&(Te(e,t),_=!0),m("animate")&&S<400?Yt(S,400,i,e):(qe(e),l&&l(f?void 0:e,t,{config:m(),state:h()}),V("__transitionCallback",void 0),V("__previousStep",o),V("__previousElement",i),V("__activeStep",t),V("__activeElement",e)),window.requestAnimationFrame(b)};V("__transitionCallback",b),window.requestAnimationFrame(b),Ue(e),!y&&t.popover&&Te(e,t),i.classList.remove("driver-active-element","driver-no-interaction"),i.removeAttribute("aria-haspopup"),i.removeAttribute("aria-expanded"),i.removeAttribute("aria-controls"),m("disableActiveInteraction")&&e.classList.add("driver-no-interaction"),e.classList.add("driver-active-element"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded","true"),e.setAttribute("aria-controls","driver-popover-content")}function ln(){var e;(e=document.getElementById("driver-dummy-element"))==null||e.remove(),document.querySelectorAll(".driver-active-element").forEach(t=>{t.classList.remove("driver-active-element","driver-no-interaction"),t.removeAttribute("aria-haspopup"),t.removeAttribute("aria-expanded"),t.removeAttribute("aria-controls")})}function le(){const e=h("__resizeTimeout");e&&window.cancelAnimationFrame(e),V("__resizeTimeout",window.requestAnimationFrame(nn))}function sn(e){var t;if(!h("isInitialized")||!(e.key==="Tab"||e.keyCode===9))return;const n=h("__activeElement"),o=(t=h("popover"))==null?void 0:t.wrapper,i=ze([...o?[o]:[],...n?[n]:[]]),s=i[0],f=i[i.length-1];if(e.preventDefault(),e.shiftKey){const p=i[i.indexOf(document.activeElement)-1]||f;p==null||p.focus()}else{const p=i[i.indexOf(document.activeElement)+1]||s;p==null||p.focus()}}function je(e){var t;((t=m("allowKeyboardControl"))==null||t)&&(e.key==="Escape"?te("escapePress"):e.key==="ArrowRight"?te("arrowRightPress"):e.key==="ArrowLeft"&&te("arrowLeftPress"))}function Ke(e,t,n){const o=(i,s)=>{const f=i.target;e.contains(f)&&((!n||n(f))&&(i.preventDefault(),i.stopPropagation(),i.stopImmediatePropagation()),s==null||s(i))};document.addEventListener("pointerdown",o,!0),document.addEventListener("mousedown",o,!0),document.addEventListener("pointerup",o,!0),document.addEventListener("mouseup",o,!0),document.addEventListener("click",i=>{o(i,t)},!0)}function rn(){window.addEventListener("keyup",je,!1),window.addEventListener("keydown",sn,!1),window.addEventListener("resize",le),window.addEventListener("scroll",le)}function an(){window.removeEventListener("keyup",je),window.removeEventListener("resize",le),window.removeEventListener("scroll",le)}function cn(){const e=h("popover");e&&(e.wrapper.style.display="none")}function Te(e,t){var n,o;let i=h("popover");i&&document.body.removeChild(i.wrapper),i=un(),document.body.appendChild(i.wrapper);const{title:s,description:f,showButtons:p,disableButtons:r,showProgress:a,nextBtnText:l=m("nextBtnText")||"Next &rarr;",prevBtnText:d=m("prevBtnText")||"&larr; Previous",progressText:u=m("progressText")||"{current} of {total}"}=t.popover||{};i.nextButton.innerHTML=l,i.previousButton.innerHTML=d,i.progress.innerHTML=u,s?(i.title.innerHTML=s,i.title.style.display="block"):i.title.style.display="none",f?(i.description.innerHTML=f,i.description.style.display="block"):i.description.style.display="none";const w=p||m("showButtons"),y=a||m("showProgress")||!1,_=(w==null?void 0:w.includes("next"))||(w==null?void 0:w.includes("previous"))||y;i.closeButton.style.display=w.includes("close")?"block":"none",_?(i.footer.style.display="flex",i.progress.style.display=y?"block":"none",i.nextButton.style.display=w.includes("next")?"block":"none",i.previousButton.style.display=w.includes("previous")?"block":"none"):i.footer.style.display="none";const b=r||m("disableButtons")||[];b!=null&&b.includes("next")&&(i.nextButton.disabled=!0,i.nextButton.classList.add("driver-popover-btn-disabled")),b!=null&&b.includes("previous")&&(i.previousButton.disabled=!0,i.previousButton.classList.add("driver-popover-btn-disabled")),b!=null&&b.includes("close")&&(i.closeButton.disabled=!0,i.closeButton.classList.add("driver-popover-btn-disabled"));const S=i.wrapper;S.style.display="block",S.style.left="",S.style.top="",S.style.bottom="",S.style.right="",S.id="driver-popover-content",S.setAttribute("role","dialog"),S.setAttribute("aria-labelledby","driver-popover-title"),S.setAttribute("aria-describedby","driver-popover-description");const P=i.arrow;P.className="driver-popover-arrow";const F=((n=t.popover)==null?void 0:n.popoverClass)||m("popoverClass")||"";S.className=`driver-popover ${F}`.trim(),Ke(i.wrapper,U=>{var Q,k,oe;const D=U.target,Y=((Q=t.popover)==null?void 0:Q.onNextClick)||m("onNextClick"),J=((k=t.popover)==null?void 0:k.onPrevClick)||m("onPrevClick"),j=((oe=t.popover)==null?void 0:oe.onCloseClick)||m("onCloseClick");if(D.classList.contains("driver-popover-next-btn"))return Y?Y(e,t,{config:m(),state:h()}):te("nextClick");if(D.classList.contains("driver-popover-prev-btn"))return J?J(e,t,{config:m(),state:h()}):te("prevClick");if(D.classList.contains("driver-popover-close-btn"))return j?j(e,t,{config:m(),state:h()}):te("closeClick")},U=>!(i!=null&&i.description.contains(U))&&!(i!=null&&i.title.contains(U))&&typeof U.className=="string"&&U.className.includes("driver-popover")),V("popover",i);const L=((o=t.popover)==null?void 0:o.onPopoverRender)||m("onPopoverRender");L&&L(i,{config:m(),state:h()}),Ye(e,t),Ue(S);const B=e.classList.contains("driver-dummy-element"),A=ze([S,...B?[]:[e]]);A.length>0&&A[0].focus()}function Qe(){const e=h("popover");if(!(e!=null&&e.wrapper))return;const t=e.wrapper.getBoundingClientRect(),n=m("stagePadding")||0,o=m("popoverOffset")||0;return{width:t.width+n+o,height:t.height+n+o,realWidth:t.width,realHeight:t.height}}function Ae(e,t){const{elementDimensions:n,popoverDimensions:o,popoverPadding:i,popoverArrowDimensions:s}=t;return e==="start"?Math.max(Math.min(n.top-i,window.innerHeight-o.realHeight-s.width),s.width):e==="end"?Math.max(Math.min(n.top-(o==null?void 0:o.realHeight)+n.height+i,window.innerHeight-(o==null?void 0:o.realHeight)-s.width),s.width):e==="center"?Math.max(Math.min(n.top+n.height/2-(o==null?void 0:o.realHeight)/2,window.innerHeight-(o==null?void 0:o.realHeight)-s.width),s.width):0}function Ve(e,t){const{elementDimensions:n,popoverDimensions:o,popoverPadding:i,popoverArrowDimensions:s}=t;return e==="start"?Math.max(Math.min(n.left-i,window.innerWidth-o.realWidth-s.width),s.width):e==="end"?Math.max(Math.min(n.left-(o==null?void 0:o.realWidth)+n.width+i,window.innerWidth-(o==null?void 0:o.realWidth)-s.width),s.width):e==="center"?Math.max(Math.min(n.left+n.width/2-(o==null?void 0:o.realWidth)/2,window.innerWidth-(o==null?void 0:o.realWidth)-s.width),s.width):0}function Ye(e,t){const n=h("popover");if(!n)return;const{align:o="start",side:i="left"}=(t==null?void 0:t.popover)||{},s=o,f=e.id==="driver-dummy-element"?"over":i,p=m("stagePadding")||0,r=Qe(),a=n.arrow.getBoundingClientRect(),l=e.getBoundingClientRect(),d=l.top-r.height;let u=d>=0;const w=window.innerHeight-(l.bottom+r.height);let y=w>=0;const _=l.left-r.width;let b=_>=0;const S=window.innerWidth-(l.right+r.width);let P=S>=0;const F=!u&&!y&&!b&&!P;let L=f;if(f==="top"&&u?P=b=y=!1:f==="bottom"&&y?P=b=u=!1:f==="left"&&b?P=u=y=!1:f==="right"&&P&&(b=u=y=!1),f==="over"){const B=window.innerWidth/2-r.realWidth/2,A=window.innerHeight/2-r.realHeight/2;n.wrapper.style.left=`${B}px`,n.wrapper.style.right="auto",n.wrapper.style.top=`${A}px`,n.wrapper.style.bottom="auto"}else if(F){const B=window.innerWidth/2-(r==null?void 0:r.realWidth)/2,A=10;n.wrapper.style.left=`${B}px`,n.wrapper.style.right="auto",n.wrapper.style.bottom=`${A}px`,n.wrapper.style.top="auto"}else if(b){const B=Math.min(_,window.innerWidth-(r==null?void 0:r.realWidth)-a.width),A=Ae(s,{elementDimensions:l,popoverDimensions:r,popoverPadding:p,popoverArrowDimensions:a});n.wrapper.style.left=`${B}px`,n.wrapper.style.top=`${A}px`,n.wrapper.style.bottom="auto",n.wrapper.style.right="auto",L="left"}else if(P){const B=Math.min(S,window.innerWidth-(r==null?void 0:r.realWidth)-a.width),A=Ae(s,{elementDimensions:l,popoverDimensions:r,popoverPadding:p,popoverArrowDimensions:a});n.wrapper.style.right=`${B}px`,n.wrapper.style.top=`${A}px`,n.wrapper.style.bottom="auto",n.wrapper.style.left="auto",L="right"}else if(u){const B=Math.min(d,window.innerHeight-r.realHeight-a.width);let A=Ve(s,{elementDimensions:l,popoverDimensions:r,popoverPadding:p,popoverArrowDimensions:a});n.wrapper.style.top=`${B}px`,n.wrapper.style.left=`${A}px`,n.wrapper.style.bottom="auto",n.wrapper.style.right="auto",L="top"}else if(y){const B=Math.min(w,window.innerHeight-(r==null?void 0:r.realHeight)-a.width);let A=Ve(s,{elementDimensions:l,popoverDimensions:r,popoverPadding:p,popoverArrowDimensions:a});n.wrapper.style.left=`${A}px`,n.wrapper.style.bottom=`${B}px`,n.wrapper.style.top="auto",n.wrapper.style.right="auto",L="bottom"}F?n.arrow.classList.add("driver-popover-arrow-none"):dn(s,L,e)}function dn(e,t,n){const o=h("popover");if(!o)return;const i=n.getBoundingClientRect(),s=Qe(),f=o.arrow,p=s.width,r=window.innerWidth,a=i.width,l=i.left,d=s.height,u=window.innerHeight,w=i.top,y=i.height;f.className="driver-popover-arrow";let _=t,b=e;t==="top"?(l+a<=0?(_="right",b="end"):l+a-p<=0&&(_="top",b="start"),l>=r?(_="left",b="end"):l+p>=r&&(_="top",b="end")):t==="bottom"?(l+a<=0?(_="right",b="start"):l+a-p<=0&&(_="bottom",b="start"),l>=r?(_="left",b="start"):l+p>=r&&(_="bottom",b="end")):t==="left"?(w+y<=0?(_="bottom",b="end"):w+y-d<=0&&(_="left",b="start"),w>=u?(_="top",b="end"):w+d>=u&&(_="left",b="end")):t==="right"&&(w+y<=0?(_="bottom",b="start"):w+y-d<=0&&(_="right",b="start"),w>=u?(_="top",b="start"):w+d>=u&&(_="right",b="end")),_?(f.classList.add(`driver-popover-arrow-side-${_}`),f.classList.add(`driver-popover-arrow-align-${b}`)):f.classList.add("driver-popover-arrow-none")}function un(){const e=document.createElement("div");e.classList.add("driver-popover");const t=document.createElement("div");t.classList.add("driver-popover-arrow");const n=document.createElement("header");n.id="driver-popover-title",n.classList.add("driver-popover-title"),n.style.display="none",n.innerText="Popover Title";const o=document.createElement("div");o.id="driver-popover-description",o.classList.add("driver-popover-description"),o.style.display="none",o.innerText="Popover description is here";const i=document.createElement("button");i.type="button",i.classList.add("driver-popover-close-btn"),i.setAttribute("aria-label","Close"),i.innerHTML="&times;";const s=document.createElement("footer");s.classList.add("driver-popover-footer");const f=document.createElement("span");f.classList.add("driver-popover-progress-text"),f.innerText="";const p=document.createElement("span");p.classList.add("driver-popover-navigation-btns");const r=document.createElement("button");r.type="button",r.classList.add("driver-popover-prev-btn"),r.innerHTML="&larr; Previous";const a=document.createElement("button");return a.type="button",a.classList.add("driver-popover-next-btn"),a.innerHTML="Next &rarr;",p.appendChild(r),p.appendChild(a),s.appendChild(f),s.appendChild(p),e.appendChild(i),e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(s),{wrapper:e,arrow:t,title:n,description:o,footer:s,previousButton:r,nextButton:a,closeButton:i,footerButtons:p,progress:f}}function pn(){var e;const t=h("popover");t&&((e=t.wrapper.parentElement)==null||e.removeChild(t.wrapper))}function mn(e={}){ge(e);function t(){m("allowClose")&&a()}function n(){const l=h("activeIndex"),d=m("steps")||[];if(typeof l>"u")return;const u=l+1;d[u]?r(u):a()}function o(){const l=h("activeIndex"),d=m("steps")||[];if(typeof l>"u")return;const u=l-1;d[u]?r(u):a()}function i(l){(m("steps")||[])[l]?r(l):a()}function s(){var l;if(h("__transitionCallback"))return;const d=h("activeIndex"),u=h("__activeStep"),w=h("__activeElement");if(typeof d>"u"||typeof u>"u"||typeof h("activeIndex")>"u")return;const y=((l=u.popover)==null?void 0:l.onPrevClick)||m("onPrevClick");if(y)return y(w,u,{config:m(),state:h()});o()}function f(){var l;if(h("__transitionCallback"))return;const d=h("activeIndex"),u=h("__activeStep"),w=h("__activeElement");if(typeof d>"u"||typeof u>"u")return;const y=((l=u.popover)==null?void 0:l.onNextClick)||m("onNextClick");if(y)return y(w,u,{config:m(),state:h()});n()}function p(){h("isInitialized")||(V("isInitialized",!0),document.body.classList.add("driver-active",m("animate")?"driver-fade":"driver-simple"),rn(),de("overlayClick",t),de("escapePress",t),de("arrowLeftPress",s),de("arrowRightPress",f))}function r(l=0){var d,u,w,y,_,b,S,P;const F=m("steps");if(!F){console.error("No steps to drive through"),a();return}if(!F[l]){a();return}V("__activeOnDestroyed",document.activeElement),V("activeIndex",l);const L=F[l],B=F[l+1],A=F[l-1],U=((d=L.popover)==null?void 0:d.doneBtnText)||m("doneBtnText")||"Done",Q=m("allowClose"),k=typeof((u=L.popover)==null?void 0:u.showProgress)<"u"?(w=L.popover)==null?void 0:w.showProgress:m("showProgress"),oe=(((y=L.popover)==null?void 0:y.progressText)||m("progressText")||"{{current}} of {{total}}").replace("{{current}}",`${l+1}`).replace("{{total}}",`${F.length}`),D=((_=L.popover)==null?void 0:_.showButtons)||m("showButtons"),Y=["next","previous",...Q?["close"]:[]].filter(R=>!(D!=null&&D.length)||D.includes(R)),J=((b=L.popover)==null?void 0:b.onNextClick)||m("onNextClick"),j=((S=L.popover)==null?void 0:S.onPrevClick)||m("onPrevClick"),ae=((P=L.popover)==null?void 0:P.onCloseClick)||m("onCloseClick");Me({...L,popover:{showButtons:Y,nextBtnText:B?void 0:U,disableButtons:[...A?[]:["previous"]],showProgress:k,progressText:oe,onNextClick:J||(()=>{B?r(l+1):a()}),onPrevClick:j||(()=>{r(l-1)}),onCloseClick:ae||(()=>{a()}),...(L==null?void 0:L.popover)||{}}})}function a(l=!0){const d=h("__activeElement"),u=h("__activeStep"),w=h("__activeOnDestroyed"),y=m("onDestroyStarted");if(l&&y){const S=!d||(d==null?void 0:d.id)==="driver-dummy-element";y(S?void 0:d,u,{config:m(),state:h()});return}const _=(u==null?void 0:u.onDeselected)||m("onDeselected"),b=m("onDestroyed");if(document.body.classList.remove("driver-active","driver-fade","driver-simple"),an(),pn(),ln(),en(),Qt(),Be(),d&&u){const S=d.id==="driver-dummy-element";_&&_(S?void 0:d,u,{config:m(),state:h()}),b&&b(S?void 0:d,u,{config:m(),state:h()})}w&&w.focus()}return{isActive:()=>h("isInitialized")||!1,refresh:le,drive:(l=0)=>{p(),r(l)},setConfig:ge,setSteps:l=>{Be(),ge({...m(),steps:l})},getConfig:m,getState:h,getActiveIndex:()=>h("activeIndex"),isFirstStep:()=>h("activeIndex")===0,isLastStep:()=>{const l=m("steps")||[],d=h("activeIndex");return d!==void 0&&d===l.length-1},getActiveStep:()=>h("activeStep"),getActiveElement:()=>h("activeElement"),getPreviousElement:()=>h("previousElement"),getPreviousStep:()=>h("previousStep"),moveNext:n,movePrevious:o,moveTo:i,hasNextStep:()=>{const l=m("steps")||[],d=h("activeIndex");return d!==void 0&&l[d+1]},hasPreviousStep:()=>{const l=m("steps")||[],d=h("activeIndex");return d!==void 0&&l[d-1]},highlight:l=>{p(),Me({...l,popover:l.popover?{showButtons:[],showProgress:!1,progressText:"",...l.popover}:void 0})},destroy:()=>{a(!1)}}}const vn={class:"ct-guide-menu"},_n=Ce({__name:"Guide",setup(e){const t=mn({allowClose:!0,doneBtnText:"结束",nextBtnText:"下一步",prevBtnText:"上一步",steps:[{element:"#Guide",popover:{title:"Guide",description:"查看指引",side:"right"}},{element:"#fullscreen",popover:{title:"fullscreen",description:"打开全屏",side:"right"}},{element:"#SearchMenu",popover:{title:"SearchMenu",description:"全局搜索",side:"right"}},{element:"#ThemeSetting",popover:{title:"ThemeSetting",description:"主题设置",side:"right"}}]});return(n,o)=>(C(),T("div",vn,[v("i",{class:Z(["iconfont icon-peiwangyindao","toolBar-icon"]),onClick:o[0]||(o[0]=pt(i=>$(t).drive(),["prevent","stop"]))})]))}});function fn(e){return{all:e=e||new Map,on:function(t,n){var o=e.get(t);o?o.push(n):e.set(t,[n])},off:function(t,n){var o=e.get(t);o&&(n?o.splice(o.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var o=e.get(t);o&&o.slice().map(function(i){i(n)}),(o=e.get("*"))&&o.slice().map(function(i){i(t,n)})}}}const Ze=fn(),hn={class:"ct-theme-setting"},gn=Ce({__name:"ThemeSetting",setup(e){const t=()=>{Ze.emit("openThemeDrawer")};return(n,o)=>(C(),T("div",hn,[v("i",{class:Z(["iconfont icon-shezhi","toolBar-icon"]),onClick:o[0]||(o[0]=i=>t())})]))}}),wn={},bn={class:"ct-search-menu"};function yn(e,t){return C(),T("div",bn,[v("i",{class:Z(["iconfont icon-chaxun","toolBar-icon"])})])}const xn=z(wn,[["render",yn]]),Cn="/codetime-page-admin/assets/png/user-BI01qZ7k.png",kn=e=>(se("data-v-aa5bf89c"),e=e(),re(),e),$n=kn(()=>v("div",{class:"ct-avatar"},[v("img",{src:Cn,alt:"avatar"})],-1)),Sn={__name:"Avatar",setup(e){const t=mt(),n=he(),o=()=>{},i=()=>{vt.confirm("您是否确认退出登录?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{t.setToken(""),n.replace(_t),Fe.success("退出登录成功！")})};return(s,f)=>{const p=x("User"),r=x("el-icon"),a=x("el-dropdown-item"),l=x("Edit"),d=x("SwitchButton"),u=x("el-dropdown-menu"),w=x("el-dropdown");return C(),M(w,{trigger:"click"},{dropdown:g(()=>[c(u,null,{default:g(()=>[c(a,{onClick:f[0]||(f[0]=y=>o("infoRef"))},{default:g(()=>[c(r,null,{default:g(()=>[c(p)]),_:1}),G(" 个人信息 ")]),_:1}),c(a,{onClick:f[1]||(f[1]=y=>o("passwordRef"))},{default:g(()=>[c(r,null,{default:g(()=>[c(l)]),_:1}),G(" 修改密码 ")]),_:1}),c(a,{divided:"",onClick:i},{default:g(()=>[c(r,null,{default:g(()=>[c(d)]),_:1}),G("退出登录 ")]),_:1})]),_:1})]),default:g(()=>[$n]),_:1})}}},En=z(Sn,[["__scopeId","data-v-aa5bf89c"]]),Ln={class:"ct-tool-bar-rf"},Pn={class:"header-icon"},Bn={__name:"ToolBarRight",setup(e){return(t,n)=>(C(),T("div",Ln,[v("div",Pn,[c(Gt,{id:"fullscreen"}),c(_n,{id:"Guide"}),c(xn,{id:"SearchMenu"}),c(gn,{id:"ThemeSetting"}),c(En,{id:"Avatar"})])]))}},Je=z(Bn,[["__scopeId","data-v-1b570dd3"]]),Mn={class:"sle"},Tn={class:"sle"},An={key:0},Xe={__name:"SubMenu",props:{menuList:{type:Object,required:!0}},setup(e){const t=he(),n=o=>{if(o.meta.isLink)return window.open(o.meta.isLink,"_blank");console.log(o.path),t.push(o.path)};return(o,i)=>{const s=x("el-icon"),f=x("SubMenu",!0),p=x("el-sub-menu"),r=x("el-menu-item");return C(!0),T(X,null,ye(e.menuList,a=>{var l;return C(),T(X,{key:a.path},[a.hidden?O("",!0):(C(),T(X,{key:0},[(l=a.children)!=null&&l.length?(C(),M(p,{key:0,index:a.path},{title:g(()=>[a.meta.icon?(C(),M(s,{key:0},{default:g(()=>[(C(),M(ne(a.meta.icon)))]),_:2},1024)):O("",!0),v("span",Mn,ee(a.meta.title),1)]),default:g(()=>[c(f,{"menu-list":a.children},null,8,["menu-list"])]),_:2},1032,["index"])):(C(),M(r,{key:1,index:a.path,onClick:d=>n(a)},{title:g(()=>{var d;return[v("span",Tn,[G(ee(a.meta.title)+" ",1),(d=a.meta)!=null&&d.iconSpare?(C(),T("span",An,ee(a.meta.iconSpare),1)):O("",!0)])]}),default:g(()=>{var d;return[(d=a.meta)!=null&&d.icon?(C(),M(s,{key:0},{default:g(()=>[(C(),M(ne(a.meta.icon)))]),_:2},1024)):O("",!0)]}),_:2},1032,["index","onClick"]))],64))],64)}),128)}}},Vn=e=>(se("data-v-330a2e5a"),e=e(),re(),e),Fn={class:"logo-container flx-center"},Dn=Vn(()=>v("img",{class:"logo-img",src:He,alt:"代码时间"},null,-1)),In={__name:"index",setup(e){const t=q(),n=xe(),o=fe(),i="Codetime-Admin",s=H(()=>t.isCollapse),f=H(()=>t.accordion),p=H(()=>{const{meta:a,path:l}=o;return a!=null&&a.activeMenu?a.activeMenu:l}),r=H(()=>n.authMenuListGet);return(a,l)=>{const d=x("el-menu"),u=x("el-scrollbar"),w=x("el-aside"),y=x("el-header"),_=x("el-container");return C(),M(_,{class:"ct-layout"},{default:g(()=>[c(w,null,{default:g(()=>[v("div",{class:"aside-container",style:De({width:s.value?"65px":"235px"})},[v("div",Fn,[Dn,pe(v("span",{class:"logo-text"},ee($(i)),513),[[me,!s.value]])]),c(u,null,{default:g(()=>[c(d,{router:!1,"default-active":p.value,collapse:s.value,"unique-opened":f.value,"collapse-transition":!1},{default:g(()=>[c(Xe,{"menu-list":r.value},null,8,["menu-list"])]),_:1},8,["default-active","collapse","unique-opened"])]),_:1}),c(Re)],4)]),_:1}),c(_,null,{default:g(()=>[c(y,null,{default:g(()=>[c(We),c(Je)]),_:1}),c(Ne)]),_:1})]),_:1})}}},Hn=z(In,[["__scopeId","data-v-330a2e5a"]]),Rn={__name:"index",setup(e){const t=q();return Ie(),(n,o)=>{const i=x("el-switch");return C(),M(i,{modelValue:$(t).isDark,"onUpdate:modelValue":o[0]||(o[0]=s=>$(t).isDark=s),"inline-prompt":"","active-icon":$(ft),"inactive-icon":$(ht),onChange:n.switchDark},null,8,["modelValue","active-icon","inactive-icon","onChange"])}}},I=e=>(se("data-v-a046f0cd"),e=e(),re(),e),Nn={class:"ct-layout-box"},Wn=I(()=>v("div",{class:"layout-dark"},null,-1)),zn=I(()=>v("div",{class:"layout-container"},[v("div",{class:"layout-light"}),v("div",{class:"layout-content"})],-1)),Un=I(()=>v("div",{class:"layout-dark"},null,-1)),qn=I(()=>v("div",{class:"layout-container"},[v("div",{class:"layout-light"}),v("div",{class:"layout-content"})],-1)),Gn={class:"ct-theme-item"},On={class:"ct-theme-item"},jn={class:"ct-theme-item"},Kn=I(()=>v("span",null,"主题颜色",-1)),Qn={class:"ct-theme-item"},Yn=I(()=>v("span",null,"暗黑模式",-1)),Zn={class:"ct-theme-item"},Jn=I(()=>v("span",null,"灰色模式",-1)),Xn={class:"ct-theme-item mb40"},eo=I(()=>v("span",null,"色弱模式",-1)),to={class:"ct-theme-item"},no=I(()=>v("span",null,"菜单折叠",-1)),oo={class:"ct-theme-item"},io=I(()=>v("span",null,"菜单手风琴",-1)),lo={class:"ct-theme-item"},so=I(()=>v("span",null,"面包屑",-1)),ro={class:"ct-theme-item"},ao=I(()=>v("span",null,"面包屑图标",-1)),co={class:"ct-theme-item"},uo=I(()=>v("span",null,"标签栏",-1)),po={class:"ct-theme-item"},mo=I(()=>v("span",null,"标签栏图标",-1)),vo={class:"ct-theme-item"},_o=I(()=>v("span",null,"页脚",-1)),fo={__name:"index",setup(e){const{initTheme:t,setMenuTheme:n,setAsideTheme:o,setHeaderTheme:i,changeGreyOrWeak:s,changePrimary:f}=Ie(),p=q(),r=ue(!1);Ze.on("openThemeDrawer",()=>r.value=!0);const{layout:a,asideInverted:l,headerInverted:d,primary:u,isWeak:w,isGrey:y,isCollapse:_,accordion:b,breadcrumb:S,breadcrumbIcon:P,tabs:F,tabsIcon:L,footer:B}=we(p),A=[gt,"#daa96e","#0c819f","#409eff","#27ae60","#ff5c93","#e74c3c","#fd726d","#f39c12","#9b59b6"],U=Q=>{console.log(Q),p.updateGlobalState("layout",Q),o()};return(Q,k)=>{const oe=x("Notification"),D=x("el-icon"),Y=x("el-divider"),J=x("CircleCheckFilled"),j=x("el-tooltip"),ae=x("QuestionFilled"),R=x("el-switch"),et=x("ColdDrink"),tt=x("el-color-picker"),nt=x("Setting"),ot=x("el-drawer");return C(),M(ot,{modelValue:r.value,"onUpdate:modelValue":k[16]||(k[16]=E=>r.value=E),title:"布局设置",size:"290px"},{default:g(()=>[c(Y,{class:"ct-divider","content-position":"center"},{default:g(()=>[c(D,null,{default:g(()=>[c(oe)]),_:1}),G(" 布局样式 ")]),_:1}),v("div",Nn,[c(j,{effect:"dark",content:"纵向",placement:"top","show-after":200},{default:g(()=>[v("div",{class:Z(["ct-layout-item layout-vertical",{"is-active":$(a)=="vertical"}]),onClick:k[0]||(k[0]=E=>U("vertical"))},[Wn,zn,$(a)=="vertical"?(C(),M(D,{key:0},{default:g(()=>[c(J)]),_:1})):O("",!0)],2)]),_:1}),c(j,{effect:"dark",content:"经典",placement:"top","show-after":200},{default:g(()=>[v("div",{class:Z(["ct-layout-item layout-classic",{"is-active":$(a)=="classic"}]),onClick:k[1]||(k[1]=E=>U("classic"))},[Un,qn,$(a)=="classic"?(C(),M(D,{key:0},{default:g(()=>[c(J)]),_:1})):O("",!0)],2)]),_:1})]),v("div",Gn,[v("span",null,[G(" 侧边栏反转色 "),c(j,{effect:"dark",content:"侧边栏颜色变为深色模式",placement:"top"},{default:g(()=>[c(D,null,{default:g(()=>[c(ae)]),_:1})]),_:1})]),c(R,{modelValue:$(l),"onUpdate:modelValue":k[2]||(k[2]=E=>W(l)?l.value=E:null),onChange:$(o)},null,8,["modelValue","onChange"])]),v("div",On,[v("span",null,[G(" 头部反转 "),c(j,{effect:"dark",content:"侧边栏颜色变为深色模式",placement:"top"},{default:g(()=>[c(D,null,{default:g(()=>[c(ae)]),_:1})]),_:1})]),c(R,{modelValue:$(d),"onUpdate:modelValue":k[3]||(k[3]=E=>W(d)?d.value=E:null),onChange:$(i)},null,8,["modelValue","onChange"])]),c(Y,{class:"ct-divider","content-position":"center"},{default:g(()=>[c(D,null,{default:g(()=>[c(et)]),_:1}),G(" 全局主题 ")]),_:1}),v("div",jn,[Kn,c(tt,{modelValue:$(u),"onUpdate:modelValue":k[4]||(k[4]=E=>W(u)?u.value=E:null),predefine:A,onChange:$(f)},null,8,["modelValue","onChange"])]),v("div",Qn,[Yn,c(Rn)]),v("div",Zn,[Jn,c(R,{modelValue:$(y),"onUpdate:modelValue":k[5]||(k[5]=E=>W(y)?y.value=E:null),onChange:k[6]||(k[6]=E=>$(s)("grey",!!E))},null,8,["modelValue"])]),v("div",Xn,[eo,c(R,{modelValue:$(w),"onUpdate:modelValue":k[7]||(k[7]=E=>W(w)?w.value=E:null),onChange:k[8]||(k[8]=E=>$(s)("weak",!!E))},null,8,["modelValue"])]),c(Y,{class:"ct-divider","content-position":"center"},{default:g(()=>[c(D,null,{default:g(()=>[c(nt)]),_:1}),G(" 界面设置 ")]),_:1}),v("div",to,[no,c(R,{modelValue:$(_),"onUpdate:modelValue":k[9]||(k[9]=E=>W(_)?_.value=E:null)},null,8,["modelValue"])]),v("div",oo,[io,c(R,{modelValue:$(b),"onUpdate:modelValue":k[10]||(k[10]=E=>W(b)?b.value=E:null)},null,8,["modelValue"])]),v("div",lo,[so,c(R,{modelValue:$(S),"onUpdate:modelValue":k[11]||(k[11]=E=>W(S)?S.value=E:null)},null,8,["modelValue"])]),v("div",ro,[ao,c(R,{modelValue:$(P),"onUpdate:modelValue":k[12]||(k[12]=E=>W(P)?P.value=E:null)},null,8,["modelValue"])]),v("div",co,[uo,c(R,{modelValue:$(F),"onUpdate:modelValue":k[13]||(k[13]=E=>W(F)?F.value=E:null)},null,8,["modelValue"])]),v("div",po,[mo,c(R,{modelValue:$(L),"onUpdate:modelValue":k[14]||(k[14]=E=>W(L)?L.value=E:null)},null,8,["modelValue"])]),v("div",vo,[_o,c(R,{modelValue:$(B),"onUpdate:modelValue":k[15]||(k[15]=E=>W(B)?B.value=E:null)},null,8,["modelValue"])])]),_:1},8,["modelValue"])}}},ho=z(fo,[["__scopeId","data-v-a046f0cd"]]),go=e=>(se("data-v-318469a2"),e=e(),re(),e),wo={class:"ct-header-lf"},bo={class:"logo-container flx-center"},yo=go(()=>v("img",{class:"logo-img",src:He,alt:"代码时间"},null,-1)),xo={class:"logo-text"},Co={class:"ct-header-rt"},ko={__name:"index",setup(e){const t=q(),n=xe(),o=fe(),i="Codetime-Admin",s=H(()=>t.isCollapse),f=H(()=>t.accordion),p=H(()=>{const{meta:a,path:l}=o;return a!=null&&a.activeMenu?a.activeMenu:l}),r=H(()=>n.authMenuListGet);return(a,l)=>{const d=x("el-header"),u=x("el-menu"),w=x("el-scrollbar"),y=x("el-aside"),_=x("el-container");return C(),M(_,{class:"ct-layout"},{default:g(()=>[c(d,null,{default:g(()=>[v("div",wo,[v("div",bo,[yo,v("span",xo,ee($(i)),1)]),c(We)]),v("div",Co,[c(Je)])]),_:1}),c(_,{class:"ct-classic-content"},{default:g(()=>[c(y,null,{default:g(()=>[v("div",{class:"ct-aside-box",style:De({width:s.value?"65px":"235px"})},[c(w,null,{default:g(()=>[c(u,{router:!1,"default-active":p.value,collapse:s.value,"unique-opened":f.value,"collapse-transition":!1},{default:g(()=>[c(Xe,{"menu-list":r.value},null,8,["menu-list"])]),_:1},8,["default-active","collapse","unique-opened"])]),_:1}),c(Re,{id:"collapseIcon"})],4)]),_:1}),c(_,{class:"ct-classic-main"},{default:g(()=>[c(Ne)]),_:1})]),_:1})]),_:1})}}},$o=z(ko,[["__scopeId","data-v-318469a2"]]),Po={__name:"index",setup(e){const t={vertical:Hn,classic:$o},n=q(),o=H(()=>n.layout);return(i,s)=>(C(),T(X,null,[(C(),M(ne(t[o.value]))),c(ho)],64))}};export{Po as default};
