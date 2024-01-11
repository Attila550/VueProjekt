import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProductsView from '@/views/ProductsView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactUsView from '@/views/ContactUsView.vue';
import CartView from '@/views/CartView.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUsView,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
