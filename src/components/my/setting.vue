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

    <van-row gutter="0" class="top">
      <van-col span="5" class="portrait">
        <van-image
          round
          width="50px"
          height="50px"
          type="cover"
          src="https://m.mi.com/static/img/avatar.76a75b8f17.png"
        />
      </van-col>

      <van-col span="17">
        <div class="login" v-if="$store.state.username">
          <a href="javascript:;" v-text="$store.state.username"></a>
        </div>
        <div class="login" v-if="!$store.state.username">
          <a href="javascript:;" @click="$router.push('login')">登录/</a>
          <a href="javascript:;" @click="$router.push('register')">注册</a>
        </div>
      </van-col>
    </van-row>
    <div>
      <van-cell title="账户与安全" is-link />
      <van-divider style="margin:2px 0" />
      <van-cell title="支付设置" is-link />
      <van-divider style="margin:2px 0" />
      <van-cell title="地区设置" is-link />
      <van-cell title="音效与通知" is-link />
      <van-cell title="隐私" is-link />
      <van-cell title="通用" is-link />
      <van-cell title="问题反馈" is-link />
      <van-cell title="关于大米" is-link />
    </div>
    <van-divider style="margin:3px 0" />
    <div class="change" @click="$router.push('login')">切换用户</div>
    <div class="quit" @click="onsubit">退出登录</div>
  </div>
</template>

<script>
export default {
  methods: {
    onsubit() {
      this.$store.state.username = "";
      // this.$store.state.cart.lists = "";
      this.$store.state.order.lists = [];
      this.$store.state.cart.lists = [];
       this.$store.state.address.lists = [];
      this.$router.push("/my");
    }
  }
};
</script>

<style lang="scss" scoped>
.quit {
  background: #fff;
  padding: 10px;
  text-align: center;
  color: red;
  font-weight: 500;
  font-size: 15px;
}
.change {
  background: #fff;
  padding: 10px;
  text-align: center;
  color: orange;
  font-weight: 500;
  font-size: 15px;
}
.top {
  background: #f37d0f url("../../assets/img/bg.png") center center no-repeat;
  background-size: 100% auto;
}
.van-image {
  float: right;
  margin-top: 15px;
}
.van-col {
  height: 80px;
  line-height: 80px;
  font-size: 13px;

  a {
    // margin-left: 20px;
    color: #fff;
    // left: 20px;
  }
}
.portrait {
  margin-right: 15px;
}
.icon-icon_zuo {
  text-align: center;
  display: block;
  font-size: 24px;
  height: px;
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