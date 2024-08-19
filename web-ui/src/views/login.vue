<script setup>

import { Iphone,User, Lock, Message } from '@element-plus/icons-vue'
import { ref } from 'vue'
//控制注册与登录表单的显示， 默认显示注册
const isRegister = ref(false)
const isemail =ref(true)
const radio1 = ref('1')
const Registerdata = ref({
    phone:'',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    code: ''
})
const Logindata = ref({
    username: '',
    password: ''    
})
const rules = ref({    
    email: [
        { required: true, message: '请输入邮箱', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱', trigger: 'blur' }
    ],
    phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { type: 'number', message: '请输入正确的手机号', trigger: 'blur' }
    ],
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 10, message: '用户名长度在 3 到 10 个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 16, message: '密码长度在 6 到 16 个字符', trigger: 'blur' }
    ],
    confirmPassword: [
        { required: true, message: '请再次输入密码', trigger: 'blur' },
        { min: 6, max: 16, message: '密码长度在 6 到 16 个字符', trigger: 'blur' },
        { validator: (rule, value, callback) => {
            if (value !== Registerdata.password) {
                callback(new Error('两次输入的密码不一致!'))
            } else {
                callback()
            }
        }, trigger: 'blur' }
    ],
    code: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
        { min: 4, max: 4, message: '验证码长度为 4', trigger: 'blur' }
    ]
})
//注册接口
import {userRegisterservice, userLoginservice} from '@/api/user.js'
import { ElMessage }from 'element-plus';
const register = async()=> {
    let result =await userRegisterservice(Registerdata.value);
    // if(result.code === 200){
    //     ElMessageMessage.success(msg? msg : '注册成功，请登录');
    // }else{
    //     ElMessage.error('注册失败，请检查输入信息');
    // }
    ElMessageMessage.success(result.message? result.message : '注册成功，请登录');
    isRegister.value = false;
}
import { useTokenStore } from '@/stores/token.js';
import { useRouter } from 'vue-router'
const router = useRouter();
const login = async()=> {
    let result =await userLoginservice(Logindata.value);


    // if(result.code === 200){
    //     ElMessage.success(msg? msg : '登录成功');
    // }else{
    //     ElMessage.error('登录失败，请检查输入信息');
    // }


    // useTokenStore().setToken(result.data);
    ElMessage.success(result.message? result.message : '登录成功');
    router.push('/');
}
</script>

<template>
    <el-row class="login-page">
        <el-col :span="12" class="bg">
            <div>
                <h2 style="font-size: 90px; font-family: 猫啃什锦黑;font-weight: 400; position: absolute;top: 30%; right: 69.5%;font-style: italic; text-shadow:2px 2px 2px #000000;color:rgb(red, green, blue);">朋有</h2>
            </div>
        </el-col>
        <el-col :span="6" :offset="3" class="form">
            <!-- 注册表单 -->
            <el-form ref="form" size="large" autocomplete="off" v-if="isRegister" :model="Registerdata" :rules="rules">
                <el-form-item>
                    <h1 >注册</h1>
                </el-form-item>
                <el-form-item :prop="isemail? 'email' : 'phone'" > 
                    <el-input :prefix-icon="isemail ? Message : Iphone" placeholder=请输入 :v-model="isemail ? Registerdata.email : Registerdata.phone" ></el-input>                                    
                </el-form-item>
                <el-form-item  > 
                    <el-radio-group v-model="radio1">
                        <el-radio value="1" size="small" @click="isemail = true">邮箱</el-radio>
                        <el-radio value="2" size="small" @click="isemail = false">手机号</el-radio>
                    </el-radio-group>  
                </el-form-item >
                <el-form-item prop="username" >
                    <el-input :prefix-icon="User" placeholder="请输入用户名" v-model="Registerdata.username"></el-input>
                </el-form-item>
                <el-form-item  prop="password" >
                    <el-input :prefix-icon="Lock" type="password" placeholder="请输入密码" v-model="Registerdata.password"></el-input>
                </el-form-item>
                <el-form-item  prop="confirmPassword" >
                    <el-input :prefix-icon="Lock" type="password" placeholder="请再次输入密码" v-model="Registerdata.confirmPassword"></el-input>
                </el-form-item>
                <el-form-item prop="code" >
                    <el-input :prefix-icon="Lock" type="password" placeholder="验证码" style="width: 250px; margin-right: 30px;" v-model="Registerdata.code"></el-input>
                    <el-button type="primary" style="width: 100px;">发送验证码</el-button>
                </el-form-item>
                <!-- 注册按钮 -->
                <el-form-item>
                    <el-button class="button" type="primary" auto-insert-space @click="register">
                        注册
                    </el-button>
                </el-form-item>
                <el-form-item class="flex">
                    <el-link type="info" :underline="false" @click="isRegister = false">
                        ← 返回
                    </el-link>
                </el-form-item>
            </el-form>
            <!-- 登录表单 -->
            <el-form ref="form" size="large" autocomplete="off" v-else :model="Logindata" :rules="rules">
                <el-form-item>
                    <h1>登录</h1>
                </el-form-item>
                <el-form-item prop="username" >
                    <el-input :prefix-icon="User" placeholder="请输入用户名" v-model="Logindata.username"></el-input>
                </el-form-item>
                <el-form-item prop="password" > 
                    <el-input name="password" :prefix-icon="Lock" type="password" placeholder="请输入密码" v-model="Logindata.password"></el-input>
                </el-form-item>
                <el-form-item class="flex">
                    <div class="flex">
                        <el-checkbox>记住我</el-checkbox>
                        <el-link type="primary" :underline="false">忘记密码？</el-link>
                    </div>
                </el-form-item>
                <!-- 登录按钮 -->
                <el-form-item>
                    <el-button class="button" type="primary" auto-insert-space @click="router.push('/')">登录</el-button>
                </el-form-item>
                <el-form-item class="flex">
                    <el-link type="info" :underline="false" @click="isRegister = true">
                        注册 →
                    </el-link>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<style lang="scss" scoped>
/* 样式 */
.login-page {
    height: 100vh;
    background-color: #fff;

    .bg {
        background: 
        // url('@/assets/login_bg.jpg') no-repeat 60% center / 240px auto,
            url('@/assets/loginbg.png') no-repeat center / cover;
        border-radius: 0 20px 20px 0;
    }

    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        user-select: none;

        .title {
            margin: 0 auto;
        }

        .button     {
            width: 100%;
        }

        .flex {
            width: 100%;
            display: flex;  
            justify-content: space-between;
        }
    }
}
@font-face {
    font-family: 猫啃什锦黑;
    src: url(../assets/MaokenAssortedSans.ttf);
}
// .login-page {
//     background: 
//             // url('@/assets/bg.png') no-repeat center / cover;
// }
</style>