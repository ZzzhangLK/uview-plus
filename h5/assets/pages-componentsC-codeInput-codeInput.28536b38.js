import{m as e,h as l,o,c as t,w as a,b as u,F as n,r as d,n as s,f as i,t as c,l as r,a as p,i as m,g as h,I as _,d as f}from"./index-9e9f17ba.js";import{_ as b}from"./_plugin-vue_export-helper.1b428a4d.js";import{r as g}from"./uni-app.es.bdc9cb81.js";const y=b({name:"u-code-input",mixins:[e,l,{props:{adjustPosition:{type:Boolean,default:()=>uni.$u.props.codeInput.adjustPosition},maxlength:{type:[String,Number],default:()=>uni.$u.props.codeInput.maxlength},dot:{type:Boolean,default:()=>uni.$u.props.codeInput.dot},mode:{type:String,default:()=>uni.$u.props.codeInput.mode},hairline:{type:Boolean,default:()=>uni.$u.props.codeInput.hairline},space:{type:[String,Number],default:()=>uni.$u.props.codeInput.space},modelValue:{type:[String,Number],default:()=>uni.$u.props.codeInput.value},focus:{type:Boolean,default:()=>uni.$u.props.codeInput.focus},bold:{type:Boolean,default:()=>uni.$u.props.codeInput.bold},color:{type:String,default:()=>uni.$u.props.codeInput.color},fontSize:{type:[String,Number],default:()=>uni.$u.props.codeInput.fontSize},size:{type:[String,Number],default:()=>uni.$u.props.codeInput.size},disabledKeyboard:{type:Boolean,default:()=>uni.$u.props.codeInput.disabledKeyboard},borderColor:{type:String,default:()=>uni.$u.props.codeInput.borderColor},disabledDot:{type:Boolean,default:()=>uni.$u.props.codeInput.disabledDot}}}],data(){return{inputValue:"",isFocus:this.focus}},watch:{modelValue:{immediate:!0,handler(e){this.inputValue=String(e).substring(0,this.maxlength)}}},computed:{codeLength(){return new Array(Number(this.maxlength))},itemStyle(){return e=>{const l=uni.$u.addUnit,o={width:l(this.size),height:l(this.size)};return"box"===this.mode&&(o.border=`${this.hairline?.5:1}px solid ${this.borderColor}`,0===uni.$u.getPx(this.space)&&(0===e&&(o.borderTopLeftRadius="3px",o.borderBottomLeftRadius="3px"),e===this.codeLength.length-1&&(o.borderTopRightRadius="3px",o.borderBottomRightRadius="3px"),e!==this.codeLength.length-1&&(o.borderRight="none"))),e!==this.codeLength.length-1?o.marginRight=l(this.space):o.marginRight=0,o}},codeArray(){return String(this.inputValue).split("")},lineStyle(){const e={};return e.height=this.hairline?"2px":"4px",e.width=uni.$u.addUnit(this.size),e.backgroundColor=this.borderColor,e}},emits:["change","finish","update:modelValue"],methods:{inputHandler(e){const l=e.detail.value;this.inputValue=l,this.disabledDot&&this.$nextTick((()=>{this.inputValue=l.replace(".","")})),this.$emit("change",l),this.$emit("update:modelValue",l),String(l).length>=Number(this.maxlength)&&this.$emit("finish",l)}}},[["render",function(e,l,f,b,g,y){const V=m,x=h,v=_;return o(),t(V,{class:"u-code-input"},{default:a((()=>[(o(!0),u(n,null,d(y.codeLength,((l,u)=>(o(),t(V,{class:"u-code-input__item",style:s([y.itemStyle(u)]),key:u},{default:a((()=>[e.dot&&y.codeArray.length>u?(o(),t(V,{key:0,class:"u-code-input__item__dot"})):(o(),t(x,{key:1,style:s({fontSize:e.$u.addUnit(e.fontSize),fontWeight:e.bold?"bold":"normal",color:e.color})},{default:a((()=>[i(c(y.codeArray[u]),1)])),_:2},1032,["style"])),"line"===e.mode?(o(),t(V,{key:2,class:"u-code-input__item__line",style:s([y.lineStyle])},null,8,["style"])):r("",!0),g.isFocus&&y.codeArray.length===u?(o(),t(V,{key:3,style:s({backgroundColor:e.color}),class:"u-code-input__item__cursor"},null,8,["style"])):r("",!0)])),_:2},1032,["style"])))),128)),p(v,{disabled:e.disabledKeyboard,type:"number",focus:e.focus,value:g.inputValue,maxlength:e.maxlength,adjustPosition:e.adjustPosition,class:"u-code-input__input",onInput:y.inputHandler,style:s({height:e.$u.addUnit(e.size)}),onFocus:l[0]||(l[0]=e=>g.isFocus=!0),onBlur:l[1]||(l[1]=e=>g.isFocus=!1)},null,8,["disabled","focus","value","maxlength","adjustPosition","onInput","style"])])),_:1})}],["__scopeId","data-v-5f23cb49"]]);const V=b({data:()=>({value1:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:"",value8:"",value9:"123",value10:"34"}),methods:{change(e){console.log("change",e)},finish(e){console.log("finish",e)}}},[["render",function(e,l,u,n,d,s){const c=h,r=g(f("u-code-input"),y),_=m;return o(),t(_,{class:"u-page"},{default:a((()=>[p(_,{class:"u-demo-block"},{default:a((()=>[p(c,{class:"u-demo-block__title"},{default:a((()=>[i("基础使用")])),_:1}),p(_,{class:"u-demo-block__content"},{default:a((()=>[p(r,{modelValue:d.value1,"onUpdate:modelValue":l[0]||(l[0]=e=>d.value1=e),maxlength:4,onChange:s.change,onFinish:s.finish},null,8,["modelValue","onChange","onFinish"])])),_:1})])),_:1}),p(_,{class:"u-demo-block"},{default:a((()=>[p(c,{class:"u-demo-block__title"},{default:a((()=>[i("横线模式")])),_:1}),p(_,{class:"u-demo-block__content"},{default:a((()=>[p(r,{modelValue:d.value2,"onUpdate:modelValue":l[1]||(l[1]=e=>d.value2=e),mode:"line",maxlength:4,bold:!0},null,8,["modelValue"])])),_:1})])),_:1}),p(_,{class:"u-demo-block"},{default:a((()=>[p(c,{class:"u-demo-block__title"},{default:a((()=>[i("设置长度")])),_:1}),p(_,{class:"u-demo-block__content"},{default:a((()=>[p(r,{modelValue:d.value3,"onUpdate:modelValue":l[2]||(l[2]=e=>d.value3=e),maxlength:6},null,8,["modelValue"])])),_:1})])),_:1}),p(_,{class:"u-demo-block"},{default:a((()=>[p(c,{class:"u-demo-block__title"},{default:a((()=>[i("设置间距")])),_:1}),p(_,{class:"u-demo-block__content"},{default:a((()=>[p(r,{modelValue:d.value4,"onUpdate:modelValue":l[3]||(l[3]=e=>d.value4=e),mode:"box",space:0,maxlength:4},null,8,["modelValue"])])),_:1})])),_:1}),p(_,{class:"u-demo-block"},{default:a((()=>[p(c,{class:"u-demo-block__title"},{default:a((()=>[i("细边框")])),_:1}),p(_,{class:"u-demo-block__content"},{default:a((()=>[p(r,{modelValue:d.value5,"onUpdate:modelValue":l[4]||(l[4]=e=>d.value5=e),mode:"box",space:0,maxlength:4,hairline:""},null,8,["modelValue"])])),_:1}),p(_,{class:"u-demo-block__content",style:{"margin-top":"10px"}},{default:a((()=>[p(r,{modelValue:d.value6,"onUpdate:modelValue":l[5]||(l[5]=e=>d.value6=e),mode:"line",space:10,maxlength:4,hairline:""},null,8,["modelValue"])])),_:1})])),_:1}),p(_,{class:"u-demo-block"},{default:a((()=>[p(c,{class:"u-demo-block__title"},{default:a((()=>[i("调整颜色")])),_:1}),p(_,{class:"u-demo-block__content"},{default:a((()=>[p(r,{modelValue:d.value7,"onUpdate:modelValue":l[6]||(l[6]=e=>d.value7=e),mode:"box",space:0,maxlength:4,hairline:"",color:"#f56c6c",borderColor:"#f56c6c"},null,8,["modelValue"]),p(_,{class:"u-demo-block__content",style:{"margin-top":"10px"}},{default:a((()=>[p(r,{modelValue:d.value10,"onUpdate:modelValue":l[7]||(l[7]=e=>d.value10=e),mode:"line",size:"30",maxlength:4,hairline:"",color:"#3c9cff",borderColor:"#3c9cff"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),p(_,{class:"u-demo-block"},{default:a((()=>[p(c,{class:"u-demo-block__title"},{default:a((()=>[i("点模式")])),_:1}),p(_,{class:"u-demo-block__content"},{default:a((()=>[p(r,{modelValue:d.value8,"onUpdate:modelValue":l[8]||(l[8]=e=>d.value8=e),mode:"box",dot:"",space:0,maxlength:4,hairline:""},null,8,["modelValue"])])),_:1})])),_:1}),p(_,{class:"u-demo-block"},{default:a((()=>[p(c,{class:"u-demo-block__title"},{default:a((()=>[i("预置内容")])),_:1}),p(_,{class:"u-demo-block__content"},{default:a((()=>[p(r,{modelValue:d.value9,"onUpdate:modelValue":l[9]||(l[9]=e=>d.value9=e),mode:"box",space:0,maxlength:4,hairline:"",fontSize:"17"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})}]]);export{V as default};
