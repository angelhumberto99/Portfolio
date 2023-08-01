<script setup lang="ts">
  import Profile from "./components/Profile/Profile.vue"
  import Projects from "./components/Projects/Projects.vue"
  import Header from "./components/Header/Header.vue"
  import About from "./components/About/About.vue"
  import Contact from "./components/Contact/Contact.vue"
</script>

<template>
  <Header/>
  <Profile id="Profile"/>
  <About id="About"/>
  <Projects id="Projects"/>
  <Contact id="Contact"/>
</template>

<style scoped>
</style>