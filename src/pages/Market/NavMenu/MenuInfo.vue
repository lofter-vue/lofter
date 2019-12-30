<template>
  <div class="menuInfoContainer">
    <div class="header">
      <div class="iconfont icon-zuojiantou" @click="$router.back('/market')"></div>
      <div class="title">乐乎市集</div>
      <div class="iconfont icon-fenxiang3"></div>
    </div>
    <div class="navBar">
      <ul ref="navUl">
        <li v-for="(item,index) in navBarList" :key="index" @click="changeIndex(index)" :class="{line: MenuIndex===index}">{{item}}</li>
      </ul>
    </div>
    <div class='concentContainer' > 
      <div>
        <MenuSwiper v-if="currentList.swiperList"/>
        <div class="shopInfo">
          <ul class="shopList">
            <li class="shopItem" v-for="(item,index) in currentList.info" :key="index">
              <img :src="item.img_url" alt="11">
              <span class='title'>{{item.title}}</span>
              <span class="price">￥{{item.price}}</span>
            </li>
            <li class="lastaLi"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import MenuSwiper from './MenuSwiper'
  export default {
    data(){
      return{
        MenuIndex:0,
        navBarList:[
          "文具",
          "3C",
          "印品",
          "达人款",
          "更多好物",
          "魔道祖师",
          "英雄学院",
          "全职高手",
          "漫威英雄",
          "动漫周边"
        ],
        widths:[],
        menuInfo:[
          {
            code:1,
            info:[
              {
                "img_url":"https://img13.360buyimg.com/n1/jfs/t22645/175/798811659/197978/f36239a9/5b442989N5fa528ee.jpg",
                "title": "礼物攻略 古风笔记本 4本套装笔记本学生文具创意礼品袋中国风复古古风日记线装带流苏记事本子 梅兰竹菊【四本装】 14CM*21CM【单本尺寸】",
                "shop_name": "醒墨礼品专营店",
                "price": "36",
              },
              {
                "img_url":"https://img10.360buyimg.com/n1/jfs/t1/37715/2/20/134418/5ca5b8a9E5ebbeb94/3a94f3eb902cfbc7.jpg",
                "title": "吊坠笔可爱套装带挂件的笔挂坠笔中性笔可爱韩版创意少女心吊坠笔十二星座风铃挂件黑色中性笔文具带挂坠笔 古韵国风吊坠笔可爱套装带挂件的笔带挂坠笔 二只＞吊坠笔可爱套装带挂件的笔带挂坠笔",
                "shop_name": "尊礼严选官方旗舰店",
                "price": "18",
              },
              {
                "img_url":"https://img12.360buyimg.com/n1/jfs/t1/63770/28/4318/437692/5d27f379E4f3aa29c/b7fb86e860e64cf0.jpg",
                "title": "金属创意樱花书签 小清新小学生用可爱复古风叶脉书签中国风文具长串樱花",
                "shop_name": "爱德礼品专营店",
                "price": "2.85",
              },
              {
                "img_url":"https://img13.360buyimg.com/n1/jfs/t1/106828/18/1310/118963/5dbd58c3Ebe9bcf68/4c725ee3b514b032.jpg",
                "title": "笔记本套装礼盒创意记事本盘笔保温杯公司活动本子可印商务会议礼品复古记录本手账本文具刻字国风礼盒保温杯四件套(红色)",
                "price": "276",
                "shop_name": "楚帆礼品专营店",
              },
              {
                "img_url":"https://img13.360buyimg.com/n1/jfs/t1/54469/25/16097/156110/5dd473a3E2afed3b2/52cfd04fe92db147.jpg",
                "title": "云浪松锦鲤节日团扇古典国风金属书签创意小清新学生用古风礼品 红色",
                "price": "24",
                "shop_name": "猫课文具专营店"
              },
              {
                "img_url":"http://img10.360buyimg.com/imgzone/jfs/t1/86281/40/6804/110592/5df6eee1Ed638e629/d1a5cb4611e5ca89.jpg",
                "title": "钢笔收纳袋 笔帘卷笔袋女毛笔彩铅帆布创意钢笔收纳袋文艺复古风流苏中国风唯描卷笔帘故宫学生文具用品 颐和园笔帘",
                "price": "40",
                "shop_name": "爱晚亭礼品专营店",
              },
              {
                "img_url":"https://img14.360buyimg.com/n1/jfs/t1/92261/21/340/260771/5dabcdbbE3ff57de4/05c9fcea613dffae.jpg",
                "title": "八卷装文艺古风小清新手账和纸胶带套装少女彩色手工撕DIY手帐贴纸口红贴相册装饰素材开学<font class=\"skcolor_ljg\">文具</font>套装 大红<font class=\"skcolor_ljg\">国风</font>系",
                "price": "14.19",
                "shop_name": "泽月礼品专营店",
              },
              {
                "img_url":"https://img10.360buyimg.com/n1/jfs/t1/80342/9/2930/161948/5d132923Eed95ef43/f1bcb808fdcb037f.jpg",
                "title": "u盘中国风如意个性创意情侣生日礼物商务礼品定制刻字印LOGO学校公司年会礼品毕业纪念品 32G 如意 （米色礼盒+书签+手提袋）",
                "price": "88",
                "shop_name": "壹锦礼品专营店",
              }
            ],
            swiperList:[
              '../../../static/menuimgs/lunbo/1.jpg',
              '../../../static/menuimgs/lunbo/2.jpg',
              '../../../static/menuimgs/lunbo/3.jpg',
              '../../../static/menuimgs/lunbo/4.jpg',
              '../../../static/menuimgs/lunbo/5.jpg',
            ]
          },
          {
            code:2,
            info:[]
          },
          {
            code:3,
            info:[]
          },
          {
            code:4,
            info:[]
          },
          {
            code:5,
            info:[]
          },
          {
            code:6,
            info:[]
          },
          {
            code:7,
            info:[]
          },
          {
            code:8,
            info:[]
          },
          {
            code:9,
            info:[]
          },
          {
            code:10,
            info:[]
          },
        ],
        currentList:{}
      }
    },
    mounted(){
      this.scrollX =  new BScroll('.navBar',{
        scrollX:true,
        click:true,
        hasVerticalScroll:true
      }),
      this.scrollY = new BScroll('.concentContainer',{
        scrollY:true,
        click:true
      })
      //截取路径字符串,获取路由的动态参数
      this.MenuIndex = this.$route.path.split('/')[this.$route.path.split('/').length - 1] -1
      this.initWidths()
      this.initCurrentList()
    },
    methods:{
      changeIndex(index){
        if(this.MenuIndex === index) return
        //点击切换路由参数
        this.$router.replace({name: 'menuinfo', params:{id:(index+1)}})
        this.MenuIndex = index
        //---------
        //根据路由参数切换页面显示内容
        let info = this.menuInfo.filter((item,i)=>{
          return item.code === index+1
        })
        console.log(info[0]);
        this.currentList = info[0]
      },
      //获取navBar中每个li的left值保存到data
      initWidths(){
        const widths = []
        let width = 0
        widths.push(width)
        this.lis = Array.prototype.slice.call(this.$refs.navUl.children)
        this.lis.forEach(li => {
          width += li.clientWidth
          widths.push(width)
        })
        // 更新tops数据
        this.widths = widths
      },
      initCurrentList(){
        let info = this.menuInfo.filter((item,index)=>{
          return item.code === this.MenuIndex+1
        })
        console.log(info[0]);
        this.currentList = info[0]
      }
    },
    watch: {
      widths(){
        //初始化scrollX的位置
        this.scrollX.scrollToElement(this.lis[this.MenuIndex])
        this.scrollY.scrollToElement(0)
      }
    },
    components:{
      MenuSwiper
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .menuInfoContainer
    width 100%
    height 100%
    position relative
    .header
      position fixed
      top 0
      z-index 20
      background-color #fff
      width 100%
      height 30px
      display flex
      flex-wrap nowrap
      font-size 18px
      line-height 30px
      .iconfont
        vertical-align middle
        color rgba(0,0,0,.8)
        margin 0 10px
      .title
        vertical-align middle
        width 85%
        text-align center
    .navBar
      position fixed
      top 30px
      z-index 20
      background-color #fff
      width 100%
      height 32px
      overflow hidden
      ul
        width 720px
        display flex
        flex-wrap nowrap
        line-height 30px
        li
          padding 0 10px 
          height 30px
          font-size 16px
          &.line
            border-bottom 2px solid rgba(0,0,0,.7) 
            border-radius 1px
    .concentContainer
      position absolute
      top 65px
      width 100%
      height 100%
      padding 5px
      box-sizing border-box
      .aaa
        width 100%
        height 300px
        background pink
      .shopInfo
        width 100%
        .shopList
          padding-bottom 10px
          display flex
          flex-wrap wrap
          justify-content space-around
          .shopItem
            width 45%
            height 260px
            img 
              width 100%
              height 70%
              border-radius 10px
              margin-bottom 5px
            .title  
              font-size 14px
              line-height 20px
              color #989898
              display -webkit-box
              -webkit-box-orient vertical
              -webkit-line-clamp 2
              overflow hidden
            .price
              font-size 18px
          .lastaLi
            width width 45%

</style>
