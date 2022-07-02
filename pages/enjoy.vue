<template>
  <section class="enjouy">
    <div class="container">
      <h2 class="enjouy__title">красота повсюду</h2>
      <div class="enjouy__settings">
        <div
          class="enjouy__settings-window"
          :style="{
            'background-image':
              'url(' +
              require('~/assets/images/enjouy/wrapper/item-1.jpg') +
              ')',
          }"
        >
          <div class="enjouy__settings-block">
            <div class="enjouy__settings-preset">
              <div class="enjouy-item">
                <div class="enjouy-item__icon">
                  <img
                    src="@/assets/images/enjouy/settings/item-5.svg"
                    alt=""
                  />
                </div>
                <div class="enjouy-item__title">Default</div>
              </div>

              <button class="enjouy__settings-preset_btn">
                <img src="@/assets/images/enjouy/settings/item-6.svg" alt="" />
              </button>
            </div>

            <div class="enjouy__settings-wrapper">
              <div class="enjouy__settings-wrapper_block">
                <div class="enjouy__settings-wrapper_title">settings</div>
                <button
                  class="enjouy__settings-wrapper_arrows"
                  @click="isOpenSettings = !isOpenSettings"
                  :class="{ active: !isOpenSettings }"
                >
                  <img src="@/assets/images/enjouy/settings/arrow.svg" alt="" />
                </button>
              </div>

              <div
                class="enjouy__settings-wrapper_content"
                v-if="isOpenSettings"
              >
                <EnjoySettings
                  v-for="(item, id) in settings"
                  :key="id"
                  :item="item"
                  @changeSwich="item.status = !item.status"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      settings: [
        {
          title: 'Fog',
          icon: 'enjouy/settings/item-1.svg',
          status: true,
          range: [
            {
              title: 'Distance',
              min: '0',
              max: '100',
              value: 20,
            },
          ],
        },
        {
          title: 'Rain',
          icon: 'enjouy/settings/item-2.svg',
          status: false,
          range: [
            {
              title: 'Length',
              min: '0',
              max: '100',
              value: 20,
            },
            {
              title: 'Speed',
              min: '0',
              max: '100',
              value: 20,
            },
            {
              title: 'Angel',
              min: '0',
              max: '100',
              value: 20,
            },
          ],
        },
        {
          title: 'Skychanger',
          icon: 'enjouy/settings/item-3.svg',
          status: false,
        },
        {
          title: 'Nightmode',
          icon: 'enjouy/settings/item-4.svg',
          status: false,
        },
      ],
      isOpenSettings: true,
    }
  },
}
</script>
