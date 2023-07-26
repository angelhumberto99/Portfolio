<script lang="ts">
  export default {
    name: "AnchorCover",
    props: ["color", "animate", "delay"],
    computed: {
      rgbColor() {
        const hexColor: string = this.color.replace("#", "")
        const r = parseInt(hexColor.slice(0, 2), 16)
        const g = parseInt(hexColor.slice(2, 4), 16)
        const b = parseInt(hexColor.slice(4, 6), 16)
        return `${r}, ${g}, ${b}`
      }
    }
  }
</script>

<template>
  <a :class="['circular-anchor', animate? 'show-me': 'hide-me']" :style="`--color: ${rgbColor}; --delay: ${delay}`">
    <slot/>
  </a>
</template>

<style scoped>
  @import "./styles.module.scss";
</style>
