<script setup lang="ts">
/* eslint-disable vue/no-v-html */
import Appear from "../../../components/Appear.vue";
import { RouterLink } from "vue-router";
import { computed } from "vue";

const props = defineProps({
  code: {
    type: String,
    default: "sp-00-00",
  },
  programmeSlug: {
    type: String,
    default: "special",
  },
  number: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    default: "",
  },
  duration: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: new Date("2022/01/01"),
  },
  image: {
    type: String,
    default: "/default-assets/podcast/image.jpg",
  },
  imageAlt: {
    type: String,
    default: "L’image de couverture de ce podcast.",
  },
});

const textDuration = computed(() => {
  const hours = Math.floor(props.duration / (60 * 60));
  const minutes = Math.floor((props.duration - hours * 60 * 60) / 60);
  return hours > 0
    ? `${hours}h${`${minutes}`.padStart(2, "0")}&nbsp;`
    : `${minutes}min&nbsp;`;
});

const formatDate = (date: Date, monthsList: string[]) => {
  const month = monthsList[date.getMonth()];
  const displayYear = date.getFullYear() !== new Date().getFullYear();
  return `${date.getDate()} ${month}${
    displayYear ? ` ${date.getFullYear()}` : ""
  }`;
};

const textDate = computed(() => {
  return formatDate(props.date, [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ]);
});

const textDateShort = computed(() => {
  return formatDate(props.date, [
    '<abbr title="janvier">janv.</abbr>',
    '<abbr title="février">fév.</abbr>',
    "mars",
    "avril",
    "mai",
    "juin",
    '<abbr title="juillet">juil.</abbr>',
    "août",
    '<abbr title="septembre">sept.</abbr>',
    '<abbr title="octobre">oct.</abbr>',
    '<abbr title="novembre">nov.</abbr>',
    '<abbr title="décembre">déc.</abbr>',
  ]);
});
</script>

<template>
  <li>
    <RouterLink
      class="link"
      :to="`/podcast/${props.programmeSlug}/${props.code}`"
      :aria-labelledby="`title-${props.code}`"
      :aria-describedby="`description-${props.code}`"
    >
      <Appear class="content">
        <div class="cover-container">
          <img :src="props.image" :alt="props.imageAlt" />
        </div>
        <div class="description">
          <div class="title-container">
            <span class="number">{{ `Épisode #${props.number}` }}</span>
            <span :id="`title-${props.code}`" class="title">{{
              props.title
            }}</span>
          </div>
          <div :id="`description-${props.code}`" class="meta">
            <span v-html="textDuration"></span>
            <span class="date" v-html="textDate"></span>
            <span class="date-short" v-html="textDateShort"></span>
          </div>
        </div>
      </Appear>
    </RouterLink>
  </li>
</template>

<style scoped>
li {
  width: 100%;

  box-shadow: 0.7px 1.5px 1.5px rgba(0, 0, 0, 0.01),
    1.75px 3.5px 4px rgba(0, 0, 0, 0.018), 3.5px 7.5px 8px rgba(0, 0, 0, 0.025),
    12px 25px 30px rgba(0, 0, 0, 0.04);
}

.link {
  width: 100%;
  height: 100%;
}

.content {
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  overflow-x: visible;
  overflow-y: visible;
}

.cover-container {
  width: 100%;
  height: 0;

  padding-bottom: 100%;

  overflow-x: hidden;
  overflow-y: hidden;
}

.cover-container img {
  width: 100%;

  transition: transform 0.2s ease-in-out;
}

.link:hover .cover-container img,
.link:focus-visible .cover-container img {
  transform: scale(1.1);
}

.description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding-left: 14px;
  padding-top: 8px;
  padding-right: 14px;
  padding-bottom: 8px;

  position: relative;

  background-color: rgba(var(--theme-10-rgb), 0.6);
  color: var(--theme-900);
}

.theme-dark .description {
  background-color: rgba(var(--theme-700-rgb), 0.6);
  color: var(--theme-10);
}

.theme-transition .description {
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
}

.title-container {
  display: flex;
  flex-direction: column;
}

.number {
  font-weight: 800;
}

.title {
  font-weight: 500;
}

.meta {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: 12px;

  font-style: italic;
}

.date {
  display: none;
}

@media screen and (min-width: 450px) {
  .title-container {
    font-size: 18px;
  }

  .meta {
    margin-top: 16px;
  }
}

@media screen and (min-width: 500px) {
  .date {
    display: inline;
  }

  .date-short {
    display: none;
  }
}
</style>
