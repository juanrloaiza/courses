<script setup lang="ts">
const { folderLink } = defineProps({
    folderLink: String
})

</script>

<template>
    <a class="button" target="_blank" rel="noopener noreferrer" :href="folderLink">Carpeta del curso</a>
</template>