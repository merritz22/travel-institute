<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import presentation from '@/assets/videos/a propos.mp4'
</script>

<template>
    <AppLayout title="Programmes">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Programmes
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div>
                        <div class="p-6 lg:p-8 bg-white border-b border-gray-200">
                            <h1 class="mt-8 text-2xl font-medium text-gray-900 text-center">
                                Oups ce contenue sera bientôt disponible.
                            </h1>
                            <video autoplay loop :src=presentation class="mt-2 text-gray-500 leading-relaxed rounded-2xl"></video>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
