<script lang="ts">
  export default {
    name: "GlassCard",
    props: ["animate", "showClass", "hideClass"]
  }
</script>

<template>
  <section :class="['card', animate ? showClass: hideClass]">
    <slot/>
  </section>
</template>

<style scoped>
  @import "./style.module.scss";
</style>