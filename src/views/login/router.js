/* jshint esversion: 6 */
import Vue from "vue";
import Router from "vue-router";
import Login from "./Login.vue";
import Register from "./Register.vue";


Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            name: "login",
            component: Login
        },
        {
            path: "/register",
            name: "register",
            component: Register
        }

    ]
})