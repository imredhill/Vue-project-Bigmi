<template>
  <div class="vanTabbar">
    <!-- 导航 -->
    <van-tabbar
      v-model="$store.state.active"
      :route="true"
      active-color="#f37d0f"
      v-show="$store.state.vanTabbar"
    >
      <van-tabbar-item to="/home/recommend" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="bar-chart-o">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // active:0,
    };
  }
};
</script>

<style lang="scss" scoped>
.vanTabbar {
  padding-bottom: 25px;
   font-size: 0;
  vertical-align:bottom
}
.van-tabbar {
  z-index: 999;
  background-color: #fff;
   font-size: 0;
  vertical-align:bottom
}
</style>
