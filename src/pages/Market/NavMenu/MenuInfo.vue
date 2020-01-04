<template>
  <div class="menuInfoContainer">
    <div class="header">
      <div class="iconfont icon-zuojiantou" @click="$router.back('/market')"></div>
      <div class="title">乐乎市集</div>
      <div class="iconfont icon-fenxiang3" @click="changeShare"></div>
    </div>
    <div class="navBar">
      <ul ref="navUl">
        <li v-for="(item,index) in navBarList" :key="index" 
            @click="changeIndex(index)" :class="{line: MenuIndex===index}">{{item}}</li>
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
    <ShareContainer :shareShow="shareShow" :changeShare="changeShare"/>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import MenuSwiper from './MenuSwiper'
import ShareContainer from '../../../components/shareContainer'
import {reqNavMenuInfo} from '../../../api/index'
  export default {
    data(){
      return{
        MenuIndex:0,
        shareShow:false,
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
        menuInfo:[],
        currentList:{}
      }
    },
    async mounted(){
      //导航横向滚动
      this.scrollX =  new BScroll('.navBar',{
        scrollX:true,
        click:true,
        hasVerticalScroll:true
      }),
      //页面竖向滚动
      this.scrollY = new BScroll('.concentContainer',{
        scrollY:true,
        click:true
      })
      //截取路径字符串,获取路由的动态参数
      this.MenuIndex = this.$route.path.split('/')[this.$route.path.split('/').length - 1] -1
      this.initWidths()
      let result = await reqNavMenuInfo()
      const {status,data} = result
      if(status === 0){
        this.menuInfo = data
        this.initCurrentList()
      }
    },
    methods:{
      changeShare(){
        this.shareShow = !this.shareShow
      },
      changeIndex(index){
        if(this.MenuIndex === index) return
        //点击切换路由参数
        this.$router.replace({name: 'menuinfo', params:{id:(index+1)}})
        this.MenuIndex = index
        //---------
        //根据路由参数切换渲染数据,从而改变页面显示内容
        let info = this.menuInfo.filter((item,i)=>{
          return item.code === index+1
        })
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
      //初始化页面挂载时渲染数据
      initCurrentList(){
        let info = this.menuInfo.filter((item,index)=>{
          return item.code === this.MenuIndex+1
        })
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
      MenuSwiper,
      ShareContainer
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
      .shopInfo
        width 100%
        padding-bottom 13%
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
            width  45%

</style>
