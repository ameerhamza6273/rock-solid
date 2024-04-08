<script setup lang="ts">
import { aboutHeroSection} from "../types/aboutHeroSection"
import { PropType} from "vue"
const props = defineProps({
  blok: { type: Object as PropType<aboutHeroSection>, default: null },
});
</script>
<template>
  <div v-editable="blok" class="bg-bgGray lg:pt-20 pt-10">
    <!-- About page hero section is here -->
    <div class="max-w-[1200px] mx-auto py-14 px-4">
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <!-- content section -->
        <article class="self-center">
          <StoryblokHeading
            class="font-jakarta"
            v-for="(heading, index) of blok.headings"
            :key="index"
            :heading="heading"
          />
          <ul v-for="(value, index) in blok.iconBox" :key="index">
            <li
              class="flex items-center mt-4 font-jakarta text-base lg:text-lg font-medium text-textGray2"
            >
              {{ value.text }}
            </li>
          </ul>
          <StoryblokBtn
            v-for="(button, index) of blok.actions"
            :key="index"
            :button="button"
            class="max-w-[150px] font-jakarta mt-6"
          />
        </article>
        <!-- images section -->
        <article class="relative">
          <NuxtImg
            v-if="blok.image1.filename"
            format="webp"
            quality="100"
            :src="blok.image1.filename"
            class="w-[69%] relative z-20"
          ></NuxtImg>
          <NuxtImg
            v-if="blok.image2.filename"
            format="webp"
            quality="100"
            :src="blok.image2.filename"
            class="w-[57%] absolute right-0 lg:top-[105px] md:top-[160px] top-[67px] z-10"
          ></NuxtImg>
          <NuxtImg
            v-if="blok.image3.filename"
            format="webp"
            quality="100"
            :src="blok.image3.filename"
            class="w-[60%] relative lg:mt-[-135px] md:mt-[-220px] mt-[-85px] ml-4 md:ml-6 z-30"
          ></NuxtImg>
        </article>
      </section>
    </div>
  </div>
</template>
