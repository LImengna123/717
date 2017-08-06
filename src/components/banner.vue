<template>
	<div class="banner">
		<div class="swiper-container">
			<ul class="swiper-wrapper">
				<li class="swiper-slide" v-for="i in data.banner"><img :src="i.src" alt="" /></li>
			</ul>
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"banner",
		props:{
			data:{}
		},
		created(){
			
		},
		mounted(){
		}
	}
	
</script>

<style>
</style>