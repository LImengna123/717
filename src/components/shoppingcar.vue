<template>
    <div class="shoppingcar">
        <header>
            <div>购物车</div>
        </header>
        <section>
        <div class="cont">
            <div class="null">
                <div class="void">
                    <div class="shopp"></div>
                    <ul>
                        <li>购物车为空</li>
                        <li>
                            <a>
                                <span>去逛逛</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="content">
			<h6><img src="" alt="">热门推荐<img src="" alt=""></h6>
			<div class="homelandlrt">
	    			<dl>
	    				<dt><img src="" alt=""></dt>
	    				<dd>
	    					<p class="tit">纯天然 野生蜂蜜 清香可口 500g包邮</p>
	    					<p class="count">
	    						<span class="price">￥45.80</span>
	    						<img src="" alt="">
	    						<span class="add">+</span>
	    					</p>
	    				</dd>
	    			</dl>
	    			<dl>
	    				<dt><img src="" alt=""></dt>
	    				<dd>
	    					<p class="tit">纯天然 野生蜂蜜 清香可口 500g包邮</p>
	    					<p class="count">
	    						<span class="price">￥45.80</span>
	    						<img src="" alt="">
	    						<span class="add">+</span>
	    					</p>
	    				</dd>
	    			</dl>
	    			<dl>
	    				<dt><img src="" alt=""></dt>
	    				<dd>
	    					<p class="tit">纯天然 野生蜂蜜 清香可口 500g包邮</p>
	    					<p class="count">
	    						<span class="price">￥45.80</span>
	    						<img src="" alt="">
	    						<span class="add">+</span>
	    					</p>
	    				</dd>
	    			</dl>
	    			<dl>
	    				<dt><img src="" alt=""></dt>
	    				<dd>
	    					<p class="tit">纯天然 野生蜂蜜 清香可口 500g包邮</p>
	    					<p class="count">
	    						<span class="price">￥45.80</span>
	    						<img src="" alt="">
	    						<span class="add">+</span>
	    					</p>
	    				</dd>
	    			</dl>
	    		</div>
		</div>
		</section>
   </div>
</template>

<script>
	export default{
	    name:"shoppingcar"
	}
</script>

<style lang="scss">
	*{
		margin:0;
		padding:0;
		box-sizing:border-box;
	}
	html,body,.shoppingcar{
		width:100%;
		height:100%;
	}
    .shoppingcar{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background: #eeeeee;
    }
    header{
        width: 100%;
        height:4rem;
        background: #fafafb;
        border-bottom: 1px solid #e5e5e5;
    div{
            font-size:1.6rem;
            text-align: center;
            line-height:4rem;
        }
    }
    section{
    	width:100%;
    	height:100%;
    	flex-grow: 1;
    	flex-shrink: 1;
    	overflow-y: auto;
    }
    .cont{
        width: 100%;
        height:6rem;
        background: #fff;
        position: relative;
        border-bottom: 1px solid #ffffff;
    .void {
        width: 100%;
        height:6rem;
        background: #fff;
        position: relative;
        border-bottom: 1px solid #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    .shopp{
        width:2.5rem;
        height:2.5rem;
        background: url() no-repeat;
        background-size: 100%;
        margin-bottom: .2rem;
    }
    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    li{
        margin-bottom: .2rem;
        line-height: .5rem;
        color: #666666;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    span{
        color: #fc4141;
        width:4rem;
        display: block;
        padding: .8rem .3rem;
        border: 1px solid #fc4141;
        border-radius: 4px;
        font-size: .34rem;
    }
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
