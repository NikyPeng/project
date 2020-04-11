import cache from "./cache"
import axios from "axios"
class Plugin{
  install(Vue, opts){
    window.console.log("======", opts)
    Vue.prototype.$cache = cache; //缓存类方法
    Vue.prototype.$axios = axios; //请求
  }
}

export default new Plugin();