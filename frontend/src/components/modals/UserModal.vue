<template>
  <Modal modal-key="user">
    <h3 class="form-title">Записаться на тренировку</h3>
    <p class="form-text">Оставьте заявку и мы свяжемся с вами</p>
    <form @submit.prevent="handleSubmit('user')">
      <div class="form-contacts">
        <Input placeholder="Имя" v-model="formData.name" :style="{ width: '50%' }"/>
        <div class="phone-container">
          <p class="phone-text">+7</p>
          <Input v-model="formData.phone" />
        </div>
      </div>
      <Button :class="['btn-purple', 'btn-m']" :text="'Отправить'"></Button>
    </form>
  </Modal>
</template>


<script setup>
import { inject, reactive } from "vue";
import Button from "../ui/Button.vue";
import Input from "../ui/Input.vue";
import Modal from "../Modal.vue";
import useSubmitForm from "@/compasables/useSubmitForm";
import { createRecord } from "@/api/Record";

// Данные формы
const formData = reactive({
  name: "",
  phone: "",
});

// Функция закрытия модального окна
const closeModal = inject("closeModal");

// Функция для обработки отправки формы
function handleSubmit (modalType) {
  useSubmitForm(() => closeModal(modalType),() => createRecord(formData), formData)
}
</script>


<style lang="scss">
@use "@/styles/variables.scss" as *;
</style>
