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