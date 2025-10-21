<template>
  <section id="projects" class="section">
    <div class="section-center">
      <!-- Heading -->
      <h1 class="section-title heading heading-pink">Featured Projects</h1>

      <!-- Grid for projects -->
      <div class="section-grid section-grid-3 text-left">

        <!-- PFIZER (DS) -->
        <div class="card relative flex flex-col justify-between p-4 bg-gray-900 rounded-xl shadow-lg group">
          <span class="absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full bg-purple-500 text-white z-10">
            DS
          </span>
          <div class="relative">
            <img src="/images/pfizer-preview.png" alt="Pfizer project preview"
              class="w-full h-40 object-cover rounded-lg mb-4 transition duration-300 group-hover:scale-105"/>
            <div
              class="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="https://github.com/vickyfriss/PFIZER-Twitter-Sentiment-Project" target="_blank"
                class="w-10 h-10 bg-gray-800/70 rounded-full flex items-center justify-center text-white hover:bg-pink-500 transition">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
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
        </div>

        <!-- Hospitalisation Predictors (DS) -->
        <div class="card relative flex flex-col justify-between p-4 bg-gray-900 rounded-xl shadow-lg group">
          <span class="absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full bg-purple-500 text-white z-10">
            DS
          </span>
          <div class="relative">
            <img src="/images/hospitalisation-preview.png" alt="Hospitalisation project preview"
              class="w-full h-40 object-cover rounded-lg mb-4 transition duration-300 group-hover:scale-105"/>
            <div
              class="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="https://github.com/vickyfriss/Decoding-Hospitalisation-Predictors" target="_blank"
                class="w-10 h-10 bg-gray-800/70 rounded-full flex items-center justify-center text-white hover:bg-pink-500 transition">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
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
        </div>

        <!-- Energy Usage (DS) -->
        <div class="card relative flex flex-col justify-between p-4 bg-gray-900 rounded-xl shadow-lg group">
          <span class="absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full bg-purple-500 text-white z-10">
            DS
          </span>
          <div class="relative">
            <img src="/images/energy-preview.png" alt="Energy usage project preview"
              class="w-full h-40 object-cover rounded-lg mb-4 transition duration-300 group-hover:scale-105"/>
            <div
              class="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="https://github.com/vickyfriss/Energy-Usage-Prediction" target="_blank"
                class="w-10 h-10 bg-gray-800/70 rounded-full flex items-center justify-center text-white hover:bg-pink-500 transition">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
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
        </div>

        <!-- Power BI (BA) -->
        <div class="card relative flex flex-col justify-between p-4 bg-gray-900 rounded-xl shadow-lg group">
          <span class="absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full bg-purple-500 text-white z-10">
            BA
          </span>
          <div class="relative">
            <img src="/images/powerbi-preview.png" alt="Power BI project preview"
              class="w-full h-40 object-cover rounded-lg mb-4 transition duration-300 group-hover:scale-105"/>
            <div
              class="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="https://github.com/vickyfriss/Power-BI-Demo-Sales-Report" target="_blank"
                class="w-10 h-10 bg-gray-800/70 rounded-full flex items-center justify-center text-white hover:bg-pink-500 transition">
                <i class="fab fa-github"></i>
              </a>
              <router-link :to="{ path: '/powerbi' }"
                class="w-10 h-10 bg-gray-800/70 rounded-full flex items-center justify-center text-white hover:bg-pink-500 transition">
                <i class="fas fa-external-link-alt"></i>
              </router-link>
            </div>
          </div>
          <div>
            <h3 class="card-title">📊 Power BI Dashboard</h3>
            <p class="card-text">
              Visualising data with Power BI to create interactive dashboards for actionable insights.
            </p>
            <div class="flex flex-wrap gap-2 mt-2">
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Power BI</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Data Visualisation</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Dashboard</span>
            </div>
          </div>
        </div>

        <!-- RWC (FE) -->
        <div class="card relative flex flex-col justify-between p-4 bg-gray-900 rounded-xl shadow-lg group">
          <span class="absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full bg-blue-500 text-white z-10">
            FE
          </span>
          <div class="relative">
            <img src="/images/rwc-preview.png" alt="RWC project preview"
              class="w-full h-40 object-cover rounded-lg mb-4 transition duration-300 group-hover:scale-105"/>
            <div
              class="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="https://github.com/vickyfriss/RWC-2025-FRONT-END-PROJECT" target="_blank"
                class="w-10 h-10 bg-gray-800/70 rounded-full flex items-center justify-center text-white hover:bg-pink-500 transition">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://rwc-2025-front-end-project.vercel.app/" target="_blank"
                class="w-10 h-10 bg-gray-800/70 rounded-full flex items-center justify-center text-white hover:bg-pink-500 transition">
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 class="card-title">🏉 RWC 2025 Front-End Project</h3>
            <p class="card-text">
              Vue.js web application for the 2025 Women’s Rugby World Cup.
            </p>
            <div class="flex flex-wrap gap-2 mt-2">
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Vue.js</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Vite</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Tailwind CSS</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Firebase</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Highcharts</span>
            </div>
          </div>
        </div>

        <!-- Pink Storybook (FE) -->
        <div class="card relative flex flex-col justify-between p-4 bg-gray-900 rounded-xl shadow-lg group">
          <span class="absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full bg-blue-500 text-white z-10">
            FE
          </span>
          <div class="relative">
            <img src="/images/pink-storybook-preview.png" alt="Pink Storybook preview"
              class="w-full h-40 object-cover rounded-lg mb-4 transition duration-300 group-hover:scale-105"/>
            <div
              class="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="https://github.com/vickyfriss/Pink-storybook" target="_blank"
                class="w-10 h-10 bg-gray-800/70 rounded-full flex items-center justify-center text-white hover:bg-pink-500 transition">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://pink-storybook-kn2luvem1-vickyfriss-projects.vercel.app/" target="_blank"
                class="w-10 h-10 bg-gray-800/70 rounded-full flex items-center justify-center text-white hover:bg-pink-500 transition">
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 class="card-title">🎨 Pink Storybook</h3>
            <p class="card-text">
              Storybook component library showcasing a collection of reusable UI components, all designed in pink.
            </p>
            <div class="flex flex-wrap gap-2 mt-2">
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Storybook</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">React</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">UI Design</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
