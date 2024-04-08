<script setup lang="ts">
import { storyblokChooseUs} from "../types/chooseUs"
import { PropType} from "vue"
const props = defineProps({
  blok: { type: Object as PropType<storyblokChooseUs>, default: null },
});
</script>
<template>
  <div v-editable="blok" class="bg-bgGray">
    <div class="max-w-[1200px] mx-auto py-14 px-4">
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <!-- images section -->
        <article class="relative">
          <NuxtImg
            v-if="blok.image1.filename"
            format="webp"
            quality="100"
            :src="blok.image1.filename"
            class="w-[69%] relative z-20"
          ></NuxtImg>
          <NuxtImg
            v-if="blok.image2.filename"
            format="webp"
            quality="100"
            :src="blok.image2.filename"
            class="w-[57%] absolute right-0 lg:top-[105px] md:top-[160px] top-[67px] z-10"
          ></NuxtImg>
          <NuxtImg
            v-if="blok.image3.filename"
            format="webp"
            quality="100"
            :src="blok.image3.filename"
            class="w-[60%] relative lg:mt-[-135px] md:mt-[-185px] mt-[-85px] ml-4 md:ml-6 z-30"
          ></NuxtImg>
        </article>
        <!-- content section -->
        <article class="self-center">
          <StoryblokHeading
            class="font-jakarta mb-6"
            v-for="(heading,index) of blok.headings"
            :key="index"
            :heading="heading"
          />
          <ul v-for="(value, index) in blok.iconBox" :key="index">
            <li
              class="flex items-center mt-4 font-jakarta text-base font-medium text-textGray2"
            >
              <NuxtImg
                v-if="value.image.filename"
                format="webp"
                quality="100"
                :src="value.image.filename"
                class="w-5 h-5 mr-2"
              ></NuxtImg
              >{{ value.text }}
            </li>
          </ul>
          <StoryblokBtn
            v-for="(button, index) of blok.actions"
            :key="index"
            :button="button"
            class="max-w-[150px] font-jakarta mt-8"
          />
        </article>
      </section>
    </div>
  </div>
</template>
