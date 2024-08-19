<script setup lang="ts">
const isActive = useState('isActive', () => false)

</script>

<template>
    <div class="is-hidden-mobile is-flex-desktop is-flex-direction-column my-5">
      <BackpackIcon/>
      <p class="is-size-5">Juan R. Loaiza</p>
      <p>2024-II</p>
    </div>

    <nav class="navbar is-hidden-tablet" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a :aria-expanded="isActive" 
            aria-label="menu"
            @click="isActive = !isActive" 
            role="button"
            class="navbar-burger" 
            data-target="mynav">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="mynav" class="navbar-menu" :class="{ 'is-active' : isActive }">
        <ContentNavigation  v-slot="{ navigation }">
        <!-- MOBILE MENU  -->
        <div class="navbar-start">
            <NuxtLink class="navbar-item" to="/">Inicio</NuxtLink>
          <span class="navbar-parent" v-for="link of navigation" :key="link._path">
              <NuxtLink 
              class="navbar-item" 
              v-for="sublink of link.children"
              :to="sublink._path">
              
                {{ sublink.title }}
              </NuxtLink>
          </span>
        </div>
      </ContentNavigation>
      </div>
    </nav>

    <aside class="is-hidden-touch menu menu-list">
        <ContentNavigation v-slot="{ navigation }">
            <NuxtLink class="menu-item" to="/">Inicio</NuxtLink>
          <ul class="menu-list menu-parent" v-for="link of navigation" :key="link._path">
              <li v-for="sublink of link.children">
                <NuxtLink :to="sublink._path">
                {{ sublink.title }}
                </NuxtLink>
              </li>
            </ul>
      </ContentNavigation>
    </aside>
</template>

<style scoped>
img {
  max-width: 10rem;
  border: 1px solid black;
  border-radius: 100px;
  margin-bottom: 2rem
}

.navbar-parent > a:not(:first-child),
.menu-parent > li:not(:first-child) {
 padding-left: 1.5rem
}

.navbar-menu {
  box-shadow: none;
  border-bottom: #ddd solid 1px;
  margin-bottom: -1rem;
  margin-top: -1rem;
}

</style>