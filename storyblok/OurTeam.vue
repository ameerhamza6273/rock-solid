<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>
<template>
  <div v-editable="blok" class="bg-[#F6F7FA]">
    <section class="max-w-[1200px] mx-auto py-14 px-4">
      <!-- our team heading is here -->
      <StoryblokHeading
        class="font-jakarta text-center mt-6"
        v-for="(heading, index) of blok.headings"
        :key="index"
        :heading="heading"
      />
      <!-- our team cards -->
      <article class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        <div class="mt-3" v-for="(value, index) in blok.cards" :key="index">
          <!-- our team image is here -->
          <NuxtImg
            v-if="value.image.filename"
            format="webp"
            quality="100"
            :src="value.image.filename"
            class="w-[75%] mx-auto"
          ></NuxtImg>
          <!-- our team title and subtitle is here -->
          <div class="bg-white p-5 md:pt-28 pt-32 md:mt-[-105px] mt-[-130px]">
            <StoryblokHeading
              class="font-jakarta text-center font-semibold"
              v-for="(heading, index) of value.headings"
              :key="index"
              :heading="heading"
            />
            <p class="text-center text-base text-[#8e9196] mt-2">
              {{ value.subTitle }}
            </p>
          </div>
        </div>
      </article>
      <StoryblokBtn
        v-for="(button, index) of blok.actions"
        :key="index"
        :button="button"
        class="max-w-[180px] font-jakarta mt-14 mx-auto"
      >
      </StoryblokBtn>
    </section>
  </div>
</template>
