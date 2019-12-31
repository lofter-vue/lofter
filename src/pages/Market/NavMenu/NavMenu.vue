<template>
  <div class="navMenuContainer">
    <ul class="menuList">
      <li class="menuItem" v-for="(item,index) in menuList" :key="index">
        <router-link :to="{name:'menuinfo',params:{id:item.id}}">
        <img :src="item.url" alt="11">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import menuIcon1 from "../../../static/menuimgs/1.png"; // 文具图片
import menuIcon2 from "../../../static/menuimgs/2.png"; // 3c图片
import menuIcon3 from "../../../static/menuimgs/3.png"; //印品图片
import menuIcon4 from "../../../static/menuimgs/4.png"; //达人款图片
import menuIcon5 from "../../../static/menuimgs/5.png"; //更多好物图片
import menuIcon6 from "../../../static/menuimgs/6.png"; //魔道祖师图片
import menuIcon7 from "../../../static/menuimgs/7.png"; //英雄学院图片
import menuIcon8 from "../../../static/menuimgs/8.png"; //全职高手图片
import menuIcon9 from "../../../static/menuimgs/9.png"; //漫威英雄图片
import menuIcon10 from "../../../static/menuimgs/10.png"; //动漫周边图片


/**
  注册路由: 
    {
        name: 'news'
        path: '/home/news/:id/:title',
        component: News
    }
跳转: 
    <router-link to="{name: 'news', params: {id: 1, title: 'abc'}}">
    router.push({name: 'news', params: {id: 1, title: 'abc'}})
 */
  export default {
    data(){
      return{
        menuList:[
          {
            url:menuIcon1,
            id:1
          },
          {
            url:menuIcon2,
            id:2
          },
          {
            url:menuIcon3,
            id:3
          },
          {
            url:menuIcon4,
            id:4
          },
          {
            url:menuIcon5,
            id:5
          },
          {
            url:menuIcon6,
            id:6
          },
          {
            url:menuIcon7,
            id:7
          },
          {
            url:menuIcon8,
            id:8
          },
          {
            url:menuIcon9,
            id:9
          },
          {
            url:menuIcon10,
            id:10
          },
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .navMenuContainer
    width 100%
    height 180px
    .menuList
      width 100%
      height 100%
      display flex
      flex-wrap wrap
      .menuItem
        width 20%
        height 50%
        img 
          width 75px
          height 90px
    
</style>
