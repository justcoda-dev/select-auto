(function(){"use strict";var e={3115:function(e,t,n){var i=n(6369),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Container",[t("AutocompleteSelect",{attrs:{list:e.list}})],1)],1)},s=[],l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"autocomplete-select"},[t("div",{staticClass:"autocomplete-select__input-wrapper"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticClass:"autocomplete-select__input",attrs:{placeholder:e.placeholder||"select",type:"text",disabled:e.disabledInput},domProps:{value:e.inputValue},on:{input:function(t){t.target.composing||(e.inputValue=t.target.value)}}}),t("div",{staticClass:"autocomplete-select__buttons-wrapper"},[e.selectedItem?t("button",{staticClass:"button autocomplete-select__cancel",on:{click:e.cancelSelected}}):e._e(),t("button",{staticClass:"button autocomplete-select__open",on:{click:e.showList}})])]),e.listShow?t("ul",{staticClass:"autocomplete-select__list"},e._l(e.listOfSimilar,(function(n,i){return t("li",{key:n.id,ref:"item",refInFor:!0,staticClass:"autocomplete-select__list-item",class:{selected:e.hoverItemIndex===i},attrs:{tabindex:e.tabindex},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onKeyUp.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onKeyDown.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onKeyEnter.apply(null,arguments)}],click:function(t){return e.selectItem(n)}}},[e._v(" "+e._s(n.name)+" ")])})),0):e._e()])},r=[];const u=(e,t,n)=>{const i=t.length,o=t.map((t=>{const n=[...t.name.toLowerCase()].filter((t=>{if([...e.toLowerCase()].includes(t))return t})).join("").length;return{...t,sameCount:n}}));return o.sort(((e,t)=>t.sameCount-e.sameCount)),o.forEach((e=>delete e.sameCount)),o.length=n&&n<=i?n:i,o};var a={name:"AutocompleteSelect",props:{list:{type:Array,require:!0}},data:()=>({selectedItem:"",listShow:!1,selectedItemId:"",disabledInput:!1,placeholder:"",timeoutId:"",debouncedInputValue:"",hoverItemIndex:0,tabindex:"0",searchOptionsCount:10}),watch:{inputValue(){this.listShow=!!this.inputValue.length&&!this.selectedItem}},computed:{inputValue:{get(){return this.debouncedInputValue},set(e){this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout((()=>{this.debouncedInputValue=e}),300)}},listLength(){return this.list.length},listOfSimilar(){return this.inputValue.length?u(this.inputValue,this.list,this.searchOptionsCount):this.list}},methods:{selectItem(e){this.listShow=!1,this.selectedItem=e.name,this.inputValue=e.name,this.disabledInput=!0},showList(){this.listShow=!this.listShow,this.hoverItemIndex=0,this.listLength&&this.listShow&&this.$nextTick((()=>{this.$refs["item"][0].focus()}))},cancelSelected(){this.inputValue="",this.listShow=!1,this.selectedItem="",this.disabledInput=!1},onKeyUp(){this.hoverItemIndex=this.hoverItemIndex>0?this.hoverItemIndex-1:0},onKeyDown(){this.hoverItemIndex=this.hoverItemIndex<this.listLength-1?this.hoverItemIndex+1:this.hoverItemIndex},onKeyEnter(){this.selectItem(this.list[this.hoverItemIndex])}}},c=a,h=n(1001),p=(0,h.Z)(c,l,r,!1,null,"00169633",null),d=p.exports,m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[e._t("default")],2)},f=[],v={name:"Container"},I=v,y=(0,h.Z)(I,m,f,!1,null,"858682e4",null),w=y.exports,_={name:"App",components:{AutocompleteSelect:d,Container:w},data:()=>({list:[{id:1,name:"Alex"},{id:2,name:"Sania"},{id:3,name:"Mikle"},{id:4,name:"Alex"},{id:5,name:"Sania"},{id:6,name:"Mikle"}]})},b=_,x=(0,h.Z)(b,o,s,!1,null,null,null),k=x.exports;i.ZP.config.productionTip=!1,new i.ZP({render:e=>e(k)}).$mount("#app")}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,s){if(!i){var l=1/0;for(c=0;c<e.length;c++){i=e[c][0],o=e[c][1],s=e[c][2];for(var r=!0,u=0;u<i.length;u++)(!1&s||l>=s)&&Object.keys(n.O).every((function(e){return n.O[e](i[u])}))?i.splice(u--,1):(r=!1,s<l&&(l=s));if(r){e.splice(c--,1);var a=o();void 0!==a&&(t=a)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[i,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,s,l=i[0],r=i[1],u=i[2],a=0;if(l.some((function(t){return 0!==e[t]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(u)var c=u(n)}for(t&&t(i);a<l.length;a++)s=l[a],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},i=self["webpackChunkilevel"]=self["webpackChunkilevel"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(3115)}));i=n.O(i)})();
//# sourceMappingURL=app.87e237e4.js.map