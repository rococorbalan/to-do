(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Pacifico&display=swap);"]),i.push([n.id,":root {\n    --main-green: #1ff400;\n    --main-blue: #00d4ff;\n}\n\n* {\n    font-family: \"Lexend\", 'Times New Roman', Times, serif;\n}\n\nhtml,body {\n    margin: 0;\n    height: 100%;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-template-columns: repeat(5, 1fr);\n}\n\n#header {\n    grid-row: 1 / 2;\n    grid-column: 1 / 6;\n\n    background-color: #daffc7;\n    \n    text-align: right;\n    padding-right: 50px;\n\n    background: rgb(31,244,0);\n    background: linear-gradient(90deg, rgba(31,244,0,1) 0%, rgba(0,212,255,1) 100%); \n}\n\n#sidebar {\n    grid-row: 2 / 7;\n    grid-column: 1 / 2;\n    width: 100%;\n    overflow: hidden;\n\n    background-color: #f7fff4;\n    border-right: 1px solid #ccc;\n\n    display: flex;\n    flex-direction: column;\n}\n\n#container {\n    grid-row: 3 / 7;\n    grid-column: 2 / 6;\n\n    align-self: baseline;\n\n    padding-right: 50px;\n    display: flex;\n    flex-direction: column;\n}\n\n#add-form-container {\n    grid-row: 2 / 3;\n    grid-column: 2 / 6;\n    height: min-content;\n    background-color: #f7fff4;\n    padding-right: 50px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.done {\n    text-decoration: line-through;\n    opacity: 0.5;\n    order: 2;\n}\n\ndialog::backdrop {\n    background-color: black;\n    opacity: .5;\n}\n\n#header span:nth-of-type(1), #header span:nth-of-type(5) {\n    font-family: \"Lexend\", 'Times New Roman', Times, serif;\n    font-size: 2.5rem;\n    \n}\n\n#header span:nth-of-type(3){\n    font-family: \"Pacifico\", 'Times New Roman', Times, serif;\n    font-size: 2.5rem;\n}\n\n#header span:nth-of-type(2), #header span:nth-of-type(4){\n    display: inline-block;\n    font-family: \"Lexend\", 'Times New Roman', Times, serif;\n    font-style: italic;\n    margin: 0 3px 0 2px;\n}\n\n#dropdown {\n    position: relative;\n    height: min-content;\n\n    font-family: \"Lexend\", 'Times New Roman', Times, serif;\n}\n\n#dropdown * {\n    box-sizing: border-box;\n}\n\n.select {\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    overflow: hidden;\n    width: 100%;\n    padding: 15px 15px 0;\n\n    font-size: 1.5rem;\n    text-shadow: 2px 1px 0 rgba(8,52,0,0.2);\n\n    transition: background 0.3s;\n}\n\n.selected {\n    overflow: hidden;\n}\n\n.caret {\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 6px solid black;\n    transition: 0.3s\n}\n\n.caret-rotate {\n    transform: rotate(180deg);\n}\n\n.menu {\n    list-style: none;\n    margin: 0;\n    padding: 0.2em 0;\n\n    opacity: 0;\n    display: none;\n    transition: 0.2s;\n    z-index: 1;\n    \n    font-size: 1.2rem;\n}\n\n\n.menu li {\n    cursor: pointer;\n    \n    border-radius: 5px;\n    padding: 0.7em 0.9em;\n    margin: 0.3em 0;\n\n    transition: all 0.3s ease;\n}\n\n.menu li:hover{\n    background-color: #e7e7e7;\n}\n\n.active {\n    background-color: rgba(31,244,0,1);\n    background: linear-gradient(90deg, rgba(31,244,0,0.5) 0%, rgba(0,212,255,0.5) 100%);\n}\n\n.menu-open {\n    display: block !important;\n    opacity: 1 !important;\n}\n\n.btn-container{\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n#new {\n    margin: 20px 0;\n    width: 90%;\n    height: 40px;\n\n    border: none;\n    font-family: \"Lexend\", 'Times New Roman', Times, serif;\n    font-size: 1rem;\n\n    background-color: rgba(31,244,0,1);\n    background: linear-gradient(90deg, rgba(31,244,0,0.5) 0%, rgba(0,212,255,0.5) 100%);\n    border-radius: 15px;\n\n    transition: all 0.3s ease;\n}\n\n#new:hover {\n    transform: scale(1.1);\n}\n\nfieldset {\n    border: none;\n    margin: 15px;\n    padding: 0;\n}\n\n#add-form {\n    width: 100%;\n}\n\n#add-form fieldset:first-of-type{\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n#title {\n    padding: 5px;\n    box-sizing: border-box;\n    flex: 1;\n    border: 2px solid #ccc;\n    border-radius: 15px;\n}\n\nlabel {\n    text-shadow: 2px 1px 0 rgba(8,52,0,0.2);\n}\n\n#delete-project, #confirm-buttons button, .hidden-buttons button, .remove-task {\n    all: unset;\n    padding: 5px;\n    height: 21px;\n    background-color: red;\n    color: white;\n    border-radius: 15px;\n    font-size: 0.8rem;\n    transition: all 0.3s ease;\n}\n\n#confirm-buttons img {\n    height: 21px;\n}\n\n#delete-project:hover, #confirm-buttons button:hover, .hidden-buttons button:hover, .remove-task:hover {\n    background-color: rgb(230, 0, 0);\n}\n\n.hidden {\n    opacity: 0 !important;\n    display: none !important;\n    z-index: 1 !important;\n}\n\n#hidden-inputs {\n    display: flex;\n    opacity: 1;\n    justify-content: space-evenly;\n}\n\n.deadline-container, .description-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.buttons-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.buttons-container button, #add-project button {\n    height: 35px;\n    width: 60px;\n\n    border-radius: 5px;\n    border: none;\n\n    background-color: #f7fff4;\n    border: 2px solid #ccc;\n\n    transition: all 0.3s ease;\n}\n\n.buttons-container button:hover, #add-project button:hover{\n    background-color: #e6eee4;\n}\n\n#description {\n    font-size: 0.8rem;\n}\n\n#add-project-dialog {\n    border-width: 3px;\n    border-style: solid;\n    border-image: linear-gradient(90deg, rgba(31,244,0,1) 0%, rgba(0,212,255,1) 100%) 1;\n    width: 400px;\n}\n\n.dialog-header {\n    margin: 15px 15px 0 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 1rem;\n    height: 60px;\n\n    border-bottom: 1px solid #ccc;\n}\n\n.dialog-header button {\n    cursor: pointer;\n    align-self: center;\n    font-size: 1.5rem;\n    border: none;\n    background-color: transparent;\n}\n\n#add-project {\n    margin: 20px;\n    display: flex;\n    justify-content: space-between;\n}\n\n#add-project input{\n    border: 2px solid #ccc;\n    border-radius: 15px;\n}\n\nh2, p {\n    margin: 0;\n    all: unset;\n}\n\n.todo-element {\n    display: flex;\n    font-size: 1rem !important;\n    font-weight: 400 !important;\n    \n    align-items: center;\n\n    border: 2px solid #ccc;\n    border-radius: 15px;\n    gap: 5px;\n    padding: 5px;\n    margin: 5px;\n}\n\n.todo-element:hover {\n    background-color: #e6eee4;\n}\n\n.todo-done {\n    order: 1;\n    border-right: 1px solid #ccc;\n}\n\n.todo-title{\n    order: 2;\n    border-right: 2px solid #ccc;\n    text-overflow: ellipsis;\n    padding-right: 5px;\n}\n\n.todo-description {\n    order: 3;\n    flex-grow: 1;\n    border-right: 2px solid #ccc;\n    padding-right: 5px;\n    color: #575757;\n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n\n.todo-deadline {\n    order: 4;\n    padding-right: 5px;\n    border-right: 2px solid #ccc;\n}\n\n.remove-task {\n    order: 5;\n}\n\n.hidden-buttons {\n    order: 6;\n}\n\n.hidden-buttons img {\n    height: 20px;\n    width: auto;\n}\n\n.wrong {\n    border: 2px solid red !important;\n}\n\n#main {\n    flex: 1;\n    overflow: scroll;\n}\n\n#footer {\n    background: rgb(31,244,0);\n    background: linear-gradient(90deg, rgba(31,244,0,1) 0%, rgba(0,212,255,1) 100%); \n\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n}\n\n#footer span {\n    font-family: \"Pacifico\", 'Times New Roman', Times, serif !important;\n    font-weight: 600;\n}",""]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var d=n[s],c=o.base?d[0]+o.base:d[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var m=t(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)e[m].references++,e[m].updater(f);else{var h=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var d=o(n,r),c=0;c<a.length;c++){var l=t(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var o=t(72),r=t.n(o),a=t(825),i=t.n(a),s=t(659),d=t.n(s),c=t(56),l=t.n(c),u=t(540),m=t.n(u),f=t(113),h=t.n(f),p=t(208),g={};g.styleTagTransform=h(),g.setAttributes=l(),g.insert=d().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=m(),r()(p.A,g),p.A&&p.A.locals&&p.A.locals,document.querySelectorAll(".project");const b=document.getElementById("new"),y=(document.getElementById("current-project"),document.getElementById("add-project-dialog")),v=document.querySelector(".dialog-close"),x=document.getElementById("add-project"),w=document.getElementById("new-project-title"),k=document.getElementById("add-project-btn"),E=document.getElementById("dropdown"),M=E.querySelector(".select"),L=E.querySelector(".caret"),S=E.querySelector(".menu"),C=S.children,T=E.querySelector(".selected");let j,D,P=[];function W(){const n=JSON.stringify(P);localStorage.setItem("projects",n)}const I=()=>D,A=n=>{D=n;const e=Array.from(C).find((e=>e.textContent.trim()===n.name));T.textContent=e.textContent,M.classList.remove("select-clicked"),L.classList.remove("caret-rotate"),S.classList.remove("menu-open");for(const n of C)n.classList.remove("active");e.classList.add("active")};class B{constructor(n){this.name=n,this.tasks=[],this.tasksElements=[]}addTask(n,e){this.tasks.push(n),this.tasksElements.push(e),W()}}M.addEventListener("click",(()=>{M.classList.toggle("select-clicked"),L.classList.toggle("caret-rotate"),S.classList.toggle("menu-open")}));for(const n of C)n.addEventListener("click",(()=>{T.textContent=n.textContent,M.classList.remove("select-clicked"),L.classList.remove("caret-rotate"),S.classList.remove("menu-open");for(const n of C)n.classList.remove("active");n.classList.add("active")}));b.addEventListener("click",(()=>{y.showModal()})),y.addEventListener("click",(n=>{n.target===y&&y.close()})),v.addEventListener("click",(()=>{y.close()})),k.addEventListener("click",(n=>{n.preventDefault(),0!==w.value.length&&(j=new B(w.value),x.reset(),y.close(),P.unshift(j),bn(j),W(),A(j))}));const N=t.p+"212631e3c7e14b1e511f.svg",q=t.p+"3c997d8f030fc0ec4ec6.svg",z=t.p+"6a54f9b7352cef9d81a6.svg",F=(Math.pow(10,8),43200),X=Symbol.for("constructDateFrom");function O(n,e){return"function"==typeof n?n(e):n&&"object"==typeof n&&X in n?n[X](e):n instanceof Date?new n.constructor(e):new Date(e)}const Y={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function J(n){return(e={})=>{const t=e.width?String(e.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const R={date:J({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:J({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:J({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},H={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function U(n){return(e,t)=>{let o;if("formatting"===(t?.context?String(t.context):"standalone")&&n.formattingValues){const e=n.defaultFormattingWidth||n.defaultWidth,r=t?.width?String(t.width):e;o=n.formattingValues[r]||n.formattingValues[e]}else{const e=n.defaultWidth,r=t?.width?String(t.width):n.defaultWidth;o=n.values[r]||n.values[e]}return o[n.argumentCallback?n.argumentCallback(e):e]}}const Q={ordinalNumber:(n,e)=>{const t=Number(n),o=t%100;if(o>20||o<10)switch(o%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},era:U({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:U({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:n=>n-1}),month:U({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:U({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:U({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function V(n){return(e,t={})=>{const o=t.width,r=o&&n.matchPatterns[o]||n.matchPatterns[n.defaultMatchWidth],a=e.match(r);if(!a)return null;const i=a[0],s=o&&n.parsePatterns[o]||n.parsePatterns[n.defaultParseWidth],d=Array.isArray(s)?function(n){for(let e=0;e<n.length;e++)if(n[e].test(i))return e}(s):function(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&n[e].test(i))return e}(s);let c;return c=n.valueCallback?n.valueCallback(d):d,c=t.valueCallback?t.valueCallback(c):c,{value:c,rest:e.slice(i.length)}}}const $={ordinalNumber:(_={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:n=>parseInt(n,10)},(n,e={})=>{const t=n.match(_.matchPattern);if(!t)return null;const o=t[0],r=n.match(_.parsePattern);if(!r)return null;let a=_.valueCallback?_.valueCallback(r[0]):r[0];return a=e.valueCallback?e.valueCallback(a):a,{value:a,rest:n.slice(o.length)}}),era:V({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:V({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:n=>n+1}),month:V({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:V({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:V({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var _;const G={code:"en-US",formatDistance:(n,e,t)=>{let o;const r=Y[n];return o="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),t?.addSuffix?t.comparison&&t.comparison>0?"in "+o:o+" ago":o},formatLong:R,formatRelative:(n,e,t,o)=>H[n],localize:Q,match:$,options:{weekStartsOn:0,firstWeekContainsDate:1}};let K={};function Z(){return K}function nn(n,e){return O(e||n,n)}function en(n){const e=nn(n),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+n-+t}function tn(n,...e){const t=O.bind(null,n||e.find((n=>"object"==typeof n)));return e.map(t)}function on(n,e){const t=+nn(n)-+nn(e);return t<0?-1:t>0?1:t}function rn(n,e){const t=nn(n,e?.in);return+function(n,e){const t=nn(n,e?.in);return t.setHours(23,59,59,999),t}(t,e)==+function(n,e){const t=nn(n,e?.in),o=t.getMonth();return t.setFullYear(t.getFullYear(),o+1,0),t.setHours(23,59,59,999),t}(t,e)}function an(n,e,t){const[o,r,a]=tn(t?.in,n,n,e),i=on(r,a),s=Math.abs(function(n,e,t){const[o,r]=tn(t?.in,n,e);return 12*(o.getFullYear()-r.getFullYear())+(o.getMonth()-r.getMonth())}(r,a));if(s<1)return 0;1===r.getMonth()&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-i*s);let d=on(r,a)===-i;rn(o)&&1===s&&1===on(o,a)&&(d=!1);const c=i*(s-+d);return 0===c?0:c}function sn(n,e,t){const o=function(n,e){return+nn(n)-+nn(e)}(n,e)/1e3;return(r=t?.roundingMethod,n=>{const e=(r?Math[r]:Math.trunc)(n);return 0===e?0:e})(o);var r}function dn(n,e){return function(n,e,t){const o=Z(),r=t?.locale??o.locale??G,a=on(n,e);if(isNaN(a))throw new RangeError("Invalid time value");const i=Object.assign({},t,{addSuffix:t?.addSuffix,comparison:a}),[s,d]=tn(t?.in,...a>0?[e,n]:[n,e]),c=sn(d,s),l=(en(d)-en(s))/1e3,u=Math.round((c-l)/60);let m;if(u<2)return t?.includeSeconds?c<5?r.formatDistance("lessThanXSeconds",5,i):c<10?r.formatDistance("lessThanXSeconds",10,i):c<20?r.formatDistance("lessThanXSeconds",20,i):c<40?r.formatDistance("halfAMinute",0,i):c<60?r.formatDistance("lessThanXMinutes",1,i):r.formatDistance("xMinutes",1,i):0===u?r.formatDistance("lessThanXMinutes",1,i):r.formatDistance("xMinutes",u,i);if(u<45)return r.formatDistance("xMinutes",u,i);if(u<90)return r.formatDistance("aboutXHours",1,i);if(u<1440){const n=Math.round(u/60);return r.formatDistance("aboutXHours",n,i)}if(u<2520)return r.formatDistance("xDays",1,i);if(u<F){const n=Math.round(u/1440);return r.formatDistance("xDays",n,i)}if(u<86400)return m=Math.round(u/F),r.formatDistance("aboutXMonths",m,i);if(m=an(d,s),m<12){const n=Math.round(u/F);return r.formatDistance("xMonths",n,i)}{const n=m%12,e=Math.trunc(m/12);return n<3?r.formatDistance("aboutXYears",e,i):n<9?r.formatDistance("overXYears",e,i):r.formatDistance("almostXYears",e+1,i)}}(n,function(n){return O(n,Date.now())}(n),e)}const cn=document.getElementById("container"),ln=document.querySelector(".menu"),un=document.querySelector(".select"),mn=document.querySelector(".caret"),fn=document.querySelector(".selected"),hn=ln.children;function pn(n){const e=document.createElement("img");e.src=N;const t=document.createElement("img");t.src=q;const o=document.createElement("img");o.src=z;const r=document.createElement("div");r.classList.add("todo-element");const a=document.createElement("h2");a.classList.add("todo-title"),a.textContent=n.title;const i=document.createElement("p");i.classList.add("todo-description"),i.textContent=n.description;const s=document.createElement("span");s.classList.add("todo-deadline"),""!==n.deadline?s.textContent=dn(n.deadline)+" left":s.textContent=n.deadline;const d=document.createElement("input");d.type="checkbox",d.addEventListener("change",(e=>{e.target.parentElement.classList.toggle("done"),n.done=d.checked,W()})),d.classList.add("todo-done");const c=document.createElement("div");c.classList.add("hidden-buttons"),c.classList.add("hidden");const l=document.createElement("button");l.classList.add("confirm-button"),l.appendChild(t),l.addEventListener("click",(()=>{const e=r,t=I().tasksElements.indexOf(e);I().tasksElements.splice(t,1),I().tasks.splice(I().tasks.indexOf(n),1),e.remove(),W()}));const u=document.createElement("button");u.classList.add("cancel-button"),u.appendChild(o),u.addEventListener("click",(()=>{c.classList.toggle("hidden"),m.classList.toggle("hidden")})),c.appendChild(l),c.appendChild(u);const m=document.createElement("button");return m.classList.add("remove-task"),m.appendChild(e),m.addEventListener("click",(()=>{c.classList.toggle("hidden"),m.classList.toggle("hidden")})),r.appendChild(a),r.appendChild(i),r.appendChild(s),r.appendChild(d),r.appendChild(m),r.appendChild(c),r}function gn(n){cn.innerHTML="",n.forEach((n=>{cn.appendChild(n)}))}function bn(n){let e=document.createElement("li");e.classList.add("project"),cn.innerHTML="",e.addEventListener("click",(()=>{fn.textContent=n.name,un.classList.remove("select-clicked"),mn.classList.remove("caret-rotate"),ln.classList.remove("menu-open"),A(n),gn(n.tasksElements);for(const n of hn)n.classList.remove("active");e.classList.add("active")})),ln.appendChild(e),e.textContent=n.name,A(n)}class yn{constructor(n,e,t){this.title=n,this.description=e,this.deadline=t,this.done=!1}}const vn=document.getElementById("add-form"),xn=document.getElementById("close-button"),wn=document.getElementById("save"),kn=document.getElementById("title"),En=document.getElementById("hidden-inputs"),Mn=document.getElementById("description"),Ln=document.getElementById("deadline"),Sn=document.getElementById("delete-project"),Cn=document.getElementById("confirm-buttons"),Tn=document.getElementById("confirm"),jn=document.getElementById("cancel"),Dn=dropdown.querySelector(".menu").children;kn.addEventListener("focus",(()=>{En.classList.remove("hidden")})),kn.addEventListener("input",(()=>{kn.classList.remove("wrong")})),xn.addEventListener("click",(n=>{n.preventDefault(),vn.reset(),En.classList.toggle("hidden")})),wn.addEventListener("click",(n=>{if(n.preventDefault(),0!==kn.value.length){let n=new yn(kn.value,Mn.value,Ln.value),e=pn(n);I().addTask(n,e),function(n,e){e.prepend(n)}(e,container),vn.reset()}else kn.classList.add("wrong")})),Sn.addEventListener("click",(n=>{n.preventDefault(),Sn.classList.toggle("hidden"),Cn.classList.toggle("hidden")})),jn.addEventListener("click",(n=>{n.preventDefault(),Sn.classList.toggle("hidden"),Cn.classList.toggle("hidden")})),Tn.addEventListener("click",(n=>{n.preventDefault();const e=Array.from(Dn).find((n=>n.textContent.trim()===I().name)),t=P.indexOf(I());P.splice(t,1),e.remove(),A(P[0]),gn(I().tasksElements),W(),Sn.classList.toggle("hidden"),Cn.classList.toggle("hidden")}));const Pn=(new Date).toISOString().split("T")[0];if(document.getElementById("deadline").min=Pn,localStorage.getItem("projects")&&0!==JSON.parse(localStorage.getItem("projects")).length)JSON.parse(localStorage.getItem("projects")).forEach((n=>{let e=new B(n.name);e.tasks=n.tasks,e.tasks.forEach((n=>{let t=pn(n);!0===n.done&&(t.classList.add("done"),t.children[3].checked=!0),e.tasksElements.push(t)})),P.push(e)})),P.forEach((n=>{bn(n)})),A(P[0]),gn(I().tasksElements);else{let n=new B("Work");P.unshift(n),bn(n);let e=new B("School");P.unshift(e),bn(e);let t=new B("Games");P.unshift(t),bn(t),W()}})();