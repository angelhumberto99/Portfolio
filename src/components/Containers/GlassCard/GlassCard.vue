<script lang='ts'>
  export default {
    name:'GlassCard',
    props: ['animate', 'showClass', 'hideClass'],
    data() {
      return {
        xRotation: 0 as number,
        yRotation: 0 as number,
        distance: 0 as number,
        cardBounds: null as DOMRect | null,
        glowFirst: 0 as number,
        glowSecond: 0 as number,
      }
    },
    methods: {
      setBounding(): void {
        this.cardBounds = (this.$refs.card as HTMLElement).getBoundingClientRect()
      },
      euclideanDistance(x: number, y: number): number {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
      },
      handlePosition(evt: MouseEvent): void {
        if (this.cardBounds === null) return;
        const { x, y, height, width } = this.cardBounds

        const card = {
          x: evt.clientX - x,
          y: evt.clientY - y
        }

        const center = {
          x: card.x - width / 2,
          y: card.y - height / 2
        }

        const distance = this.euclideanDistance(center.x, center.y)

        this.yRotation = center.y / 100;
        this.xRotation = -center.x / 100;
        this.distance = Math.log(distance) * 2
        this.glowFirst = center.x + width / 2
        this.glowSecond = center.y + height / 2
      }
    },
    computed: {
      getAnimation(): string {
        return this.animate ? this.showClass: this.hideClass
      },
      rotation(): string {
        return `
          --x-rotation: ${this.xRotation};
          --y-rotation: ${this.yRotation};
          --distance: ${this.distance}deg;
          --glow-first: ${this.glowFirst}px;
          --glow-second: ${this.glowSecond}px;
        `
      }
    }
  }
</script>

<template>
  <section ref="card"
    @mouseenter="setBounding"
    @mousemove="handlePosition($event)" 
    :class="['card', getAnimation]" :style="rotation">
      <slot/>
  </section>
</template>

<style scoped>
  @import './style.module.scss';
</style>