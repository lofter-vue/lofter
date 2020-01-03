import axios from "axios";
import qs from "querystring";
import { Indicator, MessageBox, Toast } from "mint-ui";
import store from "../store";
import router from "../router";

//装饰器语法
const instence = axios.create({
  baseURL: '/api',
  timeout: 20000
})
//请求拦截器
instence.interceptors.request.use((config) => {
  Indicator.open()

  let data = config.data
  if (data instanceof Object) {
    config.data = qs.stringify(data)
  }

  //从store中获取登录用户的token
  const { token } = store.state.user
  //若取到了token，将token数据放入配置项config的头中
  if (token){
    config.headers.Authorization = token
  }else{
    //若当前请求接口需要token,但没有token时，不发送请求,进入错误流程
    //此时处于未登录状态
    const needCheck = config.headers.needCheck
    if (needCheck) {
      throw new Error('没有登录,不能发请求')
    }
  }
  return config
})

//响应拦截器
instence.interceptors.response.use(
  //请求成功
  (response) => {
    Indicator.close()
    return response.data
  },
  //请求失败
  (error) => {
    Indicator.close()
    const response = error.response
    const path = router.currentRoute.path
    if(!response){
      //没法请求，无token,需要重新登陆
      if (path !== '/login') {
        router.replace('/login')
        Toast(error.message)
      }
    }else{
      //发请求，但token过期，此时401
      if(response.status === 401){
        //若此时没在登录界面，需要退出登录（清除user中的数据，并返回到登录界面）
        if (path !== '/login') {
          store.dispatch('logOut')
          router.replace('/login')
          Toast(response.data.message || '登录失效，请重新登录')
        }
      }else if(response.status === 404){
        MessageBox('您访问的资源不存在')
      }else{
        MessageBox('请求错误，'+error.message)
      }
    }



    let { status } = error.response
    if (status === 401) {
      // const path = router.currentRoute.path
      // if (path !== '/login') {
      //   store.dispatch('logOut')
      //   router.replace('/login')
      //   Toast(response.data.message || '登录失效，请重新登录')
      // }
      console.log('无权限')
    } else {
      MessageBox(error.message)
    }
    return Promise.reject()
  }
)

export default instence;
