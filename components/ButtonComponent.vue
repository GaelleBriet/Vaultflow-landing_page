<script setup lang="ts">
defineProps<{
  height: string;
  label: string;
  inverted?: boolean;
}>();
</script>

<template>
  <div
    :class="[
      'button-border content-center text-base w-[189px] cursor-pointer',
      height,
      inverted
        ? 'bg-transparent border border-white text-white hover:bg-white hover:text-blue_dark'
        : 'bg-white text-blue_dark hover:bg-white_0 hover:text-white',
    ]"
  >
    {{ label }}
  </div>
</template>

<style scoped></style>
