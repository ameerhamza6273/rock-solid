<template>
  <div class="bg-[#2F6CC8] px-4 py-10" v-editable="blok">
    <!-- place order section is here -->
    <section class="max-w-[1200px] mx-auto block md:flex justify-between items-center">
      <StoryblokHeading
        class="font-jakarta text-center md:text-left"
        v-for="heading of blok.headings"
        :heading="heading"
      />
      <div class="mt-6 md:mt-0">
        <div class="max-w-[180px] md:max-w-[250px] mx-auto">
          <p class="ml-8 text-white text-base lg:text-lg font-jakarta ">
            {{ blok.subtitle }}
          </p>
          <div class="flex mt-2 lg:mt-3">
            <NuxtImg
              :src="blok.icon.filename"
              class="h-5 lg:h-7 w-5 lg:w-7 mr-3 mt-1"
            ></NuxtImg>
            <NuxtLink :to="`tel:${blok.phoneNumber}`" class="text-white font-jakarta lg:text-3xl md:text-2xl text-xl">
              {{ blok.phoneNumber }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>
