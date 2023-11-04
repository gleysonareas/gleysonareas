<template>
  <div class="mt-32">
    <h1 class="projects-title">Alguns Documentos & Certificados</h1>
    <h2 class="category">
      Curriculuns, clique e baixe de acordo com seu idioma e necessidade:
    </h2>
    <section class="flex flex-wrap justify-center gap-4">
      <div :class="cardStyle" v-for="(item, id) in documents" :key="id">
        <p class="title-card">{{ item.name }}</p>
        <a :class="linkStyle" :href="item.link">Cique e Baixe</a>
      </div>
    </section>
    <h2 class="category">Certificados, clique e acesse:</h2>
    <section class="flex flex-wrap justify-center gap-4">
      <div :class="cardStyle" v-for="(item, id) in certificate" :key="id">
        <p class="title-card">{{ item.name }}</p>
        <a target="_blank" :class="linkStyle" :href="item.link"
          >Cique e Acesse</a
        >
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
const cardStyle = ref<string>(
  `gap-2 document-card flex flex-col justify-center items-center w-64 h-32 bg-white rounded border-solid border-1 border-slate-950 shadow-lg shadow-blue-500/50`
);
const linkStyle = ref<string>(
  `rounded p-1 bg-blue-500 shadow-lg shadow-blue-500/50 text-neutral-200`
);
const documents = ref<any[]>([
  {
    name: "Curriculum Resumido Português",
    link: "https://drive.google.com/file/d/12cZj9sBoypjNWLVrIRsHNC4LL4jzXYAi/view?usp=sharing",
  },
  {
    name: "Curriculum Completo Português",
    link: "https://drive.google.com/file/d/12aJn5c4aHUoSXMZ-Uj3cArv03vPjDfMH/view?usp=sharing",
  },
  {
    name: "Curriculum Resumido Inglês",
    link: "https://drive.google.com/file/d/12_VhXbbSysNtbj40QG4bmPIJPefOwPsU/view?usp=sharing",
  },
  {
    name: "Curriculum Completo Inglês",
    link: "https://drive.google.com/file/d/12aBWbjLHNwApwFTWXWQLoctraHxU8Kka/view?usp=sharing",
  },
]);
const certificate = ref<any[]>([
  {
    name: "Angular 9 Essencial",
    link: "https://www.cod3r.com.br/certificates/1kjsut8fbt",
  },
  {
    name: "Devtools Pro",
    link: "https://www.udemy.com/certificate/UC-6c12f9cf-1c99-4bb9-a847-fcad355678d1/",
  },
  {
    name: "Dominando Typescript",
    link: "https://www.udemy.com/certificate/UC-213b3589-c04d-4dfe-bb7d-9b18c4564369/",
  },
  {
    name: "Angular 11 Master Details",
    link: "https://www.udemy.com/certificate/UC-112fab47-c632-44d7-8494-c8295cceca1b/",
  },
  {
    name: "CSS Flexbox",
    link: "https://origamid.com/certificate/089ca63e",
  },
  {
    name: "CSS Grid Layout",
    link: "https://origamid.com/certificate/04f41437",
  },
  {
    name: "Angular (4,5,6)",
    link: "https://www.udemy.com/certificate/UC-c6b79824-3518-48c0-ba67-d6848cb60107/",
  },
]);
</script>
<style lang="scss">
.projects-title {
  color: #fff;
  font-weight: 700;
  font-size: 40px;
  line-height: 55px;
  text-align: center;
}
.category {
  font-size: 2rem;
  font-weight: 500;
  padding: 1rem;
  text-align: center;
}

.title-card {
  font-size: 1.3rem;
  font-weight: 500;
  color: #000;
  text-align: center;
}
</style>
