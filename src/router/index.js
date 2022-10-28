import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import("@/views/home/index.vue")
    },
    {
      path: "/data-visualization",
      component: () => import("@/views/data-visualization/index.vue")
    },
    {
      path: "/maritime-theme",
      component: () => import("@/views/maritime-theme/index.vue")
    },
    {
      path: "/radar-theme",
      component: () => import("@/views/radar-theme/index.vue"),
    },
    {
      path: "/shipping-theme",
      component: () => import("@/views/shipping-theme/index.vue"),
    },
  ]
})

export default router
