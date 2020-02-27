<template>
  <div class="about">{{aaa}}</div>
</template>
<script>
export default {
  data() {
    return {
      aaa: 77777
    };
  },
  created() {
    var t = setTimeout(function() {
      this.aaa = 99999;
      console.log("里面的值" + this.aaa);
    }, 1000);
  }
};
</script>>
