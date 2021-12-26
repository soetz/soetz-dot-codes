<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <section lang="fr-FR" class="limited-width">
    <h1>Mentions légales</h1>
    <div class="subtitle">En vigueur au 28/12/2021.</div>
    <p>
      Conformément aux dispositions des Articles 6-III et 19 de la Loi
      n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique,
      dite L.C.E.N., il est porté à la connaissance des utilisateurs et
      visiteurs, ci-après « l’Utilisateur », du site soetz.codes, ci-après « le
      Site », les présentes mentions légales.
    </p>
    <p>
      La connexion et la navigation sur le Site par l’Utilisateur implique
      acceptation intégrale et sans réserve des présentes mentions légales.
    </p>
    <p>
      Ces dernières sont accessibles sur le Site à la rubrique « Mentions
      légales ».
    </p>
    <h2>Article 1&nbsp;- L’éditeur</h2>
    <p>
      L’édition et la direction de la publication du Site est assurée par Simon
      LECUTIEZ.
    </p>
    <p>ci-après « l’Éditeur ».</p>
    <h2>Article 2&nbsp;- L’hébergeur</h2>
    <p>
      L’hébergeur du Site est OVH, société par actions simplifiées dont le siège
      social est situé au
    </p>
    <address>
      2, rue Kellermann<br />
      ROUBAIX 59100<br />
      France
    </address>
    <p>
      Tout abus peut être signalé à l’adresse
      <a
        class="link-block"
        href="https://www.ovh.com/abuse/"
        target="_blank"
        rel="nofollow noopener norefferer"
        >https://www.ovh.com/abuse/</a
      >.
    </p>
    <h2>Article 3&nbsp;- Accès au site</h2>
    <p>
      Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force
      majeure, interruption programmée ou non et pouvant découler d’une
      nécessité de maintenance.
    </p>
    <p>
      En cas de modification, interruption ou suspension du Site, l'Éditeur ne
      saurait être tenu responsable.
    </p>
    <h2>Article 4&nbsp;- Collecte de données</h2>
    <p>
      Le Site est susceptible de recueillir des données personnelles à l’aide de
      son
      <RouterLink class="link-block" to="/contact"
        >formulaire de contact</RouterLink
      >. Conformément au Réglement Général sur la Protection des Données, ces
      données ne sauraient être utilisées autrement que pour répondre aux
      demandes formulées par l’Utilisateur, et sont supprimées une fois que
      ladite demande est satisfaite. Aucune autre page du Site ne recueille de
      données concernant l’Utilisateur.
    </p>
    <p>
      En application des articles 39 et suivants de la loi du 6 janvier 1978
      modifiée, l’Utilisateur dispose d’un droit d’accès et de rectification aux
      informations qui le concernent. Si vous souhaitez exercer ce droit et
      obtenir communication des informations vous concernant, vous pouvez
      utiliser la page
      <RouterLink class="link-block" to="/contact">Contact</RouterLink>.
    </p>
    <h2>Article 5&nbsp;- Propriété intellectuelle</h2>
    <p>
      Toute utilisation, reproduction, diffusion, commercialisation,
      modification de tout ou partie du Site, sans autorisation de l’Éditeur,
      est prohibée et pourra entraîner des actions et poursuites judiciaires
      telles que notamment prévues par le Code de la propriété intellectuelle et
      le Code civil.
    </p>
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

h1 {
  margin-bottom: 0;
}

.subtitle {
  margin-bottom: 24px;

  font-style: italic;
}
</style>
