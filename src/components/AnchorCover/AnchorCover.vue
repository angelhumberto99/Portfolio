<script lang="ts">
  import { hexToRGB } from "../../utils/hexToRGB.ts";
  export default {
    name: "AnchorCover",
    props: ["color", "animate", "delay"],
    computed: {
      rgbColor() { return hexToRGB(this.color) }
    }
  }
</script>

<template>
  <a :class="['circular-anchor', animate? 'show-me': 'hide-me']"
    :style="`--color: ${rgbColor}; --delay: ${delay};`"
  >
    <slot/>
  </a>
</template>

<style scoped>
  @import "./styles.module.scss";
</style>
