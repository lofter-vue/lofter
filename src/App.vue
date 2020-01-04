<template>
  <div class="app">
    <router-view></router-view>
    <foot-guide v-show="$route.meta.isShowFooter" class="footer"></foot-guide>
  </div>
</template>

<script>
import FootGuide from "./components/FootGuide/FootGuide";
import { mapState } from "vuex";
import { reqAttentions } from "./api";
export default {
  created() {
    this.$store.dispatch('autoLogin')
    // this.$store.dispatch('getAttentionDatas',this.attentions)
    setTimeout(() => {
      this.$store.dispatch('saveMyAttention')
    }, 300);
  },
  components: {
    FootGuide
  },
  computed: {
    ...mapState({
      attentions:state => state.user.attention
    })
  },
  watch: {
    attentions(){
      this.$store.dispatch('getAttentionDatas',this.attentions)
    }
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.app
  height 100%
  width 100%
</style>
