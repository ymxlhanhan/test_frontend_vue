import {createRouter, createWebHistory, type RouteRecordRaw} from "vue-router";
import commonRouter from "./routerMap/commonRouter.ts";
import loginRoutes from "./routerMap/login.ts";
import {useRouteStore, useUserStore} from "../store/global.ts";
// import {useUserStore} from "../store/global.ts";

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

    const userStore = useUserStore();
    const routeStore = useRouteStore();

    // 登录之后不允许进入登录界面
    if(to.name === 'Login') {
        routeStore.setName(from.path as string);
        if(userStore.state){
            // 返回上一个页面或回到主页
            next({name: from.name || '/'})
        }
    }
    // 未认证直接跳转登录页
    if(to.meta.requiresAuth && !userStore.state){
            next ({name: 'Login'})
    }
    // 更换标签名
    if (to.meta.title) {
        document.title = to.meta.title as string
    }
    // 如果token不为空，定时判断登录情况
    // console.log(useUserStore().nowUser.token);
    console.log(from.name);
    console.log(to.name);
    next ();
});

export default router;