<template>
  <div class="profile__content-settings">
    <div class="profile__content-settings_top">
      <div class="profile__content-settings_avatar">
        <div
          class="profile__content-settings_img"
          :style="{
            'background-image':
              'url(' +
              require('~/assets/images/profile/avatar/item-1.jpg') +
              ')',
          }"
        ></div>
      </div>

      <div class="profile__content-settings_info">
        <div class="profile__content-settings_name">ElitSniper</div>
        <div class="profile__content-settings_email">
          global.planet@gmail.com
        </div>
      </div>

      <div class="profile__content-settings_subinput">
        <input
          type="text"
          placeholder="Загрузите фото или изображение для аватарки"
        />
        <div class="profile__content-settings_review">Обзор...</div>
      </div>

      <button class="profile__content-settings_download btn">
        <span class="btn-icon">
          <img src="@/assets/images/profile/download-icon.svg" alt="" />
        </span>
        <span> загрузить </span>
      </button>

      <button class="profile__content-settings_delete">
        <img src="@/assets/images/profile/delete-icon.svg" alt="" />
      </button>
    </div>

    <div class="profile__content-settings_bottom">
      <form class="profile__content-settings_block">
        <h4 class="profile__content-settings_title">
          <span></span>
          Изменение пароля
          <span></span>
        </h4>
        <div class="profile__content-settings_wrapper">
          <div class="profile__content-settings_input">
            <label for="">Новый пароль:</label>
            <input type="password" placeholder="*************************" />
            <img src="@/assets/images/profile/block-icon.svg" alt="" />
          </div>

          <div class="profile__content-settings_input">
            <label for="">Еще раз пароль:</label>
            <input type="password" placeholder="*************************" />
            <img src="@/assets/images/profile/block-icon.svg" alt="" />
          </div>

          <div class="profile__content-settings_input">
            <label for="">Старый пароль:</label>
            <input type="password" placeholder="*************************" />
            <img src="@/assets/images/profile/block-icon.svg" alt="" />
          </div>
        </div>
        <div class="profile__content-settings_inner">
          <div class="profile__content-settings_line"></div>
          <div class="profile__content-settings_security">
            <img src="@/assets/images/profile/security-icon.svg" alt="" />
          </div>
          <p class="profile__content-settings_text">
            Найдите на рабочем столе иконку приложения и запустите его.
          </p>
          <button class="profile__content-settings_submit btn" type="submit">
            Сменить пароль
          </button>
        </div>
      </form>

      <form class="profile__content-settings_block">
        <h4 class="profile__content-settings_title">
          <span></span>
          Изменение e-mail
          <span></span>
        </h4>
        <div class="profile__content-settings_wrapper">
          <div class="profile__content-settings_input">
            <label for="">E-mail:</label>
            <input type="email" placeholder="*************************" />
            <img src="@/assets/images/profile/email-icon.svg" alt="" />
          </div>

          <div class="profile__content-settings_input">
            <label for="">Новый:</label>
            <input type="email" placeholder="*************************" />
            <img src="@/assets/images/profile/email-icon.svg" alt="" />
          </div>

          <div class="profile__content-settings_input">
            <label for="">Пароль:</label>
            <input type="password" placeholder="*************************" />
            <img src="@/assets/images/profile/block-icon.svg" alt="" />
          </div>
        </div>
        <div class="profile__content-settings_inner">
          <div class="profile__content-settings_line"></div>
          <div class="profile__content-settings_security">
            <img src="@/assets/images/profile/sms-icon.svg" alt="" />
          </div>
          <p class="profile__content-settings_text">
            Найдите на рабочем столе иконку приложения и запустите его.
          </p>
          <button class="profile__content-settings_submit btn" type="submit">
            Изменить e-mail
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
