import { 
  SAVE_USER,
  SAVE_TOKEN,
  REMOVE_USER,
  REMOVE_TOKEN,
  UPDATA_AVATAR,
  SAVE_ATTENTION,
  SAVE_MYATTENTION,
  SAVE_ALLATTENTION,
  UPDATEUNATTENTION
} from "../mutations_types";

import { reqAutoLogin,reqAttentions } from "../../api";
export default {
  state: {
    userInfo:{},
    token: localStorage.getItem('token_key') ||'',
    attention:[],
    myAttention:[],
    allAttention:{},
    unAttention:[]
  },
  actions: {
    //登录保存用户信息
    saveUser({commit},userInfo){
      const {token,user} = userInfo
      commit(SAVE_USER,user)
      commit(SAVE_TOKEN,token)
      commit(SAVE_ATTENTION,user.attention)
      //将token保存到localstorage中
      localStorage.setItem('token_key', token)
    },

    //自动登录
    async autoLogin({commit,state}){
      if(!state.userInfo._id && state.token){
        const result = await reqAutoLogin()
        const {status,data} = result
        if(status === 0){
          commit(SAVE_USER,data)
          commit(SAVE_ATTENTION,data.attention)
        }
      }
    },

    //退出登录
    logOut({commit}){
      localStorage.removeItem('token_key')
      commit(REMOVE_USER)
      commit(REMOVE_TOKEN)
    },

    //查找我的关注
    async saveMyAttention({commit,state}){
      if(state.attention){
        let arr = state.attention
        let _idList = arr.join(',')
        let result = await reqAttentions(_idList)
        const {status,data} = result
        if(status === 0){
          commit(SAVE_MYATTENTION,data)
        }
      }
    },

    //查找没有关注list
    saveUnAttention({commit,state}){
      let a = state.allAttention
      let newUnattention = []
      state.attention.forEach(attentionedID => {
        delete a[attentionedID]
      })
      Object.keys(a).forEach(function(key){
        newUnattention.push(a[key])
      })
      commit(UPDATEUNATTENTION,newUnattention)
    }
  },
  mutations: {
    [SAVE_USER](state,user){
      state.userInfo = user
    },
    [SAVE_TOKEN](state,token){
      state.token = token
    },
    [REMOVE_USER](state){
      state.userInfo = {}
    },
    [REMOVE_TOKEN](state){
      state.token = ''
    },
    [UPDATA_AVATAR](state,avatar){
      state.userInfo.avatar = avatar
    },
    [SAVE_ATTENTION](state,attention){
      state.attention = attention
    },
    [SAVE_MYATTENTION](state,attention){
      state.myAttention = attention
    },
    [SAVE_ALLATTENTION](state,allAttention){
      state.allAttention = allAttention
    },
    [UPDATEUNATTENTION](state,UnAttention){
      state.unAttention = UnAttention
    }
  }
  // getters: {
  //   unAttention(state){
  //     let newArr = []
  //     state.attention.forEach(attentionedID => {
  //       state.allAttention.forEach(attention => {
  //         if(attention._id != attentionedID){
  //           newArr.push(attention)
  //         }
  //       })
  //     })
  //     this.unAttention = newArr
  //     newArr = []
  //   }
  // }
}