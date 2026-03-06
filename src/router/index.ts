import {createRouter, createWebHistory, type RouteRecordRaw} from "vue-router";
import commonRouter from "./routerMap/commonRouter.ts";
import loginRoutes from "./routerMap/login.ts";
import {useUserStore} from "../store/global.ts";

const routes: Array<RouteRecordRaw> = [
    ...commonRouter,
    ...loginRoutes
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

/**
 * 全局前置导航守卫
 */
// to：要进的，from：从哪来
router.beforeEach((to, from, next) => {
    // 进首页直接放行
    if(to.name !== 'Index'){
        // 1.如果进入登录页直接放行；2.非登录页但是登录了放行
        if((to.name !== 'Login') && !localStorage.getItem('token') && to.name !== 'Login') {
            next ({name: 'Login'})
        }
    }
    // 如果token不为空，定时判断登录情况
    console.log(useUserStore().nowUser.token);
    console.log(from.name);
    console.log(to.name);

    next ();
});

export default router;