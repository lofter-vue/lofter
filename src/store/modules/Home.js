import {reqAttentions} from '../../api'
import {REQ_ATTENTION,IS_SHOWA,IS_SHOWB} from '../mutations_types'
export default {
  state: {
    attentions:[],
    isShowA:true,
  },
  actions: {
    //获取attention组件数据
    async getAttentionDatas({commit,state},attention){
      let arr = ["5dccd15ff495734150be910f"]
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
        console.log(attention)
        state.attentions = attention
        setTimeout(() => {
        console.log(state.attentions)
        }, 100);
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