<template>
  <div class="advert">
    <div class="text">
      <!-- 广告页advertpage.vue -->
      <button @click="goHome">跳过{{num}}S</button>
    </div>

    <img
      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/47c93de8678ddf49a7c089a2cd098efc.jpg?w=1080&h=1880&bg=FFFFFF"
      alt
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 3,
      cleardata: null
    };
  },
  methods: {
    goHome() {
      this.$router.push("/home/recommend"); //跳转首页
    }
  },
  created() {
    // 倒计时
    this.cleardata = setInterval(() => {
      if (this.num == 0) {
        // 跳转首页
        this.$router.push("/home/recommend"); //跳转首页
      } else {
        this.num--;
      }
    }, 1000);

    //隐藏导航
    this.$store.state.vanTabbar = false;
  },
  // 切换组件生周期钩子，销毁函数
  beforeDestroy() {
    this.$store.state.vanTabbar = true;
    // 当路由器切换时候，关闭定时器
    clearInterval(this.cleardata);
  }
};
</script>

<style lang="scss" scoped>

.advert {
  height: 100%;
  overflow: hidden;
  .text {
    text-align: center;
    width: 60px;
    height: 20px;
    background-color: aliceblue;
    position: absolute;
    top: 1%;
    right: 1%;
    border-radius: 8%;
    button {
      border: none;
      outline: none;
      background-color: aliceblue;
    }
  }

  img {
    height: 100%;
  }
}
</style>