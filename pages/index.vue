<script setup lang="ts">
import { components } from "~/slices";

const {client} = usePrismic();
const { data: page } = await useAsyncData("[home]", () =>
  client.getSingle("home", {fetchLinks: 'post_repeater.post'})
);

useHead({
  title: page.value?.data.meta_title,
  meta: [
    {
      name: "description",
      content: page.value?.data.meta_description || '',
    },
  ],
});
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
