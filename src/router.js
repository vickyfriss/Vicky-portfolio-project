import { createRouter, createWebHistory } from 'vue-router'

// Main views
import Home from './views/Home.vue'   // <-- full home page
import About from './components/About.vue'
import Work from './components/Work.vue'
import Contact from './components/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/work', component: Work },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
