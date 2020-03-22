/* jshint esversion: 6 */
import Vue from "vue";
import Router from "vue-router";
import Home from "./Home.vue";
import About from "./About.vue";
import Video from "./Video.vue";
import PostVideo from "./PostVideo.vue";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/postVideo",
            name: "postVideo",
            component: PostVideo
        },
        {
            path: "/video/:id",
            name: "video",
            component: Video
        }
    ]
})