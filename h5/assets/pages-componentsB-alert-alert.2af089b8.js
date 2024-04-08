import{m as e,h as t,d as l,o as s,c as a,w as c,a as o,p as r,s as i,n,l as u,f as d,t as f,i as _,g as p}from"./index-9e9f17ba.js";import{_ as m}from"./u-icon.09133ca0.js";import{r as y}from"./uni-app.es.bdc9cb81.js";import{_ as k}from"./u-transition.676fab82.js";import{_ as h}from"./_plugin-vue_export-helper.1b428a4d.js";const b=h({name:"u-alert",mixins:[e,t,{props:{title:{type:String,default:()=>uni.$u.props.alert.title},type:{type:String,default:()=>uni.$u.props.alert.type},description:{type:String,default:()=>uni.$u.props.alert.description},closable:{type:Boolean,default:()=>uni.$u.props.alert.closable},showIcon:{type:Boolean,default:()=>uni.$u.props.alert.showIcon},effect:{type:String,default:()=>uni.$u.props.alert.effect},center:{type:Boolean,default:()=>uni.$u.props.alert.center},fontSize:{type:[String,Number],default:()=>uni.$u.props.alert.fontSize}}}],data:()=>({show:!0}),computed:{iconColor(){return"light"===this.effect?this.type:"#fff"},iconName(){switch(this.type){case"success":return"checkmark-circle-fill";case"error":return"close-circle-fill";case"warning":default:return"error-circle-fill";case"info":return"info-circle-fill";case"primary":return"more-circle-fill"}}},emits:["click"],methods:{clickHandler(){this.$emit("click")},closeHandler(){this.show=!1}}},[["render",function(e,t,h,b,w,g){const $=y(l("u-icon"),m),S=_,x=p,I=y(l("u-transition"),k);return s(),a(I,{mode:"fade",show:w.show},{default:c((()=>[o(S,{class:r(["u-alert",[`u-alert--${e.type}--${e.effect}`]]),onClick:i(g.clickHandler,["stop"]),style:n([e.$u.addStyle(e.customStyle)])},{default:c((()=>[e.showIcon?(s(),a(S,{key:0,class:"u-alert__icon"},{default:c((()=>[o($,{name:g.iconName,size:"18",color:g.iconColor},null,8,["name","color"])])),_:1})):u("",!0),o(S,{class:"u-alert__content",style:n([{paddingRight:e.closable?"20px":0}])},{default:c((()=>[e.title?(s(),a(x,{key:0,class:r(["u-alert__content__title",["dark"===e.effect?"u-alert__text--dark":`u-alert__text--${e.type}--light`]]),style:n([{fontSize:e.$u.addUnit(e.fontSize),textAlign:e.center?"center":"left"}])},{default:c((()=>[d(f(e.title),1)])),_:1},8,["style","class"])):u("",!0),e.description?(s(),a(x,{key:1,class:r(["u-alert__content__desc",["dark"===e.effect?"u-alert__text--dark":`u-alert__text--${e.type}--light`]]),style:n([{fontSize:e.$u.addUnit(e.fontSize),textAlign:e.center?"center":"left"}])},{default:c((()=>[d(f(e.description),1)])),_:1},8,["style","class"])):u("",!0)])),_:1},8,["style"]),e.closable?(s(),a(S,{key:1,class:"u-alert__close",onClick:i(g.closeHandler,["stop"])},{default:c((()=>[o($,{name:"close",color:g.iconColor,size:"15"},null,8,["color"])])),_:1},8,["onClick"])):u("",!0)])),_:1},8,["class","onClick","style"])])),_:1},8,["show"])}],["__scopeId","data-v-3313a320"]]);const w=h({data:()=>({description:"",title:""})},[["render",function(e,t,r,i,n,u){const f=p,m=y(l("u-alert"),b),k=_;return s(),a(k,{class:"u-page"},{default:c((()=>[o(k,{class:"u-demo-block"},{default:c((()=>[o(f,{class:"u-demo-block__title"},{default:c((()=>[d("基础功能")])),_:1}),o(k,{class:"u-demo-block__content"},{default:c((()=>[o(k,{class:"u-alert-item"},{default:c((()=>[o(m,{description:"山不在于高，有了神仙就出名",type:"warning"})])),_:1}),o(k,{class:"u-alert-item"},{default:c((()=>[o(m,{description:"水不在深，有龙则灵",type:"primary"})])),_:1}),o(k,{class:"u-alert-item"},{default:c((()=>[o(m,{description:"斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青",type:"error"})])),_:1}),o(k,{class:"u-alert-item"},{default:c((()=>[o(m,{description:"谈笑有鸿儒，往来无白丁",type:"info"})])),_:1}),o(k,{class:"u-alert-item"},{default:c((()=>[o(m,{description:"可以调素琴，阅金经",type:"success"})])),_:1})])),_:1})])),_:1}),o(k,{class:"u-demo-block"},{default:c((()=>[o(f,{class:"u-demo-block__title"},{default:c((()=>[d("深浅色")])),_:1}),o(k,{class:"u-demo-block__content"},{default:c((()=>[o(k,{class:"u-alert-item"},{default:c((()=>[o(m,{description:"无丝竹之乱耳，无案牍之劳形",type:"warning"})])),_:1}),o(k,{class:"u-alert-item"},{default:c((()=>[o(m,{description:"南阳诸葛庐，西蜀子云亭。孔子云：何陋之有",type:"warning",effect:"dark"})])),_:1})])),_:1})])),_:1}),o(k,{class:"u-demo-block"},{default:c((()=>[o(f,{class:"u-demo-block__title"},{default:c((()=>[d("显示图标")])),_:1}),o(k,{class:"u-demo-block__content"},{default:c((()=>[o(k,{class:"u-alert-item"},{default:c((()=>[o(m,{description:"六王毕，四海一；蜀山兀，阿房出",type:"error",showIcon:""})])),_:1}),o(k,{class:"u-alert-item"},{default:c((()=>[o(m,{description:"覆压三百余里，隔离天日。骊山北构而西折，直走咸阳，二川溶溶，流入宫墙",type:"error",effect:"dark",showIcon:""})])),_:1})])),_:1})])),_:1}),o(k,{class:"u-demo-block"},{default:c((()=>[o(f,{class:"u-demo-block__title"},{default:c((()=>[d("可关闭")])),_:1}),o(k,{class:"u-demo-block__content"},{default:c((()=>[o(k,{class:"u-alert-item"},{default:c((()=>[o(m,{description:"五步一楼，十步一阁；廊腰缦回，檐牙高啄；各抱地势，钩心斗角",type:"success",showIcon:"",closable:""})])),_:1}),o(k,{class:"u-alert-item"},{default:c((()=>[o(m,{description:"盘盘焉，囷囷焉，蜂房水涡，矗不知其几千万落",type:"success",effect:"dark",closable:"",showIcon:""})])),_:1})])),_:1})])),_:1}),o(k,{class:"u-demo-block"},{default:c((()=>[o(f,{class:"u-demo-block__title"},{default:c((()=>[d("带标题")])),_:1}),o(k,{class:"u-demo-block__content"},{default:c((()=>[o(k,{class:"u-alert-item"},{default:c((()=>[o(m,{title:"妃嫔媵嫱，王子皇孙，辞楼下殿",description:"长桥卧波，未云何龙？复道行空，不霁何虹",type:"info",showIcon:"",closable:""})])),_:1}),o(k,{class:"u-alert-item"},{default:c((()=>[o(m,{title:"辇来于秦，朝歌夜弦，为秦宫人。明星荧荧，开妆镜也",description:"高低冥迷，不知西东。歌台暖响，春光融融；舞殿冷袖，风雨凄凄。一日之内，一宫之间，而气候不齐",type:"info",effect:"dark",closable:"",showIcon:""})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-d14f918f"]]);export{w as default};
