import axios, {type AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse} from "axios";
import {ElMessage, ElMessageBox} from "element-plus";
import {useUserStore} from "../store/global.ts";

// 定义需要返回的数据类型
export interface ApiResponse<T = any> {
    code: string;
    msg: string;
    data: T;
    status: boolean;
}

// 创建一个Axinos实例
const service: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8888',
    timeout: 10000, // 请求超时时间
    headers: { 'Content-Type': 'application/json;charset=utf-8' }
})


// --- 请求拦截器 ---
service.interceptors.request.use(
    (config: AxiosRequestConfig | any) => {
        // 在发送请求前要做什么
        // 添加token认证
        const token = useUserStore().nowUser.token; // 假设 token 存储在 localStorage
        if (token && config.headers) {
            config.headers['token'] = `${token}`;
        }

        return config;
    },
    (error: AxiosError) => {
        // 请求错误处理
        console.error('Request Error:', error); // for debug
        return Promise.reject(error);
    }
);

// --- 响应拦截器 ---
service.interceptors.response.use(
    (response: AxiosResponse<ApiResponse>) => {
        // 可以在这里关闭全局的 loading...

        const res = response.data;

        // 业务成功的判断标准，可以根据你后端接口的实际情况调整
        // 例如，code === 0 或 code === 20000
        if (res.code === '200') {
            // 直接返回业务数据
            return res.data;
        } else {
            // 业务错误处理
            handleBusinessError(res);
            return Promise.reject(new Error(res.msg || 'Error'));
        }
    },
    (error: AxiosError) => {
        // HTTP 状态码错误处理
        handleHttpError(error);
        return Promise.reject(error);
    }
);

// --- 错误处理函数 ---

/**
 * 处理业务错误（HTTP状态码为2xx，但后端返回了错误码）
 * @param res 响应体
 */
function handleBusinessError(res: ApiResponse): void {
    ElMessage({
        message: res.msg || '业务处理失败',
        type: 'error',
        duration: 5 * 1000,
    });
}

/**
 * 处理HTTP错误（非2xx状态码）
 * @param error Axios错误对象
 */
function handleHttpError(error: AxiosError): void {
    let message = '';
    const status = error.response?.status;

    switch (status) {
        case 401:
            // Token 过期或无效
            message = '认证失败，请重新登录';
            // 这里可以做一些特殊处理，比如弹出确认框，然后跳转到登录页
            ElMessageBox.confirm('您的登录已过期，请重新登录', '提示', {
                confirmButtonText: '重新登录',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(() => {
                // 清除本地存储的 token，并跳转到登录页
                localStorage.removeItem('token');
                window.location.href = '/login';
            });
            break;
        case 403:
            message = '您没有权限访问此资源';
            break;
        case 404:
            message = '请求的资源未找到';
            break;
        case 500:
            message = '服务器内部错误';
            break;
        default:
            message = error.message || '网络错误';
    }

    ElMessage({
        message,
        type: 'error',
        duration: 5 * 1000,
    });
}



/**
 * 封装get方法
 */
export const get = <T>(url: string, params?: Object): Promise<T> => {
    return service.get(url, {params});
}

/**
 * 封装post方法
 */
export const post = <T>(url: string, data?: Object): Promise<T> => {
    return service.post(url, data);
}


/**
 * 封装put方法
 */
export const put = <T>(url: string, data?: Object): Promise<T> => {
    return service.put(url, data);
}

/**
 * 封装delete方法
 */
export const del = <T>(url: string, data?: Object): Promise<T> => {
    return service.delete(url, data);
}

/**
 * 封装文件上传/表单传参
 */
export const upload = <T>(url: string, formData: FormData): Promise<T> => {
    return service.post(url, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export default service;

