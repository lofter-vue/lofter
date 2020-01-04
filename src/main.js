import Vue from "vue";
import 'lib-flexible/flexible';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'  
import router from "./router";
import App from './App';
import store from "./store";
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
  beforeMount() {
    Vue.prototype.$bus = this
    
  },

  //注册局部组件
  render: h => h(App),

  router,
  store
}).$mount('#app')
