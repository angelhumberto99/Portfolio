<script lang="ts">
  import ListOfBadges from '../../ListOfBadges/ListOfBadges.vue';
  export default {
    name: 'Overlay',
    props: ['close', 'data', 'style'],
    methods: {
      handleClose() { this.$emit('handleClose') }
    },
    components: {
      ListOfBadges
    }
  }
</script>

<template>
  <div @click="handleClose"
    :class="['overlay', {close: !close}]"
    :style="style"
  >
    <div @click.stop class="overlay-content">
      <header class="overlay-header">
        <h2>
          <span>
            {{ data?.title }}
          </span>
          <button @click="handleClose">
            <font-awesome-icon :icon="['fas', 'xmark']" />
          </button>
        </h2>
        <h4>{{ data?.date }}</h4>
      </header>
      <section class="overlay-body">
        <slot/>
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