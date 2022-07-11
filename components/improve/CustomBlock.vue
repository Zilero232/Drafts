<template>
  <div class="custom__wrapper" :class="{ select: !select || !without }">
    <div class="custom__about" v-if="without && select">
      <div class="custom__about-info">
        <div class="custom__about-info_title">
          {{ comparison[0].title }}
        </div>
        <div class="custom__about-info_text">
          {{ comparison[0].text }}
        </div>
      </div>

      <img-comparison-slider class="coloured-slider custom__about-block">
        <img
          :src="require(`@/assets/images/${comparison[0].img}`)"
          alt=""
          class="first"
          slot="first"
        />
        <img
          :src="require(`@/assets/images/${comparison[1].img}`)"
          alt=""
          class="second"
          slot="second"
        />
      </img-comparison-slider>
    </div>

    <div class="custom__skins">
      <div class="custom__skins-items" v-if="comparison[0].type">
        <div
          class="custom__skins-row"
          v-for="(skins, id) in comparison"
          :key="id"
        >
          <div
            class="custom__skins-wrapper"
            v-for="(item, id) in 3"
            :key="id"
            :class="{
              without: !without,
              select: !select,
            }"
          >
            <div
              class="custom__skins-item"
              v-for="(inner, id) in skins.type"
              :key="id"
              :class="{
                red: item.status === 'red',
                purpule: item.status === 'purpule',
                blue: item.status === 'blue',
                yellow: item.status === 'yellow',
                dark: item.status === 'dark',
              }"
              v-if="id > 1"
            >
              <div class="custom__skins-item_content">
                <div class="custom__skins-item_img">
                  <img :src="require(`@/assets/images/${inner.img}`)" alt="" />
                </div>
                <div class="custom__skins-item_title">
                  {{ inner.title }}
                </div>
                <p class="custom__skins-item_text">
                  {{ inner.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="custom__skins-block" v-else>
        <div
          class="custom__skins-wrapper"
          v-for="(item, id) in 2"
          :key="id"
          :class="{
            without: !without,
            select: !select,
          }"
        >
          <div
            class="custom__skins-inner"
            v-for="(inner, id) in comparison"
            :key="id"
          >
            <div
              class="custom__skins-item"
              :class="{
                red: inner.status === 'red',
                purpule: inner.status === 'purpule',
                blue: inner.status === 'blue',
                yellow: inner.status === 'yellow',
                dark: inner.status === 'dark',
              }"
              v-if="id > 1"
            >
              <div class="custom__skins-item_content">
                <div class="custom__skins-item_img">
                  <img :src="require(`@/assets/images/${inner.img}`)" alt="" />
                </div>
                <div class="custom__skins-item_title">
                  {{ inner.title }}
                </div>
                <!-- <p class="custom__skins-item_text">
                  {{ inner.text }}
                </p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="custom__wrapper-btns">
      <button
        class="improve__wrapper-about_back"
        @click="$emit('changeBlockAbout', weapons)"
        v-if="weapons.length"
      >
        <img src="@/assets/images/improve/play-icon-3.png" alt="" />
      </button>

      <button
        class="improve__wrapper-about_back"
        @click="$emit('changeBlockSelect')"
        v-if="!without || !select"
      >
        <img src="@/assets/images/improve/play-icon-3.png" alt="" />
      </button>
    </div> -->
  </div>
</template>

<script>
import 'img-comparison-slider'

export default {
  props: ['without', 'select', 'weapons', 'comparison'],
}
</script>
