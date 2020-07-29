<template>
  <div style="padding-bottom:20px">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e893a3037ff23b6323be104722deb1c4.jpg?thumb=1&w=720&h=360"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67d31ba2a0a44b8065a02ee408e0cd8e.jpg?thumb=1&w=720&h=360"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb281de4df1e66ab54f25ec8f7639bd9.jpg?thumb=1&w=720&h=360"
          alt
        />
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播图end -->

    <!-- 分类 -->
    <van-row>
      <van-col span="24">
        <div class="gird">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152"
            alt
          />
          <img src="https://i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp" alt />
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d436f30612651fffe1d6c5aaa3fdb816.png?thumb=1&w=144&h=152"
            alt
          />
          <img src="https://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp" alt />
          <img src="https://i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80.webp" alt />
        </div>
        <div class="gird">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/64f3988b6216e4c1ab62a7f50df3e816.png?thumb=1&w=144&h=152"
            alt
          />
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?thumb=1&w=144&h=152"
            alt
          />
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?thumb=1&w=144&h=152"
            alt
          />
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9425031cdd7af22d9a23a5ae16d1f57c.jpg?thumb=1&w=144&h=152"
            alt
          />
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?thumb=1&w=144&h=152"
            alt
          />
        </div>
      </van-col>
    </van-row>
    <!-- 分类end -->

    <!-- 商品列表 -->
    <div class="goodslist">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d692a30ee3d586c4274575eec255d3c5.jpg?thumb=1&w=358&h=508"
        alt
      />
    </div>

    <van-grid :border="false" :column-num="2">
      <van-grid-item>
        <van-image
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/827a686678f39b1bbdc99c6e6b6a13c8.jpg?thumb=1&w=358&h=252"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/267e988a99b5cf4e960747e8aa5fa831.jpg?thumb=1&w=358&h=252"
        />
      </van-grid-item>
    </van-grid>

    <div class="goodslist">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/189acdf7e9b807cfc22d394df87c1958.jpg?thumb=1&w=720&h=280"
        alt
      />
    </div>
    <img
      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e32eea5c3c27062019f9ac6434b351df.jpg?thumb=1&w=720&h=440"
      alt
    />
    <!-- 商品列表end -->
    <lazy-component>
      <van-grid :border="false" :column-num="2">
        <van-grid-item to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7ed6090953a4edca0ee6bc4b36cb4a9e.jpg?thumb=1&w=344&h=280"
          />
          <h1 style="margin-top:5px">小米10 Pro</h1>
          <h2 style="margin:3px">骁龙865 / 50倍变焦</h2>
          <h3 style="color:red">￥4999起</h3>
          <van-button type="danger" style="margin-top:5px;height:30px">立即购买</van-button>
        </van-grid-item>
        <van-grid-item to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9b3b7c52bffab0806c54652ee0872a64.jpg?thumb=1&w=344&h=280"
          />
          <h1 style="margin-top:5px">小米10</h1>
          <h2 style="margin:3px">骁龙865/1亿像素相机</h2>
          <h3 style="color:red">￥3999起</h3>
          <van-button type="danger" style="margin-top:5px;height:30px">立即购买</van-button>
        </van-grid-item>
        <van-grid-item to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/64a04d4f67a23c2d8643aaba52e2392b.jpg?thumb=1&w=344&h=280"
          />
          <h1 style="margin-top:5px">Redmi K30</h1>
          <h2 style="margin:3px">120Hz流速屏，全速热爱</h2>
          <h3 style="color:red">￥1699起</h3>
          <van-button type="danger" style="margin-top:5px;height:30px">立即购买</van-button>
        </van-grid-item>
        <van-grid-item to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cf8c841ab5e52d443be110f6aa7e0d98.jpg?thumb=1&w=344&h=280"
          />
          <h1 style="margin-top:5px">Redmi K30 5G</h1>
          <h2 style="margin:3px">双模5G，120Hz流速屏</h2>
          <h3 style="color:red">￥1999起</h3>
          <van-button type="danger" style="margin-top:5px;height:30px">立即购买</van-button>
        </van-grid-item>
        <van-grid-item to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/53e729d30746033a042d8ae9399553a7.jpg?thumb=1&w=344&h=280"
          />
          <h1 style="margin-top:5px">Redmi Note 8 Pro</h1>
          <h2 style="margin:3px">6400万全场景四摄</h2>
          <h3 style="color:red">￥1299起</h3>
          <van-button type="danger" style="margin-top:5px;height:30px">立即购买</van-button>
        </van-grid-item>
        <van-grid-item to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8025107813883a20d3f2d956ad80ea38.jpg?thumb=1&w=344&h=280"
          />
          <h1 style="margin-top:5px">Redmi Note 8</h1>
          <h2 style="margin:3px">千元4800万四摄</h2>
          <h3 style="color:red">￥899起</h3>
          <van-button type="danger" style="margin-top:5px;height:30px">立即购买</van-button>
        </van-grid-item>
      </van-grid>
      <van-divider style="margin:5px 0" />
      <van-row type="flex" justify="center">
        <van-col span="24" style="font-size:14px;text-align:center">
          <a href="#">更多小米手机产品></a>
        </van-col>
      </van-row>

      <van-divider style="margin:5px 0" />
      <img src="https://i8.mifile.cn/v1/a1/34cc562e-8dd3-61e9-0209-395edb9237a1.webp" alt />
      <van-grid :border="false" :column-num="2">
        <van-grid-item to="/details">
          <van-image src="https://i8.mifile.cn/v1/a1/82003442-c6b7-3258-cc7a-2a851216ce8a.webp" />
          <h1 style="margin-top:5px">小米电视4A 65英寸</h1>
          <h2 style="margin:3px">4K HDR，人工智能语音系统</h2>
          <h3 style="color:red">￥2599起</h3>
          <van-button type="danger" style="margin-top:5px;height:30px">立即购买</van-button>
        </van-grid-item>
        <van-grid-item to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cd59729b9a02407979848839c0e5343.jpg?thumb=1&w=344&h=280"
          />
          <h1 style="margin-top:5px">小米电视4X 43英寸</h1>
          <h2 style="margin:3px">FHD全高清屏，人工智能语音</h2>
          <h3 style="color:red">￥1199起</h3>
          <van-button type="danger" style="margin-top:5px;height:30px">立即购买</van-button>
        </van-grid-item>
        <van-grid-item to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/896d989bcdae584906c36f4a4e5fa89b.jpg?thumb=1&w=344&h=280"
          />
          <h1 style="margin-top:5px">小米电视4C 50英寸</h1>
          <h2 style="margin:3px">4K HDR，钢琴烤漆</h2>
          <h3 style="color:red">￥1599起</h3>
          <van-button type="danger" style="margin-top:5px;height:30px">立即购买</van-button>
        </van-grid-item>
        <van-grid-item to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4b624a157d24822509e1f54316c8417a.jpg?thumb=1&w=344&h=280"
          />
          <h1 style="margin-top:5px">小米电视4C 55英寸</h1>
          <h2 style="margin:3px">4K HDR，人工智能系统</h2>
          <h3 style="color:red">￥1799起</h3>
          <van-button type="danger" style="margin-top:5px;height:30px">立即购买</van-button>
        </van-grid-item>
        <van-grid-item to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d20e4c39b6967319e89b1f779332b0e.jpg?thumb=1&w=344&h=280"
          />
          <h1 style="margin-top:5px">小米电视4A 32英寸</h1>
          <h2 style="margin:3px">人工智能系统，高清液晶屏</h2>
          <h3 style="color:red">￥699起</h3>
          <van-button type="danger" style="margin-top:5px;height:30px">立即购买</van-button>
        </van-grid-item>
        <van-grid-item to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/06bd0cdc9a6d3cc76850633a8ffb9d74.png?thumb=1&w=344&h=280"
          />
          <h1 style="margin-top:5px">小米电视4A 50英寸</h1>
          <h2 style="margin:3px">4K HDR，人工智能语音系统</h2>
          <h3 style="color:red">￥1599起</h3>
          <van-button type="danger" style="margin-top:5px;height:30px">立即购买</van-button>
        </van-grid-item>
      </van-grid>

      <van-divider style="margin:5px 0" />
      <van-row type="flex" justify="center">
        <van-col span="24" style="font-size:14px;text-align:center">
          <a href="#">更多小米电视产品></a>
        </van-col>
      </van-row>
      <van-divider style="margin:5px 0" />
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/067047e99bc9517e85bbc5d2d854779a.jpg?thumb=1&w=720&h=280"
        alt
      />
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c226d76d6036e165523338e63f6d2da4.jpg?thumb=1&w=720&h=440"
        alt
      />
      <van-grid :border="false" :column-num="2">
        <van-grid-item to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/399cfcaa4aae2766733e46704935bdd4.jpg?thumb=1&w=344&h=280"
          />
          <h1 style="margin-top:5px">Air 13.3" 2019款</h1>
          <h2 style="margin:3px">新一代独立显卡</h2>
          <h3 style="color:red">￥4999起</h3>
          <van-button type="danger" style="margin-top:5px;height:30px">立即购买</van-button>
        </van-grid-item>
        <van-grid-item to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ff646eb3db372e455a7154331fa58d53.jpg?thumb=1&w=344&h=280"
          />
          <h1 style="margin-top:5px">小米笔记本15.6" MX110...</h1>
          <h2 style="margin:3px">全面均衡的国民轻薄本</h2>
          <h3 style="color:red">￥3899起</h3>
          <van-button type="danger" style="margin-top:5px;height:30px">立即购买</van-button>
        </van-grid-item>
        <van-grid-item to="/details">
          <van-image src="https://i8.mifile.cn/v1/a1/1ed6a607-21e5-8d85-e0e9-dfb07571fc6a.webp" />
          <h1 style="margin-top:5px">小米游戏本</h1>
          <h2 style="margin:3px">冷酷的性能怪兽</h2>
          <h3 style="color:red">￥8999起</h3>
          <van-button type="danger" style="margin-top:5px;height:30px">立即购买</van-button>
        </van-grid-item>
        <van-grid-item to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4f09569618c64e3f6f36d1be6922e3cc.jpg?thumb=1&w=344&h=280"
          />
          <h1 style="margin-top:5px">Pro 15.6" GTX显卡</h1>
          <h2 style="margin:3px">更强悍的专业笔记本</h2>
          <h3 style="color:red">￥7999起</h3>
          <van-button type="danger" style="margin-top:5px;height:30px">立即购买</van-button>
        </van-grid-item>
      </van-grid>
      <van-divider style="margin:5px 0" />
      <van-row type="flex" justify="center">
        <van-col span="24" style="font-size:14px;text-align:center">
          <a href="#">更多小米笔记本产品></a>
        </van-col>
      </van-row>
      <van-divider style="margin:5px 0" />
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85ea26a99c704861af8e29bf7f249fed.jpg?thumb=1&w=720&h=280"
        alt
      />
      <img src="https://i8.mifile.cn/v1/a1/3466df89-e534-a68c-6504-2b6e0a704307.webp" alt />
      <van-grid :border="false" :column-num="2">
        <van-grid-item to="/details">
          <van-image src="https://i8.mifile.cn/v1/a1/c585ed38-bee4-2f3c-c413-a1af154a74b3.webp" />
          <h1 style="margin-top:5px">空调（1.5匹/变频/一级能效）</h1>
          <h2 style="margin:3px">变频节能，高效制冷热</h2>
          <h3 style="color:red">￥2699起</h3>
        </van-grid-item>
        <van-grid-item to="/details">
          <van-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/552e42b8706ee8d0bd3e048d2a5c4316.jpg?thumb=1&w=360&h=360"
          />
          <h1 style="margin-top:5px">米家洗烘一体机Pro</h1>
          <h2 style="margin:3px">智能洗烘，省心省力</h2>
          <h3 style="color:red">￥2999起</h3>
        </van-grid-item>
        <van-grid-item to="/details">
          <van-image src="https://i8.mifile.cn/v1/a1/75f5a1ad-e2c6-36a9-fd56-66d253cc0469.webp" />
          <h1 style="margin-top:5px">空调（大1匹/定频/三级能效）</h1>
          <h2 style="margin:3px">出众静音，快速制冷热</h2>
          <h3 style="color:red">￥1499起</h3>
        </van-grid-item>
        <van-grid-item to="/details">
          <van-image src="https://i8.mifile.cn/v1/a1/27721d21-782a-32e8-772b-462652d9acde.webp" />
          <h1 style="margin-top:5px">米家洗烘一体机</h1>
          <h2 style="margin:3px">智能烘干，高效净衣</h2>
          <h3 style="color:red">￥2099起</h3>
        </van-grid-item>
        <van-grid-item to="/details">
          <van-image src="https://i8.mifile.cn/v1/a1/ce8d4b39-18b3-5b8e-ea74-5a2c86856e20.webp" />
          <h1 style="margin-top:5px">空调C1（1.5匹/变频/一级...</h1>
          <h2 style="margin:3px">变频节能省电，自清洁</h2>
          <h3 style="color:red">￥2099起</h3>
        </van-grid-item>
        <van-grid-item to="/details">
          <van-image src="https://i8.mifile.cn/v1/a1/33c6d391-82a0-0fd2-2d0e-fb59f4679b6c.webp" />
          <h1 style="margin-top:5px">Redmi波轮洗衣机1A</h1>
          <h2 style="margin:3px">一键操作，父母都爱用</h2>
          <h3 style="color:red">￥799起</h3>
        </van-grid-item>
      </van-grid>

      <van-divider style="margin:5px 0" />
      <van-row type="flex" justify="center">
        <van-col span="24" style="font-size:14px;text-align:center">
          <a href="#">更多米家家电产品></a>
        </van-col>
      </van-row>

      <van-divider style="margin:5px 0" />
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a56394373382e7d98a395b25c709cfcb.jpg?thumb=1&w=720&h=280"
        alt
      />
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/df9f0ec1b502e3f7ca36779c7596c7c4.jpg?thumb=1&w=720&h=440"
        alt
      />
      <van-divider style="margin:3px 0" />
      <van-row type="flex">
        <van-col span="12">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360"
            alt
          />
        </van-col>
        <van-col span="12" style="padding:40px 11px 0 11px">
          <h1 style="font-size:16px;margin-top:1px">米家直流变频落地扇1X</h1>
          <h2 style="font-size:13px;margin-top:5px">模拟自然风算法 支持AI语音</h2>
          <h3 style="font-size:15px;color:red;margin-top:20px">￥299</h3>
        </van-col>
      </van-row>
      <van-row type="flex">
        <van-col span="12" style="padding:40px 11px 0 11px">
          <h1 style="font-size:16px;margin-top:1px">小爱音箱万能遥控版</h1>
          <h2 style="font-size:13px;margin-top:5px">传统家电秒变智能</h2>
          <h3 style="font-size:15px;color:red;margin-top:20px">￥149</h3>
        </van-col>
        <van-col span="12">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c33f008a86c151a1500d44d599351256.jpg?thumb=1&w=360&h=360"
            alt
          />
        </van-col>
      </van-row>
      <van-row type="flex">
        <van-col span="12">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/739c1321d2a05d48c0b8b86cd459c4d4.jpg?thumb=1&w=360&h=360"
            alt
          />
        </van-col>
        <van-col span="12" style="padding:40px 11px 0 11px">
          <h1 style="font-size:16px;margin-top:1px">米家照片打印机</h1>
          <h2 style="font-size:13px;margin-top:5px">手机即拍即印</h2>
          <h3 style="font-size:15px;color:red;margin-top:20px">￥499</h3>
        </van-col>
      </van-row>
      <van-divider style="margin:5px 0" />
      <van-row type="flex" justify="center">
        <van-col span="24" style="font-size:14px;text-align:center">
          <a href="#">更多米家智能产品></a>
        </van-col>
      </van-row>
      <van-divider style="margin:5px 0" />
      <van-row gutter="2">
        <van-col span="12">
          <img src="https://i8.mifile.cn/v1/a1/46c44f3e-479d-a999-dd2d-98fb39b51e17.webp" alt />
        </van-col>
        <van-col span="12">
          <img src="https://i8.mifile.cn/v1/a1/b79cb907-3ae4-2a35-6756-b243b386a95a.webp" alt />
        </van-col>
      </van-row>
      <van-row gutter="2">
        <van-col span="12">
          <img src="https://i8.mifile.cn/v1/a1/b883172b-5aa3-7855-678f-c615109ee0a7.webp" alt />
        </van-col>
        <van-col span="12">
          <img src="https://i8.mifile.cn/v1/a1/8cfcd654-4af5-9ae6-c6cc-1ba9d28be8e8.webp" alt />
        </van-col>
      </van-row>
      <van-row gutter="2">
        <van-col span="12">
          <img src="https://i8.mifile.cn/v1/a1/52866372-7fe5-76c2-29a0-9ae32d07b8ff.webp" alt />
        </van-col>
        <van-col span="12">
          <img src="https://i8.mifile.cn/v1/a1/ad91499a-59ab-adc3-8fd5-98aefc1c43b4.webp" alt />
        </van-col>
      </van-row>
      <van-divider style="margin:5px 0" />
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4c4a11536a720ee0f1b516e53e4d868.jpg?thumb=1&w=720&h=280"
        alt
      />
      <van-divider style="margin:5px 0" />
      <van-row type="flex" justify="center">
        <van-col span="24" style="font-size:14px;text-align:center;">
          <a href="#">了解小米></a>
        </van-col>
      </van-row>
      <div class="footer">
        <div class="gotop" v-show="gotop" @click="toTop">
          <van-icon name="arrow-up" size="20px" />
        </div>
      </div>
      <van-divider style="margin:5px 0" />
    </lazy-component>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";

