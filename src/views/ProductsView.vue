<template>
    <div>
      <ProductList :products="products" />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import ProductList from '@/components/ProductList.vue';
  
  export default defineComponent({
    data() {
      return {
        products: []
      };
    },
    components: {
      ProductList,
    },
  });
  </script>
  