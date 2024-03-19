<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>
<template>
  <div v-editable="blok">
    <!-- Conditions of Sale and Delivery (content) section is here -->
    <section class="pt-6 pb-6 px-4 max-w-[1100px] mx-auto">
      <StoryblokHeading
        class="font-jakarta mt-4 mx-auto mb-16"
        v-for="(heading, index) of blok.headings"
        :key="index"
        :heading="heading"
      />
      <!-- first list -->
      <article v-for="(value, index) in blok.list" :key="index" class="mt-8">
        <StoryblokHeading
          class="font-jakarta mt-4 mx-auto font-semibold"
          v-for="(heading, index) of value.headings"
          :key="index"
          :heading="heading"
        />
        <p
          class="font-jakarta text-base text-[#444850] font-normal text-center mt-2"
        >
          {{ value.text1 }}
        </p>
      </article>
      <!-- dot list is here -->
      <article class="mt-4">
        <ul
          v-for="(value, index) in blok.dotList"
          :key="index"
          class="list-disc ml-4 mt-2"
        >
          <li class="font-jakarta text-base text-[#444850]">
            {{ value.text1 }}
          </li>
        </ul>
      </article>
      <!-- final list -->
      <article
        v-for="(value, index) in blok.finalList"
        :key="index"
        class="mt-8"
      >
        <StoryblokHeading
          class="font-jakarta mt-4 mx-auto font-semibold"
          v-for="(heading, index) of value.headings"
          :key="index"
          :heading="heading"
        />
        <p
          class="font-jakarta text-base text-[#444850] font-normal text-center mt-2"
        >
          {{ value.text1 }}
        </p>
      </article>
    </section>
  </div>
</template>
