<template>
  <div class="HomeContainer">
      <HomeHeader class="top" @fn="show"></HomeHeader>
        <div class="swiper-container" ref="gd">
          <div class="swiper-wrapper scroll">
              <div class="swiper-slide">
                  <transition name="attention" v-if="isShowA">
                        <Attention></Attention>
                        <!-- <component :is="item.component"></component> -->
                  </transition>
              </div>
              <div class="swiper-slide">
                  <transition name="subscr" v-if="isShowA">
                      <keep-alive>
                        <Subscription></Subscription>
                      </keep-alive>
                  </transition>
                  <!-- <Subscription></Subscription> -->
              </div>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import { mapState } from 'vuex'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import Attention from '../../components/Attention/Attention'
import Subscription from '../../components/Subscription/Subscription'
  export default {
    data() {
      return {
        //   list:[
        //   {component:Attention,id:0},
        //   {component:Subscription,id:1},
        // ]
       
      }
    },
    components:{
      HomeHeader,
      Attention,
      Subscription
    },
    methods: {
      show(index){
        this.scroll.slideTo(index)
        console.log(this.scroll);
      }
    },  
    mounted() {
    this.scroll = new Swiper(this.$refs.gd,{
        scrollx:true,
        on:{
            slideChangeTransitionEnd: function(){
              // console.log(this.activeIndex)
              if(this.activeIndex == 0){
                this.isShowA = true
              }else{
                this.isShowA = false
              }
          },
        }
      })
      console.log(scroll)
    },
    computed: {
      ...mapState({
          isShowA:state => state.Home.isShowA
      })
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.top
  position sticky
  top 0px
.HomeContainer
  width 100%
  height 100%
  overflow hidden
  .swiper-container
    width 100%
    height 100%
    .scroll
      width 100%
      .swiper-slide
        width 100%
  // background-color #eee
.attention-enter,.attention-leave-to{
            opacity: 0;
            transform: translateX(-375px);
        }
.attention-enter-active,.attention-leave-active{
            transition: all 0.5s ease;
        }
.subscr-enter,.subscr-leave-to{
            opacity: 0;
            transform: translateX(375px);
        }
.subscr-enter-active,.subscr-leave-active{
            transition: all 0.5s ease;
        }        
</style>
