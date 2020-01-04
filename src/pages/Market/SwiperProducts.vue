<template id="top">
  <div class="swiperProductsContainer" >
    <div class="swiperProductsHeader">
      <span class="iconfont icon-fanhui1" @click="$router.replace('/market')"></span>
      <h1>图书</h1>
      <span class="iconfont icon-arrow-" @click="changeShare"></span>
    </div>
    <div class="swiperImage">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578029657195&di=ccd25a7f2fa9c3ab306658c5ec822ea5&imgtype=0&src=http%3A%2F%2Fxqimg.imedao.com%2F16e9338c9c8d1e13feb6e690.jpeg" 
      alt="">
    </div>
    <ProductsList :details="details.productsInfo"></ProductsList>
    <ul class="icon-fixed">
      <li @click="$router.replace('/Market')"><span >市集<br/>首页</span></li>
      <li><span class="iconfont icon-gouwuche"></span></li>
      <li><span class="iconfont icon-icondd1"></span></li>
      <li><a href="#top"><div class="iconfont icon-zhiding1"></div></a></li>
    </ul>
    <ShareContainer :shareShow="shareShow" :changeShare="changeShare"/>
  </div>
  
</template>

<script type="text/ecmascript-6">
import ProductsList from "../../components/ProductsList/ProductsList"
import ShareContainer from '../../components/shareContainer'
import { Popup } from 'mint-ui';
import Vue from "vue"
import {reqMarketProducts} from "../../api/index.js"
Vue.component(Popup.name, Popup);
  export default {
    // async beforeCreate() {
    //   let result = await reqMarketProducts()
    //   this.swiperInfo = result.data.swiperHeader.swiperInfo
    //   console.log(result)
    // },
    data() {
      return {
        shareShow:false,
        swiperInfo :[],

        details:{
          "productsInfo":[
          {
            "imgUrl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578029657195&di=ccd25a7f2fa9c3ab306658c5ec822ea5&imgtype=0&src=http%3A%2F%2Fxqimg.imedao.com%2F16e9338c9c8d1e13feb6e690.jpeg",
            "title":"一看就停不下来的中国史",
            "oldPrice":67.4,
            "newPrice":46.88
          },
          {
            "imgUrl":"https://img11.360buyimg.com/n1/s200x200_jfs/t26623/338/419718625/245064/7ef5b21b/5b9106caNc9b79061.jpg",
            "title":"贫穷的本质",
            "oldPrice":52.6,
            "newPrice":34.8
          },
          {
            "imgUrl":"https://img13.360buyimg.com/n1/s200x200_jfs/t1/5562/31/13613/1115699/5bd9058aE99b2f798/1d371398b4031846.jpg",
            "title":"环球国家地理百科全书(套装共十册)",
            "oldPrice":264.5,
            "newPrice":174.10
          },
          {
            "imgUrl":"https://img10.360buyimg.com/n1/s200x200_jfs/t10162/279/1390942739/246693/50c56f9d/59e02214N37418280.jpg",
            "title":"余华作品:活着",
            "oldPrice":38.8,
            "newPrice":28
          },
          {
            "imgUrl":"https://img11.360buyimg.com/n1/s200x200_jfs/t1/27289/23/7777/351831/5c6e18b2Ee7c48be6/77f9c8539ab40c2a.jpg",
            "title":"局外人",
            "oldPrice":46.7,
            "newPrice":23.4
          },
          {
            "imgUrl":"https://img12.360buyimg.com/n1/s200x200_jfs/t1/30329/18/3291/139128/5c737b7cE33245b89/b3ddced06184057d.jpg",
            "title":"深度沟通",
            "oldPrice":47.4,
            "newPrice":39
          },
          {
            "imgUrl":"https://img10.360buyimg.com/n1/s200x200_jfs/t1/86551/16/4453/510848/5de74f49E62b4aae0/f0a4ea7981c08841.jpg",
            "title":"马尔克斯:百年孤独",
            "oldPrice":36.8,
            "newPrice":34.8
          },
          {
            "imgUrl":"https://img13.360buyimg.com/n1/s200x200_jfs/t15667/160/563569281/151713/d4fab374/5a373299N4978d724.jpg",
            "title":"原则",
            "oldPrice":57,
            "newPrice":47.6
          },
          {
            "imgUrl":"https://img10.360buyimg.com/n1/s200x200_jfs/t1/94308/37/4479/405085/5de75992E339ed0e3/02a83c69b7a1b856.jpg",
            "title":"东野圭吾:解忧杂货店",
            "oldPrice":29.8,
            "newPrice":23.4
          },
          {
            "imgUrl":"https://img13.360buyimg.com/n1/s200x200_jfs/t29623/161/163538582/162899/4dded798/5bea3dceN10e51b04.jpg",
            "title":"漫长的告别",
            "oldPrice":35.6,
            "newPrice":29.9
          }
      ]
        }
     
     }
    },
    methods: {
      // share(){
      //   this.popupVisible = !this.popupVisible
      // },
      changeShare(){
        this.shareShow = !this.shareShow
      }
    },
    components: {
      ProductsList,
      ShareContainer
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.swiperProductsContainer
  box-sizing border-box
  .swiperProductsHeader
    position fixed !important
    left 0 
    top 0
    width 100%
    box-sizing border-box
    z-index 99
    background-color #fff
    h1
      font-size 20px
    span
    .icon-fanhui
      font-size 20px
      color #000
    padding 10px
    display flex
    align-items center
    flex-direction row
    justify-content space-between
    bottom-border-1px(#bbb)
  .swiperImage
    margin-top 40px
    padding 10px
    width 100%
    height 150px 
    box-sizing border-box
    img 
      width 100%
      height 100%
      border-radius 5px
    h1
      font-size 16px
  .icon-fixed
    position fixed
    right 15px
    bottom 15px
    li
      width 50px
      height 50px
      border-radius 25px
      border 1px solid #ccc
      text-align center
      background-color #fff
      margin-bottom 10px
      display flex
      flex-direction column
      justify-content center
      .iconfont
        font-size 20px
</style>

