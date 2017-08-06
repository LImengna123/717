<template>
<div class="goodsreceipt">
    <header>
    		<img class="return" src="../assets/home/header/return.png" alt="">
			<p class="gosh">收货地址</p> 
    	</header>
        <div class="main">
            <p class="addes">
                <img src="../assets/home/header/add.png">
                新增加地址
                </p> 
            </div> 
    </div> 
    
  
</template>
<script>
export default {
  name:'Goodsreceipt'
}
</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
}
.goodsreceipt{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column
}
header{
    height: 3.3rem;
    position: relative;
    display: flex;
    border-bottom: 1px solid #ccc;
    background: #fff;
    
}
header .return{
        width: 2rem;
        height:2rem;
        position:absolute;
        top: .6rem;
        left: 0.6rem;
        z-index: 20;
    }
header .gosh{
    width: 100%;
    line-height: 3.3rem;
    text-align: center;
    font-size: 16px;
}
.main{
    width: 100%;
    overflow: auto;
    flex: 1;
}
.main .addes{
	font-family: PingFangSC-Regular, sans-serif;  
	background: #fc4141;
	width: 16rem;
	height: 3.6rem;
	text-align: center;
	line-height: 4rem;
	border-radius: 40rem;
	margin-top: 3rem;
	margin-left: 4.8rem;
	color: #fff;
	font-size: 0.32rem;
}
.main .addes img{
	position: relative;
	width: 1.6rem;
	top:.3rem; 
	left:-0.1rem;
	padding-right: 0.2rem;
}
</style>

