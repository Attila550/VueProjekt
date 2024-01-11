<template>
    <div class="notification" v-if="isVisible">
       Product was added to the cart!
    </div>
  </template>
  
  <script>
  import { defineComponent, ref, watch } from 'vue';
  
  export default defineComponent({
    props: {
      isVisible: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const isVisible = ref(props.isVisible);
  
      watch(
        () => props.isVisible,
        (newValue) => {
          isVisible.value = newValue;
        }
      );
  
      return { isVisible };
    },
  });
  </script>
  