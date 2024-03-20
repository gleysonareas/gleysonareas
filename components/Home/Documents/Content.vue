<template>
  <div class="documents mt-32">
    <h1>Alguns Documentos & Certificados</h1>
    <h2>Curriculos, clique e baixe de acordo com seu idioma e necessidade:</h2>
    <section class="flex flex-wrap justify-center gap-4">
      <div :class="cardStyle" v-for="(item, id) in documents" :key="id">
        <p>{{ item.name }}</p>
        <a :class="linkStyle" :href="item.link">Clique e Baixe</a>
      </div>
    </section>
    <h2>Certificados, clique e acesse:</h2>
    <section class="flex flex-wrap justify-center gap-4">
      <div :class="cardStyle" v-for="(item, id) in certificate" :key="id">
        <p>{{ item.name }}</p>
        <a target="_blank" :class="linkStyle" :href="item.link"
          >Clique e Acesse</a
        >
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
const cardStyle = ref<string>(
  `gap-2 document-card flex flex-col justify-center items-center bg-white rounded border-solid border-1 border-slate-950 shadow-lg shadow-blue-500/50`
);
const linkStyle = ref<string>(
  `document-link rounded p-2 bg-blue-500 shadow-lg shadow-blue-500/50 text-neutral-200`
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
<style scoped lang="scss">
.document-card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-top-right-radius: 5rem;
  border-bottom-left-radius: 5rem;
  height: 15rem;
  width: 10rem;
}

.document-link {
  border-top-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
}

h1 {
  color: #fff;
  font-weight: 700;
  font-size: 40px;
  line-height: 55px;
  text-align: center;
}

h2 {
  font-size: 2rem;
  font-weight: 500;
  padding: 1rem;
  text-align: center;
}

p {
  font-size: 1.3rem;
  font-weight: 500;
  color: #000;
  text-align: center;
}
</style>
