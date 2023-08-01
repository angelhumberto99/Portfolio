<script lang="ts">
  import { SnapObservable } from '../Containers';
  export default {
    name: "About",
    components: {
      SnapObservable
    }
  }
</script>

<template>
  <SnapObservable class="background">
    <section class="content">
      <h1>Contact</h1>
    </section>
  </SnapObservable>
</template>

<style scoped>
  @import "./styles.module.scss";
</style>