<template>
  <main>
    <div class="container">
      <section class="first-train-section">
        <img
          src="@/assets/images/first-train.jpg"
          alt="first training image"
          class="first-train-img"
        />

        <h3 class="first-train-text">Твой результат - наша миссия</h3>
        <Button
          @click="openModal('user')"
          :class="['btn-light', 'btn-l']"
          :text="'Записаться на бесплатную тренировку'"
          :width="'97rem'"
        ></Button>
      </section>

      <section class="about-us-section">
        <div class="about-us-text-container">
          <h2 class="about-us-title">О Нас</h2>
          <p class="about-us-desc">
            HardFit - это современный клуб который отличается уютной атмосферой,
            передовым оборудованием и командой профессиональных тренеров,
            которые помогают подобрать индивидуальную программу тренировок.
          </p>
        </div>
        <div class="about-us-img-container">
          <img
            src="@/assets/images/gym.png"
            alt="Изображение тренажерного зала"
          />
          <img
            src="@/assets/images/yoga.png"
            alt="Изображение занятия по йоге"
          />
          <img
            src="@/assets/images/gym-inventory.png"
            alt="изображение инвентаря тренажерного зала"
          />
        </div>
      </section>

      <section class="directions-section">
        <h2 class="directions-title">Направления</h2>
        <div class="directions-list">
          <router-link to="/raspisanie-trenirovok" class="directions-item"
            >Фитнес</router-link
          >
          <router-link to="/raspisanie-trenirovok" class="directions-item"
            >Йога</router-link
          >
          <router-link to="/raspisanie-trenirovok" class="directions-item"
            >Танцы</router-link
          >
          <router-link to="/raspisanie-trenirovok" class="directions-item"
            >Бокс</router-link
          >
          <router-link to="/raspisanie-trenirovok" class="directions-item"
            >КроссФит</router-link
          >
          <router-link to="/raspisanie-trenirovok" class="directions-item"
            >Растяжка</router-link
          >
        </div>
      </section>

      <section class="typesof-train-section">
        <h2 class="typesof-train-title">Виды занятий</h2>
        <div class="typeof-train-list">
          <div class="typesof-train-item">
            <img
              src="@/assets/images/personal-train.png"
              alt="Изображение персональной тренировки"
            />
            <p class="typeof-train-desc">
              Персональные тренировки проводятся индивидуально с тренером,
              который разрабатывает программу, учитывая цели и возможности
              клиента.
            </p>
          </div>
          <div class="typesof-train-item">
            <img
              src="@/assets/images/group-train.png"
              alt="Изображение групповой тренировки"
            />
            <p class="typeof-train-desc">
              Групповые занятия включают тренировки в группе под руководством
              инструктора такие как йога, зумба или силовые классы.
            </p>
          </div>
          <div class="typesof-train-item">
            <img
              src="@/assets/images/self-train.png"
              alt="Изображение самостоятельной тренировки"
            />
            <p class="typeof-train-desc">
              Самостоятельные тренировки позволяют заниматься в тренажерном зале
              по своему графику и программе.
            </p>
          </div>
        </div>
        <Button
          @click="openModal('user')"
          :class="['btn-light', 'btn-l']"
          :text="'Записаться на бесплатную тренировку'"
        ></Button>
      </section>

      <section class="coaches-section">
        <h2 class="coaches-title">Тренерский состав</h2>
        <div class="coaches-container">
          <img src="@/assets/images/coach.png" alt="Изображение тренера" />
          <div class="coaches-desc">
            <p class="coaches-text">
              — это команда профессиональных тренеров, которые помогают
              посетителям достигать своих фитнес-целей.
            </p>
            <p class="coaches-text">
              В их арсенале богатый опыт знания в таких областях как в
              спортивной медицины, анатомии и программирования тренировок.
            </p>
            <p class="coaches-text">
              Тренеры разрабатывают индивидуальные планы занятий, проводят
              групповые тренировки, следят за техникой выполнения упражнений,
              обеспечивая безопасность, эффективность тренировочного процесса.
            </p>
            <p class="coaches-text">
              Благодаря профессионализму и внимательному подходу, тренерский
              состав помогает каждому клиенту стать сильнее, выносливее и
              увереннее в себе.
            </p>
            <router-link to="/trenerskiy-sostav">
              <Button
                :class="['btn-purple', 'btn-l']"
                :text="'Посмотреть тренерский состав'"
                :style="{ position: 'absolute', bottom: '0' }"
              ></Button>
            </router-link>
          </div>
        </div>
      </section>

      <section class="reviews-section">
        <h2 class="reviews-title">Отзывы</h2>
        <div class="reviews-list">
          <div
            v-for="review in reviews"
            :key="review.review_id"
            class="reviews-item"
          >
            <p class="reviews-name">{{ review.name }}</p>
            <span class="review-text">
              {{ review.review_text }}
            </span>
          </div>
        </div>
        <Button
          @click="openModal('review')"
          :class="['btn-purple', 'btn-m']"
          :text="'Написать отзыв'"
          width="41.3rem"
          :style="{ float: 'right' }"
        ></Button>
      </section>
    </div>
  </main>
  <UserModal />
  <ReviewModal />
