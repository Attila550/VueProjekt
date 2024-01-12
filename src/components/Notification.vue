<template>
  <div class="notification" v-if="isVisible">
    Product was added to the cart!
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      localIsVisible: this.isVisible,
    };
  },
  watch: {
    isVisible(newValue) {
      this.localIsVisible = newValue;
    },
  },
};
</script>
