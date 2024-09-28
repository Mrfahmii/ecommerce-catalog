<template>
    <div>
      <h1>Product Unavailable</h1>
      <p>Sorry, we can't show more than 20 products at a time.</p>
      <router-link to="/">Back to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UnavailablePage'
  }
  </script>
  
  <style scoped>
  h1 {
    color: red;
  }
  </style>
  