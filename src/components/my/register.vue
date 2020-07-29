<template>
  <div>
    <van-row style="height:60px">
      <van-col span="3" @click="$router.push('/my')">
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

    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="password2"
        type="password"
        name="password2"
        label="密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
  
        <drag-verify
        class="slider"
          @click="hi"
          ref="dragVerify"
          :isPassing.sync="isPassing"
          :circle="true"
          :width="343"
          :height="44"
          progressBarBg="#FF5000"
          text="请按住滑块拖动"
          successText="验证通过"
        ></drag-verify>

      <div v-if="isPassing" style="margin: 16px;">
        <van-button round block type="info" native-type="submit" color="#ff5000">注册</van-button>
      </div>
    </van-form>
  </div>
</template>


<script>
import { Toast } from "vant";
import dragVerify from "@/components/dragVerify";

export default {
  components: {
    dragVerify
  },
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      isPassing: false
    };
  },
  methods: {
    hi() {
      console.log(this.isPassing);
    },
    onSubmit(params) {
      let _this = this;
      this.$axios.get("register", { params }).then(res => {
        if (res.data == "200") {
          Toast({
            message: "注册成功",
            onOpened() {
              localStorage.setItem("username", JSON.stringify(_this.username));
              _this.$router.push("/login");
            }
          });
        } else {
          Toast("注册失败");
        }
      });
    }
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
.slider {
  margin: 16px auto 0 ;
  width: 100%;
}
</style>