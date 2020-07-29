<template>
  <div>
    <van-row class="toploginNav">
      <van-col
        span="3"
        @click="$router.go(-1)"
        style="width:40px;height:40px;text-align:center;border-radius:55%;line-height:40px;color:orange;background:rgba(20, 15, 10, 0.1);position:fixed;left:5px;top:5px;z-index:9999"
      >
        <span class="iconfont icon-icon_zuo"></span>
      </van-col>
      <van-col
        span="3"
        @click="showShare = true"
        style="width:30px;height:30px;text-align:center;line-height:30px;position:absolute;right:7px;top:7px;z-index:9999"
      >
       <img src="../assets/img/share.png" alt="" style="width:100%">
      </van-col>
      <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
    </van-row>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7c9379c369ae0b92e0864ae7091ccb0c.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/73687a4777c909d7460fda7fdb530dfc.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9c5b77e7780de29e42faf2ed4d936ac0.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/799066a0d7b6e5070bf6f46cec9b130b.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d53a1f12cf97f3fcf40b6cdfe311eb9.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d32265f5e3eb1496adf4eb53af802906.jpg"
          alt
        />
      </van-swipe-item>
    </van-swipe>
    <h1 class="title" style="font-weight:500">
      <img
        style="height:19px;width:35px;display:inline-block"
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3f5857bb24d798edfa4d800481aeb894.png"
        alt
      />
      {{goods.name}}
    </h1>
    <h2 class="price" style="font-weight:500">￥{{goods.price}}</h2>
    <p>{{goods.color}}</p>
    <div class="content">
      <font color="#ff4a00">「火爆预售中！买赠立式风冷无线充；6月1日0点付尾款限量+1元得冰封散热背夹」</font>向往的生活同款 / 骁龙865处理器 / 1亿像素8K电影相机，50倍数字变焦，10倍混合光学变焦 / 双模5G / 新一代LPDDR5内存 / 50W极速闪充+30W无线闪充+10W无线反充 / 对称式立体声 / 90Hz刷新率+180Hz采样率 / UFS 3.0高速存储 / 全面适配WiFi 6 / 超强VC液冷散热 / 4500mAh大电量 / 多功能NFC
    </div>
    <van-divider style="margin:2px 0" />
    <van-grid :border="false" :column-num="5" class="grid">
      <van-grid-item>
        <img
          src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png"
          alt
        />
        <h1>CPU</h1>
        <h2>骁龙985</h2>
      </van-grid-item>
      <van-grid-item>
        <img src="https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png" alt />
        <h1>四摄像头</h1>
        <h2>10800万...</h2>
      </van-grid-item>
      <van-grid-item>
        <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png" alt />
        <h1>超大屏</h1>
        <h2>6.67英寸</h2>
      </van-grid-item>
      <van-grid-item>
        <img src="https://i8.mifile.cn/b2c-mimall-media/8941adac25333e785b9cc78ca11f4f27.png" alt />
        <h1>存储容量</h1>
        <h2>256GB</h2>
      </van-grid-item>
      <van-grid-item>
        <img src="https://i8.mifile.cn/b2c-mimall-media/c8ec0829241324e401744da627482560.png" alt />
        <h1>极速畅玩</h1>
        <h2>8GB</h2>
      </van-grid-item>
    </van-grid>
    <img
      style="padding:10px 0"
      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/db291a0e06c70f79aebc628564aac476.jpg?w=1080&h=314&bg=FFFFFF"
      alt
    />
    <img
      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7c800f765b6b795094659f413e289ba0.jpg?w=1080&h=218&bg=FEFEFE"
      alt
    />
    <img
      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/75a8abea38d8ebe9748c9903f12c9d77.jpg?w=1080&h=2531&bg=FFFFFF"
      alt
    />
    <img v-for="img in imageList" v-lazy="img" :key="img" />

    <van-goods-action>
      <van-goods-action-icon
        @click="$router.push('/home/recommend')"
        icon="home-o"
        color="#f37d0f"
      />
      <van-goods-action-icon @click="$router.push('/cart')" icon="cart-o"  />
      <van-goods-action-icon icon="service-o" @click="csFn()" />
      <van-action-sheet v-model="show" title="在线客服">
        <div class="contentt">
          <h1 style="color:#f37d0f;font-size:18px;font-weight:300">欢迎联系大米客服！</h1>
          <p style="padding:10px">大米客服在线时间为09:00-21:00</p>
          <p style="padding:10px">客服电话:8888-8888888</p>
          <h3 style="font-size:14px">
            <van-icon name="manager-o" color="#f37d0f" />客服一号:嘻嘻
          </h3>
          <h3 style="font-size:14px">
            <van-icon name="manager-o" color="#f37d0f" />客服二号:哈哈
          </h3>
        </div>
      </van-action-sheet>
      <van-goods-action-button type="warning" @click="add(goods)" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" @click="buy" />
    </van-goods-action>
    <div class="footer">
      <div class="gotop" v-show="gotop" @click="toTop">
        <van-icon name="arrow-up" size="20px" />
      </div>
    </div>
  </div>
</template>

<script>
// document.getElementById("app").scrollIntoView();

