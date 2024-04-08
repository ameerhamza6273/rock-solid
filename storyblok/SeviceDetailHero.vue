<script setup lang="ts">

import { seviceDetailHero } from "../types/seviceDetailHero";
import { PropType , computed } from "vue";
const props = defineProps({
  blok: { type: Object as PropType<seviceDetailHero>, default: null },
});

const adjustWidth = computed(() => {
  return [
    {
      "max-w-[660px]": props.blok?.width == "low",
      "max-w-[810px]": props.blok?.width == "high",
    },
  ];
});
</script>
<template>
  <div v-editable="blok" class="bg-bgGray">
    <!-- service detail page hero section is here -->
    <section class="py-20 lg:pt-32 px-4 max-w-[1100px] mx-auto">
      <StoryblokHeading
        class="font-jakarta mt-4 mx-auto"
        v-for="(heading, index) of blok.headings"
        :key="index"
        :heading="heading"
        :class="adjustWidth"
      />
      <article class="block md:flex max-w-[200px] md:max-w-[356px] mx-auto">
        <StoryblokBtn
          v-for="(button, index) of blok.actions"
          :key="index"
          :button="button"
          class="font-jakarta mt-6 m-2"
        />
      </article>
    </section>
  </div>
</template>
