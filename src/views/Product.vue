<!-- src/views/Home.vue -->
<template>
    <div>
        <Header />
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <div v-for="product in productData" :key="product.id" class="w-full p-4 lg:w-1/4 md:w-1/2">
                        <ProductCard :product="product" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Header from '@/components/Header.vue';
import ProductCard from '@/components/ProductCard.vue';

// Product data
const productData = ref([]);

// Fetching product data when component is mounted
onMounted(async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    productData.value = data;
});
</script>