import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/ProductsView.vue')
    },
    {
      path: '/category',
      name: 'category',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/CategoryView.vue')
    },
    {
      path: '/category/:category_name',
      name: 'categoryDetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/CategoryDetailView.vue'),
      props: true
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('@/views/ProductsView.vue')
    },
    {
      path: '/product/:id_produk',
      name: 'productDetail',
      component: () => import('@/views/ProductDetailView.vue'),
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: {requiresGuest: true}
    },
  ]
})

export default router
