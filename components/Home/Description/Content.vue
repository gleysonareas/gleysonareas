<template>
  <div class="projects-container">
    <div class="projects-header">
      <h1 class="projects-title">Conheça um pouco sobre mim</h1>
      <p class="projects-subtitle">
        Sou <span>Desenvolvedor Front-end Pleno</span> altamente qualificado,
        com profundo conhecimento em <span>Javascript</span> e frameworks como
        <span>Angular, VueJS e NuxtJS</span>, além de bibliotecas populares como
        <span>RxJS, Angular Material e Vuetify</span>. Possuo
        <span>habilidades avançadas em CSS</span> e experiência em gerenciamento
        de repositório com <span>Git e Azure DevOps</span>, bem como em
        <span>testes unitários</span> com
        <span>Karma e Jasmine no Angular</span>.
      </p>
      <p class="projects-subtitle">
        Também tenho experiência em <span>desenvolvimento backend</span> com
        <span>.NET Core e Entity Framework</span>, trabalhando com bancos de
        dados relacionais como <span>SQL Server e MySQL</span>, e habilidades em
        <span>Bootstrap e Tailwind</span>. Já trabalhei com arquitetura <span>DDD e
        MVC</span> no desenvolvimento de soluções escaláveis e de alta qualidade.
      </p>
      <p class="projects-subtitle">
        Estou sempre atualizado com as últimas tendências em tecnologia e
        continuamente buscando aprender novas técnicas para oferecer as melhores
        soluções web para meus clientes.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.projects-container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: max-content;
  align-items: center;
  flex-direction: column;
  padding: 7% 0;

  .projects-header {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 768px;
    font-style: normal;
    text-align: center;

    .projects-title {
      color: #fff;
      font-weight: 700;
      font-size: 40px;
      line-height: 55px;
      text-align: center;
    }

    .projects-subtitle {
      font-weight: 400;
      font-size: 20px;
      line-height: 29px;
      color: #b8c2d0;
      span {
        color: #fff;
      }
    }
  }
}
</style>
