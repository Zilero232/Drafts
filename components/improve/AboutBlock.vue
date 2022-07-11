<template>
  <div class="improve__wrapper-about">
    <div
      class="improve__wrapper-about_item"
      v-for="(item, id) in weapons"
      :key="id"
      @click="$emit('changeBlockCustom', item.comparison)"
    >
      <div class="improve__wrapper-about_info">
        <div class="improve__wrapper-about_title">{{ item.title }}</div>
        <p class="improve__wrapper-about_name">{{ item.text }}</p>
      </div>
      <div class="improve__wrapper-about_img">
        <img :src="require(`@/assets/images/${item.img}`)" alt="" />
      </div>
      <div class="improve__wrapper-about_skins">{{ item.comparison.length }} скинов</div>
    </div>

    <!-- <button
      class="improve__wrapper-about_back"
      @click="$emit('changeBlockSelect')"
      :class="{arrowLowerBack: weapons.length > 6}"
    >
      <img src="@/assets/images/improve/back-icon.svg" alt="" />
    </button> -->
  </div>
</template>

<script>
export default {
  props: ['weapons'],
  methods: {},
}
</script>
