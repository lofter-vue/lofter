<template>
  <div class="searchContainer">
    <div class="wrapper">
        <!-- 搜索 -->
      <div class="inputContainer">
        <input class="iconfont search_input" 
        type="search" name="search" :placeholder='icon'>
      </div>

      <!-- nav scroll -->
      <div class="navScroll">
        <div class="navScrollWrap" ref="top">
          <ul class="scrollContainer">
            <li class="scrollItem" v-for="(navItem,index) in navList" :key="index"
            @click="choose(index)" :class="{active:navIndex === index}"
            >{{navItem}}</li>
          </ul>
        </div>
        <span class="sanjiao iconfont icon-ico_arrowdown" @click="showZhezhao"></span>
      </div>
    </div>

    <!-- 内容区 1-->
  
    <div class="swiper-container contentScroll swiper1">
      
        
        <div class="swiper-wrapper" v-if="datas.search_navList">

          <!-- 推荐 -->
          <!-- {{datas.data.search_tuijian.tuijian}} -->  
          <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <p>刷新次数: {{ count }}</p>
          </van-pull-refresh> -->
          <div class="swiper-slide all" ref="scrollY" >
            <!-- v-for="(item,index) in datas.data.search_tuijian.tuijian" :key="index" -->
            <ul class="contentWrap" v-if="datas.search_tuijian">  <!-- v-if="datas.search_tuijian" -->
              <li class="contentItem" v-for="(item,index) in datas.search_tuijian.tuijian" :key="index">
                <img :src="item.bgImg" alt="">
                <div class="itemIntro">
                  <p>{{item.p1}}</p>
                  <p>{{item.p2}}</p>
                </div>
                <div class="itemAuthor">{{item.author}}</div>
                <i class="iconfont icon-xihuan like">
                  <span>{{item.nummber}}人喜欢</span>
                </i>
              </li>  
            </ul> 
          </div>

          <!-- 游戏 -->
        
          <div class="swiper-slide all" ref="scrollYY" :class="{['a'.repeat((index1+1))]: true}" v-for="(aa, index1) in datas.search_navList" :key="index1">
            <div class="swiper2Warp">
              <div>

                <div class="swiper-container swiper2">
                  <div class="swiper-wrapper">
                    <div class="img swiper-slide" v-for="(item,index) in aa.search_youxi.search_youxi_top" :key="index">
                      <img class="imgS" :src="item">
                    </div>
                  </div>
                </div>         
              
                <div class="imgScroll" ref="imgScroll" :class="{['b'.repeat((index1+1))]: true}">
                  <ul class="imgScrollWrap">
                    <li class="maskWarp" v-for="(item,index) in aa.search_youxi.search_youxi_lunbo" :key="index">
                      <div class="mask">
                        <div class="wenzi">
                        <p>{{item.p1}}</p>
                        <span>{{item.p2}}人参与</span>
                      </div> 
                      </div>
                      <img :src="item.bgImg" alt="">  
                    </li>
                
                  </ul>
                </div>
                
                <ul class="contentWrap">
                  <li class="contentItem" v-for="(item,index) in aa.search_youxi.search_youxi_content" :key="index">
                    <img :src="item.bgImg" alt="">
                    <div class="itemIntro">
                      <p>{{item.p1}}</p>
                      <p>{{item.p2}}</p>
                    </div>
                    <div class="itemAuthor">{{item.author}}</div>
                    <i class="iconfont icon-xihuan like">
                      <span>{{item.nummber}}人喜欢</span>
                    </i>
                  </li>
                </ul>
              </div>
            </div>
          </div>  
        </div>
  
    </div>
    
    <!-- 遮罩 -->
    <transition name="fade">
      <div class="zhezhao" v-show="isShow">
        <div class="zhezhaoTop">
          <h1>选择领域</h1>
          <p>调整顺序</p>
          <i class="iconfont icon-xiangshangjiantou" @click="quxiao"></i>
        </div>
        <ul>
          <li v-for="(item,index) in navList" :key="index" @click="showDuihao(index)">
            {{item}}
            <i class="iconfont icon-xiangyou" v-show="index === currentIndex" @click="go(index)"></i>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import { reqSearch } from '../../api/index.js'
  import BScroll from 'better-scroll'
  // import VuePullRefresh from 'vue-pull-refresh'
  

  // import Vue from 'vue';
  // import { PullRefresh } from 'vant';

