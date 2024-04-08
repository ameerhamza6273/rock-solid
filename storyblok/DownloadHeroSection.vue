<script setup lang="ts">
import { downloadHeroSection } from "../types/downloadHeroSection";
import { PropType } from "vue";
const props = defineProps({
  blok: { type: Object as PropType<downloadHeroSection>, default: null },
});
</script>
<template>
  <div v-editable="blok">
    <!-- hero section -->
    <section class="py-20 lg:pt-32 px-4 bg-bgGray">
      <StoryblokHeading
        class="font-jakarta mt-4 max-w-[960px] mx-auto fixLineHeight"
        v-for="(heading, index) of blok.headings"
        :key="index"
        :heading="heading"
      />
    </section>
    <!-- application form is here -->
    <section
      class="grid grid-cols-1 px-4 lg:grid-cols-2 gap-6 max-w-[1200px] mx-auto py-16"
    >
      <article
        v-for="(value, index) in blok.applicationForm"
        :key="index"
        class="py-7 px-6 block lg:flex items-center justify-between shadow-[0_5px_30px_-15px_rgba(0,0,0,0.3)]"
      >
        <div class="flex items-center">
          <NuxtImg
            v-if="value.image.filename"
            format="webp"
            quality="100"
            :src="value.image.filename"
            class="w-5 h-6"
          ></NuxtImg>
          <StoryblokHeading
            class="font-jakarta ml-3 font-semibold"
            v-for="(heading, index) of value.headings"
            :key="index"
            :heading="heading"
          />
        </div>
        <!-- download button is here -->
        <NuxtLink
          :to="value.image2.filename"
          target="_blank"
          v-for="(button, index) of value.actions"
          :key="index"
          class="flex gap-0 items-center mt-6 lg:mt-0 justify-center px-4 rounded-sm py-2 text-lg font-jakarta cursor-pointer transition-all duration-500 capitalize bg-primary text-white"
          >{{ button.label }}
          <NuxtImg
            v-if="!!button?.icon.filename"
            class="h-2.5 w-3 ml-2"
            :src="button?.icon?.filename"
          />
        </NuxtLink>
      </article>
    </section>
  </div>
</template>
<style scoped>
.fixLineHeight {
  line-height: 62px;
}
@media screen and (max-width: 600px) {
  .fixLineHeight {
    line-height: 32px;
  }
}
</style>
