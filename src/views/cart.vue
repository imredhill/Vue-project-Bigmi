<template>
  <div class="page">
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

    <!-- 商品列表 -->
    <van-row class="goodslist" v-for="(item,index) in lists" :key="index">
      <van-col span="2">
        <van-checkbox :value="item.isSelect" @click="inputselect(index)"></van-checkbox>
      </van-col>
      <van-col span="7">
        <van-image
          height="134"
          fit="cover"
          src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493329.10251213.jpg"
        />
      </van-col>
      <van-col span="15">
        <div class="content">
          <h1 style="padding:10px">{{item.name}}</h1>
          <p style="padding:10px;color:red" class="price">￥{{item.price}}</p>
          <p>
            <van-button type="default" size="mini" @click="item.num <= 1? 1:item.num--">-</van-button>
            <span>{{item.num}}</span>
            <van-button type="default" size="mini" @click="item.num++">+</van-button>
            <van-button type="danger" class="danger" size="mini" @click="del(index)">删除</van-button>
          </p>
        </div>
      </van-col>
       <img src="https://i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" alt />
         <van-grid :border="false" :column-num="2">
        <van-grid-item style="padding:0 1px 0 0" to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ce0f98a0d5462e6fd4e1d2d111ba2a9.jpg?thumb=1&w=360&h=360"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">米家驱蚊器 智能版</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥59</h3>
          </div>
        </van-grid-item>
        <van-grid-item style="padding:0 0 0 1px" to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">米家直流变频落地扇1X</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥299</h3>
          </div>
        </van-grid-item>
      </van-grid>
      <van-grid :border="false" :column-num="2">
        <van-grid-item style="padding:0 1px 0 0" to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1571a08fd23ea5b409245916fbfb78c8.jpg?thumb=1&w=360&h=360"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">Redmi Note 8 Pro</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥1299</h3>
          </div>
        </van-grid-item>
        <van-grid-item style="padding:0 0 0 1px" to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1b5e8c6b8488b5534a9edb1b99779898.jpg?thumb=1&w=360&h=360"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">Redmi 8 4GB+64GB</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥799</h3>
          </div>
        </van-grid-item>
      </van-grid>
      <van-grid :border="false" :column-num="2">
        <van-grid-item style="padding:0 1px 0 0" to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b21b11d359693c3ef7bd041737f90518.jpg?thumb=1&w=360&h=360"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">Redmi Note 8 6GB...</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥1299</h3>
          </div>
        </van-grid-item>
        <van-grid-item style="padding:0 0 0 1px" to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f735084aaa49c1b832af24eca6cc5a01.jpg?thumb=1&w=360&h=360"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">米家 IH 电饭煲 4L</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥499</h3>
          </div>
        </van-grid-item>
      </van-grid>
      <van-grid :border="false" :column-num="2">
        <van-grid-item style="padding:0 1px 0 0" to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd7b353ddc33d9133db6a80f8aa321b2.jpg?thumb=1&w=360&h=360"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">Redmi 7A 3GB+32GB</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥599</h3>
          </div>
        </van-grid-item>
        <van-grid-item style="padding:0 0 0 1px" to="/details">
          <van-image
            src="https://i8.mifile.cn/b2c-mimall-media/7bac9c4c9044173389f56b41de154f8d!360x360.jpg"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">电视4A 50" 影院版</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥1899</h3>
          </div>
        </van-grid-item>
      </van-grid>
      <van-grid :border="false" :column-num="2">
        <van-grid-item style="padding:0 1px 0 0" to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2dd222540cc2c130003aaebc178c83f6.jpg?thumb=1&w=360&h=360"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">米家电饭煲4L</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥269</h3>
          </div>
        </van-grid-item>
        <van-grid-item style="padding:0 0 0 1px" to="/details">
          <van-image
            src="https://i8.mifile.cn/b2c-mimall-media/9a3d60e8947d19eb5cc2d2cb0e0822fa!360x360.jpg"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">8H多功能青春床垫X1</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥369</h3>
          </div>
        </van-grid-item>
      </van-grid>
      <van-grid :border="false" :column-num="2">
        <van-grid-item style="padding:0 1px 0 0" to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/552e42b8706ee8d0bd3e048d2a5c4316.jpg?thumb=1&w=360&h=360"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">米家洗烘一体机Pro</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥2999</h3>
          </div>
        </van-grid-item>
        <van-grid-item style="padding:0 0 0 1px" to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/688470aacdf22e1144b10150b7f5c5b6.jpg?thumb=1&w=360&h=360"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">小米旅行箱 24英寸</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥369</h3>
          </div>
        </van-grid-item>
      </van-grid>
      <van-grid :border="false" :column-num="2">
        <van-grid-item style="padding:0 1px 0 0" to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4fcc8cd115c4d1417d8cb7860fe66049.jpg?thumb=1&w=360&h=360"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">米家电子温湿度计Pro</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥79</h3>
          </div>
        </van-grid-item>
        <van-grid-item style="padding:0 0 0 1px" to="/details">
          <van-image
            src="https://i8.mifile.cn/b2c-mimall-media/e73a38fa0dca982ea6685e045d05a163!360x360.jpg"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">小米活塞耳机</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥29</h3>
          </div>
        </van-grid-item>
      </van-grid>
    </van-row>
     
    <!-- 数组长度为零，默认隐藏 -->
    <div v-show="!($store.state.cart.lists.length)">
      <div class="login" v-if="!$store.state.username">
        <van-cell value="去登录" is-link to="/login" style="padding:25px">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">登陆后享更多优惠</span>
          </template>
        </van-cell>
      </div>
      <div class="login" style="text-align:center;padding:15px 0 0" v-if="$store.state.username">
        <span style="font-size:18px;color:#f37d0f">快去购物吧 ^_^</span>
      </div>
      <van-row type="flex" justify="center">
        <div style="margin:0 auto;padding:20px">
          <van-col span="24" style>
            <!-- <div style="height:50px;width:50px"> -->
            <van-icon size="40" style="position:relative;left:0;top:15px" name="cart-o" />
            <!-- </div> -->

            <span style="font-size:14px;padding:0 10px">购物车还是空的</span>
            <van-button
              to="/home/recommend"
              plain
              type="primary"
              color="#86828D"
              style="width:76px;height:25px"
            >去逛逛</van-button>
          </van-col>
        </div>
      </van-row>
      <img src="https://i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" alt />

      <van-grid :border="false" :column-num="2">
        <van-grid-item style="padding:0 1px 0 0" to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ce0f98a0d5462e6fd4e1d2d111ba2a9.jpg?thumb=1&w=360&h=360"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">米家驱蚊器 智能版</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥59</h3>
          </div>
        </van-grid-item>
        <van-grid-item style="padding:0 0 0 1px" to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">米家直流变频落地扇1X</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥299</h3>
          </div>
        </van-grid-item>
      </van-grid>
      <van-grid :border="false" :column-num="2">
        <van-grid-item style="padding:0 1px 0 0" to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1571a08fd23ea5b409245916fbfb78c8.jpg?thumb=1&w=360&h=360"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">Redmi Note 8 Pro</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥1299</h3>
          </div>
        </van-grid-item>
        <van-grid-item style="padding:0 0 0 1px" to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1b5e8c6b8488b5534a9edb1b99779898.jpg?thumb=1&w=360&h=360"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">Redmi 8 4GB+64GB</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥799</h3>
          </div>
        </van-grid-item>
      </van-grid>
      <van-grid :border="false" :column-num="2">
        <van-grid-item style="padding:0 1px 0 0" to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b21b11d359693c3ef7bd041737f90518.jpg?thumb=1&w=360&h=360"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">Redmi Note 8 6GB...</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥1299</h3>
          </div>
        </van-grid-item>
        <van-grid-item style="padding:0 0 0 1px" to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f735084aaa49c1b832af24eca6cc5a01.jpg?thumb=1&w=360&h=360"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">米家 IH 电饭煲 4L</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥499</h3>
          </div>
        </van-grid-item>
      </van-grid>
      <van-grid :border="false" :column-num="2">
        <van-grid-item style="padding:0 1px 0 0" to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd7b353ddc33d9133db6a80f8aa321b2.jpg?thumb=1&w=360&h=360"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">Redmi 7A 3GB+32GB</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥599</h3>
          </div>
        </van-grid-item>
        <van-grid-item style="padding:0 0 0 1px" to="/details">
          <van-image
            src="https://i8.mifile.cn/b2c-mimall-media/7bac9c4c9044173389f56b41de154f8d!360x360.jpg"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">电视4A 50" 影院版</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥1899</h3>
          </div>
        </van-grid-item>
      </van-grid>
      <van-grid :border="false" :column-num="2">
        <van-grid-item style="padding:0 1px 0 0" to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2dd222540cc2c130003aaebc178c83f6.jpg?thumb=1&w=360&h=360"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">米家电饭煲4L</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥269</h3>
          </div>
        </van-grid-item>
        <van-grid-item style="padding:0 0 0 1px" to="/details">
          <van-image
            src="https://i8.mifile.cn/b2c-mimall-media/9a3d60e8947d19eb5cc2d2cb0e0822fa!360x360.jpg"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">8H多功能青春床垫X1</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥369</h3>
          </div>
        </van-grid-item>
      </van-grid>
      <van-grid :border="false" :column-num="2">
        <van-grid-item style="padding:0 1px 0 0" to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/552e42b8706ee8d0bd3e048d2a5c4316.jpg?thumb=1&w=360&h=360"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">米家洗烘一体机Pro</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥2999</h3>
          </div>
        </van-grid-item>
        <van-grid-item style="padding:0 0 0 1px" to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/688470aacdf22e1144b10150b7f5c5b6.jpg?thumb=1&w=360&h=360"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">小米旅行箱 24英寸</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥369</h3>
          </div>
        </van-grid-item>
      </van-grid>
      <van-grid :border="false" :column-num="2">
        <van-grid-item style="padding:0 1px 0 0" to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4fcc8cd115c4d1417d8cb7860fe66049.jpg?thumb=1&w=360&h=360"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">米家电子温湿度计Pro</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥79</h3>
          </div>
        </van-grid-item>
        <van-grid-item style="padding:0 0 0 1px" to="/details">
          <van-image
            src="https://i8.mifile.cn/b2c-mimall-media/e73a38fa0dca982ea6685e045d05a163!360x360.jpg"
          />
          <div style="float:left">
            <h1 style="margin-top:5px;width:165px;font-weight: lighter;">小米活塞耳机</h1>
            <h3 style="margin-top:5px;font-size:16px;color:#FF6700">￥29</h3>
          </div>
        </van-grid-item>
      </van-grid>
    </div>

    <van-submit-bar
      v-show="$store.state.cart.lists.length"
      :price="total * 100"
      button-text="提交订单"
      @submit="onsubmit"
    >
      <van-checkbox @click="checkedAll" :value="checked">全选</van-checkbox>
    </van-submit-bar>
    <vantabber></vantabber>
  </div>
