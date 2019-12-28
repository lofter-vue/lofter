import myAxios from "./myaxios.js";

//用户登录发送请求
export const reqLogin = (username,password) => {
  return myAxios.post('/login',{username,password}) 
}
