<script setup lang="ts">
</script>

<template>
    <NuxtLayout>
          <ContentDoc v-slot="{ doc }" >
            <h1 class="title">{{ doc.title }}</h1>
            <ContentRenderer :value="doc" class="content"/>
          </ContentDoc>
    </NuxtLayout>
  </template>

<style>
.content h2 {
  font-weight: 500;
}

.content h3, .content h4 {
  font-weight: 400;
}

a {
  color: #3679a6;

  &:hover{
    color: #2da4f4
  }
}

body{
  font-size: 12pt
}
</style>
  