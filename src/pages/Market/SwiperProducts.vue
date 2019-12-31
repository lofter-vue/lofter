<template>
  <div class="swiperProductsContainer">
    <div class="swiperProductsHeader">
      <span class="iconfont icon-fanhui" @click="$router.replace('/market')"></span>
      <h1>魔道祖师</h1>
      <span class="iconfont icon-arrow-" @click="share"></span>
    </div>
    <div class="swiperImage">
      <img src="../../common/images/01.png" alt="">
    </div>
    <ProductsList></ProductsList>
    <ul class="icon-fixed">
      <li @click="$router.replace('/Market')"><span >市集<br/>首页</span></li>
      <li><span class="iconfont icon-gouwuche"></span></li>
      <li><span class="iconfont icon-icondd1"></span></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import ProductsList from "../../components/ProductsList/ProductsList"
import { Popup } from 'mint-ui';
import Vue from "vue"
Vue.component(Popup.name, Popup);
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      share(){
        this.popupVisible = !this.popupVisible
      }
    },
    components: {
      ProductsList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.swiperProductsContainer
  box-sizing border-box
  .swiperProductsHeader
    position fixed !important
    left 0 
    top 0
    width 100%
    box-sizing border-box
    z-index 999
    h1
      font-size 20px
    span
    .icon-fanhui
      font-size 20px
      color #000
    padding 10px
    display flex
    align-items center
    flex-direction row
    justify-content space-between
    bottom-border-1px(#bbb)
  .swiperImage
    margin-top 40px
    padding 10px
    width 100%
    height 150px 
    box-sizing border-box
    img 
      width 100%
      height 100%
      border-radius 5px
    h1
      font-size 16px
  .icon-fixed
    position fixed
    right 15px
    bottom 15px
    li
      width 50px
      height 50px
      border-radius 25px
      border 1px solid #ccc
      text-align center
      background-color #fff
      margin-bottom 10px
      display flex
      flex-direction column
      justify-content center
      .iconfont
        font-size 20px
</style>

