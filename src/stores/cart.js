import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),

  getters: {
    cartItemCount() {
      return this.cart.reduce((count, item) => count + item.quantity, 0);
    },
  },

  actions: {
    addToCart(product) {
      const existingItem = this.cart.find(item => item.product.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cart.push({ product, quantity: 1 });
      }
    },

    removeFromCart(product) {
      const index = this.cart.findIndex(item => item.product.id === product.id);

      if (index !== -1) {
        if (this.cart[index].quantity > 1) {
          this.cart[index].quantity -= 1;
        } else {
          this.cart.splice(index, 1);
        }
      }
    },

    updateQuantity(product, newQuantity) {
      const cartItem = this.cart.find(item => item.product.id === product.id);

      if (cartItem) {
        cartItem.quantity = newQuantity;
      }
    },

    getTotal() {
      return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    },

    clearCart() {
      this.cart = [];
    },
  },
});
