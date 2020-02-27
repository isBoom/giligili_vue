import Vue from "vue"
import App from "./App.vue"

import router from "./router.js"
import store from "../../store"
import VueCookies from "vue-cookies"

import "../../plugins/axios"

import VideoPlayer from "vue-video-player"
import "vue-video-player/src/custom-theme.css"
import "video.js/dist/video-js.css"

import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueCookies)
Vue.use(VideoPlayer)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")

// var head = document.getElementsByTagName("head")[0]
// head.innerHTML +=
//     '<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />'
// var meta = document.createElement("meta")
// meta
//     .setAttribute("http-equiv", "Content-Security-Policy")
//     .setAttribute("content", "upgrade-insecure-requests")
// head.appendChild(meta)
// document.write(
//     '<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />'
// )