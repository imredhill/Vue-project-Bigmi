<template>
  <div>
    <div class="loading" v-if="showLoading">
      <img src="../assets/img/loading.svg" alt />
    </div>

    <div class="top">
      <!-- 顶部导航 -->
      <van-row class="topsearchNav">
        <van-col span="3" @click="cut">
          <router-link to="/home/recommend">
            <span class="iconfont icon-xiaomi"></span>
          </router-link>
        </van-col>
        <van-col span="18">
          <van-search @focus="getSearch" placeholder="搜索商品名称" />
        </van-col>
        <van-col span="3">
          <router-link to="/my">
            <span class="iconfont icon-yonghu"></span>
          </router-link>
        </van-col>
      </van-row>
      <!-- 顶部导航end -->
      
      <!-- 首页导航 -->
      <van-tabs
        v-model="active"
        class="swiper-container"
        sticky
        title-active-color="#ff6b00"
        color="#ff6b00"
        line-width="35"
      >
        <van-tab title="推荐" to="/home/recommend"></van-tab>
        <van-tab title="手机" to="/home/phone"></van-tab>
        <van-tab title="智能" to="/home/intelligence"></van-tab>
        <van-tab title="电视" to="/home/televisions"></van-tab>
        <van-tab title="笔记本" to="/home/notebook"></van-tab>
        <van-tab title="家电" to="/home/household electrical appliances"></van-tab>
      </van-tabs>
    </div>
    <transition name="out-in" 
    enter-active-class="animated fadeIn"
    >
      <router-view></router-view>
    </transition>
    <!-- 首页导航 end -->
    <vantabber></vantabber>
  </div>
</template>

<script>
import vantabber from "../components/public/vantabbar.vue";
export default {
  data() {
    return {
      active: 0,
      showLoading: false
    };
  },
  methods: {
    getSearch() {
      // 跳转路由
      this.$router.push("/search");
    },
    cut(Event) {
      console.log("点击小米图标跳转了！", Event);
      this.active = 0;
    }
  },
  // 路由守卫
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.showLoading = false;
    });
  },

  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    // console.log(to, from, "即将离开home");
    this.showLoading = true;
    next();
  },
  // mounted() {
  //   this.$store.state.active = 1;
  // },
  components: {
    vantabber
  }
};
</script>

<style lang="scss" scoped>
.topsearchNav {
  background-color: #f2f2f2;
  .icon-xiaomi {
    text-align: center;
    display: block;
    font-size: 24px;
    height: 44px;
    line-height: 44px;
    color: #ff6b00;
  }
  .van-search {
    padding: 0px;
    margin: 5px;
    background-color: #fff;
  }
  .van-search__content {
    background-color: #fff;
  }
  .icon-yonghu {
    text-align: center;
    display: block;
    font-size: 24px;
    height: 44px;
    line-height: 44px;
    color: #4e4e4e;
  }
}

.swiper-container {
  width: 100%;
  height: 100%;
}
van-tabs {
  // margin: 110px;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.top {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
}
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  z-index: 9999;
  justify-content: center;
  align-items: center;
  img {
    width: 106px;
  }
}
</style>