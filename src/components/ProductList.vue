<template>
  <div class="product-container">
    <h1 style="text-align: center;"> Products</h1>
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product-item-list">
        <div class="product-details">
          <img :src="getImagePath(product.image)" alt="Product Image" class="product-image-list"/>
          <div>
            <p>{{ product.name }} - ${{ product.price.toFixed(2) }}</p>
            <button @click="addToCart(product)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    <Notification :isVisible="showNotification" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useCartStore } from '../stores/cart';
import Notification from '@/components/Notification.vue';

export default defineComponent({

  data() {
    return {
      products: [
        { id: 1, name: 'Hoodie Linkin Park', price: 34.99, image: 'hoodie.jpg' },
        { id: 2, name: 'T-shirt Linkin Park', price: 7.99, image: 'tshirt.jpg' },
        { id: 3, name: 'Jacket Linkin Park', price: 59.99, image: 'jacket.jpg' },
        { id: 4, name: 'Album - Hybrid Theory - Linkin Park', price: 12.99, image: 'album.jpg' },
        { id: 5, name: 'Hoodie Guns N Roses', price: 34.99, image: 'hoodiegnr.jpg' },
        { id: 6, name: 'T-shirt Guns N Roses', price: 7.99, image: 'tshirtgnr.jpg' },
        { id: 7, name: 'Jacket Guns N Roses', price: 59.99, image: 'jacketgnr.jpg' },
        { id: 8, name: 'Album - Appetite For Destruction - Guns N Roses', price: 12.99, image: 'albumgnr.jpg' },
        { id: 9, name: 'Hoodie Metallica', price: 34.99, image: 'hoodiemetallica.jpg' },
        { id: 10, name: 'T-shirt Metallica', price: 7.99, image: 'tshirtmetallica.jpg' },
        { id: 11, name: 'Jacket Metallica', price: 59.99, image: 'jacketmetallica.jpg' },
        { id: 12, name: 'Album - and justice for all - Metallica', price: 12.99, image: 'albummetallica.jpg' },
      ],
      showNotification: false,
    };
  },
  methods: {
    addToCart(product) {
      useCartStore().addToCart(product);
      this.showNotification = true;
      console.log(product , "was sent to cart");

      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
    },
    getImagePath(image) {
      return (`images/${image}`);
    },
  },
  components: {
    Notification,
  },
});
</script>
