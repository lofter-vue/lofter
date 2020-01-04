<template>
<VuePullRefresh class="xiala" :on-refresh="onRefresh">
  <div class="attention" ref="attention" v-if="showList">
    <div class="allcontainer">
        <!-- 第二栏 -->
      <ol class="breadcrumb second">
        <li>推些有趣的人给你</li>
        <span class="iconfont icon-qianjin more"></span>
        <img class="avactar" src="./img/avactar.jpg" alt="">
        <img class="avactar" src="./img/big.jpg" alt="">
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
                <span class="iconfont icon-gengduo right"></span>
              </div>
          </div>
          <img class="BigPic" src="https://thumbnail0.baidupcs.com/thumbnail/d3cb71ddckc67aab08b50cb2e3b37407?fid=3713260932-250528-108837212194467&time=1578027600&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-S%2BXEOV0p%2BJBB511KhZyYOn0fUiU%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=59845039575848254&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video" alt="">
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
                <span class="iconfont icon-fenxiang right"></span>
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




    <div class="border" v-for="(item, index) in showList" :key="index++">
        <div class="homeContent">
          <div class="itemTop">
              <div class="user">
                <img :src="item.avatar" alt="">
                <div class="name_date_container">
                <span>{{item.name}}</span>
                <span>{{item.data}}</span>
                </div>
                <button class="btn" type="default" size="small" @click="change" v-show="isShow">关注</button>
                <span class="iconfont icon-gengduo right"></span>
              </div>
          </div>
          <img class="BigPic" src="https://thumbnail0.baidupcs.com/thumbnail/d3cb71ddckc67aab08b50cb2e3b37407?fid=3713260932-250528-108837212194467&time=1578027600&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-S%2BXEOV0p%2BJBB511KhZyYOn0fUiU%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=59845039575848254&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video" alt="">
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
                <span class="iconfont icon-fenxiang right"></span>
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

Vue.component(Button.name, Button)
  export default {
    name:"Attention",
    data() {
      return {
        isAttention:false,
        isShow:true,
      }
    },
    components:{
      VuePullRefresh
    },
    methods: {  
      change(index){
      let id = index
      this.showList.forEach((item,index1)=>{
          if(item.id == index){
            this.isShow = !this.isShow
          }
      })      
      },
      
      onRefresh: function () {
          return new Promise(function (resolve, reject) {
              setTimeout(function () {
                  resolve();
              }, 1000);
          });
      },

      initScroll(){
          this.attention = new BScroll(this.$refs.attention,{
          scrolly:true,
      })
      // this.attention.hasVerticalScroll = true
      },
    },

    computed: {
      ...mapState({
        showList:(state) => state.Home.attentions,
        isShowA:(state) => state.Home.isShowA
      })
    },
    watch: {
      showList(){
        this.$nextTick(()=>{
        this.initScroll()
        })
      }
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.xiala
  background-color #fff
.attention
  width 100%
  height 100%
  .allcontainer
    background-color #eee
    margin-top -30px
    .second
      overflow hidden
      width 100%
      float left
      margin 5px
      margin-bottom 10px
      .avactar
        width 20px
        height 20px
        border-radius 50%
        font-size 22px
        float right
      .more
        font-size 22px
        float right
    .homeContent
      padding 10px
      margin-top 30px
      .itemTop
        position relative
        width 100%
        display flex 
        flex-wrap nowrap
        .user
          width 30% 
          img
            float left
            width 40px
            height 40px
            vertical-align middle
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
          top 0
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
      .biaoqian
        display flex
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
        .commentname
          font-weight bold
          color black
        .commenttext
          opacity 0.8


.border
  border-bottom 1px solid #fff       
</style>
