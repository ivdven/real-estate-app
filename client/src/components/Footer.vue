<template>
  <footer class="footer">
    <nav class="navigation">
      <ul class="nav-menu">
        <li class="nav-item" v-for="item in menuItems" :key="item.id">
          <router-link
            class="nav-link"
            :to="item.path"
          >
            <Icon 
              :name="item.iconName"
              :path="item.path"
              :class="item.iconName"
            />
          </router-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script setup lang="ts">
import Icon from '@/components/Icon.vue'

const menuItems = [
  { id: 1, label: 'Home', iconName: 'home', path: '/'},
  { id: 2, label: 'About', iconName: 'about', path: '/about'},
]
</script>

<style scoped>
.footer {
  display: flex;
  width: 100%;
  min-height: 4rem;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 1rem;
  border-top: 0.1px solid #e0e0e0;
  box-shadow: 0 -1px 6px rgba(0, 0, 0, 0.1);
  background-color: #FFFFFF;
}
.navigation {
  width: 100%;
}
.nav-menu {
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  list-style-type: none;
}
.nav-link {
  text-decoration: none;
}
.home,
.about {
  width: 1.5em;
  height: 1.5em;
}
</style>