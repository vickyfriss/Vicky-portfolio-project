<template>
  <div class="bg-black">
    <!-- Home Section -->
    <section
      id="home"
      ref="homeSection"
      class="flex flex-col justify-center items-center text-center px-6"
      :style="{ minHeight: `calc(100vh - ${navHeight}px)` }"
    >
      <!-- Greeting -->
      <h1 class="font-serif font-bold text-pink-500 mb-4 animate-fade-in 
                 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        Hi, I'm Victoria
      </h1>

      <!-- Subtitle -->
      <p class="text-gray-300 mb-6 max-w-xl md:max-w-3xl animate-fade-in delay-200
                text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        <b>Data Scientist & Frontend Developer</b><br>
        turning complex data into clear insights and elegant interfaces — with a touch of creativity 💖
      </p>

      <!-- Call-to-action buttons -->
      <div class="flex flex-col md:flex-row gap-4 mt-6 animate-fade-in delay-400">
        <router-link
          to="/work"
          class="bg-pink-500 text-black rounded-full hover:bg-pink-400 transition 
                 text-sm sm:text-base md:text-lg lg:text-xl
                 px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4"
        >
          See my Work
        </router-link>
        <router-link
          to="/about"
          class="border border-pink-500 text-pink-500 rounded-full hover:bg-pink-500 hover:text-black transition
                 text-sm sm:text-base md:text-lg lg:text-xl
                 px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4"
        >
          About Me
        </router-link>
      </div>
    </section>

    <!-- About Section -->
    <section id="about"><AboutSection /></section>

    <!-- Work Section -->
    <section id="work"><WorkSection /></section>

    <!-- Skills Section -->
    <section id="skills"><Skills /></section>

    <!-- Contact Section -->
    <section id="contact"><ContactSection /></section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HomeHero from '../components/HomeHero.vue'
import AboutSection from '../components/About.vue'
import WorkSection from '../components/Work.vue'
import Skills from '../components/Skills.vue'
import ContactSection from '../components/Contact.vue'
import Footer from '../components/Footer.vue'

const homeSection = ref(null)
const navHeight = ref(0)

onMounted(() => {
  const nav = document.querySelector('nav')
  if (nav) navHeight.value = nav.offsetHeight

  // Update dynamically on mobile when viewport changes (address bar)
  window.addEventListener('resize', () => {
    if (nav) navHeight.value = nav.offsetHeight
  })
})
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  background-color: #000; /* ensures no white space behind sections */
  overflow-x: hidden;
}

/* Remove default margin from sections and make them black */
section {
  margin: 0;
  background-color: #000;
}

/* Fade-in animations */
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.8s ease forwards;
}
.animate-fade-in.delay-200 {
  animation-delay: 0.2s;
}
.animate-fade-in.delay-400 {
  animation-delay: 0.4s;
}
</style>
