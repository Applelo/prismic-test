<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HeroSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <header
    :class="`hero hero--${slice.variation}`"
  >
    <div class="hero__wrapper">
      <div class="hero__container">
        <h1 class="hero__title">
          {{ slice.primary.title }}
        </h1>
        <h2 class="hero__subtitle">
          {{ slice.primary.subtitle }}
        </h2>
      </div>
    </div>
    <PrismicImage
      v-if="slice.variation === 'default'"
      class="hero__img"
      :field="slice.primary.image"
    />
  </header>
</template>
