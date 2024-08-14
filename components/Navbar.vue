<template>
    <nav>
      <ContentNavigation v-slot="{ navigation }">
        <ul>
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
            <ul>
                <li v-for="sublink of link.children">
                    <NuxtLink :to="sublink._path">{{ sublink.title }}</NuxtLink>
                </li>
            </ul>
          </li>
        </ul>
      </ContentNavigation>
    </nav>
  </template>