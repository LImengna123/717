<template>
	<div id="list">
		<!--<header>
			<div class="search">
				<input @focus="search" type="text" placeholder="请输入要购买的商品"   />
				<b><img src="../assets/home/header/search.png"/></b>
			</div>
		</header>-->
	<header class="header">
		
		<p class="search"><b><img src="../assets/home/header/search.png"/></b><input type="text" placeholder="请输入您要购买的商品"></p>
		<a style="position: absolute; right: 2.5rem; top: 1.2rem; color: #333;font-size:16px;"@click='searchFn'>搜索</a> 
   </header>
		<main>
			<div class="list-l">
				<ul>
					<li  v-for="(i,index) in listData" :class="{active:isShow==index}" @click=change(index)>{{i.title}}</li>
				</ul>
			</div>
			<div class="list-r">
				<dl v-for="i in listDetail" >
					<dt> <img :src="i.src"/></dt>
					<dd>{{i.title}}</dd>
				</dl>
			</div>
		</main>
		<v-footer></v-footer>
	</div>
</template>

<script>
	import Footer from "./Footer.vue"
	export default{
		name:"list",
		data(){
			return {
				data:{},
				isShow:0,
				listData:{},
				listDetail:{}
			}
		},
		created(){
			this.$http.get("./src/data/list.json").then((res)=>{
				console.log(res)
				this.listData = res.data.list
				this.data = res.data
				this.listDetail = res.data.list[0].main
				console.log(this.listDetail)
			})
		},
		methods:{
			search(){
				
			},
			change(i){
//				alert(i)
				console.log(this.data)
				this.isShow = i
				this.listDetail = this.data.list[i].main
			}
		},
		components:{
			"v-footer":Footer
		}
	}
</script>

<style lang="scss">
	#list{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction:column ;
		font-size: 1.4rem;
		header{
			.search{
					
			}
		}
		main{
			flex: 1;
			width: 100%;
			background:#F0ECED;
			overflow: hidden;
			.list-l{
				/*padding: 1rem;*/
				width: 20%;
				float: left;
				
				ul{
					width: 100%;
					li{
						line-height: 4rem;
						text-align: center;
					}
				}
				.active{
					border-left:1px solid red;
					background: #fff;
				}
			}
			.list-r{
				background: #fff;
				width: 80%;
				height: 100%;
				float: right;
				dl{
					width: 30%;
					float: left;
					background: #F7F7F7;
					margin: .3rem;
					/*height:;*/
					dt{
						width: 100%;
						
						img{
							width: 100%;
						}
					}
					dd{
						text-align: center;
					}
				}
			}
		}
		footer{
			flex: none;
		}
	}
</style>