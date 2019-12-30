import { 
  SAVE_USER,
  SAVE_TOKEN,
  REMOVE_USER,
  REMOVE_TOKEN,
  UPDATA_AVATAR
} from "../mutations_types";

import { reqAutoLogin } from "../../api";
export default {
  state: {
    userInfo:{},
    token: localStorage.getItem('token_key') ||''
  },
  actions: {
    //登录保存用户信息
    saveUser({commit},userInfo){
      const {token,user} = userInfo
      commit(SAVE_USER,user)
      commit(SAVE_TOKEN,token)
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
        }
      }
    },

    //退出登录
    logOut({commit}){
      localStorage.removeItem('token_key')
      commit(REMOVE_USER)
      commit(REMOVE_TOKEN)
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
      console.log(avatar);
      
      state.userInfo.avatar = avatar
    }
  },
  getters: {
    
  }
}