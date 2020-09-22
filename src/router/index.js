import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import auth from '@/utils/auth'
Vue.use(VueRouter)

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// protection of paths from an unauthenticated access
const unProtectedRoutes = ['/login', '/error-404']

router.beforeEach((to, from, next) => {
  if (from.path === to.path) {
    return
  }
  if (unProtectedRoutes.includes(to.path)) {
    return next()
  }
  const token = auth.getToken()
  if (token) {
    return next()
  }
  if (from.name !== 'login') {
    router.push({ path: '/login', query: { to: to.path } })
  }
})

export default router
