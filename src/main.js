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