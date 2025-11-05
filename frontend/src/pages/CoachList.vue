<template>
  <main>
    <div class="container">
      <h1 class="coaches-title">Тренерский состав</h1>
      <section class="coaches-list-container">
        <img src="@/assets/images/coachesImg.png" alt="" class="coaches-img" />
        <div class="coaches-list">
          <div
            v-for="coach in coaches"
            :key="coach.coach_id"
            class="coaches-item"
          >
            <img
              @click="selectCoach(coach)"
              :src="imgUrl + coach.image_url"
              alt=""
              class="coaches-item-img"
            />
          </div>
        </div>
        <div v-if="selectedCoach" class="coach-info">
          <img
            :src="imgUrl + selectedCoach.image_url"
            alt=""
            class="coach-img"
          />
          <div class="coach-desc">
            <h3 class="coach-name">
              {{ selectedCoach.last_name + " " + selectedCoach.first_name }}
            </h3>
            <p class="coach-text">{{ selectedCoach.coach_desc }}</p>
          </div>
        </div>
        <Button
          v-if="selectedCoach"
          @click="openModal('user')"
          :class="['btn-purple', 'btn-l']"
          :text="'Записаться на тренировку '"
        ></Button>
      </section>
    </div>
  </main>
  <CoachModal :coaches="coaches"></CoachModal>
  <UserModal></UserModal>
</template>


<script setup>
import { getCoaches } from "@/api/Coach";
import CoachModal from "@/components/modals/CoachModal.vue";
import UserModal from "@/components/modals/UserModal.vue";
import Button from "@/components/ui/Button.vue";
import { onMounted, ref, inject } from "vue";

// Путь до директории для загрузки изображений
const imgUrl = "/uploads/";
 
// Список тренеров
const coaches = ref([]);
// Выбранный тренер
const selectedCoach = ref(null);

// Список типов модальных окон
const modals = inject("modals");
// Функция открытия модального окна
const openModal = inject("openModal");

// Функция выбора тренера
const selectCoach = (coach) => {
  selectedCoach.value = coach;
  console.log(selectedCoach);
};

// Получение списка тренеров
onMounted(async () => {
  try {
    const data = await getCoaches();
    coaches.value = data;
  } catch (error) {
    console.log(error.message);
  }
});
</script>


<style lang="scss">
@use "@/styles/variables.scss" as *;

.coaches-list-container {
  height: 193.5rem;
  position: relative;
}

.coaches-title {
  text-align: center;
  font-size: 48px;
  margin-bottom: 6rem;
  font-family: $text-secondary;
}

.coaches-img {
  position: absolute;
  z-index: -1;
  top: 0;
  left: -6rem;
  width: 144rem;
}

.coaches-list {
  padding-top: 4rem;
  gap: 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10rem;

  .coaches-item {
    .coaches-item-img {
      width: 41.3rem;
      cursor: pointer;
      height: 30.4rem;
      border-radius: 5rem;
      border: solid 2px $color-purple;
    }
  }
}

.coach-info {
  display: flex;
  gap: 5rem;
  margin-bottom: 6rem;
  .coach-img {
    width: 65rem;
    height: 48.5rem;
  }

  .coach-name {
    margin-block: 0;
  }
}
</style>
