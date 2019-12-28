<template>
  <div class='profile' ref="scroll">
    <div class="personal">
      <div class="user">
        <span class='userInfo'>
          <img src="https://tvax2.sinaimg.cn/crop.0.0.996.996.180/005yq6zgly8g9szmsqfs7j30ro0rogoi.jpg?KID=imgbed,tva&Expires=1577516032&ssig=kBEYD0wZEK" alt="">
          <span class="username">lin</span>
        </span>
        <span class='more'><i class='iconfont iconyoubian'></i></span>
      </div>
      <div class="user-fav-fan">
        <div>
          <span>10</span>
          <span>关注</span>
        </div>
        <div>
          <span>1</span>
          <span>粉丝</span>
        </div> 
        <div>
          <span>15</span>
          <span>推荐</span>
        </div>
      </div>
    </div>
    <div class="mesage">
      <span class='message-title'>消息</span>
      <div class='messageContainer'>
        <div class='message-item'>
          <span style="background:#e78787"><i class="iconfont iconxihuan2"></i></span>
          <span>收到的喜欢</span>
        </div>
        <div class='message-item'>
          <span style="background:#5ea4f5"><i class="iconfont iconpinglun"></i></span>
          <span>评论</span>
        </div>
        <div class='message-item'>
          <span style="background:#ce9936"><i class="iconfont iconIMliaotian-duihua"></i></span>
          <span>聊天</span>
        </div>
        <div class='message-item'>
          <span style="background:#e8bac0"><i class="iconfont icontongzhi1"></i></span>
          <span>通知</span>
        </div>
      </div>
    </div>
    <ul class="li1">
      <li>
        <i class="iconfont iconshoucang1"></i>
        <span>我的收藏</span>
      </li>
      <li>
        <i class="iconfont iconxihuan2"></i>
        <span>我的喜欢</span>
      </li>
    </ul>
    <ul class="li1 li2">
      <li>
        <i class="iconfont iconvuejs"></i>
        <span>达人认证</span>
      </li>
      <li>
        <i class="iconfont iconqianyuejilu"></i>
        <span>创作者签约</span>
      </li>
      <li>
        <i class="iconfont icondashang"></i>
        <span>打赏记录</span>
      </li>
      <li>
        <i class="iconfont iconyingyong"></i>
        <span>个人应用</span>
      </li>
      <li>
        <i class="iconfont iconduxiaoshuo"></i>
        <span>看小说</span>
      </li>
    </ul>
    <ul class="li1">
      <li>
        <i class="iconfont iconkefu"></i>
        <span>在线客服</span>
      </li>
      <li>
        <i class="iconfont iconset"></i>
        <span>设置</span>
      </li>
    </ul>
    <button class="lougout" @click="logout">退出登录</button>
  </div>
</template>

<script type="text/ecmascript-6">
import { MessageBox } from "mint-ui";
  export default {
    methods: {
      logout(){
        MessageBox.confirm("确定退出?").then(()=>{
          console.log('确定')
        })
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.profile
  background #f5f3f3
  height 800px
  width 100%
  overflow hidden
  .personal
    width 100%
    height 180px
    .user
      height 120px
      width 100%
      background: linear-gradient(to top,white, rgba(231,179,179,0.5)); 
      line-height 120px
      .userInfo
        float left
        margin-left 12px
        height 80px
        img 
          width 80px
          height 80px
          border-radius 50%
          vertical-align middle
        .username 
          margin-left 20px
          font-size 22px
      .more
        float right
        margin-right 16px
        color #898982
        height 80px
        i 
          font-size 20px
    .user-fav-fan
      height 60px
      display flex
      justify-content space-around
      width 100%
      background white
      margin-top -1px
      div
        width 70px
        display flex
        flex-direction column
        align-items center
        justify-content center
        span:first-child
          font-size 18px
          margin-bottom 6px
        span:last-child
          font-size 13px
          color #585757
  .mesage
    width 100%
    height 100px
    background white
    margin-top 10px
    .message-title
      display block
      height 35px
      width 100%
      line-height 35px
      font-size 16px
      padding-left 10px
      border-bottom 1px solid #f5f3f3
    .messageContainer
      height 65px
      display flex
      justify-content space-around
      .message-item
        display flex
        flex-direction column
        align-items center
        justify-content center
        span:first-child
          width 30px
          height 30px
          background green
          text-align center
          line-height 30px
          border-radius 50%
          i 
            color white
        span:last-child
          margin-top 8px
          font-size 12px
  .li1
    height 81px
    margin-top 10px
    background white
    li 
      height 40px 
      width 100%
      i   
        float left
        width 10%
        height 41px
        text-align center
        line-height 41px
        font-size 16px
      span
        float right
        width 90%
        height 40px
        border-bottom 1px solid #f5f3f3
        line-height 40px
        font-size 16px
  .li2
    height 205px
  button
    width 100%
    height 40px
    background #EF4F4F
    margin-top 10px
    border none 
    outline none
</style>
