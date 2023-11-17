<script setup>
import { Link } from '@inertiajs/vue3';
import logo_princ from '@/assets/travel-logo-princ.jpg'
</script>

<template>
    <Link :href="'/'">
        <img :src=logo_princ alt="Logo Image" class="h-40 w-40 rounded-full">
    </Link>
</template>
