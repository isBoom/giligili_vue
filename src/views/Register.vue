<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="昵称" :rules="[{ required: true, message: '账号不能为空'}]">
        <el-input v-model="form.nickname"></el-input>
      </el-form-item>
      <el-form-item label="用户名" :rules="[{ required: true, message: '账号不能为空'}]">
        <el-input v-model="form.user_name"></el-input>
      </el-form-item>

      <el-form-item label="密码" :rules="[{ required: true, message: '密码不能为空'}]">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" :rules="[{ required: true, message: '密码不能为空'}]">
        <el-input type="password" v-model="form.password_confirm"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button @click.native.prevent="onRegister">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import * as API from "@/api/user/";
export default {
  name: "Registed",
  data() {
    return {
      form: {
        nickname: "",
        user_name: "",
        password: "",
        password_confirm: ""
      }
    };
  },
  methods: {
    onRegister() {
      if (!this.form.nickname) {
        this.$message.warning("昵称不能为空");
      } else if (!this.form.user_name) {
        this.$message.warning("用户名不能为空");
      } else if (!this.form.password) {
        this.$message.warning("密码不能为空");
      } else if (!this.form.password_confirm) {
        this.$message.warning("确认密码不能为空");
      } else if (this.form.password != this.form.password_confirm) {
        this.$message.warning("两次密码不一致");
      } else if (
        this.form.nickname.length < 2 ||
        this.form.nickname.length > 30
      ) {
        this.$message.warning("昵称限制长度2-30");
      } else if (
        this.form.user_name.length < 5 ||
        this.form.user_name.length > 30
      ) {
        this.$message.warning("用户名限制长度5-30");
      } else if (
        this.form.password.length < 8 ||
        this.form.password.length > 40
      ) {
        this.$message.warning("密码限制长度8-40");
      } else {
        API.postRregister(this.form).then(res => {
          console.log(res);
          if (res.code > 0) {
            this.$notify.error({
              title: "注册失败",
              message: res.msg
            });
          } else {
            this.$notify({
              title: "注册成功",
              type: "success"
            });
          }
        });
      }
    }
  }
};
</script>>
