<template>
  <div class="app">
    <router-view></router-view>
    <foot-guide v-show="$route.meta.isShowFooter" class="footer"></foot-guide>
  </div>
</template>

<script>
import FootGuide from "./components/FootGuide/FootGuide";
import { reqAttentions } from "./api";
export default {
  async created() {
    this.$store.dispatch('autoLogin')
    let arr = ['5dccd15af495734150be910e','5dccd15ff495734150be910f']
    let _idList = arr.join(',')
    let result = await reqAttentions(_idList)
    console.log(result)
  },
  components: {
    FootGuide
    
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.app
  height 100%
  width 100%
</style>
