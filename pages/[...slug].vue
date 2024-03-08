<script setup lang="ts">
import { getInstaPosts } from "../composables/instaFeed";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const { slug } = useRoute().params;

const url = slug && slug.length > 0 ? slug.join("/") : "home";

const isPreview = useRuntimeConfig().public.NODE_ENV !== "production";

// const { locale } = useI18n();
const resolveRelations = ["memorableHighlightSection.item"];
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
</script>

<template>
  <SplashScreen v-if="show" />

  <StoryblokComponent v-if="pending === false && story" :blok="story.content" />
</template>