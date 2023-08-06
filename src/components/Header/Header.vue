<script lang='ts'>
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'Header',
    data() {
      return {
        showMenu: true as boolean,
        xPosition: 0 as number,
        yPosition: 10 as number,
        currentWidth: 0 as number,
        currentHeight: 0 as number,
        headerHeight: 0 as number,
        windowWidth: 0 as number,
        pages: [
          {
            name: 'Profile',
            icon: 'user'
          }, {
            name: 'About',
            icon: 'user'
          }, {
            name: 'Projects',
            icon: 'user'
          }, {
            name: 'Contact',
            icon: 'user'
          }
        ],
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
      hideMenu(): void { this.showMenu = false },
      setHover(): void {
        if (!this.anchors) return
        const currentAnchor =  this.anchors.find(e => e.innerText === this.currentPage);
        if (!currentAnchor) return;

        const ul = this.$refs.listRef as HTMLUListElement;
        const navbar = this.$refs.navRef as HTMLElement;
        const {
          width:anchorWidth,
          height: anchorHeight,
          x: anchorX,
          y: anchorY 
        } = currentAnchor.getBoundingClientRect();

        const {
          x: listX,
          y: listY
        } = ul.getBoundingClientRect();

        const {
          height: headerHeight
        } = navbar.getBoundingClientRect();

        this.currentWidth = anchorWidth;
        this.currentHeight = anchorHeight;
        this.xPosition = anchorX - listX;
        this.yPosition = anchorY - listY;
        this.headerHeight = headerHeight;

        if (this.windowWidth < 768)
          this.xPosition = 0;
        else
          this.yPosition = 0;
      },
      setCurrentPageEvent(event: MouseEvent): void {
        const anchor = event.target as HTMLAnchorElement
        this.setCurrentPage(anchor.innerText)
      },
      onResize(): void {
        this.windowWidth = globalThis.innerWidth;
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
      })
      this.onResize();
      this.setHover();
    },
    watch: {
      currentPage() { this.setHover(); },
      windowWidth() { this.setHover(); }
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
                <!-- <font-awesome-icon v-if="windowWidth < 768"
                :icon="[page.name === currentPage ? 'fas': 'far', page.icon]" /> -->
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