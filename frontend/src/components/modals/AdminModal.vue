<template>
  <Modal modal-key="admin">
    <h3 class="form-title">Выберите действие</h3>
    <Button @click="openModal('coach')" :class="['btn-purple', 'btn-m']" :text="'Добавить тренера'" :style="'margin-bottom: 3rem'"></Button>
    <Button @click="openModal('train')" :class="['btn-dark', 'btn-m']" :text="'Добавить занятие'"></Button>
  </Modal>
  <CoachModal></CoachModal>
  <TrainModal></TrainModal>
</template>


<script setup>
import { inject } from "vue";
import Button from "../ui/Button.vue";
import Modal from "../Modal.vue";
import CoachModal from "./CoachModal.vue";
import TrainModal from "./TrainModal.vue";

// Тип и функция открытия модального окна
const modals = inject("modals");
const openModal = inject("openModal");
</script>


<style lang="scss">
@use "@/styles/variables.scss" as *;
</style>