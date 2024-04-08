<script setup lang="ts">
import { contactUs } from "../types/contactUs";
import { PropType } from "vue";
const props = defineProps({
  blok: { type: Object as PropType<contactUs>, default: null },
});
</script>
<template>
  <div
    v-editable="blok"
    class="lg:pt-20 pt-10 pb-28 border-b-2 border-[#696D73]"
  >
    <div class="max-w-[1200px] mx-auto py-14 px-4">
      <section class="grid grid-cols-5 gap-16">
        <article class="col-span-5 md:col-span-2">
          <StoryblokHeading
            class="font-jakarta mb-3 font-semibold"
            v-for="(heading, index) of blok.headings"
            :key="index"
            :heading="heading"
          />
          <p class="font-jakarta mb-4">{{ blok.text }}</p>
          <!-- iconbox is here -->
          <div v-for="(value, index) in blok.iconbox" :key="index">
            <div class="flex mt-2">
              <NuxtImg
                v-if="value.image.filename"
                format="webp"
                quality="100"
                :src="value.image.filename"
                class="w-5 h-5 mt-1 mr-3"
              ></NuxtImg>
              <div>
                <StoryblokHeading
                  class="font-jakarta"
                  v-for="(heading, index) of value.headings"
                  :key="index"
                  :heading="heading"
                />
              </div>
            </div>
          </div>
          <!-- timer box is here -->
          <div v-for="(value, index) in blok.time" :key="index">
            <div class="flex mt-2">
              <NuxtImg
                v-if="value.image.filename"
                format="webp"
                quality="100"
                :src="value.image.filename"
                class="w-5 h-5 mt-1 mr-3"
              ></NuxtImg>
              <div
                class="flex items-center gap-4 max-w-[320px] md:gap-10 md:max-w-[340px]"
              >
                <StoryblokHeading
                  class="font-jakarta"
                  v-for="(heading, index) of value.headings"
                  :key="index"
                  :heading="heading"
                />
                <span class="font-jakarta text-black text-lg">{{
                  value.text
                }}</span>
              </div>
            </div>
          </div>

          <!-- out of hours section -->
          <div class="flex">
            <StoryblokHeading
              class="font-jakarta mt-14 font-bold mr-1"
              v-for="(heading, index) of blok.outOfHours"
              :key="index"
              :heading="heading"
            />
          </div>
          <p class="font-jakarta mt-2 text-sm">{{ blok.text2 }}</p>
          <!-- closed section heading -->
          <StoryblokHeading
            class="font-jakarta mt-14 mb-5 font-semibold"
            v-for="(heading, index) of blok.headingClosed"
            :key="index"
            :heading="heading"
          />
          <!-- closed section text -->
          <StoryblokHeading
            class="font-jakarta mt-2"
            v-for="(heading, index) of blok.closedText"
            :key="index"
            :heading="heading"
          />
        </article>
        <article class="col-span-5 md:col-span-3">
          <!-- form from FormSection component -->
          <FormSection v-for="(form, index) in blok.form" :key="index" :form="form" />
        </article>
      </section>
    </div>
  </div>
</template>
