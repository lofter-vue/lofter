<template>
  <div class="myAttention">
    <div class='header'>
      <span class="left">
        <i class='iconfont iconzuobian'></i>
      </span>
      <span class="title">我的关注（15）</span>
    </div>
    <div class="search">
      <div class="search-wrapper">
        <i class="iconfont iconicon_sousuo"></i>
        <input type="text" placeholder="搜索：关注的博客">
      </div>
      <button>搜索</button>
    </div>
    <ul>
      <li>
        <div class="listLeft">
          <span>
            <img src="https://tvax3.sinaimg.cn/crop.0.0.624.624.180/9e5389bbly8g93bx8ug1tj20hc0hcq4l.jpg?KID=imgbed,tva&Expires=1577723185&ssig=3W2kSv5s6l">
            <div class="userInfo">
              <span class="name">一潮春池</span>
              <span class="info">寻月记</span>
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
  export default {
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
    background yellow
    li
      display block
      width 100%
      height 60px
      display flex
      justify-content space-between
      .listLeft
        width 50%
        height 100%
        background pink
        span 
          width 100%
          height 100%
          display flex
          justify-content space-around
          align-items center
          img 
            width 60px
            height 70px
            padding 10px 0
            box-sizing border-box
</style>
