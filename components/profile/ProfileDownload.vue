<template>
  <div class="profile__content-download">
    <div class="profile__content-download_block">
      <h4 class="profile__content-download_title">
        <span></span> Шаг 1: Загрузка и установка<span></span>
      </h4>
      <div
        class="profile__content-download_img"
        :style="{
          'background-image':
            'url(' +
            require('~/assets/images/profile/availability/item-1.jpg') +
            ')',
        }"
      ></div>
      <ul class="profile__content-download_spisok">
        <li>
          <div class="profile__content-download_icon">01</div>
          <p class="profile__content-download_text">
            Скачайте и запустите наш установщик.
          </p>
        </li>

        <li>
          <div class="profile__content-download_icon">02</div>
          <p class="profile__content-download_text">
            Следуйте указаниям установщика, он автоматически установит нужное
            ПО, выберет папку, и создаст иконку чита на рабочем столе.
          </p>
        </li>
      </ul>
      <button class="profile__content-download_btn btn">
        <span class="btn-icon">
          <img
            src="@/assets/images/profile/download/download-icon.svg"
            alt=""
          />
        </span>
        <span> Скачать установщик </span>
      </button>
    </div>

    <div class="profile__content-download_block">
      <h4 class="profile__content-download_title">
        <span></span> Шаг 2: Запуск и выбор продукта <span></span>
      </h4>
      <div
        class="profile__content-download_img"
        :style="{
          'background-image':
            'url(' +
            require('~/assets/images/profile/availability/item-2.jpg') +
            ')',
        }"
      ></div>
      <ul class="profile__content-download_spisok">
        <li>
          <div class="profile__content-download_icon">01</div>
          <p class="profile__content-download_text">
            Найдите на рабочем столе иконку приложения и запустите его.
          </p>
        </li>

        <li>
          <div class="profile__content-download_icon">02</div>
          <p class="profile__content-download_text">
            Авторизуйтесь под своими данными (логин и пароль аналогичны логину и
            паролю от сайта, или от uc.zone).
          </p>
        </li>

        <li>
          <div class="profile__content-download_icon">03</div>
          <p class="profile__content-download_text">
            После авторизации выберите в лоадере Umbrella cheat [DotA2] [Public
            Build] и нажмите Launch DotA 2 (если такого пункта нет, то у вас
            скорее всего кончилась подписка).
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
