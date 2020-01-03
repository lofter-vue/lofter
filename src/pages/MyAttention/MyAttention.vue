<template>
  <div class="myAttention" v-if="userAttentions.length>0">
    <div class='header'>
      <span class="left" @click="$router.back()">
        <i class='iconfont iconzuobian'></i>
      </span>
      <span class="title">我的关注（{{userAttentions.length}}）</span>
    </div>
    <div class="search">
      <div class="search-wrapper">
        <i class="iconfont iconicon_sousuo"></i>
        <input type="text" placeholder="搜索：关注的博客">
      </div>
      <button>搜索</button>
    </div>
    <ul >
      <li v-for="(a,index) in userAttentions" :key='index'>
        <div class="listLeft" >
          <span>
            <img :src="a.avatar">
            <div class="userInfo">
              <span class="name">{{a.name}}</span>
              <span class="info">{{a.article[0].content}}</span>
            </div>
          </span>
        </div>
        <div class="listRight">
          <button>已关注</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from "vuex";
  import { reqAttentions } from "../../api";
  export default {
    computed: {
      ...mapState({
        userInfo:state => state.user.userInfo,
        userAttentions:state => state.user.myAttention
      })
    },
    // watch: {
    //   async userInfo(){
    //     //监视的值不能直接改
    //     let arr = JSON.parse(JSON.stringify(this.userInfo.attention))
    //     let _idList = arr.join(',')
    //     let result = await reqAttentions(_idList)
    //     if(result.status === 0){
    //       this.userAttentions = result.data
    //     }
    //   }
    // },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.myAttention
  width 100%
  height 100%
  .header
    width 100% 
    height 8%
    position relative
    border-bottom 1px solid #E2E2E2
    .left
      float left
      width 10%
      height 100%
      line-height 52px
      padding-left 4px
      position relative
      z-index 1
      i 
        font-size 24px
    .title
      text-align center
      height 100%
      line-height 50px
      font-size 18px
      position absolute
      left 0
      right 0
      margin 0 auto
  .search
    width 100%  
    height 8%
    display flex
    justify-content space-between
    align-items center
    padding 0 30px 0 20px
    box-sizing border-box
    border-bottom 1px solid #E2E2E2
    .search-wrapper 
      width 75%
      height 55%
      border 1px solid #E2E2E2
      border-radius 14px
      background rgba(226,226,226,0.3)
      display flex
      justify-content space-start
      align-items center
      i 
        width 14%
        height 100%
        text-align center
        line-height 25px
        font-size 18px
      input
        height 100%
        width 86%
        outline none
        background transparent
        font-size 14px
    button
      width 15% 
      height 60%
      outline none 
      border none 
      background transparent
      color #49c734
      font-size 16px
  ul
    width 100%
    li
      width 100%
      height 60px
      display flex
      justify-content space-between
      align-items center
      border-bottom 1px solid #E2E2E2
      padding 1% 0 
      .listLeft
        width 80%
        height 100%
        padding-left 6%
        box-sizing border-box
        span 
          width 100%
          height 100%
          display flex
          justify-content start
          align-items center
          img 
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
              overflow: hidden;
              text-overflow:ellipsis;
      .listRight
        width 18%
        height 100%
        position relative
        margin-right 10px
        button
          width 100%
          height 40%
          position absolute
          top 50%
          transform translateY(-50%)
          background #c7c4c4
          border none 
          outline  none
          border-radius 30px
</style>
