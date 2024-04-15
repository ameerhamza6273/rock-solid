<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>
<template>
  <div v-editable="blok">
    <!-- All services from CustomServices component -->
    <CustomServices
      v-for="(service, index) in blok.services"
      :service="service"
      :index="index"
      :key="index"
    />
  </div>
</template>
