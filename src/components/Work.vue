<template>
  <section id="projects" class="section">
    <div class="section-center">
      <!-- Heading -->
      <h1 class="section-title heading heading-pink">Projects</h1>

      <!-- Grid for projects -->
      <div class="section-grid section-grid-3 text-left">

        <!-- PFIZER (DS) -->
        <div class="card relative flex flex-col justify-between p-4 bg-gray-900 rounded-xl shadow-lg">
          <span class="absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full bg-purple-500 text-white">
            DS
          </span>
          <div>
            <h3 class="card-title">💉 PFIZER: Everybody’s Talkin’</h3>
            <p class="card-text">
              MSc Finance final project: Sentiment Analysis of Pfizer-Related Tweets and Their Correlation to Pfizer Stock’s Movements (2020-2022).
            </p>
            <div class="flex flex-wrap gap-2 mt-2">
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">R</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Python</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">NLP</span>
            </div>
          </div>
          <a href="https://github.com/vickyfriss/PFIZER-Twitter-Sentiment-Project" target="_blank" class="card-tech mt-4 inline-block">
            View on GitHub
          </a>
        </div>

        <!-- Hospitalisation Predictors (DS) -->
        <div class="card relative flex flex-col justify-between p-4 bg-gray-900 rounded-xl shadow-lg">
          <span class="absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full bg-purple-500 text-white">
            DS
          </span>
          <div>
            <h3 class="card-title">🏥 Decoding Hospitalisation Predictors</h3>
            <p class="card-text">
              MSc Data Science & Analytics final project: A Data-Driven Analysis Using Logistic Regression in Multiple Myeloma Patients.
            </p>
            <div class="flex flex-wrap gap-2 mt-2">
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Python</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Scikit-learn</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Logistic Regression</span>
            </div>
          </div>
          <a href="https://github.com/vickyfriss/Decoding-Hospitalisation-Predictors" target="_blank" class="card-tech mt-4 inline-block">
            View on GitHub
          </a>
        </div>

        <!-- Energy Usage (DS) -->
        <div class="card relative flex flex-col justify-between p-4 bg-gray-900 rounded-xl shadow-lg">
          <span class="absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full bg-purple-500 text-white">
            DS
          </span>
          <div>
            <h3 class="card-title">⚡ Energy Usage Prediction</h3>
            <p class="card-text">
              Predicting energy efficiency for the ASHRAE Great Energy Predictor III challenge using data-driven modeling techniques.
            </p>
            <div class="flex flex-wrap gap-2 mt-2">
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Python</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Machine Learning</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Energy Analytics</span>
            </div>
          </div>
          <a href="https://github.com/vickyfriss/Energy-Usage-Prediction" target="_blank" class="card-tech mt-4 inline-block">
            View on GitHub
          </a>
        </div>

        <!-- Power BI (DS) -->
        <div class="card relative flex flex-col justify-between p-4 bg-gray-900 rounded-xl shadow-lg">
          <span class="absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full bg-purple-500 text-white">
            DS
          </span>
          <div>
            <h3 class="card-title">📊 Power BI Dashboard</h3>
            <p class="card-text">
              Visualising data with Power BI to create interactive dashboards for actionable insights. Includes charts, KPIs, and interactive filters for better project understanding.
            </p>
            <div class="flex flex-wrap gap-2 mt-2">
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Power BI</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Data Visualisation</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Dashboard</span>
            </div>
          </div>
          <div class="mt-4 flex gap-4">
            <a href="https://github.com/vickyfriss/Power-BI-Demo-Sales-Report" target="_blank" class="card-tech">GitHub</a>
            <router-link :to="{ path: '/powerbi' }" class="card-tech">View Dashboard ↗</router-link>
          </div>
        </div>

        <!-- RWC (FE) -->
        <div class="card relative flex flex-col justify-between p-4 bg-gray-900 rounded-xl shadow-lg">
          <span class="absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full bg-blue-500 text-white">
            FE
          </span>
          <div>
            <h3 class="card-title">🏉 RWC 2025 Front-End Project</h3>
            <p class="card-text">
              Vue.js web application for the 2025 Women’s Rugby World Cup, allowing users to view match schedules and team information. The interface is responsive and designed for both desktop and mobile devices.
            </p>
            <div class="flex flex-wrap gap-2 mt-2">
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Vue.js</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Vite</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Tailwind CSS</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Firebase</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Highcharts</span>
            </div>
          </div>
          <div class="mt-4 flex gap-4">
            <a href="https://github.com/vickyfriss/RWC-2025-FRONT-END-PROJECT" target="_blank" class="card-tech">GitHub</a>
            <a href="https://rwc-2025-front-end-project.vercel.app/" target="_blank" class="card-tech">Live Demo ↗</a>
          </div>
        </div>

        <!-- Pink Storybook (FE) -->
        <div class="card relative flex flex-col justify-between p-4 bg-gray-900 rounded-xl shadow-lg">
          <span class="absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full bg-blue-500 text-white">
            FE
          </span>
          <div>
            <h3 class="card-title">🎨 Pink Storybook</h3>
            <p class="card-text">
              Storybook component library showcasing a collection of reusable UI components, all designed in pink, with a focus on accessibility and design consistency. Ideal for developers and designers seeking a visual reference for building and testing UI elements.
            </p>
            <div class="flex flex-wrap gap-2 mt-2">
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Storybook</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">React</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">UI Design</span>
            </div>
          </div>
          <div class="mt-4 flex gap-4">
            <a href="https://github.com/vickyfriss/Pink-storybook" target="_blank" class="card-tech">GitHub</a>
            <a href="https://pink-storybook-kn2luvem1-vickyfriss-projects.vercel.app/" target="_blank" class="card-tech">Live Demo ↗</a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
