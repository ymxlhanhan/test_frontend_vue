import {defineStore} from "pinia";
import type {UserInfo} from "../types/userType.ts";
import TokenManager from "../utils/tokenUtils.ts";
import {StoreTypes} from "../types/enum/storeEnums.ts";
import UserInfoManager from "../utils/userUtils.ts";


/**
 * 用来保存登录用户信息
 */
export const useUserStore = defineStore("loginUserInfo", {
    // 初始值
    state: () => ({
        userInfo: UserInfoManager.getUserInfo(),
        token: TokenManager.getToken(StoreTypes.LOCAL) === null ? '' : TokenManager.getToken(StoreTypes.LOCAL),
        state: TokenManager.getToken(StoreTypes.LOCAL) === null !== null
    }),
    actions: {
        setUserInfo(info: UserInfo) {
            this.userInfo = info;
            UserInfoManager.setUserInfo(info);
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