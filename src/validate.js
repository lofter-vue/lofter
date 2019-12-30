import Vue from "vue";
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)

//设置提示文本为中文
VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    name:'用户名',
    pwd:'密码',
    repwd:'重复密码',
  }
})
