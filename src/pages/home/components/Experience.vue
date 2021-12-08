<script setup lang="ts">
const props = defineProps({
  whenStart: {
    default: "",
    type: String,
  },
  whenEnd: {
    default: "",
    type: String,
  },
  whenMonths: {
    default: "",
    type: String,
  },
  whenMonthsShort: {
    default: "",
    type: String,
  },
  where: {
    default: "",
    type: String,
  },
  what: {
    default: "",
    type: String,
  },
  notes: {
    default: "",
    type: String,
  },
});
</script>

<template>
  <li class="experience">
    <div class="when">
      <div class="years">
        <div>{{ props.whenStart }}</div>
        <div v-if="props.whenEnd" class="union">-</div>
        <div v-if="props.whenEnd">{{ props.whenEnd }}</div>
      </div>
      <div v-if="props.whenMonths" class="months">{{ props.whenMonths }}</div>
      <div v-if="props.whenMonthsShort" class="months months-short">{{
        props.whenMonthsShort
      }}</div>
    </div>
    <div class="position">
      <div class="where">{{ props.where }}</div>
      <div class="what">{{ " " + props.what }}</div>
    </div>
    <div class="notes">{{ props.notes }}</div>
    <div class="experience-background"></div>
  </li>
</template>

<style scoped>
.experience {
  display: flex;
  flex-direction: column;

  position: relative;

  padding-left: 30px;
  padding-top: 30px;
  padding-right: 30px;
  padding-bottom: 30px;

  border-left-style: solid;
  border-left-width: 1px;
  border-left-color: rgba(var(--theme-700-rgb), 0.6);
  border-right-style: solid;
  border-right-width: 1px;
  border-right-color: rgba(var(--theme-700-rgb), 0.6);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgba(var(--theme-700-rgb), 0.6);

  cursor: default;

  transition: padding 0.2s ease-in-out;
}

.experience:first-child {
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: rgba(var(--theme-700-rgb), 0.6);
}

.theme-dark .experience {
  border-left-color: rgba(var(--theme-20-rgb), 0.6);
  border-right-color: rgba(var(--theme-20-rgb), 0.6);
  border-bottom-color: rgba(var(--theme-20-rgb), 0.6);
}

.theme-dark .experience:first-child {
  border-top-color: rgba(var(--theme-20-rgb), 0.6);
}

.theme-transition .experience {
  transition: padding 0.2s ease-in-out, border-left-color 0.5s ease-in-out,
    border-top-color 0.5s ease-in-out, border-right-color 0.5s ease-in-out,
    border-bottom-color 0.5s ease-in-out;
}

.experience > *:first-child {
  margin-top: 0;
}
.experience:hover {
  padding: 30px 45px;
}
.experience > * {
  margin-top: 15px;
}
.when {
  display: flex;
  align-items: baseline;
}
.years {
  display: flex;
  align-items: baseline;

  font-size: 20px;

  color: var(--theme-400);
}

.theme-dark .years {
  color: var(--theme-60);
}

.years > *:first-child {
  margin-left: 0;
}
.years > * {
  margin-left: 3px;
}
.months {
  margin-left: 5px;

  font-size: 14px;
  font-weight: 400;

  color: var(--theme-900);
}

.theme-dark .months {
  color: var(--theme-10);
}

.theme-transition .months {
  transition: color 0.5s ease-in-out;
}

.months-short {
  display: none;
}
.where {
  margin-bottom: 4px;

  font-size: 20px;
}
.what,
.notes {
  font-size: 14px;
}

.notes {
  font-style: italic;
}

.what::before {
  content: "→";
}

.experience-background {
  position: absolute;

  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  margin-top: 0;

  z-index: -1;

  background-color: rgba(var(--theme-20-rgb), 0.6);

  transform-origin: center right;
  transform: scaleX(0);

  transition: transform 0.2s 0.2s ease-in-out;
}

.theme-dark .experience-background {
  background-color: rgba(var(--theme-400-rgb), 0.6);
}

.theme-transition .experience-background {
  transition: transform 0.2s 0.2s ease-in-out, background-color 0.5s ease-in-out;
}

.experience:hover .experience-background {
  transform-origin: center left;
  transform: scaleX(1);

  transition: transform 0.2s ease-in-out;
}

@media screen and (min-width: 600px) {
  .experience {
    flex-direction: row;
    align-items: center;

    padding: 10px;
  }

  .experience:hover {
    padding: 10px 20px;
  }

  .experience > *:first-child {
    margin-left: 0;
  }

  .experience > * {
    margin-left: 10px;
    margin-top: 0;
  }

  .when {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 50px;
  }

  .years {
    flex-direction: column-reverse;
    align-items: center;

    font-size: 16px;
  }

  .years .union {
    display: none;
  }

  .years > *:last-child {
    margin-top: 0;
  }

  .years > * {
    margin-top: 6px;
  }

  .months {
    display: none;

    margin-left: 0;
  }
  .months.months-short {
    display: block;
  }

  .position {
    flex-grow: 1;
  }

  .where {
    font-size: 16px;
  }

  .notes {
    width: 100px;
    text-align: right;
  }

  .experience-background {
    margin-left: 0;
  }
}
</style>
