<script setup lang="ts">
import { ref, onMounted, Ref } from "vue";
import { getNavData, useNavData } from "../composables/storyblok";
import { Footer } from "../types/footer";
import { CalendarIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/vue/24/solid";

const navData: Ref<Footer> = useNavData();

onMounted(async () => {
  await getNavData();
});

const isToggled = ref(false);

const toggle = () => {
  isToggled.value = !isToggled.value;
};

</script>

<template>
  <div v-editable="navData" v-for="value in navData?.body">
    <!-- topnav -->
    <nav class="bg-[#F6F7FA] fixed w-full z-40 top-0 start-0 py-2 hidden lg:block">
      <ul class="flex font-medium text-base max-w-[420px] ml-auto items-center">
        <li class="pr-3 text-[#1E1E1E]">Place your order</li>
        <li class="px-3 text-[#1E1E1E] border-x border-[#000]">Call Us</li>
        <li class="pl-3 text-primary">
          <NuxtLink :to="`tel:${value.phoneNumber}`" class="flex items-center">
            <nuxtImg :src="value.icon.filename" class="w-4 h-4 mr-1"></nuxtImg>{{ value.phoneNumber }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <!-- navbar for desktop -->
    <nav class="bg-[#2F6CC8] fixed w-full z-40 lg:top-[40px] top-0 start-0">
      <div
        class="max-w-[1200px] flex flex-wrap items-center justify-between mx-auto py-4 md:py-7 px-4"
      >
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img :src="value.logo.filename" class="w-32 lg:w-44" alt="Logo" />
        </a>
        <div
          class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse md:hidden"
        >
          <button
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2"
            @click="toggle"
            >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="#FFF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 z-40"
          id="navbar-sticky"
        >
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0"
          >
            <li v-for="link of value?.headerItems">
              <NuxtLink
              :to="link.link?.story?.url"
                class="pl-3 font-mediam text-white font-jakarta text-base"
              >
              {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- mobile navbar -->
    <div
      class="w-full h-full fixed z-20 pt-10 top-[60px] bg-[#2F6CC8] md:hidden sm:block"
      v-if="isToggled"
    >
      <div class="px-4">
        <ul class="py-4 font-medium rounded-lg">
          <li v-for="link of value?.headerItems">
              <NuxtLink
              :to="link.link?.story?.url"
                class="hover:underline text-center pl-3 font-mediam text-white font-jakarta text-base rounded-lg block py-2 px-3 md:p-0"
                @click="toggle"
              >
              {{ link.label }}
              </NuxtLink>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
