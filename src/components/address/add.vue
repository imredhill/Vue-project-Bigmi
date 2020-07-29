<template>
  <div>
    <van-row>
      <van-col span="3" @click="$router.go(-1)">
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
    <van-address-edit
      :area-list="areaList"
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
    />
  </div>
</template>

<script>
// 引入地址
import areaList from "./erea.js";
export default {
  data() {
    return {
      areaList,
      searchResult: []
    };
  },
  methods: {
    onSave({ name, tel, province, city, county, areaCode, addressDetail }) {
      // 调用vuex方法
      this.$store.commit("address/add", {
        name,
        tel,
        address: province + city + county + addressDetail,
        province,
        city,
        county,
        areaCode,
        addressDetail
      });
      this.$router.go(-1); //回到上一页
    }
  },
  created() {
    //隐藏导航
    this.$store.state.vanTabbar = false;
  },
  // 组件内路由守卫
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    if (to.path == "/my") {
      this.$store.state.vanTabbar = true;
    }
    next();
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