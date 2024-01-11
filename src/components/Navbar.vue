<template>
    <nav class="navbar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact-us">Contact Us</router-link></li>
        <li>
          <router-link to="/cart">
            <img src="/src/images/cart.png" alt="" class="carticon" />
            <span class="cart-count">{{  }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  import { useCartStore } from '../stores/cart';
  
  export default {
    name: 'Navbar',
    setup() {
      const cartStore = useCartStore();
  
      return {
        cartItemCount: cartStore.cartItemCount,
      };
    },
  };
  </script>
  