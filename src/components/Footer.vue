<template>
	<div class="footer">
		<footer>
	  		<ul>
	  			<router-link to="/home">
	  				<li>
	  					<span class="bg"><img src="../assets/footer/foot-1.png"/></span>
	  					<a>首页</a>
	  				</li>
	  			</router-link>
	  			<router-link to="/list">
	  				<li>
	  					<span class="bg"><img src="../assets/footer/foot-2.png"/></span>
	  					<a>分类</a>
	  				</li>
	  			</router-link>
	  			<router-link to="/shopCar">
	  				<li>
	  					<span class="bg"><img src="../assets/footer/foot-3.png"/></span>
	  					<a>购物车 <span class="num">{{num}}</span></a>
	  				</li>
	  			</router-link>
	  			<router-link to="/my">
	  				<li>
	  					<span class="bg"><img src="../assets/footer/foot-4.png"/></span>
	  					<a>我的</a>
	  				</li>
	  			</router-link>
	  		</ul>
	  	</footer>
	</div>
</template>

<script>
	export default{
		name:"footer",
		data(){
			return {
				
			}
		},
		computed:{
		  	num(){
		  		return this.$store.state.all
		  	}
		}
	}
</script>

<style scoped>


.footer ul li img{
	width: 50%;
	height: 50%;
}
	   
</style>