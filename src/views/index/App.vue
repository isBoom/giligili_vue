<template>
  <div id="app">
    <NavBar />
    <div class="app-content">
      <div class="app-body">
        <router-view :key="key" />
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "app",
  computed: {
    key() {
      //路由发生变化就重新渲染
      return this.$route.name
        ? this.$route.name + +new Date()
        : this.$route + +new Date();
    }
  },
  components: {
    NavBar
  }
};
</script>
<style>
.app {
  margin: 0 auto;
}
.app-content {
  width: 1300px;
  min-height: 600px;
  margin: 0 auto;
}
</style>
