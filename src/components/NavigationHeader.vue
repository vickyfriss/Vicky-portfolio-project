<template>
    <nav class="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div class="container mx-auto flex justify-between items-center py-4 px-6 md:py-6 lg:py-8">
        <!-- Logo / Name -->
        <div class="text-lg md:text-2xl lg:text-3xl font-bold">
          Victoria Friss de Kereki
        </div>
  
        <!-- Hamburger Icon (mobile only) -->
        <button 
          @click="isOpen = !isOpen" 
          class="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg 
            v-if="!isOpen" 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6 md:h-8 md:w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg 
            v-else 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6 md:h-8 md:w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
  
        <!-- Navigation Links -->
        <ul class="hidden md:flex gap-6 md:gap-8 lg:gap-10 text-sm md:text-base lg:text-lg">
          <li><a href="#home" class="hover:text-pink-500 transition">Home</a></li>
          <li><a href="#about" class="hover:text-pink-500 transition">About</a></li>
          <li><a href="#work" class="hover:text-pink-500 transition">Work</a></li>
          <li><a href="#skills" class="hover:text-pink-500 transition">Skills</a></li>
          <li><a href="#contact" class="hover:text-pink-500 transition">Contact</a></li>
        </ul>
      </div>
  
      <!-- Mobile Menu -->
      <div v-if="isOpen" class="md:hidden bg-black border-t border-gray-800">
        <ul class="flex flex-col items-center gap-4 py-4 text-base">
          <li><a href="#home" class="hover:text-pink-500 transition" @click="isOpen = false">Home</a></li>
          <li><a href="#about" class="hover:text-pink-500 transition" @click="isOpen = false">About</a></li>
          <li><a href="#work" class="hover:text-pink-500 transition" @click="isOpen = false">Work</a></li>
          <li><a href="#skills" class="hover:text-pink-500 transition" @click="isOpen = false">Skills</a></li>
          <li><a href="#contact" class="hover:text-pink-500 transition" @click="isOpen = false">Contact</a></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isOpen = ref(false)
  </script>
  