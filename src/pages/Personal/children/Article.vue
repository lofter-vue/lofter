<template>
  <div>
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
    <!-- 遮罩 -->
    <!-- <div @click="isShowShare=false" v-show="isShowShare" class="mask"></div> -->

    <div id="articleContainer">

      <!-- 文章结构切换 -->
      <div class="switch">
        <i class="iconfont icon-xuanxiang"></i>
      </div>

      <!-- 文章列表 -->
      <div class="articleList">

        <div class="articleItem">
          <div class="userInfo">
            <img src="../images/userImg.png" alt="">
            <div class="name-date">
              <p class="name">lofter用户</p>
              <p class="date">12-28</p>
            </div>
            <div class="share">
              <i class="iconfont icon-gengduo2"></i>
            </div>
          </div>
          <div class="articleContent">
            <div class="imgCount">共6张</div>
            <img src="../images/bgImg.png" alt="">
            <p class="title">一张图片</p>
            <p class="articleText"></p>
            <div class="titleType">
              <div class="titleTypeItem">摄影</div>
              <div class="titleTypeItem">电影</div>
            </div>
            <div class="like-share">
              <span class="like">
                <i class="iconfont icon-iconset0220"></i>
              </span>
              <span class="comment">
                <i class="iconfont icon-pinglun"></i>
              </span>
              <span @click="isShowShare=!isShowShare" class="share">
                <i class="iconfont icon-share"></i>
              </span>
            </div>
            <div class="hot-read">
              <span class="hot">3热度</span>
              <span class="read">320次阅读</span>
            </div>
          </div>
        </div>
        <div class="articleItem">
          <div class="userInfo">
            <img src="../images/userImg.png" alt="">
            <div class="name-date">
              <p class="name">lofter用户</p>
              <p class="date">12-28</p>
            </div>
            <div class="share">
              <i class="iconfont icon-gengduo2"></i>
            </div>
          </div>
          <div class="articleContent">
            <div class="imgCount">共6张</div>
            <img src="../images/bgImg.png" alt="">
            <p class="title">一张图片</p>
            <p class="articleText"></p>
            <div class="titleType">
              <div class="titleTypeItem">摄影</div>
              <div class="titleTypeItem">电影</div>
            </div>
            <div class="like-share">
              <span class="like">
                <i class="iconfont icon-iconset0220"></i>
              </span>
              <span class="comment">
                <i class="iconfont icon-pinglun"></i>
              </span>
              <span @click="isShowShare=!isShowShare" class="share">
                <i class="iconfont icon-share"></i>
              </span>
            </div>
            <div class="hot-read">
              <span class="hot">3热度</span>
              <span class="read">320次阅读</span>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        isShowShare: false
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'

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

  #articleContainer
    background #efefef
    width 100%

    .switch
      height 30px
      line-height 30px
      i
        float right
        font-size 22px
        color #aaa
        margin-right 10px

    .articleList
      width 100%
      .articleItem
        width 100%
        background #ffffff
        margin-bottom 15px
        .userInfo
          display flex
          align-items center
          img
            width 45px
            height 45px
            border-radius 50%
            margin 5px 10px
          .name-date
            width 75%
            .name
              font-size 16px
              color #333333
              line-height 20px
              margin-bottom 10px
            .date
              font-size 12px
              color #aaaaaa
          .share
            i
              font-size 24px
              color #aaa
        .articleContent
          position relative
          width 100%
          .imgCount
            position absolute
            top 10px
            right 10px
            height 16px
            line-height 16px
            color #ffffff
            background rgba(0,0,0,.3)
            padding 3px 6px
            border-radius 10px
          img
            width 100%
          .title
            height 36px
            line-height 30px
            font-size 15px
            color #333333
            margin-left 12px
          .titleType
            width 94%
            height 46px
            bottom-border-1px(#eeeeee)
            margin 0 auto
            .titleTypeItem
              display inline-block
              height 18px
              border 1px solid #eeeeee
              padding 3px 12px
              border-radius 15px
              text-align center
              line-height 18px
              color #999999
              margin-right 10px
          .like-share
            display flex
            height 46px
            line-height 50px
            .like
              margin-left 10px
            .comment
              margin-left 20px
              width 79%
              i
                font-size 28px
            .share
              margin-right 8px
            i
              font-size 23px
              color #666666
          .hot-read
            display flex
            justify-content space-between
            height 36px
            line-height 26px
            .hot
              color #666666
              margin-left 10px
            .read
              color #666666
              margin-right 8px
</style>
