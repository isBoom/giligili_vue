<template>
  <div id="app">
    <a href="./#/">首页</a>
    <router-view></router-view>
    <Copyright />
  </div>
</template>
<script>
import Copyright from "@/components/Copyright.vue";
export default {
  name: "app",
  components: {
    Copyright
  }
};
</script>
