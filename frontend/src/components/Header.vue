<template>
  <header class="header">
    <div class="container">
      <div class="header-logo">
        <router-link to="/" class="header-logo-link"
          ><h1>HardFit</h1></router-link
        >
      </div>
      <nav class="header-nav">
        <ul class="header-nav-list">
          <router-link to="/raspisanie-trenirovok" class="header-nav-item"
            >Расписание</router-link
          >
          <router-link to="/abonementy" class="header-nav-item"
            >Абонементы</router-link
          >
          <router-link to="/trenerskiy-sostav" class="header-nav-item"
            >Тренерский состав</router-link
          >
          <a href="#footer" class="header-nav-item">Контакты</a>
        </ul>
      </nav>
      <div class="header-userinfo">
        <div class="city-info">
          <MapIcon class="user-icon" />
          <p>Москва</p>
        </div>
        <UserIcon @click="openModal('admin')" />
      </div>
    </div>
  </header>
  <AdminModal />
</template>

<script setup>
import MapIcon from "@/assets/icons/MapIcon.vue";
import UserIcon from "../assets/icons/UserIcon.vue";
import { inject } from "vue";
import AdminModal from "./modals/AdminModal.vue";

// Список типов модальных окон
const modals = inject("modals");
// Функция открытия модального окна
const openModal = inject("openModal");
</script>

<style lang="scss">
@use "@/styles/variables.scss" as *;

.header {
  font-size: 24px;
  height: 10rem;
  display: flex;
  align-items: center;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-logo {
    display: flex;
    width: 30.5rem;
    align-items: center;

    .header-logo-link {
      color: $color-purple;
      margin: 0;
      text-decoration: none;

      h1 {
        font-size: 48px;
        font-family: $text-logo;
      }
    }
  }

  .header-nav {
    width: 71rem;

    .header-nav-list {
      width: 100%;
      display: flex;
      justify-content: space-between;
      list-style: none;
      padding: 0;

      .header-nav-item {
        text-decoration: none;
        color: $color-white;
      }
      .header-nav-item:hover {
        color: $color-purple;
      }
    }
  }

  .header-userinfo {
    width: 30.5rem;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 4rem;

    .city-info {
      display: flex;
      align-items: center;
    }
  }
}
</style>
