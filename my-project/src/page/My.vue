 <template id="my">
	<div class="my">
		 <div class="login">
		       <img src="../assets/set.png"/>
		       <img class="img" src="../assets/login.png"/>
		       <router-link to="login">登录</router-link>
		       <router-view></router-view>
		 </div>
		 <span class="space"></span>
		 <div class="zan">
			 <p><i class="iconfont icon-pinglun"></i>评论<i class="iconfont icon-shouyezhuyetubiao04"></i></p>
			 <p><i class="iconfont icon-1433143414icon4thumbup"></i>赞赞<i class="iconfont icon-shouyezhuyetubiao04"></i></p>
			 <p><i class="iconfont icon-1"></i>通知<i class="iconfont icon-shouyezhuyetubiao04"></i></p>
			 <p><i class="iconfont icon-shoucang last"></i>收藏<i class="iconfont icon-shouyezhuyetubiao04"></i></p>
	    </div>
		 </div>
</template>

<script>
	export default{
		name:'my',
		data(){
			return {
				
			}
		},
		created(){
			console.log('创建my')
		},
		beforeMount(){
			console.log('之前加载 my')
		},
		mounted(){
			console.log('加载完成my')
		}
	}
</script>

<style>
	.space{ background: #ededed; height: 0.4rem; }
	.login{ height: 5rem; width: 100%; background: #fdd63b; display: flex; justify-content: center; align-items: center;}
	.login img:first-child{ float: right; height: 0.5rem; width: 0.5rem; position: absolute; top: 0.2rem; right: 0.2rem;}
	.img{ height: 2rem; width: 2rem;  }
	.login p{ position: absolute; top: 3.7rem;  font-size: 0.3rem;}
	.zan p{ height: 1rem; background: #fff; border-bottom: 1px solid #f7f0f0; display: flex;
	        align-items: center; padding-left: 0.3rem; padding-right: 0.3rem; }
	.zan p i:first-child{ margin-right: 0.3rem; font-size: 0.5rem!important;}
	.zan p i:last-child{text-align: right;  width: 80%;  }
	.zan p:first-child i:nth-child(1){color: yellowgreen;}
	.two{ background: tan; }
    .last{color: darkcyan;}
</style>