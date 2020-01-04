<template>
  <div id="mostNewContainer">
    
    <!-- 最新的内容列表 -->
    <ul class="listContent" v-if="HomeSub.newList">

      <li class="listItem" v-for="(item, index) in HomeSub.newList.newList1" :key="index">
        <img :src="item.image" alt="">
        <p class="listWord">{{item.words}}</p>
        <div class="like">
          <i class="iconfont icon-iconset0220"></i>
          <span>{{item.like_count}}</span>
        </div>
      </li>
      
    </ul>

    <ul class="listContent" v-if="HomeSub.newList">

      <li class="listItem" v-for="(item, index) in HomeSub.newList.newList2" :key="index">
        <img :src="item.image" alt="">
        <p class="listWord">{{item.words}}</p>
        <div class="like">
          <i class="iconfont icon-iconset0220"></i>
          <span>{{item.like_count}}</span>
        </div>
      </li>
      
    </ul>

  </div>
</template>

<script type="text/ecmascript-6">
  import {reqHomeSubNew} from '../../../api'

  export default {
    data() {
      return {
        HomeSub: {}
      }
    },

    async mounted() {
      const result = await reqHomeSubNew()
      const {status,data} = result
      this.HomeSub = data
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #mostNewContainer
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
