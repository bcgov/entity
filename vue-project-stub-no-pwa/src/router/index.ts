import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    // see https://router.vuejs.org/guide/advanced/scroll-behavior.html
    // Vue Router 4 requires an object with 'left' and 'top' properties (not x,y)
    return { left: 0, top: 0 }
  }
})

export default router
