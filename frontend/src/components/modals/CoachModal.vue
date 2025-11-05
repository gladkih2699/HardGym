<template>
  <Modal modal-key="coach">
    <h3 class="form-title">Добавить тренера</h3>
    <form @submit.prevent="handleSubmit('coach')">
      <div class="form-contacts coach-input">
        <Input
          v-model="formData.last_name"
          placeholder="Фамилия"
          :style="{ width: '100%' }"
        />
        <Input
          v-model="formData.first_name"
          placeholder="Имя"
          :style="{ width: '100%' }"
        />
      </div>
      <TextArea
        v-model="formData.coach_desc"
        :style="'margin-bottom: 2rem'"
      ></TextArea>
        <input ref="fileInput" type="file" class="input-file" accept="image/*">
      <Button
      :class="['btn-purple', 'btn-m']"
      :text="'Отправить'"
      type="submit"
      ></Button>
    </form>
  </Modal>
</template>


<script setup>
import { inject, reactive, ref } from "vue";
import Button from "../ui/Button.vue";
import Input from "../ui/Input.vue";
import Modal from "../Modal.vue";
import TextArea from "../ui/TextArea.vue";
import { createCoach, getCoaches } from "@/api/Coach";
import useSubmitForm from "@/compasables/useSubmitForm";

// Ссылка на файловый инпут
const fileInput = ref(null)

// Данные для отправки на сервер
const formData = reactive({
  first_name: "",
  last_name: "",
  coach_desc: "",
});

// Функция закрытия модального окна
const closeModal = inject("closeModal");

const props = defineProps({
  coaches: {
    type: Array,
  }
})

// Функция для обработки отправки формы с получением списка тренеров
async function handleSubmit (modalType) {
    const data = new FormData()
    data.append('first_name', formData.first_name)
    data.append('last_name', formData.last_name)
    data.append('coach_desc', formData.coach_desc)
    if (fileInput.value.files[0]) {
      data.append('image', fileInput.value.files[0])
    }
    await useSubmitForm(() => closeModal(modalType),() => createCoach(data), formData)
    props.coaches.value = await getCoaches()
  } 
</script>


<style lang="scss">
@use "@/styles/variables.scss" as *;

.coach-input {
  margin-bottom: 2rem;
}

.input-file {
    background-color: $color-light;
    border: 3px solid $color-purple;
    border-radius: 2rem;
    padding: 1rem;
    box-sizing: border-box;
    margin-bottom: 5rem;
  }
</style>
