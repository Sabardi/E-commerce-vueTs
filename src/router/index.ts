import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import Home from '@/views/Home.vue';
import Product from '@/views/Product.vue';
import ProductDetail from '@/views/ProductDetail.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/detail/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },

  ]
})

export default router
