<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import presentation from '@/assets/videos/programme.mp4'
import e from '@/assets/videos/etudiant.mp4'
import e1 from '@/assets/videos/etudiants.mp4'
import e2 from '@/assets/videos/etudiants justif.mp4'
const videos = [e, e1, e2]
</script>

<template>
    <AppLayout title="Etudiants">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Etudiants
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div>
                        <div class="p-6 lg:p-8 bg-white border-b border-gray-200">
                            <h1 class="mt-8 text-2xl font-medium text-gray-900 text-center">
                                Vous êtes élèves et voulez continuer vos études à l'étranger ?
                            </h1>
                            <video autoplay loop controls :src=presentation class="mt-2 text-gray-500 leading-relaxed rounded-2xl"></video>
                        </div>
                        <div class="grid lg:grid-cols-3 mt-5 p-5">
                            <div v-for="(video, i) in videos" :key="i" class="border rounded-lg overflow-hidden m-5 shadow-green-950 shadow-lg hover:shadow-xl hover:shadow-green-950 transition-all ease-in-out duration-700">
                                <video autoplay="true" muted loop controls :src=video></video>
                                <h1 class="text-center uppercase font-bold text-green-900">Nos Etudiants</h1>
                                <div class="text-sm">
                                <!-- nothoong -->
                                </div>
                                <div class="border p-3 rounded-full w-fit mt-2 mb-3 mx-auto animate-pulse bg-green-700 font-bold"><a href="/admissions">Demarrer votre procedure ?</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
