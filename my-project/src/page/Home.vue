<template>
	<div class="home">
		<p>
		<router-link v-for='(item,index) in arr' :to='{name:item.src}' :key='index'>
			{{item.key}}
		</router-link>
		</p>
		<div class="jiazaizujian">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	
	export default{
		name:'home',
		data(){
			return{
				msg:'我是home',
				arr:[
				    {key:'精选',src:'jing'},
				    {key:'视频',src:'video'},
				    {key:'娱乐',src:'yule'},
				],
				
			}
			
		},
		created(){
		  console.log('创建home')
		},
		destroyed(){
			console.log('销毁home')
		}
		 
	}
</script>

<style scoped>
	*{padding: 0; margin: 0;}
	p{ height: 0.8rem; width: 100%;  border-top: 0.01rem solid #ccc; border-bottom: 0.01rem solid #ccc;
	   position: fixed; top: 0; display: flex;
	   align-items: center; justify-content: space-around;}
	p a{ text-decoration: none; color: #C7C7CC; font-size: 0.3rem;}
	#box{height: 3rem; background: #000; }
</style>