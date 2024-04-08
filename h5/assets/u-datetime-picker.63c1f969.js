import{_ as e}from"./u-input.cfa13731.js";import{m as t,h as i,d as n,o as r,b as a,c as u,w as o,a as s,l,F as m,i as p}from"./index-9e9f17ba.js";import{r as h}from"./uni-app.es.bdc9cb81.js";import{_ as c}from"./u-picker.ef53f138.js";import{d}from"./index.a605aec4.js";import{_ as f}from"./_plugin-vue_export-helper.1b428a4d.js";const y=f({name:"datetime-picker",mixins:[t,i,{props:{hasInput:{type:Boolean,default:()=>!1},placeholder:{type:String,default:()=>"请选择"},format:{type:String,default:()=>""},show:{type:Boolean,default:()=>uni.$u.props.datetimePicker.show},popupMode:{type:String,default:()=>uni.$u.props.picker.popupMode},showToolbar:{type:Boolean,default:()=>uni.$u.props.datetimePicker.showToolbar},modelValue:{type:[String,Number],default:()=>uni.$u.props.datetimePicker.value},title:{type:String,default:()=>uni.$u.props.datetimePicker.title},mode:{type:String,default:()=>uni.$u.props.datetimePicker.mode},maxDate:{type:Number,default:()=>uni.$u.props.datetimePicker.maxDate},minDate:{type:Number,default:()=>uni.$u.props.datetimePicker.minDate},minHour:{type:Number,default:()=>uni.$u.props.datetimePicker.minHour},maxHour:{type:Number,default:()=>uni.$u.props.datetimePicker.maxHour},minMinute:{type:Number,default:()=>uni.$u.props.datetimePicker.minMinute},maxMinute:{type:Number,default:()=>uni.$u.props.datetimePicker.maxMinute},filter:{type:[Function,null],default:()=>uni.$u.props.datetimePicker.filter},formatter:{type:[Function,null],default:()=>uni.$u.props.datetimePicker.formatter},loading:{type:Boolean,default:()=>uni.$u.props.datetimePicker.loading},itemHeight:{type:[String,Number],default:()=>uni.$u.props.datetimePicker.itemHeight},cancelText:{type:String,default:()=>uni.$u.props.datetimePicker.cancelText},confirmText:{type:String,default:()=>uni.$u.props.datetimePicker.confirmText},cancelColor:{type:String,default:()=>uni.$u.props.datetimePicker.cancelColor},confirmColor:{type:String,default:()=>uni.$u.props.datetimePicker.confirmColor},visibleItemCount:{type:[String,Number],default:()=>uni.$u.props.datetimePicker.visibleItemCount},closeOnClickOverlay:{type:Boolean,default:()=>uni.$u.props.datetimePicker.closeOnClickOverlay},defaultIndex:{type:Array,default:()=>uni.$u.props.datetimePicker.defaultIndex}}}],data:()=>({inputValue:"",showByClickInput:!1,columns:[],innerDefaultIndex:[],innerFormatter:(e,t)=>t}),watch:{show(e,t){e&&this.updateColumnValue(this.innerValue)},modelValue(e){this.init(),this.getInputValue()},propsChange(){this.init()}},computed:{propsChange(){return[this.mode,this.maxDate,this.minDate,this.minHour,this.maxHour,this.minMinute,this.maxMinute,this.filter]}},mounted(){this.init()},emits:["close","cancel","confirm","change","update:modelValue"],methods:{getInputValue(e){if("time"==this.mode)this.inputValue=e;else if(this.format)this.inputValue=d(e).format(this.format);else{let t="";switch(this.mode){case"date":t="YYYY-MM-DD";break;case"year-month":t="YYYY-MM";break;case"datetime":t="YYYY-MM-DD HH:mm";break;case"time":t="HH:mm"}this.inputValue=d(e).format(t)}},init(){this.innerValue=this.correctValue(this.modelValue),this.updateColumnValue(this.innerValue)},setFormatter(e){this.innerFormatter=e},close(){this.closeOnClickOverlay&&this.$emit("close")},cancel(){this.hasInput&&(this.showByClickInput=!1),this.$emit("cancel")},confirm(){this.$emit("confirm",{value:this.innerValue,mode:this.mode}),this.$emit("update:modelValue",this.innerValue),this.hasInput&&(this.getInputValue(this.innerValue),this.showByClickInput=!1)},intercept(e,t){let i=e.match(/\d+/g);return i.length>1?(uni.$u.error("请勿在过滤或格式化函数时添加数字"),0):t&&4==i[0].length?i[0]:i[0].length>2?(uni.$u.error("请勿在过滤或格式化函数时添加数字"),0):i[0]},change(e){const{indexs:t,values:i}=e;let n="";if("time"===this.mode)n=`${this.intercept(i[0][t[0]])}:${this.intercept(i[1][t[1]])}`;else{const e=parseInt(this.intercept(i[0][t[0]],"year")),r=parseInt(this.intercept(i[1][t[1]]));let a=parseInt(i[2]?this.intercept(i[2][t[2]]):1),u=0,o=0;const s=d(`${e}-${r}`).daysInMonth();"year-month"===this.mode&&(a=1),a=Math.min(s,a),"datetime"===this.mode&&(u=parseInt(this.intercept(i[3][t[3]])),o=parseInt(this.intercept(i[4][t[4]]))),n=Number(new Date(e,r-1,a,u,o))}n=this.correctValue(n),this.innerValue=n,this.updateColumnValue(n),this.$emit("change",{value:n,picker:this.$refs.picker,mode:this.mode})},updateColumnValue(e){this.innerValue=e,this.updateColumns(),setTimeout((()=>{this.updateIndexs(e)}),0)},updateIndexs(e){let t=[];const i=this.formatter||this.innerFormatter,n=uni.$u.padZero;if("time"===this.mode){const n=e.split(":");t=[i("hour",n[0]),i("minute",n[1])]}else t=[i("year",`${d(e).year()}`),i("month",n(d(e).month()+1))],"date"===this.mode&&t.push(i("day",n(d(e).date()))),"datetime"===this.mode&&t.push(i("day",n(d(e).date())),i("hour",n(d(e).hour())),i("minute",n(d(e).minute())));const r=this.columns.map(((e,i)=>Math.max(0,e.findIndex((e=>e===t[i])))));this.innerDefaultIndex=r},updateColumns(){const e=this.formatter||this.innerFormatter,t=this.getOriginColumns().map((t=>t.values.map((i=>e(t.type,i)))));this.columns=t},getOriginColumns(){return this.getRanges().map((({type:e,range:t})=>{let i=function(e,t){let i=-1;const n=Array(e<0?0:e);for(;++i<e;)n[i]=t(i);return n}(t[1]-t[0]+1,(i=>{let n=t[0]+i;return n="year"===e?`${n}`:uni.$u.padZero(n),n}));return this.filter&&(i=this.filter(e,i),(!i||i&&0==i.length)&&uni.showToast({title:"日期filter结果不能为空",icon:"error",mask:!0})),{type:e,values:i}}))},generateArray:(e,t)=>Array.from(new Array(t+1).keys()).slice(e),correctValue(e){const t="time"!==this.mode;if(t&&!uni.$u.test.date(e)?e=this.minDate:t||e||(e=`${uni.$u.padZero(this.minHour)}:${uni.$u.padZero(this.minMinute)}`),t)return e=d(e).isBefore(d(this.minDate))?this.minDate:e,e=d(e).isAfter(d(this.maxDate))?this.maxDate:e;{if(-1===String(e).indexOf(":"))return uni.$u.error("时间错误，请传递如12:24的格式");let[t,i]=e.split(":");return t=uni.$u.padZero(uni.$u.range(this.minHour,this.maxHour,Number(t))),i=uni.$u.padZero(uni.$u.range(this.minMinute,this.maxMinute,Number(i))),`${t}:${i}`}},getRanges(){if("time"===this.mode)return[{type:"hour",range:[this.minHour,this.maxHour]},{type:"minute",range:[this.minMinute,this.maxMinute]}];const{maxYear:e,maxDate:t,maxMonth:i,maxHour:n,maxMinute:r}=this.getBoundary("max",this.innerValue),{minYear:a,minDate:u,minMonth:o,minHour:s,minMinute:l}=this.getBoundary("min",this.innerValue),m=[{type:"year",range:[a,e]},{type:"month",range:[o,i]},{type:"day",range:[u,t]},{type:"hour",range:[s,n]},{type:"minute",range:[l,r]}];return"date"===this.mode&&m.splice(3,2),"year-month"===this.mode&&m.splice(2,3),m},getBoundary(e,t){const i=new Date(t),n=new Date(this[`${e}Date`]),r=d(n).year();let a=1,u=1,o=0,s=0;return"max"===e&&(a=12,u=d(i).daysInMonth(),o=23,s=59),d(i).year()===r&&(a=d(n).month()+1,d(i).month()+1===a&&(u=d(n).date(),d(i).date()===u&&(o=d(n).hour(),d(i).hour()===o&&(s=d(n).minute())))),{[`${e}Year`]:r,[`${e}Month`]:a,[`${e}Date`]:u,[`${e}Hour`]:o,[`${e}Minute`]:s}}}},[["render",function(t,i,d,f,y,g){const $=h(n("u-input"),e),x=p,k=h(n("u-picker"),c);return r(),a(m,null,[t.hasInput?(r(),u(x,{key:0},{default:o((()=>[s($,{placeholder:t.placeholder,border:"surround",modelValue:y.inputValue,"onUpdate:modelValue":i[0]||(i[0]=e=>y.inputValue=e),onClick:i[1]||(i[1]=e=>y.showByClickInput=!y.showByClickInput)},null,8,["placeholder","modelValue"])])),_:1})):l("",!0),s(k,{ref:"picker",show:t.show||t.hasInput&&y.showByClickInput,popupMode:t.popupMode,closeOnClickOverlay:t.closeOnClickOverlay,columns:y.columns,title:t.title,itemHeight:t.itemHeight,showToolbar:t.showToolbar,visibleItemCount:t.visibleItemCount,defaultIndex:y.innerDefaultIndex,cancelText:t.cancelText,confirmText:t.confirmText,cancelColor:t.cancelColor,confirmColor:t.confirmColor,onClose:g.close,onCancel:g.cancel,onConfirm:g.confirm,onChange:g.change},null,8,["show","popupMode","closeOnClickOverlay","columns","title","itemHeight","showToolbar","visibleItemCount","defaultIndex","cancelText","confirmText","cancelColor","confirmColor","onClose","onCancel","onConfirm","onChange"])],64)}],["__scopeId","data-v-88e55fb6"]]);export{y as _};
