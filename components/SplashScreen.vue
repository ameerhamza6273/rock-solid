<template>
    <div
      class="h-screen w-screen overflow-hidden fixed top-0 left-0 bg-white z-[9999] flex justify-center items-center flex-col img"
    ></div>
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped>
  .img {
    background-image: url("../public/images/splash1.gif");
    background-repeat: no-repeat;
    object-fit: cover;
    background-size: cover;
    background-position: center top;
  }
  </style>