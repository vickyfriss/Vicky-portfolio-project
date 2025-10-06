<template>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
      <img :src="image" alt="project image" class="w-full h-48 object-cover"/>
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
        <p class="text-gray-600 mb-2">{{ description }}</p>
        <p class="text-sm text-pink-500 font-medium">{{ tech }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectCard',
    props: {
      title: String,
      description: String,
      tech: String,
      image: String
    }
  }
  </script>
  