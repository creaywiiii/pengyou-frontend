<script setup>
import { Iphone,User, Lock, Message, Phone } from '@element-plus/icons-vue'
import { ref } from 'vue'
//控制注册与登录表单的显示， 默认显示注册
const isRegister = ref(false)
const isemail =ref(true)
const text = ref("请输入邮箱")
const radio1 = ref('1')
const rightcode =ref(false)
const resetdata =ref({
    isemail: true,
    email: '',
    phone:'',
    newpassword: '',
    checkpassword: ''
})
const codedata = ref({
    isemail: true,
    email: '',
    phone:'',
    code: ''
})
const rules = ref({    
    email: [
        // { required: true, message: '请输入邮箱', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱', trigger: 'blur' }
    ],
    newpassword: [
        { required: true, message: '请输入新密码', trigger: 'blur' },
        { min: 6, max: 16, message: '密码长度在6到16位', trigger: 'blur' }
    ],
    checkpassword: [
        { required: true, message: '请再次输入密码', trigger: 'blur' },
        { min: 6, max: 16, message: '密码长度在 6 到 16 个字符', trigger: 'blur' },
        { validator: (rule, value, callback) => {
            if (value !== resetdata.newpassword) {
                callback(new Error('两次输入的密码不一致!'))
            } else {
                callback()
            }
        }, trigger: 'blur' }
    ],
    code: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
        { min: 6, max: 6, message: '验证码长度为6位', trigger: 'blur' }
    ],
    phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { type: 'number', message: '请输入正确的手机号', trigger: 'blur' }
    ]
})
//注册接口
import {userRegisterservice, userLoginservice} from '@/api/user.js'
import { ElMessage }from 'element-plus';

import { useTokenStore } from '@/stores/token.js';
import { useRouter } from 'vue-router'
const router = useRouter();
import { sendCodeService } from '@/api/user.js'
const sendCode = async() => {
    if (codedata.email === '') {
        codedata.isemail = true
    }else {
        codedata.isemail = false
    }
    // console.log(resetdata.isemail,codedata.isemail);    
    let result = await sendCodeService(codedata)
    ElMessage.success(result.message? result.message : '验证发送成功')
}
import {codeCheckService} from '@/api/user.js'
const checkcode = async() => {
    // let result = await codeCheckService(codedata)
    resetdata.isemail=codedata.isemail
    resetdata.phone = codedata.phone
    resetdata.email = codedata.email
    // ElMessage.success(result.message? result.message : '验证发送成功')
    rightcode.value = true
    // console.log(resetdata.isemail,codedata.isemail);
    
}
</script>

<template>
    <el-card class="page-container">
        <el-col :span="7" :offset="1" class="form" >
            <el-form ref="form" size="large" autocomplete="off" v-if="rightcode" :module="resetdata" :rules="rules">
                <el-form-item>
                    <h1 >重置密码</h1>
                </el-form-item>
                <el-form-item prop="newpassword" > 
                    <el-input :prefix-icon="Lock" type="password" placeholder="请输入新密码"  v-model="resetdata.newpassword"></el-input>
                </el-form-item>
                <el-form-item prop="checkpassword" > 
                    <el-input :prefix-icon="Lock" type="password" placeholder="请再次输入新密码" v-model="resetdata.checkpassword"></el-input>
                </el-form-item>
                <!-- 确认按钮 -->
                <el-form-item>
                    <el-button class="button" type="primary" auto-insert-space @click="router.push('/login')">确认修改</el-button>
                </el-form-item>
            </el-form>
            <el-form ref="form" size="large" autocomplete="off" v-else :rules="rules" :module="codedata">
                <el-form-item>
                    <h1 >重置密码</h1>
                </el-form-item>
                <el-form-item  :prop="isemail? 'email' : 'phone'" > 
                    <el-input :prefix-icon="isemail ? Message : Iphone" placeholder=请输入相关绑定信息 v-model="codedata.email" ></el-input>                                    
                </el-form-item>
                <el-form-item  > 
                    <el-radio-group v-model="radio1">
                        <el-radio value="1" size="small" @click="isemail = true">邮箱</el-radio>
                        <el-radio value="2" size="small" @click="isemail = false">手机号</el-radio>
                    </el-radio-group>  
                </el-form-item >
                <el-form-item  class="flex" prop="code" >
                    <el-input :prefix-icon="Lock" type="password" placeholder="验证码" style="width: 200px; margin-right: 60px;" v-model="codedata.code" ></el-input>
                    <el-button type="primary" style="width: 100px;" @click="sendCode">发送验证码</el-button>
                </el-form-item>
                <!-- 确认按钮 -->
                <el-form-item>
                    <el-button class="button" type="primary" auto-insert-space @click="checkcode">下一步</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-card>
</template>

<style lang="scss" scoped>
/* 样式 */
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
@font-face {
    font-family: 猫啃什锦黑;
    src: url(../assets/MaokenAssortedSans.ttf);
}
</style>