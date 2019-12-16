import Vue from "vue"
import Router from "vue-router"
import Home from "../views/Home.vue"

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
                import ( /* webpackChunkName: "about" */ "../views/About.vue")
        },
        {
            path: "/register",
            name: "register",
            component: () =>
                import ( /* webpackChunkName: "about" */ "../views/Register.vue")
        },
        {
            path: "/postVideo",
            name: "postVideo",
            component: () =>
                import ( /* webpackChunkName: "about" */ "../views/PostVideo.vue")
        }
    ]
})