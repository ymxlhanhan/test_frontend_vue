import type {RouteRecordRaw} from "vue-router";


import User from "../../views/user/User.vue";


/**
 * 路由
 */
const userRouter: Array<RouteRecordRaw> = [
    {
        path: '/user',
        name: 'User',
        meta: {
            title: '用户信息',
            requiresAuth: true,
        },
        component: User
    }
];

export default userRouter;
