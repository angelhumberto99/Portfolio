<script lang="ts">
  import { SnapObservable, OSWindowCarousel, TimelineCard } from "../Containers";
  import PROJECTS from "../../assets/projects.json";
  
  interface ProjectWithoutImgs {
    title?: string;
    date: string;
    description: string;
    technologies: Array<string>;
    color: string;
  }

  interface Project extends ProjectWithoutImgs {
    imgs: Array<string>;
  }

  export default {
    name: "Projects",
    data() {
      return { 
        show: false as boolean,
        close: true as boolean,
        projects: [] as Array<[string, Project]>,
        location: "Typed" as string
      }
    },
    methods: {
      observe(value: boolean): void { 
        this.show = value
        if (value)
          globalThis.location.hash = "#Projects"
      },
      handleClick(name: string): void {
        if (name !== this.location) {
          this.location = name
          this.close = false 
        } else
          this.close = !this.close
      },
      handleClose(type: string): void {
        // TODO: handle every action button in the OSWindowCarousel
        console.log({type})
        this.close = true
      },
      getProjectData(key: string, value: Project): ProjectWithoutImgs {
        const { imgs: _,...rest } = value as Project
        return { title: key, ...rest }
      }
    },
    computed: {
      getProjectImages(): Array<string> {
        if (this.projects.length === 0) return []
        const [, project] = this.projects.find(([name])  => {
          return name === this.location
        }) as [string, Project]
        return project.imgs
      }
    },
    mounted() {
      const orderedProjects = Object.entries(PROJECTS)
      this.projects = orderedProjects.sort((a, b) => {
        let res = new Date(a[1].date).getTime() < new Date(b[1].date).getTime()
        return res ? 1 : -1
      })
    },
    components: {
      SnapObservable,
      OSWindowCarousel,
      TimelineCard
    }
  }
</script>

<template>
  <SnapObservable @observable="observe" class="background">
    <section class="scrollable-wrapper">  
      <section class="content">
        <h1>projects</h1>
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
      <div @click="handleClose('overlay')" 
        :class="['overlay', {close: !close}]"
      >
        <OSWindowCarousel @click.stop
        :location="`public/${location}`" 
        :imgs="getProjectImages" 
        :close="close"
        @handleClose="handleClose"
        />
        <p> texto relacionado con el overlay</p>
      </div>
    </section>
  </SnapObservable>
</template>

<style scoped>
  @import "./styles.module.scss";
</style>