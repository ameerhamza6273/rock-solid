<script setup lang="ts">
import { featuredServices } from "../types/featuredServises";
import { PropType } from "vue";
const props = defineProps({
  blok: { type: Object as PropType<featuredServices>, default: null },
});

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const modules = [Navigation, Pagination];
</script>
<template>
  <div v-editable="blok" class="bg-bgGray">
    <section class="max-w-[1260px] mx-auto py-14 px-4 relative">
      <StoryblokHeading
        class="font-jakarta text-center mt-2"
        v-for="(heading, index) of blok.headings"
        :key="index"
        :heading="heading"
      />
      <CustomSliders :blok="navImages" />
      <!-- button is here -->
      <StoryblokBtn
        v-for="(button, index) of blok.actions"
        :key="index"
        :button="button"
        class="max-w-[162px] font-jakarta mt-5 mx-auto"
      >
      </StoryblokBtn>
    </section>
  </div>
</template>
<style scoped>
:deep(.swiper-pagination-bullet) {
  width: 11px;
  height: 11px;
  margin-right: 8px !important;
}
:deep(.swiper-pagination-bullet-active) {
  background-color: #ff6c2b !important ; /* Replace with your desired color */
}
:deep(.swiper-pagination) {
  margin-bottom: 0px;
}

.swiper-slide-active .card-body {
  box-shadow: 0px 10px 20px 0px #ddd !important;
}
.swiper-slide-active .card-body .btn {
  filter: contrast(2.5) !important;
  color: #2f6cc8af;
}

@media screen and (max-width: 780px) {
  :deep(.swiper-pagination) {
    margin-left: 0px;
  }
}
</style>
