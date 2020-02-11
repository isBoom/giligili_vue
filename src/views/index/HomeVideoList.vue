<template>
  <div class="homeVideoList">
    <el-row>
      <el-col :span="4" v-for="v in videos" :key="v.id" @click.native="videoInfo(v)">
        <!-- 大盒子强行宽高比 -->
        <div class="home-el-col-big">
          <div class="home-el-col-small">
            <el-card class="home-el-card">
              <!-- 强行宽高比 -->
              <div class="home-img-banner">
                <el-image :src="v.avatar" class="image" style="width:100%">
                  <div slot="error" class="image-slot">
                    <img src="@/static/default.png" class="image" style="width:100%" />
                  </div>
                </el-image>
                <span
                  style="position: absolute; bottom: 5%; left: 5%; color:white; font-size:0.5em"
                >
                  <i class="el-icon-view"></i> 播放量
                </span>
              </div>
              <div style=" font-size:0.7em">
                <div class="home-video-info">
                  <p>
                    {{ v.title }}
                    <br />
                    <span></span>
                    <br />
                  </p>
                </div>
                <div style="color:#909399">
                  <span>up主名字</span>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as API from "@/api/video/";
export default {
  name: "homeVideoList",
  data() {
    return {
      videos: []
    };
  },
  methods: {
    load() {
      API.getVideos()
        .then(res => {
          if (res.code == 0 || res.code != 401) {
            this.videos = res.data;
          } else {
            this.$message({
              message: res.msg,
              duration: 0,
              type: error
            });
          }
        })
        .catch(err => {
          this.$message({
            message: "服务器开小差啦，请您稍后再试",
            duration: 0,
            type: error
          });
        });
    },
    videoInfo(v) {
      this.$router.push({ path: "/video/" + `${v.id}` });
    }
  },
  created() {
    this.load();
  }
};
</script>
<style>
.home-video-info p {
  font-family: "黑体";
  margin: 5% 10% 5% 0%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.home-el-card {
  margin: 5%;
}
.home-el-col-big {
  width: 100%;
  padding-bottom: 90%;
  position: relative;
  overflow: hidden;
}
.home-el-col-small {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.el-card__body {
  padding: 0 !important;
}
/* 强制宽高比 */
.home-el-card .home-img-banner {
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;
}
.home-el-card .home-img-banner .el-image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>