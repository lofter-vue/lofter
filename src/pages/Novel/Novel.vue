<template>
  <div class="novelContainer">
    <div class="scrollContainer">
      <div class="header">
        <span @click="$router.replace('/profile')" class="iconfont icon-zuojiantou"></span>
        <div class="title">看小说</div>
      </div>
      <div class="input_user_container">
        <div class="inputContainer">
          <input type="text">
          <i class="iconfont icon-Search"></i>
        </div>
        <div class="iconfont icon-user1"></div>
      </div>
      <div class="navContainer">
        <div class="routeContainer">
          <div class="route" @click="changeNavIndex(index)" v-for="(item,index) in navArr" :key="index" >
              <div  @click="jump(item.route)" >
                {{item.name}} 
                <div :class="{line:navIndex===index}"></div>
              </div>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

  export default {
    data(){
      return {
        navIndex:0,
        //导航数组
        navArr:[
          {
            name:'男频',
            route:'/novel/malechannel'
          },
          {
            name:'女频',
            route:'/novel/femalechannel'
          },
          {
            name:'出版',
            route:'/novel/appear'
          },
          {
            name:'分类',
            route:'/novel/classify'
          },
          {
            name:'排行',
            route:'/novel/rankinglist'
          }
        ]
      }
    },
    methods:{
      //点击切换导航下边的小红线
      changeNavIndex(index){
        this.navIndex = index
      },
      jump(path){
        this.$router.replace(path)
      }
    },
    mounted(){
      this.NovelScrollY = new BScroll('.novelContainer',{
        scrollY:true,
        click:true
      })
      
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .novelContainer
    width 100%
    height 100%
    overflow hidden
    .header
      width 100%
      height 40px
      border-bottom 1px solid #eee
      .icon-zuojiantou
        position relative
        z-index 20
        display inline-block
        font-size 20px
        margin 10px
        vertical-align middle
      .title  
        font-size 20px
        text-align center
        margin 0 auto
        transform translateY(-30px)
        vertical-align middle
    .input_user_container
      width 100%
      height 50px
      .inputContainer
        float left
        width 270px
        height 28px
        margin 5px 5px 0 25px
        border-radius 10px 
        box-shadow 1px 2px 10px rgba(0,0,0,.2)
        input 
          background   transparentify
          width 235px
          height 28px
          transform translateY(-3px)
          border-radius 10px 0 0 10px
          outline none
          padding-left 5px 
        .icon-Search
          display inline-block
          font-size 20px
          margin 4px
      .icon-user1
        width 30px
        height 28px
        background-color #eee
        border-radius 50%
        text-align center
        line-height 28px
        font-size 20px
        float right
        font-weight bold
        margin-right 25px
        margin-top 6px
        color rgba(0,0,0,.6)
    .navContainer
      width 100%
      height 30px
      .routeContainer
        display flex
        .route
          width 20%
          flex-direction column
          flex-wrap wrap
          position relative
          font-size 16px
          text-align center
          line-height 30px
          .line
            width 15px
            height 3px
            position absolute
            background #E64D2E
            border-radius 2px
            left 50%
            transform translateX(-50%)
</style>
