import type {RouteRecordRaw} from "vue-router";

// import Index from "../../views/Index.vue";
import NotFound from "../../views/NotFound.vue";
import Test from "../../views/Test.vue";

const commonRouter: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
        },
        component: () => import('../../views/Index.vue'),
    },
    {
        // 用来匹配所有为找到的路由，放在pathMatch下
        // :表示动态路径，叫pathMatch；
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        meta: {
            title: 'Not Found'
        },
        component: NotFound
    },
    {
        path: '/test',
        name: 'Test',
        meta: {
            title: '测试',
        },
        component: Test
    }

];

export default commonRouter;