<script setup lang="ts">
import { featuredOurServices } from "../types/featuredOurServices";
import { PropType } from "vue";
const props = defineProps({
  blok: { type: Object as PropType<featuredOurServices>, default: null },
});
</script>
<template>
  <div v-editable="blok">
    <!-- heading section -->
    <section class="py-14 px-4">
      <StoryblokHeading
        class="font-jakarta mt-4 max-w-[620px] mx-auto"
        v-for="(heading, index) of blok.headings"
        :key="index"
        :heading="heading"
      />
    </section>
    <!-- services card section -->
    <section
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] px-4 mx-auto"
    >
      <article
        v-for="(value, index) in blok.services"
        :key="index"
        class="shadow-lg"
      >
        <nuxtImg
          v-if="value.content.image.filename"
          format="webp"
          quality="100"
          :src="value.content.image.filename"
          class="w-full"
        ></nuxtImg>
        <div class="p-5">
          <StoryblokHeading
            class="font-jakarta font-semibold"
            v-for="(heading, index) of value.content.headings"
            :key="index"
            :heading="heading"
          />
          <p class="text-[15px] mt-4 text-[#8e9196]">
            {{ value.content.subTitle }}
          </p>
          <StoryblokBtn
            v-for="(button, index) of value.content.actions"
            :button="button"
            :key="index"
            class="max-w-[120px] h-10 pt-2 font-jakarta mt-4"
          ></StoryblokBtn>
        </div>
      </article>
    </section>
  </div>
</template>
