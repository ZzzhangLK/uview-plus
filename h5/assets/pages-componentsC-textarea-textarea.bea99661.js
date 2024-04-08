import{m as e,h as l,j as a,o,c as t,w as u,i as d,a as s,f as n,t as c,g as r,d as i}from"./index-9e9f17ba.js";import{p as m,u as f}from"./u-textarea.aa596c7d.js";import{_ as p}from"./_plugin-vue_export-helper.1b428a4d.js";import{r as _}from"./uni-app.es.bdc9cb81.js";const b=p({name:"u--textarea",mixins:[e,m,l],components:{uvTextarea:f}},[["render",function(e,l,u,d,s,n){const c=a("uvTextarea");return o(),t(c,{value:e.value,modelValue:e.modelValue,placeholder:e.placeholder,height:e.height,confirmType:e.confirmType,disabled:e.disabled,count:e.count,focus:e.focus,autoHeight:e.autoHeight,fixed:e.fixed,cursorSpacing:e.cursorSpacing,cursor:e.cursor,showConfirmBar:e.showConfirmBar,selectionStart:e.selectionStart,selectionEnd:e.selectionEnd,adjustPosition:e.adjustPosition,disableDefaultPadding:e.disableDefaultPadding,holdKeyboard:e.holdKeyboard,maxlength:e.maxlength,border:e.border,customStyle:e.customStyle,formatter:e.formatter,ignoreCompositionEvent:e.ignoreCompositionEvent,onInput:l[0]||(l[0]=l=>e.$emit("input",l)),"onUpdate:modelValue":l[1]||(l[1]=l=>e.$emit("update:modelValue",l))},null,8,["value","modelValue","placeholder","height","confirmType","disabled","count","focus","autoHeight","fixed","cursorSpacing","cursor","showConfirmBar","selectionStart","selectionEnd","adjustPosition","disableDefaultPadding","holdKeyboard","maxlength","border","customStyle","formatter","ignoreCompositionEvent"])}]]);const h=p({data:()=>({value1:"",value2:"统计字数",value3:"",value4:"",value5:""}),methods:{formatter:e=>e.replace(/[^0-9]/gi,"")}},[["render",function(e,l,a,m,f,p){const h=r,v=_(i("u--textarea"),b),g=d;return o(),t(g,{class:"u-page"},{default:u((()=>[s(g,{class:"u-demo-block"},{default:u((()=>[s(h,{class:"u-demo-block__title"},{default:u((()=>[n("基础使用")])),_:1}),s(g,{class:"u-demo-block__content"},{default:u((()=>[s(v,{modelValue:f.value1,"onUpdate:modelValue":l[0]||(l[0]=e=>f.value1=e),placeholder:"请输入内容"},null,8,["modelValue"]),n(" "+c(f.value1),1)])),_:1})])),_:1}),s(g,{class:"u-demo-block"},{default:u((()=>[s(h,{class:"u-demo-block__title"},{default:u((()=>[n("字数统计")])),_:1}),s(g,{class:"u-demo-block__content"},{default:u((()=>[s(v,{modelValue:f.value2,"onUpdate:modelValue":l[1]||(l[1]=e=>f.value2=e),placeholder:"请输入内容",count:""},null,8,["modelValue"]),n(" "+c(f.value2),1)])),_:1})])),_:1}),s(g,{class:"u-demo-block"},{default:u((()=>[s(h,{class:"u-demo-block__title"},{default:u((()=>[n("自动增高")])),_:1}),s(g,{class:"u-demo-block__content"},{default:u((()=>[s(v,{modelValue:f.value3,"onUpdate:modelValue":l[2]||(l[2]=e=>f.value3=e),placeholder:"请输入内容",autoHeight:""},null,8,["modelValue"])])),_:1})])),_:1}),s(g,{class:"u-demo-block"},{default:u((()=>[s(h,{class:"u-demo-block__title"},{default:u((()=>[n("禁用状态")])),_:1}),s(g,{class:"u-demo-block__content"},{default:u((()=>[s(v,{modelValue:f.value4,"onUpdate:modelValue":l[3]||(l[3]=e=>f.value4=e),placeholder:"文本域已被禁用",disabled:"",count:""},null,8,["modelValue"])])),_:1})])),_:1}),s(g,{class:"u-demo-block"},{default:u((()=>[s(h,{class:"u-demo-block__title"},{default:u((()=>[n("下划线模式")])),_:1}),s(g,{class:"u-demo-block__content"},{default:u((()=>[s(v,{modelValue:f.value5,"onUpdate:modelValue":l[4]||(l[4]=e=>f.value5=e),placeholder:"请输入内容",border:"bottom"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})}]]);export{h as default};
