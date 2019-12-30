import Vue from "vue";
import VueRouter from "vue-router";

import Login from "@/pages/Login/Login";
import UserLogin from "@/pages/UserLogin/UserLogin";
import Register from "@/pages/Register/Register";
import Home from "@/pages/Home/Home";
import Search from "@/pages/Search/Search";
import More from "@/pages/More/More";
import Market from "@/pages/Market/Market";
import Profile from "@/pages/Profile/Profile";
import Novel from '@/pages/Novel/Novel';
import MaleChannel from '@/pages/Novel/children/MaleChannel';
import FemaleChannel from '@/pages/Novel/children/FemaleChannel';
import Appear from '@/pages/Novel/children/Appear';
import Classify from '@/pages/Novel/children/Classify';
import RankingList from '@/pages/Novel/children/RankingList';
import MenuInfo from "@/pages/Market/NavMenu/MenuInfo";


//声明使用vue插件
Vue.use(VueRouter)

//向外暴露路由器对象模块
export default new VueRouter({
  mode:'history',
  routes:[
      //登录首页页面路由
    {
      path:'/login', 
      component:Login
    },
      //登录信息页面路由
    {
      path:'/userlogin',
      component:UserLogin
    },
      //注册信息页面路由
    {
      path:'/register',
      component:Register
    },
      //首页页面路由
    {
      path:'/home', 
      component:Home,
      meta: {
        isShowFooter: true
      }
    },
      //发现页面路由
    {
      path:'/search',
      component:Search,
      meta: {
        isShowFooter: true
      }
    },
      //加号页面路由
    {
      path:'/more',
      component:More,
      meta: {
        isShowFooter: true
      }
    },
      //市集页面路由
    {
      path:'/market',
      component:Market,
      meta: {
        isShowFooter: true
      }
    },
    {
      name:'menuinfo',
      path:'/menuinfo/:id',
      component:MenuInfo
    },
      //个人页面路由
    {
      path:'/profile', 
      component:Profile,
      meta: {
        isShowFooter: true
      }
    },
      //看小说页面路由
    {
      path:'/novel',
      component:Novel,
      children:[
        {
          path:"malechannel", //男频页面路由
          component:MaleChannel
        },
        {
          path:"femalechannel",//女频页面路由
          component:FemaleChannel
        },
        {
          path:"appear",//出版页面路由
          component:Appear
        },
        {
          path:"classify",//分类页面路由
          component:Classify
        },
        {
          path:"rankinglist",//排行页面路由
          component:RankingList
        },
        {
          path:'/novel',
          redirect:'/novel/malechannel'
        }
      ]
    },
    {
      path:'/',
      redirect:'/search'
    },
  ]
})