<template>
  <div class="profile__content-referral">
    <div class="profile__content-referral_wrapper">
      <div class="profile__content-referral_img">
        <img src="@/assets/images/profile/referral-bg.png" alt="" />
      </div>

      <div class="profile__content-referral_subblock" v-if="!createCode">
        <div class="profile__content-referral_input">
          <input
            type="text"
            placeholder="Введите Ваш промокод"
            v-model="code"
          />
          <button class="profile__content-referral_checked" v-if="code.length">
            <img src="@/assets/images/profile/code-checked.svg" alt="" />
          </button>
        </div>
        <button class="profile__content-referral_btn btn" @click="generateCode">
          <span class="btn-icon">
            <img src="@/assets/images/profile/reload-icon.svg" alt="" />
          </span>
          <span>случайно</span>
        </button>
        <button
          class="profile__content-referral_create"
          @click="createCode = true && code.length"
        >
          Создать <br />
          Промокод
        </button>
      </div>

      <div class="profile__content-referral_subblock" v-if="createCode">
        <div class="profile__content-referral_copy">
          <div class="profile__content-referral_icon">
            <img src="@/assets/images/profile/code-icon.svg" alt="" />
          </div>
          <div class="profile__content-referral_code">
            {{ code }}
          </div>
        </div>
        <button class="profile__content-referral_copy-btn btn">
          <span class="btn-icon">
            <img src="@/assets/images/profile/btn-copy.svg" alt="" />
          </span>
          <span>Копировать</span>
        </button>
        <p class="profile__content-referral_text">
          Также мы будем регулярно рассылать пресс-релизы, как только у нас
          будет обновляться лента новостей. И вы всегда сможете с нами связаться
          (по электронной почте).
        </p>
      </div>
    </div>

    <div class="profile__content-referral_grafic">
      <div class="profile__content-referral_block">
        <div class="profile__content-referral_info">
          <h4 class="profile__content-referral_title">
            <span></span>
            Название графика
            <select name="" id="">
              <option value="">7 дней</option>
            </select>
            <span></span>
          </h4>
        </div>
        <div class="profile__content-referral_rating">
          <img src="@/assets/images/profile/rating.png" alt="" />
        </div>
      </div>

      <div class="profile__content-referral_block">
        <div class="profile__content-referral_info">
          <h4 class="profile__content-referral_title">
            <span></span>Название графика
            <select name="" id="">
              <option value="">7 дней</option>
            </select>
            <span></span>
          </h4>
        </div>
        <div class="profile__content-referral_rating">
          <img src="@/assets/images/profile/rating.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      code: '',
      words: '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM',
      maxLengthCode: 7,
      createCode: false,
    }
  },
  methods: {
    generateCode() {
      this.code = ''
      const max_position = this.words.length - 1
      let i = 0
      do {
        i += 1
        const position = Math.floor(Math.random() * max_position)
        this.code = this.code + this.words.substring(position, position + 1)
      } while (i < this.maxLengthCode)
    },
  },
}
</script>
