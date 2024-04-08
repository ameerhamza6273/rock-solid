<script setup lang="ts">
import { calculator} from "../types/calculator"
import { PropType , ref } from "vue"
const props = defineProps({
  blok: { type: Object as PropType<calculator>, default: null },
});

const activeTab = ref(1);
const formOneTotalConcrete = ref(0);
const formTwoTotalConcrete = ref(0);
const formThreeTotalConcrete = ref(0);

// for first form
const formLengthInput = ref(0);
const formWidthInput = ref(0);
const formDepthInput = ref(0);
const formLengthSelect = ref("M"); 
const formWidthSelect = ref("M");
const formDepthSelect = ref("M");

// for second form
const lengthInput = ref(0);
const widthInput = ref(0);
const depthInput = ref(0);
const quantityInput = ref(0);
const lengthSelect = ref("M");
const widthSelect = ref("M");
const depthSelect = ref("M");

// for third form
const formThreeDepthInput1 = ref(0);
const formThreeDepthInput2 = ref(0);
const formThreeQuantityInput = ref(0);
const formThreeDepthSelect1 = ref("M");
const formThreeDepthSelect2 = ref("M");

const activateTab = (index: number) => {
  activeTab.value = index;
};
// form one function
function submitFormOne() {
  const formLength = formLengthInput.value;
  const formWidth = formWidthInput.value;
  const formDepth = formDepthInput.value;

  if (formLength == 0 || formWidth == 0 || formDepth == 0) {
    alert("Please enter valid numbers for length, width and depth.");
    return;
  }

  // Calculate total concrete needed based on inputs
  let volume = formLength * formWidth * formDepth;
  let multiplier =
    getMultiplier(formLengthSelect.value) +
    getMultiplier(formWidthSelect.value) +
    getMultiplier(formDepthSelect.value);
  formOneTotalConcrete.value = volume * multiplier;
}

// form two function
function submitFormTwo() {
  const length = lengthInput.value;
  const width = widthInput.value;
  const depth = depthInput.value;
  const quantity = quantityInput.value;

  if (length == 0 || width == 0 || depth == 0 || quantity == 0) {
    alert("Please enter valid numbers for length, width, depth, and quantity.");
    return;
  }

  // Calculate total concrete needed based on inputs
  let volume = length * width * depth;
  let multiplier =
    getMultiplier(lengthSelect.value) +
    getMultiplier(widthSelect.value) +
    getMultiplier(depthSelect.value);
  formTwoTotalConcrete.value = volume * multiplier * quantity;
}

// form three function
function submitFormThree() {
  const formThreedepth1 = formThreeDepthInput1.value;
  const formThreedepth2 = formThreeDepthInput2.value;
  const formThreequantity = formThreeQuantityInput.value;

  if (formThreedepth1 == 0 || formThreedepth2 == 0 || formThreequantity == 0) {
    alert("Please enter valid numbers for depths and quantity.");
    return;
  }

  // Calculate total concrete needed based on inputs
  let volume = formThreedepth1 * formThreedepth2;
  let multiplier =
    getMultiplier(formThreeDepthSelect1.value) +
    getMultiplier(formThreeDepthSelect2.value);
  formThreeTotalConcrete.value = volume * multiplier * formThreequantity;
}

function getMultiplier(side) {
  switch (side) {
    case "M":
      return 1.5;
    case "C":
      return 1.25;
    case "I":
      return 1.0;
    case "F":
      return 0.8;
    case "Y":
      return 0.75;
    default:
      return 1.0;
  }
}

