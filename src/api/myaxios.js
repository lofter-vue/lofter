import axios from "axios";
import qs from "querystring";
import { Indicator, MessageBox, Toast } from "mint-ui";
import store from "../store";
// import router from "../router";

//装饰器语法
const instence = axios.create({
  baseURL: '/api',
  timeout: 20000
})
//请求拦截器
instence.interceptors.request.use((config) => {
  Indicator.open()
  //从redux中获取登录用户的token
  const { token } = store.state.user.token
  //若取到了token，将token数据放入配置项config的头中
  if (token) config.headers.Authorization = 'loft_' + token
  let data = config.data
  if (data instanceof Object) {
    config.data = qs.stringify(data)
  }
  console.log(config)
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
