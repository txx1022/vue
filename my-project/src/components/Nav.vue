<template>
	<div class='nav'>
		<router-link v-for='(item ,index) in arr' :to='{name:item.src}' :key="index">
			{{item.key}}
		</router-link>
	</div>
</template>

<script>
	export default{
		name:'nav',
		data(){
			return {
				arr:[
				{key:'首页',src:'home'},
				{key:'发现',src:'find'},
//				{key:'List',src:'list'},
				{key:'我的',src:'my'}
				]
			}
		}
	}
</script>

<style scoped>
	.nav{  height: 0.80rem; width: 100%; position: fixed; bottom: 0; font-size: 0.3rem;
	   display: flex; align-items: center; justify-content:space-around; background: #F2F2F2;}
    .nav a{  text-decoration: none; color:#b3adad;}
</style>