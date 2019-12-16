import Vue from "vue"
import Router from "vue-router"
import Login from "./Login.vue"

Vue.use(Router)

export default new Router({
    routes: [{
            path: "/",
            name: "login",
            component: Login
        },
        {
            path: "/register",
            name: "register",
            component: () =>
                import ( /* webpackChunkName: "about" */ "./Register.vue")
        }

    ]
})