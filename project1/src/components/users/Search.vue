<script setup>
import { ref } from 'vue';

let search = ref('');

const emit = defineEmits(['search']);

function onKeyUp(e) {
    let value = e.target.value;
    emit('search', value);
}

</script>


<template>

    <div class="my-4">
        <input 
            @keyup="onKeyUp"
            type="text" 
            placeholder="rechercher" 
        />
    </div>

</template>