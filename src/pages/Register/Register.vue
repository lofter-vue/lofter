<template>
  <div class='UserLogin'>
    <div class="header">
      <span @click="$router.replace('/login')"><i class='iconfont iconzuobian'></i></span>
      <span class='loginTitle'>注册LOFTER</span>
    </div>
    <div class="content">
      <input type="text" placeholder="请输入用户名" v-model="username">
      <input type="text" placeholder="请输入密码" v-model="pwd">
      <input type="text" placeholder="请确认密码" v-model="repwd">
    </div>
    <button :class="{active:pwd.length > 0 && username.length > 0 && repwd.length > 0}">注册</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        username:'',
        pwd:'',
        repwd:''
      }
    },
    methods: {
      
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
    height 60px
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
