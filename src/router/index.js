import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from "./routes/home";
import category from "./routes/category";
import cart from "./routes/cart";
import my from "./routes/my";
import search from "./routes/search";
import details from "./routes/details";
import publics from "./routes/publics";
import address from "./routes/address";
import order from "./routes/order";

const routes = [{
    path: "/",
    redirect: "/advertpage" //默认进入广告页
  },
  home, //首页
  category, //分类
  ...cart, //购物车
  ...my, //我的
  search, //搜索
  details, //商品细节
  ...publics, //公共路由
  ...address, //地址 es6语法
  ...order,// 订单
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior () {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  }
})

export default router