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
import Music from "@/pages/Music/Music.vue";
import Text from "@/pages/Text/Text.vue";

import MyAttention from "@/pages/MyAttention/MyAttention";
import Novel from '@/pages/Novel/Novel';
import MaleChannel from '@/pages/Novel/children/MaleChannel';
import FemaleChannel from '@/pages/Novel/children/FemaleChannel';
import Appear from '@/pages/Novel/children/Appear';
import Classify from '@/pages/Novel/children/Classify';
import RankingList from '@/pages/Novel/children/RankingList';
import MenuInfo from "@/pages/Market/NavMenu/MenuInfo";

// 个人中心页面
import Personal from '@/pages/Personal/Personal'
// 文章
import Article from '@/pages/Personal/children/Article'
// 集合
import Collection from '@/pages/Personal/children/Collection'
// 首页轮播跳转页面
import HomeSub from '@/pages/HomeSub/HomeSub'
// 最热
import MostHot from '@/pages/HomeSub/children/MostHot'
// 最新
import MostNew from '@/pages/HomeSub/children/MostNew'


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
    //导航页面路由
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
      path:'/attention',
      component:MyAttention
    },
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
      path:'/music',
      component:Music,
      
    },
    {
      path:'/text',
      component:Text,
    },
    {
      path: '/personal', // 个人中心页面
      component: Personal,
      children: [
        {
          path: '/personal/article', // 文章
          component: Article
        },
        {
          path: '/personal/collection', // 集合
          component: Collection
        },
        {
          path: '/personal/',
          redirect: '/personal/article'
        }
      ]
    },
    {
      path: '/home_sub', // 首页轮播跳转页面
      component: HomeSub,
      children: [
        {
          path: '/home_sub/most_hot', // 最热
          component: MostHot
        },
        {
          path: '/home_sub/most_new', // 最新
          component: MostNew
        },
        {
          path: '/home_sub/',
          redirect: '/home_sub/most_hot'
        }
      ]
    },
    {
      path:'/',
      redirect:'/search'
    }
  ]
})