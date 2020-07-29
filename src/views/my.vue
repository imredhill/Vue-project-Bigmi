<template>
  <div>
    <van-nav-bar :title="$route.name" />
    <van-row gutter="0" class="top">
      <van-col span="5" class="portrait">
        <van-image
          round
          width="50px"
          height="50px"
          type="cover"
          src="https://m.mi.com/static/img/avatar.76a75b8f17.png"
        />
      </van-col>

      <van-col span="17">
        <div class="login" v-if="$store.state.username">
          <a href="javascript:;" v-text="$store.state.username"></a>
          <!-- {{localStorage.username}} -->
        </div>
        <div class="login" v-else>
          <a href="javascript:;" @click="$router.push('login')">登录/</a>
          <a href="javascript:;" @click="$router.push('register')">注册</a>
        </div>
      </van-col>
    </van-row>

    <!-- 列表 -->
    <div>
      <van-cell title="我的订单" is-link to="/orderlist/orderAll" />
      <van-grid :column-num="3">
        <van-grid-item icon="paid" text="待付款" to="/orderList/orderPay" />
        <van-grid-item icon="logistics" text="待收货" to="/orderList/orderGoods" />
        <van-grid-item icon="exchange" text="退换修" to="/orderList/orderEnd" />
      </van-grid>
      <van-cell icon="user-circle-o" title="我的地址" @click="address" is-link />
      <van-cell icon="home-o" title="服务中心" is-link to="/service" />
      <van-cell icon="balance-pay" title="我的优惠" is-link to="/coupon" />
      <van-cell icon="wap-home-o" title="大米之家" is-link @click="mi()" />
      <van-cell icon="point-gift-o" title="礼物码兑换" is-link to="/gift" />
      <van-cell icon="setting-o" title="设置" is-link to="/setting" />
    </div>
    <img
      src="https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/597988e5810cdf38408a269c8978edea_660_200.jpg"
      alt
    />
    <vantabber></vantabber>
  </div>
</template>

<script>
import { Toast } from "vant";
import vantabber from "../components/public/vantabbar.vue";
export default {
  methods: {
    // 定义跳转方法
    address() {
      // 如果地址没有数据，直接跳转地址添加页面
      if (this.$store.state.address.lists.length == 0) {
        this.$router.push("/addressAdd");
      } else {
        this.$router.push("/address");
      }
    },
    mi() {
      Toast({
        message: "欢迎加入",
        icon:
          "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2601357035,4216737772&fm=26&gp=0.jpg"
      });
    }
  },
  components: {
    vantabber
  },
  created() {
    this.$store.state.active = 3;
  }
};
</script>

<style lang="scss" scoped>
.top {
  background: #f37d0f url("../assets/img/bg.png") center center no-repeat;
  background-size: 100% auto;
}
.van-image {
  float: right;
  margin-top: 10px;
}
.van-col {
  height: 70px;
  line-height: 70px;
  font-size: 14px;

  a {
    // margin-left: 20px;
    color: #fff;
    // left: 20px;
  }
}
.portrait {
  margin-right: 15px;
}
</style>