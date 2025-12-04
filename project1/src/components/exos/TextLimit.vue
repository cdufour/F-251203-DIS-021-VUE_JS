<script setup>
import { ref } from 'vue'

const props = defineProps(['limit']);
let inputLen = ref(0);

let alertInput = false;
const alertThreshold = 75/100;
let alertColor = ref('#000');

function onKeyUp(e) {
    let len = e.target.value.length;
    
    if (len <= props.limit) {
        inputLen.value = len; // state update

        if (len > Math.floor(parseInt(props.limit) * alertThreshold)) {
            alertInput = true;
            alertColor.value = '#ff0000';
        } else {
            alertColor.value = '#000';
        }

    } else {
        e.target.value = e.target.value.substr(0, props.limit);
    }
}

</script>

<template>
    <h2>TextLimit</h2>
    <textarea @keyup="onKeyUp"></textarea>
    <span :style="{ color: alertColor }">{{ inputLen }}</span> / <span>{{ props.limit }}</span>

</template>