<script setup>
import axios from 'axios'
import { reactive, onMounted } from 'vue'

let state = reactive({
    articles: []
})

onMounted(async () => {

    const res = await axios.get('http://localhost:3000/articles');
    state.articles = res.data; // state update

})

</script>

<template>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        <div class="col" v-for="article in state.articles">
            article
        </div>

    </div>
</template>