<template>
  <div>
    <div class="orderlists" v-for="(item,index) in lists" :key="index">
      <div v-if="item.type == 2">
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
          <!-- 待收货 -->
          <van-button size="mini" type="warning">退款申请</van-button>
          <van-button size="mini" type="info" @click="onGoods(index)">已收货</van-button>
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
      dateTime: new Date()
    };
  },
  created() {
    let dataList = this.$store.state.order.lists;
    this.lists = dataList.filter(item => item.type == 2); //类型为一生成新数组
    this.typeList = this.$store.state.order.typeList;

    if (!this.lists.length) {
      Toast("快去购物吧~");
    }
  },
  methods: {
    onGoods(index) {
      // let index = this.lists.findIndex(item=>item.orderId == orderId);
      this.lists[index].type = 3; //切换待收货状态，
      Toast("已收货");
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
    }
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
</style>