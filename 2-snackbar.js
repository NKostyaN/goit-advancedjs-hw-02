import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as n}from"./assets/vendor-BbbuE1sJ.js";const i=document.querySelector("form"),a=document.getElementsByName("state"),s=document.querySelector("button");s.disabled=!0;i.addEventListener("input",c);i.addEventListener("submit",l);function c(e){e.target.checked&&(s.disabled=!1)}function l(e){e.preventDefault();const t=e.target[0].value;for(const o of a)o.checked&&m(o.value,t)}function m(e,t){new Promise((o,b)=>{const u=e==="fulfilled";setTimeout(()=>{u?f(t):d(t)},t)})}const r={timeout:5e3,position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",transitionInMobile:"bounceInDown",transitionOutMobile:"fadeOutUp",messageSize:"16px",messageColor:"black"};function f(e){n.show({...r,backgroundColor:"#a1cc74",message:`✅ Fulfilled promise in ${e} ms`})}function d(e){n.show({...r,backgroundColor:"#fdbbbb",message:`❌ Rejected promise in ${e} ms`})}
//# sourceMappingURL=2-snackbar.js.map
