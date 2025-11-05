<template>
  <Header></Header>
  <Modal></Modal>
  <router-view></router-view>
  <Footer></Footer>
</template>



<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import useModal from "./compasables/useModal";

import { inject, provide } from 'vue'
import Modal from "./components/Modal.vue";

const {modals, openModal, closeModal} = useModal()

provide('modals', modals)
provide('openModal', openModal)
provide('closeModal', closeModal)


</script>



<style lang="scss">
@use "@/styles/variables.scss" as *;

html {
  font-size: 10px;
  overflow-y: scroll;
}

body {
  background-color: $color-dark;
  color: $color-white;
  box-sizing: border-box;
  font-size: 32px;
  font-family: $text-primary;

  #root {
    max-width: 144rem;
    margin-inline: auto;
  }

  .container {
    width: 132rem;
    margin-inline: auto;
  }
}

svg {
  cursor: auto;
}
</style>
