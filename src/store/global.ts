import {defineStore} from "pinia";
import type {LoginUserInfo} from "../types/userType.ts";

/**
 * 用来保存登录用户信息
 */
export const useUserStore = defineStore("loginUserInfo", {
    // 初始值
    state: () => {
        const nowUser: LoginUserInfo = {
            account: '',
            time: '',
            token: ''
        }
        return {nowUser};
    },
    actions: {
        login(loginUserInfo: LoginUserInfo) {
            this.nowUser = loginUserInfo;
        }
    }
})