<template>
  <div class="homeHeader">
          <div class="left" :class="index==0? 'active':''"  @click="showA(0)">
            关注
          </div>
            <div class="right" :class="index==1? 'active':''" @click="showA(1)">
              订阅
          </div>
          <i class="iconfont icon-yaoqingyouli"></i>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
    prop:["show","activeIndex"],
    data() {
      return {
        index:0,
      }
    },
    methods: {
        showA(index){
          console.log(index)
          this.index = index
          this.$emit("fn",index)
        },
    },
  computed: {
    ...mapState({
      isShowA:state => state.Home.isShowA
    })
  },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.homeHeader
    background-color #fff
    display flex
    text-align center
    padding 10px 10px 0 10px
    position relative
    height 8%
    z-index 99
  .left
    display block
    font-size 18px
    color black
    width 20%
    margin-left 30%
    &.active
      border-bottom 1px solid green
    &.active1
      border-bottom 1px solid green  
  .right
    display block
    font-size 18px
    color black
    width 20%
    &.active
      border-bottom 1px solid green
    &.active1
      border-bottom 1px solid green    
  .icon-yaoqingyouli
    display block
    font-size 22px
    position absolute
    right 0
    color black
    width 20%
        
  



















</style>
