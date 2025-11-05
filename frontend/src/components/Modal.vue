<template>
  <div
    v-if="modals[modalKey]"
    @click="closeModal(modalKey)"
    class="shadow-container"
  >
    <div @click.stop class="form-container">
      <slot></slot>
    </div>
  </div>
</template>


<script setup>
// Шаблонный компонент модального окна
import { inject } from "vue";

// Список типов модальных окон
const modals = inject("modals");
// Функция закрытия модального окна
const closeModal = inject("closeModal");

const props = defineProps({
  modalKey: {
    type: String,
  },
});
</script>


<style lang="scss">
@use "@/styles/variables.scss" as *;

.shadow-container {
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .form-container {
    color: $color-dark;
    text-align: center;
    background-color: $color-light;
    padding: 6rem 10rem;
    border-radius: 4rem;

    .form-title {
      font-size: 48px;
      margin-bottom: 2rem;
    }

    .form-text {
      margin-bottom: 4rem;
    }

    .form-contacts {
      display: flex;
      justify-content: space-between;
      gap: 10rem;
      margin-bottom: 5rem;

      .phone-container {
        display: flex;

        .phone-text {
          line-height: 0;
          margin-right: 0.5rem;
        }
      }
    }
  }
}
</style>
