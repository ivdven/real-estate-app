<template>
  <component 
    :is="icon" 
    :style="{ fill: isColorActive }"
    :class="{ 'icon-active': route.path === props.path }"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  path: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: 'currentColor'
  },
  activeColor: {
    type: String,
    default: '#b472c5'
  },
  inactiveColor: {
    type: String,
    default: '#333333'
  }
});

const route = useRoute();

const icon = computed(() => 
  defineAsyncComponent(() => import(`@/assets/icons/${props.name}.svg`))
);

const isColorActive = computed(() => {
  return route.path === props.path ? props.activeColor : props.inactiveColor;
});
</script>

<style scoped>
:deep(path) {
  transition: fill 0.3s ease;
}

.icon-active:deep(path) {
  fill: v-bind('props.activeColor') !important;
}
</style>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>
