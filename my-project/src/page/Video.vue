<template id="video">
	<div>
		<div v-for='(item,index) in str'>			 
				 <video :src="item.video" class="vid" @click="tap(index)"></video>
				 <p class="title">{{item.title}}</p>
				 <p class="people">观看人数：{{item.people}}</p>
		</div> 
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:'video',
		data(){
			return{
				str:[],
				index:[], 
				vid:0,
				flag:true
			}
		},
		methods:{
			tap(i){ 
				 var Video=document.getElementsByClassName("vid")[i]
				 //console.log(Video)
				 if(Video){
				 if(this.flag){
				 	Video.play()
				 }else{
				 	Video.pause()
				 }
				 this.flag=!this.flag;

			 }
			}
		},
		mounted:function(){
			var _this=this
			axios.get('http://localhost:8080/static/json/video.json')
			.then(function(res){
				_this.str=res.data
				console.log(_this.str)
			})
		}
	}
</script>

<style>
	video{
		height: auto;
		width: 100%;
	}
	.title{
		text-align: left;
		font-size: large;
	}
	.people{
		text-align: left;
		font-size:small;
		color: #0062CC;
	}
</style>