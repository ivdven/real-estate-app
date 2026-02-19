import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      headerName: 'Home'
    }
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      headerName: 'About'
    }
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('@/views/LoginView.vue'),
    meta: {
      headerName: 'Login'
    }
  },
  {
    path: '/register',
    name: 'SignupView',
    component: () => import('@/views/SignupView.vue'),
    meta: {
      headerName: 'Register'
    }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, _from, next) => {
  const isAuthenticated = false
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
