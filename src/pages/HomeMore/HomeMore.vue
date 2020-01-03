<template>
  <div>
    <header class="header">
      <span class="iconfont icon-houtuishangyige"></span>
      <span class="headerMid">添加关注</span>
    </header>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        moreList:[
          "小编推荐",
          "猜你喜欢",
          "同城热门"
        ]
      }
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.header
  width 100%
  height 100%
  background red

</style>
