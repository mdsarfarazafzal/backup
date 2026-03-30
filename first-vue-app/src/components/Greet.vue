<script setup>
import { ref } from 'vue';
import Input from './Input.vue';
import EventBus from '@/EventBus';

const amount = ref(100);
const recieve = ref('');

const handleChildEmit = (data) => {
    recieve.value = data;
    EventBus.emit('myEventBus', recieve.value);

}

const condition = () => {
    return recieve.value == "abcd" ? true : false;
}


</script>
<template>
    <Input :random="amount" type="text" @sendDataToParent="handleChildEmit" />
    <p class="text-2xl">Recieved from child: {{ recieve }}</p>
    <p v-if="condition()" class="text-2xl">Secret Unlocked</p>
    <p v-else>Try abcd to unlock</p>
</template>
<style scoped></style>