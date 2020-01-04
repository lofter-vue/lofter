import {reqAttentions,reqaddattentionid} from '../../api'
import {REQ_ATTENTION,IS_SHOWA,IS_SHOWB,ADD_ATTENTIONID} from '../mutations_types'
export default {
  state: {
    attentions:[],
    isShowA:true,
    id:[]
  },
  actions: {
    //获取attention组件数据
    async getAttentionDatas({commit,state},attention){
      let arr = attention
      let _idList = arr.join('','')
      const result = await reqAttentions(_idList)
      if (result.status  == 0) {
        const attention = result.data
        commit(REQ_ATTENTION, attention)
      }
    },
    async getaddattentionid({commit,state}, _id){
      let  addid = state.attentions[0]._id
      const result = await reqaddattentionid({ _id, addid})
      if(result.status == 0){
        const id = result.data
        commit(ADD_ATTENTIONID,id)
      }
    }
  },
  mutations: {
    [REQ_ATTENTION](state,attention){
        state.attentions = attention
        setTimeout(() => {
        }, 100);
    },
    [ADD_ATTENTIONID](state,id){
        state.id = id
    },
    [IS_SHOWA](state){
        state.isShowA = true
    },
    [IS_SHOWB](state){
      state.isShowA = false
  }
  },
  getters: {
    
  }
}