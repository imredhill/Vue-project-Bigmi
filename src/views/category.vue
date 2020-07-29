<template>
  <div>
    <div class="header">
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
    </div>
    <div class="content">
      <div class="left" ref="left">
        <ul>
          <li
            v-for="(item,index) in left"
            :class="{current:index == currentIndex}"
            @click="selectItem(index,$event)"
            :key="index"
          >
            <span>{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="right" ref="right">
        <ul>
          <li v-for="(item,index) in right" :key="index" class="right-item-hook">
            <div class="top">
              <img :src="item.image" alt />
            </div>
            <div class="word">{{item.word}}</div>
            <van-row>
              <van-col span="8" v-for="(value,num) in  item.list" :key="num">
                <div class="img">
                  <img :src="value.img" alt />
                </div>
                <p>{{value.name}}</p>
              </van-col>
            </van-row>
          </li>
        </ul>
      </div>
    </div>
    <vantabber></vantabber>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import vantabber from "../components/public/vantabbar.vue";
export default {
  components: {
    vantabber
  },
  data() {
    return {
      left: [
        "新品",
        "众筹",
        "小米手机",
        "Redmi",
        "黑鲨",
        "5G合约",
        "手机配件",
        "电视",
        "大家电",
        "电脑办公",
        "小爱智能",
        "路由器",
        "生活电器"
      ],

      right: [
        {
          image:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fab605d76eef97cdabf29adf00b92063.jpg?thumb=1&w=500&h=200",
          word: "手机",
          list: [
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e33cb1ebca8a91a3c1031b5bae47e1da.png?thumb=1&w=120&h=120",
              name: "10X 4G"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9238e61fd42fec7aa8b6ace4af7dbda6.png?thumb=1&w=120&h=120",
              name: "10X 5G系列"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/58a4446432aba7894e957f2c18853562.png?thumb=1&w=120&h=120",
              name: "小米10 青春"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a69571b4148f5e59c251658adae6db60.png?thumb=1&w=120&h=120",
              name: "K30 Pro 变焦版"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/46f95bd552fa134820a7daea19e507ef.png?thumb=1&w=120&h=120",
              name: "K30 Pro"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1cae0b41b12f847c75e24513a2c432e9.png?thumb=1&w=120&h=120",
              name: "黑鲨手机3"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0f4c7ce842e4517367fa2f529cd1d402.png?thumb=1&w=120&h=120",
              name: "黑鲨手机3 Pro"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b54738f4dce4588f9bd29a5dadf76030.png?thumb=1&w=120&h=120",
              name: "小米10 Pro"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/acf2e521e29e5afabf6d493203b31f27.png?thumb=1&w=120&h=120",
              name: "小米10"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/266ad6dd5146deaf3ae3602a89e7a217.png?thumb=1&w=120&h=120",
              name: "小米MIX Alpha"
            }
          ]
        },
        {
          image:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c90039abfc30576c7803620ead24954.png?thumb=1&w=500&h=200",
          word: "众筹好物",
          list: [
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/186d5b59da711a6a7ff56ffa1feab443.png?thumb=1&w=120&h=120",
              name: "显示器挂灯"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1062719ac43b022195844b3a7c31925a.png?thumb=1&w=120&h=120",
              name: "智能门锁E"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9cdc50aa1318b1a9df4905133b3552b8.png?thumb=1&w=120&h=120",
              name: "超级电池"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3ed3efc2540f5a5c6c15aa279e352427.png?thumb=1&w=120&h=120",
              name: "龙头净水器"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/26497f3e297f2e7bc462fdaa7a775894.png?thumb=1&w=120&h=120",
              name: "挂烫机"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e1c0b77e96b02740c23008915096ffd1.png?thumb=1&w=120&h=120",
              name: "塔扇"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00a24ec650bc885e434d2c9596e64dc5.png?thumb=1&w=120&h=120",
              name: "插线板"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c8c66c21e01f88127e42a0b54d56c6c3.png?thumb=1&w=120&h=120",
              name: "智能晾衣架"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/07a864d01d3d2a519e5e17048e2e7877.png?thumb=1&w=120&h=120",
              name: "Redmi手环"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6a0da3fe676a1bf3e02698a70e68c476.png?thumb=1&w=120&h=120",
              name: "温湿度计"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a27cccc02ebc33e76ecf71b49a3e7d3a.png?thumb=1&w=120&h=120",
              name: "液晶小黑板"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/79283f78338810fa1df2954ed8c040ae.png?thumb=1&w=120&h=120",
              name: "电饭煲"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4fe6a2404ca47b2df1f82c3d2bd04feb.png?thumb=1&w=120&h=120",
              name: "毛球修剪器"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/19d97ba1fcd8aaae4a510bb1dd42a997.png?thumb=1&w=120&h=120",
              name: "电磁炉"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/21462b04cfe0f90fb26fcd34953766b9.png?thumb=1&w=120&h=120",
              name: "电动螺丝刀"
            }
          ]
        },
        {
          image:
            "https://i8.mifile.cn/v1/a1/eb15b092-da40-8a6f-74c3-38a75cbe2c5d.webp",
          word: "小米手机",
          list: [
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/58a4446432aba7894e957f2c18853562.png?thumb=1&w=120&h=120",
              name: "小米10青春"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b54738f4dce4588f9bd29a5dadf76030.png?thumb=1&w=120&h=120",
              name: "小米10 Pro"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/acf2e521e29e5afabf6d493203b31f27.png?thumb=1&w=120&h=120",
              name: "小米10"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8def00234637f733dfb59d2be3bb1abd.png?thumb=1&w=120&h=120",
              name: "小米CC9"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f6c2fbc0a96d51f5e713fd3daae8f73b.png?thumb=1&w=120&h=120",
              name: "小米CC9e"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ff6dd80e3fc674ec70d7361f5409c5dc.png?thumb=1&w=120&h=120",
              name: "小米CC9美图版"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9238e61fd42fec7aa8b6ace4af7dbda6.png?thumb=1&w=120&h=120",
              name: "10X 5G系列"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e33cb1ebca8a91a3c1031b5bae47e1da.png?thumb=1&w=120&h=120",
              name: "10X 4G"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/266ad6dd5146deaf3ae3602a89e7a217.png?thumb=1&w=120&h=120",
              name: "小米MIX Alpha"
            }
          ]
        },
        {
          image:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c90039abfc30576c7803620ead24954.png?thumb=1&w=500&h=200",
          word: "Redmi系列",
          list: [
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120",
              name: "Redmi8"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/39ad29e9dce40a7afa494fe9e0cf9b0d.png?thumb=1&w=120&h=120",
              name: "Redmi8A"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/99022ce28f145ff5a521c848596295ec.gif",
              name: "Note8 Pro"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/271b3bd052e735143ee7298f2d6d43fa.gif",
              name: "Redmi Note 8"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a69571b4148f5e59c251658adae6db60.png?thumb=1&w=120&h=120",
              name: "K30 Pro 变焦版"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/46f95bd552fa134820a7daea19e507ef.png?thumb=1&w=120&h=120",
              name: "K30 Pro"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/294268746df2a11c188f6d504efc49b4.png?thumb=1&w=120&h=120",
              name: "Redmi K30i"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/efd0aa03675839c8f20e8c38de8229c1.png?thumb=1&w=120&h=120",
              name: "Redmi K30 4G"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f59489c399bb418dfe519b54c89c327d.png?thumb=1&w=120&h=120",
              name: "Redmi K30 5G"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5c14e86ffa6dbd49c025d0d2112b3b5c.png?thumb=1&w=120&h=120",
              name: "Redmi电视 X55"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5c14e86ffa6dbd49c025d0d2112b3b5c.png?thumb=1&w=120&h=120",
              name: "Redmi电视 X65"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dc46b32f0af885108b43fef14d1fd90d.png?thumb=1&w=120&h=120",
              name: 'Redmi 电视 98"'
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d4cb0fb895244ce875a5b79b4d676a22.png?thumb=1&w=120&h=120",
              name: "Redmi显示器"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f607feb5f31aa04949d530799d010d99.png?thumb=1&w=120&h=120",
              name: "RedmiBook 16"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c436475721b799a0dc348fa8cd32e457.png?thumb=1&w=120&h=120",
              name: "RedmiBook 13"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd7f38b4bef264fc34969cbe620bf42d.png?thumb=1&w=120&h=120",
              name: "真无线蓝牙耳机"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dd0a0140e6156ddc464545c77d8c0564.png?thumb=1&w=120&h=120",
              name: "Redmi充电宝"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e4eca203e55c2a1de43da066c8ea42fb.png?thumb=1&w=120&h=120",
              name: "Redmi路由器"
            }
          ]
        },
        {
          word: "黑鲨",
          list: [
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1cae0b41b12f847c75e24513a2c432e9.png?thumb=1&w=120&h=120",
              name: "黑鲨手机3"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0f4c7ce842e4517367fa2f529cd1d402.png?thumb=1&w=120&h=120",
              name: "黑鲨手机3 Pro"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e6e6813fbe60506add31586cd7db3312.png?thumb=1&w=120&h=120",
              name: "散热背夹 Pro"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/270dee1b168b89c6dab99332a861aa84.png?thumb=1&w=120&h=120",
              name: "黑鲨磁吸充电线"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88457eba19868c63b428642603e3bde3.png?thumb=1&w=120&h=120",
              name: "冰封散热背夹"
            },
            {
              img:
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/82e9ce98ad3f522c8542c02b701e135f.png?thumb=1&w=120&h=120",
              name: "黑鲨手柄"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8bcee7d82c3139d450984f08fe001f7.png?thumb=1&w=120&h=120",
              name: "黑鲨充电宝"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f47fc44e9b5a83068018d4467fbec311.png?thumb=1&w=120&h=120",
              name: "黑鲨其他配件"
            }
          ]
        },
        {
          word: "5G合约",
          list: [
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f59489c399bb418dfe519b54c89c327d.png?thumb=1&w=120&h=120",
              name: "K30 5G"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1503283f19daeb0c9b0dd6cf03b8b607.png?thumb=1&w=120&h=120",
              name: "K30 5G"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f59489c399bb418dfe519b54c89c327d.png?thumb=1&w=120&h=120",
              name: "K30 5G"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e1e76acbaeda88f7f3c0846b3cf1b49c.png?thumb=1&w=120&h=120",
              name: "小米 10"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e5b8780882839adfd0949a46215cab5c.png?thumb=1&w=120&h=120",
              name: "小米 10"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e1e76acbaeda88f7f3c0846b3cf1b49c.png?thumb=1&w=120&h=120",
              name: "小米 10"
            }
          ]
        },
        {
          word: "手机配件",
          list: [
            {
              img:
                "https://i8.mifile.cn/v1/a1/e55a5383-9b7f-1dfd-7f12-e648f69f5c41!120x120.png",
              name: "以旧换新"
            },
            {
              img:
                "https://i8.mifile.cn/v1/a1/b0580f26-ce5f-a53e-c4ef-6adaf4b798f9!120x120.jpg",
              name: "数据线"
            },
            {
              img:
                "https://i8.mifile.cn/b2c-mimall-media/a30fca95d954ee856f0c4e98e8095988!120x120.png",
              name: "贴膜"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/349f28c5b2bb5fa229fba9091702b3fa.jpg?thumb=1&w=120&h=120",
              name: "柔光灯"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/349f28c5b2bb5fa229fba9091702b3fa.jpg?thumb=1&w=120&h=120",
              name: "保护壳"
            }
          ]
        },
        {
          word: "电视",
          list: [
            {
              img:
                "https://i8.mifile.cn/b2c-mimall-media/033cfa4ab48b9d776dcb69e730022561!120x120.png",
              name: "32-40英寸"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/866dc2dc582f090c42e9e3204b98710b.png?thumb=1&w=120&h=120",
              name: "43英寸"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/22501ec50470010114f63fc43e99e677.png?thumb=1&w=120&h=120",
              name: "49-52英寸"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5c14e86ffa6dbd49c025d0d2112b3b5c.png?thumb=1&w=120&h=120",
              name: "55-60英寸"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dc46b32f0af885108b43fef14d1fd90d.png?thumb=1&w=120&h=120",
              name: "65-98英寸"
            },
            {
              img:
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2eed897dd74e0f8e36187d8beb4d5ca6.png?thumb=1&w=120&h=120",
              name: "激光投影电视"
            }
          ]
        },
        {
          word: "大家电",
          list: [
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a420b76232100bd466f1a0060ed97.png?thumb=1&w=120&h=120",
              name: "冰箱"
            },
            {
              img:
                "https://i8.mifile.cn/b2c-mimall-media/3f00551566f5b5f08f843403d8688a84!120x120.png",
              name: "壁挂空调"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7bdf9ac76bed032d94a638e88aa8aa0d.png?thumb=1&w=120&h=120",
              name: "立式空调"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/46342e7fb6975ab24c1365948a8bed99.png?thumb=1&w=120&h=120",
              name: "滚筒洗衣机"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/58b6b7cd244f22d30c34eccf3196f38d.png?thumb=1&w=120&h=120",
              name: "波轮洗衣机"
            }
          ]
        },

        {
          word: "大家电",
          list: [
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0b15efc342a60b6016c6c1092884f49d.png?thumb=1&w=120&h=120",
              name: "Air 12.5''"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a05e4ac5c3bdcb4e56ed9fcc79ed6d8.png?thumb=1&w=120&h=120",
              name: "Air 12.3''"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71c5e84be42a4581c67bd2fe5d4b8ffb.png?thumb=1&w=120&h=120",
              name: "RedmiBook13"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/840f5ca973e34683d3f6cbba7e1b1691.png?thumb=1&w=120&h=120",
              name: "RedmiBook14"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/840f5ca973e34683d3f6cbba7e1b1691.png?thumb=1&w=120&h=120",
              name: "15.6''"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c62c263dd80e807c0e1b2f67c74454c.png?thumb=1&w=120&h=120",
              name: "Pro 15.6''"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74f15a7f5fe1f248b1553a1bd674480c.png?thumb=1&w=120&h=120",
              name: "键鼠套装"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6838d4846c42e878626808294bdea7a9.png?thumb=1&w=120&h=120",
              name: "鼠标"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95a101367fbfa77d4bd88db896e58a7b.png?thumb=1&w=120&h=120",
              name: "双肩包"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f468d68482be77b70a2819e49615f96.png?thumb=1&w=120&h=120",
              name: "存储"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f9f79eaf19509df7ef9487074d6d86e5.jpg?thumb=1&w=120&h=120",
              name: "转接线"
            },
            {
              img:
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7a263616cc4bf261ed8725d819490dc4.png?thumb=1&w=120&h=120",
              name: "内胆包"
            }
          ]
        },

        {
          word: "小爱智能音箱",
          list: [
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/64ea2aa35059675da087732c31debeab.png?thumb=1&w=120&h=120",
              name: "小爱音箱Art"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2991b9ba166f447eb6615cce86d2337.png?thumb=1&w=120&h=120",
              name: "小爱音箱"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd4310cbae8fbdaba3649c68d4a7ae96.png?thumb=1&w=120&h=120",
              name: "小爱音箱Pro"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7627c0014e279da55829cee0b51672c.png?thumb=1&w=120&h=120",
              name: "小爱老师"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/da5c697534905a5ca9444984fc386feb.png?thumb=1&w=120&h=120",
              name: "小爱音箱Play"
            },
            {
              img:
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b8b7339fc507e41f04de9ea9ebdedd47.png?thumb=1&w=120&h=120",
              name: "小米AI音箱"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/83e6e1d81dbf65cfcddcbfcfcbfefc8d.png?thumb=1&w=120&h=120",
              name: "小爱万能遥控版"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/324a26ffc76926061938094f9fb88b11.png?thumb=1&w=120&h=120",
              name: "小爱HD"
            },
            {
              img:
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/acd788355bbd6fe6840f3543b90ad7a9.png?thumb=1&w=120&h=120",
              name: "小爱只能闹钟"
            }
          ]
        },

        {
          word: "路由器",
          list: [
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/60eb7505a9ddee647a48b35c8588bb82.png?thumb=1&w=120&h=120",
              name: "AX1800"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b1763f6fb0d8df37e77e120a8aefb676.png?thumb=1&w=120&h=120",
              name: "AIoT AX36000"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/df4368f5353ea13dceb1ba07ea6f6f43.png?thumb=1&w=120&h=120",
              name: "Mesh(两只装)"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e4eca203e55c2a1de43da066c8ea42fb.png?thumb=1&w=120&h=120",
              name: "Redmi AC2100"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96368011161e6be0a0f1986f571ec11c.png?thumb=1&w=120&h=120",
              name: "小米AC2100"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3ec439f3257f5f8ce0272602d63d9d1b.png?thumb=1&w=120&h=120",
              name: "4A 千兆版"
            },
            {
              img:
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e4905a4d01e22ea322fce7022b2544ae.png?thumb=1&w=120&h=120",
              name: "4 千兆版"
            },
            {
              img:
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a15fac758e72665eb13a722f75ec9777.png?thumb=1&w=120&h=120",
              name: "4C 300M"
            },
            {
              img:
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a3ce2e5766e231d75fa15d7934b493fd.png?thumb=1&w=120&h=120",
              name: "WIFI 放大器"
            }
          ]
        },

        {
          word: "生活电器",
          list: [
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74b2e513be87c41145e932110d8ea38d.png?thumb=1&w=120&h=120",
              name: "空气净化器"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8dfb1af5a437b65bcc9108b82411265.png?thumb=1&w=120&h=120",
              name: "扫地机"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/06d58bf1fed06fa5f433fc62f7302dd5.png?thumb=1&w=120&h=120",
              name: "吸尘器"
            },
            {
              img:
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/56db44cd039a22c06e351dc01fc7fdba.png?thumb=1&w=120&h=120",
              name: "新风机"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eb4112f1419174555a2e569ce3127d82.png?thumb=1&w=120&h=120",
              name: "电风扇"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c8c66c21e01f88127e42a0b54d56c6c3.png?thumb=1&w=120&h=120",
              name: "晾衣机"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c9c9cd6cec8e8116643790ae2564240a.png?thumb=1&w=120&h=120",
              name: "电暖器"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/226e59c7de1640e9321ed35576dda4a8.png?thumb=1&w=120&h=120",
              name: "擦地机"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6ebe8491e3253ac97a2ea0d165e8e1b2.png?thumb=1&w=120&h=120",
              name: "加湿器"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/25da364521359bde2ed4aeffb2fc2dfb.png?thumb=1&w=120&h=120",
              name: "除螨仪"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/daa6f98dda2b994a59d94e2d0f3e1e07.png?thumb=1&w=120&h=120",
              name: "修剪器"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9b2eea866a3df80d42db59bb57651f93.png?thumb=1&w=120&h=120",
              name: "甲醛监测仪"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6bc80cb61a9e405bbfc3413a2957975f.png?thumb=1&w=120&h=120",
              name: "宠物饮水机"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/755009b3601fc3f3adc4fa912f57b529.png?thumb=1&w=120&h=120",
              name: "除湿机"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9467c43db00b03f048ae54dba20e19f5.png?thumb=1&w=120&h=120",
              name: "宠物喂食器"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c05926082f9b6d6d479c694753f1791.png?thumb=1&w=120&h=120",
              name: "净水器"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4e8de320ccee7993f4c4513592aeaf60.png?thumb=1&w=120&h=120",
              name: "洗碗机"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1dd1956a3b665c0ba31e6334440344e4.png?thumb=1&w=120&h=120",
              name: "电饭煲"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/027d129974f4d457e2021cce597feca4.png?thumb=1&w=120&h=120",
              name: "烟机灶器"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ad25d6e16b5f12bd013a3f81455df998.png?thumb=1&w=120&h=120",
              name: "电磁炉"
            },
            {
              img:
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9bc543001efd3ef3894211d28fdc6ec1.png?thumb=1&w=120&h=120",
              name: "电压力锅"
            },
            {
              img:
                "https://i8.mifile.cn/v1/a1/91cd8c44-11ca-79bd-429f-de882bdeaf3b!120x120.png",
              name: "水壶"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/34236bf97f1bd6c6251f0a23b814802f.png?thumb=1&w=120&h=120",
              name: "微波炉"
            },
            {
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/066d8a4d7c5d623d32d2638d7515123f.png?thumb=1&w=120&h=120",
              name: "电烤箱"
            }
          ]
        }
      ],

      listHeight: [], //记录高度
      scrollY: 0
    };
  },
  methods: {
    _initScroll() {
      // 左边联动效果
      this.lefts = new BScroll(this.$refs.left, {
        click: true, //拥有触发事件
        probeType: 3 //滚动位置探针效果
      });
      // 右边联动效果
      this.rights = new BScroll(this.$refs.right, {
        probeType: 3 //滚动位置探针效果
      });
      // 获取滚动效果高度
      this.rights.on("scroll", this.onScrollfun);
    },

    onScrollfun(pos) {
      // console.log(pos.y);
      this.scrollY = Math.abs(Math.round(pos.y)); //滚动条y轴
    },
    // 获取高度
    _getHeight() {
      // 获取每个类对象
      let rightItems = this.$refs.right.getElementsByClassName(
        "right-item-hook"
      );
      let height = 0; //设置默认高度
      this.listHeight.push(height);

      // 循环对象获取各自到顶部高度
      for (let i = 0; i < rightItems.length; i++) {
        let item = rightItems[i];
        height += item.clientHeight; //对象高度
        this.listHeight.push(height);
      }

      // console.log(this.listHeight);
    },
    // 左侧点击效果
    selectItem(index, event) {
      // 当原生浏览器点击事件监听_constructed,把当时浏览器监听属性return掉
      // console.log(index);
      if (!event._constructed) {
        return;
      } else {
        // 联动效果
        let rightItems = this.$refs.right.getElementsByClassName(
          "right-item-hook"
        );
        let el = rightItems[index]; //通过下标获取对象
        // 通过滚动事件指定目标元素

        this.rights.scrollToElement(el);

        // this.currentIndex = index; //左侧效果
      }
    }
  },
  created() {
    this.$store.state.active = 1;
  },
  // 生命周期函数。目的让vue代码执行解释后，实例化第三方插件
  mounted() {
    // 能在虚拟DOM执行完后，在回调方法
    this.$nextTick(() => {
      this._initScroll(); //调用滚动效果
      this._getHeight(); //获取右边列表内容高度
    });
  },
  // 组件销毁前阻止滚动事件
  beforeDestroy() {
    this.rights.off("scroll", this.onScrollfun);
  },
  // 计算属性
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        // 判断高度之间为当前左选项变化
        if (!height2 || (this.scrollY >= height && this.scrollY < height2)) {
          // console.log(height, height2);

          // console.log(this.scrollY);

          // 左边联动
          let leftItems = this.$refs.left.getElementsByTagName("li");
          let elLI = leftItems[i];
          this.lefts.scrollToElement(elLI);
          return i;
        }
      }
      // 如果没有高度值，默认为0，第一位
      return 0;
    }
  }
};
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
}
.head {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
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
  line-height:46px;
  color: #4e4e4e;
  background: white;
}
.content {
  display: flex;
  position: absolute;
  /* 定位里面不写左右样式，不写高度，自动获取高度 */
  top: 46px;
  bottom: 50px;
  background-color: #eeeeee;
  width: 100%;
  overflow: hidden;
}
.left {
  flex: 0 0 80px;
  width: 80px;
  background-color: #f7f7f7;
}
.left li {
  width: 100%;
  height: 100%;
}
.left li.current {
  background-color: #ffffff;
  color: #ff6b00;
  font-weight: bold;
  font-size: 16px;
}
.left li span {
  display: block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.right {
  flex: 1;
  background-color: #fff;
}
.right li {
  line-height: 30px;
  text-align: center;
  padding: 10px;
  overflow: auto;
  .van-col {
    text-align: center;
    .img {
      width: 60px;
      height: 60px;
      overflow: hidden;
      margin-left: 15px;
    }
  }
  .word {
    width: 100%;
    font-size: 16px;
    text-align: center;
    margin-bottom: 12px;
  }
  .word::after {
    content: "";
    width: 30px;
    height: 1px;
    background-color: #ccc;
    display: inline-block;
    vertical-align: middle;
  }
  .word::before {
    content: "";
    width: 30px;
    height: 1px;
    background-color: #ccc;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>