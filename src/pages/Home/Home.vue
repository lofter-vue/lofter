<template>
  <div>
    <div class="btn" @click="$router.push('/home_sub')">跳转广告</div>
  </div>
</template>

<script type="text/ecmascript-6">
import { reqHome } from "../../api";
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .btn
    width 100%
    height 40px
    background #bbffaa
</style>
