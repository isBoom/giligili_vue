<template>
  <div class="video">
    <div v-if="JSON.stringify(videoInfo) != '{}'" class="video-info">
      <div class="video-title">{{videoInfo.title}}</div>
      <div class="video-create-time">{{unix(videoInfo.created_at)}}</div>
      <div class="video-view">{{"播放:"+videoInfo.view}}</div>
    </div>
    <video-player
      class="video-player vjs-custom-skin demo"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
    ></video-player>
    <div class="video-info-long">
      <div>{{videoInfo.info}}</div>
    </div>
    <hr align="left" width="79%" style="opacity:0.5" />
    <div style="width:80%">
      <el-row>
        <el-col :span="2">
          <div class="comment-avatar me">
            <el-avatar :src="user.avatar">头像</el-avatar>
          </div>
        </el-col>
        <el-col :span="19">
          <el-input
            class="pl"
            autocomplete="off"
            type="textarea"
            placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。"
            v-model="textarea"
            maxlength="7777"
            show-word-limit
          ></el-input>
        </el-col>
        <el-col :span="2" :push="1">
          <el-button @click="onComment({})" class="primary" type="primary">发表评论</el-button>
        </el-col>
      </el-row>
    </div>
    <!-- 评论详情 -->
    <div class="comment-box" v-for="c in comments" :key="c.id">
      <!-- 增加变量  commentBoxShow控制评论框显示开关 placeholder评论框默认内容-->
      <font v-if="0">
        {{Vue.set(c,"commentBoxShow",false)}}
        {{Vue.set(c,"placeholder","")}}
      </font>
      <el-row style="margin-top:1em">
        <el-col :span="2">
          <div class="comment-avatar">
            <el-avatar :src="c.avatar">头像</el-avatar>
          </div>
        </el-col>
        <el-col :span="22" style="border-top:1px solid rgba(0, 0, 0, 0.2)">
          <div style="width:100%" class="comment-username">{{c.nickname}}</div>
          <div style="width:100%" class="comment-content">{{c.content}}</div>
          <div style="width:100%" class="comment-time">
            {{unix(c.createdAt)}}
            <font class="replyButton" @click="showCommentBox(c,c)">回复</font>
          </div>
          <!-- 第二重评论 -->
          <div style="width:100%" class="comment-two" v-for="cc in c.child" :key="cc.id">
            <el-row>
              <el-col :span="1">
                <div class="comment-avatar">
                  <el-avatar :src="cc.avatar">头像</el-avatar>
                </div>
              </el-col>
              <el-col :span="22" style="margin-left:0.5em">
                <div style="width:100%" class="comment-username">
                  {{cc.nickname}}
                  <font v-if="cc.parentId!=cc.firstId" class="comment-content">
                    回复@{{" "}}
                    <font
                      style="color:#409EFF"
                    >{{getParentInfo(c.child,cc.parentId).nickname}}</font>
                    {{" :"}}
                  </font>
                  <font class="comment-content">{{cc.content}}</font>
                </div>
                <div style="width:100%" class="comment-time">
                  {{unix(cc.createdAt)}}
                  <font class="replyButton" @click="showCommentBox(c,cc)">回复</font>
                </div>
              </el-col>
            </el-row>
          </div>
          <!-- 评论的回复框 -->
          <div style="width:100%;margin-top:1em" v-if="c.showCommentBox">
            <el-row>
              <el-col :span="2">
                <div class="comment-avatar me">
                  <el-avatar :src="user.avatar">头像</el-avatar>
                </div>
              </el-col>
              <el-col :span="19">
                <el-input
                  class="pl"
                  autocomplete="off"
                  type="textarea"
                  :placeholder="c.placeholder"
                  v-model="replyTextarea"
                  maxlength="7777"
                  show-word-limit
                ></el-input>
              </el-col>
              <el-col :span="2" :push="1">
                <el-button @click="onComment(c)" class="primary" type="primary">发表评论</el-button>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import * as API from "@/api/video";
