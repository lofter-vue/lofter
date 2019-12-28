<template>
  <div class='Login'>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class='swiper-slide'>
          <img src="../../common/images/swiper/1.jpg" alt="">
        </div>
        <div class='swiper-slide'>
          <img src="../../common/images/swiper/2.jpg" alt="">
        </div>
        <div class='swiper-slide'>
          <img src="../../common/images/swiper/3.jpg" alt="">
        </div>
        <div class='swiper-slide'>
          <img src="../../common/images/swiper/4.jpg" alt="">
        </div>
        <div class='swiper-slide'>
          <img src="../../common/images/swiper/5.jpg" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class='btn'>
      <button class='login' @click="$router.push('/userlogin')">登录</button>
      <button class='regist' @click="$router.push('/register')">注册</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper";
import "swiper/css/swiper.css";
  export default {
    mounted() {
      new Swiper(".swiper-container", {
        //循环模式
        loop: true,
        autoplay:true,
        //分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.Login
  position relative
  .swiper-container
    position relative
    width: 100%
    height: 100%
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        display: flex;
        flex-wrap: wrap;
        img
          width 100%
          height 100% 
    .swiper-pagination 
      position absolute
      top 76%
      left 50%
      margin-left -50%
      >>>span 
        width 7px
        height 7px
      >>>span.swiper-pagination-bullet-active 
        background white
  .btn
    z-index 99
    width 100%
    height 50px
    position absolute
    bottom 8%
    display flex
    justify-content space-around
    button 
      width 42%
      font-size 18px
      font-weight bolder
      outline none
      border 1px solid white
      border-radius 88px
      &.login
        color #688A8B
        background white
      &.regist
        color white
        background transparent
</style>
