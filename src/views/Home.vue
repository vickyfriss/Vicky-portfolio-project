<template>
  <div>
    <section id="home">
      <HomeHero />
    </section>

    <section id="about">
      <AboutSection />
    </section>

    <section id="work">
      <WorkSection />
    </section>

    <section id="skills">
      <Skills />
    </section>

    <section id="contact">
      <ContactSection />
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import HomeHero from '../components/HomeHero.vue';
import AboutSection from '../components/About.vue';
import WorkSection from '../components/Work.vue';
import Skills from '../components/Skills.vue';
import ContactSection from '../components/Contact.vue';
import Footer from '../components/Footer.vue'; // <-- import your footer
</script>
