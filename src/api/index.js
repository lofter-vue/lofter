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

//发送search页面数据请求
export const reqSearch = () => myAxios.get('/searchList')

//获取关注信息请求
export const reqAttentions = (_idList) => myAxios.post('/getAttentions',{_idList})

// 获取小说书籍信息
export const reqNovelInfo = () => myAxios.get('/novel')

// 获取菜单详情信息
export const reqNavMenuInfo = () => myAxios.get('/menuInfo')

// 获取音乐播放信息
export const reqMusicPlay = () => myAxios.get('/musicList')

// 获取更新个人文章请求
export const reqUpdateArtical = ( _id, articalObj) => myAxios.post('/updataArtical',{ _id, articalObj})

//获取关注id
export const reqaddattentionid = ( _id, addid) => myAxios.post('/addattention',{ _id, addid})
