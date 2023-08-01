<script lang="ts">
  export default {
    name: "Header",
    data() {
      return {
        showMenu: false as Boolean,
        xPosition: 0 as number,
        currentWidth: 0 as number,
        currentHeight: 0 as number,
        pages: [
          "Profile",
          "About",
          "Projects",
          "Contact"
        ]
      }
    },
    methods: {
      toggleMenu: function() {
        if (this.showMenu === null) {
          this.showMenu = false
          return
        }
        this.showMenu = !this.showMenu
      },
      hideMenu: function() {
        this.showMenu = false
      },
      setHover: function({target}: any) {
        const anchor = target as HTMLAnchorElement
        const ul = this.$refs.listRef as HTMLUListElement
        const navbar = this.$refs.navRef as HTMLElement
        const { width, height, x: anchorX } = anchor.getBoundingClientRect();
        const { x: listX } = ul.getBoundingClientRect();
        if (navbar.getBoundingClientRect().width < 768) return
        this.currentWidth = width;
        this.currentHeight = height;
        this.xPosition = anchorX - listX;
      }
    },
    computed: {
      getHover: function() {
        return `
          --height-anchor: ${this.currentHeight}px;
          --width-anchor: ${this.currentWidth}px;
          --x-position: ${this.xPosition}px;
        `;
      }
    }
  }
</script>

<template>
  <header>
    <nav ref="navRef">
      <h1>
        <template class="desktop">
          <a href="#Profile">
            <font-awesome-icon :icon="['fas', 'code']" />
          </a>
        </template>
        <template class="mobile">
          <button @click="toggleMenu" @blur="hideMenu">
            <font-awesome-icon :icon="['fas', 'bars']" />
          </button>
        </template>
      </h1>
      <ul :class="['menu', {showMenu}]" ref="listRef">
        <li class="hover-anchor" :style="getHover"></li>
        <template v-for="page in pages">
          <li>
            <a @click="setHover" :href="`#${page}`">{{page}}</a>
          </li>
        </template>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  @import "./styles.module.scss";
</style>