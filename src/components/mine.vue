<template>
	<div class="wrap">
		<header>
			<span><i><img src="../assets/home/my/my1.png"/></i></span>
			<label for="">我的717商城</label>
			<span><i ></i></span>
		</header>
	<section>
		<div class="banner">
			<img src="../assets/home/my/default_avatar.png" alt="">
			<p>117182381</p>
		</div>
		<div class="paybox">
			<h3>
				<label for="">
					<img src="../assets/home/my/my9.png" alt="">
					<span>我的店铺</span>
				</label>
				<img src="../assets/home/my/my14.png" alt="">
			</h3>
			<ul>
				<li>
					<i><img src="../assets/home/my/my4.png" alt=""></i>
					<p>待付款</p>
				</li>
				<li>
					<i><img src="../assets/home/my/my5.png" alt=""></i>
					<p>待发货</p>
				</li>
				<li>
					<i><img src="../assets/home/my/my6.png" alt=""></i>
					<p>待收货</p>
				</li>
				<li>
					<i><img src="../assets/home/my/my7.png" alt=""></i>
					<p>售后</p>
				</li>
				<li class="imgLi">
					<i><img src="../assets/home/my/my8.png" alt=""></i>
					<p>我的订单<span>></span></p>
				</li>
			</ul>
		</div>
		<div class="managebox">
					<ol>
						<li id='my_t'>
							<label><img src="../assets/home/my/myhome.png">我的社区</label>
						</li>
						<li id='money'>
							<label><img src="../assets/home/my/my10.png">账户余额</label>
						</li>
						<router-link to='/goodsreceipt'>
						<li id='address'>
							
							<label><img src="../assets/home/my/my12.png">地址管理</label>
						</li>
							</router-link>
						
					</ol>
				</div>

		<div class="content">
			<v-title></v-title>
			<div class="homelandlrt">
	    		<v-goods v-for="i in remomentData" :shopData=i></v-goods>
	    	</div>
		</div>
	</section>
	<v-footer></v-footer>
	</div>
</template>

<script>
	import Footer from "./Footer.vue"
	import title from "./title.vue"
	import goods from "./goods.vue"
	export default{
		name:"mine",
		data(){
			return {
				remomentData:[]
			}
		},
		components:{
			"v-footer":Footer,
			"v-title":title,
			"v-goods":goods
		},
		created(){
			this.$http.get("./src/data/remoment.json").then((data)=>{
				console.log(data)
				this.remomentData = data.data.list
			})
//			this.shopCarData = this.$store.state.data
		}
	}
</script>


<style lang="scss" scoped>
	*{
	margin:0;
	padding:0;
	list-style:none;
	text-decoration:none;
	box-sizing:border-box;
}
html,body,.wrap{
	width:100%;
	height:100%;
}
html{
	font-size:62.5%;
}
body{
	background:#EEEEEE;
}
.wrap{
	display:flex;
	flex-direction: column;
}
.title{
	line-height: 3.2rem;
}
header{
	width:100%;
	display:flex;
	justify-content: space-between;
	height:4.5rem;
	line-height:4.5rem;
	font-size:2rem;
	text-align: center;
	background:#fff;
	position:fixed;
	top:0;
	i{
		width: 2rem;
		height: 2rem;
		position: absolute;
		left: 1rem;
		
		img{
			width:80%;
			height: 80%;
		}
	}
	label{
		display: inline-block;
		width: 100%;
		text-align: center;
		font-size: 16px;
	}
	
}
section{
	flex:1;
	overflow-y:scroll;
	margin-top:4.5rem;
}
.banner{
	width: 100%;
    height:8.5rem;
	background:#FC6441;
	text-align:center;
	img{
		width: 5rem;
    	height: 5rem;
    	margin:.5rem 0;
	}
	p{
		
    	color: #ffffff;
    	font-size: 0.3rem;
    	line-height: .5rem;
    	font-weight: normal;
    	font-family: PingFangSC-Regular, sans-serif;
	}
}
.paybox{
	background: #ffffff;
    margin-bottom: 0.2rem;
	h3{
		width: 100%;
    	height:5rem;
    	color: #fc4141;
    	position: relative;
    	border-bottom: 1px solid #eeeeee;
    	label{
    		margin: 6% 0 0 15%;
    		display: inline-block;
    		font-size:1.6rem;
    		font-weight:normal;
    		span{
    			position:absolute;
    			left:56px;
    		}
    		img{
    			position: absolute;
    			top:25%;
    			left: 1.4rem;
    			width: 2.5rem;
    			height:2.3rem;
    		}
    	}
    	img{
    		position: absolute;
    		top: 36%;
    		right: 5%;
    		width: 1rem;
    		height:1.5rem;
    	}
	}
	ul{
		width:100%;
		display:flex;
		li{
			flex:1;
			text-align:center;
			img{
				width:1.5rem;
				height:1.5rem;
				margin:0 0 .5rem 0;
				margin:1rem 0 0 0;
			}
			p{
				
				margin:.5rem 0;
			}
		}
		.imgLi{
			border-left:1px solid #ccc;
		}
	}
}
.managebox{
		background: #fff;
		ol li{
		height: 4rem;
		position: relative;
		border-bottom: 1px solid #e5e5e5;
	label{
		color: #333;
		margin-top: 1.2rem;
		margin-left:4rem; 
		display: inline-block;
		img{
		width: 1.5rem;
		height:1.5em;
		position: absolute;
		left: 7%;
		top: 30%;
	}
	}
	}
	}
.address{
	width:100%;
	margin-top:1rem;
	background:#fff;
	dl{
		width:100%;
		display:flex;
		dt{
			width:2rem;
			height:2rem;
			img{
				width:100%;
				height:100%;
				margin:1.5rem 1rem .5rem 1rem;
			}
		}
		dd{
			border-bottom:1px solid #ccc;
			flex:1;
			line-height:5rem;
			font-size:1.8rem;
			margin-left:2rem;
			display:flex;
			justify-content: space-between;
			small{
				margin-right:1rem;
			}
		}
	}
}
.content{
	width:100%;
	margin-top:1rem;
	h6{
		width:100%;
		text-align:center;
		font-size:1.8rem;
		background:#fff;
		line-height:4rem;
		font-weight:normal;
		img{
			width:1.8rem;
			height:1.6rem;
			margin:0 .8rem;
		}
	}
	.homelandlrt{
         width: 100%;          
         display: flex;
         flex-flow: row wrap;  
         dl{
           flex: 48%;
           margin: 0 2px;
           margin-bottom: 4px;
           background: #fff;
           dt{
            img{width: 100%;}
           }
           dd{
              .tit{              
                line-height: 15px;
                margin: 6px;    
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
              .count{
                display: flex;
                align-items: center;
                justify-content: space-between;              
                position: relative;
                margin-bottom: 5px;
                img{
                    width: 22px;
                    margin-right: 10px;                 
                }
                .price{
                    color: #fc4141;
                    font-size: 14px;
                    margin-left: 8px;
                }
                .add{
                    width: 12px;
                    height: 12px;
                    text-align: center;
                    line-height: 10px;
                    background: red;
                    color: #fff;
                    border-radius: 10px;
                    position: absolute;
                    right: 5px;
                    top: -2px;
                }
              }
           }
         }
    }
}
</style>