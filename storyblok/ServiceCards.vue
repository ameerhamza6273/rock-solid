<script setup lang="ts">
import { onMounted, ref } from "vue";
import storyblokApi from "../plugin/useStoryblokApi";

const servives = ref([]);

onMounted(async () => {
  try {
    const { data } = await storyblokApi.get("cdn/stories", {
      version: "draft",
      resolve_links: "url",
      starts_with: "ourservices/", // Fetch stories starting with "ourproducts/"
    });

    // Filter out stories that are in the "ourproducts" folder
    const ourProductsStories = data.stories.filter((story) =>
      story.full_slug.startsWith("ourservices/")
    );

    // Extract content from each story and push to products array
    servives.value = ourProductsStories.map((story) => story.content);
  } catch (error) {
    console.error("Error in fetching products", error);
  }
});
</script>
<template>
  <div>
    <!-- services card section -->
    <section
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] px-4 mx-auto"
    >
      <article
        v-for="(value, index) in servives"
        :key="index"
        class="shadow-lg"
      >
        <nuxtImg
          v-if="value.image.filename"
          format="webp"
          quality="100"
          :src="value.image.filename"
          class="w-full"
        ></nuxtImg>
        <div class="p-5">
          <StoryblokHeading
            class="font-jakarta font-semibold"
            v-for="(heading, index) of value.headings"
            :key="index"
            :heading="heading"
          />
          <p class="text-[15px] mt-4 text-[#8e9196]">
            {{ value.subTitle }}
          </p>
          <StoryblokBtn
            v-for="(button, index) of value.actions"
            :button="button"
            :key="index"
            class="max-w-[120px] h-10 pt-2 font-jakarta mt-4"
          ></StoryblokBtn>
        </div>
      </article>
    </section>
  </div>
</template>