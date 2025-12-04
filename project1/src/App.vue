<script setup>
  import CodeGen from '@/components/exos/CodeGen.vue'
  import TextLimit from '@/components/exos/TextLimit.vue'
  import UserList from '@/components/users/List.vue'
  
  const title = "Formation Vuejs";
  const cars = [
    { brand: 'Fiat 500', color: 'red' },
    { brand: 'Toyota Yaris', color: 'green' },
    { brand: 'Citroen C3', color: 'orange' }
  ];
</script>

<template>
  <app-header />
  <h1>{{ title }}</h1>

  <!--
  <ul>
    <li v-for="car in cars">{{ car.brand }}</li>
  </ul>

  <CodeGen :withLetters="true" />
  <CodeGen :withLetters="false" />
  <TextLimit :limit="50" />
  -->

  <UserList />
  

</template>


