<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import presentation from '@/assets/travel-logo-princ.jpg'
</script>

<template>
    <div>
        <div class="p-6 lg:p-8 bg-white border-b border-gray-200">
            <ApplicationLogo class="block h-12 w-auto" />

            <h1 class="mt-8 text-2xl font-medium text-gray-900">
                Bienvenue chez Travel Institute!
            </h1>

            <video autoplay loop :src=presentation class="mt-6 text-gray-500 leading-relaxed rounded-2xl"></video>
            <div class="text-justify mt-2 font-semibold">
                Nous avons pour mission de construire des partenariatsfiables et durables basés sur la confiance mutuelle, en offrant une gamme diversifiée de services avec chaque entreprise. Offrir une expérience professionnelle inoubliable dans les projets de nos partenaires.Notre objectif principal est de contribuer à l'économie nationale, dans les ressources humaines. Dans ce contexte, nous organisons un emploi convenable pour les personnes qualifiées, semi-qualifiées et travailleurs non qualifiés à travers la migration dans différents pays du monde et les rendres autonomes en apportant leur bien-être économique.
            </div>
        </div>

    </div>
</template>
