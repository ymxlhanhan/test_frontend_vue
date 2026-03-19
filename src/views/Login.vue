<script setup lang="ts">
import {reactive, ref} from "vue"
import type {LoginForm, LoginUserInfo} from "../types/userType.ts";
import type {FormInstance, FormRules} from "element-plus";
import {login} from "../api/login/login.ts";


// 创建初始响应式表单对象
const loginForm = reactive<LoginForm>({
  account: '',
  password: ''
});
// 自定义校验空白规则
const accNotNull = (rule: any, value: any, callback: any) => {
  rule;
  if (value.trim() === "") {
    callback(new Error('账号不能为空'));
  } else {
    callback();
  }
};
const pwdNotNull = (rule: any, value: any, callback: any) => {
  rule;
  if (value.trim() === "") {
    callback(new Error('密码不能为空'));
  } else {
    callback();
  }
};

// 表单验证规则
const loginFormRules = reactive<FormRules<LoginForm>>({
  account: [
    {validator: accNotNull, trigger: "change"}
  ],
  password: [
    {validator: pwdNotNull, trigger: "change"}
  ]
});

const loginFormRef = ref<FormInstance>();

// 处理表单信息
const handleFormSubmit = (formEl: FormInstance | undefined) => {
  if (!loginFormRef) return
  // 表单实例验证后callback
  formEl?.validate((valid: boolean) => {
    if (valid) {
      try {
        //
        const userInfo = login(loginForm);
        console.log(userInfo);
        userInfo.then(user => {
          console.log(user);
        })
      } catch (error) {
        console.log("登录报错了：" + error);
      }
    } else {
      console.log("error");
    }
  })
}


</script>

<template>
  <!-- 登录 -->
  <div class="box">
    <el-form class="form" ref="loginFormRef" :rules="loginFormRules" :model="loginForm">
      <el-form-item label="账号" prop="account">
        <el-input v-model="loginForm.account" type="text" placeholder="请输入账号" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleFormSubmit(loginFormRef)">登录</el-button>
        <el-button>注册</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<style scoped>

.box {
  align-content: center;
  justify-items: center;
  height: 100vh;
}

.form {
  width: 400px;
  padding: 10px;
  border: 1px solid #dcdfe6;
  /* 边框圆角 */
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  justify-items: center;
}

.items {
  border: 1px solid #dcdfe6;
  /* 边框圆角 */
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  justify-items: center;
}

</style>