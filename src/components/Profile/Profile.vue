<script lang='ts'>
  import { mapMutations } from 'vuex';
  import { SnapObservable } from '../Containers';
  import AnchorCover from '../AnchorCover/AnchorCover.vue';
  export default {
    name: 'Profile',
    data() {
      return { 
        show: false as boolean,
        hover: false as boolean
      }
    },
    methods: {
      ...mapMutations(['setCurrentPage']),
      observe(value: boolean): void { 
        this.show = value
        if (value) this.setCurrentPage('Profile')
      },
      handleMouseEnter(): void {
        this.hover = true;
      },
      handleMouseLeave(): void {
        this.hover = false;
      }
    },
    computed: {
      getGrayFilter(): string {
        return this.hover ? 'gray-filter': '';
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
    <div class="scrollable-container">
      <section class="container">
        <section class="data-container">
          <div class="top-layer">
            <header :class="show?'show':'hide'" style="--delay: .8s">
              <h1>FRONTEND DEVELOPER</h1>
            <h4>André Ángel Humberto Gutiérrez Alatorre</h4>
            </header>
            <p :class="show?'show':'hide'" style="--delay: 1s">
              Experienced Computer Engineer in web application development,
              focused on creating responsive, complex, interactive
              and attractive user interfaces.
            </p>
          </div>
          <footer class="links-footer">
            <AnchorCover 
              @mouseenter="handleMouseEnter"
              @mouseleave="handleMouseLeave"
              color="#1da1f2" :animate="show" delay=".5s"
              href="https://www.linkedin.com/in/andr%C3%A9-%C3%A1ngel-humberto-guti%C3%A9rrez-alatorre-014224240/" 
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </AnchorCover>
            <AnchorCover
              @mouseenter="handleMouseEnter"
              @mouseleave="handleMouseLeave"
              color="#6e5dd8" :animate="show" delay=".8s"
              href="https://github.com/angelhumberto99" target="_blank">
              <font-awesome-icon :icon="['fab', 'github']" />
            </AnchorCover>
            <AnchorCover
              @mouseenter="handleMouseEnter"
              @mouseleave="handleMouseLeave"
              color="#ffa500" :animate="show" delay="1.1s"
              href="https://drive.google.com/file/d/1e29hdOvyOlUUo0ESmFFlHijpqtNCCMEm/view" target="_blank">
              <span class="cv">CV</span>
            </AnchorCover>
          </footer>
        </section>
        <section :class="['image-container', show? 'img-show': 'img-hide']">
          <div class="blob">
            <img src="@/assets/profile-first.png"
              alt="profile image" :class="getGrayFilter"
            />
          </div>
        </section>
      </section>
    </div>
  </SnapObservable>
</template>

<style scoped>
  @import './styles.module.scss';
</style>