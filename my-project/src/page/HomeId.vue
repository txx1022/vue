<template>
	<div class="box">
		 
		<!--<div v-for='(item,index) in str'>
			<p>{{str.detail0}}</p>
		    <!--<img :src="'item.img'+index"/>-->
		<!--</div>-->
		<!--<p class="detail_p">{{str.detail}}</p>
		<img class="detail_img" :src="str.img"/>-->
		<p class="title">{{str.title}}</p>
		<p class="con">{{str.detail0}}</p>
		<img class="img" :src="str.img0"/>
		<p class="con">{{str.detail1}}</p>
		<img class="img" :src="str.img1"/>
		<p class="con">{{str.detail3}}</p>
		<img class="img" :src="str.img3"/>
		<p class="con">{{str.detail4}}</p>
		<img class="img" :src="str.img4"/>
		<p class="con">{{str.detail5}}</p>
		<img class="img" :src="str.img5"/>
		<p class="con">{{str.detail6}}</p>
		<img class="img" :src="str.img6"/>
		<p class="con">{{str.detail7}}</p>
		<img class="img" :src="str.img75"/>
		<p class="con">{{str.detail8}}</p>
		<img class="img" :src="str.img8"/>
		<p class="con">{{str.detail9}}</p>
		<img class="img" :src="str.img9"/>
		<p class="con">{{str.detail10}}</p>
		<img class="img" :src="str.img10"/>
	</div>
</template>

<script>
	import axios from 'axios'
export default {
	name:'home-id',
	data(){
		return{
			arr:[]
		}
	},
	computed:{			 
			str:function(){			 
				var i=this.$route.params.id
				var a=i.match(/[0-9]/g).join("")     //为了取下标
				//console.log(i)
				return this.arr[a]
			}
		},
	mounted(){
		var _this=this
		axios.get('http://localhost:8080/static/json/detail.json').then(function(res){
				console.log(res.data)
				_this.arr=res.data
			})
	}
}
</script>

<style scoped>
	.con{
		font-size: 14px;
		color: #C0C0C0;
		margin: 10px 0 10px 0;
	}
	.title{
		font-size: 16px;
		color: #000000;
		margin-bottom: 10px;
	}
	.box{
		padding: 10px;
	}
	.img{
		height: auto;
		width: 100%;
	}
</style>