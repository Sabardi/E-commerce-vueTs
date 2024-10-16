<template>
  <RouterLink :to="`/detail/${product.id}`">
    <div class="relative block h-48 overflow-hidden rounded">
      <img :alt="product.title" class="block object-cover object-center w-full h-full" width="300" height="300"
        :src="product.image" />
      <div class="mt-4">
        <h3 class="mb-1 text-xs tracking-widest text-gray-500 title-font">{{ product.category }}</h3>
        <h2 class="text-lg font-medium text-gray-900 title-font">{{ product.name }}</h2>
        <p class="mt-1">{{ product.price }}</p>
      </div>
    </div>
  </RouterLink>

</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

// Define props for the component
const props = defineProps({
  product: Object
});
</script>
