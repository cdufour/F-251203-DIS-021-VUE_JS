<script setup>
import { reactive, onMounted, computed } from 'vue'
import axios from 'axios'
import UserCard from './Card.vue'
import UserForm from './Form.vue'
import UserSearch from './Search.vue'
import { useToast } from 'vue-toast-notification'
import { API} from './constants'

const $toast = useToast();

// state
let state = reactive({
    users: []
})

let usersOriginal = []; // read-only

const listMessage = computed(() => {
    if (state.users.length > 0) {
        return state.users.length + ' utilisateurs';
    } else {
        return 'aucun utilisateur';
    }
})

async function getUsers() {
    const res = await axios.get(API);
    
    state.users = res.data; // state update
    usersOriginal = res.data;
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

const onSave = (e) => {
     getUsers(); // reload list from API
}

const onSearch = (e) => {
    console.log(e);

    // filter users
    if (e.length > 2) {
        state.users = usersOriginal.filter(user => user.name.includes(e));
    } else {
        state.users = usersOriginal;
    }
    
}

</script>

<template>
    <div class="p-4">

        <h3>Liste des utilisateurs ({{ listMessage }})</h3>

        <UserSearch @search="onSearch" />

        <UserCard 
            v-for="user in state.users"
            :key="user.id"
            :user="user"
            :onDelete="deleteUser"
        />
    </div>

    <div class="p-4">
        <UserForm @save="onSave" />
    </div>

</template>

<style>

</style>