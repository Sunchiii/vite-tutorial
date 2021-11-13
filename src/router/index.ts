import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '../views/home.vue'
import About from '../views/about.vue'
import Contract from '../views/constract.vue'



const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contract', component: Contract }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router