<template>
	<div id="shopCar">
		<header>
			 <!--<div>购物车</div>
			 <span @click="edit">{{editText}}</span>-->
			 <header>
				<p class="gosh">购物车<span class="edit"@click="edit" >{{editText}}</span></p>
			</header>
		</header>
		<main>
	        <div class="cont">
	        	<div class="empty" v-if="show">
	           		<div class="log">
	           			<img src="../assets/home/ico/8.png"/>
	           		</div>
	           		<div class="text">
	           			<h2>购物车为空</h2>
	           			<span>去逛逛</span>
	           		</div>
	            </div>
	        	<v-shopcargoods v-else v-for="(i,index) in shopCarData" :data="i" :index=index></v-shopcargoods>
	        </div>
	        <div class="content">
				<v-title></v-title>
				<div class="remoment">
					<v-goods v-for="(i,index) in remomentData" :shopData=i></v-goods>
				</div>
			</div>
			<div class="count-num" v-if="!show">
				<a :class="{all:isShow}" @click="allFn"></a><label>全选</label>
				<div class="r">
					<span v-if="edits">合计:￥{{totle}}</span>
					<p @click="detalPay">{{value}}</p>
				</div>
			</div>
		</main>
		<v-footer></v-footer>
	</div>
</template>

<script>
	import Footer from "./Footer.vue"
	import title from "./title.vue"
	import goods from "./goods.vue"
	import shopCargoods from "./shopCargoods.vue"
	export default{
		name:"shopCar",
		data(){
			return {
				remomentData:{},
				shopCarData:[],
				show:true,
				edits:true,
				editText:"编辑",
				isShow:false,
				value:"结算"
			}
		},
		created(){
			this.$http.get("./src/data/remoment.json").then((data)=>{
				console.log(data)
				this.remomentData = data.data.list
			})
			this.shopCarData = this.$store.state.data
			console.log(this.shopCarData.length)
			if(this.shopCarData.length>0){
				this.show = false
			}else{
				this.show = true
			}
		},
		methods:{
			allFn(){
			this.isShow = !this.isShow
			},
			edit(){
				if(this.value=="结算"){
					this.edits=false
					this.editText = "编辑"
					this.value = "删除"
				}else{
					this.value = "结算"
					this.editText = "完成"
					this.edits=true
				}
			},
			detalPay(){
				if(this.value=="结算"){
					this.$router.push("/pay")
				}else{
					this.$store.commit("detal")
					this.$store.commit("totle")
				}
			}
		},
		watch:{
			isShow(a){
				this.$store.commit("show",a)
			}
		},
		components:{
			"v-footer":Footer,
			"v-title":title,
			"v-goods":goods,
			"v-shopcargoods":shopCargoods
		},
		computed:{
			totle(){
				return this.$store.state.totle_price
			}
		}
	}
</script>

<style lang="scss">
	#shopCar{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction:column ;
		header{
		background: #fafafb;
		border-bottom: 1px solid #e5e5e5;
		.gosh{
			width: 100%;
			font-size:18px;
			text-align: center;
			position: relative;
			line-height: 4rem;
		span{
			position: absolute;
		display: inline-block;
		right: .3rem;
		font-size: 0.3rem;
		}
		}
	}
		main{
			flex: 1;
			overflow-y: auto;
			.cont{
				width: 100%;
				.empty{
					width: 100%;
					text-align: center;
					background: #fff;
					padding-bottom: 2rem;
					.log{
						display: inline-block;
						width: 6rem;
						height: 6rem;
						margin-top:4rem;
						img{
							width: 100%;
							height: 100%;
						}
					}
					.text{
						width: 100%;
						margin-top: 1rem;
						h2{
							text-align: center;
							font-weight: normal;
							margin-bottom: 1rem;
						}
						span{
							display: inline-block;
							width: 6rem;
							height: 3rem;
							border: 1px solid #fc4141;
							color: #fc4141;
							text-align: center;
							line-height: 3rem;
							border-radius: .3rem;
						}
					}
				}
			}
			.count-num{
					width: 100%;
					height: 4rem;
					position: fixed;
					background: #fff;
					bottom: 5rem;
					a{
						display: inline-block;
						height: 2rem;
						width: 2rem;
						border-radius: 2rem;
						border: 1px solid #ccc;
						position: relative;
						left: 1rem;
						top: 13px;
					}
					label{
						position: relative;
						left: 24px;
						top: 7px;
						font-size:14px;
					}
					.all{
						background:#fc4141;
					}
					.all:after{
						content: "";
						position: absolute;
						width: 10px;
						height: 3px;
						border: 2px solid transparent;
						border-bottom-color: #fff;
						border-left-color:#fff;
						transform: rotate(-45deg);
						left: 5px;
						top: 5px;
						
					}
					.r{
						width:260px;
						float: right;
						line-height: 4rem;
						text-align: right;
						font-size: 14px;
						span{
							margin-right: 20px;
						}
						p{
							width: 40%;
							line-height: 4rem;
							background: red;
							color: #fff;
							text-align: center;
							float: right;
						}
					}
				}
			
		}
		footer{
			
		}
	}
	
</style>