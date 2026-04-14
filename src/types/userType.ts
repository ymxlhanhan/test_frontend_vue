// 登录请求传参
export interface LoginForm {
    account: string;
    password: string;
}

// 后端返回用户的信息
export interface LoginUserInfo {
    token: string;
    userInfo: UserInfo;
}

// 内存保存的用户信息
export interface UserInfo {
    id: number;
    account: string;
}

// 用户详情的信息
export interface User {
    account: string;
    userName: string;
    userRole: string;
    remark: string;
}