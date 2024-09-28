<template>
  <div>
    <h2>Men's Clothing</h2>
    <!-- Jika produk pakaian pria lebih dari 20, tampilkan unavailable -->
    <div v-if="menClothing.length > 20">
      <router-link to="/unavailable">Unavailable Product</router-link>
    </div>
    <!-- Jika kurang dari 20, tampilkan daftar produk -->
    <div v-else>
      <ProductCard v-for="product in menClothing" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import ProductCard from './ProductCard.vue';

export default {
  name: 'MenSection',
  components: { ProductCard },
  setup() {
    const products = ref([]);
    const menClothing = ref([]);

    // Fetch produk dari API
    onMounted(async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      products.value = data;

      // Filter produk berdasarkan kategori pakaian pria
      menClothing.value = products.value.filter(product => product.category === "men's clothing");
    });

    return { products, menClothing };
  }
}
</script>

<style scoped>
h2 {
  color: #5A0FC8;
}
</style>
