!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).donutPie={})}(this,(function(t){"use strict";var e=require("d3");var n=function(t,e,n,i,r,a,s,o,c,l){"boolean"!=typeof s&&(c=o,o=s,s=!1);var u,d="function"==typeof n?n.options:n;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,r&&(d.functional=!0)),i&&(d._scopeId=i),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=u):e&&(u=s?function(){e.call(this,l(this.$root.$options.shadowRoot))}:function(t){e.call(this,o(t))}),u)if(d.functional){var h=d.render;d.render=function(t,e){return u.call(e),h(t,e)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,u):[u]}return n},i={name:"donutPie",props:{value:{type:Number,default:function(){return Number.prototype.constructor()}},data:{type:Number,default:function(){return Number.POSITIVE_INFINITY}},remark:{type:String,default:function(){return String.prototype.constructor()}},title:{type:String,default:function(){return String.prototype.constructor()}},conf:{type:Object,default:function(){return{width:360,height:200,thickness:78,color:"#8888D3",bgColor:"#E9E9E9",disableCornerRadius:!1}}}},data:function(){return{anglesRange:.5*Math.PI,radius:0,pie:void 0,arc:void 0,bgArc:void 0,svg:void 0,chart:void 0,tooltip:void 0,oldVal:void 0}},created:function(){this.initConf()},mounted:function(){this.initGraph(),this.debounceInit(),this.draw()},methods:{debounceInit:function(){this.debouncTransitions=this.debounce(this.transitions,500)},init:function(){this.initConf(),this.initGraph()},initConf:function(){this.radius=Math.min(this.conf.width,this.conf.height)/2,this.oldVal=0},initGraph:function(){this.arc=e.arc().innerRadius(this.conf.thickness).outerRadius(this.radius).cornerRadius(this.disableCornerRadius?0:20).startAngle(-1*this.anglesRange).endAngle(-1*this.anglesRange),this.bgArc=e.arc().innerRadius(this.conf.thickness).outerRadius(this.radius).cornerRadius(this.disableCornerRadius?0:20).startAngle(-1*this.anglesRange).endAngle(this.anglesRange),this.svg=e.select(".dnt-pie").append("svg").attr("width",this.conf.width).attr("height",this.conf.height),this.tooltip=e.select(".dnt-pie").append("div").attr("class","tooltip").style("display","none").style("position","absolute").style("text-align","center").style("line-height","30px").style("padding","3px 5px").style("box-shadow","rgba(0, 0, 0, 0.15) 0px 2px 12px").style("margin-top","-40px").style("font","12px sans-serif").style("background","#fff").style("pointer-events","none")},refrech:function(){document.getElementsByClassName("charts").length&&this.svg.select(".charts").remove(),document.getElementsByClassName("legend").length&&this.svg.select(".legend").remove(),document.getElementsByClassName("arc").length&&this.svg.select(".arc").remove(),document.getElementsByClassName("bg-arc").length&&this.svg.select(".bg-arc").remove()},isNum:function(t){return/^\d+$/g.test(t.toString())},numberics:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!/^\d+$/g.test(t))return t;if(isNaN(t))return 0;var n=(""+t).length;if(n<7)return t;var i=Math.pow;return e=i(10,e),n-=n%3,Math.round(t*e/i(10,n))/e+" kMGTPE"[n/3]},draw:function(){var t=this,e=[this.value];t.charts=t.svg.selectAll("g").data(e).enter().append("g").attr("class","charts").attr("transform",t.translation(t.conf.width/2,2*t.conf.height/3));var n=t.svg.selectAll(".legend").data(e).enter().append("g").attr("class","legend").attr("transform",t.translation(-21,-21));document.getElementsByClassName("value-text").length?n.select(".value-text").text((function(){return""})):n.append("text").attr("class","value-text").attr("x",22).attr("y",12).attr("text-anchor","middle").attr("fill","#333").attr("transform",t.translation(t.conf.width/2,2*t.conf.height/3)).style("font-size","40px").style("font-weight","500").text((function(){return 0})),document.getElementsByClassName("title-text").length?n.select(".title-text").text((function(){return t.title||""})):n.append("text").attr("class","title-text").attr("x",22).attr("y",52).attr("text-anchor","middle").attr("fill","rgba(0, 0, 0, 0.65)").attr("transform",t.translation(t.conf.width/2,2*t.conf.height/3)).style("font-size","18px").style("font-weight","450").text((function(){return t.title||""})),t.charts.append("path").attr("class","bg-arc").attr("d",t.bgArc).attr("fill",t.conf.bgColor),t.charts.append("path").attr("d",t.arc).attr("class","arc").attr("fill",t.conf.color).on("mouseenter",(function(e){return t.arcTransition(t.arcHover,3)})).on("mousemove",(function(e){return t.tooltipHover(!0)})).on("mouseleave",(function(e){t.arcTransition(t.arcHover,0),t.tooltipHover(!1)})),t.$nextTick((function(){t.debouncTransitions()}))},transitions:function(){var t=this.data!==Number.POSITIVE_INFINITY?this.data:this.value;this.refreshTransition(),this.refreshTextTransition(t)},refreshTransition:function(){var t=this;e.select("path.arc").data([this.value]).transition().duration(1500).attrTween("d",(function(e){return t.arcTween(e)}))},refreshTextTransition:function(t){var n=this,i=this.numberics(t,5),r=this.data===Number.POSITIVE_INFINITY?"%":"";!/(k|M|G|T|P|E)$/g.test(i.toString())&&this.isNum(i)?e.select("text.value-text").data([i]).transition().tween("text",(function(t){return n.textWeen(t)})).duration(1500):e.select("text.value-text").text(i+r)},textWeen:function(t){var n=this.data===Number.POSITIVE_INFINITY?"%":"",i=e.select("text.value-text"),r=e.interpolateNumber(parseFloat(i.text()),t);return function(t){i.text(Math.round(r(t))+n)}},arcTween:function(t){var n=this,i=e.interpolate(-n.anglesRange+n.oldVal/100*2*n.anglesRange,-n.anglesRange+t/100*2*n.anglesRange);return function(t){return n.arc.endAngle(i(t)),n.arc(null)}},tooltipHover:function(t){this.remark&&this.tooltip.style("left",e.event.clientX-50+"px").style("top",e.event.offsetY+"px").style("display",t?"block":"none").html(t?this.remark:"")},arcTransition:function(t,e){this.charts.select(".arc").transition().duration(250).attrTween("d",(function(n){return t(e,n)}))},arcHover:function(t){var e=this,n=t>0?this.conf.thickness-t:this.conf.thickness,i=t>0?t+this.radius:this.radius;return function(t){return e.arc.innerRadius(n),e.arc.outerRadius(i),e.arc(null)}},translation:function(t,e){return"translate(".concat(t,", ").concat(e,")")},refreshIfNeed:function(){var t=this;this.refrech(),setTimeout((function(){t.draw()}),500)},debounce:function(t,e,n){var i;return function(){var r=this,a=arguments,s=n&&!i;clearTimeout(i),i=setTimeout((function(){i=null,n||t.apply(r,a)}),e),s&&t.apply(r,a)}}},watch:{value:function(t,e){this.oldVal=e,this.debouncTransitions()},data:function(t){this.debouncTransitions()}}},r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"dnt-pie",staticStyle:{position:"relative"}})};r._withStripped=!0;var a=n({render:r,staticRenderFns:[]},undefined,i,"data-v-9b1ecc74",!1,undefined,void 0,void 0),s=[a],o=function(t){s.forEach((function(e){t.component(e.name,e)}))};"undefined"!=typeof window&&window.Vue&&o(window.Vue),t.DonutPie=a,t.default=o,Object.defineProperty(t,"__esModule",{value:!0})}));
