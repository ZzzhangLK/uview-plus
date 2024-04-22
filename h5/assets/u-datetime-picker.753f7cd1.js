import{_ as e}from"./u-input.d8922afc.js";import{l as t,m as i,f as a,a8 as n,M as r,V as o,C as s,d as l,o as u,b as m,c as h,w as c,a as d,u as p,F as f,i as y}from"./index-06a70c95.js";import{r as g}from"./uni-app.es.24680f9c.js";import{_ as x}from"./u-picker.f163edd0.js";import{d as k}from"./index.a605aec4.js";import{_ as C}from"./_plugin-vue_export-helper.1b428a4d.js";const I=C({name:"datetime-picker",mixins:[i,a,{props:{hasInput:{type:Boolean,default:()=>!1},placeholder:{type:String,default:()=>"请选择"},format:{type:String,default:()=>""},show:{type:Boolean,default:()=>t.datetimePicker.show},popupMode:{type:String,default:()=>t.picker.popupMode},showToolbar:{type:Boolean,default:()=>t.datetimePicker.showToolbar},modelValue:{type:[String,Number],default:()=>t.datetimePicker.value},title:{type:String,default:()=>t.datetimePicker.title},mode:{type:String,default:()=>t.datetimePicker.mode},maxDate:{type:Number,default:()=>t.datetimePicker.maxDate},minDate:{type:Number,default:()=>t.datetimePicker.minDate},minHour:{type:Number,default:()=>t.datetimePicker.minHour},maxHour:{type:Number,default:()=>t.datetimePicker.maxHour},minMinute:{type:Number,default:()=>t.datetimePicker.minMinute},maxMinute:{type:Number,default:()=>t.datetimePicker.maxMinute},filter:{type:[Function,null],default:()=>t.datetimePicker.filter},formatter:{type:[Function,null],default:()=>t.datetimePicker.formatter},loading:{type:Boolean,default:()=>t.datetimePicker.loading},itemHeight:{type:[String,Number],default:()=>t.datetimePicker.itemHeight},cancelText:{type:String,default:()=>t.datetimePicker.cancelText},confirmText:{type:String,default:()=>t.datetimePicker.confirmText},cancelColor:{type:String,default:()=>t.datetimePicker.cancelColor},confirmColor:{type:String,default:()=>t.datetimePicker.confirmColor},visibleItemCount:{type:[String,Number],default:()=>t.datetimePicker.visibleItemCount},closeOnClickOverlay:{type:Boolean,default:()=>t.datetimePicker.closeOnClickOverlay},defaultIndex:{type:Array,default:()=>t.datetimePicker.defaultIndex}}}],data:()=>({inputValue:"",showByClickInput:!1,columns:[],innerDefaultIndex:[],innerFormatter:(e,t)=>t}),watch:{show(e,t){e&&this.updateColumnValue(this.innerValue)},modelValue(e){this.init(),this.getInputValue()},propsChange(){this.init()}},computed:{propsChange(){return[this.mode,this.maxDate,this.minDate,this.minHour,this.maxHour,this.minMinute,this.maxMinute,this.filter]}},mounted(){this.init()},emits:["close","cancel","confirm","change","update:modelValue"],methods:{getInputValue(e){if("time"==this.mode)this.inputValue=e;else if(this.format)this.inputValue=k(e).format(this.format);else{let t="";switch(this.mode){case"date":t="YYYY-MM-DD";break;case"year-month":t="YYYY-MM";break;case"datetime":t="YYYY-MM-DD HH:mm";break;case"time":t="HH:mm"}this.inputValue=k(e).format(t)}},init(){this.innerValue=this.correctValue(this.modelValue),this.updateColumnValue(this.innerValue)},setFormatter(e){this.innerFormatter=e},close(){this.closeOnClickOverlay&&this.$emit("close")},cancel(){this.hasInput&&(this.showByClickInput=!1),this.$emit("cancel")},confirm(){this.$emit("confirm",{value:this.innerValue,mode:this.mode}),this.$emit("update:modelValue",this.innerValue),this.hasInput&&(this.getInputValue(this.innerValue),this.showByClickInput=!1)},intercept(e,t){let i=e.match(/\d+/g);return i.length>1?0:t&&4==i[0].length?i[0]:i[0].length>2?0:i[0]},change(e){const{indexs:t,values:i}=e;let a="";if("time"===this.mode)a=`${this.intercept(i[0][t[0]])}:${this.intercept(i[1][t[1]])}`;else{const e=parseInt(this.intercept(i[0][t[0]],"year")),n=parseInt(this.intercept(i[1][t[1]]));let r=parseInt(i[2]?this.intercept(i[2][t[2]]):1),o=0,s=0;const l=k(`${e}-${n}`).daysInMonth();"year-month"===this.mode&&(r=1),r=Math.min(l,r),"datetime"===this.mode&&(o=parseInt(this.intercept(i[3][t[3]])),s=parseInt(this.intercept(i[4][t[4]]))),a=Number(new Date(e,n-1,r,o,s))}a=this.correctValue(a),this.innerValue=a,this.updateColumnValue(a),this.$emit("change",{value:a,mode:this.mode})},updateColumnValue(e){this.innerValue=e,this.updateColumns(),setTimeout((()=>{this.updateIndexs(e)}),0)},updateIndexs(e){let t=[];const i=this.formatter||this.innerFormatter;if("time"===this.mode){const a=e.split(":");t=[i("hour",a[0]),i("minute",a[1])]}else t=[i("year",`${k(e).year()}`),i("month",n(k(e).month()+1))],"date"===this.mode&&t.push(i("day",n(k(e).date()))),"datetime"===this.mode&&t.push(i("day",n(k(e).date())),i("hour",n(k(e).hour())),i("minute",n(k(e).minute())));const a=this.columns.map(((e,i)=>Math.max(0,e.findIndex((e=>e===t[i])))));this.innerDefaultIndex=a},updateColumns(){const e=this.formatter||this.innerFormatter,t=this.getOriginColumns().map((t=>t.values.map((i=>e(t.type,i)))));this.columns=t},getOriginColumns(){return this.getRanges().map((({type:e,range:t})=>{let i=function(e,t){let i=-1;const a=Array(e<0?0:e);for(;++i<e;)a[i]=t(i);return a}(t[1]-t[0]+1,(i=>{let a=t[0]+i;return a="year"===e?`${a}`:n(a),a}));return this.filter&&(i=this.filter(e,i),(!i||i&&0==i.length)&&uni.showToast({title:"日期filter结果不能为空",icon:"error",mask:!0})),{type:e,values:i}}))},generateArray:(e,t)=>Array.from(new Array(t+1).keys()).slice(e),correctValue(e){const t="time"!==this.mode;if(t&&!r.date(e)?e=this.minDate:t||e||(e=`${n(this.minHour)}:${n(this.minMinute)}`),t)return e=k(e).isBefore(k(this.minDate))?this.minDate:e,e=k(e).isAfter(k(this.maxDate))?this.maxDate:e;{if(-1===String(e).indexOf(":"))return o();let[t,i]=e.split(":");return t=n(s(this.minHour,this.maxHour,Number(t))),i=n(s(this.minMinute,this.maxMinute,Number(i))),`${t}:${i}`}},getRanges(){if("time"===this.mode)return[{type:"hour",range:[this.minHour,this.maxHour]},{type:"minute",range:[this.minMinute,this.maxMinute]}];const{maxYear:e,maxDate:t,maxMonth:i,maxHour:a,maxMinute:n}=this.getBoundary("max",this.innerValue),{minYear:r,minDate:o,minMonth:s,minHour:l,minMinute:u}=this.getBoundary("min",this.innerValue),m=[{type:"year",range:[r,e]},{type:"month",range:[s,i]},{type:"day",range:[o,t]},{type:"hour",range:[l,a]},{type:"minute",range:[u,n]}];return"date"===this.mode&&m.splice(3,2),"year-month"===this.mode&&m.splice(2,3),m},getBoundary(e,t){const i=new Date(t),a=new Date(this[`${e}Date`]),n=k(a).year();let r=1,o=1,s=0,l=0;return"max"===e&&(r=12,o=k(i).daysInMonth(),s=23,l=59),k(i).year()===n&&(r=k(a).month()+1,k(i).month()+1===r&&(o=k(a).date(),k(i).date()===o&&(s=k(a).hour(),k(i).hour()===s&&(l=k(a).minute())))),{[`${e}Year`]:n,[`${e}Month`]:r,[`${e}Date`]:o,[`${e}Hour`]:s,[`${e}Minute`]:l}}}},[["render",function(t,i,a,n,r,o){const s=g(l("u-input"),e),k=y,C=g(l("u-picker"),x);return u(),m(f,null,[t.hasInput?(u(),h(k,{key:0,class:"u-datetime-picker"},{default:c((()=>[d(s,{placeholder:t.placeholder,border:"surround",modelValue:r.inputValue,"onUpdate:modelValue":i[0]||(i[0]=e=>r.inputValue=e),onClick:i[1]||(i[1]=e=>r.showByClickInput=!r.showByClickInput)},null,8,["placeholder","modelValue"])])),_:1})):p("",!0),d(C,{ref:"picker",show:t.show||t.hasInput&&r.showByClickInput,popupMode:t.popupMode,closeOnClickOverlay:t.closeOnClickOverlay,columns:r.columns,title:t.title,itemHeight:t.itemHeight,showToolbar:t.showToolbar,visibleItemCount:t.visibleItemCount,defaultIndex:r.innerDefaultIndex,cancelText:t.cancelText,confirmText:t.confirmText,cancelColor:t.cancelColor,confirmColor:t.confirmColor,onClose:o.close,onCancel:o.cancel,onConfirm:o.confirm,onChange:o.change},null,8,["show","popupMode","closeOnClickOverlay","columns","title","itemHeight","showToolbar","visibleItemCount","defaultIndex","cancelText","confirmText","cancelColor","confirmColor","onClose","onCancel","onConfirm","onChange"])],64)}],["__scopeId","data-v-b6f90bad"]]);export{I as _};
