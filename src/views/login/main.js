import Vue from "vue"
import "../../plugins/axios"
import App from "./App.vue"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import router from "./router.js"
import store from "../../store"
import VueCookies from "vue-cookies"

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueCookies)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app-login")