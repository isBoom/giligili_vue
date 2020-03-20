<template>
  <div class="about">
    <div id="test"></div>
    <div v-for="c in arr" :key="c.index">{{c}}</div>
    <el-button type="primary" @click="A">主要按钮</el-button>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Vue from "vue";
export default {
  data() {
    return {
      arr: [1, 2, 3]
    };
  },
  methods: {
    A() {
      this.arr.unshift(0);
    }
  },
  created() {
    this.A();
  }
};
</script>>
