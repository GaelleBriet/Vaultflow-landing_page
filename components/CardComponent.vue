<script lang="ts" setup>
interface ImageModule {
  default: string;
}

defineProps<{
  title: string;
  content: string;
  logo: string;
  link: string;
  image?: string;
}>();

const images: Record<string, ImageModule> = import.meta.glob(
  "../assets/images/*.png",
  { eager: true },
);
const getImageUrl = (logo: string) => {
  const path = `../assets/images/${logo}.png`;
  return images[path]?.default || "";
};
</script>
<template>
  <div
    class="card rounded-[20px] text-white shadow-custom p-6 sm:p-8 md:p-[60px] bg-custom-gradient from-custom-gradient-start to-custom-gradient-end"
  >
    <template v-if="!image">
      <div class="card-image mb-4 w-12 h-12">
        <img :src="getImageUrl(logo)" alt="icon" >
      </div>
      <div class="card-content flex flex-col">
        <p class="text-2xl sm:text-3xl mb-2.5 font-medium">{{ title }}</p>
        <p class="text-sm sm:text-base mb-2.5">
          {{ content }}
        </p>
        <p class="text-base underline cursor-pointer w-fit font-medium">
          {{ link }}
        </p>
      </div>
    </template>
    <template v-else>
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 mb-4 md:mb-0">
          <div class="card-image mb-4 w-12 h-12">
            <img :src="getImageUrl(logo)" alt="icon" >
          </div>
          <p class="text-2xl sm:text-3xl mb-2.5 font-medium">{{ title }}</p>
          <p class="text-sm sm:text-base mb-2.5">
            {{ content }}
          </p>
          <p class="text-base underline cursor-pointer w-fit font-medium">
            {{ link }}
          </p>
        </div>
        <div class="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            class="max-h-[250px] w-auto"
            :src="getImageUrl(image)"
            alt="image"
          >
        </div>
      </div>
    </template>
  </div>
</template>
