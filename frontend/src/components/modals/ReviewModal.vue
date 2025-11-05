<template>
  <Modal modal-key="review">
    <h3 class="form-title">Оставить отзыв</h3>
    <form @submit.prevent="handleSubmit('review')">
      <div class="form-contacts">
        <Input
          placeholder="Имя"
          v-model="formData.name"
          :style="{ width: '50%' }"
        />
        <div class="phone-container">
          <p class="phone-text">+7</p>
          <Input v-model="formData.phone" />
        </div>
      </div>
      <TextArea
        :style="'margin-bottom: 5rem'"
        v-model="formData.review_text"
      ></TextArea>
      <Button
        :class="['btn-purple', 'btn-m']"
        :text="'Отправить'"
        type="submit"
      ></Button>
    </form>
  </Modal>
</template>


<script setup>
import { inject, reactive } from "vue";
import Button from "../ui/Button.vue";
import Input from "../ui/Input.vue";
import Modal from "../Modal.vue";
import TextArea from "../ui/TextArea.vue";
import useSubmitForm from "@/compasables/useSubmitForm";
import { createReview, getReviews } from "@/api/Review";

// Данные для отправки на сервер
const formData = reactive({
  name: "",
  phone: "",
  review_text: "",
});

// Функция закрытия модального окна
const closeModal = inject("closeModal");
// Список отзывов
const reviews = inject("reviews");

// Функция для обработки отправки формы с получением списка отзывов
async function handleSubmit(modalType) {
  await useSubmitForm(
    () => closeModal(modalType),
    () => createReview(formData),
    formData
  );
  reviews.value = await getReviews();
}
</script>


<style lang="scss">
@use "@/styles/variables.scss" as *;
</style>
