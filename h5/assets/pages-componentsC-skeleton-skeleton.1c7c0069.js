import{m as t,h as e,o as a,c as s,w as l,p as i,n as o,l as n,a as u,b as r,F as d,r as _,k as p,i as c,f as h,g as m,d as f,e as w}from"./index-9e9f17ba.js";import{_ as g}from"./_plugin-vue_export-helper.1b428a4d.js";import{r as k}from"./uni-app.es.bdc9cb81.js";import{_ as y}from"./u-switch.22ca3d79.js";import{_ as b}from"./u-gap.a5e7cd4b.js";import{_ as $}from"./u--text.424db9a6.js";import{_ as v}from"./logo.e6a56f74.js";import"./u-loading-icon.1be2f080.js";import"./u-icon.09133ca0.js";import"./u-link.300f7cbc.js";const x=g({name:"u-skeleton",mixins:[t,e,{props:{loading:{type:Boolean,default:()=>uni.$u.props.skeleton.loading},animate:{type:Boolean,default:()=>uni.$u.props.skeleton.animate},rows:{type:[String,Number],default:()=>uni.$u.props.skeleton.rows},rowsWidth:{type:[String,Number,Array],default:()=>uni.$u.props.skeleton.rowsWidth},rowsHeight:{type:[String,Number,Array],default:()=>uni.$u.props.skeleton.rowsHeight},title:{type:Boolean,default:()=>uni.$u.props.skeleton.title},titleWidth:{type:[String,Number],default:()=>uni.$u.props.skeleton.titleWidth},titleHeight:{type:[String,Number],default:()=>uni.$u.props.skeleton.titleHeight},avatar:{type:Boolean,default:()=>uni.$u.props.skeleton.avatar},avatarSize:{type:[String,Number],default:()=>uni.$u.props.skeleton.avatarSize},avatarShape:{type:String,default:()=>uni.$u.props.skeleton.avatarShape}}}],data:()=>({width:0}),watch:{loading(){this.getComponentWidth()}},computed:{rowsArray(){/%$/.test(this.rowsHeight)&&uni.$u.error("rowsHeight参数不支持百分比单位");const t=[];for(let e=0;e<this.rows;e++){let a={},s=uni.$u.test.array(this.rowsWidth)?this.rowsWidth[e]||(e===this.rows-1?"70%":"100%"):e===this.rows-1?"70%":this.rowsWidth,l=uni.$u.test.array(this.rowsHeight)?this.rowsHeight[e]||"18px":this.rowsHeight;a.marginTop=this.title||0!==e?this.title&&0===e?"20px":"12px":0,/%$/.test(s)?a.width=uni.$u.addUnit(this.width*parseInt(s)/100):a.width=uni.$u.addUnit(s),a.height=uni.$u.addUnit(l),t.push(a)}return t},uTitleWidth(){let t=0;return t=/%$/.test(this.titleWidth)?uni.$u.addUnit(this.width*parseInt(this.titleWidth)/100):uni.$u.addUnit(this.titleWidth),uni.$u.addUnit(t)}},mounted(){this.init()},methods:{init(){this.getComponentWidth()},async setNvueAnimation(){},async getComponentWidth(){await uni.$u.sleep(20),this.$uGetRect(".u-skeleton__wrapper__content").then((t=>{this.width=t.width}))}}},[["render",function(t,e,h,m,f,w){const g=c;return a(),s(g,{class:"u-skeleton"},{default:l((()=>[t.loading?(a(),s(g,{key:0,class:"u-skeleton__wrapper",ref:"u-skeleton__wrapper",style:{display:"flex","flex-direction":"row"}},{default:l((()=>[t.avatar?(a(),s(g,{key:0,class:i(["u-skeleton__wrapper__avatar",[`u-skeleton__wrapper__avatar--${t.avatarShape}`,t.animate&&"animate"]]),style:o({height:t.$u.addUnit(t.avatarSize),width:t.$u.addUnit(t.avatarSize)})},null,8,["class","style"])):n("",!0),u(g,{class:"u-skeleton__wrapper__content",ref:"u-skeleton__wrapper__content",style:{flex:"1"}},{default:l((()=>[t.title?(a(),s(g,{key:0,class:i(["u-skeleton__wrapper__content__title",[t.animate&&"animate"]]),style:o({width:w.uTitleWidth,height:t.$u.addUnit(t.titleHeight)})},null,8,["style","class"])):n("",!0),(a(!0),r(d,null,_(w.rowsArray,((e,l)=>(a(),s(g,{class:i(["u-skeleton__wrapper__content__rows",[t.animate&&"animate"]]),key:l,style:o({width:e.width,height:e.height,marginTop:e.marginTop})},null,8,["class","style"])))),128))])),_:1},512)])),_:1},512)):p(t.$slots,"default",{key:1},void 0,!0)])),_:3})}],["__scopeId","data-v-ce0e186f"]]);const W=g({data:()=>({switch1:!0,switch2:!1})},[["render",function(t,e,i,o,n,r){const d=m,_=k(f("u-skeleton"),x),p=c,g=k(f("u-switch"),y),W=k(f("u-gap"),b),S=w,H=k(f("u--text"),$);return a(),s(p,{class:"u-page"},{default:l((()=>[u(p,{class:"u-demo-block"},{default:l((()=>[u(d,{class:"u-demo-block__title"},{default:l((()=>[h("基础使用")])),_:1}),u(p,{class:"u-demo-block__content"},{default:l((()=>[u(_,{rows:"3",title:"",loading:""})])),_:1})])),_:1}),u(p,{class:"u-demo-block"},{default:l((()=>[u(d,{class:"u-demo-block__title"},{default:l((()=>[h("自定义段落行数")])),_:1}),u(p,{class:"u-demo-block__content"},{default:l((()=>[u(_,{rows:"2",title:"",loading:""})])),_:1})])),_:1}),u(p,{class:"u-demo-block"},{default:l((()=>[u(d,{class:"u-demo-block__title"},{default:l((()=>[h("设置段落宽度")])),_:1}),u(p,{class:"u-demo-block__content"},{default:l((()=>[u(_,{rows:"2",title:"",rowsWidth:["100%","35%"],loading:""})])),_:1})])),_:1}),u(p,{class:"u-demo-block"},{default:l((()=>[u(d,{class:"u-demo-block__title"},{default:l((()=>[h("设置段落高度")])),_:1}),u(p,{class:"u-demo-block__content"},{default:l((()=>[u(_,{rows:"3",title:"",rowsWidth:["100%","100%","100%"],rowsHeight:["18px","18px","80px"],loading:""})])),_:1})])),_:1}),u(p,{class:"u-demo-block"},{default:l((()=>[u(d,{class:"u-demo-block__title"},{default:l((()=>[h("是否开启动画")])),_:1}),u(g,{modelValue:n.switch1,"onUpdate:modelValue":e[0]||(e[0]=t=>n.switch1=t),space:"2",inactiveColor:"#e6e6e6"},null,8,["modelValue"]),u(W,{height:"15",bgColor:"#fff"}),u(p,{class:"u-demo-block__content"},{default:l((()=>[u(_,{animate:n.switch1,rows:"3",title:"",loading:""},null,8,["animate"])])),_:1})])),_:1}),u(p,{class:"u-demo-block"},{default:l((()=>[u(d,{class:"u-demo-block__title"},{default:l((()=>[h("展示头像")])),_:1}),u(W,{height:"15",bgColor:"#fff"}),u(p,{class:"u-demo-block__content"},{default:l((()=>[u(_,{animate:n.switch1,rows:"3",title:"",loading:"",avatar:""},null,8,["animate"])])),_:1})])),_:1}),u(p,{class:"u-demo-block"},{default:l((()=>[u(d,{class:"u-demo-block__title"},{default:l((()=>[h("切换状态")])),_:1}),u(g,{modelValue:n.switch2,"onUpdate:modelValue":e[1]||(e[1]=t=>n.switch2=t),space:"2",inactiveColor:"#e6e6e6"},null,8,["modelValue"]),u(W,{height:"15",bgColor:"#fff"}),u(p,{class:"u-demo-block__content"},{default:l((()=>[u(_,{rows:"2",title:"",loading:n.switch2,avatar:"",rowsHeight:"14"},{default:l((()=>[u(p,null,{default:l((()=>[u(p,{class:"u-skeleton-slot"},{default:l((()=>[u(S,{src:v,class:"u-skeleton-slot__image"}),u(p,{class:"u-skeleton-slot__content"},{default:l((()=>[u(H,{text:"利剑出鞘,一统江湖",type:"main",size:"16"}),u(H,{type:"tips",size:"14",customStyle:"margin-top: 5px",text:"众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用"})])),_:1})])),_:1})])),_:1})])),_:1},8,["loading"])])),_:1}),u(W,{height:"50",bgColor:"transparent"})])),_:1})])),_:1})}],["__scopeId","data-v-3147225a"]]);export{W as default};
