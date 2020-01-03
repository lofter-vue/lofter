<template>
  <div>
    <div class="swiperContainer">
      <div ref='sc1' class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../../static/xiaoshuo/1.jpeg">
          </div>
          <div class="swiper-slide">
            <img src="../../../static/xiaoshuo/2.jpeg">
          </div>
          <div class="swiper-slide">
            <img src="../../../static/xiaoshuo/3.jpeg">
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div> 
    <div class="bookrackContainer">
      <div class="text">还没有加入书架的书籍哦~</div>
      <div class="bookrack">书架 ></div>
    </div>
    <div class="books">
      <div class="recommendContainer">
        <div class="title">
          <span>重磅推荐</span>
          <div class="more">更多</div>
        </div>
        <div class="recommend">
          <div class="recommendItem">
            <img src="http://img-tailor.11222.cn/bcv/big/1164917954550.jpg" alt="">
            <p class="bookName">豪门最强赘婿</p>
            <p class="author_name">天骄</p>
          </div>
          <div class="recommendItem">
            <img src="http://img-tailor.11222.cn/bcv/big/1180807411956.jpg" alt="">
            <p class="bookName">众圣之门</p>
            <p class="author_name">虾米XL</p>
          </div>
          <div class="recommendItem">
            <img src="http://img-tailor.11222.cn/bcv/big/1168967843619.jpg" alt="">
            <p class="bookName">透视小神医</p>
            <p class="author_name">亦凡</p>
          </div>
        </div>
        <ul class='bookList'>
          <li class="bookItem" v-for="(item,index) in content" :key="index">
            <img :src="item.book_cover" alt="">
            <div class="bookInfo">
              <span class="bookName">{{item.bookname}}</span>
              <p class="authorName">{{item.author_name}}</p>
              <p class="content">{{item.book_info}}</p>
              <div class="probably">
                <div>{{item.stat_name}}</div>
                <div>{{item.class_name}}</div>
                <div>{{(item.size)/10000}}万字</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import {reqNovelInfo} from '../../../api/index'
  export default {
    data () {
      return {
        //图书数组
        content:[]
      }
    },
    async mounted() {
      new Swiper(this.$refs.sc1,{
        loop:true, // 循环模式选项
        pagination:{// 如果需要分页器
          el:'.swiper-pagination'
        }
      }),
      this.result = await reqNovelInfo()
      this.content = this.result.data
      console.log(this.content)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  div
    .swiper-container
      margin-top 5px 
      width 100%
      position relative
      .swiper-wrapper
        width 100%
        height 200px
        .swiper-slide
          width 100%
          height 100%
          display flex
          flex-wrap wrap
          img 
            width 100%
            height 100%
    .swiper-pagination
      position absolute
      top 300px
      left 10px
  .bookrackContainer
    width 100%
    height 50px
    border-bottom 1px solid #ECECEC
    .text
      font-size 16px
      color rgba(0,0,0,.5)
      margin-left 10px
      line-height 50px
      float left
    .bookrack
      font-size 14px
      width 60px 
      height 30px
      margin 12px 30px 0 0 
      background #FFCB33
      float right 
      line-height 30px
      text-align center
      border-radius 10px
  .books
    width 100%
    margin-top 5px
    .recommendContainer
      width 100%
      .title
        font-size 24px
        margin-left 10px
        margin-bottom 10px
        
        .more
          font-size 14px
          margin-right 15px
          color #989898
          float right 
          width 60px
          height 24px
          text-align center
          line-height 25px
          border 1px solid #989898
          border-radius 10px
      .recommend
        width 100%
        display flex
        justify-content space-around
        text-align center
        .recommendItem
          width 27%
          flex-direction column
          img   
            width 100%
            border-radius 3px
          .bookName 
            font-size 16px
            line-height 20px
          .author_name
            font-size 12px
            color #989898
            line-height 20px
      .bookList
        padding 10px
        .bookItem
          height 160px
          width 100%
          display flex
          img 
            width 30%
            height 150px
            margin 5px 10px 0
            border-radius 5px
          .bookInfo
            padding 10px 
            .bookName
              font-size 18px
              line-height 36px
            .authorName
              font-size 14px
              line-height 28px
              color #989898
            .content
              font-size 14px
              line-height 20px
              color #989898
              display -webkit-box
              -webkit-box-orient vertical
              -webkit-line-clamp 2
              overflow hidden
            .probably
              width  220px
              height 40px
              display flex
              flex-wrap nowrap
              div
                height 20px
                padding 1px
                margin 5px 0
                line-height 20px
                margin-left 5px
                background #989898
                border-radius 5px
                font-size 12px
                margin-top 10px


          
</style>
