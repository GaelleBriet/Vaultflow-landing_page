<script setup lang="ts"></script>

<template>
  <div class="footer w-10/12 m-auto py-[64px] px-[20px]">
    <div
      class="container flex sm:flex-row flex-col justify-between text-white m-auto"
    >
      <div class="contacts">
        <div class="mb-10">
          <div class="text-xl sm:text-2xl font-medium mb-4">Contact</div>
          <div class="font-light text-base sm:text-lg">
            <p>Work inquires: work@vaultflow.com</p>
            <p>PR and speaking: press@vaultflow.com</p>
            <p>New business: newbusiness@vaultflow.com</p>
          </div>
        </div>
        <div class="mb-10">
          <div class="text-xl sm:text-2xl font-medium mb-4">Careers</div>
          <div class="font-light text-base sm:text-lg">
            <p>Careers@vaultflow.com</p>
          </div>
        </div>
        <div class="font-light text-base text-text_grey">
          <p>© 2023 Vaultflow. All Rights Reserved.</p>
        </div>
      </div>

      <div class="address">
        <div class="mb-10">
          <div class="text-xl sm:text-2xl font-medium mb-4">Address</div>
          <div class="font-light text-base sm:text-lg">
            <p>398 11th Street, Floor 2</p>
            <p>San Francisco, CA 94103</p>
          </div>
        </div>
        <div class="mb-10">
          <div class="text-xl sm:text-2xl font-medium mb-4">Social</div>
          <div class="font-light text-base sm:text-lg">
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Tik Tok</p>
          </div>
        </div>
      </div>

      <div class="logo flex items-end">
        <div>
          <CompanyComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
