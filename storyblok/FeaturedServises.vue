<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const modules = [Navigation, Pagination];
</script>
<template>
  <div v-editable="blok" class="bg-[#F6F7FA]">
    <section class="max-w-[1260px] mx-auto py-14 px-4 relative">
      <StoryblokHeading
        class="font-jakarta text-center mt-2"
        v-for="heading of blok.headings"
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
        <div class="parallax-slider-navigation cursor-pointer hidden md:block">
          <div class="nav-indicator prevArrow">
            <NuxtImg
              :src="blok.previmage.filename"
              :alt="blok.previmage.alt"
              class="w-10 absolute z-40 top-[47%] left-[-5px]"
            />
          </div>
          <div class="nav-indicator nextArrow">
            <NuxtImg
              :src="blok.nextimage.filename"
              :alt="blok.nextimage.alt"
              class="w-10 absolute z-40 top-[47%] right-[-5px]"
            />
          </div>
        </div>
        <swiper-slide
          v-for="value in blok.services"
          :key="value.title"
          class="py-14 md:pb-20 px-4 md:px-10 max-w-[33%]"
        >
          <NuxtImg
            :src="value.content.image.filename"
            class="w-[82%] mx-auto"
          ></NuxtImg>
          <div class="bg-white p-5 pt-52 mt-[-193px] card-body">
            <StoryblokHeading
              class="font-jakarta text-center font-semibold"
              v-for="heading of value.content.headings"
              :heading="heading"
            />
            <StoryblokBtn
              v-for="button of value.content.actions"
              :button="button"
              class="max-w-[180px] font-jakarta mx-auto mt-3 btn"
            >
            </StoryblokBtn>
          </div>
        </swiper-slide>
      </swiper>
      <!-- button is here -->
      <StoryblokBtn
        v-for="button of blok.actions"
        :button="button"
        class="max-w-[162px] font-jakarta mt-5 mx-auto"
      >
      </StoryblokBtn>
    </section>
  </div>
</template>
<style scoped>
::v-deep .swiper-pagination-bullet {
  width: 11px;
  height: 11px;
  margin-right: 8px !important;
}
::v-deep .swiper-pagination-bullet-active {
  background-color: #ff6c2b !important ; /* Replace with your desired color */
}
::v-deep .swiper-pagination {
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
  ::v-deep .swiper-pagination {
    margin-left: 0px;
  }
}
</style>
