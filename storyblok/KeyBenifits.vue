<script setup lang="ts">
import { storyblokKeyBenifits} from "../types/keyBenifits"
import { PropType} from "vue"
const props = defineProps({
  blok: { type: Object as PropType<storyblokKeyBenifits>, default: null },
});
</script>
<template>
  <div v-editable="blok" class="py-20 px-4">
    <section
      class="flex flex-col gap-20 lg:flex-row md:max-w-[1110px] md:mx-auto md:items-center"
    >
      <!-- content column is here -->
      <article>
        <StoryblokHeading
          class="font-jakarta mb-7"
          v-for="(heading, index) of blok.headings"
          :key="index"
          :heading="heading"
        />
        <!-- list is here -->
        <ul v-for="(value, index) in blok.list" :key="index" class="list-disc ml-4 mt-4">
          <li class="text-base font-jakarta text-primary">
            {{ value.text1 }}
            <span class="text-[#444850]">{{ value.text2 }}</span>
          </li>
        </ul>
      </article>
      <!-- image column is here -->
      <article class="lg:min-w-[425px]">
        <NuxtImg
          v-if="blok.image.filename"
          format="webp"
          quality="100"
          :src="blok.image.filename"
          class="w-full lg:h-[500px]"
        ></NuxtImg>
      </article>
    </section>
  </div>
</template>
