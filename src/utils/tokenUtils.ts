
const TOKEN_KEY: string = 'token';



export const TokenTypes = {
    LOCAL: 'local',
    SESSION: 'session',
    MEMORY: 'memory',
} as const;

export type TokenType = typeof TokenTypes[keyof typeof TokenTypes];

/**
 * token管理
 */
class TokenManager {
    // 设置token
    static setToken(token: string, type?: TokenType) {
        if(!type) {
            localStorage.setItem(TOKEN_KEY, token);
            sessionStorage.setItem(TOKEN_KEY, token);
        } else {
            switch (type) {
                case TokenTypes.LOCAL:
                    localStorage.setItem(TOKEN_KEY, token);
                    break;
                case TokenTypes.SESSION:
                    sessionStorage.setItem(TOKEN_KEY, token);
                    break;
                // case TokenType.MEMORY:
                //     memory.setItem(TOKEN_KEY, token);
                //     break;
            }
        }
    }

    // 获取token
    static getToken(type: TokenType): string | null {
        switch (type) {
            case TokenTypes.LOCAL:
                return localStorage.getItem(TOKEN_KEY);
            case TokenTypes.SESSION:
                return sessionStorage.getItem(TOKEN_KEY);
            default:
                return null;
        }
    }

    // 清除token
    static removeToken(type?: TokenType) {
        if (!type) {
            localStorage.removeItem(TOKEN_KEY);
            sessionStorage.removeItem(TOKEN_KEY);
        } else {
            switch (type) {
                case TokenTypes.LOCAL:
                    localStorage.removeItem(TOKEN_KEY);
                    break;
                case TokenTypes.SESSION:
                    localStorage.removeItem(TOKEN_KEY);
                    break;
            }
        }
    }

    // 检查是否登录
    static isLogin(): boolean {
        return !! this.getToken(TokenTypes.SESSION);
    }
}

export default TokenManager;