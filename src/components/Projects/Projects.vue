<script lang='ts'>
  import { mapMutations } from 'vuex';
  import { SnapObservable, OSWindowCarousel, TimelineCard, Overlay } from '../Containers';
  import PROJECTS from '../../assets/projects.json';
  import { ProjectWithoutImgs, Project } from '../../types';
  import ListOfBadges from '../ListOfBadges/ListOfBadges.vue';

  export default {
    name: 'Projects',
    data() {
      return { 
        show: false as boolean,
        close: true as boolean,
        projects: [] as Array<[string, Project]>,
        location: 'Typed' as string,
        overlayProject: null as null | ProjectWithoutImgs,
        colors: '' as string
      }
    },
    methods: {
      ...mapMutations(['setCurrentPage']),
      observe(value: boolean): void { 
        this.show = value;
        if (value) this.setCurrentPage('Projects');
      },
      handleClick(data: ProjectWithoutImgs, colors: string): void {
        this.overlayProject = data;
        this.colors = colors;
        if (data.title !== this.location) {
          this.location = data.title ?? "Typed";
          this.close = false ;
        } else
          this.close = !this.close;
      },
      handleClose(): void { this.close = true; },
      getProjectData(key: string, value: Project): ProjectWithoutImgs {
        const { imgs: _,...rest } = value as Project;
        return { title: key, ...rest };
      }
    },
    mounted() {
      const orderedProjects = Object.entries(PROJECTS);
      this.projects = orderedProjects.sort((a, b) => {
        let res = new Date(a[1].date).getTime() < new Date(b[1].date).getTime();
        return res ? 1 : -1;
      });
    },
    components: {
    SnapObservable,
    OSWindowCarousel,
    TimelineCard,
    Overlay,
    ListOfBadges
}
  }
</script>

<template>
  <SnapObservable @observable="observe">
    <section class="scrollable-wrapper">  
      <section class="content">
        <header class="description">
          <h2>Here are a couple of my most relevant projects I've made</h2>
        </header>
        <template v-for="([key, value], index) of projects">
          <TimelineCard :show="show" :delay="index"
            :data="getProjectData(key, value)"
            :close="close"
            :last="index === Object.keys(projects).length - 1"
            :reversed="index%2 === 0"
            @handleClick="handleClick"
          />
        </template>
        <div style="height: 2rem;"></div>
      </section>
      <Overlay 
        @handleClose="handleClose" 
        :close="close"
        :style="colors"
        :data="overlayProject"
        :location="location"
        :projects="projects"
      >
      </Overlay>
    </section>
  </SnapObservable>
</template>

<style scoped>
  @import './styles.module.scss';
</style>