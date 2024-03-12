<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>
<template>
  <div v-editable="blok">
    <section class="py-20 px-4">
      <div
        class="flex flex-col gap-20 lg:flex-row md:max-w-[1110px] md:mx-auto md:items-center"
      >
        <!-- content column is here -->
        <div>
          <StoryblokHeading
            class="font-jakarta mb-7"
            v-for="heading of blok.headings"
            :heading="heading"
          />
          <!-- list is here -->
          <ul v-for="value in blok.list" class="list-disc ml-4 mt-4">
            <li class="text-base font-jakarta text-primary">
              {{ value.text1 }}
              <span class="text-[#444850]">{{ value.text2 }}</span>
            </li>
          </ul>
        </div>
        <!-- image column is here -->
        <div class="lg:min-w-[425px]">
          <NuxtImg
            v-if="blok.image.filename"
            format="webp"
            quality="100"
            :src="blok.image.filename"
            class="w-full lg:h-[500px]"
          ></NuxtImg>
        </div>
      </div>
    </section>
  </div>
</template>
