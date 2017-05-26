<template id="homeindex">
	<div class="home_index">
		<swiper :options='swiperOption' class='out'>
				<swiper-slide class='a'><img :src="arr[0]"/></swiper-slide>
				<swiper-slide class='b'><img :src="arr[1]"/></swiper-slide>
				<swiper-slide class='c'><img :src="arr[2]"/></swiper-slide>
		</swiper>
			 <router-link v-for='(item,index) in str' :to="'/home/detail'+index"  class='detail'>
			 	<img :src="item.url"/>
			 	<div>
			 		<p class="title">{{item.title}}</p>
			 		<p>{{item.yuan}}</p>
			 	</div>
			 </router-link>
    </div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import axios from 'axios'
export default {
	name:'homeindex',
	data(){
		return{
				arr:['http://img.weiye.me/zcimgdir/album/file_58fd56ffc38ae.png',
				       'http://img.weiye.me/zcimgdir/album/file_58fd56fef0a77.png',
				       'http://img.weiye.me/zcimgdir/album/file_58fd56c493509.png'
				    ],
				str:'',
				swiperOption:{
		   			autoplay:3000,
		   			loop:true,
	              direction:'horizontal'
		        }
		} 
	},
	components:{
		swiper,
		swiperSlide
	},
	mounted:function(){
		var _this=this
		axios.get('http://localhost:8080/static/json/new.json')
			.then(function(response){
				console.log(response.data)
				_this.str=response.data
				console.log(_this.str[0].name)
				 
		})		
	}
	
}
</script>

<style scoped>
	*{padding: 0; margin: 0;}
	.out{ height: 4rem; width: 100%; overflow: hidden; margin-top: 0.8rem;}
	.a,.b,.c{ height:4rem; width: 100vw; }
	img{ height: 3.5rem; width: 100vw; }
	.detail{ height: 3.5rem; padding: 0.3rem;}
	.detail img{ width:50vw ; float: left; margin-right: 0.2rem; }
	.detail p:first-child{font-size: 0.3rem; margin-top: 0.5rem; margin-bottom: 0.2rem; color: #000;}
	.detail p:last-child{ text-align: left; color: #0062CC;  }
	.home_index > a { display: block;}
</style>