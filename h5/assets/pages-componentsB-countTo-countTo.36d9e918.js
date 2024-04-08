import{m as t,h as a,o as l,c as s,w as e,f as i,t as o,n as u,g as n,i as r,a as d,d as c}from"./index-9e9f17ba.js";import{_ as m}from"./_plugin-vue_export-helper.1b428a4d.js";import{r as h}from"./uni-app.es.bdc9cb81.js";import{_ as p,a as _}from"./u-grid.65d1483e.js";const f={props:{startVal:{type:[String,Number],default:()=>uni.$u.props.countTo.startVal},endVal:{type:[String,Number],default:()=>uni.$u.props.countTo.endVal},duration:{type:[String,Number],default:()=>uni.$u.props.countTo.duration},autoplay:{type:Boolean,default:()=>uni.$u.props.countTo.autoplay},decimals:{type:[String,Number],default:()=>uni.$u.props.countTo.decimals},useEasing:{type:Boolean,default:()=>uni.$u.props.countTo.useEasing},decimal:{type:[String,Number],default:()=>uni.$u.props.countTo.decimal},color:{type:String,default:()=>uni.$u.props.countTo.color},fontSize:{type:[String,Number],default:()=>uni.$u.props.countTo.fontSize},bold:{type:Boolean,default:()=>uni.$u.props.countTo.bold},separator:{type:String,default:()=>uni.$u.props.countTo.separator}}};const V=m({name:"u-count-to",data(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:Number(this.duration),startTime:null,timestamp:null,remaining:null,rAF:null,lastTime:0}},mixins:[t,a,f],computed:{countDown(){return this.startVal>this.endVal}},watch:{startVal(){this.autoplay&&this.start()},endVal(){this.autoplay&&this.start()}},mounted(){this.autoplay&&this.start()},emits:["end"],methods:{easingFn:(t,a,l,s)=>l*(1-Math.pow(2,-10*t/s))*1024/1023+a,requestAnimationFrame(t){const a=(new Date).getTime(),l=Math.max(0,16-(a-this.lastTime)),s=setTimeout((()=>{t(a+l)}),l);return this.lastTime=a+l,s},cancelAnimationFrame(t){clearTimeout(t)},start(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=this.requestAnimationFrame(this.count)},reStart(){this.paused?(this.resume(),this.paused=!1):(this.stop(),this.paused=!0)},stop(){this.cancelAnimationFrame(this.rAF)},resume(){this.remaining&&(this.startTime=0,this.localDuration=this.remaining,this.localStartVal=this.printVal,this.requestAnimationFrame(this.count))},reset(){this.startTime=null,this.cancelAnimationFrame(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count(t){this.startTime||(this.startTime=t),this.timestamp=t;const a=t-this.startTime;this.remaining=this.localDuration-a,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(a,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(a,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(a/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(a/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal)||0,a<this.localDuration?this.rAF=this.requestAnimationFrame(this.count):this.$emit("end")},isNumber:t=>!isNaN(parseFloat(t)),formatNumber(t){t=(t=Number(t)).toFixed(Number(this.decimals));const a=(t+="").split(".");let l=a[0];const s=a.length>1?this.decimal+a[1]:"",e=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;e.test(l);)l=l.replace(e,"$1"+this.separator+"$2");return l+s},destroyed(){this.cancelAnimationFrame(this.rAF)}}},[["render",function(t,a,r,d,c,m){const h=n;return l(),s(h,{class:"u-count-num",style:u({fontSize:t.$u.addUnit(t.fontSize),fontWeight:t.bold?"bold":"normal",color:t.color})},{default:e((()=>[i(o(c.displayValue),1)])),_:1},8,["style"])}],["__scopeId","data-v-db4a91d3"]]);const g=m({data:()=>({value:3e3,startVal1:300,startVal2:100,endVal:10.55,decimals:2,startVal3:2e3,endVal2:1542,endVal3:3e3,autoplay:!1,color:"#FF0000",fontSize:40}),onLoad(){},methods:{start(){this.$refs.uCountTo.start()},paused(){this.$refs.uCountTo.stop()},resume(){this.$refs.uCountTo.resume()},end(){console.log("end")}}},[["render",function(t,a,o,u,m,f){const g=n,b=h(c("u-count-to"),V),y=r,S=h(c("u-grid-item"),p),T=h(c("u-grid"),_);return l(),s(y,{class:"u-page"},{default:e((()=>[d(y,{class:"u-demo-block"},{default:e((()=>[d(g,{class:"u-demo-block__title"},{default:e((()=>[i("基础功能")])),_:1}),d(y,{class:"u-demo-block__content"},{default:e((()=>[d(y,{class:"u-page__tag-item"},{default:e((()=>[d(b,{endVal:m.value,onEnd:f.end},null,8,["endVal","onEnd"])])),_:1})])),_:1})])),_:1}),d(y,{class:"u-demo-block"},{default:e((()=>[d(g,{class:"u-demo-block__title"},{default:e((()=>[i("倒计数")])),_:1}),d(y,{class:"u-demo-block__content"},{default:e((()=>[d(y,{class:"u-page__tag-item"},{default:e((()=>[d(b,{startVal:m.startVal1},null,8,["startVal"])])),_:1})])),_:1})])),_:1}),d(y,{class:"u-demo-block"},{default:e((()=>[d(g,{class:"u-demo-block__title"},{default:e((()=>[i("显示小数位")])),_:1}),d(y,{class:"u-demo-block__content"},{default:e((()=>[d(y,{class:"u-page__tag-item"},{default:e((()=>[d(b,{startVal:m.startVal2,endVal:m.endVal,decimals:m.decimals},null,8,["startVal","endVal","decimals"])])),_:1})])),_:1})])),_:1}),d(y,{class:"u-demo-block"},{default:e((()=>[d(g,{class:"u-demo-block__title"},{default:e((()=>[i("千分位分隔符")])),_:1}),d(y,{class:"u-demo-block__content"},{default:e((()=>[d(y,{class:"u-page__tag-item"},{default:e((()=>[d(b,{startVal:m.startVal3,endVal:m.endVal2,separator:",",decimals:m.decimals},null,8,["startVal","endVal","decimals"])])),_:1})])),_:1})])),_:1}),d(y,{class:"u-demo-block"},{default:e((()=>[d(g,{class:"u-demo-block__title"},{default:e((()=>[i("自定义控制")])),_:1}),d(y,{class:"u-demo-block__content"},{default:e((()=>[d(y,{class:"u-page__tag-item"},{default:e((()=>[d(b,{ref:"uCountTo",endVal:m.endVal3,autoplay:m.autoplay},null,8,["endVal","autoplay"])])),_:1})])),_:1}),d(y,{class:"u-demo-block__content"},{default:e((()=>[d(y,{class:"",style:{flex:"1"}},{default:e((()=>[d(T,{border:"",align:"center",customStyle:"margin-top: 20px;margin-bottom: 20"},{default:e((()=>[d(S,{onClick:f.start},{default:e((()=>[d(y,{class:"u-grid-slot"},{default:e((()=>[d(y,{class:"u-grid-slot__circle"},{default:e((()=>[d(g,{class:"u-grid-slot__circle__text"},{default:e((()=>[i("开始")])),_:1})])),_:1})])),_:1})])),_:1},8,["onClick"]),d(S,{onClick:f.paused},{default:e((()=>[d(y,{class:"u-grid-slot"},{default:e((()=>[d(y,{class:"u-grid-slot__circle"},{default:e((()=>[d(g,{class:"u-grid-slot__circle__text"},{default:e((()=>[i("暂停")])),_:1})])),_:1})])),_:1})])),_:1},8,["onClick"]),d(S,{onClick:f.resume},{default:e((()=>[d(y,{class:"u-grid-slot"},{default:e((()=>[d(y,{class:"u-grid-slot__circle"},{default:e((()=>[d(g,{class:"u-grid-slot__circle__text"},{default:e((()=>[i("继续")])),_:1})])),_:1})])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1}),d(y,{class:"u-demo-block"},{default:e((()=>[d(g,{class:"u-demo-block__title"},{default:e((()=>[i("自定义")])),_:1}),d(y,{class:"u-demo-block__content"},{default:e((()=>[d(y,{class:"u-page__tag-item"},{default:e((()=>[d(b,{endVal:m.value,color:"#909399",fontSize:m.fontSize,bold:!0},null,8,["endVal","fontSize"])])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-fadf569f"]]);export{g as default};
