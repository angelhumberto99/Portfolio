<script lang="ts">
  import technologies from '../../assets/technologies.json';
  import { hexToRGB } from '../../utils/hexToRGB';

  interface Technology {
    type: string;
    name: string;
    iconName: string;
    color: string;
  }

  export default {
    name: 'Skills',
    data() {
      return {
        icons: [] as Array<Technology>
      }      
    },
    methods: {
      getColor(color: string): string {
        return hexToRGB(color);
      }
    },
    mounted() {
      this.icons = technologies as Array<Technology>
    }
  }
</script>

<template>
  <h2>Skills</h2>
  <hr/>
  <h4>Technologies</h4>
  <div class="technologies">
    <template v-for="icon in icons">
      <div class="icon" :style="[{'--color': getColor(icon.color)}]">
        <font-awesome-icon v-if="icon.type == 'fa'" :icon="['fab', icon.iconName]"/>
        <i v-else :class="[`devicon-${icon.iconName}`, 'programming-icon']"/>
        <span>{{ icon.name }}</span>
      </div>
    </template>
  </div>
  <h4>Languajes</h4>
  <ul>
    <li>Spanish - Native speaker.</li>
    <li>English - Advanced.</li>
    <li>German - Conversational.</li>
  </ul>
</template>

<style scoped>
  @import './styles.module.scss';
</style>