import type {RouteRecordRaw} from "vue-router";


import UserInfo from "../../views/user/UserInfo.vue";


/**
 * 路由
 */
const userRouter: Array<RouteRecordRaw> = [
    {
        path: '/userInfo',
        name: 'UserInfo',
        meta: {
            title: '用户信息',
            requiresAuth: false,
        },
        component: UserInfo
    }
];

export default userRouter;
