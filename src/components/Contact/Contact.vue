<script lang="ts">
  import { SnapObservable } from "../Containers";
  export default {
    name: "Contact",
    data() {
      return { show: false as boolean }      
    },
    methods: {
      observe(value: boolean): void { 
        this.show = value
        if (value)
          globalThis.location.hash = "#Contact"
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
      <h1>Contact</h1>
    </section>
  </SnapObservable>
</template>

<style scoped>
  @import "./styles.module.scss";
</style>