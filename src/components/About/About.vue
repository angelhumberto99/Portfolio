<script lang="ts">
  import { SnapObservable } from "../Containers";
  export default {
    name: "About",
    data() {
      return { show: false as boolean }      
    },
    methods: {
      observe(value: boolean): void { 
        this.show = value
        if (value)
          globalThis.location.hash = "#About"
      }
    },
    components: {
      SnapObservable
    }
  }
</script>

<template>
  <SnapObservable @observable="observe" class="background">
    <section class="content">
      <h1>About</h1>
      <p>Aquí debe ir información escolar, que ofreces y que buscas de una empresa</p>
    </section>
  </SnapObservable>
</template>

<style scoped>
  @import "./styles.module.scss";
</style>