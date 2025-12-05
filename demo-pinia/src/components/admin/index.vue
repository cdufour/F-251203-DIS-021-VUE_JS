<script setup>
import { computed, ref } from 'vue'
import useCounterStore from '@/stores/counter'

const $store = useCounterStore();

const count = computed(() => $store.count)

let amount = ref(0);
</script>

<template>
  <div class="row">
    <h1>Admin</h1>
    <hr />
    <div class="col-sm-5">
      <p>
        <strong> Change count: {{ count }} </strong>
      </p>

      <div>
        <label class="form-label">By how much</label>
        <input type="number" class="form-control" v-model="amount" />
      </div>
      <br />

      <button 
        type="button"
        @click="$store.incrementBy(amount)"
        class="btn btn-primary me-3">+</button>
      <button 
        type="button"
        @click="$store.decrementBy(amount)"
        class="btn btn-outline-secondary">-</button>
    </div>
  </div>
</template>