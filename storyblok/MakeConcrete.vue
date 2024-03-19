<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>
<template>
  <div v-editable="blok" class="bg-white">
    <section class="px-4 py-20">
      <!-- headings is here -->
      <div class="flex justify-center">
        <StoryblokHeading
          class="font-jakarta mb-4 ml-1 mr-1"
          v-for="(heading, index) of blok.headings"
          :key="index"
          :heading="heading"
        />
      </div>
      <div class="flex justify-center">
        <StoryblokHeading
          class="font-jakarta ml-1 mr-1"
          v-for="(heading, index) of blok.headings2"
          :key="index"
          :heading="heading"
        />
      </div>
      <!-- video is here -->
      <iframe
        class="max-w-[1000px] mx-auto w-full mt-14"
        width="560"
        height="450"
        :src="blok.videoLink"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </section>
  </div>
</template>
