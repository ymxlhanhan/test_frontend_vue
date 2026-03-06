// 在 src/types目录下， 新建 vue-router.d.ts类型声明文件
import "vue-router"

declare module 'vue-router' {
    interface RouteMeta {
        title?: string        // 可选
    }
}