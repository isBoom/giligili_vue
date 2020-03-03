<template>
  <div class="homeHot">
    <div>
      <p>排行榜</p>
    </div>
    <div>
      <el-row class="el-hot">
        <el-col
          class="el-row-for"
          v-for="(v , i) in videos"
          :key="v.id"
          @click.native="videoInfo(v)"
        >
          <!-- details -->
          <div class="details" id="details">
            <div class="el-box-left">
              <el-col :span="9">
                <el-card class="home-el-card" shadow="hover">
                  <div class="home-img-banner">
                    <el-image :src="v.avatar" class="image">
                      <div slot="error" class="image-slot">
                        <img src="@/static/defaultAvatar.jpg" class="image" />
                      </div>
                    </el-image>
                  </div>
                </el-card>
              </el-col>
              <div class="el-box-right">
                <el-col :span="14" :push="1">
                  <p>{{ v.title }}</p>
                  <div class="details-span">
                    <span v-html="v.user.nickname"></span>
                    <span v-html="nbsp+nbsp+nbsp"></span>
                    <span v-html="nbsp+nbsp+nbsp"></span>
                    <span v-html="unix(v.created_at)"></span>
                  </div>
                </el-col>
              </div>
            </div>
          </div>
          <!-- 主体 -->
          <el-col :span="2" class="hot">
            <p class="rank">{{i+1}}</p>
          </el-col>
          <el-col v-if="i == 0" :span="21">
            <div class="el-box">
              <!-- 主体左 -->
              <div class="el-box-left">
                <el-col :span="8">
                  <el-card class="home-el-card" shadow="hover">
                    <div class="home-img-banner">
                      <el-image :src="v.avatar" class="image">
                        <div slot="error" class="image-slot">
                          <img src="@/static/defaultAvatar.jpg" class="image" />
                        </div>
                      </el-image>
                    </div>
                  </el-card>
                </el-col>
              </div>
              <!-- 主体右 -->
              <div class="el-box-right">
                <el-col :span="14" :push="1">
                  <p>{{ v.title }}</p>
                  <span v-html="'播放'+' '+v.view"></span>
                </el-col>
              </div>
            </div>
          </el-col>
          <el-col v-else :span="21" class="el-else">
            <el-col class="video-title">
              <p>{{ v.title }}</p>
            </el-col>
          </el-col>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
</template>
<script>
import * as API from "@/api/video/";
export default {
  name: "homeHot",
  data() {
    return {
      nbsp: "&#12288;",
      videos: []
    };
  },
  methods: {
    unix(value) {
      let date = new Date(value * 1000);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      return y + "-" + MM + "-" + d;
    },
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
<style>
/* 视频详情 显现*/
.details {
  position: absolute;
  background-color: #ffffff;
  border-radius: 5px;
  display: none;
  width: 88%;
  margin-top: -90px;
  padding: 10px;
  z-index: 1000;
}
.el-row-for:hover .details {
  display: block;
  border: 1px solid #dedede;
}
.details:hover {
  display: none !important;
}
/* rank 数字 */
.el-hot > div:nth-last-of-type(-n + 10) .rank {
  width: 18px !important;
  height: 18px !important;
  font-size: 0.65em;
  text-align: center;
  margin: 0;
}
.el-hot > div:nth-of-type(-n + 3) .rank {
  border-radius: 3px;
  background: #2581dd;
  color: aliceblue;
}
.el-hot > div:not(:nth-of-type(1)) .rank {
  margin: 20% 0;
}
/* title hover */
.el-row-for :hover p {
  color: #2581dd;
}
/* details右侧最后一行 */
.details .el-box-right .el-col {
  min-height: 3em;
}
.details .details-span {
  position: absolute;
  bottom: -22%;
  left: 2%;
  overflow: hidden;
}
.el-box-right span {
  margin: 0;
  font-size: 0.5em;
  color: #909399;
}
/* 最大显现行数 */
.el-box-right p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 0.8em;
  margin: 0;
}
.video-title p {
  display: -webkit-box;
  color: #303133;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: 0.8em;
  line-height: 2em;
  margin: 0;
}
</style>