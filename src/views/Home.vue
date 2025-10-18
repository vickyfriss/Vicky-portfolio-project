<template>
  <div class="bg-black">

    <!-- Greeting Section -->
    <section id="homehero"><HomeHero /></section>

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

  window.addEventListener('resize', () => {
    if (nav) navHeight.value = nav.offsetHeight
  })
})
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  background-color: #000;
  overflow-x: hidden;
}

/* Remove default margin from sections */
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
