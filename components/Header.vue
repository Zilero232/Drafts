<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <NuxtLink to="/" class="header__logo">
          <img src="@/assets/images/header/logo.png" alt="" />
        </NuxtLink>
        <nav class="menu">
          <ul class="spisok">
            <li class="spisok__list">
              <NuxtLink to="/" class="spisok__link">Начало</NuxtLink>
            </li>
            <li class="spisok__list">
              <NuxtLink to="/improve" class="spisok__link">Улучшай</NuxtLink>
            </li>
            <li class="spisok__list">
              <NuxtLink to="/custom" class="spisok__link">Кастомизируй</NuxtLink>
            </li>
            <li class="spisok__list">
              <NuxtLink to="/enjoy" class="spisok__link">Наслаждайся</NuxtLink>
            </li>
            <li class="spisok__list">
              <NuxtLink to="/buy" class="spisok__link">Покупай</NuxtLink>
            </li>
          </ul>
        </nav>
        <button class="header__login btn">
          <span class="header__login-icon btn-icon">
            <img src="@/assets/images/header/icon-login.svg" alt="" />
          </span>
          <span>Войти</span>
        </button>
      </div>
    </div>
  </header>
</template>
