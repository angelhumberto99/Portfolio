<script lang="ts">
  import { SnapObservable, GlassCard, OSWindowCarousel, TimelineCard } from "../Containers";
  import PROJECTS_IMAGES from "../../assets/projects.json";
  export default {
    name: "Projects",
    data() {
      return { 
        show: false,
        close: true,
        tabs: PROJECTS_IMAGES,
        location: "Typed" as string
      }
    },
    methods: {
      observe: function(val: boolean) { this.show = val },
      handleClick: function(name: string) {
        if (name !== this.location) {
          this.location = name
          this.close = false 
        } else
          this.close = !this.close
      },
      handleClose: function(type: string) {
        // TODO: handle every action button in the OSWindowCarousel
        console.log({type})
        this.close = true
      }
    },
    components: {
      SnapObservable,
      GlassCard,
      OSWindowCarousel,
      TimelineCard
    }
  }
</script>

<template>
  <SnapObservable @observable="observe" class="background">
    <section class="content">
      <h1>projects</h1>
      <!-- <GlassCard :animate="show" showClass="show" hideClass="hide"> -->
        <template v-for="(value, key, index) of tabs">
          <TimelineCard :data="
            {
              title: key,
              date: value.date,
              description: value.description,
              technologies: value.tecnologies
            }
          "
          @handleClick="handleClick"
          :reversed="index%2 === 0"/>
        </template>
      <!-- </GlassCard> -->

      <OSWindowCarousel 
        :location="`public/${location}`" 
        :imgs="tabs[location as keyof Object].imgs" 
        :close="close"
        @handleClose="handleClose"
      />
    </section>
  </SnapObservable>
</template>

<style scoped>
  @import 'styles.module.scss';
</style>