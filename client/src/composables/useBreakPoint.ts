import { ref, onMounted, onUnmounted, computed } from 'vue'

export function useBreakpoint() {
  const screenWidth = ref(window.innerWidth)
  const isMobile = computed(() => screenWidth.value <= 812)

  function checkScreen() {
    screenWidth.value = window.innerWidth
  }

  onMounted(() => {
    checkScreen()
    window.addEventListener('resize', checkScreen, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('resize', checkScreen)
  })

  return { 
    screenWidth, 
    isMobile
  }
}