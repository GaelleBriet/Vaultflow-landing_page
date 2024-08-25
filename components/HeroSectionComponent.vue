<script setup lang="ts"></script>

<template>
  <div
    class="hero-container w-11/12 sm:w-9/12 md:w-2/3 pt-[50px] mx-auto sm:mb-20 mb-10"
  >
    <div class="title-section w-full flex flex-col items-center">
      <div class="title-pill md2:text-base text-xs">
        We just raised $20M in Series B. Learn more
      </div>
      <div class="title-content">
        <h1
          class="text-mask-gradient text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mt-6 mb-6 text-center leading-tight"
        >
          Modern analytics<br />for the modern world
        </h1>
        <p
          class="w-full sm:w-4/5 md:w-3/5 text-white_65 m-auto text-sm sm:text-base md:text-lg"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
      <div
        class="title-actions h-30 sm:h-16 flex flex-col sm:flex-row text-center items-center sm:items-end gap-4 mb-20"
      >
        <ButtonComponent :height="'h-12'" :label="'Download the app'" />
        <ButtonComponent
          :height="'h-12'"
          :label="'Talk to an expert'"
          :inverted="true"
        />
      </div>
    </div>
    <div class="image-container w-full">
      <img src="../assets/images/charts-img.png" alt="charts-img" />
    </div>
  </div>
</template>

<style scoped></style>
