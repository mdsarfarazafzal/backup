<script setup>
import EventBus from '@/EventBus';
import { ref } from 'vue';

const name = ref(" Vue");
const condition = ref(false);

function changeColor() {
    condition.value = !condition.value;
}

EventBus.on('myEventBus', (msg) => {
    name.value = msg;
})

</script>
<template>
    <p class="text-2xl font-bold cursor-pointer" @click="changeColor"
        :class='condition ? "text-green-500" : "text-gray-800"'>{{ name }}
    </p>
</template>
<style scoped></style>