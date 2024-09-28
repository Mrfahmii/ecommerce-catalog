<template>
  <div>
    <h2>Women's Clothing</h2>
    
    <!-- Jika jumlah produk lebih dari 20, arahkan ke halaman "Unavailable Product" -->
    <div v-if="womenClothing.length > 20">
      <router-link to="/unavailable">Unavailable Product</router-link>
    </div>

    <!-- Jika produk tersedia, tampilkan ProductCard untuk setiap item -->
    <div v-else>
      <ProductCard 
        v-for="product in womenClothing" 
        :key="product.id" 
        :product="product" 
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import ProductCard from './ProductCard.vue';

export default {
  name: 'WomenSection',
  components: { ProductCard },
  setup() {
    const products = ref([]);
    const womenClothing = ref([]);

    onMounted(async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        products.value = data;

        // Filter produk berdasarkan kategori "women's clothing"
        womenClothing.value = products.value.filter(
          product => product.category === "women's clothing"
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    });

    return { products, womenClothing };
  }
};
</script>

<style scoped>
h2 {
  color: #29B6F6;
}
</style>
