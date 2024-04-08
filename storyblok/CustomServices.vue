<script setup lang="ts">
import { onMounted, ref } from "vue";
import storyblokApi from "../plugin/useStoryblokApi";

const servives = ref([]);
onMounted(async () => {
  try {
    const { data } = await storyblokApi.get("cdn/stories", {
      version: "draft",
      resolve_links: "url",
      starts_with: "services/",
    });
    const servicesStories = data.stories.filter((story) =>
      story.full_slug.startsWith("services/")
    );
    servives.value = servicesStories.map((story) => story);
  } catch (error) {
    console.error("Error in fetching services", error);
  }
});
</script>
<template>
  <div>
    <div
    v-for="(data, index) of servives"
     :key="index"
      class="pt-10 pb-4 relative h-full bg-bgGray"
      :class="{ 'bg-white': index % 2 !== 1 }"
    >
      <section
        class="flex flex-col gap-20 py-14 mx-4 lg:flex-row md:max-w-[1200px] md:mx-auto"
        :class="{ 'lg:flex-row-reverse': index % 2 !== 1 }"
      >
        <!-- image column is here -->
        <article class="mb-4 lg:min-w-[570px]">
          <NuxtImg
            v-if="data.content.image.filename"
            format="webp"
            quality="100"
            :src="data.content.image.filename"
            :alt="data.content.image.alt"
            class="w-full"
          ></NuxtImg>
        </article>
        <!-- column is here -->
        <article class="self-center lg:col-span-3 md:col-span-3 sm:col-span-1">
          <StoryblokHeading
            class="font-jakarta mb-6 max-w-[450px] fixLineHeight"
            v-for="(heading, index) of data.content.headings"
            :key="index"
            :heading="heading"
          />
          <p
            class="font-normal text-lg mt-2 font-jakarta text-textGray2 max-w-[500px]"
          >
            {{ data.content.text }}
          </p>
        </article>
      </section>
    </div>
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