import NavBar from "@/components/NavBar.vue";
import Vue from "vue";
export default {
  data() {
    return {
      comments: [],
      user: {},
      textarea: "",
      replyTextarea: "",
      nowCommentBoxId: 0,
      nowCommentId: 0,
      playerOptions: {
        //播放速度
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        //如果true,浏览器准备好时开始回放。
        autoplay: false,
        // 默认情况下将会消除任何音频。
        muted: false,
        // 导致视频一结束就重新开始。
        loop: false,
        // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        preload: "auto",
        language: "zh-CN",
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        aspectRatio: "16:9",
        // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        fluid: true,
        sources: [
          {
            //类型
            type: "video/mp4",
            //url地址
            src:
              "https://xxxholic.oss-cn-hongkong.aliyuncs.com/upload/video/defaultVideo.mp4"
          }
        ],
        //你的封面地址
        poster:
          "https://xxxholic.oss-cn-hongkong.aliyuncs.com/upload/avatar/defaultWhite.jpg",
        //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        notSupportedMessage: "此视频暂无法播放，请稍后再试",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          //全屏按钮
          fullscreenToggle: true
        }
      },
      videoInfo: {}
    };
  },
  methods: {
    onComment(c) {
      if (
        (JSON.stringify(c) == "{}" && this.textarea == "") ||
        (JSON.stringify(c) != "{}" && this.replyTextarea == "")
      ) {
        return;
      }
      // var data = new URLSearchParams();
      // data.append("content", this.textarea);
      // data.append("videoId", parseInt(this.$route.params.id));
      var data = {};
      data.content =
        JSON.stringify(c) == "{}" ? this.textarea : this.replyTextarea;
      data.videoId = this.$route.params.id;
      if (JSON.stringify(c) != "{}") {
        //回复
        data.parentId = this.nowCommentId;
      }
      API.comment(data)
        .then(res => {
          if (JSON.stringify(c) == "{}") {
            this.comments.unshift(res.data);
          } else {
            if (c.id == this.nowCommentId) {
              for (const i of this.comments) {
                if (i.id == c.id) {
                  if (i.child == null) {
                    i.child = new Array();
                  }
                  i.child.unshift(res.data);
                }
                break;
              }
            } else if (c.child != null) {
              for (const i of c.child) {
                if (i.id == this.nowCommentId) {
                  c.child.unshift(res.data);
                  break;
                }
              }
            }
            //关闭
            c.showCommentBox = false;
          }
          this.textarea = "";
          this.replyTextarea = "";
        })
        .catch(err => {
          this.$message.error("评论失败");
          console.log(err);
        });
    },
    load() {
      API.getVideo(this.$route.params.id)
        .then(res => {
          this.videoInfo = res.data;
          this.playerOptions.sources[0].src = res.data.url;
          this.playerOptions.poster = res.data.avatar;
        })
        .catch(error => {
          this.$message({
            message: "视频并不存在",
            duration: 1000,
            type: "warning"
          });
          console.log(error);
          this.$router.go(-1);
        });
    },
    getComments() {
      API.getComments(this.$route.params.id)
        .then(res => {
          this.comments = res.data;
        })
        .catch(err => {
          this.$message({
            message: "加载评论失败",
            duration: 1000,
            type: "warning"
          });
        });
    },
    getParentInfo(c, parentId) {
      //
      //记一个坑  foreach里return没用,浪费一下午
      //
      for (const i of c) {
        if (i.id == parentId) {
          return i;
        }
      }
    },
    showCommentBox(c, cc) {
      var defaultPlaceholder =
        "请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。";
      this.nowCommentId = cc.id;
      //初次点击
      if (this.nowCommentBoxId == 0) {
        this.nowCommentBoxId = c.id;
        Vue.set(c, "showCommentBox", true);
      } else {
        var last = this.nowCommentBoxId;
        this.nowCommentBoxId = c.id;
        //切换placeholder
        if (
          last == this.nowCommentBoxId &&
          c.placeholder == defaultPlaceholder &&
          c.showCommentBox == true
        ) {
          //只有两种关闭形式，一种主动一种被动,同时满足这三项是唯一能触发主动关闭的事件
          Vue.set(c, "showCommentBox", false);
        } else {
          //被动关闭(切换父评论对象触发)
          for (const iterator of this.comments) {
            if (iterator.id == last) {
              iterator.showCommentBox = false;
            }
          }
          //打开当前评论框
          Vue.set(c, "showCommentBox", true);
        }
      }
      //因为之前条件要判断上一个状态的placeholder,所以这里放在最后统一修改
      if (cc.parentId == 0) {
        Vue.set(c, "placeholder", defaultPlaceholder);
      } else {
        Vue.set(c, "placeholder", "回复 " + "@" + cc.nickname + ":");
      }
    },
    unix(row) {
      let date = new Date(row * 1000);
      let Y = date.getFullYear() + "-";
      let M =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1) + "-"
          : date.getMonth() + 1 + "-";
      let D =
        date.getDate() < 10 ? "0" + date.getDate() + " " : date.getDate() + " ";
      let h =
        date.getHours() < 10
          ? "0" + date.getHours() + ":"
          : date.getHours() + ":";
      let m =
        date.getMinutes() < 10
          ? "0" + date.getMinutes() + ":"
          : date.getMinutes() + ":";
      let s =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return Y + M + D + h + m + s;
    }
  },
  created() {
    this.user = this.$store.state.user;
    this.load();
    this.getComments();
  }
};
</script>
<style scoped>
/* 视频本身 */
body {
  overflow: visible !important;
}
.demo {
  display: inline-block;
  width: 1024px;
  text-align: center;
  line-height: 100px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
/* 视频详情 */
.video-title {
  margin-top: 1em;
  font-weight: 345;
}
.video-create-time,
.video-view {
  color: #b39999;
  line-height: 15px;
  height: 15px;
  margin-bottom: 1px;
  font-size: 0.65em;
}
.video-info-long {
  font-weight: 400;
  font-size: 0.7em;
}
.comment-box {
  width: 87%;
  word-break: break-all;
  white-space: normal;
}
.comment-avatar {
  height: 3.5em;
  width: 3.5em;
}
.comment-two .comment-avatar {
  margin-top: 0.4em;
  height: 2em;
  width: 2em;
}
.comment-avatar span {
  width: 70%;
  height: 70%;
  margin-top: 15%;
  line-height: 3.5em;
}
.comment-username {
  font-size: 0.6em;
  color: #606266;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}
.comment-content {
  font-size: 0.7em;
  color: #303133;
  margin-bottom: 0.3em;
}
.comment-two .comment-content {
  margin-left: 0.5em;
  font-size: 1.1em;
}
.comment-time {
  font-size: 0.6em;
  color: #909399;
}
.comment-two .comment-avatar span {
  margin-top: 10%;
  line-height: 3em;
  font-size: 0.5em;
}
.comment-two .comment-username {
  margin-bottom: 0.8em;
}
.replyButton {
  margin-left: 1em;
}
.replyButton:hover {
  cursor: pointer;
  color: #606266;
  background: rgba(45, 172, 204, 0.2);
  padding: 0.3em;
  border-radius: 4px;
}
</style>
<style >
/* 吐槽文本框 */
.el-textarea__inner {
  height: 5em;
  font-size: 1em;
}
/* 吐槽按钮 */
.primary {
  height: 5em;
  width: 5em;
  padding: 1em;
}
.primary span {
  white-space: initial !important;
}
</style>>
