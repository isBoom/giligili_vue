<template>
  <div id="app">
    <NavBar />
    <div class="app-body">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  components: {}
};
</script>
<style>
.app-body {
  padding: 0 50px 0 50px;
}
</style>>
