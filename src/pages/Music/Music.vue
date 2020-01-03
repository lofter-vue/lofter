<template>
<div>
  <div class="header">
    <p class="iconfont icon-sousuo4"></p>
    <input type="text" placeholder="搜索歌名、专辑、艺术家">
    <button @click="push" class="btn">取消</button>
  </div>
  <div class="text">
    <p>大家都爱听音乐</p>
  </div>
  <div class="music" v-for="(mu,index) in list" :key="index">
    <div>
      <div class="photo" @click="isPlayAudio(mu.ref,index)">
        <img :src="mu.img">
        <span class="bofang">
          <img :src="index===currentIndex?'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577688190411&di=63abf7b89c4f294a3454e4f03e22b761&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F41%2F77%2F5813682f634df_610.jpg':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3280234086,3048967653&fm=26&gp=0.jpg'"/>
        </span>
        <!-- <span class="iconfont" v-else=""></span> -->
        <audio :src='mu.music' :ref="mu.ref"></audio>
      </div>
      <div class="info">
        <p class="title">{{mu.title}}</p>
        <p class="name">{{mu.name}}</p>
        <p class="name">{{mu.id}}</p>
      </div>
    </div>
  </div>
  <div class="text">
    <p>暂时只有这么多了</p>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import { reqMusicPlay } from "../../api";
import { log } from 'util';
  export default {
    data(){
      return{
        currentIndex:null,
        isPlay:false,
        oldRef:'',
        list:[]
        
      }
    },
    methods:{
      isPlayAudio(ref,index){
        if(this.currentIndex === index){
          if(!this.isPlay){
            this.$refs[ref][0].play()
          }else{
            this.$refs[ref][0].pause()
            this.currentIndex = null
          }
        }else{
          if(this.isPlay){
            this.oldRef.pause()
            this.currentIndex = index
            this.$refs[ref][0].play()
            this.oldRef = this.$refs[ref][0]
          }else{
            this.currentIndex = index
            this.oldRef = this.$refs[ref][0]
            this.$refs[ref][0].play()
            this.isPlay = true
          }
        }
        
        
      },

      push(){
        this.$router.push({path:('/')})
      }
      
      
    },
    async mounted(){
      let result = await reqMusicPlay()
      const {status,data} = result
      if (status === 0) {
        this.list = data
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
  .header
    position relative
    padding-left 20px
    padding-bottom 10px
    margin-top 10px
    text-align center
    display flex
    border-bottom 1px solid #eeeeee
    p
      position absolute
      font-size 15px
      color #a9a9a9
      left 28px
      top 8px
    input 
      width 70%
      height 30px
      border-radius 20px
      background #eeeeee
      padding-left 30px
      outline-style none
    .btn 
      margin-left 20px
      background-color:transparent
      border-style:none
      font-size 15px
      color #666666
      outline-style none 
  .text
    width 100%
    height 30px
    text-align center
    line-height 30px
    padding 5px 0
    border-bottom 1px solid #eeeeee
    p
      color #999999
      font-size 15px
  .music
    position relative
    width 100%
    height 90px
    border-bottom 1px solid #eeeeee
    .photo
      float left
      width 62px
      height 62px
      border 1px solid black 
      border-radius 10px
      margin 15px 15px 0 15px
      img
        width 100%
        height 100%
        border-radius 10px
      .bofang
        width 20px
        height 20px
        position absolute
        display inline
        left 40px
        top 40px
        color #ffffff
        font-size 20px
        z-index 99
    .info 
      float left
      margin-top 20px
      font-size 13px
      .title
        font-weight bold
        font-size 15px
        color #333333
      .name
        margin-top 5px
        color #999999
</style>
