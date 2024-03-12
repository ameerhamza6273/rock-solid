<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  blok: { type: Object, default: null },
});
const activeTab = ref(0);
const lengthInput = ref("222");
const widthInput = ref("222");
const depthInput = ref("222");
const quantityInput = ref("222");

const activateTab = (index: number) => {
  activeTab.value = index;
};

const submitForm = () => {
  props.blok.tabs[activeTab.value].submitted = true;
  if (activeTab.value < props.blok.tabs.length - 1) {
    activeTab.value++;
  }
};
</script>
<template>
  <div v-editable="blok" class="border-b-8 border-tertiary">
    <section class="max-w-[1000px] mx-auto py-8 px-4">
      <!-- tabs is here -->
      <div
        class="block md:flex mx-auto max-w-[246px] md:max-w-[100%] justify-between border-b"
      >
        <div
          v-for="(tab, index) in blok.tabs"
          :key="index"
          @click="activateTab(index)"
          class="py-2 px-4 my-5"
        >
          <div class="flex items-center gap-3 cursor-pointer">
            <NuxtImg
              v-if="tab.image.filename"
              format="webp"
              quality="100"
              :src="tab.image.filename"
              class="transition-all duration-300 filter grayscale w-11"
              :class="{
                'grayscale-0': activeTab === index,
              }"
            ></NuxtImg>
            <div>
              <p class="font-jakarta font-mediam text-sm">{{ tab.text }}</p>
              <StoryblokHeading
                class="font-jakarta font-semibold opacity-80"
                :class="{
                  'text-primary opacity-[9.9]': activeTab === index,
                  'mr-2': index < blok.tabs.length - 1,
                }"
                v-for="heading of tab.headings"
                :heading="heading"
              />
            </div>
          </div>
          <!-- border bottom -->
          <div
            v-if="activeTab === index"
            class="w-[140px] h-[3px] bg-primary mt-3 ml-7 mb-[-8px]"
          ></div>
        </div>
      </div>
      <!-- form is here -->
      <div
        v-show="activeTab !== null"
        class="max-w-[700px] mx-auto mt-16 mb-12 p-12 pb-14 shadow-2xl"
      >
        <form @submit.prevent="submitForm">
          <div class="block md:flex items-center gap-2">
            <label
              for="inputField"
              class="font-jakarta w-full md:w-[14%] text-black text-lg font-medium"
              >Length (l)</label
            >
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-3 md:w-[86%] mt-2 md:mt-0"
            >
              <input
                type="number"
                class="border-primary border px-3 py-2 w-full font-jakarta"
                placeholder="222"
                v-model="lengthInput"
              />
              <select
                id="length"
                class="border border-black px-3 py-2 w-full font-jakarta"
              >
                <option selected value="">M</option>
                <option value="US">L</option>
              </select>
            </div>
          </div>
          <div class="block md:flex items-center gap-2 mt-4">
            <label
              for="inputField"
              class="font-jakarta w-full md:w-[14%] text-black text-lg font-medium"
              >Width (w)</label
            >
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-3 md:w-[86%] mt-2 md:mt-0"
            >
              <input
                v-model="widthInput"
                type="number"
                class="border border-primary px-3 py-2 w-full font-jakarta"
                placeholder="222"
              />
              <select
                id="length"
                class="border border-black px-3 py-2 w-full font-jakarta"
              >
                <option selected value="">M</option>
                <option value="US">L</option>
              </select>
            </div>
          </div>
          <div class="block md:flex items-center gap-2 mt-4">
            <label
              for="inputField"
              class="font-jakarta w-full md:w-[14%] text-black text-lg font-medium"
              >Depth (d)</label
            >
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-3 md:w-[86%] mt-2 md:mt-0"
            >
              <input
                v-model="depthInput"
                type="number"
                class="border border-primary px-3 py-2 w-full font-jakarta"
                placeholder="222"
              />
              <select
                id="length"
                class="border border-black px-3 py-2 w-full font-jakarta"
              >
                <option selected value="">M</option>
                <option value="US">L</option>
              </select>
            </div>
          </div>
          <div class="block md:flex items-center gap-2 mt-4 md:mt-14">
            <label
              for="inputField"
              class="font-jakarta w-full md:w-[14%] text-black text-lg font-medium"
              >Quantity</label
            >
            <div class="md:w-[85%] mt-2 md:mt-0">
              <input
                v-model="quantityInput"
                type="number"
                class="border border-primary px-3 py-2 w-full font-jakarta"
                placeholder="222"
              />
            </div>
          </div>
          <div class="flex justify-center gap-3">
            <button
              type="submit"
              class="max-w-[130px] px-5 py-2 text-lg font-jakarta mt-8 block cursor-pointer bg-primary text-white"
            >
              Calculate
            </button>
            <button
              type="reset"
              class="max-w-[100px] px-5 py-2 text-lg font-jakarta mt-8 block cursor-pointer bg-white text-primary border-primary border"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
