<template>
    <div>
      <h2>{{ product.title }}</h2>
      <img :src="product.image" alt="product image" />
      <p>{{ product.description }}</p>
      <p><strong>Price: </strong>${{ product.price }}</p>
      <button @click="buyProduct">Buy Now</button>
      <button @click="nextProduct">Next Product</button>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  export default {
    name: 'ProductDetail',
    setup() {
      const product = ref({});
      const route = useRoute();
      const router = useRouter();
  
      const fetchProduct = async (category, id) => {
        try {
          const res = await fetch(`https://fakestoreapi.com/products/${id}`);
          product.value = await res.json();
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };
  
      onMounted(() => {
        fetchProduct(route.params.category, route.params.id);
      });
  
      watch(route, (newRoute) => {
        fetchProduct(newRoute.params.category, newRoute.params.id);
      });
  
      const buyProduct = () => {
        alert("You clicked Buy Now! (No further action)");
      };
  
      const nextProduct = () => {
        const nextId = parseInt(route.params.id) + 1;
        const newPath = `/${route.path.split('/')[1]}/${nextId}`;
        router.push(newPath);
      };
  
      return { product, buyProduct, nextProduct };
    }
  }
  </script>
  
  <style scoped>
  img {
    max-width: 300px;
    margin: 10px;
  }
  button {
    margin: 5px;
    padding: 10px;
    background-color: #646cff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  button:hover {
    background-color: #535bf2;
  }
  </style>
  