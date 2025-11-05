<template>
  <main>
    <div class="container">
      <h1 class="table-title">Расписание тренировок</h1>
      <section class="table-section">
        <Carousel :items-to-show="3" :items-to-scroll="3" class="table-dates">
          <Slide v-for="date in sortedDates" :key="date" class="dates-item">
            <Button
              @click="selectDate(date)"
              :class="[
                selectedDate === date ? 'btn-purple' : 'btn-light',
                'btn-m',
              ]"
              :style="'width: 35.6rem'"
              :text="formatDate(date)"
            ></Button>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
        <div class="table-container">
          <img src="@/assets/images/time-table.png" class="table-img" alt="" />
          <div class="trains-list">
            <div
              v-for="train in filteredTrains"
              @click="selectTrain(train)"
              :key="train.train_id"
              class="trains-item"
              :class="[selectedTrain === train ? 'purple' : '']"
            >
              <p class="trains-time">{{ train.time }}</p>
              <p class="trains-direction">{{ train.direction }}</p>
              <p class="trains-hall">Зал: №{{ train.hall }}</p>
            </div>
          </div>
          <div v-if="selectedTrain" class="train-container">
            <p>{{ selectedTrain.time }}</p>
            <p class="train-hall">Зал: №{{ selectedTrain.hall }}</p>
            <p class="train-coach">
              {{ selectedTrain.direction }} - тренер
              {{ selectedTrain.coach_name }}
            </p>
            <Button
              class="train-btn"
              @click="openModal('user')"
              width="76.2rem"
              :class="['btn-purple', 'btn-l']"
              :text="'Записаться на тренировку '"
            ></Button>
          </div>
        </div>
      </section>
    </div>
  </main>
  <UserModal></UserModal>
</template>

<script setup>
import { ref, onMounted, inject, computed } from "vue";
import { getTrains } from "@/api/Train";
import Button from "@/components/ui/Button.vue";
import UserModal from "@/components/modals/UserModal.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/carousel.css";

// Список тренеров
const trains = ref([]);
// Выбранная дата
const selectedDate = ref();
// Выбранная тренировка
const selectedTrain = ref();

// Список типов модальных окон
const modals = inject("modals");
// Функция открытия модального окна
const openModal = inject("openModal");

// Список уникальных дат
const uniqueDates = computed(() => {
  const dates = new Set();
  trains.value.forEach((train) => {
    dates.add(train.date);
  });
  return Array.from(dates);
});
// Список отсортированных дат
const sortedDates = computed(() => {
  const sortedArr = uniqueDates.value.sort(
    (a, b) => dateToNum(a) - dateToNum(b)
  );
  return sortedArr;
});
// Список отфильтрованных тренировок по дате
const filteredTrains = computed(() => {
  return trains.value
    .filter((train) => train.date === selectedDate.value)
    .sort((a, b) => timeToNum(a.time) - timeToNum(b.time));
});

// Функция форматирования даты
function formatDate(dateStr) {
  const [year, month, day] = dateStr.split("-");
  return `${day}.${month}.${year}`;
}
// Функция перевода времени в число
function timeToNum(timeStr) {
  const [hours, minutes] = timeStr.split(":");
  return +hours * 60 + +minutes;
}
// Функция перевода даты в число
function dateToNum(dateStr) {
  const [year, month, day] = dateStr.split("-");
  return +`${year}${month}${day}`;
}

// Функция выбора даты
function selectDate(date) {
  selectedDate.value = date;
  selectedTrain.value = null;
}
// Функция выбора тренировки
function selectTrain(train) {
  selectedTrain.value = train;
}

// Получение списка тренировок
onMounted(async () => {
  try {
    const data = await getTrains();
    trains.value = data;
    selectedDate.value = sortedDates.value[0];
  } catch (error) {
    console.log(error.message);
  }
});
</script>

<style lang="scss">
@use "@/styles/variables.scss" as *;

.table-title {
  text-align: center;
  font-size: 48px;
  margin-bottom: 6rem;
  font-family: $text-secondary;
}

.table-section {
  height: 161.2rem;

  .carousel__next,
  .carousel__prev {
    color: $color-light;

    svg {
      cursor: pointer;
    }
  }

  .carousel__next:hover,
  .carousel__prev:hover {
    color: $color-purple;
    cursor: pointer;
  }

  .carousel__next--disabled,
  .carousel__prev--disabled {
    color: transparent;
  }

  .table-dates {
    margin-bottom: 6rem;
    display: flex;

    .dates-item {
      width: 35.6rem;
    }
  }

  .table-container {
    position: relative;
    align-items: start;
    display: flex;
    justify-content: space-between;
    padding-block: 4rem;

    .table-img {
      position: absolute;
      z-index: -1;
      left: -6rem;
      top: 0;
    }

    .trains-list {
      width: 41.3rem;

      .trains-item {
        cursor: pointer;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20rem;
        background-color: $color-light;
        color: $color-dark;
        border-radius: 2rem;
        margin-bottom: 6rem;

        .trains-time {
          position: absolute;
          left: 3rem;
          top: 2rem;
          margin-block: 0;
        }

        .trains-hall {
          position: absolute;
          left: 3rem;
          bottom: 2rem;
          margin-block: 0;
        }
      }

      .purple {
        background-color: $color-purple;
        color: $color-white;
      }
    }

    .train-container {
      position: relative;
      width: 82.2rem;
      box-sizing: border-box;
      border-radius: 2rem;
      border: solid 2px $color-purple;
      padding: 3rem;

      p {
        margin-block: 0;
        margin-bottom: 3rem;
      }

      .train-hall {
        position: absolute;
        top: 3rem;
        right: 3rem;
      }

      .train-coach {
        margin-bottom: 11rem;
      }

      .train-btn {
        position: absolute;
        bottom: 3rem;
      }
    }
  }
}
</style>
