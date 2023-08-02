<script lang="ts">
  export default {
    name: "OSWindow",
    props: ["title", "imgs"],
    data() {
      return { 
        index: 0 as number,
        grabbing: false as boolean,
        clickPosX: 0 as number,
        currentScrollX: 0 as number,
        startClick: 0 as Date | number
      }
    },
    methods: {
      getImgName(img: string) {
        return img?.slice(img?.lastIndexOf("/") + 1)
      },
      scrollOnGrabbing(evt: any) {
        if (!this.grabbing) return
        const { tabList }: {tabList: HTMLUListElement } = this.$refs
        const dx = this.clickPosX - evt.x
        tabList.scrollLeft = this.currentScrollX + dx
      },
      handleMouseDown(evt: any) {
        const { tabList }: {tabList: HTMLUListElement } = this.$refs
        this.startClick = new Date();
        this.clickPosX = evt.x
        this.currentScrollX = tabList.scrollLeft
        this.grabbing = true
      },
      handleMouseUp(index: number) {
        const currentTime = new Date()
        this.grabbing = false
        if ((currentTime - this.startClick) < 500 && index >= 0) {
          this.index = index
        }
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
          @mouseup="handleMouseUp"
          @mousedown="handleMouseDown"
          @mousemove="scrollOnGrabbing"
          @mouseleave="handleMouseUp"
        >
          <li v-for="(img, idx) in imgs">
            <h4 @click="handleMouseUp(idx)" :class="['window-tab', idx === index ? 'active': null]">
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