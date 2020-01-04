<template>
  <div class="swiperContainer">
    <div ref='sw1' class="swiper-container" >
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../../static/menuimgs/lunbo/1.jpg" alt="aaa">
        </div>
        <div class="swiper-slide">
          <img src="../../../static/menuimgs/lunbo/2.jpg" alt="aaa">
        </div>
        <div class="swiper-slide">
          <img src="../../../static/menuimgs/lunbo/3.jpg" alt="aaa">
        </div>
        <div class="swiper-slide">
          <img src="../../../static/menuimgs/lunbo/4.jpg" alt="aaa">
        </div>
        <div class="swiper-slide">
          <img src="../../../static/menuimgs/lunbo/5.jpg" alt="aaa">
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
  export default {
    mounted(){
      //初始化轮播
      new Swiper(this.$refs.sw1,{
        loop:true, // 循环模式选项
        pagination:{// 如果需要分页器
          el:'.swiper-pagination'
        },
        autoplay: {
          disableOnInteraction: false, //手动滑动之后不打断播放
          delay: 2000
        },
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .swiperContainer
    width 100%
    margin-bottom 10px
    .swiper-container
      width 100%
      height 150px
      background-color #fff
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          width 100%
          height 100%
          display flex
          flex-wrap wrap
          img 
            width 100%
            height 100%
            border-radius 10px
    .swiper-pagination
      position absolute
      top 135px
      left 50%
      transform translateX(-50%)
</style>
