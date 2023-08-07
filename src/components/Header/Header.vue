<script lang='ts'>
  import { mapState, mapMutations } from 'vuex';
  import pages from '../../assets/pages.json';
  import { Page } from '../../types';

  export default {
    name: 'Header',
    data() {
      return {
        showMenu: false as boolean,
        xPosition: 0 as number,
        yPosition: 0 as number,
        currentWidth: 0 as number,
        currentHeight: 0 as number,
        headerHeight: 0 as number,
        windowWidth: 0 as number,
        windowHeight: 0 as number,
        pages: pages as Array<Page>,
        anchors: null as null | Array<HTMLAnchorElement>
      }
    },
    methods: {
      ...mapMutations(['setCurrentPage']),
      toggleMenu(): void {
        if (this.showMenu === null) {
          this.showMenu = false;
          return;
        }
        this.showMenu = !this.showMenu;
      },
      hideMenu(): void { this.showMenu = false; },
      getCurrentAnchor(): HTMLAnchorElement | undefined {
        return this.anchors?.find(e => e.innerText.includes(this.currentPage));
      },
      setHeaderHeight(): void {
        const navbar = this.$refs.navRef as HTMLElement;
        const { height } = navbar.getBoundingClientRect();
        this.headerHeight = height;
      },
      calcHover(): void {
        const currentAnchor = this.getCurrentAnchor();
        if (!currentAnchor) return;

        const ul = this.$refs.listRef as HTMLUListElement;
        const { width, height, x: anchorX, y: anchorY } = currentAnchor.getBoundingClientRect();
        const { x: listX, y: listY } = ul.getBoundingClientRect();

        this.currentWidth = width;
        this.currentHeight = height;
        this.xPosition = anchorX - listX;
        this.yPosition = anchorY - listY;
      },
      setHover(): void {
        this.calcHover();
        this.setHeaderHeight();

        if (this.windowWidth < this.$options.MOBILE_MAX_WIDTH)
          this.xPosition = 0;
        else
          this.yPosition = 0;
      },
      setCurrentPageEvent(event: MouseEvent): void {
        const anchor = event.target as HTMLAnchorElement;
        this.setCurrentPage(anchor.innerText);
      },
      onResize(): void {
        this.windowWidth = globalThis.innerWidth;
        this.windowHeight = globalThis.innerHeight;
      },
      getIcon(page: Page): [string, string] {
        const active = page.name === this.currentPage;
        const { icon } = page;
        const [ outline, regular ] = icon.types;
        return [active ? regular: outline, icon.name];
      }
    },
    computed: {
      getHover(): string {
        return `
          --height-anchor: ${this.currentHeight}px;
          --width-anchor: ${this.currentWidth}px;
          --x-position: ${this.xPosition}px;
          --y-position: ${this.yPosition}px;
        `;
      },
      getHeaderHeight(): string {
        return `--header-height: ${this.headerHeight}px;`;
      },
      ...mapState(['currentPage'])
    },
    mounted() {
      this.anchors = this.$refs.page as Array<HTMLAnchorElement>;
      this.$nextTick(() => {
        globalThis.addEventListener('resize', this.onResize);
      });
      this.onResize();
      this.$options.MOBILE_MAX_WIDTH = 768;
    },
    watch: {
      currentPage() :void { this.setHover(); },
      windowWidth() :void { this.setHover(); },
      windowHeight() :void { this.setHover(); }
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
      <ul :class="['menu', {showMenu}]" ref="listRef" :style="getHeaderHeight">
        <li class="hover-anchor" :style="getHover"></li>
        <template v-for="page in pages">
          <li>
            <a @click="setCurrentPageEvent($event)"
              ref="page"
              :class="page.name === currentPage? 'active': null"
              :href="`#${page.name}`">
              <span>
                <font-awesome-icon v-if="windowWidth < $options.MOBILE_MAX_WIDTH"
                :icon="[...getIcon(page)]" />
                {{page.name}}
              </span>
            </a>
          </li>
        </template>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  @import './styles.module.scss';
</style>