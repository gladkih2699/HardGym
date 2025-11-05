<template>
  <button class="btn" :style="{ width: width }">{{ text }}</button>
</template>


<script setup>
const props = defineProps({
  text: {
    type: String,
  },
  width: {
    type: String,
    default: "100%",
  },
});
</script>


<style lang="scss">
@use "@/styles/variables.scss" as *;

.btn {
  border: 0;
  border-radius: 2rem;
  cursor: pointer;
}

.btn-light {
  background-color: $color-light;
  color: $color-dark;
}

.btn-purple {
  background-color: $color-purple;
  color: $color-white;
}

.btn-dark {
  background-color: $color-dark;
  color: $color-white;
}

.btn-l {
  height: 8rem;
}

.btn-m {
  height: 6rem;
}
</style>
