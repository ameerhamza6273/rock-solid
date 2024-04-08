<script setup lang="ts">
import { storyblokRockFlow} from "../types/rockFlow"
import { PropType} from "vue"
const props = defineProps({
  blok: { type: Object as PropType<storyblokRockFlow>, default: null },
});
</script>
<template>
  <div v-editable="blok" class="py-20 px-4 bg-bgGray">
    <!-- Rockflow – Constituents and Design Project (content) section -->
    <section
      class="flex flex-col gap-20 lg:flex-row md:max-w-[1110px] md:mx-auto md:items-center"
    >
      <!-- image colimn is here -->
      <article class="lg:min-w-[425px]">
        <NuxtImg
          :src="blok.image.filename"
          class="w-full lg:h-[500px]"
        ></NuxtImg>
      </article>
      <!-- content column is here -->
      <article>
        <StoryblokHeading
          class="font-jakarta mb-7"
          v-for="(heading, index) of blok.headings"
          :key="index"
          :heading="heading"
        />
        <p class="font-jakarta text-base text-[#576A89]">{{ blok.text }}</p>
        <ul
          v-for="(value, index) in blok.list"
          :key="index"
          class="list-disc ml-4 mt-4"
        >
          <li class="font-jakarta text-base text-[#444850]">
            {{ value.text1 }}
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>
