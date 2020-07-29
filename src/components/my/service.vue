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

    <van-row type="flex" style="background-color:#FFFFFF">
      <van-col span="6" style="padding:10px;">自助服务</van-col>
      <van-divider style="margin:2px 0" />
    </van-row>

    <van-row>
      <van-col span="24">
        <div class="gird">
          <img src="https://i8.mifile.cn/v1/a1/30bc2339-742e-bb1d-e502-0ae28daeed25.png" alt />
          <img src="https://i8.mifile.cn/v1/a1/df270244-1d4e-08f5-407b-9e76b02df338.png" alt />
          <img src="https://i8.mifile.cn/v1/a1/0d35b4ac-8735-6e0f-dab8-cfb1248387d6.png" alt />
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/32f79a4783fc43af9aa194b16b865b74.jpg"
            alt
          />
        </div>
        <div class="gird">
          <img src="https://i8.mifile.cn/v1/a1/4f075e4e-23db-1bd7-23f9-50eb1fa55b21.png" alt />
          <img src="https://i8.mifile.cn/v1/a1/a71febf3-e4dd-25f9-af6d-7503888f97c4.png" alt />
          <img src="https://i8.mifile.cn/v1/a1/043f196f-3ef0-48ce-3c7e-9ac9b706d90c.png" alt />
          <img src="https://i8.mifile.cn/v1/a1/f6c78ec3-59be-131d-0c48-ebbdc4dc5d29.png" alt />
        </div>
      </van-col>
    </van-row>
    <van-row type="flex" justify="center" style="text-align:center;background-color:#FFFFFF">
      <van-col span="10" style="position:relative">
        <div style="height:35px;width:35px;position:absolute;top:15%;left:5%">
          <img src="https://m.mi.com/static/img/icon.dfb204172a.png" alt />
        </div>
        <h1 style="padding:20px 0">人工在线客服</h1>
      </van-col>
    </van-row>
    <van-grid :border="false" :column-num="3">
  <van-grid-item>
    <van-image style="width:33px;height:33px" src="https://m.mi.com/static/img/phone1.fb33dfa6de.png" />
    <h2>商城热线</h2>
    <h3 style="color:red">400-100-5678</h3>
    <p>8:00 - 18:00</p>
  </van-grid-item>
  <van-grid-item>
    <van-image style="width:33px;height:33px" src="https://m.mi.com/static/img/phone2.e82129a5ba.png" />
      <h2>金融热线</h2>
    <h3 style="color:red">400-100-3399</h3>
    <p>8:00 - 18:00</p>
  </van-grid-item>
  <van-grid-item>
    <van-image style="width:33px;height:33px" src="https://m.mi.com/static/img/phone3.357bac0942.png" />
      <h2>小米移动</h2>
    <h3 style="color:red">400-922-3838</h3>
    <p>8:00 - 18:00</p>
  </van-grid-item>
</van-grid>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.gird {
  display: flex;

  img {
    //    flex: 1;
    height: 79px;
    width: 25%;
  }
}
.icon-icon_zuo {
  text-align: center;
  display: block;
  font-size: 24px;
  height:100%;
  line-height: 46px;
  color: #4e4e4e;
  background: white;
}
.icon-sousuo {
  text-align: center;
  display: block;
  font-size: 24px;
   height:100%;
  line-height: 46px;
  color: #4e4e4e;
  background: white;
}
</style>