<template>
  <VuePullRefresh :on-refresh="onRefresh">
    <div class="container">
      <div class="wapper">
        <div class="scroll">
          <ul class="mySub">
            <li class="title">我的订阅</li>
            <!-- <li class="item" v-for="(mySub,index) in list.mySubs" :key="index">
                <img class="img" src="../Attention/img/avactar.jpg" alt="">
                <span>{{mySub}}</span>
              </li> -->
            <ul class="list-group">
              <li
                class="list-group-item"
                v-for="(mySub, index) in list.mySubs"
                :key="index"
              >
                <img class="img" :src="mySub.img" alt="" />
                {{ mySub.category }}
                <span class="badge">12</span>
              </li>
            </ul>
          </ul>
          <ul class="mySub">
            <!-- <li class="title">推荐订阅</li> 
                <li class="item" v-for="(recSub,index) in list.recSubs" :key="index">
                <img class="img" src="../Attention/img/avactar.jpg" alt="">
                <span>{{recSub}}</span>
                </li> -->
            <li class="title">推荐订阅</li>
            <li
              class="list-group-item"
              v-for="(recSub, index) in list.recSubs"
              :key="index"
            >
              <img class="img" :src="recSub.img" alt="" />
              {{ recSub.category }}
              <span class="badge init" @click="subscr">{{isSub?"取消订阅" : "订阅"}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </VuePullRefresh>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import VuePullRefresh from 'vue-pull-refresh';
import {mapState} from 'vuex'
import {Toast} from 'mint-ui'
import BScroll from 'better-scroll'
  export default {
    name:"Subscription",
    components:{
      VuePullRefresh
    },
    data() {
      return {
        list:{
          mySubs:[
            {
              category: "文学",
              img:"http://img2.imgtn.bdimg.com/it/u=2331778743,3079736865&fm=26&gp=0.jpg"
            },
              {
              category: "影视",
              img:"http://img1.imgtn.bdimg.com/it/u=580286014,1310966289&fm=15&gp=0.jpg"
            },
              {
              category:  "旅行",
              img:"http://img3.imgtn.bdimg.com/it/u=263996334,3783093417&fm=26&gp=0.jpg"
            },
          ],
          recSubs:[
            {
              category: "荒野猎人",
              img:"http://img0.imgtn.bdimg.com/it/u=119682264,3654318534&fm=26&gp=0.jpg"
            },
            {
              category:"绘画",
              img:"http://img3.imgtn.bdimg.com/it/u=1268000778,3787342819&fm=15&gp=0.jpg"
            },
            {
              category: "一句话影评",
              img:"http://img4.imgtn.bdimg.com/it/u=1348318242,2879429470&fm=26&gp=0.jpg"
            },
              {
              category: "音乐",
              img:"http://img4.imgtn.bdimg.com/it/u=2190384157,2682719953&fm=15&gp=0.jpg"
            },
            
              {
              category: "电影海报",
              img:"http://img5.imgtn.bdimg.com/it/u=505177556,691713951&fm=15&gp=0.jpg"
            },
            
            {
              category:"lofter原创短篇",
              img:"http://img0.imgtn.bdimg.com/it/u=805790518,1694126678&fm=15&gp=0.jpg"
            },
            
            {
              category: "lofter原创小说",
              img:"http://img2.imgtn.bdimg.com/it/u=4076805044,278748952&fm=15&gp=0.jpg"
            },
              {
              category: "荒野猎人",
              img:"http://img1.imgtn.bdimg.com/it/u=1185463873,3590847490&fm=15&gp=0.jpg"
            },
              {
              category: "三国演义",
              img:"http://img1.imgtn.bdimg.com/it/u=855521546,3924762435&fm=15&gp=0.jpg"
            },
                  {
              category: "水浒传",
              img:"http://img3.imgtn.bdimg.com/it/u=1699213407,870066192&fm=15&gp=0.jpg"
            },
          ]
        },
        isSub:false
      }
    },
    mounted() {
    let scroll = new BScroll(".container",{
          mouseWheel: true,
          scrollY:true,
          click:true,
          // bounce: false
      })
      console.log(scroll)
      // scroll.hasVerticalScroll = true
    },
    methods: {
      subscr(event){
        this.isSub = !this.isSub
        console.log(event)
      if(this.isSub){
          Toast({
            message: '订阅成功',
            iconClass: 'iconfont icon-chenggong1'
        })
      }else{
      Toast({
            message: '取消订阅',
            iconClass: 'iconfont icon-quxiao1'
        })
      }
      },
        onRefresh: function () {
      return new Promise(function (resolve, reject) {
          setTimeout(function () {
              resolve();
          }, 1000);
      });
      },
    },
    computed: {
      ...mapState({
          isShowA:state => state.Home.isShowA
      })
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.container
    height 100%
    background-color #eee
    display block !important
    .scroll
      padding-bottom 40%
.mySub
      width 100%
  .title
      font-size 16px
      font-weight:bold
      padding 5px 10px
    //   .item
    //     padding 10px
    //     border-bottom 1px solid #eee
    //     .img
    //       width 30px
    //       height 30px
    //       vertical-align middle
    //     span
    //       font-size 16px
    //       font-weight:bold
    //       vertical-align middle
    //       margin-left 20px
    // // .mySub
    //   width 100%
    //   .title
    //     font-size 22px
    //     font-weight:bold
    //     padding 5px 10px
    //     margin-top 10px
      // .item
      //   padding 10px
      //   border-bottom 1px solid #eee
      //   .img
      //     width 30px
      //     height 30px
      //     vertical-align middle
      //   span
      //     font-size 16px
      //     font-weight:bold
      //     vertical-align middle
      //     margin-left 20px
.img
          width 30px
          height 30px
          vertical-align middle
.list-group-item
          font-size 14px
          font-weight:bold
          vertical-align middle
.badge
  &.init
        border 1px solid green
        color green
        background-color #fff
</style>
