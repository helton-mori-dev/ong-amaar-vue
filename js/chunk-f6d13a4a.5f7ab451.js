(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6d13a4a"],{"0008":function(s,e,t){},"2bc5":function(s,e,t){"use strict";t("14d9"),t("abd3");var a=t("1c87"),i=t("58df"),r=Object(i["a"])(a["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes(){return{"v-breadcrumbs__item":!0,[this.activeClass]:this.disabled}}},render(s){const{tag:e,data:t}=this.generateRouteLink();return s("li",[s(e,{...t,attrs:{...t.attrs,"aria-current":this.isActive&&this.isLink?"page":void 0}},this.$slots.default)])}}),o=t("80d2"),n=Object(o["e"])("v-breadcrumbs__divider","li"),c=t("7560");e["a"]=Object(i["a"])(c["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:()=>[]},large:Boolean},computed:{classes(){return{"v-breadcrumbs--large":this.large,...this.themeClasses}}},methods:{genDivider(){return this.$createElement(n,this.$slots.divider?this.$slots.divider:this.divider)},genItems(){const s=[],e=!!this.$scopedSlots.item,t=[];for(let a=0;a<this.items.length;a++){const i=this.items[a];t.push(i.text),e?s.push(this.$scopedSlots.item({item:i})):s.push(this.$createElement(r,{key:t.join("."),props:i},[i.text])),a<this.items.length-1&&s.push(this.genDivider())}return s}},render(s){const e=this.$slots.default||this.genItems();return s("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},"3c43":function(s,e,t){"use strict";t("0008")},abd3:function(s,e,t){},d88d:function(s,e,t){"use strict";t.r(e);var a=t("2bc5"),i=t("8336"),r=t("62ad"),o=t("a523"),n=t("132d"),c=t("0fd9"),u=t("2fa4"),d=function(){var s=this,e=s._self._c;return e("div",[e(o["a"],{staticClass:"container-message"},[e(c["a"],{staticClass:"text-center",attrs:{"no-gutters":""}},[e(r["a"],{staticClass:"message",attrs:{cols:"12"}},[e("h1",{staticClass:"first-text"},[s._v(" "+s._s(s.firstMessage)+" "),e("span",{staticClass:"second-text"},[s._v(" "+s._s(s.secondMessage)+" ")])])])],1)],1),e(o["a"],{staticClass:"breadcrumbs"},[e(a["a"],{attrs:{items:s.items},scopedSlots:s._u([{key:"divider",fn:function(){return[e(n["a"],[s._v("mdi-chevron-right")])]},proxy:!0}])})],1),e(o["a"],{staticClass:"container-message-dark"},[e(c["a"],[e(u["a"]),e(r["a"],{staticClass:"central-text",attrs:{cols:"10",sm:"6"}},[s._v(" Você quer ser um parceiro? Através das parcerias, a ONG conseguiu pagar muitas das suas dívidas. "),e("br"),s._v(" Sua ajuda é muito importante! ")]),e(u["a"])],1)],1),e(o["a"],{staticClass:"container-duvidas",attrs:{"no-gutters":""}},[e(c["a"],{staticClass:"text-center",attrs:{"no-gutters":""}},[e(r["a"],{staticClass:"message",attrs:{cols:"12"}},[e("h2",{staticClass:"first-text",staticStyle:{"line-height":"0"}},[s._v(" "+s._s(s.exclamacao)+" "),e("span",{staticClass:"second-text",staticStyle:{"font-size":"36px"}},[s._v(" "+s._s(s.duvidasFrequentes)+" ")])])])],1),e(c["a"],{staticClass:"perguntas"},[e("p",{staticClass:"pergunta",on:{click:function(e){s.show1=!s.show1}}},[e("span",[s._v("+")]),s._v(" O que é necessário para ser um parceiro?")]),e("p",{directives:[{name:"show",rawName:"v-show",value:s.show1,expression:"show1"}],staticClass:"resposta"},[s._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque delectus reiciendis id consequuntur dolores laudantium nobis blanditiis a laborum totam culpa sequi nisi, iste dolore neque veritatis fuga consectetur?")]),e("p",{staticClass:"pergunta",on:{click:function(e){s.show2=!s.show2}}},[e("span",[s._v("+")]),s._v(" Como posso contribuir?")]),e("p",{directives:[{name:"show",rawName:"v-show",value:s.show2,expression:"show2"}],staticClass:"resposta"},[s._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque delectus reiciendis id consequuntur dolores laudantium nobis blanditiis a laborum totam culpa sequi nisi, iste dolore neque veritatis fuga consectetur?")]),e("p",{staticClass:"pergunta",on:{click:function(e){s.show3=!s.show3}}},[e("span",[s._v("+")]),s._v(" Por quanto tempo a parceria deve ocorrer?")]),e("p",{directives:[{name:"show",rawName:"v-show",value:s.show3,expression:"show3"}],staticClass:"resposta"},[s._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque delectus reiciendis id consequuntur dolores laudantium nobis blanditiis a laborum totam culpa sequi nisi, iste dolore neque veritatis fuga consectetur?")]),e("p",{staticClass:"pergunta",on:{click:function(e){s.show4=!s.show4}}},[e("span",[s._v("+")]),s._v(" Como tenho certeza que o serviço ou dinheiro está sendo bem empregado?")]),e("p",{directives:[{name:"show",rawName:"v-show",value:s.show4,expression:"show4"}],staticClass:"resposta"},[s._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque delectus reiciendis id consequuntur dolores laudantium nobis blanditiis a laborum totam culpa sequi nisi, iste dolore neque veritatis fuga consectetur?")])]),e(i["a"],{staticClass:"btn-lar",attrs:{depressed:"",large:"",color:"secondary"}},[s._v("Quero ser um parceiro")])],1)],1)},l=[],m={name:"SejaUmParceiro",data(){return{firstMessage:"Seja um",secondMessage:"Parceiro",exclamacao:"!",duvidasFrequentes:"Dúvidas Frequentes",show1:!1,show2:!1,show3:!1,show4:!1,items:[{text:"Início",disabled:!1,href:"/"},{text:"Seja um parceiro",disabled:!1,href:window.location.href}]}}},p=m,h=(t("3c43"),t("2877")),v=Object(h["a"])(p,d,l,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-f6d13a4a.5f7ab451.js.map