<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>
<template>
  <div v-editable="blok">
    <!-- two type card in one row -->
    <section class="block md:flex px-4 max-w-[1200px] mx-auto">
      <!-- following cards -->
      <article class="md:w-[50%]">
        <StoryblokHeading
          class="font-jakarta font-semibold mt-14"
          v-for="heading of blok.followCardHeading"
          :heading="heading"
        />
        <div class="w-[70px] h-[3px] bg-primary mt-3"></div>
        <div class="mt-9">
          <div
            v-for="value of blok.followCards"
            class="shadow-lg md:max-w-[370px]"
          >
            <nuxtImg
              v-if="value.image.filename"
              format="webp"
              quality="100"
              :src="value.image.filename"
              class="w-full"
            ></nuxtImg>
            <div class="p-5">
              <StoryblokHeading
                class="font-jakarta font-semibold"
                v-for="heading of value.headings"
                :heading="heading"
              />
              <p class="text-[15px] mt-4 text-[#8e9196]">
                {{ value.subTitle }}
              </p>
              <StoryblokBtn
                v-for="button of value.actions"
                :button="button"
                class="max-w-[120px] h-10 pt-2 font-jakarta mt-4"
              ></StoryblokBtn>
            </div>
          </div>
        </div>
      </article>
      <!-- screed cards -->
      <article class="md:w-[50%]">
        <StoryblokHeading
          class="font-jakarta font-semibold mt-14"
          v-for="heading of blok.screedCardHeading"
          :heading="heading"
        />
        <div class="w-[70px] h-[3px] bg-primary mt-3"></div>
        <div class="mt-9">
          <div
            v-for="value of blok.screedCards"
            class="shadow-lg md:max-w-[370px]"
          >
            <nuxtImg
              v-if="value.image.filename"
              format="webp"
              quality="100"
              :src="value.image.filename"
              class="w-full"
            ></nuxtImg>
            <div class="p-5">
              <StoryblokHeading
                class="font-jakarta font-semibold"
                v-for="heading of value.headings"
                :heading="heading"
              />
              <p class="text-[15px] mt-4 text-[#8e9196]">
                {{ value.subTitle }}
              </p>
              <StoryblokBtn
                v-for="button of value.actions"
                :button="button"
                class="max-w-[120px] h-10 pt-2 font-jakarta mt-4"
              ></StoryblokBtn>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>
