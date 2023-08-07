<script lang='ts'>
  export default {
    name: 'OSWindowCarousel',
    props: ['location', 'imgs', 'close'],
    data() {
      return { 
        index: 0 as number,
        grabbing: false as boolean,
        clickPosX: 0 as number,
        currentScrollX: 0 as number,
        startClick: new Date() as Date
      }
    },
    methods: {
      scrollOnGrabbing(evt: MouseEvent): void {
        // Updates the scroll when the user grabs the tabs and moves it horizontally
        if (!this.grabbing) return;
        const tabList = this.$refs.tabList as HTMLUListElement;
        const dx = this.clickPosX - evt.x;
        tabList.scrollLeft = this.currentScrollX + dx;
      },
      handleMouseDown(evt: MouseEvent): void {
        // Get current mouse position and scroll progress
        const tabList = this.$refs.tabList as HTMLUListElement;
        this.startClick = new Date();
        this.clickPosX = evt.x;
        this.currentScrollX = tabList.scrollLeft;
        this.grabbing = true;
      },
      handleMouseUp(index = -1): void {
        // Checks if the user holds the mouse click or simply does a normal click
        const currentTime = new Date();
        this.grabbing = false;
        const LONG_CLICK_MS = 500;
        const elapsedTime = currentTime.getTime() - this.startClick.getTime();
        if (elapsedTime < LONG_CLICK_MS && index >= 0)
          this.index = index;
      },
      handleClose(type: string): void {
        this.$emit('handleClose', type);
      }
    },
    computed: {
      getFilePath(): string {
        const currentImage = this.imgs[this.index];
        return `> ${this.location.replace('/', ' > ')} > ${currentImage}`;
      },
      getFile(): string {
        const basePath = this.location.replace('public/', '');
        return `${basePath}/${this.imgs[this.index]}`;
      }
    },
    watch: {
      close(): void { this.index = 0; },
      imgs(): void { this.index = 0; }
    }
  }
</script>

<template >
  <section :class="['window-frame', {close}]">
    <header class="window-header">
      <section class="header-top">
        <ul 
          ref="tabList" :class="['window-tabs', {grabbing}]"
          @mouseup="handleMouseUp()"
          @mousedown="handleMouseDown($event)"
          @mousemove="scrollOnGrabbing($event)"
          @mouseleave="handleMouseUp()"
        >
          <li v-for="(img, idx) in imgs">
            <h4 @click="handleMouseUp(idx)" 
              :class="['window-tab', idx === index ? 'active': null]"
            >
              {{ img }}
            </h4>
          </li>
        </ul>
        <button @click="handleClose('minimize')" class="window-action minimize"/>
        <button @click="handleClose('maximize')" class="window-action maximize"/>
        <button @click="handleClose('close')" class="window-action"/>
      </section>
      <section class="header-bottom">
        <p>{{ getFilePath }}</p>
      </section>
    </header>
    <img :src="getFile" alt="typed" class="cover"/>
  </section>
</template>

<style scoped>
  @import './styles.module.scss';
</style>