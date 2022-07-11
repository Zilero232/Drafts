<template>
  <div class="main main-profile">
    <section class="profile">
      <div class="container">
        <h2
          class="profile__title"
          v-for="(item, id) in titleComponent"
          :key="id"
        >
          <span v-if="isOpenBlock == id">
            {{ item.title }}
          </span>
        </h2>
        <div class="profile__wrapper">
          <div class="profile__content-tabs">
            <button
              class="profile__content-tabs_btn"
              @click="isOpenBlock = id"
              v-for="(btn, id) in arrayBtn"
              :key="id"
              :class="{ active: isOpenBlock == id }"
            >
              <span>{{ btn.title }}</span>
            </button>
          </div>

          <div class="profile__content">
            <div class="profile__content-block" v-if="isOpenBlock == 0">
              <ProfileStatus />
            </div>

            <div class="profile__content-block" v-if="isOpenBlock == 1">
              <ProfileDownload />
            </div>

            <div class="profile__content-block" v-if="isOpenBlock == 2">
              <ProfileRefferal />
            </div>

            <div class="profile__content-block" v-if="isOpenBlock == 3">
              <ProfileQuestion />
            </div>

            <div class="profile__content-block" v-if="isOpenBlock == 4">
              <ProfileSettings />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import GameItem from '../components/profile/GameItem.vue'
import ProfileStatus from '../components/profile/ProfileStatus.vue'
import ProfileDownload from '../components/profile/ProfileDownload.vue'
import ProfileRefferal from '../components/profile/ProfileRefferal.vue'
import ProfileQuestion from '../components/profile/ProfileQuestion.vue'
import ProfileSettings from '../components/profile/ProfileSettings.vue'

export default {
  data: () => {
    return {
      arrayBtn: [
        {
          title: 'Подписки',
        },
        {
          title: 'Скачать',
        },
        {
          title: 'Реф.программа',
        },
        {
          title: 'Вопрос & ответ',
        },
        {
          title: 'Настройка',
        },
      ],
      titleComponent: [
        {
          title: 'ВАШИ ПОДПИСКИ',
        },
        {
          title: 'Начало работы с продуктом',
        },
        {
          title: 'Начало работы с продуктом',
        },
        {
          title: 'Часто задаваемые вопросы',
        },
        {
          title: 'Настройка профиля',
        },
      ],
      game: [
        {
          icon: 'profile/game/item-1.png',
          title: 'CS: Global Offensive',
          line: 70,
          date: 'Отсутствует или истекла',
        },
        {
          icon: 'profile/game/item-2.png',
          title: 'CS: Global Offensive',
          line: 70,
          date: 'Действует до  16.03.2021',
        },
      ],
      isOpenBlock: 0,
    }
  },
  components: {
    GameItem,
    ProfileStatus,
    ProfileDownload,
    ProfileRefferal,
    ProfileQuestion,
    ProfileSettings,
  },
  mounted() {},
}
</script>
