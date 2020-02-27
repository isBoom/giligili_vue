<template>
  <div class="homeHot">
    <el-row>
      <el-col :span="24" v-for="v in videos" :key="v.id" @click.native="videoInfo(v)">
        <!-- 大盒子强行宽高比 -->
        <div class="home-el-col-big">
          <div class="home-el-col-small">
            <el-card class="home-el-card" shadow="hover">
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
                    <span v-html="nbsp+nbsp+v.view"></span>
                  </i>
                </span>
              </div>
              <div style="font-size:0.7em">
                <div class="home-video-info">
                  <p style="font-family:''">
                    {{ v.title }}
                    <br />
                    <span></span>
                    <br />
                  </p>
                </div>
                <div style="color:#909399;font-family:'宋体'">
                  <span v-html="'up'+' '+v.user.nickname"></span>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
</template>
<script>
import * as API from "@/api/video/";
export default {
  name: "homeHot",
  data() {
    return {
      nbsp: "&nbsp;",
      videos: []
    };
  },
  methods: {
    getDailyRank() {
      API.getDailyRank()
        .then(res => {
          this.videos = res.data;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    videoInfo(v) {
      this.$router.push({ path: "/video/" + `${v.id}` });
    }
  },
  created() {
    this.getDailyRank();
  }
};
</script>
<style scoped>
</style>