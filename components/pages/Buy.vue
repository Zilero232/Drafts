<template>
  <section class="buy section-fixed" :class="{ activePage: active == 'buy' }">
    <div class="container">
      <div class="buy__wrapper">
        <div class="buy__wrapper-top">
          <div class="buy__wrapper-img">
            <img src="@/assets/images/buy/person-bg.png" alt="" />
          </div>

          <div class="buy__wrapper-content">
            <h2 class="buy__wrapper-title">присоединяйся</h2>
            <p class="buy__wrapper-text">
              Частичный мапхак с отображением анимаций вражеских героев.
              Индикатор видимости героя для команды соперника, отображение
              информации о вражеских героях при использовании скрытых
              способностей и прочие возможности.
            </p>
            <button class="buy__wrapper-btn btn">
              <span class="buy__wrapper-btn_icon btn-icon">
                <img src="@/assets/images/banner/icon-banner.svg" alt="" />
              </span>
              <span>Опробовать</span>
            </button>
          </div>
        </div>

        <div class="buy__wrapper-content">
          <h3 class="buy__wrapper-title">тарифные планы</h3>
          <div class="buy__wrapper-block">
            <TarifItem v-for="(item, id) in tarif" :key="id" :item="item" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TarifItem from '../buy/TarifItem.vue'

export default {
  props: ['active'],
  data: () => {
    return {
      tarif: [
        {
          title: '1 день',
          price: 24.0,
        },
        {
          title: 'неделя',
          price: 24.0,
          discount: 15,
          benefit: 3,
        },
        {
          title: 'Месяц',
          price: 24.0,
          discount: 15,
          benefit: 3,
        },
        {
          title: '1 Год',
          price: 24.0,
          discount: 15,
          benefit: 3,
        },
      ],
    }
  },
  components: {
    TarifItem,
  },
}
</script>
