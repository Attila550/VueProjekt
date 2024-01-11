<template>
    <div>
      <h2>Your Shopping Cart</h2>
      <ShoppingCart></ShoppingCart>
    </div>
  </template>
  
 <script>
 import { defineComponent } from 'vue';
 import ShoppingCart from '../components/ShoppingCart.vue';

 export default defineComponent({
  components: {
    ShoppingCart,
  },
});
  </script>
  
  