<!-- src/views/ProductDetail.vue -->
<template>
  <div>
    <Header />
    <section class="overflow-hidden text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap mx-auto lg:w-4/5">
          <div class="flex flex-wrap mx-auto lg:w-4/5">
            <div class="w-full mb-6 lg:w-1/2 lg:pr-10 lg:py-6 lg:mb-0">
              <h2 class="text-sm tracking-widest text-gray-500 title-font">BRAND NAME</h2>
              <h1 class="mb-4 text-3xl font-medium text-gray-900 title-font">{{ product.title }}</h1>
              <div class="flex mb-4">
                <a class="flex-grow px-1 py-2 text-lg text-indigo-500 border-b-2 border-indigo-500">Description</a>
                <a class="flex-grow px-1 py-2 text-lg border-b-2 border-gray-300">Reviews</a>
                <a class="flex-grow px-1 py-2 text-lg border-b-2 border-gray-300">Details</a>
              </div>
              <p class="mb-4 leading-relaxed">{{ product.description }}</p>
              <div class="flex py-2 border-t border-gray-200">
                <span class="text-gray-500">Color</span>
                <span class="ml-auto text-gray-900">Blue</span>
              </div>
              <div class="flex py-2 border-t border-gray-200">
                <span class="text-gray-500">Size</span>
                <span class="ml-auto text-gray-900">Medium</span>
              </div>
              <div class="flex py-2 mb-6 border-t border-b border-gray-200">
                <span class="text-gray-500">Quantity</span>
                <span class="ml-auto text-gray-900">4</span>
              </div>
              <div class="flex">
                <span class="text-2xl font-medium text-gray-900 title-font">${{ product.price }}</span>
                <button
                  class="flex px-6 py-2 ml-auto text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Buy</button>
                <button
                  class="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-gray-500 bg-gray-200 border-0 rounded-full">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z">
                    </path>
                  </svg>
                </button>
              </div>
            </div>
            <img :alt="product.title" class="object-cover object-center w-full h-64 rounded lg:w-1/2 lg:h-auto"
              :src="product.image">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Header from '@/components/Header.vue';

// Mengambil ID produk dari URL
const route = useRoute();
const productId = route.params.id;

// State untuk data produk
const product = ref({});

// Mengambil data produk ketika komponen di-mount
onMounted(async () => {
  const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const data = await response.json();
  product.value = data;
});
</script>
