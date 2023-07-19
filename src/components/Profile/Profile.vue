<script lang="ts">
  import { GlassCard, SnapObservable } from '../Containers'
  export default {
    name: "Profile",
    data() {
      return { show: false }
    },
    methods: {
      observe: function(value: boolean) { this.show = value }
    },
    components: {
      GlassCard,
      SnapObservable
    }
  }
</script>

<template>
  <SnapObservable @observable="observe" class="wallpaper">
    <div class="container">
      <GlassCard :animate="show" showClass="show" hideClass="hide">
        <p>Este es el perfil</p>
      </GlassCard>
      <GlassCard :animate="show" showClass="show" hideClass="hide" style="--delay: .5s">
        <p>Este es el perfil</p>
      </GlassCard>
    </div>
  </SnapObservable>
</template>

<style scoped>
  @import "./styles.module.scss";
</style>