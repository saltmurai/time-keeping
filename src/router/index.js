import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";
import LoginView from "../views/LoginView.vue";
import MenuView from "../views/MenuView.vue";
import PickLocationView from "@/views/PickLocationView";
import FaceConfirmationView from "@/views/FaceConfirmation";
import SuccessView from "@/views/SuccessView";
import FaceScanView from "@/views/FaceScanView";
import BugReportView from "@/views/BugReportView";
import BugReportSuccessView from "@/views/BugReportSuccessView";

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
    component: PickLocationView,
  },
  {
    path: "/face-confirmation",
    name: "NhanDien",
    component: FaceConfirmationView,
  },
  {
    path: "/success",
    name: "Success",
    component: SuccessView,
  },
  {
    path: "/face-scan",
    name: "FaceScan",
    component: FaceScanView,
  },
  {
    path: "/bug-report",
    name: "BugReport",
    component: BugReportView,
  },
  {
    path: "/bug-report-success",
    name: "BugReportSuccess",
    component: BugReportSuccessView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.name !== "Login" &&
    to.name !== "BugReport" &&
    to.name !== "BugReportSuccess" &&
    !store.state.authenticated
  )
    next({ name: "Login" });
  else next();
});

export default router;
