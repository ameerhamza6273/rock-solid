<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>
<template>
  <div v-editable="blok">
    <!-- hero section -->
    <section class="py-20 lg:pt-32 px-4 bg-[#F6F7FA]">
      <StoryblokHeading
        class="font-jakarta mt-4 max-w-[960px] mx-auto fixLineHeight"
        v-for="heading of blok.headings"
        :heading="heading"
      />
    </section>
    <!-- application form is here -->
    <section
      class="grid grid-cols-1 px-4 lg:grid-cols-2 gap-6 max-w-[1200px] mx-auto py-16"
    >
      <div
        v-for="value in blok.applicationForm"
        class="py-7 px-6 block lg:flex items-center justify-between shadow-[0_5px_30px_-15px_rgba(0,0,0,0.3)]"
      >
        <div class="flex items-center">
          <NuxtImg
            v-if="value.image.filename"
            format="webp"
            quality="100"
            :src="value.image.filename"
            class="w-5 h-6"
          ></NuxtImg>
          <StoryblokHeading
            class="font-jakarta ml-3 font-semibold"
            v-for="heading of value.headings"
            :heading="heading"
          />
        </div>
        <!-- download button is here -->
        <StoryblokBtn
          v-for="button of value.actions"
          :button="button"
          class="font-jakarta mt-6 lg:mt-0"
        />
      </div>
    </section>
  </div>
</template>
<style scoped>
.fixLineHeight {
  line-height: 62px;
}
@media screen and (max-width: 600px) {
  .fixLineHeight {
    line-height: 32px;
  }
}
</style>
