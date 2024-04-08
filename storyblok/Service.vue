<script setup lang="ts">
import { storyblokService } from "../types/service";
import { PropType } from "vue";

const props = defineProps({
  blok: { type: Object as PropType<storyblokService>, default: null },
});
</script>
<template>
  <div
    v-editable="blok"
    class="pt-20 pb-28 md:pt-40 border-secondary border-b-4"
  >
    <section class="block md:flex gap-10 px-4 max-w-[1200px] md:mx-auto">
      <article class="w-[100%] md:w-[45%]">
        <NuxtImg :src="blok.image.filename" class="w-full"></NuxtImg>
      </article>
      <article class="w-[100%] md:w-[55%] self-center mt-10 md:mt-0">
        <StoryblokHeading
          class="font-jakarta mb-6 max-w-[450px] fixLineHeight"
          v-for="(heading, index) of blok.headings"
          :key="index"
          :heading="heading"
        />
        <p class="text-[15px] mt-4 text-[#8e9196] max-w-[550px]">
          {{ blok.text }}
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
