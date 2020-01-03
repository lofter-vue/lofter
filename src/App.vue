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
  created() {
    this.$store.dispatch('autoLogin')
    setTimeout(() => {
      this.$store.dispatch('saveMyAttention')
    }, 300);
  },
  mounted() {
    console.log(this.$route.path)
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