import { Toast } from "vant";
import { createNamespacedHelpers } from "vuex";
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
const { mapState, mapMutations } = createNamespacedHelpers("cart");
export default {
  data() {
    return {
       imageList: [
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cf6eb5c56a1cbe7815252e786f705c18.jpg?w=1080&h=2555&bg=10101',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/40269131242438c31c249cd94da5161c.jpg?w=1080&h=1989&bg=0',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9751e94afe52ff4cf7f674d8c3f8b664.jpg?w=1080&h=2300&bg=10101',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ad8e2811b0ab7b8056480eefecf3ba55.jpg?w=1080&h=2030&bg=101010',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7290f107b4c6664b01e401cf0729b8e.jpg?w=1080&h=2196&bg=0',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c37a54ea6c20bde564984f4995a5e999.jpg?w=1080&h=2121&bg=0',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a2f0c6acab1f34ce689c84df73fc2da7.jpg?w=1080&h=3134&bg=0',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e5faeed0365bcb8d11e2bacb4e09e67b.jpg?w=1080&h=2446&bg=101010',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a376c5e6bf73249b1599134574714300.jpg?w=1080&h=850&bg=0',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8aadb9ce21cf06f5c047472811b85735.jpg?w=1080&h=1178&bg=0',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b49a8d3c6310bc88b10e2a88a616300.jpg?w=1080&h=383&bg=101010',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/196adcc1ed6ab7ada04156081cdb87ec.jpg?w=1080&h=1482&bg=101010',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f3ff17248f45af02e61c070918c21783.jpg?w=1080&h=2320&bg=0',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b23cf971d936eee753d57050d9eb0898.jpg?w=1080&h=1883&bg=B0C0E',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/66e6f5361b1c228b74d0ab0b28c04fa9.jpg?w=1080&h=2114&bg=0',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e630456cba0a2dfe965eb237c6e5b0d8.jpg?w=1080&h=2154&bg=0',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c094dd1d1c8676fe72d856ad686d8d8b.jpg?w=1080&h=1574&bg=101010',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/70e838156f57946caf0749e4c1d7fe22.jpg?w=1080&h=1607&bg=0',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/170eb4ad68fd2eff0745bfedacb008b0.jpg?w=1080&h=1138&bg=101010',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e6a6adcf09e23831499ba8bebde7771.jpg?w=1080&h=1619&bg=10101',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eddf3b819eef6bc1116d4e9fc9207551.jpg?w=1080&h=2254&bg=10101',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f94d34385169fcea597646f6ac7c8ce7.jpg?w=1080&h=1981&bg=10101',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ab2074ef5af3bc0147ebf2671899f87.jpg?w=1080&h=1895&bg=0',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/745978dfc18f48a7455ca61d1b984fdc.jpg?w=1080&h=1651&bg=0',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac969522c979b889dbd0a7a64ec03f70.jpg?w=1080&h=1631&bg=0',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d947da5f4a11e33544d0657d6d85b48a.jpg?w=1080&h=2089&bg=101010',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7788af2898f7c0d5dc152ed8dda2e8a9.jpg?w=1080&h=886&bg=0',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c965928f0dbfff458ce929297dc50c13.jpg?w=1080&h=1735&bg=0',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ffe084972fca1430b0a67f85d552043.jpg?w=1080&h=1882&bg=101010',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd0eea6f868a29a0ca143d01b25e2496.jpg?w=1080&h=1014&bg=0',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d3dfed4b846328e747f2b94889277eda.jpg?w=1080&h=2027&bg=0',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2807e8ef0450f21cd2c6f1a0dff8281.jpg?w=1080&h=1569&bg=0',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c1e2dcd7d350c24f033b76bdaa56560.jpg?w=1080&h=2487&bg=2',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fc88fd153c1da1138fd621e00137d3e2.png?w=1080&h=427'
      ],
      gotop: false,
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" }
      ],
      show: false,
      goods: {
        id: 1,
        name: "小米10 Pro",
        price: "6999",
        num: 1
      }
    };
  },
  methods: {
    // 直接调用vuex里面方法
    ...mapMutations(["add"]),
    onSelect(option) {
      Toast(option.name);
      this.showShare = true;
    },
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
      if (that.scrollTop > 660) {
        let that = this;
        that.gotop = true;
      } else {
        that.gotop = false;
      }
    },

    buy() {
      // 判断用户名是否为空
      // 为空：跳转登陆界面
      // 不为空：跳转订单页面
      if (this.$store.state.username) {
        this.$store.commit("cart/add", this.goods);
        this.$router.push("/order");
      } else {
        this.$store.commit("cart/add", this.goods);
        this.$router.push({
          path: "/login",
          query: {
            path: "/order"
          }
        });
      }
    },
    csFn() {
      this.show = true;
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
  computed: {
    ...mapState({
      num: state => state.num
    })
  },
  mounted() {
    window.addEventListener("scroll", this.showBtn);
  },
  created() {
    //隐藏导航
    this.$store.state.vanTabbar = false;
  },
  // 切换组件生周期钩子，销毁函数
  beforeDestroy() {
    this.$store.state.vanTabbar = true;
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
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
.contentt {
  padding: 16px 16px 30px;
}
.my-swipe {
  width: 100%;
  height: 100%;
}
.my-swipe .van-swipe-item {
  //   height: 100%;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.title {
  font-size: 18px;
  margin: 5px 0 5px 15px;
}
.price {
  font-size: 16px;
  margin: 5px 0 5px 15px;
  color: salmon;
}
.content {
  margin: 5px 15px 5px 15px;
}
.grid {
  img {
    width: 28px;
    height: 28px;
  }
}
</style>