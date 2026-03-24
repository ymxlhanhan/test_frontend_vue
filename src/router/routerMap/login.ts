import {type RouteRecordRaw} from "vue-router";


// 登录
import Login from "../../views/Login.vue";


/**
 * 路由
 */
const loginRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            requiresAuth: false,
        },
        component: Login
    }
];

export default loginRoutes;
