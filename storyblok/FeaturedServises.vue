<script setup lang="ts">
import { featuredServices } from "../types/featuredServises";
import { PropType } from "vue";
const props = defineProps({
  blok: { type: Object as PropType<featuredServices>, default: null },
});

</script>
<template>
  <div v-editable="blok" class="bg-bgGray">
    <section class="max-w-[1260px] mx-auto py-14 px-4 relative">
      <StoryblokHeading
        class="font-jakarta text-center mt-2"
        v-for="(heading, index) of blok.headings"
        :key="index"
        :heading="heading"
      />
      <CustomSliders :blok="blok" />
      <!-- button is here -->
      <StoryblokBtn
        v-for="(button, index) of blok.actions"
        :key="index"
        :button="button"
        class="max-w-[162px] font-jakarta mt-5 mx-auto"
      >
      </StoryblokBtn>
    </section>
  </div>
</template>

