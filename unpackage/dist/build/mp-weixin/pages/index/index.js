"use strict";const e=require("../../common/vendor.js"),t=require("../../api/apis.js");if(!Array){(e.resolveComponent("custom-nav-bar")+e.resolveComponent("uni-icons")+e.resolveComponent("uni-dateformat")+e.resolveComponent("common-title")+e.resolveComponent("theme-item"))()}Math||((()=>"../../components/custom-nav-bar/custom-nav-bar.js")+(()=>"../../uni_modules/uni-icons/components/uni-icons/uni-icons.js")+(()=>"../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js")+(()=>"../../components/common-title/common-title.js")+(()=>"../../components/theme-item/theme-item.js"))();const a={__name:"index",setup(a){const i=e.ref([]),o=e.ref([]),s=e.ref([]),n=e.ref([]);return e.onShareAppMessage((e=>({title:"咸虾米壁纸，好看的手机壁纸",path:"/pages/classify/classify"}))),e.onShareTimeline((()=>({title:"咸虾米壁纸，好看的手机壁纸"}))),(async()=>{let e=await t.apiGetBanner();i.value=e.data})(),(async()=>{let e=await t.apiGetDayRandom();o.value=e.data})(),(async()=>{let e=await t.apiGetNotice({select:!0});s.value=e.data})(),(async()=>{let e=await t.apiGetClassify({select:!0});n.value=e.data,console.log(e)})(),(t,a)=>({a:e.p({title:"推荐"}),b:e.f(i.value,((t,a,i)=>e.e({a:"miniProgram"==t.target},"miniProgram"==t.target?{b:t.picurl,c:t.url,d:t.appid}:{e:t.picurl,f:`/pages/classlist/classlist?${t.url}`},{g:t._id}))),c:e.p({type:"sound-filled",size:"20"}),d:e.f(s.value,((t,a,i)=>({a:e.t(t.title),b:"/pages/notice/detail?id="+t._id,c:t._id}))),e:e.p({type:"right",size:"16",color:"#333"}),f:e.p({type:"calendar",size:"18"}),g:e.p({date:Date.now(),format:"dd日"}),h:e.f(o.value,((t,a,i)=>({a:t.smallPicurl,b:t._id,c:e.o((a=>{return i=t._id,e.index.setStorageSync("storgClassList",o.value),void e.index.navigateTo({url:"/pages/preview/preview?id="+i});var i}),t._id)}))),i:e.f(n.value,((t,a,i)=>({a:t._id,b:"057f1b6d-7-"+i,c:e.p({item:t})}))),j:e.p({isMore:!0})})}},i=e._export_sfc(a,[["__scopeId","data-v-057f1b6d"]]);a.__runtimeHooks=6,wx.createPage(i);
