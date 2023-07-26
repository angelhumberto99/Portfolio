<script lang="ts">
  export default {
    name: "Header",
    data() {
      return {
        hideMenu: true
      }
    },
    methods: {
      toggleMenu: function() {
        this.hideMenu = !this.hideMenu
      }
    }
  }
</script>

<template>
  <header>
    <nav>
      <h1>
        <template class="desktop">
          <a href="#Profile">
            <font-awesome-icon :icon="['fas', 'code']" />
          </a>
        </template>
        <template class="mobile">
          <button @click="toggleMenu" @blur="toggleMenu">
            <font-awesome-icon :icon="['fas', 'bars']" />
          </button>
        </template>
      </h1>
      <ul :class="['menu', {hideMenu}]" >
        <li>
          <a href="#Profile">Profile</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  @import "./styles.module.scss";
</style>