// Vue.use(PullRefresh);

  export default {

    //placeholder图标字体
    name:'search',
    data() {
      return {
        datas:{},
        icon:'\ue654 陈情令',
        navIndex:0,
        swiperIndex:'',
        img1:'',
        navList:[
          '推荐',
          '游戏',
          '影视',
          '旅行',
          '生活',
          '娱乐',
          '时尚',
          '二次元',
          '绘画',
          '文学',
          '设计',
          '摄影',
        ],
        isShow:false,
        isShowduihao:false,
        currentIndex:null
      }
    },

    methods: {
      choose(index){
        // console.log('xxxx')
        this.navIndex = index
        this.swiper1.slideTo(this.navIndex)
      },

      showZhezhao(){
        // console.log('xxx')
        this.isShow = !this.isShow
      },

      quxiao(){
        this.isShow = !this.isShow
      },

      showDuihao(index){
        this.currentIndex = index
        this.isShowduihao = !this.isShowduihao
      },

      go(index){
        this.isShow = !this.isShow
        this.isShowduihao = !this.isShowduihao
        this.choose(index)
      },
      // onLoad() {      //上拉加载
      //   setTimeout(() => {
      //     for (let i = 0; i < 15; i++) {
      //       this.list.push(this.list.length + 1);
      //     }
      //     this.loading = false;
      //     if (this.list.length >= 60) {
      //       this.finished = true;
      //     }
      //   }, 500);
      // },
      onRefresh:function () {
        return new Promise(function (resolve,reject){
          setTimeout(() => {
            resolve()
          }, 3000);
        });
      },

      initTop(){
          this.top = new BScroll(this.$refs.top,{
          scrollX:true,
          click:true
        })
      },

      initY(){
          this.scrollY = new BScroll(this.$refs.scrollY,{
          // scrollY:true,
          click:true,
          // pullDownRefresh:true
        })
      },

      initYY(){
        // console.log(this.$refs.scrollYY[0].className.slice(17))
        // console.log(this.$refs.scrollYY[0].className)

        for(let i of this.$refs.scrollYY){
          this.scrollYY = new BScroll(`.${i.className.slice(17)}`,{
              // scrollY:true,
              click:true,
              // stopPropagation:true
              // pullDownRefresh:true
          })
        }       
      },
      
      initImg(){
        // console.log(this.$refs.imgScroll[0].className.slice(10))
        // console.log(this.$refs.imgScroll)

        for (let i of this.$refs.imgScroll) {
          this.imgScroll = new BScroll(`.${i.className.slice(10)}`,{
            scrollX:true,
            // click:true,
            stopPropagation:true
          })         
        }         
      },
    
      initSwiper1(){
          this.swiper1 = new Swiper('.swiper1',{
          loop:false,
          on:{
              slideChangeTransitionEnd:swiper => {
              this.navIndex = this.swiper1.activeIndex
            }
          }
        })
      },
      initSwiper2(){
            this.swiper2 = new Swiper('.swiper2',{
            loop:true,
            autoplay:true
          })
      }
    },

    async mounted() {
      // console.log(111)
      // let winHeight = document.documentElement.clientHeight                          //视口大小
      // document.getElementById('list-content').style.height = (winHeight - 46) +'px'
      const datas = await reqSearch()
      this.datas = datas.data
      // console.log(datas)
      // const {status,data} = result
          
    },
    
    watch: {
      datas(newValue){
        // console.log(newValue.search_navList,'222')
        // console.log(newValue,'222')

        this.$nextTick(()=>{
          this.initTop()
          this.initY()
          this.initYY()
          this.initSwiper2()
          this.initSwiper1()
          this.initImg()      
        })
      }
    },

    // components:{
    //   VuePullRefresh
    // }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import './iconfont/iconfont.css';
  @import '../../common/stylus/mixins.styl'
  .searchContainer
    overflow hidden
    .wrapper
      width 100%
      height 12.5%
      position relative
      background white
      z-index 6
      position fixed  
      top 0  
      .inputContainer
        width 100%
        input 
          width 92%
          height 30px
          background #eeeeee
          border-radius 12px
          outline none
          font-size 16px
          text-align center
          margin-left 4%
          margin-top 10px
      .navScroll 
        width 100%
        background white
        .navScrollWrap
          width 84%
          overflow hidden
          .scrollContainer
            width 670px
            display flex
            white-space nowrap
            .scrollItem
              width 40px
              height 42px
              text-align center
              line-height 40px
              font-size 16px
              margin 0 0 0 20px 
              &.active
                bottom-border-1px(black)
        .sanjiao
          position absolute
          top 47px
          right 6%
          width 6%
          font-size 30px
          z-index 6
    .swiper1
      // height 2000px
      margin-top 22%
      .swiper-wrapper
        width 100%
        height 100%
        .all
          width 100%
          height 80vh
          background #eeeeee
          position relative
          // .swiper-pagination
          //   position absolute
          //   color red
          //   top 0
          //   left 0
          //   z-index 10000
          .img
            width 100%
            height 10%
            .imgS   
              width 100%
              height 30vh
          .imgScroll
            overflow hidden
            background white
            .imgScrollWrap
              width 1520px
              height 130px
              display flex
              white-space nowrap
              .maskWarp
                position relative
                width 130px
                height 90px
                margin 20px 0 20px 20px
                .mask
                  position absolute
                  width 130px
                  height 90px
                  background-color rgba(133,133,133,0.7)
                  .wenzi
                    color white
                    text-align center
                    padding-top 30px
                    p
                      font-size 16px
                      margin-bottom 3px
                    span 
                      font-size 10px
                img
                    width 100%
                    height 100%
                  
          .contentWrap
            width 100%
            display flex
            flex-wrap wrap
            .contentItem
              background white
              width 183px
              height 350px
              &:nth-child(2n+1)
                margin 3px 2px 0 2px
              &:nth-child(2n)
                margin 3px 0px 2px 3px
              img 
                width 183px
                height 70%
              .itemIntro
                margin 5px 0 5px 10px
                font-size 14px
                p
                  margin-bottom 6px
              .itemAuthor
                width 60px
                font-size 12px
                color gray 
                text-align center
                border 1px solid gray 
                border-radius 12px
                margin 6px 0 6px 10px
                pendding 8px
              .like
                margin-left 10px
                font-size 14px
                span 
                  display inline-block
                  margin-left 4px
                  font-size 12px
              // .aixin
              //   position relative
              //   left -37.4%
              //   font-size 14px
              //   color red
                
    .zhezhao
      width 100%
      height 100%
      background white
      position fixed
      top 0
      left 0
      z-index 9999
      .zhezhaoTop
        display flex
        width 100%
        height 8%
        text-align center
        border-bottom 1px solid #eeeeee
        h1
          position absolute
          left 30%
          top 3%
          font-size 16px
          color gray 
        p
          position absolute
          left 68%
          color green
          top 3%
          font-size 16px
        i 
          position absolute
          left 90%
          top 2.3%
          font-size 30px
      ul
        position relative
        width 100%
        height 92%
        li
          width 100%
          height 50px
          font-size 16px
          line-height 50px
          border-bottom 1px solid #eee
          padding-left 13px
          i 
            position absolute
            right 3%
            color green 
            font-size 26px

          
          
        

// .refresh

//   overflow hidden !important  
            

</style>
