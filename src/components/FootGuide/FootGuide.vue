<template>
    <div class="foot-guide">  
    <div class="top">
        <span class="guide-item-top yinyue" :class="[move?'up':'down']">
            <span>
              <i class="iconfont icon-yinyue" style="color:#66B8F5" :class="{on:$route.path === '/music'}" @click="goto('/music')"></i>
            </span>
        </span>
        <span class="guide-item-top text" :class="[move?'up':'down']" >
          <span>
            <i class="iconfont icon-bianjiqianbixieshuru" style="color:#FFC45F" :class="{on:$route.path === '/text'}" @click="goto('/text')"></i>
          </span>
        </span>
        <span class="guide-item-top photo" :class="[move?'up':'down']">
          <span>
            <i class="iconfont icon-tupian" style="color:#88E144"></i>
          </span>
        </span>
        <span class="guide-item-top video" :class="[move?'up':'down']">
          <span>
            <i class="iconfont icon-shipin" style="color:#5BBAFF"></i>
          </span>
        </span>
    </div>
      <span class="guide-item" :class="{on:$route.path === '/home'}" @click="goto('/home')">
        <span>
          <i class="iconfont iconshouye"></i>
        </span>
        <span>首页</span>
      </span>
      <span class="guide-item" :class="{on:$route.path === '/search'}" @click="goto('/search')">
        <span>
          <i class="iconfont iconicon-search2"></i>
        </span>
        <span>发现</span>
      </span>
      <span class="guide-item"  :class="{on:$route.path === '/more'}">
          <span @click="start">
              <span :class="[rotate?'aa':'go']">
                <i class="iconfont iconjiahao" style="font-size:36px"></i>
              </span>
          </span>
      </span>
      <span class="guide-item" :class="{on:$route.path === '/market'}" @click="goto('/market')">
        <span>
          <i class="iconfont icondingdan"></i>
        </span>
        <span>市集</span>
      </span>
      <span class="guide-item" :class="{on:$route.path === '/profile'}" @click="goto('/profile')">
        <span>
          <i class="iconfont icongeren"></i>
        </span>
        <span>个人</span>
      </span>
    <div class="mask" :class="[mask?'bb':'cc']"></div>
  </div>
    
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
export default {
  data(){
    return{
      rotate:true,
      move:true,
      mask: false
    }
  },
  methods: {
    goto(path){
      if(path !== this.$route.path){
        this.$router.replace(path)
      }
    },
    start(){
      this.rotate = ! this.rotate
      this.move = ! this.move
      this.mask = ! this.mask
    }
    
  },
  computed: {
    ...mapState({
      userInfo:state => state.user.userInfo
    })
  },
  components:{
    
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
.foot-guide
  z-index 9999
  top-border-1px(#cccccc);
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;
  background #fff
  .mask
    position absolute
    opacity 0.3
    bottom 50px
    width 100%
    height 800px
    background black
    z-index -1
    &.bb
      opacity .3
    &.cc
      display none 
  .guide-item 
    display: flex;
    flex-direction: column;
    width: 25%;
    text-align: center;
    .aa 
      transform totateZ(0deg)
    .go
      transform rotateZ(-45deg)
    &.on
      color $green
    span 
      display inline-block
      transition all 500ms
      margin-top: 5px;
      font-size: 12px;
      i 
        font-size: 22px;
  .top
    position absolute 
    bottom 80px
    width 80%
    left 10%
    height 50px
    line-height 50px
    display flex
    justify-content space-around
    // transition  all 1s
    .up
      opacity 0
      transform translateY(50px)
    .down
      opacity 1
      transform translateY(0px)
    .guide-item-top
      display block
      width 40px
      height 40px
      background white
      border-radius 50%
      text-align center
      line-height 40px
      &.yinyue
        transition  all 400ms
      &.text
        transition  all 600ms
      &.photo
        transition  all 800ms
      &.video
        transition  all 1s
      
      .iconfont
        font-size 30px  
        
  
    
</style>
