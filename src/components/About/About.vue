<script lang='ts'>
  import { mapMutations } from 'vuex';
  import { GlassCard, SnapObservable } from '../Containers';
  import Education from '../Education/Education.vue';
  import WhoAmI from '../WhoAmI/WhoAmI.vue';
  import Skills from '../Skills/Skills.vue';

  export default {
    name: 'About',
    data() {
      return { 
        show: false as boolean
      }      
    },
    methods: {
      ...mapMutations(['setCurrentPage']),
      observe(value: boolean): void { 
        this.show = value;
        if (value) this.setCurrentPage('About');
      },
    },
    computed: {
      animate(): string {
        return this.show ? 'show' : 'hide';
      }
    },
    components: {
      SnapObservable,
      GlassCard,
      Education,
      WhoAmI,
      Skills
    }
  }
</script>

<template>
  <SnapObservable @observable="observe" class="background">
    <div class="section-wrapper">
      <div :class="['profile-group', animate]">
        <GlassCard class="profile-data">
          <article class="profile-article">
            <WhoAmI/>
          </article>
        </GlassCard>
        <GlassCard class="profile-data">
          <article class="profile-article">
            <Education/>
          </article>
        </GlassCard>
      </div>
      <div :class="['profile-group', 'skills', animate]">
        <GlassCard class="profile-data">
          <article class="profile-article">
            <Skills/>
          </article>
        </GlassCard>
      </div>
    </div>
  </SnapObservable>
</template>

<style scoped>
  @import './styles.module.scss';
</style>