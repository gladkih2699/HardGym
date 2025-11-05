<template>
    <main>
        <div class="container">
            <div class="sub-container">

                <h1 class="subscriptions-title">Абонементы</h1>
                <div class="subscriptions-list">
                    <SubCard :subscribtion="subs[0]"/>
                    <SubCard :subscribtion="subs[1]"/>
                    <SubCard :subscribtion="subs[2]"/>
                </div>
            </div>
        </div>
    </main>
    <UserModal />
</template>


<script setup>
import UserModal from '@/components/modals/UserModal.vue';
import SubCard from '@/components/SubCard.vue';

// Информация об абонементах
let subs = [
    {
        title: 'Lite',
        advantages: ['безлимитный доступ в клубы', 'тренажерный зал', 'анализ состава тела'],
        price: 1500
    },
    {
        title: 'Plus',
        advantages: ['безлимитный доступ в клубы', 'тренажерный зал', 'анализ состава тела', 'групповые занятия', 'семейный доступ'],
        price: 2500
    },
    {
        title: 'Super',
        advantages: ['безлимитный доступ в клубы', 'тренажерный зал', 'анализ состава тела', 'групповые занятия', 'семейный доступ', 'доступ для друзей', '3 индивидуальные тренировки с любым трениром далее за доп. плату'],
        price: 3500
    },
]
</script>


<style lang="scss">
@use '@/styles/variables.scss' as *;

    .subscriptions-title {
        text-align: center;
        font-size: 48px;
        font-family: $text-secondary;
    }

    .subscriptions-list {
        display: flex;
        justify-content: space-between;
        gap: 4rem;
    }

</style>