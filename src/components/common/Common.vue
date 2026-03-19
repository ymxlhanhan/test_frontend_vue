<script setup lang="ts">

</script>

<template>
  <el-container class="container">
    <el-header class="header">
      <div class="toolbar">
        <router-link to="Login">
          <el-link underline="never">
            登录
          </el-link>
        </router-link>
      </div>
    </el-header>
  </el-container>
</template>

<style scoped>
.container {
  background-color: #76f8f8;
}

.header {
  text-align: right;
}

.container .toolbar {
  display: inline-flex;
  /* 对齐方式 */
  align-items: center;
  /* 规定项目在弹性容器内的对齐方式，当项目未用到所有可用空间时。 */
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>