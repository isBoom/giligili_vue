<template>
  <div class="navbar">
    <el-menu mode="horizontal" router>
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/postVideo">投稿</el-menu-item>
      <el-menu-item index="/about">关于我们</el-menu-item>

      <el-menu-item class="login" index="/register">注册</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>
<style>
.navbar {
  margin-bottom: 30px;
}
</style>
