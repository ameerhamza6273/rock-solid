<script setup lang="ts">
import { customServices } from "../types/customServices";
import { PropType } from "vue";
const props = defineProps({
  service: { type: Object as PropType<customServices>, default: null },
  index: { type: Number, required: true },
});
</script>
<template>
  <div
    class="pt-10 pb-4 relative h-full bg-bgGray"
    :class="{ 'bg-white': index % 2 !== 1 }"
  >
    <section
      class="flex flex-col gap-20 py-14 mx-4 lg:flex-row md:max-w-[1200px] md:mx-auto"
      :class="{ 'lg:flex-row-reverse': index % 2 !== 1 }"
    >
      <!-- image column is here -->
      <article class="mb-4 lg:min-w-[570px]">
        <NuxtImg
          v-if="service.content.image.filename"
          format="webp"
          quality="100"
          :src="service.content.image.filename"
          :alt="service.content.image.alt"
          class="w-full"
        ></NuxtImg>
      </article>
      <!-- content column is here -->
      <article class="self-center lg:col-span-3 md:col-span-3 sm:col-span-1">
        <StoryblokHeading
          class="font-jakarta mb-6 max-w-[450px] fixLineHeight"
          v-for="(heading, index) of service.content.headings"
          :key="index"
          :heading="heading"
        />
        <p
          class="font-normal text-lg mt-2 font-jakarta text-textGray2 max-w-[500px]"
        >
          {{ service.content.text }}
        </p>
        <!-- button is here -->
        <section class="mt-7">
          <Btn
            v-for="(value, index) of service.content.action"
            :key="index"
            :btnContent="value"
          />
        </section>
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
