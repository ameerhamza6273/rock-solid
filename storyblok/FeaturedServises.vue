<script setup lang="ts">
import { featuredServices } from "../types/featuredServises";
import { PropType , defineProps} from "vue";
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
      <!-- srvice sliders -->
      <swiper
        :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
        :pagination="{ clickable: true }"
        :spaceBetween="0"
        :modules="modules"
        :loop="true"
        :centeredSlides="true"
        class="w-full relative"
        :breakpoints="{
          768: { slidesPerView: 1 }, // 1 slide on screens less than 768px
          1024: { slidesPerView: 3 }, // 3 slides on screens 768px and above
        }"
      >
      <!-- navigation section -->
        <section class="parallax-slider-navigation cursor-pointer hidden md:block">
          <article class="nav-indicator prevArrow">
            <NuxtImg
              :src="blok.previmage.filename"
              :alt="blok.previmage.alt"
              class="w-10 absolute z-40 top-[47%] left-[-5px]"
            />
          </article>
          <article class="nav-indicator nextArrow">
            <NuxtImg
              :src="blok.nextimage.filename"
              :alt="blok.nextimage.alt"
              class="w-10 absolute z-40 top-[47%] right-[-5px]"
            />
          </article>
        </section>
        <swiper-slide
          v-for="value in blok.services"
          :key="value.title"
          class="py-14 md:pb-20 px-4 md:pl-6 lg:pl-12 md:max-w-[50%] lg:max-w-[33%]"
        >
          <NuxtImg
            v-if="value.content.image.filename"
            format="webp"
            quality="100"
            :src="value.content.image.filename"
            class="w-[82%] mx-auto"
          ></NuxtImg>
          <div class="bg-white p-5 pt-52 mt-[-193px] card-body">
            <StoryblokHeading
              class="font-jakarta text-center font-semibold"
              v-for="(heading, index) of value.content.headings"
              :key="index"
              :heading="heading"
            />
            <StoryblokBtn
              v-for="(button, index) of value.content.actions"
              :key="index"
              :button="button"
              class="max-w-[180px] font-jakarta mx-auto mt-3 btn"
            >
            </StoryblokBtn>
          </div>
        </swiper-slide>
      </swiper>
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
