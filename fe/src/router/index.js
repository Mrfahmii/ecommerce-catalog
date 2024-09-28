import { createRouter, createWebHistory } from 'vue-router';
import MenSection from '../components/MenSection.vue';
import WomenSection from '../components/WomenSection.vue';
import ProductDetail from '../components/ProductDetail.vue';

const routes = [
  { path: '/', redirect: '/men/1' }, // Redirect ke produk pertama di kategori men
  { path: '/men/:id', component: ProductDetail },
  { path: '/women/:id', component: ProductDetail }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
