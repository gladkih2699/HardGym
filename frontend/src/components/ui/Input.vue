<template>
  <input
    type="text"
    v-model="inputValue"
    :style="{ width: width }"
    class="input"
  />
</template>


<script setup>
import { defineModel, defineProps } from "vue";

const inputValue = defineModel();

const props = defineProps({
  width: {
    type: String,
    default: "100%",
  },
});
</script>


<style lang="scss">
@use "@/styles/variables.scss" as *;

.input {
  background-color: $color-light;
  border: 3px solid $color-purple;
  border-radius: 2rem;
  padding: 1rem;
  box-sizing: border-box;
}
</style>
