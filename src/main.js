import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 公共样式
import "./assets/css/base.css";
import "./assets/font/iconfont.css"
import "./assets/font/iconfont.js"

// vant组件库
// $cnpm i vant -S
import vant from "vant";
import "vant/lib/index.css";

// 动画效果
// npm install animate.css --save
// npm install animate.css@3.7.2 --save
// import "animate.css";
import 'animate.css/animate.css'

import FastClick from 'fastclick'
// 移动设备上的浏览器默认会在用户点击屏幕大约延迟300毫秒后才会触发点击事件，
// 这是为了检查用户是否在做双击。为了能够立即响应用户的点击事件，才有了FastClick。
FastClick.attach(document.body);
// 插件 轮播图
// cnpm i swiper -S
import "swiper/css/swiper.min.css";

//配置axios
import axios from 'axios';
axios.defaults.baseURL = "http://127.0.0.1:3000/"
Vue.prototype.$axios = axios;

Vue.use(vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

