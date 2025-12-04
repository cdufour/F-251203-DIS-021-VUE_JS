<script setup>
import { reactive, onMounted } from 'vue'
import axios from 'axios'
import UserCard from './Card.vue'
import { useToast } from 'vue-toast-notification'

const API = 'http://localhost:3000/users';

const $toast = useToast();

// state
let state = reactive({
    users: []
})

async function getUsers() {
    const res = await axios.get(API);
    
    state.users = res.data; // state update
}

onMounted(() => {

    getUsers();
    
})

const deleteUser = async (id) => {
    console.log('List => delete', id);

    // requête http
    try {
        const res = await axios.delete(API + '/' + id);
        //console.log(res.status);
        $toast.success('Utilisateur supprimé');

        // update front par nouvelle requête ajax 
        getUsers();

        //let usersCopy = [...state.users];
        //console.log(usersCopy);
        //console.log(usersCopy)
        //state.users = usersCopy;
        
        // update front sans redemander la liste à l'API
        //state.users = state.users.filter(user => user.id != id);

    } catch (err) {
        console.log(err);
        $toast.error('Impossible de supprimer');
    }

}


</script>

<template>
    
   <UserCard 
        v-for="user in state.users"
        :key="user.id"
        :user="user"
        :onDelete="deleteUser"
    />


</template>

<!-- EXO FIN J2
Créer un composant permettant d'enregistrer un nouvel utilisateur sans l'API.
Ce composant sera un enfant du composant List

Tip: pour récupérer les saisies (name, firstname) vous pouvez utiliser la directive
v-model
-->