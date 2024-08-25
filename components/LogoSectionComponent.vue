<script setup lang="ts">
interface ImageModule {
  default: string;
}

const logos = ref([
  { name: "dell" },
  { name: "zendesk" },
  { name: "rakuten" },
  { name: "pacificfunds" },
  { name: "ncr" },
  { name: "lattice" },
  { name: "ted" },
]);

const images: Record<string, ImageModule> = import.meta.glob(
  "../assets/images/*.png",
  { eager: true },
);
const getImageUrl = (name: string) => {
  const path = `../assets/images/${name}.png`;
  return images[path]?.default || "";
};
</script>

<template>
  <div
    class="logo-section py-8 sm:py-12 md:py-[60px] px-4 sm:px-5 w-full sm:w-4/5 md:w-2/3 mx-auto"
  >
    <p class="text-lg sm:text-xl text-white text-center mb-6 sm:mb-10">
      Trusted by teams at over 1,000 of the world's leading organizations
    </p>
    <div
      class="logos flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-x-10 md:gap-y-4"
    >
      <template v-for="logo in logos" :key="logo.name">
        <img
          :src="getImageUrl(logo.name)"
          :alt="`${logo.name}-logo`"
          class="h-5 w-auto"
        />
      </template>
    </div>
  </div>
</template>
<style scoped></style>
