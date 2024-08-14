<template>
    <div class="is-flex is-flex-direction-column mb-5">
      <BackpackIcon/>
      <p class="is-size-5">Juan R. Loaiza</p>
      <p>2024-II</p>
    </div>
    <nav>
      <ContentNavigation v-slot="{ navigation }">
          <ul v-for="link of navigation" :key="link._path" class="nav-link">
            <li v-for="sublink of link.children" >
              <NuxtLink :to="sublink._path">{{ sublink.title }}</NuxtLink>
            </li>
          </ul>
      </ContentNavigation>
    </nav>
</template>

<style scoped>
img {
  max-width: 10rem;
  border: 1px solid black;
  border-radius: 100px;
  margin-bottom: 2rem
}

li {
  margin: 0.2rem 0;
}

ul > li:not(:first-child) > a {
 padding-left: 1.5rem
}

</style>