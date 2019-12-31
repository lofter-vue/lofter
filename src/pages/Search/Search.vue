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
        <span class="sanjiao iconfont icon-ico_arrowdown"></span>
      </div>
    </div>

    <!-- 内容区 1-->
    <div class="swiper-container contentScroll swiper1">
      <div class="swiper-wrapper">
        <!-- 推荐 -->
        <!-- {{datas.data.search_tuijian.tuijian}} -->  
        <div class="swiper-slide all" ref="scrollY">
          <!-- v-for="(item,index) in datas.data.search_tuijian.tuijian" :key="index" -->
          <ul class="contentWrap">  <!-- v-if="datas.search_tuijian" -->
            <li class="contentItem">  <!-- v-for="(item,index) in datas.search_tuijian.tuijian" :key="index" -->
              <img src="./images/2.jpg" alt="">
              <div class="itemIntro">
                <p></p>
                <p>快快乐乐</p>
              </div>
              <div class="itemAuthor">杨九郎</div>
              <i class="iconfont icon-xihuan like">
                <span>8人喜欢</span>
              </i>
            </li>  
            <li class="contentItem">  <!-- v-for="(item,index) in datas.search_tuijian.tuijian" :key="index" -->
              <img src="./images/2.jpg" alt="">
              <div class="itemIntro">
                <p></p>
                <p>快快乐乐</p>
              </div>
              <div class="itemAuthor">杨九郎</div>
              <i class="iconfont icon-xihuan like">
                <span>8人喜欢</span>
              </i>
            </li>  
            <li class="contentItem">  <!-- v-for="(item,index) in datas.search_tuijian.tuijian" :key="index" -->
              <img src="./images/2.jpg" alt="">
              <div class="itemIntro">
                <p></p>
                <p>快快乐乐</p>
              </div>
              <div class="itemAuthor">杨九郎</div>
              <i class="iconfont icon-xihuan like">
                <span>8人喜欢</span>
              </i>
            </li>  
            <li class="contentItem">  <!-- v-for="(item,index) in datas.search_tuijian.tuijian" :key="index" -->
              <img src="./images/2.jpg" alt="">
              <div class="itemIntro">
                <p></p>
                <p>快快乐乐</p>
              </div>
              <div class="itemAuthor">杨九郎</div>
              <i class="iconfont icon-xihuan like">
                <span>8人喜欢</span>
              </i>
            </li>  
            <li class="contentItem">  <!-- v-for="(item,index) in datas.search_tuijian.tuijian" :key="index" -->
              <img src="./images/2.jpg" alt="">
              <div class="itemIntro">
                <p></p>
                <p>快快乐乐</p>
              </div>
              <div class="itemAuthor">杨九郎</div>
              <i class="iconfont icon-xihuan like">
                <span>8人喜欢</span>
              </i>
            </li>  
            <li class="contentItem">  <!-- v-for="(item,index) in datas.search_tuijian.tuijian" :key="index" -->
              <img src="./images/2.jpg" alt="">
              <div class="itemIntro">
                <p></p>
                <p>快快乐乐</p>
              </div>
              <div class="itemAuthor">杨九郎</div>
              <i class="iconfont icon-xihuan like">
                <span>8人喜欢</span>
              </i>
            </li>  
          </ul> 
        </div>
        <!-- 游戏 -->
        <div class="swiper-slide all" ref="scrollYY">
          <div class="swiper2Warp">
            <div class="swiper-container swiper2">
              <div class="swiper-wrapper">
                <div class="img swiper-slide">
                  <img class="imgS" src="./images/2.jpg" alt="">
                </div>
                <div class="img swiper-slide">
                  <img class="imgS" src="./images/3.jpg" alt="">
                </div>
              </div>
            </div>
          
          
            <div class="imgScroll" ref="imgScroll">
              <ul class="imgScrollWrap">
                <li class="maskWarp">
                  <div class="mask">
                    <div class="wenzi">
                    <p>第五人格</p>
                    <span>7755人参与</span>
                  </div> 
                  </div>
                  <img src="./images/3.jpg" alt="">  
                </li>
                <li class="maskWarp">
                  <div class="mask">
                    <div class="wenzi">
                    <p>第五人格</p>
                    <span>7755人参与</span>
                  </div> 
                  </div>
                  <img src="./images/3.jpg" alt="">  
                </li>
                <li class="maskWarp">
                  <div class="mask">
                    <div class="wenzi">
                    <p>第五人格</p>
                    <span>7755人参与</span>
                  </div> 
                  </div>
                  <img src="./images/3.jpg" alt="">  
                </li>
                <li class="maskWarp">
                  <div class="mask">
                    <div class="wenzi">
                    <p>第五人格</p>
                    <span>7755人参与</span>
                  </div> 
                  </div>
                  <img src="./images/3.jpg" alt="">  
                </li>
                <li class="maskWarp">
                  <div class="mask">
                    <div class="wenzi">
                    <p>第五人格</p>
                    <span>7755人参与</span>
                  </div> 
                  </div>
                  <img src="./images/3.jpg" alt="">  
                </li>
                <li class="maskWarp">
                  <div class="mask">
                    <div class="wenzi">
                    <p>第五人格</p>
                    <span>7755人参与</span>
                  </div> 
                  </div>
                  <img src="./images/3.jpg" alt="">  
                </li>
                <li class="maskWarp">
                  <div class="mask">
                    <div class="wenzi">
                    <p>第五人格</p>
                    <span>7755人参与</span>
                  </div> 
                  </div>
                  <img src="./images/3.jpg" alt="">  
                </li>
                <li class="maskWarp">
                  <div class="mask">
                    <div class="wenzi">
                    <p>第五人格</p>
                    <span>7755人参与</span>
                  </div> 
                  </div>
                  <img src="./images/3.jpg" alt="">  
                </li>
                <li class="maskWarp">
                  <div class="mask">
                    <div class="wenzi">
                    <p>第五人格</p>
                    <span>7755人参与</span>
                  </div> 
                  </div>
                  <img src="./images/3.jpg" alt="">  
                </li>
                <li class="maskWarp">
                  <div class="mask">
                    <div class="wenzi">
                    <p>第五人格</p>
                    <span>7755人参与</span>
                  </div> 
                  </div>
                  <img src="./images/3.jpg" alt="">  
                </li>
            
              </ul>
            </div>
            

            <ul class="contentWrap">
              <li class="contentItem">
                <img src="./images/1.jpg" alt="">
                <div class="itemIntro">
                  <p>开开心心</p>
                  <p>快快乐乐</p>
                </div>
                <div class="itemAuthor">杨九郎</div>
                <i class="iconfont icon-xihuan like">
                  <span>8人喜欢</span>
                </i>
              </li>
              <li class="contentItem">
                <img src="./images/1.jpg" alt="">
                <div class="itemIntro">
                  <p>开开心心</p>
                  <p>快快乐乐</p>
                </div>
                <div class="itemAuthor">杨九郎</div>
                <i class="iconfont icon-xihuan like">
                  <span>8人喜欢</span>
                </i>
              </li>
              <li class="contentItem">
                <img src="./images/1.jpg" alt="">
                <div class="itemIntro">
                  <p>开开心心</p>
                  <p>快快乐乐</p>
                </div>
                <div class="itemAuthor">杨九郎</div>
                <i class="iconfont icon-xihuan like">
                  <span>8人喜欢</span>
                </i>
              </li>
              <li class="contentItem">
                <img src="./images/1.jpg" alt="">
                <div class="itemIntro">
                  <p>开开心心</p>
                  <p>快快乐乐</p>
                </div>
                <div class="itemAuthor">杨九郎</div>
                <i class="iconfont icon-xihuan like">
                  <span>8人喜欢</span>
                </i>
              </li>
              <li class="contentItem">
                <img src="./images/1.jpg" alt="">
                <div class="itemIntro">
                  <p>开开心心</p>
                  <p>快快乐乐</p>
                </div>
                <div class="itemAuthor">杨九郎</div>
                <i class="iconfont icon-xihuan like">
                  <span>8人喜欢</span>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import { reqSearch } from '../../api/index.js'
  import BScroll from 'better-scroll'
  
  export default {

    //placeholder图标字体
    name:'search',
    data() {
      return {
        datas:{},
        icon:'\ue654 陈情令',
        navIndex:0,
        // loading:false, //是否处于加载状态
        // finished: false,  //是否已加载完所有数据
        // isLoading: false,   //是否处于下拉刷新状态
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
      }
    },

    methods: {
      choose(index){
        // console.log('xxxx')
        this.navIndex = index
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
      // onRefresh(){
      //   setTimeout(() => {
      //     this.finished = false;
      //     this.isLoading = false;
      //     this.onLoad()
      //   }, 500);
      // }
    },

    async mounted() {
      
      // let winHeight = document.documentElement.clientHeight                          //视口大小
      // document.getElementById('list-content').style.height = (winHeight - 46) +'px'
      // const result= await reqSearch()
      // const {status,data} = result
      // if(status === 0){
      //   this.datas = data
      //   this.img1 = data.search_tuijian.tuijian[0].bgImg
      //   console.log(data)
      // }
      // this.datas= datas
      // console.log('datas',datas)

      new BScroll(this.$refs.top,{
        scrollX:true,
        click:true
      })
      new BScroll(this.$refs.scrollY,{
        scrollY:true,
        click:true
      })
      new BScroll(this.$refs.scrollYY,{
            scrollY:true,
            click:true
      })
      
      let imgScroll = new BScroll(this.$refs.imgScroll,{
        scrollX:true,
        click:true,
        stopPropagation:true
      });  
    
      new Swiper('.swiper1',{
        loop:false,
        autoplay:false
      })
      new Swiper('.swiper2',{
        loop:true,
        autoplay:true
      })   
    },
    
    watch: {
      datas(){
        this.$nextTick(()=>{
          
        })
      }
    },
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
                // height 70%
              .itemIntro
                margin 10px 0 10px 10px
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
                margin 12px 0 12px 10px
                pendding 8px
              .like
                margin-left 10px
                font-size 14px
                span 
                  display inline-block
                  margin-left 4px
                  font-size 12px
              
              
                
            
              


            

</style>
