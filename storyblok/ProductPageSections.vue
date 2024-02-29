<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>
<template>
  <div v-editable="blok">
    <section class="py-20 lg:pt-32 px-4 bg-[#F6F7FA]">
      <StoryblokHeading
        class="font-jakarta mt-4 max-w-[660px] mx-auto"
        v-for="heading of blok.headings"
        :heading="heading"
      />
    </section>
    <section class="max-w-[1200px] mx-auto">
      <!-- housing cards -->
      <StoryblokHeading
        class="font-jakarta font-semibold px-4 mt-14"
        v-for="heading of blok.houseCardHeading"
        :heading="heading"
      />
      <div class="w-[70px] h-[3px] bg-primary mt-3 ml-4"></div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] px-4 mx-auto mt-9"
      >
        <div v-for="value of blok.houseCards" class="shadow-lg">
          <nuxtImg :src="value.image.filename" class="w-full"></nuxtImg>
          <div class="p-5">
            <StoryblokHeading
              class="font-jakarta font-semibold"
              v-for="heading of value.headings"
              :heading="heading"
            />
            <p class="text-[15px] mt-4 text-[#8e9196]">{{ value.subTitle }}</p>
            <StoryblokBtn
              v-for="button of value.actions"
              :button="button"
              class="max-w-[120px] h-10 pt-2 font-jakarta mt-4"
            ></StoryblokBtn>
          </div>
        </div>
      </div>
      <!-- two type card in one row -->
      <div class="block md:flex px-4">
        <!-- following cards -->
        <div class="md:w-[50%]">
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
              <nuxtImg :src="value.image.filename" class="w-full"></nuxtImg>
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
        </div>
         <!-- screed cards -->
        <div class="md:w-[50%]">
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
              <nuxtImg :src="value.image.filename" class="w-full"></nuxtImg>
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
        </div>
      </div>
      <!-- special cards -->
      <StoryblokHeading
        class="font-jakarta font-semibold px-4 mt-14"
        v-for="heading of blok.specialCardHeading"
        :heading="heading"
      />
      <div class="w-[70px] h-[3px] bg-primary mt-3 ml-4"></div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] px-4 mx-auto mt-9"
      >
        <div v-for="value of blok.specialCards" class="shadow-lg">
          <nuxtImg :src="value.image.filename" class="w-full"></nuxtImg>
          <div class="p-5">
            <StoryblokHeading
              class="font-jakarta font-semibold"
              v-for="heading of value.headings"
              :heading="heading"
            />
            <p class="text-[15px] mt-4 text-[#8e9196]">{{ value.subTitle }}</p>
            <StoryblokBtn
              v-for="button of value.actions"
              :button="button"
              class="max-w-[120px] h-10 pt-2 font-jakarta mt-4"
            ></StoryblokBtn>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
