<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getNavData, useNavData } from "../../composables/storyblok";
import { Bars3Icon } from "@heroicons/vue/24/solid";
import { storyblokNavbar } from "../../types/navbar";

const navData: storyblokNavbar = useNavData();
const showSidebar = ref(false);
const sideBarRef = ref();

function openSidebar() {
  showSidebar.value = true;
  setTimeout(() => {
    sideBarRef.value.focus();
    // setting time to zero so that i will be called at the end of every micro task in event loops
  }, 0);
}

const setBgGray = ref(false);

onMounted(async () => {
  await getNavData();
  window.addEventListener("scroll", (event) => {
    window.scrollY > 700 ? (setBgGray.value = true) : (setBgGray.value = false);
  });
});
</script>

<template>
  <div>
    <!-- Horizontal nav bar for large screen bg-[#5f5d5d52] -->

    <div
      class="fixed z-50 top-0 w-screen navContainer py-6"
      :class="setBgGray ? 'bg-[#383434bd] backdrop-blur-2xl' : ''"
    >
      <section
        class="sticky top-0 flex items-center justify-between"
        v-if="!!navData"
      >
        <!-- logo -->
        <NuxtImg
          format="webp"
          class="w-20 md:w-28"
          :src="navData?.logo?.filename"
        />
        <article class="hidden gap-8 lg:flex">
          <NuxtLink
            class="rounded-lg block md:p-0 xl:text-lg md:text-base font-normal text-[#AFAFAF]"
            :to="link.link?.story?.url || '/'"
            v-for="link in navData?.headerItems"
            :key="link.label"
          >
            {{ link.label }}
          </NuxtLink>
        </article>

        <div class="flex flex-row items-center gap-0">
          <article>
            <div class="flex items-center">
              <StoryblokBtn
                class="text-white border-white border-[1px]"
                :class="!!i ? '' : 'hidden lg:block'"
                v-for="(button, i) of navData.actions"
                :key="i"
                :button="button"
              />
            </div>
          </article>
          <!-- Icon to open and close the side nav bar for small screens -->
          <Bars3Icon
            @click="openSidebar()"
            class="w-6 h-6 mr-4 text-white cursor-pointer lg:hidden"
          />
        </div>
      </section>
    </div>
    <hr class="border-text3" />
    <!-- Vertical nav bar for small screen -->

    <Transition name="fade">
      <div
        ref="sideBarRef"
        tabindex="0"
        v-if="showSidebar"
        @focusout="showSidebar = false"
        class="fixed left-0 z-50 h-screen w-52 lg:hidden focus:outline-none"
      >
        <BarSideNav :navData="navData" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  left: -400px;
  opacity: 0.5;
  filter: blur(0.7rem);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
</style>
