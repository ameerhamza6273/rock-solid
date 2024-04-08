<template>
  <div>
    <PageNavbar class="" />
    <!-- <section v-if="showSlug" class="mt-16 md:mt-20"> -->
    <section class="mt-16 md:mt-20">
      <slot />
    </section>
    <!-- <section v-else class="mt-16 md:mt-20">
      <DefaultContent />
    </section> -->
    <Footer />
    <!-- button fixed -->
    <FixedButtons />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, watch, onMounted, computed } from "vue";

const slug = useRoute();
const showSlug = ref(false);

computed(() => {
  showSlug.value = checkSlug(slug.path);
});
onMounted(() => {
  showSlug.value = checkSlug(slug.path);
});

watch(
  () => slug.path,
  (newPath) => {
    showSlug.value = checkSlug(newPath);
  }
);

function checkSlug(path: string): boolean {
  const allowedPaths = [
    "/",
    "/about",
    "/services",
    "/products",
    "/downloads",
    "/contactus",
    "/calculator",
    "/servicedetail",
    "/productdetail",
  ];
  return allowedPaths.includes(path);
}
</script>

<style scoped></style>
