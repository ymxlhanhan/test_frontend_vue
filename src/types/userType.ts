
// 登录用户的信息
export interface LoginUserInfo {
    account: string;
    time: string;
    token: string;
}

// 登录请求传参
export interface LoginInfo {
    account: string;
    password: string;
}