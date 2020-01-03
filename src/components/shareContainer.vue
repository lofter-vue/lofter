<template>
<!-- 
  引入路径: import ShareContainer from '../../../components/shareContainer'
  注册组件名: ShareContainer
  直接使用组件: <ShareContainer :shareShow="shareShow" :changeShare="changeShare"/>
  methods内定义的方法:changeShare(){
                      this.shareShow = !this.shareShow
                    },
-->
  <transition name="shareMove">
<div class="mask" v-if="shareShow" @touchmove.prevent>
    <div class="shareContainer" >
      <div class="title">分享到</div>
      <ul class="share">
        <li>
          <div class="iconfont icon-weixin"></div>
          <span class="text">微信好友</span>
        </li>
        <li >
          <div class="iconfont icon-xingtaiduICON_weixinpengyouquan"></div>
          <span class="text">微信朋友圈</span>
        </li>
        <li >
          <div class="iconfont icon-weibo"></div>
          <span class="text">新浪微博</span>
        </li>
        <li >
          <div class="iconfont icon-qq"></div>
          <span class="text">QQ好友</span>
        </li>
        <li >
          <div class="iconfont icon-QQkongjian"></div>
          <span class="text">QQ空间</span>
        </li>
      </ul>
      <div class="refresh">
        <div>
          <div class="iconfont icon-lianjie"></div>
          <span class="text">复制链接</span>
        </div>
        <div @click="shuaxin">
          <div class="iconfont icon-ziyuan"></div>
          <span class="text">刷新</span>
        </div>
      </div>
      <div class="btn" @click="changeShare()">取 消</div>
    </div>

</div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['shareShow','changeShare'],
    methods:{
      shuaxin(){
        location=this.$route.path
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .mask
    width 100%
    height 100%
    position fixed
    left 0 
    top 0
    bottom 0
    right 0
    z-index 100
    background-color rgba(0,0,0,.4)
    &.shareMove-enter-active, &.shareMove-leave-active
        transition all .3s
    &.shareMove-enter, &.shareMove-leave-to
      opacity 0
      transform translateY(0)
    .shareContainer
      position fixed
      width 95%
      height 260px
      left 10px
      bottom 10px
      border-radius 10px
      background-color #fff
      .title
        padding 15px 
        width 100%
        line-height 30px
        font-size 14px
      .share
        display flex
        flex-wrap nowrap
        width 100%
        height 55px
        padding-bottom 15px
        border-bottom  1px solid #989898
        li
          width 20%
          display flex
          flex-direction column
          .iconfont
            text-align center
            font-size 50px
            &.icon-weixin
              color #7AC851
            &.icon-xingtaiduICON_weixinpengyouquan
              color #7AC852
            &.icon-weibo
              color #F06B6C
            &.icon-qq
              color #62A2ED
            &.icon-QQkongjian
              color #FECB56
          .text
            font-size 12px
            width 100%
            text-align center
      .refresh
        margin-top 10px
        display flex
        flex-wrap nowrap
        width 100%
        height 60px
        padding-bottom 5px
        border-bottom  1px solid #98989
        div
          display flex
          flex-direction column
          .iconfont
            width 50px
            height 50px
            font-size 50px
            margin 0 10px
            color #878787
          .text
            margin-top 5px
            font-size 12px
            width 100%
            text-align center
      .btn
        width 100%
        height 50px
        font-size 20px
        line-height 50px
        position absolute
        bottom 0
        text-align center
        background-color rgba(0,0,0,.2)
</style>
