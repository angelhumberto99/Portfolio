<script lang='ts'>
  import { hexToRGB } from '../../utils/hexToRGB.ts';
  export default {
    name: 'AnchorCover',
    props: ['color', 'animate', 'delay'],
    computed: {
      rgbColor(): string { return hexToRGB(this.color); },
      getHoverBackground(): string {
        return `--color: ${this.rgbColor}; --delay: ${this.delay};`
      },
      getAnimation(): string {
        return this.animate? 'show-me': 'hide-me';
      }
    }
  }
</script>

<template>
  <a :class="['circular-anchor', getAnimation]"
    :style="getHoverBackground"
  >
    <slot/>
  </a>
</template>

<style scoped>
  @import './styles.module.scss';
</style>
