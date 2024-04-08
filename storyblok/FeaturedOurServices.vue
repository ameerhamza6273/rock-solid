<script setup lang="ts">

import { featuredOurServices } from "../types/featuredOurServices";
import { PropType } from "vue";
const props = defineProps({
  blok: { type: Object as PropType<featuredOurServices>, default: null },
});

</script>
<template>
  <div>
    <!-- heading section -->
    <section class="py-14 px-4">
      <StoryblokHeading
        class="font-jakarta mt-4 max-w-[620px] mx-auto"
        v-for="(heading, index) of blok.headings"
        :key="index"
        :heading="heading"
      />
    </section>
    <!-- services cards component -->
    <ServiceCards />
  </div>
</template>
