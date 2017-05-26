import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/page/Home'
import My from '@/page/My'
import Find from '@/page/Find'
import List from '@/page/List'
import HomeIndex from '@/page/HomeIndex'
import Jing from '@/page/Jing'
import Video from '@/page/Video'
import Yule from '@/page/Yule'
import HomeId from '@/page/HomeId'
import Vdetail from '@/page/Vdetail'
import Login from '@/page/Login'
Vue.use(Router)


export default new Router({
  routes: [
    { path: '/home', component: Home, name: 'home',redirect:'/home/jing',
       'children':[
//   	 {path:'',component:HomeIndex},
//        {path:'/home',component:HomeIndex,name:'jing'},
        {path:'jing',component:HomeIndex,name:'jing'},
        {path:'video',component:Video,name:'video'},
        {path:'yule',component:Yule,name:'yule'}       
       ]
    },
    { path:'/home/:id', component: HomeId, name: 'homeid' },
    { path: '/my', component: My, name: 'my'},
    { path: '/find', component: Find, name: 'find' },
    { path: '/list', component: List, name: 'list' },
    {path:'/login', component:Login, name:'login'},
    
    {path:'/',redirect:'/home/jing'}
  
  ]
})
