<template>
  <div id="login" style="margin-top:200px">
    <div id="login-content-box" style="width: 100%; min-width: 1300px;">
      <div id="login-content" style="margin-bottom: 30px; max-width: 1300px; margin: 0 auto;">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名" :rules="[{ required: true, message: '账号不能为空' }]">
            <el-input v-model="form.user_name"></el-input>
          </el-form-item>

          <el-form-item label="密码" :rules="[{ required: true, message: '密码不能为空' }]">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button @click.native.prevent="onLogin">登录</el-button>
            <el-button @click.native.prevent="$router.push({ path: '/register' })">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import * as API from "@/api/user/";
import global from "@/static/global.js";
export default {
  data() {
    return {
      test: "test",
      form: {
        user_name: "",
        password: ""
      }
    };
  },
  methods: {
    onLogin() {
      API.postLogin(this.form)
        .then(res => {
          console.log(res);
          if (res.code > 0) {
            this.$notify.error({
              title: "登录失败",
              message: res.msg
            });
          } else {
            this.$notify({
              title: "登陆成功",
              type: "success"
            });
            window.location.href = "../";
          }
        })
        .catch(e => {
          this.$notify({
            title: "网络异常或服务器宕机",
            type: "error"
          });
        });
    }
  }
};
</script>
