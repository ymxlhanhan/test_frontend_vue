import {type StoreType, StoreTypes} from "../types/enum/storeEnums.ts";

const TOKEN_KEY: string = 'token';



/**
 * token管理
 */
class TokenManager {
    // 设置token
    static setToken(token: string, type?: StoreType) {
        if(!type) {
            localStorage.setItem(TOKEN_KEY, token);
            sessionStorage.setItem(TOKEN_KEY, token);
        } else {
            switch (type) {
                case StoreTypes.LOCAL:
                    localStorage.setItem(TOKEN_KEY, token);
                    break;
                case StoreTypes.SESSION:
                    sessionStorage.setItem(TOKEN_KEY, token);
                    break;
                // case TokenType.MEMORY:
                //     memory.setItem(TOKEN_KEY, token);
                //     break;
            }
        }
    }

    // 获取token
    static getToken(type: StoreType): string | null {
        switch (type) {
            case StoreTypes.LOCAL:
                return localStorage.getItem(TOKEN_KEY);
            case StoreTypes.SESSION:
                return sessionStorage.getItem(TOKEN_KEY);
            default:
                return null;
        }
    }

    // 清除token
    static removeToken(type?: StoreType) {
        if (!type) {
            localStorage.removeItem(TOKEN_KEY);
            sessionStorage.removeItem(TOKEN_KEY);
        } else {
            switch (type) {
                case StoreTypes.LOCAL:
                    localStorage.removeItem(TOKEN_KEY);
                    break;
                case StoreTypes.SESSION:
                    localStorage.removeItem(TOKEN_KEY);
                    break;
            }
        }
    }

    // 检查是否登录
    static isLogin(): boolean {
        return !! this.getToken(StoreTypes.SESSION);
    }
}

export default TokenManager;