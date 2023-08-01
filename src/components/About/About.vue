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
      <h1>About</h1>
      <p>Aquí debe ir información escolar, que ofreces y que buscas de una empresa</p>
    </section>
  </SnapObservable>
</template>

<style scoped>
  @import "./styles.module.scss";
</style>