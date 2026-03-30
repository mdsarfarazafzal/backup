<script setup>
import { ref, onUpdated, watch } from 'vue';

const greeting = ref('');

const emit = defineEmits(['sendDataToParent']);
const props = defineProps({ type: String, random: Number });
onUpdated(() => {
    console.log("onUpdated hook");

});
watch(greeting, (value) => {
    console.log(`Watching ${value}`)
})
const onChange = () => {
    emit('sendDataToParent', greeting.value);
}

</script>
<template>
    <p class="text-2xl">Recieved from Parent: {{ random }}</p>

    <!-- <p class="text-2xl">{{ greeting }}</p> -->
    <input @input="onChange" v-model="greeting" :type="type" class="p-3 border border-gray-800">
</template>
<style scoped></style>