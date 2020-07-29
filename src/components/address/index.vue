<template>
  <div>
      <van-row style="height:60px">
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

    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [
       
      ]
    };
  },
  methods: {
    onAdd() {
      this.$router.push("/addressAdd");
    },
    onEdit(item) {
      this.$router.push({ path: "/addressEdit", query: { id: item.id } });
    },
    onSelect(item) {
      this.$store.commit("address/editId", item.id);
      this.$router.go(-1);
    }
  },
  created() {
    this.list = this.$store.state.address.lists || [];
    // 获取id值
    try {
      this.chosenAddressId = this.list.find(item => item.isDefault).id;
    } catch (error) {
      Toast("没有地址数据");
    }

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