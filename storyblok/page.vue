<template>
  <div v-editable="blok">
    <StoryblokComponent
      v-for="(blok, index) in props.blok.body"
      :key="index"
      :blok="blok"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>

<style scoped></style>
