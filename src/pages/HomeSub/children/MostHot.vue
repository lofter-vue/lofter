<template>
  <div>

    <!-- 更新数据头 -->
    <div class="listTop">
      <span class="dataUpdate">数据更新于 2019-12-30 11:20</span>
      <div @click="isShowBox=!isShowBox" class="rank">
        <span>日榜</span>
        <i class="iconfont icon-arrow-bottom"></i>
      </div>
    </div>
    <div v-show="isShowBox" class="rankBox">
      <div class="triangle"></div>
      <li class="rankBoxItem">日榜
        <i class="iconfont icon-duigou"></i>
      </li>
      <li class="rankBoxItem">周榜</li>
      <li class="rankBoxItem">月榜</li>
      <li class="rankBoxItem">全部</li>
    </div>

    <div id="mostHotContainer">

      <!-- 最热的内容列表 -->
      <ul class="listContent">
        <li class="listItem" v-for="(item, index) in hotList1" :key="index">
          <img :src="item.image" alt="">
          <p class="listWord">{{item.words}}</p>
          <div class="like">
            <i class="iconfont icon-iconset0220"></i>
            <span>{{item.like_count}}</span>
          </div>
        </li>
      </ul>

      <ul class="listContent">
        <li class="listItem" v-for="(item, index) in hotList2" :key="index">
          <img :src="item.image" alt="">
          <p class="listWord">{{item.words}}</p>
          <div class="like">
            <i class="iconfont icon-iconset0220"></i>
            <span>{{item.like_count}}</span>
          </div>
        </li>
      </ul>

    </div>

  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
        isShowBox: false,
        hotList1: [
          {
            "image": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=408213827,2981215063&fm=26&gp=0.jpg",
            "words": "2019年你的课本上有（奇形怪状的）随手涂鸦吗？是不是只要一上课，你灵魂画手的那一面就会现身？添个花花草草是小case，为历史人物加个当代道具也是家常便饭",
            "like_count": "401人喜欢"
          },
          {
            "image": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=662289305,3480040139&fm=26&gp=0.jpg",
            "words": "【杜甫的本体是lo娘】还是那个同桌的力作！！！果然是文科毁灭者ww",
            "like_count": "103人喜欢"
          },
          {
            "image": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2898372932,1852427381&fm=26&gp=0.jpg",
            "words": "终于到我了吗",
            "like_count": "48人喜欢"
          },
          {
            "image": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=834291648,713749144&fm=26&gp=0.jpg",
            "words": "原图好像是网上找到的，为此我扒着语文书画了好几个晚上😂",
            "like_count": "23人喜欢"
          },
          {
            "image": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3656182343,3687409177&fm=26&gp=0.jpg",
            "words": "分别是寒寒和一个美漫风邵群哈哈哈哈哈",
            "like_count": "9人喜欢"
          },
          {
            "image": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=352116698,2310676180&fm=15&gp=0.jpg",
            "words": "倒不是画在课本上，而是在班主任慈祥的目光里卑微做画（书签上的图片还是那种动啊动的，不像朱一龙也没关系吧？？）",
            "like_count": "4人喜欢"
          },
          {
            "image": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1821140800,1247718880&fm=26&gp=0.jpg",
            "words": "“消融在属于你的浓雾之中……” 啊啦，今天杰叽小短漫大概还有一更～",
            "like_count": "3人喜欢"
          }
        ],
        hotList2: [
          {
            "image": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3688712967,2999685479&fm=26&gp=0.jpg",
            "words": "",
            "like_count": "232人喜欢"
          },
          {
            "image": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=246474069,2148073667&fm=26&gp=0.jpg",
            "words": "是美女",
            "like_count": "115人喜欢"
          },
          {
            "image": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2842905021,746242510&fm=26&gp=0.jpg",
            "words": "hold不住了",
            "like_count": "90人喜欢"
          },
          {
            "image": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2734650794,2437496872&fm=15&gp=0.jpg",
            "words": "课本就是我最好的灵感发源地",
            "like_count": "41人喜欢"
          },
          {
            "image": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3695196190,1460550945&fm=26&gp=0.jpg",
            "words": "为人民服务",
            "like_count": "21人喜欢"
          },
          {
            "image": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3891553146,2211613715&fm=26&gp=0.jpg",
            "words": "你来了鸣人",
            "like_count": "5人喜欢"
          },
          {
            "image": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1909806847,4080688307&fm=26&gp=0.jpg",
            "words": "多尼多尼乔巴,棉花糖棉花糖棉花糖棉花糖棉花糖棉花糖棉花糖棉花糖棉花糖棉花糖棉花糖棉花糖",
            "like_count": "3人喜欢"
          }
        ]
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'

  .listTop
    position relative
    width 100%
    height 50px
    display flex
    align-items center
    justify-content space-between
    .dataUpdate
      color #666666
    .rank
      background #ffffff
      height 24px
      line-height 24px
      padding 0 10px
      border-radius 12px
      span
        letter-spacing 3px
        color #333333
      i
        margin-left 3px
        color #333333
        font-size 12px
  .rankBox
    position absolute
    z-index 222
    width 36%
    right 0
    border-radius 5px
    background #ffffff
    .triangle
      position absolute
      top -20px
      right 20px
      border-top 10px solid transparent
      border-left 10px solid transparent
      border-right 10px solid transparent
      border-bottom 10px solid #ffffff
    .rankBoxItem
      width 92%
      margin 0 auto
      height 40px
      line-height 40px
      text-align center
      font-size 15px
      letter-spacing 2px
      bottom-border-1px(#e0e0e0)
      i
        position absolute
        color #A3C53C
        font-weight bold
        right 20px

  #mostHotContainer
    width 96%
    margin 0 auto
    display flex
    flex-direction row
    justify-content space-between
    .listContent
      width 49%
      display flex
      flex-direction column
      margin-top 5px
      .listItem
        width 100%
        background #ffffff
        border-radius 5px
        margin-bottom 5px
        overflow hidden
        img
          width 100%
        .listWord
          color #333333
          margin 10px 10px
          line-height 20px
          letter-spacing 0.2px
          display -webkit-box
          -webkit-box-orient vertical
          -webkit-line-clamp 2
          overflow hidden
        .like
          height 28px
          margin-left 10px
          line-height 15px
          i
            color #dddddd
            margin-right 10px
          span
            color #bbbbbb 
</style>
