<template>
  <div>
    <!-- 两个固定按钮 -->
    <div @click="isShowShare = !isShowShare" class="share">
      <i class="iconfont icon-fenxiang2"></i>
    </div>
    <div @click="isShowMenu = !isShowMenu" class="home">
      <i class="iconfont iconjiahao"></i>
    </div>
    
    <!-- 加过渡 -->
    <transition name="move">
      <!-- 点击加号生成菜单 -->
      <div v-show="isShowMenu" class="menu">
        <div class="music" @click="$router.push('/music')">
          <span>
            <i class="iconfont icon-yinyue"></i>
          </span>
          <p>音乐</p>
        </div>
        <div class="words" @click="$router.push('/text')">
          <span>
            <i class="iconfont icon-bianjiqianbixieshuru"></i>
          </span>
          <p>文字</p>
        </div>
        <div class="picture">
          <span>
            <i class="iconfont icon-tupian"></i>
          </span>
          <p>图片</p>
        </div>
        <div class="video">
          <span>
            <i class="iconfont icon-shipin"></i>
          </span>
          <p>视频</p>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <!-- 遮罩1 -->
      <div @click="isShowMenu=false" v-show="isShowMenu" class="maskOne"></div>
    </transition>

    <transition name="moveTop">
      <!-- 点击分享生成分享框 -->
      <div v-show="isShowShare" class="shareBox">
        <p>分享到</p>
        <div class="shareItem">
          <div class="sina-weibo">
            <span>
              <i class="iconfont icon-yduixinlangweibo"></i>
            </span>
            <p>新浪微博</p>
          </div>
          <div class="wechat-friend">
            <span>
              <i class="iconfont icon-weixin"></i>
            </span>
            <p>微信好友</p>
          </div>
          <div class="wechat-ring">
            <span>
              <i class="iconfont icon-pengyouquan"></i>
            </span>
            <p>微信朋友圈</p>
          </div>
          <div class="qq-friend">
            <span>
              <i class="iconfont icon-qqzzz"></i>
            </span>
            <p>QQ好友</p>
          </div>
          <div class="qq-space">
            <span>
              <i class="iconfont icon-QQkongjian"></i>
            </span>
            <p>QQ空间</p>
          </div>
        </div>
        <mt-button @click="isShowShare=false" class="btn">取消</mt-button>
      </div>
    </transition>

    <!-- 遮罩2 -->
    <div @click="isShowShare=false" v-show="isShowShare" class="maskTwo"></div>
    
    <div id="homeSubContainer">
      <!-- 顶部搜索 -->
      <div class="searchTop">
        <span class="back" @click="$router.replace('/home')">
          <i class="iconfont icon-arrow_left"></i>
        </span>
        <div class="searchBox">
          <input type="text" placeholder="我的2019课本涂鸦">
          <i class="iconfont icon-sousuo"></i>
        </div>
        <mt-button class="btn">+ 订阅</mt-button>
      </div>

      <div class="space"></div>

      <!-- title信息 -->
      <div class="bannerContainer">
        <div class="bannerImg">
          <img src="./images/banner.png" alt="">
        </div>
        <div class="bannerWord">
          <div class="title">
            <i class="iconfont icon-huati"></i>
            <span>我的2019课本...</span>
          </div>
          <div class="word">
            <p>2019年你的课本上有（奇怪形状的）随手涂鸦？是不是只要一上课，你灵魂画手的那一面就会现身？添个花花草草是小case，为历史人物加个当代道具也是家常便饭~</p>
          </div>
          <div class="titleType">
            <div class="titleTypeItem">留下2019年的云</div>
            <span class="relate">
              <i class="iconfont icon-gengduo"></i>
            </span>
          </div>
          <div class="browse-partake">
            <span class="browse">46547浏览</span>
            <span class="partake">357参与</span>
            <img class="partakeUserOne" src="./images/1.png" alt="">
            <img class="partakeUserTwo" src="./images/2.png" alt="">
            <img class="partakeUserThree" src="./images/3.png" alt="">
            <span class="more">
              <i class="iconfont icon-icons_arrowright"></i>
            </span>
          </div>
        </div>
      </div>

      <!-- 切换 -->
      <div class="tab">
        <div class="tabItem">
          <router-link to="/home_sub/most_new" replace>最新</router-link>
        </div>
        <div class="tabItem">
          <router-link to="/home_sub/most_hot" replace>最热</router-link>
        </div>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>

    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import {Button} from 'mint-ui'
  export default {
    data() {
      return {
        isShowMenu: false,
        isShowShare: false
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .share,.home
    z-index 60
    position fixed
    right 10px
    width 50px
    height 50px
    background #ffffff
    border-radius 50%
    box-shadow 0 0 5px 0 rgba(190,190,190,.8)
    text-align center
    line-height 50px
  .share
    bottom 100px
    i
      font-size 24px
      color #858E8D
  .home
    z-index 220
    bottom 35px
    i
      font-size 24px
      color #A3C53C

  .maskTwo
    z-index 210
    position fixed
    width 100%
    height 100%
    background rgba(0,0,0,.5)

  .shareBox
    z-index 280
    position fixed
    left 50%
    transform translateX(-50%)
    bottom 25px
    width 95%
    background #ffffff
    border-radius 12px
    overflow hidden
    &.moveTop-enter-active, &.moveTop-leave-active
      transition all .3s
    &.moveTop-enter, &.moveTop-moveTop-to
      opacity 0
      transform translateX(20px)
    &>p
      width 100%
      height 40px
      line-height 40px
      color #666666
      text-indent 16px
    .shareItem
      display flex
      justify-content space-around
      .sina-weibo
        display flex
        flex-direction column
        align-items center
        span
          i
            font-size 48px
            color #E17471
        p
          margin-top 2px
          color #888888
      .wechat-friend
        display flex
        flex-direction column
        align-items center
        span
          margin-top 2px
          i
            font-size 43px
            color #8DC762
        p
          margin-top 5px
          color #888888
      .wechat-ring
        display flex
        flex-direction column
        align-items center
        span
          margin-top 3px
          i
            font-size 42px
            color #8DC762
        p
          margin-top 5px
          color #888888
      .qq-friend
        display flex
        flex-direction column
        align-items center
        span
          margin-top 3px
          i
            font-size 42px
            color #719FEB
        p
          margin-top 5px
          color #888888
      .qq-space
        display flex
        flex-direction column
        align-items center
        span
          i
            font-size 47px
            color #F7CD6B
        p
          margin-top 4px
          color #888888
    .btn
      width 100%
      margin-top 20px
      font-size 16px


  .maskOne
    z-index 210
    position fixed
    width 100%
    height 100%
    background rgba(0,0,0,.5)
    &.fade-enter-active, &.fade-leave-active
      transition opacity .3s
    &.fade-enter, &.fade-leave-to
      opacity 0

  .menu
    z-index 220
    position fixed
    bottom 17px
    display flex
    align-items center
    justify-content space-around
    background transparent
    width 80%
    &.move-enter-active, &.move-leave-active
      transition all .3s
    &.move-enter, &.move-leave-to
      opacity 0
      transform translateY(20px)
    .music
      display flex
      flex-direction column
      align-items center
      span
        display block
        width 50px
        height 50px
        text-align center
        line-height 50px
        border-radius 50%
        box-shadow 0 0 5px 0 rgba(190,190,190,.8)
        background #ffffff
        i
          font-size 20px
          font-weight bold
          color #76B7F9
      p
        margin-top 6px
        color #ffffff
    .words
      display flex
      flex-direction column
      align-items center
      span
        display block
        width 50px
        height 50px
        text-align center
        line-height 50px
        border-radius 50%
        box-shadow 0 0 5px 0 rgba(190,190,190,.8)
        background #ffffff
        i
          font-size 22px
          font-weight bold
          color #F6C670
      p
        margin-top 6px
        color #ffffff
    .picture
      display flex
      flex-direction column
      align-items center
      span
        display block
        width 50px
        height 50px
        text-align center
        line-height 50px
        border-radius 50%
        box-shadow 0 0 5px 0 rgba(190,190,190,.8)
        background #ffffff
        i
          font-size 22px
          font-weight bold
          color #9DDB62
      p
        margin-top 6px
        color #ffffff
    .video
      display flex
      flex-direction column
      align-items center
      span
        display block
        width 50px
        height 50px
        text-align center
        line-height 50px
        border-radius 50%
        box-shadow 0 0 5px 0 rgba(190,190,190,.8)
        background #ffffff
        i
          font-size 24px
          font-weight bold
          color #76B7F9
      p
        margin-top 6px
        color #ffffff


  #homeSubContainer
    width 100%
    background #eeeeee
    .searchTop
      position fixed
      z-index 200
      // bottom-border-1px(#dddddd)
      width 100%
      height 46px
      display flex
      align-items center
      justify-content space-between
      background #ffffff
      .back
        margin-left 10px
        i
          color #333333
          font-size 20px
      .searchBox
        position relative
        width 64%
        height 38px
        input
          font-size 15px
          width 100%
          height 100%
          background #eeeeee
          outline none
          text-indent 24px
          border-radius 18px
          &::-webkit-input-placeholder
            color #333333
            font-size 15px
        i
          position absolute
          color #999999
          font-size 15px
          left 5px
          top 10px
      .btn
        height 30px
        color #ffffff
        font-size 14px
        background #A3C53C
        border-radius 14px
        margin-right 15px

    .space
      height 46px
    
    .bannerContainer
      width 100%
      background #ffffff
      .bannerImg
        width 100%
        img
          width 100%
      .bannerWord
        .title
          height 32px
          line-height 32px
          i
            font-size 20px
            font-weight bold
            color #A3C53C
            margin-left 15px
          span
            font-size 18px
            color #333333
            font-weight bold
            letter-spacing 0.3px
            margin-left 6px
        .word
          margin 0 15px
          line-height 24px
          p
            color #666666
            display -webkit-box
            -webkit-box-orient vertical
            -webkit-line-clamp 2
            overflow hidden
        .titleType
          bottom-border-1px(#eeeeee)
          margin-left 15px
          height 50px
          display flex
          align-items center
          justify-content space-between
          .titleTypeItem
            height 20px
            border 1px solid #f0f0f0
            border-radius 10px
            line-height 20px
            padding 0 10px
            color #999999
          .relate
            margin-right 15px
            i
              color #999999
              font-size 18px
        .browse-partake
          position relative
          height 50px
          line-height 50px
          .browse,.partake
            font-size 15px
            color #999999
            margin-left 15px
            vertical-align middle
          .partakeUserOne,
          .partakeUserTwo,
          .partakeUserThree
            position absolute
            width 28px
            height 28px
            border-radius 50%
            border 2px solid #ffffff
            vertical-align middle
            top 8px
          .partakeUserOne
            right 35px
          .partakeUserTwo
            right 55px
          .partakeUserThree
            right 75px
          .more
            position absolute
            right 15px
            i
              color #A3C53C
              font-weight bold

    .tab
      top-border-1px(#dddddd)
      width 100%
      height 42px
      line-height 42px
      background #ffffff
      display flex
      margin-top 10px
      .tabItem
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
              width 60%
              height 2px
              transform translateX(-50%)
              background #A3C53C
</style>
