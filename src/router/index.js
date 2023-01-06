import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Initiate from "@/views/initiate/Index.vue";
import InitiateLogin from "@/views/initiate/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: { requiresAuth: true },
      component: HomeView,
    },
    {
      path: "/initiate",
      name: "initiate",
      component: Initiate,
      meta: { hideForAuth: true },
      redirect() {
        return { name: "initiate.login" };
      },
      children: [
        {
          path: "/initiate/login",
          name: "initiate.login",
          component: InitiateLogin,
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
