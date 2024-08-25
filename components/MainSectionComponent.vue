<script setup lang="ts"></script>

<template>
  <div class="px-4 sm:px-6 md:px-8">
    <div class="section-title">
      <div
        class="title-content w-full sm:w-3/4 md:w-1/2 lg:w-1/4 text-3xl sm:text-4xl md:text-5xl font-medium text-center mx-auto mb-4 sm:mb-6"
      >
        Features that work for your future.
      </div>
      <div
        class="text-content w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-white text-center mx-auto mb-6"
      >
        Check out our amazing features and experience the power of Vaultflow for
        yourself.
      </div>
    </div>
    <div
      class="section-container mt-10 sm:mt-16 md:mt-20 w-full sm:w-11/12 md:w-10/12 mx-auto"
    >
      <div class="top-cards flex flex-col md:flex-row gap-6 mb-5">
        <CardComponent
          :title="'Analytics Dashboard'"
          :content="'Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights.'"
          :logo="'icon-1'"
          :link="'View dashboard'"
        />
        <CardComponent
          :title="'Digital Credit Tokens'"
          :content="'Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business.'"
          :logo="'icon-2'"
          :link="'View tokens'"
        />
      </div>
      <div class="bottom-card mt-6 sm:mt-8 md:mt-[60px]">
        <CardComponent
          :title="'Code collaboration'"
          :content="'Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it\'s coming from. Whether you\'re integrating data from multiple sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable.'"
          :logo="'icon-3'"
          :link="'View code collaboration'"
          :image="'card-image'"
        />
      </div>
    </div>

    <div class="downloads-card mt-6 sm:mt-8 md:mt-[60px]">
      <div
        class="container w-full sm:w-11/12 md:w-10/12 mx-auto mt-8 sm:mt-12 pb-8 sm:pb-12 md:pb-[60px]"
      >
        <div
          class="card rounded-[20px] text-white shadow-custom p-6 sm:p-8 md:p-[60px] bg-custom-gradient from-custom-gradient-start to-custom-gradient-end"
        >
          <div
            class="content flex flex-col text-white text-center items-center"
          >
            <h2
              class="title text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6"
            >
              Our powerful analytics provides invaluable insights.
            </h2>
            <p
              class="description text-sm sm:text-base md:text-lg font-normal mb-6"
            >
              Unlock the power of data with our cutting-edge analytics product.
              Get instant insights with our user-friendly Analytics Dashboard,
              and take advantage of our innovative digital credit tokens to
              reward your customers and incentivize engagement.
            </p>
            <div class="actions">
              <ButtonComponent
                :height="'h-12'"
                :label="'Download the app'"
                :inverted="true"
                class="text-base"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
