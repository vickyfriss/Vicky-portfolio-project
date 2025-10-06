<template>
  <section id="projects" class="bg-black text-gray-200 py-24 px-6">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl font-serif font-bold text-pink-500 mb-16">
        Projects
      </h2>

      <!-- 1 column on mobile, 2 on medium, 3 on large -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
        
        <!-- PFIZER -->
        <div class="flex flex-col justify-between hover:bg-gray-900 p-6 rounded-2xl transition border-2 border-pink-500">
          <div>
            <h3 class="text-2xl font-semibold text-pink-400 mb-2">💉 PFIZER: Vaccine Conversations</h3>
            <p class="text-gray-300 mb-4">
              MSc Finance final project: Sentiment Analysis of Tweets About Pfizer Vaccines and Their Correlation to Pfizer Stock’s Movements (2020–2022).
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">R</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Python</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Natural Language Processing</span>
            </div>
          </div>
          <a
            href="https://github.com/vickyfriss/PFIZER-Twitter-Sentiment-Project"
            target="_blank"
            class="text-pink-400 hover:underline mt-4"
          >
            View on GitHub
          </a>
        </div>

        <!-- Hospitalisation Predictors -->
        <div class="flex flex-col justify-between hover:bg-gray-900 p-6 rounded-2xl transition border-2 border-pink-500">
          <div>
            <h3 class="text-2xl font-semibold text-pink-400 mb-2">🏥 Decoding Hospitalisation Predictors</h3>
            <p class="text-gray-300 mb-4">
              MSc Data Science & Analytics final project: Logistic Regression Analysis of Hospitalisation Risks in Multiple Myeloma Patients.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Python</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Scikit-learn</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Logistic Regression</span>
            </div>
          </div>
          <a href="https://github.com/vickyfriss/Decoding-Hospitalisation-Predictors" target="_blank" class="text-pink-400 hover:underline mt-4">
            View on GitHub
          </a>
        </div>

        <!-- Energy Usage -->
        <div class="flex flex-col justify-between hover:bg-gray-900 p-6 rounded-2xl transition border-2 border-pink-500">
          <div>
            <h3 class="text-2xl font-semibold text-pink-400 mb-2">⚡ Energy Usage Prediction</h3>
            <p class="text-gray-300 mb-4">
              Predicting energy efficiency for the ASHRAE Great Energy Predictor III challenge using data-driven modeling techniques.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Python</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Machine Learning</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Energy Analytics</span>
            </div>
          </div>
          <a href="https://github.com/vickyfriss/Energy-Usage-Prediction" target="_blank" class="text-pink-400 hover:underline mt-4">
            View on GitHub
          </a>
        </div>

        <!-- RWC -->
        <div class="flex flex-col justify-between hover:bg-gray-900 p-6 rounded-2xl transition border-2 border-pink-500">
          <div>
            <h3 class="text-2xl font-semibold text-pink-400 mb-2">🏉 RWC 2025 Front-End Project</h3>
            <p class="text-gray-300 mb-4">
              Frontend development project built with Vue.js for a responsive, interactive web interface.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Vue.js</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Vite</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Tailwind CSS</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Firebase</span>
            </div>
          </div>
          <div class="mt-4 flex gap-4">
            <a href="https://github.com/vickyfriss/RWC-2025-FRONT-END-PROJECT" target="_blank" class="text-pink-400 hover:underline">GitHub</a>
            <a href="https://rwc-2025-front-end-project.vercel.app/" target="_blank" class="text-pink-400 hover:underline">Live Demo ↗</a>
          </div>
        </div>

        <!-- My Pink Tasks -->
        <div class="flex flex-col justify-between hover:bg-gray-900 p-6 rounded-2xl transition border-2 border-pink-500">
          <div>
            <h3 class="text-2xl font-semibold text-pink-400 mb-2">🗒️ My Pink Tasks</h3>
            <p class="text-gray-300 mb-4">
              React task manager with a clean, user-friendly interface for seamless task organization.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">React</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Firebase</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Vite</span>
            </div>
          </div>
          <div class="mt-4 flex gap-4">
            <a href="https://github.com/vickyfriss/My-Pink-Tasks-React" target="_blank" class="text-pink-400 hover:underline">GitHub</a>
            <a href="https://my-pink-tasks-react.vercel.app/" target="_blank" class="text-pink-400 hover:underline">Live Demo ↗</a>
          </div>
        </div>

        <!-- Pink Storybook -->
        <div class="flex flex-col justify-between hover:bg-gray-900 p-6 rounded-2xl transition border-2 border-pink-500">
          <div>
            <h3 class="text-2xl font-semibold text-pink-400 mb-2">🎨 UI Components Showcase</h3>
            <p class="text-gray-300 mb-4">
              Project showcasing reusable UI components with consistent design patterns.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">Storybook</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">React</span>
              <span class="bg-pink-500/20 text-pink-300 text-sm px-2 py-1 rounded-lg">UI Design</span>
            </div>
          </div>
          <div class="mt-4 flex gap-4">
            <a href="https://github.com/vickyfriss/Pink-storybook" target="_blank" class="text-pink-400 hover:underline">GitHub</a>
            <a href="https://pink-storybook-kn2luvem1-vickyfriss-projects.vercel.app/" target="_blank" class="text-pink-400 hover:underline">Live Demo ↗</a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
