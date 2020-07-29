// 首页
export default {
    path: '/home',
    name: "首页",
    // redirect: "/home/recommend",
    component: () => import("../../views/home.vue"),
    children: [{
            path: "/home/recommend",
            name: "推荐",
            component: () => import("../../components/home/recommend.vue")
        },
        {
            path: "/home/phone",
            name: "手机",
            component: () => import("../../components/home/phone.vue")
        },
        {
            path: "/home/intelligence",
            name: "智能",
            component: () => import("../../components/home/intelligence.vue")
        },
        {
            path: "/home/televisions",
            name: "电视",
            component: () => import("../../components/home/televisions.vue")
        },
        {
            path: "/home/notebook",
            name: "笔记本",
            component: () => import("../../components/home/notebook.vue")
        },
        {
            path: "/home/household electrical appliances",
            name: "家电",
            component: () => import("../../components/home/household electrical appliances.vue")
        },
       

    ]
}