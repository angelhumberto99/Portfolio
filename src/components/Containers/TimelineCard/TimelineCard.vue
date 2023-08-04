<script lang="ts">
  import { hexToRGB } from "../../../utils/hexToRGB.ts"
  export default {
    name: "TimelineCard",
    props: ["reversed", "data", "last", "close", "show", "delay"],
    data() {
      return {
        disapair: false as boolean,
        cardHeight: 0 as number
      }
    },
    methods: {
      handleClick(): void {
        this.disapair = !this.disapair
        this.$emit("handleClick", this.data.title)
      }
    },
    computed: {
      getDisapairDirection(): string | boolean {
        if (!this.disapair) return false
        return this.reversed? "disapair-reversed" : "disapair";
      },
      getColor(): string {
        return hexToRGB(this.data.color)
      }
    },
    mounted() {
      const card = this.$refs.cardHeight as HTMLDivElement
      const { height } = card.getBoundingClientRect()
      this.cardHeight = height
    },
    watch: {
      close(): void { this.disapair = !this.close }
    }
  }
</script>

<template>
  <div ref="cardHeight" 
    :class="['timestamp', {reversed, last}, getDisapairDirection, show? 'show': 'hidden']"
    :style="`
      --dark-color: rgb(${getColor});
      --light-color: rgba(${getColor}, 0.5);
      --delay: 0.${delay}s;
    `"
  >
    <button :class="['timeline-button', disapair ? null: 'line-show']" 
      @click="handleClick"
      :style="`--card-height: ${cardHeight}px`"
    >
      <div class="text">Learn More</div>
      <font-awesome-icon :icon="['fas', 'code']" />
    </button>
    <div :class="['timeline-card', {reversed}]" >
      <section class="date">
        <h2>{{ data.date }}</h2>
      </section>
      <section class="data">
        <header>
          <h3>{{ data.title }}</h3>
        </header>
        <p class="description">{{ data.description }}</p>
        <footer class="badges">
          <span class="badge" v-for="badge in data.technologies">
            {{ badge }}
          </span>
        </footer>
      </section>
    </div>
  </div>
</template>

<style scopd>
  @import "./styles.module.scss";
</style>