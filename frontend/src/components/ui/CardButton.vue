<template>
  <button class="card-btn">Выбрать</button>
</template>


<script setup></script>


<style lang="scss">
@use "@/styles/variables.scss" as *;

.card-btn {
  background-color: $color-purple;
  border: none;
  border-radius: 3rem;
  width: 24.5rem;
  height: 6rem;
  font-size: 20px;
  position: absolute;
  bottom: -3rem;
  color: $color-white;
  left: 50%;
  transform: translate(-50%);
  cursor: pointer;

}
</style>
