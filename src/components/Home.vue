<template>
	<div id="home">
	<header class="header">
		<span><img src="../assets/home/header/H_r2_c1.png"></span>
		<p class="search_home"><b><img src="../assets/home/header/search.png"/></b><input type="text" placeholder="请输入您要购买的商品" @focus="search"></p>
		<span class="iconfont shop_btn"><img src="../assets/home/header/H_r1_c3.png"/><p style="font-size: .22rem"></p></span>    
  </header>
		<div class="main" @scroll="scrollFn">
			<div class="scroll-top">
				<v-banner :data="data"></v-banner>
				<nav>
					<ul v-for="i in data.nav">
						<li v-for="v in i">
							<span><img :src="v.src"></span>
							<a>{{v.detail}}</a>
						</li>
					</ul>
				</nav>
				<div class="tip">
					<div class="tip-l">
						商城动态
					</div>
					<div class="swiper">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="x in data.tip">
								<div class="tip-r">
									{{x}}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="title">
					<i><img src="../assets/home/ico/tip.png"/></i>
					<b>天天特惠</b>
					<span>每天都有惊喜</span>
					<a href="">更多》</a>
				</div>
				<div class="Preferential">
					<div class="Preferential-l">
						<img src="../assets/home/shop/shop1.png"/>
					</div>
					<div class="Preferential-r">
						<p><img src="../assets/home/shop/2.png"/></p>
						<p><img src="../assets/home/shop/3.png"/></p>
					</div>
				</div>
				<div class="list">
					<div class="classify">
						<img class="left" src="../assets/home/ico/i.png" alt="" />
						<img class="right" src="../assets/home/ico/i.png" alt="" />
						<span><img src="../assets/home/ico/ico.png" alt="" /></span>
						<label for="">家乡味道</label>
						<a>更多》</a>
					</div>
					<div class="shop">
						<v-goods  v-for="i in shop" :shopData="i"></v-goods>
					</div>
				</div>
			</div>
		</div>
		<v-footer></v-footer>
	</div>
</template>
<script>
	require("../css/style.css")
	import Goods from "./goods.vue"
	import Footer from "./Footer.vue"
	import Banner from "./banner.vue"
	export default{
		name:"home",
		data(){
			return {
				data:{},
				flag:true,
				shop:[],
				Ctop:0
			}
		}, 
		components:{
			"v-goods":Goods,
			"v-footer":Footer,
			"v-banner":Banner
		},
		created(){
			// console.log()
			this.$http.get("./src/data/static.json").then((data)=>{
				// console.log(data.data.list)
				this.data = data.data.list
//				console.log(this.shop)
			})
			this.$http.get("./src/data/shop.json").then((data)=>{
				this.shop = data.data.data.data
			})
		},
		methods:{
			search(){
				this.$router.push("/search")
			},
			scrollFn(){
				let Vtop = this.$el.querySelector(".main").offsetHeight
				let Stop = this.$el.querySelector(".main").scrollTop
				this.Ctop = this.$el.querySelector(".scroll-top").offsetHeight
				let Ttop = this.Ctop - Vtop
				
				if(Ttop - Stop<1 && this.flag){
					this.$http.get("./src/data/shop.json").then((data)=>{
//							this.shop.push(data.data.data.data)
							this.Ctop = this.$el.querySelector(".scroll-top").offsetHeight
//								console.log(Ctop)
					})
					
				}
				
			}
		},
		watch:{
			Ctop(a,b){
//				console.log(a)
//				console.log()
			}
		},
		mounted(){
			setTimeout(()=>{
				new Swiper('.swiper-container',{
	    			loop: true,
	    			pagination: '.swiper-pagination',
	    			autoplayDisableOnInteraction : false,
	    			autoplay:1000
				})
			},100)
			setTimeout(()=>{
				new Swiper('.swiper',{
					direction : 'vertical',
	    			loop: true,
	    			autoplayDisableOnInteraction : false,
	    			autoplay:1000
				})
			},200)
			
		}
	}

</script>

<style scoped>
	#home{

	}
	.shop:after{
		display: block;
		content: "";
		width: 0;
		height: 0;
		clear: both;
		overflow: hidden;
	}
</style>