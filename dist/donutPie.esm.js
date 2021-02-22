function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof$1(e){return(_typeof$1="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(e){return _typeof(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _createForOfIteratorHelper(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw o}}}}var stringable=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return typeis(e)===Types.string&&(!t||e.length>0)},strLen=function(e){var t=0;if(!stringable(e))return t;for(var r=0,n=e.length;r<n;r++)t+=e.charCodeAt(r)<256?1:3;return t},kRegSignNumberic=new RegExp("^\\d+(\\.|\\.\\d+)?$","i"),kRegUnSignNumberic=new RegExp("^\\-\\d+(\\.|\\.\\d+)?$","i"),kRegNumberic=new RegExp("^\\-?\\d+(\\.|\\.\\d+)?$","i"),kRegStartStrictNumberic=new RegExp("^(\\-?[1-9]|0\\.\\d+|0$)","i"),kRegEndStrictNumberic=new RegExp("\\.$","i"),kEmptySpacer=new RegExp("(^$|^\\s+$)","i"),isNil=function(e){return isNull(e)||isUndefined(e)||typeis(e)===Types.string&&re(kEmptySpacer,e)},isNull=function(e){return typeis(e)===Types.null},isUndefined=function(e){return typeis(e)===Types.undefined},isNumberic=function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(isNil(e))return!1;if(!re(kRegStartStrictNumberic,e)||re(kRegEndStrictNumberic,e))return!1;var n=+e;return!isNaN(n)&&(r?typeis(t)===Types.bool?re(t?kRegSignNumberic:kRegUnSignNumberic,n):re(kRegNumberic,n):typeis(n)===Types.number)},objectable=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return typeis(e)===Types.object&&(!t||Object.keys(e).length>0)},optional=function optional(path,obj){var separator=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",rs=void 0,properties;if(!stringable(path)||!stringable(separator))return rs;var p=path,o;if(properties=-1===p.indexOf(separator)?Array.of(p):p.split(separator),isNil(obj)){try{o=isNumberic(properties[0])?eval("this[".concat(properties[0],"]")):eval("this."+properties[0])}catch(e){o=Object.prototype.constructor()}if(properties.shift(),typeis(o)===Types.object)o=o;else{if(typeis(o)!==Types.array)return rs;o=o}}else o=obj;return rs=properties.reduce((function(e,t){return objectable(e)?e[t]:arrayable(e)?isNumberic(t)?e[+t]:e[t]:e?e[t]:void 0}),o),rs},extractable=function extractable(){for(var rs=Object.prototype.constructor(),_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];if(!arrayable(args)||args.length<2)return rs;var t=Array.prototype.slice.call(args,-1)[0];if(typeis(t)===Types.string)try{t=eval("this."+t)}catch(e){t=void 0}if(!objectable(t))return rs;var o=Array.prototype.slice.apply(args,[0,-1]),_iterator=_createForOfIteratorHelper(o),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var i=_step.value;typeis(i)===Types.string?rs[i]=optional(i,t)||String.prototype.constructor():typeis(i)===Types.array?2===i.length?rs[i[0]]=(typeis(i[1])===Types.string?optional(i[1],t):i[1])||String.prototype.constructor():3===i.length&&(rs[i[0]]=objectable(i[2])||arrayable(i[2])?optional(i[1],i[2]):String.prototype.constructor()):typeis(i)===Types.object&&(rs=Object.assign(rs,i))}}catch(e){_iterator.e(e)}finally{_iterator.f()}return rs},assign=function e(t,r,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".";typeis(r)!==Types.object&&typeis(r)!==Types.array||(stringable(t)||arrayable(t))&&(stringable(t)&&(t=t.split(i)),t.length>1?e(t,r[t.shift()],n):r[t[0]]=n)},objReverse=function(e){if(!objectable(e))return e;var t=e,r=Object.keys(t).reduce((function(e,r){var n=String(t[r]),i=[];return arrayable(e[n],!1)&&(i=e[n]),Object.assign(e,_defineProperty({},n,i.concat(r)))}),{});for(var n in r)r.hasOwnProperty(n)&&(r[n]=Array.isArray(r[n])&&1===r[n].length?r[n][0]:r[n]);return r},Types,TypesDesc,e;e=Types||(Types={}),e.number="number",e.string="string",e.bool="bool",e[void 0]="undefined",e.null="null",e.array="array",e.uint8Array="uint8Array",e.object="object",e.function="function",e.bigInt="bigInt",e.date="date",e.weakMap="weakMap",e.map="map",e.weakSet="weakSet",e.set="set",e.symbol="symbol",e.arrayBuffer="arrayBuffer",e.unknown="",function(e){e["[object Number]"]="number",e["[object String]"]="string",e["[object Boolean]"]="bool",e["[object Undefined]"]="undefined",e["[object Null]"]="null",e["[object Array]"]="array",e["[object Uint8Array]"]="uint8Array",e["[object Object]"]="object",e["[object Function]"]="function",e["[object BigInt]"]="bigInt",e["[object Date]"]="date",e["[object WeakMap]"]="weakMap",e["[object Map]"]="map",e["[object WeakSet]"]="weakSet",e["[object ArrayBuffer]"]="arrayBuffer",e["[object Set]"]="set",e["[object Symbol]"]="symbol"}(TypesDesc||(TypesDesc={}));var inEnum=function(e,t){return!(!objectable(e)||e!==Object(e))&&(Object.prototype.hasOwnProperty.call(e,t)||Object.values(e).indexOf(t)>-1)},typeis=function(e){var t=Object.prototype.toString.call(e),r=Types.unknown;return Object.keys(TypesDesc).includes(t)&&(r=Types[TypesDesc[t]]),r},re=function(e,t){return e.test(t.toString())},arrayable=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return(typeis(e)===Types.array||typeis(e)===Types.uint8Array)&&(!t||e.length>0)},arrayUnique=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!arrayable(e))return e;if(t){var r=e.map((function(e){return JSON.stringify(e)}));return Array.from(new Set(r)).map((function(e){return JSON.parse(e)}))}return Array.from(new Set(e))},arrValsCount=function(e){var t={};return arrayable(e)?e.reduce((function(e,t){var r=t+"";return e[r]?e[r]++:e[r]=1,e}),t):t},arrValCount=function(e,t){if(!arrayable(e)||!e.includes(t))return 0;var r=arrValsCount(e),n=t+"";return r.hasOwnProperty(n)?r[n]:0},flat=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,n=Array.prototype.constructor();if(!arrayable(t,!1))return t;var i=isNaN(r)?1:Number(r);if(!i)return Array.prototype.slice.call(t);for(var o=0,a=t.length>>>0;o<a;o++)n=n.concat(e(t[o],i-1));return n},chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",InvalidCharacterError=function e(t){_classCallCheck(this,e),_defineProperty(this,"name",void 0),_defineProperty(this,"message",void 0),this.message=t,this.name="InvalidCharacterError"},_btoa,_atob;_btoa="undefined"!=typeof window&&window.btoa?window.btoa:function(e){for(var t=String(e),r="",n=0,i=0,o=0,a=chars;t.charAt(0|o)||(a="=",o%1);r+=a.charAt(63&n>>8-o%1*8)){if((i=t.charCodeAt(o+=3/4))>255)throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");n=n<<8|i}return r},_atob="undefined"!=typeof window&&window.atob?window.atob:function(e){var t=String(e).replace(/[=]+$/,"");if(t.length%4==1)throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,n="",i=0,o=0,a=0;r=t.charAt(a++);~r&&(o=i%4?64*o+r:r,i++%4)?n+=String.fromCharCode(255&o>>(-2*i&6)):0)r=chars.indexOf(r);return n};var url2Blob=function(e){if("undefined"==typeof window)throw new Error("url2Blob only works in browser environment");if(!stringable(e))throw new TypeError(e+" can not be null");var t=e.split(",");if(!arrayable(t))throw new ReferenceError("invalid data url");var r=t[0].match(/:(.*?);/);if(!arrayable(r)||r.length<2)throw new ReferenceError("invalid data format");for(var n=r,i=_atob(t[1]),o=i.length,a=new Uint8Array(o);o--;)a[o]=i.charCodeAt(o);return new Blob([a],{type:n[1]})},str2Buffer=function(e){if(stringable(e))return e=_btoa(unescape(encodeURIComponent(e))),new Uint8Array(Array.prototype.map.call(e,(function(e){return e.charCodeAt(0)})))},buffer2Str=function(e){if(arrayable(e)||objectable(e)||stringable(e)){typeis(e)===Types.string&&(e=JSON.parse.call(null,e));var t=Object.values(e);if(arrayable(t))return decodeURIComponent(escape(_atob(String.fromCharCode.apply(null,Array.prototype.map.call(new Uint8Array(t),(function(e){return e}))))))}},formatNumber=function(e){return(e=e.toString())[1]?e:"0"+e},formatDate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss",r=String.prototype.constructor();if(typeis(e)!==Types.date&&!stringable(e))return r;if(typeis(e)===Types.string&&(e=new Date(e)),"Invalid Date"===e.toString())return r;for(var n=e,i={Y:n.getFullYear(),M:n.getMonth()+1,D:n.getDate(),h:n.getHours(),m:n.getMinutes(),s:n.getSeconds()},o=0,a=Object.keys(i).length>>>0;o<a;o++)if(i.hasOwnProperty(i[o])&&isNaN(i[i[o]]))return r;var s={Y:i.Y.toString(),yyyy:i.Y.toString(),M:i.M.toString(),MM:formatNumber(i.M),d:i.D.toString(),dd:formatNumber(i.D),h:i.h.toString(),hh:formatNumber(i.h),m:i.m.toString(),mm:formatNumber(i.m),s:i.s.toString(),ss:formatNumber(i.s)},l=t.split(/-| |:|\//);r=t;for(var c=0;c<l.length;c++){var u=l[c];r=r.replace(u,s[u])}return r},timezoneDate=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=arguments.length>6?arguments[6]:void 0;if([e,t,r,n,i,o].every((function(e){return typeis(e)===Types.number&&e>=0}))){var s=new Date(Date.UTC(e,t-1,r,n,i,o)),l=new Date(s.toLocaleString("en-US",{timeZone:"UTC"})),c=s;if(stringable(a))c=new Date(s.toLocaleString("en-US",{timeZone:a}));else if("Invalid Date"===(c=new Date("".concat(t,"/").concat(r,"/").concat(e," ").concat(n,":").concat(i,":").concat(o))).toString())return;var u=l.getTime()-c.getTime();return s.setTime(s.getTime()+u),s}},mappable=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return typeis(e)===Types.map&&(!t||e.size>0)},rangeRandom=function(e,t){return!isNumberic(e)||!isNumberic(t)||e>t?Math.random():Math.random()*(t-e)+e},numberic=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=arguments.length>2?arguments[2]:void 0;if(isNumberic(e,void 0,!1)){var n=+e,i=Math.sign(n);n=Math.abs(n);var o=isNumberic(t,!0)?+(1+Array(t).fill(0).join("")):100,a=Math.round((n+Number.EPSILON)*o)/o;return i*((r=isNumberic(r,!0)?r:t)>0?+a.toFixed(r):a)}},sleep=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16;return new Promise((function(t){return setTimeout(t,e)}))},settable=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return typeis(e)===Types.set&&(!t||e.size>0)},PromiseStatus;!function(e){e.pending="pending",e.fulfilled="fulfilled",e.rejected="rejected"}(PromiseStatus||(PromiseStatus={}));var PromisePolyfill=function(){function e(t){var r=this;_classCallCheck(this,e),_defineProperty(this,"status",void 0),_defineProperty(this,"value",void 0),_defineProperty(this,"reason",void 0),_defineProperty(this,"onResolvedClosures",void 0),_defineProperty(this,"onRejectedClosures",void 0),this.status=PromiseStatus.pending,this.value=void 0,this.reason=void 0,this.onResolvedClosures=[],this.onRejectedClosures=[];var n=function(e){r.status===PromiseStatus.pending&&(r.status=PromiseStatus.rejected,r.reason=e,r.onRejectedClosures.forEach((function(e){return e()})))};try{t((function(e){r.status===PromiseStatus.pending&&(r.status=PromiseStatus.fulfilled,r.value=e,r.onResolvedClosures.forEach((function(e){return e()})))}),n)}catch(e){n(e)}}return _createClass(e,[{key:"then",value:function(t,r){var n=this;t="function"==typeof t?t:function(e){return e},r="function"==typeof r?r:function(e){throw e};var i=new e((function(e,o){n.status===PromiseStatus.fulfilled&&micro((function(){try{var r,a=null===(r=t)||void 0===r?void 0:r(n.value);resolvePromise(i,a,e,o)}catch(e){o(e)}})),n.status===PromiseStatus.rejected&&micro((function(){try{var t,a=null===(t=r)||void 0===t?void 0:t(n.reason);resolvePromise(i,a,e,o)}catch(e){o(e)}})),n.status===PromiseStatus.pending&&(n.onResolvedClosures.push((function(){micro((function(){try{var r,a=null===(r=t)||void 0===r?void 0:r(n.value);resolvePromise(i,a,e,o)}catch(e){o(e)}}))})),n.onRejectedClosures.push((function(){micro((function(){try{var t,a=null===(t=r)||void 0===t?void 0:t(n.reason);resolvePromise(i,a,e,o)}catch(e){o(e)}}))})))}));return i}},{key:"catch",value:function(e){return this.then(void 0,e)}}]),e}();function micro(e){return"undefined"!=typeof window?window.queueMicrotask(e):process.nextTick(e)}function resolvePromise(e,t,r,n){if(t===e)return n(new TypeError("Chaining cycle detected for promise"));var i=!1;if(null===t||"object"!==_typeof$1(t)&&"function"!=typeof t)r(t);else try{var o=t.then;"function"==typeof o?o.call(t,(function(t){i||(i=!0,resolvePromise(e,t,r,n))}),(function(e){i||(i=!0,n(e))})):r(t)}catch(e){if(i)return;i=!0,n(e)}}_defineProperty(PromisePolyfill,"resolve",void 0),_defineProperty(PromisePolyfill,"reject",void 0),_defineProperty(PromisePolyfill,"race",void 0),_defineProperty(PromisePolyfill,"all",void 0),_defineProperty(PromisePolyfill,"deferred",void 0),PromisePolyfill.resolve=function(e){return new PromisePolyfill((function(t,r){return t(e)}))},PromisePolyfill.reject=function(e){return new PromisePolyfill((function(t,r){return r(e)}))},PromisePolyfill.race=function(e){return new PromisePolyfill((function(t,r){for(var n=0;n<e.length;n++)e[n].then(t,r)}))},PromisePolyfill.all=function(e){var t=Array(),r=0;return new PromisePolyfill((function(n,i){for(var o=function(o){e[o].then((function(i){!function(n,i,o){t[n]=i,++r===e.length&&o(t)}(o,i,n)}),i)},a=0;a<e.length;a++)o(a)}))},PromisePolyfill.deferred=function(){var e={};return e.promise=new PromisePolyfill((function(t,r){e.resolve=t,e.reject=r})),e};var Jstd=Object.freeze({__proto__:null,arrayable:arrayable,arrayUnique:arrayUnique,arrValsCount:arrValsCount,arrValCount:arrValCount,flat:flat,get _btoa(){return _btoa},get _atob(){return _atob},url2Blob:url2Blob,str2Buffer:str2Buffer,buffer2Str:buffer2Str,typeis:typeis,re:re,formatDate:formatDate,timezoneDate:timezoneDate,get Types(){return Types},get TypesDesc(){return TypesDesc},inEnum:inEnum,mappable:mappable,rangeRandom:rangeRandom,numberic:numberic,objectable:objectable,optional:optional,extractable:extractable,assign:assign,objReverse:objReverse,isNil:isNil,isNull:isNull,isUndefined:isUndefined,isNumberic:isNumberic,sleep:sleep,settable:settable,stringable:stringable,strLen:strLen,PromisePolyfill:PromisePolyfill}),d3=require("d3"),script={name:"donutPie",props:{value:{type:Number,default:function(){return Number.prototype.constructor()}},data:{type:Number,default:function(){return Number.POSITIVE_INFINITY}},remark:{type:String,default:function(){return String.prototype.constructor()}},title:{type:String,default:function(){return String.prototype.constructor()}},conf:{type:Object,default:function(){return Object.prototype.constructor()}}},data:function(){return{className:"dnt-pie",anglesRange:.5*Math.PI,radius:0,pie:void 0,arc:void 0,bgArc:void 0,svg:void 0,chart:void 0,tooltip:void 0,oldVal:void 0,config:void 0}},created:function(){this.init()},mounted:function(){this.initGraph(),this.debounceInit(),this.draw()},methods:{debounceInit:function(){this.debouncTransitions=this.debounce(this.transitions,500)},init:function(){this.initClass(),this.initConf()},initClass:function(){this.className="pie-".concat(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7;return(16777215*Math.random()<<e).toString(16)}())},initConf:function(e){this.config=Object.assign({width:360,height:200,thickness:22,color:"#8888D3",bgColor:"#E9E9E9",percentColor:"#333333",titleColor:"rgba(0, 0, 0, 0.65)",disableCornerRadius:!1,titleTemplate:""},e||this.conf),this.radius=Math.min(this.config.width,this.config.height)/2,this.oldVal=0},initGraph:function(){var e=this.radius-this.config.thickness;this.arc=d3.arc().innerRadius(e).outerRadius(this.radius).cornerRadius(this.disableCornerRadius?0:20).startAngle(-1*this.anglesRange).endAngle(-1*this.anglesRange),this.bgArc=d3.arc().innerRadius(e).outerRadius(this.radius).cornerRadius(this.disableCornerRadius?0:20).startAngle(-1*this.anglesRange).endAngle(this.anglesRange),this.svg=d3.select(".".concat(this.className)).append("svg").attr("width",this.config.width).attr("height",this.config.height),this.tooltip=d3.select(".".concat(this.className)).append("div").attr("class","tooltip").style("display","none").style("position","absolute").style("text-align","center").style("line-height","30px").style("padding","3px 5px").style("box-shadow","rgba(0, 0, 0, 0.15) 0px 2px 12px").style("margin-top","-40px").style("font","12px sans-serif").style("background","#fff").style("pointer-events","none")},clear:function(){document.getElementsByClassName("charts").length&&this.svg.select(".charts").remove(),document.getElementsByClassName("legend").length&&this.svg.select(".legend").remove(),document.getElementsByClassName("arc").length&&this.svg.select(".arc").remove(),document.getElementsByClassName("bg-arc").length&&this.svg.select(".bg-arc").remove()},numberics:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!/^\d+$/g.test(e))return e;if(isNaN(e))return 0;var r=(""+e).length;if(r<7)return e;var n=Math.pow;return t=n(10,t),r-=r%3,Math.round(e*t/n(10,r))/t+" kMGTPE"[r/3]},draw:function(){var e=this,t=[this.value];e.charts=e.svg.selectAll("g").data(t).enter().append("g").attr("class","charts").attr("transform",e.translation(e.config.width/2,2*e.config.height/3));var r=e.svg.selectAll(".legend").data(t).enter().append("g").attr("class","legend").attr("transform",e.translation(-21,-21));document.querySelector(".".concat(this.className," .value-text"))?r.select(".value-text").text((function(){return""})):r.append("text").attr("class","value-text").attr("x",22).attr("y",12).attr("text-anchor","middle").attr("fill",e.config.percentColor||"#333").attr("transform",e.translation(e.config.width/2,2*e.config.height/3)).style("font-size","40px").style("font-weight","500").text((function(){return 0})),e.config.titleTemplate?e.svg.append("foreignObject").attr("class","fob").attr("width",e.config.width).attr("height",e.config.height).append("xhtml:div").attr("class","title-wrapper").style("font","14px 'Helvetica Neue'").html(e.config.titleTemplate):document.querySelector(".".concat(this.className," .title-text"))?r.select(".".concat(this.className," .title-text")).text((function(){return e.title||""})):r.append("text").attr("class","title-text").attr("x",22).attr("y",52).attr("text-anchor","middle").attr("fill",e.config.titleColor||"rgba(0, 0, 0, 0.65)").attr("transform",e.translation(e.config.width/2,2*e.config.height/3)).style("font-size","18px").style("font-weight","450").text((function(){return e.title||""})),e.charts.append("path").attr("class","bg-arc").attr("d",e.bgArc).attr("fill",e.config.bgColor),e.charts.append("path").attr("d",e.arc).attr("class","arc").attr("fill",e.config.color).on("mouseenter",(function(t){return e.arcTransition(e.arcHover,3)})).on("mousemove",(function(t){return e.tooltipHover(!0)})).on("mouseleave",(function(t){e.arcTransition(e.arcHover,0),e.tooltipHover(!1)})),e.$nextTick((function(){e.debouncTransitions()}))},transitions:function(){var e=this.data!==Number.POSITIVE_INFINITY?this.data:this.value;this.refreshTransition(),this.refreshTextTransition(e)},isNum:function(e){return isNumberic(e)},refreshTransition:function(){var e=this;this.svg.select("path.arc").data([this.value]).transition().duration(1500).attrTween("d",(function(t){return e.arcTween(t)}))},refreshTextTransition:function(e){var t=this,r=this.numberics(e,5),n=this.data===Number.POSITIVE_INFINITY?"%":"",i=d3.select(".".concat(t.className)).select("text.value-text");if(!/(k|M|G|T|P|E)$/g.test(r.toString())&&t.isNum(r)){var o=optional("1.length",r.toString().split("."))||0;i.data([r]).transition().tween("text",(function(e){return t.textWeen(e,i,o)})).duration(1500)}else setTimeout((function(){return i.text(r+n)}),1550)},textWeen:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=this,i=n.data===Number.POSITIVE_INFINITY?"%":"",o=d3.interpolateNumber(parseFloat(t.text()),e);return function(e){t.text(Number(o(e)).toFixed(r)+i)}},arcTween:function(e){var t=this,r=d3.interpolate(-t.anglesRange+t.oldVal/100*2*t.anglesRange,-t.anglesRange+e/100*2*t.anglesRange);return function(e){return t.arc.endAngle(r(e)),t.arc(null)}},tooltipHover:function(e){this.remark&&this.tooltip.style("left",d3.event.clientX-50+"px").style("top",d3.event.offsetY+"px").style("display",e?"block":"none").html(e?this.remark:"")},arcTransition:function(e,t){this.charts.select(".arc").transition().duration(250).attrTween("d",(function(r){return e(t,r)}))},arcHover:function(e){var t=this,r=this.radius-this.config.thickness,n=e>0?r-e:r,i=e>0?e+this.radius:this.radius;return function(e){return t.arc.innerRadius(n),t.arc.outerRadius(i),t.arc(null)}},translation:function(e,t){return"translate(".concat(e,", ").concat(t,")")},refreshIfNeed:function(){var e=this;this.clear(),setTimeout((function(){e.draw()}),500)},debounce:function(e,t,r){var n;return function(){var i=this,o=arguments,a=r&&!n;clearTimeout(n),n=setTimeout((function(){n=null,r||e.apply(i,o)}),t),a&&e.apply(i,o)}}},watch:{value:function(e,t){this.oldVal=t,this.debouncTransitions()},data:function(e){this.debouncTransitions()},conf:{handler:function(e){this.initConf(e)},immediate:!0,deep:!0}}};function normalizeComponent(e,t,r,n,i,o,a,s,l,c){"boolean"!=typeof a&&(l=s,s=a,a=!1);var u,f="function"==typeof r?r.options:r;if(e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,i&&(f.functional=!0)),n&&(f._scopeId=n),o?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},f._ssrRegister=u):t&&(u=a?function(){t.call(this,c(this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),u)if(f.functional){var d=f.render;f.render=function(e,t){return u.call(t),d(e,t)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,u):[u]}return r}var normalizeComponent_1=normalizeComponent,__vue_script__=script,__vue_render__=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"dnt-pie",class:e.className,staticStyle:{position:"relative"}})},__vue_staticRenderFns__=[];__vue_render__._withStripped=!0;var __vue_inject_styles__=void 0,__vue_scope_id__="data-v-0703b81d",__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,Main=normalizeComponent_1({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,__vue_is_functional_template__,__vue_module_identifier__,void 0,void 0),components=[Main],install=function(e){components.forEach((function(t){e.component(t.name,t)}))};"undefined"!=typeof window&&window.Vue&&install(window.Vue);export default install;export{Main as DonutPie};
