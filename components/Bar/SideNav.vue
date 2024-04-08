<script setup lang="ts">
import { storyblokNavbar } from "../../types/navbar";
import { PropType } from "vue";
const props = defineProps({
  navData: { type: Object as PropType<storyblokNavbar>, default: null },
});
</script>

<template>
  <div class="h-full navContainer bg-[#EAEEEA] flex flex-col justify-between w-full">
    <section>
      <NuxtImg
        format="webp"
        width="110"
        class="h-fit"
        :src="navData?.logo?.filename"
      />
      <article class="flex flex-col gap-5 mt-10">
        <NuxtLink
        v-for="link in navData?.headerItems"
        :key="link.label"
        :to="link.link?.story?.url || '/'"
        :class="{
          'font-semibold': $route.path === (link.link?.story?.url || '/'),
          'text-center': true,
          'text-[#143213]': $route.path === (link.link?.story?.url || '/'),
          'transition-all duration-1000': true,
          'rounded-lg': true,
          'block': true,
          'md:p-0': true,
          'xl:text-lg': true,
          'md:text-base': true,
          'font-normal': true,
          'text-[#989898]': true,
          'exact-active': $route.path === (link.link?.story?.url || '/')
        }"
          >{{ link.label }}</NuxtLink
        >
      </article>
    </section>

    <section >
      <StoryblokBtn
      class="text-[#143213] border-[1px] border-[#143213]"
        :class="!!i ? 'hidden' : ''"
        v-for="(button, i) of navData.actions"
        :key="i"
        :button="button"
      />
    </section>
  </div>
</template>

<style scoped></style>
