<template>
  <div
    class="pt-10 pb-4 relative h-full bg-[#F6F7FA]"
    :class="{ 'bg-white': index % 2 !== 1 }"
  >
    <div
      class="flex flex-col gap-20 py-14 mx-4 lg:flex-row md:max-w-[1200px] md:mx-auto"
      :class="{ 'lg:flex-row-reverse': index % 2 !== 1 }"
    >
      <!-- image column is here -->
      <div class="mb-4 lg:min-w-[570px]">
        <NuxtImg
          :src="service.content.image.filename"
          :alt="service.content.image.alt"
          class="w-full"
        ></NuxtImg>
      </div>
      <!-- content column is here -->
      <div class="self-center lg:col-span-3 md:col-span-3 sm:col-span-1">
        <StoryblokHeading
          class="font-jakarta mb-6 max-w-[450px] fixLineHeight"
          v-for="heading of service.content.headings"
          :heading="heading"
        />
        <p
          class="font-normal text-lg mt-2 font-jakarta text-textGray2 max-w-[500px]"
        >
          {{ service.content.text }}
        </p>
        <!-- button is here -->
        <section class="mt-7">
          <Btn v-for="value of service.content.action" :btnContent="value" />
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ service: Object, index: Number });
const LineHeight = "62px";
</script>

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
