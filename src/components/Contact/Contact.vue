<script lang='ts'>
  import { mapMutations } from 'vuex';
  import { SnapObservable } from '../Containers';
  export default {
    name: 'Contact',
    data() {
      return { show: false as boolean }      
    },
    methods: {
      ...mapMutations(['setCurrentPage']),
      observe(value: boolean): void { 
        this.show = value;
        if (value) this.setCurrentPage('Contact');
      }
    },
    components: {
      SnapObservable
    }
  }
</script>

<template>
  <SnapObservable @observable="observe" class="background">
    <section class="content">
      <h1>Contact</h1>
    </section>
  </SnapObservable>
</template>

<style scoped>
  @import './styles.module.scss';
</style>