!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="build",n(n.s=0)}([function(e,t){const n=document.querySelector("div#race"),o=document.querySelector("div#char"),r=document.querySelector("div#end");n.style.display="none",r.style.display="none";let c="",l="";function a(e){console.log(e)}function u(){n.style.display="none",r.style.display="",new Audio("../resources/coin.mp3").play(),document.querySelector("body").classList.add("ending"),document.querySelector(".btn-end").addEventListener("click",e=>{location.reload()})}function i(e){const t=document.querySelector("#player1_race td.active");a(t),c=`url("../resources/${e}.gif")`,t.style.backgroundImage=c}function d(e){const t=document.querySelector("#player2_race td.active");a(t),l=`url("../resources/${e}.gif")`,t.style.backgroundImage=l}document.addEventListener("keyup",e=>{const t=e.key;(e=>{"z"===e?i("doggo"):"x"===e?i("flash"):"c"===e?i("mario"):"v"===e?i("megaman"):"b"===e?i("sonic"):"n"===e&&i("spidey")})(t),(e=>{"a"===e?d("doggo"):"s"===e?d("flash"):"d"===e?d("mario"):"f"===e?d("megaman"):"g"===e?d("sonic"):"h"===e&&d("spidey")})(t),"p"===t?function(){const e=document.querySelector("#player1_race td.active"),t=document.getElementById("player1_race").getElementsByTagName("td"),n=t.length;e.style.backgroundImage=null;const o=e.nextElementSibling;e.classList.remove("active"),o===t[n-1]?u():(o.classList.add("active"),o.style.backgroundImage=c)}():"q"===t&&function(){const e=document.querySelector("#player2_race td.active"),t=document.getElementById("player2_race").getElementsByTagName("td"),n=t.length;e.style.backgroundImage=null;const o=e.nextElementSibling;o.style.backgroundImage=l,e.classList.remove("active"),o===t[n-1]?u():o.classList.add("active")}()}),document.querySelector(".btn-begin").addEventListener("click",e=>{n.style.display="",o.style.display="none"})}]);
//# sourceMappingURL=application.js.map