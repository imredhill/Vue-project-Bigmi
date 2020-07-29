<template>
  <div>
    <div class="orderlists" v-for="(item,index) in lists" :key="index">
      <div v-if="item.type == 3">
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
          <!-- 已完成 -->
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
    let dataList = this.$store.state.order.lists;
    this.lists = dataList.filter(item => item.type == 3); //类型为一生成新数组
    this.typeList = this.$store.state.order.typeList;

    console.log(this.lists.length);
    if (!this.lists.length) {
      Toast("快去购物吧~");
    }
  },
  methods: {
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