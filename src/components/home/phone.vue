<template>
  <div style="padding-bottom:20px">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a0f5b1e18953b0d62a3670045f130b75.jpg?thumb=1&w=720&h=360"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5cdf9277bb658c41116e75d49bf30271.jpg?thumb=1&w=720&h=360"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/940c0e057307cc2078995e5b74fcb7d6.jpg?thumb=1&w=720&h=360"
          alt
        />
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播图 -->

    <!-- 中间商品 -->
    <div style="padding:0 5px">
      <van-row type="flex" justify="center">
        <van-col span="24" style="margin-top:5px">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7414ea8fc38d56fdbb6e2667b0c4975b.jpg?thumb=1&w=696&h=436"
          />
        </van-col>
      </van-row>
      <div class="describe" style="background-color:white">
        <van-row type="flex" justify="center" style="padding:9px 12px">
          <van-col span="16">
            <h1 style="padding:5px 0">小米10</h1>
            <p style="line-height:30px">骁龙865处理器/1亿像素8K电影相机</p>
          </van-col>
          <van-col span="8">
            <h1 style="float:right;color:red;padding:5px 0">￥3999起</h1>
            <van-button
              to="/details"
              style="float:right;height:25px;font-size:13px"
              type="danger"
            >立即预定</van-button>
          </van-col>
        </van-row>

        <van-row type="flex" justify="center">
          <van-col span="24" style="margin-top:5px">
            <van-image
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/210dce8c3828bcc5ee4afd683e7ffc84.jpg?thumb=1&w=696&h=436"
            />
          </van-col>
        </van-row>
        <van-row type="flex" justify="center" style="padding:9px 12px">
          <van-col span="16">
            <h1 style="padding:5px 0">小米10 Pro</h1>
            <p style="line-height:30px">骁龙865处理器 / 50倍数字变焦</p>
          </van-col>
          <van-col span="8">
            <h1 style="float:right;color:red;padding:5px 0">￥4999起</h1>
            <van-button
              to="/details"
              style="float:right;height:25px;font-size:13px"
              type="danger"
            >立即预定</van-button>
          </van-col>
        </van-row>

        <van-row type="flex" justify="center">
          <van-col span="24" style="margin-top:5px">
            <van-image
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742f1d4e57dfe913015ec0d876cf7122.jpg?thumb=1&w=696&h=436"
            />
          </van-col>
        </van-row>
        <van-row type="flex" justify="center" style="padding:9px 12px">
          <van-col span="16">
            <h1 style="padding:5px 0">Redmi K30 Pro</h1>
            <p style="line-height:30px">双模5G，骁龙865，弹出全面屏...</p>
          </van-col>
          <van-col span="8">
            <h1 style="float:right;color:red;padding:5px 0">￥2999起</h1>
            <van-button
              to="/details"
              style="float:right;height:25px;font-size:13px"
              type="danger"
            >立即预定</van-button>
          </van-col>
        </van-row>

        <van-row type="flex" justify="center">
          <van-col span="24" style="margin-top:5px">
            <van-image
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/369da5b95afd2dec52fdb2329810b2fc.jpg?thumb=1&w=696&h=436"
            />
          </van-col>
        </van-row>
        <van-row type="flex" justify="center" style="padding:9px 12px">
          <van-col span="16">
            <h1 style="padding:5px 0">Redmi K30 5G</h1>
            <p style="line-height:30px">双模5G，120Hz流速屏，索尼...</p>
          </van-col>
          <van-col span="8">
            <h1 style="float:right;color:red;padding:5px 0">￥1999起</h1>
            <van-button
              to="/details"
              style="float:right;height:25px;font-size:13px"
              type="danger"
            >立即预定</van-button>
          </van-col>
        </van-row>
      </div>
      <van-grid :border="false" :column-num="2">
        <van-grid-item>
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/752cf7a42796fc30b22af1224b205dfd.jpg?thumb=1&w=344&h=280"
          />
          <h1 style="margin-top:5px;font-weight:900">Redmi 8A</h1>
          <h2 style="margin:3px">5000mAh超长续航</h2>
          <h3 style="padding:0 0 5px;color:red">￥599起</h3>
          <van-button to="/details" type="danger" style="height:30px;width:77%;font-weight:900">立即购买</van-button>
        </van-grid-item>
        <van-grid-item>
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3225aa248070f97f0f001c860013c460.jpg?thumb=1&w=344&h=280"
          />
          <h1 style="margin-top:5px;font-weight:900">Redmi 8</h1>
          <h2 style="margin:3px">5000mAh超长续航</h2>
          <h3 style="padding:0 0 5px;color:red">￥749起</h3>
          <van-button to="/details" type="danger" style="height:30px;width:77%;font-weight:900">立即购买</van-button>
        </van-grid-item>
        <van-grid-item>
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8025107813883a20d3f2d956ad80ea38.jpg?thumb=1&w=344&h=280"
          />
          <h1 style="margin-top:5px;font-weight:900">Redmi Note 8</h1>
          <h2 style="margin:3px">千元4800万四摄</h2>
          <h3 style="padding:0 0 5px;color:red">￥899起</h3>
          <van-button to="/details" type="danger" style="height:30px;width:77%;font-weight:900">立即购买</van-button>
        </van-grid-item>
        <van-grid-item>
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1b99ea2a65d3851f90567171b0a92b3c.jpg?thumb=1&w=344&h=280"
          />
          <h1 style="margin-top:5px;font-weight:900">Redmi K30 Pro 变焦版</h1>
          <h2 style="margin:3px">双模5G，骁龙865</h2>
          <h3 style="padding:0 0 5px;color:red">￥3799起</h3>
          <van-button to="/details" type="danger" style="height:30px;width:77%;font-weight:900">立即购买</van-button>
        </van-grid-item>
      </van-grid>
      <div class="describe" style="background-color:white">
        <van-row type="flex" justify="center">
          <van-col span="24" style="margin-top:5px">
            <van-image
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f85793e8033fa0b45d3c858824db447.jpg?thumb=1&w=696&h=436"
            />
          </van-col>
        </van-row>
        <van-row type="flex" justify="center" style="padding:9px 12px">
          <van-col span="16">
            <h1 style="padding:5px 0">Redmi Note 8 Pro</h1>
            <p style="line-height:30px">6400万全场景四摄，专业游戏...</p>
          </van-col>
          <van-col span="8">
            <h1 style="float:right;color:red;padding:5px 0">￥1299起</h1>
            <van-button
              to="/details"
              style="float:right;height:25px;font-size:13px"
              type="danger"
            >立即预定</van-button>
          </van-col>
        </van-row>
      </div>
      <van-grid :border="false" :column-num="2">
        <van-grid-item>
          <van-image src="https://i8.mifile.cn/v1/a1/22f203ab-44f4-6b89-06b4-e01e6f00c7f8.webp" />
          <h1 style="margin-top:5px;font-weight:900">Redmi 8A</h1>
          <h2 style="margin:3px">5000mAh超长续航</h2>
          <h3 style="padding:0 0 5px;color:red">￥599起</h3>
          <van-button to="/details" type="danger" style="height:30px;width:77%;font-weight:900">立即购买</van-button>
        </van-grid-item>
        <van-grid-item>
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/64a04d4f67a23c2d8643aaba52e2392b.jpg?thumb=1&w=344&h=280"
          />
          <h1 style="margin-top:5px;font-weight:900">Redmi 8</h1>
          <h2 style="margin:3px">5000mAh超长续航</h2>
          <h3 style="padding:0 0 5px;color:red">￥749起</h3>
          <van-button to="/details" type="danger" style="height:30px;width:77%;font-weight:900">立即购买</van-button>
        </van-grid-item>
      </van-grid>
    </div>
         <div class="footer">
        <div class="gotop" v-show="gotop" @click="toTop">
          <van-icon name="arrow-up" size="20px" />
        </div>
      </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      gotop: false
    };
  },
  methods: {
    showBtn() {
      // 计算距离顶部的高度，当高度大于660显示回顶部，小于660则隐藏（默认隐藏）
      /*获取当前页面滚动条纵坐标的位置
        IE9及以上：可以使用window.pageYOffset或者document.documentElement.scrollTop ，
        safari： window.pageYOffset 与document.body.scrollTop都可以
        Chrome：谷歌浏览器只认识document.body.scrollTop;*/
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 777) {
        let that = this;
        that.gotop = true;
      } else {
        that.gotop = false;
      }
    },
    toTop() {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 70;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.showBtn);
  }
};
</script>


<style lang="scss" scoped>
.footer .gotop {
  width: 20px;
  height: 20px;
  text-align: center;
  position: fixed;
  right: 3%;
  bottom: 11%;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  background: rgba(10, 10, 10, 0.4);
  color: #bbbbbb;
}
.my-swipe {
  width: 100%;
  height: 180px;
  margin-top: 90px;
  transform: translateZ(0); //主要是加了这个，轮播下面的div就不抖动了
  img {
    height: 100%;
  }
}
.my-swipe .van-swipe-item {
  //   height: 100%;
  color: #fff;
  font-size: 20px;
  // line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>