<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item
        label="昵称"
        :rules="[{ required: true, message: '昵称不能为空'},{min: 1,max: 10,message: '长度在 1 到 10 个字符'},]"
      >
        <el-input v-model="form.nickname"></el-input>
      </el-form-item>
      <el-form-item
        label="账号"
        :rules="[{ required: true, message: '账号不能为空'},{min: 4,max: 30,message: '长度在 4 到 30 个字符'},]"
      >
        <el-input v-model="form.userId"></el-input>
      </el-form-item>

      <el-form-item
        label="密码"
        :rules="[{ required: true, message: '密码不能为空'},{min: 4,max: 30,message: '长度在 4 到 30 个字符'},]"
      >
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item
        label="确认密码"
        :rules="[{ required: true, message: '密码不能为空'},{min: 4,max: 30,message: '长度在 4 到 30 个字符'},]"
      >
        <el-input type="password" v-model="form.confirmPassword"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button @click.native.prevent="onRegister">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Registed",
  data() {
    return {
      form: {
        nickname: "",
        userId: "",
        password: "",
        confirmPassword: ""
      }
    };
  },
  methods: {
    onRegister() {
      if (!this.form.nickname) {
        this.$message.warning("昵称不能为空");
      } else if (!this.form.userId) {
        this.$message.warning("账号不能为空");
      } else if (!this.form.password) {
        this.$message.warning("密码不能为空");
      } else if (!this.form.confirmPassword) {
        this.$message.warning("确认密码不能为空");
      } else if (this.form.password != this.form.confirmPassword) {
        this.$message.warning("两次密码不一致");
      }
      return false;
    }
  }
};
</script>>
