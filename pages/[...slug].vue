<script setup lang="ts">
import { getInstaPosts } from "../composables/instaFeed";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const { slug } = useRoute().params;

const url = slug && slug.length > 0 ? slug.join("/") : "home";

const isPreview = useRuntimeConfig().public.NODE_ENV !== "production";

// const { locale } = useI18n();
const resolveRelations = ["featuredServises.services","allServices.services","featuredOurServices.services","featuredProducts.products",
];
const show = ref(true);

let story, pending;

// This is immedietely invoked function expression
(async function iife() {
  let data = await useAsyncData(
    // `${locale.value}-${url}`,
    async () => {
      const { data } = await useStoryblokApi().get(
        `cdn/stories/${url.replace(/\/$/, "")}`,
        {
          version: isPreview ? "draft" : "published",
          // language: locale.value,
          resolve_relations: resolveRelations,
        }
      );
      return data?.story;
    }
  );
  story = data.data;
  pending = data.pending;
  if (!isPreview && story) {
    if (!story.value) {
      showError({ statusCode: 404, statusMessage: "Page Not Found" });
    }
  }
  show.value = false;
})();
// definePageMeta({ layout: "default" });

onMounted(async () => {
  if (isPreview && story && story.value && story.value.id) {
    alert("hh");
    useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory), {
      resolveRelations,
    });
  }
});
useSeoMeta({
  title: "Rock Solid Concrete",
  description: "Website Description",
  ogTitle: "Website OG Title",
  ogDescription: "Website OG Description",
  ogImage: "Website OG Image",
});
</script>

<template>
  <SplashScreen v-if="show" />

  <StoryblokComponent v-if="pending === false && story" :blok="story.content" />
</template>


<!-- <script setup>
import { getInstaPosts } from "../composables/instaFeed";

const { slug } = useRoute().params;
const url = slug && slug.length > 0 ? slug.join("/") : "home";

const isPreview = useRuntimeConfig().public.NODE_ENV !== "production";

// const { locale } = useI18n();
// const resolveRelations = ["popular-articles.articles"];

const { data: story, pending } = await useAsyncData(
  // `${locale.value}-${url}`,
  async () => {
    const { data } = await useStoryblokApi().get(
      `cdn/stories/${url.replace(/\/$/, "")}`,
      {
        version: isPreview ? "draft" : "published",
        resolve_relations: [
        "featuredServises.services",
        "allServices.services",
        // "allFleet.fleet",
      ],
      }
    );
    return data?.story;
  }
);

if (!isPreview) {
  if (!story.value) {
    showError({ statusCode: 404, statusMessage: "Page Not Found" });
  }
}
// definePageMeta({ layout: "default" });

onMounted(async () => {
  // if (isPreview && story.value && story.value.id) {
  //   useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory), {
  //     resolveRelations,
  //   });
  // }
  // await getInstaPosts();
});

useSeoMeta({
  title: "Rock Solid Concrete",
  description: "Website Description",
  ogTitle: "Website OG Title",
  ogDescription: "Website OG Description",
  ogImage: "Website OG Image",
});
</script>

<template>
  <StoryblokComponent v-if="pending === false && story" :blok="story.content" />
</template> -->
