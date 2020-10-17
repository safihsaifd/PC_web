import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyHeader from "./components/MyHeader" //扩展名.vue或.js都可省略
import MyFoot from "./components/MyFoot"
import LunBo from "./components/LunBo"
import LunBo2 from "./components/LunBo2"
//引入axios
import axios from "axios"
//引入v-lazy
import Vuelazyload from 'vue-lazyload'

// 引入 VueAwesomeswiper :轮播图
import VueAwesomeswiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeswiper)

//引用v-lazy
Vue.use(Vuelazyload)

//让component变成全局组件:
Vue.component("my-header",MyHeader)
Vue.component("my-foot",MyFoot)
Vue.component("lunbo",LunBo)
Vue.component("lunbo2",LunBo2)

axios.defaults.baseURL="http://127.0.0.1:5050";
//原型链上创建axios
Vue.prototype.axios=axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
