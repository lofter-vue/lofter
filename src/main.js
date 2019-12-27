import Vue from "vue";
import 'lib-flexible/flexible';

import router from "./router";
import App from './App';
import store from "./store";
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
