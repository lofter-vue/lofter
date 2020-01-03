import {reqAttentions} from '../../api'
import {REQ_ATTENTION,IS_SHOWA,IS_SHOWB} from '../mutations_types'
export default {
  state: {
    attention:[],
    isShowA:true,
  },
  actions: {
    //获取attention组件数据
    async getAttentionDatas({commit,state},attention){
      let arr = []
      attention.forEach((item,index)=>{
        arr.push(item._id)
      })
      
      let _idList = arr.join('','')
      const result = await reqAttentions(_idList)
      if (result.status  == 0) {
        const attention = result.data
        console.log(attention)
        commit(REQ_ATTENTION, attention)
      }
    }
  },
  mutations: {
    [REQ_ATTENTION](state,attention){
        state.attention = attention
        console.log(state.attention)
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