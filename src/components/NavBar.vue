<template>
  <div class="navbar-box">
    <div class="navbar">
      <el-menu mode="horizontal" router>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/postVideo">投稿</el-menu-item>
        <el-menu-item index="/about">关于我们</el-menu-item>

        <el-menu-item class="login">
          <a href="./login.html#/">注册</a>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>
<style>
.navbar-box {
  width: 100%;
  min-width: 1300px;
  border-bottom: solid 1px #e6e6e6;
}
.navbar {
  margin-bottom: 30px;
  max-width: 1300px;
  margin: 0 auto;
}
.el-menu--horizontal.el-menu {
  border-bottom: solid 0px #e6e6e6 !important;
}
.navbar .login a {
  text-decoration: none;
  color: #909399;
  text-align: -webkit-match-parent;
}
</style>
