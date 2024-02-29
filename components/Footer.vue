<script setup lang="ts">
import { ref, onMounted, Ref } from "vue";
import { getFooterData, useFooterData } from "../composables/storyblok";
import { Footer } from "../types/footer";
import { CalendarIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/vue/24/solid";

const footerData: Ref<Footer> = useFooterData();

onMounted(async () => {
  await getFooterData();
});
</script>

<template>
  <div v-editable="footerData" class="max-w-[1200px] mx-auto px-4 py-14">
    <div class="grid grid-cols-6 gap-4" v-for="data in footerData?.body">
      <!-- Areas Covered section is here -->
      <div class="col-span-6 md:col-span-3 lg:col-span-2">
        <h3 class="font-jakarta text-2xl font-bold text-black mb-3">
          Areas Covered
        </h3>
        <div v-for="area in data.areas" class="mt-2">
          <NuxtLink class="text-[#5B5B5B] font-jakarta text-xl">
            {{ area.label }}
          </NuxtLink>
        </div>
      </div>
      <!-- Contact section is here -->
      <div class="col-span-6 md:col-span-3 lg:col-span-2">
        <h3 class="font-jakarta text-2xl font-bold text-black mb-3">Contact</h3>
        <div>
          <article class="max-w-[300px]">
            <NuxtLink class="text-[#5B5B5B] font-jakarta text-xl">
              {{ data.address }}
            </NuxtLink>
          </article>
          <article class="mt-2">
            <NuxtLink :to="`tel:${data.phoneNumber}`" class="text-[#5B5B5B] font-jakarta text-xl">
              {{ data.phoneNumber }}
            </NuxtLink>
          </article>
          <article class="mt-2">
            <NuxtLink class="text-[#5B5B5B] font-jakarta text-xl">
              {{ data.email }}
            </NuxtLink>
          </article>
        </div>
      </div>
      <!-- Connect with Us section is here -->
      <div class="col-span-6 md:col-span-3 lg:col-span-2">
        <h6
          class="font-jakarta text-xl font-semibold text-black mt-8 lg:text-center"
        >
          Connect with Us
        </h6>
        <div class="flex justify-around max-w-[170px] lg:mx-auto mt-5">
          <NuxtLink v-for="value in data.links"
            ><NuxtImg :src="value.image.filename" class="h-10"></NuxtImg
          ></NuxtLink>
        </div>
        <div
          class="text-[#5B5B5B] font-jakarta text-base block lg:flex justify-around max-w-[350px] mx-auto lg:mt-12 mt-6"
        >
          <p>Privacy Policy</p>
          <p class="mt-4 lg:mt-0">Cookie Policy</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
