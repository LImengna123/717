# 717安全食品商城

@(示例笔记本)[商城|帮助|Markdown]

-------------------

[TOC]

## 717商城介绍

>717安全食品商城是中国第一家安全食品商城，717安全食品商城创新商业模式，倡导“先溯源、再购买、保安全”新的消费方式，通过五大认证，确保食品安全，致力于为国人提供保安全、高品质、最低价、安全、放心、健康食品。是农业与互联网结合的产物，是响应李克强总理发展互联网+的号召，是响应国策，关乎国计民生的伟大事业。。    —— [717微博](http://weibo.com/p/1001603914945900212344)
###技术栈
>vue2 + vuex + vue-router + webpack + ES6 


### 项目运行
>#####克隆到本地
git clone https://github.com/LImengna123/717.git

>##### 安装依赖
yarn

 >#####开启本地服务器localhost:8080
yarn run dev

>##### 发布环境
yarn run build


### 代码块
``` python
import Vue from 'vue'
import App from './App.vue'
import router from "./router/router"
import axios from "axios"
import store from "./store/store"


require("./css/swiper.css")
require("./lib/swiper.js")
Vue.prototype.$http = axios
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
```
### 路由配置
``` python
import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/Home.vue"
import List from "../components/List.vue"

import ShopCar from "../components/shopCar.vue"
import My from "../components/mine.vue"
import Detail from "../components/Detail.vue"
import Search from "../components/search.vue"
import Goodsreceipt from "../components/Goodsreceipt.vue"
Vue.use(VueRouter)
const routes = [{
        path: '/',
        redirect: {
            name: "home"
        }
    },
    {
        path: "/home",
        name: "home",
        component: Home
    },
    {
        path: "/detail",
        name: "detail",
        component: Detail
    },
    {
        path: "/search",
        name: "search",
        component: Search
    },
    {
        path: "/list",
        name: "list",
        component: List
    },
    {
        path: "/shopCar",
        name: "shopCar",
        component: ShopCar
    },
    {
        path: "/my",
        name: "my",
        component: My
    },
    {
        path: "/goodsreceipt",
        name: "Goodsreceipt",
        component: Goodsreceipt
    }
]
export default new VueRouter({
    routes: routes
})
```



## 配置actions
``` python
actions:{
		add(context,num){
			context.commit("add",num)
		}
	}
```
####mutations
``` python
mutations:{
		add(state,num){
			var flag = true
			if(state.data==0){
				state.data.push(num)
			}else{
				state.data.forEach((i,val)=>{
					if(i.id==num.id){
						flag = false
						state.data[val].num++ 
					}
				})
				if(flag){
					state.data.push(num)
				}
			}
		},
		totle(state,index){
			let num = 0
			state.data.forEach((i,val)=>{
				num +=i.num
			})
			state.all = num
		},
		sle(state,index){
			let prices = 0
			console.log(index)
			if(index!=undefined){
				state.data[index].states=!state.data[index].states
			}
			state.data.forEach((i,val)=>{
				if(i.states){
					prices += i.num * i.price
				}
			})
			state.totle_price = prices.toFixed(2)
		},
		show(state,num){
			let prices = 0
			state.data.forEach((i,val)=>{
				i.states = num
				if(i.states){
					prices += i.num * i.price
				}
			})
			state.totle_price = prices.toFixed(2)
		},
		detal(state){
			let n = 1;
			let m = 0;
			state.data.forEach((i,val)=>{
				if(i.states){
					state.data.splice(val,1)
				}
			})
		}
	}
```
##创建store
``` python
import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		data:[],
		detail:{},
		all:0,
		totle:2,
		totle_price:0,
		show:false
	},
})
```

### 笔记本和标签
**马克飞象**增加了`@(笔记本)[标签A|标签B]`语法, 以选择笔记本和添加标签。 **绑定账号后**， 输入`(`自动会出现笔记本列表，请从中选择。

### 笔记标题
**马克飞象**会自动使用文档内出现的第一个标题作为笔记标题。例如本文，就是第一行的 `欢迎使用马克飞象`。

### 快捷编辑
保存在印象笔记中的笔记，右上角会有一个红色的编辑按钮，点击后会回到**马克飞象**中打开并编辑该笔记。
>**注意：**目前用户在印象笔记中单方面做的任何修改，马克飞象是无法自动感知和更新的。所以请务必回到马克飞象编辑。

### 数据同步
**马克飞象**通过**将Markdown原文以隐藏内容保存在笔记中**的精妙设计，实现了对Markdown的存储和再次编辑。既解决了其他产品只是单向导出HTML的单薄，又规避了服务端存储Markdown带来的隐私安全问题。这样，服务端仅作为对印象笔记 API调用和数据转换之用。

 >**隐私声明：用户所有的笔记数据，均保存在印象笔记中。马克飞象不存储用户的任何笔记数据。**

### 离线存储
**马克飞象**使用浏览器离线存储将内容实时保存在本地，不必担心网络断掉或浏览器崩溃。为了节省空间和避免冲突，已同步至印象笔记并且不再修改的笔记将删除部分本地缓存，不过依然可以随时通过`文档管理`打开。

> **注意：**虽然浏览器存储大部分时候都比较可靠，但印象笔记作为专业云存储，更值得信赖。以防万一，**请务必经常及时同步到印象笔记**。

## 编辑器相关
### 设置
右侧系统菜单（快捷键`Ctrl + M`）的`设置`中，提供了界面字体、字号、自定义CSS、vim/emacs 键盘模式等高级选项。

### 快捷键

帮助    `Ctrl + /`
同步文档    `Ctrl + S`
创建文档    `Ctrl + Alt + N`
最大化编辑器    `Ctrl + Enter`
预览文档 `Ctrl + Alt + Enter`
文档管理    `Ctrl + O`
系统菜单    `Ctrl + M` 

加粗    `Ctrl + B`
插入图片    `Ctrl + G`
插入链接    `Ctrl + L`
提升标题    `Ctrl + H`

## 关于收费

**马克飞象**为新用户提供 10 天的试用期，试用期过后需要[续费](maxiang.info/vip.html)才能继续使用。未购买或者未及时续费，将不能同步新的笔记。之前保存过的笔记依然可以编辑。


## 反馈与建议
- 微博：[@马克飞象](http://weibo.com/u/2788354117)，[@GGock](http://weibo.com/ggock "开发者个人账号")
- 邮箱：<hustgock@gmail.com>

---------
感谢阅读这份帮助文档。请点击右上角，绑定印象笔记账号，开启全新的记录与分享体验吧。




[^demo]: 这是一个示例脚注。请查阅 [MultiMarkdown 文档](https://github.com/fletcher/MultiMarkdown/wiki/MultiMarkdown-Syntax-Guide#footnotes) 关于脚注的说明。 **限制：** 印象笔记的笔记内容使用 [ENML][5] 格式，基于 HTML，但是不支持某些标签和属性，例如id，这就导致`脚注`和`TOC`无法正常点击。


  [1]: http://maxiang.info/client_zh
  [2]: https://chrome.google.com/webstore/detail/kidnkfckhbdkfgbicccmdggmpgogehop
  [3]: http://adrai.github.io/flowchart.js/
  [4]: http://bramp.github.io/js-sequence-diagrams/
  [5]: https://dev.yinxiang.com/doc/articles/enml.php

