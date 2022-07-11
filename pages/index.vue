<template>
  <div class="main" :class="'page-' + getActivePage + ''" ref="main">
    <div class="improve__arrows">
      <button
        class="improve__arrows-btn arrow-next"
        @click="() => changePage('next')"
      >
        <img src="@/assets/images/arrow.svg" alt="" />
      </button>
      <button
        class="improve__arrows-btn arrow-prev"
        @click="() => changePage('prev')"
      >
        <img src="@/assets/images/arrow.svg" alt="" />
      </button>
    </div>
    <div class="main-wrapper">
      <div class="main-wrapper-block">
        <BannerPage :active="getActivePage" />
      </div>
      <div class="main-wrapper-block">
        <ImprovePage :active="getActivePage" />
      </div>
      <div class="main-wrapper-block">
        <CustomPage :active="getActivePage" />
      </div>
      <div class="main-wrapper-block">
        <BuyPage :active="getActivePage" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import BannerPage from '../components/pages/Banner.vue'
import ImprovePage from '../components/pages/Improve.vue'
import CustomPage from '../components/pages/Custom.vue'
import BuyPage from '../components/pages/Buy.vue'

export default {
  data: () => {
    return {
      delay: true,
    }
  },
  computed: {
    ...mapGetters(['getActivePage']),
  },
  components: {
    BannerPage,
    ImprovePage,
    BuyPage,
    CustomPage,
  },
  methods: {
    changePage(arrow) {
      if (arrow == 'next') {
        switch (this.getActivePage) {
          case 'improve':
            this.$store.dispatch('activePage', 'banner')
            break
          case 'custom':
            this.$store.dispatch('activePage', 'improve')
            break
          case 'buy':
            this.$store.dispatch('activePage', 'custom')
            break
        }
      } else {
        switch (this.getActivePage) {
          case 'banner':
            this.$store.dispatch('activePage', 'improve')
            break
          case 'improve':
            this.$store.dispatch('activePage', 'custom')
            break
          case 'custom':
            this.$store.dispatch('activePage', 'buy')
            break
        }
      }
    },
    changeScrollPage() {
      this.$refs.main.addEventListener('wheel', (e) => checkScrollDirection(e))

      const checkScrollDirection = (e) => {
        if (window.screen.height > 850 && this.delay) {
          this.delay = false
          setTimeout(() => {
            this.delay = true
          }, 500)
          if (checkScrollDirectionIsUp(e)) {
            switch (this.getActivePage) {
              case 'improve':
                this.$store.dispatch('activePage', 'banner')
                break
              case 'custom':
                this.$store.dispatch('activePage', 'improve')
                break
              case 'buy':
                this.$store.dispatch('activePage', 'custom')
                break
            }
          } else {
            switch (this.getActivePage) {
              case 'banner':
                this.$store.dispatch('activePage', 'improve')
                break
              case 'improve':
                this.$store.dispatch('activePage', 'custom')
                break
              case 'custom':
                this.$store.dispatch('activePage', 'buy')
                break
            }
          }
        } else this.$refs.main.removeEventListener('wheel', (e) => {})
      }

      function checkScrollDirectionIsUp(event) {
        if (event.wheelDelta) {
          return event.wheelDelta > 0
        }
        return event.deltaY < 0
      }
    },
  },
  mounted() {
    this.changeScrollPage()
  },
  beforeDestroy() {
    this.$refs.main.removeEventListener('wheel', () => {})
  },
}
</script>
