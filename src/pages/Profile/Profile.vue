<template>
  <div class='profile' ref="scroll" :class='{active:isUpdataAvatar}'>
    <div class="personal">
      <div class="user">
        <span class='userInfo'>
          <img :src="userInfo.avatar" alt="" @click="isUpdataAvatar=true">
          <span class="username">{{userInfo.username}}</span>
        </span>
        <span class='more'><i class='iconfont iconyoubian'></i></span>
        <transition name='update'>
          <span class="avatar" v-if="isUpdataAvatar">
            <span>请输入新头像图片链接地址</span>
            <input type="text" v-model="avatar" placeholder="链接地址">
            <div class='btn'>
              <button @click="updateAvatar">确定</button>
              <button @click="avatar=''">清空</button>
            </div>
            <i class="iconfont icondelete" @click="isUpdataAvatar=false"></i>
          </span>
        </transition>
        <transition name="mask">
          <span class="mask" v-if="isUpdataAvatar" @click="isUpdataAvatar=false"></span>
        </transition>
      </div>
      <div class="user-fav-fan">
        <div @click="$router.push('/attention')">
          <span>{{userInfo.attention ? userInfo.attention.length : 0}}</span>
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
      <li @click="$router.replace('/novel')">
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
import { mapState } from "vuex";
import { MessageBox,Toast } from "mint-ui";
import { reqUpdataAvatar } from "../../api";
import {UPDATA_AVATAR} from "../../store/mutations_types";
  export default {
    data() {
      return {
        isUpdataAvatar:false,
        avatar:''
      }
    },
    methods: {
      //退出登录
      logout(){
        MessageBox.confirm("确定退出?").then(()=>{
          this.$store.dispatch('logOut')
          this.$router.replace('/login')
        })
      },
      //更新头像
      async updateAvatar(){
        if(this.avatar && /^http/.test(this.avatar)){
          const _id = this.userInfo._id
          const avatar1 = this.avatar
          let result = await reqUpdataAvatar(_id,avatar1)
          const {status,avatar} = result
          if(status === 0){
            this.$store.commit(UPDATA_AVATAR,this.avatar)
            this.isUpdataAvatar = false
          }
          this.avatar = ''
        }else{
          Toast('输入格式错误，请重新输入')
        }
      }
    },
    computed: {
      ...mapState({
        userInfo: state => state.user.userInfo
      })
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.profile
  background #f5f3f3
  height 800px
  width 100%
  overflow hidden
  &.active
    height 100%
  .personal
    width 100%
    height 180px
    .user
      height 120px
      width 100%
      background: linear-gradient(to top,white, rgba(231,179,179,0.5)); 
      line-height 120px
      position relative


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
      .avatar
        background white
        width 90% 
        height 100%
        display flex
        flex-direction column
        justify-content center
        align-items center
        position absolute
        z-index 3
        left 0
        right 0
        margin 60% auto
        border-radius 10px
        .icondelete
          position absolute
          right 8px
          bottom 35%
        span 
          width 100%
          line-height 32px
          font-size 18px
          text-align center
        input
          width 90%
          height 22%
          font-size 16px
          border 1px solid #719293
          outline none
          padding 0 5px
          border-radius 5px
        .btn
          display flex
          flex-direction row
          justify-content space-around
          width 100%
          button
            width 20%
            height 90%
            border-radius 10px
            background  #468c77
            font-size 16px
        &.update-enter-active,&.update-leave-active
          transition all .5s
        &.update-enter,&.update-leave-to
          opacity 0
      .mask 
        position relative
        z-index 2
        display block
        width 100%
        height 100vh
        background rgba(68,67,67,0.7)
        &.mask-enter-active,&.mask-leave-active
          transition all .5s
        &.mask-enter,&.mask-leave-to
          opacity 0
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
          line-height 12px
  .li1
    height 81px
    margin-top 10px
    background white
    li 
      height 40px 
      width 100%
      display flex
      justify-content start
      i   
        width 10%
        height 41px
        text-align center
        line-height 41px
        font-size 16px
      span
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
