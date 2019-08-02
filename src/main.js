import Vue from 'vue'
import App from './App.vue'
// 控制台提示信息 开发环境提示 详细一些
Vue.config.productionTip = false
// main.js职责
// 1.导入项目需要以来的资源
// 2.创建一个root实例
new Vue({
  render: h => h(App)
  // mount首页加载
}).$mount('#app')
