<template>
  <section class="custom">
    <div class="container">
      <h2 class="custom__title">Skins Editor</h2>

      <div class="custom__wrapper">
        <div class="custom__about">
          <img-comparison-slider class="coloured-slider custom__about-block">
            <img
              src="@/assets/images/custom/item-1.png"
              alt=""
              class="first"
              slot="first"
            />
            <img
              src="@/assets/images/custom/item-2.png"
              alt=""
              class="second"
              slot="second"
            />
          </img-comparison-slider>
        </div>

        <simplebar class="custom__skins">
          <div class="custom__skins-wrapper">
            <div
              class="custom__skins-item"
              v-for="(item, id) in skins"
              :key="id"
              :class="{
                red: item.status === 'red',
                purpule: item.status === 'purpule',
                blue: item.status === 'blue',
                yellow: item.status === 'yellow',
                dark: item.status === 'dark',
              }"
            >
              <div class="custom__skins-item_content">
                <div class="custom__skins-item_img">
                  <img src="@/assets/images/custom/item-3.png" alt="" />
                </div>
                <div class="custom__skins-item_title">
                  {{ item.title }}
                </div>
                <p class="custom__skins-item_text">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </div>
        </simplebar>
      </div>
    </div>
  </section>
</template>

<script>
import 'img-comparison-slider'
import simplebar from 'simplebar-vue'

import 'simplebar/dist/simplebar.min.css'

export default {
  name: 'custom',
  data: () => {
    return {
      skins: [
        {
          img: 'custom/item-3.png',
          title: 'PP-Bizon',
          text: 'Stained Glass',
          status: 'red',
        },
        {
          img: 'custom/item-3.png',
          title: 'PP-Bizon',
          text: 'Stained Glass',
          status: 'purpule',
        },
        {
          img: 'custom/item-3.png',
          title: 'PP-Bizon',
          text: 'Stained Glass',
          status: 'blue',
        },
        {
          img: 'custom/item-3.png',
          title: 'PP-Bizon',
          text: 'Stained Glass',
          status: 'yellow',
        },
        {
          img: 'custom/item-3.png',
          title: 'PP-Bizon',
          text: 'Stained Glass',
          status: 'dark',
        },
        {
          img: 'custom/item-3.png',
          title: 'PP-Bizon',
          text: 'Stained Glass',
          status: 'red',
        },
        {
          img: 'custom/item-3.png',
          title: 'PP-Bizon',
          text: 'Stained Glass',
          status: 'red',
        },
        {
          img: 'custom/item-3.png',
          title: 'PP-Bizon',
          text: 'Stained Glass',
          status: 'red',
        },
        {
          img: 'custom/item-3.png',
          title: 'PP-Bizon',
          text: 'Stained Glass',
          status: 'red',
        },
        {
          img: 'custom/item-3.png',
          title: 'PP-Bizon',
          text: 'Stained Glass',
          status: 'red',
        },
        {
          img: 'custom/item-3.png',
          title: 'PP-Bizon',
          text: 'Stained Glass',
          status: 'red',
        },
        {
          img: 'custom/item-3.png',
          title: 'PP-Bizon',
          text: 'Stained Glass',
          status: 'red',
        },
        {
          img: 'custom/item-3.png',
          title: 'PP-Bizon',
          text: 'Stained Glass',
          status: 'red',
        },
        {
          img: 'custom/item-3.png',
          title: 'PP-Bizon',
          text: 'Stained Glass',
          status: 'red',
        },
      ],
    }
  },
  components: {
    simplebar,
  },
}
</script>
