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
                v-for="(mySub, index) in myAttention"
                :key="index"
              >
                <img class="img" :src="mySub.avatar" alt="" />
                {{ mySub.name }}
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
              v-for="(recSub, index) in unAttention"
              :key="index"
            >
              <img class="img" :src="recSub.avatar" alt="" />
              {{ recSub.name }}
              <span class="badge init" :ref="recSub.id" @click="subscr(recSub._id,index)">{{isSub}}</span>
              <span class="badge init" :ref="recSub.id" @click="subscr(recSub._id)">{{addAtten.indexOf(recSub._id) === -1 ? '订阅':'已订阅'}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import {mapState,mapGetters} from 'vuex'
import {Toast} from 'mint-ui'
import BScroll from 'better-scroll'
import { SAVE_USER , SAVE_ATTENTION ,SAVE_ALLATTENTION} from "../../store/mutations_types";
import {reqAllAttentions,reqaddattentionid} from '../../api'

  export default {
    name:"Subscription",
    data() {
      return {
        isSub:"订阅",
        top:0,
        allAttention:[],
        addAtten:[]
      }
    },
    async mounted() {
    let result = await reqAllAttentions()
    if(result.status === 0){
      let all = {}
      result.data.forEach(item =>{
        all[item._id] = item
      })
      this.$store.commit(SAVE_ALLATTENTION,all)
    }else{
      Toast('出错了')
    }
    this.scroll = new BScroll(".container",{
          mouseWheel: true,
          scrollY:true,
          click:true,
          bounce: false
      })
    },
    methods: {
    async subscr(addId){
        this.addAtten.push(addId)
        let _id = this.userInfo._id
        let result = await reqaddattentionid({_id,addId})
        if(result.status == 0){
          this.$store.commit(SAVE_USER,result.msg)
          this.$store.commit(SAVE_ATTENTION,result.msg.attention)
          this.$store.dispatch("saveMyAttention")
          this.myAttention.push(result.msg)
        }
      }
    },  
    computed: {
      ...mapState({
          isShowA:state => state.Home.isShowA,
          showLists:(state) => state.user.attention,
          userInfo:(state) => state.user.userInfo,
          myAttention:(state) => state.user.myAttention,
          unAttention:(state) => state.user.unAttention,
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
    padding-bottom 20%
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