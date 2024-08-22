<script setup lang="ts">
</script>

<template>
    <NuxtLayout>
        <h1 class="title">¡Bienvenidas y bienvenidos!</h1>
        
        A continuación encontrarán toda la información sobre mis cursos del semestre 2024-II.

        <div class="columns">
            <div class="column pt-6">
                <NuxtLink to="/fciencia"><h2 class="subtitle mb-2">Filosofía de las Ciencias</h2></NuxtLink>

                <p><strong>Horario:</strong> Martes 14:30-17:20</p>

                <p><strong>Sala:</strong> A42</p>

                <p><strong>Ayudante:</strong> Alexandra Silva</p>             
                            
                <p><strong>Correo electrónico:</strong> alsilvaru@alumnos.uahurtado.cl</p>

                <p><strong>Contraseña:</strong> fcienciauah2024</p>

                <ButtonCourseFolder class="m-4" folderLink="https://cloud.juanrloaiza.com/s/HnMn5CmDaEosXKo" />
            </div>

            <div class="column pt-6">
                <NuxtLink to="/wittgenstein"><h2 class="subtitle mb-2">Seminario: Wittgenstein</h2></NuxtLink>

                <p><strong>Horario:</strong> Viernes 08:30-11:20</p>

                <p><strong>Sala:</strong> D11</p>

            </div>

        </div>
    </NuxtLayout>
</template>