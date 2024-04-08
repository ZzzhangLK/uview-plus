import{m as t,h as e,d as o,o as i,c as l,w as n,k as c,a as u,l as a,b as s,F as r,r as d,n as p,f as m,t as _,i as f,g as k,S as y,u as h}from"./index-9e9f17ba.js";import{_ as b}from"./u-icon.09133ca0.js";import{r as x}from"./uni-app.es.bdc9cb81.js";import{_ as g}from"./_plugin-vue_export-helper.1b428a4d.js";const S=g({mixins:[t,e,{props:{text:{type:[Array],default:()=>uni.$u.props.columnNotice.text},icon:{type:String,default:()=>uni.$u.props.columnNotice.icon},mode:{type:String,default:()=>uni.$u.props.columnNotice.mode},color:{type:String,default:()=>uni.$u.props.columnNotice.color},bgColor:{type:String,default:()=>uni.$u.props.columnNotice.bgColor},fontSize:{type:[String,Number],default:()=>uni.$u.props.columnNotice.fontSize},speed:{type:[String,Number],default:()=>uni.$u.props.columnNotice.speed},step:{type:Boolean,default:()=>uni.$u.props.columnNotice.step},duration:{type:[String,Number],default:()=>uni.$u.props.columnNotice.duration},disableTouch:{type:Boolean,default:()=>uni.$u.props.columnNotice.disableTouch}}}],watch:{text:{immediate:!0,handler(t,e){uni.$u.test.array(t)||uni.$u.error("noticebar组件direction为column时，要求text参数为数组形式")}}},computed:{textStyle(){let t={};return t.color=this.color,t.fontSize=uni.$u.addUnit(this.fontSize),t},vertical(){return"horizontal"!=this.mode}},data:()=>({index:0}),emits:["click","close"],methods:{noticeChange(t){this.index=t.detail.current},clickHandler(){this.$emit("click",this.index)},close(){this.$emit("close")}}},[["render",function(t,e,g,S,$,C){const w=x(o("u-icon"),b),N=f,z=k,v=y,B=h;return i(),l(N,{class:"u-notice",onClick:C.clickHandler},{default:n((()=>[c(t.$slots,"icon",{},(()=>[t.icon?(i(),l(N,{key:0,class:"u-notice__left-icon"},{default:n((()=>[u(w,{name:t.icon,color:t.color,size:"19"},null,8,["name","color"])])),_:1})):a("",!0)]),!0),u(B,{"disable-touch":t.disableTouch,vertical:!t.step,circular:"",interval:t.duration,autoplay:!0,class:"u-notice__swiper",onChange:C.noticeChange},{default:n((()=>[(i(!0),s(r,null,d(t.text,((t,e)=>(i(),l(v,{key:e,class:"u-notice__swiper__item"},{default:n((()=>[u(z,{class:"u-notice__swiper__item__text u-line-1",style:p([C.textStyle])},{default:n((()=>[m(_(t),1)])),_:2},1032,["style"])])),_:2},1024)))),128))])),_:1},8,["disable-touch","vertical","interval","onChange"]),["link","closable"].includes(t.mode)?(i(),l(N,{key:0,class:"u-notice__right-icon"},{default:n((()=>["link"===t.mode?(i(),l(w,{key:0,name:"arrow-right",size:17,color:t.color},null,8,["color"])):a("",!0),"closable"===t.mode?(i(),l(w,{key:1,name:"close",size:16,color:t.color,onClick:C.close},null,8,["color","onClick"])):a("",!0)])),_:1})):a("",!0)])),_:3},8,["onClick"])}],["__scopeId","data-v-7da6f43e"]]);const $=g({name:"u-row-notice",mixins:[t,e,{props:{text:{type:String,default:()=>uni.$u.props.rowNotice.text},icon:{type:String,default:()=>uni.$u.props.rowNotice.icon},mode:{type:String,default:()=>uni.$u.props.rowNotice.mode},color:{type:String,default:()=>uni.$u.props.rowNotice.color},bgColor:{type:String,default:()=>uni.$u.props.rowNotice.bgColor},fontSize:{type:[String,Number],default:()=>uni.$u.props.rowNotice.fontSize},speed:{type:[String,Number],default:()=>uni.$u.props.rowNotice.speed}}}],data:()=>({animationDuration:"0",animationPlayState:"paused",nvueInit:!0,show:!0}),watch:{text:{immediate:!0,handler(t,e){this.vue(),uni.$u.test.string(t)||uni.$u.error("noticebar组件direction为row时，要求text参数为字符串形式")}},fontSize(){this.vue()},speed(){this.vue()}},computed:{textStyle(){let t={};return t.color=this.color,t.fontSize=uni.$u.addUnit(this.fontSize),t},animationStyle(){let t={};return t.animationDuration=this.animationDuration,t.animationPlayState=this.animationPlayState,t},innerText(){let t=[];const e=this.text.split("");for(let o=0;o<e.length;o+=20)t.push(e.slice(o,o+20).join(""));return t}},mounted(){this.init()},emits:["click","close"],methods:{init(){this.vue(),uni.$u.test.string(this.text)||uni.$u.error("noticebar组件direction为row时，要求text参数为字符串形式")},async vue(){let t=0;await uni.$u.sleep(),t=(await this.$uGetRect(".u-notice__content__text")).width,(await this.$uGetRect(".u-notice__content")).width,this.animationDuration=t/uni.$u.getPx(this.speed)+"s",this.animationPlayState="paused",setTimeout((()=>{this.animationPlayState="running"}),10)},async nvue(){},loopAnimation(t,e){},getNvueRect(t){},clickHandler(t){this.$emit("click")},close(){this.$emit("close")}}},[["render",function(t,e,y,h,g,S){const $=x(o("u-icon"),b),C=f,w=k;return i(),l(C,{class:"u-notice",onClick:S.clickHandler},{default:n((()=>[c(t.$slots,"icon",{},(()=>[t.icon?(i(),l(C,{key:0,class:"u-notice__left-icon"},{default:n((()=>[u($,{name:t.icon,color:t.color,size:"19"},null,8,["name","color"])])),_:1})):a("",!0)]),!0),u(C,{class:"u-notice__content",ref:"u-notice__content"},{default:n((()=>[u(C,{ref:"u-notice__content__text",class:"u-notice__content__text",style:p([S.animationStyle])},{default:n((()=>[(i(!0),s(r,null,d(S.innerText,((t,e)=>(i(),l(w,{key:e,style:p([S.textStyle])},{default:n((()=>[m(_(t),1)])),_:2},1032,["style"])))),128))])),_:1},8,["style"])])),_:1},512),["link","closable"].includes(t.mode)?(i(),l(C,{key:0,class:"u-notice__right-icon"},{default:n((()=>["link"===t.mode?(i(),l($,{key:0,name:"arrow-right",size:17,color:t.color},null,8,["color"])):a("",!0),"closable"===t.mode?(i(),l($,{key:1,onClick:S.close,name:"close",size:16,color:t.color},null,8,["onClick","color"])):a("",!0)])),_:1})):a("",!0)])),_:3},8,["onClick"])}],["__scopeId","data-v-093aab01"]]);const C=g({name:"u-notice-bar",mixins:[t,e,{props:{text:{type:[Array,String],default:()=>uni.$u.props.noticeBar.text},direction:{type:String,default:()=>uni.$u.props.noticeBar.direction},step:{type:Boolean,default:()=>uni.$u.props.noticeBar.step},icon:{type:String,default:()=>uni.$u.props.noticeBar.icon},mode:{type:String,default:()=>uni.$u.props.noticeBar.mode},color:{type:String,default:()=>uni.$u.props.noticeBar.color},bgColor:{type:String,default:()=>uni.$u.props.noticeBar.bgColor},speed:{type:[String,Number],default:()=>uni.$u.props.noticeBar.speed},fontSize:{type:[String,Number],default:()=>uni.$u.props.noticeBar.fontSize},duration:{type:[String,Number],default:()=>uni.$u.props.noticeBar.duration},disableTouch:{type:Boolean,default:()=>uni.$u.props.noticeBar.disableTouch},url:{type:String,default:()=>uni.$u.props.noticeBar.url},linkType:{type:String,default:()=>uni.$u.props.noticeBar.linkType}}}],data:()=>({show:!0}),emits:["click","close"],methods:{click(t){this.$emit("click",t),this.url&&this.linkType&&this.openPage()},close(){this.show=!1,this.$emit("close")}}},[["render",function(t,e,c,u,s,r){const d=x(o("u-column-notice"),S),m=x(o("u-row-notice"),$),_=f;return s.show?(i(),l(_,{key:0,class:"u-notice-bar",style:p([{backgroundColor:t.bgColor},t.$u.addStyle(t.customStyle)])},{default:n((()=>["column"===t.direction||"row"===t.direction&&t.step?(i(),l(d,{key:0,color:t.color,bgColor:t.bgColor,text:t.text,mode:t.mode,step:t.step,icon:t.icon,"disable-touch":t.disableTouch,fontSize:t.fontSize,duration:t.duration,onClose:r.close,onClick:r.click},null,8,["color","bgColor","text","mode","step","icon","disable-touch","fontSize","duration","onClose","onClick"])):(i(),l(m,{key:1,color:t.color,bgColor:t.bgColor,text:t.text,mode:t.mode,fontSize:t.fontSize,speed:t.speed,url:t.url,linkType:t.linkType,icon:t.icon,onClose:r.close,onClick:r.click},null,8,["color","bgColor","text","mode","fontSize","speed","url","linkType","icon","onClose","onClick"]))])),_:1},8,["style"])):a("",!0)}],["__scopeId","data-v-71aee75a"]]);const w=g({data:()=>({text1:"uView UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用",text2:"uView UI众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨",text3:"uView UI收集众多的常用页面和布局，减少开发者的重复工作，让您专注逻辑，事半功倍",text4:["寒雨连江夜入吴","平明送客楚山孤","洛阳亲友如相问","一片冰心在玉壶"],text5:"涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川"}),onLoad(){},methods:{click(t){console.log(t)}}},[["render",function(t,e,c,a,s,r){const d=k,p=x(o("u-notice-bar"),C),_=f;return i(),l(_,{class:"u-page"},{default:n((()=>[u(_,{class:"u-demo-block"},{default:n((()=>[u(d,{class:"u-demo-block__title"},{default:n((()=>[m("基础功能")])),_:1}),u(_,{class:"u-demo-block__content"},{default:n((()=>[u(p,{text:s.text1},null,8,["text"])])),_:1})])),_:1}),u(_,{class:"u-demo-block"},{default:n((()=>[u(d,{class:"u-demo-block__title"},{default:n((()=>[m("可关闭")])),_:1}),u(_,{class:"u-demo-block__content"},{default:n((()=>[u(p,{text:s.text5,mode:"closable"},null,8,["text"])])),_:1})])),_:1}),u(_,{class:"u-demo-block"},{default:n((()=>[u(d,{class:"u-demo-block__title"},{default:n((()=>[m("自定义横向滚动速度")])),_:1}),u(_,{class:"u-demo-block__content"},{default:n((()=>[u(p,{text:s.text2,speed:"250",mode:"closable"},null,8,["text"])])),_:1})])),_:1}),u(_,{class:"u-demo-block"},{default:n((()=>[u(d,{class:"u-demo-block__title"},{default:n((()=>[m("可跳转(点击右箭头)")])),_:1}),u(_,{class:"u-demo-block__content"},{default:n((()=>[u(p,{text:s.text3,mode:"link",url:"/pages/componentsB/tag/tag"},null,8,["text"])])),_:1})])),_:1}),u(_,{class:"u-demo-block"},{default:n((()=>[u(d,{class:"u-demo-block__title"},{default:n((()=>[m("横向步进滚动")])),_:1}),u(_,{class:"u-demo-block__content"},{default:n((()=>[u(p,{text:s.text4,step:!0,onClick:r.click},null,8,["text","onClick"])])),_:1})])),_:1}),u(_,{class:"u-demo-block"},{default:n((()=>[u(d,{class:"u-demo-block__title"},{default:n((()=>[m("纵向滚动")])),_:1}),u(_,{class:"u-demo-block__content"},{default:n((()=>[u(p,{text:s.text4,direction:"column",onClick:r.click},null,8,["text","onClick"])])),_:1})])),_:1}),u(_,{class:"u-demo-block"},{default:n((()=>[u(d,{class:"u-demo-block__title"},{default:n((()=>[m("自定义样式")])),_:1}),u(_,{class:"u-demo-block__content"},{default:n((()=>[u(p,{text:s.text1,color:"#ffffff",bgColor:"#f56c6c"},null,8,["text"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-691cd540"]]);export{w as default};
