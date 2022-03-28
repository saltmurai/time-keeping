import Vue from "vue";
import VueRouter from "vue-router";
// import store from "./store";
import LoginView from "../views/LoginView.vue";
import MenuView from "../views/MenuView.vue";
import PickLocation from "@/views/PickLocationView";
import FaceConfirmation from "@/views/FaceConfirmation";
import SuccessView from "@/views/SuccessView";
import FaceScan from "@/views/FaceScanView";

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
    path: "/pick-location",
    name: "PickLocation",
    component: PickLocation,
  },
  {
    path: "/face-confirmation",
    name: "NhanDien",
    component: FaceConfirmation,
  },
  {
    path: "/success",
    name: "Success",
    component: SuccessView,
  },
  {
    path: "/face-scan",
    name: "FaceScan",
    component: FaceScan,
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
