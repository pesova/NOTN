import { createRouter, createWebHistory } from "vue-router";
import SideMenu from "../layouts/side-menu/Main.vue";
import DashboardOverview from "../views/dashboard/Main.vue";

import Login from "../views/login/Main.vue";
import ErrorPage from "../views/error-page/Main.vue";

const routes = [
  {
    path: "/",
    component: SideMenu,
    children: [
      {
        path: "/",
        name: "dashboard",
        component: DashboardOverview,
      }
    ],
  },
  
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/error-page",
    name: "error-page",
    component: ErrorPage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
