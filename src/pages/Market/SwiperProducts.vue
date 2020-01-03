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
    <ProductsList :details="details.zbmc"></ProductsList>
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
Vue.component(Popup.name, Popup);
  export default {
    data() {
      return {
        shareShow:false,
        details:{
                  "zdzb":[
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
                  "zbmc":[
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

