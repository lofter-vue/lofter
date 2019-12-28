import Vue from "vue";
import VueRouter from "vue-router";

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

//声明使用vue插件
Vue.use(VueRouter)

//向外暴露路由器对象模块
export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/Home',
      component:Home,
      meta: {
        isShowFooter: true
      }
    },
    {
      path:'/Search',
      component:Search,
      meta: {
        isShowFooter: true
      }
    },
    {
      path:'/More',
      component:More,
      meta: {
        isShowFooter: true
      }
    },
    {
      path:'/Market',
      component:Market,
      meta: {
        isShowFooter: true
      }
    },
    {
      path:'/Profile',
      component:Profile,
      meta: {
        isShowFooter: true
      }
    },
    {
      path:'/novel',
      component:Novel,
      children:[
        {
          path:"malechannel",
          component:MaleChannel
        },
        {
          path:"femalechannel",
          component:FemaleChannel
        },
        {
          path:"appear",
          component:Appear
        },
        {
          path:"classify",
          component:Classify
        },
        {
          path:"rankinglist",
          component:RankingList
        }
      ]
    },
    {
      path:'/',
      redirect:'/Home'
    },
  ]
})