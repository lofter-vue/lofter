<template>
  <div>
    <div class="header">
      <button @click="push" class="btn">取消</button>
      <div class="touxiang">
        <img src="../../common/images/touxiang.jpg">
      </div>
      <span class="name">'配角儿</span>
    </div>
    <div class="text">
      <textarea v-model="article" class="article" name="title"  cols="33" rows="1" placeholder="文章标题(可不填)" aria-placeholder="placeholder"></textarea>
      <div class="line"></div>
      <textarea v-model="content" class="content" name="text"  cols="33" rows="7" placeholder="说点什么" aria-placeholder="placeholder"></textarea>
      <div class="address">
          <span class="iconfont icon-weizhi">北京市，昌平区，郑平路</span>
      </div>
    </div>
    <div class="other">
      <div class="address2">
        <span class="icon">#</span>
        <span class="beijing">北京</span>
      </div>
      <div class="collection">
        <span class="iconfont icon-wenjian"></span>
        <span class="add">加入合集</span>
        <span class="right">></span>
      </div>
      <div class="bar"></div>
      <div class="collection">
        <div @click="actionSheet">
          <span class="iconfont icon-wangluo"></span>
          <span class="add">公开发表</span>
          <span class="right">></span>
        </div>
        <div class="line2"></div>
        <div>
          <span class="iconfont icon-zhuanfa"></span>
          <span class="add">允许他人转载到LOFTER</span>
          <mt-switch v-model="toggle"></mt-switch>
        </div>
        <div class="bar"></div>
        <div class="collection">
        <span class="iconfont icon-banquan"></span>
        <span class="add">版权声明</span>
        <span class="right">></span>
      </div>
      <mt-actionsheet
        :actions= "data"
        v-model="sheetVisible">
      </mt-actionsheet>
      <div class="bar"></div>
      </div>
    </div>
    <button class="release" @click="release">发布</button>
  </div>
</template>

<script type="text/ecmascript-6">
import {Switch} from 'mint-ui';  
import { Actionsheet } from 'mint-ui';


  export default {
    data(){
      return{
        article:'',
        content:'',
        toggle:false,
        data: [
          {
          name: '公开发表'
          },
          {
          name: '尽自己可见'
          }
        ],
        // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
        sheetVisible: false
      }
    },
    methods:{
      push(){
        this.$router.push({path:('/')})
      },
      actionSheet(){
        this.sheetVisible = true
      },
      release(){
        if (this.content == '') return
          console.log(this.article);
          console.log(this.content);
      }
  }
}  
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .header
    position relative 
    width 100%
    height 50px
    display flex
    line-height 50px
    vertical-align middle
    
    .btn
      margin-left 20px
      background-color:transparent
      border-style:none
      font-size 15px
      color #666666
      outline-style none 
    .touxiang
      position absolute
      margin-top 10px 
      margin-left 40%
      transform translateX(50%)
      width 30px
      height 30px
      border-radius 50%
      img 
        width 100%
        height 100%
        border-radius 50%
    .name 
      position absolute
      font-size 15px
      margin-left 50%
      transform translateX(50%)
      font-weight bold
  .text
    background #F8F8F8
    height 220px
    padding-bottom 15px
    textarea
      margin-top 10px
      border none
      margin-left 20px
      background #F8F8F8
      font-weight bold
      outline-style none
      font-size 15px
      &.article
        font-size 20px
      &.content::-webkit-input-placeholder
        font-size 15px
        color #999
      &.article::-webkit-input-placeholder
        color #999
    .line
      width 90%
      height 1px
      background #dddddd
      margin 5px 5% 5px 5%
    .address
      width 45%
      height 30px
      line-height 30px
      text-align center
      margin-left 15px
      border 1px solid #dddddd
      border-radius 15px
      span 
        font-size 13px
        color #c4c4c4
  .other  
    .bar 
      border-bottom 20px solid #f8f8f8
    .address2
      height 50px
      width 100%
      line-height 50px
      border-bottom 20px solid #f8f8f8
      .icon
        margin-left 20px
        font-size 25px
        font-weight bold
        color #98C503
        vertical-align middle
      .beijing 
        margin-left 15px
        font-size 15px
        vertical-align middle
    .collection
      width 100%
      height 50px
      line-height 50px
      .line2
        width 80%
        height 1px
        background #eeeeee
        margin-left 20%
      .iconfont
        font-size 20px
        vertical-align middle
        margin-left 20px  
        color #D8D8D8
      .add
        vertical-align middle
        margin-left 15px
        font-size 15px
        color #333
      .right
        float right
        font-size 15px
        margin-right 15px
        color #dddddd
      .mint-switch
        float right
        margin-top 15px
        margin-right 10px
  .release
    width 100%
    height 40px
    background #98C503
    position absolute
    bottom 0
    color white
    font-size 15px
    outline-style none
    border none
    letter-spacing 5px
    display block
</style>
