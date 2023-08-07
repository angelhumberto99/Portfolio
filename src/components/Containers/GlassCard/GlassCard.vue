<script lang='ts'>
  export default {
    name:'GlassCard',
    props: ['animate', 'showClass', 'hideClass'],
    computed: {
      getAnimation(): string {
        return this.animate ? this.showClass: this.hideClass
      }
    }
  }
</script>

<template>
  <section :class="['card', getAnimation]">
    <slot/>
  </section>
</template>

<style scoped>
  @import './style.module.scss';
</style>