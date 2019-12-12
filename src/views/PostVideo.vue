<template>
<div class="postVideo">
<h3>视频投稿:</h3>
  <el-form ref="form" :model="form" label-width="100px">

    <el-form-item label="标题">
      <el-input v-model="form.title"></el-input>
    </el-form-item>

    <el-form-item label="视频描述">
      <el-input type="textarea" v-model="form.ingo" size="medium"></el-input>
    </el-form-item>

    <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
    </el-form-item>

  </el-form>
</div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
