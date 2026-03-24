import {defineStore} from "pinia";
import type {UserInfo} from "../types/userType.ts";
import TokenManager from "../utils/tokenUtils.ts";


/**
 * 用来保存登录用户信息
 */
export const useUserStore = defineStore("loginUserInfo", {
    // 初始值
    state: () => ({
        userInfo: {} as UserInfo,
        token: '',
        state: false
    }),
    actions: {
        setUserInfo(info: UserInfo) {
            this.userInfo = info;
        },
        setState(state: boolean) {
            this.state = state;
        },
        setToken(token: string) {
            this.token = token;
            TokenManager.setToken(token);
        },
        logout() {
            this.userInfo = {} as UserInfo;
            this.token = '';
            this.state = false;
            TokenManager.removeToken();
        }
    }
});


/**
 * 用来储存登录上一个页面的信息的store
 */
export const useRouteStore = defineStore("routeStore", {
    state: () => ({
       name: ''
    }),
    actions: {
        setName(name: string) {
            this.name = name;
        }
    }
})