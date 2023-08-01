<script lang="ts">
  import path from "path";
  export default {
    name: "OSWindow",
    props: ["title", "imgs"],
    data() {
      return { 
        index: 0 as number,
        grabbing: false as boolean
      }
    },
    methods: {
      getImgName(img) {
        return img.slice(img.lastIndexOf("/") + 1)
      },
      scrollOnGrabbing(evt: any) {
        if (!this.grabbing) return
        const { tabList } = this.$refs
        const { left } = tabList.getBoundingClientRect()
        tabList.scrollLeft = evt.x - left
      }
    },
    computed: {
      getFilePath() {
        const currentImage = this.imgs[this.index];
        return `> public > ${this.title} > ${this.getImgName(currentImage)}`
      }
    }
  }
</script>

<template>
  <section class="window-frame">
    <header class="window-header">
      <section class="header-top">
        <ul ref="tabList" :class="['window-tabs', {grabbing}]" 
          @mousedown="grabbing=true"
          @mouseup="grabbing=false"
          @mousemove="scrollOnGrabbing"
        >
          <li v-for="(img, idx) in imgs">
            <h4 @click="index = idx" :class="['window-tab', idx === index ? 'active': null]">
              {{ getImgName(img) }}
            </h4>
          </li>
        </ul>
        <span class="window-actions"/>
      </section>
      <section class="header-bottom">
        <p>{{ getFilePath }}</p>
      </section>
    </header>
    <img :src="imgs[index]" alt="typed" class="cover"/>
  </section>
</template>

<style scoped>
  @import "./styles.module.scss";
</style>