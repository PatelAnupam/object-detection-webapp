(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t){},133:function(e,t){},134:function(e,t){},176:function(e,t){},177:function(e,t){},178:function(e,t){},179:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n.n(a),r=n(88),o=n.n(r),s=n(14);var i=e=>{const t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)(()=>{navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user"}}).then(t=>{e.current.srcObject=t,e.current.onloadedmetadata=(()=>{r(!0)})})},[e]),c},u=n(89);var f=e=>{const t=Object(a.useState)(),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)(()=>{u.a.load(e).then(e=>{r(e)})},[e]),c},l=n(11),d=n.n(l),b=n(17);const x=e=>{const t=e.score.toFixed(4);return e.class+", score: "+t},h=(e,t)=>{const n=t.current.getContext("2d");n.clearRect(0,0,n.canvas.width,n.canvas.height);const a="16px sans-serif";n.font=a,n.textBaseline="top",e.forEach(e=>{const t=e.bbox[0],c=e.bbox[1],r=e.bbox[2],o=e.bbox[3];n.strokeStyle="#00FFFF",n.lineWidth=4,n.strokeRect(t,c,r,o),n.fillStyle="#00FFFF";const s=n.measureText(x(e)).width,i=parseInt(a,10);n.fillRect(t,c,s+4,i+4)}),e.forEach(e=>{const t=e.bbox[0],a=e.bbox[1];n.fillStyle="#000000",n.fillText(x(e),t,a)})},m=function(){var e=Object(b.a)(d.a.mark(function e(t,n,a){var c;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.detect(n.current);case 2:c=e.sent,h(c,a),requestAnimationFrame(()=>{m(t,n,a)});case 5:case"end":return e.stop()}},e)}));return function(t,n,a){return e.apply(this,arguments)}}();var v=(e,t,n,c)=>{Object(a.useEffect)(()=>{e&&c&&m(e,t,n)},[n,e,c,t])},p=n(47),w=n.n(p);const g=()=>{const e=Object(a.useRef)(),t=Object(a.useRef)(),n=i(e),r=f("/model_web");return v(r,e,t,n),c.a.createElement(c.a.Fragment,null,c.a.createElement("video",{className:w.a.fixed,autoPlay:!0,playsInline:!0,muted:!0,ref:e,width:"600",height:"500"}),c.a.createElement("canvas",{className:w.a.fixed,ref:t,width:"600",height:"500"}))},j=document.getElementById("root");o.a.render(c.a.createElement(g,null),j)},47:function(e,t,n){e.exports={fixed:"styles_fixed__v-bnh"}},90:function(e,t,n){e.exports=n(179)},99:function(e,t){}},[[90,1,2]]]);
//# sourceMappingURL=main.d624afec.chunk.js.map