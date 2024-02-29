<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>
<template>
  <div v-editable="blok" class="bg-[#F6F7FA]">
    <section class="max-w-[1200px] mx-auto py-14 px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <!-- images section -->
        <div class="relative">
          <NuxtImg :src="blok.image1.filename" class="w-[69%] relative z-20"></NuxtImg>
          <NuxtImg :src="blok.image2.filename" 
          class="w-[57%] absolute right-0 lg:top-[105px] md:top-[160px] top-[67px] z-10"></NuxtImg>
          <NuxtImg :src="blok.image3.filename"
          class="w-[60%] relative lg:mt-[-135px] md:mt-[-185px] mt-[-85px] ml-4 md:ml-6 z-30"></NuxtImg>
        </div>
        <!-- content section -->
        <div class="self-center">
          <StoryblokHeading
            class="font-jakarta mb-6"
            v-for="heading of blok.headings"
            :heading="heading"
          />
            <ul v-for="value in blok.iconBox">
                <li class="flex items-center mt-4 font-jakarta text-base font-medium text-[#576A89]"><NuxtImg :src="value.image.filename" class="w-5 h-5 mr-2"></NuxtImg>{{ value.text }}</li>
            </ul>
            <StoryblokBtn
              v-for="button of blok.actions"
              :button="button"
              class="max-w-[150px] font-jakarta mt-8"
            />
        </div>
      </div>
    </section>
  </div>
</template>
