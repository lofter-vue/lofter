<template>
  <div class="swiper-box">
      <div class="swiper-container" ref="gd">
          <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in list" :key="index">
                    
              </div>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import Attention from '../Attention/Attention'
import Subscription from '../Subscription/Subscription'
  export default {
    components:{
      Attention,
      Subscription,
    },
    data() {
      return {
        list:[
          {path:'/home/attention',component:Attention,id:1},
          {path:'/home/subscription',component:Subscription,id:2},
        ]
      }
    },
    mounted() {
    let scroll = new Swiper(this.$refs.gd,{
        scrollx:true,
      })
      console.log(scroll)
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.swiper-box
  width 100%
  height 100%
  .swiper-container
    width 100%
    height 100%
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        height 100%



</style>
