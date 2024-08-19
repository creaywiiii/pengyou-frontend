import request from '../utils/request';
export const userRegisterservice=(Registerdata) => {
    // 借助urlsearchParams对象，将对象转换为请求参数
    const params = new URLSearchParams;
    for(let key in Registerdata){
        params.append(key, Registerdata[key]);
    }
    return  request.post('/user/register', params ); 
}
export const userLoginservice=(Logindata) => {
    const params = new URLSearchParams;
    for(let key in Logindata){
        params.append(key, Logindata[key]);
    }
    return  request.post('/user/login', params ); 
}
//获取个人信息
export const getuserInfoservice=() => {
    return request.get('/user/info');
}
//修改个人信息
export const updateuserInfoservice=(data) => {
    return request.post('/user/update', data);
}
//头像上传
export const useeAvatarUploadService=(avatarUrl) => {
    let params = new URLSearchParams();
    params.append('avatarUrl', avatarUrl);
    return request.post('/user/avatar', params);
}
//验证码
export const sendCodeService=(codedata) => {
    return request.post('/user/sendCode', codedata);
}
//验证验证码
export const codeCheckService=(codedata) => {
    return request.post('/user/checkCode', codedata);
}