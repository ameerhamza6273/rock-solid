<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>
<template>
  <div v-editable="blok" class="bg-white">
    <!-- home page welcome rock section is here -->
    <section class="max-w-[1200px] mx-auto py-14 px-4 pt-32">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <!-- content column is here -->
        <div class="self-center">
          <StoryblokHeading
            class="font-jakarta mt-4"
            v-for="heading of blok.headings"
            :heading="heading"
          />
          <div class="text-lg text-black font-jakarta max-w-[520px] mt-3">
            <p>{{ blok.text1 }}</p>
            <p class="mt-5">{{ blok.text2 }}<span class="text-tertiary">{{ blok.text3 }}</span></p>
            <p>{{ blok.text4 }}</p>
          </div>
        </div>
        <!-- image column is here -->
        <div>
          <NuxtImg :src="blok.image.filename" class="w-full"></NuxtImg>
        </div>
      </div>
    </section>
  </div>
</template>
