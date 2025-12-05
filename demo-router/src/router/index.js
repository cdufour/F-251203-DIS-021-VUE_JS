import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/home/index.vue'
import Articles from '@/components/articles/index.vue'
import Contact from '@/components/contact/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/articles', component: Articles },
    { path: '/contact', component: Contact }
  ],
})

export default router
