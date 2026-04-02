import type {UserInfo} from "../types/userType.ts";
import {type StoreType, StoreTypes} from "../types/enum/storeEnums.ts";

const USER_INFO_KEY = "userInfo";

class UserInfoManager {
    static setUserInfo(userInfo: UserInfo, type?: StoreType) {
        if (!type) {
            localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
            sessionStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
        } else {
            switch (type) {
                case StoreTypes.LOCAL:
                    localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
                    break;
                case StoreTypes.SESSION:
                    sessionStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
                    break

            }
        }
    }

    static getUserInfo(type?: StoreType): UserInfo {
        if (!type) {
            const str = localStorage.getItem(USER_INFO_KEY);
            if (str != null) {
                return JSON.parse(str) as UserInfo;
            } else {
                return {} as UserInfo;
            }
        } else {
            switch (type) {
                case StoreTypes.LOCAL:
                    const strLocal = localStorage.getItem(USER_INFO_KEY);
                    if (strLocal != null) {
                        return JSON.parse(strLocal) as UserInfo;
                    } else {
                        return {} as UserInfo;
                    }
                case StoreTypes.SESSION:
                    const strSession = sessionStorage.getItem(USER_INFO_KEY);
                    if (strSession != null) {
                        return JSON.parse(strSession) as UserInfo;
                    } else {
                        return {} as UserInfo;
                    }
                default:
                    return {} as UserInfo;
            }
        }
    }

}

export default UserInfoManager;