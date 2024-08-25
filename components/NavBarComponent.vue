<script setup lang="ts">
const navItems = ref([
  { name: "Features", link: "/" },
  { name: "Pricing", link: "/" },
  { name: "About us", link: "/" },
]);

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<template>
  <div class="nav-container pt-[30px]">
    <nav
      class="text-center text-white m-auto rounded-[25px] px-10 bg-blue_dark_middle w-[90%]"
    >
      <div class="nav-content flex justify-between items-center h-[72px]">
        <CompanyComponent />
        <div class="navbar-menu hidden md2:flex justify-between">
          <template v-for="navItem in navItems" :key="navItem.name">
            <NuxtLink
              :target="navItem.link"
              class="nav-link px-6 py-3 cursor-pointer transition-all relative before:content-[''] before:absolute before:w-0 before:h-[1px] before:bg-white before:bottom-0 before:left-1/2 before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:bottom-0 after:right-1/2 after:transition-all after:duration-300 hover:after:right-0 hover:after:w-full"
              >{{ navItem.name }}
            </NuxtLink>
          </template>
        </div>
        <ButtonComponent
          class="hidden md2:block"
          :height="'h-10'"
          :label="'Download the app'"
        />
        <button @click="toggleDropdown" class="md2:hidden text-white">
          <img src="../assets/images/menu-burger.svg" alt="menu-icon" />
        </button>
      </div>

      <div
        v-if="isDropdownOpen"
        class="dropdown-menu md2:hidden flex flex-col items-center"
      >
        <template v-for="navItem in navItems" :key="navItem.name">
          <NuxtLink
            :target="navItem.link"
            class="nav-link block px-6 py-3 cursor-pointer rounded-[25px] hover:bg-blue_dark_middle w-full"
            >{{ navItem.name }}</NuxtLink
          >
        </template>
        <NuxtLink
          target=""
          class="nav-link block px-6 py-3 cursor-pointer rounded-[25px] mb-7 hover:bg-blue_dark_middle w-full"
          >{{ "Download the app" }}</NuxtLink
        >
      </div>
    </nav>
  </div>
</template>
