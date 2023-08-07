<script lang='ts'>
  import { mapMutations } from 'vuex';
  import { SnapObservable } from '../Containers';
  import AnchorCover from '../AnchorCover/AnchorCover.vue';
  export default {
    name: 'Profile',
    data() {
      return { show: false as boolean }
    },
    methods: {
      ...mapMutations(['setCurrentPage']),
      observe(value: boolean): void { 
        this.show = value
        if (value) this.setCurrentPage('Profile')
      }
    },
    components: {
      SnapObservable,
      AnchorCover
    }
  }
</script>

<template>
  <SnapObservable @observable="observe" class="background">
    <section class="container">
      <section class="data-container">
        <header :class="show?'show':'hide'" style="--delay: .8s">
          <h1>FRONTEND DEVELOPER</h1>
          <h4>André Ángel Humberto Gutiérrez Alatorre</h4>
        </header>
        <p :class="show?'show':'hide'" style="--delay: 1s">
          Experienced Computer Engineer in web application development,
          focused on creating responsive, complex, interactive
          and attractive user interfaces.
        </p>
        <footer class="links-footer">
          <AnchorCover color="#1da1f2" :animate="show" delay=".5s"
            href="https://www.linkedin.com/in/andr%C3%A9-%C3%A1ngel-humberto-guti%C3%A9rrez-alatorre-014224240/" 
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </AnchorCover>
          <AnchorCover color="#6e5dd8" :animate="show" delay="1s"
            href="https://github.com/angelhumberto99" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" />
          </AnchorCover>
        </footer>
      </section>
      <section :class="['image-container', show? 'img-show': 'img-hide']">
        <div class="blob">
          <img src="../../assets/profile-placeholder.png" alt="profile image"/>
        </div>
      </section>
    </section>
  </SnapObservable>
</template>

<style scoped>
  @import './styles.module.scss';
</style>