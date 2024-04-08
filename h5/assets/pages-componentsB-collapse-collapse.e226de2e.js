import{m as e,h as t,A as a,d as l,o as i,c as n,w as s,a as o,k as u,f as c,t as d,l as p,g as r,i as _}from"./index-9e9f17ba.js";import{_ as m}from"./u-icon.09133ca0.js";import{r as f}from"./uni-app.es.bdc9cb81.js";import{_ as h}from"./u-cell.559621d2.js";import{_ as g}from"./u-line.757a8fd0.js";import{_ as $}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as b}from"./u-gap.a5e7cd4b.js";const y=$({name:"u-collapse-item",mixins:[e,t,{props:{title:{type:String,default:()=>uni.$u.props.collapseItem.title},value:{type:String,default:()=>uni.$u.props.collapseItem.value},label:{type:String,default:()=>uni.$u.props.collapseItem.label},disabled:{type:Boolean,default:()=>uni.$u.props.collapseItem.disabled},isLink:{type:Boolean,default:()=>uni.$u.props.collapseItem.isLink},clickable:{type:Boolean,default:()=>uni.$u.props.collapseItem.clickable},border:{type:Boolean,default:()=>uni.$u.props.collapseItem.border},align:{type:String,default:()=>uni.$u.props.collapseItem.align},name:{type:[String,Number],default:()=>uni.$u.props.collapseItem.name},icon:{type:String,default:()=>uni.$u.props.collapseItem.icon},duration:{type:Number,default:()=>uni.$u.props.collapseItem.duration}}}],data:()=>({elId:uni.$u.guid(),animationData:{},expanded:!1,showBorder:!1,animating:!1,parentData:{accordion:!1,border:!1}}),watch:{expanded(e){clearTimeout(this.timer),this.timer=null,this.timer=setTimeout((()=>{this.showBorder=e}),e?10:290)}},mounted(){this.init(),console.log("$slots",this.$slots)},methods:{async init(){if(this.updateParentData(),!this.parent)return uni.$u.error("u-collapse-item必须要搭配u-collapse组件使用");const{value:e,accordion:t,children:l=[]}=this.parent;if(t){if(uni.$u.test.array(e))return uni.$u.error("手风琴模式下，u-collapse组件的value参数不能为数组");this.expanded=this.name==e}else{if(!uni.$u.test.array(e)&&null!==e)return uni.$u.error("非手风琴模式下，u-collapse组件的value参数必须为数组");this.expanded=(e||[]).some((e=>e==this.name))}await a(),this.setContentAnimate()},updateParentData(){this.getParentData("u-collapse")},async setContentAnimate(){const e=await this.queryRect(),t=this.expanded?e.height:0;this.animating=!0;const a=uni.createAnimation({timingFunction:"ease-in-out"});a.height(t).step({duration:this.duration}).step(),this.animationData=a.export(),uni.$u.sleep(this.duration).then((()=>{this.animating=!1}))},clickHandler(){this.disabled&&this.animating||this.parent&&this.parent.onChange(this)},queryRect(){return new Promise((e=>{this.$uGetRect(`#${this.elId}`).then((t=>{e(t)}))}))}}},[["render",function(e,t,a,$,b,y){const v=r,k=f(l("u-icon"),m),I=f(l("u-cell"),h),x=_,D=f(l("u-line"),g);return i(),n(x,{class:"u-collapse-item"},{default:s((()=>[o(I,{title:e.$slots.title?"":e.title,value:e.value,label:e.label,icon:e.icon,isLink:e.isLink,clickable:e.clickable,border:b.parentData.border&&b.showBorder,onClick:y.clickHandler,arrowDirection:b.expanded?"up":"down",disabled:e.disabled},{title:s((()=>[u(e.$slots,"title",{},(()=>[!e.$slots.title&&e.title?(i(),n(v,{key:0},{default:s((()=>[c(d(e.title),1)])),_:1})):p("",!0)]),!0)])),icon:s((()=>[u(e.$slots,"icon",{},(()=>[!e.$slots.icon&&e.icon?(i(),n(k,{key:0,size:22,name:e.icon},null,8,["name"])):p("",!0)]),!0)])),value:s((()=>[u(e.$slots,"value",{},(()=>[!e.$slots.value&&e.value?(i(),n(v,{key:0},{default:s((()=>[c(d(e.value),1)])),_:1})):p("",!0)]),!0)])),"right-icon":s((()=>[u(e.$slots,"right-icon",{},void 0,!0)])),_:3},8,["title","value","label","icon","isLink","clickable","border","onClick","arrowDirection","disabled"]),o(x,{class:"u-collapse-item__content",animation:b.animationData,ref:"animation"},{default:s((()=>[o(x,{class:"u-collapse-item__content__text content-class",id:b.elId,ref:b.elId},{default:s((()=>[u(e.$slots,"default",{},void 0,!0)])),_:3},8,["id"])])),_:3},8,["animation"]),b.parentData.border?(i(),n(D,{key:0})):p("",!0)])),_:3})}],["__scopeId","data-v-35829f51"]]);const v=$({name:"u-collapse",mixins:[e,t,{props:{value:{type:[String,Number,Array,null],default:()=>uni.$u.props.collapse.value},accordion:{type:Boolean,default:()=>uni.$u.props.collapse.accordion},border:{type:Boolean,default:()=>uni.$u.props.collapse.border}}}],watch:{needInit(){this.init()},parentData(){this.children.length&&this.children.map((e=>{"function"==typeof e.updateParentData&&e.updateParentData()}))}},created(){this.children=[]},computed:{needInit(){return[this.accordion,this.value]}},emits:["open","close","change"],methods:{init(){this.children.map((e=>{e.init()}))},onChange(e){let t=[];this.children.map(((a,l)=>{this.accordion?(a.expanded=a===e&&!e.expanded,a.setContentAnimate()):a===e&&(a.expanded=!a.expanded,a.setContentAnimate()),t.push({name:a.name||l,status:a.expanded?"open":"close"})})),this.$emit("change",t),this.$emit(e.expanded?"open":"close",e.name)}}},[["render",function(e,t,a,o,c,d){const r=f(l("u-line"),g),m=_;return i(),n(m,{class:"u-collapse"},{default:s((()=>[e.border?(i(),n(r,{key:0})):p("",!0),u(e.$slots,"default",{},void 0,!0)])),_:3})}],["__scopeId","data-v-1814abc7"]]);const k=$({data:()=>({}),methods:{open(e){},close(e){},change(e){}}},[["render",function(e,t,a,u,d,p){const h=r,g=f(l("u-collapse-item"),y),$=f(l("u-collapse"),v),k=_,I=f(l("u-icon"),m),x=f(l("u-gap"),b);return i(),n(k,{class:"u-page"},{default:s((()=>[o(k,{class:"u-page__item"},{default:s((()=>[o(h,{class:"u-page__item__title"},{default:s((()=>[c("基础功能")])),_:1}),o($,{onChange:p.change,onClose:p.close,onOpen:p.open},{default:s((()=>[o(g,{title:"文档指南",name:"Docs guide"},{default:s((()=>[o(h,{class:"u-collapse-content"},{default:s((()=>[c("涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")])),_:1})])),_:1}),o(g,{title:"组件全面",name:"Variety components"},{default:s((()=>[o(h,{class:"u-collapse-content"},{default:s((()=>[c("众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")])),_:1})])),_:1}),o(g,{title:"众多利器",name:"Numerous tools"},{default:s((()=>[o(h,{class:"u-collapse-content"},{default:s((()=>[c("众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")])),_:1})])),_:1})])),_:1},8,["onChange","onClose","onOpen"])])),_:1}),o(k,{class:"u-page__item"},{default:s((()=>[o(h,{class:"u-page__item__title"},{default:s((()=>[c("展开和禁用")])),_:1}),o($,{value:["2"]},{default:s((()=>[o(g,{title:"文档指南"},{default:s((()=>[o(h,{class:"u-collapse-content"},{default:s((()=>[c("涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")])),_:1})])),_:1}),o(g,{disabled:"",title:"组件全面"},{default:s((()=>[o(h,{class:"u-collapse-content"},{default:s((()=>[c("众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")])),_:1})])),_:1}),o(g,{name:"2",title:"众多利器"},{default:s((()=>[o(h,{class:"u-collapse-content"},{default:s((()=>[c("众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")])),_:1})])),_:1})])),_:1})])),_:1}),o(k,{class:"u-page__item"},{default:s((()=>[o(h,{class:"u-page__item__title"},{default:s((()=>[c("手风琴模式")])),_:1}),o($,{accordion:""},{default:s((()=>[o(g,{title:"文档指南"},{default:s((()=>[o(h,{class:"u-collapse-content"},{default:s((()=>[c("涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")])),_:1})])),_:1}),o(g,{title:"组件全面"},{default:s((()=>[o(h,{class:"u-collapse-content"},{default:s((()=>[c("众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")])),_:1})])),_:1}),o(g,{title:"众多利器"},{default:s((()=>[o(h,{class:"u-collapse-content"},{default:s((()=>[c("众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")])),_:1})])),_:1})])),_:1})])),_:1}),o(k,{class:"u-page__item"},{default:s((()=>[o(h,{class:"u-page__item__title"},{default:s((()=>[c("移除下划线")])),_:1}),o($,{accordion:"",border:!1},{default:s((()=>[o(g,{title:"文档指南"},{default:s((()=>[o(h,{class:"u-collapse-content"},{default:s((()=>[c("涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")])),_:1})])),_:1}),o(g,{title:"组件全面"},{default:s((()=>[o(h,{class:"u-collapse-content"},{default:s((()=>[c("众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")])),_:1})])),_:1}),o(g,{title:"众多利器"},{default:s((()=>[o(h,{class:"u-collapse-content"},{default:s((()=>[c("众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")])),_:1})])),_:1})])),_:1})])),_:1}),o(k,{class:"u-page__item"},{default:s((()=>[o(h,{class:"u-page__item__title"},{default:s((()=>[c("自定义标题和内容")])),_:1}),o($,{accordion:""},{default:s((()=>[o(g,null,{title:s((()=>[o(h,{class:"u-page__item__title__slot-title"},{default:s((()=>[c("文档指南")])),_:1})])),default:s((()=>[o(h,{class:"u-collapse-content"},{default:s((()=>[c("涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")])),_:1})])),_:1}),o(g,{title:"组件全面"},{icon:s((()=>[o(I,{name:"tags-fill",size:"20"})])),default:s((()=>[o(h,{class:"u-collapse-content"},{default:s((()=>[c("众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")])),_:1})])),_:1}),o(g,{title:"众多利器",icon:"tags-fill"},{value:s((()=>[o(h,{class:"u-page__item__title__slot-title"},{default:s((()=>[c("自定义内容")])),_:1})])),default:s((()=>[o(h,{class:"u-collapse-content"},{default:s((()=>[c("众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")])),_:1})])),_:1})])),_:1})])),_:1}),o(x,{height:"50"})])),_:1})}],["__scopeId","data-v-9b6b925b"]]);export{k as default};
