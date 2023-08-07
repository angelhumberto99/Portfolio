<script lang='ts'>
  export default {
    name: 'Badge',
    props: ['title']
  }
</script>

<template>
  <span class="badge">
    {{ title }}
  </span>
</template>

<style scoped>
  @import './styles.module.scss';
</style>