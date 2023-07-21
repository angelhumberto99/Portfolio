<script setup lang="ts">
  import Profile from "./components/Profile/Profile.vue"
  import Projects from "./components/Projects/Projects.vue"
</script>

<template>
  <header>
    <nav>
      <h1>este es el header</h1>
    </nav>
  </header>
  <Profile/>
  <Projects/>
</template>

<style scoped>
  header {
    position: sticky;
    height: 0;
    z-index: 1;
    top: 0;
    /* mix-blend-mode: difference; */
  }
  h1 {
    margin: 0;
    padding: 0;
    color: white;
    text-transform: uppercase;
    mix-blend-mode: difference;
  }
  nav {
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.3);
  }
</style>