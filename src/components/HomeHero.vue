<template>
  <section class="section section-flex-center min-h-screen">
    <!-- Hero Heading -->
    <h1 class="hero-heading animate-fade-in">
      <span class="subtitle">Hi, I'm</span>
      Victoria <br>
      <span class="subtitle">Data Scientist & Frontend Developer</span>
    </h1>

    <!-- Paragraph Subtitle -->
    <p class="paragraph-subtitle animate-fade-in delay-200 text-center">
      I turn complex data into clear insights and elegant interfaces — with a touch of creativity 💖
    </p>

    <!-- Main Buttons -->
    <div class="button-group animate-fade-in delay-400 mb-12" ref="buttonGroup">
      <a href="mailto:vicky_friss@hotmail.com" class="btn btn-primary cta-btn">Let's work together</a>
      <router-link to="/work" class="btn btn-outline">See my Work</router-link>
    </div>

    <!-- Circular Social Buttons -->
    <div class="flex justify-center gap-6 mt-12 social-group">
  <a href="mailto:vicky_friss@hotmail.com" class="social-btn">
    <i class="fas fa-envelope"></i>
  </a>
  <a href="https://www.linkedin.com/in/victoria-friss-de-kereki/" target="_blank" class="social-btn">
    <i class="fab fa-linkedin-in"></i>
  </a>
  <a href="https://github.com/vickyfriss" target="_blank" class="social-btn">
    <i class="fab fa-github"></i>
  </a>
</div>
  </section>
</template>

<script setup>
import { onMounted, nextTick, ref } from 'vue'

const buttonGroup = ref(null)

const setButtonWidths = () => {
  const buttons = buttonGroup.value.querySelectorAll('.btn')
  let maxWidth = 0

  // Reset widths first
  buttons.forEach(btn => (btn.style.width = 'auto'))

  // Find largest width
  buttons.forEach(btn => {
    const width = btn.offsetWidth
    if (width > maxWidth) maxWidth = width
  })

  // Apply largest width to all buttons
  buttons.forEach(btn => (btn.style.width = maxWidth + 'px'))
}

onMounted(() => {
  nextTick(() => {
    setButtonWidths()
    window.addEventListener('resize', setButtonWidths)
  })
})
</script>

