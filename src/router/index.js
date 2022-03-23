import Vue from "vue";
import VueRouter from "vue-router";
// import store from "./store";
import LoginView from "../views/LoginView.vue";
import MenuView from "../views/MenuView.vue";
import ChamCongView from "@/views/ChamCongView";
import FaceScanView from "@/views/FaceScanView";
import ConfirmationView from "@/views/ConfirmationView";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginView,
    meta: {
      showNav: true,
    },
  },
  {
    path: "/menu",
    name: "Menu",
    component: MenuView,
    meta: {
      showNav: true,
    },
  },
  {
    path: "/chamcong",
    name: "ChamCong",
    component: ChamCongView,
  },
  {
    path: "/chamcongface",
    name: "Quet Khuon Mat",
    component: FaceScanView,
  },
  {
    path: "/confirmation",
    name: "Confirmation",
    component: ConfirmationView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Remove comment for navigation guard
// router.beforeEach((to, from, next) => {
//   if (to.name !== "Login" && !store.state.authenticated)
//     next({ name: "Login" });
//   else next();
// });

export default router;
