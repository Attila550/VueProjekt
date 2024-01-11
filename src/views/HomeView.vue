<template>
  <div>
    <h1 class="main-title">Welcome to Our Online Store!</h1>
    <p class="subtitle">Explore our amazing products and find great deals.</p>

    <div class="text-area">
      <h2>Special Offers</h2>
      <div class="product-inline">
        <div v-for="product in specialOffers" :key="product.id" class="product-item" @click="showProductDetails(product)">
          <img :src="getImagePath(product.image)" alt="Product Image" class="product-image" />
          <p>{{ product.name }} - ${{ product.price.toFixed(2) }}</p>
        </div>
      </div>
    </div>

    <div class="text-area">
      <h2>New Arrivals</h2>
      <div class="product-inline">
        <div v-for="product in newArrivals" :key="product.id" class="product-item" @click="showProductDetails(product)">
          <img :src="getImagePath(product.image)" alt="Product Image" class="product-image" />
          <p>{{ product.name }} - ${{ product.price.toFixed(2) }}</p>
        </div>
      </div>
    </div>

    <div v-if="selectedProduct" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>{{ selectedProduct.name }}</h2>
        <img :src="getImagePath(selectedProduct.image)" alt="Product Image" class="modal-image" />
        <p>Price: ${{ selectedProduct.price.toFixed(2) }}</p>
        <h1>Description</h1>
        <p>{{ selectedProduct.text }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedProduct: null,
      specialOffers: [
      { id: 5, name: 'Hoodie Guns N Roses', price: 34.99, image: 'hoodiegnr.jpg', text: 'lorem ipsum dasddsakndjnadnaaskdmk a dadada  da asda d a dasda sda sd ad a afalndajphbdi un aisdhau hnaoi' },
      { id: 10, name: 'T-shirt Metallica', price: 7.99, image: 'tshirtmetallica.jpg', text: 'lorem ipsum dasddsakndjnadnaaskdmk a dadada  da asda d a dasda sda sd ad a afalndajphbdi un aisdhau hnaoi' },
      { id: 3, name: 'Jacket Linkin Park', price: 59.99, image: 'jacket.jpg', text: 'lorem ipsum dasddsakndjnadnaaskdmk a dadada  da asda d a dasda sda sd ad a afalndajphbdi un aisdhau hnaoi' },

      ], 
      newArrivals: [
      { id: 12, name: 'Album - and justice for all - Metallica', price: 12.99, image: 'albummetallica.jpg', text: 'lorem ipsum dasddsakndjnadnaaskdmk a dadada  da asda d a dasda sda sd ad a afalndajphbdi un aisdhau hnaoi'},
      { id: 4, name: 'Album - Hybrid Theory - Linkin Park', price: 12.99, image: 'album.jpg', text: 'lorem ipsum dasddsakndjnadnaaskdmk a dadada  da asda d a dasda sda sd ad a afalndajphbdi un aisdhau hnaoi' },
      { id: 8, name: 'Album - Appetite For Destruction - Guns N Roses', price: 12.99, image: 'albumgnr.jpg', text: 'lorem ipsum dasddsakndjnadnaaskdmk a dadada  da asda d a dasda sda sd ad a afalndajphbdi un aisdhau hnaoi' },
      ],  
    };
  },
  methods: {
    getImagePath(image) {
      return `images/${image}`;
    },
  showProductDetails(product) {
      this.selectedProduct = product;
    },
    closeModal() {
      this.selectedProduct = null;
    },
  }
};
</script>
