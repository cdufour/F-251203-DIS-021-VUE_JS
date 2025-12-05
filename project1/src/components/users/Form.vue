<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { API, ADD_USER_SUCCESS } from './constants'
import { useToast } from 'vue-toast-notification'

let lastname = ref('');
let name = ref('');

const $toast = useToast();
const emit = defineEmits(['save']);

async function onSave() {
    
    // TODO: input validation

    // http request
    const data = {
        lastname: lastname.value,
        name: name.value
    };

    try {
        const res = await axios.post(API, data);
        $toast.success(ADD_USER_SUCCESS);

        emit('save', res.data);
    } catch (err) {

    }
    
    

}

</script>

<template>
    
    <input type="text" placeholder="Prénom" v-model="name" />
    <input type="text" placeholder="Nom" class="ms-2" v-model="lastname" />
    <button
        class="btn btn-sm btn-primary ms-2" 
        @click="onSave">Enregistrer</button>

</template>