<script setup lang="ts">
import { defineProps, ref , PropType } from "vue";

import { faqSection } from "../types/faqSection";
const props = defineProps({
  blok: { type: Object as PropType<faqSection>, default: null },
});

const openFAQs = ref([0]);

function isOpen(index) {
  return openFAQs.value.includes(index);
}

function toggleFAQ(index) {
  if (isOpen(index)) {
    openFAQs.value = openFAQs.value.filter((i) => i !== index);
  } else {
    openFAQs.value.push(index);
  }
}
</script>
<template>
  <div v-editable="blok">
    <section class="pt-20 px-4">
      <StoryblokHeading
        class="font-jakarta mt-4"
        v-for="(heading, index) of blok.headings"
        :key="index"
        :heading="heading"
      />
      <!-- faqs is here  -->
      <article class="max-w-[860px] mx-auto mt-14">
        <div
          v-for="(item, index) in blok.faq"
          :key="index"
          class="mb-3.5 pb-3.5 relative"
          :class="{ '': index <= 3 }"
        >
          <div
            class="flex justify-between items-center mb-3 cursor-pointer"
            @click="toggleFAQ(index)"
          >
            <!-- heading is here -->
            <StoryblokHeading
              class="font-jakarta font-semibold"
              v-for="(heading, index) of item.headings"
              :key="index"
              :heading="heading"
            />
            <!-- icon is here -->
            <div>
              <template v-if="isOpen(index)">
                <NuxtImg
                  v-if="item.image.filename"
                  format="webp"
                  quality="100"
                  :src="item.image.filename"
                  class="w-2.5"
                >
                </NuxtImg>
              </template>
              <template v-else>
                <NuxtImg
                  v-if="item.image2.filename"
                  format="webp"
                  quality="100"
                  :src="item.image2.filename"
                  class="w-4"
                >
                </NuxtImg>
              </template>
            </div>
          </div>
          <!-- description text is here -->
          <p
            v-if="isOpen(index)"
            class="font-normal text-sm md:text-base mt-3 font-jakarta text-[#595959] border-t pt-3"
          >
            {{ item.subTitle }}
          </p>
        </div>
      </article>
    </section>
  </div>
</template>
