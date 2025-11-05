<template>
  <main>
    <div class="container">
      <div class="not-f-container">
        <img src="@/assets/images/404.png" alt="" class="not-f-img"/>
        <p class="not-f-text">Упс... Страница не найдена</p>
      </div>
    </div>
  </main>
</template>


<script setup>
</script>


<style lang="scss">
.not-f-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 10rem;

    .not-f-img {
        width: 55rem;
    }
    
    .not-f-text {
        font-size: 48px;
    }
}
</style>
