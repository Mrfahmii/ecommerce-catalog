<template>
    <div>
      <h1>Welcome to the E-commerce Catalog</h1>
      <nav>
        <router-link to="/men">Men's Clothing</router-link>
        <router-link to="/women">Women's Clothing</router-link>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>
  nav {
    margin-top: 20px;
  }
  a {
    margin: 0 10px;
    color: #5A0FC8;
    text-decoration: none;
  }
  </style>
  