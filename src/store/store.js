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
	},
	actions:{
		add(context,num){
			context.commit("add",num)
		}
	}
})
