import Vue from "vue"
import Router from "vue-router"
import Home from "./Home.vue"

Vue.use(Router)

export default new Router({
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: () =>
                import ( /* webpackChunkName: "about" */ "./About.vue")
        },
        {
            path: "/postVideo",
            name: "postVideo",
            component: () =>
                import ( /* webpackChunkName: "about" */ "./PostVideo.vue")
        },
        {
            path: "/video/:id",
            name: "video",
            component: () =>
                import ( /* webpackChunkName: "about" */ "./Video.vue")
        }
    ]
})