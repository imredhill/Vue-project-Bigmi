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
    <van-field v-model="text" center clearable label="礼物兑换码" placeholder="请输入礼物兑换码" style="margin:50px 0">
      <template #button>
        <van-button size="small" type="primary" color="#f37d0f">兑换</van-button>
      </template>
    </van-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text:''
    }
  },
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