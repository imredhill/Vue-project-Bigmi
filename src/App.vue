<template>
  <div id="app">
    <!-- 路由模块 -->
    <!-- 动画效果 -->
    <transition
      name="out-in"
      enter-active-class="animated fadeIn"
    >
      <router-view>
        <!-- 加载loading -->
        <div class="loading" v-if="showLoading">
          <img src="./assets/img/loading.svg" alt />
        </div>
      </router-view>
    </transition>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showLoading: true
    };
  },
  // 路由守卫
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.showLoading = true;
    });
  },

  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    this.showLoading = true;
    next();
  }
};
</script>

<style lang="scss" scoped>
#app {
 height: 100%;
}
#vanTabbar {
  z-index: 9999;
  background-color: #fff;
  font-size: 0;
  vertical-align:bottom
}
</style>
