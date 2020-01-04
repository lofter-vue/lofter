<template>
  <div class="wrapper">
    <div v-if="newList.length>0">
      <header class="header"><span class="iconfont icon-zuojiantou" @click="$router.back()"></span>{{searchName}}</header>
      <div class="userNum">共搜索到{{newList.length}}个用户</div>
      <ul>
        <li v-for="(item,index) in newList" :key="index">
          <div class="listLeft" alt="logo">
          <span>
            <img :src="item.avatar">
            <div class="userInfo">
              <span class="name">{{item.name}}</span>
              <span class="info">{{item.article[0].content}}</span>
            </div>
          </span>
        </div>
        </li>
      </ul>
    </div>
    <div v-else class="failed">
      <header class="header"><span class="iconfont icon-zuojiantou" @click="$router.back()"></span>{{searchName}}</header>
      <div class="container">
        <span class="iconfont icon-gantanhao"></span>
        <span class="title">未搜到相关博客</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
    data(){
      return{        
        searchName:''
      }
    },
    mounted(){
      this.searchName = this.$route.path.split('/')[this.$route.path.split('/').length-1]
    },
    
    computed: {
      ...mapState({
        users:state=>state.user.myAttention
      }),
      newList(){
        let arr = this.users.filter((item)=>{
          console.log(this.searchName,item.name.includes(this.searchName))
          return item.name.includes(this.searchName)   
        })
        return arr
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.wrapper
  .header
    padding 2% 6%
    font-size 20px
    line-height 26px
    text-align center
    .icon-zuojiantou
      font-size 20px
      float left
      font-weight bold
  .userNum
    height 20px
    width 100%
    background-color rgba(0,0,0,.1)
  .listLeft
    padding 2% 6%
    border-bottom 1px solid #eeeeee
    margin-top 5px
    width 100%
    height 100%
    box-sizing border-box
    span 
      width 100%
      height 100%
      display flex
      justify-content start
      align-items center
      img 
        border none
        width 50px
        height 70px
        padding 10px 0 
        box-sizing border-box
        border-radius 50%
      .userInfo
        margin-left 10%
        .name
          font-size 18px
          font-weight bold
        .info
          display block
          width 90%
          font-size 13px
          margin-top 8px
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
  .failed
    position relative
    .container
      position absolute
      display flex 
      flex-direction column
      top 100px
      left 50%
      transform translateX(-50%)
      .icon-gantanhao
        font-size 150px
        color rgba(100,100,100,.2)
      .title
        font-size 12px
        text-align center
        color rgba(100,100,100,.8)
</style>
