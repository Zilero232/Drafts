<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header__wrapper">
          <NuxtLink to="/" class="header__logo">
            <img src="@/assets/images/header/logo.png" alt="" />
          </NuxtLink>
          <nav class="menu" :class="{ menuOpenMobile: openModalMobile }">
            <ul class="spisok">
              <li class="spisok__list" v-for="(item, id) in menu" :key="id">
                <a
                  href="/"
                  class="spisok__link"
                  :class="{ active: item.page == getActivePage }"
                  @click.prevent="
                    () => {
                      $router.push('/')
                      $store.dispatch('activePage', item.page)
                      openModalMobile = false
                    }
                  "
                  ><span></span>{{ item.title }}</a
                >
              </li>
            </ul>
          </nav>

          <div class="header__right">
            <button
              class="header__login btn"
              @click="isOpenAuth = true"
              v-if="!auth"
            >
              <span class="header__login-icon btn-icon">
                <img src="@/assets/images/header/icon-login.svg" alt="" />
              </span>
              <span>Войти</span>
            </button>

            <div class="header__avatar" v-else>
              <div
                class="header__avatar-img"
                :style="{
                  'background-image':
                    'url(' +
                    require('~/assets/images/profile/avatar/item-1.jpg') +
                    ')',
                }"
              ></div>
              <NuxtLink to="/profile" class="header__avatar-name">
                ElitSniper</NuxtLink
              >
              <button
                class="header__avatar-exit"
                @click="
                  () => {
                    this.auth = false
                    $router.push({ path: '/' })
                  }
                "
              >
                <img src="@/assets/images/profile/exit-icon.svg" alt="" />
              </button>
            </div>

            <div
              class="bar"
              @click="openModalMobile = !openModalMobile"
              :class="{ active: openModalMobile }"
            >
              <div class="bar__item"></div>
              <div class="bar__item"></div>
              <div class="bar__item"></div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <Login
      v-if="isOpenAuth"
      @closeModals="isOpenAuth = false"
      @redirectProfile="redirectProfile"
    />
  </div>
</template>

<script>
import Login from '../components/modals/Login.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => {
    return {
      menu: [
        {
          title: 'Начало',
          page: 'banner',
        },
        {
          title: 'Улучшай',
          page: 'improve',
        },
        {
          title: 'Кастомизируй',
          page: 'custom',
        },
        {
          title: 'Покупай',
          page: 'buy',
        },
      ],
      isOpenAuth: false,
      auth: false,
      openModalMobile: false,
    }
  },
  computed: {
    ...mapGetters(['getActivePage']),
  },
  components: {
    Login,
  },
  methods: {
    redirectProfile() {
      this.auth = true
      this.isOpenAuth = false
    },
  },
}
</script>
