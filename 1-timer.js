import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as C,i as v}from"./assets/vendor-BbbuE1sJ.js";const a="timer-user-selected-date",l=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]"),s=document.querySelector("[data-reset]"),c=document.querySelector("[data-days]"),d=document.querySelector("[data-hours]"),m=document.querySelector("[data-minutes]"),f=document.querySelector("[data-seconds]");o.disabled=!0;s.disabled=!0;o.addEventListener("click",h);s.addEventListener("click",y);let e=null,i=null;D();const x={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){e=t[0].getTime(),S()}};C(l,x);function S(){if(Date.now()>=e){b(),M();return}o.disabled=!1}function M(){v.error({timeout:5e3,position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",transitionInMobile:"bounceInDown",transitionOutMobile:"fadeOutUp",displayMode:"replace",titleSize:"16px",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",title:"Error",message:"Please choose a date in the future"})}function h(){localStorage.getItem(a)===null&&localStorage.setItem(a,JSON.stringify(e)),o.disabled=!0,s.disabled=!1,l.disabled=!0,u(),i=setInterval(u,1e3)}function u(){const t=e-Date.now();if(t<=0){y();return}const n=k(t);c.textContent=r(n.days),d.textContent=r(n.hours),m.textContent=r(n.minutes),f.textContent=r(n.seconds)}function y(){i!=null&&clearInterval(i),b()}function k(t){const p=Math.floor(t/864e5),g=Math.floor(t%864e5/36e5),E=Math.floor(t%864e5%36e5/6e4),I=Math.floor(t%864e5%36e5%6e4/1e3);return{days:p,hours:g,minutes:E,seconds:I}}function r(t){return t.toString().padStart(2,"0")}function b(){localStorage.removeItem(a),o.disabled=!0,s.disabled=!0,l.disabled=!1,c.textContent="00",d.textContent="00",m.textContent="00",f.textContent="00"}function D(){e=JSON.parse(localStorage.getItem(a)),e!==null&&(S(),h())}
//# sourceMappingURL=1-timer.js.map