// npm install vue-prevent-browser-back --save
import preventBack from "vue-prevent-browser-back"; //组件内单独引入
Vue.use(Lazyload, {
  lazyComponent: true
});

export default {
  mixins: [preventBack], //注入
  data() {
    return {
      gotop: false
    };
  },
  methods: {
    showBtn() {
      // 计算距离顶部的高度，当高度大于660显示回顶部，小于660则隐藏（默认隐藏）
      /*获取当前页面滚动条纵坐标的位置
        IE9及以上：可以使用window.pageYOffset或者document.documentElement.scrollTop ，
        safari： window.pageYOffset 与document.body.scrollTop都可以
        Chrome：谷歌浏览器只认识document.body.scrollTop;*/
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 1234) {
        let that = this;
        that.gotop = true;
      } else {
        that.gotop = false;
      }
    },
    toTop() {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 70;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.showBtn);
  }
};
</script>

<style lang="scss" scoped>
.footer .gotop {
  width: 20px;
  height: 20px;
  text-align: center;
  position: fixed;
  right: 3%;
  bottom: 11%;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  background: rgba(10, 10, 10, 0.4);
  color: #bbbbbb;
}
.my-swipe {
  width: 100%;
  height: 180px;
  margin-top: 90px;
  transform: translateZ(0); //主要是加了这个，轮播下面的div就不抖动了
  img {
    height: 100%;
  }
}
.my-swipe .van-swipe-item {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.goodslist {
  width: 100%;
  margin-top: 5px;
}
.gird {
  display: flex;

  img {
    //    flex: 1;
    height: 79px;
    width: 20%;
  }
}
</style>