<template>
  <div>
    <NuxtRouteAnnouncer />
    <WelcomePage />
  </div>
</template>

<script setup>
import { useHead } from '#imports'

useHead({
  title: 'Nuxt + Tailwind',
  meta: [
    {
      name: 'description',
      content: 'Explore the possibilities of a modern frontend framework',
    },
  ],
})
import WelcomePage from '~/components/WelcomePage.vue'
</script>