import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/pages/Home/Home";
import Search from "@/pages/Search/Search";
import More from "@/pages/More/More";
import Market from "@/pages/Market/Market";
import Profile from "@/pages/Profile/Profile";


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
      path:'/',
      redirect:'/Home'
    },
  ]
})