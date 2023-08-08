<script lang='ts'>
  import { hexToRGB } from '../../../utils/hexToRGB.ts';
  import ListOfBadges from '../../ListOfBadges/ListOfBadges.vue';
  export default {
    name: 'TimelineCard',
    props: ['reversed', 'data', 'last', 'close', 'show', 'delay'],
    data() {
      return {
          disapair: false as boolean,
          cardHeight: 0 as number
      };
    },
    methods: {
      handleClick(): void {
          this.disapair = !this.disapair;
          this.$emit('handleClick', this.data, this.getColorScheme);
      }
    },
    computed: {
      getDisapairDirection(): string | boolean {
          if (!this.disapair)
              return false;
          return this.reversed ? 'disapair-reversed' : 'disapair';
      },
      getColor(): string {
          return hexToRGB(this.data.color);
      },
      getLineShow(): string | null {
          return this.disapair || !this.show ? null : 'line-show';
      },
      showDelayed(): string {
          return this.show ? 'show' : 'hidden';
      },
      getColorScheme(): string {
          return `
        --dark-color: rgb(${this.getColor});
        --light-color: rgba(${this.getColor}, 0.5);
        --delay: 0.${this.delay}s;
      `;
      },
      getCardHeight(): string {
          return `--card-height: ${this.cardHeight}px`;
      },
      formatDate(): string {
        const date = new Date(this.data.date)
        return date.toLocaleString('en', { month: 'long', year: 'numeric' })
      }
    },
    mounted() {
        const card = this.$refs.cardHeight as HTMLDivElement;
        const { height } = card.getBoundingClientRect();
        this.cardHeight = height;
    },
    watch: {
        close(): void { this.disapair = !this.close; }
    },
    components: { ListOfBadges }
}
</script>

<template>
  <div ref="cardHeight" 
    :class="['timestamp', {reversed, last}, getDisapairDirection, showDelayed]"
    :style="getColorScheme"
  >
    <button :class="['timeline-button', getLineShow]" 
      @click="handleClick"
      :style="getCardHeight"
    >
      <div class="text">Learn More</div>
      <font-awesome-icon :icon="['fas', 'code']" />
    </button>
    <div :class="['timeline-card', {reversed}]" >
      <section class="date">
        <h2>{{ formatDate }}</h2>
      </section>
      <section class="data">
        <header>
          <h3>{{ data.title }}</h3>
        </header>
        <p class="description">{{ data.description }}</p>
        <footer class="badges">
          <ListOfBadges :badges="data.technologies"/>
        </footer>
      </section>
    </div>
  </div>
</template>

<style scoped>
  @import './styles.module.scss';
</style>