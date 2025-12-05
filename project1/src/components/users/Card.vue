<script setup>

const props = defineProps(['user', 'onDelete'])
const { id, name, lastname } = props.user;

function onDelete(id) {
    console.log('Card => delete', id);
    props.onDelete(id);
}

</script>


<template>
    <div class="card mb-4 p-2">
        <h3 :class="{ 
            premium: name.length > 8,
            focus: false
        }">{{ name }}</h3>
        
        <p>{{ lastname }} ({{ id }})</p>

        <div>
            <button
                class="btn btn-danger btn-sm" 
                @click="onDelete(id)">Supprimer</button>
        </div>
    </div>
</template>

<style scoped>
h3 {
    color: #2e9ab3
}

.premium {
    font-size: 4em
}

.focus {
    text-decoration: underline
}

</style>