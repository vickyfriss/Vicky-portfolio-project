<template>
<section
  class="bg-black flex flex-col justify-center items-center text-center px-6
         pt-16 md:pt-24 lg:pt-32
         min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-96px)] lg:min-h-[calc(100vh-128px)]"
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

</template>




<script setup>
// No JS needed yet
</script>

<style>
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
