<script setup>
  import CodeGen from '@/components/exos/CodeGen.vue'
  import TextLimit from '@/components/exos/TextLimit.vue'
  import UserList from '@/components/users/List.vue'
  import Edugame from '@/components/edugame/index.vue'
  const title = "Formation Vuejs";
</script>

<template>
  <app-header />
  <h1>{{ title }}</h1>
  <!--
  <CodeGen :withLetters="true" />
  <CodeGen :withLetters="false" />
  <TextLimit :limit="50" />
  <UserList />
  -->
</template>


