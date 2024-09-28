<template>
    <div class="product-card">
      <img :src="product.image" alt="product" />
      <h3>{{ product.title }}</h3>
      <p>{{ product.price | currency }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: ['product'],
    filters: {
      currency(value) {
        return `$${parseFloat(value).toFixed(2)}`;
      }
    }
  }
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 8px;
    margin: 10px;
    text-align: center;
  }
  img {
    max-width: 100px;
  }
  </style>
  