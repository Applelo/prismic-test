<script setup lang="ts">
import { Content } from "@prismicio/client";
import { ProjectDocument } from "prismicio-types";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.PostRepeaterSlice>([
    "slice",
    "index",
    "slices",
    "context"
  ])
);

const prismic = usePrismic();
const items = props.slice.items


// @ts-expect-error
const postIds = props.slice.items.map(item => item.post.id)
const { data: posts } = useAsyncData("posts", () =>
  prismic.client.getAllByIDs<ProjectDocument>(postIds)
);
</script>

<template>
  <section
  :class="`repeater repeater--${slice.variation}`"
  >
    <div class="repeater__container">
      <h2 class="repeater__title">{{ slice.primary.title }}</h2>
      <ul class="repeater__list">
        <li v-for="post in posts">
          <article  class="repeater__item">
            <header>
              <h3 class="repeater__item-title">
                <PrismicLink class="repeater__item-link" :field="post">
                {{ post.data.title }}
                </PrismicLink>
              </h3>
            </header>
            <div class="repeater__item-thumbnail">
              <PrismicImage class="repeater__item-img" :field="post.data.thumbnail" />
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
