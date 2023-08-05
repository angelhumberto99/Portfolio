<script lang="ts">
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: "Header",
    data() {
      return {
        showMenu: false as boolean,
        xPosition: 0 as number,
        currentWidth: 0 as number,
        currentHeight: 0 as number,
        pages: [
          "Profile",
          "About",
          "Projects",
          "Contact"
        ] as Array<string>,
      }
    },
    methods: {
      ...mapMutations(['setCurrentPage']),
      toggleMenu(): void {
        if (this.showMenu === null) {
          this.showMenu = false
          return
        }
        this.showMenu = !this.showMenu
      },
      hideMenu(): void {
        this.showMenu = false
      },
      setHover(): void {
        const anchors = this.$refs.page as Array<HTMLAnchorElement>
        const currentAnchor = anchors.find(e => e.innerText === this.currentPage)
        if (!currentAnchor) return
        const ul = this.$refs.listRef as HTMLUListElement
        const navbar = this.$refs.navRef as HTMLElement
        const { width, height, x: anchorX } = currentAnchor.getBoundingClientRect();
        const { x: listX } = ul.getBoundingClientRect();
        if (navbar.getBoundingClientRect().width < 768) return
        this.currentWidth = width;
        this.currentHeight = height;
        this.xPosition = anchorX - listX;
      },
      setCurrentPageEvent(event: MouseEvent): void {
        const anchor = event.target as HTMLAnchorElement
        this.setCurrentPage(anchor.innerText)
      },
    },
    computed: {
      getHover(): string {
        return `
          --height-anchor: ${this.currentHeight}px;
          --width-anchor: ${this.currentWidth}px;
          --x-position: ${this.xPosition}px;
        `;
      },
      ...mapState(['currentPage'])
    },
    mounted() {
      const { hash } = globalThis.location
      this.setCurrentPage(hash.replace("#", ""))
      this.setHover()
    },
    watch: {
      currentPage() { this.setHover() }
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
            <a @click="setCurrentPageEvent($event)"
              ref="page"
              :href="`#${page}`">
              {{page}}
            </a>
          </li>
        </template>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  @import "./styles.module.scss";
</style>