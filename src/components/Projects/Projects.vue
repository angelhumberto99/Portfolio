<script lang="ts">
  import { SnapObservable, GlassCard, OSWindow } from "../Containers"
  export default {
    name: "Projects",
    data() {
      return { 
        show: false,
        typed: [
          "public/Typed/1-Layouts_Dark.gif",
          "public/Typed/2-Layouts_Light.gif",
          "public/Typed/3-Test_Light.gif",
          "public/Typed/4-Test_Dark.gif",
          "public/Typed/5-Analytics-Dark.gif",
          "public/Typed/6-Analytics-Light.gif",
          "public/Typed/7-Reset_Dark.gif",
          "public/Typed/7-Reset_Light.gif"
        ]
      }
    },
    methods: {
      observe: function(val: boolean) { this.show = val }
    },
    components: {
      SnapObservable,
      GlassCard,
      OSWindow
    }
  }
</script>

<template>
  <SnapObservable @observable="observe" class="background">
    <section class="content">
      <h1>Proyectos</h1>
      <!-- <GlassCard :animate="show" showClass="show" hideClass="hide">
        <p>Estos son los proyectos</p>
      </GlassCard> -->
      <OSWindow title="Typed" :imgs="typed"/>
    </section>
  </SnapObservable>
</template>

<style scoped>
  @import 'styles.module.scss';
</style>