// functions for reset forms
function resetFormOne() {
  formLengthInput.value = 0;
  formWidthInput.value = 0;
  formDepthInput.value = 0;
  formLengthSelect.value = "M";
  formWidthSelect.value = "M";
  formDepthSelect.value = "M";
  formOneTotalConcrete.value = 0;
}
function resetFormTwo() {
  lengthInput.value = 0;
  widthInput.value = 0;
  depthInput.value = 0;
  lengthSelect.value = "M";
  widthSelect.value = "M";
  depthSelect.value = "M";
  quantityInput.value = 0;
  formTwoTotalConcrete.value = 0;
}
function resetFormThree() {
  formThreeDepthInput1.value = 0;
  formThreeDepthInput2.value = 0;
  formThreeDepthSelect1.value = "M";
  formThreeDepthSelect2.value = "M";
  formThreeQuantityInput.value = 0;
  formThreeTotalConcrete.value = 0;
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
                :key="heading.text"
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
      <!-- first calculator form is here -->
      <article
        v-show="activeTab == 0"
        class="max-w-[700px] mx-auto mt-16 mb-12 p-6 md:p-12 pb-8 md:pb-14 shadow-2xl"
      >
        <form @submit.prevent="submitFormOne">
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
                v-model="formLengthInput"
              />
              <select
                id="length"
                v-model="formLengthSelect"
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
                v-model="formWidthInput"
                type="number"
                class="border border-primary px-3 py-2 w-full font-jakarta"
                placeholder="222"
              />
              <select
                id="length"
                v-model="formWidthSelect"
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
                v-model="formDepthInput"
                type="number"
                class="border border-primary px-3 py-2 w-full font-jakarta"
                placeholder="222"
              />
              <select
                id="length"
                v-model="formDepthSelect"
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
          <!-- submit and reset buttons here-->
          <div class="flex justify-center gap-3">
            <button
              type="submit"
              class="max-w-[130px] px-5 py-2 text-lg font-jakarta mt-8 block cursor-pointer bg-primary text-white"
            >
              Calculate
            </button>
            <button
              type="button"
              @click="resetFormOne"
              class="max-w-[100px] px-5 py-2 text-lg font-jakarta mt-8 block cursor-pointer bg-white text-primary border-primary border"
            >
              Reset
            </button>
          </div>
        </form>
        <div
          class="result block md:flex items-center mt-7 gap-2 justify-between"
          v-if="formOneTotalConcrete !== 0"
        >
          <h3
            class="font-jakarta text-black text-xl font-semibold text-center md:text-left"
          >
            Total Concrete Needed:
          </h3>
          <p
            class="w-full bg-bgGray p-3 px-5 font-jakarta text-black text-xl mt-4 md:mt-0"
          >
            {{ formOneTotalConcrete.toFixed(2) }} cubic meters
          </p>
        </div>
      </article>
      <!-- second calculator form is here -->
      <article
        v-show="activeTab == 1"
        class="max-w-[700px] mx-auto mt-16 mb-12 p-6 md:p-12 pb-8 md:pb-14 shadow-2xl"
      >
        <form @submit.prevent="submitFormTwo">
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
          <!-- submit and reset buttons here-->
          <div class="flex justify-center gap-3">
            <button
              type="submit"
              class="max-w-[130px] px-5 py-2 text-lg font-jakarta mt-8 block cursor-pointer bg-primary text-white"
            >
              Calculate
            </button>
            <button
              type="button"
              @click="resetFormTwo"
              class="max-w-[100px] px-5 py-2 text-lg font-jakarta mt-8 block cursor-pointer bg-white text-primary border-primary border"
            >
              Reset
            </button>
          </div>
        </form>
        <div
          class="result block md:flex items-center mt-7 gap-2 justify-between"
          v-if="formTwoTotalConcrete !== 0"
        >
          <h3
            class="font-jakarta text-black text-xl font-semibold text-center md:text-left"
          >
            Total Concrete Needed:
          </h3>
          <p
            class="w-full bg-bgGray p-3 px-5 font-jakarta text-black text-xl mt-4 md:mt-0"
          >
            {{ formTwoTotalConcrete.toFixed(2) }} cubic meters
          </p>
        </div>
      </article>
      <!-- third calculator form is here -->
      <article
        v-show="activeTab == 2"
        class="max-w-[700px] mx-auto mt-16 mb-12 p-6 md:p-12 pb-8 md:pb-14 shadow-2xl"
      >
        <form @submit.prevent="submitFormThree">
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
                v-model="formThreeDepthInput1"
                type="number"
                class="border border-primary px-3 py-2 w-full font-jakarta"
                placeholder="222"
              />
              <select
                id="length"
                v-model="formThreeDepthSelect1"
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
                v-model="formThreeDepthInput2"
                type="number"
                class="border border-primary px-3 py-2 w-full font-jakarta"
                placeholder="222"
              />
              <select
                id="length"
                v-model="formThreeDepthSelect2"
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
                v-model="formThreeQuantityInput"
                type="number"
                class="border border-primary px-3 py-2 w-full font-jakarta"
                placeholder="222"
              />
            </div>
          </div>
          <!-- submit and reset buttons here-->
          <div class="flex justify-center gap-3">
            <button
              type="submit"
              class="max-w-[130px] px-5 py-2 text-lg font-jakarta mt-8 block cursor-pointer bg-primary text-white"
            >
              Calculate
            </button>
            <button
              type="button"
              @click="resetFormThree"
              class="max-w-[100px] px-5 py-2 text-lg font-jakarta mt-8 block cursor-pointer bg-white text-primary border-primary border"
            >
              Reset
            </button>
          </div>
        </form>
        <div
          class="result block md:flex items-center mt-7 gap-2 justify-between"
          v-if="formThreeTotalConcrete !== 0"
        >
          <h3
            class="font-jakarta text-black text-xl font-semibold text-center md:text-left"
          >
            Total Concrete Needed:
          </h3>
          <p
            class="w-full bg-bgGray p-3 px-5 font-jakarta text-black text-xl mt-4 md:mt-0"
          >
            {{ formThreeTotalConcrete.toFixed(2) }} cubic meters
          </p>
        </div>
      </article>

    </section>
  </div>
</template>
