<template>
  <Modal modal-key="train">
    <h3 class="form-title">Добавить занятие</h3>
    <form @submit.prevent="handleSubmit('train')">
      <div class="train-modal">
        <Select
          v-model="formData.direction"
          :options="directions"
          :disabled-text="'Выберите направление'"
        ></Select>

        <Select
          v-model="formData.hall"
          :options="halls"
          :disabled-text="'Выберите зал'"
        ></Select>
        <Select
          v-model="formData.coach_name"
          :options="coaches"
          :disabled-text="'Выберите тренера'"
        ></Select>
        <input v-model="formData.date" type="date" class="input-time" />
        <input v-model="formData.time" type="time" class="input-time" />
      </div>
      <Button
        :class="['btn-purple', 'btn-m']"
        :text="'Отправить'"
        type="submit"
      ></Button>
    </form>
  </Modal>
</template>


<script setup>
import { inject, reactive, ref, onMounted } from "vue";
import Button from "../ui/Button.vue";
import Modal from "../Modal.vue";
import Select from "../ui/Select.vue";
import useSubmitForm from "@/compasables/useSubmitForm";
import { createTrain } from "@/api/Train";
import { getCoaches } from "@/api/Coach";

// Направления занятий
const directions = ["Бокс", "Танцы", "Йога", "Фитнес", "КроссФит", "Растяжка"];
// Номера залов
const halls = ["1", "2", "3"];

// Список тренеров
const coaches = ref([]);

// Функция закрытия модального окна
const closeModal = inject("closeModal");

// Данные формы
const formData = reactive({
  direction: "",
  hall: "",
  coach_name: "",
  date: "",
  time: "",
});

// Функция для обработки отправки формы
function handleSubmit(modalType) {
  useSubmitForm(
    () => closeModal(modalType),
    () => createTrain(formData),
    formData
  );
}

// Получение списка тренеров
onMounted(async () => {
  try {
    const data = await getCoaches();
    coaches.value = data.map(
      (coach) => coach.last_name + " " + coach.first_name
    );
  } catch (error) {
    console.log(error.message);
  }
});
</script>


<style lang="scss">
@use "@/styles/variables.scss" as *;

.coach-input {
  margin-bottom: 2rem;
}

.train-modal {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 5rem;

  .input-time {
    background-color: $color-light;
    border: 3px solid $color-purple;
    border-radius: 2rem;
    padding: 1rem;
    box-sizing: border-box;
  }
}
</style>
