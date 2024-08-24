<script setup lang="ts">
const navItems = ref([
  { name: "Features", link: "/" },
  { name: "Pricing", link: "/" },
  { name: "About us", link: "/" },
]);
</script>

<template>
  <div class="nav-container h-[120px] pt-[30px]">
    <nav
      class="text-center text-white m-auto rounded-[25px] h-[72px] px-10 bg-blue_dark_middle w-[90%]"
    >
      <div class="nav-content flex justify-between items-center h-[72px]">
        <CompanyComponent />
        <div class="navbar-menu flex justify-between">
          <template v-for="navItem in navItems" :key="navItem.name">
            <NuxtLink :target="navItem.link" class="nav-link px-6 py-3">{{
              navItem.name
            }}</NuxtLink>
          </template>
        </div>
        <ButtonComponent />
      </div>
    </nav>
  </div>
</template>
