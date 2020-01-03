<template id="top">
  <div id="marketContainer">
    <h1 class="marketHeader">乐乎市集</h1>
    <div class="swiper-container" >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in swiperImg" :key="index">
          <img :src="item" alt="" @click="$router.push('/swiperProducts')">
        </div>
        <!-- <div class="swiper-slide">
          <img src="../../common/images/01.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../common/images/01.png" alt="">
        </div> -->
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="marketNav">
      <NavMenu></NavMenu>
    </div>
    <div class="hotSell">
      <div class="left">
        <div class="li">
          <p>热销好物榜</p>
          <span>所有人买它</span>
        </div>
        <div style="width:50px;height:50px; overflow:hidden" class=" swiper1 li swiper-container-initialized swiper-container-vertical">
          <div style="width:50px;height:50px;" class="swiper-wrapper">
            <div style="width:50px;height:50px;" class="swiper-slide " >
              <img src="../../common/images/shiji/02.png" alt="">
            </div>
            <div style="width:50px;height:50px;" class="swiper-slide " >
              <img src="../../common/images/shiji/03.jpg" alt="">
            </div>
            <div style="width:50px;height:50px;" class="swiper-slide" >
              <img src="../../common/images/shiji/04.jpg" alt="">
            </div>
            <div style="width:50px;height:50px;" class="swiper-slide" >
              <img src="../../common/images/shiji/05.jpg" alt="">
            </div>
          </div>
        </div>
        
      </div>
      <div class="right">
        <div class="li">
          <p>每日上新榜</p>
          <span>新鲜更有趣</span>
        </div>
        <div style="width:50px;height:50px; overflow:hidden" class=" swiper1 li swiper-container-initialized swiper-container-vertical">
          <div class="swiper-wrapper">
            <!-- <div  class="swiper-slide " v-for="(item, index) in goodThings" :key="index">
              <img :src='item' >
            </div> -->
            <div style="width:50px;height:50px;" class="swiper-slide " >
              <img src="../../common/images/shiji/06.jpg" alt="">
            </div>
            <div style="width:50px;height:50px;" class="swiper-slide" >
              <img src="../../common/images/shiji/07.jpg" alt="">
            </div>
            <div style="width:50px;height:50px;" class="swiper-slide" >
              <img src="../../common/images/shiji/08.jpg" alt="">
            </div>
            <div style="width:50px;height:50px;" class="swiper-slide" >
              <img src="../../common/images/shiji/09.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hotList">
      <div class="left active">
        <p>热卖推荐</p>
        <span>本周销量TOP榜</span>
      </div>
      <div class="center">
        <p>人气榜单</p>
        <span>本周人气TOP榜</span>
      </div>
      <div class="right">
        <p>天天低价</p>
        <span>好物不贵</span>
      </div>
    </div>
    <!-- 热卖商品列表-->
    <div class="wrapper">
      <ul style="transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1); transition-duration: 300ms; transform: translate(0px, 0px) scale(1) translateZ(0px);">
        <li class="food-item border-1px" style="pointer-events: auto;" v-for="(item, index) in hotSell" :key="index">
            <div class="icon">
                <img :src="item.imgUrl">
            </div>
            <div class="content">
                <h2 class="name">{{item.title}}</h2> 
                <p class="desc">{{item.description}}</p>
                <div class="extra"><span class="count">{{item.discount}}</span>
                </div>
                <div class="price"><span class="now">￥{{item.newPrice}}</span>  <span class="old" style="text-decoration:line-through">￥{{item.oldPrice}}</span>
                </div>
                <span class="buying">立即抢购</span>
            </div>
        </li>
      </ul>
    </div>
    <div class="sellProduct" >
      <!-- 导航部分 -->
      <div ref="sellProduct">
        <ul>
          <li :class="{active:navIndex === index}" @click="selectActive(index)" v-for="(item,index) in sellProduct" :key="index">{{sellProduct[index]}}</li>
        </ul>
      </div>
      <!-- <div class="productsList">
        <div class="listItem" v-for="(item, index) in 6" :key="index">
          <div class="picture">
            <img src="../../common/images/01.png" alt="">
          </div> 
          <div class="description">
            <p class="itemTitle">魔道祖师动画-集福立牌</p>
            <p class="discounts" >满108减10</p>
            <p class="price"><span class="now">￥30</span>  <span class="old">￥49</span></p>
          </div>   
        </div>
      </div> -->
      <ProductsList :details="details.zbmc"></ProductsList>
    </div>
    <ul class="icon-fixed">
      <li>
        <span class="iconfont icon-jinbi"></span>
        <p>领币</p>
      </li>
      <li><span class="iconfont icon-gouwuche"></span></li>
      <li><span class="iconfont icon-icondd1"></span></li>
      <li><a href="#top"><div class="iconfont icon-zhiding1"></div></a></li>
    </ul>
    
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
import Swiper from "swiper"
import 'swiper/css/swiper.min.css'
import BScroll from 'better-scroll'
import ProductsList from "../../components/ProductsList/ProductsList"
import SwiperProducts from "../../pages/Market/SwiperProducts"
import NavMenu from './NavMenu/NavMenu'
  export default {
    data() {
      return {
        sellProduct:["镇店之宝","周边萌宠","笔墨纸砚","达人定制","潮酷3C","网红零食","更多好物"],
        isActive:false,
        navIndex:0,
        goodThings:["../../common/images/shiji/02.png","../../common/images/shiji/03.jpg","../../common/images/shiji/04.jpg","../../common/images/shiji/05.jpg"],
        newThings:["06.jpg","07.jpg","08.jpg","09.jpg"],
        swiperImg:[
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578029657195&di=ccd25a7f2fa9c3ab306658c5ec822ea5&imgtype=0&src=http%3A%2F%2Fxqimg.imedao.com%2F16e9338c9c8d1e13feb6e690.jpeg",
          "http://pic118.nipic.com/file/20161226/20419907_133043354000_2.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578029247586&di=bd21c90dc02d6def3d3b17a54ff0c51a&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Feee693fe89b8956e54bfde87343c244e5cf3eca6.jpg",
          "http://inews.gtimg.com/newsapp_bt/0/10704910654/1000.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578029392169&di=50b88630c6d9e8fad2081f2e7ac18d04&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F04%2F38%2F88%2F33584d1233367ec.jpg"
          ],
          hotSell:[
                    {
                      "title":"热卖款-乔巴小夜灯",
                      "description":"爆款必buy",
                      "imgUrl":"https://img12.360buyimg.com/n7/jfs/t1/22807/36/6320/151857/5c4fea71E39c00175/99b6de71c6e9c577.jpg",
                      "discount":"立减39.1",
                      "newPrice":32.8,
                      "oldPrice":79
                    },
                    {
                      "title":"紫色蕾丝钉珠连衣裙",
                      "description":"爆款必buy",
                      "imgUrl":"https://img14.360buyimg.com/n7/jfs/t1/104404/31/8041/117893/5e005368E1fa3b90b/6ca8aafadb03645d.jpg",
                      "discount":"立减39.1",
                      "newPrice":138,
                      "oldPrice":179
                    },
                    {
                      "title":"音乐水晶球",
                      "description":"爆款必buy",
                      "imgUrl":"https://img12.360buyimg.com/n7/jfs/t30289/119/459494220/209299/3a127c65/5bf37c02N2a82c08e.jpg",
                      "discount":"立减39.1",
                      "newPrice":139,
                      "oldPrice":180
                    },
                    {
                      "title":"招财猫摇手金色摆件",
                      "description":"爆款必buy",
                      "imgUrl":"https://img14.360buyimg.com/n7/jfs/t1/26687/5/2453/473795/5c1cb38cEb39bcd56/e66e3d0a1d41b8f4.jpg",
                      "discount":"立减39.1",
                      "newPrice":79,
                      "oldPrice":158
                    },
                    {
                      "title":"冬季连衣裙2019款",
                      "description":"爆款必buy",
                      "imgUrl":"https://img14.360buyimg.com/n7/jfs/t1/55435/36/16742/95337/5ddb7540E4727d762/6d77cfecd5d758c3.jpg",
                      "discount":"立减39.1",
                      "newPrice":79,
                      "oldPrice":158
                    },
                    {
                      "title":"HILADY针织连衣裙19款",
                      "description":"爆款必buy",
                      "imgUrl":"https://img11.360buyimg.com/n7/jfs/t1/108447/3/1460/111321/5dfdd0b6E3877fe68/3075d5c1c80cda19.jpg",
                      "discount":"立减39.1",
                      "newPrice":79,
                      "oldPrice":158
                    }
                ],
                details:{
                  zbmc:[
              {
                "title":"萌宠兔子迷你加湿器",
                "discount":"立减39.1",
                "oldPrice":"69",
                "newPrice":"39.9",
                "imgUrl":"https://img14.360buyimg.com/n7/jfs/t1/81430/32/4888/90531/5d311c21Eac8c9a53/66bcbbcd1943f3ea.jpg"
              },
              {
                "title":"星空投影灯",
                "discount":"立减39.1",
                "oldPrice":"69",
                "newPrice":"39.9",
                "imgUrl":"https://img13.360buyimg.com/n7/jfs/t1/93742/8/7881/205763/5e00270eE7ec72c14/e02c4c6639555dab.jpg"
              },
              {
                "title":"可爱卡通粉色萌宠发泄小猪",
                "discount":"立减39.1",
                "oldPrice":"69",
                "newPrice":"39.9",
                "imgUrl":"https://img12.360buyimg.com/n7/jfs/t1/88348/35/53/542618/5da6835bE99bf976e/9f26e537389db700.jpg"
              },
              {
                "title":"小熊按摩仪",
                "discount":"立减39.1",
                "oldPrice":"369",
                "newPrice":"238",
                "imgUrl":"https://img11.360buyimg.com/n7/jfs/t1/106085/24/9292/312020/5e0d467fEd6503520/ba33d1ae8b19ed06.jpg"
              },
              {
                "title":"卖萌盒子小猫摆件",
                "discount":"立减39.1",
                "oldPrice":"39",
                "newPrice":"28",
                "imgUrl":"https://img14.360buyimg.com/n7/jfs/t2887/285/3276044240/173902/77e01a9e/57873108Nc69d273f.jpg"
              },
              {
                "title":"毛绒智能狗仿真萌宠",
                "discount":"立减39.1",
                "oldPrice":"398",
                "newPrice":"318",
                "imgUrl":"https://img13.360buyimg.com/n7/jfs/t1/41734/35/11143/96583/5d48de13Ecc6a8687/866ccb4f6ab2f1bf.jpg"
              },
              {
                "title":"北极熊玩偶公仔",
                "discount":"立减39.1",
                "oldPrice":"69",
                "newPrice":"39.9",
                "imgUrl":"https://img13.360buyimg.com/n7/jfs/t15637/35/2513964727/149587/51c9981a/5aaf8136N2d59942c.jpg"
              },
              {
                "title":"仓鼠玩偶公仔布娃娃",
                "discount":"立减39.1",
                "oldPrice":"89",
                "newPrice":"68",
                "imgUrl":"https://img10.360buyimg.com/n7/jfs/t1/90570/35/2811/160903/5dd65bbeE4e45164e/c18d0ef22ebce616.jpg"
              },
              {
                "title":"毛绒玩具享福熊",
                "discount":"立减39.1",
                "oldPrice":"128",
                "newPrice":"89",
                "imgUrl":"https://img11.360buyimg.com/n7/jfs/t1/1924/18/4573/167768/5b9cdb6fE57d9556e/3a95b264d82a0f24.jpg"
              },
              {
                "title":"元旦礼物-小浣熊布艺娃娃抱枕",
                "discount":"立减39.1",
                "oldPrice":"88",
                "newPrice":"65",
                "imgUrl":"https://img10.360buyimg.com/n7/jfs/t1/50280/10/15331/267850/5dc8289cE6b7c87ab/b82e8675788f144e.jpg"
              }
      
    ],
        }
      }
    },
    methods: {
      selectActive(index){
        this.navIndex = index
      }
    },
    mounted() {
      new BScroll(this.$refs.sellProduct,{
        scrollX:true,
        click:true
      })
      new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      autoplay:true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        },
      })
      new Swiper('.swiper1', {
      direction: 'vertical',
      loop: true, // 循环模式选项
      autoplay:true,
      // 如果需要分页器
      })
    },
    components: {
      ProductsList,
       NavMenu
    }
  }
  
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
#marketContainer
  width 100%
  overflow hidden
  .marketHeader
    position fixed!important
    width 100%
    top 0
    left 0
    bottom-border-1px(#bbb)
    padding 10px 0
    font-size 20px
    text-align center
    z-index 99
    background-color #fff
  .swiper-container
    position relative
    width 100%
    height 150px
    margin-top 40px
    .swiper-pagination
      position absolute
      bottom 15px
      left 50%
      margin-left -50%
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        padding 10px
        width 100%
        height 100%
        box-sizing border-box
        img
          width 100%
          height 100%
          border-radius 10px
  .marketNav
    padding 10px 
    width 100%
    // height 150px
    box-sizing border-box
    //margin-top 15px
  .hotSell
    width 100%
    height 80px
    box-sizing border-box
    display flex
    flex-direction row
    justify-content space-around
    align-items center
    padding 10px
    .left
      display flex
      flex-direction row
      margin-right 10px
      .li
        margin-right 10px
        overflow hidden
        p
          font-size 16px
          margin-bottom 10px
        span
          font-size 12px
          color #ccc
    .right  
      display flex
      flex-direction row
      div
        margin-right 10px
        p
          font-size 16px
          margin-bottom 10px
        span
          font-size 12px
          color #ccc
    img 
      width 50px
      height 50px
      border-radius 5px
  .hotList
    display flex
    flex-direction row
    padding 10px
    justify-content space-around
    
    .active
      color red
    div
      position relative
      display flex
      flex-direction row
      justify-content space-around
      &:after
        position absolute
        left 125%
        content ""
        width 1px
        height 30px
        background-color #ccc
      &:last-child
        &:after
          content ""
          width 0

    .left
      display flex
      flex-direction column
      text-align center
      p
        margin-bottom 8px
        font-size 16px
    .center
      display flex
      flex-direction column
      text-align center
      p
        margin-bottom 8px
        font-size 16px
    .right
      display flex
      flex-direction column
      text-align center
      p
        margin-bottom 8px
        font-size 16px
  .wrapper
    width 100%
    padding 10px
    box-sizing border-box
    ul
      li
        display flex
        align-items center
        width 100%
        height 130px
        bottom-border-1px(#ccc)       
        .icon
          width 30%
          img 
            width 90px
            height 90px
        .content
          width 70%
          position relative
          .name
            margin-bottom 10px
            font-size 16px
          .desc
            margin-bottom 10px
            font-size 14px
            color #ccc
          .extra
            margin-bottom 10px
            .count
              border 1px solid red
              padding 3px
              font-size 12px
              color red
          .price
            margin-bottom 10px
            font-size 14px
            .now 
              color red
            .old
              color #bbb
          .buying
            position absolute
            display inline-block
            right 10px 
            bottom 5px
            width 70px
            height 20px
            line-height 20px
            padding 3px
            text-align center
            border-radius 10PX
            font-size 14px
            background-color red
            color #fff   
  .sellProduct
    width 375px
    margin-bottom 80px
    ul
      display flex
      flex-wrap nowrap
      
      width 650px
      li
        padding 10px 0
        
        margin 10px
        margin-right 15px
        height 20px
        line-height 20px
        color #bbb
        font-size 16px
      .active 
        color #000
        border-bottom 2px solid #000
        font-size 18px
  .icon-fixed 
    position fixed 
    right 15px
    bottom 50px
    z-index 999
    li
      width 50px
      height 50px
      border-radius 25px
      box-shadow 1px 1px 3px #bbb
      text-align center
      background-color #fff
      margin-bottom 10px
      display flex
      flex-direction column
      justify-content center
      .iconfont
        font-size 20px
      &:first-child
        color white         
        background-color rgb(255,128,0)
                             
    // .productsList
    //   display flex
    //   flex-direction row
    //   flex-wrap wrap
    //   justify-content space-between
    //   padding 10px
    //   box-sizing border-box
    //   width 100%
      
    //   .listItem
    //     border 1px solid #bbbbbb
    //     border-radius 5px
    //     width 48%
    //     margin-bottom 10px
    //     .picture
    //       width 100%
    //       // height 120px
    //       img 
    //         width 100%
    //         height 100%
    //     .description
    //       line-height 20px
    //       padding 10px
    //     .itemTitle
    //       font-size 14px
    //     .discounts
    //       border 1px solid red
    //       display inline-block
    //       color red
    //       padding 3px
    //       font-size 12px
    //     .price
    //       font-size 14px
    //       .now 
    //         color red
    //       .old 
    //         color #bbbbbb
    //         text-decoration line-through
</style>
