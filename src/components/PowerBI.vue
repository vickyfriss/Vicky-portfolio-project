<template>
    <div class="flex flex-col min-h-screen">
      <!-- Main content -->
      <div class="flex-1 p-6">
        <h1 class="text-3xl font-bold mb-6">📊 Power BI Dashboard</h1>
        <iframe
          title="December 2014 sales DEMO"
          width="100%"
          height="800"
          src="https://app.powerbi.com/reportEmbed?reportId=f4b35626-eef4-4ac2-bb3f-ace2e0e44548&autoAuth=true&ctid=c4fdd762-c795-4c8a-b44b-036035add416"
          frameborder="0"
          allowFullScreen="true">
        </iframe>
      </div>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Footer from '../components/Footer.vue'  // <-- same relative path as in Home.vue
  </script>
  
  <style scoped>
  /* optional styling */
  </style>
  