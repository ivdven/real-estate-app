<template>
  <header class="mobile-header" v-if="isMobile">
    <div class="hamburger-menu">
      <Icon class="hamburger-icon"
        :name="'hamburger-menu'"
        :class="'icon-hamburger-menu'"
        @click="toggleMenu"
      />
      <transition name="slide">
        <div class="menu-overlay" v-if="isMenuOpen" @click.self="closeMenu">
          <nav class="mobile-navigation">
            <ul class="mobile-nav-menu">
              <li 
                v-for="item in menuItems.slice(2)" 
                :key="item.id" 
                class="mobile-nav-item"
                @click="closeMenu"
              >
                <router-link 
                  :to="item.path" 
                  class="mobile-nav-link"
                  active-class="active-link"
                >
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </transition>
    </div>
    <h1 class="home-header-1">{{ props.nameHeader }}</h1>
  </header>

  <header v-else class="desktop-header" >
    <div class="logo-section">
      <h1 class="logo-title">Mango<br> Real<br> Estate</h1>
      <Icon 
        :class="'logo'" 
        :name="'mango_logo'"
      />
    </div>
    <nav class="navigation">
      <ul class="nav-menu-1">
        <li v-for="item in menuItems.slice(0, 2)" :key="item.id" class="nav-item">
          <router-link :to="item.path" class="nav-link" active-class="active-link">{{ item.label }}</router-link>
        </li>
      </ul>
      <ul class="nav-menu-2">
        <li v-for="item in menuItems.slice(2)" :key="item.id" class="nav-item">
          <router-link :to="item.path" class="nav-link" active-class="active-link">{{ item.label }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useBreakpoint } from '@/composables/useBreakPoint';
import Icon from './Icon.vue';
import { ref } from 'vue';

const { isMobile } = useBreakpoint()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const isMenuOpen = ref(false)
const closeMenu = () => {
  isMenuOpen.value = false
}

const props = defineProps({
  nameHeader: {
    type: String,
  },
})

const menuItems = [
  { id: 1, label: 'Home', path: '/'},
  { id: 2, label: 'About', path: '/about'},
  { id: 3, label: 'Login', path: '/login'},
  { id: 4, label: 'Signup', path: '/register'}
]
</script>

<style scoped>
.desktop-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 4rem 2.5rem 4rem;
  background-color: var(--color-background);
}
.mobile-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 4rem 2rem 4rem;
}
.mobile-header .home-header-1 {
  font-size: var(--font-size-mobile-heading-1);
  font-family: var(--font-primary);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.hamburger-menu {
  display: flex;
  flex-direction: column;
  margin-right: auto;
}
.icon-hamburger-menu {
  width: 2em;
  height: 2em;
}
.menu-overlay {
  position: fixed;
  top: 12;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
.logo-section {
  display: flex;
  align-items: center;
}
.logo-title {
  font-size: var(--font-size-desktop-heading-1);
  font-family: var(--font-primary);
  color: var(--color-text-dark);
}
.logo {
  width: 6rem;
  height: 6rem;
}
.navigation {
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-xl);
}
.mobile-navigation {
  margin-left: 1.7rem;
}
.nav-menu-1,
.nav-menu-2 {
  display: flex;
  gap: var(--spacing-md);
  list-style-type: none;
}
.mobile-nav-menu {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-top: 3rem;
}
.nav-link {
  text-decoration: none;
  color: var(--color-text-dark);
  font-size: var(--font-size-desktop-heading-2);
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-regular);
  transition: var(--transition-fast);
}
.mobile-nav-link {
  text-decoration: none;
  color: var(--color-text-dark);
  font-size: var(--font-size-mobile-base);
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-regular);
  transition: var(--transition-fast);
}
.nav-link.active-link,
.mobile-nav-link.active-link {
  color: var(--color-primary);
  font-weight: var(--font-weight-regular);
}
</style>