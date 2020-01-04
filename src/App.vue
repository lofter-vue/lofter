<template>
  <div class="app">
    <router-view></router-view>
    <foot-guide v-show="$route.meta.isShowFooter" class="footer"></foot-guide>
  </div>
</template>

<script>
import FootGuide from "./components/FootGuide/FootGuide";
import { mapState } from "vuex";
import {Toast} from 'mint-ui'
import { reqAttentions,reqAllAttentions } from "./api";
import { SAVE_ALLATTENTION} from "./store/mutations_types";
export default {
  created() {
    this.$store.dispatch('autoLogin')
    setTimeout(() => {
      this.$store.dispatch('saveMyAttention')
    }, 300);
  },
  components: {
    FootGuide
  },
  computed: {
    ...mapState({
      myAttention:state => state.user.myAttention
    })
  },
  async mounted() {
    setTimeout(() => {
      this.$store.commit('updateattention',this.myAttention)
    }, 400);
    // let result = await reqAllAttentions()
    // if(result.status === 0){
    //   this.$store.commit(SAVE_ALLATTENTION,result.data)
    // }else{
    //   Toast('出错了')
    // }
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.app
  height 100%
  width 100%
</style>
