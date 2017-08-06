<template>
		<div class="goods">
			<dl>
				<dt @click="detail"> <img :src="shopData.src"/> </dt>
				<dd> 
					<p @click="detail">{{shopData.goods_name}}</p>
					<p>
						<span>￥</span>{{shopData.discount_price}}
						<b @click="add"> <img src="../assets/home/ico/homeland3.png" alt="" /> </b>
					</p>
				</dd>
			</dl>
		</div>	
</template>

<script>
	export default {
		name:"goods",
		props:{
			shopData:{}
		},
		data(){
			return {
				
			}
		},
		mounted(){
//			console.log(this.shopData.goods_name)
		},
		methods:{
			add(){
				
				this.$store.dispatch("add",{
					"id":this.shopData.goods_id,
					"price":this.shopData.discount_price,
					"name":this.shopData.store_name,
					"src":this.shopData.src,
					"num":this.shopData.num,
					"states":false
				})
				this.$store.commit("totle")
			},
			detail(){
				this.$router.push("/detail")
				this.$store.state.detail = this.shopData
			}
		}
	}
</script>

<style >
	.goods{
		width: 48%;
		float: left;
		margin-left: .5rem;
		margin-top: .5rem;
	}
	/*.goods:after{
		display: block;
		width: 0;
		height: 0;
		clear: both;
		overflow: hidden;
	}*/
	.goods dl{
		width: 100%;
		float: left;
		background: #fff;
	}
	.goods dl img{
		width: 100%;
		height: 100%;
	}
	.goods dd{
		width: 100%;
	}
	.goods dd p{
			height: 40px;
			line-height: 20px;
			font-size: 15px;
			overflow: hidden;
	}
	.goods dd p b{
		float: right;
		display: block;
		width: 3rem;
		border: none;
		height: 2.6rem;
		
	}
	.goods dd p b img{
		width: 80%;
		height: 80%;
	}
	.goods dd p:nth-of-type(2){
		color: red;
		line-height: 3rem;
		margin-top: 10px;
		font-weight: bold
	}
</style>