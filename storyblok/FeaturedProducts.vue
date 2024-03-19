<template>
  <div v-editable="blok" class="max-w-[1200px] mx-auto">
    <!-- housing heading -->
    <StoryblokHeading
      class="font-jakarta font-semibold px-4 mt-14"
      v-for="(heading, index) of blok.headings"
      :key="index"
      :heading="heading"
    />
    <div class="w-[70px] h-[3px] bg-primary mt-3 ml-4"></div>
    <section
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-9"
    >
      <article
        v-for="(value, index) in blok.products"
        :key="index"
        class="shadow-lg"
      >
        <nuxtImg
          v-if="value.content.image.filename"
          format="webp"
          quality="100"
          :src="value.content.image.filename"
          class="w-full"
        ></nuxtImg>
        <div class="p-5">
          <StoryblokHeading
            class="font-jakarta font-semibold"
            v-for="(heading, index) of value.content.headings"
            :key="index"
            :heading="heading"
          />
          <p class="text-[15px] mt-4 text-[#8e9196]">
            {{ value.content.subTitle }}
          </p>
          <StoryblokBtn
            v-for="(button, index) of value.content.actions"
            :key="index"
            :button="button"
            class="max-w-[120px] h-10 pt-2 font-jakarta mt-4"
          ></StoryblokBtn>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>
