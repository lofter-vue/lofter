import Vue from "vue";
import 'lib-flexible/flexible';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'  
import router from "./router";
import App from './App';
import store from "./store";

import {Button,Actionsheet} from 'mint-ui'


// 注册全局组件(mint-ui)
Vue.component(Button.name, Button)
Vue.component(Actionsheet.name, Actionsheet)


import './validate';


import VueLazyload from 'vue-lazyload'
import loading from '@/common/images/loading.gif'

// 懒加载
Vue.use(VueLazyload,{
  loading,
})
//全局事件总线
//Vue.prototype.$bus = new Vue()
Vue.use(MintUI)
Vue.config.productionTip = false
new Vue({
  //全局事件总线
  // beforeCreate(){
  //   Vue.prototype.$EventBus = new Vue()
  // },

  //注册局部组件
  render: h => h(App),

  router,
  store
}).$mount('#app')
