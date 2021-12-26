<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import More from "./More.vue";

const route = useRoute();

const props = defineProps({
  page: {
    type: Number,
    default: 0,
  },
  numberOfPages: {
    type: Number,
    default: 0,
  },
  language: {
    type: String,
    default: "en",
  },
});
</script>

<template>
  <div class="pagination">
    <RouterLink
      class="more-target page-previous"
      :class="{ disabled: props.page < 1 }"
      :aria-disabled="props.page < 1 ? true : false"
      :tabindex="props.page < 1 ? -1 : undefined"
      :to="`${route.path}${props.page < 2 ? '' : `?page=${props.page - 1}`}`"
      ><More :bold="props.page >= 1" size="m" direction="left">{{
        props.language === "fr" ? "page précédente" : "previous page"
      }}</More></RouterLink
    >
    <RouterLink
      class="more-target page-next"
      :class="{ disabled: props.page >= props.numberOfPages - 1 }"
      :aria-disabled="props.page >= props.numberOfPages - 1 ? true : false"
      :tabindex="props.page >= props.numberOfPages - 1 ? -1 : undefined"
      :to="`${route.path}?page=${
        props.page >= props.numberOfPages - 1
          ? props.numberOfPages - 1
          : props.page + 1
      }`"
      ><More :bold="props.page < props.numberOfPages - 1" size="m">{{
        props.language === "fr" ? "page suivante" : "next page"
      }}</More></RouterLink
    >
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 480px;

  margin-left: auto;
  margin-top: 32px;
  margin-right: auto;
}

.page-next {
  align-self: flex-end;
}

.page-previous,
.page-next {
  color: var(--theme-900);
}

.theme-dark .page-previous,
.theme-dark .page-next {
  color: var(--theme-10);
}

.theme-transition .page-previous,
.theme-transition .page-next {
  transition: color 0.5s ease-in-out;
}

.page-previous.disabled,
.page-next.disabled {
  opacity: 0.6;
  pointer-events: none;
}

@media screen and (min-width: 350px) {
  .pagination {
    flex-direction: row;
  }
}
</style>
