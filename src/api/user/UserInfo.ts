import type {User, UserInfo} from "../../types/userType.ts";
import {get} from "../../utils/axiosUtils.ts";

export const getUserInfo = (userInfo:UserInfo):Promise<User> => {
    return get(`/userinfo/${userInfo.id}`);
}