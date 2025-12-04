<script setup>

const props = defineProps(['user', 'onDelete'])
const { id, name, lastname } = props.user;

function onDelete(id) {
    console.log('Card => delete', id);
    props.onDelete(id);
}

</script>


<template>
    <h3>{{ name }}</h3>
    <p>{{ lastname }} ({{ id }})</p>

    <div>
        <button @click="onDelete(id)">Supprimer</button>
    </div>


</template>