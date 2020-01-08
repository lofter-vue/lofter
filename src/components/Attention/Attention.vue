<template>
<VuePullRefresh class="xiala" :on-refresh="onRefresh" >
  <div class="attention" ref="attention" v-if="showList">
    <div class="allcontainer">
        <!-- 第二栏 -->
        <div class="wrapper">
          <div @click="goto"><img class="lunbo" src="./img/banner.png" alt="111" ></div>
          
          <ol class="breadcrumb second">
            <li>推些有趣的人给你</li>
            <span class="iconfont icon-qianjin more"></span>
            <img class="avactar" src="./img/avactar.jpg" alt="">
            <img class="avactar1" src="./img/big.jpg" alt="">
          </ol>
        <!-- 内容区 -->
          <div class="border" v-for="(item, index) in showList" :key="index">
              <div class="homeContent">
                <div class="itemTop">
                    <div class="user">
                      <img :src="item.avatar" alt="">
                      <div class="name_date_container">
                      <span>{{item.name}}</span>
                      <span>{{item.data}}</span>
                      </div>
                      <button class="btn" type="default" size="small" @click="change" v-show="isShow">关注</button>
                      <span class="iconfont icon-gengduo right" @click="changeShare"></span>
                    </div>
                </div>
                <img class="BigPic" :src="item.bigImg" alt="">
                <p class="text">
                  {{item.article[0].content}}
                </p> 
                <div class="biaoqian">
                  <button>{{item.article[0].title? item.article[0].title : 'lofter' }}</button>
                </div>
            </div>
            <div class="itemBottom">
                  <div class="icon">
                      <div class="iconleft">
                          <span @click="toggle(index)" class="iconfont icon-icon-test1 span" :class="isAttention? 'icon-aixin':'icon-icon-test1'"></span>
                          <span class="iconfont icon-xinxi span"></span>
                          <span class="iconfont icon-dianzan span"></span>
                      </div>
                      <span class="iconfont icon-fenxiang right" @click="changeShare"></span>
                  </div>
                  <div class="hotAndComment">
                    <span>{{item.article[0].hot}}热度</span>
                    <span>{{item.article[0].comments.many}}评论</span>
                    <div class="comment" v-for="(user, index) in item.article[0].comments.detail" :key="index">
                        <span class="commentname">{{user.name}}:</span>
                        <span class="commenttext">{{user.content}}</span>
                    </div>
                  </div>
            </div> 
          </div> 
        <ShareContainer :shareShow="shareShow" :changeShare="changeShare"></ShareContainer>
        </div>
      </div>
  </div>
</VuePullRefresh>
</template>

<script type="text/ecmascript-6">
import VuePullRefresh from 'vue-pull-refresh';
import Vue from 'vue'
import { Button } from 'mint-ui'
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
import ShareContainer from '../shareContainer'


Vue.component(Button.name, Button)
  export default {
    name:"Attention",
    data() {
      return {
        isAttention:false,
        shareShow:false,
        isShow:true
      }
    },
    components:{
      VuePullRefresh,
      ShareContainer
    },
    methods: {  
      change(){
      // let _id = this.showLists
      // let addId = this.userInfo._id
      // console.log(_id,addId)
      // this.$store.dispatch("getaddattentionid",{_id,addId})     
      },
      goto(){
        console.log(111)
        this.$router.push("/home_sub")
      },
      changeShare(){
        this.shareShow = !this.shareShow
      }, 
      onRefresh: function () {
        if(this.scrollY>0){
          location.reload()
          return new Promise(function (resolve, reject) {
              setTimeout(function () {
                  resolve();
              }, 1000);
          });
        }
      },

      initScroll(){
        this.bscroll = new BScroll(this.$refs.attention,{
        scrolly:true,
        click: true,
        pullDownRefresh:true
      })
        this.bscroll.on('scroll', ({x, y}) => {
        this.scrollY = y
        })
      },
    },

    computed: {
      ...mapState({
        showLists:(state) => state.user.attention,
        showList:(state) => state.Home.attentions,
        isShowA:(state) => state.Home.isShowA,
        userInfo:(state) => state.user.userInfo
      })
    },
    watch: {
      showList(){
        this.$nextTick(()=>{
        this.bscroll.refresh()
        })
      }
    },
    mounted() {
      this.initScroll()
      console.log(this.bscroll)
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.xiala
  overflow-x hidden !important
  overflow-y hidden !important
.attention
  width 100%
  height 85%
  .allcontainer
    background-color #eee
    .wrapper
      .lunbo
        width 100%
        height 20%
        margin 0 auto
        position relative
        z-index 999 
      .border
        border-bottom 1px solid #fff
      .second
        width 100%
        height 8vh
        margin-top 10px
        background-color #fff
        position relative
        border 1px solid #eee
        // border-radius 8vh
        li
          vertical-align middle
          position absolute
          top 20px
          left 10px 
        .avactar
          width 20px
          height 20px
          border-radius 50%
          font-size 22px
          position absolute
          top 20px
          right 30px
        .avactar1
            width 20px
            height 20px
            border-radius 50%
            font-size 22px
            position absolute
            top 20px
            right 50px
        .more
          font-size 22px
          position absolute
          top 20px
          right 10px
      .homeContent
        padding 10px
        margin-top 10px
        .itemTop
          position relative
          width 100%
          display flex 
          flex-wrap nowrap
          margin-bottom 10px
          .user
            width 30% 
            img
              float left
              width 40px
              height 40px
              vertical-align middle
              border-radius 50%
            .name_date_container
              display flex 
              flex-wrap wrap
              padding 5px
              span
                font-size 14px
                vertical-align middle
                &:nth-child(2)
                  font-size 10px
                  opacity 0.5
          .btn
            position absolute
            width 50px
            height 30px
            top 3px
            right 20px
            text-align center
            background-color #4CAF50
            color #fff
            border-radius 16px
            border: none;
            outline none
          .right
            position absolute
            top 8px
            right 0
        .BigPic
          width 350px
          height 350px
        .text
          font-size 16px
          text-indent 2em
          margin-top 10px
        .biaoqian
          display flex
          margin-top 10px
          button 
            width 80%
            border-radius 11px
            border none 
            outline none
      .itemBottom
        padding 10px
        .icon
          display flex
          .iconleft
            width 80%
            display flex
            .span
              width 20%
              font-size 30px
              &.red
                color red
          .right
            font-size 30px
            position absolute
            right 5px
        .hotAndComment
          margin-top 5px
          opacity 0.8
          span 
            margin-right 5px
        .comment
          padding-top 5px
          margin-top 5px
          .commentname
            font-weight bold
            color black
          .commenttext
            opacity 0.8
</style>
