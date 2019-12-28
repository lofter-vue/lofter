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



//声明使用vue插件
Vue.use(VueRouter)

//向外暴露路由器对象模块
export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/login',
      component:Login
    },
    {
      path:'/userlogin',
      component:UserLogin
    },
    {
      path:'/register',
      component:Register
    },
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
      redirect:'/profile'
    },
  ]
})