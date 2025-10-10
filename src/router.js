import { createRouter, createWebHistory } from 'vue-router'

// Main views
import Home from './views/Home.vue'   // <-- full home page
import About from './components/About.vue'
import Work from './components/Work.vue'
import Contact from './components/Contact.vue'
import PowerBI from './components/PowerBI.vue'  // <-- import PowerBI component

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/work', component: Work },
  { path: '/contact', component: Contact },
  { path: '/powerbi', component: PowerBI },     // <-- add route for PowerBI
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
