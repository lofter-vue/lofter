<template>
  <div id="mostNewContainer">
    
    <!-- 最新的内容列表 -->
    <ul class="listContent">

      <li class="listItem" v-for="(item, index) in newList1" :key="index">
        <img :src="item.image" alt="">
        <p class="listWord">{{item.words}}</p>
        <div class="like">
          <i class="iconfont icon-iconset0220"></i>
          <span>{{item.like_count}}</span>
        </div>
      </li>
      
    </ul>

    <ul class="listContent">

      <li class="listItem" v-for="(item, index) in newList2" :key="index">
        <img :src="item.image" alt="">
        <p class="listWord">{{item.words}}</p>
        <div class="like">
          <i class="iconfont icon-iconset0220"></i>
          <span>{{item.like_count}}</span>
        </div>
      </li>
      
    </ul>

  </div>
</template>

<script type="text/ecmascript-6">
  import {} from 'mint-ui'

  export default {
    data() {
      return {
        newList1: [
          {
            "image": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1413548788,1744254600&fm=173&app=25&f=JPEG?w=500&h=599&s=E4D0539C404272EC069055C2030030B1",
            "words": "去年的书",
            "like_count": ""
          },
          {
            "image": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=831726720,427253726&fm=173&app=25&f=JPEG?w=500&h=313&s=26C4925046707798C41155420100E0F0",
            "words": "课堂作业（题西林壁） 瞎画😂",
            "like_count": ""
          },
          {
            "image": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=662606851,1158010775&fm=173&app=25&f=JPEG?w=500&h=344&s=1111E0334D927FD008B9D9CA0300E020",
            "words": "還不錯",
            "like_count": ""
          },
          {
            "image": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3505606313,3362879372&fm=173&app=25&f=JPEG?w=500&h=666&s=01B4E37DCB62E35D4A198C4D0300E070",
            "words": "一点美少女",
            "like_count": "1人喜欢"
          },
          {
            "image": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3413907951,1976382029&fm=173&app=25&f=JPEG?w=500&h=550&s=E920F25DC90F5E5F10DDB45B01001070",
            "words": "课堂插画家",
            "like_count": "1人喜欢"
          },
          {
            "image": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2723073995,1818032604&fm=173&app=25&f=JPEG?w=500&h=500&s=D2B78A655A26C34F4EAC78820300E080",
            "words": "",
            "like_count": "1人喜欢"
          }
        ],
        newList2: [
          {
            "image": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=841799607,3903872901&fm=173&app=25&f=JPEG?w=500&h=408&s=EE9962894C0276C4128143B503005027",
            "words": "我书上唯一的涂鸦在苏联。。难怪我苏联一考就炸。。超爱日和坊小姐姐",
            "like_count": ""
          },
          {
            "image": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4086957037,3066710555&fm=173&app=25&f=JPEG?w=500&h=666&s=5D0AA355557BE1CC5809D5570300C071",
            "words": "天知道我多不想学习",
            "like_count": ""
          },
          {
            "image": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1146862788,623046384&fm=173&app=25&f=JPEG?w=500&h=272&s=E940CD18031841C80AF5C5480300E0B1",
            "words": "不说了，太难了",
            "like_count": ""
          },
          {
            "image": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3671391844,3280200815&fm=173&app=25&f=JPEG?w=500&h=335&s=EF93558D5A101AD8DE0015230300E075",
            "words": "就、高三课本空白处的野猪",
            "like_count": "1人喜欢"
          },
          {
            "image": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3569879280,493902859&fm=173&app=25&f=JPEG?w=500&h=322&s=D92BA3550808404D06B1C56303007031",
            "words": "已经过了用课本的年纪了，所以涂的不是课本，是衬衫标签。当时感觉这个衬衫标签的质感特好，所以就把标签改成了书签。过程感觉还挺好玩的。没收广告费，所以意思意思打个马。",
            "like_count": "1人喜欢"
          },
          {
            "image": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=232453950,1002242351&fm=26&gp=0.jpg",
            "words": "怎么这么厉害呀",
            "like_count": "1人喜欢"
          }
        ]
      }
    },

    methods: {
      
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #mostNewContainer
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
