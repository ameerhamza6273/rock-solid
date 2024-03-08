<template>
  <div>
    <!-- buttons fixed on mobile -->
    <section
      class="bg-white flex items-center btn-fixed gap-2 justify-around fixed w-full z-40 bottom-[-2px] start-0 p-2 pb-2.5 md:hidden"
    >
      <button
        type="button"
        class="max-w-[172px] px-3 rounded-sm py-1.5 text-base font-jakarta block cursor-pointer transition-all duration-500 capitalize bg-primary text-white border border-primary"
      >
        Make an Enquiry
      </button>
      <NuxtLink
        :to="`tel:02476 361 448`"
        class="flex items-center max-w-[170px] px-3 rounded-sm py-1.5 text-base font-jakarta cursor-pointer transition-all duration-500 capitalize bg-white text-primary border border-primary"
      >
      <NuxtImg src="../public/images/Frame-6.png" class="w-4 h-4 mr-2"></NuxtImg>
        02476 361 448
      </NuxtLink>
    </section>
  </div>
</template>
<script setup lang="ts">

</script>

<style scoped>
.btn-fixed{
    box-shadow: 0px -4px 20px 0px #93939340;
}
</style>
