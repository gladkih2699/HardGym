<template>
  <textarea placeholder="Описание" class="textarea" rows="8" v-model="textValue"></textarea>
</template>


<script setup>
import { defineModel } from 'vue';

const textValue = defineModel()
</script>


<style lang="scss">
@use "@/styles/variables.scss" as *;

.textarea {
  width: 100%;
  background-color: $color-light;
  border: 3px solid $color-purple;
  border-radius: 2rem;
  padding: 1rem;
  box-sizing: border-box;
}
</style>
