<template>
  <div
    class="h-screen w-screen overflow-hidden fixed top-0 left-0 bg-secondary z-[9999] flex justify-center items-center flex-col img"
  >
    <NuxtImg
      format="webp"
      quality="100"
      src="/logosplash.png"
      class="w-60 box"
      alt="user"
    ></NuxtImg>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { animate, spring } from "motion";
onMounted(() => {
  const animation = animate(
    ".box",
    { scale: 1.1 },
    {
      duration: 1,
      easing: spring(),
      repeat: Infinity,
      direction: "alternate",
    }
  );
});
</script>

<!-- <style scoped>
.img {
  background-image: url("../public/images/splash1.gif");
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
  background-position: center top;
}
</style> -->
