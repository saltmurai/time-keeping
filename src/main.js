import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/index";
import store from "./router/store";
import * as VueGoogleMaps from "vue2-google-maps";
Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCKI6qYCU0BOpnn7vk6lryAuq1ZKDkssG8",
    libraries: "places",
  },
});
new Vue({
  vuetify,
  router,
  render: (h) => h(App),
  store: store,
}).$mount("#app");
