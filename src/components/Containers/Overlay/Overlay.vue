<script lang="ts">
  import ListOfBadges from '../../ListOfBadges/ListOfBadges.vue';
  import { OSWindowCarousel } from '../index';
  import { Project } from '../../../types';
  export default {
    name: 'Overlay',
    props: ['close', 'data', 'location', 'projects'],
    methods: {
      handleClose(type: string) {
        console.log(type);
        this.$emit('handleClose')
      }
    },
    computed: {
      getProjectImages(): Array<string> {
        if (this.projects.length === 0) return [];
        const [, project] = this.projects.find(([name])  => {
          return name === this.location;
        }) as [string, Project];
        return project.imgs;
      }
    },
    components: {
      OSWindowCarousel,
      ListOfBadges
    }
  }
</script>

<template>
  <div @click="handleClose('overlay')" :class="['overlay', {close: !close}]">
    <div @click.stop class="overlay-content">
      <header class="overlay-header">
        <h2>
          <span>
            {{ data?.title }}
          </span>
          <button @click="handleClose('x mark')">
            <font-awesome-icon :icon="['fas', 'xmark']" />
          </button>
        </h2>
        <h4>{{ data?.date }}</h4>
      </header>
      <section class="overlay-body">
        <OSWindowCarousel
          :location="`public/${location}`" 
          :imgs="getProjectImages" 
          :close="close"
          @handleClose="handleClose"
        />
        <p>{{ data?.longDescription }}</p>
      </section>
      <footer class="overlay-footer">
        <ListOfBadges :badges="data?.technologies"/>
      </footer>
    </div>
  </div>
</template>

<style scoped>
  @import './styles.module.scss';
</style>