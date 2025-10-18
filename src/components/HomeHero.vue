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
      turning complex data into clear insights and elegant interfaces — with a touch of creativity 💖
    </p>

    <!-- Buttons -->
    <div class="button-group animate-fade-in delay-400">
  <router-link to="/work" class="btn btn-primary">See my Work</router-link>
  <router-link to="/about" class="btn btn-outline">About Me</router-link>
</div>
  </section>
</template>

<script setup>
// No JS needed for hero
</script>

<style scoped>
/* Center content for hero section */
.section-flex-center {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1.5rem;
}

</style>
