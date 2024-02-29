<template>
  <div
    class="bg-white cardSm rounded-2xl flex flex-col md:flex-row justify-between md:items-center"
  >
    <div>
      <section class="flex gap-2 items-center">
        <NuxtImg format="webp" width="90" src="/images/googleLogo.png" />
        <p class="mt-1 text-xl">Rating</p>
      </section>

      <section class="flex items-center gap-3 mt-2">
        <p class="text-2xl">4.9</p>
        <article class="flex gap-1">
          <StarIcon v-for="i of 5" :key="i" class="h-5 w-5 text-yellow-400" />
        </article>
        <p class="text-lg text-gray-700">1,200 Reviews</p>
      </section>
    </div>

    <div class="mt-5 md:mt-0">
      <StoryblokBtn v-for="button of actions" :button="button" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { StarIcon } from "@heroicons/vue/24/solid";
import { storyblokButton } from "../../types/storyblokMain";
import { PropType } from "vue";

const props = defineProps({
  actions: { type: Array as PropType<storyblokButton[]>, default: [] },
});
</script>

<style scoped></style>
