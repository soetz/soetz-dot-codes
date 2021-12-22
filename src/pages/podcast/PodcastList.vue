<script setup lang="ts">
import Appear from "../../components/Appear.vue";
</script>

<template>
  <section class="limited-width" lang="fr-FR">
    <Appear class="overflow-visible">
      <h1>Regard 9</h1>
      <p class="limited-width-small">
        Le podcast qui t’en met plein la vue ! Je pars à la rencontre d’artistes
        d’horizons divers mais qui ont une chose en commun : leur travail
        s’apprécie avec les yeux.
      </p>
    </Appear>
    <Appear>
      <ul>
        <li></li>
      </ul>
    </Appear>
  </section>
</template>

<style scoped>
.limited-width {
  width: 100%;
  max-width: 800px;

  margin-left: auto;
  margin-right: auto;

  padding-left: 13px;
  padding-right: 13px;
  padding-bottom: 13px;
}

.limited-width-small {
  max-width: 480px;
}

.overflow-visible {
  overflow-x: visible;
  overflow-y: visible;
}
</style>
