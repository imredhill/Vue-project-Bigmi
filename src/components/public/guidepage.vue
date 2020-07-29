<template>
  <div>
    <!-- 1.如果用户第一次体验此应用，先进入引导页，在跳转首页 -->
    <!-- 2.又进入过一次引导页，以后默认进入广告页。再跳转首页 -->
    <!-- http://localhost:8080/guidepage  引导页 -->
    <!-- http://localhost:8080/advertpage  广告页 -->
    <!-- Swiper -->
    <!-- :autoplay="3000" -->
    <van-swipe class="my-swipe" :show-indicators="false" :loop="false">
      <van-swipe-item>
        <img src="../../assets/img/P1.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/img/P2.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/img/P3.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/img/P4.jpg" alt />
        <van-button plain type="primary" size="small" to="/home/recommend"></van-button>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
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
.swiper-item {
  height: 100%;
  img {
    height: 100%;
  }
}

button {
  position: absolute;
  bottom: 15%;
  left: 24%;
  width: 52%;
  height: 7%;
  border: none;
  outline: none;
  background: transparent;
  // visibility: hidden;
  // z-index: 999;
}
</style>