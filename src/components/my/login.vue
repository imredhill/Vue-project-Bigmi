<template>
  <div>
    <van-row class="topsearchNav">
      <van-col span="3" @click="$router.push('/my')">
        <span class="iconfont icon-icon_zuo"></span>
      </van-col>
    </van-row>
    <div style="padding:0 30px">
      <van-row style="padding:40px 0 20px">
        <van-col span="24">
          <span class="iconfont icon-xiaomi"></span>
        </van-col>
        <van-col span="24" style="text-align:center;font-size:18px;padding-top:15px">
          <h1>小米账号登录</h1>
        </van-col>
      </van-row>
      <van-form @submit="onSubmit">
        <van-row>
          <van-col span="24">
            <van-field
              v-model="username"
              name="username"
              label="用户名"
              placeholder="用户名"
              :rules="[{ required: true, message: '请输入账号' }]"
            />
            <van-field
              v-model="password"
              type="password"
              name="password"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请输入密码' }]"
            />
          </van-col>
        </van-row>
        <van-row type="flex" justify="center">
          <div style="margin:20px auto">
            <van-col span="24">
              <van-button color="#ff6b00" style="width:290px" type="info" native-type="submit">立即登录</van-button>
            </van-col>
          </div>
        </van-row>
        <van-row type="flex" justify="center">
          <div style="margin:20px auto">
            <van-col span="24">
              <van-button
                color="#4B4D5C"
                style="width:290px"
                @click="$router.push('/register')"
              >免费注册</van-button>
            </van-col>
          </div>
        </van-row>
      </van-form>
      <van-row>
        <van-col span="24" style="text-align:center;">
          <van-divider>其他方式登录</van-divider>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="24" style="text-align:center;">
          <div class="pay">
            <button class="btn3">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weibo" />
              </svg>
            </button>
            <button class="btn4">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhifubao" />
              </svg>
            </button>
            <button class="btn5">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weixin" />
              </svg>
            </button>
          </div>
        </van-col>
      </van-row>
      <van-col span="24" style="text-align:center;">
        <div class="bottom" style="margin-top:15px">
          <a href="#">简体 |</a>
          <a href="#">繁体 |</a>
          <a href="#">English |</a>
          <a href="#">常见问题 |</a>
          <a href="#">隐私政策</a>
        </div>
      </van-col>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(params) {
      let _this = this;

      let path = "path" in _this.$route.query ? _this.$route.query.path : "/my";
      this.$axios.get("login", { params }).then(res => {
        if (res.data == "200") {
          Toast({
            message: "登录成功",
            onOpened() {
              localStorage.getItem('username')
              _this.$store.state.username = _this.username;
              // console.log(_this.$store.state.username);
              _this.$router.push(path);
            }
          });
        } else {
          Toast("登录失败");
        }
      });
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
}
.icon-xiaomi {
  text-align: center;
  display: block;
  font-size: 24px;
  margin: 0 auto;
  width: 48px;
  height: 48px;
  line-height: 48px;
  background-color: #ff6b00;
  color: white;
}
.pay {
  button {
    margin: 15px;
    width: 30px;
    height: 30px;
    border: none;
    outline: none;
    background: transparent;
    svg {
      height: 100%;
      width: 100%;
    }
  }
}
</style>