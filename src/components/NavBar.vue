<template>
  <div class="navbar">
    <el-menu mode="horizontal" router>
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/postVideo">投稿</el-menu-item>
      <el-menu-item index="/about">关于我们</el-menu-item>

      <el-menu-item class="login">
        <a href="./login.html">注册</a>
      </el-menu-item>
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
.navbar .login a {
  text-decoration: none;
  color: #909399;
  text-align: -webkit-match-parent;
}
</style>
