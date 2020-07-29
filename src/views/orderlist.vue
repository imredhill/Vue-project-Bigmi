<template>
  <div>
    <van-row style="height:60px">
      <van-col span="3" @click="$router.push('/my')">
        <span class="iconfont icon-icon_zuo"></span>
      </van-col>
      <van-col span="18">
        <van-nav-bar :title="$route.name" />
      </van-col>
      <van-col span="3">
        <router-link to="/search">
          <span class="iconfont icon-sousuo"></span>
        </router-link>
      </van-col>
    </van-row>
    <van-tabs v-model="active" title-active-color="#ff6b00" color="#ff6b00">
      <van-tab title="全部订单" to="/orderList/orderAll"></van-tab>
      <van-tab title="待支付" to="/orderList/orderPay"></van-tab>
      <van-tab title="待收货" to="/orderList/orderGoods"></van-tab>
      <van-tab title="已完成" to="/orderList/orderEnd"></van-tab>
    </van-tabs>
    <!-- 二级路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  created() {
    //隐藏导航
    this.$store.state.vanTabbar = false;
  },
  // 切换组件生周期钩子，销毁函数
  beforeDestroy() {
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="scss" scoped>
.icon-icon_zuo {
  text-align: center;
  display: block;
  font-size: 24px;
  height: 46px;
  line-height: 46px;
  color: #4e4e4e;
  background: white;
}
.icon-sousuo {
  text-align: center;
  display: block;
  font-size: 24px;
  height: 46px;
  line-height: 46px;
  color: #4e4e4e;
  background: white;
}
</style>