</template>

<script>
 import vantabber from "../components/public/vantabbar.vue"
// import {createNamespacedHelpers} from "vuex";
// const {mapState} = createNamespacedHelpers("cart");
export default {
  data() {
    return {
      checked: true,
      total: 0,
      lists: []
    };
  },
  methods: {
    del(index) {
      this.lists.splice(index, 1);
    },
    sum() {
      // 总价格计算
      // total 累加值
      this.total = this.lists.reduce((total, item) => {
        // 判断选项选中计算价格
        if (!item.isSelect) return total; //返回默认价格
        return total + parseInt(item.price) * parseInt(item.num); //总价格
      }, 0); //总价格默认值0
    },
    checkedAll() {
      this.lists.forEach(item => {
        item.isSelect = !this.checked;
      });
      this.checked = !this.checked;
    },
    checkboxclick() {
      // 第一次加载页面过程中，判断复选框状态，全部true，返回true，有一个false,放回false
      this.checked = this.lists.every(item => {
        return item.isSelect;
      });
    },
    inputselect(index) {
      // 修改商品列表
      this.lists[index].isSelect = !this.lists[index].isSelect;
      this.checkboxclick();
      this.sum();
    },
    onsubmit() {
      // 判断用户名是否为空
      // 为空：跳转登陆界面
      // 不为空：跳转订单页面
      if (this.$store.state.username) {
        this.$router.push("/order");
      } else {
        this.$router.push({
          path: "/login",
          query: {
            path: "/order"
          }
        });
      }
    }
  },
  created() {
    this.lists = this.$store.state.cart.lists;
    this.checkboxclick();
    this.sum();
     this.$store.state.active = 2;
  },
  beforeUpdate() {
    this.sum();
  },
  beforeDestroy() {
    this.$store.commit("cart/edit", this.lists);
  },
  components: {
    vantabber
  }
};
</script>

<style lang="scss" scoped>
.goodslist {
  position: relative;
  background-color: #fff;
  .van-checkbox {
    position: relative;
    left: 5px;
    top: 52px;
  }
  .goshop {
    background-color: olive;
  }
  .content {
    padding-left: 10px;
    h1 {
      font-size: 16px;
    }
    h2 {
      font-size: 12px;
      font-weight: normal;
    }
    .price {
      font-size: 14px;
      color: #323233;
    }
    span {
      display: inline-block;
      width: 30px;
      font-size: 14px;
      text-align: center;
    }
    .danger {
      span {
        font-size: 12px;
      }
    }
  }
}

.van-submit-bar {
  bottom: 50px;
}
.page {
  margin-bottom: 30px;
  // overflow: hidden;
}
.goodsinfo {
  font-size: 30px;
  text-align: center;
}
.goodslisttitle {
  font-size: 24px;
  text-indent: 2em;
  height: 45px;
  line-height: 45px;
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