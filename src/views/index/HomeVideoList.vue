<template>
  <div class="homeVideoList">
    <div>
      <p>视频</p>
    </div>
    <div>
      <el-row :gutter="15">
        <el-col :span="6" v-for="v in videos" :key="v.id" @click.native="videoInfo(v)">
          <!-- 大盒子强行宽高比 -->
          <div class="home-el-col-big">
            <div class="home-el-col-small">
              <el-card class="home-el-card" shadow="never">
                <!-- 强行宽高比 -->
                <div class="home-img-banner">
                  <el-image :src="v.avatar" class="image" style="width:100%">
                    <div slot="error" class="image-slot">
                      <img src="@/static/defaultAvatar.jpg" class="image" style="width:100%" />
                    </div>
                  </el-image>
                  <span
                    style="position: absolute; bottom: 5%; left: 5%; color:white; font-size:0.5em"
                  >
                    <i class="el-icon-view">
                      <span v-html="nbsp+' '+v.view"></span>
                    </i>
                  </span>
                </div>
                <div style="font-size:0.7em">
                  <div class="home-video-info">
                    <p>
                      {{ v.title }}
                      <span></span>
                    </p>
                  </div>
                  <div style="position: absolute;bottom:10%;color:#909399;font-family:'宋体';">
                    <span v-html="'up'+' '+v.user.nickname"></span>
                  </div>
                </div>
              </el-card>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import * as API from "@/api/video/";
export default {
  name: "homeVideoList",
  data() {
    return {
      nbsp: "&nbsp;",
      defaultAvatar: "@/static/defaultAvatar.jpg",
      videos: []
    };
  },
  methods: {
    getVideos() {
      API.getVideos()
        .then(res => {
          if (res.code == 0 || res.code != 401) {
            this.videos = res.data;
            //console.log(res);
          } else {
            this.$message({
              message: res.msg,
              duration: 0,
              type: "error"
            });
          }
        })
        .catch(err => {
          this.$message({
            message: "服务器开小差啦，请您稍后再试",
            duration: 0,
            type: "error"
          });
        });
    },
    videoInfo(v) {
      this.$router.push({ path: "/video/" + `${v.id}` });
    }
  },
  created() {
    this.getVideos();
  }
};
</script>
<style>
.home-video-info p {
  margin-top: 5%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.home-el-col-big {
  width: 100%;
  padding-bottom: 100%;
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
/* 去边框 */
.el-card {
  border: 0px solid !important;
}
/* .el-card.is-always-shadow {
  -webkit-box-shadow: 0 0 0 !important;
  box-shadow: 0px 0px 0px !important;
} */
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