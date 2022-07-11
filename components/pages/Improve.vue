<template>
  <section
    class="improve section-fixed"
    :class="{
      fullScreen: !select || !without,
      activePage: active == 'improve',
    }"
  >
    <div class="container">
      <div class="improve__top">
        <button
          class="improve__top-back btn"
          v-if="activeBlock != 0"
          @click="backBlock"
        >
          <span class="btn-icon">
            <img src="@/assets/images/back-arrow.png" alt="" />
          </span>
          <span>Назад</span>
        </button>
        <h2 class="improve__title">Skins Editor</h2>
      </div>

      <div class="improve__wrapper">
        <div class="improve__wrapper-block" v-if="activeBlock == 0">
          <SelectBlock
            @changeBlockCustom="
              (agents) => changeBlockCustom(agents, 'without')
            "
            @changeBlockCustomSelect="
              (select) => changeBlockCustomSelect(select, 'select')
            "
            @changeBlockAbout="changeBlockAbout"
          />
        </div>

        <div class="improve__wrapper-block" v-if="activeBlock == 1">
          <AboutBlock
            @changeBlockCustom="changeBlockCustom"
            @changeBlockSelect="changeBlockSelect"
            :weapons="weapons"
          />
        </div>

        <div class="improve__wrapper-block" v-if="activeBlock == 2">
          <CustomBlock
            :without="without"
            :select="select"
            :weapons="weapons"
            :comparison="comparison"
            @changeBlockAbout="changeBlockAbout"
            @changeBlockSelect="changeBlockSelect"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SelectBlock from '../improve/SelectBlock.vue'
import AboutBlock from '../improve/AboutBlock.vue'
import CustomBlock from '../improve/CustomBlock.vue'

export default {
  props: ['active'],
  data: () => {
    return {
      activeBlock: 0,
      without: true,
      select: true,
      fullScreen: false,
      weapons: [],
      comparison: [],
    }
  },
  components: {
    SelectBlock,
    AboutBlock,
    CustomBlock,
  },
  methods: {
    backBlock() {
      if (this.activeBlock == 1) this.activeBlock = 0
      else if ((this.activeBlock == 2 && !this.without) || !this.select) {
        this.activeBlock = 0
        this.without = true
        this.select = true
      } else if ((this.activeBlock == 2 && this.without) || this.select)
        this.activeBlock = 1
    },
    changeBlockAbout(weapons) {
      this.weapons = weapons
      this.activeBlock = 1
    },
    changeBlockCustom(comparison, without) {
      this.comparison = comparison
      this.activeBlock = 2
      without ? (this.without = false) : (this.without = true)
    },
    changeBlockCustomSelect(comparison, select) {
      this.comparison = comparison
      this.activeBlock = 2
      select ? (this.select = false) : (this.select = true)
    },
    changeBlockSelect() {
      this.weapons = []
      this.without = true
      this.select = true
      this.activeBlock = 0
    },
  },
}
</script>
