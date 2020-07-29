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
      :address-info="addressInfo"
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
      searchResult: [],
      addressInfo: {}
    };
  },
  methods: {
    onSave({ name, tel, province, city, county, areaCode, addressDetail }) {
      let id = this.$route.query.id;
      // 调用vuex方法
      this.$store.commit("address/edit", {
        id, //修改指定对象
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
    // 获取路由id
    let id = this.$route.query.id;
    // 找到相同id对象数据
    this.addressInfo = this.$store.state.address.lists.find(
      item => item.id == id
    );

    //隐藏导航
    this.$store.state.vanTabbar = false;
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