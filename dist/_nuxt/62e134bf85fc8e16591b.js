(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{209:function(e,t,r){var content=r(211);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(41).default)("2d1fe9e2",content,!0,{sourceMap:!1})},210:function(e,t,r){"use strict";var o=r(209);r.n(o).a},211:function(e,t,r){(t=r(40)(!1)).push([e.i,".red-border{border:3px solid #6c757d;-webkit-box-shadow:3px 3px 6px #6c757d;box-shadow:3px 3px 6px #6c757d}",""]),e.exports=t},212:function(e,t,r){"use strict";t.a={created:function(){console.log("this is working")},data:function(){return{isHidden:!1,myVal:!0}},methods:{toggleShowHide:function(){this.isHidden=!this.isHidden},myMethod:function(){console.log("and this is working");var element=document.querySelectorAll(".card");console.log(element),element.forEach((function(e){e.classList.toggle("red-border")}))}}}},213:function(e,t,r){var content=r(216);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(41).default)("49973a22",content,!0,{sourceMap:!1})},214:function(e,t,r){"use strict";var o={name:"card",props:{card:Object,default:function(){return{}}}},n=(r(210),r(30)),component=Object(n.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card"},[t("b-card-img-lazy",{attrs:{src:this.card.url}})],1)}),[],!1,null,null,null);t.a=component.exports},215:function(e,t,r){"use strict";var o=r(213);r.n(o).a},216:function(e,t,r){(t=r(40)(!1)).push([e.i,".card img[data-v-19dec950]{width:100%}",""]),e.exports=t},222:function(e,t,r){"use strict";r.r(t);var o=r(214),n=r(212),c=r(57),d=r.n(c),l={components:{Card:o.a},mixins:[n.a],data:function(){return{cards:[],errorMessage:void 0}},mounted:function(){var e=this;d.a.defaults.headers.common["x-api-key"]="151c477d-020a-437e-9f7b-b7d06c7eff38",d.a.get("https://api.thedogapi.com/v1/images/search",{params:{limit:33,size:"thumb"}}).then((function(t){e.cards=t.data})).catch((function(t){console.error("oops an error: ",t),e.errorMessage="Oops, an error occurred!"}))}},f=(r(215),r(30)),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[e.errorMessage?r("p",[e._v(e._s(e.errorMessage))]):e._e(),e._v(" "),r("h1",[e._v("These are a few of my favorite dogs")]),e._v(" "),r("p",[e._v("I'm calling The Dog API for nine incredible dogs!")]),e._v(" "),e.myVal?r("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.top",value:"Make these cats go hmmm.",expression:"'Make these cats go hmmm.'",modifiers:{hover:!0,top:!0}}],staticClass:"btn-success",attrs:{title:"Do it now"},on:{click:function(t){return e.myMethod()}}},[e._v("\r\n      Click me to put a border on the dogs\r\n    ")]):e._e(),e._v(" "),r("p",[e._v(" ")]),e._v(" "),e.cards?r("section",{staticClass:"card-columns"},e._l(e.cards,(function(e){return r("card",{key:e.id,attrs:{img:e.url,card:e}})})),1):e._e()],1)}),[],!1,null,"19dec950",null);t.default=component.exports}}]);