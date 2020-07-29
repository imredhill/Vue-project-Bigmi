# mi

项目描述：
本项目是一款模仿小米手机商城的APP，使用Vue 和 webpack 构建的单页面应用，能够浏览手机、电脑等各种商品，用户可以进行下单、订单查询、设置配送地址、登录注册等常用功能。 

责任描述：
1.	使用Vue CLI快速搭建开发环境，使用vue ui管理项目配置，使用Vue Router实现路由切换。
2.	使用Flex响应式布局，适应不同大小屏幕的手机，使用iconfont字体图标。
3.	使用Vant组件库，完成轮播图，轻提示，Tab切换，懒加载等效果，使用Animate.css 添加页面切换动画效果。
4.	使用better-scroll完成了分类页左右联动的滚动，以及其他下拉刷新，上拉加载的功能。
5.	使用fastclick，处理移动端click事件300毫秒延迟。页面添加点击置顶和loading效果，提升用户体验。
6.	使用 Vuex 抽离数据实现跨组件的数据传递，实现添加/修改购物车订单、收货地址，实现付款流程。
7.	项目使用组件化开发，能大幅提高应用开发效率、测试性、复用性等，使用 Scss 预编译语言，定义全局样式。
8.	用户进入APP时，判断本地数据缓存来决定先跳转引导页或者广告页。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
