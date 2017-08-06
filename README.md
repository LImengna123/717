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

