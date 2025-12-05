import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++;
  }
  function decrement() {
    count.value--;
  }
  function incrementBy(amount) {
    count.value += amount;
  }
  function decrementBy(amount) {
    count.value -= amount;
  }

  return { count, doubleCount, increment, decrement, incrementBy, decrementBy }
})

export default useCounterStore;
