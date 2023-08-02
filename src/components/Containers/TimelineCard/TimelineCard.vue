<script lang="ts">
  export default {
    name: "TimelineCard",
    props: ["reversed", "data"],
    data() {
      return {
        disapair: false as boolean,
      }
    },
    methods: {
      handleClick: function() {
        this.disapair = !this.disapair
        this.$emit("handleClick", this.data.title)
      }
    },
    computed: {
      getDisapairDirection: function() {
        if (!this.disapair) return false
        return this.reversed? "disapair-reversed" : "disapair";
      }
    }
  }
</script>

<template>
  <div :class="['timestamp', {reversed}, getDisapairDirection]">
    <button @click="handleClick">js</button>
    <div :class="['timeline-card', {reversed}]">
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