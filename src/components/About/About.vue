<script lang='ts'>
  import { mapMutations } from 'vuex';
  import { GlassCard, SnapObservable } from '../Containers';
  import technologies from '../../assets/technologies.json';

  interface Technology {
    type: string;
    name: string;
    iconName: string;
  }

  export default {
    name: 'About',
    data() {
      return { 
        show: false as boolean,
        icons: [] as Array<Technology>
      }      
    },
    methods: {
      ...mapMutations(['setCurrentPage']),
      observe(value: boolean): void { 
        this.show = value;
        if (value) this.setCurrentPage('About');
      }
    },
    mounted() {
      this.icons = technologies as Array<Technology>
    },
    components: {
      SnapObservable,
      GlassCard
  }
  }
</script>

<template>
  <SnapObservable @observable="observe" class="background">
    <div class="section-wrapper">
      <div class="profile-group">
          <GlassCard class="profile-data">
            <article class="profile-article">
              <h2>Who am I?</h2>
              <hr/>
              <p>
                Computer engineer with great skills in frontend development, highly
                motivated to innovate and implement high quality pieces of software.
              </p>
              <p>
                Self-taught and passionate about improving and learning
                new skills that add to my development as a programmer.
              </p>
              <p>
                Prepared to add value to the projects that are presented
                to me and ready to start working.
              </p>
            </article>
          </GlassCard>
          <GlassCard class="profile-data">
            <article class="profile-article">
              <h2>Education</h2>
              <hr/>
              <h4>Computer Engineering</h4>
              <p>2018 - 2022, Centro Universitario de Ciencias Exactas e Ingenierías (CUCEI)</p>
              <h4>Career contents</h4>
              <section class="education-contents">
                <ul>
                <li>Data Structures and Algorithms</li>
                <li>Distribuited and Intelligent Systems</li>
                <li>Computer Architecture</li>
                <li>Databases</li>
                <li>Software Engineering</li>
                <li>Web Development</li>
              </ul>
              <img class="udg-logo" src="../../assets/UDG-Logo.png" alt="UDG Logo"/>
            </section>
          </article>
        </GlassCard>
      </div>
      <div class="profile-group skills">
        <GlassCard class="profile-data">
          <article class="profile-article">
            <h2>Skills</h2>
            <hr/>
            <h4>Technologies</h4>
            <div class="technologies">
              <div class="icon" v-for="icon in icons">
                <font-awesome-icon v-if="icon.type == 'fa'" :icon="['fab', icon.iconName]"/>
                <i v-else :class="[`devicon-${icon.iconName}`, 'programming-icon']"></i>
                <span>{{ icon.name }}</span>
              </div>
            </div>
            <h4>Languajes</h4>
            <ul>
              <li>Spanish - Native speaker</li>
              <li>English - Fluent</li>
              <li>German - Conversational</li>
            </ul>
            </article>
        </GlassCard>
      </div>
    </div>
  </SnapObservable>
</template>

<style scoped>
  @import './styles.module.scss';
</style>