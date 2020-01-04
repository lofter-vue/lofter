<template>

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
                <span class="badge">{{mySub.count}}</span>
              </li>
            </ul>
          </ul>
          <ul class="mySub">
            <!-- <li class="title">推荐订阅</li> 
                <li class="item" v-for="(recSub,index) in list.recSubs" :key="index">
                <img class="img" src="../Attention/img/avactar.jpg" alt="">
                <span>{{recSub}}</span>
                </li> -->
            <li class="title two">推荐订阅</li>
            <li
              class="list-group-item"
              v-for="(recSub, index) in list.recSubs"
              :key="index"
            >
              <img class="img" :src="recSub.img" alt="" />
              {{ recSub.category }}
              <span class="badge init" :ref="recSub.id" @click="subscr(index)">{{recSub.isSub}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import {mapState} from 'vuex'
import {Toast} from 'mint-ui'
import BScroll from 'better-scroll'

  export default {
    name:"Subscription",
    data() {
      return {
        list:{
          mySubs:[
            {
              category: "文学",
              img:"http://img2.imgtn.bdimg.com/it/u=2331778743,3079736865&fm=26&gp=0.jpg",
              count:18
            },
              {
              category: "影视",
              img:"http://img1.imgtn.bdimg.com/it/u=580286014,1310966289&fm=15&gp=0.jpg",
              count:17
            },
              {
              category:  "旅行",
              img:"http://img3.imgtn.bdimg.com/it/u=263996334,3783093417&fm=26&gp=0.jpg",
              count:8
            },
            {
              category:  "摄影",
              img:"http://img4.imgtn.bdimg.com/it/u=1348318242,2879429470&fm=26&gp=0.jpg",
              count:9
            },
            {
              category:  "吃货",
              img:"http://img2.imgtn.bdimg.com/it/u=4076805044,278748952&fm=15&gp=0.jpg",
              count:99
            },
            {
              category:  "逛街",
              img:"http://img3.imgtn.bdimg.com/it/u=263996334,3783093417&fm=26&gp=0.jpg",
              count:13
            },
          ],
          recSubs:[
            {
              category: "荒野猎人",
              img:"http://img0.imgtn.bdimg.com/it/u=119682264,3654318534&fm=26&gp=0.jpg",
              isSub:"订阅"
            },
            {
              category:"绘画",
              img:"http://img3.imgtn.bdimg.com/it/u=1268000778,3787342819&fm=15&gp=0.jpg",
              isSub:"订阅"
            },
            {
              category: "一句话影评",
              img:"http://img4.imgtn.bdimg.com/it/u=1348318242,2879429470&fm=26&gp=0.jpg",
              isSub:"订阅"
            },
              {
              category: "音乐",
              img:"http://img4.imgtn.bdimg.com/it/u=2190384157,2682719953&fm=15&gp=0.jpg",
              isSub:"订阅"
            },
            
              {
              category: "电影海报",
              img:"http://img5.imgtn.bdimg.com/it/u=505177556,691713951&fm=15&gp=0.jpg",
              isSub:"订阅"
            },
            
            {
              category:"lofter原创短篇",
              img:"http://img0.imgtn.bdimg.com/it/u=805790518,1694126678&fm=15&gp=0.jpg",
              isSub:"订阅"
            },
            
            {
              category: "lofter原创小说",
              img:"http://img2.imgtn.bdimg.com/it/u=4076805044,278748952&fm=15&gp=0.jpg",
              isSub:"订阅"
            },
              {
              category: "荒野猎人",
              img:"http://img1.imgtn.bdimg.com/it/u=1185463873,3590847490&fm=15&gp=0.jpg",
              isSub:"订阅"
            },
              {
              category: "三国演义",
              img:"http://img1.imgtn.bdimg.com/it/u=855521546,3924762435&fm=15&gp=0.jpg",
              isSub:"订阅"
            },
                  {
              category: "水浒传",
              img:"http://img3.imgtn.bdimg.com/it/u=1699213407,870066192&fm=15&gp=0.jpg",
              isSub:"订阅"
            },
          ]
        },
        isSub:"订阅",
        top:0
      }
    },
    mounted() {
    this.scroll = new BScroll(".container",{
          mouseWheel: true,
          scrollY:true,
          click:true,
          // bounce: false
      })
    },
    methods: {
      subscr(index){
      if(this.list.recSubs[index].isSub!== "取消订阅" ){
          this.list.recSubs[index].isSub ="取消订阅"
      // scroll.hasVerticalScroll = true
      Toast({
            message: '订阅成功',
            iconClass: 'iconfont icon-chenggong1'
        })
      }else{
          this.list.recSubs[index].isSub ="订阅"
      Toast({
            message: '取消订阅',
            iconClass: 'iconfont icon-quxiao1'
        })
      }
      }
    },  
    computed: {
      ...mapState({
          isShowA:state => state.Home.isShowA
      })
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.pull-down-header
  max-height 10px
.xiala
  // background-color #333
  overflow-x hidden !important
  overflow-y hidden !important
.container
    height 100%
    background-color #eee
    display block !important
    .wrapper
      height 100%
      .scroll
        padding-bottom 40%
.mySub
      width 345px
      margin 0 auto
  .title
      font-size 16px
      font-weight:bold
      padding 5px 10px
      border-bottom 1px solid #eee
      padding 10px
      &.two
        margin-top 30px
.img
          width 30px
          height 30px
          vertical-align middle
.list-group-item
            position relative
            display block
            padding 10px 15px
            margin-bottom -1px
            background-color #fff
            border 1px solid #ddd
            font-weight bold
            :first-child
              border-top-left-radius: 4px;
              border-top-right-radius: 4px
.badge
    float right
    color #fff
    background #777
    font-size 12px
    padding 3px 7px 
    font-weight 700
    line-height 1  
    text-align center
    white-space nowrap
    vertical-align middle
    border-radius 10px 
.badge
  &.init
    border: 0.026667rem solid #008000;
    color: #008000;
    background-color: #fff
</style>