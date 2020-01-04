<template>
  <div id="personalContainer">
    <!-- 头部 -->
    <div class="header">
      <div class="headerTop">
        <span class="back" @click="$router.replace('/profile')">
          <i class="iconfont icon-arrow_left"></i>
        </span>
        <!-- <span class="useId">{{userInfo.username}}</span> -->
        <span class="more" @click="actionSheet">
          <i class="iconfont icon-gengduo"></i>
        </span>
      </div>

      <div class="userBg">
        <div class="userInfo">
          <div class="userImg">
            <img :src="userInfo.avatar" alt="">
          </div>
          <p class="userName">{{userInfo.username}}</p>
          <div class="follow-fans">
            <div class="follow" @click="$router.push('/attention')">
              <span>关注</span>
              <span>{{userInfo.attention ? userInfo.attention.length : 0}}</span>
            </div>
            <span>粉丝 1</span>
            <span>推荐 15</span>
          </div>
        </div>
      </div>

      <div class="userIntro">
        简介: 我是lofter的忠实粉丝
      </div>

    </div>

    <div class="content">
      <!--内容 跳转 -->
      <div class="contentTab">
        <div class="contentTabItem">
          <router-link to="/personal/article" replace>文章({{userInfo.artical.length}})</router-link>
        </div>
        <div class="contentTabItem">
          <router-link to="/personal/collection" replace>合集(0)</router-link>
        </div>
      </div>
      <!-- 内容跳转 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>

  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import {Actionsheet} from 'mint-ui'

  export default {
    name: 'Personal',
    data() {
      return {
        // 选项内容 没写method的回调内容
        actions: [
          {
            name: '修改个人资料'
          },
          {
            name: '分享给朋友'
          },
          {
            name: '复制链接'
          }
        ],
        // 默认不显示 为false 操作sheetVisible控制显示与隐藏
        sheetVisible: false
      }
    },

    computed: {
      ...mapState({
        userInfo: state => state.user.userInfo
      })
    },

    methods: {
      actionSheet () {
        // 显示sheetVisible
        this.sheetVisible = true
      },
      
    },
    
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #personalContainer
    .header
      width 100%
      .headerTop
        position fixed
        z-index 50
        width 100%
        height 46px
        // background #F3DADA
        display flex
        align-items center
        background transparent
        justify-content space-between
        span
          color #333333
          font-size 16px
        .back
          margin-left 10px
          i
            font-size 20px
        .more
          margin-right 10px
          i
            font-size 30px
      .userBg
        width 100%
        height 210px
        // background-image url('./images/bgImg.png')
        background linear-gradient(to top,white, rgba(231,179,179,0.5))
        background-size cover
        background-repeat no-repeat
        .userInfo
          width 100%
          height 100%
          display flex
          flex-direction column
          align-items center
          .userImg
            width 90px
            height 90px
            border 3px solid #ffffff
            margin-top 40px
            border-radius 50%
            overflow hidden
            img
              width 100%
              height 100%
          .userName
            color #333333
            font-size 18px
            margin-top 5px
            letter-spacing 0.5px
          .follow-fans
            color #333333
            margin-top 15px
            width 200px
            display flex
            justify-content space-around
            .follow
              span
                margin-right 5px 
      .userIntro
        width 100%
        height 40px
        color #999999
        font-size 12px
        text-align center
        line-height 30px
    
    .content
      width 100%
      .contentTab
        width 100%
        height 42px
        line-height 42px
        background #ffffff
        display flex
        margin-top 10px
        .contentTabItem
          width 50%
          height 42px
          text-align center
          a
            position relative
            display block
            width 100%
            height 42px
            font-size 16px
            color #333333
            &.router-link-active
              color #A3C53C
              &::after
                content ''
                position absolute
                left 50%
                bottom 1px
                width 64%
                height 2px
                transform translateX(-50%)
                background #A3C53C
</style>
