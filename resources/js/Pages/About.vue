<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import presentation from '@/assets/videos/about.mp4'
</script>

<template>
    <AppLayout title="A Propos">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                A Propos
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div>
                        <div class="p-6 lg:p-8 bg-white">
                            <video autoplay loop :src=presentation class="mt-2 text-gray-500 leading-relaxed rounded-2xl"></video>
                        </div>

                    </div>
                    <div class="mt-5">
                        <h1 class="text-center font-bold underline">Contactez-nous</h1>
                        <div class="grid grid-cols-2 font-bold">
                            <div class="text-center m-2 p-3 bg-green-500 rounded-lg hover:bg-green-900 transition-all ease-in-out duration-700">
                                <a href="https://wa.me/697540004" class="hover:underline">
                                    +237 697-540-004
                                </a>
                            </div>
                            <div class="text-center m-2 p-3 bg-green-500 rounded-lg hover:bg-green-900 transition-all ease-in-out duration-700">
                                <a href="https://contact@lorondoservices.com" class="hover:underline">
                                    ceo@travelinstitute.com
                                </a>
                            </div>
                            <div class="text-center m-2 p-3 bg-green-500 rounded-lg hover:bg-green-900 transition-all ease-in-out duration-700">
                                <a href="https://wa.me/652729742" class="hover:underline">
                                    +237 652-729-742
                                </a>
                            </div>
                            <div class="text-center m-2 p-3 bg-green-500 rounded-lg hover:bg-green-900 transition-all ease-in-out duration-700">
                                <a href="https://contact@lorondoservices.com" class="hover:underline">
                                    infos@travelinstitute.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
