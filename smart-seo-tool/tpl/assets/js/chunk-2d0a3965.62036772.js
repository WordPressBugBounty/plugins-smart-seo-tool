(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3965"],{"038d":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"steps-card-box"},[e("div",{staticClass:"wbs-main"},[e("div",{staticClass:"step-desc"},[t._v(" 此处用于插件初始化启用的功能模块。此后也可以通过插件设置修改。 ")]),e("wbs-opt-box",{attrs:{name:"TDK优化",desc:"通过自动或者自定义，优化页面标题、描述和关键词，以符合搜索引擎要求。","doc-link":""},scopedSlots:t._u([{key:"ctrlItems",fn:function(){return[e("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.opt.active.tdk,callback:function(e){t.$set(t.opt.active,"tdk",e)},expression:"opt.active.tdk"}})]},proxy:!0}])}),e("wbs-opt-box",{attrs:{name:"图片优化",desc:"根据规则自动生成图片Title和ALT替代文本。\n","doc-link":""},scopedSlots:t._u([{key:"ctrlItems",fn:function(){return[e("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.opt.active.img_seo,callback:function(e){t.$set(t.opt.active,"img_seo",e)},expression:"opt.active.img_seo"}})]},proxy:!0}])}),e("wbs-opt-box",{attrs:{name:"链接优化",desc:"对分类页、Tag页及搜索页URL进行改写，及对出站链接添加nofollow属性及本域中转跳转。\n","doc-link":""},scopedSlots:t._u([{key:"ctrlItems",fn:function(){return[e("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.opt.active.url_seo,callback:function(e){t.$set(t.opt.active,"url_seo",e)},expression:"opt.active.url_seo"}})]},proxy:!0}])}),e("wbs-opt-box",{attrs:{name:"404监测",desc:"依赖蜘蛛分析插件，记录搜索引擎爬取404状态URL，以便于站长进行链接重定向。","doc-link":""},scopedSlots:t._u([{key:"ctrlItems",fn:function(){return[e("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.opt.active.url_404,callback:function(e){t.$set(t.opt.active,"url_404",e)},expression:"opt.active.url_404"}})]},proxy:!0}])}),e("wbs-opt-box",{attrs:{name:"失效URL",desc:"自动扫描并检测网站页面出站链接，以及早发现并处理失效链接。","doc-link":""},scopedSlots:t._u([{key:"ctrlItems",fn:function(){return[e("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.opt.active.broken,callback:function(e){t.$set(t.opt.active,"broken",e)},expression:"opt.active.broken"}})]},proxy:!0}])}),e("wbs-opt-box",{attrs:{name:"robots.txt",desc:"robots.txt用来告诉搜索引擎，网站上的哪些页面可以抓取，哪些页面不能抓取。","doc-link":""},scopedSlots:t._u([{key:"ctrlItems",fn:function(){return[e("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.opt.active.robots_seo,callback:function(e){t.$set(t.opt.active,"robots_seo",e)},expression:"opt.active.robots_seo"}})]},proxy:!0}])}),e("wbs-opt-box",{attrs:{name:"Sitemap",desc:"站点地图功能，可帮助搜索引擎更好地抓取网站内容。并支持通知谷歌和Bing。","doc-link":""},scopedSlots:t._u([{key:"ctrlItems",fn:function(){return[e("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.opt.active.sitemap_seo,callback:function(e){t.$set(t.opt.active,"sitemap_seo",e)},expression:"opt.active.sitemap_seo"}})]},proxy:!0}])})],1),e("div",{staticClass:"steps-card-ft"},[e("div",{staticClass:"scft-item primary"},[e("el-button",{attrs:{size:"small"},on:{click:t.prev}},[e("i",{staticClass:"el-icon-arrow-left"}),t._v(" 上一步")])],1),e("div",{staticClass:"scft-item"},[e("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.updateData}},[t._v("完成")])],1)])])},s=[],c={name:"GuideStep7",provide(){return{needPro:!1}},data(){const t=this;return{formChanged:1,isLoaded:!1,is_pro:t.$cnf.is_pro,opt:{active:{}},cnf:{}}},provide(){return{needPro:!1}},created(){const t=this;t.getData()},methods:{getData(){const t=this;t.$api.getData({action:t.$cnf.action.act,op:"get_guide"}).then(e=>{t.opt=e["data"],t.isLoaded=!0})},updateData(t){const e=this;e.opt.step=7,e.opt.finnish=1,e.$api.saveData({_ajax_nonce:_wb_sst_ajax_nonce||"",action:e.$cnf.action.act,op:"set_guide",opt:e.opt}).then(a=>{e.formChanged=1,e.$emit("next",!0),"function"==typeof t&&t&&t()})},prev(){this.$emit("prev",!0)}},watch:{},beforeRouteLeave(t,e,a){const o=this;o.formChanged>1?o.$wbui.open({content:"您修改的设置尚未保存，确定离开此页面吗？",btn:["保存并离开","放弃修改"],yes(){return a(!1),o.updateData(()=>{a()}),!1},no(){return a(),!1}}):a()}},i=c,n=a("2877"),l=Object(n["a"])(i,o,s,!1,null,null,null);e["default"]=l.exports}}]);