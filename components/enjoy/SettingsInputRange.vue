<template>
  <div class="enjouy-item__bottom-block">
    <div class="enjouy-item__bottom-block_info">
      <div class="enjouy-item__bottom-block_title">
        {{ range.title }}
      </div>
      <div class="enjouy-item__bottom-block_value">
        {{ range.value }}
      </div>
    </div>

    <div class="enjouy-item__bottom-block_radio">
      <input
        type="range"
        v-model="range.value"
        :style="{
          backgroundSize: `${
            ((range.value - min) * 100) / (max - min) + '% 100%'
          }`,
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputRange',
  props: ['range'],
  data: () => {
    return {
      inputValue: 0,
      min: 0,
      max: 100,
    }
  },
}
</script>
