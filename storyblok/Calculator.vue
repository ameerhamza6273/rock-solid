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
const lengthSelect = ref("M"); // Default to 'M'
const widthSelect = ref("M"); // Default to 'M'
const depthSelect = ref("M"); // Default to 'M'
const totalConcrete = ref(null);

const activateTab = (index: number) => {
  activeTab.value = index;
};

function submitForm() {
  const length = parseFloat(lengthInput.value);
  const width = parseFloat(widthInput.value);
  const depth = parseFloat(depthInput.value);
  const quantity = parseInt(quantityInput.value);

  if (isNaN(length) || isNaN(width) || isNaN(depth) || isNaN(quantity)) {
    alert("Please enter valid numbers for length, width, depth, and quantity.");
    return;
  }

  // Calculate total concrete needed based on inputs
  let volume = length * width * depth;
  let multiplier = getMultiplier(lengthSelect.value) + getMultiplier(widthSelect.value) + getMultiplier(depthSelect.value);
  totalConcrete.value = volume * multiplier * quantity;
}

function getMultiplier(side) {
  switch (side) {
    case 'M':
      return 1.5;
    case 'C':
      return 1.25;
    case 'I':
      return 1.0;
    case 'F':
      return 0.8;
    case 'Y':
      return 0.75;
    default:
      return 1.0;
  }
}

function resetForm() {
  lengthInput.value = '';
  widthInput.value = '';
  depthInput.value = '';
  lengthSelect.value = 'M';
  widthSelect.value = 'M';
  depthSelect.value = 'M';
  quantityInput.value = '';
  totalConcrete.value = null;
}

</script>
<template>
  <div v-editable="blok" class="border-b-8 border-tertiary">
    <section class="max-w-[1000px] mx-auto py-8 px-4">
      <!-- tabs is here -->
      <article
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
                :key="heading.label"
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
      </article>
      <!-- form is here -->
      <article
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
                v-model="lengthSelect"
                class="border border-black px-3 py-2 w-full font-jakarta"
              >
                <option value="M">M</option>
                <option value="C">C</option>
                <option value="I">I</option>
                <option value="F">F</option>
                <option value="Y">Y</option>
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
                v-model="widthSelect"
                class="border border-black px-3 py-2 w-full font-jakarta"
              >
                <option value="M">M</option>
                <option value="C">C</option>
                <option value="I">I</option>
                <option value="F">F</option>
                <option value="Y">Y</option>
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
                v-model="depthSelect"
                class="border border-black px-3 py-2 w-full font-jakarta"
              >
                <option value="M">M</option>
                <option value="C">C</option>
                <option value="I">I</option>
                <option value="F">F</option>
                <option value="Y">Y</option>
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
              type="button"
              @click="resetForm"
              class="max-w-[100px] px-5 py-2 text-lg font-jakarta mt-8 block cursor-pointer bg-white text-primary border-primary border"
            >
              Reset
            </button>
          </div>
        </form>
        <div class="result" v-if="totalConcrete !== null">
          Total Concrete Needed: {{ totalConcrete.toFixed(2) }} cubic meters
        </div>
      </article>
    </section>
  </div>
</template>
