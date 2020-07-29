export default [{
        path: '/my',
        name: "我的",
        component: () => import("../../views/my.vue"),

    }, {
        path: "/coupon",
        name: "优惠券",
        component: () => import("../../components/my/coupon.vue")
    },
    {
        path: "/setting",
        name: "设置",
        component: () => import("../../components/my/setting.vue")
    },
    {
        path: '/register',
        name: "注册",
        component: () => import("../../components/my/register.vue")
    },
    {
        path: '/login',
        name: "登录",
        component: () => import("../../components/my/login.vue")
    },
    {
        path: '/service',
        name: "服务中心",
        component: () => import("../../components/my/service.vue")
    },
    {
        path: '/gift',
        name: "礼物码兑换",
        component: () => import("../../components/my/gift.vue")
    },
   
]