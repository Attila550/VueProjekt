<template>
  <div class="main-title">
    <div v-if="cart.length === 0" class="cart-empty-message">
      <p>Your shopping cart is empty.</p>
    </div>

    <div v-else>
      <div v-for="item in cart" :key="item.product.id" class="cart-item">
        <div class="cart-item-details">
          <p class="cart-item-name">
            {{ item.product.name }} ({{ item.quantity }}x)
          </p>
          <p class="cart-item-price">${{ item.product.price.toFixed(2) }}</p>
          <label for="quantity">Quantity:</label>
          <input type="number" v-model="item.quantity" min="1" @input="updateQuantity(item)" />
        </div>
        <button class="cart-btn" @click="removeFromCart(item.product)">Remove from Cart</button>
      </div>

      <p class="cart-total">Total: ${{ getTotal().toFixed(2) }}</p>
      <p class="cart-full-count">Total Items: {{ getFullCount() }}</p>
    </div>
    <br>
    <router-link class="cart-btn" to="/">Checkout</router-link>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cart';

export default {
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    removeFromCart(product) {
      useCartStore().removeFromCart(product);
    },
    getTotal() {
      return useCartStore().getTotal();
    },
    getFullCount() {
      return useCartStore().cartItemCount;
    },
    updateQuantity(item) {
      useCartStore().updateQuantity(item.product, item.quantity);
    },
  },
  created() {
    this.cart = useCartStore().cart;
  },
};
</script>
