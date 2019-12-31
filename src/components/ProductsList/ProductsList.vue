<template>
  <div class="productsList">
    <div class="listItem" v-for="(item, index) in 6" :key="index">
      <div class="picture">
        <img src="../../common/images/01.png" alt="">
      </div> 
      <div class="description">
        <p class="itemTitle">魔道祖师动画-集福立牌</p>
        <p class="discounts" >满108减10</p>
        <p class="price"><span class="now">￥30</span>  <span class="old">￥49</span></p>
      </div>   
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import ProductsList from "../../components/ProductsList/ProductsList"
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .productsList
    display flex
    flex-direction row
    flex-wrap wrap
    justify-content space-between
    padding 10px
    box-sizing border-box
    width 100% 
    .listItem
      border 1px solid #bbbbbb
      border-radius 5px
      width 48%
      margin-bottom 10px
      .picture
        width 100%
        img 
          width 100%
          height 100%
      .description
        line-height 20px
        padding 10px
      .itemTitle
        font-size 14px
      .discounts
        border 1px solid red
        display inline-block
        color red
        padding 3px
        font-size 12px
      .price
        font-size 14px
        .now 
          color red
        .old 
          color #bbbbbb
          text-decoration line-through
      
</style>
