<template>
  <div class="product-card">
    <div class="product-content">
      <!-- Gambar di sebelah kiri -->
      <img class="product-image" :src="product.image" alt="product image" />

      <!-- Informasi produk di sebelah kanan -->
      <div class="product-details">
        <h2>{{ product.title }}</h2>

        <!-- Category dan Rating -->
        <div class="category-rating">
          <p class="category">{{ product.category }}</p>

          <!-- Rating produk -->
          <div class="rating">
            <span>{{ product.rating?.rate }}/5</span>
            <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= product.rating?.rate }">●</span>
          </div>
        </div>

        <hr />

        <p class="description">{{ product.description }}</p>

        <hr />
        
        <!-- Harga -->
        <p class="price"> Price : ${{ product.price }}</p>

        <!-- Tombol aksi -->
        <div class="buttons">
          <button @click="buyProduct">Buy Now</button>
          <button @click="nextProduct">Next Product</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import '@/assets/style/page.css'; 

export default {
  name: 'ProductDetail',
  setup() {
    const product = ref({});
    const route = useRoute();
    const router = useRouter();

    const fetchProduct = async (id) => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        product.value = await res.json();
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    onMounted(() => {
      fetchProduct(route.params.id);
    });

    watch(route, (newRoute) => {
      fetchProduct(newRoute.params.id);
    });

    const buyProduct = () => {
      alert("You clicked Buy Now! (No further action)");
    };

    const nextProduct = () => {
      const nextId = parseInt(route.params.id) + 1;
      const newPath = `/${nextId}`;
      router.push(newPath);
    };

    return { product, buyProduct, nextProduct };
  }
};
</script>

<style scoped>
.product-card {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  padding: 20px;
}

.product-content {
  display: flex;
}

.product-image {
  max-width: 300px;
  margin-right: 20px;
}

.product-details {
  flex-grow: 1;
}

h2 {
  margin-bottom: 10px;
  color: #1f2e55;
}

.category-rating {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.category {
  font-size: 14px;
  color: #888;
}

.rating {
  display: flex;
  align-items: center;
}

.rating .star {
  font-size: 20px;
  margin-left: 5px;
  color: #ddd;
}

.rating .star.filled {
  color: #f5a623;
}

hr {
  border: none;
  border-top: 1px solid #eee;
  margin: 20px 0;
}

.description {
  font-size: 19px;
  margin-bottom: 20px;
  color: #666;
}

.price {
  font-size: 24px;
  font-weight: bold;
  color: #1f2e55;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

button {
  padding: 12px 30px;
  background-color: #1f2e55;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3e4a6b;
}
</style>
