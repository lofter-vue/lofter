<template>
  <div class='UserLogin'>
    <div class="header">
      <span @click="$router.replace('/login')"><i class='iconfont iconzuobian'></i></span>
      <span class='loginTitle'>登录LOFTER</span>
    </div>
    <div class="content">
      <input type="text" placeholder="请输入用户名" v-model="username">
      <input type="password" placeholder="请输入密码" v-model="pwd">
    </div>
    <button :class="{active:pwd.length >0 && username.length > 0}" @click="login">登录</button>
  </div>
</template>

<script type="text/ecmascript-6">
import { reqLogin } from "../../api";
import { Toast } from "mint-ui";
  export default {
    data() {
      return {
        username:'',
        pwd:''
      }
    },
    methods: {
      async login(){
        let result = await reqLogin(this.username,this.pwd)
        if(result.status === 0){
          this.$router.replace('/profile')
        }else{
          Toast('用户名或密码错误，请重新输入')
          this.username = ''
          this.pwd =''
        }
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.UserLogin
  height 100%
  width 100%
  position relative
  background: linear-gradient(to top,white, #366263);
  .header
    // width 100%
    height 60px
    // background #366263
    line-height 60px
    font-size 18px
    position relative
    padding-left 10px
    span 
      i 
        font-size 20px
    .loginTitle
      position absolute
      left 50% 
      transform translateX(-50%)
  .content
    display flex
    flex-direction column
    width 80%
    height 100px
    position absolute
    left 0
    right 0
    margin 120px auto 0
    input
      margin-bottom 10px
      height 40px
      outline none
      border-bottom 1px solid #e5e0e0
      background transparent
      font-size 20px
    input::-webkit-input-placeholder 
      color #315e42
  button 
    width 100%
    height 60px
    position absolute
    bottom 0
    outline none 
    border none 
    background #bfbfc1
    &.active
      background #719293
</style>
