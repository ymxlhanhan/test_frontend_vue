import {upload} from "../../utils/axiosUtils.ts";
import type {LoginUserInfo} from "../../types/userType.ts";

// 登录
export const loginUser = (data: any): Promise<LoginUserInfo> => {
    return upload("/login", data);
}
