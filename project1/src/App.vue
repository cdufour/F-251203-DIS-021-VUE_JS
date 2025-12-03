<template>
  <h1>{{ title }}</h1>

  <ul>
    <li v-for="car in cars">{{ car.brand }}</li>
  </ul>
</template>

<script setup>
  const title = "Formation Vuejs";
  const cars = [
    { brand: 'Fiat 500', color: 'red' },
    { brand: 'Toyota Yaris', color: 'green' },
    { brand: 'Citroen C3', color: 'orange' }
  ];
</script>
