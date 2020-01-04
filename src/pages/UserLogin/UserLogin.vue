<template>
  <div class='UserLogin'>
    <div class="header">
      <span @click="$router.replace('/login')"><i class='iconfont iconzuobian'></i></span>
      <span class='loginTitle'>登录LOFTER</span>
    </div>
    <div class="content">
      <!-- 登陆用户名 -->
      <input 
      type="tel"
      autocomplete="off"
      placeholder="用户名"
      v-model="username"
      name="name"
      v-validate="'required'">
      <i class="iconfont icondelete usernameI" v-show="username.length > 0" @click="username=''"></i>
      <span style="color: red;font-size:18px;margin-bottom:20px" v-show="errors.has('name')">{{ errors.first('name') }}</span>
      
      <!-- 登录密码 -->
      <input 
      type="password" 
      placeholder="请输入密码" 
      v-model="pwd"
      maxlength="8"
      name="pwd"
      v-validate="'required'"
      />
      <i class="iconfont icondelete pwdI" v-show="pwd.length >0" @click="pwd=''"></i>
      <span style="color: red;font-size:18px;" v-show="errors.has('pwd')">{{ errors.first('pwd') }}</span>
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
        let names = ['name','pwd']
        const result = await this.$validator.validateAll(names);
        if(result){
          let request = await reqLogin(this.username,this.pwd)
          const {status,data} = request
          if(status === 0){
            //登陆成功跳转到我的
            this.$router.replace('/profile')
            //将user保存到vuex中
            this.$store.dispatch('saveUser',data)
            setTimeout(() => {
              this.$store.dispatch('saveMyAttention')
            }, 300);
          }else{
            Toast('用户名或密码错误，请重新输入')
            this.username = ''
            this.pwd =''
        }
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
      width 100%
      margin-bottom 10px
      height 40px
      outline none
      border-bottom 1px solid #e5e0e0
      background transparent
      font-size 20px
      padding 0 4px
    .usernameI
      position absolute
      top 14px
      right 0px
      color #6d6b6b
    .pwdI
      position absolute
      top 65px
      right 0px
      color #6d6b6b
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
