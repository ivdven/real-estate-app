<template>
  <div id="app">
    <Header :name-header="currentHeaderName" />
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
    <Footer v-if="isMobile" />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from './components/Footer.vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useBreakpoint } from './composables/useBreakPoint';

const currentHeaderName = ref('')

const route = useRoute()
const { isMobile } = useBreakpoint()


watch(() => route.meta.headerName, (newHeaderName) => {
  currentHeaderName.value = newHeaderName as string || 'Home'
}, { immediate: true })
</script>
