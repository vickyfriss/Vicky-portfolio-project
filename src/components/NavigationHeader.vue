<template>
  <nav class="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
    <div class="container mx-auto flex justify-between items-center py-4 px-6 md:py-6 lg:py-8">
      <!-- Logo / Name -->
      <div class="text-lg md:text-2xl lg:text-3xl font-bold">
        Victoria Friss de Kereki
      </div>

<!-- Desktop Navigation Links + Contact Button -->
<div class="hidden md:flex items-center gap-6 md:gap-8 lg:gap-10 text-sm md:text-base lg:text-lg">
  <!-- Links -->
  <ul class="flex items-center gap-6 md:gap-8 lg:gap-10">
    <li v-for="section in sections" :key="section">
      <a href="#" @click.prevent="navigateTo(section)" class="hover:text-pink-500 transition">{{ section }}</a>
    </li>

    <!-- Contact button as part of the same flex -->
    <li>
      <a href="mailto:vicky_friss@hotmail.com" class="btn btn-outline btn-fit">
        Contact
      </a>
    </li>
  </ul>
</div>


      <!-- Hamburger Icon (mobile only) -->
      <div class="md:hidden">
        <button 
          @click="isOpen = !isOpen" 
          class="focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden bg-black border-t border-gray-800">
      <ul class="flex flex-col items-center gap-4 py-4 text-base w-full">
        <!-- Other sections -->
        <li v-for="section in sections" :key="section + '-mobile'">
          <a 
            href="#" 
            @click.prevent="navigateTo(section); isOpen = false" 
            class="hover:text-pink-500 transition w-full text-center"
          >
            {{ section }}
          </a>
        </li>
        <!-- Contact button only in mobile menu -->
        <li>
  <a 
    href="mailto:vicky_friss@hotmail.com" 
    @click="isOpen = false"
    class="btn btn-outline btn-fit"
  >
    Contact
  </a>
</li>

      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const isOpen = ref(false)
const router = useRouter()
const route = useRoute()

// Sections for nav links (Contact handled separately)
const sections = ['Home', 'About', 'Work', 'Skills']

function navigateTo(section) {
  const id = section.toLowerCase()
  if (route.path === '/') {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  } else {
    router.push('/').then(() => {
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    })
  }
}
</script>
