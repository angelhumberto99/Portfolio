<script setup lang="ts">
  import Profile from "./components/Profile/Profile.vue"
  import Projects from "./components/Projects/Projects.vue"
</script>

<template>
  <header>
    este es el header
  </header>
  <Profile/>
  <Projects/>
</template>

<style scoped>
  header {
    position: sticky;
    height: 50px;
    width: 100%;
    z-index: 1;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);    
  }
</style>