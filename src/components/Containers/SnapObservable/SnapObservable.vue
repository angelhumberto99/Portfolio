<script lang="ts">
  export default {
    name: "SnapObservable",
    data() {
      return {
        observer: null as IntersectionObserver | null
      };
    },
    methods: {
      setIntersectionObserver: function (rootMargin = "-1px") {
        const observableRef = this.$refs.observableRef as HTMLDivElement;
        // Prevent duplicate observers
        if (this.observer !== null || observableRef === null) return;

        // Emit everytime this component shows on screen
        this.observer = new IntersectionObserver((entries) => {
          this.$emit("observable", entries[0].isIntersecting);
        }, { rootMargin })
        this.observer.observe(observableRef);
      }
    },
    mounted() {
      this.setIntersectionObserver();
    },
    unmounted() {
      if (this.observer === null) return;
      this.observer.disconnect();
    }
  }
</script>

<template>
  <div ref="observableRef" class="snap-wrapper">
    <slot/>
  </div>
</template>

<style scoped>
  @import './styles.module.scss';
</style>