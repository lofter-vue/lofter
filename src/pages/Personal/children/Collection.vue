<template>
  <div id="collectionContainer">

    <div class="noCollection">
      <span class="create">
        <i class="iconfont iconjiahao"></i>
      </span>
      <p class="tip">你还没有创建过合集</p>
      <p>前往网页版LOFTER创建和管理你的合集</p>
      <p>电脑上访问www.lofter.com</p>
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
        margin-top 60px
        i
          font-size 70px
          color #999999
      .tip
        margin-top 15px
        font-size 16px
        color #999999
        letter-spacing 1px
      p
        margin-top 10px
        color #999999
        line-height 26px

</style>
