<script setup>

// import { ref } from 'vue';
import Greet from '@/components/Greet.vue';
import Name from '@/components/Name.vue';
import './style.css'

// const greet = ref("Hello");
</script>

<template>
  <!-- <h1>{{ greet }}</h1> -->
  <div class="min-h-screen flex flex-col justify-center items-center gap-3">
    <Name />
    <Greet />
  </div>
</template>

<style scoped></style>
