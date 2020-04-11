import Vue from 'vue'
import AntD from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './bussiness/routers/index'
import App from './App.vue'
import plugin from "./bussiness/plugin/index"

Vue.config.productionTip = false
Vue.use(AntD)
Vue.use(plugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
