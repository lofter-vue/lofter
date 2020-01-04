<template>
  <div class='UserLogin'>
    <div class="header">
      <span @click="$router.replace('/login')"><i class='iconfont iconzuobian'></i></span>
      <span class='loginTitle'>注册LOFTER</span>
    </div>
    <div class="content">
      <!-- 注册用户名 -->
      <div class='username'>
        <input 
        type="text" 
        autocomplete="off"
        placeholder="请输入用户名" 
        v-model="username"
        name="name"
        v-validate="'required'">
        <i class="iconfont icondelete usernameI" v-show="username.length > 0" @click="username=''"></i>
        <span style="color: red;font-size:18px;margin-bottom:20px" v-show="errors.has('name')">{{ errors.first('name') }}</span>
      </div>

      <!-- 注册密码 -->
      <div class='pwd'>
        <input 
        type="password" 
        placeholder="请输入密码" 
        v-model="pwd"
        name="pwd"
        v-validate="'required'"
        />
        <i class="iconfont icondelete pwdI" v-show="pwd.length >0" @click="pwd=''"></i>
        <span style="color: red;font-size:18px;margin-bottom:20px" v-show="errors.has('pwd')">{{ errors.first('pwd') }}</span>
      </div>

      <!-- 注册重复密码 -->
      <div class='repwd'>
        <input 
        type="password" 
        placeholder="请确认密码" 
        v-model="repwd"
        name="repwd"
        v-validate="'required'"
        />
        <i class="iconfont icondelete repwdI" v-show="repwd.length >0" @click="repwd=''"></i>
        <span style="color: red;font-size:18px;" v-show="errors.has('repwd')">{{ errors.first('repwd') }}</span>
      </div>
    </div>
    <button :class="{active:pwd.length > 0 && username.length > 0 && repwd.length > 0}" @click="register">注册</button>
  </div>
</template>

<script type="text/ecmascript-6">
import { reqRegister,reqLogin } from "../../api";
import { Toast } from "mint-ui";
  export default {
    data() {
      return {
        username:'',
        pwd:'',
        repwd:''
      }
    },
    methods: {
      async register(){
        let names = ['username','pwd','repwd']
        const result = await this.$validator.validateAll(names);
        if(result){
          if(this.pwd.length < 6){
            Toast('密码不能少于6位')
          }else if(this.pwd !== this.repwd){
            Toast('两次输入密码不一致')
          }else{
            let {username,pwd} = this
            let request = await reqRegister(this.username,this.pwd)
            const {status,data,msg} = request
            if(status === 0){
              let req = await reqLogin(username,pwd)
              console.log(req)
              const {status,data,msg} = req
              if(status === 0){
                this.$store.dispatch('saveUser',data)
                setTimeout(() => {
                  this.$store.dispatch('saveMyAttention')
                }, 300);
                this.$router.replace('/profile')
              }
            }
            else if(status === 1){
              Toast('此用户已存在，请重新注册')
              this.username=''
              this.pwd=''
              this.repwd=''
            }
          }
        }
      }
    }
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
    .username
      position relative
      width 100%
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
    .pwd
      position relative
      width 100%
      input
        width 100%
        margin-bottom 10px
        height 40px
        outline none
        border-bottom 1px solid #e5e0e0
        background transparent
        font-size 20px
        padding 0 4px
      .pwdI
        position absolute
        top 14px
        right 0px
        color #6d6b6b
    .repwd
      position relative
      width 100%
      input
        width 100%
        margin-bottom 10px
        height 40px
        outline none
        border-bottom 1px solid #e5e0e0
        background transparent
        font-size 20px
        padding 0 4px
      .repwdI
        position absolute
        top 14px
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
    text-align center
    line-height 60px
    font-size 18px
    color black
    &.active
      background #719293
</style>
