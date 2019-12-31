<template>
  <div id="mostNewContainer">
    
    <!-- 最新的内容列表 -->
    <ul class="listContent">
      <li class="listItem">
        <img src="../images/listItemNew.jpg" alt="">
        <p class="listWord">鲁迅看了都说好</p>
        <div class="like">
          <i class="iconfont icon-iconset0220"></i>
          <!-- <span>222人喜欢</span> -->
        </div>
      </li>
      <li class="listItem">
        <img src="../images/listItemNew.jpg" alt="">
        <p class="listWord">鲁迅看了都说好</p>
        <div class="like">
          <i class="iconfont icon-iconset0220"></i>
          <!-- <span>222人喜欢</span> -->
        </div>
      </li>
      <li class="listItem">
        <img src="../images/listItemNew.jpg" alt="">
        <p class="listWord">鲁迅看了都说好</p>
        <div class="like">
          <i class="iconfont icon-iconset0220"></i>
          <!-- <span>222人喜欢</span> -->
        </div>
      </li>
    </ul>

  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
        
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #mostNewContainer
    width 96%
    margin 0 auto
    .listContent
      width 100%
      display flex
      flex-wrap wrap
      justify-content space-between
      margin-top 5px
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
