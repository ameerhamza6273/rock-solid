<template>
  <div v-editable="blok" class="max-w-[1200px] mx-auto py-24 px-4">
    <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
      <div class="self-center">
        <NuxtImg
          v-if="blok.image.filename"
          format="webp"
          quality="100"
          :src="blok.image.filename"
          :alt="blok.image.alt"
          width="150"
          class="mx-auto"
        />
        <NuxtImg
          v-if="blok.raiting.filename"
          format="webp"
          quality="100"
          :src="blok.raiting.filename"
          :alt="blok.raiting.alt"
          width="150"
          class="mx-auto"
        />
        <StoryblokHeading
          class="font-jakarta text-center font-semibold mt-3"
          v-for="heading of blok.headings"
          :heading="heading"
        />
        <p
          class="text-[#6D6D6D] text-center font-jakarta text-sm font-normal mt-2"
        >
          {{ blok.text1 }}
          <span class="text-[#2F2F2F] font-semibold">{{ blok.text2 }}</span>
        </p>
        <StoryblokBtn
          v-for="button of blok.actions"
          :button="button"
          class="max-w-[150px] font-jakarta mt-4 mx-auto"
        ></StoryblokBtn>
      </div>
      <!-- google review cards is here -->
      <div
        v-for="review in limitedReviews"
        class="bg-white rounded-xl p-4 relative border"
      >
        <div class="flex items-center mb-3">
          <NuxtImg
            v-if="review.profile_photo_url"
            format="webp"
            quality="100"
            :src="review.profile_photo_url"
            alt="user"
            width="50"
          />
          <div class="ml-4">
            <h2 class="text-[#2F2F2F] text-lg font-jakarta font-semibold">
              {{ review.author_name }}
            </h2>
            <p class="text-[#656565] text-sm font-jakarta font-normal">
              {{ review.relative_time_description }}
            </p>
          </div>
        </div>
        <span
          v-for="star in review.rating"
          :key="star"
          class="text-[#f6bb06] text-3xl mr-1.5"
          >&#9733;</span
        >
        <p class="text-[#464646] text-base font-jakarta font-normal mt-3 pb-8">
          <template v-if="review.text">
            {{ truncateText(review.text, 24) }}
          </template>
          <template v-else
            >Fantastic service the driver was very helpful and we got the job
            done in time I would recommend this company to you....
          </template>
        </p>
        <NuxtLink
          :to="review.author_url"
          class="text-base font-jakarta font-medium absolute bottom-4 text-[#FF6C2B]"
        >
          read more
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
defineProps({ blok: Object });
const reviewsData = ref("");
const limitedReviews = computed(() => reviewsData.value.slice(0, 3));
onMounted(async () => {
  const [res, error] = await getReviewsOfGoogle();
  reviewsData.value = res.result.reviews;
  console.log("response", limitedReviews);
});

function truncateText(text, maxWords) {
  const words = text.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "...";
  } else {
    return text;
  }
}
</script>
