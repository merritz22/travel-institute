<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
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
                    A propos de Travel Institute....
                </div>
            </div>
        </div>
    </AppLayout>
</template>
