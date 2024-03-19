<template>
  <div class="bg-[#2F6CC8] px-4 py-10" v-editable="blok">
    <!-- find out section is here -->
    <section
      class="max-w-[1200px] mx-auto block md:flex justify-between items-center"
    >
      <StoryblokHeading
        class="font-jakarta max-w-[170px] md:max-w-[300px] mx-auto md:mx-0"
        v-for="(heading, index) of blok.headings"
        :key="index"
        :heading="heading"
      />
      <article class="px-10 md:px-0 mt-6 md:mt-0">
        <div class="block md:flex items-center">
          <NuxtImg
            v-if="blok.image.filename"
            format="webp"
            quality="100"
            :src="blok.image.filename"
            class="h-16 md:mr-10 mx-auto"
          ></NuxtImg>
          <StoryblokBtn
            v-for="(button, index) of blok.action"
            :key="index"
            :button="button"
            class="font-jakarta max-w-[200px] mt-6 md:mt-0 mx-auto"
          >
          </StoryblokBtn>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>
