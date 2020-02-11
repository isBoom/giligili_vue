<template>
  <div class="home">
    <HomeVideoList class="homeVideoList" />
    <HomeHot class="HomeHot"/>
  </div>
</template>

<script>
import HomeVideoList from "./HomeVideoList.vue";
import HomeHot from "./HomeHot.vue";
export default {
  name: "home",
  data() {
    return {
    };
  },
 components:{
   HomeVideoList,
   HomeHot
 }
};
</script>
<style scoped>
.homeVideoList{
  width:70%;
  float:left
}
.HomeHot{
  width:30%;
  float:right;
}
</style>