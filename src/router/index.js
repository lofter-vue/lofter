import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/pages/Home/Home";
import Search from "@/pages/Search/Search";
import More from "@/pages/More/More";
import Market from "@/pages/Market/Market";
import Profile from "@/pages/Profile/Profile";

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
    {
      path:'/home',
      component:Home,
      meta: {
        isShowFooter: true
      }
    },
    {
      path:'/search',
      component:Search,
      meta: {
        isShowFooter: true
      }
    },
    {
      path:'/more',
      component:More,
      meta: {
        isShowFooter: true
      }
    },
    {
      path:'/market',
      component:Market,
      meta: {
        isShowFooter: true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta: {
        isShowFooter: true
      }
    },
    {
      path:'/',
      redirect:'/home'
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
    }
  ]
})