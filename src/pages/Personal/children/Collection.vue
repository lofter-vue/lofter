<template>
  <div id="collectionContainer">

    <div class="noCollection">
      <span class="create">
        <i class="iconfont icon-chuangjian2"></i>
      </span>
      <p class="tip">你还没有创建过合集</p>
      <mt-button class="btn">创建合集</mt-button>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #collectionContainer
    width 100%
    height calc(100vh - 46px)
    background #efefef
    .noCollection
      width 100%
      display flex
      flex-direction column
      align-items center
      .create
        margin-top 50px
        i
          font-size 70px
          color #999999
      .tip
        margin-top 20px
        font-size 15px
        color #999999
        letter-spacing 1px
      .btn
        margin-top 20px
        height 28px
        font-size 14px
        color #ffffff
        background #A3C53C
        border-radius 14px

</style>
