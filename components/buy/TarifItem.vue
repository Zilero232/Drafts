<template>
  <div class="buy__wrapper-block_item">
    <h4 class="buy__wrapper-block_title">
     <span></span> {{ item.title }}  <span></span> 
    </h4>
    <div class="buy__wrapper-block_price">
      <p class="buy__wrapper-block_text">Цена:</p>
      <div class="buy__wrapper-block_subprice">{{ item.price }} USD</div>
    </div>
    <div class="buy__wrapper-block_bottom">
      <p class="buy__wrapper-block_subtext" v-if="!item.discount">без скидки</p>
      <div class="buy__wrapper-block_discount" v-if="item.discount">
        <p class="buy__wrapper-block_subtext">
          Скидка: <span>{{ item.discount }}$</span>
        </p>

        <p class="buy__wrapper-block_subtext">
          Выгода: <span>{{ item.discount }}$</span>
        </p>
      </div>
    </div>
    <button class="buy__wrapper-block_btn btn">Купить</button>
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>
