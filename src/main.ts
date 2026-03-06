import { createApp } from 'vue'
import './style/style.css'
import App from './App.vue'
import {createPinia} from "pinia";
import router from "./router";

// 创建Pinia实例
const pinia = createPinia();

createApp(App)
    // 使用router
    .use(router)
    // 使用pinia（作用职能相当一个全局都可以使用的数据）
    .use(pinia)
    .mount('#app')
