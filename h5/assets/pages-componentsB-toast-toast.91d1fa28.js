import{_ as t}from"./u-gap.a5e7cd4b.js";import{o as e,c as o,w as s,i,a,b as u,r as l,F as n,d as r}from"./index-9e9f17ba.js";import{r as p}from"./uni-app.es.bdc9cb81.js";import{_ as c}from"./u-toast.21e25943.js";import{_ as m}from"./u-cell.559621d2.js";import{_ as g}from"./u-cell-group.84fc4bd8.js";import{_ as d}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.1be2f080.js";import"./u-icon.09133ca0.js";import"./u-overlay.c3ebd6c7.js";import"./u-transition.676fab82.js";import"./u-line.757a8fd0.js";const w=d({data:()=>({show:!1,list:[{type:"default",title:"默认主题",message:"锦瑟无端五十弦",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/default.png"},{type:"error",icon:!1,title:"失败主题",message:"一弦一柱思华年",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/error.png"},{type:"success",title:"成功主题(带图标)",message:"庄生晓梦迷蝴蝶",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/success.png"},{type:"warning",position:"top",title:"位置偏移上方",message:"望帝春心托杜鹃",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/top.png"},{type:"loading",title:"正在加载",message:"正在加载",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/loading.png"},{type:"default",title:"结束后跳转标签页",message:"此情可待成追忆",url:"/pages/componentsB/tag/tag",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/jump.png"}]}),computed:{getIcon:()=>t=>"https://cdn.uviewui.com/uview/example/"+t+".png"},methods:{showToast(t){this.$refs.uToast.show({...t,complete(){t.url&&uni.navigateTo({url:t.url})}})}}},[["render",function(d,w,f,v,h,j){const _=p(r("u-gap"),t),y=p(r("u-toast"),c),U=p(r("u-cell"),m),T=p(r("u-cell-group"),g),b=i;return e(),o(b,{class:"u-page"},{default:s((()=>[a(_,{height:"30",bgColor:"#fff"}),a(y,{ref:"uToast"},null,512),a(T,{"title-bg-color":"rgb(243, 244, 246)"},{default:s((()=>[(e(!0),u(n,null,l(h.list,((t,s)=>(e(),o(U,{titleStyle:{fontWeight:500},title:t.title,key:s,isLink:"",icon:t.iconUrl,onClick:e=>j.showToast(t)},null,8,["title","icon","onClick"])))),128))])),_:1})])),_:1})}],["__scopeId","data-v-2d0ac93e"]]);export{w as default};
