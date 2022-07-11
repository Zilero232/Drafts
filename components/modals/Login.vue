<template>
  <div
    class="modals"
    @click="
      (e) => {
        e.target.contains(this.$refs.auth) ? this.$emit('closeModals') : ''
      }
    "
  >
    <div class="auth" ref="auth">
      <div class="auth__wrapper">
        <div class="auth__wrapper-tabs">
          <button
            class="auth__wrapper-btn"
            @click="isTabs = false"
            :class="{ active: !isTabs }"
          >
            Вход
          </button>
          <button
            class="auth__wrapper-btn"
            @click="isTabs = true"
            :class="{ active: isTabs }"
          >
            Регистрация
          </button>
        </div>

        <div class="auth__wrapper-content">
          <form
            class="auth__wrapper-block"
            v-if="!isTabs"
            @submit.prevent="login"
          >
            <div class="auth__wrapper-subblock">
              <div class="auth__wrapper-input">
                <input type="text" name="name" placeholder="Username" />
                <div class="auth__wrapper-input_icon">
                  <img src="@/assets/images/header/user-icon.svg" alt="" />
                </div>
              </div>
              <div class="auth__wrapper-input">
                <input
                  type="password"
                  name="password"
                  placeholder="*******************"
                />
                <div class="auth__wrapper-input_icon">
                  <img src="@/assets/images/header/security-icon.svg" alt="" />
                </div>
              </div>
              <div class="auth__wrapper-checkbox">
                <input type="checkbox" id="checkbox1" />
                <label for="checkbox1">Запомнить даные для входа</label>
              </div>
              <button type="submit" class="auth__wrapper-submit btn">
                Войти
              </button>
            </div>
          </form>

          <div class="auth__wrapper-inner" v-if="isTabs">
            <form class="auth__wrapper-block">
              <div class="auth__wrapper-subblock">
                <div class="auth__wrapper-input">
                  <input type="text" name="name" placeholder="Username" />
                  <div class="auth__wrapper-input_icon">
                    <img src="@/assets/images/header/user-icon.svg" alt="" />
                  </div>
                </div>
                <div class="auth__wrapper-input">
                  <input type="email" name="email" placeholder="E-mail" />
                  <div class="auth__wrapper-input_icon">
                    <img src="@/assets/images/header/email-icon.svg" alt="" />
                  </div>
                </div>
                <div class="auth__wrapper-input">
                  <input type="password" name="password" placeholder="Пароль" />
                  <div class="auth__wrapper-input_icon">
                    <img
                      src="@/assets/images/header/security-icon.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="auth__wrapper-input">
                  <input
                    type="password"
                    name="repeatPassword"
                    placeholder="Повторите пароль"
                  />
                  <div class="auth__wrapper-input_icon">
                    <img
                      src="@/assets/images/header/security-icon.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="auth__wrapper-code">
                  <div class="auth__wrapper-input">
                    <input
                      type="password"
                      name="repeatPassword"
                      placeholder="Промокод (Не обязательно)"
                    />
                  </div>
                </div>
                <button type="submit" class="auth__wrapper-submit btn">
                  Зарегистрироваться
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="auth__wrapper-bonus" v-if="isTabs">
        <div class="auth__wrapper-bonus_title">Бонус-код принят</div>
        <p class="auth__wrapper-bonus_text">
          14 дней тестового периода и <br />
          15% скидка на первую покупку
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isTabs: false,
    }
  },
  methods: {
    login() {
      this.$router.push({ path: '/profile' })
      this.$emit('redirectProfile')
    },
  },
}
</script>
