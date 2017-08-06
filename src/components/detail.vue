<template>
	<div class="detail">
		<header>
			<b class="back" @click="back">返回</b>
			<div class="nav">
				<ul>
					<li>商品</li>
					<li>详情</li>
				</ul>
			</div>
			<i @click="home"><img src="../assets/home/header/home.png"/></i>
		</header>
		<div class="main">
			<v-banner :data="data"></v-banner>
			<p>{{data.detail}}</p>
			<div class="shop">
				<div class="shop-left">
					<p>{{data.price}}</p>
					<p>{{data.postage}}</p>
				</div>
				<div class="btn">
					<span>溯源查询</span>
				</div>
			</div>
			<div class="shop">
				<div class="shop-left">
					<img :src="data.log" />
					<p>{{data.shopName}}</p>
					<p>{{data.shopNum}}</p>
				</div>
				<div class="btn">
					<span>进入店铺</span>
				</div>
			</div>
			<v-title></v-title>
			<div class="remoment">
				<div class="wrap">
					<dl v-for="i in data.remoment">
						<dt><img :src="i.src"/> </dt>
						<dd>
							<p>{{i.detail}}</p>
							<p>$:{{i.price}}</p>
						</dd>
					</dl>
				</div>
				
			</div>
		</div>
		<footer>
				<a class="employee"><img src="../assets/home/ico/05.png"/>客服</a>
				<a class="shopCar" @click="add"><img src="../assets/home/ico/homeland3.png" alt="" />购物车</a>
				<div class="foot-r">
					<p class="JoinCar">加入购物车</p>
					<p class="buy">立即购买</p>
				</div>
				
		</footer>
	</div>
</template>

<script>
	require("../css/detail.css")
	import banner from "./banner.vue"
	import title from "./title.vue"
	export default{
		name:"detail",
		data(){
			return {
				data:{}
			}
		},
		created(){
			this.data = this.$store.state.detail.detail
//			console.log(this.$route.query)
		},
		methods:{
			back(){
				this.$router.push("/home")
			},
			home(){
				this.$router.push("/home")
			},
			add(){
				this.$store.dispatch("add",{
					"id":this.shopData.goods_id,
					"info":this.shopData.discount_price,
					"name":this.shopData.store_name
				})
			}
		},
		
		components:{
			"v-banner":banner,
			"v-title":title
		},
		mounted(){
			setTimeout(()=>{
				new Swiper('.swiper-container',{
	    			loop: true,
	    			pagination: '.swiper-pagination',
	    			autoplayDisableOnInteraction : false,
//	    			autoplay:1000
				})
			},100)
		}
	}
</script>

<style>
	
	
</style>