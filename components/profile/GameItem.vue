<template>
  <div class="profile__content-game_item">
    <div class="profile__content-game_icon">
      <img :src="require(`@/assets/images/${item.icon}`)" alt="" />
    </div>
    <div class="profile__content-game_content">
      <div class="profile__content-game_title">
        {{ item.title }}
      </div>
      <div class="profile__content-game_input">
        <div
          class="profile__content-game_subinput"
          :style="{ width: `${item.line}%` }"
        ></div>
      </div>
      <p class="profile__content-game_text">
        {{ item.date }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>
