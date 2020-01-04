<template>
  <div>

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

    <div id="mostHotContainer">

      <!-- 最热的内容列表 -->
      <ul class="listContent" v-if="HomeSub.hotList">
        <li class="listItem" v-for="(item, index) in HomeSub.hotList.hotList1" :key="index">
          <img :src="item.image" alt="">
          <p class="listWord">{{item.words}}</p>
          <div class="like">
            <i class="iconfont icon-iconset0220"></i>
            <span>{{item.like_count}}</span>
          </div>
        </li>
      </ul>

      <ul class="listContent" v-if="HomeSub.hotList">
        <li class="listItem" v-for="(item, index) in HomeSub.hotList.hotList2" :key="index">
          <img :src="item.image" alt="">
          <p class="listWord">{{item.words}}</p>
          <div class="like">
            <i class="iconfont icon-iconset0220"></i>
            <span>{{item.like_count}}</span>
          </div>
        </li>
      </ul>

    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import {reqHomeSubHot} from '../../../api'

  export default {
    data() {
      return {
        isShowBox: false,
        HomeSub: {}
      }
    },
    
    async mounted() {
      const result = await reqHomeSubHot()
      const {status,data} = result
      if (status === 0) {
        this.HomeSub = data
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'

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

  #mostHotContainer
    width 96%
    margin 0 auto
    display flex
    flex-direction row
    justify-content space-between
    .listContent
      width 49%
      display flex
      flex-direction column
      margin-top 5px
      .listItem
        width 100%
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
