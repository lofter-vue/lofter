import {reqAttentions,reqaddattentionid} from '../../api'
import {REQ_ATTENTION,IS_SHOWA,IS_SHOWB,ADD_ATTENTIONID,UPDATEATTENTION} from '../mutations_types'
export default {
  state: {
    attentions:[],
    isShowA:true,
    userInfo:{}
  },
  actions: {
    //获取attention组件数据
    // async getAttentionDatas({commit,state},attention){
    //   let arr = attention
    //   let _idList = arr.join('','')
    //   const result = await reqAttentions(_idList)
    //   if (result.status  == 0) {
    //     const attention = result.data
    //     commit(REQ_ATTENTION, attention)
    //   }
    // },
    async getaddattentionid({commit,state}, {_id,addId}){
      const result = await reqaddattentionid({_id,addId})
      if(result.status == 0){
        const userInfo = result.msg
        commit(ADD_ATTENTIONID,userInfo)
      }
    }
  },
  mutations: {
    [REQ_ATTENTION](state,attention){
        state.attentions = attention
        setTimeout(() => {
        }, 100);
    },
    [ADD_ATTENTIONID](state,userInfo){
        state.userInfo = userInfo
    },
    [IS_SHOWA](state){
        state.isShowA = true
    },
    [IS_SHOWB](state){
      state.isShowA = false
  },
  [UPDATEATTENTION](state,attention){
    console.log(attention)
    state.attentions = attention
  }
  },
  getters: {
    
  }
}