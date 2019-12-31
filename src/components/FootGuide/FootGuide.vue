<template>
  <div class="foot-guide">
    <div class="top">
      <span class="guide-item-top">
        <span>
          <i class="iconfont icon-yinyue" style="color:#66B8F5" :class="{on:$route.path === '/music'}" @click="goto('/music')"></i>
        </span>
      </span>
      <span class="guide-item-top text">
        <span>
          <i class="iconfont icon-bianjiqianbixieshuru" style="color:#FFC45F" :class="{on:$route.path === '/text'}" @click="goto('/text')"></i>
        </span>
      </span>
      <span class="guide-item-top photo">
        <span>
          <i class="iconfont icon-tupian" style="color:#88E144"></i>
        </span>
      </span>
      <span class="guide-item-top video">
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
    <span class="guide-item"  :class="{on:$route.path === '/more'}" @click="goto('/more')">
      
        <span @click="show=!show">
          <transition name="move">
            <span>
              <i class="iconfont iconjiahao" style="font-size:36px"></i>
            </span>
          </transition>
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
  </div>
  
</template>

<script type="text/ecmascript-6">
export default {
  data(){
    return{
      show:true
    }
  },
  methods: {
    goto(path){
      if(path !== this.$route.path){
        this.$router.replace(path)
      }
    },
    
  },
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
.foot-guide 
  position relative
  .top
    position absolute
    display flex
    width 100%
    bottom 80px
    text-align: center;
    .guide-item-top
      width 25%
      margin-left 25px  
      span 
        display  block
        width 40px
        height 40px
        border-radius 50%
        text-align center
        line-height 40px
        i 
          font-size 28px

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
  .guide-item 
    display: flex;
    flex-direction: column;
    width: 25%;
    text-align: center;
    &.on
      color $green
    span 
      margin-top: 5px;
      font-size: 12px;
    i 
      font-size: 22px;
      &.iconjiahao
        &.move-enter-active, &.move-leave-active
          transform scaleZ(180deg)
          transition all .5s
        &.move-enter, &.move-leave-to
          transform scaleZ(0deg)
  
    
</style>
