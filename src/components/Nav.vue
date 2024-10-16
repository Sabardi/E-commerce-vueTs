<template>
  <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
    <router-link 
      to="/" 
      class="mr-5 hover:text-gray-900"
      :class="{ 'text-blue-500': route.path === '/' }"
    >
      Home
    </router-link>
    <router-link 
      to="/about" 
      class="mr-5 hover:text-gray-900"
      :class="{ 'text-blue-500': route.path === '/about' }"
    >
      About
    </router-link>
    <router-link 
      to="/product" 
      class="mr-5 hover:text-gray-900"
      :class="{ 'text-blue-500': route.path === '/product' }"
    >
      Product
    </router-link>
    <router-link 
      to="/contact" 
      class="mr-5 hover:text-gray-900"
      :class="{ 'text-blue-500': route.path === '/contact' }"
    >
      Contact
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
