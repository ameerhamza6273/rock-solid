<script setup lang="ts">
import { storyblokKeyPlaceOrder } from "../types/placeOrder";
import { PropType } from "vue";
const props = defineProps({
  blok: { type: Object as PropType<storyblokKeyPlaceOrder>, default: null },
});
</script>
<template>
  <div class="bg-[#2F6CC8] px-4 py-10" v-editable="blok">
    <!-- place order section is here -->
    <section
      class="max-w-[1200px] mx-auto block md:flex justify-between items-center"
    >
      <StoryblokHeading
        class="font-jakarta text-center md:text-left"
        v-for="(heading, index) of blok.headings"
        :key="index"
        :heading="heading"
      />
      <article class="mt-6 md:mt-0">
        <div class="max-w-[180px] md:max-w-[250px] mx-auto">
          <p class="ml-8 text-white text-base lg:text-lg font-jakarta">
            {{ blok.subtitle }}
          </p>
          <div class="flex mt-2 lg:mt-3">
            <NuxtImg
              v-if="blok.icon.filename"
              format="webp"
              quality="100"
              :src="blok.icon.filename"
              class="h-5 lg:h-7 w-5 lg:w-7 mr-3 mt-1"
            ></NuxtImg>
            <NuxtLink
              :to="`tel:${blok.phoneNumber}`"
              class="text-white font-jakarta lg:text-3xl md:text-2xl text-xl"
            >
              {{ blok.phoneNumber }}
            </NuxtLink>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>


