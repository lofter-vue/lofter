<template>
  <div @click="dayin">
    <div v-if="users.length>0">
      <div></div>
      <ul>
        <li v-for="(item,index) in users[0]" :key="index">
          <div class="listLeft" >
          <span>
            <img :src="item.avatar">
            <div class="userInfo">
              <span class="name">{{item.name}}</span>
              <span class="info">{{item.article[0].content}}</span>
            </div>
          </span>
        </div>
        </li>
      </ul>
    </div>
    <div v-else>
      没有此用户
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        users:[],
        uni:[]
      }
    },
    mounted(){
      this.$eventBus.$on('searchUser',attention => {
        console.log(attention);
        this.uni = JSON.parse(JSON.stringify(attention))
        // console.log(111,arr);
        // setTimeout(() => {
        //   this.uni = arr
        // }, 1000);
      })
    },
    methods:{
      dayin(){
        setTimeout(() => {
          console.log(this.uni);
        }, 1000);
      }
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.listLeft
        width 80%
        height 100%
        padding-left 6%
        box-sizing border-box
        span 
          width 100%
          height 100%
          display flex
          justify-content start
          align-items center
          img 
            width 50px
            height 70px
            padding 10px 0
            box-sizing border-box
            border-radius 50%
          .userInfo
            margin-left 10%
            .name
              font-size 18px
              font-weight bold
            .info
              display block
              width 90%
              font-size 13px
              margin-top 8px
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
</style>
