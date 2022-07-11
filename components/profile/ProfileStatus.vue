<template>
  <div class="profile__content-status">
    <div class="profile__content-status_top">
      <div class="profile__content-status_block">
        <h4 class="profile__content-status_title">
          <span></span> Статус <span></span>
        </h4>
        <div class="profile__content-game">
          <GameItem v-for="(item, id) in game" :key="id" :item="item" />
        </div>
        <div class="profile__content-status_code">
          <input type="text" placeholder="Введите Ваш промокод" />
          <button class="profile__content-status_btn btn">
            <span>
              <img src="@/assets/images/profile/key-icon.svg" alt="" />
            </span>
          </button>
        </div>
      </div>

      <div class="profile__content-status_block">
        <h4 class="profile__content-status_title">
          <span></span> Приобрести подписку <span></span>
        </h4>
        <div class="profile__content-benefit">
          <div class="profile__content-benefit_block">
            <div class="profile__content-benefit_icon">
              <img src="@/assets/images/profile/benefit/item-1.svg" alt="" />
            </div>
            <div class="profile__content-benefit_content">
              <div class="profile__content-benefit_title">Сумма:</div>
              <h4 class="profile__content-benefit_price">200 ₽</h4>
            </div>
          </div>

          <div class="profile__content-benefit_block">
            <div class="profile__content-benefit_icon">
              <img src="@/assets/images/profile/benefit/item-2.svg" alt="" />
            </div>
            <div class="profile__content-benefit_content">
              <div class="profile__content-benefit_title">Выгода:</div>
              <h4 class="profile__content-benefit_price">335 ₽</h4>
            </div>
          </div>

          <div class="profile__content-benefit_block">
            <div class="profile__content-benefit_content">
              <div class="profile__content-benefit_title">
                Столбец "Выгода" считается исходя из подписки на 1 день.
              </div>
            </div>
            <div class="profile__content-benefit_icon">
              <img src="@/assets/images/profile/benefit/item-3.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="profile__content-line">
          <div class="range-slider">
            <input
              type="range"
              :style="{ backgroundSize: `${rangeSettings.value}% 40%` }"
              v-model="rangeSettings.value"
            />
            <ul class="range-slider__legend">
              <li class="range-slider__legend-item">1 день</li>
              <li class="range-slider__legend-item">7 дней</li>
              <li class="range-slider__legend-item">14 дней</li>
              <li
                class="range-slider__legend-item range-slider__legend-item_active"
              >
                30 дней
              </li>
              <li class="range-slider__legend-item">90 дней</li>
              <li class="range-slider__legend-item">180 дней</li>
            </ul>
          </div>
        </div>
        <div class="profile__content-rent">
          <div class="profile__content-rent_item">
            <div class="profile__content-rent_icon">
              <img src="@/assets/images/profile/benefit/item-4.svg" alt="" />
            </div>
            <div class="profile__content-rent_content">
              <div class="profile__content-rent_title">Аренда</div>
              <h4 class="profile__content-rent_subtitle">30 дней</h4>
            </div>
          </div>

          <div class="profile__content-rent_item">
            <div class="profile__content-rent_extension">
              <div class="profile__content-rent_checkbox">
                <div
                  class="enjouy-item__changer"
                  @click="status = !status"
                  :class="{ active: status }"
                >
                  <div class="enjouy-item__changer-radius"></div>
                </div>
                <label for="">Автопродление <span>20% СКИДКА</span></label>
              </div>
              <div class="profile__content-rent_text">
                Используя функцию авто-продления вы принимаете наше
                <a href="">пользовательское соглашение</a>
              </div>
            </div>
          </div>

          <div class="profile__content-rent_submit">
            <button type="submit" class="btn">
              <span class="btn-icon">
                <img
                  src="@/assets/images/profile/availability/pay-icon.svg"
                  alt=""
                />
              </span>
              <span>оплатить</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="profile__content-status_bottom">
      <div class="profile__content-availability">
        <div class="profile__content-availability_img">
          <img src="@/assets/images/profile/availability__bg.png" alt="" />
        </div>
        <div class="profile__content-availability_wrapper">
          <div class="profile__content-availability_left">
            <h5 class="profile__content-availability_title">
              Доступность сброса
            </h5>
            <div class="profile__content-availability_timer">
              <div class="profile__content-availability_item">
                <div class="profile__content-availability_value">180</div>
                <div class="profile__content-availability_text">дней</div>
              </div>

              <div class="profile__content-availability_item">
                <div class="profile__content-availability_value">09</div>
                <div class="profile__content-availability_text">часов</div>
              </div>

              <div class="profile__content-availability_item">
                <div class="profile__content-availability_value">15</div>
                <div class="profile__content-availability_text">минут</div>

                <span>:</span>
              </div>

              <div class="profile__content-availability_item">
                <div class="profile__content-availability_value">59</div>
                <div class="profile__content-availability_text">секунд</div>

                <span>:</span>
              </div>
            </div>
            <button class="profile__content-availability_btn btn">
              Сбросить привязку
            </button>
          </div>

          <div class="profile__content-availability_right">
            <p class="profile__content-availability_subtext">
              Наше программное обеспечение привязывается к уникальному
              идентификатору Вашего компьютера.
            </p>
            <p class="profile__content-availability_subtext">
              В данном разделе Вы можете сбросить старую привязку на случай,
              если Вы захотели перенести подписку на другой ПК или заменили один
              из его компонентов.
            </p>
            <p class="profile__content-availability_subtext">
              Помнитие, что между сбросами имеется задержка в 24 часа.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GameItem from '../profile/GameItem.vue'

export default {
  data: () => {
    return {
      game: [
        {
          icon: 'profile/game/item-1.png',
          title: 'CS: Global Offensive',
          line: 70,
          date: 'Отсутствует или истекла',
        },
        {
          icon: 'profile/game/item-2.png',
          title: 'Dota 2',
          line: 2,
          date: 'Отсутствует или истекла',
        },
      ],
      status: true,
      rangeSettings: {
        value: 10,
      },
    }
  },
  components: {
    GameItem,
  },
}
</script>
