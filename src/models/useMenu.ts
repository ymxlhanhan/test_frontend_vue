import type {INvaMenu} from "./index";

export const useMenu = () => {
    const menuItems: INvaMenu[] = [
        {name: "首页", url: "/", icon: Document},
        {name: "登录", url: "/login", icon: Location}
    ];
    return {menuItems}
}