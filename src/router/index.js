import { createRouter, createWebHistory } from "vue-router";
import App from "@/views/app/Index.vue";
import AppDashboard from "@/views/app/Dashboard.vue";
import Initiate from "@/views/initiate/Index.vue";
import InitiateLogin from "@/views/initiate/Login.vue";
import InitiateRegister from "@/views/initiate/Register.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "app",
      meta: { requiresAuth: true },
      component: App,
      redirect() {
        return { name: "app.dashboard" };
      },
      children: [
        {
          path: "/dashboard",
          name: "app.dashboard",
          component: AppDashboard,
        },
      ],
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
        {
          path: "/initiate/register",
          name: "initiate.register",
          component: InitiateRegister,
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
