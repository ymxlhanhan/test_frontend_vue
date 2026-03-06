<script setup lang="ts">
import {ref} from "vue"
import {loginUser} from "../api/login/login.ts";
import type {LoginInfo, LoginUserInfo} from "../types/userType.ts";
import {useUserStore} from "../store/global.ts";

// 账号
const account = ref('');
// 密码
const password = ref('')

const handleLogin = async (): Promise<void> => {
  const loginInfo: LoginInfo = {
    account: account.value,
    password: password.value
  }
  const userInfo = await loginUser( loginInfo);
  const loginUserInfo = useUserStore();
  // 存用户信息
  loginUserInfo.login(userInfo);
  console.log(userInfo);
}

</script>
<template>
  <h3>登录页面</h3>
  <div>
    <!--  v-model:表明我要使用account变量  -->
    <el-input v-model="account" style="width: 240px" placeholder="账号"/>
  </div>
  <div>
    <!--  v-model:表明我要使用pwd变量  -->
    <el-input v-model="password" style="width: 240px" placeholder="密码"/>
  </div>
  <div>
    <el-button @click="handleLogin">登录</el-button>
    <!--  跳转注册  -->
    <el-button>注册</el-button>
  </div>
</template>

<style scoped>
</style>