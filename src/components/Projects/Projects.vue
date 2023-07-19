<script lang="ts">
  import { SnapObservable, GlassCard } from "../Containers"
  export default {
    name: "Projects",
    data() {
      return { show: false }
    },
    methods: {
      observe: function(val: boolean) { this.show = val }
    },
    components: {
      SnapObservable,
      GlassCard
    }
  }
</script>

<template>
  <SnapObservable @observable="observe" class="wallpaper">
    <GlassCard :animate="show" showClass="show" hideClass="hide">
      <p>Estos son los proyectos</p>
    </GlassCard>
  </SnapObservable>
</template>

<style scoped>
  @import 'styles.module.scss';
</style>