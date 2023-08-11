<script lang="ts">
  export default {
    name: 'MobileCarousel',
    props: ['location', 'imgs', 'close'],
    data() {
      return {
        index: 0 as number
      }
    },
    methods: {
      handleClick(value: boolean): void {
        this.index += value ? 1 : -1;
      },
      handleDisabled(value: boolean): boolean {
        const length = this.imgs.length;
        if (value) 
          return this.index + 1 >= length;
        return this.index - 1 < 0;
      }
    },
    computed: {
      getCurrentImage(): string {
        return `${this.location}/${this.imgs[this.index]}`
      },
      singleImage(): boolean {
        return this.imgs.length > 1;
      }
    },
    watch: {
      imgs() { this.index = 0;}
    }
  }
</script>

<template>
  <div class="content-wrapper">
    <button class="index-button" v-if="singleImage"
      @click="handleClick(false)"
      :disabled="handleDisabled(false)"
    >
      <font-awesome-icon :icon="['fas', 'chevron-left']" />
    </button>
    <section :class="['phone-frame', {close}]">
      <div class="volume">
        <span class="btn up"/>
        <span class="btn down"/>
      </div>
      <img class="cover" :src="getCurrentImage" :alt="`Images for ${location}`"/>
      <span class="btn power"/>
      <span class="btn home"/>
    </section>
    <button class="index-button" v-if="singleImage"
      @click="handleClick(true)"
      :disabled="handleDisabled(true)"
    >
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
    </button>
  </div>
</template>

<style scoped>
  @import './styles.module.scss';
</style>