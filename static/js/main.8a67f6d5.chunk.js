(this["webpackJsonpreact-advance-modal-example"]=this["webpackJsonpreact-advance-modal-example"]||[]).push([[0],[,,,function(e,t,n){e.exports=n(10)},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(4);var a=n(0),r=n.n(a),o=n(1),i=n.n(o);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var u="_Osy3E",c="_1q2dT",s="_1HM7F",d="_PN3fB",m=["className","pageClassName","pageAttributes","size","overlayColor","backgroundColor","floating","bottom","animation","children"],v=Object(a.forwardRef)((function(e,t){var n=e.className,i=void 0===n?"":n,v=e.pageClassName,p=void 0===v?"":v,f=e.pageAttributes,h=void 0===f?{}:f,b=e.size,g=void 0===b?999:b,y=e.overlayColor,E=e.backgroundColor,k=e.floating,C=e.bottom,w=e.animation,M=void 0===w?e.bottom?"slide-bottom":e.floating?"zoom-in":"slide":w,L=e.children,R=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,m),O=Object(a.useReducer)((function(e){return e+1}),0)[1],j=Object(a.useRef)([]),T=Object(a.useState)(!1),I=T[0],x=T[1],A=Object(a.useRef)({type:M,setType:function(e){M=A.current.type,A.current.type=e,e?(F.current.dataset.animation=e,F.current.removeAttribute("data-animation-pause")):F.current.setAttribute("data-animation-pause","")},pause:function(e){A.current.type=!1,F.current.setAttribute("data-animation-pause",""),e&&setTimeout(A.current.resume,e)},resume:function(){A.current.type=M,F.current.removeAttribute("data-animation-pause")}}),F=Object(a.useRef)(null),N=function(e,t){void 0===t&&(t={});var n=t,a=n.popLast,o=void 0!==a&&a,i=n.animation,u=void 0===i?A.current.type:i;!u&&A.current.type&&A.current.pause(250),j.current.push(r.a.createElement("div",l({key:Math.random(),className:s+" "+p},h),e)),O(),j.current.length>g&&(u?setTimeout((function(){j.current.shift(),O()}),250):(j.current.shift(),O())),o&&j.current.length>1&&(u?setTimeout((function(){j.current.splice(j.current.length-2,1),O()}),250):(j.current.splice(j.current.length-2,1),O()))},P=function(e){var t;void 0===e&&(e={});var n=e.animation;if(!(void 0===n?A.current.type:n))return j.current.pop(),A.current.type&&A.current.pause(250),void O();var a=null===(t=F.current.children)||void 0===t?void 0:t.length,r=F.current.children[a>1?a-2:0];r.classList.add(d),setTimeout((function(){r.classList.remove(d),j.current.pop(),O()}),250),j.current.length<=1&&(r&&F.current.classList.add(c),setTimeout((function(){r&&F.current.classList.remove(c)}),250))},S=function(e){void 0===e&&(e={});var t=e.animation;if(!(void 0===t?A.current.type:t))return j.current.splice(0,j.current.length),A.current.type&&A.current.pause(250),void O();var n=F.current.lastChild;null===n||void 0===n||n.classList.add(d),n&&F.current.classList.add(c),setTimeout((function(){null===n||void 0===n||n.classList.remove(d),n&&F.current.classList.remove(c),j.current.splice(0,j.current.length),O()}),250)},B=function(e){void 0===e&&(e={});var t=e.animation;if(!(void 0===t?A.current.type:t))return A.current.type&&A.current.pause(250),void x(!0);var n=F.current.lastChild;null===n||void 0===n||n.classList.add(d),n&&F.current.classList.add(c),setTimeout((function(){null===n||void 0===n||n.classList.remove(d),n&&F.current.classList.remove(c),x(!0)}),250)},_=function(e,t){void 0===t&&(t={});var n=t.animation;void 0===n&&A.current.type;e&&e.animation&&!e.animation&&A.current.type&&A.current.pause(250),e&&!e.animation&&N(e,t),x(!1)};return Object(a.useImperativeHandle)(t,(function(){return{push:N,pop:P,close:S,hide:B,show:_,animation:A}})),Object(a.useEffect)((function(){L&&N(L)}),[]),Object(o.createPortal)(r.a.createElement("div",l({className:u+" "+i,"data-animation":M,"data-modal-type":(k?"floating":"full")+(C?" bottom":""),ref:F,style:{display:!j.current.length||I?"none":void 0,"--modal-color-overlay":y||void 0,"--modal-color-bg":E||void 0,background:j.current.length>1&&!k?"var(--modal-color-bg)":void 0}},R),j.current),document.body)})),p=new function(){var e=this;this.advanceModalRef={},this.useModal=function(t){return void 0===t&&(t="default"),{push:function(n,a){return e.push(t,n,a)},pop:function(n){return e.pop(t,n)},close:function(n){return e.close(t,n)},transit:function(n,a){return e.transit(t,n,a)},hide:function(n){return e.hide(t,n)},show:function(n,a){return e.show(t,n,a)},animation:{getType:function(){var n,a;return null===(n=e.advanceModalRef[t])||void 0===n||null===(a=n.current)||void 0===a?void 0:a.animation.current.type},setType:function(n){var a,r;return null===(a=e.advanceModalRef[t])||void 0===a||null===(r=a.current)||void 0===r?void 0:r.animation.current.setType(n)},pause:function(n){var a,r;return null===(a=e.advanceModalRef[t])||void 0===a||null===(r=a.current)||void 0===r?void 0:r.animation.current.pause(n)},resume:function(){var n,a;return null===(n=e.advanceModalRef[t])||void 0===n||null===(a=n.current)||void 0===a?void 0:a.animation.current.resume()}}}},this.bindModal=function(t,n){return void 0===n&&(n="default"),e.advanceModalRef[n]=t,e.useModal(n)},this.push=function(t,n,a){var r,o;return null===(r=e.advanceModalRef[t])||void 0===r||null===(o=r.current)||void 0===o?void 0:o.push(n,a)},this.pop=function(t,n){var a,r;return null===(a=e.advanceModalRef[t])||void 0===a||null===(r=a.current)||void 0===r?void 0:r.pop(n)},this.close=function(t,n){var a,r;return null===(a=e.advanceModalRef[t])||void 0===a||null===(r=a.current)||void 0===r?void 0:r.close(n)},this.transit=function(t,n,a){var r,o;return null===(r=e.advanceModalRef[t])||void 0===r||null===(o=r.current)||void 0===o?void 0:o.push(n,l({popLast:!0},a))},this.hide=function(t,n){var a,r;return null===(a=e.advanceModalRef[t])||void 0===a||null===(r=a.current)||void 0===r?void 0:r.hide(n)},this.show=function(t,n,a){var r,o;return null===(r=e.advanceModalRef[t])||void 0===r||null===(o=r.current)||void 0===o?void 0:o.show(n,a)}},f=p.useModal,h=p.bindModal,b=v,g=(n(9),function(){var e=f();return r.a.createElement("div",null,r.a.createElement("h1",null," Floating Modal Content "),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, ea vix essent diceret, vidit abhorreant sed at, duo consul numquam at."),r.a.createElement("button",{onClick:e.pop}," Close "))}),y=function(){var e=f("bottom");return r.a.createElement("div",null,r.a.createElement("h1",null," Floating Modal Content "),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, ea vix essent diceret, vidit abhorreant sed at, duo consul numquam at."),r.a.createElement("button",{onClick:e.pop}," Close "))},E=function(){var e=f("full-page");return r.a.createElement("div",{style:{backgroundColor:"#6d9ce8",width:"100%",height:"100%"}},r.a.createElement("h2",null," Full Page Modal Content Step 1 "),r.a.createElement("h3",null," What is Lorem Ipsum? "),r.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),r.a.createElement("button",{onClick:function(){return e.push(r.a.createElement(k,null))}},"Got to step 2"),r.a.createElement("button",{onClick:e.pop}," Close "))},k=function(){var e=f("full-page");return r.a.createElement("div",{style:{backgroundColor:"#5dc294"}},r.a.createElement("h2",null," Full Page Modal Content Step 2 "),r.a.createElement("h3",null," Why do we use it? "),r.a.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."),r.a.createElement("button",{onClick:function(){return e.push(r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null," Last step! "),r.a.createElement("button",{onClick:e.pop}," Back "),r.a.createElement("button",{onClick:e.close}," Close ")))}},"Got to last"),r.a.createElement("button",{onClick:e.pop}," Back "),r.a.createElement("button",{onClick:e.close}," Close "))},C=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useRef)(null),o=h(e),i=h(t,"bottom"),l=h(n,"full-page");return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null," Welcome to React Advance Modal "),r.a.createElement("button",{onClick:function(){return o.show(r.a.createElement(g,null))}},"Show floating modal"),r.a.createElement("button",{onClick:function(){return i.show(r.a.createElement(y,null))}},"Show floating bottom modal"),r.a.createElement("button",{onClick:function(){return l.push(r.a.createElement(E,null))}},"Show full page modal"),r.a.createElement(b,{ref:e,floating:!0}),r.a.createElement(b,{ref:t,floating:!0,bottom:!0}),r.a.createElement(b,{ref:n}))};i.a.render(r.a.createElement(C,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.8a67f6d5.chunk.js.map