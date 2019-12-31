<template>
  <div id="mostHotContainer">

    <!-- 更新数据头 -->
    <div class="listTop">
      <span class="dataUpdate">数据更新于 2019-12-30 11:20</span>
      <div @click="isShowBox=!isShowBox" class="rank">
        <span>日榜</span>
        <i class="iconfont icon-arrow-bottom"></i>
      </div>
    </div>
    <div v-show="isShowBox" class="rankBox">
      <div class="triangle"></div>
      <li class="rankBoxItem">日榜
        <i class="iconfont icon-duigou"></i>
      </li>
      <li class="rankBoxItem">周榜</li>
      <li class="rankBoxItem">月榜</li>
      <li class="rankBoxItem">全部</li>
    </div>

    <!-- 最热的内容列表 -->
    <ul class="listContent">
      <li class="listItem">
        <img src="../images/list_item.jpg" alt="">
        <p class="listWord">2019年你的课本上有（奇形怪状的）随手涂鸦吗？是不是只要一上课，你灵魂画手的那一面就会现身？添个花花草草是小case，为历史人物加个当代道具也是家常便饭~</p>
        <div class="like">
          <i class="iconfont icon-iconset0220"></i>
          <span>222人喜欢</span>
        </div>
      </li>
      <li class="listItem">
        <img src="../images/list_item.jpg" alt="">
        <p class="listWord">2019年你的课本上有（奇形怪状的）随手涂鸦吗？是不是只要一上课，你灵魂画手的那一面就会现身？添个花花草草是小case，为历史人物加个当代道具也是家常便饭~</p>
        <div class="like">
          <i class="iconfont icon-iconset0220"></i>
          <span>222人喜欢</span>
        </div>
      </li>
      <li class="listItem">
        <img src="../images/list_item.jpg" alt="">
        <p class="listWord">2019年你的课本上有（奇形怪状的）随手涂鸦吗？是不是只要一上课，你灵魂画手的那一面就会现身？添个花花草草是小case，为历史人物加个当代道具也是家常便饭~</p>
        <div class="like">
          <i class="iconfont icon-iconset0220"></i>
          <span>222人喜欢</span>
        </div>
      </li>
      <li class="listItem">
        <img src="../images/listItemNew.jpg" alt="">
        <p class="listWord">2019年你的课本上有（奇形怪状的）随手涂鸦吗？是不是只要一上课，你灵魂画手的那一面就会现身？添个花花草草是小case，为历史人物加个当代道具也是家常便饭~</p>
        <div class="like">
          <i class="iconfont icon-iconset0220"></i>
          <span>222人喜欢</span>
          
        </div>
      </li>
      <li class="listItem">
        <img src="../images/list_item.jpg" alt="">
        <p class="listWord">2019年你的课本上有（奇形怪状的）随手涂鸦吗？是不是只要一上课，你灵魂画手的那一面就会现身？添个花花草草是小case，为历史人物加个当代道具也是家常便饭~</p>
        <div class="like">
          <i class="iconfont icon-iconset0220"></i>
          <span>222人喜欢</span>
        </div>
      </li>
    </ul>

  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
        isShowBox: false
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  #mostHotContainer
    width 95%
    margin 0 auto
    .listTop
      position relative
      width 100%
      height 50px
      display flex
      align-items center
      justify-content space-between
      .dataUpdate
        color #666666
      .rank
        background #ffffff
        height 24px
        line-height 24px
        padding 0 10px
        border-radius 12px
        span
          letter-spacing 3px
          color #333333
        i
          margin-left 3px
          color #333333
          font-size 12px
    .rankBox
      position absolute
      z-index 222
      width 36%
      right 0
      border-radius 5px
      background #ffffff
      .triangle
        position absolute
        top -20px
        right 20px
        border-top 10px solid transparent
        border-left 10px solid transparent
        border-right 10px solid transparent
        border-bottom 10px solid #ffffff
      .rankBoxItem
        width 92%
        margin 0 auto
        height 40px
        line-height 40px
        text-align center
        font-size 15px
        letter-spacing 2px
        bottom-border-1px(#e0e0e0)
        i
          position absolute
          color #A3C53C
          font-weight bold
          right 20px

    .listContent
      width 100%
      display flex
      flex-wrap wrap
      justify-content space-between
      .listItem
        width 49%
        background #ffffff
        border-radius 5px
        margin-bottom 5px
        overflow hidden
        img
          width 100%
        .listWord
          color #333333
          margin 10px 10px
          line-height 20px
          letter-spacing 0.2px
          display -webkit-box
          -webkit-box-orient vertical
          -webkit-line-clamp 2
          overflow hidden
        .like
          height 28px
          margin-left 10px
          line-height 15px
          i
            color #dddddd
            margin-right 10px
          span
            color #bbbbbb 
</style>
