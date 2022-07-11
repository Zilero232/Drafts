<template>
  <div class="enjouy-item">
    <div class="enjouy-item__top">
      <div class="enjouy-item__icon">
        <img :src="require(`@/assets/images/${item.icon}`)" alt="" />
      </div>
      <div class="enjouy-item__title">{{ item.title }}</div>

      <div
        class="enjouy-item__changer"
        @click="$emit('changeSwich')"
        :class="{ active: item.status }"
      >
        <div class="enjouy-item__changer-radius"></div>
      </div>
    </div>

    <div class="enjouy-item__bottom" v-if="false">
      <SettingsInputRange
        v-for="(item, id) in item.range"
        :key="id"
        :range="item"
      />
    </div>
  </div>
</template>

<script>
import SettingsInputRange from './SettingsInputRange.vue'

export default {
  props: ['item'],
  components: {
    SettingsInputRange,
  },
}
</script>
