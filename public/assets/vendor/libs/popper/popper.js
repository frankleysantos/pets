!function(e,t){var n=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=528)}({3:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},528:function(e,t,n){"use strict";n.r(t);var o=n(68);n.d(t,"Popper",function(){return o.a}),o.a.Defaults.modifiers.computeStyle.gpuAcceleration=!1},68:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.7
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */for(var r="undefined"!=typeof window&&"undefined"!=typeof document,i=["Edge","Trident","Firefox"],a=0,f=0;f<i.length;f+=1)if(r&&navigator.userAgent.indexOf(i[f])>=0){a=1;break}var s=r&&window.Promise,p=s?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},a))}};function c(e){return e&&"[object Function]"==={}.toString.call(e)}function l(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView,o=n.getComputedStyle(e,null);return t?o[t]:o}function u(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function d(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=l(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/(auto|scroll|overlay)/.test(n+r+o)?e:d(u(e))}var h=r&&!(!window.MSInputMethodContext||!document.documentMode),m=r&&/MSIE 10/.test(navigator.userAgent);function v(e){return 11===e?h:10===e?m:h||m}function g(e){if(!e)return document.documentElement;for(var t=v(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var o=n&&n.nodeName;return o&&"BODY"!==o&&"HTML"!==o?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===l(n,"position")?g(n):n:e?e.ownerDocument.documentElement:document.documentElement}function b(e){return null!==e.parentNode?b(e.parentNode):e}function w(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?e:t,r=n?t:e,i=document.createRange();i.setStart(o,0),i.setEnd(r,0);var a,f,s=i.commonAncestorContainer;if(e!==s&&t!==s||o.contains(r))return"BODY"===(f=(a=s).nodeName)||"HTML"!==f&&g(a.firstElementChild)!==a?g(s):s;var p=b(e);return p.host?w(p.host,t):w(e,b(t).host)}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",o=e.nodeName;if("BODY"===o||"HTML"===o){var r=e.ownerDocument.documentElement,i=e.ownerDocument.scrollingElement||r;return i[n]}return e[n]}function x(e,t){var n="x"===t?"Left":"Top",o="Left"===n?"Right":"Bottom";return parseFloat(e["border".concat(n,"Width")],10)+parseFloat(e["border".concat(o,"Width")],10)}function E(e,t,n,o){return Math.max(t["offset".concat(e)],t["scroll".concat(e)],n["client".concat(e)],n["offset".concat(e)],n["scroll".concat(e)],v(10)?parseInt(n["offset".concat(e)])+parseInt(o["margin".concat("Height"===e?"Top":"Left")])+parseInt(o["margin".concat("Height"===e?"Bottom":"Right")]):0)}function O(e){var t=e.body,n=e.documentElement,o=v(10)&&getComputedStyle(n);return{height:E("Height",t,n,o),width:E("Width",t,n,o)}}var L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function T(e){return L({},e,{right:e.left+e.width,bottom:e.top+e.height})}function M(e){var t={};try{if(v(10)){t=e.getBoundingClientRect();var n=y(e,"top"),o=y(e,"left");t.top+=n,t.left+=o,t.bottom+=n,t.right+=o}else t=e.getBoundingClientRect()}catch(e){}var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?O(e.ownerDocument):{},a=i.width||e.clientWidth||r.right-r.left,f=i.height||e.clientHeight||r.bottom-r.top,s=e.offsetWidth-a,p=e.offsetHeight-f;if(s||p){var c=l(e);s-=x(c,"x"),p-=x(c,"y"),r.width-=s,r.height-=p}return T(r)}function D(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=v(10),r="HTML"===t.nodeName,i=M(e),a=M(t),f=d(e),s=l(t),p=parseFloat(s.borderTopWidth,10),c=parseFloat(s.borderLeftWidth,10);n&&r&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var u=T({top:i.top-a.top-p,left:i.left-a.left-c,width:i.width,height:i.height});if(u.marginTop=0,u.marginLeft=0,!o&&r){var h=parseFloat(s.marginTop,10),m=parseFloat(s.marginLeft,10);u.top-=p-h,u.bottom-=p-h,u.left-=c-m,u.right-=c-m,u.marginTop=h,u.marginLeft=m}return(o&&!n?t.contains(f):t===f&&"BODY"!==f.nodeName)&&(u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=y(t,"top"),r=y(t,"left"),i=n?-1:1;return e.top+=o*i,e.bottom+=o*i,e.left+=r*i,e.right+=r*i,e}(u,t)),u}function F(e){if(!e||!e.parentElement||v())return document.documentElement;for(var t=e.parentElement;t&&"none"===l(t,"transform");)t=t.parentElement;return t||document.documentElement}function N(e,t,n,o){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},a=r?F(e):w(e,t);if("viewport"===o)i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,o=D(e,n),r=Math.max(n.clientWidth,window.innerWidth||0),i=Math.max(n.clientHeight,window.innerHeight||0),a=t?0:y(n),f=t?0:y(n,"left");return T({top:a-o.top+o.marginTop,left:f-o.left+o.marginLeft,width:r,height:i})}(a,r);else{var f;"scrollParent"===o?"BODY"===(f=d(u(t))).nodeName&&(f=e.ownerDocument.documentElement):f="window"===o?e.ownerDocument.documentElement:o;var s=D(f,a,r);if("HTML"!==f.nodeName||function e(t){var n=t.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===l(t,"position"))return!0;var o=u(t);return!!o&&e(o)}(a))i=s;else{var p=O(e.ownerDocument),c=p.height,h=p.width;i.top+=s.top-s.marginTop,i.bottom=c+s.top,i.left+=s.left-s.marginLeft,i.right=h+s.left}}var m="number"==typeof(n=n||0);return i.left+=m?n:n.left||0,i.top+=m?n:n.top||0,i.right-=m?n:n.right||0,i.bottom-=m?n:n.bottom||0,i}function C(e,t,n,o,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=N(n,o,i,r),f={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},s=Object.keys(f).map(function(e){return L({key:e},f[e],{area:(t=f[e],n=t.width,o=t.height,n*o)});var t,n,o}).sort(function(e,t){return t.area-e.area}),p=s.filter(function(e){var t=e.width,o=e.height;return t>=n.clientWidth&&o>=n.clientHeight}),c=p.length>0?p[0].key:s[0].key,l=e.split("-")[1];return c+(l?"-".concat(l):"")}function S(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=o?F(t):w(t,n);return D(n,r,o)}function P(e){var t=e.ownerDocument.defaultView,n=t.getComputedStyle(e),o=parseFloat(n.marginTop||0)+parseFloat(n.marginBottom||0),r=parseFloat(n.marginLeft||0)+parseFloat(n.marginRight||0),i={width:e.offsetWidth+r,height:e.offsetHeight+o};return i}function j(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function k(e,t,n){n=n.split("-")[0];var o=P(e),r={width:o.width,height:o.height},i=-1!==["right","left"].indexOf(n),a=i?"top":"left",f=i?"left":"top",s=i?"height":"width",p=i?"width":"height";return r[a]=t[a]+t[s]/2-o[s]/2,r[f]=n===f?t[f]-o[p]:t[j(f)],r}function W(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function H(e,t,n){var o=void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var o=W(e,function(e){return e[t]===n});return e.indexOf(o)}(e,"name",n));return o.forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&c(n)&&(t.offsets.popper=T(t.offsets.popper),t.offsets.reference=T(t.offsets.reference),t=n(t,e))}),t}function A(e,t){return e.some(function(e){var n=e.name,o=e.enabled;return o&&n===t})}function B(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length;o++){var r=t[o],i=r?"".concat(r).concat(n):e;if(void 0!==document.body.style[i])return i}return null}function I(e){var t=e.ownerDocument;return t?t.defaultView:window}function R(e,t,n,o){n.updateBound=o,I(e).addEventListener("resize",n.updateBound,{passive:!0});var r=d(e);return function e(t,n,o,r){var i="BODY"===t.nodeName,a=i?t.ownerDocument.defaultView:t;a.addEventListener(n,o,{passive:!0}),i||e(d(a.parentNode),n,o,r),r.push(a)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function U(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,I(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function _(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function Y(e,t){Object.keys(t).forEach(function(n){var o="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&_(t[n])&&(o="px"),e.style[n]=t[n]+o})}var q=r&&/Firefox/i.test(navigator.userAgent);function V(e,t,n){var o=W(e,function(e){var n=e.name;return n===t}),r=!!o&&e.some(function(e){return e.name===n&&e.enabled&&e.order<o.order});if(!r){var i="`".concat(t,"`"),a="`".concat(n,"`");console.warn("".concat(a," modifier is required by ").concat(i," modifier in order to work, be sure to include it before ").concat(i,"!"))}return r}var K=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],z=K.slice(3);function G(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=z.indexOf(e),o=z.slice(n+1).concat(z.slice(0,n));return t?o.reverse():o}var X={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function J(e,t,n,o){var r=[0,0],i=-1!==["right","left"].indexOf(o),a=e.split(/(\+|\-)/).map(function(e){return e.trim()}),f=a.indexOf(W(a,function(e){return-1!==e.search(/,|\s/)}));a[f]&&-1===a[f].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var s=/\s*,\s*|\s+/,p=-1!==f?[a.slice(0,f).concat([a[f].split(s)[0]]),[a[f].split(s)[1]].concat(a.slice(f+1))]:[a];return(p=p.map(function(e,o){var r=(1===o?!i:i)?"height":"width",a=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,a=!0,e):a?(e[e.length-1]+=t,a=!1,e):e.concat(t)},[]).map(function(e){return function(e,t,n,o){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+r[1],a=r[2];if(!i)return e;if(0===a.indexOf("%")){var f;switch(a){case"%p":f=n;break;case"%":case"%r":default:f=o}var s=T(f);return s[t]/100*i}return"vh"===a||"vw"===a?("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i:i}(e,r,t,n)})})).forEach(function(e,t){e.forEach(function(n,o){_(n)&&(r[t]+=n*("-"===e[o-1]?-1:1))})}),r}var Q={shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],r=t.split("-")[1];if(r){var i=e.offsets,a=i.reference,f=i.popper,s=-1!==["bottom","top"].indexOf(n),p=s?"left":"top",c=s?"width":"height",l={start:o({},p,a[p]),end:o({},p,a[p]+a[c]-f[c])};e.offsets.popper=L({},f,l[r])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n,o=t.offset,r=e.placement,i=e.offsets,a=i.popper,f=i.reference,s=r.split("-")[0];return n=_(+o)?[+o,0]:J(o,a,f,s),"left"===s?(a.top+=n[0],a.left-=n[1]):"right"===s?(a.top+=n[0],a.left+=n[1]):"top"===s?(a.left+=n[0],a.top-=n[1]):"bottom"===s&&(a.left+=n[0],a.top+=n[1]),e.popper=a,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||g(e.instance.popper);e.instance.reference===n&&(n=g(n));var r=B("transform"),i=e.instance.popper.style,a=i.top,f=i.left,s=i[r];i.top="",i.left="",i[r]="";var p=N(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);i.top=a,i.left=f,i[r]=s,t.boundaries=p;var c=t.priority,l=e.offsets.popper,u={primary:function(e){var n=l[e];return l[e]<p[e]&&!t.escapeWithReference&&(n=Math.max(l[e],p[e])),o({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=l[n];return l[e]>p[e]&&!t.escapeWithReference&&(r=Math.min(l[n],p[e]-("right"===e?l.width:l.height))),o({},n,r)}};return c.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";l=L({},l,u[t](e))}),e.offsets.popper=l,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,o=t.reference,r=e.placement.split("-")[0],i=Math.floor,a=-1!==["top","bottom"].indexOf(r),f=a?"right":"bottom",s=a?"left":"top",p=a?"width":"height";return n[f]<i(o[s])&&(e.offsets.popper[s]=i(o[s])-n[p]),n[s]>i(o[f])&&(e.offsets.popper[s]=i(o[f])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!V(e.instance.modifiers,"arrow","keepTogether"))return e;var r=t.element;if("string"==typeof r){if(!(r=e.instance.popper.querySelector(r)))return e}else if(!e.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var i=e.placement.split("-")[0],a=e.offsets,f=a.popper,s=a.reference,p=-1!==["left","right"].indexOf(i),c=p?"height":"width",u=p?"Top":"Left",d=u.toLowerCase(),h=p?"left":"top",m=p?"bottom":"right",v=P(r)[c];s[m]-v<f[d]&&(e.offsets.popper[d]-=f[d]-(s[m]-v)),s[d]+v>f[m]&&(e.offsets.popper[d]+=s[d]+v-f[m]),e.offsets.popper=T(e.offsets.popper);var g=s[d]+s[c]/2-v/2,b=l(e.instance.popper),w=parseFloat(b["margin".concat(u)],10),y=parseFloat(b["border".concat(u,"Width")],10),x=g-e.offsets.popper[d]-w-y;return x=Math.max(Math.min(f[c]-v,x),0),e.arrowElement=r,e.offsets.arrow=(o(n={},d,Math.round(x)),o(n,h,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(A(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=N(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),o=e.placement.split("-")[0],r=j(o),i=e.placement.split("-")[1]||"",a=[];switch(t.behavior){case X.FLIP:a=[o,r];break;case X.CLOCKWISE:a=G(o);break;case X.COUNTERCLOCKWISE:a=G(o,!0);break;default:a=t.behavior}return a.forEach(function(f,s){if(o!==f||a.length===s+1)return e;o=e.placement.split("-")[0],r=j(o);var p=e.offsets.popper,c=e.offsets.reference,l=Math.floor,u="left"===o&&l(p.right)>l(c.left)||"right"===o&&l(p.left)<l(c.right)||"top"===o&&l(p.bottom)>l(c.top)||"bottom"===o&&l(p.top)<l(c.bottom),d=l(p.left)<l(n.left),h=l(p.right)>l(n.right),m=l(p.top)<l(n.top),v=l(p.bottom)>l(n.bottom),g="left"===o&&d||"right"===o&&h||"top"===o&&m||"bottom"===o&&v,b=-1!==["top","bottom"].indexOf(o),w=!!t.flipVariations&&(b&&"start"===i&&d||b&&"end"===i&&h||!b&&"start"===i&&m||!b&&"end"===i&&v);(u||g||w)&&(e.flipped=!0,(u||g)&&(o=a[s+1]),w&&(i=function(e){return"end"===e?"start":"start"===e?"end":e}(i)),e.placement=o+(i?"-"+i:""),e.offsets.popper=L({},e.offsets.popper,k(e.instance.popper,e.offsets.reference,e.placement)),e=H(e.instance.modifiers,e,"flip"))}),e},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],o=e.offsets,r=o.popper,i=o.reference,a=-1!==["left","right"].indexOf(n),f=-1===["top","left"].indexOf(n);return r[a?"left":"top"]=i[n]-(f?r[a?"width":"height"]:0),e.placement=j(t),e.offsets.popper=T(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!V(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=W(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,o=t.y,r=e.offsets.popper,i=W(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a,f,s=void 0!==i?i:t.gpuAcceleration,p=g(e.instance.popper),c=M(p),l={position:r.position},u=function(e,t){var n=e.offsets,o=n.popper,r=n.reference,i=Math.round,a=Math.floor,f=function(e){return e},s=i(r.width),p=i(o.width),c=-1!==["left","right"].indexOf(e.placement),l=-1!==e.placement.indexOf("-"),u=s%2==p%2,d=t?c||l||u?i:a:f,h=t?i:f;return{left:d(s%2==1&&p%2==1&&!l&&t?o.left-1:o.left),top:h(o.top),bottom:h(o.bottom),right:d(o.right)}}(e,window.devicePixelRatio<2||!q),d="bottom"===n?"top":"bottom",h="right"===o?"left":"right",m=B("transform");if(f="bottom"===d?"HTML"===p.nodeName?-p.clientHeight+u.bottom:-c.height+u.bottom:u.top,a="right"===h?"HTML"===p.nodeName?-p.clientWidth+u.right:-c.width+u.right:u.left,s&&m)l[m]="translate3d(".concat(a,"px, ").concat(f,"px, 0)"),l[d]=0,l[h]=0,l.willChange="transform";else{var v="bottom"===d?-1:1,b="right"===h?-1:1;l[d]=f*v,l[h]=a*b,l.willChange="".concat(d,", ").concat(h)}var w={"x-placement":e.placement};return e.attributes=L({},w,e.attributes),e.styles=L({},l,e.styles),e.arrowStyles=L({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,n;return Y(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach(function(e){var o=n[e];!1!==o?t.setAttribute(e,n[e]):t.removeAttribute(e)}),e.arrowElement&&Object.keys(e.arrowStyles).length&&Y(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,o,r){var i=S(r,t,e,n.positionFixed),a=C(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",a),Y(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}},Z={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:Q},$=function(){function e(t,n){var o=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=p(this.update.bind(this)),this.options=L({},e.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(L({},e.Defaults.modifiers,r.modifiers)).forEach(function(t){o.options.modifiers[t]=L({},e.Defaults.modifiers[t]||{},r.modifiers?r.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return L({name:e},o.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&c(e.onLoad)&&e.onLoad(o.reference,o.popper,o.options,e,o.state)}),this.update();var i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}return t=e,(o=[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=S(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=C(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=k(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=H(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,A(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[B("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=R(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return U.call(this)}}])&&n(t.prototype,o),r&&n(t,r),e;var t,o,r}();$.Utils=("undefined"!=typeof window?window:e).PopperUtils,$.placements=K,$.Defaults=Z,t.a=$}).call(this,n(3))}});if("object"==typeof n){var o=["object"==typeof module&&"object"==typeof module.exports?module.exports:null,"undefined"!=typeof window?window:null,e&&e!==window?e:null];for(var r in n)o[0]&&(o[0][r]=n[r]),o[1]&&"__esModule"!==r&&(o[1][r]=n[r]),o[2]&&(o[2][r]=n[r])}}(this);