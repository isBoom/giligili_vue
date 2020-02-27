<template>
  <div class="navbar-box">
    <div class="navbar">
      <el-menu mode="horizontal" router>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/postVideo">投稿</el-menu-item>
        <el-menu-item index="/about">关于我们</el-menu-item>
        <div v-if="isShownNvbarRight" key="1">
          <div v-if="isLogin" class="navbarRight">
            <el-menu-item id="headPortrait">
              <a :href="user.avatar">
                <el-avatar :src="user.avatar">头像</el-avatar>
              </a>
            </el-menu-item>
          </div>
          <div v-else>
            <el-menu-item class="navbarRight">
              <a href="./login.html#/register">注册</a>
            </el-menu-item>
            <el-menu-item class="navbarRight">
              <a href="./login.html#/">登录</a>
            </el-menu-item>
          </div>
        </div>
      </el-menu>
    </div>
  </div>
</template>

<script>
import * as API from "@/api/user/";
export default {
  name: "NavBar",
  data() {
    return {
      isLogin: false,
      isShownNvbarRight: false,
      user: {}
    };
  },
  methods: {
    load() {
      API.simpleInfoMe()
        .then(res => {
          if (res.code == 0) {
            this.isLogin = true;
            console.log(res);
            this.user = res.data;
          }
        })
        .catch(err => {
          this.$message({
            message: "服务器开小差啦，请您稍后再试",
            duration: 0,
            type: "error"
          });
        });
      var thisVue = this;
      setTimeout(function() {
        thisVue.isShownNvbarRight = true;
      }, 1000);
    }
  },
  created() {
    this.load();
  }
};
</script>

<style>
/* 头像hover */
#headPortrait:hover {
}
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
.navbar .navbarRight {
  float: right !important;
}
.navbar .navbarRight a {
  text-decoration: none;
  color: #909399;
  text-align: -webkit-match-parent;
}
</style>
