<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  blok: { type: Object, default: null },
});
const classBg = computed(() => {
  return [
    {
      "bg-white": props.blok?.bgColor == "white",
      "bg-[#F6F7FA]": props.blok?.bgColor == "gray1",
    },
  ];
});
</script>
<template>
  <div v-editable="blok">
    <!-- service page hero section is here -->
    <section class="py-20 lg:pt-32 px-4" :class="classBg">
      <StoryblokHeading
        class="font-jakarta mt-4 max-w-[660px] mx-auto"
        v-for="heading of blok.headings"
        :heading="heading"
      />
    </section>
    <!-- service cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] px-4 mx-auto mt-14">
      <div v-for="value in blok.cards" class="shadow-lg">
        <nuxtImg :src="value.image.filename" class="w-full"></nuxtImg>
        <div class="p-5">
          <StoryblokHeading
            class="font-jakarta font-semibold"
            v-for="heading of value.headings"
            :heading="heading"
          />
          <p class="text-[15px] mt-4 text-[#8e9196]">{{ value.subTitle }}</p>
          <StoryblokBtn
            v-for="button of value.actions"
            :button="button"
            class="max-w-[120px] h-10 pt-2 font-jakarta mt-4"
        ></StoryblokBtn>
        </div>
      </div>
    </div>
  </div>
</template>
