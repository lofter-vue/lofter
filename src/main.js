import Vue from "vue";
import 'lib-flexible/flexible';

import router from "./router";
import App from './App';
import store from "./store";

import {Button,Actionsheet} from 'mint-ui'


// 注册全局组件(mint-ui)
Vue.component(Button.name, Button)
Vue.component(Actionsheet.name, Actionsheet)

//全局事件总线
//Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false
new Vue({
  //全局事件总线
  beforeMount() {
    Vue.prototype.$bus = this
  },

  //注册局部组件
  render: h => h(App),

  router,
  store
}).$mount('#app')
