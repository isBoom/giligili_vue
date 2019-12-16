<template>
  <div id="app">
    <NavBar />
    <div class="app-content">
      <div class="app-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "app",
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
</style>>
