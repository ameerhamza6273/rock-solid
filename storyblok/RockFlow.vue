<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>
<template>
  <div v-editable="blok" class="py-20 px-4 bg-[#F6F7FA]">
    <!-- Rockflow – Constituents and Design Project (content) section -->
    <section
      class="flex flex-col gap-20 lg:flex-row md:max-w-[1110px] md:mx-auto md:items-center"
    >
      <!-- image colimn is here -->
      <article class="lg:min-w-[425px]">
        <NuxtImg
          :src="blok.image.filename"
          class="w-full lg:h-[500px]"
        ></NuxtImg>
      </article>
      <!-- content column is here -->
      <article>
        <StoryblokHeading
          class="font-jakarta mb-7"
          v-for="heading of blok.headings"
          :heading="heading"
        />
        <p class="font-jakarta text-base text-[#576A89]">{{ blok.text }}</p>
        <ul v-for="value in blok.list" class="list-disc ml-4 mt-4">
          <li class="font-jakarta text-base text-[#444850]">
            {{ value.text1 }}
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>
