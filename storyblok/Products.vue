<template>
  <div
    v-editable="products"
    class="pt-20 pb-28 md:pt-40 border-secondary border-b-4"
  >
    <section class="block md:flex gap-10 px-4 max-w-[1200px] md:mx-auto">
      <article class="w-[100%] md:w-[45%]">
        <NuxtImg :src="products.image.filename" class="w-full"></NuxtImg>
      </article>
      <article class="w-[100%] md:w-[55%] self-center mt-10 md:mt-0">
        <StoryblokHeading
          class="font-jakarta font-semibold"
          v-for="(heading, index) of products.headings"
          :key="index"
          :heading="heading"
        />
        <p class="text-[15px] mt-4 text-[#8e9196] max-w-[550px]">
          {{ products.subTitle }}
        </p>
        <!-- <StoryblokBtn
          v-for="button of blok.actions"
          :button="button"
          class="max-w-[120px] h-10 pt-2 font-jakarta mt-4"
        ></StoryblokBtn> -->
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from "vue";
import { getProductsData, useProductsData } from "../composables/storyblok";
import { products } from "../types/products";
const products = useProductsData();

onMounted(async () => {
  await getProductsData();
});


</script>