</template>


<script setup>
import ReviewModal from "@/components/modals/ReviewModal.vue";
import UserModal from "@/components/modals/UserModal.vue";
import Button from "@/components/ui/Button.vue";
import { inject, onMounted, provide, ref } from "vue";
import { getReviews } from "@/api/Review";

// Список отзывов
const reviews = ref([]);

// Список типов модальных окон
const modals = inject("modals");
// Функция открытия модального окна
const openModal = inject("openModal");

provide("reviews", reviews);

// Получение списка отзывов
onMounted(async () => {
  try {
    const data = await getReviews();
    reviews.value = data;
  } catch (error) {
    console.log(error.message);
  }
});
</script>


<style lang="scss">
@use "@/styles/variables.scss" as *;

.first-train-section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: 89rem;
  padding-bottom: 6rem;
  box-sizing: border-box;

  .first-train-img {
    position: absolute;
    z-index: -1;
    top: 0;
  }

  .first-train-text {
    font-size: 48px;
    margin-bottom: 4rem;
    font-family: $text-secondary;
  }
}

.about-us-section {
  padding-top: 15rem;

  .about-us-text-container {
    display: flex;
    margin-bottom: 4rem;

    .about-us-title {
      font-size: 64px;
      min-width: 25rem;
      font-family: $text-secondary;
    }
  }

  .about-us-img-container {
    display: flex;
    justify-content: space-between;
  }
}

.directions-section {
  padding-top: 15rem;

  .directions-title {
    font-size: 64px;
    margin-bottom: 6rem;
    font-family: $text-secondary;
  }

  .directions-list {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;

    .directions-item {
      text-decoration: none;
      color: $color-white;
      font-size: 40px;
      border: 3px solid $color-purple;
      height: 8rem;
      width: 41.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 7rem;
      box-sizing: border-box;
      border-radius: 3rem;
    }

    .directions-item:hover {
      background-color: $color-purple;
      color: $color-light;
    }
  }
}

.typesof-train-section {
  padding-top: 15rem;

  .typesof-train-title {
    font-size: 64px;
    font-family: $text-secondary;
  }

  .typeof-train-list {
    flex-direction: column;
    display: flex;
    gap: 3rem;
    margin-bottom: 4rem;

    .typesof-train-item {
      display: flex;
      gap: 4rem;

      .typeof-train-desc {
        font-size: 40px;
      }
    }
  }
}

.coaches-section {
  padding-top: 15rem;

  .coaches-title {
    font-size: 64px;
    margin-bottom: 6rem;
    font-family: $text-secondary;
  }

  .coaches-container {
    display: flex;
    gap: 4rem;

    .coaches-desc {
      position: relative;

      .coaches-text {
        margin-bottom: 2rem;
        margin-top: 0;
      }
    }
  }
}

.reviews-section {
  padding-top: 15rem;

  .reviews-title {
    font-size: 64px;
    margin-bottom: 6rem;
    font-family: $text-secondary;
  }

  .reviews-list {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    margin-bottom: 4rem;

    .reviews-item {
      border: 2px solid $color-purple;
      padding: 3rem;
      border-radius: 4rem;
      box-sizing: border-box;
      width: 41.3rem;

      .reviews-name {
        margin-top: 0;
        margin-bottom: 3rem;
      }

      .review-text {
        font-size: 20px;
      }
    }
  }
}
</style>
