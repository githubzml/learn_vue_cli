// 入口文件
import Vue from 'vue'
import App from './App.vue'
import plugin from "./plugins/index"

Vue.config.productionTip = false
// 插件
Vue.use(plugin);

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$Bus = this;
  }
}).$mount('#app')
