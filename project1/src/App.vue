<script setup>
  import CodeGen from '@/components/exos/CodeGen.vue'
  
  const title = "Formation Vuejs";
  const cars = [
    { brand: 'Fiat 500', color: 'red' },
    { brand: 'Toyota Yaris', color: 'green' },
    { brand: 'Citroen C3', color: 'orange' }
  ];
</script>

<template>
  <h1>{{ title }}</h1>

  <ul>
    <li v-for="car in cars">{{ car.brand }}</li>
  </ul>


  <img src="" />

  <CodeGen :withLetters="true" />
  <CodeGen :withLetters="false" />

</template>


