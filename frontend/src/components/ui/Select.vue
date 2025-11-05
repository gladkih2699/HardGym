<template>
  <select v-model="selectValue" class="select">
    <option value="" class="option default">{{ disabledText }}</option>
    <option v-for="option in options" class="option">{{ option }}</option>
  </select>
</template>


<script setup>
const selectValue = defineModel()

const props = defineProps({
  options: {
    type: Array,
  },
  disabledText: {
    type: String,
  },
});
</script>


<style lang="scss">
@use "@/styles/variables.scss" as *;

.select {
  background-color: $color-light;
  border: 3px solid $color-purple;
  border-radius: 2rem;
  padding: 1rem;
  padding-right: 3rem;
  box-sizing: border-box;
  display: block;
}

.option {
    background-color: $color-purple;
  border: 3px solid $color-purple;
  border-radius: 2rem;
  color: $color-white;
  position: relative;
}

.default {
    display: none;
}

</style>
