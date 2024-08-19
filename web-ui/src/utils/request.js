//导入axios  npm install axios
import axios from 'axios';
import { ElMessage } from 'element-plus';
import { useTokenStore } from '@/stores/token.js';
import router from '@/router';

//定义一个变量,记录公共的前缀  ,  baseURL
const baseURL = '/api';
const instance = axios.create({baseURL})
//添加请求拦截器
instance.interceptors.request.use(
    config=>{
        //获取token
        const tokenStore = useTokenStore();
        //判断是否有token
        if(tokenStore.token){
            //给请求头添加token
            config.headers.Authorization = tokenStore.token;
        }
        return config;
    },
    err=>{
        return Promise.reject(err);
    }
)

//添加响应拦截器
instance.interceptors.response.use(
    result=>{
        //判断业务状态码
        if(result.status === 200){//200表示是登录成功的代码
        return result.data;
        }
        //代码运行至,则提示错误信息
        ElMessage.error('服务异常');
        return Promise.reject(result.data);
    },
    err=>{
        if(err.response===401){//401是未登陆的代码
            ElMessage.error('请先登录');
            //跳转到登录页面
            router.push('/login');
        }else{        
            ElMessage.error('服务异常');

        }
         return Promise.reject(err);//异步的状态转化成失败的状态

    }
)

export default instance;