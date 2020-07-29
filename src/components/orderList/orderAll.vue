<template>
  <div>
    <div class="orderlists" v-for="(item,index) in lists" :key="index">
      <van-cell
        center
        :title="'订单：'+item.orderId"
        :value="typeList[item.type]"
        :label="item.dateTime | dataFormat"
      />
      <div v-for="(value,key) in item.goodsList" :key="key">
        <van-card
          :num="value.num"
          :price="value.price"
          desc="星空灰至尊版"
          :title="value.name"
          thumb="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493329.10251213.jpg"
        ></van-card>
      </div>
      <div class="orderfooter">
        <!-- 待支付 -->
        <div v-if="item.type == 1">
          <van-button size="mini" type="primary" @click="onPay(item.orderId)">支付订单</van-button>
          <van-button size="mini" type="danger" @click="del(index)">删除订单</van-button>
        </div>
        <!-- 待收货 -->
        <div v-else-if="item.type == 2">
          <van-button size="mini" type="warning">退款申请</van-button>
          <van-button size="mini" type="info" @click="onGoods(item.orderId)">已收货</van-button>
        </div>
        <!-- 已完成 -->
        <div v-else-if="item.type == 3">
          <van-button size="mini" @click="evaluate()">商品评价</van-button>
          <van-action-sheet v-model="show" title="评价">
            <div class="content">
              <p>商品满意度</p>
              <van-rate v-model="value" />
              <p>物流速度</p>
              <van-rate v-model="valuee" />
              <p>服务态度</p>
              <van-rate v-model="valueee" />
              <van-button class="btn" round type="info" color="#f37d0f" @click="btn(index)">提交</van-button>
            </div>
          </van-action-sheet>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      show: false,
      value: 5,
      valuee: 5,
      valueee: 5,
      dateTime: new Date()
    };
  },
  created() {
    this.lists = this.$store.state.order.lists;
    this.typeList = this.$store.state.order.typeList;
  },
  methods: {
    onPay(orderId) {
      let index = this.lists.findIndex(item => item.orderId == orderId);
      this.lists[index].type = 2; //切换支付后收货类型，调用支付接口
    },
    onGoods(orderId) {
      let index = this.lists.findIndex(item => item.orderId == orderId);
      this.lists[index].type = 3; //切换待收货状态，
    },
    del(index) {
      this.lists[index].type = 6; //修改一个没有类型删除
      this.lists.splice(index, 1);
      Toast("删除订单");
    },
    evaluate() {
      this.show = true;
    },
    btn(index) {
      this.show = false;
      this.lists.splice(index, 1);
      Toast("感谢评价");
    }
  },
  filters: {
    dataFormat(dataString) {
      var dd = new Date(dataString);

      // 获取年月日
      var y = dd.getFullYear();
      var m = dd.getMonth() + 1;
      var d = dd.getDate();

      // 获取时分秒
      var hh = dd.getHours();
      var mm = dd.getMinutes();
      var ss = dd.getSeconds();

      return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
    },
  },
  // 组件销毁
  beforeDestroy() {
    if (this.lists.length) {
      this.$store.commit("order/editId", this.lists);
    }
  }
};
</script>

<style lang="scss" scoped>
.orderlists {
  margin-top: 10px;
  background: #fff;
  .van-card {
    background: #fff;
  }
  .orderfooter {
    text-align: right;
    padding: 0px 16px 10px 16px;
  }
}
.content {
  padding: 35px 35px 65px;
  float: left;
  text-align: left;
  position: relative;
  .btn {
    position: absolute;
    right: -70%;
    bottom: 25%;
  }
}
</style>