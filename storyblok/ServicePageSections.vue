<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  blok: { type: Object, default: null },
});
const classBg = computed(() => {
  return [
    {
      "bg-white": props.blok?.bgColor == "white",
      "bg-bgGray": props.blok?.bgColor == "gray1",
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
        v-for="(heading, index) of blok.headings"
        :key="index"
        :heading="heading"
      />
    </section>
  </div>
</template>
