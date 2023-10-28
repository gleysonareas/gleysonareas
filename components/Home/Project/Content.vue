<template>
  <div class="projects-container">
    <div class="projects-header">
      <h1 class="projects-title">Conheça alguns dos meus projetos</h1>
      <h2 class="projects-subtitle">Aqui você vai encontrar alguns dos meus projetos de estudos e também alguns links de
        projetos aos quais atuei </h2>
    </div>

    <p class="category">Projetos de empresas:</p>
    <div class="projects-content">
      <div class="projects-item" v-for="(item, id) in workProjects" :key="id">
        <CardContent :data="item" />
      </div>
    </div>

    <p class="category">Projetos de estudos:</p>
    <div class="projects-content">
      <div class="projects-item" v-for="(item, id) in studyProjects" :key="id">
        <CardContent :data="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardContent from "../../../shared/components/Card/Content.vue"

const workProjects = ref<any>([
  {
    title: 'Gomeyra web site',
    description: 'Projeto escrito em angular utilizando do padrão ssr para gerar paginas estáticas além é claro a utilização de tecnologias css como flexbox e grid layout para garantir ao usuário uma boa experiencia com relação a responsividade.',
    path: 'https://www.gomeyra.com/'
  },
  {
    title: 'Liberfly web site',
    description: 'Projeto escrito em vueJs 2 utilizando nuxtJs e padrão de compilação ssr para gerar paginas estáticas alem é claro a utilização de tecnologias css como flexbox e grid layout para garantir uma boa experiencia ao usuario com relação a responsividade do projeto.',
    path: 'https://www.liberfly.com.br/'
  },
  {
    title: 'Liberfly palavras chave',
    description: 'Projeto escrito em vueJs 2 utilizando nuxtJs e padrão de compilação ssr para gerar paginas estáticas alem é claro a utilização de tecnologias css como flexbox e grid layout para garantir uma boa experiencia ao usuario com relação a responsividade do projeto.',
    path: 'https://liberfly.liberfly.com.br/'
  },
  {
    title: 'Med mundo',
    description: 'Projeto escrito em vueJs 2 utilizando nuxtJs e padrão de compilação ssr para gerar paginas estáticas alem é claro a utilização de tecnologias css como flexbox e grid layout para garantir uma boa experiencia ao usuario com relação a responsividade do projeto.',
    path: 'https://www.medmundo.com.br/'
  },
  {
    title: 'Liberfly blog',
    description: 'Projeto desenvolvido com auxilio do CMS Wordpress e plugins como o Elementor para divulgar informações relacionadas a área ou nicho de atuação da empresa.',
    path: 'https://blog.liberfly.com.br/'
  },
])

const studyProjects = ref<any>([
  {
    title: 'Glass Project',
    description: 'Um destaque para este projeto que foi o início dos meus estudos, o mesmo era feito apenas com html, css e uma ou outra linha de java script, na época baseado no curso do Gustavo Guanabara, top ainda me lembro desta fase com carinho',
    path: 'https://gleysonareas.github.io/glass-project/'
  },
  {
    title: 'Flexblog',
    description: 'Projeto html e css desenvolvido utilizando flexbox com base no curso da plataforma origamid',
    path: 'https://gleysonareas.github.io/flexblog/'
  },
  {
    title: 'Wildbeast',
    description: 'Projeto html e css desenvolvido utilizando grid layout com base no curso da plataforma origamid',
    path: 'https://gleysonareas.github.io/wildbeast/'
  },
  {
    title: 'Todo-app',
    description: 'Projeto criado com Angular 14 integrado ao localStorage, para persistir os dados',
    path: 'https://gleysonareas.github.io/todo-app/'
  },
  {
    title: 'Crud',
    description: 'Projeto básico em angular escrito com versão 9 do framework, utilizando material angular, um pouco de flex-layout, baseado no curso da coder apresentado por Leonardo leitão',
    path: 'https://gleysonareas.github.io/crud/'
  },
  {
    title: 'Finansys',
    description: 'Projeto desenvolvido com base na arquitetura master detail de reuso de código, escrito inicialmente em angular 7 e posteriormente atualizado no final do curso para a versão 11 do framework',
    path: 'https://gleysonareas.github.io/finansys/'
  },
  {
    title: 'Meat App Starter',
    description: 'Projeto desenvolvido em angular 4 e atulizado para as versões 5 e 6 ao longo do curso minitrado pela coder',
    path: 'https://gleysonareas.github.io/meat-app-starter/'
  },
  {
    title: 'Calculator',
    description: 'Projeto desenvolvido utilizando typescript com base no curso ministrado pela hcode',
    path: 'https://gleysonareas.github.io/calculator/'
  },
  {
    title: 'Monster Slayer',
    description: 'Projeto desenvolvido utilizando VueJs com base no curso ministrado pela cod3r',
    path: 'https://gleysonareas.github.io/monster-slayer/'
  },
])
</script>

<style lang="scss">
.projects-container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: max-content;
  align-items: center;
  flex-direction: column;
  padding: 7% 0;

  .category {
    font-size: 2rem;
    font-weight: 500;
    padding: 1rem;
  }

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
    }
  }

  .projects-content {
    max-width: 950px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    .projects-item {
      border: 1px solid rgba(0, 0, 0, 0.7137254902);
      border-radius: 5px;
      box-shadow: 4px 4px 4px #0000ff;
      display: flex;
      flex-direction: column;
      max-width: 290px;
      width: 100%;
      height: 400px;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      margin: 1.3%;

      .image-item {
        width: 49px;
        height: 49px;
        transition: all 2s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .image-item:hover {
        transform: rotate(360deg);
      }

      .title {
        // font-family: "Red Hat Display";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        text-align: center;
        color: #ffffff;
      }

      .subtitle {
        // font-family: "Red Hat Display";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 0px;
        text-align: center;
        color: #5effff;
      }
    }
  }
}

@media (max-width: 425px) {
  .projects-container {
    gap: 0;
    padding: 30% 0;

    .projects-header {
      max-width: 370px;

      .projects-title {
        font-size: 25px;
        line-height: 40px;
      }

      .products-subtitle {
        font-size: 16px;
        line-height: 25px;
      }
    }

    .projects-content {
      flex-direction: column;
      height: 100%;
      justify-content: space-evenly;
    }
  }
}
</style>