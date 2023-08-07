<script lang='ts'>
  import Badge from '../Badge/Badge.vue';
  export default {
    name: 'ListOfBadges',
    props: ['badges'],
    components: { Badge }
  }
</script>

<template>
  <div v-for="badge in badges">
    <Badge :title="badge"/>
  </div>
</template>