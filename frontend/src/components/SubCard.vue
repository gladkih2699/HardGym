<template>
    <div class="sub-item">
        <h3 class="sub-title">{{ subscribtion.title }}</h3>
        <ul v-for="advantage in subscribtion.advantages" class="desc-list">
            <li class="desc-item"><CheckIcon/> {{ advantage }}</li>
        </ul>
        <p class="sub-price">{{ subscribtion.price }}₽ в месяц</p>
        <CardButton @click="openModal('user')"/>
    </div>
</template>


<script setup>
import CheckIcon from '@/assets/icons/CheckIcon.vue';
import CardButton from './ui/CardButton.vue';
import { inject, defineProps } from 'vue';

// Список типов модальных окон
const modals = inject("modals");
// Функция закрытия модального окна
const openModal = inject("openModal");

const props = defineProps({
    subscribtion: {
        type: Object,
        required: true,
    }
})
</script>


<style lang="scss">
    @use '@/styles/variables.scss' as *;

    .sub-item {
        background-color: $color-light;
        color: $color-dark;
        padding: 4rem 5rem;
        border-radius: 5rem;
        position: relative;
        width: 41.3rem;
        padding-bottom: 13rem;
    }
    
    .sub-title {
        text-align: center;
        font-size: 32px;
    }
    
    .desc-list {
        font-size: 20px;
        list-style-type: none;
        padding-left: 0;
    }

    .sub-price {
        position: absolute;
        bottom: 6rem;
    }
</style>