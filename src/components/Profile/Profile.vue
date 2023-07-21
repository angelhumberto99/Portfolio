<script lang="ts">
  import { GlassCard, SnapObservable } from '../Containers';
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
    <section class="container">
      <section class="data-container">
        <header>
          <h1>FRONTEND DEVELOPER</h1>
          <h4>André Ángel Humberto Gutiérrez Alatorre</h4>
        </header>
        <p>
          Experienced Computer Engineer in web application development,
          focused on creating responsive, complex, interactive
          and attractive user interfaces.
        </p>
        <footer class="links-footer">
          <a class="circular-anchor" href="https://www.linkedin.com/in/andr%C3%A9-%C3%A1ngel-humberto-guti%C3%A9rrez-alatorre-014224240/" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
          <a class="circular-anchor" href="https://github.com/angelhumberto99" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </footer>
      </section>
      <section class="image-container">
        <img src="../../assets/profile-placeholder.png" alt="profile image"/>
      </section>
    </section>
    <footer class="profile-footer">
      <font-awesome-icon :icon="['fas', 'chevron-down']" />
    </footer>
  </SnapObservable>
</template>

<style scoped>
  @import "./styles.module.scss";
</style>