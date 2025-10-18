<template>
  <div class="card">
    <img :src="image" alt="project image" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <p class="card-tech">{{ tech }}</p>
    <a v-if="link" :href="link" target="_blank">View Project ↗</a>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: String,
    description: String,
    tech: String,
    image: String,
    link: String
  }
}
</script>
