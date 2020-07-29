<template>
  <div>
    <!-- $router.go(-1) -1表示返回上一级 -->
    <!-- $router.go(1) 1表示刷新当前页面 -->
    <!-- $router.go(2) 2表示返回下一级 -->
    <van-row class="topsearchNav">
      <van-col span="3" @click="$router.go(-1)">
        <span class="iconfont icon-icon_zuo"></span>
      </van-col>
      <van-col span="18">
        <van-search placeholder="搜索商品名称" />
      </van-col>
      <van-col span="3">
        <span class="iconfont icon-sousuo" @click="$router.push('login')"></span>
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
      <van-col style="margin-top:15px" span="22">搜索发现</van-col>
    </van-row>
    <van-row type="flex" justify="space-around" style="border-radius:50px" >
      <van-col style="margin-top:15px;border-radius:50px" span="22" >
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/248966620607ffb7b4fb3e165adab599.jpg?w=984&h=160&bg=24B7ED"
          alt
        />
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-around"  >
      <van-col style="margin-top:15px" span="9" >Redmi 10X 5G 系列</van-col>
      <van-col style="margin-top:15px" span="9" >
        小米众筹
        <img
          style="width:24px;display:inline;padding-left:5px"
          src="https://m.mi.com/static/img/gongneng.251124d24c.png"
          alt
        />
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
      <van-col style="margin-top:15px" span="9">Redmi K30 Pro</van-col>
      <van-col style="margin-top:15px" span="9">
        向往的智能生活
        <img
          style="width:24px;display:inline;padding-left:5px"
          src="data:image/png;base64,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"
          alt
        />
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
      <van-col style="margin-top:15px" span="9">净水机</van-col>
      <van-col style="margin-top:15px" span="9">摄像头</van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
      <van-col style="margin-top:15px" span="9">压力IH电饭煲</van-col>
      <van-col style="margin-top:15px" span="9">
        电视
        <img
          style="width:24px;display:inline;padding-left:5px"
          src="https://m.mi.com/static/img/fenlei.003048be40.png"
          alt
        />
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
      <van-col style="margin-top:15px" span="9">
        智能
        <img
          style="width:24px;display:inline;padding-left:5px"
          src="https://m.mi.com/static/img/fenlei.003048be40.png"
          alt
        />
      </van-col>
      <van-col style="margin-top:15px" span="9">全部商品</van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  created() {
    //隐藏导航
    this.$store.state.vanTabbar = false;
  },
  // 切换组件生周期钩子，销毁函数
  beforeDestroy() {
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="scss" scoped>
.topsearchNav {
  background-color: #f2f2f2;
  .icon-icon_zuo {
    text-align: center;
    display: block;
    font-size: 24px;
    height: 44px;
    line-height: 44px;
    color: #4e4e4e;
  }
  .van-search {
    padding: 0px;
    margin: 5px;
    background-color: #fff;
  }
  .van-search__content {
    background-color: #fff;
  }
  .icon-sousuo {
    text-align: center;
    display: block;
    font-size: 24px;
    height: 44px;
    line-height: 44px;
    color: #4e4e4e;
  }
}
</style>