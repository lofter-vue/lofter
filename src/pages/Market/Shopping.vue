<template>
  <div>
    <div class="shoppingHeader">
      <span class="iconfont icon-fanhui1"></span>
      <h1>购物车</h1>
      <span></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.shopHeader
  position fixed !important
    left 0 
    top 0
    width 100%
    box-sizing border-box
    z-index 99
    background-color #fff
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
</style>
