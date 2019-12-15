<template>
<div class="home">
  <el-row>
    <el-col :span="4" v-for="v in videos" :key=v.id>
      <el-card class="home-el-card">
        <el-image :src="v.avatar" class="image" style="width:100%">
            <div slot="error" class="image-slot">
              <img src="@/static/default.png"  class="image" style="width:100%" />
          </div>
        </el-image>
          <div style="padding: 14px;">
            <div>{{ v.title }}</div>
            <div>{{ v.info }}</div>
          </div>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
import * as API from '@/api/video/';
export default {
  name: "home",
  data(){
    return {
      videos:[],
    }
  },
  methods:{
    load(){
      API.getVideos().then((res)=>{
        if(res.code>0){
          alert("err")
        }else{
          this.videos = res.data
          console.log(this.videos)
        }
      }).catch((err)=>{
        this.$message({
          message:"服务器开小差啦，请您稍后再试",
          duration: 0,
          type:error,
          })
      })
    }
  },
  beforeMount(){
    this.load();
  },
};
</script>
<script>
  document.getElement
</script>
<style>
.home-el-card{
  margin:10px;
}
.home-el-card .el-card__body{
  height:200px
}
</style>
