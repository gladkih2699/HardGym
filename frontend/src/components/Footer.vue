<template>
  <footer class="footer" id="footer">
    <div class="container">
      <div class="footer-first-container">
        <div class="footer-column-logo">
          <h1 class="footer-logo">HardFit</h1>
          <p>HardFit.com</p>
        </div>
        <div class="footer-column">
          <h2>О НАС</h2>
          <p>История компании</p>
          <p>Корпоративный фитнес</p>
        </div>
        <div class="footer-column">
          <h2>УСЛУГИ</h2>
          <p>Тренажерный зал</p>
          <p>Индивидуальные занятия</p>
          <p>Групповые занятия</p>
        </div>
        <div class="footer-column">
          <h2>СВЯЗАТЬСЯ С НАМИ</h2>
          <p>8-800-555-35-35</p>
          <p>с 9:00 до 20:00 по Москве</p>
          <p>г. Москва</p>
          <p>ул. Песчаная 22</p>
        </div>
        <div class="footer-column-input">
          <h2>Узнавайте раньше всех об акциях</h2>
          <input type="text" class="footer-input" placeholder="Email"/>
          <span>
            Подписываясть на рассылку вы соглашаетесь с правилами обработки
            данных.
          </span>
        </div>
      </div>
      <div class="footer-second-container">
        <span>ИП Иванов Н. С., ИНН 771225338796 </span>
        <span>© 2020–2025</span>
        <span>Политика конфиденциальности</span>
      </div>
    </div>
  </footer>
</template>


<script setup></script>


<style lang="scss">
@use "@/styles/variables.scss" as *;

.footer {
  font-size: 20px;
  padding-top: 15rem;
  margin-bottom: 3rem;

  .footer-first-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6rem;

    h1 {
      font-family: $text-logo;
      color: $color-purple;
    }

    h2 {
      margin-bottom: 2rem;
    }

    p {
      margin-bottom: 1rem;
    }

    .footer-column {
      max-width: 18rem;
    }

    .footer-column-input {
      width: 35.5rem;
      font-size: 16px;

      h2 {
        margin-bottom: 3rem;
      }

      .footer-input {
        display: block;
        width: 100%;
        margin-bottom: 2rem;
        height: 4rem;
        background-color: transparent;
        color: $color-white;
        padding-inline: 3rem;
        box-sizing: border-box;
        font-size: 20px;
        border: solid 1px $color-white;
        border-top: none;
        border-bottom-left-radius: 4rem;
        border-bottom-right-radius: 4rem;
      }

      span {
        font-size: 16px;
      }
    }
  }
  .footer-second-container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
