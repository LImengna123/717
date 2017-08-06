<template>
	<div class="goods-list">
		<dl>
			<dt>
				<span :class="{select:data.states}" @click="selFn"></span>
				<img :src="data.src" alt="" />
			</dt>
			<dd>
				<p>{{data.name}}</p>
				<div class="num">
					<div class="num-l">
						<p>X{{data.num}}</p>
						<p>￥{{data.price}}</p>
					</div>
					<div class="num-r">
						<span @click="sort">-</span>
						<input type="text" v-model="data.num" />
						<span @click="add">+</span>
					</div>
				</div>
			</dd>
		</dl>
	</div>
</template>

<script>
	export default{
		name:"goods-list",
		props:{
			data:{},
			show:{},
			index:Number
			
		},
		data(){
			return {
				num:1,
				all:"",
				prices:0
			}
		},
		created(){
			console.log(this.data)
			this.Show = this.$store.state.show
			console.log(this.show)
		},
		watch:{
			show(a){
				this.Show = a
			}
		},
		methods:{
			sort(){
				this.data.num--
				this.$store.commit("totle")
				this.$store.commit("sle")
				this.upPrice()
			},
			add(){
				this.data.num++
				this.$store.commit("totle",this.index)
				this.$store.commit("sle")
				this.upPrice()
			},
			selFn(){
				this.data.state = !this.data.state
				this.prices=0
				this.$store.commit("sle",this.index)
//				this.$emit("fn",this.data.state)

			},
			upPrice(){
				
			}
		},
		mounted(){
//			console.log(this.isShow)	
		}
	}
</script>

<style lang="scss">
	.goods-list{
		width: 100%;
		margin-top: 1rem;
		dl{
			width: 100%;
			background: #fff;
			padding: 10px;
			dt{
				width: 40%;
				float: left;
				position: relative;
				span{
					display: inline-block;
					height: 2rem;
					width: 2rem;
					border-radius: 2rem;
					border: 1px solid #ccc;
					position: absolute;
					top: 49px;
				}
				.select{
					background:#fc4141;
					position: relative;
				}
				.select:after{
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
				img{
					width: 80%;
					height: 80%;
					float: right;
				}
			}
			dd{
				width: 60%;
				float: right;
				padding:10px;
				p:nth-of-type(1){
					margin-top: 1rem;
				}
				.num{
					width: 100%;
					display: flex;
					margin-top: 1rem;
					.num-l{
						flex: 1;
					}
					.num-r{
						flex: 1;
						justify-content: center;
						align-items: center;
						position: relative;
						span{
							display: inline-block;
							position: absolute;
							width: 2.5rem;
							height: 2.5rem;
							line-height: 2.5rem;
							text-align: center;
							border: 1px solid #ccc;
							top:2rem;
							&:nth-of-type(1){
								left: 4px;
							}
							&:nth-of-type(2){
								left: 68px;											
							}
						}
						input{
							display: inline-block;
							position: absolute;
							text-align: center;
							width: 3rem;
							height: 30px;
							top:2rem;
							border: 1px solid #ccc;
							outline: none;
							left: 33px;
						}
					}
				}
			}
		}
		dl:after{
			display: block;
			content: "";
			width: 0;
			height: 0;
			clear: both;
		}
	}
</style>