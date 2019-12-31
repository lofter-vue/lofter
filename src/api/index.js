import myAxios from "./myaxios.js";

//用户登录发送请求
export const reqLogin = (username,password) => myAxios.post('/login',{username,password})

//用户注册发送请求
export const reqRegister = (username,password) => myAxios.post('/manage/user/add',{username,password}) 

//发送自动登录请求
export const reqAutoLogin = () => myAxios('/auto_login')

//首页资源发送请求
export const reqHome = () => myAxios('/homeData',{
  headers:{
    needCheck:true
  }
})

//更新头像
export const reqUpdataAvatar = (_id,avatar) => myAxios.post('/updateAvatar',{_id,avatar})

export const reqAttentions = (_idList) => myAxios.post('/getAttentions',{_idList})

//发送search页面数据请求
export const reqSearch = () => myAxios.get('/searchList')