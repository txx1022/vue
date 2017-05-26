 <template id="find">
	<div class="detail">
		<mt-search   cancel-text="取消" placeholder="找找有趣的世界吧"></mt-search>
		<img class="img" src="http://tanzi27niu.cdsb.mobi/wps/wp-content/uploads/2016/02/2016-10-12_11-27-31.jpg!tx"/>
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
	import axios from 'axios';
	export default{
		name:'find',
		 data(){
		 	return{
		 		str:''
		 	}
		 },

	mounted:function(){
//		axios.get('http://localhost:8080/static/json/new.json')
//			.then(function(response){
//				console.log(response.data);
//		})	
           var _this=this
           axios.get('http://localhost:8080/static/json/new.json')
			.then(function(response){
				console.log(response.data )
				_this.str=response.data
				console.log(_this.str[0].name)
				 
		})		
	}
	}
</script>

<style>
	.img{
		height: 200px;
		width: 100%;
	}
</style>